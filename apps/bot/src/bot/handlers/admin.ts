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
