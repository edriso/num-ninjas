import type { BotContext } from '../middleware/session.js';
import { msg } from '../messages/arabic.js';
import * as accountService from '../../services/account.service.js';
import { buildProfileKeyboard } from '../keyboards/profile.js';
import { buildLevelKeyboard } from '../keyboards/level.js';
import { logger } from '../../utils/logger.js';

const MAX_PROFILES = 5;

export async function handleAddChild(ctx: BotContext) {
  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const count = await accountService.getProfileCount(telegramId);

  if (count >= MAX_PROFILES) {
    await ctx.reply(msg.maxProfiles);
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData = {};
  await ctx.reply(msg.askNicknameShort);
}

export async function handleSwitch(ctx: BotContext) {
  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const profiles = await accountService.getProfiles(telegramId);

  if (profiles.length === 0) {
    await ctx.reply(msg.noProfiles);
    return;
  }

  if (profiles.length === 1) {
    // Auto-select the only profile
    const profile = profiles[0];
    ctx.session.activeProfileId = profile.id;
    await accountService.setActiveProfile(telegramId, profile.id);
    await ctx.reply(
      msg.profileSwitched(profile.nickname, profile.level.iconEmoji || '🥋'),
      { parse_mode: 'Markdown' },
    );
    return;
  }

  const keyboard = buildProfileKeyboard(profiles);
  await ctx.reply(msg.whoIsPlaying, { reply_markup: keyboard });
}

export async function handlePlayers(ctx: BotContext) {
  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const profiles = await accountService.getProfiles(telegramId);
  const activeProfile = await accountService.getActiveProfile(telegramId);

  if (profiles.length === 0) {
    await ctx.reply(msg.noProfiles);
    return;
  }

  const playerLines = profiles.map((p) => {
    const isActive = activeProfile?.id === p.id;
    const emoji = p.level.iconEmoji || '🥋';
    return `${emoji} ${p.nickname} — ${p.level.name}${isActive ? msg.activeMarker : ''}`;
  });

  // Show list with switch buttons + add child
  const keyboard = buildProfileKeyboard(profiles);
  await ctx.reply(
    msg.playersList(playerLines.join('\n')) + '\n\nاضغط على اسم عشان تبدّل:',
    { parse_mode: 'Markdown', reply_markup: keyboard },
  );
}

export async function handlePickProfile(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('pick_profile:')) return;

  const profileId = parseInt(data.split(':')[1], 10);
  const telegramId = BigInt(ctx.from!.id);

  try {
    await accountService.setActiveProfile(telegramId, profileId);
    ctx.session.activeProfileId = profileId;

    const profiles = await accountService.getProfiles(telegramId);
    const profile = profiles.find((p) => p.id === profileId);

    if (!profile) {
      await ctx.answerCallbackQuery({ text: 'حصل خطأ' });
      return;
    }

    await ctx.answerCallbackQuery();
    await ctx.editMessageText(
      msg.profileSwitched(profile.nickname, profile.level.iconEmoji || '🥋'),
      { parse_mode: 'Markdown' },
    );

    logger.info('Profile switched', { telegramId: Number(telegramId), profileId });
  } catch (error) {
    logger.error('Failed to switch profile', { error: String(error) });
    await ctx.answerCallbackQuery({ text: 'حصل خطأ' });
  }
}

export async function handleAddChildCallback(ctx: BotContext) {
  const telegramId = BigInt(ctx.from!.id);
  const count = await accountService.getProfileCount(telegramId);

  if (count >= MAX_PROFILES) {
    await ctx.answerCallbackQuery({ text: 'وصلت لأقصى عدد (5)' });
    return;
  }

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData = {};
  await ctx.answerCallbackQuery();
  await ctx.reply(msg.askNicknameShort);
}
