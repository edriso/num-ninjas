import prisma from '../client.js';
import { logger } from '../utils/logger.js';

/**
 * Award a badge to a user (idempotent via unique constraint).
 */
export async function awardBadge(
  userId: number,
  badgeId: number,
  periodLabel: string,
  periodStart: Date,
  metricSummary?: string,
) {
  try {
    await prisma.userBadge.upsert({
      where: {
        user_badge_period: { userId, badgeId, periodStart },
      },
      create: { userId, badgeId, periodLabel, periodStart, metricSummary },
      update: {},
    });
    logger.info('Badge awarded', { userId, badgeId, periodLabel });
  } catch (error) {
    logger.error('Failed to award badge', { userId, badgeId, error: String(error) });
  }
}

/**
 * Check and award achievement badges after each attempt.
 * Called after recording an attempt.
 */
export async function checkAchievements(userId: number) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  // Streak milestones
  const streakBadges: { days: number; badgeName: string }[] = [
    { days: 7, badgeName: 'النينجا المداوم' },
    { days: 14, badgeName: 'أسبوعان بلا توقف' },
    { days: 30, badgeName: 'شهر كامل' },
  ];

  for (const { days, badgeName } of streakBadges) {
    if (user.streakDays >= days) {
      const badge = await prisma.badge.findFirst({
        where: { name: badgeName, badgeType: 'achievement' },
      });
      if (badge) {
        await awardBadge(
          userId,
          badge.id,
          `سلسلة ${days} يوم`,
          today,
          `${user.streakDays} يوم متواصل`,
        );
      }
    }
  }

  // Total correct milestone
  const totalCorrect = await prisma.questionAttempt.count({
    where: { userId, isCorrect: true },
  });

  if (totalCorrect >= 100) {
    const badge = await prisma.badge.findFirst({
      where: { name: 'مئة سؤال', badgeType: 'achievement' },
    });
    if (badge) {
      await awardBadge(
        userId,
        badge.id,
        '100 إجابة صحيحة',
        today,
        `${totalCorrect} إجابة صحيحة`,
      );
    }
  }
}

/**
 * Get all badges earned by a user.
 */
export async function getUserBadges(userId: number) {
  return prisma.userBadge.findMany({
    where: { userId },
    include: { badge: true },
    orderBy: { earnedAt: 'desc' },
  });
}
