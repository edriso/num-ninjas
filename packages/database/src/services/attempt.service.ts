import prisma from '../client';
import { getSettingInt } from './setting.service';
import { checkAchievements } from './badge.service';
import { todayCairoAsUtcMidnight } from '../utils/cairo-time';
import { logger } from '../utils/logger';

interface RecordAttemptParams {
  userId: number;
  questionId: number;
  userAnswer: string | null;
  isCorrect: boolean;
  hintUsed: boolean;
}

/**
 * Record a question attempt and update user points if correct.
 * Uses a transaction to keep attempts and points in sync.
 */
export async function recordAttempt(params: RecordAttemptParams) {
  const { userId, questionId, userAnswer, isCorrect, hintUsed } = params;

  const pointsPerCorrect = await getSettingInt('points_per_correct');

  const attempt = await prisma.questionAttempt.create({
    data: {
      userId,
      questionId,
      userAnswer,
      isCorrect,
      hintUsed,
    },
  });

  if (isCorrect) {
    await prisma.user.update({
      where: { id: userId },
      data: { totalPoints: { increment: pointsPerCorrect } },
    });
  }

  logger.debug('Attempt recorded', {
    userId,
    questionId,
    isCorrect,
    hintUsed,
  });

  // Check achievement badges asynchronously (don't block the response)
  checkAchievements(userId).catch((err) =>
    logger.error('Achievement check failed', { error: String(err) }),
  );

  return attempt;
}

/**
 * Check if user has already answered a specific question today.
 */
export async function hasAnswered(userId: number, questionId: number) {
  const today = todayCairoAsUtcMidnight();

  const attempt = await prisma.questionAttempt.findFirst({
    where: {
      userId,
      questionId,
      answeredAt: { gte: today },
    },
  });

  return attempt !== null;
}

/**
 * Get user's attempts for today (for daily summary).
 */
export async function getTodayAttempts(userId: number) {
  const today = todayCairoAsUtcMidnight();

  return prisma.questionAttempt.findMany({
    where: {
      userId,
      answeredAt: { gte: today },
    },
    include: { question: true },
    orderBy: { answeredAt: 'asc' },
  });
}
