import { config } from './config.js';
import { bot, setBotCommands } from './bot/index.js';
import { startScheduler, stopScheduler } from './jobs/scheduler.js';
import { prepareScheduledQuestions } from './jobs/prepare-questions.js';
import { loadSettings } from './services/setting.service.js';
import { logger } from './utils/logger.js';

async function main() {
  logger.info('NumNinjas starting...', {
    timezone: config.timezone,
    isDev: config.isDev,
  });

  // Load settings into cache
  await loadSettings();

  // Prepare today's questions if not already done
  await prepareScheduledQuestions();

  // Set bot menu commands
  await setBotCommands();

  // Start scheduled jobs
  startScheduler(bot);

  // Start the bot
  bot.start({
    onStart: () => {
      logger.info('Bot is running! Press Ctrl+C to stop.');
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
