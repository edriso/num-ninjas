import { Bot } from 'grammy';
import { config } from '../config';
import { sessionMiddleware, type BotContext } from './middleware/session';
import {
  handleStart,
  handleNicknameInput,
  handleLevelSelection,
  handleQuizAnswer,
  handleChangeQuizLevel,
  handleOnboardLanguage,
  handleStartFirstQuestion,
} from './handlers/start';
import {
  handleAddChild,
  handleSwitch,
  handlePlayers,
  handlePickProfile,
  handleAddChildCallback,
} from './handlers/profile';
import {
  handleMcqAnswer,
  handleHint,
  handleSkip,
  handleOpenEndedAnswer,
  tryHandlePendingAnswer,
  handleRetryMcq,
  handleRetryOpen,
} from './handlers/question';
import { handleLevelUp, handleStayLevel } from './handlers/level-up';
import {
  handleProfile,
  handleRank,
  handleHall,
  handleStreak,
  handleLevel,
  handleEditNickname,
  handleEditLevel,
  handleEditUsername,
  handleUsernameInput,
  handleSettings,
  handleShowLang,
  handleShowPrivacy,
  handleLanguage,
  handleSetLanguage,
  handlePrivacy,
  handleSetPrivacy,
} from './handlers/commands';
import {
  handleAdminSend,
  handleAdminPrepare,
  handleAdminStats,
  handleAdminHealth,
} from './handlers/admin';
import { getMsg } from './helpers/get-msg';
import { logger, markAccountBlocked, markAccountUnblocked } from '@numninjas/database';
import { CB, cbPrefix } from './callbacks';

// Create bot instance
const bot = new Bot<BotContext>(config.botToken);

// ─── Middleware ──────────────────────────────────────────────────────
bot.use(sessionMiddleware());

// Self-heal blocked_at: if a `my_chat_member` unblock event was missed (e.g.
// the bot was offline), the user's next interaction clears the flag — they
// couldn't have messaged us or tapped a button without unblocking us first.
//
// Scoped to message + callback_query updates from a private chat. We skip
// my_chat_member updates because the dedicated handler below handles those
// directly — running both would just double-write.
//
// markAccountUnblocked is a single indexed UPDATE with a where-guard, so for
// the (overwhelming) majority of interactions where blocked_at IS NULL it's a
// fast no-op rather than a full write.
bot.use(async (ctx, next) => {
  const isUserInteraction = !!(ctx.message || ctx.callbackQuery || ctx.editedMessage);
  if (isUserInteraction && ctx.chat?.type === 'private' && ctx.from) {
    try {
      const changed = await markAccountUnblocked(BigInt(ctx.from.id));
      if (changed) {
        logger.info('Cleared stale blocked_at on incoming interaction', {
          telegramId: ctx.from.id,
        });
      }
    } catch (err) {
      // Non-fatal — log and continue. Don't block the user's interaction on a DB blip.
      logger.warn('Failed to clear blocked_at', { telegramId: ctx.from.id, error: String(err) });
    }
  }
  await next();
});

// ─── Commands ───────────────────────────────────────────────────────
bot.command('start', handleStart);
bot.command('help', async (ctx) => {
  const msg = getMsg(ctx);
  await ctx.reply(msg.help, { parse_mode: 'Markdown' });
});
// Universal escape hatch — any flow (onboarding, edit, mid-question)
// can be aborted by typing /cancel. Resets state and pendingData like /start
// but without the welcome-back path; the kid stays where they are with no
// auto-question being sent.
bot.command('cancel', async (ctx) => {
  if (ctx.chat?.type !== 'private') return;
  ctx.session.state = 'idle';
  ctx.session.pendingData = {};
  const msg = getMsg(ctx);
  await ctx.reply(msg.cancelDone);
});
bot.command('addchild', handleAddChild);
bot.command('switch', handleSwitch);
bot.command('players', handlePlayers);
bot.command('profile', handleProfile);
bot.command('rank', handleRank);
bot.command('hall', handleHall);
bot.command('streak', handleStreak);
bot.command('level', handleLevel);
bot.command('settings', handleSettings);
bot.command('language', handleLanguage); // hidden alias
bot.command('privacy', handlePrivacy); // hidden alias

// Admin commands
bot.command('admin_health', handleAdminHealth);
bot.command('admin_send', handleAdminSend);
bot.command('admin_prepare', handleAdminPrepare);
bot.command('admin_stats', handleAdminStats);

// ─── Callback Queries ───────────────────────────────────────────────
// All callback names live in callbacks.ts — keep this list in sync if you
// add new buttons. cbPrefix(...) matches "name:..." (parameterised), the
// bare CB.* string matches the name exactly.
bot.callbackQuery(cbPrefix(CB.onboardLang), handleOnboardLanguage);
bot.callbackQuery(cbPrefix(CB.quizAnswer), handleQuizAnswer);
bot.callbackQuery(CB.changeQuizLevel, handleChangeQuizLevel);
bot.callbackQuery(CB.startFirstQuestion, handleStartFirstQuestion);
bot.callbackQuery(cbPrefix(CB.selectLevel), handleLevelSelection);
bot.callbackQuery(cbPrefix(CB.pickProfile), handlePickProfile);
bot.callbackQuery(CB.addChild, handleAddChildCallback);
bot.callbackQuery(CB.editNickname, handleEditNickname);
bot.callbackQuery(CB.editLevel, handleEditLevel);
bot.callbackQuery(CB.editUsername, handleEditUsername);
bot.callbackQuery(cbPrefix(CB.answer), handleMcqAnswer);
bot.callbackQuery(cbPrefix(CB.hint), handleHint);
bot.callbackQuery(cbPrefix(CB.skip), handleSkip);
bot.callbackQuery(cbPrefix(CB.retryMcq), handleRetryMcq);
bot.callbackQuery(cbPrefix(CB.retryOpen), handleRetryOpen);
bot.callbackQuery(cbPrefix(CB.levelUp), handleLevelUp);
bot.callbackQuery(CB.stayLevel, handleStayLevel);
bot.callbackQuery(CB.showLang, handleShowLang);
bot.callbackQuery(CB.showPrivacy, handleShowPrivacy);
bot.callbackQuery(cbPrefix(CB.setLang), handleSetLanguage);
bot.callbackQuery(cbPrefix(CB.setPrivacy), handleSetPrivacy);

// ─── Block/unblock tracking ─────────────────────────────────────────
// Telegram fires `my_chat_member` when a user blocks the bot (status='kicked')
// or unblocks it (status='member'). We mirror that into accounts.blocked_at
// so outbound crons can skip blocked users without burning Telegram API calls.
//
// Note: this filter only acts on private chats. If the bot is added to or
// removed from a group/channel we ignore the event — we only operate in DMs.
bot.on('my_chat_member', async (ctx) => {
  if (ctx.chat.type !== 'private') return;

  const telegramId = BigInt(ctx.chat.id);
  const newStatus = ctx.myChatMember.new_chat_member.status;
  const oldStatus = ctx.myChatMember.old_chat_member.status;

  if (newStatus === 'kicked') {
    const changed = await markAccountBlocked(telegramId);
    if (changed) {
      logger.info('User blocked the bot', { telegramId: Number(telegramId), oldStatus });
    }
  } else if (newStatus === 'member') {
    const changed = await markAccountUnblocked(telegramId);
    if (changed) {
      logger.info('User unblocked the bot', { telegramId: Number(telegramId), oldStatus });
    }
  }
});

// ─── Text Messages (state machine) ─────────────────────────────────
bot.on('message:text', async (ctx) => {
  // Skip commands
  if (ctx.message.text.startsWith('/')) return;

  // Private chat only
  if (ctx.chat.type !== 'private') return;

  switch (ctx.session.state) {
    case 'awaiting_nickname':
      // Check if this is a username change (not nickname)
      if (ctx.session.pendingData.changingUsername) {
        await handleUsernameInput(ctx, ctx.message.text.trim());
      } else {
        await handleNicknameInput(ctx);
      }
      break;

    case 'awaiting_answer':
      await handleOpenEndedAnswer(ctx);
      break;

    case 'idle':
    default:
      // Check if user might be answering an open-ended question sent by cron
      await tryHandlePendingAnswer(ctx);
      break;
  }
});

// ─── Error Handler ──────────────────────────────────────────────────
bot.catch((err) => {
  logger.error('Bot error', { error: String(err.error), update: err.ctx.update.update_id });
  const locale = err.ctx.session?.locale;
  const errorText = locale
    ? getMsg(err.ctx).error
    : '⚠️ حدثت مشكلة، من فضلك حاول مرة أخرى بعد قليل\nSomething went wrong, please try again in a moment';
  err.ctx.reply(errorText).catch(() => {});
});

// ─── Bot Menu Commands ──────────────────────────────────────────────
async function setBotCommands() {
  await bot.api.setMyCommands([
    { command: 'start', description: 'Start / ابدأ' },
    { command: 'profile', description: 'My profile / ملفي الشخصي' },
    { command: 'rank', description: 'Leaderboard / الترتيب' },
    { command: 'players', description: 'Players / اللاعبون' },
    { command: 'settings', description: 'Settings / الإعدادات' },
    { command: 'help', description: 'Help / المساعدة' },
    { command: 'cancel', description: 'Cancel current action / إلغاء' },
  ]);
}

export { bot, setBotCommands };
