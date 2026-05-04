import { describe, it, expect } from 'vitest';
import { computeNextStreak } from '../services/streak.service';

// All times in UTC. Cairo is UTC+2 (winter) or UTC+3 (DST: last Friday of April → late October).
// Use clearly non-DST dates for most tests, plus a dedicated DST section.

// Mid-day UTC on a Cairo date — comfortably away from any boundary.
const NOON = (cairoYear: number, cairoMonth: number, cairoDay: number) =>
  new Date(`${cairoYear}-${String(cairoMonth).padStart(2, '0')}-${String(cairoDay).padStart(2, '0')}T10:00:00.000Z`);

const TODAY = NOON(2026, 2, 10); // Feb 10 12:00 Cairo (winter, UTC+2)

describe('computeNextStreak', () => {
  it('returns 1 when lastActiveAt is null (first ever completion)', () => {
    expect(computeNextStreak({ lastActiveAt: null, currentStreak: 0, now: TODAY })).toBe(1);
  });

  it('returns 1 when lastActiveAt is null even if currentStreak somehow > 0 (defensive)', () => {
    // Shouldn't happen in practice, but the function shouldn't trust DB to be consistent.
    expect(computeNextStreak({ lastActiveAt: null, currentStreak: 5, now: TODAY })).toBe(1);
  });

  it('returns currentStreak + 1 when last active was yesterday Cairo', () => {
    const yesterday = NOON(2026, 2, 9);
    expect(computeNextStreak({ lastActiveAt: yesterday, currentStreak: 3, now: TODAY })).toBe(4);
  });

  it('returns currentStreak (no change) when last active was earlier today Cairo', () => {
    // Already counted today — calling updateStreak a second time shouldn't double-count.
    const earlierToday = new Date(TODAY.getTime() - 2 * 60 * 60 * 1000); // 2h before now
    expect(computeNextStreak({ lastActiveAt: earlierToday, currentStreak: 7, now: TODAY })).toBe(7);
  });

  it('returns 1 when last active was 2+ days ago (gap)', () => {
    const twoDaysAgo = NOON(2026, 2, 8);
    expect(computeNextStreak({ lastActiveAt: twoDaysAgo, currentStreak: 10, now: TODAY })).toBe(1);
  });

  it('returns 1 when last active was a week ago', () => {
    const lastWeek = NOON(2026, 2, 3);
    expect(computeNextStreak({ lastActiveAt: lastWeek, currentStreak: 30, now: TODAY })).toBe(1);
  });

  it('handles same-day duplicate calls idempotently (no off-by-one)', () => {
    // A retry after a successful update would call this with currentStreak that already includes today.
    const earlierToday = new Date(TODAY.getTime() - 60 * 1000); // 1 minute ago
    const first = computeNextStreak({ lastActiveAt: NOON(2026, 2, 9), currentStreak: 3, now: TODAY });
    expect(first).toBe(4);
    const second = computeNextStreak({ lastActiveAt: earlierToday, currentStreak: first, now: TODAY });
    expect(second).toBe(4); // unchanged
  });

  it('uses default now() when not supplied', () => {
    // We can't pin "now" but null lastActive must always return 1.
    expect(computeNextStreak({ lastActiveAt: null, currentStreak: 99 })).toBe(1);
  });
});

describe('computeNextStreak — Cairo timezone correctness', () => {
  it('treats 22:00 UTC on a date as that Cairo day (winter, UTC+2)', () => {
    // Feb 10 22:00 UTC = Feb 11 00:00 Cairo. That's the next Cairo day.
    // If the kid plays Feb 10 22:00 UTC and it's now Feb 11 12:00 UTC (Feb 11 14:00 Cairo)...
    // lastActive Cairo date = Feb 11. now Cairo date = Feb 11. Same day → no change.
    const lastActive = new Date('2026-02-10T22:00:00.000Z'); // Feb 11 00:00 Cairo
    const now = new Date('2026-02-11T12:00:00.000Z');         // Feb 11 14:00 Cairo
    expect(computeNextStreak({ lastActiveAt: lastActive, currentStreak: 5, now })).toBe(5);
  });

  it('treats 21:00 UTC on a date as the same Cairo day (winter)', () => {
    // Feb 10 21:00 UTC = Feb 10 23:00 Cairo. Still Feb 10 in Cairo.
    // If now is Feb 11 12:00 UTC (Feb 11 14:00 Cairo), last active was yesterday Cairo.
    const lastActive = new Date('2026-02-10T21:00:00.000Z');
    const now = new Date('2026-02-11T12:00:00.000Z');
    expect(computeNextStreak({ lastActiveAt: lastActive, currentStreak: 5, now })).toBe(6);
  });

  it('handles DST (UTC+3) — late June, summer time in Egypt', () => {
    // June 15 in Cairo: UTC+3 (DST). 21:00 UTC = June 16 00:00 Cairo.
    const lastActive = new Date('2026-06-15T21:00:00.000Z'); // June 16 00:00 Cairo
    const now = new Date('2026-06-16T12:00:00.000Z');         // June 16 15:00 Cairo
    // Same Cairo day.
    expect(computeNextStreak({ lastActiveAt: lastActive, currentStreak: 5, now })).toBe(5);
  });

  it('handles DST (UTC+3) — yesterday-vs-today is correct in summer', () => {
    // June 14 22:00 UTC = June 15 01:00 Cairo (UTC+3). That's June 15 Cairo.
    // Now: June 16 12:00 UTC = June 16 15:00 Cairo. Yesterday (Cairo) was June 15.
    const lastActive = new Date('2026-06-14T22:00:00.000Z'); // June 15 01:00 Cairo
    const now = new Date('2026-06-16T12:00:00.000Z');         // June 16 15:00 Cairo
    expect(computeNextStreak({ lastActiveAt: lastActive, currentStreak: 5, now })).toBe(6);
  });

  it('crosses month boundary correctly (Jan 31 → Feb 1)', () => {
    const lastActive = new Date('2026-01-31T12:00:00.000Z'); // Jan 31 14:00 Cairo
    const now = new Date('2026-02-01T12:00:00.000Z');         // Feb 1 14:00 Cairo
    expect(computeNextStreak({ lastActiveAt: lastActive, currentStreak: 4, now })).toBe(5);
  });

  it('crosses year boundary correctly (Dec 31 → Jan 1)', () => {
    const lastActive = new Date('2025-12-31T12:00:00.000Z');
    const now = new Date('2026-01-01T12:00:00.000Z');
    expect(computeNextStreak({ lastActiveAt: lastActive, currentStreak: 100, now })).toBe(101);
  });
});
