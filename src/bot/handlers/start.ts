import type { BotContext } from '../middleware/session.js';
import { msg } from '../messages/arabic.js';
import * as accountService from '../../services/account.service.js';
import { buildProfileKeyboard } from '../keyboards/profile.js';
import { buildLevelKeyboard } from '../keyboards/level.js';
import { logger } from '../../utils/logger.js';

export async function handleStart(ctx: BotContext) {
  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const account = await accountService.findOrCreateAccount(telegramId);

  // No profiles yet → start onboarding
  if (account.users.length === 0) {
    ctx.session.state = 'awaiting_nickname';
    ctx.session.pendingData = {};
    await ctx.reply(msg.welcome, { parse_mode: 'Markdown' });
    await ctx.reply(msg.askNickname);
    return;
  }

  // Has profiles → load active or show picker
  if (account.activeProfile) {
    const profile = account.activeProfile;
    ctx.session.activeProfileId = profile.id;
    ctx.session.state = 'idle';
    await ctx.reply(
      msg.welcomeBack(profile.nickname, profile.level.iconEmoji || '🥋'),
      { parse_mode: 'Markdown' },
    );
    return;
  }

  // Account exists but no active profile → show picker
  const profiles = account.users;
  const keyboard = buildProfileKeyboard(profiles);
  await ctx.reply(msg.whoIsPlaying, { reply_markup: keyboard });
}

export async function handleNicknameInput(ctx: BotContext) {
  const text = ctx.message?.text?.trim();
  if (!text || text.length < 2 || text.length > 20) {
    await ctx.reply(msg.invalidNickname);
    return;
  }

  // Check if starts with / (command) — reset state and ignore
  if (text.startsWith('/')) {
    ctx.session.state = 'idle';
    return false; // Signal that this was not handled
  }

  ctx.session.pendingData.nickname = text;
  ctx.session.state = 'awaiting_level';

  const { keyboard, levels } = await buildLevelKeyboard();

  // Build level descriptions
  let levelInfo = '';
  for (const level of levels) {
    levelInfo += `${level.iconEmoji || '🥋'} *${level.name}* — ${level.description || ''}\n`;
  }

  await ctx.reply(msg.askLevel(text) + '\n\n' + levelInfo, {
    parse_mode: 'Markdown',
    reply_markup: keyboard,
  });
  return true;
}

export async function handleLevelSelection(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('select_level:')) return;

  const levelId = parseInt(data.split(':')[1], 10);
  const nickname = ctx.session.pendingData.nickname as string;
  const telegramId = BigInt(ctx.from!.id);

  if (!nickname) {
    await ctx.answerCallbackQuery({ text: 'حصل خطأ، ابعت /start تاني' });
    ctx.session.state = 'idle';
    return;
  }

  try {
    const profile = await accountService.createProfile(telegramId, nickname, levelId);
    ctx.session.activeProfileId = profile.id;
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};

    await ctx.answerCallbackQuery();
    await ctx.editMessageText(
      msg.profileCreated(profile.nickname, profile.level.iconEmoji || '🥋', profile.level.name),
      { parse_mode: 'Markdown' },
    );
    logger.info('Profile created', { telegramId: Number(telegramId), nickname, levelId });
  } catch (error) {
    logger.error('Failed to create profile', { error: String(error) });
    await ctx.answerCallbackQuery({ text: 'حصل خطأ، جرب تاني' });
    ctx.session.state = 'idle';
  }
}
