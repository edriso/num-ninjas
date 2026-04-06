import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, computeRankings, getWeekStart, awardBadge, logger } from '@numninja/database';

/**
 * Run weekly ranking, award top-3 badges, and broadcast leaderboard.
 * Runs Sunday at 23:00 Cairo time.
 */
export async function runWeeklyRanking(bot: Bot<BotContext>) {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekEnd.getUTCDate() + 7);

  const rankings = await computeRankings(weekStart, weekEnd);

  if (rankings.length === 0) {
    logger.info('No weekly rankings to process (no activity)');
    return;
  }

  // Award badges to top 3 (ties allowed)
  const weekLabel = `أسبوع ${weekStart.toISOString().split('T')[0]}`;
  const rankBadges = await prisma.badge.findMany({
    where: { badgeType: 'weekly_rank' },
    orderBy: { rankPosition: 'asc' },
  });

  for (const entry of rankings) {
    if (entry.rank > 3) break;
    const badge = rankBadges.find((b) => b.rankPosition === entry.rank);
    if (badge) {
      await awardBadge(
        entry.userId,
        badge.id,
        weekLabel,
        weekStart,
        `${entry.correctCount} صحيحة · ${entry.wrongCount} خطأ · ${entry.hintCount} تلميح`,
      );
    }
  }

  // Build leaderboard message
  const medals = ['🥇', '🥈', '🥉'];
  let message = `🏆 *ترتيب الأسبوع*\n${weekLabel}\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  for (const entry of rankings.slice(0, 10)) {
    const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
    message += `${medal} *${entry.nickname}* — ${entry.correctCount} صحيحة`;
    if (entry.rank <= 3) {
      message += ` · ${entry.activeDays} يوم`;
    }
    message += '\n';
  }

  // Broadcast to all accounts
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null } },
  });

  let sent = 0;
  for (const account of accounts) {
    try {
      await bot.api.sendMessage(Number(account.telegramId), message, {
        parse_mode: 'Markdown',
      });
      sent++;
    } catch {
      // Skip unreachable users
    }
  }

  logger.info('Weekly ranking broadcast', { sent, rankings: rankings.length });
}
