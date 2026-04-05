# 🥷 NumNinjas — نينجا الأرقام

A Telegram bot that sends Egyptian primary school students (ages 10-12) daily math questions, gamified with ninja belt levels, streaks, points, and leaderboards. All messages in Arabic.

## Features

- **3 Daily Questions** — Sent at 14:30 Cairo time, tailored to the student's level
- **5 Ninja Belt Levels** — From White Belt (basics) to Black Belt (advanced)
- **Multiple Profiles** — One Telegram account can manage multiple children
- **MCQ + Open-Ended** — Inline buttons for MCQ, text input with Arabic numeral support
- **Hints** — Optional hints per question (tracked for rankings)
- **Streaks** — Daily streak tracking with milestone badges
- **Weekly Leaderboard** — Top 3 awarded badges every Sunday
- **Monthly Hall of Fame** — Category winners (most active, sharpest, most independent)
- **Yearly Champions** — Annual awards on December 31

## Tech Stack

| Concern | Choice |
|---|---|
| Language | TypeScript (strict) |
| Runtime | Node.js 20+ |
| Telegram | Grammy (grammY) |
| ORM | Prisma 7 |
| DB (dev) | SQLite (via better-sqlite3) |
| DB (prod) | MySQL (Hostinger VPS) |
| Scheduler | node-cron |
| Package Manager | pnpm |

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)
- A Telegram bot token from [@BotFather](https://t.me/BotFather)

### Setup

```bash
# Clone and install
git clone https://github.com/edriso/num-ninjas.git
cd num-ninjas
pnpm install

# Configure environment
cp .env.example .env
# Edit .env with your bot token and admin Telegram ID

# Set up database
pnpm db:push      # Create tables
pnpm db:generate  # Generate Prisma client
pnpm db:seed      # Seed levels, topics, badges, settings, sample questions

# Start development
pnpm dev
```

### Commands

```bash
pnpm dev          # Start with hot reload (tsx watch)
pnpm build        # Compile TypeScript
pnpm start        # Run compiled JS (production)
pnpm db:push      # Push schema changes to database
pnpm db:seed      # Seed database
pnpm db:reset     # Reset and re-seed database
pnpm db:generate  # Regenerate Prisma client
pnpm lint         # Run ESLint
pnpm format       # Run Prettier
```

## Project Structure

```
num-ninjas/
├── prisma/
│   ├── schema.prisma          # Database schema (11 models)
│   ├── seed.ts                # Seed data
│   └── generated/             # Generated Prisma client (gitignored)
├── src/
│   ├── bot/
│   │   ├── index.ts           # Grammy bot + middleware + handler registration
│   │   ├── handlers/
│   │   │   ├── start.ts       # /start, onboarding, level selection
│   │   │   ├── question.ts    # Send questions, MCQ/open-ended answers, hints
│   │   │   ├── profile.ts     # /addchild, /switch, /players
│   │   │   ├── commands.ts    # /profile, /rank, /hall, /streak, /level
│   │   │   └── admin.ts       # /admin_send, /admin_prepare, /admin_stats
│   │   ├── keyboards/
│   │   │   ├── level.ts       # Level selection inline keyboard
│   │   │   ├── mcq.ts         # MCQ answer buttons + hint
│   │   │   └── profile.ts     # Profile picker keyboard
│   │   ├── messages/
│   │   │   └── arabic.ts      # ALL Arabic text (single source of truth)
│   │   └── middleware/
│   │       └── session.ts     # Grammy session with state machine
│   ├── services/
│   │   ├── account.service.ts # Account + profile CRUD
│   │   ├── question.service.ts# Fetch scheduled questions
│   │   ├── session.service.ts # Study session management
│   │   ├── attempt.service.ts # Record attempts, update points
│   │   ├── validation.service.ts # MCQ + open-ended answer checking
│   │   ├── ranking.service.ts # Weekly/monthly/yearly rankings
│   │   ├── badge.service.ts   # Award badges, check achievements
│   │   └── setting.service.ts # App settings from DB
│   ├── jobs/
│   │   ├── scheduler.ts       # Cron job registration
│   │   ├── prepare-questions.ts # 00:30 — Select 3 questions per level
│   │   ├── send-first.ts      # 14:30 — Send Q1 to all users
│   │   ├── send-reminder.ts   # 19:30 — Remind incomplete users
│   │   ├── reset-streaks.ts   # 00:00 — Reset inactive streaks
│   │   ├── weekly-ranking.ts  # Sunday 23:00
│   │   ├── monthly-ranking.ts # Last day of month 23:00
│   │   └── yearly-ranking.ts  # Dec 31 23:00
│   ├── utils/
│   │   ├── arabic-numerals.ts # Arabic numeral normalization
│   │   ├── cairo-time.ts      # Cairo timezone utilities
│   │   ├── logger.ts          # Simple structured logger
│   │   └── shuffle.ts         # Fisher-Yates shuffle
│   ├── db/
│   │   └── prisma.ts          # Prisma client singleton
│   ├── config.ts              # Environment config
│   ├── types.ts               # Shared TypeScript types
│   └── index.ts               # Entry point
├── .env.example
├── CLAUDE.md                  # Project conventions for AI assistants
├── package.json
├── tsconfig.json
└── prisma.config.ts           # Prisma 7 config
```

## Bot Commands

### User Commands
| Command | Description |
|---|---|
| `/start` | Start or return to menu |
| `/profile` | View profile, points, badges |
| `/rank` | Weekly leaderboard |
| `/hall` | Hall of fame |
| `/streak` | Current streak info |
| `/level` | Change difficulty level |
| `/addchild` | Add a new child profile |
| `/switch` | Switch between profiles |
| `/players` | List all profiles |
| `/help` | Show all commands |

### Admin Commands
| Command | Description |
|---|---|
| `/admin_send` | Manually trigger question sending |
| `/admin_prepare` | Manually prepare today's questions |
| `/admin_stats` | View bot statistics |

## Schedule (Cairo Time)

| Time | Job |
|---|---|
| 00:00 | Reset streaks for inactive users |
| 00:30 | Prepare 3 questions per level |
| 14:30 | Send first question to all users |
| 19:30 | Evening reminder (after Maghrib) |
| Sunday 23:00 | Weekly ranking + badges |
| Last day of month 23:00 | Monthly hall of fame |
| Dec 31 23:00 | Yearly awards |

## Database

11 models: `accounts`, `users`, `levels`, `topics`, `questions`, `options`, `scheduled_questions`, `study_sessions`, `question_attempts`, `badges`, `user_badges`, `settings`

### Switching to MySQL (Production)

1. In `prisma/schema.prisma`, change `provider = "sqlite"` to `provider = "mysql"`
2. In `.env`, set `DATABASE_URL` to your MySQL connection string
3. Install the MySQL adapter: `pnpm add @prisma/adapter-mysql2`
4. Update `src/db/prisma.ts` and `prisma/seed.ts` to use the MySQL adapter
5. Run `pnpm db:push && pnpm db:seed`

## Adding Questions

Questions are stored in the `questions` table. To add new questions:

1. Use `prisma/seed.ts` as a reference for the format
2. Each question needs: `topicId`, `questionType` (mcq/open_ended), `questionText`, `explanation`
3. MCQ questions need `options` with one marked `isCorrect`
4. Open-ended questions need `correctAnswer` and `correctAnswerNumeric`

## License

MIT
