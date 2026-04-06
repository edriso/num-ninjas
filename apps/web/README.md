# 🥷 NumNinjas Website

The Next.js website for نينجا الأرقام. Public pages for parents and kids, plus an admin panel for managing questions and settings.

## Quick Start

```bash
# From the repo root:
cp apps/web/.env.example apps/web/.env.local
# Edit .env.local with your DATABASE_URL and AUTH_SECRET

pnpm db:generate
pnpm --filter web dev
# Open http://localhost:3000
```

## Pages

### Public (no login)

| Page | URL | What It Shows |
|------|-----|--------------|
| Landing | / | Bot explanation, 5 levels, Telegram CTA |
| Leaderboard | /leaderboard | Per-level weekly rankings (updates hourly) |
| ninja champions | /champions | Monthly winners and badges |
| Profile | /profile/ahmed123 | Player stats, badges, share button |
| Levels | /levels | All 5 levels and their topics |

### Admin (login required)

| Page | URL | What It Does |
|------|-----|-------------|
| Login | /admin/login | Email + password |
| Dashboard | /admin | Stats overview |
| Questions | /admin/questions | Full CRUD with filters |
| Topics | /admin/topics | Manage topics per level |
| Levels | /admin/levels | Edit level details |
| Badges | /admin/badges | Manage badge types |
| Users | /admin/users | Browse all players |
| Settings | /admin/settings | Edit bot runtime settings |
| Scheduled | /admin/scheduled | Today's per-user questions |

### API

| Route | What It Does |
|-------|-------------|
| /api/auth/* | Auth.js authentication |
| /api/certificate/[username] | Generate shareable PNG certificate |

## Project Structure

```
src/
├── auth.ts              → Auth.js v5 config (credentials provider)
├── middleware.ts         → Protects /admin/* routes
├── app/
│   ├── page.tsx         → Landing page
│   ├── leaderboard/     → Per-level rankings (ISR 1hr)
│   ├── champions/    → Monthly winners (ISR daily)
│   ├── profile/[username]/ → Player profile (SSR)
│   ├── levels/          → Level explanations (ISR daily)
│   ├── admin/           → 9 admin pages + questions CRUD
│   └── api/             → Auth + certificate image generation
├── components/admin/    → Sidebar, forms, filters
└── lib/queries/         → Server-side data fetching
```

## Environment Variables

```
DATABASE_URL=file:../../packages/database/dev.db
AUTH_SECRET=generate-with-openssl-rand-base64-32
```

## Tech Stack

- Next.js 15 (App Router) + React Server Components
- Tailwind CSS v4 (RTL Arabic)
- Auth.js v5 (credentials provider)
- @vercel/og (certificate image generation)
