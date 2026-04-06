import type { BotContext } from '../middleware/session';
import { config } from '../../config';
import { prisma, logger } from '@numninjas/database';
import { prepareScheduledQuestions } from '../../jobs/prepare-questions';
import { sendFirstQuestion } from '../../jobs/send-first';
import { bot } from '../index';

function isAdmin(ctx: BotContext): boolean {
  return ctx.from?.id === config.adminTelegramId;
}

export async function handleAdminSend(ctx: BotContext) {
  if (!isAdmin(ctx)) {
    await ctx.reply('🚫 Admin only');
    return;
  }

  await ctx.reply('⏳ Sending questions...');
  try {
    await sendFirstQuestion(bot);
    await ctx.reply('✅ Questions sent!');
  } catch (error) {
    logger.error('Admin send failed', { error: String(error) });
    await ctx.reply('❌ Error sending questions');
  }
}

export async function handleAdminPrepare(ctx: BotContext) {
  if (!isAdmin(ctx)) {
    await ctx.reply('🚫 Admin only');
    return;
  }

  await ctx.reply('⏳ Preparing questions...');
  try {
    await prepareScheduledQuestions();
    await ctx.reply('✅ Today\'s questions prepared!');
  } catch (error) {
    logger.error('Admin prepare failed', { error: String(error) });
    await ctx.reply('❌ Error preparing questions');
  }
}

export async function handleAdminStats(ctx: BotContext) {
  if (!isAdmin(ctx)) {
    await ctx.reply('🚫 Admin only');
    return;
  }

  const [accountCount, userCount, attemptCount, todaySessions, questionCount] =
    await Promise.all([
      prisma.account.count(),
      prisma.user.count(),
      prisma.questionAttempt.count(),
      prisma.studySession.count({
        where: {
          sessionDate: {
            gte: new Date(new Date().toISOString().split('T')[0] + 'T00:00:00.000Z'),
          },
        },
      }),
      prisma.question.count(),
    ]);

  const completedToday = await prisma.studySession.count({
    where: {
      sessionDate: {
        gte: new Date(new Date().toISOString().split('T')[0] + 'T00:00:00.000Z'),
      },
      isComplete: true,
    },
  });

  const text =
    `📊 *Bot Stats*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `👥 Accounts: ${accountCount}\n` +
    `🧒 Players: ${userCount}\n` +
    `📝 Questions in bank: ${questionCount}\n` +
    `✍️ Total attempts: ${attemptCount}\n` +
    `📅 Today's sessions: ${todaySessions}\n` +
    `✅ Completed today: ${completedToday}`;

  await ctx.reply(text, { parse_mode: 'Markdown' });
}

const startTime = Date.now();

export async function handleAdminHealth(ctx: BotContext) {
  if (!isAdmin(ctx)) return;

  const uptime = Math.floor((Date.now() - startTime) / 1000);
  const days = Math.floor(uptime / 86400);
  const hours = Math.floor((uptime % 86400) / 3600);
  const mins = Math.floor((uptime % 3600) / 60);

  let dbStatus = '❌ Disconnected';
  let dbLatency = 0;
  try {
    const start = Date.now();
    await prisma.$queryRawUnsafe('SELECT 1');
    dbLatency = Date.now() - start;
    dbStatus = `✅ Connected (${dbLatency}ms)`;
  } catch (err) {
    dbStatus = `❌ Error: ${(err as Error).message.slice(0, 50)}`;
  }

  const [arQuestions, enQuestions, totalUsers, scheduledToday] = await Promise.all([
    prisma.question.count({ where: { locale: 'ar' } }).catch(() => 0),
    prisma.question.count({ where: { locale: 'en' } }).catch(() => 0),
    prisma.user.count().catch(() => 0),
    prisma.scheduledQuestion.count({
      where: { scheduledDate: { gte: new Date(new Date().toISOString().split('T')[0] + 'T00:00:00.000Z') } },
    }).catch(() => 0),
  ]);

  const text =
    `🏥 *Health Check*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `🤖 Bot: ✅ Running\n` +
    `⏱ Uptime: ${days}d ${hours}h ${mins}m\n` +
    `🗄 Database: ${dbStatus}\n\n` +
    `📝 Questions: ${arQuestions} AR + ${enQuestions} EN\n` +
    `👥 Users: ${totalUsers}\n` +
    `📅 Scheduled today: ${scheduledToday}`;

  await ctx.reply(text, { parse_mode: 'Markdown' });
}
