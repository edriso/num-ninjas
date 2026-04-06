import prisma from '../client';

export interface RankEntry {
  userId: number;
  nickname: string;
  levelName: string;
  levelEmoji: string;
  correctCount: number;
  wrongCount: number;
  hintCount: number;
  activeDays: number;
  rank: number;
}

/**
 * Compute rankings for a date range, filtered by level.
 *
 * Rankings are per-level: a Level 1 kid only competes against other Level 1 kids.
 * This is fair because Level 1 questions are easier than Level 5.
 *
 * If levelId is omitted, computes a global ranking across all levels
 * (used for yearly awards where everyone competes).
 */
export async function computeRankings(start: Date, end: Date, levelId?: number): Promise<RankEntry[]> {
  // Get attempts, optionally filtered by question level
  const attempts = await prisma.questionAttempt.findMany({
    where: {
      answeredAt: { gte: start, lt: end },
      ...(levelId ? { question: { topic: { levelId } } } : {}),
    },
    select: {
      userId: true,
      isCorrect: true,
      hintUsed: true,
      answeredAt: true,
    },
  });

  if (attempts.length === 0) return [];

  // Aggregate per user
  const userMap = new Map<number, {
    correctCount: number;
    wrongCount: number;
    hintCount: number;
    activeDays: Set<string>;
  }>();

  for (const a of attempts) {
    let entry = userMap.get(a.userId);
    if (!entry) {
      entry = { correctCount: 0, wrongCount: 0, hintCount: 0, activeDays: new Set() };
      userMap.set(a.userId, entry);
    }
    if (a.isCorrect) entry.correctCount++;
    else entry.wrongCount++;
    if (a.hintUsed) entry.hintCount++;
    entry.activeDays.add(a.answeredAt.toISOString().split('T')[0]);
  }

  // Only include users who completed at least 1 session in the period
  const sessions = await prisma.studySession.findMany({
    where: {
      sessionDate: { gte: start, lt: end },
      isComplete: true,
    },
    select: { userId: true },
  });
  const completedUsers = new Set(sessions.map((s) => s.userId));

  // Get user details (nickname + level)
  const userIds = [...userMap.keys()].filter((id) => completedUsers.has(id));
  const users = await prisma.user.findMany({
    where: { id: { in: userIds } },
    select: { id: true, nickname: true, level: { select: { name: true, iconEmoji: true } } },
  });
  const userInfoMap = new Map(users.map((u) => [u.id, u]));

  // Build and sort ranking
  const entries: RankEntry[] = userIds
    .map((userId) => {
      const data = userMap.get(userId)!;
      const info = userInfoMap.get(userId);
      return {
        userId,
        nickname: info?.nickname || 'غير معروف',
        levelName: info?.level.name || '',
        levelEmoji: info?.level.iconEmoji || '🥋',
        correctCount: data.correctCount,
        wrongCount: data.wrongCount,
        hintCount: data.hintCount,
        activeDays: data.activeDays.size,
        rank: 0,
      };
    })
    .sort((a, b) => {
      if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
      if (a.wrongCount !== b.wrongCount) return a.wrongCount - b.wrongCount;
      if (a.hintCount !== b.hintCount) return a.hintCount - b.hintCount;
      return b.activeDays - a.activeDays;
    });

  // Assign ranks (with ties)
  for (let i = 0; i < entries.length; i++) {
    if (i === 0) {
      entries[i].rank = 1;
    } else {
      const prev = entries[i - 1];
      const curr = entries[i];
      if (
        curr.correctCount === prev.correctCount &&
        curr.wrongCount === prev.wrongCount &&
        curr.hintCount === prev.hintCount &&
        curr.activeDays === prev.activeDays
      ) {
        curr.rank = prev.rank;
      } else {
        curr.rank = i + 1;
      }
    }
  }

  return entries;
}

/**
 * Get start of the current week (Sunday) in UTC.
 */
export function getWeekStart(date: Date): Date {
  const d = new Date(date);
  d.setUTCHours(0, 0, 0, 0);
  const day = d.getUTCDay();
  d.setUTCDate(d.getUTCDate() - day);
  return d;
}

/**
 * Get start of the current month in UTC.
 */
export function getMonthStart(date: Date): Date {
  const d = new Date(date);
  d.setUTCDate(1);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

/**
 * Get start of the current year in UTC.
 */
export function getYearStart(date: Date): Date {
  const d = new Date(date);
  d.setUTCMonth(0, 1);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

/**
 * Monthly hall of fame categories (per-level).
 * - Most active (most completed days)
 * - Sharpest (highest accuracy %)
 * - Most independent (fewest hints used)
 */
export async function computeMonthlyCategories(start: Date, end: Date, levelId?: number) {
  const attempts = await prisma.questionAttempt.findMany({
    where: {
      answeredAt: { gte: start, lt: end },
      ...(levelId ? { question: { topic: { levelId } } } : {}),
    },
    select: {
      userId: true,
      isCorrect: true,
      hintUsed: true,
      answeredAt: true,
    },
  });

  if (attempts.length === 0) return { mostActive: null, sharpest: null, independent: null };

  const userMap = new Map<number, {
    total: number;
    correct: number;
    hints: number;
    days: Set<string>;
  }>();

  for (const a of attempts) {
    let entry = userMap.get(a.userId);
    if (!entry) {
      entry = { total: 0, correct: 0, hints: 0, days: new Set() };
      userMap.set(a.userId, entry);
    }
    entry.total++;
    if (a.isCorrect) entry.correct++;
    if (a.hintUsed) entry.hints++;
    entry.days.add(a.answeredAt.toISOString().split('T')[0]);
  }

  const users = await prisma.user.findMany({
    where: { id: { in: [...userMap.keys()] } },
    select: { id: true, nickname: true },
  });
  const nicknameMap = new Map(users.map((u) => [u.id, u.nickname]));

  const entries = [...userMap.entries()].map(([userId, data]) => ({
    userId,
    nickname: nicknameMap.get(userId) || 'غير معروف',
    ...data,
    accuracy: data.total > 0 ? data.correct / data.total : 0,
    activeDays: data.days.size,
  }));

  const mostActive = [...entries].sort((a, b) => b.activeDays - a.activeDays)[0] || null;

  const sharpest = entries
    .filter((e) => e.total >= 5)
    .sort((a, b) => b.accuracy - a.accuracy)[0] || null;

  const independent = entries
    .filter((e) => e.total >= 5)
    .sort((a, b) => a.hints - b.hints)[0] || null;

  return { mostActive, sharpest, independent };
}
