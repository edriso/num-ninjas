import type { BotContext } from '../middleware/session.js';
import { msg } from '../messages/arabic.js';
import * as questionService from '../../services/question.service.js';
import * as sessionService from '../../services/session.service.js';
import * as attemptService from '../../services/attempt.service.js';
import * as validationService from '../../services/validation.service.js';
import { getSettingInt } from '../../services/setting.service.js';
import { getActiveProfile } from '../../services/account.service.js';
import { buildMcqKeyboard, buildHintKeyboard } from '../keyboards/mcq.js';
import { logger } from '../../utils/logger.js';
import prisma from '../../db/prisma.js';

// ─── Message Templates ──────────────────────────────────────────────

function formatQuestion(
  position: number,
  total: number,
  topicName: string,
  levelEmoji: string,
  context: string | null,
  questionText: string,
): string {
  let text = `${levelEmoji} *سؤال ${position}/${total}* — ${topicName}\n\n`;
  if (context) text += `${context}\n\n`;
  text += `❓ ${questionText}`;
  return text;
}

function formatCorrectFeedback(explanation: string, points: number): string {
  return `✅ *صح! برافو عليك!* 🎉\n\n💡 ${explanation}\n\n✨ +${points} نقطة`;
}

function formatWrongFeedback(explanation: string, correctAnswer: string): string {
  return `❌ *غلط — بس اتعلمت حاجة جديدة!*\n\n` +
    `الإجابة الصح: *${correctAnswer}*\n💡 ${explanation}`;
}

function formatDailySummary(
  nickname: string,
  attempts: { isCorrect: boolean }[],
  totalPointsToday: number,
  streakDays: number,
  totalPoints: number,
): string {
  let text = `🏁 *جلسة النهارده خلصت يا ${nickname}!*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`;

  attempts.forEach((a, i) => {
    text += `س${i + 1}  ${a.isCorrect ? '✅ صح' : '❌ غلط — بس اتعلمت!'}\n`;
  });

  const correct = attempts.filter((a) => a.isCorrect).length;
  text += `\n${correct}/${attempts.length} صح · +${totalPointsToday} نقطة النهارده`;
  text += `\n🔥 السلسلة: ${streakDays} يوم   💎 المجموع: ${totalPoints} نقطة`;

  return text;
}

// ─── Send Question to User ──────────────────────────────────────────

export async function sendQuestionToUser(ctx: BotContext, userId: number, levelId: number) {
  const next = await questionService.getNextQuestion(userId, levelId);

  if (!next) {
    // Either all done or no questions scheduled
    const session = await sessionService.getTodaySession(userId);
    if (session?.isComplete) {
      await showDailySummary(ctx, userId);
    }
    return false;
  }

  const { question, position, totalQuestions } = next;
  const session = await sessionService.getOrCreateTodaySession(userId);
  await sessionService.markQuestionSent(session.id);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { level: true },
  });

  const text = formatQuestion(
    position,
    totalQuestions,
    question.topic.name,
    user?.level.iconEmoji || '🥋',
    question.realLifeContext,
    question.questionText,
  );

  if (question.questionType === 'mcq') {
    const keyboard = buildMcqKeyboard(
      question.id,
      question.options,
      !!question.hintText,
    );
    await ctx.reply(text, { parse_mode: 'Markdown', reply_markup: keyboard });
    // MCQ: state stays idle, answers come via callback
  } else {
    // Open-ended
    ctx.session.state = 'awaiting_answer';
    ctx.session.pendingData.currentQuestionId = question.id;
    ctx.session.pendingData.hintUsed = false;

    if (question.hintText) {
      const keyboard = buildHintKeyboard(question.id);
      await ctx.reply(text + '\n\n✏️ اكتب إجابتك:', {
        parse_mode: 'Markdown',
        reply_markup: keyboard,
      });
    } else {
      await ctx.reply(text + '\n\n✏️ اكتب إجابتك:', { parse_mode: 'Markdown' });
    }
  }

  return true;
}

// ─── MCQ Answer Handler ─────────────────────────────────────────────

export async function handleMcqAnswer(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('answer:')) return;

  const parts = data.split(':');
  const questionId = parseInt(parts[1], 10);
  const optionId = parseInt(parts[2], 10);

  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    await ctx.answerCallbackQuery({ text: 'اختار لاعب الأول /start' });
    return;
  }

  // Check if already answered
  const alreadyAnswered = await attemptService.hasAnswered(profileId, questionId);
  if (alreadyAnswered) {
    await ctx.answerCallbackQuery({ text: 'أنت جاوبت على السؤال ده خلاص!' });
    return;
  }

  const isCorrect = await validationService.checkMcqAnswer(optionId);
  const pointsPerCorrect = await getSettingInt('points_per_correct');

  // Get the selected option text for display
  const option = await prisma.option.findUnique({ where: { id: optionId } });
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    include: { options: true },
  });

  if (!question || !option) {
    await ctx.answerCallbackQuery({ text: 'حصل خطأ' });
    return;
  }

  // Record the attempt
  const hintUsed = (ctx.session.pendingData[`hint_${questionId}`] as boolean) ?? false;
  await attemptService.recordAttempt({
    userId: profileId,
    questionId,
    userAnswer: option.optionText,
    isCorrect,
    hintUsed,
  });

  // Update session progress
  const session = await sessionService.getOrCreateTodaySession(profileId);
  const totalQuestions = await getSettingInt('questions_per_day');
  await sessionService.markQuestionAnswered(session.id, totalQuestions);

  // Show feedback
  const correctOption = question.options.find((o) => o.isCorrect);
  const correctText = correctOption?.optionText || question.correctAnswer || '';

  await ctx.answerCallbackQuery();

  if (isCorrect) {
    await ctx.editMessageText(
      formatCorrectFeedback(question.explanation, pointsPerCorrect),
      { parse_mode: 'Markdown' },
    );
  } else {
    await ctx.editMessageText(
      formatWrongFeedback(question.explanation, correctText),
      { parse_mode: 'Markdown' },
    );
  }

  // Send next question or summary
  const updatedSession = await sessionService.getTodaySession(profileId);
  if (updatedSession && updatedSession.questionsAnswered >= totalQuestions) {
    // Update streak
    await updateStreak(profileId);
    await showDailySummary(ctx, profileId);
  } else {
    const user = await prisma.user.findUnique({ where: { id: profileId } });
    if (user) {
      // Small delay so user can read feedback
      setTimeout(async () => {
        try {
          await sendQuestionToUser(ctx, profileId, user.levelId);
        } catch (err) {
          logger.error('Failed to send next question', { error: String(err) });
        }
      }, 1500);
    }
  }
}

// ─── Open-Ended Answer Handler ──────────────────────────────────────

export async function handleOpenEndedAnswer(ctx: BotContext) {
  const text = ctx.message?.text?.trim();
  if (!text) return;

  const profileId = ctx.session.activeProfileId;
  const questionId = ctx.session.pendingData.currentQuestionId as number | undefined;

  if (!profileId || !questionId) {
    ctx.session.state = 'idle';
    return;
  }

  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (!question || question.correctAnswerNumeric === null) {
    await ctx.reply(msg.error);
    ctx.session.state = 'idle';
    return;
  }

  const { isCorrect, parsed } = validationService.checkOpenEndedAnswer(
    text,
    question.correctAnswerNumeric,
  );

  if (parsed === null) {
    await ctx.reply('🔢 ابعت رقم بس — أرقام عربي أو إنجليزي');
    return; // Stay in awaiting_answer state
  }

  // Record attempt
  const hintUsed = (ctx.session.pendingData.hintUsed as boolean) ?? false;
  await attemptService.recordAttempt({
    userId: profileId,
    questionId,
    userAnswer: text,
    isCorrect,
    hintUsed,
  });

  // Reset state
  ctx.session.state = 'idle';
  ctx.session.pendingData.currentQuestionId = undefined;

  // Update session
  const session = await sessionService.getOrCreateTodaySession(profileId);
  const totalQuestions = await getSettingInt('questions_per_day');
  await sessionService.markQuestionAnswered(session.id, totalQuestions);

  // Show feedback
  const pointsPerCorrect = await getSettingInt('points_per_correct');
  const correctText = question.correctAnswer || String(question.correctAnswerNumeric);

  if (isCorrect) {
    await ctx.reply(formatCorrectFeedback(question.explanation, pointsPerCorrect), {
      parse_mode: 'Markdown',
    });
  } else {
    await ctx.reply(formatWrongFeedback(question.explanation, correctText), {
      parse_mode: 'Markdown',
    });
  }

  // Send next question or summary
  const updatedSession = await sessionService.getTodaySession(profileId);
  if (updatedSession && updatedSession.questionsAnswered >= totalQuestions) {
    await updateStreak(profileId);
    await showDailySummary(ctx, profileId);
  } else {
    const user = await prisma.user.findUnique({ where: { id: profileId } });
    if (user) {
      setTimeout(async () => {
        try {
          await sendQuestionToUser(ctx, profileId, user.levelId);
        } catch (err) {
          logger.error('Failed to send next question', { error: String(err) });
        }
      }, 1500);
    }
  }
}

// ─── Hint Handler ───────────────────────────────────────────────────

export async function handleHint(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('hint:')) return;

  const questionId = parseInt(data.split(':')[1], 10);
  const question = await prisma.question.findUnique({ where: { id: questionId } });

  if (!question?.hintText) {
    await ctx.answerCallbackQuery({ text: 'مفيش تلميح للسؤال ده' });
    return;
  }

  // Track hint usage in session
  ctx.session.pendingData[`hint_${questionId}`] = true;
  if (ctx.session.state === 'awaiting_answer') {
    ctx.session.pendingData.hintUsed = true;
  }

  await ctx.answerCallbackQuery();
  await ctx.reply(`💡 *تلميح:* ${question.hintText}`, { parse_mode: 'Markdown' });
}

// ─── Auto-detect Open-Ended Answer (for cron-sent questions) ────────

/**
 * When a user sends text in idle state, check if they have a pending
 * open-ended question (e.g., sent by the cron job). If so, auto-transition
 * to answering mode and handle the answer.
 */
export async function tryHandlePendingAnswer(ctx: BotContext): Promise<boolean> {
  const telegramId = BigInt(ctx.from!.id);

  // Ensure active profile
  let profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const profile = await getActiveProfile(telegramId);
    if (!profile) return false;
    ctx.session.activeProfileId = profile.id;
    profileId = profile.id;
  }

  // Check for incomplete session
  const session = await sessionService.getTodaySession(profileId);
  if (!session || session.isComplete) return false;
  if (session.questionsAnswered >= session.questionsSent) return false;

  // Get the next question the user should answer
  const user = await prisma.user.findUnique({ where: { id: profileId } });
  if (!user) return false;

  const next = await questionService.getNextQuestion(profileId, user.levelId);
  if (!next || next.question.questionType !== 'open_ended') return false;

  // Check if already answered
  const alreadyAnswered = await attemptService.hasAnswered(profileId, next.question.id);
  if (alreadyAnswered) return false;

  // Auto-set state and handle the answer
  ctx.session.state = 'awaiting_answer';
  ctx.session.pendingData.currentQuestionId = next.question.id;
  ctx.session.pendingData.hintUsed = false;
  await handleOpenEndedAnswer(ctx);
  return true;
}

// ─── Daily Summary ──────────────────────────────────────────────────

async function showDailySummary(ctx: BotContext, userId: number) {
  const attempts = await attemptService.getTodayAttempts(userId);
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  const pointsPerCorrect = await getSettingInt('points_per_correct');
  const correctCount = attempts.filter((a) => a.isCorrect).length;
  const totalPointsToday = correctCount * pointsPerCorrect;

  await ctx.reply(
    formatDailySummary(
      user.nickname,
      attempts,
      totalPointsToday,
      user.streakDays,
      user.totalPoints,
    ),
    { parse_mode: 'Markdown' },
  );
}

// ─── Streak Update ──────────────────────────────────────────────────

async function updateStreak(userId: number) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      streakDays: { increment: 1 },
      lastActiveAt: new Date(),
    },
  });
}
