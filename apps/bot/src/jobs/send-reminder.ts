import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, todayCairoAsUtcMidnight, getSettingBool, getSettingInt, logger, isSleeping } from '@numninjas/database';

/**
 * Don't fire the daily-session reminder if we already sent an engagement nudge
 * within this many hours. Prevents stacking the 18:00 nudge and 19:30 reminder
 * on the same user on the same day.
 */
const NUDGE_COOLDOWN_HOURS = 18;

/**
 * Send evening reminder to users who haven't completed today's session.
 * Runs at 19:30 Cairo time.
 */
export async function sendReminder(bot: Bot<BotContext>) {
  const enabled = await getSettingBool('reminder_enabled');
  if (!enabled) {
    logger.info('Reminders disabled, skipping');
    return;
  }

  const today = todayCairoAsUtcMidnight();
  const now = new Date();
  const cooldownMs = NUDGE_COOLDOWN_HOURS * 60 * 60 * 1000;

  // Get all accounts with active profiles
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null } },
    include: { activeProfile: true },
  });

  let sent = 0;
  let skippedNudged = 0;
  let skippedSleeping = 0;

  for (const account of accounts) {
    if (!account.activeProfile) continue;

    // Skip sleeping users — we're not sending them daily questions anyway,
    // so a "you haven't answered today's questions" reminder makes no sense.
    if (isSleeping({
      lastActiveAt: account.activeProfile.lastActiveAt,
      createdAt: account.activeProfile.createdAt,
      now,
    })) {
      skippedSleeping++;
      continue;
    }

    // Skip if we already sent an engagement nudge today (avoid double-tap).
    const lastNudgeAt = account.activeProfile.lastNudgeAt;
    if (lastNudgeAt && now.getTime() - lastNudgeAt.getTime() < cooldownMs) {
      skippedNudged++;
      continue;
    }

    const session = await prisma.studySession.findUnique({
      where: {
        user_session_date: {
          userId: account.activeProfile.id,
          sessionDate: today,
        },
      },
    });

    // Skip if session complete
    if (session?.isComplete) continue;

    const chatId = Number(account.telegramId);
    const name = account.activeProfile.nickname;
    const locale = account.activeProfile.locale || 'ar';

    try {
      const questionsPerDay = await getSettingInt('questions_per_day');

      if (!session || session.questionsAnswered === 0) {
        // Hasn't started
        const text = locale === 'en'
          ? `👋 Hey *${name}*! You haven't answered today's questions yet\n\n` +
            `🥷 A true ninja trains every day!\n` +
            `Send /start to begin 💪`
          : `👋 يا *${name}*! لم تجب على أسئلة اليوم بعد\n\n` +
            `🥷 النينجا الحقيقي يتدرب كل يوم!\n` +
            `أرسل /start لتبدأ 💪`;
        await bot.api.sendMessage(chatId, text, { parse_mode: 'Markdown' });
      } else {
        // Started but didn't finish
        const remaining = questionsPerDay - session.questionsAnswered;
        const questionWord = locale === 'en'
          ? (remaining === 1 ? 'question' : 'questions')
          : 'سؤال';
        const text = locale === 'en'
          ? `💪 Hey *${name}*! You only have ${remaining} ${questionWord} left!\n\n` +
            `Finish to keep your streak going 🔥\n` +
            `Send /start to continue`
          : `💪 يا *${name}*! بقي لك ${remaining} ${questionWord} فقط!\n\n` +
            `أكمل للحفاظ على سلسلتك 🔥\n` +
            `أرسل /start لتكمل`;
        await bot.api.sendMessage(chatId, text, { parse_mode: 'Markdown' });
      }
      sent++;
    } catch (error) {
      logger.warn('Failed to send reminder', {
        telegramId: Number(account.telegramId),
        error: String(error),
      });
    }
  }

  logger.info('Reminders sent', { sent, skippedNudged, skippedSleeping, total: accounts.length });
}
