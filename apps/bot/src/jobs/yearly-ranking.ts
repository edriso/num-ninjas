import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, computeRankings, getYearStart, awardBadge, logger } from '@numninjas/database';
import { config } from '../config';

/**
 * Run yearly ninja champions, award yearly badges.
 * Runs December 31 at 23:00 Cairo time.
 */
export async function runYearlyRanking(bot: Bot<BotContext>) {
  const now = new Date();
  const yearStart = getYearStart(now);
  const yearEnd = new Date(yearStart);
  yearEnd.setUTCFullYear(yearEnd.getUTCFullYear() + 1);

  const yearLabel = `${now.getUTCFullYear()}`;

  const rankings = await computeRankings(yearStart, yearEnd);
  if (rankings.length === 0) {
    logger.info('No yearly rankings');
    return;
  }

  // Award yearly badges
  const yearlyBadges = await prisma.badge.findMany({
    where: { badgeType: 'yearly_rank' },
  });

  // Champion = highest points overall (rank 1)
  const champion = rankings[0];
  const championBadge = yearlyBadges.find((b) => b.name === 'أسطورة العام');
  if (champion && championBadge) {
    await awardBadge(champion.userId, championBadge.id, yearLabel, yearStart,
      `${champion.correctCount} صحيحة · ${champion.activeDays} يوم`,
      { periodLabelEn: yearLabel, metricSummaryEn: `${champion.correctCount} correct · ${champion.activeDays} days` },
    );
  }

  // Smartest = highest accuracy (from all users with enough attempts)
  const smartestBadge = yearlyBadges.find((b) => b.name === 'عقل العام');
  if (smartestBadge && rankings.length > 0) {
    // Sort by accuracy for smartest
    const byAccuracy = [...rankings]
      .filter((r) => r.correctCount + r.wrongCount >= 10)
      .sort((a, b) => {
        const accA = a.correctCount / (a.correctCount + a.wrongCount);
        const accB = b.correctCount / (b.correctCount + b.wrongCount);
        return accB - accA;
      });

    if (byAccuracy.length > 0) {
      const s = byAccuracy[0];
      const acc = Math.round((s.correctCount / (s.correctCount + s.wrongCount)) * 100);
      await awardBadge(s.userId, smartestBadge.id, yearLabel, yearStart,
        `${acc}% دقة`,
        { periodLabelEn: yearLabel, metricSummaryEn: `${acc}% accuracy` },
      );
    }
  }

  // Build message
  let message = `🏆✨ *أبطال سنة ${yearLabel}* ✨🏆\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  if (champion) {
    message += `🏆 *بطل العام:* ${champion.nickname}\n`;
  }

  const medals = ['🥇', '🥈', '🥉'];
  message += '\n*الترتيب العام:*\n';
  for (const entry of rankings.slice(0, 10)) {
    const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
    message += `${medal} ${entry.nickname} — ${entry.correctCount} صحيحة · ${entry.activeDays} يوم\n`;
  }

  // Broadcast
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

  if (config.channelUsername) {
    try {
      await bot.api.sendMessage(config.channelUsername, message, {
        parse_mode: 'Markdown',
      });
    } catch (err) {
      logger.error('Failed to post yearly ranking to channel', { error: String(err) });
    }
  }

  logger.info('Yearly ranking broadcast', { sent, yearLabel });
}
