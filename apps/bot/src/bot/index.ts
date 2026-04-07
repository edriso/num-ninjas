import { Bot } from 'grammy';
import { config } from '../config';
import { sessionMiddleware, type BotContext } from './middleware/session';
import { handleStart, handleNicknameInput, handleLevelSelection, handleQuizAnswer, handleChangeQuizLevel, handleOnboardLanguage } from './handlers/start';
import {
  handleAddChild,
  handleSwitch,
  handlePlayers,
  handlePickProfile,
  handleAddChildCallback,
} from './handlers/profile';
import { handleMcqAnswer, handleHint, handleSkip, handleOpenEndedAnswer, tryHandlePendingAnswer, handleLevelUp, handleStayLevel, handleRetryMcq, handleRetryOpen } from './handlers/question';
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
import { handleAdminSend, handleAdminPrepare, handleAdminStats, handleAdminHealth } from './handlers/admin';
import { getMsg } from './helpers/get-msg';
import { logger } from '@numninjas/database';

// Create bot instance
const bot = new Bot<BotContext>(config.botToken);

// ─── Middleware ──────────────────────────────────────────────────────
bot.use(sessionMiddleware());

// ─── Commands ───────────────────────────────────────────────────────
bot.command('start', handleStart);
bot.command('help', async (ctx) => {
  const msg = getMsg(ctx);
  await ctx.reply(msg.help, { parse_mode: 'Markdown' });
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
bot.callbackQuery(/^onboard_lang:/, handleOnboardLanguage);
bot.callbackQuery(/^quiz_answer:/, handleQuizAnswer);
bot.callbackQuery('change_quiz_level', handleChangeQuizLevel);
bot.callbackQuery(/^select_level:/, handleLevelSelection);
bot.callbackQuery(/^pick_profile:/, handlePickProfile);
bot.callbackQuery('add_child', handleAddChildCallback);
bot.callbackQuery('edit_nickname', handleEditNickname);
bot.callbackQuery('edit_level', handleEditLevel);
bot.callbackQuery('edit_username', handleEditUsername);
bot.callbackQuery(/^answer:/, handleMcqAnswer);
bot.callbackQuery(/^hint:/, handleHint);
bot.callbackQuery(/^skip:/, handleSkip);
bot.callbackQuery(/^retry_mcq:/, handleRetryMcq);
bot.callbackQuery(/^retry_open:/, handleRetryOpen);
bot.callbackQuery(/^level_up:/, handleLevelUp);
bot.callbackQuery('stay_level', handleStayLevel);
bot.callbackQuery('show_lang', handleShowLang);
bot.callbackQuery('show_privacy', handleShowPrivacy);
bot.callbackQuery(/^set_lang:/, handleSetLanguage);
bot.callbackQuery(/^set_privacy:/, handleSetPrivacy);

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
  ]);
}

export { bot, setBotCommands };
