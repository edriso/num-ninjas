import cron, { type ScheduledTask } from 'node-cron';
import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prepareScheduledQuestions } from './prepare-questions';
import { sendFirstQuestion } from './send-first';
import { sendReminder } from './send-reminder';
import { sendEngagementNudges } from './send-engagement-nudges';
import { resetStreaks } from './reset-streaks';
import { runWeeklyRanking } from './weekly-ranking';
import { runMonthlyRanking } from './monthly-ranking';
import { runYearlyRanking } from './yearly-ranking';
import { sendParentReports } from './parent-report';
import { runCleanup } from './cleanup';
import { logger, withCronRun, type CronRunStats } from '@numninjas/database';

const CAIRO_TZ = 'Africa/Cairo';
const tasks: ScheduledTask[] = [];

/**
 * Helper: wrap a job in observability + scheduler-side error handling.
 *
 * Each cron callback gets:
 *   - withCronRun() recording start/end/stats/error to cron_runs
 *   - logger.info on entry (so a tail of the logs still tells the story)
 *   - logger.error on failure (so Railway alerts trigger normally)
 *   - The job's own return value passed to track() as JSON stats
 *
 * Errors are caught after withCronRun has already recorded the failure row.
 * If the bot loop sees an unhandled rejection from a cron, node-cron will
 * log it and continue; we catch here as belt-and-suspenders.
 */
function trackedJob<T extends CronRunStats | void>(
  name: string,
  run: () => Promise<T>,
): () => Promise<void> {
  return async () => {
    logger.info(`[CRON] Running ${name}...`);
    try {
      await withCronRun(name, async (track) => {
        const result = await run();
        if (result && typeof result === 'object') track(result as CronRunStats);
      });
    } catch (err) {
      logger.error(`[CRON] ${name} failed`, { error: String(err) });
    }
  };
}

/**
 * Register all cron jobs. All times are Cairo time.
 *
 * Schedule:
 *  00:00 — Reset streaks for inactive users
 *  01:30 — Prepare today's scheduled questions
 *  14:30 — Send first question to all users
 *  18:00 — Engagement nudges (re-engage drop-offs: onboarding-abandoned / never-engaged / went-silent)
 *  19:30 — Reminder for users who haven't answered today's questions
 *  Sun 22:00 — Parent weekly report
 *  Sun 23:00 — Weekly ranking
 *  Last day of month 23:00 — Monthly ninja champions
 *  Dec 31 23:00 — Yearly ninja champions
 *  Mon 03:00 — Weekly cleanup (delete scheduled_questions + study_sessions + cron_runs > 30 days)
 */
export function startScheduler(bot: Bot<BotContext>) {
  tasks.push(
    cron.schedule('0 0 * * *', trackedJob('resetStreaks', resetStreaks), { timezone: CAIRO_TZ }),
  );

  // 01:30 not 00:30: Egypt DST springs from 00:00→01:00, skipping 00:30
  tasks.push(
    cron.schedule(
      '30 1 * * *',
      trackedJob('prepareScheduledQuestions', prepareScheduledQuestions),
      { timezone: CAIRO_TZ },
    ),
  );

  tasks.push(
    cron.schedule(
      '30 14 * * *',
      trackedJob('sendFirstQuestion', () => sendFirstQuestion(bot)),
      { timezone: CAIRO_TZ },
    ),
  );

  tasks.push(
    cron.schedule(
      '0 18 * * *',
      trackedJob('sendEngagementNudges', () => sendEngagementNudges(bot)),
      { timezone: CAIRO_TZ },
    ),
  );

  tasks.push(
    cron.schedule(
      '30 19 * * *',
      trackedJob('sendReminder', () => sendReminder(bot)),
      { timezone: CAIRO_TZ },
    ),
  );

  tasks.push(
    cron.schedule(
      '0 22 * * 0',
      trackedJob('sendParentReports', () => sendParentReports(bot)),
      { timezone: CAIRO_TZ },
    ),
  );

  tasks.push(
    cron.schedule(
      '0 23 * * 0',
      trackedJob('runWeeklyRanking', () => runWeeklyRanking(bot)),
      { timezone: CAIRO_TZ },
    ),
  );

  // Cron fires every day 28-31; the job itself no-ops on non-last days.
  tasks.push(
    cron.schedule(
      '0 23 28-31 * *',
      trackedJob('runMonthlyRanking', () => runMonthlyRanking(bot)),
      { timezone: CAIRO_TZ },
    ),
  );

  tasks.push(
    cron.schedule(
      '0 23 31 12 *',
      trackedJob('runYearlyRanking', () => runYearlyRanking(bot)),
      { timezone: CAIRO_TZ },
    ),
  );

  tasks.push(
    cron.schedule('0 3 * * 1', trackedJob('runCleanup', runCleanup), { timezone: CAIRO_TZ }),
  );

  logger.info('Scheduler started with 10 jobs (Cairo time)');
}

export function stopScheduler() {
  for (const task of tasks) {
    task.stop();
  }
  tasks.length = 0;
  logger.info('Scheduler stopped');
}
