import prisma from '../client';
import { cairoDateString } from '../utils/cairo-time';

/**
 * Streak service — daily-completion streak tracking.
 *
 * The streak is "how many consecutive Cairo-days, ending today, the kid has
 * completed their daily session." It increments by 1 each day the kid
 * finishes; resets to 1 if they skip a day.
 *
 * Two crons cooperate:
 *   * The 00:00 Cairo `resetStreaks` cron resets `streakDays = 0` for users
 *     whose `lastActiveAt` falls before yesterday Cairo. Catches passive churn.
 *   * `updateStreakOnComplete` (this file) is called when the kid finishes
 *     today's session. It computes the new streak from `lastActiveAt`, so it
 *     stays correct even if the reset cron hasn't run yet (defense in depth).
 *
 * The pure `computeNextStreak` is exported separately so we can unit-test the
 * logic without a database.
 */

export interface NextStreakInput {
  /** Last time the user finished a session (UTC). */
  lastActiveAt: Date | null;
  /** Streak as of last update. */
  currentStreak: number;
  /** Now, defaults to new Date(). Overridable for tests. */
  now?: Date;
}

/**
 * Pure function: compute the streak count after the user completes today's
 * session. Same inputs always produce the same output.
 *
 * Rules (using Cairo calendar dates):
 *   * Last active was YESTERDAY → currentStreak + 1 (continued the run)
 *   * Last active was TODAY → currentStreak (already counted; idempotent)
 *   * Last active was OLDER than yesterday, or never → 1 (fresh streak)
 */
export function computeNextStreak(input: NextStreakInput): number {
  const now = input.now ?? new Date();
  const todayCairo = cairoDateString(now);

  if (!input.lastActiveAt) return 1;

  const lastActiveCairo = cairoDateString(input.lastActiveAt);
  if (lastActiveCairo === todayCairo) {
    // Already counted today — return current value (idempotent).
    return input.currentStreak;
  }

  const yesterdayCairo = cairoDateString(new Date(now.getTime() - 24 * 60 * 60 * 1000));
  if (lastActiveCairo === yesterdayCairo) {
    return input.currentStreak + 1;
  }

  // Gap of one or more days — start a fresh streak.
  return 1;
}

/**
 * Update a user's streak after they've finished today's session.
 *
 * Reads the user's current `lastActiveAt` and `streakDays`, computes the new
 * streak with `computeNextStreak`, then writes both fields in a single
 * UPDATE. If the row doesn't exist, this throws — callers are expected to
 * pass a valid userId.
 */
export async function updateStreakOnComplete(userId: number, now = new Date()): Promise<number> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { lastActiveAt: true, streakDays: true },
  });
  if (!user) throw new Error(`updateStreakOnComplete: user ${userId} not found`);

  const nextStreak = computeNextStreak({
    lastActiveAt: user.lastActiveAt,
    currentStreak: user.streakDays,
    now,
  });

  await prisma.user.update({
    where: { id: userId },
    data: { streakDays: nextStreak, lastActiveAt: now },
  });

  return nextStreak;
}
