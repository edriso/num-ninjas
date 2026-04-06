import { describe, it, expect } from 'vitest';
import {
  normalizeArabicNumerals,
  parseNumericAnswer,
  isNumericMatch,
} from '../utils/arabic-numerals';

describe('normalizeArabicNumerals', () => {
  it('should convert all Arabic-Indic digits to Western digits', () => {
    expect(normalizeArabicNumerals('0123456789')).toBe('0123456789');
  });

  it('should convert individual Arabic digits', () => {
    expect(normalizeArabicNumerals('5')).toBe('5');
    expect(normalizeArabicNumerals('0')).toBe('0');
    expect(normalizeArabicNumerals('9')).toBe('9');
  });

  it('should leave Western digits unchanged', () => {
    expect(normalizeArabicNumerals('12345')).toBe('12345');
  });

  it('should handle mixed Arabic and Western digits', () => {
    expect(normalizeArabicNumerals('357')).toBe('357');
  });

  it('should preserve non-digit characters', () => {
    expect(normalizeArabicNumerals('3/4')).toBe('3/4');
    expect(normalizeArabicNumerals('2 1/4')).toBe('2 1/4');
  });

  it('should return empty string for empty input', () => {
    expect(normalizeArabicNumerals('')).toBe('');
  });

  it('should preserve Latin text alongside digits', () => {
    expect(normalizeArabicNumerals('abc 321 xyz')).toBe('abc 321 xyz');
  });

  it('should preserve Arabic text alongside digits', () => {
    expect(normalizeArabicNumerals('جنيه 50')).toBe('جنيه 50');
  });

  it('should handle string with only non-digit characters', () => {
    expect(normalizeArabicNumerals('hello world')).toBe('hello world');
  });
});

describe('parseNumericAnswer', () => {
  describe('plain numbers', () => {
    it('should parse a simple integer', () => {
      expect(parseNumericAnswer('42')).toBe(42);
    });

    it('should parse zero', () => {
      expect(parseNumericAnswer('0')).toBe(0);
    });

    it('should parse a decimal number', () => {
      expect(parseNumericAnswer('3.14')).toBe(3.14);
    });

    it('should parse a negative integer', () => {
      expect(parseNumericAnswer('-7')).toBe(-7);
    });

    it('should parse a negative decimal', () => {
      expect(parseNumericAnswer('-2.5')).toBe(-2.5);
    });

    it('should handle leading/trailing whitespace', () => {
      expect(parseNumericAnswer('  42  ')).toBe(42);
    });

    it('should parse very large numbers', () => {
      expect(parseNumericAnswer('1000000')).toBe(1000000);
    });
  });

  describe('Arabic digits', () => {
    it('should parse Arabic-Indic digits', () => {
      expect(parseNumericAnswer('42')).toBe(42);
    });

    it('should parse Arabic zero', () => {
      expect(parseNumericAnswer('0')).toBe(0);
    });

    it('should parse mixed Arabic and Western digits', () => {
      expect(parseNumericAnswer('35')).toBe(35);
    });
  });

  describe('fractions', () => {
    it('should parse a simple fraction', () => {
      expect(parseNumericAnswer('1/4')).toBe(0.25);
    });

    it('should parse a fraction with spaces around slash', () => {
      expect(parseNumericAnswer('1 / 4')).toBe(0.25);
    });

    it('should parse 1/3', () => {
      expect(parseNumericAnswer('1/3')).toBeCloseTo(0.3333, 3);
    });

    it('should parse 3/4', () => {
      expect(parseNumericAnswer('3/4')).toBe(0.75);
    });

    it('should parse a whole number fraction like 6/3', () => {
      expect(parseNumericAnswer('6/3')).toBe(2);
    });

    it('should return null for division by zero in fraction', () => {
      expect(parseNumericAnswer('5/0')).toBeNull();
    });

    it('should parse a negative fraction', () => {
      expect(parseNumericAnswer('-3/4')).toBe(-0.75);
    });

    it('should parse fraction with Arabic digits', () => {
      expect(parseNumericAnswer('3/4')).toBe(0.75);
    });
  });

  describe('mixed numbers', () => {
    it('should parse a mixed number like 2 1/4', () => {
      expect(parseNumericAnswer('2 1/4')).toBe(2.25);
    });

    it('should parse a mixed number like 3 1/2', () => {
      expect(parseNumericAnswer('3 1/2')).toBe(3.5);
    });

    it('should parse a mixed number with Arabic digits', () => {
      expect(parseNumericAnswer('2 1/4')).toBe(2.25);
    });

    it('should return null for mixed number with zero denominator', () => {
      expect(parseNumericAnswer('2 1/0')).toBeNull();
    });

    it('should parse negative mixed number', () => {
      expect(parseNumericAnswer('-1 1/2')).toBe(-0.5);
    });
  });

  describe('European decimal comma', () => {
    it('should parse comma as decimal separator', () => {
      expect(parseNumericAnswer('2,5')).toBe(2.5);
    });

    it('should parse comma decimal with Arabic digits', () => {
      expect(parseNumericAnswer('2,5')).toBe(2.5);
    });

    it('should parse 3,14 as 3.14', () => {
      expect(parseNumericAnswer('3,14')).toBe(3.14);
    });
  });

  describe('unit stripping', () => {
    it('should strip Arabic unit جنيه', () => {
      expect(parseNumericAnswer('50 جنيه')).toBe(50);
    });

    it('should strip Arabic unit كيلو', () => {
      expect(parseNumericAnswer('3 كيلو')).toBe(3);
    });

    it('should strip Latin unit EGP', () => {
      expect(parseNumericAnswer('100 EGP')).toBe(100);
    });

    it('should strip unit before number', () => {
      expect(parseNumericAnswer('جنيه 50')).toBe(50);
    });

    it('should handle unit with no space', () => {
      expect(parseNumericAnswer('50جنيه')).toBe(50);
    });
  });

  describe('invalid input', () => {
    it('should return null for empty string', () => {
      expect(parseNumericAnswer('')).toBeNull();
    });

    it('should return null for pure text', () => {
      expect(parseNumericAnswer('hello')).toBeNull();
    });

    it('should return null for pure Arabic text', () => {
      expect(parseNumericAnswer('مرحبا')).toBeNull();
    });

    it('should return null for whitespace only', () => {
      expect(parseNumericAnswer('   ')).toBeNull();
    });
  });
});

describe('isNumericMatch', () => {
  it('should return true for exact match', () => {
    expect(isNumericMatch(5, 5)).toBe(true);
  });

  it('should return true for match within default tolerance', () => {
    expect(isNumericMatch(5.005, 5)).toBe(true);
  });

  it('should return true at the boundary of default tolerance', () => {
    expect(isNumericMatch(5.01, 5)).toBe(true);
  });

  it('should return false just outside default tolerance', () => {
    expect(isNumericMatch(5.02, 5)).toBe(false);
  });

  it('should work with custom tolerance', () => {
    expect(isNumericMatch(5.1, 5, 0.5)).toBe(true);
  });

  it('should reject value outside custom tolerance', () => {
    expect(isNumericMatch(6, 5, 0.5)).toBe(false);
  });

  it('should handle negative numbers', () => {
    expect(isNumericMatch(-5, -5)).toBe(true);
  });

  it('should handle comparing negative and positive', () => {
    expect(isNumericMatch(-1, 1)).toBe(false);
  });

  it('should handle zero', () => {
    expect(isNumericMatch(0, 0)).toBe(true);
  });

  it('should handle zero tolerance', () => {
    expect(isNumericMatch(5, 5, 0)).toBe(true);
    expect(isNumericMatch(5.001, 5, 0)).toBe(false);
  });

  it('should handle very small differences within tolerance', () => {
    expect(isNumericMatch(0.1 + 0.2, 0.3, 0.01)).toBe(true);
  });

  it('should work with large numbers', () => {
    expect(isNumericMatch(1000000, 1000000.005)).toBe(true);
  });
});
