import { describe, it, expect } from 'vitest';
import {
  QUESTION_TYPE,
  BADGE_TYPE,
  SESSION_STATE,
  SETTING_TYPE,
} from '../types';

describe('QUESTION_TYPE', () => {
  it('should have MCQ value of "mcq"', () => {
    expect(QUESTION_TYPE.MCQ).toBe('mcq');
  });

  it('should have OPEN_ENDED value of "open_ended"', () => {
    expect(QUESTION_TYPE.OPEN_ENDED).toBe('open_ended');
  });

  it('should have exactly 2 entries', () => {
    expect(Object.keys(QUESTION_TYPE)).toHaveLength(2);
  });

  it('should contain only expected values', () => {
    const values = Object.values(QUESTION_TYPE);
    expect(values).toContain('mcq');
    expect(values).toContain('open_ended');
  });
});

describe('BADGE_TYPE', () => {
  it('should have ACHIEVEMENT value of "achievement"', () => {
    expect(BADGE_TYPE.ACHIEVEMENT).toBe('achievement');
  });

  it('should have WEEKLY_RANK value of "weekly_rank"', () => {
    expect(BADGE_TYPE.WEEKLY_RANK).toBe('weekly_rank');
  });

  it('should have MONTHLY_RANK value of "monthly_rank"', () => {
    expect(BADGE_TYPE.MONTHLY_RANK).toBe('monthly_rank');
  });

  it('should have YEARLY_RANK value of "yearly_rank"', () => {
    expect(BADGE_TYPE.YEARLY_RANK).toBe('yearly_rank');
  });

  it('should have exactly 4 entries', () => {
    expect(Object.keys(BADGE_TYPE)).toHaveLength(4);
  });

  it('should contain only expected values', () => {
    const values = Object.values(BADGE_TYPE);
    expect(values).toEqual(
      expect.arrayContaining(['achievement', 'weekly_rank', 'monthly_rank', 'yearly_rank']),
    );
  });
});

describe('SESSION_STATE', () => {
  it('should have IDLE value of "idle"', () => {
    expect(SESSION_STATE.IDLE).toBe('idle');
  });

  it('should have AWAITING_NICKNAME value of "awaiting_nickname"', () => {
    expect(SESSION_STATE.AWAITING_NICKNAME).toBe('awaiting_nickname');
  });

  it('should have AWAITING_LEVEL value of "awaiting_level"', () => {
    expect(SESSION_STATE.AWAITING_LEVEL).toBe('awaiting_level');
  });

  it('should have AWAITING_ANSWER value of "awaiting_answer"', () => {
    expect(SESSION_STATE.AWAITING_ANSWER).toBe('awaiting_answer');
  });

  it('should have ONBOARDING_QUIZ value of "onboarding_quiz"', () => {
    expect(SESSION_STATE.ONBOARDING_QUIZ).toBe('onboarding_quiz');
  });

  it('should have exactly 5 entries', () => {
    expect(Object.keys(SESSION_STATE)).toHaveLength(5);
  });

  it('should contain all 5 expected values', () => {
    const values = Object.values(SESSION_STATE);
    expect(values).toEqual(
      expect.arrayContaining([
        'idle',
        'awaiting_nickname',
        'awaiting_level',
        'awaiting_answer',
        'onboarding_quiz',
      ]),
    );
  });
});

describe('SETTING_TYPE', () => {
  it('should have INTEGER value of "integer"', () => {
    expect(SETTING_TYPE.INTEGER).toBe('integer');
  });

  it('should have STRING value of "string"', () => {
    expect(SETTING_TYPE.STRING).toBe('string');
  });

  it('should have TIME value of "time"', () => {
    expect(SETTING_TYPE.TIME).toBe('time');
  });

  it('should have BOOLEAN value of "boolean"', () => {
    expect(SETTING_TYPE.BOOLEAN).toBe('boolean');
  });

  it('should have exactly 4 entries', () => {
    expect(Object.keys(SETTING_TYPE)).toHaveLength(4);
  });

  it('should contain only expected values', () => {
    const values = Object.values(SETTING_TYPE);
    expect(values).toEqual(
      expect.arrayContaining(['integer', 'string', 'time', 'boolean']),
    );
  });
});
