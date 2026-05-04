import { describe, it, expect } from 'vitest';
import { checkOpenEndedAnswer } from '../services/validation.service';

describe('checkOpenEndedAnswer', () => {
  it('returns isCorrect=true when input parses to the expected number', () => {
    expect(checkOpenEndedAnswer('5', 5)).toEqual({ isCorrect: true, parsed: 5 });
    expect(checkOpenEndedAnswer('42', 42)).toEqual({ isCorrect: true, parsed: 42 });
  });

  it('returns isCorrect=false when input is wrong', () => {
    const result = checkOpenEndedAnswer('5', 7);
    expect(result.isCorrect).toBe(false);
    expect(result.parsed).toBe(5);
  });

  it('returns isCorrect=false and parsed=null when input is non-numeric', () => {
    expect(checkOpenEndedAnswer('hello', 5)).toEqual({ isCorrect: false, parsed: null });
    expect(checkOpenEndedAnswer('', 5)).toEqual({ isCorrect: false, parsed: null });
  });

  it('handles Arabic-Indic digits', () => {
    // ٥ = 5 in Arabic-Indic
    expect(checkOpenEndedAnswer('٥', 5)).toEqual({ isCorrect: true, parsed: 5 });
    expect(checkOpenEndedAnswer('١٥', 15)).toEqual({ isCorrect: true, parsed: 15 });
  });

  it('handles answer with surrounding text (Arabic units)', () => {
    // The kid types "5 جنيه" instead of just "5"
    expect(checkOpenEndedAnswer('5 جنيه', 5).isCorrect).toBe(true);
  });

  it('handles fractions', () => {
    expect(checkOpenEndedAnswer('1/2', 0.5).isCorrect).toBe(true);
    expect(checkOpenEndedAnswer('3/4', 0.75).isCorrect).toBe(true);
  });

  it('handles mixed numbers', () => {
    expect(checkOpenEndedAnswer('1 1/2', 1.5).isCorrect).toBe(true);
  });

  it('handles decimals', () => {
    expect(checkOpenEndedAnswer('3.5', 3.5).isCorrect).toBe(true);
    expect(checkOpenEndedAnswer('0.25', 0.25).isCorrect).toBe(true);
  });

  it('handles negative numbers', () => {
    expect(checkOpenEndedAnswer('-5', -5).isCorrect).toBe(true);
  });

  it('handles whitespace-padded input', () => {
    expect(checkOpenEndedAnswer('  42  ', 42).isCorrect).toBe(true);
  });

  it('considers floating-point near-misses correct (parseNumericAnswer policy)', () => {
    // The numeric matcher allows tiny floating-point error so "0.1 + 0.2" → 0.3
    // doesn't get rejected. Verify the contract.
    expect(checkOpenEndedAnswer('0.3', 0.30000000000000004).isCorrect).toBe(true);
  });

  it('rejects close-but-wrong answers', () => {
    expect(checkOpenEndedAnswer('5', 5.5).isCorrect).toBe(false);
    expect(checkOpenEndedAnswer('5', 6).isCorrect).toBe(false);
  });
});
