import 'dotenv/config';
import { PrismaClient } from './generated/prisma/client/client.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { levelsData, topicsPerLevel } from './seeds/levels-and-topics.js';
import { level1Questions } from './seeds/questions-level1.js';
import { level2Questions } from './seeds/questions-level2.js';
import { level3Questions } from './seeds/questions-level3.js';
import { level4Questions } from './seeds/questions-level4.js';
import { level5Questions } from './seeds/questions-level5.js';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
});
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
  const levels = [];
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
        update: { name: topics[i].name, description: topics[i].description, levelId: level.id, orderInLevel: i + 1 },
        create: { name: topics[i].name, description: topics[i].description, levelId: level.id, orderInLevel: i + 1 },
      });
      topicIdMap[`${level.rankOrder}-${i + 1}`] = topic.id;
      topicCount++;
    }
  }
  console.log(`✅ ${topicCount} topics`);

  // ─── Badges ─────────────────────────────────────────────────────────
  const badgesData = [
    { name: 'بطل الأسبوع', badgeType: 'weekly_rank', rankPosition: 1, iconEmoji: '🥇', awardTitle: 'المركز الأول' },
    { name: 'الوصيف', badgeType: 'weekly_rank', rankPosition: 2, iconEmoji: '🥈', awardTitle: 'المركز الثاني' },
    { name: 'المركز الثالث', badgeType: 'weekly_rank', rankPosition: 3, iconEmoji: '🥉', awardTitle: 'المركز الثالث' },
    { name: 'الثابت', badgeType: 'monthly_rank', iconEmoji: '🔥', awardTitle: 'الأكثر حضوراً', description: 'أكتر واحد لعب أيام في الشهر' },
    { name: 'العقل الحاد', badgeType: 'monthly_rank', iconEmoji: '🧠', awardTitle: 'الأدق إجابةً', description: 'أعلى نسبة إجابات صح' },
    { name: 'المستقل', badgeType: 'monthly_rank', iconEmoji: '⚡', awardTitle: 'الأقل استعانةً', description: 'أقل واحد استخدم التلميحات' },
    { name: 'أسطورة العام', badgeType: 'yearly_rank', iconEmoji: '🏆', awardTitle: 'بطل العام', description: 'أعلى نقاط في السنة' },
    { name: 'عقل العام', badgeType: 'yearly_rank', iconEmoji: '💎', awardTitle: 'أذكى نينجا', description: 'أعلى نسبة إجابات صحيحة في السنة' },
    { name: 'النينجا المداوم', badgeType: 'achievement', iconEmoji: '🔥', description: '7 أيام متواصلة' },
    { name: 'أسبوعان بلا توقف', badgeType: 'achievement', iconEmoji: '💪', description: '14 يوم متواصل' },
    { name: 'شهر كامل', badgeType: 'achievement', iconEmoji: '🌟', description: '30 يوم متواصل' },
    { name: 'مئة سؤال', badgeType: 'achievement', iconEmoji: '📚', description: '100 إجابة صحيحة' },
  ];

  for (let i = 0; i < badgesData.length; i++) {
    await prisma.badge.upsert({ where: { id: i + 1 }, update: badgesData[i], create: badgesData[i] });
  }
  console.log(`✅ ${badgesData.length} badges`);

  // ─── Questions ──────────────────────────────────────────────────────
  const allQuestions = [
    { levelRank: 1, questions: level1Questions },
    { levelRank: 2, questions: level2Questions },
    { levelRank: 3, questions: level3Questions },
    { levelRank: 4, questions: level4Questions },
    { levelRank: 5, questions: level5Questions },
  ];

  let totalQuestions = 0;

  for (const { levelRank, questions } of allQuestions) {
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
          ...questionData,
          ...(options ? { options: { create: options } } : {}),
        },
      });
      levelCount++;
    }
    const levelName = levelsData[levelRank - 1].name;
    console.log(`  📝 ${levelName}: ${levelCount} questions`);
    totalQuestions += levelCount;
  }
  console.log(`✅ ${totalQuestions} questions total`);

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
