import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, todayCairoAsUtcMidnight, getSettingBool, getSettingInt, logger } from '@numninja/database';

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

  // Get all accounts with active profiles
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null } },
    include: { activeProfile: true },
  });

  let sent = 0;

  for (const account of accounts) {
    if (!account.activeProfile) continue;

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

    try {
      const questionsPerDay = await getSettingInt('questions_per_day');

      if (!session || session.questionsAnswered === 0) {
        // Hasn't started
        await bot.api.sendMessage(
          chatId,
          `👋 يا *${name}*! لسه معملتش أسئلة النهارده\n\n` +
          `🥷 النينجا الحقيقي بيتمرن كل يوم!\n` +
          `ابعت /start عشان تبدأ 💪`,
          { parse_mode: 'Markdown' },
        );
      } else {
        // Started but didn't finish
        const remaining = questionsPerDay - session.questionsAnswered;
        await bot.api.sendMessage(
          chatId,
          `💪 يا *${name}*! فاضلك ${remaining} سؤال بس!\n\n` +
          `كمّل عشان تحافظ على السلسلة 🔥\n` +
          `ابعت /start عشان تكمّل`,
          { parse_mode: 'Markdown' },
        );
      }
      sent++;
    } catch (error) {
      logger.warn('Failed to send reminder', {
        telegramId: Number(account.telegramId),
        error: String(error),
      });
    }
  }

  logger.info('Reminders sent', { sent, total: accounts.length });
}
