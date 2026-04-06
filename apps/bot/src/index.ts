import { config } from './config';
import { bot, setBotCommands } from './bot/index';
import { startScheduler, stopScheduler } from './jobs/scheduler';
import { prepareScheduledQuestions } from './jobs/prepare-questions';
import { resetStreaks } from './jobs/reset-streaks';
import { sendFirstQuestion } from './jobs/send-first';
import { loadSettings, logger } from '@numninjas/database';

function getCairoTimeMinutes(): number {
  const cairoTime = new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo', hour12: false });
  const match = cairoTime.match(/(\d+):(\d+)/);
  if (!match) return 0;
  return parseInt(match[1]) * 60 + parseInt(match[2]);
}

async function main() {
  logger.info('NumNinjas starting...', {
    timezone: config.timezone,
    isDev: config.isDev,
  });

  // Load settings into cache
  await loadSettings();

  // --- Startup recovery: catch up on missed cron jobs ---
  const cairoTimeMinutes = getCairoTimeMinutes();

  // Reset streaks if we're past 00:00 Cairo (runs every startup — idempotent)
  if (cairoTimeMinutes >= 0) {
    logger.info('[STARTUP] Running streak reset catch-up...');
    try {
      await resetStreaks();
    } catch (err) {
      logger.error('[STARTUP] Streak reset failed', { error: String(err) });
    }
  }

  // Prepare today's questions if not already done (idempotent)
  logger.info('[STARTUP] Preparing scheduled questions...');
  await prepareScheduledQuestions();

  // Set bot menu commands
  await setBotCommands();

  // Start scheduled jobs
  startScheduler(bot);

  // Start the bot
  bot.start({
    onStart: async () => {
      logger.info('Bot is running! Press Ctrl+C to stop.');

      // Send first question catch-up if we're past 14:30 Cairo
      // (runs after bot.start so we can send messages)
      if (cairoTimeMinutes >= 14 * 60 + 30) {
        logger.info('[STARTUP] Running send-first-question catch-up...');
        try {
          await sendFirstQuestion(bot);
        } catch (err) {
          logger.error('[STARTUP] Send first question catch-up failed', { error: String(err) });
        }
      }
    },
  });
}

// Graceful shutdown
function shutdown(signal: string) {
  logger.info(`${signal} received, shutting down...`);
  stopScheduler();
  bot.stop();
  process.exit(0);
}

process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));

main().catch((error) => {
  logger.error('Fatal error', { error: String(error) });
  process.exit(1);
});
