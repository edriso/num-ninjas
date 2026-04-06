# NumNinjas — Monorepo Guide

## What Is This?

A pnpm monorepo for **نينجا الأرقام** (NumNinjas) — a Telegram math bot + website for Egyptian primary school students (ages 10-12). 3 daily math questions, gamified with ninja belt levels, streaks, points, and leaderboards. All user-facing text is in Egyptian Arabic.

## Monorepo Structure

\`\`\`
numninja/
├── apps/
│   ├── bot/          → Grammy Telegram bot (deployed to Railway)
│   └── web/          → Next.js 15 website (deployed to Hostinger)
└── packages/
    └── database/     → Shared Prisma schema, services, utils, types (@numninja/database)
\`\`\`

## Tech Stack

| Part | Stack |
|------|-------|
| Bot | TypeScript, Grammy, node-cron, Node.js 20+ |
| Website | Next.js 15 (App Router), Tailwind CSS v4, Auth.js v5 |
| Database | Prisma 7 (prisma-client-js), SQLite (dev), MySQL (prod) |
| Shared | @numninja/database — services, utils, types, Prisma client |
| Package Manager | pnpm workspaces |

## Development Commands

\`\`\`bash
# From root
pnpm dev:bot              # Start bot with hot reload
pnpm --filter web dev     # Start website at localhost:3000
pnpm build:bot            # Compile bot
pnpm build:web            # Build Next.js website
pnpm db:generate          # Regenerate Prisma client
pnpm db:push              # Apply schema to database
pnpm db:seed              # Seed levels, topics, 420 questions, badges, settings
pnpm db:reset             # DELETE all data + re-seed (dev only!)
\`\`\`

## Key Patterns

- **Shared database package**: Both bot and web import from \`@numninja/database\`
- **moduleResolution: bundler**: Used across all packages (no .js extensions in imports)
- **prisma-client-js generator**: Standard Prisma client in node_modules/@prisma/client (NOT the newer prisma-client TS generator — that has Turbopack compatibility issues)
- **Server Components**: Website uses RSC for data fetching, Server Actions for mutations
- **RTL Arabic**: Website uses \`lang="ar" dir="rtl"\` with Tailwind CSS
- **Session state machine**: Bot uses Grammy sessions with state field (idle, awaiting_nickname, awaiting_level, awaiting_answer)
- **Store UTC, display Cairo**: All DateTimes stored as UTC, converted to Africa/Cairo for display
- **Adapter pattern for DB**: SQLite (dev) and MySQL (prod) via Prisma driver adapters, isolated in \`packages/database/src/client.ts\`

## Environment Variables

Each app has its own .env file:
- \`packages/database/.env\` — DATABASE_URL (for Prisma CLI: db:push, db:seed, db:generate)
- \`apps/bot/.env\` — BOT_TOKEN, ADMIN_TELEGRAM_ID, DATABASE_URL
- \`apps/web/.env.local\` — DATABASE_URL, AUTH_SECRET

## Naming Conventions

- **TypeScript**: camelCase variables/functions, PascalCase types/interfaces
- **Database columns**: snake_case via Prisma \`@map()\`
- **Prisma models**: PascalCase singular (User, Question)
- **Table names**: plural snake_case via \`@@map()\` (users, questions)
- **Files**: kebab-case (account.service.ts, arabic-numerals.ts)
- **Seed files**: questions-levelX.ts in prisma/seeds/

## Architecture Notes

### Bot (apps/bot/)
\`\`\`
src/
├── config.ts           → Reads BOT_TOKEN, ADMIN_TELEGRAM_ID from .env
├── index.ts            → Entry point: loads settings, starts scheduler + bot
├── bot/
│   ├── index.ts        → Grammy bot setup, registers all handlers
│   ├── handlers/       → Command and callback handlers
│   ├── keyboards/      → Inline keyboard builders
│   ├── messages/arabic.ts → ALL Arabic text lives here, nowhere else
│   └── middleware/session.ts → Grammy session with state machine
└── jobs/               → 7 cron jobs (send questions, reminders, rankings)
\`\`\`

### Website (apps/web/)
\`\`\`
src/
├── auth.ts             → Auth.js v5 config (credentials provider)
├── middleware.ts        → Protects /admin/* routes (cookie check, no Prisma import)
├── app/
│   ├── page.tsx        → Landing page (static)
│   ├── leaderboard/    → Weekly rankings (ISR 1hr)
│   ├── hall-of-fame/   → Monthly winners (ISR daily)
│   ├── profile/[userId]/ → Player profile (SSR)
│   ├── levels/         → Level explanations (ISR daily)
│   └── admin/          → Auth-protected admin panel (9 pages)
├── components/admin/   → Admin sidebar
└── lib/queries/        → Server-side query wrappers
\`\`\`

### Database Package (packages/database/)
\`\`\`
src/
├── client.ts           → Prisma singleton with adapter switching (SQLite/MySQL)
├── index.ts            → Barrel export: prisma, all services, all utils, all types
├── types.ts            → Shared constants (QUESTION_TYPE, BADGE_TYPE, SESSION_STATE)
├── services/           → 9 service files (account, attempt, badge, question, ranking, session, setting, validation, admin)
└── utils/              → 4 utility files (cairo-time, arabic-numerals, logger, shuffle)
\`\`\`

## Common Gotchas

- **\`pnpm approve-builds\`**: After fresh install, pnpm may block native module builds (better-sqlite3, prisma). They're listed in root package.json under \`pnpm.onlyBuiltDependencies\`
- **\`pnpm db:generate\`**: Must run after any schema change — the generated client is in node_modules
- **\`pnpm db:reset\`**: Destroys all data — dev only
- **BigInt**: Telegram IDs are BigInt in Prisma. Safe to convert to Number() since Telegram IDs are < 2^53
- **Middleware can't import Prisma**: The Next.js middleware runs in Edge Runtime. It checks the auth cookie directly, NOT through the Auth.js auth() function (which imports Prisma)
- **Bot imports use @numninja/database**: Never import from relative service/util paths in bot code. Always from the package.

## Deployment

- **Bot** → Railway: \`pnpm install && pnpm db:generate && pnpm --filter bot build\`
- **Website** → Hostinger: \`pnpm install && pnpm db:generate && pnpm --filter web build\`
- Both connect to same MySQL database on Hostinger

## Git

- Commit after each feature/phase
- Do NOT add Co-Authored-By in commit messages
