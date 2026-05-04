import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, computeMonthlyCategories, getMonthStart, awardBadge, logger } from '@numninjas/database';
import { config } from '../config';
import { broadcastToAccounts } from '../bot/helpers/broadcast';
import { escapeMd } from '../bot/helpers/escape-md';

/**
 * Run monthly ninja champions, award category badges.
 * Runs last day of month at 23:00 Cairo time.
 */
export async function runMonthlyRanking(bot: Bot<BotContext>) {
  const now = new Date();

  // Check if today is actually the last day of the month
  const tomorrow = new Date(now);
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  if (tomorrow.getUTCDate() !== 1) {
    // Not the last day of the month
    return { skipped: 'not-last-day' };
  }

  const monthStart = getMonthStart(now);
  const nextMonth = new Date(monthStart);
  nextMonth.setUTCMonth(nextMonth.getUTCMonth() + 1);

  const monthLabel = new Intl.DateTimeFormat('ar-EG', { month: 'long', year: 'numeric' })
    .format(monthStart);

  const { mostActive, sharpest, independent } = await computeMonthlyCategories(
    monthStart,
    nextMonth,
  );

  // Award badges
  const monthLabelEn = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(monthStart);

  const badgeEntries: { name: string; winner: typeof mostActive; metricAr: string; metricEn: string }[] = [
    { name: 'الثابت', winner: mostActive, metricAr: mostActive ? `${mostActive.activeDays} يوم نشط` : '', metricEn: mostActive ? `${mostActive.activeDays} active days` : '' },
    { name: 'العقل الحاد', winner: sharpest, metricAr: sharpest ? `${Math.round(sharpest.accuracy * 100)}% دقة` : '', metricEn: sharpest ? `${Math.round(sharpest.accuracy * 100)}% accuracy` : '' },
    { name: 'المستقل', winner: independent, metricAr: independent ? `${independent.hints} تلميح فقط` : '', metricEn: independent ? `${independent.hints} hints only` : '' },
  ];

  for (const { name: badgeName, winner, metricAr, metricEn } of badgeEntries) {
    if (!winner) continue;
    const badge = await prisma.badge.findFirst({
      where: { name: badgeName, badgeType: 'monthly_rank' },
    });
    if (badge) {
      await awardBadge(winner.userId, badge.id, monthLabel, monthStart, metricAr, {
        periodLabelEn: monthLabelEn,
        metricSummaryEn: metricEn,
      });
    }
  }

  if (!mostActive && !sharpest && !independent) {
    logger.info('No monthly ninja champions data');
    return { sent: 0, monthLabel };
  }

  // Build per-locale messages once. Pure formatting — no DB calls.
  const buildMessage = (locale: 'ar' | 'en'): string => {
    const isEn = locale === 'en';
    const label = isEn ? monthLabelEn : monthLabel;
    let m = isEn
      ? `🏆 *Ninja Champions — ${label}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
      : `🏆 *أبطال نينجا ${label}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    if (mostActive) {
      m += isEn
        ? `🔥 *Most active:* ${escapeMd(mostActive.nickname)} (${mostActive.activeDays} ${mostActive.activeDays === 1 ? 'day' : 'days'})\n`
        : `🔥 *الأكثر حضوراً:* ${escapeMd(mostActive.nickname)} (${mostActive.activeDays} يوم)\n`;
    }
    if (sharpest) {
      m += isEn
        ? `🧠 *Sharpest mind:* ${escapeMd(sharpest.nickname)} (${Math.round(sharpest.accuracy * 100)}%)\n`
        : `🧠 *الأدق إجابةً:* ${escapeMd(sharpest.nickname)} (${Math.round(sharpest.accuracy * 100)}%)\n`;
    }
    if (independent) {
      m += isEn
        ? `⚡ *Most independent:* ${escapeMd(independent.nickname)} (${independent.hints} ${independent.hints === 1 ? 'hint' : 'hints'})\n`
        : `⚡ *الأقل استعانةً:* ${escapeMd(independent.nickname)} (${independent.hints} تلميح)\n`;
    }
    return m;
  };

  const arMessage = buildMessage('ar');
  const enMessage = buildMessage('en');

  // Broadcast to all reachable accounts in their active profile's locale,
  // chunked at the Telegram rate limit (broadcastToAccounts handles parallelism).
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null }, blockedAt: null },
    include: { activeProfile: { select: { locale: true } } },
  });

  const { sent } = await broadcastToAccounts(bot, accounts, (account) =>
    account.activeProfile?.locale === 'en' ? enMessage : arMessage,
  );

  // Post to channel if configured (channel audience is Arabic).
  if (config.channelUsername) {
    try {
      await bot.api.sendMessage(config.channelUsername, arMessage, {
        parse_mode: 'Markdown',
      });
    } catch (err) {
      logger.error('Failed to post monthly ranking to channel', { error: String(err) });
    }
  }

  logger.info('Monthly ranking broadcast', { sent, monthLabel });
  return { sent, monthLabel };
}
