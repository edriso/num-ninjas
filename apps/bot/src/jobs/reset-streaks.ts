import { prisma, todayCairoAsUtcMidnight, logger } from '@numninjas/database';

/**
 * Reset streak_days to 0 for users who didn't complete yesterday's session.
 * Runs at 00:00 Cairo time.
 */
export async function resetStreaks() {
  const today = todayCairoAsUtcMidnight();
  // Streak resets only if the user missed yesterday entirely — not just because
  // they haven't played yet today. "yesterday" = 24h before today's Cairo midnight.
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  const usersWithStreak = await prisma.user.findMany({
    where: { streakDays: { gt: 0 } },
    select: { id: true, lastActiveAt: true, nickname: true, streakDays: true },
  });

  let resetCount = 0;

  for (const user of usersWithStreak) {
    if (!user.lastActiveAt) {
      await prisma.user.update({
        where: { id: user.id },
        data: { streakDays: 0 },
      });
      resetCount++;
      continue;
    }

    if (user.lastActiveAt < yesterday) {
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
