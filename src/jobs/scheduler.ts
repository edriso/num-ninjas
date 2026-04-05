import cron from 'node-cron';
import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session.js';
import { prepareScheduledQuestions } from './prepare-questions.js';
import { sendFirstQuestion } from './send-first.js';
import { sendReminder } from './send-reminder.js';
import { resetStreaks } from './reset-streaks.js';
import { logger } from '../utils/logger.js';

const CAIRO_TZ = 'Africa/Cairo';
const tasks: cron.ScheduledTask[] = [];

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

  logger.info('Scheduler started with 4 jobs (Cairo time: 00:00, 00:30, 14:30, 19:30)');
}

export function stopScheduler() {
  for (const task of tasks) {
    task.stop();
  }
  tasks.length = 0;
  logger.info('Scheduler stopped');
}
