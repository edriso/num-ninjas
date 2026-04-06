import { prisma, todayCairoAsUtcMidnight, getSettingInt, shuffle, logger } from '@numninja/database';

/**
 * Prepare today's scheduled questions for each level.
 * Selects 3 random questions per level, avoiding recently used ones.
 * Idempotent: uses upsert so safe to run multiple times.
 */
export async function prepareScheduledQuestions() {
  const today = todayCairoAsUtcMidnight();
  const repeatDays = await getSettingInt('question_repeat_days');
  const questionsPerDay = await getSettingInt('questions_per_day');

  const cutoffDate = new Date(today);
  cutoffDate.setUTCDate(cutoffDate.getUTCDate() - repeatDays);

  const levels = await prisma.level.findMany();

  for (const level of levels) {
    // Find recently used question IDs for this level
    const recentScheduled = await prisma.scheduledQuestion.findMany({
      where: {
        levelId: level.id,
        scheduledDate: { gte: cutoffDate },
      },
      select: { questionId: true },
    });
    const recentIds = recentScheduled.map((r) => r.questionId);

    // Find available questions for this level
    const available = await prisma.question.findMany({
      where: {
        topic: { levelId: level.id },
        ...(recentIds.length > 0 ? { id: { notIn: recentIds } } : {}),
      },
    });

    if (available.length === 0) {
      // Fallback: use any questions from this level
      const fallback = await prisma.question.findMany({
        where: { topic: { levelId: level.id } },
      });

      if (fallback.length === 0) {
        logger.warn(`No questions available for level ${level.id} (${level.name})`);
        continue;
      }

      // Use fallback pool
      const selected = shuffle(fallback).slice(0, questionsPerDay);
      await scheduleQuestions(level.id, selected, today);
      logger.info(`Prepared ${selected.length} questions for ${level.name} (fallback pool)`);
      continue;
    }

    const selected = shuffle(available).slice(0, questionsPerDay);
    await scheduleQuestions(level.id, selected, today);
    logger.info(`Prepared ${selected.length} questions for ${level.name}`);
  }
}

async function scheduleQuestions(
  levelId: number,
  questions: { id: number }[],
  date: Date,
) {
  for (let i = 0; i < questions.length; i++) {
    await prisma.scheduledQuestion.upsert({
      where: {
        level_position_date: {
          levelId,
          position: i + 1,
          scheduledDate: date,
        },
      },
      create: {
        levelId,
        questionId: questions[i].id,
        position: i + 1,
        scheduledDate: date,
      },
      update: {},
    });
  }
}
