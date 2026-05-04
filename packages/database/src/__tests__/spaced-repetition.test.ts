import { describe, it, expect } from 'vitest';
import { REPEAT_INTERVALS } from '../services/spaced-repetition.service';

// getExcludedQuestionIds needs DB access. Here we lock in the exported
// constants and the cooldown math against any future drift.

describe('Spaced Repetition — Interval Logic', () => {
  it('wrong answers have the shortest cooldown (2 days)', () => {
    expect(REPEAT_INTERVALS.WRONG).toBe(2);
    expect(REPEAT_INTERVALS.WRONG).toBeLessThan(REPEAT_INTERVALS.HINT_USED);
  });

  it('hint-used answers have medium cooldown (5 days)', () => {
    expect(REPEAT_INTERVALS.HINT_USED).toBe(5);
    expect(REPEAT_INTERVALS.HINT_USED).toBeLessThan(REPEAT_INTERVALS.CORRECT);
  });

  it('correct answers have the longest cooldown (14 days)', () => {
    expect(REPEAT_INTERVALS.CORRECT).toBe(14);
  });

  it('cooldown calculation: wrong answer 1 day ago is still excluded', () => {
    const answeredAt = new Date();
    answeredAt.setUTCDate(answeredAt.getUTCDate() - 1); // 1 day ago
    const cooldownEnd = new Date(answeredAt);
    cooldownEnd.setUTCDate(cooldownEnd.getUTCDate() + REPEAT_INTERVALS.WRONG); // +2 days
    expect(new Date() < cooldownEnd).toBe(true); // still in cooldown
  });

  it('cooldown calculation: wrong answer 3 days ago is available', () => {
    const answeredAt = new Date();
    answeredAt.setUTCDate(answeredAt.getUTCDate() - 3); // 3 days ago
    const cooldownEnd = new Date(answeredAt);
    cooldownEnd.setUTCDate(cooldownEnd.getUTCDate() + REPEAT_INTERVALS.WRONG); // +2 days = 1 day ago
    expect(new Date() < cooldownEnd).toBe(false); // cooldown passed
  });

  it('cooldown calculation: correct answer 10 days ago is still excluded', () => {
    const answeredAt = new Date();
    answeredAt.setUTCDate(answeredAt.getUTCDate() - 10); // 10 days ago
    const cooldownEnd = new Date(answeredAt);
    cooldownEnd.setUTCDate(cooldownEnd.getUTCDate() + REPEAT_INTERVALS.CORRECT); // +14 days = 4 days from now
    expect(new Date() < cooldownEnd).toBe(true); // still in cooldown
  });

  it('cooldown calculation: correct answer 15 days ago is available', () => {
    const answeredAt = new Date();
    answeredAt.setUTCDate(answeredAt.getUTCDate() - 15); // 15 days ago
    const cooldownEnd = new Date(answeredAt);
    cooldownEnd.setUTCDate(cooldownEnd.getUTCDate() + REPEAT_INTERVALS.CORRECT); // +14 days = 1 day ago
    expect(new Date() < cooldownEnd).toBe(false); // cooldown passed
  });

  it('cooldown calculation: hint-used answer 4 days ago is still excluded', () => {
    const answeredAt = new Date();
    answeredAt.setUTCDate(answeredAt.getUTCDate() - 4);
    const cooldownEnd = new Date(answeredAt);
    cooldownEnd.setUTCDate(cooldownEnd.getUTCDate() + REPEAT_INTERVALS.HINT_USED); // +5 days = 1 day from now
    expect(new Date() < cooldownEnd).toBe(true);
  });

  it('cooldown calculation: hint-used answer 6 days ago is available', () => {
    const answeredAt = new Date();
    answeredAt.setUTCDate(answeredAt.getUTCDate() - 6);
    const cooldownEnd = new Date(answeredAt);
    cooldownEnd.setUTCDate(cooldownEnd.getUTCDate() + REPEAT_INTERVALS.HINT_USED);
    expect(new Date() < cooldownEnd).toBe(false);
  });

  it('intervals are ordered: wrong < hint < correct', () => {
    expect(REPEAT_INTERVALS.WRONG).toBeLessThan(REPEAT_INTERVALS.HINT_USED);
    expect(REPEAT_INTERVALS.HINT_USED).toBeLessThan(REPEAT_INTERVALS.CORRECT);
  });

  it('all intervals are positive integers', () => {
    for (const value of Object.values(REPEAT_INTERVALS)) {
      expect(value).toBeGreaterThan(0);
      expect(Number.isInteger(value)).toBe(true);
    }
  });
});
