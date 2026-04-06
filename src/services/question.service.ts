import prisma from '../db/prisma.js';
import { todayCairoAsUtcMidnight } from '../utils/cairo-time.js';
import { getSettingInt } from './setting.service.js';

/**
 * Get today's scheduled questions for a level, ordered by position.
 */
export async function getScheduledQuestions(levelId: number) {
  const today = todayCairoAsUtcMidnight();

  return prisma.scheduledQuestion.findMany({
    where: { levelId, scheduledDate: today },
    orderBy: { position: 'asc' },
    include: {
      question: {
        include: { options: true, topic: true },
      },
    },
  });
}

/**
 * Get the next question for a user based on their study session progress.
 * Returns null if all questions are answered or none scheduled.
 */
export async function getNextQuestion(userId: number, levelId: number) {
  const today = todayCairoAsUtcMidnight();

  // Get or create today's session
  const session = await prisma.studySession.findUnique({
    where: { user_session_date: { userId, sessionDate: today } },
  });

  const nextPosition = (session?.questionsAnswered ?? 0) + 1;

  // Check if session is already complete
  if (session?.isComplete) return null;

  const scheduled = await prisma.scheduledQuestion.findUnique({
    where: {
      level_position_date: {
        levelId,
        position: nextPosition,
        scheduledDate: today,
      },
    },
    include: {
      question: {
        include: { options: true, topic: true },
      },
    },
  });

  if (!scheduled) return null;

  const totalQuestions = await getSettingInt('questions_per_day');

  return {
    question: scheduled.question,
    position: nextPosition,
    totalQuestions,
  };
}
