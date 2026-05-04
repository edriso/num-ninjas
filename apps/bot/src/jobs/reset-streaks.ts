import { prisma, todayCairoAsUtcMidnight, logger } from '@numninjas/database';

/**
 * Reset streak_days to 0 for users who didn't complete yesterday's session.
 * Runs at 00:00 Cairo time.
 *
 * The reset condition: streak > 0 AND (lastActiveAt is null OR lastActiveAt
 * is older than yesterday Cairo midnight). One updateMany covers both cases
 * via an OR — one query instead of N+1, scales linearly with no extra DB
 * round-trips even if every active user qualifies.
 */
export async function resetStreaks() {
  const today = todayCairoAsUtcMidnight();
  // "yesterday" = 24h before today's Cairo midnight. A kid whose last activity
  // was BEFORE this point hasn't played yesterday at all → reset.
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  const result = await prisma.user.updateMany({
    where: {
      streakDays: { gt: 0 },
      OR: [{ lastActiveAt: null }, { lastActiveAt: { lt: yesterday } }],
    },
    data: { streakDays: 0 },
  });

  logger.info('Streak reset complete', { resetCount: result.count });
  return { resetCount: result.count };
}
