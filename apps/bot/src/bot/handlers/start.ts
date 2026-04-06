import { InlineKeyboard } from 'grammy';
import type { BotContext } from '../middleware/session';
import { msg } from '../messages/arabic';
import { prisma, findOrCreateAccount, createProfile, updateNickname, logger } from '@numninja/database';
import { buildProfileKeyboard } from '../keyboards/profile';
import { buildLevelKeyboard } from '../keyboards/level';
import { sendQuestionToUser } from './question';

// ─── Onboarding Quiz Questions ─────────────────────────────────────

const QUIZ_QUESTIONS = [
  {
    text: '🧮 *سؤال 1/3*\n\nرحت السوبر ماركت واشتريت حاجات بـ 47 جنيه ودفعت 100 جنيه.\nالباقي كام؟',
    options: [
      { text: '٥٣ جنيه', correct: true },
      { text: '٤٧ جنيه', correct: false },
      { text: '٦٣ جنيه', correct: false },
    ],
  },
  {
    text: '🧮 *سؤال 2/3*\n\nلو عندك ½ بيتزا وأخدت منها ¼، فاضل كام؟',
    options: [
      { text: '¼', correct: true },
      { text: '¾', correct: false },
      { text: '½', correct: false },
    ],
  },
  {
    text: '🧮 *سؤال 3/3*\n\nمحل هدوم عامل خصم 20% على جاكت بـ 150 جنيه.\nهتدفع كام؟',
    options: [
      { text: '١٢٠ جنيه', correct: true },
      { text: '١٣٠ جنيه', correct: false },
      { text: '١٠٠ جنيه', correct: false },
    ],
  },
];

/** Map quiz score (0-3 correct) → level rankOrder (1-4) */
function quizScoreToLevelRank(correct: number): number {
  // 0→1(White), 1→2(Yellow), 2→3(Orange), 3→4(Green). Never 5(Black Belt).
  return Math.min(correct + 1, 4);
}

/** Build inline keyboard for a quiz question. Options are shuffled. */
function buildQuizKeyboard(step: number, options: typeof QUIZ_QUESTIONS[number]['options']) {
  const keyboard = new InlineKeyboard();
  // Shuffle options
  const shuffled = [...options].sort(() => Math.random() - 0.5);
  for (const opt of shuffled) {
    keyboard.text(opt.text, `quiz_answer:${step}:${opt.correct ? 1 : 0}`).row();
  }
  return keyboard;
}

/** Send a quiz question to the user */
async function sendQuizQuestion(ctx: BotContext, step: number) {
  const q = QUIZ_QUESTIONS[step];
  const keyboard = buildQuizKeyboard(step, q.options);
  await ctx.reply(q.text, { parse_mode: 'Markdown', reply_markup: keyboard });
}

export async function handleStart(ctx: BotContext) {
  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const account = await findOrCreateAccount(telegramId);

  // No profiles yet → start onboarding
  if (account.users.length === 0) {
    ctx.session.state = 'awaiting_nickname';
    ctx.session.pendingData = {};
    await ctx.reply(msg.welcome, { parse_mode: 'Markdown' });
    await ctx.reply(msg.askNickname);
    return;
  }

  // Has profiles → load active or show picker
  if (account.activeProfile) {
    const profile = account.activeProfile;
    ctx.session.activeProfileId = profile.id;
    ctx.session.state = 'idle';
    await ctx.reply(
      msg.welcomeBack(profile.nickname, profile.level.iconEmoji || '🥋'),
      { parse_mode: 'Markdown' },
    );

    // Auto-send next question if available
    await sendQuestionToUser(ctx, profile.id, profile.levelId);
    return;
  }

  // Account exists but no active profile → show picker
  const profiles = account.users;
  const keyboard = buildProfileKeyboard(profiles);
  await ctx.reply(msg.whoIsPlaying, { reply_markup: keyboard });
}

export async function handleNicknameInput(ctx: BotContext) {
  const text = ctx.message?.text?.trim();
  if (!text || text.length < 2 || text.length > 20) {
    await ctx.reply(msg.invalidNickname);
    return;
  }

  // Check if starts with / (command) — reset state and ignore
  if (text.startsWith('/')) {
    ctx.session.state = 'idle';
    return false; // Signal that this was not handled
  }

  // Case: Changing nickname for existing profile
  if (ctx.session.pendingData.changingNickname && ctx.session.activeProfileId) {
    await updateNickname(ctx.session.activeProfileId, text);
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};
    await ctx.reply(`✅ تم تغيير الاسم لـ *${text}*`, { parse_mode: 'Markdown' });
    logger.info('Nickname changed', { profileId: ctx.session.activeProfileId, newName: text });
    return true;
  }

  // Case: Onboarding — start quiz to auto-detect level
  ctx.session.pendingData.nickname = text;
  ctx.session.state = 'onboarding_quiz';
  ctx.session.pendingData.quizStep = 0;
  ctx.session.pendingData.quizCorrect = 0;

  await ctx.reply(
    `👋 أهلاً يا *${text}*!\n\n` +
    '🧪 هنسألك 3 أسئلة سريعة عشان نعرف مستواك.\n' +
    'جاوب براحتك — مفيش صح أو غلط هنا! 😊',
    { parse_mode: 'Markdown' },
  );
  await sendQuizQuestion(ctx, 0);
  return true;
}

export async function handleLevelSelection(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('select_level:')) return;

  const levelId = parseInt(data.split(':')[1], 10);
  const telegramId = BigInt(ctx.from!.id);

  // Case 1: Changing level for existing profile (from /level command)
  if (ctx.session.pendingData.changingLevel && ctx.session.activeProfileId) {
    try {
      const level = await prisma.level.findUnique({ where: { id: levelId } });
      await prisma.user.update({
        where: { id: ctx.session.activeProfileId },
        data: { levelId },
      });
      ctx.session.pendingData = {};
      await ctx.answerCallbackQuery();
      await ctx.editMessageText(
        `✅ تم تغيير المستوى لـ ${level?.iconEmoji || '🥋'} *${level?.name}*`,
        { parse_mode: 'Markdown' },
      );
      logger.info('Level changed', { profileId: ctx.session.activeProfileId, levelId });
    } catch (error) {
      logger.error('Failed to change level', { error: String(error) });
      await ctx.answerCallbackQuery({ text: 'حصل خطأ' });
    }
    return;
  }

  // Case 2: Creating new profile (onboarding or quiz override)
  const nickname = ctx.session.pendingData.nickname as string;
  if (!nickname) {
    await ctx.answerCallbackQuery({ text: 'حصل خطأ، ابعت /start تاني' });
    ctx.session.state = 'idle';
    return;
  }

  try {
    const profile = await createProfile(telegramId, nickname, levelId);
    ctx.session.activeProfileId = profile.id;
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};

    await ctx.answerCallbackQuery();
    await ctx.editMessageText(
      msg.profileCreated(profile.nickname, profile.level.iconEmoji || '🥋', profile.level.name),
      { parse_mode: 'Markdown' },
    );
    logger.info('Profile created', { telegramId: Number(telegramId), nickname, levelId });
  } catch (error) {
    logger.error('Failed to create profile', { error: String(error) });
    await ctx.answerCallbackQuery({ text: 'حصل خطأ، جرب تاني' });
    ctx.session.state = 'idle';
  }
}

// ─── Onboarding Quiz Answer Handler ────────────────────────────────

export async function handleQuizAnswer(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('quiz_answer:')) return;

  const parts = data.split(':');
  const step = parseInt(parts[1], 10);
  const isCorrect = parts[2] === '1';

  // Validate state
  if (ctx.session.state !== 'onboarding_quiz') {
    await ctx.answerCallbackQuery({ text: 'الاختبار انتهى خلاص' });
    return;
  }

  const currentStep = (ctx.session.pendingData.quizStep as number) ?? 0;

  // Prevent answering same question twice
  if (step !== currentStep) {
    await ctx.answerCallbackQuery({ text: 'أنت جاوبت على السؤال ده خلاص!' });
    return;
  }

  // Update score
  let quizCorrect = (ctx.session.pendingData.quizCorrect as number) ?? 0;
  if (isCorrect) quizCorrect++;
  ctx.session.pendingData.quizCorrect = quizCorrect;

  // Show per-question feedback
  const feedbackEmoji = isCorrect ? '✅' : '❌';
  await ctx.answerCallbackQuery({ text: isCorrect ? 'صح! 🎉' : 'غلط — بس مفيش مشكلة!' });

  // Remove buttons from answered question
  const q = QUIZ_QUESTIONS[step];
  await ctx.editMessageText(
    `${q.text}\n\n${feedbackEmoji} ${isCorrect ? 'صح!' : 'غلط — بس مفيش مشكلة!'}`,
    { parse_mode: 'Markdown' },
  );

  const nextStep = step + 1;

  if (nextStep < QUIZ_QUESTIONS.length) {
    // Send next question
    ctx.session.pendingData.quizStep = nextStep;
    await sendQuizQuestion(ctx, nextStep);
    return;
  }

  // Quiz finished — determine level
  const levelRank = quizScoreToLevelRank(quizCorrect);
  const level = await prisma.level.findFirst({
    where: { rankOrder: levelRank },
  });

  if (!level) {
    logger.error('Quiz: level not found for rankOrder', { levelRank });
    await ctx.reply(msg.error);
    ctx.session.state = 'idle';
    return;
  }

  // Create profile with auto-detected level
  const nickname = ctx.session.pendingData.nickname as string;
  const telegramId = BigInt(ctx.from!.id);

  try {
    const profile = await createProfile(telegramId, nickname, level.id);
    ctx.session.activeProfileId = profile.id;
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};

    const resultText =
      `🎯 *نتيجة الاختبار: ${quizCorrect}/3*\n\n` +
      `بناءً على إجاباتك، مستواك هو ${level.iconEmoji || '🥋'} *${level.name}*!\n\n` +
      `✅ *${nickname}* اتسجل! جاهز للتحدي! 🔥`;

    const keyboard = new InlineKeyboard()
      .text('🥋 اختار مستوى تاني', 'change_quiz_level');

    await ctx.reply(resultText, { parse_mode: 'Markdown', reply_markup: keyboard });
    logger.info('Profile created via quiz', {
      telegramId: Number(telegramId),
      nickname,
      levelId: level.id,
      quizScore: quizCorrect,
    });
  } catch (error) {
    logger.error('Failed to create profile via quiz', { error: String(error) });
    await ctx.reply(msg.error);
    ctx.session.state = 'idle';
  }
}

// ─── Change Quiz Level (override auto-detected level) ──────────────

export async function handleChangeQuizLevel(ctx: BotContext) {
  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    await ctx.answerCallbackQuery({ text: 'حصل خطأ، ابعت /start تاني' });
    return;
  }

  await ctx.answerCallbackQuery();

  const { keyboard, levels } = await buildLevelKeyboard();

  let levelInfo = 'اختار المستوى اللي تحبه:\n\n';
  for (const level of levels) {
    levelInfo += `${level.iconEmoji || '🥋'} *${level.name}* — ${level.description || ''}\n`;
  }

  await ctx.reply(levelInfo, { parse_mode: 'Markdown', reply_markup: keyboard });
  ctx.session.pendingData.changingLevel = true;
}
