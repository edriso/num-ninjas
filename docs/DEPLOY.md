# Deployment Guide — نينجا الأرقام

A step-by-step guide to get NumNinjas live. No prior deployment experience needed.

---

## What You're Setting Up

```
You push code to GitHub
        ↓
Hostinger auto-deploys the website    (numninjas.com)
Railway auto-deploys the bot          (always running)
Both connect to the same MySQL on Hostinger
Cloudflare handles your domain + SSL + CDN
```

| Part | Where | What It Does |
|------|-------|-------------|
| Website | Hostinger Business | The public site + admin panel |
| Bot | Railway | The Telegram bot (always running) |
| Database | Hostinger MySQL | Shared by both website and bot |
| Domain + SSL | Cloudflare | Makes your site fast and secure |
| Bot account | Telegram @BotFather | The bot users talk to |
| Channel | Telegram | Where leaderboards get posted |

---

## Step 1: Create the Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Pick a name: `نينجا الأرقام` (this is the display name)
4. Pick a username: `NumNinjasBot` (must end in "Bot")
5. BotFather gives you a **token** like `8686082436:AAFLILHq...`
6. **Save this token** — you'll need it later

### Set the bot's profile
Send these commands to @BotFather:
```
/setdescription
  → Pick your bot
  → Type: بوت لتعليم الرياضيات للأطفال بطريقة ممتعة 🥷

/setabouttext
  → Pick your bot
  → Type: نينجا الأرقام — 3 أسئلة رياضيات يومياً مع تحديات وأوسمة!

/setuserpic
  → Pick your bot
  → Upload a ninja-themed profile picture
```

### Set the bot's commands
Send `/setcommands` to @BotFather, pick your bot, then paste this **exactly**:

```
start - Start / ابدأ
profile - My profile / ملفي الشخصي
rank - Leaderboard / الترتيب
players - Players / اللاعبون
settings - Settings / الإعدادات
help - Help / المساعدة
```

This creates the command menu that appears when users tap the `/` button or the menu icon in Telegram.

> **Note:** `/language`, `/privacy`, `/level`, `/streak`, `/hall`, `/addchild`, `/switch` all still work when typed — they're just not in the menu to keep it clean. Admin commands (`admin_send`, `admin_prepare`, `admin_stats`) are also hidden.

### Get your Telegram ID
1. Search for **@userinfobot** on Telegram
2. Send it any message
3. It replies with your user ID (a number like `5422369364`)
4. **Save this number** — it's your ADMIN_TELEGRAM_ID

---

## Step 2: Create the Telegram Channel

1. In Telegram, tap the pencil icon → "New Channel"
2. Name: `نينجا الأرقام`
3. Username: `NumNinjas` (this becomes t.me/NumNinjas)
4. Make it **Public**
5. Add your bot as an **administrator** to the channel:
   - Open channel settings → Administrators → Add Administrator
   - Search for `@NumNinjasBot`
   - Give it permission to "Post Messages"
6. Save the channel username — you'll set `CHANNEL_USERNAME=@NumNinjas` later

---

## Step 3: Set Up Hostinger MySQL Database

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com)
2. Go to **Databases** → **MySQL Databases**
3. Create a new database:
   - Database name: `num_ninjas`
   - Username: pick one (e.g., `numninja_admin`)
   - Password: generate a strong password
4. **Find the MySQL hostname:** Go to **Databases → Remote MySQL** — the hostname is shown at the top (e.g., `srv1304.hstgr.io`). This is NOT `localhost` — you must use this hostname in your DATABASE_URL.
5. **Save these credentials:**
   ```
   Host:     srvXXXX.hstgr.io  (from Remote MySQL page, NOT localhost)
   Port:     3306
   Database: num_ninjas
   Username: numninja_admin
   Password: the-password-you-set
   ```
6. Go to **Remote MySQL** and add:
   - `0.0.0.0/0` (allows all IPs — needed for Railway to connect)
   - OR add Railway's specific IP range if you prefer

Your DATABASE_URL will look like:
```
mysql://numninja_admin:your-password@srvXXXX.hstgr.io:3306/num_ninjas
```

> **Important:** Use only letters, numbers, `-`, `_`, `.` in your password. Special characters like `@` `&` `#` must be URL-encoded (`@` → `%40`, etc.).

---

## Step 4: Push Your Code to GitHub

If you haven't already:

```bash
# Create a new GitHub repo (go to github.com/new)
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/num-ninjas.git
git branch -M main
git push -u origin main
```

---

## Step 5: Deploy the Website on Hostinger

1. In hPanel, create a new website and connect your GitHub repo (`num-ninjas`)
2. Configure **Build and output settings**:
   - **Framework preset**: Other
   - **Branch**: `main`
   - **Node version**: 20.x
   - **Root directory**: `./`
   - **Build command**: select `pnpm run build:web` from the dropdown
   - **Package manager**: pnpm
   - **Output directory**: `apps/web/.next`
   - **Entry file**: `apps/web/.next/standalone/apps/web/server.js`

   > **Why these settings?** Hostinger doesn't have `pnpm` or `npx` in PATH for subprocesses. The `build:web` script in root package.json uses `node_modules/.bin/` paths directly. The standalone output bundles everything Next.js needs into a single server.js file. In monorepos, the standalone server.js is nested under the app's path.

3. Set **Environment Variables** in Hostinger:
   ```
   DATABASE_URL=mysql://your-user:your-password@srvXXXX.hstgr.io:3306/your_database
   AUTH_SECRET=generate-a-random-string-here
   NODE_ENV=production
   PORT=3000
   ```
   
   To generate AUTH_SECRET, run this on your computer:
   ```bash
   openssl rand -base64 32
   ```

   > **Password with special characters?** URL-encode them in DATABASE_URL: `@` → `%40`, `&` → `%26`, `#` → `%23`. Or use a password with only letters, numbers, `-`, `_`, `.` to avoid issues.

4. Click **Deploy** and wait for it to build
5. Your website should be live at your Hostinger domain!

### First-time database setup

**Recommended: use phpMyAdmin** (easiest on Hostinger):
1. Go to **Databases → phpMyAdmin** → **Enter phpMyAdmin**
2. Select your database
3. Click **Import** tab → upload `docs/schema.sql` → click **Go** (creates all tables)
4. Click **Import** tab → upload `docs/seed.sql` → click **Go** (seeds all data)

**Alternative: use SSH** (if Prisma CLI cooperates):
```bash
cd ~/domains/your-domain.com/nodejs
chmod +x packages/database/node_modules/.bin/prisma
chmod +x node_modules/.pnpm/@prisma+engines@*/node_modules/@prisma/engines/*
packages/database/node_modules/.bin/prisma db push --schema=packages/database/prisma/schema.prisma --url="mysql://USER:PASS@srvXXXX.hstgr.io:3306/DATABASE"
packages/database/node_modules/.bin/prisma db seed --schema=packages/database/prisma/schema.prisma
```

> **Note:** SSH on Hostinger shared hosting can be slow/unreliable for Prisma CLI. The phpMyAdmin approach is more reliable. The `chmod` commands are needed because Hostinger doesn't set execute permissions on installed binaries. Use the full `node_modules/.bin/prisma` path because `pnpm` and `npx` aren't in PATH.

---

## Step 6: Deploy the Bot on Railway

1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. Click **New Project** → **Deploy from GitHub Repo**
3. Select your `num-ninjas` repository
4. Railway will detect the monorepo. Configure:
   - Click on the service → **Settings**
   - **Root Directory**: `/` (repo root)
   - **Build Command**:
     ```
     pnpm install && pnpm db:generate && pnpm --filter bot build
     ```
   - **Start Command**:
     ```
     pnpm --filter bot start
     ```

5. Go to **Variables** tab and add:
   ```
   BOT_TOKEN=your-bot-token-from-botfather
   ADMIN_TELEGRAM_ID=your-telegram-id
   CHANNEL_USERNAME=@NumNinjas
   DATABASE_URL=mysql://numninja_admin:your-password@your-server.hostinger.com:3306/num_ninjas
   NODE_ENV=production
   ```
   
   Use the **same DATABASE_URL** as the website — both connect to the same MySQL.

6. Click **Deploy**
7. Wait for the build to finish
8. Check the logs — you should see:
   ```
   [INFO] NumNinjas starting...
   [INFO] Scheduler started with 8 jobs (Cairo time)
   [INFO] Bot is running!
   ```

9. Open Telegram, find your bot, send `/start` — it should respond!

---

## Step 7: Set Up Cloudflare (Domain + SSL)

1. Go to [cloudflare.com](https://cloudflare.com) and sign up (free)
2. Click **Add a site** → enter your domain (e.g., `numninjas.com`)
3. Choose the **Free** plan
4. Cloudflare shows you two nameservers (e.g., `ella.ns.cloudflare.com`)
5. Go to your domain registrar (Hostinger → Domains) and **change nameservers** to Cloudflare's
6. Wait 5-30 minutes for nameservers to propagate
7. Back in Cloudflare, add a DNS record:
   - **Type**: A
   - **Name**: `@` (or your domain)
   - **Content**: your Hostinger server IP (found in hPanel → Hosting → Server IP)
   - **Proxy**: ON (orange cloud)
8. Set **SSL/TLS encryption mode** to **Flexible** (SSL/TLS → Overview):
   - Hostinger's Node.js hosting doesn't have SSL on the origin server
   - Cloudflare handles HTTPS for visitors and connects to Hostinger over HTTP
   - Do NOT use "Full" or "Full (Strict)" — you'll get a 525 SSL handshake error
9. (Optional) Add a `www` CNAME record:
   - **Type**: CNAME, **Name**: `www`, **Content**: `numninjas.com`, **Proxy**: ON

---

## Step 8: Verify Everything Works

### Test the bot
- Open Telegram → find @NumNinjasBot → send `/start`
- Complete the onboarding quiz
- Answer today's questions
- Check `/profile`, `/rank`, `/help`

### Test the website
- Visit your domain (e.g., https://numninjas.com)
- Check the leaderboard, levels, ninja champions pages
- Log in to admin panel at `/admin/login`
  - Email: `admin@numninjas.com` (or whatever you set in ADMIN_EMAIL)
  - Password: `password` (default from seed.sql)
  - **Change this password immediately** — see "Changing the admin password" below

### Test the channel
- Wait for Sunday 11 PM Cairo time (or use `/admin_send` to trigger manually)
- Check that the weekly ranking appears in your @NumNinjas channel

### Changing the admin password

There's no password change screen in the app. Use **phpMyAdmin** to update it:

1. Generate a bcrypt hash of your new password. From the project root, run:
   ```bash
   node docs/generate-hash.js YOUR_NEW_PASSWORD
   ```
   Replace `YOUR_NEW_PASSWORD` with your actual password. It outputs a hash like `$2b$10$...`.

   **Or** use an online generator: https://bcrypt-generator.com — enter your password, use 10 rounds, and copy the hash.

2. Go to **hPanel → Databases → phpMyAdmin → Enter phpMyAdmin**
3. Select your database, click the **SQL** tab, and run:
   ```sql
   UPDATE admins SET password = '$2b$10$YOUR_HASH_HERE' WHERE email = 'admin@numninjas.com';
   ```
   Replace `$2b$10$YOUR_HASH_HERE` with the hash from step 1.

---

## Updating Your App

Every time you push to GitHub:
- **Hostinger** automatically rebuilds and redeploys the website
- **Railway** automatically rebuilds and redeploys the bot

```bash
# Make changes, then:
git add -A
git commit -m "feat: your change description"
git push
# Both platforms auto-deploy!
```

---

## Database Commands — What's Safe and What's Not

After your app is live with real users, be very careful with database commands.

### Safe to run anytime
| Command | What It Does | When to Use |
|---------|-------------|-------------|
| `pnpm db:generate` | Regenerates Prisma client code | After changing `schema.prisma` |

### Safe but be careful
| Command | What It Does | Risk |
|---------|-------------|------|
| `pnpm db:push` | Applies schema changes to the database | Adding new columns is safe. Renaming or removing columns **will lose data**. Always back up the database first. |

### NEVER run on production
| Command | What It Does | Why It's Dangerous |
|---------|-------------|--------------------|
| `pnpm db:reset` | **Deletes ALL data** and re-seeds | Destroys every user account, every answer, every badge. Only for local development. |
| `pnpm db:seed` | Inserts seed data (levels, questions, badges) | Uses upsert so it won't duplicate, but it will overwrite any changes you made to levels/badges/settings via the admin panel. |

### When you change the schema after launch

1. **Back up your database first** (Hostinger hPanel → Databases → Backups)
2. Run `pnpm db:push` to apply the schema change
3. Run `pnpm db:generate` to regenerate the Prisma client
4. Redeploy both apps (push to GitHub)

### If you need to add new questions after launch

Don't run `pnpm db:seed` — it would overwrite admin panel changes. Instead:
- Use the **admin panel** at `/admin/questions` to add questions one by one
- Or write a custom script that only inserts new questions without touching existing ones

---

## If Something Goes Wrong

### Bot not responding
1. Check Railway logs (Dashboard → your service → Logs)
2. Make sure BOT_TOKEN is correct
3. Make sure DATABASE_URL is accessible from Railway

### Website not loading
1. Check Hostinger build logs
2. Make sure DATABASE_URL is correct
3. Make sure the build command ran successfully

### Database connection errors
1. Check that Remote MySQL is enabled in Hostinger hPanel
2. Check that the IP is whitelisted (or 0.0.0.0/0 is set)
3. Test the connection string locally:
   ```bash
   # In your local project:
   DATABASE_URL="mysql://..." pnpm db:push
   ```

### "Permission denied" or build errors
1. Make sure pnpm is available on the server
2. Try running `pnpm approve-builds` if native modules fail

---

## Quick Reference — All Environment Variables

### apps/bot/.env (Railway)
```
BOT_TOKEN=8686082436:AAFLILHq...        # From @BotFather
ADMIN_TELEGRAM_ID=5422369364             # From @userinfobot
CHANNEL_USERNAME=@NumNinjas              # Your Telegram channel
DATABASE_URL=mysql://user:pass@host:3306/num_ninjas
NODE_ENV=production
```

### apps/web/.env.local (Hostinger)
```
DATABASE_URL=mysql://user:pass@host:3306/num_ninjas
AUTH_SECRET=a-random-32-char-string      # openssl rand -base64 32
NODE_ENV=production
```

### packages/database/.env (local dev only)
```
DATABASE_URL=mysql://numninjas:password@localhost:3306/numninjas
ADMIN_EMAIL=admin@numninjas.com
ADMIN_PASSWORD=changeme123
```
