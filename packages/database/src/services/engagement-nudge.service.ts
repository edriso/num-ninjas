import prisma from '../client';

/**
 * Engagement-nudge service — re-engages users who drop off at three points.
 *
 * The three drop-off states (used as cohort labels in classifier return values):
 *
 *   onboarding_abandoned — Account hit /start but never finished creating a profile
 *                          (account.activeProfileId is still null after the grace window).
 *   never_engaged        — Profile was created but the kid has never answered a question
 *                          (user.lastActiveAt is still null after the grace window).
 *   went_silent          — Profile was active in the past but has been idle for too long
 *                          (user.lastActiveAt is older than the went-silent threshold).
 *
 * Each state gets ONE nudge per drop-off streak, tracked via last_nudge_at columns:
 *
 *   * accounts.last_nudge_at — set once when the onboarding-abandoned nudge fires.
 *                              Never re-nudged at the account level. Once they create a
 *                              profile, future nudges go through users.last_nudge_at.
 *   * users.last_nudge_at    — set when never-engaged or went-silent fires.
 *                              For went-silent, a fresh inactivity streak unlocks a new
 *                              nudge: if the user comes back, engages, then goes silent
 *                              again, lastNudgeAt < lastActiveAt and we nudge once more.
 *
 * Sleep mode (see isSleeping) is the partner concept: kids who keep ignoring nudges stop
 * receiving daily questions to save Telegram-API rate budget and avoid feeling like spam.
 * They wake up the moment they interact with the bot.
 */

// ─── Thresholds ─────────────────────────────────────────────────────
//
// Tuned for kids ages 10–12 with parent involvement. Conservative on purpose:
// over-nudging gets the bot blocked, which is worse than a passive churn.

/** Hours after /start with no profile before we send the onboarding-abandon nudge. */
export const ONBOARDING_ABANDON_HOURS = 24;

/** Days after profile creation with zero attempts before we nudge a never-engaged user. */
export const NEVER_ENGAGED_DAYS = 3;

/** Days of inactivity after being active before we nudge a went-silent user. */
export const WENT_SILENT_DAYS = 10;

/** Days a never-engaged user can sit idle before we stop sending daily questions. */
export const SLEEP_NEVER_ENGAGED_DAYS = 14;

/** Days a previously-active user can sit idle before we stop sending daily questions. */
export const SLEEP_WENT_SILENT_DAYS = 30;

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MS_PER_HOUR = 60 * 60 * 1000;

// ─── Types ──────────────────────────────────────────────────────────

export type AccountCohort = 'onboarding_abandoned' | null;
export type UserCohort = 'never_engaged' | 'went_silent' | null;

export interface AccountCohortInput {
  hasActiveProfile: boolean;
  createdAt: Date;
  lastNudgeAt: Date | null;
  now?: Date;
}

export interface UserCohortInput {
  createdAt: Date;
  lastActiveAt: Date | null;
  lastNudgeAt: Date | null;
  now?: Date;
}

// ─── Pure classifiers (no DB) ───────────────────────────────────────

/**
 * Decide whether an account is due an onboarding-abandoned nudge.
 * Returns 'onboarding_abandoned' if eligible, otherwise null.
 * Pure function — same inputs always produce the same output.
 */
export function classifyAccount(input: AccountCohortInput): AccountCohort {
  const now = input.now ?? new Date();

  // Already finished onboarding — outside this drop-off state.
  if (input.hasActiveProfile) return null;

  // One-shot: once we've sent the onboarding-abandoned nudge, never repeat at this level.
  if (input.lastNudgeAt !== null) return null;

  // Still inside the grace window after /start — give them time to finish naturally.
  const ageMs = now.getTime() - input.createdAt.getTime();
  if (ageMs < ONBOARDING_ABANDON_HOURS * MS_PER_HOUR) return null;

  return 'onboarding_abandoned';
}

/**
 * Decide whether a user is due a never-engaged or went-silent nudge.
 * Returns the matching state, or null if nothing should fire.
 * Pure function — same inputs always produce the same output.
 */
export function classifyUser(input: UserCohortInput): UserCohort {
  const now = input.now ?? new Date();

  // Never-engaged branch: profile exists but the kid has never answered a question.
  if (input.lastActiveAt === null) {
    // One-shot per profile. If they keep ignoring us past this nudge, sleep mode takes over.
    if (input.lastNudgeAt !== null) return null;

    const ageMs = now.getTime() - input.createdAt.getTime();
    if (ageMs < NEVER_ENGAGED_DAYS * MS_PER_DAY) return null;

    return 'never_engaged';
  }

  // Went-silent branch: kid was active before, but has been idle for a while.
  const idleMs = now.getTime() - input.lastActiveAt.getTime();
  if (idleMs < WENT_SILENT_DAYS * MS_PER_DAY) return null;

  // One nudge per inactivity streak. If we already nudged at-or-after the last active
  // moment, this same streak has been covered — don't nudge again until they come back,
  // engage (lastActiveAt advances past lastNudgeAt), then drop off once more.
  if (input.lastNudgeAt !== null && input.lastNudgeAt >= input.lastActiveAt) return null;

  return 'went_silent';
}

/**
 * Should this user stop receiving daily questions until they engage again?
 * Used by prepare-questions and send-first to filter out long-idle users.
 */
export function isSleeping(input: { lastActiveAt: Date | null; createdAt: Date; now?: Date }): boolean {
  const now = input.now ?? new Date();

  if (input.lastActiveAt === null) {
    const ageMs = now.getTime() - input.createdAt.getTime();
    return ageMs >= SLEEP_NEVER_ENGAGED_DAYS * MS_PER_DAY;
  }

  const idleMs = now.getTime() - input.lastActiveAt.getTime();
  return idleMs >= SLEEP_WENT_SILENT_DAYS * MS_PER_DAY;
}

// ─── DB-backed selectors ────────────────────────────────────────────

export interface AccountNudgeCandidate {
  telegramId: bigint;
  cohort: 'onboarding_abandoned';
}

export interface UserNudgeCandidate {
  userId: number;
  telegramId: bigint;
  nickname: string;
  locale: string;
  cohort: 'never_engaged' | 'went_silent';
}

/**
 * Find all accounts due for an onboarding-abandon nudge.
 * Pre-filters at the SQL level for efficiency, then re-checks with the pure
 * classifier so the rules live in one place.
 */
export async function findAccountNudgeCandidates(now = new Date()): Promise<AccountNudgeCandidate[]> {
  const cutoff = new Date(now.getTime() - ONBOARDING_ABANDON_HOURS * MS_PER_HOUR);

  const accounts = await prisma.account.findMany({
    where: {
      activeProfileId: null,
      lastNudgeAt: null,
      blockedAt: null,
      createdAt: { lte: cutoff },
    },
    select: { telegramId: true, createdAt: true, lastNudgeAt: true },
  });

  const candidates: AccountNudgeCandidate[] = [];
  for (const a of accounts) {
    const cohort = classifyAccount({
      hasActiveProfile: false,
      createdAt: a.createdAt,
      lastNudgeAt: a.lastNudgeAt,
      now,
    });
    if (cohort) candidates.push({ telegramId: a.telegramId, cohort });
  }
  return candidates;
}

/**
 * Find all active-profile users due for a never-engaged or went-silent nudge.
 * Returns only users whose account has them set as the active profile.
 */
export async function findUserNudgeCandidates(now = new Date()): Promise<UserNudgeCandidate[]> {
  // Pull only active profiles (the ones their account is currently using),
  // and skip blocked accounts — sending to them would just 403 and waste budget.
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null }, blockedAt: null },
    select: {
      telegramId: true,
      activeProfile: {
        select: {
          id: true,
          nickname: true,
          locale: true,
          lastActiveAt: true,
          lastNudgeAt: true,
          createdAt: true,
        },
      },
    },
  });

  const candidates: UserNudgeCandidate[] = [];
  for (const a of accounts) {
    if (!a.activeProfile) continue;

    const cohort = classifyUser({
      createdAt: a.activeProfile.createdAt,
      lastActiveAt: a.activeProfile.lastActiveAt,
      lastNudgeAt: a.activeProfile.lastNudgeAt,
      now,
    });
    if (!cohort) continue;

    candidates.push({
      userId: a.activeProfile.id,
      telegramId: a.telegramId,
      nickname: a.activeProfile.nickname,
      locale: a.activeProfile.locale || 'ar',
      cohort,
    });
  }
  return candidates;
}

// ─── Mutation helpers ───────────────────────────────────────────────

export async function markAccountNudged(telegramId: bigint, at = new Date()): Promise<void> {
  await prisma.account.update({
    where: { telegramId },
    data: { lastNudgeAt: at },
  });
}

export async function markUserNudged(userId: number, at = new Date()): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: { lastNudgeAt: at },
  });
}
