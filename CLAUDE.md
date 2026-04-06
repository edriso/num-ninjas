# NumNinjas — Monorepo Guide

## What Is This?

A pnpm monorepo for **نينجا الأرقام** (NumNinjas) — a Telegram math bot + website for Egyptian primary school students (ages 10–12). 3 daily math questions, gamified with ninja belt levels, streaks, points, and leaderboards. All user-facing text is in Spacetoon Arabic (warm, accessible MSA understood by all Arab kids).

## Monorepo Structure

```
num-ninjas/
├── apps/
│   ├── bot/          → Grammy Telegram bot (deployed to Railway)
│   └── web/          → Next.js 15 website (deployed to Hostinger)
└── packages/
    └── database/     → Shared Prisma schema, services, utils, types (@numninjas/database)
```

## Tech Stack

| Part | Stack |
|------|-------|
| Bot | TypeScript, Grammy, node-cron, Node.js 20+ |
| Website | Next.js 15 (App Router), Tailwind CSS v4, Auth.js v5 |
| Database | Prisma 7 (prisma-client-js), MySQL (both dev and production) |
| Testing | Vitest (161 unit tests in database package) |
| Shared | @numninjas/database — services, utils, types, Prisma client |
| Package Manager | pnpm workspaces |

## Development Commands

```bash
# From root
pnpm dev:bot              # Start bot with hot reload
pnpm --filter web dev     # Start website at localhost:3000
pnpm build:bot            # Compile bot
pnpm build:web            # Build Next.js website
pnpm test                 # Run all 161 unit tests
pnpm db:generate          # Regenerate Prisma client
pnpm db:push              # Apply schema to database
pnpm db:seed              # Seed levels, topics, 420 questions, badges, settings, admin
pnpm db:reset             # DELETE all data + re-seed (dev only!)
```

## Key Patterns

- **Shared database package**: Both bot and web import from `@numninjas/database`
- **moduleResolution: bundler**: Used across all packages (no .js extensions in imports)
- **prisma-client-js generator**: Standard Prisma client in node_modules/@prisma/client (NOT the newer prisma-client TS generator — that has Turbopack compatibility issues)
- **Server Components**: Website uses RSC for data fetching, Server Actions for mutations
- **RTL Arabic**: Website uses `lang="ar" dir="rtl"` with Tailwind CSS
- **Spacetoon Arabic**: All user-facing text uses warm, accessible MSA (not Egyptian dialect, not formal فصحى). Understood by all Arab kids regardless of country.
- **Session state machine**: Bot uses Grammy sessions with state field (idle, awaiting_nickname, awaiting_level, awaiting_answer, onboarding_quiz)
- **Adaptive difficulty**: Each kid gets different questions based on weak topics (topic-strength.service.ts). Questions selected per-user at 00:30, not per-level.
- **Per-level rankings**: Each level has its own leaderboard. Level 1 kids compete with Level 1, not Level 5. Monthly hall of fame and yearly awards are global.
- **Onboarding quiz**: 3 diagnostic questions auto-detect the right level (0/3→L1, 1/3→L2, 2/3→L3, 3/3→L4). Kid can override with manual picker.
- **Level completion**: When all 7 topics mastered (≥3 attempts, ≥70% accuracy each), celebration + suggest next level
- **Store UTC, display Cairo**: All DateTimes stored as UTC, converted to Africa/Cairo for display
- **Adapter pattern for DB**: MySQL via @prisma/adapter-mariadb, isolated in `packages/database/src/client.ts`
- **Telegram channel**: Weekly/monthly/yearly rankings auto-posted to @NumNinjas channel (optional, set CHANNEL_USERNAME in bot .env)
- **Spaced repetition**: Questions reappear based on last result: wrong→2d, hint→5d, correct→14d (spaced-repetition.service.ts)
- **Parent-first UX**: Welcome explains safety to parents, daily summary shows topic names, weekly report includes "next week focus" (weak topics), profile page has share button
- **Database package has no build step**: Consumed as raw TypeScript source. Never run tsc on it. If a dist/ folder appears, delete it (it causes IDE type errors)

## Environment Variables

Each app has its own .env file:
- `packages/database/.env` — DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD (for Prisma CLI + seed)
- `apps/bot/.env` — BOT_TOKEN, ADMIN_TELEGRAM_ID, CHANNEL_USERNAME, DATABASE_URL
- `apps/web/.env.local` — DATABASE_URL, AUTH_SECRET

## Naming Conventions

- **TypeScript**: camelCase variables/functions, PascalCase types/interfaces
- **Database columns**: snake_case via Prisma `@map()`
- **Prisma models**: PascalCase singular (User, Question)
- **Table names**: plural snake_case via `@@map()` (users, questions)
- **Files**: kebab-case (account.service.ts, arabic-numerals.ts)
- **Seed files**: questions-levelX.ts in prisma/seeds/
- **Test files**: *.test.ts in src/__tests__/

## Question Content Guidelines

When writing or generating new questions:

**Language — Spacetoon Arabic:**
- Use أنت not إنت, كم not كام, يريد not عايز, أصدقاء not صحاب
- Use يكون not يبقى, يأخذ not ياخد, يتبقى not يفضل
- Short energetic sentences, warm but not childish
- بابا/ماما/خالتي are fine (universal family terms, not dialect)

**Healthy lifestyle — no junk food:**
- Never use: شيبسي, بونبون, شوكولاتة, حلويات, بسكويت, كولا, بيبسي
- Instead use: تفاح, موز, تمر, عصير, فواكه, خضروات, حليب, ماء
- Food scenarios should model healthy eating habits

**Real-life contexts:**
- Shopping (supermarket, school supplies, clothes)
- School (students, classroom, exams)
- Sports and outdoor activities
- Family (cooking healthy meals, sharing fruit)
- Egyptian/Arab culture (Eid money, Cairo metro, mosques)
- Nature (garden, animals, weather)

## Architecture Notes

### Bot (apps/bot/)
```
src/
├── config.ts           → Reads BOT_TOKEN, ADMIN_TELEGRAM_ID from .env
├── index.ts            → Entry point: loads settings, starts scheduler + bot
├── bot/
│   ├── index.ts        → Grammy bot setup, registers all handlers + callbacks
│   ├── handlers/       → Command, callback, and text message handlers
│   ├── keyboards/      → Inline keyboard builders (MCQ, level, profile)
│   ├── messages/arabic.ts → ALL Arabic text lives here (Spacetoon Arabic)
│   └── middleware/session.ts → Grammy session with state machine
└── jobs/               → 8 cron jobs (questions, reminders, rankings, parent report)
```

### Website (apps/web/)
```
src/
├── auth.ts             → Auth.js v5 config (credentials provider)
├── middleware.ts        → Protects /admin/* routes (cookie check, no Prisma import)
├── app/
│   ├── page.tsx        → Landing page (static)
│   ├── leaderboard/    → Per-level weekly rankings (ISR 1hr)
│   ├── hall-of-fame/   → Monthly winners (ISR daily)
│   ├── profile/[userId]/ → Player profile with OG tags (SSR)
│   ├── levels/         → Level explanations (ISR daily)
│   └── admin/          → Auth-protected admin panel (9 pages + questions CRUD)
├── components/admin/   → Sidebar, question filters, question form
└── lib/queries/        → Server-side query wrappers
```

### Database Package (packages/database/)
```
src/
├── client.ts           → Prisma singleton with adapter switching (SQLite/MySQL)
├── index.ts            → Barrel export: prisma, all services, all utils, all types
├── types.ts            → Shared constants (QUESTION_TYPE, BADGE_TYPE, SESSION_STATE)
├── services/           → 11 service files (account, admin, attempt, badge, question, ranking, session, setting, spaced-repetition, topic-strength, validation)
├── utils/              → 4 utility files (cairo-time, arabic-numerals, logger, shuffle)
└── __tests__/          → 7 test files, 161 unit tests (vitest)
```

## Testing

```bash
pnpm test               # Run all tests (161 unit tests)
pnpm --filter @numninjas/database test:watch  # Watch mode
```

Tests cover:
- Arabic numeral parsing (fractions, mixed numbers, Arabic digits, unit stripping)
- Cairo timezone calculations
- Fisher-Yates shuffle correctness
- Type constants (all session states, badge types, etc.)
- Weighted topic selection algorithm (adaptive difficulty)
- Date range helpers (week/month/year start calculations)

All tests are pure unit tests — no database access needed.

## Common Gotchas

- **`pnpm approve-builds`**: After fresh install, pnpm may block native module builds (better-sqlite3, prisma). They're listed in root package.json under `pnpm.onlyBuiltDependencies`
- **`pnpm db:generate`**: Must run after any schema change — the generated client is in node_modules
- **`pnpm db:reset`**: Destroys all data — dev only
- **BigInt**: Telegram IDs are BigInt in Prisma. Safe to convert to Number() since Telegram IDs are < 2^53
- **Middleware can't import Prisma**: The Next.js middleware runs in Edge Runtime. It checks the auth cookie directly, NOT through the Auth.js auth() function (which imports Prisma)
- **Bot imports use @numninjas/database**: Never import from relative service/util paths in bot code. Always from the package.
- **ScheduledQuestion is per-user**: Not per-level. Each kid gets personalized questions based on their weak topics.
- **Rankings are per-level**: A Level 1 kid only competes with other Level 1 kids. Monthly/yearly are global.
- **Default admin**: Seed creates admin@numninjas.com with password from ADMIN_PASSWORD env var (default: changeme123). Change after first login.

## Deployment

```
Cloudflare (domain + DNS + CDN + DDoS protection + SSL)
        ↓
Hostinger Business (Next.js website)
        ↓
Railway (Grammy bot — always running, long polling)
        ↓
Hostinger MySQL (shared database)
```

- **Website** → Hostinger Business: auto-deploys from GitHub on push
  - Build: `pnpm install && pnpm db:generate && pnpm --filter web build`
  - Start: `pnpm --filter web start`
- **Bot** → Railway: auto-deploys from GitHub on push
  - Build: `pnpm install && pnpm db:generate && pnpm --filter bot build`
  - Start: `pnpm --filter bot start`
- **Database** → Hostinger MySQL: shared by both apps
- **Domain/CDN** → Cloudflare: handles DNS, SSL, caching, DDoS protection

## Git

- Commit after each feature/phase
- Do NOT add Co-Authored-By in commit messages
