import type { BotContext } from '../middleware/session';
import { getMsg } from '../helpers/get-msg';
import {
  prisma,
  getNextQuestion,
  getOrCreateTodaySession,
  getTodaySession,
  markQuestionSent,
  recordAttemptAndProgress,
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
  locale: string,
): string {
  const label = locale === 'en' ? 'Question' : 'سؤال';
  let text = `${levelEmoji} *${label} ${position}/${total}* — ${topicName}\n\n`;
  if (context) text += `${context}\n\n`;
  text += `❓ ${questionText}`;
  return text;
}

function formatCorrectFeedback(explanation: string, points: number, locale: string): string {
  if (locale === 'en') {
    return `✅ *Correct! Well done!* 🎉\n\n💡 ${explanation}\n\n✨ +${points} points`;
  }
  return `✅ *إجابة صحيحة! أحسنت!* 🎉\n\n💡 ${explanation}\n\n✨ +${points} نقطة`;
}

function formatWrongFeedback(explanation: string, correctAnswer: string, locale: string): string {
  if (locale === 'en') {
    return `❌ *Almost! But you learned something new!*\n\n` +
      `The correct answer: *${correctAnswer}*\n💡 ${explanation}\n\n` +
      `💪 Want to try again?`;
  }
  return `❌ *تقريباً! لكن تعلمت شيئاً جديداً!*\n\n` +
    `الإجابة الصحيحة: *${correctAnswer}*\n💡 ${explanation}\n\n` +
    `💪 هل تريد المحاولة مرة أخرى؟`;
}

function formatDailySummary(
  nickname: string,
  attempts: { isCorrect: boolean; question: { topic: { name: string; nameEn: string | null } } }[],
  totalPointsToday: number,
  streakDays: number,
  totalPoints: number,
  locale: string,
): string {
  if (locale === 'en') {
    let text = `🏁 *Today's challenge is done, ${nickname}!*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    attempts.forEach((a, i) => {
      const icon = a.isCorrect ? '✅' : '❌';
      const topicName = a.question.topic.nameEn || a.question.topic.name;
      text += `${icon} Q${i + 1} — ${topicName}\n`;
    });
    const correct = attempts.filter((a) => a.isCorrect).length;
    text += `\n${correct}/${attempts.length} correct · +${totalPointsToday} points today`;
    text += `\n🔥 Streak: ${streakDays} days   💎 Total: ${totalPoints} points`;
    return text;
  }

  let text = `🏁 *انتهى تحدي اليوم يا ${nickname}!*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  attempts.forEach((a, i) => {
    const icon = a.isCorrect ? '✅' : '❌';
    text += `${icon} س${i + 1} — ${a.question.topic.name}\n`;
  });
  const correct = attempts.filter((a) => a.isCorrect).length;
  text += `\n${correct}/${attempts.length} صحيحة · +${totalPointsToday} نقطة اليوم`;
  text += `\n🔥 السلسلة: ${streakDays} يوم   💎 المجموع: ${totalPoints} نقطة`;
  return text;
}

// ─── Send Question to User ──────────────────────────────────────────

export async function sendQuestionToUser(ctx: BotContext, userId: number, levelId: number) {
  const locale = ctx.session.locale || 'ar';
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

  const topicName = (locale === 'en' && question.topic.nameEn) ? question.topic.nameEn : question.topic.name;
  const text = formatQuestion(
    position,
    totalQuestions,
    topicName,
    user?.level.iconEmoji || '🥷',
    question.realLifeContext,
    question.questionText,
    locale,
  );

  if (question.questionType === 'mcq') {
    const keyboard = buildMcqKeyboard(
      question.id,
      question.options,
      !!question.hintText,
      locale,
    );
    await ctx.reply(text, { parse_mode: 'Markdown', reply_markup: keyboard });
    // MCQ: state stays idle, answers come via callback
  } else {
    // Open-ended
    ctx.session.state = 'awaiting_answer';
    ctx.session.pendingData.currentQuestionId = question.id;
    ctx.session.pendingData.hintUsed = false;

    const writeAnswer = locale === 'en' ? '\n\n✏️ Type your answer:' : '\n\n✏️ اكتب إجابتك:';
    if (question.hintText) {
      const keyboard = buildHintKeyboard(question.id, locale);
      await ctx.reply(text + writeAnswer, {
        parse_mode: 'Markdown',
        reply_markup: keyboard,
      });
    } else {
      await ctx.reply(text + writeAnswer, { parse_mode: 'Markdown' });
    }
  }

  return true;
}

// ─── MCQ Answer Handler ─────────────────────────────────────────────

export async function handleMcqAnswer(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('answer:')) return;

  const parts = data.split(':');
  const questionId = parseInt(parts[1], 10);
  const optionId = parseInt(parts[2], 10);

  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const text = locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  // Check if this is a retry (practice, no points)
  const isRetry = (ctx.session.pendingData[`retry_${questionId}`] as boolean) ?? false;

  if (!isRetry) {
    // Check if already answered (only for non-retries)
    const alreadyAnswered = await hasAnswered(profileId, questionId);
    if (alreadyAnswered) {
      const text = locale === 'en' ? 'You already answered this question!' : 'لقد أجبت على هذا السؤال بالفعل!';
      await ctx.answerCallbackQuery({ text });
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
      const retryCorrect = locale === 'en'
        ? '✅ *Well done! Correct this time!* 🎉'
        : '✅ *أحسنت! إجابة صحيحة هذه المرة!* 🎉';
      await ctx.editMessageText(retryCorrect, { parse_mode: 'Markdown' });
    } else {
      const question = await prisma.question.findUnique({ where: { id: questionId }, include: { options: true } });
      const correctOption = question?.options.find((o) => o.isCorrect);
      const retryWrong = locale === 'en'
        ? `❌ Not the correct answer.\n\nThe correct answer: *${correctOption?.optionText || ''}*\nDon't worry, you'll review it soon! 💪`
        : `❌ ليست الإجابة الصحيحة.\n\nالإجابة الصحيحة: *${correctOption?.optionText || ''}*\nلا تقلق، ستراجعها قريباً! 💪`;
      await ctx.editMessageText(retryWrong, { parse_mode: 'Markdown' });
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
    const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
    await ctx.answerCallbackQuery({ text: errText });
    return;
  }

  // Record attempt + update session in a single transaction
  const hintUsed = (ctx.session.pendingData[`hint_${questionId}`] as boolean) ?? false;
  const { session } = await recordAttemptAndProgress({
    userId: profileId,
    questionId,
    userAnswer: option.optionText,
    isCorrect,
    hintUsed,
  });
  const totalQuestions = await getSettingInt('questions_per_day');

  // Show feedback
  const correctOption = question.options.find((o) => o.isCorrect);
  const correctText = correctOption?.optionText || question.correctAnswer || '';

  await ctx.answerCallbackQuery();

  if (isCorrect) {
    await ctx.editMessageText(
      formatCorrectFeedback(question.explanation, pointsPerCorrect, locale),
      { parse_mode: 'Markdown' },
    );
  } else {
    const retryLabel = locale === 'en' ? '🔄 Try again' : '🔄 حاول مرة أخرى';
    const retryKeyboard = new InlineKeyboard()
      .text(retryLabel, `retry_mcq:${questionId}`);
    await ctx.editMessageText(
      formatWrongFeedback(question.explanation, correctText, locale),
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

  const locale = ctx.session.locale || 'ar';
  const msg = getMsg(ctx);
  const profileId = ctx.session.activeProfileId;
  const questionId = ctx.session.pendingData.currentQuestionId as number | undefined;

  if (!profileId || !questionId) {
    ctx.session.state = 'idle';
    return;
  }

  // Handle text-based skip ("تخطي" or "skip")
  if (text === 'تخطي' || text.toLowerCase() === 'skip') {
    const hintUsed = (ctx.session.pendingData.hintUsed as boolean) ?? false;
    const { session } = await recordAttemptAndProgress({
      userId: profileId,
      questionId,
      userAnswer: '[skipped]',
      isCorrect: false,
      hintUsed,
    });
    const totalQuestions = await getSettingInt('questions_per_day');

    ctx.session.state = 'idle';
    ctx.session.pendingData.currentQuestionId = undefined;

    const skipText = locale === 'en'
      ? '⏭️ Skipped — no worries, let\'s try the next one! 💪'
      : '⏭️ تم التخطي — لا مشكلة، هيا نجرب السؤال التالي! 💪';
    await ctx.reply(skipText);

    const updatedSession = session;
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
    const numOnly = locale === 'en'
      ? '🔢 Send a number only — Arabic or English digits'
      : '🔢 أرسل رقماً فقط — أرقام عربية أو إنجليزية';
    await ctx.reply(numOnly);
    return; // Stay in awaiting_answer state
  }

  // Check if this is a retry (practice, no recording)
  const isRetry = (ctx.session.pendingData[`retry_${questionId}`] as boolean) ?? false;

  if (isRetry) {
    ctx.session.state = 'idle';
    ctx.session.pendingData.currentQuestionId = undefined;
    ctx.session.pendingData[`retry_${questionId}`] = undefined;

    if (isCorrect) {
      const retryCorrect = locale === 'en'
        ? '✅ *Well done! Correct this time!* 🎉'
        : '✅ *أحسنت! إجابة صحيحة هذه المرة!* 🎉';
      await ctx.reply(retryCorrect, { parse_mode: 'Markdown' });
    } else {
      const correctText = question.correctAnswer || String(question.correctAnswerNumeric);
      const retryWrong = locale === 'en'
        ? `❌ Not the correct answer.\n\nThe correct answer: *${correctText}*\nDon't worry, you'll review it soon! 💪`
        : `❌ ليست الإجابة الصحيحة.\n\nالإجابة الصحيحة: *${correctText}*\nلا تقلق، ستراجعها قريباً! 💪`;
      await ctx.reply(retryWrong, { parse_mode: 'Markdown' });
    }
    return;
  }

  // Record attempt + update session in a single transaction
  const hintUsed = (ctx.session.pendingData.hintUsed as boolean) ?? false;
  const { session } = await recordAttemptAndProgress({
    userId: profileId,
    questionId,
    userAnswer: text,
    isCorrect,
    hintUsed,
  });
  const totalQuestions = await getSettingInt('questions_per_day');

  // Reset state
  ctx.session.state = 'idle';
  ctx.session.pendingData.currentQuestionId = undefined;

  // Show feedback
  const pointsPerCorrect = await getSettingInt('points_per_correct');
  const correctText = question.correctAnswer || String(question.correctAnswerNumeric);

  if (isCorrect) {
    await ctx.reply(formatCorrectFeedback(question.explanation, pointsPerCorrect, locale), {
      parse_mode: 'Markdown',
    });
  } else {
    const retryLabel = locale === 'en' ? '🔄 Try again' : '🔄 حاول مرة أخرى';
    const retryKeyboard = new InlineKeyboard()
      .text(retryLabel, `retry_open:${questionId}`);
    await ctx.reply(formatWrongFeedback(question.explanation, correctText, locale), {
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
  const locale = ctx.session.locale || 'ar';
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('skip:')) return;

  const questionId = parseInt(data.split(':')[1], 10);

  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const text = locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  // Check if already answered
  const alreadyAnswered = await hasAnswered(profileId, questionId);
  if (alreadyAnswered) {
    const text = locale === 'en' ? 'You already answered this question!' : 'لقد أجبت على هذا السؤال بالفعل!';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  const question = await prisma.question.findUnique({ where: { id: questionId } });
  if (!question) {
    const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
    await ctx.answerCallbackQuery({ text: errText });
    return;
  }

  // Record attempt as wrong with [skipped] marker
  const hintUsed = (ctx.session.pendingData[`hint_${questionId}`] as boolean) ?? false;
  // Record skip + update session in a single transaction
  const { session } = await recordAttemptAndProgress({
    userId: profileId,
    questionId,
    userAnswer: '[skipped]',
    isCorrect: false,
    hintUsed,
  });
  const totalQuestions = await getSettingInt('questions_per_day');

  // Clear open-ended state if active
  if (ctx.session.state === 'awaiting_answer') {
    ctx.session.state = 'idle';
    ctx.session.pendingData.currentQuestionId = undefined;
  }

  await ctx.answerCallbackQuery();
  const skipText = locale === 'en'
    ? '⏭️ Skipped — no worries, let\'s try the next one! 💪'
    : '⏭️ تم التخطي — لا مشكلة، هيا نجرب السؤال التالي! 💪';
  await ctx.editMessageText(skipText);

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
  const locale = ctx.session.locale || 'ar';
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('hint:')) return;

  const questionId = parseInt(data.split(':')[1], 10);
  const question = await prisma.question.findUnique({ where: { id: questionId } });

  if (!question?.hintText) {
    const text = locale === 'en' ? 'No hint for this question' : 'لا يوجد تلميح لهذا السؤال';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  // Track hint usage in session
  ctx.session.pendingData[`hint_${questionId}`] = true;
  if (ctx.session.state === 'awaiting_answer') {
    ctx.session.pendingData.hintUsed = true;
  }

  await ctx.answerCallbackQuery();
  const hintLabel = locale === 'en' ? 'Hint' : 'تلميح';
  await ctx.reply(`💡 *${hintLabel}:* ${question.hintText}`, { parse_mode: 'Markdown' });
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
    ctx.session.locale = profile.locale || 'ar';
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
  const locale = ctx.session.locale || 'ar';
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('retry_mcq:')) return;

  const questionId = parseInt(data.split(':')[1], 10);
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    include: { options: true },
  });

  if (!question) {
    const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
    await ctx.answerCallbackQuery({ text: errText });
    return;
  }

  await ctx.answerCallbackQuery();
  await ctx.editMessageReplyMarkup({ reply_markup: undefined });

  // Mark as retry so the MCQ answer handler knows not to record a new attempt
  ctx.session.pendingData[`retry_${questionId}`] = true;

  const retryLabel = locale === 'en' ? 'Try again!' : 'حاول مرة أخرى!';
  const text = `🔄 *${retryLabel}*\n\n❓ ${question.questionText}`;
  const keyboard = buildMcqKeyboard(question.id, question.options, false, locale);
  await ctx.reply(text, { parse_mode: 'Markdown', reply_markup: keyboard });
}

/**
 * Retry an open-ended question after a wrong answer.
 * Re-enters awaiting_answer state. No new attempt recorded.
 */
export async function handleRetryOpen(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('retry_open:')) return;

  const questionId = parseInt(data.split(':')[1], 10);
  const question = await prisma.question.findUnique({ where: { id: questionId } });

  if (!question) {
    const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
    await ctx.answerCallbackQuery({ text: errText });
    return;
  }

  await ctx.answerCallbackQuery();
  await ctx.editMessageReplyMarkup({ reply_markup: undefined });

  ctx.session.state = 'awaiting_answer';
  ctx.session.pendingData.currentQuestionId = questionId;
  ctx.session.pendingData.hintUsed = false;
  ctx.session.pendingData[`retry_${questionId}`] = true;

  const retryLabel = locale === 'en' ? 'Try again!' : 'حاول مرة أخرى!';
  const writeAnswer = locale === 'en' ? 'Type your answer:' : 'اكتب إجابتك:';
  await ctx.reply(`🔄 *${retryLabel}*\n\n❓ ${question.questionText}\n\n✏️ ${writeAnswer}`, {
    parse_mode: 'Markdown',
  });
}

// ─── Daily Summary ──────────────────────────────────────────────────

async function showDailySummary(ctx: BotContext, userId: number) {
  const locale = ctx.session.locale || 'ar';
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
      locale,
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
        const levelEmoji = user.level.iconEmoji || '🥷';
        const nextEmoji = nextLevel.iconEmoji || '🥷';
        const levelName = (locale === 'en' && user.level.nameEn) ? user.level.nameEn : user.level.name;
        const nextLevelName = (locale === 'en' && nextLevel.nameEn) ? nextLevel.nameEn : nextLevel.name;

        const levelUpLabel = locale === 'en' ? '🔼 Go to next level' : '🔼 انتقل للمستوى التالي';
        const stayLabel = locale === 'en' ? '🔄 Stay at this level' : '🔄 استمر في نفس المستوى';
        const keyboard = new InlineKeyboard()
          .text(levelUpLabel, `level_up:${nextLevel.id}`)
          .text(stayLabel, 'stay_level');

        // Send certificate image
        const profileSlug = user.username || String(user.id);
        const certUrl = `https://numninjas.com/api/certificate/${profileSlug}?type=level&levelName=${encodeURIComponent(levelName)}`;
        try {
          const certCaption = locale === 'en'
            ? `🎉 *Congratulations, ${user.nickname}!*\nYou've mastered ${levelEmoji} ${levelName}!`
            : `🎉 *مبروك يا ${user.nickname}!*\nلقد أتقنت ${levelEmoji} ${levelName}!`;
          await ctx.replyWithPhoto(certUrl, {
            caption: certCaption,
            parse_mode: 'Markdown',
          });
        } catch {
          // Fallback if image fails (e.g., site not deployed yet)
        }

        const completionText = locale === 'en'
          ? `🎉🥷 *Congratulations, ${user.nickname}!*\n\n` +
            `You've mastered all topics in ${levelEmoji} ${levelName}!\n\n` +
            `Are you ready to move to ${nextEmoji} ${nextLevelName}?`
          : `🎉🥷 *مبروك يا ${user.nickname}!*\n\n` +
            `لقد أتقنت جميع مواضيع ${levelEmoji} ${levelName}!\n\n` +
            `هل أنت جاهز للانتقال إلى ${nextEmoji} ${nextLevelName}؟`;

        await ctx.reply(completionText, { parse_mode: 'Markdown', reply_markup: keyboard });
      }
    }
  } catch (err) {
    logger.error('Failed to check level completion', { error: String(err) });
  }
}

// ─── Level Up / Stay Handlers ──────────────────────────────────────

export async function handleLevelUp(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('level_up:')) return;

  const nextLevelId = parseInt(data.split(':')[1], 10);
  const profileId = ctx.session.activeProfileId;

  if (!profileId) {
    const text = locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  const nextLevel = await prisma.level.findUnique({ where: { id: nextLevelId } });
  if (!nextLevel) {
    const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
    await ctx.answerCallbackQuery({ text: errText });
    return;
  }

  await prisma.user.update({
    where: { id: profileId },
    data: { levelId: nextLevelId },
  });

  const emoji = nextLevel.iconEmoji || '🥷';
  const nextLevelName = (locale === 'en' && nextLevel.nameEn) ? nextLevel.nameEn : nextLevel.name;
  await ctx.answerCallbackQuery();

  const levelUpText = locale === 'en'
    ? `🎉 *Promoted!*\n\nYou're now at ${emoji} ${nextLevelName}!\nLet's keep the challenge going! 💪`
    : `🎉 *تم الترقية!*\n\nأنت الآن في ${emoji} ${nextLevelName}!\nهيا نستمر في التحدي! 💪`;
  await ctx.editMessageText(levelUpText, { parse_mode: 'Markdown' });
}

export async function handleStayLevel(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  await ctx.answerCallbackQuery();
  const stayText = locale === 'en'
    ? '👍 Great! Keep practicing at this level — practice makes you stronger! 💪'
    : '👍 ممتاز! استمر في نفس المستوى — التمرين يجعلك أقوى! 💪';
  await ctx.editMessageText(stayText);
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
