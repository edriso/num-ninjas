export const msg = {
  // ─── General ──────────────────────────────────────────────────────
  welcome:
    '🥷 *Welcome to NumNinjas!*\n\n' +
    '3 math questions every day with instant explanations.\n' +
    'Ninja belts, points, badges, and weekly rankings!\n\n' +
    '📌 *For parents:* The bot is completely safe — no personal data required,\n' +
    'and you\'ll receive weekly progress reports.',
  welcomeBack: (name: string, emoji: string) =>
    `${emoji} Welcome back, *${name}*! 🎉`,
  error: '⚠️ Something went wrong, please try again in a moment',
  privateChatOnly: '🔒 This bot only works in private chats',

  // ─── Onboarding ───────────────────────────────────────────────────
  askRole: 'Are you a student or a parent?',
  roleStudent: '🎒 Student',
  roleParent: '👨‍👩‍👧 Parent',
  askNickname: '✏️ Send me the player\'s name\n(or your own name if you\'re playing)',
  askNicknameShort: '✏️ Send me the name',
  invalidNickname: '❌ The name must be 2 to 20 characters. Try again:',
  askLevel: (name: string) =>
    `🎯 Choose a level for *${name}*:\n\n` +
    'Each level is a ninja belt — the further you go, the higher your belt! 🥷',

  // ─── Profile ──────────────────────────────────────────────────────
  profileCreated: (name: string, levelEmoji: string, levelName: string) =>
    `✅ *${name}* is registered!\n${levelEmoji} Level: ${levelName}\n\n` +
    'You\'ll get 3 questions every day at 2:30 PM — ready for the challenge! 🔥',
  whoIsPlaying: 'Who\'s playing now? 🎮',
  addChild: '➕ Add a child',
  profileSwitched: (name: string, emoji: string) =>
    `${emoji} Done! *${name}* is now playing`,
  noProfiles: '🤔 No one is registered yet. Send /start to begin!',
  maxProfiles: '⚠️ You\'ve reached the maximum (5 children). Remove one first.',
  playersList: (players: string) => `📋 *Players:*\n\n${players}`,
  activeMarker: ' ◀️ playing',

  // ─── Levels ───────────────────────────────────────────────────────
  levelItem: (emoji: string, name: string, desc: string) =>
    `${emoji} *${name}*\n${desc}`,

  // ─── Commands ─────────────────────────────────────────────────────
  help:
    '📖 *NumNinjas Commands:*\n\n' +
    '/start — Start or continue today\'s questions\n' +
    '/profile — My profile (change name and level)\n' +
    '/rank — Weekly ranking and ninja champions\n' +
    '/players — Players (switch or add a child)\n' +
    '/language — Change language\n' +
    '/help — Help\n\n' +
    '🥷 3 new questions every day — start whenever you like!\n' +
    '(You\'ll get a reminder at 2:30 PM if you haven\'t started)\n\n' +
    '📩 Support: @NumNinjas',
  needProfile: '⚠️ You need to choose a player first. Send /start',

  // ─── Language ─────────────────────────────────────────────────────
  languageCurrent: (lang: string) => `🌍 Current language: *${lang}*`,
  languageChanged: (lang: string) => `✅ Language changed to *${lang}*`,
  languagePrompt: 'Choose a language:',
} as const;
