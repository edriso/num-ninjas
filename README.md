# NumNinjas — نينجا الأرقام

A Telegram bot + website that makes Egyptian kids (ages 10-12) fall in love with math! 3 daily questions with real-life Egyptian scenarios — shopping in EGP, Cairo metro rides, Eid budgets. Gamified with ninja belt levels, streaks, points, and leaderboards.

---

## How It Works

1. A kid (or parent) opens the bot on Telegram and picks a nickname + ninja belt level
2. Every day at **2:30 PM Cairo time**, the bot sends **3 math questions** matching their level
3. The kid answers (tap a button for MCQ, or type a number for open-ended)
4. After each answer, they get instant feedback + explanation
5. After all 3, they see a daily summary with points earned
6. If they forget, a **7:30 PM reminder** nudges them
7. Weekly leaderboards and badges keep them motivated

One Telegram account can have **up to 5 child profiles** (for parents with multiple kids).

The **website** shows public leaderboards, player profiles, hall of fame, and has an admin panel for managing questions, users, and settings.

---

## Features

- **3 Daily Questions** — Sent at 2:30 PM Cairo time, tailored to the student's level
- **5 Ninja Belt Levels** — From White Belt (basics) to Black Belt (legend)
- **420 Questions** — Across 35 topics, all with Egyptian real-life contexts
- **Multiple Profiles** — One parent account can manage up to 5 children
- **MCQ + Open-Ended** — Buttons for MCQ, text input with Arabic numeral support
- **Hints** — Optional hints per question (tracked for fair rankings)
- **Streaks** — Daily streak tracking with milestone badges (7, 14, 30 days)
- **Skip Button** — Too hard? Skip it (counts as wrong, but keeps the session going)
- **Adaptive Difficulty** — Each kid gets different questions based on their weak topics
- **Onboarding Quiz** — 3 quick questions auto-detect the right level (no more "I'm Black Belt!")
- **Level Completion** — Master all 7 topics and get a celebration + level-up suggestion
- **Parent Weekly Report** — Sunday summary of each child's progress via Telegram
- **Weekly Leaderboard** — Top 3 awarded badges every Sunday
- **Monthly Hall of Fame** — Most active, sharpest mind, most independent
- **Website** — Public leaderboard, profiles, hall of fame + admin panel with questions CRUD

---

## Project Structure

This is a **pnpm monorepo** with 2 apps sharing 1 database package:

```
numninja/
├── apps/
│   ├── bot/                → Telegram bot (Grammy + node-cron)
│   └── web/                → Website (Next.js 15 + Tailwind CSS)
└── packages/
    └── database/           → Shared database layer (@numninja/database)
        ├── prisma/         → Schema, seeds, migrations
        ├── src/services/   → Business logic (ranking, badges, accounts...)
        ├── src/utils/      → Helpers (Cairo time, Arabic numerals...)
        └── src/types.ts    → Shared TypeScript types
```

**Why a monorepo?** Both the bot and website use the same database and the same business logic (rankings, badges, user profiles). One repo means one schema, one source of truth, zero duplication.

---

## Tech Stack

| Part | What | Why |
|------|------|-----|
| Bot | TypeScript + Grammy + node-cron | Modern Telegram framework, great TS support |
| Website | Next.js 15 + Tailwind CSS v4 | Server Components, fast, easy to deploy |
| Database | Prisma 7 + SQLite (dev) / MySQL (prod) | Type-safe queries, easy schema changes |
| Auth | Auth.js v5 (admin only) | Simple credentials login for admin panel |
| Package Manager | pnpm workspaces | Fast, handles monorepo dependencies well |
| Deployment | Railway (bot) + Hostinger (website + MySQL) | Cheap, reliable, auto-deploy from GitHub |

---

## Getting Started

### What You Need

- **Node.js 20+** — Check with `node --version`
- **pnpm** — Install with `npm install -g pnpm`
- **A Telegram bot token** — Get one from [@BotFather](https://t.me/BotFather) on Telegram

### Setup

```bash
# 1. Clone and install
git clone https://github.com/edriso/num-ninjas.git
cd num-ninjas
pnpm install

# 2. Set up environment files
cp packages/database/.env.example packages/database/.env
cp apps/bot/.env.example apps/bot/.env
cp apps/web/.env.example apps/web/.env.local

# 3. Edit apps/bot/.env and fill in your bot token:
#    BOT_TOKEN=your_token_from_botfather
#    ADMIN_TELEGRAM_ID=your_telegram_id (get it from @userinfobot on Telegram)

# 4. Set up the database
pnpm db:generate    # Generate the Prisma client
pnpm db:push        # Create all tables
pnpm db:seed        # Fill with 5 levels, 35 topics, 420 questions, badges

# 5. Start developing!
pnpm dev:bot                # Start the Telegram bot (with hot reload)
pnpm --filter web dev       # Start the website (http://localhost:3000)
```

### All Commands

| Command | What It Does |
|---------|-------------|
| `pnpm dev:bot` | Start the bot with hot reload |
| `pnpm --filter web dev` | Start the website at localhost:3000 |
| `pnpm build:bot` | Compile the bot for production |
| `pnpm build:web` | Build the website for production |
| `pnpm db:generate` | Regenerate Prisma client (after schema changes) |
| `pnpm db:push` | Apply schema changes to the database |
| `pnpm db:seed` | Seed the database with all data |
| `pnpm db:reset` | **Delete everything** and re-seed (dev only!) |

---

## Bot Commands

### For Students / Parents

| Command | What It Does |
|---------|-------------|
| `/start` | Start the bot or continue today's questions |
| `/profile` | Your stats + buttons to change name or level |
| `/rank` | Weekly leaderboard + hall of fame |
| `/players` | All players (switch, add child) |
| `/help` | Show commands |

### For Admin (your Telegram account only)

| Command | What It Does |
|---------|-------------|
| `/admin_send` | Manually send today's questions to everyone |
| `/admin_prepare` | Manually pick today's questions |
| `/admin_stats` | Bot statistics (users, attempts, completions) |

---

## Website Pages

### Public (no login needed)

| Page | URL | What It Shows |
|------|-----|--------------|
| Landing | `/` | What the bot is, 5 levels, link to Telegram |
| Leaderboard | `/leaderboard` | This week's top players (updates every hour) |
| Hall of Fame | `/hall-of-fame` | Monthly winners and badges (updates daily) |
| Profile | `/profile/123` | Any player's public stats and badges |
| Levels | `/levels` | All 5 levels and their topics explained |

### Admin (login required)

| Page | URL | What It Does |
|------|-----|-------------|
| Dashboard | `/admin` | Quick stats overview |
| Questions | `/admin/questions` | Browse, filter, manage all 420 questions |
| Topics | `/admin/topics` | Manage topics per level |
| Levels | `/admin/levels` | Edit level names and descriptions |
| Badges | `/admin/badges` | View and manage badge types |
| Users | `/admin/users` | Browse all players and their stats |
| Settings | `/admin/settings` | Edit bot runtime settings (send times, points) |
| Scheduled | `/admin/scheduled` | See today's scheduled questions per level |

---

## Daily Schedule (Cairo Time)

| Time | What Happens |
|------|-------------|
| 12:00 AM | Reset streaks for users who didn't play yesterday |
| 12:30 AM | Pick 3 random questions per level for today |
| 2:30 PM | Send the first question to all users |
| 7:30 PM | Reminder for users who haven't finished |
| Sunday 10 PM | Parent weekly report (per-child summary) |
| Sunday 11 PM | Weekly leaderboard + award top-3 badges |
| Last day of month 11 PM | Monthly hall of fame awards |
| Dec 31 11 PM | Yearly champion awards |

---

## The 5 Ninja Levels

| Level | Name | What Kids Learn |
|-------|------|----------------|
| 🥋 1 | White Belt | Addition, subtraction, multiplication, division, fractions basics |
| 🟡 2 | Yellow Belt | Decimals, time calculations, perimeter, area, patterns |
| 🟠 3 | Orange Belt | Advanced fractions, order of operations, money math |
| 🟢 4 | Green Belt | Percentages, intro to algebra, speed/distance/time |
| ⬛ 5 | Black Belt | Exponents, probability, negative numbers, math puzzles |

Each level has 7 topics with 12 questions each = **420 total questions**, all with Egyptian real-life scenarios.

---

## How to Add Questions

Questions are in `packages/database/prisma/seeds/questions-levelX.ts`. Example:

```typescript
// MCQ question
{
  topicIndex: 1,
  questionType: 'mcq',
  realLifeContext: 'رحت السوبر ماركت واشتريت عصير بـ 15 جنيه وشيبسي بـ 8 جنيه.',
  questionText: 'كام المجموع اللي هتدفعه؟',
  hintText: 'اجمع سعر العصير وسعر الشيبسي',
  explanation: '15 + 8 = 23 جنيه',
  options: [
    { optionText: '٢٣ جنيه', isCorrect: true },
    { optionText: '٢٠ جنيه', isCorrect: false },
    { optionText: '٢٥ جنيه', isCorrect: false },
    { optionText: '٢٢ جنيه', isCorrect: false },
  ],
}

// Open-ended question
{
  topicIndex: 1,
  questionType: 'open_ended',
  realLifeContext: 'في الفصل عندك 24 طالب، راح منهم 7 في الفسحة.',
  questionText: 'كام طالب فاضل في الفصل؟',
  correctAnswer: '17',
  correctAnswerNumeric: 17,
  hintText: 'اطرح عدد اللي راحوا من المجموع',
  explanation: '24 - 7 = 17 طالب',
}
```

After adding questions, run `pnpm db:reset` to reload everything.

---

## Deployment

```
Cloudflare (domain + DNS + CDN + DDoS protection + SSL)
        ↓
Hostinger Business (Next.js website)
        ↓
Railway (Grammy bot — always running)
        ↓
Hostinger MySQL (shared database)
```

| Part | Where | Cost |
|------|-------|------|
| Domain + CDN + SSL | Cloudflare | Free |
| Telegram bot | Railway | Free tier → ~$5/month |
| Website | Hostinger Business | Already paid |
| MySQL database | Hostinger Business | Included |

Both apps deploy from the same GitHub repo:
- **Railway** points at the repo root, builds `apps/bot`
- **Hostinger** points at the repo root, builds `apps/web`
- Both connect to the same MySQL database on Hostinger
- **Cloudflare** sits in front of the website for CDN, SSL, and DDoS protection

---

## License

MIT
