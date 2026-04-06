import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, getWeekStart, getSettingInt, logger } from '@numninja/database';

/**
 * Send weekly progress reports to parents.
 * Runs Sunday at 22:00 Cairo time (before weekly ranking at 23:00).
 *
 * For each account with profiles, sends a summary of each child's
 * weekly activity: questions answered, accuracy, streak, and points.
 */
export async function sendParentReports(bot: Bot<BotContext>) {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const pointsPerCorrect = await getSettingInt('points_per_correct');

  // Get all accounts that have at least one profile
  const accounts = await prisma.account.findMany({
    where: { users: { some: {} } },
    include: {
      users: { include: { level: true }, orderBy: { createdAt: 'asc' } },
    },
  });

  if (accounts.length === 0) {
    logger.info('[CRON] No accounts with profiles for parent report');
    return;
  }

  let sent = 0;

  for (const account of accounts) {
    try {
      const profileSummaries: string[] = [];

      for (const user of account.users) {
        const attempts = await prisma.questionAttempt.findMany({
          where: { userId: user.id, answeredAt: { gte: weekStart } },
        });

        const total = attempts.length;
        const correct = attempts.filter((a) => a.isCorrect).length;
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
        const pointsEarned = correct * pointsPerCorrect;

        // Skip profiles with no activity this week
        if (total === 0) continue;

        const levelEmoji = user.level.iconEmoji || '🥋';
        const streakStar = user.streakDays >= 7 ? ' ⭐' : '';

        profileSummaries.push(
          `${levelEmoji} *${user.nickname}:*\n` +
            `✅ أجاب على ${total} سؤال (${correct} صحيحة — ${accuracy}%)\n` +
            `🔥 السلسلة: ${user.streakDays} أيام${streakStar}\n` +
            `💎 النقاط: +${pointsEarned} نقطة`,
        );
      }

      // Skip if none of the profiles had activity
      if (profileSummaries.length === 0) continue;

      const message =
        `📊 *تقرير الأسبوع*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        profileSummaries.join('\n\n') +
        `\n\nشجّع أبناءك على مواصلة التحدي! 💪`;

      await bot.api.sendMessage(Number(account.telegramId), message, {
        parse_mode: 'Markdown',
      });
      sent++;
    } catch (err) {
      // Skip unreachable users (blocked bot, deactivated account, etc.)
      logger.warn('[CRON] Failed to send parent report', {
        telegramId: String(account.telegramId),
        error: String(err),
      });
    }
  }

  logger.info('[CRON] Parent reports sent', { sent, total: accounts.length });
}
