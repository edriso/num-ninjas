import prisma from '../client';
import { todayCairoAsUtcMidnight } from '../utils/cairo-time';
import { getSettingInt } from './setting.service';

// ─── Admin CRUD ─────────────────────────────────────────────────────

export async function listQuestions(filters: {
  levelId?: number;
  topicId?: number;
  type?: string;
  page?: number;
  pageSize?: number;
}) {
  const where: Record<string, unknown> = {};
  if (filters.type) where.questionType = filters.type;
  if (filters.topicId) where.topicId = filters.topicId;
  if (filters.levelId) where.topic = { levelId: filters.levelId };

  const pageSize = filters.pageSize || 20;
  const page = filters.page || 1;

  const [questions, total] = await Promise.all([
    prisma.question.findMany({
      where,
      include: { topic: { include: { level: true } }, options: true },
      orderBy: { id: 'desc' },
      take: pageSize,
      skip: (page - 1) * pageSize,
    }),
    prisma.question.count({ where }),
  ]);

  return { questions, total, totalPages: Math.ceil(total / pageSize) };
}

export async function getQuestionById(id: number) {
  return prisma.question.findUnique({
    where: { id },
    include: { topic: { include: { level: true } }, options: true },
  });
}

export async function createQuestion(data: {
  topicId: number;
  questionType: string;
  questionText: string;
  correctAnswer?: string;
  correctAnswerNumeric?: number;
  realLifeContext?: string;
  hintText?: string;
  explanation: string;
  options?: { optionText: string; isCorrect: boolean }[];
}) {
  const { options, ...questionData } = data;
  return prisma.question.create({
    data: {
      ...questionData,
      ...(options ? { options: { create: options } } : {}),
    },
    include: { options: true },
  });
}

export async function updateQuestion(
  id: number,
  data: {
    topicId?: number;
    questionType?: string;
    questionText?: string;
    correctAnswer?: string;
    correctAnswerNumeric?: number;
    realLifeContext?: string;
    hintText?: string;
    explanation?: string;
  },
) {
  return prisma.question.update({
    where: { id },
    data,
  });
}

export async function deleteQuestion(id: number) {
  await prisma.option.deleteMany({ where: { questionId: id } });
  return prisma.question.delete({ where: { id } });
}

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
