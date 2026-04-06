/**
 * Demo data seed — for development only!
 * Creates fake accounts, users, sessions, attempts, and badges
 * so you can see the website with realistic data.
 *
 * Run: pnpm db:seed:demo
 * Reset first: pnpm db:reset (then run this after)
 */
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

const NICKNAMES = [
  'أحمد', 'سارة', 'محمد', 'نور', 'ياسمين',
  'عمر', 'مريم', 'خالد', 'فاطمة', 'يوسف',
  'لينا', 'حسن', 'ريم', 'علي', 'دينا',
];

const USERNAMES = [
  'ahmed123', 'sara_ninja', 'moh99', 'nour_star', 'yasmin_math',
  'omar_champ', 'mariam22', 'khaled_pro', 'fatma_smart', 'youssef7',
  'lina_ace', 'hassan_q', 'reem_top', 'ali_ninja', 'dina_cool',
];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function daysAgo(n: number): Date {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  d.setUTCHours(14, 30, 0, 0);
  return d;
}

async function main() {
  console.log('🎭 Seeding demo data...\n');

  const levels = await prisma.level.findMany({ orderBy: { rankOrder: 'asc' } });
  const badges = await prisma.badge.findMany();
  const questions = await prisma.question.findMany({
    include: { options: true },
  });

  if (levels.length === 0 || questions.length === 0) {
    console.error('❌ Run pnpm db:seed first to create levels and questions');
    process.exit(1);
  }

  // Create 15 fake accounts + users across different levels
  const users: { id: number; levelId: number; nickname: string }[] = [];

  for (let i = 0; i < NICKNAMES.length; i++) {
    const telegramId = BigInt(1000000 + i);
    const levelId = levels[i % levels.length].id;
    const streakDays = randomInt(0, 30);
    const totalPoints = randomInt(50, 500);

    const account = await prisma.account.create({
      data: { telegramId },
    });

    const user = await prisma.user.create({
      data: {
        accountId: telegramId,
        nickname: NICKNAMES[i],
        username: USERNAMES[i],
        levelId,
        streakDays,
        totalPoints,
        lastActiveAt: daysAgo(randomInt(0, 3)),
      },
    });

    await prisma.account.update({
      where: { telegramId },
      data: { activeProfileId: user.id },
    });

    users.push({ id: user.id, levelId, nickname: NICKNAMES[i] });
  }
  console.log(`✅ ${users.length} demo users created`);

  // Create study sessions and question attempts for the last 14 days
  let totalSessions = 0;
  let totalAttempts = 0;

  for (const user of users) {
    const levelQuestions = questions.filter(
      (q) => q.topicId && levels.find((l) => l.id === user.levelId),
    );
    if (levelQuestions.length === 0) continue;

    // Random number of active days in the last 14 days
    const activeDays = randomInt(5, 14);
    const dayIndices = Array.from({ length: 14 }, (_, i) => i)
      .sort(() => Math.random() - 0.5)
      .slice(0, activeDays);

    for (const dayOffset of dayIndices) {
      const sessionDate = daysAgo(dayOffset);
      sessionDate.setUTCHours(0, 0, 0, 0);

      const session = await prisma.studySession.create({
        data: {
          userId: user.id,
          sessionDate,
          questionsSent: 3,
          questionsAnswered: 3,
          isComplete: true,
        },
      });
      totalSessions++;

      // 3 attempts per session
      for (let q = 0; q < 3; q++) {
        const question = levelQuestions[randomInt(0, levelQuestions.length - 1)];
        const isCorrect = Math.random() > 0.3; // 70% accuracy
        const hintUsed = !isCorrect && Math.random() > 0.5;

        const answeredAt = new Date(sessionDate);
        answeredAt.setUTCHours(14, 30 + q * 2, randomInt(0, 59));

        let userAnswer = '[demo]';
        if (question.options.length > 0) {
          const opt = isCorrect
            ? question.options.find((o) => o.isCorrect)
            : question.options.find((o) => !o.isCorrect);
          userAnswer = opt?.optionText || '[demo]';
        }

        await prisma.questionAttempt.create({
          data: {
            userId: user.id,
            questionId: question.id,
            userAnswer,
            isCorrect,
            hintUsed,
            answeredAt,
          },
        });
        totalAttempts++;
      }
    }
  }
  console.log(`✅ ${totalSessions} study sessions`);
  console.log(`✅ ${totalAttempts} question attempts`);

  // Award some badges
  let badgeCount = 0;
  const weekStart = daysAgo(7);
  weekStart.setUTCHours(0, 0, 0, 0);

  const monthStart = new Date();
  monthStart.setUTCDate(1);
  monthStart.setUTCHours(0, 0, 0, 0);

  // Weekly rank badges to top 3 users (by points, for simplicity)
  const topUsers = [...users].sort((a, b) => b.id - a.id).slice(0, 3);
  const weeklyBadges = badges.filter((b) => b.badgeType === 'weekly_rank');

  for (let i = 0; i < Math.min(topUsers.length, weeklyBadges.length); i++) {
    await prisma.userBadge.create({
      data: {
        userId: topUsers[i].id,
        badgeId: weeklyBadges[i].id,
        periodLabel: `أسبوع ${weekStart.toISOString().split('T')[0]}`,
        periodStart: weekStart,
        metricSummary: `${randomInt(15, 21)} صحيحة · ${randomInt(0, 3)} خطأ`,
      },
    });
    badgeCount++;
  }

  // Monthly category badges
  const monthlyBadges = badges.filter((b) => b.badgeType === 'monthly_rank');
  for (let i = 0; i < Math.min(3, monthlyBadges.length); i++) {
    const randomUser = users[randomInt(0, users.length - 1)];
    await prisma.userBadge.create({
      data: {
        userId: randomUser.id,
        badgeId: monthlyBadges[i].id,
        periodLabel: monthStart.toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' }),
        periodStart: monthStart,
        metricSummary: `${randomInt(10, 28)} يوم نشط`,
      },
    });
    badgeCount++;
  }

  // Achievement badges (streaks)
  const achievementBadges = badges.filter((b) => b.badgeType === 'achievement');
  for (const badge of achievementBadges.slice(0, 2)) {
    const randomUser = users[randomInt(0, users.length - 1)];
    try {
      await prisma.userBadge.create({
        data: {
          userId: randomUser.id,
          badgeId: badge.id,
          periodLabel: badge.description || '',
          periodStart: daysAgo(randomInt(1, 30)),
          metricSummary: badge.description,
        },
      });
      badgeCount++;
    } catch {
      // Skip duplicates
    }
  }
  console.log(`✅ ${badgeCount} badges awarded`);

  console.log('\n🎭 Demo data complete! Check the website at http://localhost:3000');
}

main()
  .catch((e) => {
    console.error('❌ Demo seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
