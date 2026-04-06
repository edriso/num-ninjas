# NumNinjas — Monorepo Guide

## What Is This?

A pnpm monorepo for **نينجا الأرقام** (NumNinjas) — a Telegram math bot and website for Egyptian primary school students (ages 10–12). 3 daily math questions, gamified with ninja belt levels, streaks, points, and leaderboards. All user-facing text is in Egyptian Arabic.

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
| Database | Prisma 7, SQLite (dev), MySQL (prod) |
| Shared | @numninja/database — services, utils, types, Prisma client |
| Package Manager | pnpm workspaces |

## Development Commands

\`\`\`bash
# From root
pnpm dev:bot          # Start bot with hot reload
pnpm build:bot        # Compile bot
pnpm build:web        # Build Next.js website
pnpm db:generate      # Regenerate Prisma client
pnpm db:push          # Apply schema to database
pnpm db:seed          # Seed levels, topics, 420 questions, badges, settings
pnpm db:reset         # DELETE all data + re-seed (dev only!)

# From apps/web
pnpm --filter web dev # Start Next.js dev server
\`\`\`

## Key Patterns

- **Shared database package**: Both bot and web import from \`@numninja/database\`
- **moduleResolution: bundler**: Used across all packages (no .js extensions in imports)
- **prisma-client-js generator**: Standard Prisma client in node_modules/@prisma/client
- **Server Components**: Website uses RSC for data fetching, Server Actions for mutations
- **RTL Arabic**: Website uses \`lang="ar" dir="rtl"\` with Tailwind CSS
- **Session state machine**: Bot uses Grammy sessions with state field (idle, awaiting_nickname, awaiting_level, awaiting_answer)
- **Store UTC, display Cairo**: All DateTimes stored as UTC, converted to Africa/Cairo for display

## Environment Variables

Each app has its own .env file:
- \`packages/database/.env\` — DATABASE_URL (for Prisma CLI)
- \`apps/bot/.env\` — BOT_TOKEN, ADMIN_TELEGRAM_ID, DATABASE_URL
- \`apps/web/.env.local\` — DATABASE_URL, AUTH_SECRET

## Naming Conventions

- **TypeScript**: camelCase variables/functions, PascalCase types/interfaces
- **Database columns**: snake_case via Prisma \`@map()\`
- **Prisma models**: PascalCase singular (User, Question)
- **Table names**: plural snake_case via \`@@map()\`
- **Files**: kebab-case (account.service.ts)

## Deployment

- **Bot** → Railway: \`pnpm install && pnpm db:generate && pnpm --filter bot build\`
- **Website** → Hostinger: \`pnpm install && pnpm db:generate && pnpm --filter web build\`
- Both connect to same MySQL on Hostinger

## Git

- Commit after each feature/phase
- Do NOT add Co-Authored-By in commit messages
