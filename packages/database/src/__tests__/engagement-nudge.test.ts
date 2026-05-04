import { describe, it, expect } from 'vitest';
import {
  classifyAccount,
  classifyUser,
  isSleeping,
  ONBOARDING_ABANDON_HOURS,
  NEVER_ENGAGED_DAYS,
  WENT_SILENT_DAYS,
  SLEEP_NEVER_ENGAGED_DAYS,
  SLEEP_WENT_SILENT_DAYS,
} from '../services/engagement-nudge.service';

const NOW = new Date('2026-05-04T12:00:00.000Z');
const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

const hoursAgo = (h: number) => new Date(NOW.getTime() - h * HOUR);
const daysAgo = (d: number) => new Date(NOW.getTime() - d * DAY);

// ─── classifyAccount — onboarding_abandoned ─────────────────────────

describe('classifyAccount — onboarding_abandoned', () => {
  it('returns null when account already has an active profile', () => {
    expect(
      classifyAccount({
        hasActiveProfile: true,
        createdAt: daysAgo(7),
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBeNull();
  });

  it('returns null when account is younger than the abandon threshold', () => {
    expect(
      classifyAccount({
        hasActiveProfile: false,
        createdAt: hoursAgo(ONBOARDING_ABANDON_HOURS - 1),
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBeNull();
  });

  it('returns onboarding_abandoned exactly at the threshold', () => {
    expect(
      classifyAccount({
        hasActiveProfile: false,
        createdAt: hoursAgo(ONBOARDING_ABANDON_HOURS),
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBe('onboarding_abandoned');
  });

  it('returns onboarding_abandoned past the threshold', () => {
    expect(
      classifyAccount({
        hasActiveProfile: false,
        createdAt: daysAgo(7),
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBe('onboarding_abandoned');
  });

  it('returns null when already nudged (one-shot)', () => {
    expect(
      classifyAccount({
        hasActiveProfile: false,
        createdAt: daysAgo(30),
        lastNudgeAt: daysAgo(20),
        now: NOW,
      }),
    ).toBeNull();
  });

  it('uses default now() when not supplied', () => {
    expect(
      classifyAccount({
        hasActiveProfile: false,
        createdAt: new Date(Date.now() - (ONBOARDING_ABANDON_HOURS + 1) * HOUR),
        lastNudgeAt: null,
      }),
    ).toBe('onboarding_abandoned');
  });
});

// ─── classifyUser ───────────────────────────────────────────────────

describe('classifyUser — never_engaged', () => {
  it('returns never_engaged when never active and past 3 days', () => {
    expect(
      classifyUser({
        createdAt: daysAgo(NEVER_ENGAGED_DAYS),
        lastActiveAt: null,
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBe('never_engaged');
  });

  it('returns null when never active but still within grace window', () => {
    expect(
      classifyUser({
        createdAt: daysAgo(NEVER_ENGAGED_DAYS - 1),
        lastActiveAt: null,
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBeNull();
  });

  it('returns null when never active but already nudged (one-shot)', () => {
    expect(
      classifyUser({
        createdAt: daysAgo(30),
        lastActiveAt: null,
        lastNudgeAt: daysAgo(20),
        now: NOW,
      }),
    ).toBeNull();
  });
});

describe('classifyUser — went_silent', () => {
  it('returns went_silent after 10 days of inactivity, never nudged', () => {
    expect(
      classifyUser({
        createdAt: daysAgo(60),
        lastActiveAt: daysAgo(WENT_SILENT_DAYS),
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBe('went_silent');
  });

  it('returns null before 10 days of inactivity', () => {
    expect(
      classifyUser({
        createdAt: daysAgo(60),
        lastActiveAt: daysAgo(WENT_SILENT_DAYS - 1),
        lastNudgeAt: null,
        now: NOW,
      }),
    ).toBeNull();
  });

  it('returns null when nudge happened AFTER last activity (already covered this streak)', () => {
    expect(
      classifyUser({
        createdAt: daysAgo(60),
        lastActiveAt: daysAgo(20),
        lastNudgeAt: daysAgo(11),
        now: NOW,
      }),
    ).toBeNull();
  });

  it('returns went_silent when nudge happened BEFORE last activity (new streak)', () => {
    // User was nudged a month ago, came back and was active 15 days ago,
    // then went silent again — they deserve a fresh nudge.
    expect(
      classifyUser({
        createdAt: daysAgo(60),
        lastActiveAt: daysAgo(WENT_SILENT_DAYS + 5),
        lastNudgeAt: daysAgo(30),
        now: NOW,
      }),
    ).toBe('went_silent');
  });

  it('returns null when nudge timestamp equals lastActiveAt (boundary)', () => {
    const t = daysAgo(WENT_SILENT_DAYS + 1);
    expect(
      classifyUser({
        createdAt: daysAgo(60),
        lastActiveAt: t,
        lastNudgeAt: t,
        now: NOW,
      }),
    ).toBeNull();
  });
});

// ─── isSleeping ─────────────────────────────────────────────────────

describe('isSleeping', () => {
  it('never-engaged user is awake before 14d', () => {
    expect(
      isSleeping({
        createdAt: daysAgo(SLEEP_NEVER_ENGAGED_DAYS - 1),
        lastActiveAt: null,
        now: NOW,
      }),
    ).toBe(false);
  });

  it('never-engaged user is sleeping at 14d', () => {
    expect(
      isSleeping({
        createdAt: daysAgo(SLEEP_NEVER_ENGAGED_DAYS),
        lastActiveAt: null,
        now: NOW,
      }),
    ).toBe(true);
  });

  it('previously-active user is awake before 30d idle', () => {
    expect(
      isSleeping({
        createdAt: daysAgo(60),
        lastActiveAt: daysAgo(SLEEP_WENT_SILENT_DAYS - 1),
        now: NOW,
      }),
    ).toBe(false);
  });

  it('previously-active user is sleeping at 30d idle', () => {
    expect(
      isSleeping({
        createdAt: daysAgo(60),
        lastActiveAt: daysAgo(SLEEP_WENT_SILENT_DAYS),
        now: NOW,
      }),
    ).toBe(true);
  });

  it('previously-active user with recent activity is awake', () => {
    expect(
      isSleeping({
        createdAt: daysAgo(60),
        lastActiveAt: daysAgo(1),
        now: NOW,
      }),
    ).toBe(false);
  });
});

// ─── Threshold ordering invariants ──────────────────────────────────

describe('threshold invariants', () => {
  it('NEVER_ENGAGED happens before SLEEP_NEVER_ENGAGED', () => {
    expect(NEVER_ENGAGED_DAYS).toBeLessThan(SLEEP_NEVER_ENGAGED_DAYS);
  });

  it('WENT_SILENT happens before SLEEP_WENT_SILENT', () => {
    expect(WENT_SILENT_DAYS).toBeLessThan(SLEEP_WENT_SILENT_DAYS);
  });

  it('a never-engaged user gets nudged before being put to sleep', () => {
    // Day 3: nudgeable. Day 14: sleeping. Verify both are true.
    const d3 = classifyUser({
      createdAt: daysAgo(NEVER_ENGAGED_DAYS),
      lastActiveAt: null,
      lastNudgeAt: null,
      now: NOW,
    });
    expect(d3).toBe('never_engaged');

    const d14 = isSleeping({
      createdAt: daysAgo(SLEEP_NEVER_ENGAGED_DAYS),
      lastActiveAt: null,
      now: NOW,
    });
    expect(d14).toBe(true);
  });
});

// ─── Lifecycle transitions ──────────────────────────────────────────
// These walk through realistic kid journeys to make sure the rules compose well.

describe('lifecycle: never-engaged → engaged → went-silent', () => {
  it('after a never-engaged nudge, engaging clears the slate; later silence triggers a went-silent nudge', () => {
    // Snapshot 1 — Day 3: profile created day 0, never answered. Should be nudgeable.
    const day3 = classifyUser({
      createdAt: daysAgo(13),
      lastActiveAt: null,
      lastNudgeAt: null,
      now: daysAgo(10),
    });
    expect(day3).toBe('never_engaged');

    // Snapshot 2 — Day 5: kid finally answered something. lastNudgeAt was set on day 3,
    // lastActiveAt is now day 5. They should NOT be eligible for any nudge today
    // because the last activity is recent and the went-silent threshold isn't met.
    const day5 = classifyUser({
      createdAt: daysAgo(11),
      lastActiveAt: daysAgo(8),    // active 3 days ago (well within threshold)
      lastNudgeAt: daysAgo(10),     // nudged when they were never-engaged
      now: NOW,
    });
    expect(day5).toBeNull();

    // Snapshot 3 — Day 16: went silent for 11 days after that one answer.
    // Last nudge (day 3, ~16d ago) is BEFORE last activity (day 5, ~11d ago),
    // so this counts as a fresh inactivity streak — should fire went-silent.
    const day16 = classifyUser({
      createdAt: daysAgo(16),
      lastActiveAt: daysAgo(11),    // active 11d ago, idle threshold met
      lastNudgeAt: daysAgo(13),     // earlier, before they came back
      now: NOW,
    });
    expect(day16).toBe('went_silent');
  });
});

describe('lifecycle: went-silent nudge does not repeat in the same streak', () => {
  it('once nudged for a silent streak, no further nudge until they engage again', () => {
    // Day 0: kid was active.
    // Day 10: silent threshold met → first went-silent nudge fires.
    // Day 20: still silent. Same streak, so no second nudge.
    const stillSameStreak = classifyUser({
      createdAt: daysAgo(60),
      lastActiveAt: daysAgo(20),    // last activity was 20d ago
      lastNudgeAt: daysAgo(10),     // we nudged 10d ago, AFTER lastActiveAt
      now: NOW,
    });
    expect(stillSameStreak).toBeNull();
  });
});

describe('lifecycle: a fully-engaged kid is never nudged', () => {
  it('recently-active user with old past nudges still gets no nudge', () => {
    const result = classifyUser({
      createdAt: daysAgo(120),
      lastActiveAt: daysAgo(0.5),   // active 12 hours ago — still engaged
      lastNudgeAt: daysAgo(30),     // we nudged a month ago during a past silent streak
      now: NOW,
    });
    expect(result).toBeNull();
  });
});

describe('lifecycle: account that completes onboarding moves out of account-level nudging', () => {
  it('once an account has an active profile, classifyAccount returns null even if previously nudged', () => {
    // The user got nudged a week ago for not finishing onboarding,
    // then finally created a profile. Account-level classifier must back off.
    const result = classifyAccount({
      hasActiveProfile: true,
      createdAt: daysAgo(14),
      lastNudgeAt: daysAgo(7),
      now: NOW,
    });
    expect(result).toBeNull();
    // Profile-level nudges (never_engaged / went_silent) take over from this point.
  });
});
