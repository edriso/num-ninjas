import prisma from '../client';
import { todayCairoAsUtcMidnight } from '../utils/cairo-time';
import { getSettingInt } from './setting.service';

/**
 * Get today's scheduled questions for a user, ordered by position.
 */
export async function getScheduledQuestions(userId: number) {
  const today = todayCairoAsUtcMidnight();

  return prisma.scheduledQuestion.findMany({
    where: { userId, scheduledDate: today },
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
export async function getNextQuestion(userId: number, _levelId?: number) {
  const today = todayCairoAsUtcMidnight();

  const session = await prisma.studySession.findUnique({
    where: { user_session_date: { userId, sessionDate: today } },
  });

  const nextPosition = (session?.questionsAnswered ?? 0) + 1;

  if (session?.isComplete) return null;

  const scheduled = await prisma.scheduledQuestion.findUnique({
    where: {
      user_position_date: {
        userId,
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
