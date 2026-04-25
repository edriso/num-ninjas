import { describe, it, expect } from 'vitest';
import { getCleanupCutoff } from '../services/cleanup.service';

describe('getCleanupCutoff', () => {
  it('returns a Date', () => {
    expect(getCleanupCutoff(30)).toBeInstanceOf(Date);
  });

  it('is always set to UTC midnight (no partial-day deletions)', () => {
    const cutoff = getCleanupCutoff(30);
    expect(cutoff.getUTCHours()).toBe(0);
    expect(cutoff.getUTCMinutes()).toBe(0);
    expect(cutoff.getUTCSeconds()).toBe(0);
    expect(cutoff.getUTCMilliseconds()).toBe(0);
  });

  it('is exactly retentionDays before the from date', () => {
    const from = new Date('2026-05-01T00:00:00.000Z');
    const cutoff = getCleanupCutoff(30, from);
    const expected = new Date('2026-04-01T00:00:00.000Z');
    expect(cutoff.getTime()).toBe(expected.getTime());
  });

  it('works across a month boundary', () => {
    const from = new Date('2026-03-10T00:00:00.000Z');
    const cutoff = getCleanupCutoff(30, from);
    const expected = new Date('2026-02-08T00:00:00.000Z');
    expect(cutoff.getTime()).toBe(expected.getTime());
  });

  it('works across a year boundary', () => {
    const from = new Date('2026-01-15T00:00:00.000Z');
    const cutoff = getCleanupCutoff(30, from);
    const expected = new Date('2025-12-16T00:00:00.000Z');
    expect(cutoff.getTime()).toBe(expected.getTime());
  });

  it('cutoff is strictly before the from date', () => {
    const from = new Date('2026-05-01T00:00:00.000Z');
    expect(getCleanupCutoff(30, from).getTime()).toBeLessThan(from.getTime());
  });

  it('larger retentionDays produces an earlier cutoff', () => {
    const from = new Date('2026-05-01T00:00:00.000Z');
    const cutoff30 = getCleanupCutoff(30, from);
    const cutoff60 = getCleanupCutoff(60, from);
    expect(cutoff60.getTime()).toBeLessThan(cutoff30.getTime());
  });

  it('retentionDays = 1 cuts off yesterday', () => {
    const from = new Date('2026-05-01T12:00:00.000Z'); // noon, not midnight
    const cutoff = getCleanupCutoff(1, from);
    const expected = new Date('2026-04-30T00:00:00.000Z');
    expect(cutoff.getTime()).toBe(expected.getTime());
  });

  it('uses current date when no from is given', () => {
    const cutoff = getCleanupCutoff(30);
    // Replicate the function's own logic to get the expected value
    const expected = new Date();
    expected.setUTCDate(expected.getUTCDate() - 30);
    expected.setUTCHours(0, 0, 0, 0);
    expect(cutoff.getTime()).toBe(expected.getTime());
  });
});
