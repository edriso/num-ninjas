// Prisma client
export { default as prisma } from './client.js';

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
} from './generated/prisma/client/client.js';

// Services
export * from './services/account.service.js';
export * from './services/attempt.service.js';
export * from './services/badge.service.js';
export * from './services/question.service.js';
export * from './services/ranking.service.js';
export * from './services/session.service.js';
export * from './services/setting.service.js';
export * from './services/validation.service.js';
export * from './services/admin.service.js';

// Utils
export * from './utils/cairo-time.js';
export * from './utils/arabic-numerals.js';
export * from './utils/logger.js';
export * from './utils/shuffle.js';

// Types
export * from './types.js';
