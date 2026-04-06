import { InlineKeyboard } from 'grammy';
import type { BotContext } from '../middleware/session';
import { getMsg } from '../helpers/get-msg';
import { getMessages } from '../messages';
import { prisma, getUserBadges, computeRankings, getWeekStart, getActiveProfile, updateUsername, logger } from '@numninjas/database';
import { buildLevelKeyboard } from '../keyboards/level';

/**
 * Ensure user has an active profile, load it into session if needed.
 */
async function requireProfile(ctx: BotContext) {
  const msg = getMsg(ctx);

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
      ctx.session.locale = profile.locale || 'ar';
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

  const locale = ctx.session.locale || 'ar';
  const user = await prisma.user.findUnique({
    where: { id: profileId },
    include: { level: true },
  });
  if (!user) {
    const msg = getMsg(ctx);
    await ctx.reply(msg.needProfile);
    return;
  }

  const badges = await getUserBadges(profileId);
  const badgeEmojis = badges.map((ub) => ub.badge.iconEmoji || '🏅').join(' ');

  // Compute accuracy
  const totalAttempts = await prisma.questionAttempt.count({ where: { userId: profileId } });
  const correctAttempts = await prisma.questionAttempt.count({ where: { userId: profileId, isCorrect: true } });
  const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  const levelName = (locale === 'en' && user.level.nameEn) ? user.level.nameEn : user.level.name;

  let text: string;
  if (locale === 'en') {
    text = `🥷 *${user.nickname}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    text += `${user.level.iconEmoji || '🥷'} Level: *${levelName}*\n`;
    text += `💎 Points: *${user.totalPoints}*\n`;
    text += `📊 Accuracy: *${accuracy}%* (${correctAttempts}/${totalAttempts})\n`;

    if (user.streakDays === 0) {
      text += `🔥 Streak: *0 days* — Start today! 💪\n`;
    } else if (user.streakDays < 7) {
      text += `🔥 Streak: *${user.streakDays} days* — Keep going to 7 for a badge! 🥷\n`;
    } else if (user.streakDays < 14) {
      text += `🔥🔥 Streak: *${user.streakDays} days* — Awesome! 💪\n`;
    } else if (user.streakDays < 30) {
      text += `🔥🔥🔥 Streak: *${user.streakDays} days* — Legendary! 🌟\n`;
    } else {
      text += `🔥🔥🔥🔥 Streak: *${user.streakDays} days* — True ninja! 🥷✨\n`;
    }
  } else {
    text = `🥷 *${user.nickname}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    text += `${user.level.iconEmoji || '🥷'} المستوى: *${levelName}*\n`;
    text += `💎 النقاط: *${user.totalPoints}*\n`;
    text += `📊 الدقة: *${accuracy}%* (${correctAttempts}/${totalAttempts})\n`;

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
  }

  if (badgeEmojis) {
    text += locale === 'en' ? `\n🏅 Badges: ${badgeEmojis}` : `\n🏅 الشارات: ${badgeEmojis}`;
  }

  if (badges.length > 0) {
    text += locale === 'en' ? '\n\n*Recent badges:*\n' : '\n\n*آخر الشارات:*\n';
    for (const ub of badges.slice(0, 5)) {
      const badgeName = (locale === 'en' && ub.badge.nameEn) ? ub.badge.nameEn : ub.badge.name;
      text += `${ub.badge.iconEmoji || '🏅'} ${badgeName} — ${ub.periodLabel}\n`;
    }
  }

  // Profile link
  if (user.username) {
    text += `\n🔗 numninjas.com/profile/${user.username}`;
  }

  const keyboard = locale === 'en'
    ? new InlineKeyboard()
        .text('✏️ Change name', 'edit_nickname')
        .text('🥷 Change level', 'edit_level')
        .row()
        .text('🔗 Change username', 'edit_username')
    : new InlineKeyboard()
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

  const locale = ctx.session.locale || 'ar';

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
  const levelName = (locale === 'en' && user.level.nameEn) ? user.level.nameEn : user.level.name;

  if (rankings.length === 0) {
    const noRankText = locale === 'en'
      ? '📊 No rankings yet this week. Start answering questions! 💪'
      : '📊 لا يوجد ترتيب بعد هذا الأسبوع. ابدأ بالإجابة على الأسئلة! 💪';
    await ctx.reply(noRankText);
    return;
  }

  const medals = ['🥇', '🥈', '🥉'];
  let text = `📊 *${locale === 'en' ? 'Weekly ranking' : 'الترتيب الأسبوعي'} — ${user.level.iconEmoji || '🥷'} ${levelName}*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  const correctLabel = locale === 'en' ? 'correct' : 'صحيحة';
  const dayLabel = locale === 'en' ? 'days' : 'يوم';

  for (const entry of rankings.slice(0, 10)) {
    const medal = entry.rank <= 3 ? medals[entry.rank - 1] : `${entry.rank}.`;
    const isMe = entry.userId === profileId ? ' ◀️' : '';
    text += `${medal} *${entry.nickname}* — ${entry.correctCount} ${correctLabel} · ${entry.activeDays} ${dayLabel}${isMe}\n`;
  }

  // Show user's rank if not in top 10
  const myRank = rankings.find((r) => r.userId === profileId);
  if (myRank && myRank.rank > 10) {
    text += `\n...\n${myRank.rank}. *${myRank.nickname}* — ${myRank.correctCount} ${correctLabel} ◀️`;
  }

  // Append recent ninja champions
  const recentBadges = await prisma.userBadge.findMany({
    include: { badge: true, user: true },
    orderBy: { earnedAt: 'desc' },
    take: 5,
  });

  if (recentBadges.length > 0) {
    text += locale === 'en' ? '\n\n🏆 *Ninja Champions*\n' : '\n\n🏆 *أبطال النينجا*\n';
    for (const ub of recentBadges) {
      const badgeName = (locale === 'en' && ub.badge.nameEn) ? ub.badge.nameEn : ub.badge.name;
      text += `${ub.badge.iconEmoji || '🏅'} *${ub.user.nickname}* — ${badgeName}\n`;
    }
  }

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

// ─── /hall ──────────────────────────────────────────────────────────

export async function handleHall(ctx: BotContext) {
  await requireProfile(ctx);

  const locale = ctx.session.locale || 'ar';

  // Show recent badge holders
  const recentBadges = await prisma.userBadge.findMany({
    include: { badge: true, user: true },
    orderBy: { earnedAt: 'desc' },
    take: 15,
  });

  if (recentBadges.length === 0) {
    const noChampText = locale === 'en'
      ? '🏆 No champions yet. Be the first! 🏆'
      : '🏆 لا يوجد أبطال بعد. كن أول بطل! 🏆';
    await ctx.reply(noChampText);
    return;
  }

  let text = locale === 'en'
    ? '🏆 *Ninja Champions*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
    : '🏆 *أبطال النينجا*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';
  for (const ub of recentBadges) {
    const badgeName = (locale === 'en' && ub.badge.nameEn) ? ub.badge.nameEn : ub.badge.name;
    text += `${ub.badge.iconEmoji || '🏅'} *${ub.user.nickname}* — ${badgeName}`;
    const awardTitle = (locale === 'en' && ub.badge.awardTitleEn) ? ub.badge.awardTitleEn : ub.badge.awardTitle;
    if (awardTitle) text += ` (${awardTitle})`;
    text += `\n   ${ub.periodLabel}\n`;
  }

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

// ─── /streak ────────────────────────────────────────────────────────

export async function handleStreak(ctx: BotContext) {
  const profileId = await requireProfile(ctx);
  if (!profileId) return;

  const locale = ctx.session.locale || 'ar';
  const user = await prisma.user.findUnique({ where: { id: profileId } });
  if (!user) return;

  let text: string;
  if (locale === 'en') {
    if (user.streakDays === 0) {
      text = '🔥 Streak: *0 days*\n\nStart today to build your streak! 💪';
    } else if (user.streakDays < 7) {
      text = `🔥 Streak: *${user.streakDays} days*\n\nKeep going to 7 days for the Perseverant Ninja badge! 🥷`;
    } else if (user.streakDays < 14) {
      text = `🔥🔥 Streak: *${user.streakDays} days*\n\nAwesome! Keep going to 14 days for the "Two Weeks Unstoppable" badge! 💪`;
    } else if (user.streakDays < 30) {
      text = `🔥🔥🔥 Streak: *${user.streakDays} days*\n\nLegendary! Keep going to 30 days for the "Full Month" badge! 🌟`;
    } else {
      text = `🔥🔥🔥🔥 Streak: *${user.streakDays} days*\n\nYou're a true ninja! Nothing can stop you! 🥷✨`;
    }
  } else {
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
  }

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

// ─── /level ─────────────────────────────────────────────────────────

export async function handleLevel(ctx: BotContext) {
  const profileId = await requireProfile(ctx);
  if (!profileId) return;

  const locale = ctx.session.locale || 'ar';
  const user = await prisma.user.findUnique({
    where: { id: profileId },
    include: { level: true },
  });
  if (!user) return;

  const { keyboard, levels } = await buildLevelKeyboard();

  const userLevelName = (locale === 'en' && user.level.nameEn) ? user.level.nameEn : user.level.name;
  let levelInfo = locale === 'en'
    ? `Current level: ${user.level.iconEmoji || '🥷'} *${userLevelName}*\n\nChoose a new level:\n\n`
    : `المستوى الحالي: ${user.level.iconEmoji || '🥷'} *${userLevelName}*\n\nاختر مستوى جديداً:\n\n`;

  for (const level of levels) {
    const current = level.id === user.levelId ? ' ◀️' : '';
    const levelName = (locale === 'en' && level.nameEn) ? level.nameEn : level.name;
    const levelDesc = (locale === 'en' && level.descriptionEn) ? level.descriptionEn : (level.description || '');
    levelInfo += `${level.iconEmoji || '🥷'} *${levelName}* — ${levelDesc}${current}\n`;
  }

  await ctx.reply(levelInfo, { parse_mode: 'Markdown', reply_markup: keyboard });

  // Store that we're changing level (reuse select_level callback)
  ctx.session.pendingData.changingLevel = true;
}

// ─── Profile Edit Callbacks ─────────────────────────────────────────

export async function handleEditNickname(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const text = locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData.changingNickname = true;
  await ctx.answerCallbackQuery();
  const promptText = locale === 'en' ? '✏️ Send me the new name:' : '✏️ أرسل لي الاسم الجديد:';
  await ctx.reply(promptText);
}

export async function handleEditLevel(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const text = locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  await ctx.answerCallbackQuery();
  await handleLevel(ctx);
}

export async function handleEditUsername(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const text = locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData.changingUsername = true;
  await ctx.answerCallbackQuery();

  const promptText = locale === 'en'
    ? '🔗 Send me the new username:\n\n' +
      'Rules: lowercase letters (a-z), numbers (0-9), underscore (_)\n' +
      'Length: 3 to 20 characters\n' +
      'Example: ahmed_123, ninja_star, math_pro'
    : '🔗 أرسل لي اسم المستخدم الجديد:\n\n' +
      'القواعد: حروف إنجليزية صغيرة (a-z)، أرقام (0-9)، شرطة سفلية (_)\n' +
      'الطول: 3 إلى 20 حرفاً\n' +
      'مثال: ahmed_123, ninja_star, math_pro';
  await ctx.reply(promptText);
}

export async function handleUsernameInput(ctx: BotContext, text: string): Promise<boolean> {
  const locale = ctx.session.locale || 'ar';
  const profileId = ctx.session.activeProfileId;
  if (!profileId) return false;

  try {
    await updateUsername(profileId, text);
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};
    const successText = locale === 'en'
      ? `✅ Username changed to *${text}*\n🔗 numninjas.com/profile/${text}`
      : `✅ تم تغيير اسم المستخدم إلى *${text}*\n🔗 numninjas.com/profile/${text}`;
    await ctx.reply(successText, { parse_mode: 'Markdown' });
    return true;
  } catch (err) {
    const errMsg = (err as Error).message;
    if (errMsg === 'USERNAME_TAKEN') {
      const takenText = locale === 'en'
        ? '❌ This username is already taken. Try another:'
        : '❌ اسم المستخدم هذا مستخدم بالفعل. حاول اسماً آخر:';
      await ctx.reply(takenText);
    } else if (errMsg === 'INVALID_USERNAME') {
      const invalidText = locale === 'en'
        ? '❌ Username must be 3-20 characters (letters, numbers, underscore). Try again:'
        : '❌ اسم المستخدم يجب أن يكون 3-20 حرفاً (حروف، أرقام، شرطة سفلية). حاول مرة أخرى:';
      await ctx.reply(invalidText);
    } else {
      const errorText = locale === 'en'
        ? '⚠️ Something went wrong, try again'
        : '⚠️ حدثت مشكلة، حاول مرة أخرى';
      await ctx.reply(errorText);
      ctx.session.state = 'idle';
      ctx.session.pendingData = {};
    }
    return false;
  }
}

// ─── /language ──────────────────────────────────────────────────────

export async function handleLanguage(ctx: BotContext) {
  const keyboard = new InlineKeyboard()
    .text('العربية 🇪🇬', 'set_lang:ar')
    .text('English 🇬🇧', 'set_lang:en');

  const msg = getMsg(ctx);
  await ctx.reply(msg.languagePrompt, { reply_markup: keyboard });
}

export async function handleSetLanguage(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('set_lang:')) return;

  const locale = data.split(':')[1];
  ctx.session.locale = locale;

  // Update user's locale in DB
  if (ctx.session.activeProfileId) {
    await prisma.user.update({
      where: { id: ctx.session.activeProfileId },
      data: { locale },
    });
  }

  await ctx.answerCallbackQuery();
  const msg = getMessages(locale);
  const langName = locale === 'ar' ? 'العربية' : 'English';
  await ctx.editMessageText(msg.languageChanged(langName), { parse_mode: 'Markdown' });
}

// ─── Privacy Toggle ─────────────────────────────────────────────────

export async function handlePrivacy(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const msg = getMsg(ctx);
    await ctx.reply(msg.needProfile);
    return;
  }

  const user = await prisma.user.findUnique({ where: { id: profileId } });
  if (!user) return;

  const currentStatus = user.isPublic;
  const keyboard = new InlineKeyboard()
    .text(locale === 'en' ? '🔓 Public' : '🔓 عام', 'set_privacy:true')
    .text(locale === 'en' ? '🔒 Private' : '🔒 خاص', 'set_privacy:false');

  const text = locale === 'en'
    ? `🔒 *Profile Privacy*\n\nYour profile is currently: *${currentStatus ? 'Public 🔓' : 'Private 🔒'}*\n\n` +
      `Public = your name links to your profile on the leaderboard\n` +
      `Private = your name shows but no link to your profile`
    : `🔒 *خصوصية الملف الشخصي*\n\nملفك الشخصي حالياً: *${currentStatus ? 'عام 🔓' : 'خاص 🔒'}*\n\n` +
      `عام = اسمك في الترتيب يربط بملفك الشخصي\n` +
      `خاص = اسمك يظهر لكن بدون رابط لملفك`;

  await ctx.reply(text, { parse_mode: 'Markdown', reply_markup: keyboard });
}

export async function handleSetPrivacy(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('set_privacy:')) return;

  const locale = ctx.session.locale || 'ar';
  const isPublic = data.split(':')[1] === 'true';
  const profileId = ctx.session.activeProfileId;

  if (!profileId) {
    await ctx.answerCallbackQuery({ text: locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start' });
    return;
  }

  await prisma.user.update({
    where: { id: profileId },
    data: { isPublic },
  });

  await ctx.answerCallbackQuery();
  const text = locale === 'en'
    ? `✅ Profile is now *${isPublic ? 'Public 🔓' : 'Private 🔒'}*`
    : `✅ الملف الشخصي الآن *${isPublic ? 'عام 🔓' : 'خاص 🔒'}*`;
  await ctx.editMessageText(text, { parse_mode: 'Markdown' });
}
