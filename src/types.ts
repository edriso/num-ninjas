// Question types
export const QUESTION_TYPE = {
  MCQ: 'mcq',
  OPEN_ENDED: 'open_ended',
} as const;

export type QuestionType = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];

// Badge types
export const BADGE_TYPE = {
  ACHIEVEMENT: 'achievement',
  WEEKLY_RANK: 'weekly_rank',
  MONTHLY_RANK: 'monthly_rank',
  YEARLY_RANK: 'yearly_rank',
} as const;

export type BadgeType = (typeof BADGE_TYPE)[keyof typeof BADGE_TYPE];

// Setting types
export const SETTING_TYPE = {
  INTEGER: 'integer',
  STRING: 'string',
  TIME: 'time',
  BOOLEAN: 'boolean',
} as const;

export type SettingType = (typeof SETTING_TYPE)[keyof typeof SETTING_TYPE];

// Session states
export const SESSION_STATE = {
  IDLE: 'idle',
  AWAITING_NICKNAME: 'awaiting_nickname',
  AWAITING_LEVEL: 'awaiting_level',
  AWAITING_ANSWER: 'awaiting_answer',
} as const;

export type SessionState = (typeof SESSION_STATE)[keyof typeof SESSION_STATE];
