import type { BotContext } from '../middleware/session';
import { config } from '../../config';
import { prisma, logger } from '@numninja/database';
import { prepareScheduledQuestions } from '../../jobs/prepare-questions';
import { sendFirstQuestion } from '../../jobs/send-first';
import { bot } from '../index';

function isAdmin(ctx: BotContext): boolean {
  return ctx.from?.id === config.adminTelegramId;
}

export async function handleAdminSend(ctx: BotContext) {
  if (!isAdmin(ctx)) {
    await ctx.reply('🚫 الأمر ده للأدمن بس');
    return;
  }

  await ctx.reply('⏳ بيتم إرسال الأسئلة...');
  try {
    await sendFirstQuestion(bot);
    await ctx.reply('✅ تم إرسال الأسئلة!');
  } catch (error) {
    logger.error('Admin send failed', { error: String(error) });
    await ctx.reply('❌ حصل خطأ أثناء الإرسال');
  }
}

export async function handleAdminPrepare(ctx: BotContext) {
  if (!isAdmin(ctx)) {
    await ctx.reply('🚫 الأمر ده للأدمن بس');
    return;
  }

  await ctx.reply('⏳ بيتم تحضير الأسئلة...');
  try {
    await prepareScheduledQuestions();
    await ctx.reply('✅ تم تحضير أسئلة اليوم!');
  } catch (error) {
    logger.error('Admin prepare failed', { error: String(error) });
    await ctx.reply('❌ حصل خطأ أثناء التحضير');
  }
}

export async function handleAdminStats(ctx: BotContext) {
  if (!isAdmin(ctx)) {
    await ctx.reply('🚫 الأمر ده للأدمن بس');
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
    `📊 *إحصائيات البوت*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `👥 الحسابات: ${accountCount}\n` +
    `🧒 اللاعبين: ${userCount}\n` +
    `📝 الأسئلة في البنك: ${questionCount}\n` +
    `✍️ إجمالي الإجابات: ${attemptCount}\n` +
    `📅 جلسات النهارده: ${todaySessions}\n` +
    `✅ خلّصوا النهارده: ${completedToday}`;

  await ctx.reply(text, { parse_mode: 'Markdown' });
}
