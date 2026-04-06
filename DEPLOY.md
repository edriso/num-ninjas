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
4. **Save these credentials:**
   ```
   Host:     your-server.hostinger.com (shown on the database page)
   Port:     3306
   Database: num_ninjas
   Username: numninja_admin
   Password: the-password-you-set
   ```
5. Go to **Remote MySQL** and add:
   - `0.0.0.0/0` (allows all IPs — needed for Railway to connect)
   - OR add Railway's specific IP range if you prefer

Your DATABASE_URL will look like:
```
mysql://numninja_admin:your-password@your-server.hostinger.com:3306/num_ninjas
```

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

1. In hPanel, go to **Websites** → **Manage**
2. Go to **Advanced** → **Node.js** (or search for "Node.js")
3. Click **Create Application**
4. Configure:
   - **Node.js version**: 20 (or latest LTS)
   - **GitHub repository**: connect your GitHub account and select `num-ninjas`
   - **Branch**: `main`
   - **Root directory**: leave empty (repo root)
   - **Build command**:
     ```
     pnpm install && pnpm db:generate && pnpm --filter web build
     ```
   - **Start command**:
     ```
     pnpm --filter web start
     ```
   - **Port**: 3000

5. Set **Environment Variables** in Hostinger:
   ```
   DATABASE_URL=mysql://numninja_admin:your-password@your-server.hostinger.com:3306/num_ninjas
   AUTH_SECRET=generate-a-random-string-here
   NODE_ENV=production
   ```
   
   To generate AUTH_SECRET, run this on your computer:
   ```bash
   openssl rand -base64 32
   ```

6. Click **Deploy** and wait for it to build
7. Your website should be live at your Hostinger domain!

### First-time database setup
After the first deploy, you need to create the tables and seed data.
SSH into your Hostinger server (or use the terminal in hPanel):
```bash
cd /path/to/your/app
pnpm db:push
pnpm db:seed
```

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
8. Cloudflare will auto-enable **SSL** (HTTPS) — no extra setup needed

---

## Step 8: Verify Everything Works

### Test the bot
- Open Telegram → find @NumNinjasBot → send `/start`
- Complete the onboarding quiz
- Answer today's questions
- Check `/profile`, `/rank`, `/help`

### Test the website
- Visit your domain (e.g., https://numninjas.com)
- Check the leaderboard, levels, hall of fame pages
- Log in to admin panel at `/admin/login`
  - Email: `admin@numninjas.com` (or whatever you set in ADMIN_EMAIL)
  - Password: `changeme123` (or whatever you set in ADMIN_PASSWORD)
  - **Change this password immediately** via the database

### Test the channel
- Wait for Sunday 11 PM Cairo time (or use `/admin_send` to trigger manually)
- Check that the weekly ranking appears in your @NumNinjas channel

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
DATABASE_URL=file:./dev.db
ADMIN_EMAIL=admin@numninjas.com
ADMIN_PASSWORD=changeme123
```
