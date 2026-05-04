import {
  prisma,
  todayCairoAsUtcMidnight,
  getSettingInt,
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

  // Skip users whose account has the bot blocked — their questions would never
  // be sent anyway, so preparing them just wastes DB connections (Hostinger has
  // a 500/hour budget) and produces orphaned scheduled_questions rows.
  const users = await prisma.user.findMany({
    where: { account: { blockedAt: null } },
    include: { level: true },
  });

  const now = new Date();
  let prepared = 0;
  let skippedSleeping = 0;
  let failed = 0;

  // Per-cron-run cache of questions keyed by `${topicId}:${locale}`. Many
  // kids at the same level want the same topic, so without this we'd hit
  // the DB once per (user, topic, locale) — the single biggest source of
  // queries in this cron. With the cache, we hit O(distinct topics × locales).
  const questionCache = new Map<string, { id: number }[]>();
  const fetchTopicQuestions = async (topicId: number, locale: string): Promise<{ id: number }[]> => {
    const key = `${topicId}:${locale}`;
    const cached = questionCache.get(key);
    if (cached) return cached;
    const rows = await prisma.question.findMany({
      where: { topicId, locale },
      select: { id: true },
    });
    questionCache.set(key, rows);
    return rows;
  };

  for (const user of users) {
    // Sleep mode: stop preparing questions for users who keep ignoring us.
    // They wake up automatically the next time they interact with the bot.
    if (isSleeping({ lastActiveAt: user.lastActiveAt, createdAt: user.createdAt, now })) {
      skippedSleeping++;
      continue;
    }

    // Per-user try/catch is critical: one user's failure must not abort the
    // whole cron. Common failure mode is a race on the @@unique constraint
    // (user, position, scheduledDate) when /start triggers a parallel prepare
    // for the same user. With this guard, the unique violation is logged for
    // that user and the rest still get their questions.
    try {
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
        // Try user's locale first, fall back to 'ar' if no questions exist.
        // The cache + in-memory filter means we fetch each (topic, locale)
        // pool at most once per cron run, then exclude in memory.
        const userLocale = user.locale || 'ar';
        const localePool = await fetchTopicQuestions(topic.topicId, userLocale);
        let available = localePool.filter((q) => !excludedIds.has(q.id));

        // Fallback to Arabic if no questions in user's locale
        if (available.length === 0 && userLocale !== 'ar') {
          const arPool = await fetchTopicQuestions(topic.topicId, 'ar');
          available = arPool.filter((q) => !excludedIds.has(q.id));
        }

        if (available.length > 0) {
          // O(1) random pick — shuffling the whole pool just to take [0] is
          // unnecessary work, especially when the pool is large.
          const picked = available[Math.floor(Math.random() * available.length)];
          selectedQuestions.push(picked);
          excludedIds.add(picked.id);
        } else {
          // Last-resort fallback: every question from this topic is in cooldown.
          // Pull the union of all locales for this topic from cache (or fetch
          // ar as a representative pool), pick any.
          const fallbackPool =
            (await fetchTopicQuestions(topic.topicId, userLocale)).length > 0
              ? await fetchTopicQuestions(topic.topicId, userLocale)
              : await fetchTopicQuestions(topic.topicId, 'ar');
          if (fallbackPool.length > 0) {
            selectedQuestions.push(fallbackPool[Math.floor(Math.random() * fallbackPool.length)]);
          }
        }
      }

      // Schedule the questions. If two parallel paths race on the same
      // (userId, position, scheduledDate), Prisma will throw P2002; the
      // outer try/catch catches it, logs, and the cron continues.
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
    } catch (err) {
      failed++;
      logger.warn('Failed to prepare questions for user', {
        userId: user.id,
        nickname: user.nickname,
        error: String(err),
      });
    }
  }

  logger.info(`Prepared adaptive questions for ${prepared} users (skipped ${skippedSleeping} sleeping, failed ${failed})`);
}
