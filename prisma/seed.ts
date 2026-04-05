import 'dotenv/config';
import { PrismaClient } from './generated/prisma/client/client.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // ─── Settings ───────────────────────────────────────────────────────
  const settings = [
    {
      settingKey: 'questions_per_day',
      value: '3',
      type: 'integer',
      description: 'عدد الأسئلة اليومية',
    },
    {
      settingKey: 'first_question_time',
      value: '14:30',
      type: 'time',
      description: 'وقت إرسال أول سؤال يومي',
    },
    {
      settingKey: 'reminder_time',
      value: '19:30',
      type: 'time',
      description: 'وقت التذكير المسائي',
    },
    {
      settingKey: 'streak_reset_time',
      value: '00:00',
      type: 'time',
      description: 'وقت إعادة ضبط السلسلة',
    },
    {
      settingKey: 'daily_questions_prep_time',
      value: '00:30',
      type: 'time',
      description: 'وقت تحضير أسئلة اليوم',
    },
    {
      settingKey: 'weekly_ranking_day',
      value: '0',
      type: 'integer',
      description: 'يوم الترتيب الأسبوعي (0=الأحد)',
    },
    {
      settingKey: 'points_per_correct',
      value: '10',
      type: 'integer',
      description: 'نقاط الإجابة الصحيحة',
    },
    {
      settingKey: 'question_repeat_days',
      value: '30',
      type: 'integer',
      description: 'أيام قبل تكرار السؤال',
    },
    {
      settingKey: 'reminder_enabled',
      value: '1',
      type: 'boolean',
      description: 'تفعيل التذكير المسائي',
    },
  ];

  for (const s of settings) {
    await prisma.setting.upsert({
      where: { settingKey: s.settingKey },
      update: s,
      create: s,
    });
  }
  console.log(`  ✅ ${settings.length} settings`);

  // ─── Levels ─────────────────────────────────────────────────────────
  const levelsData = [
    {
      name: 'الحزام الأبيض',
      rankOrder: 1,
      iconEmoji: '🥋',
      description: 'المبتدئ — الأساسيات والعمليات البسيطة',
    },
    {
      name: 'الحزام الأصفر',
      rankOrder: 2,
      iconEmoji: '🟡',
      description: 'المتقدم — الكسور والأعداد العشرية',
    },
    {
      name: 'الحزام البرتقالي',
      rankOrder: 3,
      iconEmoji: '🟠',
      description: 'المحترف — النسب والمئويات والمساحة',
    },
    {
      name: 'الحزام الأخضر',
      rankOrder: 4,
      iconEmoji: '🟢',
      description: 'الخبير — الجبر الأساسي والمسائل المركبة',
    },
    {
      name: 'الحزام الأسود',
      rankOrder: 5,
      iconEmoji: '⬛',
      description: 'الأسطورة — المسائل المعقدة والحياة الحقيقية',
    },
  ];

  const levels = [];
  for (const l of levelsData) {
    const level = await prisma.level.upsert({
      where: { id: l.rankOrder },
      update: l,
      create: l,
    });
    levels.push(level);
  }
  console.log(`  ✅ ${levels.length} levels`);

  // ─── Topics ─────────────────────────────────────────────────────────
  const topicsPerLevel: Record<number, string[]> = {
    1: ['الجمع والطرح', 'الضرب', 'القسمة', 'المال والأسعار'],
    2: ['الكسور', 'الأعداد العشرية', 'الوقت والمواعيد', 'القياس والوحدات'],
    3: ['النسبة المئوية', 'النسب والتناسب', 'المساحة والمحيط', 'البيانات والرسوم'],
    4: ['أساسيات الجبر', 'العمليات المختلطة', 'المسائل الكلامية', 'الإحصاء البسيط'],
    5: ['حل المسائل المعقدة', 'الكسور المتقدمة', 'الهندسة التطبيقية', 'تطبيقات الحياة الحقيقية'],
  };

  let topicCount = 0;
  for (const level of levels) {
    const topicNames = topicsPerLevel[level.rankOrder] || [];
    for (let i = 0; i < topicNames.length; i++) {
      await prisma.topic.upsert({
        where: { id: (level.rankOrder - 1) * 4 + i + 1 },
        update: {
          name: topicNames[i],
          levelId: level.id,
          orderInLevel: i + 1,
        },
        create: {
          name: topicNames[i],
          levelId: level.id,
          orderInLevel: i + 1,
        },
      });
      topicCount++;
    }
  }
  console.log(`  ✅ ${topicCount} topics`);

  // ─── Badges ─────────────────────────────────────────────────────────
  const badgesData = [
    // Weekly rank
    {
      name: 'بطل الأسبوع',
      badgeType: 'weekly_rank',
      rankPosition: 1,
      iconEmoji: '🥇',
      awardTitle: 'المركز الأول',
    },
    {
      name: 'الوصيف',
      badgeType: 'weekly_rank',
      rankPosition: 2,
      iconEmoji: '🥈',
      awardTitle: 'المركز الثاني',
    },
    {
      name: 'المركز الثالث',
      badgeType: 'weekly_rank',
      rankPosition: 3,
      iconEmoji: '🥉',
      awardTitle: 'المركز الثالث',
    },
    // Monthly rank
    {
      name: 'الثابت',
      badgeType: 'monthly_rank',
      iconEmoji: '🔥',
      awardTitle: 'الأكثر حضوراً',
      description: 'أكتر واحد لعب أيام في الشهر',
    },
    {
      name: 'العقل الحاد',
      badgeType: 'monthly_rank',
      iconEmoji: '🧠',
      awardTitle: 'الأدق إجابةً',
      description: 'أعلى نسبة إجابات صح',
    },
    {
      name: 'المستقل',
      badgeType: 'monthly_rank',
      iconEmoji: '⚡',
      awardTitle: 'الأقل استعانةً',
      description: 'أقل واحد استخدم التلميحات',
    },
    // Yearly rank
    {
      name: 'أسطورة العام',
      badgeType: 'yearly_rank',
      iconEmoji: '🏆',
      awardTitle: 'بطل العام',
      description: 'أعلى نقاط في السنة',
    },
    {
      name: 'عقل العام',
      badgeType: 'yearly_rank',
      iconEmoji: '💎',
      awardTitle: 'أذكى نينجا',
      description: 'أعلى نسبة إجابات صحيحة في السنة',
    },
    // Achievements
    {
      name: 'النينجا المداوم',
      badgeType: 'achievement',
      iconEmoji: '🔥',
      description: '7 أيام متواصلة',
    },
    {
      name: 'أسبوعان بلا توقف',
      badgeType: 'achievement',
      iconEmoji: '💪',
      description: '14 يوم متواصل',
    },
    {
      name: 'شهر كامل',
      badgeType: 'achievement',
      iconEmoji: '🌟',
      description: '30 يوم متواصل',
    },
    {
      name: 'مئة سؤال',
      badgeType: 'achievement',
      iconEmoji: '📚',
      description: '100 إجابة صحيحة',
    },
  ];

  for (let i = 0; i < badgesData.length; i++) {
    await prisma.badge.upsert({
      where: { id: i + 1 },
      update: badgesData[i],
      create: badgesData[i],
    });
  }
  console.log(`  ✅ ${badgesData.length} badges`);

  // ─── Sample Questions (Level 1 — White Belt) ───────────────────────
  const sampleQuestions = [
    // Topic 1: الجمع والطرح (Addition & Subtraction)
    {
      topicId: 1,
      questionType: 'mcq',
      realLifeContext: '🛒 رحت السوبر ماركت واشتريت عصير بـ 15 جنيه وشيبسي بـ 8 جنيه.',
      questionText: 'كام المجموع اللي هتدفعه؟',
      explanation: '15 + 8 = 23 جنيه',
      hintText: 'اجمع سعر العصير وسعر الشيبسي',
      options: [
        { optionText: '٢٣ جنيه', isCorrect: true },
        { optionText: '٢٠ جنيه', isCorrect: false },
        { optionText: '٢٥ جنيه', isCorrect: false },
        { optionText: '٢٢ جنيه', isCorrect: false },
      ],
    },
    {
      topicId: 1,
      questionType: 'mcq',
      realLifeContext: '💰 معاك 50 جنيه واشتريت ساندويتش بـ 18 جنيه.',
      questionText: 'كام الباقي معاك؟',
      explanation: '50 - 18 = 32 جنيه',
      hintText: 'اطرح سعر الساندويتش من الفلوس اللي معاك',
      options: [
        { optionText: '٣٢ جنيه', isCorrect: true },
        { optionText: '٣٠ جنيه', isCorrect: false },
        { optionText: '٢٨ جنيه', isCorrect: false },
        { optionText: '٣٥ جنيه', isCorrect: false },
      ],
    },
    {
      topicId: 1,
      questionType: 'open_ended',
      realLifeContext: '🏫 في الفصل عندك 24 طالب، راح منهم 7 في الفسحة.',
      questionText: 'كام طالب فاضل في الفصل؟',
      correctAnswer: '17',
      correctAnswerNumeric: 17,
      explanation: '24 - 7 = 17 طالب',
      hintText: 'اطرح عدد اللي راحوا من المجموع الكلي',
    },

    // Topic 2: الضرب (Multiplication)
    {
      topicId: 2,
      questionType: 'mcq',
      realLifeContext: '🍕 طلبت 4 بيتزا، كل واحدة بـ 45 جنيه.',
      questionText: 'كام الحساب كله؟',
      explanation: '4 × 45 = 180 جنيه',
      hintText: 'اضرب عدد البيتزا في سعر الواحدة',
      options: [
        { optionText: '١٨٠ جنيه', isCorrect: true },
        { optionText: '١٦٠ جنيه', isCorrect: false },
        { optionText: '٢٠٠ جنيه', isCorrect: false },
        { optionText: '١٧٥ جنيه', isCorrect: false },
      ],
    },
    {
      topicId: 2,
      questionType: 'open_ended',
      realLifeContext: '📦 عندك 6 صناديق، كل صندوق فيه 12 تفاحة.',
      questionText: 'كام تفاحة عندك كلهم؟',
      correctAnswer: '72',
      correctAnswerNumeric: 72,
      explanation: '6 × 12 = 72 تفاحة',
      hintText: 'اضرب عدد الصناديق في عدد التفاح في كل صندوق',
    },

    // Topic 3: القسمة (Division)
    {
      topicId: 3,
      questionType: 'mcq',
      realLifeContext: '🍬 معاك 36 حتة حلويات وعايز توزعهم على 4 أصحابك بالتساوي.',
      questionText: 'كل واحد هياخد كام حتة؟',
      explanation: '36 ÷ 4 = 9 حلويات لكل واحد',
      hintText: 'اقسم عدد الحلويات على عدد الأصحاب',
      options: [
        { optionText: '٩ حتت', isCorrect: true },
        { optionText: '٨ حتت', isCorrect: false },
        { optionText: '١٠ حتت', isCorrect: false },
        { optionText: '٧ حتت', isCorrect: false },
      ],
    },

    // Topic 4: المال والأسعار (Money & Prices)
    {
      topicId: 4,
      questionType: 'mcq',
      realLifeContext: '🛍️ اشتريت 3 كشاكيل بـ 12 جنيه الواحد و 2 قلم بـ 5 جنيه الواحد.',
      questionText: 'كام الحساب كله؟',
      explanation: '(3 × 12) + (2 × 5) = 36 + 10 = 46 جنيه',
      hintText: 'احسب ثمن الكشاكيل لوحدها وثمن الأقلام لوحدها واجمعهم',
      options: [
        { optionText: '٤٦ جنيه', isCorrect: true },
        { optionText: '٤٢ جنيه', isCorrect: false },
        { optionText: '٥٠ جنيه', isCorrect: false },
        { optionText: '٤٤ جنيه', isCorrect: false },
      ],
    },
    {
      topicId: 4,
      questionType: 'open_ended',
      realLifeContext: '🚕 ركبت تاكسي المشوار كان بـ 25 جنيه وإديت السواق 30 جنيه.',
      questionText: 'كام الباقي اللي هيرجعهولك؟',
      correctAnswer: '5',
      correctAnswerNumeric: 5,
      explanation: '30 - 25 = 5 جنيه',
      hintText: 'اطرح سعر المشوار من الفلوس اللي إديتها للسواق',
    },
  ];

  for (const q of sampleQuestions) {
    const { options, ...questionData } = q;
    const question = await prisma.question.create({
      data: {
        ...questionData,
        ...(options
          ? {
              options: {
                create: options,
              },
            }
          : {}),
      },
    });
    console.log(`  📝 Question #${question.id}: ${question.questionText.substring(0, 40)}...`);
  }
  console.log(`  ✅ ${sampleQuestions.length} sample questions`);

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
