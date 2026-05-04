import prisma from '../client';

const DEFAULT_RETENTION_DAYS = 30;

/**
 * Pure helper: returns the cutoff Date before which records are considered stale.
 * Exposed separately so it can be unit-tested without a database.
 *
 * Result is midnight UTC of (from - retentionDays), so we only delete complete
 * days and never accidentally clip a record from "30 days ago but 2 hours ago".
 */
export function getCleanupCutoff(retentionDays: number, from = new Date()): Date {
  const cutoff = new Date(from);
  cutoff.setUTCDate(cutoff.getUTCDate() - retentionDays);
  cutoff.setUTCHours(0, 0, 0, 0);
  return cutoff;
}

/**
 * Delete stale scheduling rows that are no longer needed.
 *
 * Rows cleaned up:
 *  - scheduled_questions  — per-user per-day prep rows. Once a day is past they
 *                           serve no purpose. Grows at O(users × days).
 *  - study_sessions       — per-user per-day tracking rows (questionsSent,
 *                           questionsAnswered). Only used on the day itself.
 *                           Grows at O(users × days).
 *  - cron_runs            — observability rows for scheduled-job executions.
 *                           Useful for "did the 14:30 send run today?" but
 *                           not for any business logic past the retention
 *                           window. Grows at O(jobs × days).
 *
 * NOT cleaned:
 *  - question_attempts    — this is the learning history. Two features depend on it:
 *                           (1) spaced repetition checks the last answer per question
 *                           with no time limit to decide its cooldown — delete it and
 *                           the question loses its record and reappears too soon.
 *                           (2) topic-strength uses the last 30 days of answers to
 *                           find each kid's weak topics — delete them and the kid
 *                           looks like a new user with no history.
 *
 * Returns the count of rows deleted from each table.
 */
export async function cleanupOldRecords(retentionDays = DEFAULT_RETENTION_DAYS) {
  const cutoff = getCleanupCutoff(retentionDays);

  const [scheduledQuestions, studySessions, cronRuns] = await Promise.all([
    prisma.scheduledQuestion.deleteMany({
      where: { scheduledDate: { lt: cutoff } },
    }),
    prisma.studySession.deleteMany({
      where: { sessionDate: { lt: cutoff } },
    }),
    prisma.cronRun.deleteMany({
      where: { startedAt: { lt: cutoff } },
    }),
  ]);

  return {
    scheduledQuestions: scheduledQuestions.count,
    studySessions: studySessions.count,
    cronRuns: cronRuns.count,
  };
}
