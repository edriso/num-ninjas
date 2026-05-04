import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, getOrCreateTodaySession, getNextQuestion, markQuestionSent, logger, isSleeping } from '@numninjas/database';
import { prepareScheduledQuestions } from './prepare-questions';

/**
 * Send the first daily question (position=1) to all active users.
 * Runs at 14:30 Cairo time.
 */
export async function sendFirstQuestion(bot: Bot<BotContext>) {
  // Guard: if prepare-questions was skipped (e.g. DST spring-forward drops the 01:30 cron),
  // prepare now before sending. prepareScheduledQuestions() is idempotent — it skips users
  // who already have questions for today.
  await prepareScheduledQuestions();

  // Get all accounts with an active profile
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null } },
    include: { activeProfile: true },
  });

  const now = new Date();
  let sent = 0;
  let failed = 0;
  let skippedSleeping = 0;

  for (const account of accounts) {
    if (!account.activeProfile) continue;

    // Sleep mode: skip users who've been idle too long. They wake up by interacting.
    if (isSleeping({
      lastActiveAt: account.activeProfile.lastActiveAt,
      createdAt: account.activeProfile.createdAt,
      now,
    })) {
      skippedSleeping++;
      continue;
    }

    try {
      // Check if already started today
      const session = await getOrCreateTodaySession(account.activeProfile.id);
      if (session.questionsSent > 0) continue; // Already got today's first question

      // Create a minimal context-like object to send messages
      // We use bot.api directly since we're not in a handler
      const chatId = Number(account.telegramId);
      const userId = account.activeProfile.id;
      const levelId = account.activeProfile.levelId;
      const locale = account.activeProfile.locale || 'ar';

      const next = await getNextQuestion(userId, levelId);

      if (!next) continue;

      const { question, position, totalQuestions } = next;
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { level: true },
      });

      // Build message
      const questionLabel = locale === 'en' ? 'Question' : 'سؤال';
      const topicName = (locale === 'en' && question.topic.nameEn) ? question.topic.nameEn : question.topic.name;
      let text = `${user?.level.iconEmoji || '🥷'} *${questionLabel} ${position}/${totalQuestions}* — ${topicName}\n\n`;
      if (question.realLifeContext) text += `${question.realLifeContext}\n\n`;
      text += `❓ ${question.questionText}`;

      if (question.questionType === 'mcq') {
        const { buildMcqKeyboard } = await import('../bot/keyboards/mcq');
        const keyboard = buildMcqKeyboard(question.id, question.options, !!question.hintText, locale);
        await bot.api.sendMessage(chatId, text, {
          parse_mode: 'Markdown',
          reply_markup: keyboard,
        });
      } else {
        const { buildHintKeyboard } = await import('../bot/keyboards/mcq');
        const markup = question.hintText ? { reply_markup: buildHintKeyboard(question.id, locale) } : {};
        const writeAnswer = locale === 'en' ? '✏️ Type your answer:' : '✏️ اكتب إجابتك:';
        await bot.api.sendMessage(chatId, text + '\n\n' + writeAnswer, {
          parse_mode: 'Markdown',
          ...markup,
        });
      }

      await markQuestionSent(session.id);
      sent++;
    } catch (error) {
      const errStr = String(error);
      if (
        errStr.includes('bot was blocked') ||
        errStr.includes('user is deactivated') ||
        errStr.includes('chat not found')
      ) {
        logger.warn('User unreachable, skipping', {
          telegramId: Number(account.telegramId),
        });
      } else {
        logger.error('Failed to send first question', {
          telegramId: Number(account.telegramId),
          error: errStr,
        });
      }
      failed++;
    }
  }

  logger.info('First question sent', { sent, failed, skippedSleeping, total: accounts.length });
}
