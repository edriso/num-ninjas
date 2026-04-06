# Future Ideas — نينجا الأرقام

Ideas for future development, ordered by impact. Check off items as they're implemented.

---

## High Impact — Should Do

### Admin Analytics Dashboard
Replace the simple stats cards with proper charts:
- Daily active users over 30 days (line chart)
- Completion rate by level (bar chart)
- Most-failed topics (highlight weak areas in the curriculum)
- Question difficulty distribution (identify too-easy or too-hard questions)

**How:** Add `recharts` back to the web app. Create aggregate queries in the database package.

---

### Broadcast Command
Let the admin send a message to all users from Telegram:
```
/admin_broadcast مسابقة خاصة يوم الجمعة! 🎉
```
Also post to the @NumNinjas channel.

**How:** New handler in `admin.ts`, iterate all accounts, send via `bot.api.sendMessage`. Add rate limiting (Telegram allows ~30 messages/second).

---

### Question Images
The schema already has `imageUrl` on questions, but no questions use it.
Visual questions (geometry, graphs, clock faces) would make levels 3-5 much more engaging.

**How:** Upload images to Cloudflare R2 or a simple `/public` folder. The bot sends them with `ctx.replyWithPhoto()`. The website shows them in `<img>` tags.

---

## Medium Impact — Nice to Have

### Unlockable Fun Facts
After completing a daily session, show a random math fun fact or joke:
- "هل تعلم أن الصفر اخترعه العرب؟ 🌟"
- "كلمة 'الجبر' عربية الأصل — من كتاب الخوارزمي! 📚"

**How:** A simple `funFacts` array in a new file. Show one randomly after the daily summary. Optionally, unlock new facts as the kid earns more points.

---

### Streak Recovery
Currently, missing one day resets the streak to 0. This is harsh for kids.
Consider a "freeze" system: earn a streak freeze every 7 days, which protects one missed day.

**How:** Add `streakFreezes` field to User model. The `reset-streaks.ts` job checks if user has a freeze before resetting. Deduct one freeze instead of resetting.

---

### Topic Progress in Profile
Show per-topic progress in the `/profile` command:
```
📊 تقدمك في الحزام الأصفر:
✅ الكسور — 90% (ممتاز!)
🟡 الأعداد العشرية — 65% (جيد)
🔴 الوقت والمواعيد — 40% (يحتاج تمرين)
```

**How:** Use `getTopicStrengths()` from `topic-strength.service.ts` (already exists). Format and display in the profile handler.

---

### Parents-Only Group (after scale)
Once the community reaches ~500+ users, create a Telegram group for parents:
- Share tips on helping kids with math
- Discuss the curriculum
- Admins answer questions

**Do NOT** create a kids group — moderation risk with 10-12 year olds.

---

### More Languages
- French for North Africa (Morocco, Tunisia, Algeria)
- Urdu for Pakistan (large Muslim market, similar curriculum)

**How:** Add a new dictionary file + message file. The pattern is established.

---

## Lower Priority — Future Vision

### Class/School Mode
A teacher creates a "class" and adds students. They see a class leaderboard and can assign specific topics.

### Parent-Child Linking
Currently, profiles are managed within one Telegram account. Consider a system where a parent can link to their child's separate Telegram account.

### Voice Questions
Send audio questions (narrated math word problems) for younger kids who struggle with reading.

### Competitions
Scheduled live competitions where all Level 3 kids compete simultaneously on the same 5 questions within a 10-minute window.

### Mobile App
If the bot outgrows Telegram, build a dedicated mobile app with offline support, animations, and sound effects.

---

## Implemented (Archive)

These were planned features that have been built:

- [x] Adaptive difficulty — per-user question selection based on weak topics
- [x] Spaced repetition — smart question repeat intervals (2/5/14 days)
- [x] Onboarding quiz — 3 diagnostic questions auto-detect level
- [x] Skip button — skip too-hard questions
- [x] Retry button — practice wrong answers without losing points
- [x] Level completion flow — celebration + suggest next level
- [x] Parent weekly report — Sunday Telegram summary per child
- [x] Per-level rankings — fair leaderboards within same difficulty
- [x] Admin questions CRUD — full create/edit/delete with filters
- [x] Admin settings/topics/levels/badges CRUD
- [x] Telegram channel auto-posting (weekly/monthly/yearly rankings)
- [x] Spacetoon Arabic — warm MSA text for all Arab kids
- [x] 161 unit tests — vitest for all shared logic
- [x] Shareable certificates — auto-generated images for level completion + profile OG
- [x] Username system — unique usernames for shareable profile URLs
- [x] Parent-first UX — safety message, topic names in summary, "next week focus" in reports
- [x] Share button — Telegram share on profile page
- [x] Accuracy-first weekly ranking — wrongCount ASC instead of correctCount DESC
- [x] Transaction safety — recordAttemptAndProgress wraps attempt + session in $transaction
- [x] Full i18n (Arabic + English) — bot messages, website dictionaries, auto-detection, /language command, footer switcher
- [x] i18n-ready DB columns — nameEn/descriptionEn on levels, topics, badges, settings
- [x] Performance indexes — 6 indexes on high-query tables
- [x] English question bank — 420 questions matching Arabic (840 total)
