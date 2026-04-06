import { describe, it, expect } from 'vitest';
import { getWeekStart, getMonthStart, getYearStart } from '../services/ranking.service';

describe('getWeekStart', () => {
  it('should return Sunday for a Sunday input', () => {
    // 2024-01-07 is a Sunday
    const date = new Date('2024-01-07T12:00:00Z');
    const result = getWeekStart(date);
    expect(result.getUTCDay()).toBe(0); // Sunday
    expect(result.toISOString()).toBe('2024-01-07T00:00:00.000Z');
  });

  it('should return previous Sunday for a Monday', () => {
    // 2024-01-08 is a Monday
    const date = new Date('2024-01-08T15:30:00Z');
    const result = getWeekStart(date);
    expect(result.getUTCDay()).toBe(0);
    expect(result.toISOString()).toBe('2024-01-07T00:00:00.000Z');
  });

  it('should return previous Sunday for a Wednesday', () => {
    // 2024-01-10 is a Wednesday
    const date = new Date('2024-01-10T08:00:00Z');
    const result = getWeekStart(date);
    expect(result.getUTCDay()).toBe(0);
    expect(result.toISOString()).toBe('2024-01-07T00:00:00.000Z');
  });

  it('should return previous Sunday for a Saturday', () => {
    // 2024-01-13 is a Saturday
    const date = new Date('2024-01-13T23:59:59Z');
    const result = getWeekStart(date);
    expect(result.getUTCDay()).toBe(0);
    expect(result.toISOString()).toBe('2024-01-07T00:00:00.000Z');
  });

  it('should return previous Sunday for a Friday', () => {
    // 2024-01-12 is a Friday
    const date = new Date('2024-01-12T10:00:00Z');
    const result = getWeekStart(date);
    expect(result.toISOString()).toBe('2024-01-07T00:00:00.000Z');
  });

  it('should set time to midnight UTC', () => {
    const date = new Date('2024-01-10T18:45:30.123Z');
    const result = getWeekStart(date);
    expect(result.getUTCHours()).toBe(0);
    expect(result.getUTCMinutes()).toBe(0);
    expect(result.getUTCSeconds()).toBe(0);
    expect(result.getUTCMilliseconds()).toBe(0);
  });

  it('should not mutate the original date', () => {
    const date = new Date('2024-01-10T12:00:00Z');
    const originalTime = date.getTime();
    getWeekStart(date);
    expect(date.getTime()).toBe(originalTime);
  });

  it('should handle week spanning month boundary', () => {
    // 2024-02-01 is a Thursday, previous Sunday is Jan 28
    const date = new Date('2024-02-01T12:00:00Z');
    const result = getWeekStart(date);
    expect(result.toISOString()).toBe('2024-01-28T00:00:00.000Z');
  });

  it('should handle week spanning year boundary', () => {
    // 2024-01-03 is a Wednesday, previous Sunday is Dec 31 2023
    const date = new Date('2024-01-03T12:00:00Z');
    const result = getWeekStart(date);
    expect(result.toISOString()).toBe('2023-12-31T00:00:00.000Z');
  });

  it('should handle a Tuesday', () => {
    // 2024-01-09 is a Tuesday
    const date = new Date('2024-01-09T00:00:00Z');
    const result = getWeekStart(date);
    expect(result.toISOString()).toBe('2024-01-07T00:00:00.000Z');
  });

  it('should handle a Thursday', () => {
    // 2024-01-11 is a Thursday
    const date = new Date('2024-01-11T00:00:00Z');
    const result = getWeekStart(date);
    expect(result.toISOString()).toBe('2024-01-07T00:00:00.000Z');
  });
});

describe('getMonthStart', () => {
  it('should return the 1st of the same month', () => {
    const date = new Date('2024-03-15T12:00:00Z');
    const result = getMonthStart(date);
    expect(result.getUTCDate()).toBe(1);
    expect(result.getUTCMonth()).toBe(2); // March = 2
    expect(result.getUTCFullYear()).toBe(2024);
  });

  it('should set time to midnight UTC', () => {
    const date = new Date('2024-03-15T18:45:30.123Z');
    const result = getMonthStart(date);
    expect(result.getUTCHours()).toBe(0);
    expect(result.getUTCMinutes()).toBe(0);
    expect(result.getUTCSeconds()).toBe(0);
    expect(result.getUTCMilliseconds()).toBe(0);
  });

  it('should handle the first day of a month', () => {
    const date = new Date('2024-06-01T00:00:00Z');
    const result = getMonthStart(date);
    expect(result.toISOString()).toBe('2024-06-01T00:00:00.000Z');
  });

  it('should handle the last day of a month', () => {
    const date = new Date('2024-01-31T23:59:59Z');
    const result = getMonthStart(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });

  it('should handle February in a leap year', () => {
    const date = new Date('2024-02-29T12:00:00Z');
    const result = getMonthStart(date);
    expect(result.toISOString()).toBe('2024-02-01T00:00:00.000Z');
  });

  it('should handle December', () => {
    const date = new Date('2024-12-25T12:00:00Z');
    const result = getMonthStart(date);
    expect(result.toISOString()).toBe('2024-12-01T00:00:00.000Z');
  });

  it('should handle January', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    const result = getMonthStart(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });

  it('should not mutate the original date', () => {
    const date = new Date('2024-03-15T12:00:00Z');
    const originalTime = date.getTime();
    getMonthStart(date);
    expect(date.getTime()).toBe(originalTime);
  });
});

describe('getYearStart', () => {
  it('should return January 1st of the same year', () => {
    const date = new Date('2024-06-15T12:00:00Z');
    const result = getYearStart(date);
    expect(result.getUTCFullYear()).toBe(2024);
    expect(result.getUTCMonth()).toBe(0); // January
    expect(result.getUTCDate()).toBe(1);
  });

  it('should set time to midnight UTC', () => {
    const date = new Date('2024-06-15T18:45:30.123Z');
    const result = getYearStart(date);
    expect(result.getUTCHours()).toBe(0);
    expect(result.getUTCMinutes()).toBe(0);
    expect(result.getUTCSeconds()).toBe(0);
    expect(result.getUTCMilliseconds()).toBe(0);
  });

  it('should handle January 1st input', () => {
    const date = new Date('2024-01-01T00:00:00Z');
    const result = getYearStart(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });

  it('should handle December 31st input', () => {
    const date = new Date('2024-12-31T23:59:59Z');
    const result = getYearStart(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });

  it('should handle different years', () => {
    const date2023 = new Date('2023-08-20T12:00:00Z');
    const date2025 = new Date('2025-03-10T12:00:00Z');
    expect(getYearStart(date2023).getUTCFullYear()).toBe(2023);
    expect(getYearStart(date2025).getUTCFullYear()).toBe(2025);
  });

  it('should not mutate the original date', () => {
    const date = new Date('2024-06-15T12:00:00Z');
    const originalTime = date.getTime();
    getYearStart(date);
    expect(date.getTime()).toBe(originalTime);
  });

  it('should handle a leap year date', () => {
    const date = new Date('2024-02-29T12:00:00Z');
    const result = getYearStart(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });
});
