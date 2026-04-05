# 🥷 NumNinjas — نينجا الأرقام

A Telegram bot that makes Egyptian kids (ages 10–12) fall in love with math! It sends 3 daily questions with real-life Egyptian scenarios — shopping in EGP, Cairo metro rides, Eid budgets, and more. Gamified with ninja belt levels, streaks, points, and leaderboards.

---

## What Does It Do?

1. A kid (or parent) opens the bot on Telegram and picks a nickname + ninja belt level
2. Every day at **2:30 PM Cairo time**, the bot sends **3 math questions** matching their level
3. The kid answers (tap a button for MCQ, or type a number for open-ended)
4. After each answer, they get instant feedback + explanation
5. After all 3 questions, they see a daily summary with points earned
6. If they forget, a **7:30 PM reminder** nudges them
7. Weekly leaderboards and badges keep them motivated

One Telegram account can have **up to 5 child profiles** (for parents with multiple kids).

---

## Features

- **3 Daily Questions** — Sent at 2:30 PM Cairo time, tailored to the student's level
- **5 Ninja Belt Levels** — From 🥋 White Belt (basics) to ⬛ Black Belt (legend)
- **420 Questions** — Across 35 topics, all with Egyptian real-life contexts
- **Multiple Profiles** — One parent account can manage up to 5 children
- **MCQ + Open-Ended** — Inline buttons for MCQ, text input with Arabic numeral support (٠-٩)
- **Hints** — Optional hints per question (tracked for fair rankings)
- **Streaks** — Daily streak tracking with milestone badges (7, 14, 30 days)
- **Weekly Leaderboard** — Top 3 awarded badges every Sunday
- **Monthly Hall of Fame** — Most active, sharpest mind, most independent
- **Yearly Champions** — Annual awards on December 31

---

## Tech Stack

| What | Tool | Why |
|---|---|---|
| Language | TypeScript (strict) | Catches bugs before they happen |
| Runtime | Node.js 20+ | Stable, fast, you probably already have it |
| Telegram | Grammy (grammY) | Modern, great TypeScript support |
| ORM | Prisma 7 | Type-safe database queries, easy migrations |
| DB (dev) | SQLite | Zero setup — just a file |
| DB (prod) | MySQL | Free on Hostinger VPS |
| Scheduler | node-cron | Lightweight cron jobs |
| Package Manager | pnpm | Faster and more efficient than npm |

---

## Getting Started (Development)

### What You Need First

- **Node.js 20 or newer** — Check with `node --version`
- **pnpm** — Install with `sudo npm install -g pnpm`
- **A Telegram bot token** — Get one from [@BotFather](https://t.me/BotFather) on Telegram

### Step-by-Step Setup

```bash
# 1. Clone the repo
git clone https://github.com/edriso/num-ninjas.git
cd num-ninjas

# 2. Install dependencies
pnpm install

# 3. Set up your environment file
cp .env.example .env
# Now open .env and fill in:
#   BOT_TOKEN=your_token_from_botfather
#   ADMIN_TELEGRAM_ID=your_telegram_id (get it from @userinfobot)

# 4. Create the database and fill it with data
pnpm db:push        # Creates all tables in SQLite
pnpm db:generate    # Generates the Prisma client code
pnpm db:seed        # Seeds 5 levels, 35 topics, 420 questions, badges, settings

# 5. Start the bot!
pnpm dev
```

You should see:
```
[INFO] NumNinjas starting...
[INFO] Prepared 3 questions for الحزام الأبيض
[INFO] Prepared 3 questions for الحزام الأصفر
...
[INFO] Scheduler started with 7 jobs (Cairo time)
[INFO] Bot is running! Press Ctrl+C to stop.
```

Now open Telegram, find your bot, and send `/start`!

### Development Commands

| Command | What It Does |
|---|---|
| `pnpm dev` | Starts the bot with hot reload — auto-restarts when you save a file |
| `pnpm build` | Compiles TypeScript to JavaScript (into `dist/` folder) |
| `pnpm lint` | Checks your code for problems |
| `pnpm format` | Auto-formats your code with Prettier |
| `pnpm db:push` | Applies schema changes to the database |
| `pnpm db:generate` | Regenerates the Prisma client after schema changes |
| `pnpm db:seed` | Fills the database with levels, topics, questions, badges |
| `pnpm db:reset` | **Deletes everything** and re-seeds (dev only!) |

---

## Deploying to Production (Hostinger VPS)

### What Changes in Production

| Thing | Development | Production |
|---|---|---|
| Database | SQLite (file) | MySQL |
| How to run | `pnpm dev` (hot reload) | `pnpm start` (compiled JS) |
| Database URL | `file:./dev.db` | `mysql://user:pass@localhost:3306/numninja` |

### Step-by-Step Production Setup

```bash
# 1. SSH into your VPS
ssh user@your-vps-ip

# 2. Install Node.js 20+ and pnpm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pnpm

# 3. Clone and install
git clone https://github.com/edriso/num-ninjas.git
cd num-ninjas
pnpm install

# 4. Set up production .env
cp .env.example .env
# Edit .env:
#   BOT_TOKEN=your_production_bot_token
#   ADMIN_TELEGRAM_ID=your_telegram_id
#   DATABASE_URL=mysql://user:password@localhost:3306/numninja

# 5. Switch Prisma to MySQL
#    In prisma/schema.prisma, change:
#      provider = "sqlite"
#    to:
#      provider = "mysql"

# 6. Install MySQL adapter (and remove SQLite one)
pnpm remove @prisma/adapter-better-sqlite3
pnpm add @prisma/adapter-mysql2

# 7. Update src/db/prisma.ts — replace better-sqlite3 with mysql2:
#    import { PrismaMysql2 } from '@prisma/adapter-mysql2';
#    const adapter = new PrismaMysql2({ url: process.env.DATABASE_URL });

# 8. Update prisma/seed.ts — same change as above

# 9. Create database and seed
pnpm db:push
pnpm db:generate
pnpm db:seed

# 10. Build and start
pnpm build
pnpm start
```

### Keeping It Running (PM2)

```bash
# Install PM2 (process manager)
sudo npm install -g pm2

# Start the bot with PM2
pm2 start dist/index.js --name numninja

# Make it restart on server reboot
pm2 startup
pm2 save

# Useful PM2 commands
pm2 status           # See if the bot is running
pm2 logs numninja    # See bot logs
pm2 restart numninja # Restart the bot
pm2 stop numninja    # Stop the bot
```

---

## Levels & Topics (Curriculum)

The bot covers Egyptian primary math curriculum (grades 4–6), organized into 5 difficulty tiers. Each level has 7 topics with 12 questions each (420 total).

### 🥋 Level 1 — الحزام الأبيض (White Belt — Confidence Builder)

> For kids just starting out. Basic operations with simple numbers.

| # | Topic (Arabic) | Topic (English) | What It Covers |
|---|---|---|---|
| 1 | الجمع والطرح | Addition & Subtraction | Multi-digit addition/subtraction, carrying, borrowing |
| 2 | الضرب | Multiplication | Times tables, 2-3 digit multiplication |
| 3 | القسمة والباقي | Division with Remainders | Basic division, understanding remainders |
| 4 | حس الأعداد | Number Sense | Place value, rounding, comparing numbers |
| 5 | خصائص الأعداد | Number Properties | Even/odd, factors, multiples |
| 6 | مقدمة الكسور | Intro to Fractions | Reading fractions, equivalent fractions, comparing |
| 7 | القياس والوحدات | Measurement | Length (m/cm), weight (kg/g), capacity (L/mL) |

**Sample context:** _"رحت الكانتين واشتريت ساندويتش بـ 15 جنيه وعصير بـ 7 جنيه. كام المجموع؟"_

### 🟡 Level 2 — الحزام الأصفر (Yellow Belt — Building Skills)

> Fractions, decimals, and patterns. Moving beyond basic arithmetic.

| # | Topic (Arabic) | Topic (English) | What It Covers |
|---|---|---|---|
| 1 | جمع وطرح الكسور | Add/Subtract Fractions | Same denominator fractions |
| 2 | الأعداد العشرية | Decimals | Reading, comparing, place value |
| 3 | جمع وطرح العشرية | Add/Subtract Decimals | Decimal addition and subtraction |
| 4 | الوقت والمواعيد | Time Calculations | Duration, schedules, 12/24-hour format |
| 5 | المحيط والمساحة | Perimeter & Area | Rectangles and squares |
| 6 | التقدير والتقريب | Estimation | Rounding, approximating results |
| 7 | الأنماط والتسلسلات | Patterns & Sequences | Find the pattern, what comes next? |

**Sample context:** _"الأتوبيس بيوصل المدرسة الساعة 7:35 والرحلة 45 دقيقة. لازم تطلع من البيت الساعة كام؟"_

### 🟠 Level 3 — الحزام البرتقالي (Orange Belt — Mastery)

> Advanced fractions, decimal operations, and real-world money math.

| # | Topic (Arabic) | Topic (English) | What It Covers |
|---|---|---|---|
| 1 | الكسور المختلفة المقامات | Unlike Denominator Fractions | Add/subtract with different denominators |
| 2 | ضرب الكسور | Multiplying Fractions | Fraction × whole number, fraction × fraction |
| 3 | قسمة الكسور | Dividing Fractions | Fraction ÷ whole number, reciprocal method |
| 4 | الأعداد الكسرية | Mixed Numbers | Mixed ↔ improper conversion, operations |
| 5 | ضرب وقسمة العشرية | Multiply/Divide Decimals | Decimal operations with real prices |
| 6 | ترتيب العمليات | Order of Operations | BODMAS — brackets, multiply before add |
| 7 | المال والأعمال | Money Math | Profit, loss, budgets, business scenarios |

**Sample context:** _"فتحت كشك عصير. بتشتري البرتقال بـ 40 جنيه وتبيع 10 كوبايات بـ 8 جنيه. كام الربح؟"_

### 🟢 Level 4 — الحزام الأخضر (Green Belt — Expert)

> Percentages, intro to algebra, and speed/distance/time.

| # | Topic (Arabic) | Topic (English) | What It Covers |
|---|---|---|---|
| 1 | النسبة والتناسب | Ratio & Proportion | Recipe scaling, map scales, sharing |
| 2 | النسبة المئوية | Percentages | Finding %, exam scores, battery level |
| 3 | تطبيقات النسبة المئوية | % Applications | Discounts, price increase/decrease, VAT |
| 4 | مقدمة الجبر | Intro to Algebra | Variables, expressions, "think of a number" |
| 5 | المعادلات البسيطة | Simple Equations | One-step: x + 5 = 12, 3x = 24 |
| 6 | السرعة والمسافة والزمن | Speed/Distance/Time | Cairo → Alex, train problems |
| 7 | المتوسط الحسابي | Averages (Mean) | Exam score averages, game scores |

**Sample context:** _"محل هدوم عامل خصم 25% على تيشيرت بـ 120 جنيه. هتدفع كام؟"_

### ⬛ Level 5 — الحزام الأسود (Black Belt — Legend)

> The hardest level. Exponents, probability, and math puzzles.

| # | Topic (Arabic) | Topic (English) | What It Covers |
|---|---|---|---|
| 1 | الأسس والقوى | Powers & Exponents | Squares, cubes, 2³ = 8 |
| 2 | العوامل المشتركة والمضاعفات | GCD & LCM | Greatest common divisor, least common multiple |
| 3 | الأعداد السالبة | Negative Numbers | Temperature, underground floors, debt |
| 4 | الاحتمالات | Simple Probability | Dice, coins, colored balls in a bag |
| 5 | الحجم | Volume | Cubes, rectangular prisms (fish tanks, boxes) |
| 6 | المعادلات المتقدمة | 2-Step Equations | 2x + 3 = 15, age & money puzzles |
| 7 | ألغاز رياضية | Math Puzzles & Logic | Find the missing number, sequences |

**Sample context:** _"رميت نرد. إيه احتمال إنه يطلع رقم أكبر من 4؟"_

---

## Bot Commands

### For Students/Parents
| Command | What It Does |
|---|---|
| `/start` | Start the bot or go back to the main menu |
| `/profile` | See your name, level, points, streak, and badges |
| `/rank` | See this week's leaderboard |
| `/hall` | See the hall of fame (monthly/yearly winners) |
| `/streak` | Check your current daily streak |
| `/level` | Change your difficulty level |
| `/addchild` | Add a new child profile (max 5) |
| `/switch` | Switch between child profiles |
| `/players` | See all registered profiles |
| `/help` | Show all available commands |

### For Admins Only
| Command | What It Does |
|---|---|
| `/admin_send` | Manually send today's questions to all users |
| `/admin_prepare` | Manually prepare today's question selection |
| `/admin_stats` | See bot statistics (users, attempts, completions) |

---

## Daily Schedule (Cairo Time)

| Time | What Happens |
|---|---|
| 12:00 AM (00:00) | Reset streaks for users who didn't play yesterday |
| 12:30 AM (00:30) | Pick 3 random questions per level for today |
| 2:30 PM (14:30) | Send the first question to all users |
| 7:30 PM (19:30) | Remind users who haven't finished (after Maghrib) |
| Sunday 11:00 PM | Calculate weekly leaderboard + award badges |
| Last day of month 11:00 PM | Monthly hall of fame awards |
| December 31 11:00 PM | Yearly champion awards |

---

## Project Structure

```
num-ninjas/
├── prisma/
│   ├── schema.prisma            # Database tables definition
│   ├── seed.ts                  # Main seed script (runs all seeds)
│   ├── seeds/                   # Seed data files
│   │   ├── levels-and-topics.ts # 5 levels + 35 topics
│   │   ├── questions-level1.ts  # 84 questions for White Belt
│   │   ├── questions-level2.ts  # 84 questions for Yellow Belt
│   │   ├── questions-level3.ts  # 84 questions for Orange Belt
│   │   ├── questions-level4.ts  # 84 questions for Green Belt
│   │   └── questions-level5.ts  # 84 questions for Black Belt
│   └── generated/               # Auto-generated Prisma client (don't edit!)
│
├── src/
│   ├── index.ts                 # Entry point — starts everything
│   ├── config.ts                # Reads .env file
│   ├── types.ts                 # Shared TypeScript types
│   │
│   ├── bot/                     # Telegram bot logic
│   │   ├── index.ts             # Bot setup + registers all handlers
│   │   ├── middleware/
│   │   │   └── session.ts       # Tracks active profile + conversation state
│   │   ├── handlers/
│   │   │   ├── start.ts         # /start command + onboarding flow
│   │   │   ├── question.ts      # Sending questions + processing answers
│   │   │   ├── profile.ts       # /addchild, /switch, /players
│   │   │   ├── commands.ts      # /profile, /rank, /hall, /streak, /level
│   │   │   └── admin.ts         # Admin-only commands
│   │   ├── keyboards/
│   │   │   ├── level.ts         # Level selection buttons
│   │   │   ├── mcq.ts           # Answer buttons + hint button
│   │   │   └── profile.ts       # Profile picker buttons
│   │   └── messages/
│   │       └── arabic.ts        # ALL Arabic text lives here
│   │
│   ├── services/                # Business logic
│   │   ├── account.service.ts   # Create/find accounts and profiles
│   │   ├── question.service.ts  # Get today's questions for a level
│   │   ├── session.service.ts   # Track daily progress (0/3 → 3/3)
│   │   ├── attempt.service.ts   # Record answers + update points
│   │   ├── validation.service.ts# Check if answers are correct
│   │   ├── ranking.service.ts   # Calculate leaderboards
│   │   ├── badge.service.ts     # Award badges for achievements
│   │   └── setting.service.ts   # Read configurable settings from DB
│   │
│   ├── jobs/                    # Scheduled tasks (cron jobs)
│   │   ├── scheduler.ts         # Starts all cron jobs
│   │   ├── prepare-questions.ts # Picks 3 questions per level daily
│   │   ├── send-first.ts        # Sends first question to everyone
│   │   ├── send-reminder.ts     # Evening reminder for incomplete users
│   │   ├── reset-streaks.ts     # Resets streaks at midnight
│   │   ├── weekly-ranking.ts    # Sunday night leaderboard
│   │   ├── monthly-ranking.ts   # End-of-month hall of fame
│   │   └── yearly-ranking.ts    # December 31 yearly awards
│   │
│   ├── db/
│   │   └── prisma.ts            # Database connection (singleton)
│   │
│   └── utils/                   # Helper functions
│       ├── arabic-numerals.ts   # Converts ٠١٢ → 012, handles fractions
│       ├── cairo-time.ts        # Cairo timezone helpers
│       ├── logger.ts            # Console logging with timestamps
│       └── shuffle.ts           # Randomize arrays (for MCQ options)
│
├── .env.example                 # Template for environment variables
├── CLAUDE.md                    # Instructions for AI assistants
├── README.md                    # This file!
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── prisma.config.ts             # Prisma 7 configuration
```

---

## How to Add More Questions

Questions live in `prisma/seeds/questions-levelX.ts` files. Each question looks like this:

**MCQ question:**
```typescript
{
  topicIndex: 1,                    // Which topic (1-7) within the level
  questionType: 'mcq',
  realLifeContext: '🛒 رحت السوبر ماركت واشتريت عصير بـ 15 جنيه وشيبسي بـ 8 جنيه.',
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
```

**Open-ended question:**
```typescript
{
  topicIndex: 1,
  questionType: 'open_ended',
  realLifeContext: '🏫 في الفصل عندك 24 طالب، راح منهم 7 في الفسحة.',
  questionText: 'كام طالب فاضل في الفصل؟',
  correctAnswer: '17',
  correctAnswerNumeric: 17,
  hintText: 'اطرح عدد اللي راحوا من المجموع',
  explanation: '24 - 7 = 17 طالب',
}
```

After adding questions, run `pnpm db:reset` to reload everything.

---

## Database Tables

| Table | What It Stores |
|---|---|
| `accounts` | Telegram users (by telegram_id) |
| `users` | Child profiles (nickname, level, points, streak) |
| `levels` | The 5 ninja belt levels |
| `topics` | 35 topics across all levels |
| `questions` | 420 math questions |
| `options` | MCQ answer choices (4 per MCQ question) |
| `scheduled_questions` | Today's 3 selected questions per level |
| `study_sessions` | Daily progress tracking (questions sent/answered) |
| `question_attempts` | Every answer a student gives |
| `badges` | Badge definitions (weekly rank, monthly, achievements) |
| `user_badges` | Badges earned by students |
| `settings` | Configurable app settings (times, points, etc.) |

---

## License

MIT
