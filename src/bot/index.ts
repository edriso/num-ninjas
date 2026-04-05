import { Bot } from 'grammy';
import { config } from '../config.js';
import { sessionMiddleware, type BotContext } from './middleware/session.js';
import { handleStart, handleNicknameInput, handleLevelSelection } from './handlers/start.js';
import {
  handleAddChild,
  handleSwitch,
  handlePlayers,
  handlePickProfile,
  handleAddChildCallback,
} from './handlers/profile.js';
import { handleMcqAnswer, handleHint, handleOpenEndedAnswer } from './handlers/question.js';
import {
  handleProfile,
  handleRank,
  handleHall,
  handleStreak,
  handleLevel,
} from './handlers/commands.js';
import { handleAdminSend, handleAdminPrepare, handleAdminStats } from './handlers/admin.js';
import { msg } from './messages/arabic.js';
import { logger } from '../utils/logger.js';

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
bot.callbackQuery(/^select_level:/, handleLevelSelection);
bot.callbackQuery(/^pick_profile:/, handlePickProfile);
bot.callbackQuery('add_child', handleAddChildCallback);
bot.callbackQuery(/^answer:/, handleMcqAnswer);
bot.callbackQuery(/^hint:/, handleHint);

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
      // Ignore unexpected text
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
    { command: 'profile', description: 'بروفايلي' },
    { command: 'rank', description: 'الترتيب الأسبوعي' },
    { command: 'hall', description: 'قاعة الشهرة' },
    { command: 'streak', description: 'السلسلة' },
    { command: 'level', description: 'تغيير المستوى' },
    { command: 'addchild', description: 'أضف طفل جديد' },
    { command: 'switch', description: 'غيّر اللاعب' },
    { command: 'players', description: 'قائمة اللاعبي��' },
    { command: 'help', description: 'المساعدة' },
  ]);
}

export { bot, setBotCommands };
