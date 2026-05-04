# 🥷 NumNinjas Bot

The Telegram bot for نينجا الأرقام. Sends 3 daily math questions to kids, tracks streaks, awards badges, and runs weekly leaderboards.

## Quick Start

```bash
# From the repo root:
cp apps/bot/.env.example apps/bot/.env
# Edit .env with your BOT_TOKEN and ADMIN_TELEGRAM_ID

pnpm db:generate
pnpm db:push
pnpm db:seed
pnpm dev:bot
```

## What This App Does

- Sends 3 personalized questions daily at 2:30 PM Cairo time
- Onboarding quiz auto-detects the right level for new users
- Adaptive difficulty: weak topics appear more often
- Spaced repetition: wrong answers come back sooner (2 days vs 14 days)
- Skip and retry buttons for flexibility
- Evening reminder at 7:30 PM for incomplete sessions
- Weekly per-level leaderboards with badge awards
- Monthly ninja champions and yearly champions
- Parent weekly report every Sunday at 10 PM
- Auto-posts rankings to @NumNinjas Telegram channel

## Project Structure

```
src/
├── index.ts           → Entry point (starts bot + scheduler)
├── config.ts          → Reads BOT_TOKEN, ADMIN_TELEGRAM_ID, CHANNEL_USERNAME
├── bot/
│   ├── index.ts       → Grammy bot setup, registers all handlers
│   ├── handlers/      → /start, /profile, /rank, questions, admin
│   ├── keyboards/     → Inline button builders (MCQ, levels, profiles)
│   ├── messages/      → arabic.ts — ALL Arabic text (Spacetoon Arabic)
│   └── middleware/     → Session state machine
└── jobs/              → 8 cron jobs (questions, reminders, rankings, reports)
```

## Environment Variables

```
BOT_TOKEN=from-@BotFather
ADMIN_TELEGRAM_ID=from-@userinfobot
CHANNEL_USERNAME=@NumNinjas
DATABASE_URL=file:../../packages/database/dev.db
```

## All Bot Commands

| Command        | Who      | What                                |
| -------------- | -------- | ----------------------------------- |
| /start         | Everyone | Start or continue today's questions |
| /profile       | Everyone | Stats + edit name/level/username    |
| /rank          | Everyone | Weekly leaderboard for your level   |
| /players       | Everyone | Switch or add child profiles        |
| /help          | Everyone | Show commands + support link        |
| /admin_send    | Admin    | Manually send questions to everyone |
| /admin_prepare | Admin    | Manually prepare today's questions  |
| /admin_stats   | Admin    | Bot statistics                      |
