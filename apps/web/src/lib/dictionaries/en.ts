import type { Dictionary } from './ar';

export const en: Dictionary = {
  siteName: 'NumNinjas',
  siteDesc: 'A Telegram bot that teaches kids math in a fun way',

  nav: {
    home: 'Home',
    levels: 'Levels',
    leaderboard: 'Leaderboard',
    champions: 'Ninja Champions',
    startOnTelegram: 'Start on Telegram',
  },

  landing: {
    title: 'NumNinjas',
    subtitle: 'نينجا الأرقام',
    desc: 'A Telegram bot that teaches kids math in a fun way',
    subDesc:
      '3 questions daily, ninja belt system, points and weekly leaderboard — all free!',
    cta: 'Start on Telegram \u2192',
    howItWorks: 'How It Works',
    step1Title: 'Start the Bot',
    step1Desc: 'Open Telegram and start a chat with NumNinjas',
    step2Title: 'Take the Quiz',
    step2Desc: '3 quick questions to find your level automatically',
    step3Title: 'Solve Every Day',
    step3Desc: '3 new questions daily — start whenever you want',
    ninjaLevels: 'Ninja Levels',
    readyTitle: 'Ready for the ninja journey?',
    readyDesc: 'Start now and challenge yourself every day',
    ctaBottom: 'Start on Telegram \u2192',
  },

  leaderboard: {
    title: 'Weekly Leaderboard',
    subtitle: 'Each level has its own ranking — fair competition!',
    empty: 'No rankings yet this week',
    emptyHint: 'Start solving questions to appear here!',
    rank: 'Rank',
    name: 'Name',
    correct: 'Correct ✅',
    wrong: 'Wrong ❌',
    hints: 'Hints 💡',
    days: 'Days 📅',
  },

  champions: {
    title: 'Ninja Champions',
    subtitle: 'Champions of the Month',
    monthlyTitle: "This Month's Champions",
    recentBadges: 'Recent Badges',
    noWinner: 'No winner yet',
    noBadges: 'No badges yet',
    mostActive: 'The Consistent',
    mostActiveDesc: 'Most active player',
    sharpest: 'The Sharp Mind',
    sharpestDesc: 'Highest correct answer rate',
    independent: 'The Independent',
    independentDesc: 'Least hints used',
    activeDays: (n: number) => `${n} active days`,
    accuracy: (n: number) => `${n}% accuracy`,
    hintsOnly: (n: number) => `${n} hints only`,
  },

  profile: {
    notFound: 'Profile not found',
    points: 'Points',
    streak: 'Day Streak',
    accuracy: 'Accuracy',
    correctAnswers: 'Correct Answers',
    badges: 'Badges',
    noBadges: "No badges yet — keep going and you'll earn some!",
    copyLink: 'Copy Link',
    copied: 'Copied',
    day: 'days',
  },

  levels: {
    title: 'Ninja Levels',
    subtitle: '5 levels \u00D7 7 topics = 35 topics',
  },

  notFound: {
    code: '404',
    title: 'Page Not Found',
    desc: "The page you're looking for isn't here",
    back: 'Back to Home',
  },

  error: {
    title: 'Something went wrong',
    desc: 'Try again or contact support',
    retry: 'Try Again',
  },

  footer: {
    copyright: '\u00A9 NumNinjas',
  },
} as const;
