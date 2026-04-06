import {
  prisma,
  todayCairoAsUtcMidnight,
  getSettingInt,
  shuffle,
  logger,
  getTopicStrengths,
  pickWeightedTopics,
} from '@numninjas/database';

/**
 * Prepare today's questions for each active user.
 *
 * Adaptive difficulty:
 * 1. For each user, calculate per-topic accuracy (last 30 days)
 * 2. Weight topics by weakness (low accuracy → higher chance of being picked)
 * 3. Pick N topics via weighted random, then 1 question per topic
 * 4. Store as per-user ScheduledQuestion rows
 *
 * This means each kid gets different questions based on what they struggle with.
 * A kid failing fractions will see more fraction questions. A kid who mastered
 * addition will rarely see addition but still gets it occasionally (weight 0.1).
 */
export async function prepareScheduledQuestions() {
  const today = todayCairoAsUtcMidnight();
  const repeatDays = await getSettingInt('question_repeat_days');
  const questionsPerDay = await getSettingInt('questions_per_day');

  const cutoffDate = new Date(today);
  cutoffDate.setUTCDate(cutoffDate.getUTCDate() - repeatDays);

  // Get all users with active profiles
  const users = await prisma.user.findMany({
    include: { level: true },
  });

  let prepared = 0;

  for (const user of users) {
    // Skip if already prepared today
    const existing = await prisma.scheduledQuestion.findFirst({
      where: { userId: user.id, scheduledDate: today },
    });
    if (existing) continue;

    // Get topic strengths for this user
    const strengths = await getTopicStrengths(user.id, user.levelId);

    if (strengths.length === 0) {
      logger.warn(`No topics for user ${user.id} (${user.nickname}) at level ${user.levelId}`);
      continue;
    }

    // Pick topics weighted by weakness
    const pickedTopics = pickWeightedTopics(strengths, questionsPerDay);

    // Find recently used question IDs for this user
    const recentScheduled = await prisma.scheduledQuestion.findMany({
      where: {
        userId: user.id,
        scheduledDate: { gte: cutoffDate },
      },
      select: { questionId: true },
    });
    const recentIds = new Set(recentScheduled.map((r) => r.questionId));

    // Pick 1 question per selected topic
    const selectedQuestions: { id: number }[] = [];

    for (const topic of pickedTopics) {
      const available = await prisma.question.findMany({
        where: {
          topicId: topic.topicId,
          ...(recentIds.size > 0 ? { id: { notIn: [...recentIds] } } : {}),
        },
        select: { id: true },
      });

      if (available.length > 0) {
        const picked = shuffle(available)[0];
        selectedQuestions.push(picked);
        recentIds.add(picked.id); // Prevent duplicate in same day
      } else {
        // Fallback: allow any question from this topic
        const fallback = await prisma.question.findMany({
          where: { topicId: topic.topicId },
          select: { id: true },
        });
        if (fallback.length > 0) {
          selectedQuestions.push(shuffle(fallback)[0]);
        }
      }
    }

    // Schedule the questions
    for (let i = 0; i < selectedQuestions.length; i++) {
      await prisma.scheduledQuestion.create({
        data: {
          userId: user.id,
          questionId: selectedQuestions[i].id,
          position: i + 1,
          scheduledDate: today,
        },
      });
    }

    prepared++;
  }

  logger.info(`Prepared adaptive questions for ${prepared} users`);
}
