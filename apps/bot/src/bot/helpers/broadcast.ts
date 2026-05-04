import type { Bot } from 'grammy';
import type { BotContext } from '../middleware/session';
import { logger } from '@numninjas/database';
import { handleSendError } from './send-errors';

/**
 * Default Telegram-side rate limit for outbound bot messages to *different*
 * chats: 30 per second. We pick 25 to leave a small margin for Cloudflare/
 * Hostinger latency variance — empirically 25 in parallel runs in ~300ms,
 * which is well under the 1-second window.
 */
const DEFAULT_CHUNK_SIZE = 25;

interface AccountLike {
  telegramId: bigint;
}

interface BroadcastResult {
  sent: number;
  failed: number;
}

/**
 * Broadcast a message to a list of accounts in parallel chunks.
 *
 * Why this exists:
 *   Sequential `for (account) await sendMessage(...)` runs at the slowest
 *   round-trip latency (~200ms each). With N accounts that's N × 200ms; at
 *   100 accounts the cron blocks for 20 seconds. With 1000, three minutes.
 *
 *   Chunking lets us fire 25 concurrent sendMessage calls, wait for the
 *   slowest, then move to the next 25. 100 accounts → ~1.2s instead of 20s.
 *
 * Error policy:
 *   Each send is wrapped in try/catch + handleSendError, so a 403 (user
 *   blocked) self-heals blocked_at and other failures are swallowed without
 *   stopping the rest of the broadcast. Returns counts so the caller can log.
 *
 * Usage — all accounts get the same message:
 *   await broadcastToAccounts(bot, accounts, () => message);
 *
 * Usage — per-account message (e.g. localized):
 *   await broadcastToAccounts(bot, accounts, (a) => a.locale === 'en' ? enMsg : arMsg);
 */
export async function broadcastToAccounts<T extends AccountLike>(
  bot: Bot<BotContext>,
  accounts: T[],
  buildMessage: (account: T) => string,
  options: { chunkSize?: number; parseMode?: 'Markdown' | 'MarkdownV2' | 'HTML' } = {},
): Promise<BroadcastResult> {
  const chunkSize = options.chunkSize ?? DEFAULT_CHUNK_SIZE;
  const parseMode = options.parseMode ?? 'Markdown';

  let sent = 0;
  let failed = 0;

  for (let i = 0; i < accounts.length; i += chunkSize) {
    const chunk = accounts.slice(i, i + chunkSize);
    await Promise.all(
      chunk.map(async (account) => {
        const message = buildMessage(account);
        try {
          await bot.api.sendMessage(Number(account.telegramId), message, {
            parse_mode: parseMode,
          });
          sent++;
        } catch (err) {
          failed++;
          // Self-heal blocked_at on 403; otherwise just count as failed.
          await handleSendError(err, account.telegramId).catch((handlerErr) => {
            logger.warn('Broadcast send failure handler failed', {
              telegramId: Number(account.telegramId),
              error: String(handlerErr),
            });
          });
        }
      }),
    );
  }

  return { sent, failed };
}
