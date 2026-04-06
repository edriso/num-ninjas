import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session.js';
import { prisma, computeMonthlyCategories, getMonthStart, awardBadge, logger } from '@numninja/database';

/**
 * Run monthly hall of fame, award category badges.
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
  const badgeMap: Record<string, typeof mostActive> = {
    'الثابت': mostActive,
    'العقل الحاد': sharpest,
    'المستقل': independent,
  };

  for (const [badgeName, winner] of Object.entries(badgeMap)) {
    if (!winner) continue;
    const badge = await prisma.badge.findFirst({
      where: { name: badgeName, badgeType: 'monthly_rank' },
    });
    if (badge) {
      await awardBadge(winner.userId, badge.id, monthLabel, monthStart);
    }
  }

  // Build and broadcast hall of fame message
  let message = `🏛️ *قاعة شهرة ${monthLabel}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

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
    logger.info('No monthly hall of fame data');
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

  logger.info('Monthly ranking broadcast', { sent, monthLabel });
}
