# The Story Behind NumNinjas

## It started with a simple observation

Kids struggle with math. Not because they aren't smart, but because math feels boring to them. The textbook problems have no connection to their actual lives. "A train leaves station A at 60 km/h" means nothing to a 10-year-old in Cairo.

But ask a kid "you have 50 pounds and want to buy juice for 15 and an apple for 8, how much do you have left?" and suddenly they're in. They're doing math without even realizing it. The numbers are the same. The context is what pulls them in.

That's where the idea came from. What if there was something that sent kids a few math questions every day, using scenarios from their real world? Shopping at the supermarket. Splitting Eid money. Calculating the metro ride. Things they actually do.

## Why Telegram?

Building a mobile app sounded like the obvious move. But thinking about it more, it's actually a terrible first move.

Every parent in Egypt already has Telegram on their phone. No download, no signup, no "allow notifications" popup, no convincing anyone to install yet another app. The kid opens Telegram, taps start, and they're solving math problems in 30 seconds.

Zero friction. That matters more than a fancy UI when you're trying to reach kids who might not have the latest phone or the fastest internet.

## The ninja theme

Kids this age love two things: competition and leveling up. Every game they play has ranks, badges, and leaderboards. So why not make math feel the same way?

The ninja belt system clicked immediately. White belt for beginners, yellow for those building skills, all the way up to black belt for the legends. Every kid wants to be a black belt. Now they have to earn it through math.

When we tested the concept with a few kids, the first thing they asked wasn't "what kind of math" but "how do I get to black belt?" That told us the framing was right.

## 3 questions a day, not 30

This was a deliberate choice. We didn't want kids to feel overwhelmed or to rush through questions just to finish. Three questions is small enough that it feels doable, but consistent enough that over a month you've practiced 90 problems without even noticing.

The questions arrive at 2:30 PM, after school is done and lunch is over. A reminder goes out at 7:30 PM for anyone who forgot. Just a gentle nudge, not a guilt trip.

The idea is that math becomes a daily habit, like brushing your teeth. You don't even think about it after a while. You just open Telegram, answer three questions, and go on with your day.

## Making it personal

Early on we realized that sending the same three questions to every kid doesn't work. A kid struggling with fractions needs more fraction practice, not more addition. A kid who's mastered multiplication shouldn't keep getting easy problems just because they're on the same level as someone who hasn't.

So each kid gets different questions based on what they personally find hard. The system tracks which topics they get wrong and gives them more of those. Not in a punishing way, just quietly making sure they practice what they need most.

Questions they got wrong come back after 2 days. Questions they got right with a hint come back after 5 days. Questions they nailed come back after 2 weeks. It's the same idea behind how language learning apps work, just applied to math.

## The parent angle

Here's something we learned quickly: parents are the real decision makers. A kid doesn't install a Telegram bot on their own. A parent does it for them, or at least approves it.

So the bot had to earn the parent's trust from the first message. That's why the welcome screen explicitly says "this bot is completely safe, it doesn't ask for personal data, and you'll receive weekly progress reports."

Every Sunday evening, parents get a summary for each child: how many questions they answered, their accuracy percentage, their streak, and what topics the bot will focus on next week. Parents love knowing what's coming. It makes them feel like the bot has a plan, not just random questions.

The profile page on the website has a share button. One tap and the parent can share their kid's progress on WhatsApp. "Look what Ahmed achieved this week." That's not just a feature, that's how the word spreads.

## The language choice

This one took some thought. The first instinct was Egyptian Arabic since the bot is for Egyptian kids. But Egyptian dialect excludes kids in other Arab countries. And formal Arabic (fusha) feels like a textbook, which is exactly what we're trying to avoid.

We ended up going with what we call Spacetoon Arabic. If you grew up in the Arab world, you know Spacetoon, the channel that dubbed cartoons like Naruto and Dragon Ball Z. Their Arabic was warm and accessible. Not formal, not dialect. Every Arab kid understood it regardless of which country they were in.

That's the tone we use. "أحسنت" instead of "برافو". "هيا نبدأ" instead of "يلا". Simple, energetic, and understood from Cairo to Riyadh to Casablanca.

## Why not just use Khan Academy?

Khan Academy is incredible and we're fans. But it's in English or formal Arabic, it covers everything from kindergarten to college, and it requires a kid to sit at a screen and navigate through videos and exercises.

NumNinjas does one thing: 3 daily math questions on Telegram for ages 10 to 12, in a language that feels like a friend talking to you, with scenarios from your actual life. That focus is the whole point.

A kid doesn't need another learning platform. They need something that fits into the 5 minutes between finishing homework and going outside to play.

## The tech behind it

We built this as a monorepo with two apps sharing one database. The Telegram bot handles all the kid-facing interaction. The website shows public leaderboards, player profiles, and has an admin panel for managing questions.

Both apps talk to the same MySQL database. Both deploy automatically from the same GitHub repo. Push once, everything updates.

The bot runs on Railway. The website runs on Hostinger. Cloudflare sits in front for SSL and CDN. Total cost: about $5 a month after the free tier runs out.

We chose this stack because it's boring and reliable. Grammy for Telegram because it has great TypeScript support. Next.js for the website because server components make data fetching simple. Prisma for the database because type-safe queries catch bugs before they reach kids.

## What's next

The bot has 420 questions across 35 topics and 5 levels. That's enough for several months of daily practice without repeating. But the question bank needs to keep growing.

We want to add shareable certificates, the kind of image a parent screenshots and sends to the family WhatsApp group. "Ahmed completed the Yellow Belt!" That's free marketing that money can't buy.

There's also a Telegram channel (@NumNinjas) where weekly leaderboards and monthly hall of fame results get posted automatically. Parents subscribe, see their kid's name, share it around. That's the growth loop.

Long term? If this works in Egypt, the same model works anywhere Arabic is spoken. Same questions, same bot, same Spacetoon Arabic. 400 million Arabic speakers and most of their kids have access to Telegram.

But first things first. Let's see if the first few kids show up.

## Where it goes from here

Right now the bot works. The questions are there. The leaderboards are there. The adaptive difficulty, the spaced repetition, the parent reports, all of it.

But the real test isn't whether the code runs. It's whether a kid opens Telegram, sees three math questions waiting, and actually wants to solve them. Whether a parent checks the weekly report and feels like their child is making progress. Whether a teacher hears about it and thinks "my students could use this."

That's what we're about to find out.

Bismillah.

---

<div dir="rtl">

# القصة بالعربي

## البداية

الرياضيات مادة الطلبة يا بتحبها يا لأ. تقريبا مفيش نص نص. واللي بيحبها غالباً حبها عشان مدرس حببه فيها. واللي كرهها غالباً كرهها عشان محدش وصّلهاله صح.

الفكرة بدأت من ملاحظة بسيطة: لو قلت لطفل "احسب ناتج 50 - 15 - 8" هيبص لك. بس لو قلتله "معاك 50 جنيه ونزلت تشتري عصير بـ 15 وتفاح بـ 8، فاضل معاك كام؟" هيدخل في عالم الرياضيات ويحسبها. نفس المسألة. بس السياق هو اللي سحبه جوا.

## الرياضيات مش مجرد مادة

الرياضيات أسلوب حياة وكلنا بنعمل حسابات باستمرار من غير ما ناخد بالنا. في أجرة المواصلات. لما نشوف أنهي طريق أقصر. في المطبخ لما نعمل أكلات بالتوازي عشان نخلص أسرع. لما نسخن مية ونعمل حاجة تانية خلال الوقت عشان نكسب وقت. لما نقارن بين أسعار قبل ما نشتري.

عشان كده ربطنا الأسئلة بمواقف حياتية حقيقية. مش أرقام في الهوا.

## ليه تيليجرام مش أبليكيشن؟

فكرة البوت على تيليجرام أحسن من أبليكيشن أو ويبسايت لسبب بسيط: المستخدم مش محتاج ينزّل حاجة. تيليجرام على فونه أصلاً. يفتح البوت، يضغط start، ويبدأ يحل. في 30 ثانية الطفل بيحل رياضيات.

وتيليجرام منتشر في مصر أكتر من ديسكورد، فكان الاختيار الطبيعي.

## فكرة المنهج

كان فيه طريقين:

الأول: نمشي على المنهج الدراسي بالظبط. دي فكرة حلوة بس محتاجة تيم كبير فيه مدرسين، والمنهج بيتحدث، ومحتاجة ماركتنج بين المدارس ومسابقات.

التاني: نحدد مواضيع ومسائل مبنية على المنهج بس مش مربوطة بيه حرفياً. الأساسيات اللي كل طفل محتاجها: جمع، طرح، ضرب، قسمة، كسور، نسبة مئوية، جبر بسيط.

الطريق التاني كان الأنسب عشان نقدر نبدأ ونطلّع حاجة شغالة بسرعة.

## مين اللي بيستخدم البوت؟

دي كانت نقطة فكرنا فيها كتير. هل المستخدم ولي الأمر ولا الطفل نفسه؟

المفروض السن ده ميكونش معاه فون. بس الواقع إن أغلبهم معاهم. فقررنا إن الحساب يكون لولي الأمر ويقدر يضيف لحد 5 أطفال عليه. كل طفل ليه بروفايل مستقل باسمه ومستواه ونقاطه.

كده ولي الأمر مسيطر على الحساب، وكل طفل عنده تجربته الخاصة.

## اللغة

أول فكرة كانت مصري خالص. بس المصري بيستبعد أطفال من بلاد تانية. والفصحى حاسسها زي الكتاب المدرسي. اللي هو بالظبط اللي بنحاول نهرب منه.

الحل كان لغة سبيستون. لو كبرت في الوطن العربي، أكيد تعرف سبيستون. اللغة بتاعتهم كانت دافية ومفهومة. مش رسمية ومش عامية. كل طفل عربي كان بيفهمها.

## الـ AI والكود

الـ AI سهّل الكود فعلاً. بس اللي خد الوقت الحقيقي هو التفكير. شكل التطبيق يكون إزاي. قاعدة البيانات تتصمم إزاي. الجداول والعلاقات بينها. تجربة المستخدم تكون إزاي. دي الحاجات اللي محدش يقدر يعملها غيرك.

## اللي بعد كده

البوت شغال. الأسئلة موجودة. الترتيب والأوسمة والتقارير، كله جاهز.

بس الامتحان الحقيقي مش هل الكود شغال ولا لأ. الامتحان الحقيقي هل طفل هيفتح تيليجرام ويلاقي 3 أسئلة مستنياه وفعلاً يحب يحلهم. هل ولي أمر هيشوف التقرير الأسبوعي ويحس إن ابنه بيتقدم. هل مدرس هيسمع عن البوت ويقول "ده هينفع طلبتي."

ده اللي هنعرفه قريب إن شاء الله.

بسم الله، ونسأل الله التوفيق والسداد والنفع 🤍

</div>
