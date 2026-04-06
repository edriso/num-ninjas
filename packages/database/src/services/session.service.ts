import prisma from '../client.js';
import { todayCairoAsUtcMidnight } from '../utils/cairo-time.js';

/**
 * Get or create today's study session for a user.
 */
export async function getOrCreateTodaySession(userId: number) {
  const today = todayCairoAsUtcMidnight();

  return prisma.studySession.upsert({
    where: { user_session_date: { userId, sessionDate: today } },
    update: {},
    create: {
      userId,
      sessionDate: today,
      questionsSent: 0,
      questionsAnswered: 0,
    },
  });
}

/**
 * Increment questionsSent after sending a question to the user.
 */
export async function markQuestionSent(sessionId: number) {
  return prisma.studySession.update({
    where: { id: sessionId },
    data: { questionsSent: { increment: 1 } },
  });
}

/**
 * Increment questionsAnswered and check if session is complete.
 */
export async function markQuestionAnswered(sessionId: number, totalQuestions: number) {
  const session = await prisma.studySession.update({
    where: { id: sessionId },
    data: { questionsAnswered: { increment: 1 } },
  });

  if (session.questionsAnswered >= totalQuestions) {
    return prisma.studySession.update({
      where: { id: sessionId },
      data: { isComplete: true },
    });
  }

  return session;
}

/**
 * Get today's session for a user (without creating).
 */
export async function getTodaySession(userId: number) {
  const today = todayCairoAsUtcMidnight();
  return prisma.studySession.findUnique({
    where: { user_session_date: { userId, sessionDate: today } },
  });
}
