import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import {
  findAccountNudgeCandidates,
  findUserNudgeCandidates,
  markAccountNudged,
  markUserNudged,
  logger,
} from '@numninjas/database';
import { getMessages } from '../bot/messages';

/**
 * Daily 18:00 Cairo cron — sends re-engagement nudges to three drop-off groups:
 *
 *   1. Onboarding-abandoned — Account hit /start but never finished a profile (24h+).
 *   2. Never-engaged        — Profile created but no question ever answered (3d+).
 *   3. Went-silent          — Profile was active, then went quiet (10d+).
 *
 * The selection rules — and the one-nudge-per-streak guarantee — live in
 * engagement-nudge.service.ts. This file only handles the Telegram side: build
 * the message in the right language, send it, mark the row, log.
 *
 * If a user has blocked the bot or deleted their account we still mark the row
 * so we don't try again every day forever. Other send errors are NOT marked,
 * so a transient Telegram blip lets us retry tomorrow.
 *
 * Onboarding-abandoned accounts have no locale preference (no profile yet),
 * so we default to Arabic — the bot's primary audience per CLAUDE.md.
 */
export async function sendEngagementNudges(bot: Bot<BotContext>) {
  const now = new Date();
  let sent = 0;
  let failed = 0;

  // ─── Onboarding-abandoned (account-level) ───────────────────────
  const accountCandidates = await findAccountNudgeCandidates(now);
  for (const c of accountCandidates) {
    const chatId = Number(c.telegramId);
    const text = getMessages('ar').nudgeOnboardingAbandoned;
    try {
      await bot.api.sendMessage(chatId, text, { parse_mode: 'Markdown' });
      await markAccountNudged(c.telegramId, now);
      sent++;
    } catch (err) {
      failed++;
      logSendFailure(err, chatId, 'onboarding_abandoned');
      if (isUnreachable(err)) {
        // Don't keep trying tomorrow — they've blocked us or the chat is gone.
        await markAccountNudged(c.telegramId, now).catch(() => undefined);
      }
    }
  }

  // ─── Never-engaged + went-silent (profile-level) ────────────────
  const userCandidates = await findUserNudgeCandidates(now);
  for (const c of userCandidates) {
    const chatId = Number(c.telegramId);
    const m = getMessages(c.locale);
    const text = c.cohort === 'never_engaged'
      ? m.nudgeNeverEngaged(c.nickname)
      : m.nudgeWentSilent(c.nickname);
    try {
      await bot.api.sendMessage(chatId, text, { parse_mode: 'Markdown' });
      await markUserNudged(c.userId, now);
      sent++;
    } catch (err) {
      failed++;
      logSendFailure(err, chatId, c.cohort);
      if (isUnreachable(err)) {
        await markUserNudged(c.userId, now).catch(() => undefined);
      }
    }
  }

  logger.info('Engagement nudges sent', {
    sent,
    failed,
    onboardingAbandoned: accountCandidates.length,
    profileLevel: userCandidates.length,
  });
}

/** Telegram errors that mean the user is permanently unreachable from this bot. */
function isUnreachable(err: unknown): boolean {
  const s = String(err);
  return (
    s.includes('bot was blocked') ||
    s.includes('user is deactivated') ||
    s.includes('chat not found')
  );
}

function logSendFailure(err: unknown, telegramId: number, kind: string) {
  if (isUnreachable(err)) {
    logger.warn('Nudge target unreachable, marking as nudged', { telegramId, kind });
  } else {
    logger.error('Failed to send nudge', { telegramId, kind, error: String(err) });
  }
}
