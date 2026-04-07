import 'dotenv/config';
import { PrismaClient, type Level } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import bcrypt from 'bcryptjs';
import { levelsData, topicsPerLevel } from './seeds/levels-and-topics';
import { level1Questions } from './seeds/questions-level1';
import { level2Questions } from './seeds/questions-level2';
import { level3Questions } from './seeds/questions-level3';
import { level4Questions } from './seeds/questions-level4';
import { level5Questions } from './seeds/questions-level5';
import { level1QuestionsEn } from './seeds/questions-level1-en';
import { level2QuestionsEn } from './seeds/questions-level2-en';
import { level3QuestionsEn } from './seeds/questions-level3-en';
import { level4QuestionsEn } from './seeds/questions-level4-en';
import { level5QuestionsEn } from './seeds/questions-level5-en';

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...\n');

  // ─── Settings ───────────────────────────────────────────────────────
  const settings = [
    { settingKey: 'questions_per_day', value: '3', type: 'integer', description: 'عدد الأسئلة اليومية' },
    { settingKey: 'first_question_time', value: '14:30', type: 'time', description: 'وقت إرسال أول سؤال يومي' },
    { settingKey: 'reminder_time', value: '19:30', type: 'time', description: 'وقت التذكير المسائي' },
    { settingKey: 'streak_reset_time', value: '00:00', type: 'time', description: 'وقت إعادة ضبط السلسلة' },
    { settingKey: 'daily_questions_prep_time', value: '00:30', type: 'time', description: 'وقت تحضير أسئلة اليوم' },
    { settingKey: 'weekly_ranking_day', value: '0', type: 'integer', description: 'يوم الترتيب الأسبوعي (0=الأحد)' },
    { settingKey: 'points_per_correct', value: '10', type: 'integer', description: 'نقاط الإجابة الصحيحة' },
    { settingKey: 'question_repeat_days', value: '30', type: 'integer', description: 'أيام قبل تكرار السؤال' },
    { settingKey: 'reminder_enabled', value: '1', type: 'boolean', description: 'تفعيل التذكير المسائي' },
  ];

  for (const s of settings) {
    await prisma.setting.upsert({ where: { settingKey: s.settingKey }, update: s, create: s });
  }
  console.log(`✅ ${settings.length} settings`);

  // ─── Levels ─────────────────────────────────────────────────────────
  const levels: Level[] = [];
  for (const l of levelsData) {
    const level = await prisma.level.upsert({
      where: { id: l.rankOrder },
      update: l,
      create: l,
    });
    levels.push(level);
  }
  console.log(`✅ ${levels.length} levels`);

  // ─── Topics ─────────────────────────────────────────────────────────
  let topicCount = 0;
  const topicIdMap: Record<string, number> = {}; // "levelRank-topicIndex" -> topicId

  for (const level of levels) {
    const topics = topicsPerLevel[level.rankOrder] || [];
    for (let i = 0; i < topics.length; i++) {
      const topicId = (level.rankOrder - 1) * 7 + i + 1;
      const topic = await prisma.topic.upsert({
        where: { id: topicId },
        update: { name: topics[i].name, nameEn: topics[i].nameEn, description: topics[i].description, descriptionEn: topics[i].descriptionEn, levelId: level.id, orderInLevel: i + 1 },
        create: { name: topics[i].name, nameEn: topics[i].nameEn, description: topics[i].description, descriptionEn: topics[i].descriptionEn, levelId: level.id, orderInLevel: i + 1 },
      });
      topicIdMap[`${level.rankOrder}-${i + 1}`] = topic.id;
      topicCount++;
    }
  }
  console.log(`✅ ${topicCount} topics`);

  // ─── Badges ─────────────────────────────────────────────────────────
  const badgesData = [
    { name: 'بطل الأسبوع', nameEn: 'Week Champion', badgeType: 'weekly_rank', rankPosition: 1, iconEmoji: '🥇', awardTitle: 'المركز الأول', awardTitleEn: '1st Place', description: 'المركز الأول هذا الأسبوع', descriptionEn: 'Ranked #1 this week' },
    { name: 'المركز الثاني', nameEn: '2nd Place', badgeType: 'weekly_rank', rankPosition: 2, iconEmoji: '🥈', awardTitle: 'المركز الثاني', awardTitleEn: '2nd Place', description: 'المركز الثاني هذا الأسبوع', descriptionEn: 'Ranked #2 this week' },
    { name: 'المركز الثالث', nameEn: '3rd Place', badgeType: 'weekly_rank', rankPosition: 3, iconEmoji: '🥉', awardTitle: 'المركز الثالث', awardTitleEn: '3rd Place', description: 'المركز الثالث هذا الأسبوع', descriptionEn: 'Ranked #3 this week' },
    { name: 'الثابت', nameEn: 'The Consistent', badgeType: 'monthly_rank', iconEmoji: '🔥', awardTitle: 'الأكثر حضوراً', awardTitleEn: 'Most Active', description: 'أكتر واحد لعب أيام في الشهر', descriptionEn: 'Most active days this month' },
    { name: 'العقل الحاد', nameEn: 'The Sharp Mind', badgeType: 'monthly_rank', iconEmoji: '🎯', awardTitle: 'الأدق إجابةً', awardTitleEn: 'Best Accuracy', description: 'أعلى نسبة إجابات صح', descriptionEn: 'Highest correct answer rate' },
    { name: 'المستقل', nameEn: 'The Independent', badgeType: 'monthly_rank', iconEmoji: '⚡', awardTitle: 'الأقل استعانةً', awardTitleEn: 'Fewest Hints', description: 'أقل واحد استخدم التلميحات', descriptionEn: 'Least hints used this month' },
    { name: 'أسطورة العام', nameEn: 'Year Legend', badgeType: 'yearly_rank', iconEmoji: '🏆', awardTitle: 'بطل العام', awardTitleEn: 'Champion', description: 'أعلى نقاط في السنة', descriptionEn: 'Top points this year' },
    { name: 'عقل العام', nameEn: 'Sharpest Mind', badgeType: 'yearly_rank', iconEmoji: '💎', awardTitle: 'أذكى نينجا', awardTitleEn: 'Smartest Ninja', description: 'أعلى نسبة إجابات صحيحة في السنة', descriptionEn: 'Best accuracy this year' },
    { name: 'النينجا المداوم', nameEn: 'Streak Ninja', badgeType: 'achievement', iconEmoji: '🔥', description: '7 أيام متواصلة', descriptionEn: '7 day streak' },
    { name: 'أسبوعان بلا توقف', nameEn: 'Unstoppable', badgeType: 'achievement', iconEmoji: '💪', description: '14 يوم متواصل', descriptionEn: '14 day streak' },
    { name: 'شهر كامل', nameEn: 'Full Month', badgeType: 'achievement', iconEmoji: '🌟', description: '30 يوم متواصل', descriptionEn: '30 day streak' },
    { name: 'مئة سؤال', nameEn: '100 Questions', badgeType: 'achievement', iconEmoji: '📚', description: '100 إجابة صحيحة', descriptionEn: '100 correct answers' },
  ];

  for (let i = 0; i < badgesData.length; i++) {
    await prisma.badge.upsert({ where: { id: i + 1 }, update: badgesData[i], create: badgesData[i] });
  }
  console.log(`✅ ${badgesData.length} badges`);

  // ─── Questions ──────────────────────────────────────────────────────
  const allQuestions = [
    { levelRank: 1, questions: level1Questions, locale: 'ar' },
    { levelRank: 2, questions: level2Questions, locale: 'ar' },
    { levelRank: 3, questions: level3Questions, locale: 'ar' },
    { levelRank: 4, questions: level4Questions, locale: 'ar' },
    { levelRank: 5, questions: level5Questions, locale: 'ar' },
    { levelRank: 1, questions: level1QuestionsEn, locale: 'en' },
    { levelRank: 2, questions: level2QuestionsEn, locale: 'en' },
    { levelRank: 3, questions: level3QuestionsEn, locale: 'en' },
    { levelRank: 4, questions: level4QuestionsEn, locale: 'en' },
    { levelRank: 5, questions: level5QuestionsEn, locale: 'en' },
  ];

  let totalQuestions = 0;

  for (const { levelRank, questions, locale } of allQuestions) {
    let levelCount = 0;
    for (const q of questions) {
      const topicId = topicIdMap[`${levelRank}-${q.topicIndex}`];
      if (!topicId) {
        console.error(`❌ Topic not found: level ${levelRank}, topic index ${q.topicIndex}`);
        continue;
      }

      const { options, topicIndex, ...questionData } = q;
      await prisma.question.create({
        data: {
          topicId,
          locale,
          ...questionData,
          ...(options ? { options: { create: options } } : {}),
        },
      });
      levelCount++;
    }
    const levelName = locale === 'en' ? levelsData[levelRank - 1].nameEn : levelsData[levelRank - 1].name;
    console.log(`  📝 ${levelName} (${locale}): ${levelCount} questions`);
    totalQuestions += levelCount;
  }
  console.log(`✅ ${totalQuestions} questions total`);

  // ─── Default Admin ──────────────────────────────────────────────────
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@numninjas.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'password';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.admin.upsert({
    where: { email: adminEmail },
    update: {},
    create: { email: adminEmail, password: hashedPassword },
  });
  console.log(`✅ Admin: ${adminEmail} (change password after first login!)`);

  console.log('\n🎉 Seed complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
