# NumNinjas — Project Guide

## What Is This?
A Telegram math bot (نينجا الأرقام) that sends Egyptian primary school students 3 daily math questions, gamified with ninja belt levels, streaks, points, and leaderboards.

## Tech Stack
- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js 20+
- **Telegram**: Grammy (grammY)
- **ORM**: Prisma (SQLite dev, MySQL prod)
- **Scheduler**: node-cron
- **Package Manager**: pnpm

## Naming Conventions
- **TypeScript**: camelCase for variables/functions, PascalCase for types/interfaces
- **Database columns**: snake_case via Prisma `@map()`
- **Prisma models**: PascalCase singular (e.g., `User`, `Question`)
- **Table names**: plural snake_case via `@@map()` (e.g., `users`, `questions`)
- **Files**: kebab-case (e.g., `account.service.ts`, `arabic-numerals.ts`)

## Architecture
- `src/bot/` — Grammy bot, handlers, keyboards, middleware
- `src/services/` — Business logic (one service per domain)
- `src/jobs/` — Cron jobs (scheduled tasks)
- `src/db/` — Prisma client singleton
- `src/utils/` — Shared utilities (logger, arabic numerals, cairo time)
- `src/bot/messages/arabic.ts` — ALL Arabic text lives here, nowhere else

## Key Patterns
- **Session state machine**: Grammy sessions with `state` field (`idle`, `awaiting_nickname`, `awaiting_level`, `awaiting_answer`) — NOT conversations plugin
- **Store UTC, display Cairo**: All DateTimes stored as UTC, converted to Cairo for display
- **Rankings in JS**: Computed with Prisma `groupBy` + JS sort (not SQL RANK) for SQLite compat
- **Circular FK**: `Account.activeProfileId → User.id` is nullable; create account first, then user, then update account

## Commands
```bash
pnpm dev          # Start dev server with hot reload
pnpm build        # Compile TypeScript
pnpm start        # Run compiled JS
pnpm db:push      # Push schema to database
pnpm db:seed      # Seed database
pnpm db:reset     # Reset + re-seed database
pnpm lint         # Run ESLint
pnpm format       # Run Prettier
```

## Schedule (Cairo Time)
- 00:30 — Prepare daily questions per level
- 14:30 — Send first question to all users
- 19:30 — Reminder for users who haven't answered
- 00:00 — Reset streaks for inactive users

## Git
- Commit after each feature/phase
- Do NOT add Co-Authored-By in commit messages
