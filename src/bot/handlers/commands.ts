import type { BotContext } from '../middleware/session.js';
import { msg } from '../messages/arabic.js';
import prisma from '../../db/prisma.js';
import { getUserBadges } from '../../services/badge.service.js';
import { computeRankings, getWeekStart } from '../../services/ranking.service.js';
import { getActiveProfile } from '../../services/account.service.js';
import { buildLevelKeyboard } from '../keyboards/level.js';
import { logger } from '../../utils/logger.js';

/**
 * Ensure user has an active profile, load it into session if needed.
 */
async function requireProfile(ctx: BotContext) {
  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return null;
  }

  let profileId = ctx.session.activeProfileId;

  if (!profileId) {
    // Try loading from DB
    const telegramId = BigInt(ctx.from!.id);
    const profile = await getActiveProfile(telegramId);
    if (profile) {
      ctx.session.activeProfileId = profile.id;
      profileId = profile.id;
    }
  }

  if (!profileId) {
    await ctx.reply(msg.needProfile);
    return null;
  }

  return profileId;
}

// ─── /profile ───────────────────────────────────────────────────────

export async function handleProfile(ctx: BotContext) {
  const profileId = await requireProfile(ctx);
  if (!profileId) return;

  const user = await prisma.user.findUnique({
    where: { id: profileId },
    include: { level: true },
  });
  if (!user) {
    await ctx.reply(msg.needProfile);
    return;
  }

  const badges = await getUserBadges(profileId);
  const badgeEmojis = badges.map((ub) => ub.badge.iconEmoji || '🏅').join(' ');

  let text = `🥷 *بروفايل ${user.nickname}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  text += `${user.level.iconEmoji || '🥋'} المستوى: *${user.level.name}*\n`;
  text += `💎 النقاط: *${user.totalPoints}*\n`;
  text += `🔥 السلسلة: *${user.streakDays} يوم*\n`;

  if (badgeEmojis) {
    text += `\n🏅 الشارات: ${badgeEmojis}`;
  }

  if (badges.length > 0) {
    text += '\n\n*آخر الشارات:*\n';
    for (const ub of badges.slice(0, 5)) {
      text += `${ub.badge.iconEmoji || '🏅'} ${ub.badge.name} — ${ub.periodLabel}\n`;
    }
  }

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

// ─── /rank ──────────────────────────────────────────────────────────

export async function handleRank(ctx: BotContext) {
  const profileId = await requireProfile(ctx);
  if (!profileId) return;

  const now = new Date();
  const weekStart = getWeekStart(now);
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekEnd.getUTCDate() + 7);

  const rankings = await computeRankings(weekStart, weekEnd);

  if (rankings.length === 0) {
    await ctx.reply('📊 مفيش ترتيب لسه الأسبوع ده. ابدأ بالإجابة على الأسئلة! 💪');
    return;
  }

  const medals = ['🥇', '🥈', '🥉'];
  let text = `📊 *الترتيب الأسبوعي*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  for (const entry of rankings.slice(0, 10)) {
    const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
    const isMe = entry.userId === profileId ? ' ◀️' : '';
    text += `${medal} *${entry.nickname}* — ${entry.correctCount} صح · ${entry.activeDays} يوم${isMe}\n`;
  }

  // Show user's rank if not in top 10
  const myRank = rankings.find((r) => r.userId === profileId);
  if (myRank && myRank.rank > 10) {
    text += `\n...\n${myRank.rank}. *${myRank.nickname}* — ${myRank.correctCount} صح ◀️`;
  }

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

// ─── /hall ──────────────────────────────────────────────────────────

export async function handleHall(ctx: BotContext) {
  await requireProfile(ctx);

  // Show recent badge holders
  const recentBadges = await prisma.userBadge.findMany({
    include: { badge: true, user: true },
    orderBy: { earnedAt: 'desc' },
    take: 15,
  });

  if (recentBadges.length === 0) {
    await ctx.reply('🏛️ قاعة الشهرة فاضية لسه. كون أول بطل! 🏆');
    return;
  }

  let text = '🏛️ *قاعة الشهرة*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';
  for (const ub of recentBadges) {
    text += `${ub.badge.iconEmoji || '🏅'} *${ub.user.nickname}* — ${ub.badge.name}`;
    if (ub.badge.awardTitle) text += ` (${ub.badge.awardTitle})`;
    text += `\n   ${ub.periodLabel}\n`;
  }

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

// ─── /streak ────────────────────────────────────────────────────────

export async function handleStreak(ctx: BotContext) {
  const profileId = await requireProfile(ctx);
  if (!profileId) return;

  const user = await prisma.user.findUnique({ where: { id: profileId } });
  if (!user) return;

  let text: string;
  if (user.streakDays === 0) {
    text = '🔥 السلسلة: *0 يوم*\n\nابدأ النهارده عشان تبني سلسلة! 💪';
  } else if (user.streakDays < 7) {
    text = `🔥 السلسلة: *${user.streakDays} يوم*\n\nكمّل لـ 7 أيام عشان تاخد شارة النينجا المداوم! 🥷`;
  } else if (user.streakDays < 14) {
    text = `🔥🔥 السلسلة: *${user.streakDays} يوم*\n\nرهيب! كمّل لـ 14 يوم عشان شارة "أسبوعان بلا توقف"! 💪`;
  } else if (user.streakDays < 30) {
    text = `🔥🔥🔥 السلسلة: *${user.streakDays} يوم*\n\nأسطورة! كمّل لـ 30 يوم عشان شارة "شهر كامل"! 🌟`;
  } else {
    text = `🔥🔥🔥🔥 السلسلة: *${user.streakDays} يوم*\n\nأنت نينجا حقيقي! لا يمكن إيقافك! 🥷✨`;
  }

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

// ─── /level ─────────────────────────────────────────────────────────

export async function handleLevel(ctx: BotContext) {
  const profileId = await requireProfile(ctx);
  if (!profileId) return;

  const user = await prisma.user.findUnique({
    where: { id: profileId },
    include: { level: true },
  });
  if (!user) return;

  const { keyboard, levels } = await buildLevelKeyboard();

  let levelInfo = `المستوى الحالي: ${user.level.iconEmoji || '🥋'} *${user.level.name}*\n\n`;
  levelInfo += 'اختار مستوى جديد:\n\n';
  for (const level of levels) {
    const current = level.id === user.levelId ? ' ◀️' : '';
    levelInfo += `${level.iconEmoji || '🥋'} *${level.name}* — ${level.description || ''}${current}\n`;
  }

  await ctx.reply(levelInfo, { parse_mode: 'Markdown', reply_markup: keyboard });

  // Store that we're changing level (reuse select_level callback)
  ctx.session.pendingData.changingLevel = true;
}
