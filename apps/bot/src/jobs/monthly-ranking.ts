import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, computeMonthlyCategories, getMonthStart, awardBadge, logger } from '@numninjas/database';
import { config } from '../config';

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
    return;
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

  // Build and broadcast ninja champions message
  let message = `🏆 *أبطال نينجا ${monthLabel}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  if (mostActive) {
    message += `🔥 *الأكثر حضوراً:* ${mostActive.nickname} (${mostActive.activeDays} يوم)\n`;
  }
  if (sharpest) {
    message += `🧠 *الأدق إجابةً:* ${sharpest.nickname} (${Math.round(sharpest.accuracy * 100)}%)\n`;
  }
  if (independent) {
    message += `⚡ *الأقل استعانةً:* ${independent.nickname} (${independent.hints} تلميح)\n`;
  }

  if (!mostActive && !sharpest && !independent) {
    logger.info('No monthly ninja champions data');
    return;
  }

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

  // Post to channel if configured
  if (config.channelUsername) {
    try {
      await bot.api.sendMessage(config.channelUsername, message, {
        parse_mode: 'Markdown',
      });
    } catch (err) {
      logger.error('Failed to post monthly ranking to channel', { error: String(err) });
    }
  }

  logger.info('Monthly ranking broadcast', { sent, monthLabel });
}
