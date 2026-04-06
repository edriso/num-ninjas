import { Bot } from 'grammy';
import { config } from '../config';
import { sessionMiddleware, type BotContext } from './middleware/session';
import { handleStart, handleNicknameInput, handleLevelSelection, handleQuizAnswer, handleChangeQuizLevel } from './handlers/start';
import {
  handleAddChild,
  handleSwitch,
  handlePlayers,
  handlePickProfile,
  handleAddChildCallback,
} from './handlers/profile';
import { handleMcqAnswer, handleHint, handleSkip, handleOpenEndedAnswer, tryHandlePendingAnswer, handleLevelUp, handleStayLevel } from './handlers/question';
import {
  handleProfile,
  handleRank,
  handleHall,
  handleStreak,
  handleLevel,
  handleEditNickname,
  handleEditLevel,
} from './handlers/commands';
import { handleAdminSend, handleAdminPrepare, handleAdminStats } from './handlers/admin';
import { msg } from './messages/arabic';
import { logger } from '@numninja/database';

// Create bot instance
const bot = new Bot<BotContext>(config.botToken);

// ─── Middleware ──────────���───────────────────────────────────────────
bot.use(sessionMiddleware());

// ─── Commands ───────���───────────────────────────────────────────────
bot.command('start', handleStart);
bot.command('help', async (ctx) => {
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

// Admin commands
bot.command('admin_send', handleAdminSend);
bot.command('admin_prepare', handleAdminPrepare);
bot.command('admin_stats', handleAdminStats);

// ─── Callback Queries ────────────��──────────────────────────────────
bot.callbackQuery(/^quiz_answer:/, handleQuizAnswer);
bot.callbackQuery('change_quiz_level', handleChangeQuizLevel);
bot.callbackQuery(/^select_level:/, handleLevelSelection);
bot.callbackQuery(/^pick_profile:/, handlePickProfile);
bot.callbackQuery('add_child', handleAddChildCallback);
bot.callbackQuery('edit_nickname', handleEditNickname);
bot.callbackQuery('edit_level', handleEditLevel);
bot.callbackQuery(/^answer:/, handleMcqAnswer);
bot.callbackQuery(/^hint:/, handleHint);
bot.callbackQuery(/^skip:/, handleSkip);
bot.callbackQuery(/^level_up:/, handleLevelUp);
bot.callbackQuery('stay_level', handleStayLevel);

// ─── Text Messages (state machine) ─────────────────────────────────
bot.on('message:text', async (ctx) => {
  // Skip commands
  if (ctx.message.text.startsWith('/')) return;

  // Private chat only
  if (ctx.chat.type !== 'private') return;

  switch (ctx.session.state) {
    case 'awaiting_nickname':
      await handleNicknameInput(ctx);
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

// ─── Error Handler ───────────���──────────────────────────────────────
bot.catch((err) => {
  logger.error('Bot error', { error: String(err.error), update: err.ctx.update.update_id });
  err.ctx.reply(msg.error).catch(() => {});
});

// ─── Bot Menu Commands ───────���──────────────────────────────────────
async function setBotCommands() {
  await bot.api.setMyCommands([
    { command: 'start', description: 'ابدأ أو ارجع للقائمة' },
    { command: 'profile', description: 'بروفايلي والإحصائيات' },
    { command: 'rank', description: 'الترتيب وقاعة الشهرة' },
    { command: 'players', description: 'اللاعبين (تبديل/إضافة)' },
    { command: 'help', description: 'المساعدة' },
  ]);
}

export { bot, setBotCommands };
