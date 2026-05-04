import { isBlockedError, markAccountBlocked, logger } from '@numninjas/database';

/**
 * Self-healing handler for outbound send failures.
 *
 * Call this from any cron's catch block after `bot.api.sendMessage` rejects.
 * If the error is "bot was blocked by the user", we mirror that into
 * accounts.blocked_at so future crons skip the user — even if Telegram's
 * `my_chat_member` event was missed (e.g. the bot was offline when the user
 * blocked us).
 *
 * Other errors (chat not found, user is deactivated, network blips) are not
 * treated as a block — they're returned as `false` so the caller decides how
 * to log / retry. This keeps blocked_at semantically clean: only set on real
 * "user blocked the bot" errors.
 */
export async function handleSendError(err: unknown, telegramId: bigint | number): Promise<{ blocked: boolean }> {
  if (!isBlockedError(err)) return { blocked: false };

  const idBigInt = typeof telegramId === 'bigint' ? telegramId : BigInt(telegramId);
  try {
    const changed = await markAccountBlocked(idBigInt);
    if (changed) {
      logger.info('Detected blocked bot via send-side 403, marked account', { telegramId: Number(idBigInt) });
    }
  } catch (markErr) {
    logger.warn('Failed to mark account as blocked after 403', {
      telegramId: Number(idBigInt),
      error: String(markErr),
    });
  }
  return { blocked: true };
}
