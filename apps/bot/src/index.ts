import { config } from './config';
import { bot, setBotCommands } from './bot/index';
import { startScheduler, stopScheduler } from './jobs/scheduler';
import { prepareScheduledQuestions } from './jobs/prepare-questions';
import { resetStreaks } from './jobs/reset-streaks';
import { sendFirstQuestion } from './jobs/send-first';
import { startHealthServer } from './health';
import { loadSettings, logger, prisma, withCronRun } from '@numninjas/database';

function getCairoTimeMinutes(): number {
  const cairoTime = new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo', hour12: false });
  const match = cairoTime.match(/(\d+):(\d+)/);
  if (!match) return 0;
  return parseInt(match[1]) * 60 + parseInt(match[2]);
}

async function waitForDatabase(maxRetries = 10): Promise<void> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await loadSettings();
      return;
    } catch (err) {
      const delay = Math.min(attempt * 10, 60); // 10s, 20s, 30s... max 60s
      logger.warn(`[STARTUP] Database not ready (attempt ${attempt}/${maxRetries}), retrying in ${delay}s...`, { error: String(err) });
      await new Promise((r) => setTimeout(r, delay * 1000));
    }
  }
  throw new Error('Database unreachable after all retries');
}

async function main() {
  logger.info('NumNinjas starting...', {
    timezone: config.timezone,
    isDev: config.isDev,
  });

  // Wait for database with exponential backoff (prevents burning Hostinger's 500 conn/hour limit)
  await waitForDatabase();

  // --- Startup recovery: catch up on missed cron jobs ---
  const cairoTimeMinutes = getCairoTimeMinutes();

  // Reset streaks if we're past 00:00 Cairo (runs every startup — idempotent).
  // Wrapped in withCronRun so the startup catch-up is recorded alongside
  // the scheduled run, with name suffix to distinguish the two.
  if (cairoTimeMinutes >= 0) {
    logger.info('[STARTUP] Running streak reset catch-up...');
    try {
      await withCronRun('resetStreaks:startup', async (track) => {
        const result = await resetStreaks();
        if (result) track(result);
      });
    } catch (err) {
      logger.error('[STARTUP] Streak reset failed', { error: String(err) });
    }
  }

  // Prepare today's questions if not already done (idempotent)
  logger.info('[STARTUP] Preparing scheduled questions...');
  try {
    await withCronRun('prepareScheduledQuestions:startup', async (track) => {
      const result = await prepareScheduledQuestions();
      if (result) track(result);
    });
  } catch (err) {
    logger.error('[STARTUP] Question preparation failed', { error: String(err) });
  }

  // Set bot menu commands
  await setBotCommands();

  // Keep database connection alive — Hostinger kills idle connections after ~60s
  // A lightweight query every 30 seconds prevents the pool from going stale
  setInterval(async () => {
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch {
      // Silently ignore — the next real query will reconnect
    }
  }, 30_000);

  // Start scheduled jobs
  startScheduler(bot);

  // Start the health-check HTTP server (Railway / external uptime monitors)
  startHealthServer();

  // Start the bot.
  // allowed_updates is explicit because `my_chat_member` is NOT in the default
  // set — without listing it, Telegram silently drops block/unblock events even
  // though our handler is registered. Once we list it, we must also list every
  // other update type we still want (Telegram replaces the default, not merges).
  bot.start({
    allowed_updates: ['message', 'edited_message', 'callback_query', 'my_chat_member'],
    onStart: async () => {
      logger.info('Bot is running! Press Ctrl+C to stop.');

      // Send first question catch-up if we're past 14:30 Cairo
      // (runs after bot.start so we can send messages)
      if (cairoTimeMinutes >= 14 * 60 + 30) {
        logger.info('[STARTUP] Running send-first-question catch-up...');
        try {
          await withCronRun('sendFirstQuestion:startup', async (track) => {
            const result = await sendFirstQuestion(bot);
            if (result) track(result);
          });
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

main().catch(async (error) => {
  logger.error('Fatal error', { error: String(error) });
  // Don't exit immediately — wait 5 minutes before exiting.
  // This prevents Railway's restart from burning Hostinger's 500 conn/hour limit.
  logger.info('Waiting 5 minutes before exit to avoid connection limit burn...');
  await new Promise((r) => setTimeout(r, 5 * 60 * 1000));
  process.exit(1);
});
