import type { BotContext } from '../middleware/session';
import { getMsg } from '../helpers/get-msg';
import {
  getProfileCount,
  getProfiles,
  setActiveProfile,
  getActiveProfile,
  logger,
} from '@numninjas/database';
import { buildProfileKeyboard } from '../keyboards/profile';

const MAX_PROFILES = 5;

export async function handleAddChild(ctx: BotContext) {
  const msg = getMsg(ctx);

  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const count = await getProfileCount(telegramId);

  if (count >= MAX_PROFILES) {
    await ctx.reply(msg.maxProfiles);
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData = {};
  await ctx.reply(msg.askNicknameShort);
}

export async function handleSwitch(ctx: BotContext) {
  const msg = getMsg(ctx);

  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const profiles = await getProfiles(telegramId);

  if (profiles.length === 0) {
    await ctx.reply(msg.noProfiles);
    return;
  }

  if (profiles.length === 1) {
    // Auto-select the only profile
    const profile = profiles[0];
    ctx.session.activeProfileId = profile.id;
    ctx.session.locale = profile.locale || 'ar';
    await setActiveProfile(telegramId, profile.id);
    await ctx.reply(msg.profileSwitched(profile.nickname, profile.level.iconEmoji || '🥷'), {
      parse_mode: 'Markdown',
    });
    return;
  }

  const keyboard = buildProfileKeyboard(profiles, true, ctx.session.locale || 'ar');
  await ctx.reply(msg.whoIsPlaying, { reply_markup: keyboard });
}

export async function handlePlayers(ctx: BotContext) {
  const msg = getMsg(ctx);
  const locale = ctx.session.locale || 'ar';

  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const profiles = await getProfiles(telegramId);
  const activeProfile = await getActiveProfile(telegramId);

  if (profiles.length === 0) {
    await ctx.reply(msg.noProfiles);
    return;
  }

  const playerLines = profiles.map((p) => {
    const isActive = activeProfile?.id === p.id;
    const emoji = p.level.iconEmoji || '🥷';
    const levelName = locale === 'en' && p.level.nameEn ? p.level.nameEn : p.level.name;
    return `${emoji} ${p.nickname} — ${levelName}${isActive ? msg.activeMarker : ''}`;
  });

  // Show list with switch buttons + add child
  const keyboard = buildProfileKeyboard(profiles, true, locale);
  const switchText = locale === 'en' ? '\n\nTap a name to switch:' : '\n\nاضغط على اسم للتبديل:';
  await ctx.reply(msg.playersList(playerLines.join('\n')) + switchText, {
    parse_mode: 'Markdown',
    reply_markup: keyboard,
  });
}

export async function handlePickProfile(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('pick_profile:')) return;

  const locale = ctx.session.locale || 'ar';
  const profileId = parseInt(data.split(':')[1], 10);
  const telegramId = BigInt(ctx.from!.id);

  try {
    await setActiveProfile(telegramId, profileId);
    ctx.session.activeProfileId = profileId;

    const profiles = await getProfiles(telegramId);
    const profile = profiles.find((p) => p.id === profileId);

    if (!profile) {
      const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
      await ctx.answerCallbackQuery({ text: errText });
      return;
    }

    ctx.session.locale = profile.locale || 'ar';
    const msg = getMsg(ctx);

    await ctx.answerCallbackQuery();
    await ctx.editMessageText(
      msg.profileSwitched(profile.nickname, profile.level.iconEmoji || '🥷'),
      { parse_mode: 'Markdown' },
    );

    logger.info('Profile switched', { telegramId: Number(telegramId), profileId });
  } catch (error) {
    logger.error('Failed to switch profile', { error: String(error) });
    const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
    await ctx.answerCallbackQuery({ text: errText });
  }
}

export async function handleAddChildCallback(ctx: BotContext) {
  const msg = getMsg(ctx);
  const locale = ctx.session.locale || 'ar';
  const telegramId = BigInt(ctx.from!.id);
  const count = await getProfileCount(telegramId);

  if (count >= MAX_PROFILES) {
    const maxText = locale === 'en' ? 'Maximum reached (5)' : 'وصلت للحد الأقصى (5)';
    await ctx.answerCallbackQuery({ text: maxText });
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData = {};
  await ctx.answerCallbackQuery();
  await ctx.reply(msg.askNicknameShort);
}
