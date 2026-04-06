import { describe, it, expect } from 'vitest';
import {
  todayCairoString,
  todayCairoAsUtcMidnight,
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
    // Should contain 15 (possibly in Arabic-Indic numerals)
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
