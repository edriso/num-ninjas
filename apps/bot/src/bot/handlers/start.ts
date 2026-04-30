import { InlineKeyboard } from 'grammy';
import type { BotContext } from '../middleware/session';
import { getMsg } from '../helpers/get-msg';
import { getMessages } from '../messages';
import { prisma, findOrCreateAccount, createProfile, updateNickname, logger, todayCairoAsUtcMidnight, getSettingInt, getTopicStrengths, pickWeightedTopics, getExcludedQuestionIds, shuffle } from '@numninjas/database';
import { buildProfileKeyboard } from '../keyboards/profile';
import { buildLevelKeyboard } from '../keyboards/level';
import { fixRtlOptionText } from '../keyboards/mcq';
import { sendQuestionToUser } from './question';

// ─── Prepare Questions for New User ───────────────────────────────

async function prepareQuestionsForUser(userId: number, levelId: number, locale: string) {
  try {
    const today = todayCairoAsUtcMidnight();
    const questionsPerDay = await getSettingInt('questions_per_day');

    const existing = await prisma.scheduledQuestion.findFirst({
      where: { userId, scheduledDate: today },
    });
    if (existing) return; // Already prepared

    const strengths = await getTopicStrengths(userId, levelId);
    if (strengths.length === 0) return;

    const pickedTopics = pickWeightedTopics(strengths, questionsPerDay);
    const excludedIds = await getExcludedQuestionIds(userId, levelId);
    const selectedQuestions: { id: number }[] = [];

    for (const topic of pickedTopics) {
      let available = await prisma.question.findMany({
        where: {
          topicId: topic.topicId,
          locale,
          ...(excludedIds.size > 0 ? { id: { notIn: [...excludedIds] } } : {}),
        },
        select: { id: true },
      });

      if (available.length === 0 && locale !== 'ar') {
        available = await prisma.question.findMany({
          where: {
            topicId: topic.topicId,
            locale: 'ar',
            ...(excludedIds.size > 0 ? { id: { notIn: [...excludedIds] } } : {}),
          },
          select: { id: true },
        });
      }

      if (available.length > 0) {
        const picked = shuffle(available)[0];
        selectedQuestions.push(picked);
        excludedIds.add(picked.id);
      } else {
        // Fallback: all questions in cooldown — pick any from this topic
        const fallback = await prisma.question.findMany({
          where: { topicId: topic.topicId },
          select: { id: true },
        });
        if (fallback.length > 0) {
          selectedQuestions.push(shuffle(fallback)[0]);
        }
      }
    }

    for (let i = 0; i < selectedQuestions.length; i++) {
      await prisma.scheduledQuestion.create({
        data: { userId, questionId: selectedQuestions[i].id, position: i + 1, scheduledDate: today },
      });
    }

    logger.info('Prepared questions for new user', { userId, count: selectedQuestions.length });
  } catch (err) {
    logger.error('Failed to prepare questions for new user', { userId, error: String(err) });
  }
}

// ─── Onboarding Quiz Questions ─────────────────────────────────────

const QUIZ_QUESTIONS_AR = [
  {
    text: '🧮 *سؤال 1/3*\n\nأنت في السوبر ماركت، اشتريت أغراضاً بـ 47 جنيه ودفعت 100 جنيه.\nكم يتبقى؟',
    options: [
      { text: '53 جنيه', correct: true },
      { text: '47 جنيه', correct: false },
      { text: '63 جنيه', correct: false },
    ],
  },
  {
    text: '🧮 *سؤال 2/3*\n\nلديك ½ بيتزا وأخذت منها ¼، كم يتبقى؟',
    options: [
      { text: '¼', correct: true },
      { text: '¾', correct: false },
      { text: '½', correct: false },
    ],
  },
  {
    text: '🧮 *سؤال 3/3*\n\nمتجر ملابس يقدّم خصم 20% على جاكيت بـ 150 جنيه.\nكم ستدفع؟',
    options: [
      { text: '120 جنيه', correct: true },
      { text: '130 جنيه', correct: false },
      { text: '100 جنيه', correct: false },
    ],
  },
];

const QUIZ_QUESTIONS_EN = [
  {
    text: '🧮 *Question 1/3*\n\nYou\'re at the supermarket, you bought items for 47 pounds and paid 100 pounds.\nHow much change do you get?',
    options: [
      { text: '53 pounds', correct: true },
      { text: '47 pounds', correct: false },
      { text: '63 pounds', correct: false },
    ],
  },
  {
    text: '🧮 *Question 2/3*\n\nYou have ½ a pizza and you ate ¼ of it. How much is left?',
    options: [
      { text: '¼', correct: true },
      { text: '¾', correct: false },
      { text: '½', correct: false },
    ],
  },
  {
    text: '🧮 *Question 3/3*\n\nA clothing store offers a 20% discount on a jacket that costs 150 pounds.\nHow much will you pay?',
    options: [
      { text: '120 pounds', correct: true },
      { text: '130 pounds', correct: false },
      { text: '100 pounds', correct: false },
    ],
  },
];

function getQuizQuestions(locale: string) {
  return locale === 'en' ? QUIZ_QUESTIONS_EN : QUIZ_QUESTIONS_AR;
}

/** Map quiz score (0-3 correct) → level rankOrder (1-4) */
function quizScoreToLevelRank(correct: number): number {
  // 0→1(White), 1→2(Yellow), 2→3(Orange), 3→4(Green). Never 5(Black Belt).
  return Math.min(correct + 1, 4);
}

/** Build inline keyboard for a quiz question. Options are shuffled. */
function buildQuizKeyboard(step: number, options: typeof QUIZ_QUESTIONS_AR[number]['options'], locale = 'ar') {
  const keyboard = new InlineKeyboard();
  // Shuffle options
  const shuffled = [...options].sort(() => Math.random() - 0.5);
  for (const opt of shuffled) {
    const text = fixRtlOptionText(opt.text, locale);
    keyboard.text(text, `quiz_answer:${step}:${opt.correct ? 1 : 0}`).row();
  }
  return keyboard;
}

/** Send a quiz question to the user */
async function sendQuizQuestion(ctx: BotContext, step: number) {
  const locale = ctx.session.locale || 'ar';
  const questions = getQuizQuestions(locale);
  const q = questions[step];
  const keyboard = buildQuizKeyboard(step, q.options, locale);
  await ctx.reply(q.text, { parse_mode: 'Markdown', reply_markup: keyboard });
}

export async function handleStart(ctx: BotContext) {
  const msg = getMsg(ctx);

  if (ctx.chat?.type !== 'private') {
    await ctx.reply(msg.privateChatOnly);
    return;
  }

  const telegramId = BigInt(ctx.from!.id);
  const account = await findOrCreateAccount(telegramId);

  // No profiles yet → start onboarding with language choice
  if (account.users.length === 0) {
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};

    const keyboard = new InlineKeyboard()
      .text('🇸🇦 عربي', 'onboard_lang:ar')
      .text('🇬🇧 English', 'onboard_lang:en');

    await ctx.reply(
      '🥷 *نينجا الأرقام | NumNinjas*\n\n' +
      'اختر لغتك / Choose your language:',
      { parse_mode: 'Markdown', reply_markup: keyboard },
    );
    return;
  }

  // Has profiles → load active or show picker
  if (account.activeProfile) {
    const profile = account.activeProfile;
    ctx.session.activeProfileId = profile.id;
    ctx.session.locale = profile.locale || 'ar';
    ctx.session.state = 'idle';

    const localMsg = getMessages(ctx.session.locale);
    await ctx.reply(
      localMsg.welcomeBack(profile.nickname, profile.level.iconEmoji || '🥷'),
      { parse_mode: 'Markdown' },
    );

    // Auto-send next question if available
    await sendQuestionToUser(ctx, profile.id, profile.levelId);
    return;
  }

  // Account exists but no active profile → show picker
  const profiles = account.users;
  const keyboard = buildProfileKeyboard(profiles, true, ctx.session.locale || 'ar');
  await ctx.reply(msg.whoIsPlaying, { reply_markup: keyboard });
}

export async function handleNicknameInput(ctx: BotContext) {
  const msg = getMsg(ctx);
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
    const locale = ctx.session.locale || 'ar';
    const confirmText = locale === 'en'
      ? `✅ Name changed to *${text}*`
      : `✅ تم تغيير الاسم لـ *${text}*`;
    await ctx.reply(confirmText, { parse_mode: 'Markdown' });
    logger.info('Nickname changed', { profileId: ctx.session.activeProfileId, newName: text });
    return true;
  }

  // Case: Onboarding — start quiz to auto-detect level
  ctx.session.pendingData.nickname = text;
  ctx.session.state = 'onboarding_quiz';
  ctx.session.pendingData.quizStep = 0;
  ctx.session.pendingData.quizCorrect = 0;

  const locale = ctx.session.locale || 'ar';
  const quizIntro = locale === 'en'
    ? `👋 Hi *${text}*!\n\n` +
      '🧪 We\'ll ask you 3 quick questions to find your level.\n' +
      'Take your time — no right or wrong here! 😊'
    : `👋 مرحباً يا *${text}*!\n\n` +
      '🧪 سنسألك 3 أسئلة سريعة لتحديد مستواك.\n' +
      'أجب براحتك — لا صحيح ولا خطأ هنا! 😊';

  await ctx.reply(quizIntro, { parse_mode: 'Markdown' });
  await sendQuizQuestion(ctx, 0);
  return true;
}

export async function handleLevelSelection(ctx: BotContext) {
  const msg = getMsg(ctx);
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('select_level:')) return;

  const levelId = parseInt(data.split(':')[1], 10);
  const telegramId = BigInt(ctx.from!.id);
  const locale = ctx.session.locale || 'ar';

  // Case 1: Changing level for existing profile (from /level command or quiz level override)
  if (ctx.session.pendingData.changingLevel && ctx.session.activeProfileId) {
    try {
      const level = await prisma.level.findUnique({ where: { id: levelId } });
      const profileId = ctx.session.activeProfileId;
      const fromOnboarding = !!ctx.session.pendingData.changingLevelFromOnboarding;

      await prisma.user.update({
        where: { id: profileId },
        data: { levelId },
      });

      // Delete today's scheduled questions and session, re-prepare for new level
      const today = todayCairoAsUtcMidnight();
      await prisma.scheduledQuestion.deleteMany({
        where: { userId: profileId, scheduledDate: today },
      });
      await prisma.studySession.deleteMany({
        where: { userId: profileId, sessionDate: today },
      });
      await prepareQuestionsForUser(profileId, levelId, locale);

      ctx.session.pendingData = {};
      await ctx.answerCallbackQuery();
      const levelName = (locale === 'en' && level?.nameEn) ? level.nameEn : level?.name;
      const confirmText = locale === 'en'
        ? `✅ Level changed to ${level?.iconEmoji || '🥷'} *${levelName}*`
        : `✅ تم تغيير المستوى لـ ${level?.iconEmoji || '🥷'} *${levelName}*`;

      if (fromOnboarding) {
        const startNowText = locale === 'en' ? '🚀 Start now!' : '🚀 ابدأ الآن!';
        const keyboard = new InlineKeyboard().text(startNowText, 'start_first_question');
        await ctx.editMessageText(confirmText, { parse_mode: 'Markdown', reply_markup: keyboard });
      } else {
        await ctx.editMessageText(confirmText, { parse_mode: 'Markdown' });
      }

      logger.info('Level changed', { profileId, levelId, fromOnboarding });
    } catch (error) {
      logger.error('Failed to change level', { error: String(error) });
      const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
      await ctx.answerCallbackQuery({ text: errText });
    }
    return;
  }

  // Case 2: Creating new profile (onboarding or quiz override)
  const nickname = ctx.session.pendingData.nickname as string;
  if (!nickname) {
    const errText = locale === 'en' ? 'An error occurred, send /start again' : 'حدث خطأ، أرسل /start مرة أخرى';
    await ctx.answerCallbackQuery({ text: errText });
    ctx.session.state = 'idle';
    return;
  }

  try {
    const tgUsername = ctx.from?.username;
    const profile = await createProfile(telegramId, nickname, levelId, tgUsername, locale);
    ctx.session.activeProfileId = profile.id;
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};

    await ctx.answerCallbackQuery();
    const levelName = (locale === 'en' && profile.level.nameEn) ? profile.level.nameEn : profile.level.name;
    const startNowText = locale === 'en' ? '🚀 Start now!' : '🚀 ابدأ الآن!';
    const keyboard = new InlineKeyboard().text(startNowText, 'start_first_question');
    await ctx.editMessageText(
      msg.profileCreated(profile.nickname, profile.level.iconEmoji || '🥷', levelName),
      { parse_mode: 'Markdown', reply_markup: keyboard },
    );
    logger.info('Profile created', { telegramId: Number(telegramId), nickname, levelId });

    // Prepare today's questions immediately
    await prepareQuestionsForUser(profile.id, levelId, locale);
  } catch (error) {
    logger.error('Failed to create profile', { error: String(error) });
    const errText = locale === 'en' ? 'An error occurred, try again' : 'حدث خطأ، حاول مرة أخرى';
    await ctx.answerCallbackQuery({ text: errText });
    ctx.session.state = 'idle';
  }
}

// ─── Onboarding Quiz Answer Handler ────────────────────────────────

export async function handleQuizAnswer(ctx: BotContext) {
  const msg = getMsg(ctx);
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('quiz_answer:')) return;

  const parts = data.split(':');
  const step = parseInt(parts[1], 10);
  const isCorrect = parts[2] === '1';
  const locale = ctx.session.locale || 'ar';
  const questions = getQuizQuestions(locale);

  // Validate state
  if (ctx.session.state !== 'onboarding_quiz') {
    const text = locale === 'en' ? 'The quiz is already finished' : 'الاختبار انتهى بالفعل';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  const currentStep = (ctx.session.pendingData.quizStep as number) ?? 0;

  // Prevent answering same question twice
  if (step !== currentStep) {
    const text = locale === 'en' ? 'You already answered this question!' : 'لقد أجبت على هذا السؤال بالفعل!';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  // Update score
  let quizCorrect = (ctx.session.pendingData.quizCorrect as number) ?? 0;
  if (isCorrect) quizCorrect++;
  ctx.session.pendingData.quizCorrect = quizCorrect;

  // Show per-question feedback
  const feedbackEmoji = isCorrect ? '✅' : '❌';
  const correctCb = locale === 'en' ? 'Correct! 🎉' : 'صح! 🎉';
  const wrongCb = locale === 'en' ? 'Wrong — no worries!' : 'خطأ — لا مشكلة!';
  await ctx.answerCallbackQuery({ text: isCorrect ? correctCb : wrongCb });

  // Remove buttons from answered question
  const q = questions[step];
  const correctLabel = locale === 'en' ? 'Correct!' : 'صح!';
  const wrongLabel = locale === 'en' ? 'Wrong — no worries!' : 'خطأ — لا مشكلة!';
  await ctx.editMessageText(
    `${q.text}\n\n${feedbackEmoji} ${isCorrect ? correctLabel : wrongLabel}`,
    { parse_mode: 'Markdown' },
  );

  const nextStep = step + 1;

  if (nextStep < questions.length) {
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
    const tgUsername = ctx.from?.username;
    const profile = await createProfile(telegramId, nickname, level.id, tgUsername, locale);
    ctx.session.activeProfileId = profile.id;
    ctx.session.state = 'idle';
    ctx.session.pendingData = {};

    const levelName = (locale === 'en' && level.nameEn) ? level.nameEn : level.name;
    const resultText = locale === 'en'
      ? `🎯 *Quiz result: ${quizCorrect}/3*\n\n` +
        `Based on your answers, your level is ${level.iconEmoji || '🥷'} *${levelName}*!\n\n` +
        `✅ *${nickname}* is registered! Ready for the challenge! 🔥`
      : `🎯 *نتيجة الاختبار: ${quizCorrect}/3*\n\n` +
        `بناءً على إجاباتك، مستواك هو ${level.iconEmoji || '🥷'} *${levelName}*!\n\n` +
        `✅ تم تسجيل *${nickname}*! جاهز للتحدي! 🔥`;

    const chooseLevelText = locale === 'en' ? '🥷 Choose a different level' : '🥷 اختر مستوى آخر';
    const startNowText = locale === 'en' ? '🚀 Start now!' : '🚀 ابدأ الآن!';
    const keyboard = new InlineKeyboard()
      .text(chooseLevelText, 'change_quiz_level').row()
      .text(startNowText, 'start_first_question');

    await ctx.reply(resultText, { parse_mode: 'Markdown', reply_markup: keyboard });
    logger.info('Profile created via quiz', {
      telegramId: Number(telegramId),
      nickname,
      levelId: level.id,
      quizScore: quizCorrect,
    });

    // Prepare today's questions immediately so the user can start right away
    await prepareQuestionsForUser(profile.id, level.id, locale);
  } catch (error) {
    logger.error('Failed to create profile via quiz', { error: String(error) });
    await ctx.reply(msg.error);
    ctx.session.state = 'idle';
  }
}

// ─── Onboarding Language Selection ────────────────────────────────

export async function handleOnboardLanguage(ctx: BotContext) {
  const data = ctx.callbackQuery?.data;
  if (!data?.startsWith('onboard_lang:')) return;

  const locale = data.split(':')[1] === 'en' ? 'en' : 'ar';
  ctx.session.locale = locale;

  const localMsg = getMessages(locale);

  ctx.session.state = 'awaiting_nickname';
  ctx.session.pendingData = {};

  await ctx.answerCallbackQuery();
  await ctx.editMessageText(
    `✅ ${locale === 'en' ? 'Language set to English' : 'تم اختيار العربية'}`,
  );
  await ctx.reply(localMsg.welcome, { parse_mode: 'Markdown' });
  await ctx.reply(localMsg.askNickname);
}

// ─── Change Quiz Level (override auto-detected level) ──────────────

export async function handleChangeQuizLevel(ctx: BotContext) {
  const profileId = ctx.session.activeProfileId;
  const locale = ctx.session.locale || 'ar';
  if (!profileId) {
    const errText = locale === 'en' ? 'An error occurred, send /start again' : 'حدث خطأ، أرسل /start مرة أخرى';
    await ctx.answerCallbackQuery({ text: errText });
    return;
  }

  await ctx.answerCallbackQuery();

  const { keyboard, levels } = await buildLevelKeyboard(locale);

  const chooseText = locale === 'en' ? 'Choose the level that suits you:\n\n' : 'اختر المستوى الذي يناسبك:\n\n';
  let levelInfo = chooseText;
  for (const level of levels) {
    const levelName = (locale === 'en' && level.nameEn) ? level.nameEn : level.name;
    const levelDesc = (locale === 'en' && level.descriptionEn) ? level.descriptionEn : (level.description || '');
    levelInfo += `${level.iconEmoji || '🥷'} *${levelName}* — ${levelDesc}\n`;
  }

  await ctx.reply(levelInfo, { parse_mode: 'Markdown', reply_markup: keyboard });
  ctx.session.pendingData.changingLevel = true;
  ctx.session.pendingData.changingLevelFromOnboarding = true;
}

// ─── Start First Question ──────────────────────────────────────────

export async function handleStartFirstQuestion(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const profileId = ctx.session.activeProfileId;

  if (!profileId) {
    const text = locale === 'en' ? 'An error occurred, send /start again' : 'حدث خطأ، أرسل /start مرة أخرى';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  await ctx.answerCallbackQuery();
  // Remove buttons from the onboarding result message
  await ctx.editMessageReplyMarkup({ reply_markup: undefined });

  const user = await prisma.user.findUnique({ where: { id: profileId } });
  if (!user) return;

  await sendQuestionToUser(ctx, profileId, user.levelId);
}
