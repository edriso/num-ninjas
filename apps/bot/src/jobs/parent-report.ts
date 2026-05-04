import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import {
  prisma,
  getWeekStart,
  getSettingInt,
  getTopicStrengths,
  logger,
} from '@numninjas/database';
import { handleSendError } from '../bot/helpers/send-errors';
import { escapeMd } from '../bot/helpers/escape-md';

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
    where: { users: { some: {} }, blockedAt: null },
    include: {
      users: { include: { level: true }, orderBy: { createdAt: 'asc' } },
      activeProfile: { select: { locale: true } },
    },
  });

  if (accounts.length === 0) {
    logger.info('[CRON] No accounts with profiles for parent report');
    return { sent: 0, total: 0 };
  }

  let sent = 0;

  for (const account of accounts) {
    try {
      const profileSummaries: string[] = [];

      // The framing (header, footer) uses the active profile's locale — that
      // matches the most recent context the parent saw. Each kid's section
      // below uses THEIR own locale, so a parent with an AR kid and an EN kid
      // gets each summary in the right language.
      const outerLocale = account.activeProfile?.locale || account.users[0]?.locale || 'ar';
      const outerIsEn = outerLocale === 'en';

      for (const user of account.users) {
        const isEn = user.locale === 'en';
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
          .map((s) => (isEn ? s.topicNameEn || s.topicName : s.topicName));

        const safeNickname = escapeMd(user.nickname);
        let summary = isEn
          ? `${levelEmoji} *${safeNickname}:*\n` +
            `✅ Answered ${total} questions (${correct} correct, ${accuracy}%)\n` +
            `🔥 Streak: ${user.streakDays} days${streakStar}\n` +
            `💎 Points: +${pointsEarned}`
          : `${levelEmoji} *${safeNickname}:*\n` +
            `✅ أجاب على ${total} سؤال (${correct} صح، ${accuracy}%)\n` +
            `🔥 السلسلة: ${user.streakDays} أيام${streakStar}\n` +
            `💎 النقاط: +${pointsEarned} نقطة`;

        if (weakTopics.length > 0) {
          const separator = isEn ? ', ' : '، ';
          const focusLabel = isEn ? '📚 Next week focus' : '📚 تركيز الأسبوع القادم';
          summary += `\n${focusLabel}: ${weakTopics.join(separator)}`;
        }

        profileSummaries.push(summary);
      }

      if (profileSummaries.length === 0) continue;

      const message = outerIsEn
        ? `📊 *Weekly Report*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
          profileSummaries.join('\n\n') +
          `\n\nEncourage your kids to keep going! 💪`
        : `📊 *تقرير الأسبوع*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
          profileSummaries.join('\n\n') +
          `\n\nشجّع أبناءك على مواصلة التحدي! 💪`;

      await bot.api.sendMessage(Number(account.telegramId), message, {
        parse_mode: 'Markdown',
      });
      sent++;
    } catch (err) {
      const { blocked } = await handleSendError(err, account.telegramId);
      if (!blocked) {
        logger.warn('[CRON] Failed to send parent report', {
          telegramId: String(account.telegramId),
          error: String(err),
        });
      }
    }
  }

  logger.info('[CRON] Parent reports sent', { sent, total: accounts.length });
  return { sent, total: accounts.length };
}
