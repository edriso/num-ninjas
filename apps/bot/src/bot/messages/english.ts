import { escapeMd } from '../helpers/escape-md';

// User-controlled inputs (the `name` argument in the functions below) may
// contain Markdown special characters — we run them through escapeMd so the
// rendered Markdown stays well-formed and there's no injection surface.
export const msg = {
  // ─── General ──────────────────────────────────────────────────────
  welcome:
    '🥷 *Welcome to NumNinjas!*\n\n' +
    '3 math questions every day with instant explanations.\n' +
    'Ninja belts, points, badges, and weekly rankings!\n\n' +
    '📌 *For parents:* The bot is completely safe — no personal data required,\n' +
    "and you'll receive weekly progress reports.",
  welcomeBack: (name: string, emoji: string) => `${emoji} Welcome back, *${escapeMd(name)}*! 🎉`,
  error: '⚠️ Something went wrong, please try again in a moment',
  privateChatOnly: '🔒 This bot only works in private chats',

  // ─── Onboarding ───────────────────────────────────────────────────
  askRole: 'Are you a student or a parent?',
  roleStudent: '🎒 Student',
  roleParent: '👨‍👩‍👧 Parent',
  askNickname: "✏️ Send me the player's name\n(or your own name if you're playing)",
  askNicknameShort: '✏️ Send me the name',
  invalidNickname: '❌ The name must be 2 to 20 characters. Try again:',
  askLevel: (name: string) =>
    `🎯 Choose a level for *${escapeMd(name)}*:\n\n` +
    'Each level is a ninja belt — the further you go, the higher your belt! 🥷',

  // ─── Profile ──────────────────────────────────────────────────────
  profileCreated: (name: string, levelEmoji: string, levelName: string) =>
    `✅ *${escapeMd(name)}* is registered!\n${levelEmoji} Level: ${levelName}\n\n` +
    "You'll get 3 questions every day at 2:30 PM — ready for the challenge! 🔥",
  whoIsPlaying: "Who's playing now? 🎮",
  addChild: '➕ Add a child',
  profileSwitched: (name: string, emoji: string) =>
    `${emoji} Done! *${escapeMd(name)}* is now playing`,
  noProfiles: '🤔 No one is registered yet. Send /start to begin!',
  maxProfiles: "⚠️ You've reached the maximum (5 children). Remove one first.",
  playersList: (players: string) => `📋 *Players:*\n\n${players}`,
  activeMarker: ' ◀️ playing',

  // ─── Levels ───────────────────────────────────────────────────────
  levelItem: (emoji: string, name: string, desc: string) => `${emoji} *${name}*\n${desc}`,

  // ─── Commands ─────────────────────────────────────────────────────
  help:
    '📖 *NumNinjas Commands:*\n\n' +
    "/start — Start or continue today's questions\n" +
    '/profile — My profile (change name and level)\n' +
    '/rank — Weekly ranking and ninja champions\n' +
    '/players — Players (switch or add a child)\n' +
    '/language — Change language\n' +
    '/help — Help\n\n' +
    '🥷 3 new questions every day — start whenever you like!\n' +
    "(You'll get a reminder at 2:30 PM if you haven't started)\n\n" +
    '📩 Support: @NumNinjas',
  needProfile: '⚠️ You need to choose a player first. Send /start',

  // ─── Language ─────────────────────────────────────────────────────
  languageCurrent: (lang: string) => `🌍 Current language: *${lang}*`,
  languageChanged: (lang: string) => `✅ Language changed to *${lang}*`,
  languagePrompt: 'Choose a language:',

  // ─── Onboarding diagnostic quiz ───────────────────────────────────
  // Mirrors the Arabic structure exactly so the typed shape is shared.
  quizQuestions: [
    {
      text: "🧮 *Question 1/3*\n\nYou're at the supermarket, you bought items for 47 pounds and paid 100 pounds.\nHow much change do you get?",
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
  ],

  // ─── Cancel ───────────────────────────────────────────────────────
  cancelDone: '✅ Cancelled. Send /start whenever you want to begin again.',

  // ─── Engagement nudges ────────────────────────────────────────────
  // One-shot re-engagement messages from the daily 18:00 cron.
  nudgeOnboardingAbandoned:
    "🥷 *You started your NumNinjas journey but didn't finish!*\n\n" +
    'Pick your name and level in one minute ✨\n' +
    '3 questions a day are waiting for you 🔥\n\n' +
    'Send /start to begin',
  nudgeNeverEngaged: (name: string) =>
    `🥷 Hey *${escapeMd(name)}*! We're waiting for your first answer\n\n` +
    'Find out your real level and start your belt journey 💪\n\n' +
    'Send /start',
  nudgeWentSilent: (name: string) =>
    `🥷 Hey *${escapeMd(name)}*! We miss you\n\n` +
    "Your level is waiting — keep training and don't let your friends overtake you 🔥\n\n" +
    'Send /start',
} as const;
