import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, getOrCreateTodaySession, getNextQuestion, markQuestionSent, logger } from '@numninja/database';
import { sendQuestionToUser } from '../bot/handlers/question';

/**
 * Send the first daily question (position=1) to all active users.
 * Runs at 14:30 Cairo time.
 */
export async function sendFirstQuestion(bot: Bot<BotContext>) {
  // Get all accounts with an active profile
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null } },
    include: { activeProfile: true },
  });

  let sent = 0;
  let failed = 0;

  for (const account of accounts) {
    if (!account.activeProfile) continue;

    try {
      // Check if already started today
      const session = await getOrCreateTodaySession(account.activeProfile.id);
      if (session.questionsSent > 0) continue; // Already got today's first question

      // Create a minimal context-like object to send messages
      // We use bot.api directly since we're not in a handler
      const chatId = Number(account.telegramId);
      const userId = account.activeProfile.id;
      const levelId = account.activeProfile.levelId;

      const next = await getNextQuestion(userId, levelId);

      if (!next) continue;

      const { question, position, totalQuestions } = next;
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { level: true },
      });

      // Build message
      let text = `${user?.level.iconEmoji || '🥋'} *سؤال ${position}/${totalQuestions}* — ${question.topic.name}\n\n`;
      if (question.realLifeContext) text += `${question.realLifeContext}\n\n`;
      text += `❓ ${question.questionText}`;

      if (question.questionType === 'mcq') {
        const { buildMcqKeyboard } = await import('../bot/keyboards/mcq');
        const keyboard = buildMcqKeyboard(question.id, question.options, !!question.hintText);
        await bot.api.sendMessage(chatId, text, {
          parse_mode: 'Markdown',
          reply_markup: keyboard,
        });
      } else {
        const { buildHintKeyboard } = await import('../bot/keyboards/mcq');
        const markup = question.hintText ? { reply_markup: buildHintKeyboard(question.id) } : {};
        await bot.api.sendMessage(chatId, text + '\n\n✏️ اكتب إجابتك:', {
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

  logger.info('First question sent', { sent, failed, total: accounts.length });
}
