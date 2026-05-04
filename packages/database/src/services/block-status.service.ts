import prisma from '../client';

/**
 * Block-status service — tracks whether a Telegram account currently has the bot blocked.
 *
 * Why this exists:
 *   When a user blocks the bot, every subsequent Telegram API call to them returns
 *   "403 Forbidden: bot was blocked by the user". With ~10 outbound messages per
 *   day per user (questions, reminders, nudges, ranking broadcasts) and a 500
 *   connection/hour Hostinger budget, blindly retrying blocked users wastes both
 *   Telegram rate budget and DB connections — and pollutes logs.
 *
 *   accounts.blocked_at carries the state:
 *     * NULL              — reachable
 *     * non-null timestamp — blocked since this moment
 *
 * How the state is kept correct (two layers, both self-healing):
 *
 *   Real-time (preferred): the bot subscribes to `my_chat_member` updates and
 *   sets/clears blocked_at the instant the user blocks/unblocks. See the
 *   handler in apps/bot/src/bot/index.ts.
 *
 *   Fallback: if a `my_chat_member` event is missed (e.g. the bot was offline),
 *   we converge in two ways:
 *     * On send-side 403 errors → we mark blocked.
 *     * When the user sends ANY message → the session middleware clears the
 *       flag (they couldn't have sent it without unblocking us first).
 *
 * Outbound crons filter `blocked_at IS NULL` at the SQL level so a blocked
 * account simply doesn't appear in the candidate list.
 */

// ─── Pure helper ────────────────────────────────────────────────────

/** True if this Telegram error indicates the user has blocked the bot. */
export function isBlockedError(err: unknown): boolean {
  return String(err).includes('bot was blocked by the user');
}

// ─── DB mutators ────────────────────────────────────────────────────
//
// Both use updateMany with a where-guard so they're idempotent and atomic:
// no extra read round-trip, and a re-block / re-unblock is a no-op.

/**
 * Mark an account as blocked. Idempotent: if already blocked, does nothing.
 * Returns true if the state actually changed (i.e. it transitioned from
 * reachable to blocked), false otherwise.
 *
 * Accounts that don't exist (e.g. user blocked the bot before /start) are
 * silently skipped — updateMany matches zero rows and returns count 0.
 */
export async function markAccountBlocked(telegramId: bigint, at = new Date()): Promise<boolean> {
  const result = await prisma.account.updateMany({
    where: { telegramId, blockedAt: null },
    data: { blockedAt: at },
  });
  return result.count > 0;
}

/**
 * Mark an account as reachable again. Idempotent: if already not-blocked,
 * does nothing. Returns true if the state actually changed (i.e. it
 * transitioned from blocked to reachable), false otherwise. The caller
 * can use this to send a "welcome back" message only on real transitions.
 */
export async function markAccountUnblocked(telegramId: bigint): Promise<boolean> {
  const result = await prisma.account.updateMany({
    where: { telegramId, blockedAt: { not: null } },
    data: { blockedAt: null },
  });
  return result.count > 0;
}
