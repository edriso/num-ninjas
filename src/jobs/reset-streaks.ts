import prisma from '../db/prisma.js';
import { todayCairoAsUtcMidnight } from '../utils/cairo-time.js';
import { logger } from '../utils/logger.js';

/**
 * Reset streak_days to 0 for users who didn't complete yesterday's session.
 * Runs at 00:00 Cairo time.
 */
export async function resetStreaks() {
  const today = todayCairoAsUtcMidnight();

  // Find users with active streaks who didn't play yesterday
  const usersWithStreak = await prisma.user.findMany({
    where: { streakDays: { gt: 0 } },
    select: { id: true, lastActiveAt: true, nickname: true, streakDays: true },
  });

  let resetCount = 0;

  for (const user of usersWithStreak) {
    if (!user.lastActiveAt) {
      // Never active but somehow has a streak — reset
      await prisma.user.update({
        where: { id: user.id },
        data: { streakDays: 0 },
      });
      resetCount++;
      continue;
    }

    // Check if last active was before today (Cairo time)
    // lastActiveAt is stored as UTC, today is midnight UTC of Cairo date
    if (user.lastActiveAt < today) {
      await prisma.user.update({
        where: { id: user.id },
        data: { streakDays: 0 },
      });
      resetCount++;
      logger.debug(`Streak reset for ${user.nickname} (was ${user.streakDays} days)`);
    }
  }

  logger.info('Streak reset complete', { resetCount, totalChecked: usersWithStreak.length });
}
