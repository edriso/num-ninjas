import prisma from '../client';

/**
 * Question-quality reports for the admin panel.
 *
 * Surfaces questions that may be misworded, miskeyed, or too hard, by
 * aggregating question_attempts. Two views:
 *
 *   1. **Hard questions** — high wrong-rate AND enough attempts to be
 *      meaningful. A bad question (typo, wrong answer key, ambiguous
 *      wording) shows up here within ~10 attempts.
 *
 *   2. **Skipped questions** — high skip-rate. Skipping is a softer signal
 *      than wrong (the kid couldn't even guess) and often indicates a
 *      reading-level mismatch or unfamiliar topic.
 *
 * The minAttempts filter keeps the noise down — a question with 1 attempt
 * and 1 wrong shouldn't show up as "100% wrong" alongside questions with
 * 50 attempts and 80% wrong. Default 5 attempts; admins can override.
 */

export interface QuestionQualityRow {
  questionId: number;
  questionText: string;
  topicName: string;
  topicNameEn: string | null;
  levelName: string;
  levelNameEn: string | null;
  questionType: string;
  locale: string;
  totalAttempts: number;
  wrongCount: number;
  skipCount: number; // attempts where the kid hit Skip (recorded as user_answer = null + isCorrect = false)
  hintCount: number;
  wrongRate: number; // wrongCount / totalAttempts
  skipRate: number; // skipCount / totalAttempts
  hintRate: number;
}

export interface QuestionQualityOptions {
  /** Min attempts a question must have to appear in the report. Default 5. */
  minAttempts?: number;
  /** Max rows to return. Default 30. */
  limit?: number;
  /** 'wrong' (default) or 'skip' — sort by which rate. */
  sortBy?: 'wrong' | 'skip';
}

/**
 * Returns questions that look problematic, sorted by the worst metric first.
 *
 * Uses an in-memory aggregation rather than a SQL groupBy so we can compute
 * skip-rate (which depends on user_answer = null) alongside wrong-rate in
 * one round-trip — Prisma's groupBy doesn't combine multiple count
 * conditions cleanly. The dataset is small (~thousands of attempts even
 * after a year) so the perf trade-off is negligible.
 */
export async function getProblematicQuestions(
  options: QuestionQualityOptions = {},
): Promise<QuestionQualityRow[]> {
  const minAttempts = options.minAttempts ?? 5;
  const limit = options.limit ?? 30;
  const sortBy = options.sortBy ?? 'wrong';

  // Fetch all attempts joined to the question metadata. We join in JS instead
  // of a SQL view to keep this in one place; if the table grows past ~1M
  // rows we should move to a stored aggregation.
  const attempts = await prisma.questionAttempt.findMany({
    select: {
      questionId: true,
      isCorrect: true,
      userAnswer: true,
      hintUsed: true,
    },
  });

  if (attempts.length === 0) return [];

  // Per-question counters. Map<questionId, counters>.
  const counters = new Map<number, { total: number; wrong: number; skip: number; hint: number }>();
  for (const a of attempts) {
    const c = counters.get(a.questionId) ?? { total: 0, wrong: 0, skip: 0, hint: 0 };
    c.total += 1;
    if (!a.isCorrect) {
      c.wrong += 1;
      if (a.userAnswer === null) c.skip += 1;
    }
    if (a.hintUsed) c.hint += 1;
    counters.set(a.questionId, c);
  }

  // Hydrate question/topic/level info only for the candidates that meet the
  // minimum attempt threshold — saves a lot of DB work when the dataset has
  // many rarely-attempted questions.
  const candidateIds = [...counters.entries()]
    .filter(([, c]) => c.total >= minAttempts)
    .map(([id]) => id);

  if (candidateIds.length === 0) return [];

  const questions = await prisma.question.findMany({
    where: { id: { in: candidateIds } },
    select: {
      id: true,
      questionText: true,
      questionType: true,
      locale: true,
      topic: {
        select: {
          name: true,
          nameEn: true,
          level: { select: { name: true, nameEn: true } },
        },
      },
    },
  });

  const rows: QuestionQualityRow[] = questions.map((q) => {
    const c = counters.get(q.id) ?? { total: 0, wrong: 0, skip: 0, hint: 0 };
    return {
      questionId: q.id,
      questionText: q.questionText,
      topicName: q.topic.name,
      topicNameEn: q.topic.nameEn,
      levelName: q.topic.level.name,
      levelNameEn: q.topic.level.nameEn,
      questionType: q.questionType,
      locale: q.locale,
      totalAttempts: c.total,
      wrongCount: c.wrong,
      skipCount: c.skip,
      hintCount: c.hint,
      wrongRate: c.wrong / c.total,
      skipRate: c.skip / c.total,
      hintRate: c.hint / c.total,
    };
  });

  rows.sort((a, b) => {
    const aRate = sortBy === 'skip' ? a.skipRate : a.wrongRate;
    const bRate = sortBy === 'skip' ? b.skipRate : b.wrongRate;
    if (bRate !== aRate) return bRate - aRate;
    return b.totalAttempts - a.totalAttempts; // more attempts = more confident signal
  });

  return rows.slice(0, limit);
}
