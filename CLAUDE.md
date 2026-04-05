# NumNinjas — Project Guide

## What Is This?

A Telegram math bot (نينجا الأرقام) that sends Egyptian primary school students (ages 10–12) 3 daily math questions. Gamified with ninja belt levels, streaks, points, and leaderboards. All user-facing text is in Egyptian Arabic.

## Tech Stack

- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js 20+
- **Telegram**: Grammy (grammY) — NOT Telegraf
- **ORM**: Prisma 7 with driver adapters
- **DB (dev)**: SQLite via `@prisma/adapter-better-sqlite3`
- **DB (prod)**: MySQL via `@prisma/adapter-mysql2`
- **Scheduler**: node-cron (all times Cairo/Africa)
- **Package Manager**: pnpm

## Naming Conventions

- **TypeScript**: `camelCase` for variables/functions, `PascalCase` for types/interfaces
- **Database columns**: `snake_case` via Prisma `@map()`
- **Prisma models**: PascalCase singular (`User`, `Question`)
- **Table names**: plural snake_case via `@@map()` (`users`, `questions`)
- **Files**: kebab-case (`account.service.ts`, `arabic-numerals.ts`)
- **Seed files**: `questions-levelX.ts` in `prisma/seeds/`

## Architecture

```
src/
├── bot/           → Grammy bot, handlers, keyboards, middleware
│   └── messages/arabic.ts  → ALL Arabic text lives here, nowhere else
├── services/      → Business logic (one service per domain)
├── jobs/          → Cron jobs (scheduled tasks)
├── db/            → Prisma client singleton
└── utils/         → Shared utilities (logger, arabic numerals, cairo time)
```

## Key Patterns

- **Session state machine**: Grammy sessions with `state` field (`idle`, `awaiting_nickname`, `awaiting_level`, `awaiting_answer`) — NOT the conversations plugin
- **Store UTC, display Cairo**: All DateTimes stored as UTC, converted to `Africa/Cairo` for display using `Intl.DateTimeFormat`
- **Rankings in JS**: Computed with Prisma queries + JS sort (not SQL `RANK()`) for SQLite compatibility
- **Circular FK**: `Account.activeProfileId → User.id` is nullable + unique; create account first, then user, then update account
- **Prisma 7**: Uses `prisma.config.ts` for datasource URL, driver adapters in client code, generated client in `prisma/generated/`
- **Prisma imports**: Import from `./generated/prisma/client/client.js` (not `@prisma/client`). Use types like `Level`, `User` etc. from there when needed (e.g., `const levels: Level[] = []` to avoid `never[]` inference)
- **Enums as strings**: SQLite doesn't support native enums, so `questionType`, `badgeType`, `settingType` are stored as strings and validated in app code via `src/types.ts`

## Development Commands

```bash
pnpm dev          # Start with hot reload (tsx watch)
pnpm build        # Compile TypeScript to dist/
pnpm start        # Run compiled JS (for production)
pnpm db:push      # Apply schema to database
pnpm db:generate  # Regenerate Prisma client
pnpm db:seed      # Seed levels, topics, 420 questions, badges, settings
pnpm db:reset     # DELETE all data + re-seed (dev only!)
pnpm lint         # ESLint check
pnpm format       # Prettier format
```

## Schedule (Cairo Time)

| Time | Job | File |
|---|---|---|
| 00:00 | Reset inactive streaks | `jobs/reset-streaks.ts` |
| 00:30 | Prepare 3 questions/level | `jobs/prepare-questions.ts` |
| 14:30 | Send first question | `jobs/send-first.ts` |
| 19:30 | Evening reminder | `jobs/send-reminder.ts` |
| Sunday 23:00 | Weekly ranking | `jobs/weekly-ranking.ts` |
| Last of month 23:00 | Monthly hall of fame | `jobs/monthly-ranking.ts` |
| Dec 31 23:00 | Yearly awards | `jobs/yearly-ranking.ts` |

## Curriculum: 5 Levels × 7 Topics = 35 Topics (420 Questions)

### 🥋 Level 1 — White Belt (Confidence Builder)
1. الجمع والطرح — Addition & Subtraction
2. الضرب — Multiplication
3. القسمة والباقي — Division with Remainders
4. حس الأعداد — Number Sense (place value, rounding)
5. خصائص الأعداد — Number Properties (even/odd, factors)
6. مقدمة الكسور — Intro to Fractions
7. القياس والوحدات — Measurement

### 🟡 Level 2 — Yellow Belt (Building Skills)
1. جمع وطرح الكسور — Add/Subtract Fractions (like denominators)
2. الأعداد العشرية — Decimals
3. جمع وطرح العشرية — Add/Subtract Decimals
4. الوقت والمواعيد — Time Calculations
5. المحيط والمساحة — Perimeter & Area
6. التقدير والتقريب — Estimation
7. الأنماط والتسلسلات — Patterns & Sequences

### 🟠 Level 3 — Orange Belt (Mastery)
1. الكسور المختلفة المقامات — Unlike Denominator Fractions
2. ضرب الكسور — Multiplying Fractions
3. قسمة الكسور — Dividing Fractions
4. الأعداد الكسرية — Mixed Numbers
5. ضرب وقسمة العشرية — Multiply/Divide Decimals
6. ترتيب العمليات — Order of Operations (BODMAS)
7. المال والأعمال — Money Math (profit/loss)

### 🟢 Level 4 — Green Belt (Expert)
1. النسبة والتناسب — Ratio & Proportion
2. النسبة المئوية — Percentages
3. تطبيقات النسبة المئوية — % Applications (discounts)
4. مقدمة الجبر — Intro to Algebra
5. المعادلات البسيطة — Simple Equations
6. السرعة والمسافة والزمن — Speed/Distance/Time
7. المتوسط الحسابي — Averages

### ⬛ Level 5 — Black Belt (Legend)
1. الأسس والقوى — Powers & Exponents
2. العوامل المشتركة والمضاعفات — GCD & LCM
3. الأعداد السالبة — Negative Numbers
4. الاحتمالات — Simple Probability
5. الحجم — Volume
6. المعادلات المتقدمة — 2-Step Equations
7. ألغاز رياضية — Math Puzzles & Logic

## Common Gotchas

- **`pnpm approve-builds`**: After fresh install, pnpm may block native module builds (`better-sqlite3`, `esbuild`, `prisma`). They're listed in `package.json` under `pnpm.onlyBuiltDependencies`
- **`pnpm db:generate`**: Must run after any schema change — the generated client is gitignored
- **`pnpm db:reset`**: Destroys all data — dev only. Prisma will prompt for consent when run via AI
- **BigInt**: Telegram IDs are `BigInt` in Prisma. Safe to convert to `Number()` since Telegram IDs are < 2^53
- **Seed files**: Question data lives in `prisma/seeds/questions-levelX.ts`. Main `prisma/seed.ts` imports and inserts them all

## Git

- Commit after each feature/phase
- Do NOT add Co-Authored-By in commit messages
