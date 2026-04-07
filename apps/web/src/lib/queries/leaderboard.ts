import { computeRankings, computeMonthlyCategories, getWeekStart, getMonthStart, prisma, type RankEntry } from '@numninjas/database';

export interface LevelRanking {
  levelId: number;
  levelName: string;
  levelNameEn: string | null;
  levelEmoji: string;
  rankings: RankEntry[];
}

/**
 * Get weekly rankings grouped by level.
 * Each level has its own leaderboard.
 */
export async function getWeeklyRankings(): Promise<LevelRanking[]> {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const levels = await prisma.level.findMany({ orderBy: { rankOrder: 'asc' } });

  const allRankings = await Promise.all(
    levels.map((level) => computeRankings(weekStart, now, level.id, 'accuracy')),
  );

  return levels
    .map((level, i) => ({
      levelId: level.id,
      levelName: level.name,
      levelNameEn: level.nameEn,
      levelEmoji: level.iconEmoji || '🥋',
      rankings: allRankings[i],
    }))
    .filter((lr) => lr.rankings.length > 0);
}

export async function getHallOfFame() {
  const now = new Date();
  const monthStart = getMonthStart(now);

  const categories = await computeMonthlyCategories(monthStart, now);

  const recentBadges = await prisma.userBadge.findMany({
    include: {
      badge: true,
      user: { select: { nickname: true } },
    },
    orderBy: { earnedAt: 'desc' },
    take: 10,
  });

  return { categories, recentBadges };
}
