import {
  prisma,
  todayCairoAsUtcMidnight,
  getSettingInt,
  shuffle,
  logger,
  getTopicStrengths,
  pickWeightedTopics,
  getExcludedQuestionIds,
  isSleeping,
} from '@numninjas/database';

/**
 * Prepare today's questions for each active user.
 *
 * Combines two learning science concepts:
 *
 * 1. Adaptive difficulty — topics are picked based on weakness
 *    (low accuracy → higher chance of appearing)
 *
 * 2. Spaced repetition — questions reappear based on last attempt:
 *    - Wrong answer: reappear after 2 days (needs reinforcement)
 *    - Correct with hint: after 5 days (partially understood)
 *    - Correct without hint: after 14 days (consolidation)
 *    - Never attempted: available immediately
 *
 * This replaces the old flat 30-day question_repeat_days setting.
 */
export async function prepareScheduledQuestions() {
  const today = todayCairoAsUtcMidnight();
  const questionsPerDay = await getSettingInt('questions_per_day');

  const users = await prisma.user.findMany({
    include: { level: true },
  });

  const now = new Date();
  let prepared = 0;
  let skippedSleeping = 0;

  for (const user of users) {
    // Sleep mode: stop preparing questions for users who keep ignoring us.
    // They wake up automatically the next time they interact with the bot.
    if (isSleeping({ lastActiveAt: user.lastActiveAt, createdAt: user.createdAt, now })) {
      skippedSleeping++;
      continue;
    }

    // Skip if already prepared today
    const existing = await prisma.scheduledQuestion.findFirst({
      where: { userId: user.id, scheduledDate: today },
    });
    if (existing) continue;

    // Get topic strengths for this user (adaptive difficulty)
    const strengths = await getTopicStrengths(user.id, user.levelId);

    if (strengths.length === 0) {
      logger.warn(`No topics for user ${user.id} (${user.nickname}) at level ${user.levelId}`);
      continue;
    }

    // Pick topics weighted by weakness
    const pickedTopics = pickWeightedTopics(strengths, questionsPerDay);

    // Get questions excluded by spaced repetition (still in cooldown)
    const excludedIds = await getExcludedQuestionIds(user.id, user.levelId);

    // Pick 1 question per selected topic
    const selectedQuestions: { id: number }[] = [];

    for (const topic of pickedTopics) {
      // Try user's locale first, fall back to 'ar' if no questions exist
      const userLocale = user.locale || 'ar';
      let available = await prisma.question.findMany({
        where: {
          topicId: topic.topicId,
          locale: userLocale,
          ...(excludedIds.size > 0 ? { id: { notIn: [...excludedIds] } } : {}),
        },
        select: { id: true },
      });

      // Fallback to Arabic if no questions in user's locale
      if (available.length === 0 && userLocale !== 'ar') {
        available = await prisma.question.findMany({
          where: {
            topicId: topic.topicId,
            locale: 'ar',
            ...(excludedIds.size > 0 ? { id: { notIn: [...excludedIds] } } : {}),
          },
          select: { id: true },
        });
      }

      if (available.length > 0) {
        const picked = shuffle(available)[0];
        selectedQuestions.push(picked);
        excludedIds.add(picked.id);
      } else {
        // Fallback: allow any question from this topic (all in cooldown)
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

  logger.info(`Prepared adaptive questions for ${prepared} users (skipped ${skippedSleeping} sleeping)`);
}
