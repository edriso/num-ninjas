import { computeRankings, computeMonthlyCategories, getWeekStart, getMonthStart, prisma } from '@numninja/database';

export async function getWeeklyRankings() {
  const now = new Date();
  return computeRankings(getWeekStart(now), now);
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
