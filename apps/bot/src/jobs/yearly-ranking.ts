import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, computeRankings, getYearStart, awardBadge, logger } from '@numninjas/database';
import { config } from '../config';
import { handleSendError } from '../bot/helpers/send-errors';
import { escapeMd } from '../bot/helpers/escape-md';

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
      `${champion.correctCount} صح · ${champion.activeDays} يوم`,
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

  // Build per-locale messages once. Pure formatting — no DB calls.
  const buildMessage = (locale: 'ar' | 'en'): string => {
    const isEn = locale === 'en';
    let m = isEn
      ? `🏆✨ *Champions of ${yearLabel}* ✨🏆\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
      : `🏆✨ *أبطال سنة ${yearLabel}* ✨🏆\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    if (champion) {
      m += isEn
        ? `🏆 *Champion of the year:* ${escapeMd(champion.nickname)}\n`
        : `🏆 *بطل العام:* ${escapeMd(champion.nickname)}\n`;
    }

    const medals = ['🥇', '🥈', '🥉'];
    m += isEn ? '\n*Overall ranking:*\n' : '\n*الترتيب العام:*\n';
    const correctLabel = isEn ? 'correct' : 'صح';
    const dayLabel = isEn ? 'days' : 'يوم';
    for (const entry of rankings.slice(0, 10)) {
      const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
      m += `${medal} ${escapeMd(entry.nickname)} — ${entry.correctCount} ${correctLabel} · ${entry.activeDays} ${dayLabel}\n`;
    }
    return m;
  };

  const arMessage = buildMessage('ar');
  const enMessage = buildMessage('en');

  // Broadcast to all reachable accounts in their active profile's locale.
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null }, blockedAt: null },
    include: { activeProfile: { select: { locale: true } } },
  });

  let sent = 0;
  for (const account of accounts) {
    const locale = account.activeProfile?.locale === 'en' ? 'en' : 'ar';
    const message = locale === 'en' ? enMessage : arMessage;
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

  // Post to channel if configured (channel audience is Arabic).
  if (config.channelUsername) {
    try {
      await bot.api.sendMessage(config.channelUsername, arMessage, {
        parse_mode: 'Markdown',
      });
    } catch (err) {
      logger.error('Failed to post yearly ranking to channel', { error: String(err) });
    }
  }

  logger.info('Yearly ranking broadcast', { sent, yearLabel });
}
