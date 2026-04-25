import { cleanupOldRecords, logger } from '@numninjas/database';

/**
 * Delete scheduled_questions and study_sessions older than 30 days.
 * Runs weekly — rows are cheap but we don't need them past their retention window.
 * question_attempts are intentionally kept forever (spaced repetition + level stats).
 */
export async function runCleanup() {
  const { scheduledQuestions, studySessions } = await cleanupOldRecords();
  logger.info('Cleanup complete', { scheduledQuestions, studySessions });
}
