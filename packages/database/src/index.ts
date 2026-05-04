// Prisma client
export { default as prisma } from './client';

// Re-export Prisma types from generated client
export type {
  Account,
  User,
  Level,
  Topic,
  Question,
  Option,
  ScheduledQuestion,
  StudySession,
  QuestionAttempt,
  Badge,
  UserBadge,
  Setting,
  Admin,
  CronRun,
} from '@prisma/client';

// Services
export * from './services/account.service';
export * from './services/attempt.service';
export * from './services/badge.service';
export * from './services/question.service';
export * from './services/ranking.service';
export * from './services/session.service';
export * from './services/setting.service';
export * from './services/validation.service';
export * from './services/admin.service';
export * from './services/topic-strength.service';
export * from './services/spaced-repetition.service';
export * from './services/cleanup.service';
export * from './services/engagement-nudge.service';
export * from './services/block-status.service';
export * from './services/streak.service';
export * from './services/cron-run.service';
export * from './services/question-quality.service';

// Utils
export * from './utils/cairo-time';
export * from './utils/arabic-numerals';
export * from './utils/logger';
export * from './utils/shuffle';
export * from './utils/markdown';

// Types
export * from './types';
