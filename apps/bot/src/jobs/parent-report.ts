import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, getWeekStart, getSettingInt, getTopicStrengths, logger } from '@numninjas/database';

/**
 * Send weekly progress reports to parents.
 * Runs Sunday at 22:00 Cairo time (before weekly ranking at 23:00).
 *
 * For each account with profiles, sends a summary of each child's
 * weekly activity: questions answered, accuracy, streak, points,
 * and what topics they'll focus on next week (weak topics).
 */
export async function sendParentReports(bot: Bot<BotContext>) {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const pointsPerCorrect = await getSettingInt('points_per_correct');

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

        if (total === 0) continue;

        const levelEmoji = user.level.iconEmoji || '🥷';
        const streakStar = user.streakDays >= 7 ? ' ⭐' : '';

        // Find weak topics for "next week focus" line
        const strengths = await getTopicStrengths(user.id, user.levelId);
        const weakTopics = strengths
          .filter((s) => s.totalAttempts > 0 && s.accuracy < 0.7)
          .sort((a, b) => a.accuracy - b.accuracy)
          .slice(0, 2)
          .map((s) => s.topicName);

        let summary =
          `${levelEmoji} *${user.nickname}:*\n` +
          `✅ أجاب على ${total} سؤال (${correct} صحيحة — ${accuracy}%)\n` +
          `🔥 السلسلة: ${user.streakDays} أيام${streakStar}\n` +
          `💎 النقاط: +${pointsEarned} نقطة`;

        if (weakTopics.length > 0) {
          summary += `\n📚 تركيز الأسبوع القادم: ${weakTopics.join('، ')}`;
        }

        profileSummaries.push(summary);
      }

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
      logger.warn('[CRON] Failed to send parent report', {
        telegramId: String(account.telegramId),
        error: String(err),
      });
    }
  }

  logger.info('[CRON] Parent reports sent', { sent, total: accounts.length });
}
