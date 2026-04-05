import { config } from './config.js';
import { bot, setBotCommands } from './bot/index.js';
import { logger } from './utils/logger.js';

async function main() {
  logger.info('NumNinjas starting...', {
    timezone: config.timezone,
    isDev: config.isDev,
  });

  // Set bot menu commands
  await setBotCommands();

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
  bot.stop();
  process.exit(0);
}

process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));

main().catch((error) => {
  logger.error('Fatal error', { error: String(error) });
  process.exit(1);
});
