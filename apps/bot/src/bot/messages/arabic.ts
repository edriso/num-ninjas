import { escapeMd } from '../helpers/escape-md';

// User-controlled inputs (the `name` argument in the functions below) may
// contain Markdown special characters — we run them through escapeMd so the
// rendered Markdown stays well-formed and there's no injection surface.
export const msg = {
  // ─── General ──────────────────────────────────────────────────────
  welcome:
    '🥷 *مرحباً في نينجا الأرقام!*\n\n' +
    '3 أسئلة رياضيات كل يوم مع شرح فوري.\n' +
    'أحزمة نينجا، نقاط، أوسمة، وترتيب أسبوعي!\n\n' +
    '📌 *للأهل:* البوت آمن تماماً — لا يطلب بيانات شخصية،\n' +
    'وستصلكم تقارير أسبوعية عن تقدم أبنائكم.',
  welcomeBack: (name: string, emoji: string) =>
    `${emoji} مرحباً يا *${escapeMd(name)}*! أهلاً بعودتك 🎉`,
  error: '⚠️ حدثت مشكلة، حاول مرة أخرى بعد قليل',
  privateChatOnly: '🔒 هذا البوت يعمل في المحادثات الخاصة فقط',

  // ─── Onboarding ───────────────────────────────────────────────────
  askRole: 'أنت طالب أم ولي أمر؟',
  roleStudent: '🎒 طالب',
  roleParent: '👨‍👩‍👧 ولي أمر',
  askNickname: '✏️ أرسل لي اسم اللاعب\n(أو اسمك إذا كنت أنت من سيلعب)',
  askNicknameShort: '✏️ أرسل لي الاسم',
  invalidNickname: '❌ الاسم يجب أن يكون من 2 إلى 20 حرفاً. حاول مرة أخرى:',
  askLevel: (name: string) =>
    `🎯 اختر مستوى *${escapeMd(name)}*:\n\n` +
    'كل مستوى هو حزام نينجا — كلما تقدمت، تغيّر الحزام! 🥷',

  // ─── Profile ──────────────────────────────────────────────────────
  profileCreated: (name: string, levelEmoji: string, levelName: string) =>
    `✅ تم تسجيل *${escapeMd(name)}*!\n${levelEmoji} المستوى: ${levelName}\n\n` +
    'ستصلك 3 أسئلة كل يوم الساعة 2:30 الظهر — جاهز للتحدي! 🔥',
  whoIsPlaying: 'من سيلعب الآن؟ 🎮',
  addChild: '➕ إضافة طفل',
  profileSwitched: (name: string, emoji: string) =>
    `${emoji} تم! *${escapeMd(name)}* هو من يلعب الآن`,
  noProfiles: '🤔 لا يوجد أحد مسجّل بعد. أرسل /start لتبدأ!',
  maxProfiles: '⚠️ وصلت لأقصى عدد (5 أطفال). احذف أحدهم أولاً.',
  playersList: (players: string) => `📋 *اللاعبون:*\n\n${players}`,
  activeMarker: ' ◀️ يلعب',

  // ─── Levels ───────────────────────────────────────────────────────
  levelItem: (emoji: string, name: string, desc: string) =>
    `${emoji} *${name}*\n${desc}`,

  // ─── Commands ─────────────────────────────────────────────────────
  help:
    '📖 *أوامر نينجا الأرقام:*\n\n' +
    '/start — ابدأ أو أكمل أسئلة اليوم\n' +
    '/profile — ملفي الشخصي (تغيير الاسم والمستوى)\n' +
    '/rank — الترتيب الأسبوعي وأبطال النينجا\n' +
    '/players — اللاعبون (تبديل أو إضافة طفل)\n' +
    '/language — تغيير اللغة\n' +
    '/help — المساعدة\n\n' +
    '🥷 كل يوم 3 أسئلة جديدة — ابدأ وقتما تريد!\n' +
    '(تصلك تنبيه الساعة 2:30 الظهر إذا لم تبدأ)\n\n' +
    '📩 للدعم: @NumNinjas',
  needProfile: '⚠️ يجب أن تختار لاعباً أولاً. أرسل /start',

  // ─── Language ─────────────────────────────────────────────────────
  languageCurrent: (lang: string) => `🌍 اللغة الحالية: *${lang}*`,
  languageChanged: (lang: string) => `✅ تم تغيير اللغة إلى *${lang}*`,
  languagePrompt: 'اختر اللغة:',

  // ─── Engagement nudges ────────────────────────────────────────────
  // One-shot re-engagement messages from the daily 18:00 cron.
  nudgeOnboardingAbandoned:
    '🥷 *بدأت رحلتك في نينجا الأرقام لكنك لم تكملها!*\n\n' +
    'اختر اسمك ومستواك في دقيقة واحدة ✨\n' +
    '3 أسئلة كل يوم في انتظارك 🔥\n\n' +
    'أرسل /start لتبدأ',
  nudgeNeverEngaged: (name: string) =>
    `🥷 يا *${escapeMd(name)}*! ننتظر إجابتك على أول سؤال\n\n` +
    'اكتشف مستواك الحقيقي وابدأ رحلتك مع الأحزمة 💪\n\n' +
    'أرسل /start',
  nudgeWentSilent: (name: string) =>
    `🥷 يا *${escapeMd(name)}*! اشتقنا إليك\n\n` +
    'مستواك في انتظار عودتك — أكمل تدريبك ولا تترك أصدقاءك يسبقونك 🔥\n\n' +
    'أرسل /start',
} as const;
