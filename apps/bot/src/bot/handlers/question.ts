import type { BotContext } from '../middleware/session';
import { msg } from '../messages/arabic';
import {
  prisma,
  getNextQuestion,
  getScheduledQuestions,
  getOrCreateTodaySession,
  getTodaySession,
  markQuestionSent,
  markQuestionAnswered,
  recordAttempt,
  hasAnswered,
  getTodayAttempts,
  checkMcqAnswer,
  checkOpenEndedAnswer,
  getSettingInt,
  getActiveProfile,
  checkLevelCompletion,
  logger,
} from '@numninjas/database';
import { InlineKeyboard } from 'grammy';
import { buildMcqKeyboard, buildHintKeyboard } from '../keyboards/mcq';

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
  return `✅ *إجابة صحيحة! أحسنت!* 🎉\n\n💡 ${explanation}\n\n✨ +${points} نقطة`;
}

function formatWrongFeedback(explanation: string, correctAnswer: string): string {
  return `❌ *تقريباً! لكن تعلمت شيئاً جديداً!*\n\n` +
    `الإجابة الصحيحة: *${correctAnswer}*\n💡 ${explanation}\n\n` +
    `💪 هل تريد المحاولة مرة أخرى؟`;
}

function formatDailySummary(
  nickname: string,
  attempts: { isCorrect: boolean }[],
  totalPointsToday: number,
  streakDays: number,
  totalPoints: number,
): string {
  let text = `🏁 *انتهى تحدي اليوم يا ${nickname}!*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`;

  attempts.forEach((a, i) => {
    text += `س${i + 1}  ${a.isCorrect ? '✅ صحيحة' : '❌ خطأ — لكن تعلمت!'}\n`;
  });

  const correct = attempts.filter((a) => a.isCorrect).length;
  text += `\n${correct}/${attempts.length} صحيحة · +${totalPointsToday} نقطة اليوم`;
  text += `\n🔥 السلسلة: ${streakDays} يوم   💎 المجموع: ${totalPoints} نقطة`;

  return text;
}

// ─── Send Question to User ──────────────────────────────────────────

export async function sendQuestionToUser(ctx: BotContext, userId: number, levelId: number) {
  const next = await getNextQuestion(userId, levelId);

  if (!next) {
    // Either all done or no questions scheduled
    const session = await getTodaySession(userId);
    if (session?.isComplete) {
      await showDailySummary(ctx, userId);
    }
    return false;
  }

  const { question, position, totalQuestions } = next;
  const session = await getOrCreateTodaySession(userId);
  await markQuestionSent(session.id);

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
    await ctx.answerCallbackQuery({ text: 'اختر لاعباً أولاً /start' });
    return;
  }

  // Check if this is a retry (practice, no points)
  const isRetry = (ctx.session.pendingData[`retry_${questionId}`] as boolean) ?? false;

  if (!isRetry) {
    // Check if already answered (only for non-retries)
    const alreadyAnswered = await hasAnswered(profileId, questionId);
    if (alreadyAnswered) {
      await ctx.answerCallbackQuery({ text: 'لقد أجبت على هذا السؤال بالفعل!' });
      return;
    }
  }

  const isCorrect = await checkMcqAnswer(optionId);
  const pointsPerCorrect = await getSettingInt('points_per_correct');

  // Handle retry: just show feedback, no recording
  if (isRetry) {
    ctx.session.pendingData[`retry_${questionId}`] = undefined;
    await ctx.answerCallbackQuery();
    if (isCorrect) {
      await ctx.editMessageText('✅ *أحسنت! إجابة صحيحة هذه المرة!* 🎉', { parse_mode: 'Markdown' });
    } else {
      const question = await prisma.question.findUnique({ where: { id: questionId }, include: { options: true } });
      const correctOption = question?.options.find((o) => o.isCorrect);
      await ctx.editMessageText(
        `❌ ليست الإجابة الصحيحة.\n\nالإجابة الصحيحة: *${correctOption?.optionText || ''}*\nلا تقلق، ستراجعها قريباً! 💪`,
        { parse_mode: 'Markdown' },
      );
    }
    return;
  }

  // Get the selected option text for display
  const option = await prisma.option.findUnique({ where: { id: optionId } });
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    include: { options: true },
  });

  if (!question || !option) {
    await ctx.answerCallbackQuery({ text: 'حدث خطأ' });
    return;
  }

  // Record the attempt
  const hintUsed = (ctx.session.pendingData[`hint_${questionId}`] as boolean) ?? false;
  await recordAttempt({
    userId: profileId,
    questionId,
    userAnswer: option.optionText,
    isCorrect,
    hintUsed,
  });

  // Update session progress
  const session = await getOrCreateTodaySession(profileId);
  const totalQuestions = await getSettingInt('questions_per_day');
  await markQuestionAnswered(session.id, totalQuestions);

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
    const retryKeyboard = new InlineKeyboard()
      .text('🔄 حاول مرة أخرى', `retry_mcq:${questionId}`);
    await ctx.editMessageText(
      formatWrongFeedback(question.explanation, correctText),
      { parse_mode: 'Markdown', reply_markup: retryKeyboard },
    );
  }

  // Send next question or summary
  await proceedToNextOrSummary(ctx, profileId, totalQuestions);
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

  // Handle text-based skip ("تخطي" or "skip")
  if (text === 'تخطي' || text.toLowerCase() === 'skip') {
    const hintUsed = (ctx.session.pendingData.hintUsed as boolean) ?? false;
    await recordAttempt({
      userId: profileId,
      questionId,
      userAnswer: '[skipped]',
      isCorrect: false,
      hintUsed,
    });

    ctx.session.state = 'idle';
    ctx.session.pendingData.currentQuestionId = undefined;

    const session = await getOrCreateTodaySession(profileId);
    const totalQuestions = await getSettingInt('questions_per_day');
    await markQuestionAnswered(session.id, totalQuestions);

    await ctx.reply('⏭️ تم التخطي — لا مشكلة، هيا نجرب السؤال التالي! 💪');

    const updatedSession = await getTodaySession(profileId);
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

  const { isCorrect, parsed } = checkOpenEndedAnswer(
    text,
    question.correctAnswerNumeric,
  );

  if (parsed === null) {
    await ctx.reply('🔢 أرسل رقماً فقط — أرقام عربية أو إنجليزية');
    return; // Stay in awaiting_answer state
  }

  // Check if this is a retry (practice, no recording)
  const isRetry = (ctx.session.pendingData[`retry_${questionId}`] as boolean) ?? false;

  if (isRetry) {
    ctx.session.state = 'idle';
    ctx.session.pendingData.currentQuestionId = undefined;
    ctx.session.pendingData[`retry_${questionId}`] = undefined;

    if (isCorrect) {
      await ctx.reply('✅ *أحسنت! إجابة صحيحة هذه المرة!* 🎉', { parse_mode: 'Markdown' });
    } else {
      const correctText = question.correctAnswer || String(question.correctAnswerNumeric);
      await ctx.reply(
        `❌ ليست الإجابة الصحيحة.\n\nالإجابة الصحيحة: *${correctText}*\nلا تقلق، ستراجعها قريباً! 💪`,
        { parse_mode: 'Markdown' },
      );
    }
    return;
  }

  // Record attempt (first try only)
  const hintUsed = (ctx.session.pendingData.hintUsed as boolean) ?? false;
  await recordAttempt({
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
  const session = await getOrCreateTodaySession(profileId);
  const totalQuestions = await getSettingInt('questions_per_day');
  await markQuestionAnswered(session.id, totalQuestions);

  // Show feedback
  const pointsPerCorrect = await getSettingInt('points_per_correct');
  const correctText = question.correctAnswer || String(question.correctAnswerNumeric);

  if (isCorrect) {
    await ctx.reply(formatCorrectFeedback(question.explanation, pointsPerCorrect), {
      parse_mode: 'Markdown',
    });
  } else {
    const retryKeyboard = new InlineKeyboard()
      .text('🔄 حاول مرة أخرى', `retry_open:${questionId}`);
    await ctx.reply(formatWrongFeedback(question.explanation, correctText), {
      parse_mode: 'Markdown',
      reply_markup: retryKeyboard,
    });
  }

  // Send next question or summary
  const updatedSession = await getTodaySession(profileId);
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

// ─── Skip Handler ──────────────────────────────────────────────────

export async function handleSkip(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('skip:')) return;

  const questionId = parseInt(data.split(':')[1], 10);

  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    await ctx.answerCallbackQuery({ text: 'اختر لاعباً أولاً /start' });
    return;
  }

  // Check if already answered
  const alreadyAnswered = await hasAnswered(profileId, questionId);
  if (alreadyAnswered) {
    await ctx.answerCallbackQuery({ text: 'لقد أجبت على هذا السؤال بالفعل!' });
    return;
  }

  const question = await prisma.question.findUnique({ where: { id: questionId } });
  if (!question) {
    await ctx.answerCallbackQuery({ text: 'حدث خطأ' });
    return;
  }

  // Record attempt as wrong with [skipped] marker
  const hintUsed = (ctx.session.pendingData[`hint_${questionId}`] as boolean) ?? false;
  await recordAttempt({
    userId: profileId,
    questionId,
    userAnswer: '[skipped]',
    isCorrect: false,
    hintUsed,
  });

  // Update session progress
  const session = await getOrCreateTodaySession(profileId);
  const totalQuestions = await getSettingInt('questions_per_day');
  await markQuestionAnswered(session.id, totalQuestions);

  // Clear open-ended state if active
  if (ctx.session.state === 'awaiting_answer') {
    ctx.session.state = 'idle';
    ctx.session.pendingData.currentQuestionId = undefined;
  }

  await ctx.answerCallbackQuery();
  await ctx.editMessageText('⏭️ تم التخطي — لا مشكلة، هيا نجرب السؤال التالي! 💪');

  // Send next question or summary
  const updatedSession = await getTodaySession(profileId);
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
    await ctx.answerCallbackQuery({ text: 'لا يوجد تلميح لهذا السؤال' });
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
  const session = await getTodaySession(profileId);
  if (!session || session.isComplete) return false;
  if (session.questionsAnswered >= session.questionsSent) return false;

  // Get the next question the user should answer
  const user = await prisma.user.findUnique({ where: { id: profileId } });
  if (!user) return false;

  const next = await getNextQuestion(profileId, user.levelId);
  if (!next || next.question.questionType !== 'open_ended') return false;

  // Check if already answered
  const alreadyAnswered = await hasAnswered(profileId, next.question.id);
  if (alreadyAnswered) return false;

  // Auto-set state and handle the answer
  ctx.session.state = 'awaiting_answer';
  ctx.session.pendingData.currentQuestionId = next.question.id;
  ctx.session.pendingData.hintUsed = false;
  await handleOpenEndedAnswer(ctx);
  return true;
}

// ─── Proceed Helper ─────────────────────────────────────────────────

async function proceedToNextOrSummary(ctx: BotContext, profileId: number, totalQuestions: number) {
  const updatedSession = await getTodaySession(profileId);
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

// ─── Retry Handlers ─────────────────────────────────────────────────

/**
 * Retry an MCQ question after a wrong answer.
 * Re-sends the question with shuffled options. No new attempt recorded — just practice.
 */
export async function handleRetryMcq(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('retry_mcq:')) return;

  const questionId = parseInt(data.split(':')[1], 10);
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    include: { options: true },
  });

  if (!question) {
    await ctx.answerCallbackQuery({ text: 'حدث خطأ' });
    return;
  }

  await ctx.answerCallbackQuery();
  await ctx.editMessageReplyMarkup({ reply_markup: undefined });

  // Mark as retry so the MCQ answer handler knows not to record a new attempt
  ctx.session.pendingData[`retry_${questionId}`] = true;

  const text = `🔄 *حاول مرة أخرى!*\n\n❓ ${question.questionText}`;
  const keyboard = buildMcqKeyboard(question.id, question.options, false);
  await ctx.reply(text, { parse_mode: 'Markdown', reply_markup: keyboard });
}

/**
 * Retry an open-ended question after a wrong answer.
 * Re-enters awaiting_answer state. No new attempt recorded.
 */
export async function handleRetryOpen(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('retry_open:')) return;

  const questionId = parseInt(data.split(':')[1], 10);
  const question = await prisma.question.findUnique({ where: { id: questionId } });

  if (!question) {
    await ctx.answerCallbackQuery({ text: 'حدث خطأ' });
    return;
  }

  await ctx.answerCallbackQuery();
  await ctx.editMessageReplyMarkup({ reply_markup: undefined });

  ctx.session.state = 'awaiting_answer';
  ctx.session.pendingData.currentQuestionId = questionId;
  ctx.session.pendingData.hintUsed = false;
  ctx.session.pendingData[`retry_${questionId}`] = true;

  await ctx.reply(`🔄 *حاول مرة أخرى!*\n\n❓ ${question.questionText}\n\n✏️ اكتب إجابتك:`, {
    parse_mode: 'Markdown',
  });
}

// ─── Daily Summary ──────────────────────────────────────────────────

async function showDailySummary(ctx: BotContext, userId: number) {
  const attempts = await getTodayAttempts(userId);
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { level: true },
  });
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

  // Check if user has completed all topics in their level
  try {
    const completion = await checkLevelCompletion(userId, user.levelId);
    if (completion.isComplete && completion.nextLevelId) {
      const nextLevel = await prisma.level.findUnique({
        where: { id: completion.nextLevelId },
      });
      if (nextLevel) {
        const levelEmoji = user.level.iconEmoji || '🥋';
        const nextEmoji = nextLevel.iconEmoji || '🥋';

        const keyboard = new InlineKeyboard()
          .text('🔼 انتقل للمستوى التالي', `level_up:${nextLevel.id}`)
          .text('🔄 استمر في نفس المستوى', 'stay_level');

        await ctx.reply(
          `🎉🥷 *مبروك يا ${user.nickname}!*\n\n` +
            `لقد أتقنت جميع مواضيع ${levelEmoji} ${user.level.name}!\n\n` +
            `هل أنت جاهز للانتقال إلى ${nextEmoji} ${nextLevel.name}؟`,
          { parse_mode: 'Markdown', reply_markup: keyboard },
        );
      }
    }
  } catch (err) {
    logger.error('Failed to check level completion', { error: String(err) });
  }
}

// ─── Level Up / Stay Handlers ──────────────────────────────────────

export async function handleLevelUp(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('level_up:')) return;

  const nextLevelId = parseInt(data.split(':')[1], 10);
  const profileId = ctx.session.activeProfileId;

  if (!profileId) {
    await ctx.answerCallbackQuery({ text: 'اختر لاعباً أولاً /start' });
    return;
  }

  const nextLevel = await prisma.level.findUnique({ where: { id: nextLevelId } });
  if (!nextLevel) {
    await ctx.answerCallbackQuery({ text: 'حدث خطأ' });
    return;
  }

  await prisma.user.update({
    where: { id: profileId },
    data: { levelId: nextLevelId },
  });

  const emoji = nextLevel.iconEmoji || '🥋';
  await ctx.answerCallbackQuery();
  await ctx.editMessageText(
    `🎉 *تم الترقية!*\n\nأنت الآن في ${emoji} ${nextLevel.name}!\nهيا نستمر في التحدي! 💪`,
    { parse_mode: 'Markdown' },
  );
}

export async function handleStayLevel(ctx: BotContext) {
  await ctx.answerCallbackQuery();
  await ctx.editMessageText(
    '👍 ممتاز! استمر في نفس المستوى — التمرين يجعلك أقوى! 💪',
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
