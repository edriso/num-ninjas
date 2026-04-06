# 🥷 NumNinjas — نينجا الأرقام

A Telegram bot + website that helps Arab kids (ages 10–12) fall in love with math! 3 daily questions with real-life scenarios. Gamified with ninja belt levels, streaks, points, and per-level leaderboards. All text in Spacetoon Arabic — warm, accessible, understood by every Arab kid.

---

## How It Works

1. A kid (or parent) opens the bot on Telegram and picks a nickname
2. **3 quick quiz questions** auto-detect the right level (no more "I'm Black Belt!")
3. Every day at **2:30 PM Cairo time**, the bot sends **3 personalized questions** based on the kid's weak topics
4. The kid answers (tap a button for MCQ, or type a number for open-ended). Too hard? Hit **Skip**
5. After each answer, instant feedback + explanation
6. After all 3, a daily summary with points earned
7. If they forget, a **7:30 PM reminder** nudges them
8. **Per-level leaderboards** — fair competition within the same difficulty
9. **Parents get a weekly report** every Sunday with each child's stats

One Telegram account can have **up to 5 child profiles** (for parents with multiple kids).

The **website** shows public leaderboards, player profiles, ninja champions, and has an admin panel for managing questions.

The **@NumNinjas channel** auto-posts weekly leaderboards, monthly ninja champions, and yearly awards — parents share these and drive new signups.

---

## Features

- **Adaptive Difficulty** — Each kid gets different questions based on their weak topics
- **Onboarding Quiz** — 3 questions auto-detect the right level (kids can override)
- **3 Daily Questions** — Sent at 2:30 PM Cairo time, personalized per student
- **5 Ninja Belt Levels** — From White Belt (basics) to Black Belt (legend)
- **420 Questions** — Across 35 topics, all with real-life Arab scenarios
- **Per-Level Rankings** — Fair leaderboards within the same difficulty level
- **Skip Button** — Too hard? Skip it and keep the session going
- **Level Completion** — Master all 7 topics → celebration + level-up suggestion
- **Parent Weekly Report** — Sunday Telegram summary per child (accuracy, streak, points)
- **Multiple Profiles** — One parent account can manage up to 5 children
- **MCQ + Open-Ended** — Buttons for MCQ, text input with Arabic numeral support (0-9)
- **Hints** — Optional hints per question (tracked for fair rankings)
- **Streaks** — Daily streak tracking with milestone badges (7, 14, 30 days)
- **Telegram Channel** — Rankings auto-posted to @NumNinjas for parents to share
- **Website** — Public leaderboard, profiles, ninja champions + admin panel with questions CRUD
- **150 Unit Tests** — All shared logic tested with vitest

---

## Project Structure

This is a **pnpm monorepo** with 2 apps sharing 1 database package:

```
num-ninjas/
├── apps/
│   ├── bot/                → Telegram bot (Grammy + node-cron)
│   └── web/                → Website (Next.js 15 + Tailwind CSS)
└── packages/
    └── database/           → Shared database layer (@numninjas/database)
        ├── prisma/         → Schema, seeds (420 questions)
        ├── src/services/   → Business logic (ranking, badges, accounts...)
        ├── src/utils/      → Helpers (Cairo time, Arabic numerals...)
        └── src/__tests__/  → 161 unit tests (vitest)
```

**Why a monorepo?** Both the bot and website use the same database and the same business logic. One repo means one schema, one source of truth, zero duplication.

---

## Tech Stack

| Part | What | Why |
|------|------|-----|
| Bot | TypeScript + Grammy + node-cron | Modern Telegram framework, great TS support |
| Website | Next.js 15 + Tailwind CSS v4 | Server Components, fast, easy to deploy |
| Database | Prisma 7 + MySQL | Type-safe queries, easy schema changes |
| Auth | Auth.js v5 (admin only) | Simple credentials login for admin panel |
| Testing | Vitest (161 unit tests) | Fast, native ESM, no config needed |
| Package Manager | pnpm workspaces | Fast, handles monorepo dependencies well |
| Deployment | Railway (bot) + Hostinger (website + MySQL) | Cheap, reliable, auto-deploy from GitHub |

---

## Getting Started

### What You Need

- **Node.js 20+** — Check with `node --version`
- **pnpm** — Install with `npm install -g pnpm`
- **MySQL** — Install locally or use a remote server
- **A Telegram bot token** — Get one from [@BotFather](https://t.me/BotFather) on Telegram

### MySQL Setup (one-time)

```sql
CREATE DATABASE numninjas;
CREATE USER 'numninjas'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON numninjas.* TO 'numninjas'@'localhost';
```

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
pnpm db:seed        # Fill with 5 levels, 35 topics, 420 questions, badges, admin

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
| `pnpm test` | Run all 161 unit tests |
| `pnpm db:generate` | Regenerate Prisma client (after schema changes) |
| `pnpm db:push` | Apply schema changes to the database |
| `pnpm db:seed` | Seed the database with all data |
| `pnpm db:seed:demo` | Add 15 fake users with activity (dev only!) |
| `pnpm db:reset` | **Delete everything** and re-seed (dev only!) |

---

## Bot Commands

### For Students / Parents

| Command | What It Does |
|---------|-------------|
| `/start` | Start the bot or continue today's questions |
| `/profile` | Your stats + buttons to change name or level |
| `/rank` | Weekly leaderboard for your level |
| `/players` | All players (switch, add child) |
| `/help` | Show commands |

### For Admin (your Telegram account only)

| Command | What It Does |
|---------|-------------|
| `/admin_send` | Manually send today's questions to everyone |
| `/admin_prepare` | Manually prepare today's questions |
| `/admin_stats` | Bot statistics (users, attempts, completions) |

---

## Website Pages

### Public (no login needed)

| Page | URL | What It Shows |
|------|-----|--------------|
| Landing | `/` | What the bot is, 5 levels, link to Telegram |
| Leaderboard | `/leaderboard` | Per-level weekly top players (updates hourly) |
| ninja champions | `/champions` | Monthly winners and badges (updates daily) |
| Profile | `/profile/123` | Any player's public stats, badges, OG tags for sharing |
| Levels | `/levels` | All 5 levels and their topics explained |

### Admin (login required)

| Page | URL | What It Does |
|------|-----|-------------|
| Dashboard | `/admin` | Quick stats overview |
| Questions | `/admin/questions` | Full CRUD — create, edit, delete, filter questions |
| Topics | `/admin/topics` | Manage topics per level |
| Levels | `/admin/levels` | Edit level names and descriptions |
| Badges | `/admin/badges` | View and manage badge types |
| Users | `/admin/users` | Browse all players and their stats |
| Settings | `/admin/settings` | Edit bot runtime settings (send times, points) |
| Scheduled | `/admin/scheduled` | See today's per-user scheduled questions |

---

## Daily Schedule (Cairo Time)

| Time | What Happens |
|------|-------------|
| 12:00 AM | Reset streaks for users who didn't play yesterday |
| 12:30 AM | Prepare 3 personalized questions per user (adaptive) |
| 2:30 PM | Send the first question to all users |
| 7:30 PM | Reminder for users who haven't finished |
| Sunday 10 PM | Parent weekly report (per-child summary) |
| Sunday 11 PM | Per-level weekly leaderboard + award top-3 badges |
| Last day of month 11 PM | Monthly ninja champions awards (global) |
| Dec 31 11 PM | Yearly champion awards (global) |

---

## The 5 Ninja Levels

| Level | Name | What Kids Learn |
|-------|------|----------------|
| ⚪ 1 | White Belt | Addition, subtraction, multiplication, division, fractions basics |
| 🟡 2 | Yellow Belt | Decimals, time calculations, perimeter, area, patterns |
| 🟠 3 | Orange Belt | Advanced fractions, order of operations, money math |
| 🟢 4 | Green Belt | Percentages, intro to algebra, speed/distance/time |
| 🥋 5 | Black Belt | Exponents, probability, negative numbers, math puzzles |

Each level has 7 topics with 12 questions each = **420 total questions**, all with real-life Arab scenarios.

---

## How to Add Questions

Questions are in `packages/database/prisma/seeds/questions-levelX.ts`. Example:

```typescript
// MCQ question
{
  topicIndex: 1,
  questionType: 'mcq',
  realLifeContext: 'أنت في السوبر ماركت، اشتريت عصيراً بـ 15 جنيه وتفاحاً بـ 8 جنيه.',
  questionText: 'كم المجموع الذي ستدفعه؟',
  hintText: 'اجمع سعر العصير وسعر التفاح',
  explanation: '15 + 8 = 23 جنيه',
  options: [
    { optionText: '23 جنيه', isCorrect: true },
    { optionText: '20 جنيه', isCorrect: false },
    { optionText: '25 جنيه', isCorrect: false },
    { optionText: '22 جنيه', isCorrect: false },
  ],
}
```

After adding questions, run `pnpm db:reset` to reload everything.

---

## Deployment

Both apps deploy from the same GitHub repo — push to `main` and both platforms auto-build.

See **[docs/DEPLOY.md](docs/DEPLOY.md)** for the full step-by-step guide covering Telegram bot creation, Hostinger setup, Railway setup, Cloudflare DNS, and all environment variables.

---

## Telegram Setup

| What | Handle | Purpose |
|------|--------|---------|
| Bot | @NumNinjasBot | Core experience — kids answer questions here |
| Channel | @NumNinjas | Broadcast — leaderboards, ninja champions, tips |

The bot auto-posts rankings to the channel. Parents subscribe, see their kid's name, screenshot it, share on WhatsApp → viral loop.

**No group at launch.** Groups with 10–12 year olds need constant moderation. If the community grows, add a parents-only group later.

---

## License

MIT
