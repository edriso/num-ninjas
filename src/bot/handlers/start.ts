import type { BotContext } from '../middleware/session.js';
import { msg } from '../messages/arabic.js';
import * as accountService from '../../services/account.service.js';
import { buildProfileKeyboard } from '../keyboards/profile.js';
import { buildLevelKeyboard } from '../keyboards/level.js';
import prisma from '../../db/prisma.js';
import { logger } from '../../utils/logger.js';
import { sendQuestionToUser } from './question.js';

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

    // Auto-send next question if available
    await sendQuestionToUser(ctx, profile.id, profile.levelId);
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

  // Case: Changing nickname for existing profile
  if (ctx.session.pendingData.changingNickname && ctx.session.activeProfileId) {
    await accountService.updateNickname(ctx.session.activeProfileId, text);
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};
    await ctx.reply(`✅ تم تغيير الاسم لـ *${text}*`, { parse_mode: 'Markdown' });
    logger.info('Nickname changed', { profileId: ctx.session.activeProfileId, newName: text });
    return true;
  }

  // Case: Onboarding — pick level next
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
  const telegramId = BigInt(ctx.from!.id);

  // Case 1: Changing level for existing profile (from /level command)
  if (ctx.session.pendingData.changingLevel && ctx.session.activeProfileId) {
    try {
      const level = await prisma.level.findUnique({ where: { id: levelId } });
      await prisma.user.update({
        where: { id: ctx.session.activeProfileId },
        data: { levelId },
      });
      ctx.session.pendingData = {};
      await ctx.answerCallbackQuery();
      await ctx.editMessageText(
        `✅ تم تغيير المستوى لـ ${level?.iconEmoji || '🥋'} *${level?.name}*`,
        { parse_mode: 'Markdown' },
      );
      logger.info('Level changed', { profileId: ctx.session.activeProfileId, levelId });
    } catch (error) {
      logger.error('Failed to change level', { error: String(error) });
      await ctx.answerCallbackQuery({ text: 'حصل خطأ' });
    }
    return;
  }

  // Case 2: Creating new profile (onboarding)
  const nickname = ctx.session.pendingData.nickname as string;
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
    await ctx.answerCallbackQuery({ text: 'حصل خطأ، جرب تا��ي' });
    ctx.session.state = 'idle';
  }
}
