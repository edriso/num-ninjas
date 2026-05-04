import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, computeRankings, getWeekStart, awardBadge, logger } from '@numninjas/database';
import { config } from '../config';
import { handleSendError } from '../bot/helpers/send-errors';
import { escapeMd } from '../bot/helpers/escape-md';

/**
 * Run weekly ranking per level, award top-3 badges, and broadcast.
 * Each level has its own leaderboard — Level 1 kids compete with Level 1 kids.
 * Runs Sunday at 23:00 Cairo time.
 */
export async function runWeeklyRanking(bot: Bot<BotContext>) {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekEnd.getUTCDate() + 7);

  const levels = await prisma.level.findMany({ orderBy: { rankOrder: 'asc' } });
  const weekLabel = `أسبوع ${weekStart.toISOString().split('T')[0]}`;
  const rankBadges = await prisma.badge.findMany({
    where: { badgeType: 'weekly_rank' },
    orderBy: { rankPosition: 'asc' },
  });

  let totalBadges = 0;
  const allMessages: string[] = [];

  for (const level of levels) {
    const rankings = await computeRankings(weekStart, weekEnd, level.id, 'accuracy');
    if (rankings.length === 0) continue;

    // Award badges to top 3 in this level
    for (const entry of rankings) {
      if (entry.rank > 3) break;
      const badge = rankBadges.find((b) => b.rankPosition === entry.rank);
      if (badge) {
        await awardBadge(
          entry.userId,
          badge.id,
          `${weekLabel} — ${level.name}`,
          weekStart,
          `${entry.correctCount} صح · ${entry.wrongCount} خطأ · ${entry.hintCount} تلميح`,
          {
            periodLabelEn: `Week of ${weekStart.toISOString().split('T')[0]} — ${level.nameEn || level.name}`,
            metricSummaryEn: `${entry.correctCount} correct · ${entry.wrongCount} wrong · ${entry.hintCount} hints`,
          },
        );
        totalBadges++;
      }
    }

    // Build per-level leaderboard section
    const medals = ['🥇', '🥈', '🥉'];
    let section = `${level.iconEmoji || '🥷'} *${level.name}*\n`;
    for (const entry of rankings.slice(0, 5)) {
      const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
      section += `${medal} *${escapeMd(entry.nickname)}* — ${entry.correctCount} صح`;
      if (entry.rank <= 3) section += ` · ${entry.activeDays} يوم`;
      section += '\n';
    }
    allMessages.push(section);
  }

  if (allMessages.length === 0) {
    logger.info('No weekly rankings to process (no activity)');
    return;
  }

  // Build full broadcast message
  const message =
    `🏆 *ترتيب الأسبوع*\n${weekLabel}\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    allMessages.join('\n');

  // Broadcast to all reachable accounts (skip users who blocked the bot)
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null }, blockedAt: null },
  });

  let sent = 0;
  for (const account of accounts) {
    try {
      await bot.api.sendMessage(Number(account.telegramId), message, {
        parse_mode: 'Markdown',
      });
      sent++;
    } catch (err) {
      // Self-heal blocked_at if the user has blocked us; otherwise just skip.
      await handleSendError(err, account.telegramId);
    }
  }

  // Post to channel if configured
  if (config.channelUsername) {
    try {
      await bot.api.sendMessage(config.channelUsername, message, {
        parse_mode: 'Markdown',
      });
      logger.info('Weekly ranking posted to channel', { channel: config.channelUsername });
    } catch (err) {
      logger.error('Failed to post weekly ranking to channel', { error: String(err) });
    }
  }

  logger.info('Weekly ranking broadcast', { sent, badges: totalBadges });
}
