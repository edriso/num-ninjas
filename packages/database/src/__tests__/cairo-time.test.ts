import { describe, it, expect } from 'vitest';
import {
  todayCairoString,
  todayCairoAsUtcMidnight,
  todayCairoStartUtc,
  cairoDateString,
  formatCairoDate,
  formatCairoDateTime,
} from '../utils/cairo-time';

describe('todayCairoString', () => {
  it('should return a string in YYYY-MM-DD format', () => {
    const result = todayCairoString();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('should return a valid date', () => {
    const result = todayCairoString();
    const parsed = new Date(result);
    expect(parsed.toString()).not.toBe('Invalid Date');
  });

  it('should return a reasonable year', () => {
    const result = todayCairoString();
    const year = parseInt(result.split('-')[0], 10);
    expect(year).toBeGreaterThanOrEqual(2024);
    expect(year).toBeLessThanOrEqual(2030);
  });

  it('should return a valid month (01-12)', () => {
    const result = todayCairoString();
    const month = parseInt(result.split('-')[1], 10);
    expect(month).toBeGreaterThanOrEqual(1);
    expect(month).toBeLessThanOrEqual(12);
  });

  it('should return a valid day (01-31)', () => {
    const result = todayCairoString();
    const day = parseInt(result.split('-')[2], 10);
    expect(day).toBeGreaterThanOrEqual(1);
    expect(day).toBeLessThanOrEqual(31);
  });
});

describe('todayCairoAsUtcMidnight', () => {
  it('should return a Date object', () => {
    const result = todayCairoAsUtcMidnight();
    expect(result).toBeInstanceOf(Date);
  });

  it('should have hours set to 0 UTC', () => {
    const result = todayCairoAsUtcMidnight();
    expect(result.getUTCHours()).toBe(0);
  });

  it('should have minutes set to 0 UTC', () => {
    const result = todayCairoAsUtcMidnight();
    expect(result.getUTCMinutes()).toBe(0);
  });

  it('should have seconds set to 0 UTC', () => {
    const result = todayCairoAsUtcMidnight();
    expect(result.getUTCSeconds()).toBe(0);
  });

  it('should have milliseconds set to 0 UTC', () => {
    const result = todayCairoAsUtcMidnight();
    expect(result.getUTCMilliseconds()).toBe(0);
  });

  it('should match the date from todayCairoString', () => {
    const dateStr = todayCairoString();
    const midnight = todayCairoAsUtcMidnight();
    const expected = new Date(dateStr + 'T00:00:00.000Z');
    expect(midnight.getTime()).toBe(expected.getTime());
  });
});

describe('todayCairoStartUtc', () => {
  it('should return a Date object', () => {
    const result = todayCairoStartUtc();
    expect(result).toBeInstanceOf(Date);
  });

  it('should represent 00:00:00 in Cairo timezone', () => {
    const result = todayCairoStartUtc();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Cairo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const parts = formatter.formatToParts(result);
    const hour = parts.find((p) => p.type === 'hour')?.value;
    const minute = parts.find((p) => p.type === 'minute')?.value;
    const second = parts.find((p) => p.type === 'second')?.value;
    expect(hour).toBe('00');
    expect(minute).toBe('00');
    expect(second).toBe('00');
  });

  it('should be at or before the current time', () => {
    const result = todayCairoStartUtc();
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it('should be 2 or 3 hours before todayCairoAsUtcMidnight (Cairo offset)', () => {
    const start = todayCairoStartUtc();
    const utcMidnight = todayCairoAsUtcMidnight();
    const diffHours = (utcMidnight.getTime() - start.getTime()) / 3_600_000;
    // Cairo is UTC+2 (winter) or UTC+3 (DST — last Friday of April)
    expect(diffHours).toBeGreaterThanOrEqual(2);
    expect(diffHours).toBeLessThanOrEqual(3);
  });

  it('should fall on the same Cairo calendar date as todayCairoString', () => {
    const result = todayCairoStartUtc();
    const cairoDate = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Africa/Cairo',
    }).format(result);
    expect(cairoDate).toBe(todayCairoString());
  });
});

describe('formatCairoDate', () => {
  it('should return a string containing Arabic text', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    const result = formatCairoDate(date);
    // Should contain Arabic characters
    expect(result).toMatch(/[\u0600-\u06FF]/);
  });

  it('should contain the day number', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    const result = formatCairoDate(date);
    // ar-EG locale may use Arabic-Indic (١٥) or Western (15) digits
    expect(result).toMatch(/15|١٥/);
  });

  it('should contain the year', () => {
    const date = new Date('2024-06-15T12:00:00Z');
    const result = formatCairoDate(date);
    expect(result).toMatch(/2024|٢٠٢٤/);
  });

  it('should format different dates differently', () => {
    const date1 = new Date('2024-01-15T12:00:00Z');
    const date2 = new Date('2024-06-20T12:00:00Z');
    expect(formatCairoDate(date1)).not.toBe(formatCairoDate(date2));
  });

  it('should handle dates at year boundaries', () => {
    const date = new Date('2024-12-31T23:00:00Z');
    const result = formatCairoDate(date);
    // Cairo is UTC+2/+3, so this could be Jan 1 in Cairo
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('formatCairoDateTime', () => {
  it('should return a string containing Arabic text', () => {
    const date = new Date('2024-01-15T14:30:00Z');
    const result = formatCairoDateTime(date);
    expect(result).toMatch(/[\u0600-\u06FF]/);
  });

  it('should include time information', () => {
    const date = new Date('2024-01-15T14:30:00Z');
    const result = formatCairoDateTime(date);
    // Should contain a colon for time (HH:MM)
    expect(result).toMatch(/:/);
  });

  it('should contain the year', () => {
    const date = new Date('2024-06-15T10:00:00Z');
    const result = formatCairoDateTime(date);
    expect(result).toMatch(/2024|٢٠٢٤/);
  });

  it('should format different times differently', () => {
    const date1 = new Date('2024-01-15T08:00:00Z');
    const date2 = new Date('2024-01-15T20:00:00Z');
    expect(formatCairoDateTime(date1)).not.toBe(formatCairoDateTime(date2));
  });

  it('should handle midnight UTC (which is 2/3 AM in Cairo)', () => {
    const date = new Date('2024-06-15T00:00:00Z');
    const result = formatCairoDateTime(date);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('cairoDateString (parameterised)', () => {
  it('returns YYYY-MM-DD for a noon UTC date in winter (UTC+2)', () => {
    // Noon UTC on Feb 10 = 14:00 Cairo (winter). Same Cairo date.
    expect(cairoDateString(new Date('2026-02-10T12:00:00Z'))).toBe('2026-02-10');
  });

  it('returns the next Cairo day for late-evening UTC in winter', () => {
    // 22:30 UTC = 00:30 Cairo next day (UTC+2). New Cairo date.
    expect(cairoDateString(new Date('2026-02-10T22:30:00Z'))).toBe('2026-02-11');
  });

  it('returns the same Cairo day for 21:00 UTC in winter (boundary)', () => {
    // 21:00 UTC = 23:00 Cairo, still same day.
    expect(cairoDateString(new Date('2026-02-10T21:00:00Z'))).toBe('2026-02-10');
  });

  it('handles DST (UTC+3) — late June example', () => {
    // June 15 14:00 UTC = June 15 17:00 Cairo (UTC+3 DST). Same Cairo date.
    expect(cairoDateString(new Date('2026-06-15T14:00:00Z'))).toBe('2026-06-15');
  });

  it('handles DST boundary — 21:00 UTC in summer is next Cairo day', () => {
    // June 15 21:00 UTC = June 16 00:00 Cairo (UTC+3). Next Cairo day.
    expect(cairoDateString(new Date('2026-06-15T21:00:00Z'))).toBe('2026-06-16');
  });

  it('handles month boundary (Jan 31 → Feb 1)', () => {
    expect(cairoDateString(new Date('2026-01-31T22:30:00Z'))).toBe('2026-02-01');
  });

  it('handles year boundary (Dec 31 → Jan 1)', () => {
    expect(cairoDateString(new Date('2025-12-31T23:00:00Z'))).toBe('2026-01-01');
  });
});

describe('Cairo time — DST behavior', () => {
  // Egypt observes DST from the last Friday of April (springs 00:00 → 01:00)
  // through the last Thursday of October (falls 00:00 → 23:00 prev day).
  // Source: https://www.timeanddate.com/time/zone/egypt/cairo

  it('returns UTC+2 offset for a winter date', () => {
    const winter = new Date('2026-01-15T12:00:00Z');
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Cairo',
      hour: '2-digit',
      hour12: false,
    });
    const cairoHour = parseInt(formatter.format(winter), 10);
    expect(cairoHour - 12).toBe(2); // UTC+2 in winter
  });

  it('returns UTC+3 offset for a summer DST date (mid-July)', () => {
    const summer = new Date('2026-07-15T12:00:00Z');
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Cairo',
      hour: '2-digit',
      hour12: false,
    });
    const cairoHour = parseInt(formatter.format(summer), 10);
    expect(cairoHour - 12).toBe(3); // UTC+3 during DST
  });

  it('cairoDateString is correct on the DST spring-forward day (April 24, 2026 — last Friday)', () => {
    // April 25 2026 is the last Friday of April → spring forward at 00:00 Cairo → jumps to 01:00
    // April 24 noon UTC = April 24 14:00 Cairo (still UTC+2)
    expect(cairoDateString(new Date('2026-04-24T12:00:00Z'))).toBe('2026-04-24');
    // April 25 noon UTC = April 25 15:00 Cairo (now UTC+3 after spring forward)
    expect(cairoDateString(new Date('2026-04-25T12:00:00Z'))).toBe('2026-04-25');
  });

  it('cairoDateString is correct on the DST fall-back day (October 30, 2026 — last Thursday/Friday)', () => {
    // Around the fall-back boundary, dates should still cleanly map to Cairo days.
    expect(cairoDateString(new Date('2026-10-29T12:00:00Z'))).toBe('2026-10-29');
    expect(cairoDateString(new Date('2026-10-31T12:00:00Z'))).toBe('2026-10-31');
  });

  it('todayCairoStartUtc respects DST offset (offset between 2h and 3h)', () => {
    // We can't pin "today" but the difference must be exactly 2 or 3 hours.
    const start = todayCairoStartUtc();
    const utcMidnight = todayCairoAsUtcMidnight();
    const diffHours = (utcMidnight.getTime() - start.getTime()) / 3_600_000;
    expect([2, 3]).toContain(diffHours);
  });
});
