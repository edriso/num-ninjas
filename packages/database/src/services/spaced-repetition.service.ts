import prisma from '../client';

/**
 * Spaced repetition intervals (in days).
 *
 * Based on how well the kid answered the question last time:
 * - Wrong:             repeat after 2 days  (needs reinforcement)
 * - Correct with hint: repeat after 5 days  (partially understood)
 * - Correct, no hint:  repeat after 14 days (consolidation)
 * - Never attempted:   available now         (new question)
 *
 * This replaces the blunt 30-day question_repeat_days setting
 * with per-question, per-user smart intervals.
 */
const REPEAT_INTERVALS = {
  WRONG: 2,
  HINT_USED: 5,
  CORRECT: 14,
} as const;

/**
 * Get all question IDs that are still in their "cooldown" period for a user.
 * These questions should NOT be scheduled today.
 *
 * For each question the user has attempted, we check the most recent attempt
 * and apply the appropriate repeat interval.
 */
export async function getExcludedQuestionIds(
  userId: number,
  levelId: number,
): Promise<Set<number>> {
  const now = new Date();
  const excluded = new Set<number>();

  // Get all attempts by this user on questions in their level,
  // grouped by question (most recent first)
  const attempts = await prisma.questionAttempt.findMany({
    where: {
      userId,
      question: { topic: { levelId } },
    },
    orderBy: { answeredAt: 'desc' },
    select: {
      questionId: true,
      isCorrect: true,
      hintUsed: true,
      answeredAt: true,
    },
  });

  // Only check the MOST RECENT attempt per question
  const seen = new Set<number>();
  for (const attempt of attempts) {
    if (seen.has(attempt.questionId)) continue;
    seen.add(attempt.questionId);

    // Determine repeat interval based on last attempt
    let intervalDays: number;
    if (!attempt.isCorrect) {
      intervalDays = REPEAT_INTERVALS.WRONG;
    } else if (attempt.hintUsed) {
      intervalDays = REPEAT_INTERVALS.HINT_USED;
    } else {
      intervalDays = REPEAT_INTERVALS.CORRECT;
    }

    // Check if the question is still in cooldown
    const cooldownEnd = new Date(attempt.answeredAt);
    cooldownEnd.setUTCDate(cooldownEnd.getUTCDate() + intervalDays);

    if (now < cooldownEnd) {
      excluded.add(attempt.questionId);
    }
    // If cooldown has passed, the question is available again
  }

  return excluded;
}
