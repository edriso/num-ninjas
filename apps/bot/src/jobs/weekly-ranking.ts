import type { Bot } from 'grammy';
import type { BotContext } from '../bot/middleware/session';
import { prisma, computeRankings, getWeekStart, awardBadge, logger } from '@numninjas/database';
import type { Level } from '@numninjas/database';
import { config } from '../config';
import { broadcastToAccounts } from '../bot/helpers/broadcast';
import { escapeMd } from '../bot/helpers/escape-md';

interface RankingEntry {
  userId: number;
  nickname: string;
  correctCount: number;
  wrongCount: number;
  hintCount: number;
  activeDays: number;
  rank: number;
}

interface LevelSectionData {
  level: Level;
  rankings: RankingEntry[];
}

/**
 * Build a localized weekly-ranking broadcast message from pre-computed
 * per-level data. Pure function — no DB calls, easy to read.
 */
function buildWeeklyRankingMessage(
  sections: LevelSectionData[],
  weekStartIso: string,
  locale: 'ar' | 'en',
): string {
  const isEn = locale === 'en';
  const medals = ['🥇', '🥈', '🥉'];

  const header = isEn
    ? `🏆 *Weekly Ranking*\nWeek of ${weekStartIso}\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
    : `🏆 *ترتيب الأسبوع*\nأسبوع ${weekStartIso}\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  const sectionStrings = sections.map(({ level, rankings }) => {
    const levelName = isEn && level.nameEn ? level.nameEn : level.name;
    let s = `${level.iconEmoji || '🥷'} *${levelName}*\n`;
    for (const entry of rankings.slice(0, 5)) {
      const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
      const correctLabel = isEn ? 'correct' : 'صح';
      const dayLabel = isEn ? (entry.activeDays === 1 ? 'day' : 'days') : 'يوم';
      s += `${medal} *${escapeMd(entry.nickname)}* — ${entry.correctCount} ${correctLabel}`;
      if (entry.rank <= 3) s += ` · ${entry.activeDays} ${dayLabel}`;
      s += '\n';
    }
    return s;
  });

  return header + sectionStrings.join('\n');
}

/**
 * Run weekly ranking per level, award top-3 badges, and broadcast.
 * Each level has its own leaderboard — Level 1 kids compete with Level 1 kids.
 * Runs Sunday at 23:00 Cairo time.
 *
 * Localization: per-level data is computed once, then formatted into two
 * messages (ar + en). Each account is sent the version matching their
 * active profile's locale. The optional channel post uses Arabic — channels
 * have a single audience that the project sets to ar by default.
 */
export async function runWeeklyRanking(bot: Bot<BotContext>) {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekEnd.getUTCDate() + 7);
  const weekStartIso = weekStart.toISOString().split('T')[0];

  const levels = await prisma.level.findMany({ orderBy: { rankOrder: 'asc' } });
  const arWeekLabel = `أسبوع ${weekStartIso}`;
  const rankBadges = await prisma.badge.findMany({
    where: { badgeType: 'weekly_rank' },
    orderBy: { rankPosition: 'asc' },
  });

  let totalBadges = 0;
  const sections: LevelSectionData[] = [];

  for (const level of levels) {
    const rankings = await computeRankings(weekStart, weekEnd, level.id, 'accuracy');
    if (rankings.length === 0) continue;

    // Award badges to top 3 in this level (same data drives both languages,
    // but the badge label needs to be stored in both for the user's profile).
    for (const entry of rankings) {
      if (entry.rank > 3) break;
      const badge = rankBadges.find((b) => b.rankPosition === entry.rank);
      if (badge) {
        await awardBadge(
          entry.userId,
          badge.id,
          `${arWeekLabel} — ${level.name}`,
          weekStart,
          `${entry.correctCount} صح · ${entry.wrongCount} خطأ · ${entry.hintCount} تلميح`,
          {
            periodLabelEn: `Week of ${weekStartIso} — ${level.nameEn || level.name}`,
            metricSummaryEn: `${entry.correctCount} correct · ${entry.wrongCount} wrong · ${entry.hintCount} hints`,
          },
        );
        totalBadges++;
      }
    }

    sections.push({ level, rankings });
  }

  if (sections.length === 0) {
    logger.info('No weekly rankings to process (no activity)');
    return { sent: 0, badges: 0 };
  }

  const arMessage = buildWeeklyRankingMessage(sections, weekStartIso, 'ar');
  const enMessage = buildWeeklyRankingMessage(sections, weekStartIso, 'en');

  // Broadcast to all reachable accounts in their active profile's locale,
  // chunked at the Telegram rate limit (broadcastToAccounts handles parallelism).
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null }, blockedAt: null },
    include: { activeProfile: { select: { locale: true } } },
  });

  const { sent } = await broadcastToAccounts(bot, accounts, (account) =>
    account.activeProfile?.locale === 'en' ? enMessage : arMessage,
  );

  // Post to channel if configured (channel audience is Arabic).
  if (config.channelUsername) {
    try {
      await bot.api.sendMessage(config.channelUsername, arMessage, {
        parse_mode: 'Markdown',
      });
      logger.info('Weekly ranking posted to channel', { channel: config.channelUsername });
    } catch (err) {
      logger.error('Failed to post weekly ranking to channel', { error: String(err) });
    }
  }

  logger.info('Weekly ranking broadcast', { sent, badges: totalBadges });
  return { sent, badges: totalBadges };
}
