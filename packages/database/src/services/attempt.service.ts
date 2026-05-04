import prisma from '../client';
import { getSettingInt } from './setting.service';
import { checkAchievements } from './badge.service';
import { todayCairoAsUtcMidnight, todayCairoStartUtc } from '../utils/cairo-time';
import { logger } from '../utils/logger';

interface RecordAttemptParams {
  userId: number;
  questionId: number;
  userAnswer: string | null;
  isCorrect: boolean;
  hintUsed: boolean;
}

/**
 * Record a question attempt, update points, and update session progress
 * all in a single transaction. If any step fails, everything rolls back.
 *
 * Returns { attempt, session } where session is the updated study session.
 */
export async function recordAttemptAndProgress(params: RecordAttemptParams) {
  const { userId, questionId, userAnswer, isCorrect, hintUsed } = params;

  const pointsPerCorrect = await getSettingInt('points_per_correct');
  const totalQuestions = await getSettingInt('questions_per_day');
  const today = todayCairoAsUtcMidnight();

  const result = await prisma.$transaction(async (tx) => {
    // 1. Create the attempt
    const attempt = await tx.questionAttempt.create({
      data: { userId, questionId, userAnswer, isCorrect, hintUsed },
    });

    // 2. Update points if correct
    if (isCorrect) {
      await tx.user.update({
        where: { id: userId },
        data: { totalPoints: { increment: pointsPerCorrect } },
      });
    }

    // 3. Get or create today's session
    const session = await tx.studySession.upsert({
      where: { user_session_date: { userId, sessionDate: today } },
      update: {},
      create: { userId, sessionDate: today, questionsSent: 0, questionsAnswered: 0 },
    });

    // 4. Increment questionsAnswered and check completion
    const updated = await tx.studySession.update({
      where: { id: session.id },
      data: { questionsAnswered: { increment: 1 } },
    });

    // 5. Mark complete if all questions answered
    if (updated.questionsAnswered >= totalQuestions) {
      await tx.studySession.update({
        where: { id: session.id },
        data: { isComplete: true },
      });
    }

    return {
      attempt,
      session: {
        ...updated,
        questionsAnswered: updated.questionsAnswered,
        isComplete: updated.questionsAnswered >= totalQuestions,
      },
    };
  });

  logger.debug('Attempt + session recorded', {
    userId,
    questionId,
    isCorrect,
    hintUsed,
    questionsAnswered: result.session.questionsAnswered,
    isComplete: result.session.isComplete,
  });

  // Check achievement badges asynchronously (don't block the response)
  checkAchievements(userId).catch((err) =>
    logger.error('Achievement check failed', { error: String(err) }),
  );

  return result;
}

/**
 * @deprecated Use recordAttemptAndProgress instead for transaction safety.
 * Kept for backwards compatibility with retry flow (no session update needed).
 */
export async function recordAttempt(params: RecordAttemptParams) {
  return (await recordAttemptAndProgress(params)).attempt;
}

/**
 * Check if user has already answered a specific question today.
 */
export async function hasAnswered(userId: number, questionId: number) {
  const todayStart = todayCairoStartUtc();

  const attempt = await prisma.questionAttempt.findFirst({
    where: {
      userId,
      questionId,
      answeredAt: { gte: todayStart },
    },
  });

  return attempt !== null;
}

/**
 * Get user's attempts for today (for daily summary).
 */
export async function getTodayAttempts(userId: number) {
  const todayStart = todayCairoStartUtc();

  return prisma.questionAttempt.findMany({
    where: {
      userId,
      answeredAt: { gte: todayStart },
    },
    include: { question: { include: { topic: true } } },
    orderBy: { answeredAt: 'asc' },
  });
}
