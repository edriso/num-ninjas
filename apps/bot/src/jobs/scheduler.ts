import cron, { type ScheduledTask } from 'node-cron';
import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prepareScheduledQuestions } from './prepare-questions';
import { sendFirstQuestion } from './send-first';
import { sendReminder } from './send-reminder';
import { resetStreaks } from './reset-streaks';
import { runWeeklyRanking } from './weekly-ranking';
import { runMonthlyRanking } from './monthly-ranking';
import { runYearlyRanking } from './yearly-ranking';
import { logger } from '@numninja/database';

const CAIRO_TZ = 'Africa/Cairo';
const tasks: ScheduledTask[] = [];

/**
 * Register all cron jobs. All times are Cairo time.
 *
 * Schedule:
 *  00:00 — Reset streaks for inactive users
 *  00:30 — Prepare today's scheduled questions
 *  14:30 — Send first question to all users
 *  19:30 — Reminder for users who haven't answered
 */
export function startScheduler(bot: Bot<BotContext>) {
  // 00:00 — Reset streaks
  tasks.push(
    cron.schedule('0 0 * * *', async () => {
      logger.info('[CRON] Running streak reset...');
      try {
        await resetStreaks();
      } catch (err) {
        logger.error('[CRON] Streak reset failed', { error: String(err) });
      }
    }, { timezone: CAIRO_TZ }),
  );

  // 00:30 — Prepare questions
  tasks.push(
    cron.schedule('30 0 * * *', async () => {
      logger.info('[CRON] Preparing daily questions...');
      try {
        await prepareScheduledQuestions();
      } catch (err) {
        logger.error('[CRON] Question preparation failed', { error: String(err) });
      }
    }, { timezone: CAIRO_TZ }),
  );

  // 14:30 — Send first question
  tasks.push(
    cron.schedule('30 14 * * *', async () => {
      logger.info('[CRON] Sending first question...');
      try {
        await sendFirstQuestion(bot);
      } catch (err) {
        logger.error('[CRON] Send first question failed', { error: String(err) });
      }
    }, { timezone: CAIRO_TZ }),
  );

  // 19:30 — Evening reminder
  tasks.push(
    cron.schedule('30 19 * * *', async () => {
      logger.info('[CRON] Sending reminders...');
      try {
        await sendReminder(bot);
      } catch (err) {
        logger.error('[CRON] Reminder failed', { error: String(err) });
      }
    }, { timezone: CAIRO_TZ }),
  );

  // Sunday 23:00 — Weekly ranking
  tasks.push(
    cron.schedule('0 23 * * 0', async () => {
      logger.info('[CRON] Running weekly ranking...');
      try {
        await runWeeklyRanking(bot);
      } catch (err) {
        logger.error('[CRON] Weekly ranking failed', { error: String(err) });
      }
    }, { timezone: CAIRO_TZ }),
  );

  // Last day of month 23:00 — Monthly hall of fame
  tasks.push(
    cron.schedule('0 23 28-31 * *', async () => {
      logger.info('[CRON] Checking monthly ranking...');
      try {
        await runMonthlyRanking(bot);
      } catch (err) {
        logger.error('[CRON] Monthly ranking failed', { error: String(err) });
      }
    }, { timezone: CAIRO_TZ }),
  );

  // Dec 31 23:00 — Yearly hall of fame
  tasks.push(
    cron.schedule('0 23 31 12 *', async () => {
      logger.info('[CRON] Running yearly ranking...');
      try {
        await runYearlyRanking(bot);
      } catch (err) {
        logger.error('[CRON] Yearly ranking failed', { error: String(err) });
      }
    }, { timezone: CAIRO_TZ }),
  );

  logger.info('Scheduler started with 7 jobs (Cairo time)');
}

export function stopScheduler() {
  for (const task of tasks) {
    task.stop();
  }
  tasks.length = 0;
  logger.info('Scheduler stopped');
}
