import { InlineKeyboard } from 'grammy';
import type { BotContext } from '../middleware/session';
import { msg } from '../messages/arabic';
import { prisma, getUserBadges, computeRankings, getWeekStart, getActiveProfile, updateUsername, logger } from '@numninjas/database';
import { buildLevelKeyboard } from '../keyboards/level';

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

  // Compute accuracy
  const totalAttempts = await prisma.questionAttempt.count({ where: { userId: profileId } });
  const correctAttempts = await prisma.questionAttempt.count({ where: { userId: profileId, isCorrect: true } });
  const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  let text = `🥷 *${user.nickname}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  text += `${user.level.iconEmoji || '🥷'} المستوى: *${user.level.name}*\n`;
  text += `💎 النقاط: *${user.totalPoints}*\n`;
  text += `📊 الدقة: *${accuracy}%* (${correctAttempts}/${totalAttempts})\n`;

  // Streak with motivational message
  if (user.streakDays === 0) {
    text += `🔥 السلسلة: *0 يوم* — ابدأ اليوم! 💪\n`;
  } else if (user.streakDays < 7) {
    text += `🔥 السلسلة: *${user.streakDays} يوم* — استمر حتى 7 للحصول على وسام! 🥷\n`;
  } else if (user.streakDays < 14) {
    text += `🔥🔥 السلسلة: *${user.streakDays} يوم* — رائع! 💪\n`;
  } else if (user.streakDays < 30) {
    text += `🔥🔥🔥 السلسلة: *${user.streakDays} يوم* — أسطورة! 🌟\n`;
  } else {
    text += `🔥🔥🔥🔥 السلسلة: *${user.streakDays} يوم* — نينجا حقيقي! 🥷✨\n`;
  }

  if (badgeEmojis) {
    text += `\n🏅 الشارات: ${badgeEmojis}`;
  }

  if (badges.length > 0) {
    text += '\n\n*آخر الشارات:*\n';
    for (const ub of badges.slice(0, 5)) {
      text += `${ub.badge.iconEmoji || '🏅'} ${ub.badge.name} — ${ub.periodLabel}\n`;
    }
  }

  // Profile link
  if (user.username) {
    text += `\n🔗 numninjas.com/profile/${user.username}`;
  }

  const keyboard = new InlineKeyboard()
    .text('✏️ تغيير الاسم', 'edit_nickname')
    .text('🥷 تغيير المستوى', 'edit_level')
    .row()
    .text('🔗 تغيير اسم المستخدم', 'edit_username');

  await ctx.reply(text, { parse_mode: 'Markdown', reply_markup: keyboard });
}

// ─── /rank ──────────────────────────────────────────────────────────

export async function handleRank(ctx: BotContext) {
  const profileId = await requireProfile(ctx);
  if (!profileId) return;

  // Get user's current level for per-level ranking
  const user = await prisma.user.findUnique({
    where: { id: profileId },
    include: { level: true },
  });
  if (!user) return;

  const now = new Date();
  const weekStart = getWeekStart(now);
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekEnd.getUTCDate() + 7);

  const rankings = await computeRankings(weekStart, weekEnd, user.levelId, 'accuracy');

  if (rankings.length === 0) {
    await ctx.reply('📊 لا يوجد ترتيب بعد هذا الأسبوع. ابدأ بالإجابة على الأسئلة! 💪');
    return;
  }

  const medals = ['🥇', '🥈', '🥉'];
  let text = `📊 *الترتيب الأسبوعي — ${user.level.iconEmoji || '🥷'} ${user.level.name}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  for (const entry of rankings.slice(0, 10)) {
    const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
    const isMe = entry.userId === profileId ? ' ◀️' : '';
    text += `${medal} *${entry.nickname}* — ${entry.correctCount} صحيحة · ${entry.activeDays} يوم${isMe}\n`;
  }

  // Show user's rank if not in top 10
  const myRank = rankings.find((r) => r.userId === profileId);
  if (myRank && myRank.rank > 10) {
    text += `\n...\n${myRank.rank}. *${myRank.nickname}* — ${myRank.correctCount} صحيحة ◀️`;
  }

  // Append recent hall of fame
  const recentBadges = await prisma.userBadge.findMany({
    include: { badge: true, user: true },
    orderBy: { earnedAt: 'desc' },
    take: 5,
  });

  if (recentBadges.length > 0) {
    text += '\n\n🏛️ *قاعة الشهرة*\n';
    for (const ub of recentBadges) {
      text += `${ub.badge.iconEmoji || '🏅'} *${ub.user.nickname}* — ${ub.badge.name}\n`;
    }
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
    await ctx.reply('🏛️ قاعة الشهرة فارغة بعد. كن أول بطل! 🏆');
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
    text = '🔥 السلسلة: *0 يوم*\n\nابدأ اليوم لتبني سلسلتك! 💪';
  } else if (user.streakDays < 7) {
    text = `🔥 السلسلة: *${user.streakDays} يوم*\n\nاستمر حتى 7 أيام للحصول على وسام النينجا المثابر! 🥷`;
  } else if (user.streakDays < 14) {
    text = `🔥🔥 السلسلة: *${user.streakDays} يوم*\n\nرائع! استمر حتى 14 يوماً للحصول على وسام "أسبوعان بلا توقف"! 💪`;
  } else if (user.streakDays < 30) {
    text = `🔥🔥🔥 السلسلة: *${user.streakDays} يوم*\n\nأسطوري! استمر حتى 30 يوماً للحصول على وسام "شهر كامل"! 🌟`;
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

  let levelInfo = `المستوى الحالي: ${user.level.iconEmoji || '🥷'} *${user.level.name}*\n\n`;
  levelInfo += 'اختر مستوى جديداً:\n\n';
  for (const level of levels) {
    const current = level.id === user.levelId ? ' ◀️' : '';
    levelInfo += `${level.iconEmoji || '🥷'} *${level.name}* — ${level.description || ''}${current}\n`;
  }

  await ctx.reply(levelInfo, { parse_mode: 'Markdown', reply_markup: keyboard });

  // Store that we're changing level (reuse select_level callback)
  ctx.session.pendingData.changingLevel = true;
}

// ─── Profile Edit Callbacks ─────────────────────────────────────────

export async function handleEditNickname(ctx: BotContext) {
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    await ctx.answerCallbackQuery({ text: 'اختر لاعباً أولاً /start' });
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData.changingNickname = true;
  await ctx.answerCallbackQuery();
  await ctx.reply('✏️ أرسل لي الاسم الجديد:');
}

export async function handleEditLevel(ctx: BotContext) {
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    await ctx.answerCallbackQuery({ text: 'اختر لاعباً أولاً /start' });
    return;
  }

  await ctx.answerCallbackQuery();
  await handleLevel(ctx);
}

export async function handleEditUsername(ctx: BotContext) {
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    await ctx.answerCallbackQuery({ text: 'اختر لاعباً أولاً /start' });
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData.changingUsername = true;
  await ctx.answerCallbackQuery();
  await ctx.reply(
    '🔗 أرسل لي اسم المستخدم الجديد:\n\n' +
    '(حروف إنجليزية، أرقام، أو شرطة سفلية — من 3 إلى 20 حرفاً)',
  );
}

export async function handleUsernameInput(ctx: BotContext, text: string): Promise<boolean> {
  const profileId = ctx.session.activeProfileId;
  if (!profileId) return false;

  try {
    await updateUsername(profileId, text);
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};
    await ctx.reply(`✅ تم تغيير اسم المستخدم إلى *${text}*\n🔗 numninjas.com/profile/${text}`, {
      parse_mode: 'Markdown',
    });
    return true;
  } catch (err) {
    const msg = (err as Error).message;
    if (msg === 'USERNAME_TAKEN') {
      await ctx.reply('❌ اسم المستخدم هذا مستخدم بالفعل. حاول اسماً آخر:');
    } else if (msg === 'INVALID_USERNAME') {
      await ctx.reply('❌ اسم المستخدم يجب أن يكون 3-20 حرفاً (حروف، أرقام، شرطة سفلية). حاول مرة أخرى:');
    } else {
      await ctx.reply('⚠️ حدثت مشكلة، حاول مرة أخرى');
      ctx.session.state = 'idle';
      ctx.session.pendingData = {};
    }
    return false;
  }
}
