# NumNinjas — Monorepo Guide

## What Is This?

A pnpm monorepo for **نينجا الأرقام** (NumNinjas) — a bilingual (Arabic + English) Telegram math bot + website for kids (ages 10–12). 3 daily math questions, gamified with ninja belt levels, streaks, points, and leaderboards. Arabic text uses Spacetoon Arabic (warm, accessible MSA understood by all Arab kids). Users can switch languages via `/language` command or website footer button.

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
pnpm db:seed              # Seed levels, topics, 840 questions (420 AR + 420 EN), badges, settings, admin
pnpm db:seed:demo         # Add 15 fake users with activity data (dev only!)
pnpm db:reset             # DELETE all data + re-seed (dev only!)
```

## Key Patterns

- **Shared database package**: Both bot and web import from `@numninjas/database`
- **moduleResolution: bundler**: Used across all packages (no .js extensions in imports)
- **prisma-client-js generator**: Standard Prisma client in node_modules/@prisma/client (NOT the newer prisma-client TS generator — that has Turbopack compatibility issues)
- **Server Components**: Website uses RSC for data fetching, Server Actions for mutations
- **Bilingual (Arabic + English)**: Bot uses `messages/arabic.ts` + `messages/english.ts` with `getMsg(ctx)` helper. Website uses dictionary pattern (`lib/dictionaries/`) with cookie-based locale. Auto-detects from Telegram language. Users switch with /language command or footer button.
- **RTL/LTR**: Website sets `lang` and `dir` dynamically based on locale cookie (ar→rtl, en→ltr)
- **Spacetoon Arabic**: All Arabic text uses warm, accessible MSA (not Egyptian dialect, not formal فصحى). Understood by all Arab kids regardless of country.
- **Session state machine**: Bot uses Grammy sessions with state field (idle, awaiting_nickname, awaiting_level, awaiting_answer, onboarding_quiz)
- **Adaptive difficulty**: Each kid gets different questions based on weak topics (topic-strength.service.ts). Questions selected per-user at 01:30 Cairo, not per-level.
- **Per-level rankings**: Each level has its own leaderboard. Level 1 kids compete with Level 1, not Level 5. Monthly ninja champions and yearly awards are global.
- **Onboarding quiz**: 3 diagnostic questions auto-detect the right level (0/3→L1, 1/3→L2, 2/3→L3, 3/3→L4). Kid can override with manual picker. After profile creation, a "🚀 Start now!" button is shown — tapping it sends the first question immediately without waiting for the 14:30 cron. If the button is ignored, the cron sends questions at 14:30 Cairo as normal.
- **Level completion**: When all 7 topics mastered (≥3 attempts, ≥70% accuracy each), celebration + suggest next level
- **Store UTC, display Cairo**: All DateTimes stored as UTC, converted to Africa/Cairo for display
- **Adapter pattern for DB**: MySQL via @prisma/adapter-mariadb, isolated in `packages/database/src/client.ts`. Uses PoolConfig object with `idleTimeout: 30` and `minimumIdle: 1` to handle Hostinger shared hosting killing idle connections (~60s). Bot has a heartbeat (`SELECT 1` every 30s) to keep connections alive. Hostinger has a 500 connections/hour limit.
- **Telegram channel**: Weekly/monthly/yearly rankings auto-posted to @NumNinjas channel (optional, set CHANNEL_USERNAME in bot .env)
- **Spaced repetition**: Questions reappear based on last result: wrong→2d, hint→5d, correct→14d (spaced-repetition.service.ts)
- **Parent-first UX**: Welcome explains safety to parents, daily summary shows topic names, weekly report includes "next week focus" (weak topics), profile page has share button
- **Database package has no build step**: Consumed as raw TypeScript source. Never run tsc on it. If a dist/ folder appears, delete it (it causes IDE type errors)

## Environment Variables

Each app has its own .env file:
- `packages/database/.env` — DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD (for Prisma CLI + seed)
- `apps/bot/.env` — BOT_TOKEN, ADMIN_TELEGRAM_ID, CHANNEL_USERNAME, DATABASE_URL, NODE_ENV
- `apps/web/.env.local` — DATABASE_URL, AUTH_SECRET, AUTH_URL, NODE_ENV, PORT

Production DATABASE_URL uses the Hostinger MySQL hostname (`srvXXXX.hstgr.io` from Remote MySQL page), not `localhost`. Default admin password is `password` — change via phpMyAdmin after first login (see docs/DEPLOY.md).

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

**Numbers — always Western digits:**
- Use 3, 5, 15, 420 — NOT ٣، ٥، ١٥، ٤٢٠
- Arab schools use Western digits (1, 2, 3) in math class
- This applies to ALL Arabic text: questions, options, explanations, UI

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
│   ├── helpers/get-msg.ts → getMsg(ctx) returns localized messages
│   ├── keyboards/      → Inline keyboard builders (MCQ, level, profile)
│   ├── messages/        → arabic.ts + english.ts + index.ts (i18n)
│   └── middleware/session.ts → Grammy session with state machine + locale
└── jobs/               → 8 cron jobs (questions, reminders, rankings, parent report)
```

### Website (apps/web/)
```
src/
├── auth.ts             → Auth.js v5 config (credentials provider)
├── proxy.ts        → Protects /admin/* routes (cookie check, no Prisma import)
├── app/
│   ├── page.tsx        → Landing page (static)
│   ├── actions/locale.ts → setLocale server action (cookie)
│   ├── leaderboard/    → Per-level weekly rankings (ISR 1hr)
│   ├── champions/      → Monthly winners (ISR daily)
│   ├── profile/[username]/ → Player profile with OG tags (SSR)
│   ├── levels/         → Level explanations (ISR daily)
│   └── admin/          → Auth-protected admin panel (9 pages + questions CRUD)
├── components/
│   ├── admin/          → Sidebar, question filters, question form
│   ├── footer.tsx      → Shared footer with language switcher
│   └── language-switcher.tsx → AR/EN toggle button
└── lib/
    ├── dictionaries/   → ar.ts + en.ts + index.ts (website i18n)
    ├── locale.ts       → getLocale() reads cookie
    └── queries/        → Server-side query wrappers
```

### Database Package (packages/database/)
```
src/
├── client.ts           → Prisma singleton with @prisma/adapter-mariadb (MySQL)
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

## RTL Emoji Fix Pattern

Emojis in RTL text appear on the wrong side. Patterns used:

1. **Headings** (flex): `<h1 className="flex items-center justify-center gap-2"><span>📊</span> Text</h1>` — flex forces consistent order
2. **Table headers / labels** (string order): Put emoji AFTER text in both dictionaries. Arabic `'صحيحة ✅'` renders as `✅ صحيحة` (RTL reversal puts emoji on right visually). English `'Correct ✅'` renders as `Correct ✅` (emoji on right). Both languages consistent — no `dir` override needed.
3. **Never** put `dir="ltr"` on `<h1>/<h2>` with Arabic text — it left-aligns the whole heading

## Child Safety

This app is for kids ages 10-12. Follow these rules:
- **No direct messaging links** from child profiles — use "Copy Link" not Telegram/WhatsApp share
- **No personal data collection** — bot only asks for nickname, not real name or school
- **Privacy toggle** — users can set profile to private (isPublic: false) to hide from leaderboard links
- **Healthy content only** — no junk food, no inappropriate scenarios in questions

## Common Gotchas

- **`pnpm approve-builds`**: After fresh install, pnpm may block native module builds (prisma, mariadb). They're listed in root package.json under `pnpm.onlyBuiltDependencies`
- **`pnpm db:generate`**: Must run after any schema change — the generated client is in node_modules
- **`pnpm db:reset`**: Destroys all data — dev only
- **BigInt**: Telegram IDs are BigInt in Prisma. Safe to convert to Number() since Telegram IDs are < 2^53
- **Proxy can't import Prisma**: The Next.js proxy runs in Edge Runtime. It checks the auth cookie directly, NOT through the Auth.js auth() function (which imports Prisma)
- **Bot imports use @numninjas/database**: Never import from relative service/util paths in bot code. Always from the package.
- **ScheduledQuestion is per-user**: Not per-level. Each kid gets personalized questions based on their weak topics.
- **Rankings are per-level**: A Level 1 kid only competes with other Level 1 kids. Monthly/yearly are global.
- **Default admin**: Seed creates admin@numninjas.com with default password. Change after first login via phpMyAdmin (see DEPLOY.md).
- **Startup recovery**: Bot catches up on missed cron jobs at startup — streak reset, question prep, and send-first-question all run on boot if their scheduled time has passed. All are idempotent.
- **DST-safe cron times**: Egypt observes DST (last Friday of April, clocks spring 00:00→01:00). The prepare-questions cron is at 01:30 (not 00:30) because 00:30 doesn't exist on spring-forward day and node-cron silently skips it. `sendFirstQuestion` also calls `prepareScheduledQuestions()` as a fallback so questions are always prepared before sending regardless of whether the cron ran.
- **Weekly cleanup job**: Every Monday 03:00 Cairo, `cleanupOldRecords()` deletes `scheduled_questions` and `study_sessions` older than 30 days. Both are O(users × days) tables that serve no purpose past their day. `question_attempts` is intentionally NOT cleaned for two reasons: (1) spaced repetition checks the last time a user answered each specific question — with no time limit — to decide its cooldown; deleting old attempts would make a question lose its cooldown record and reappear too soon. (2) topic-strength uses the last 30 days of attempts to calculate which topics a kid is weak at; deleting them would make the kid look like a new user with no history. `question_attempts` is the learning history — everything else is just daily bookkeeping.
- **Why ScheduledQuestion is per-user (not per belt)**: Questions are picked per-user via adaptive difficulty (`getTopicStrengths`) and spaced repetition (`getExcludedQuestionIds`). Two kids at the same level get different questions based on their individual weak topics and attempt history. Sharing questions per belt would silently destroy the personalized learning features that make the app useful.
- **Hostinger: pnpm not in PATH**: Subprocesses on Hostinger can't find `pnpm` or `npx`. Build scripts use `node_modules/.bin/` paths directly. SSH commands need `chmod +x` on prisma binaries.
- **Hostinger: DB setup via phpMyAdmin**: Prisma CLI is unreliable on Hostinger shared hosting. Use phpMyAdmin Import with `docs/schema.sql` and `docs/seed.sql` instead. To regenerate seed.sql after changing TS seeds: `pnpm db:reset` then `mysqldump` (see DEPLOY.md).
- **Cloudflare SSL must be Flexible**: Hostinger origin doesn't have SSL. Using "Full" or "Full (Strict)" causes 525 errors.
- **Hostinger kills idle DB connections**: Shared hosting kills idle MySQL connections after ~60s and has a 500 connections/hour limit. Fixed with `idleTimeout: 30` in PoolConfig + heartbeat in bot. Avoid crash loops — bot has exponential backoff (10 retries) and 5-min exit cooldown.
- **Level change re-prepares questions**: When a user changes level, their scheduled questions and session are deleted and new questions are prepared for the new level immediately. This prevents getting wrong-level questions.
- **Website uses `127.0.0.1`, bot uses `srvXXXX.hstgr.io`**: The website runs on the same Hostinger server as MySQL — `127.0.0.1` connects locally and bypasses the 500 conn/hour Remote MySQL limit. The Railway bot connects from outside so it must use the external hostname.
- **Remote MySQL "Any Host"**: Railway doesn't have fixed IPs. Hostinger's Remote MySQL must have "Any Host" enabled (not CIDR `0.0.0.0/0` — Hostinger doesn't accept that format).

## Deployment

```
Cloudflare (domain + DNS + CDN + DDoS protection + SSL Flexible)
        ↓
Hostinger Business (Next.js website — standalone output)
        ↓
Railway (Grammy bot — always running, long polling)
        ↓
Hostinger MySQL (shared database)
```

- **Website** → Hostinger Business: auto-deploys from GitHub on push
  - Build command: `pnpm run build:web` (uses `node_modules/.bin/` paths, copies static assets to standalone)
  - Entry file: `apps/web/.next/standalone/apps/web/server.js` (monorepo nests under app path)
  - Env vars: `DATABASE_URL`, `AUTH_SECRET`, `AUTH_URL=https://numninjas.com`, `NODE_ENV=production`, `PORT=3000`
- **Bot** → Railway: auto-deploys from GitHub on push
  - Build: `pnpm install && pnpm db:generate && pnpm --filter bot build`
  - Start: `pnpm --filter bot start`
  - Env vars: `BOT_TOKEN`, `ADMIN_TELEGRAM_ID`, `CHANNEL_USERNAME`, `DATABASE_URL`, `NODE_ENV=production`
- **Database** → Hostinger MySQL: shared by both apps, hostname from Remote MySQL page (srvXXXX.hstgr.io)
- **Domain/CDN** → Cloudflare: DNS (A record + www CNAME), SSL Flexible, caching, DDoS protection

## Git

- Commit after each feature/phase
- Do NOT add Co-Authored-By in commit messages
