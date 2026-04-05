export const msg = {
  // ─── General ──────────────────────────────────────────────────────
  welcome: '🥋 أهلاً بيك في *نينجا الأرقام*!\nهنا هنخلّيك بطل رياضيات 💪',
  welcomeBack: (name: string, emoji: string) =>
    `${emoji} أهلاً يا *${name}*! رجعت تاني 🎉`,
  error: '⚠️ حصلت مشكلة، جرب تاني بعد شوية',
  privateChatOnly: '🔒 البوت ده بيشتغل في المحادثات الخاصة بس',

  // ─── Onboarding ───────────────────────────────────────────────────
  askRole: 'أنت طالب ولا ولي أمر؟',
  roleStudent: '🎒 طالب',
  roleParent: '👨‍👩‍👧 ولي أمر',
  askNickname: '✏️ ابعتلي اسم الطفل اللي هيلعب\n(أو اسمك لو أنت اللي هتلعب)',
  askNicknameShort: '✏️ ابعتلي الاسم',
  invalidNickname: '❌ الاسم لازم يكون من 2 لـ 20 حرف. جرب تاني:',
  askLevel: (name: string) =>
    `🎯 اختار مستوى *${name}*:\n\n` +
    'كل مستوى هو حزام نينجا — كل ما تتقدم، الحزام بيتغير! 🥷',

  // ─── Profile ──────────────────────────────────────────────────────
  profileCreated: (name: string, levelEmoji: string, levelName: string) =>
    `✅ *${name}* اتسجل!\n${levelEmoji} المستوى: ${levelName}\n\nجاهز للتحدي! 🔥`,
  whoIsPlaying: 'مين اللي هيلعب دلوقتي؟ 🎮',
  addChild: '➕ إضافة طفل',
  profileSwitched: (name: string, emoji: string) =>
    `${emoji} تم! *${name}* هو اللي بيلعب دلوقتي`,
  noProfiles: '🤔 مفيش حد متسجل لسه. ابعت /start عشان تبدأ!',
  maxProfiles: '⚠️ وصلت لأقصى عدد (5 أطفال). امسح واحد الأول.',
  playersList: (players: string) => `📋 *اللاعبين:*\n\n${players}`,
  activeMarker: ' ◀️ بيلعب',

  // ─── Levels ───────────────────────────────────────────────────────
  levelItem: (emoji: string, name: string, desc: string) =>
    `${emoji} *${name}*\n${desc}`,

  // ─── Commands ─────────────────────────────────────────────────────
  help:
    '📖 *أوامر نينجا الأرقام:*\n\n' +
    '/start — ابدأ أو ارجع للقائمة\n' +
    '/addchild — أضف طفل جديد\n' +
    '/switch — غيّر اللاعب\n' +
    '/players — قائمة اللاعبين\n' +
    '/profile — بروفايلي\n' +
    '/rank — الترتيب الأسبوعي\n' +
    '/hall — قاعة الشهرة\n' +
    '/streak — السلسلة\n' +
    '/level — تغيير المستوى\n' +
    '/help — المساعدة',
  needProfile: '⚠️ لازم تختار لاعب الأول. ابعت /start',
} as const;
