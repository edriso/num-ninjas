export interface QuestionSeed {
  topicIndex: number; // 1-7 within this level
  questionType: 'mcq' | 'open_ended';
  realLifeContext: string;
  questionText: string;
  correctAnswer?: string;
  correctAnswerNumeric?: number;
  hintText?: string;
  explanation: string;
  options?: { optionText: string; isCorrect: boolean }[];
}

export const level5Questions: QuestionSeed[] = [
  // ══════════════════════════════════════════════════════════════════════
  // Topic 1: الأسس والقوى (Powers & Exponents)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 1, MCQ 1 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في مسابقة رياضيات، المُقدِّم سأل عن قوة الأعداد.',
    questionText: 'كم يساوي 2 أُس 5 (2⁵)؟',
    hintText: '2 × 2 × 2 × 2 × 2 ... اضرب 2 في نفسها 5 مرات',
    explanation: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32',
    options: [
      { optionText: '32', isCorrect: true },
      { optionText: '16', isCorrect: false },
      { optionText: '64', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'بابا بيشرح لك إن البكتيريا بتتضاعف. كل ساعة عددها يُضرب في 3.',
    questionText: 'لو بدأنا بـ 1 بكتيريا، بعد 4 ساعات كم سيكون؟ (3⁴)',
    hintText: '3 × 3 × 3 × 3',
    explanation: '3⁴ = 3 × 3 × 3 × 3 = 81 بكتيريا',
    options: [
      { optionText: '81', isCorrect: true },
      { optionText: '27', isCorrect: false },
      { optionText: '12', isCorrect: false },
      { optionText: '64', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'يريد تحسب مساحة مربع طول ضلعه 9 سم.',
    questionText: 'كم تساوي 9² (9 تربيع)؟',
    hintText: 'المساحة = الضلع × الضلع',
    explanation: '9² = 9 × 9 = 81 سم²',
    options: [
      { optionText: '81', isCorrect: true },
      { optionText: '18', isCorrect: false },
      { optionText: '72', isCorrect: false },
      { optionText: '99', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة العلوم، المُدرِّس بيشرح إن الخلايا بتنقسم وكل خلية تكون 2.',
    questionText: 'لو بدأنا بخلية واحدة وانقسمت 10 مرات، كم خلية هيكون عندنا؟ (2¹⁰)',
    hintText: '2¹⁰ يعني 2 مضروبة في نفسها 10 مرات',
    explanation: '2¹⁰ = 1024 خلية',
    options: [
      { optionText: '1024', isCorrect: true },
      { optionText: '512', isCorrect: false },
      { optionText: '2048', isCorrect: false },
      { optionText: '20', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'يريد تعرف حجم مكعب طول ضلعه 5 سم.',
    questionText: 'كم يساوي 5³ (5 تكعيب)؟',
    hintText: 'الحجم = الضلع × الضلع × الضلع',
    explanation: '5³ = 5 × 5 × 5 = 125 سم³',
    options: [
      { optionText: '125', isCorrect: true },
      { optionText: '15', isCorrect: false },
      { optionText: '75', isCorrect: false },
      { optionText: '150', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في لعبة كمبيوتر، قوة الشخصية بتتضاعف كل مرحلة. القوة الأساسية 4 والمرحلة 3.',
    questionText: 'كم تساوي 4³؟',
    hintText: '4 × 4 × 4',
    explanation: '4³ = 4 × 4 × 4 = 64',
    options: [
      { optionText: '64', isCorrect: true },
      { optionText: '12', isCorrect: false },
      { optionText: '48', isCorrect: false },
      { optionText: '16', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'المدرس سأل سؤال تحدي في الحصة.',
    questionText: 'أي عدد لو رفعناه للأُس صفر بيساوي كم؟ مثلاً 7⁰ = ؟',
    hintText: 'أي عدد (غير الصفر) أُس صفر بيساوي رقم ثابت',
    explanation: 'أي عدد غير الصفر مرفوع للأُس صفر بيساوي 1. يكون 7⁰ = 1',
    options: [
      { optionText: '1', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '0', isCorrect: false },
      { optionText: '49', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'يريد تقارن بين 3⁴ و 4³ حتى تعرف أي أكبر.',
    questionText: 'أي أكبر: 3⁴ ولا 4³؟',
    hintText: 'احسب كل واحدة لوحدها وقارن',
    explanation: '3⁴ = 81 و 4³ = 64، يكون 3⁴ أكبر',
    options: [
      { optionText: '3⁴ أكبر (81 > 64)', isCorrect: true },
      { optionText: '4³ أكبر', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش ممكن نقارنهم', isCorrect: false },
    ],
  },

  // --- Topic 1, Open-ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في مسابقة الرياضيات، المعلم طلب تحسب 6 أُس 3.',
    questionText: 'كم يساوي 6³؟',
    correctAnswer: '216',
    correctAnswerNumeric: 216,
    hintText: '6 × 6 = 36، بعدين × 6',
    explanation: '6³ = 6 × 6 × 6 = 216',
  },

  // --- Topic 1, Open-ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'يريد تعرف مساحة أرضية أوضتك اللي هي مربع طول ضلعه 12 متر.',
    questionText: 'كم تساوي 12²؟',
    correctAnswer: '144',
    correctAnswerNumeric: 144,
    hintText: '12 × 12',
    explanation: '12² = 12 × 12 = 144 متر مربع',
  },

  // --- Topic 1, Open-ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'الكمبيوتر يعمل بالنظام الثنائي. كل بت بيضاعف الاحتمالات.',
    questionText: 'كم يساوي 2⁸؟',
    correctAnswer: '256',
    correctAnswerNumeric: 256,
    hintText: '2⁴ = 16، يكون 2⁸ = 16 × 16',
    explanation: '2⁸ = 256',
  },

  // --- Topic 1, Open-ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'تحتاج أن تحسب حجم صندوق مكعب طول ضلعه 7 سم.',
    questionText: 'كم يساوي 7³؟',
    correctAnswer: '343',
    correctAnswerNumeric: 343,
    hintText: '7 × 7 = 49، بعدين × 7',
    explanation: '7³ = 7 × 7 × 7 = 343 سم³',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: العوامل المشتركة والمضاعفات (GCD & LCM)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك 36 تفاحة و 24 برتقالة ويريد توزعهم في أكياس متساوية بأكبر عدد ممكن.',
    questionText: 'كم كيس تقدر تعمل (أكبر عدد)؟ يعني العامل المشترك الأكبر لـ 36 و 24؟',
    hintText: 'دور على أكبر عدد يقسم 36 و 24 من غير باقي',
    explanation:
      'عوامل 36: 1، 2، 3، 4، 6، 9، 12، 18، 36 | عوامل 24: 1، 2، 3، 4، 6، 8، 12، 24 | العامل المشترك الأكبر = 12',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أحمد يذهب الجيم كل 6 أيام ومحمد كل 8 أيام. اليوم راحوا مع بعض.',
    questionText: 'بعد كم يوم هيروحوا مع بعض تاني؟ (المضاعف المشترك الأصغر لـ 6 و 8)',
    hintText: 'دور على أصغر عدد يقبل القسمة على 6 و 8',
    explanation:
      'مضاعفات 6: 6، 12، 18، 24... | مضاعفات 8: 8، 16، 24... | المضاعف المشترك الأصغر = 24 يوم',
    options: [
      { optionText: '24 يوم', isCorrect: true },
      { optionText: '12 يوم', isCorrect: false },
      { optionText: '48 يوم', isCorrect: false },
      { optionText: '16 يوم', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك 48 قلم أحمر و 60 قلم أزرق ويريد توزعهم على مجموعات متساوية.',
    questionText: 'أكبر عدد مجموعات تقدر تعمله؟ (العامل المشترك الأكبر لـ 48 و 60)',
    hintText: 'العامل المشترك الأكبر هو أكبر عدد يقسم الاثنين',
    explanation: '48 = 2⁴ × 3 و 60 = 2² × 3 × 5 | العامل المشترك الأكبر = 2² × 3 = 12',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '24', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'إشارة مرور تكون خضرا كل 4 دقايق والتانية كل 6 دقايق. الاثنين بقوا أخضر الآن.',
    questionText: 'بعد كم دقيقة هيبقوا أخضر مع بعض تاني؟',
    hintText: 'المضاعف المشترك الأصغر لـ 4 و 6',
    explanation: 'مضاعفات 4: 4، 8، 12 | مضاعفات 6: 6، 12 | م.م.أ = 12 دقيقة',
    options: [
      { optionText: '12 دقيقة', isCorrect: true },
      { optionText: '10 دقايق', isCorrect: false },
      { optionText: '24 دقيقة', isCorrect: false },
      { optionText: '8 دقايق', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في المصنع، يريدين يعلبوا 72 فواكه و 90 تمر في علب متساوية.',
    questionText: 'أكبر عدد علب يقدروا يعملوه؟ (ع.م.أ لـ 72 و 90)',
    hintText: 'دور على أكبر عدد يقسم 72 و 90',
    explanation: '72 = 2³ × 3² و 90 = 2 × 3² × 5 | ع.م.أ = 2 × 3² = 18',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '36', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext:
      'حافلة رقم 1 تأتي كل 15 دقيقة وحافلة رقم 2 كل 20 دقيقة. الاثنين وصلوا المحطة الآن.',
    questionText: 'بعد كم دقيقة هيوصلوا المحطة مع بعض تاني؟',
    hintText: 'المضاعف المشترك الأصغر لـ 15 و 20',
    explanation: '15 = 3 × 5 و 20 = 2² × 5 | م.م.أ = 2² × 3 × 5 = 60 دقيقة',
    options: [
      { optionText: '60 دقيقة', isCorrect: true },
      { optionText: '30 دقيقة', isCorrect: false },
      { optionText: '40 دقيقة', isCorrect: false },
      { optionText: '45 دقيقة', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك 42 وردة حمرا و 56 وردة بيضا ويريد تعمل بوكيهات متساوية.',
    questionText: 'أكبر عدد بوكيهات تقدر تعمله؟ (ع.م.أ لـ 42 و 56)',
    hintText: 'العامل المشترك الأكبر',
    explanation: '42 = 2 × 3 × 7 و 56 = 2³ × 7 | ع.م.أ = 2 × 7 = 14',
    options: [
      { optionText: '14', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '28', isCorrect: false },
      { optionText: '21', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'فاطمة تسقي الزرع كل 12 يوم وتسمّده كل 18 يوم. اليوم فعلت الاثنين.',
    questionText: 'بعد كم يوم هتعمل الاثنين مع بعض تاني؟',
    hintText: 'م.م.أ لـ 12 و 18',
    explanation: '12 = 2² × 3 و 18 = 2 × 3² | م.م.أ = 2² × 3² = 36 يوم',
    options: [
      { optionText: '36 يوم', isCorrect: true },
      { optionText: '24 يوم', isCorrect: false },
      { optionText: '72 يوم', isCorrect: false },
      { optionText: '18 يوم', isCorrect: false },
    ],
  },

  // --- Topic 2, Open-ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext:
      'في حفلة المدرسة، عندك 80 ساندوتش و 120 عصير ويريد توزعهم بالتساوي على الطلبة.',
    questionText: 'أكبر عدد طلبة تقدر توزع عليهم بالتساوي (ع.م.أ لـ 80 و 120)؟',
    correctAnswer: '40',
    correctAnswerNumeric: 40,
    hintText: '80 = 2⁴ × 5 و 120 = 2³ × 3 × 5',
    explanation: 'ع.م.أ = 2³ × 5 = 40 طالب',
  },

  // --- Topic 2, Open-ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'جرس المدرسة بيرن كل 45 دقيقة وجرس المصنع كل 60 دقيقة. رنوا مع بعض الصبح.',
    questionText: 'بعد كم دقيقة هيرنوا مع بعض تاني؟ (م.م.أ لـ 45 و 60)',
    correctAnswer: '180',
    correctAnswerNumeric: 180,
    hintText: '45 = 3² × 5 و 60 = 2² × 3 × 5',
    explanation: 'م.م.أ = 2² × 3² × 5 = 180 دقيقة (3 ساعات)',
  },

  // --- Topic 2, Open-ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'مصنع موز عنده م6 قطعة فواكه و 144 قطعة فانيليا ويريد يعلبهم في علب متساوية.',
    questionText: 'أكبر عدد علب (ع.م.أ لـ 96 و 144)؟',
    correctAnswer: '48',
    correctAnswerNumeric: 48,
    hintText: '96 = 2⁵ × 3 و 144 = 2⁴ × 3²',
    explanation: 'ع.م.أ = 2⁴ × 3 = 48 علبة',
  },

  // --- Topic 2, Open-ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'قطر يمر كل 16 دقيقة وأتوبيس كل 24 دقيقة. عدوا مع بعض الآن.',
    questionText: 'بعد كم دقيقة هيعدوا مع بعض تاني؟ (م.م.أ لـ 16 و 24)',
    correctAnswer: '48',
    correctAnswerNumeric: 48,
    hintText: '16 = 2⁴ و 24 = 2³ × 3',
    explanation: 'م.م.أ = 2⁴ × 3 = 48 دقيقة',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: الأعداد السالبة (Negative Numbers)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'درجة الحرارة في موسكو كانت -8 درجات وارتفعت 12 درجة.',
    questionText: 'درجة الحرارة الآن كم؟',
    hintText: 'اجمع -8 + 12',
    explanation: '-8 + 12 = 4 درجات',
    options: [
      { optionText: '4 درجات', isCorrect: true },
      { optionText: '-4 درجات', isCorrect: false },
      { optionText: '20 درجة', isCorrect: false },
      { optionText: '-20 درجة', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'أحمد كان في الدور الثالث تحت الأرض (-3) وطلع 7 أدوار بالأسانسير.',
    questionText: 'هو في أي دور الآن؟',
    hintText: '-3 + 7 = ؟',
    explanation: '-3 + 7 = 4 | أحمد في الدور الرابع فوق الأرض',
    options: [
      { optionText: 'الدور الرابع', isCorrect: true },
      { optionText: 'الدور العاشر', isCorrect: false },
      { optionText: 'الدور التاني تحت الأرض', isCorrect: false },
      { optionText: 'الدور الثالث', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 3 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'رصيد كريم في البنك كان 50 جنيه وسحب 80 جنيه.',
    questionText: 'رصيده بقى كم؟',
    hintText: '50 - 80 = ؟',
    explanation: '50 - 80 = -30 جنيه (يعني عليه دين 30 جنيه)',
    options: [
      { optionText: '-30 جنيه', isCorrect: true },
      { optionText: '30 جنيه', isCorrect: false },
      { optionText: '-130 جنيه', isCorrect: false },
      { optionText: '130 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'الحرارة كانت -5 الصبح ونزلت 7 درجات بالليل.',
    questionText: 'درجة الحرارة بالليل كم؟',
    hintText: '-5 - 7 = ؟',
    explanation: '-5 - 7 = -12 درجة',
    options: [
      { optionText: '-12 درجة', isCorrect: true },
      { optionText: '-2 درجة', isCorrect: false },
      { optionText: '2 درجة', isCorrect: false },
      { optionText: '12 درجة', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'غواصة كانت على عمق -200 متر وطلعت 75 متر.',
    questionText: 'على أي عمق هي الآن؟',
    hintText: '-200 + 75 = ؟',
    explanation: '-200 + 75 = -125 متر',
    options: [
      { optionText: '-125 متر', isCorrect: true },
      { optionText: '-275 متر', isCorrect: false },
      { optionText: '125 متر', isCorrect: false },
      { optionText: '-150 متر', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'تحتاج أن تحسب (-3) × (-5) في امتحان الرياضيات.',
    questionText: 'كم يساوي (-3) × (-5)؟',
    hintText: 'سالب × سالب = ؟',
    explanation: 'سالب × سالب = موجب | (-3) × (-5) = +15',
    options: [
      { optionText: '15', isCorrect: true },
      { optionText: '-15', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '-8', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'رتب درجات الحرارة دي من الأبرد للأسخن: -3، 5، -7، 2، -1.',
    questionText: 'أي ترتيب صح من الأبرد للأسخن؟',
    hintText: 'الأبرد هو الأصغر (أكبر سالب)',
    explanation: '-7 < -3 < -1 < 2 < 5',
    options: [
      { optionText: '-7، -3، -1، 2، 5', isCorrect: true },
      { optionText: '-1، -3، -7، 2، 5', isCorrect: false },
      { optionText: '5، 2، -1، -3، -7', isCorrect: false },
      { optionText: '-3، -7، -1، 2، 5', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'نورا عليها دين 15 جنيه (-15) واتديّنت تاني 20 جنيه.',
    questionText: 'إجمالي الدين خاصتها كم؟',
    hintText: '-15 + (-20) = ؟',
    explanation: '-15 + (-20) = -35 جنيه (عليها 35 جنيه)',
    options: [
      { optionText: '-35 جنيه', isCorrect: true },
      { optionText: '-5 جنيه', isCorrect: false },
      { optionText: '35 جنيه', isCorrect: false },
      { optionText: '5 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, Open-ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'درجة الحرارة في القطب الجنوبي كانت -25 وارتفعت 18 درجة.',
    questionText: 'الحرارة بقت كم؟ (اكتب الرقم بس، لو سالب حط - قبله)',
    correctAnswer: '-7',
    correctAnswerNumeric: -7,
    hintText: '-25 + 18 = ؟',
    explanation: '-25 + 18 = -7 درجات',
  },

  // --- Topic 3, Open-ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'سمكة كانت على عمق -40 متر ونزلت 35 متراً أخرى.',
    questionText: 'على أي عمق السمكة الآن؟',
    correctAnswer: '-75',
    correctAnswerNumeric: -75,
    hintText: '-40 - 35 = ؟',
    explanation: '-40 - 35 = -75 متر',
  },

  // --- Topic 3, Open-ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'في لعبة، خسرت 8 نقط (-8) وبعدين كسبت 15 نقطة وبعدين خسرت 10.',
    questionText: 'مجموع نقطك كم؟',
    correctAnswer: '-3',
    correctAnswerNumeric: -3,
    hintText: '-8 + 15 - 10 = ؟',
    explanation: '-8 + 15 = 7 | 7 - 10 = -3 نقط',
  },

  // --- Topic 3, Open-ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'حساب أحمد فيه -45 جنيه (دين) وحط فيه 120 جنيه.',
    questionText: 'رصيده بقى كم؟',
    correctAnswer: '75',
    correctAnswerNumeric: 75,
    hintText: '-45 + 120 = ؟',
    explanation: '-45 + 120 = 75 جنيه',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 4: الاحتمالات (Simple Probability)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 4, MCQ 1 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رميت زهر (نرد) مرة واحدة.',
    questionText: 'احتمال يطلع رقم 6 هو كم؟',
    hintText: 'الزهر فيه 6 أوجه متساوية',
    explanation: 'احتمال = عدد النتائج المطلوبة ÷ إجمالي النتائج = 1 ÷ 6 ≈ 0٫1667',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '1/3', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
      { optionText: '1/12', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في كيس فيه 3 كور حمرا و 5 كور زرقا و 2 كور خضرا.',
    questionText: 'احتمال تسحب كورة زرقا كم؟',
    hintText: 'إجمالي الكور = 3 + 5 + 2',
    explanation: 'إجمالي = 10 كور | احتمال أزرق = 5/10 = 1/2',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '1/3', isCorrect: false },
      { optionText: '5/8', isCorrect: false },
      { optionText: '3/10', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رميت عملة معدنية (صورة أو كتابة) مرتين.',
    questionText: 'احتمال يطلع صورة في المرتين كم؟',
    hintText: 'احتمال صورة في مرة = 1/2، اضربهم',
    explanation: 'احتمال صورة × صورة = 1/2 × 1/2 = 1/4',
    options: [
      { optionText: '1/4', isCorrect: true },
      { optionText: '1/2', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '3/4', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رميت زهر (نرد) مرة واحدة.',
    questionText: 'احتمال يطلع رقم فردي (1 أو 3 أو 5) كم؟',
    hintText: 'كم رقم فردي من 1 لـ 6؟',
    explanation: 'الأرقام الفردية: 1، 3، 5 = 3 أرقام من 6 | الاحتمال = 3/6 = 1/2',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '1/3', isCorrect: false },
      { optionText: '2/3', isCorrect: false },
      { optionText: '1/6', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في كيس فيه 8 كور: 2 حمرا، 3 صفرا، 3 بيضا. هتسحب كورة بدون ما تبص.',
    questionText: 'احتمال ما تطلعش حمرا كم؟',
    hintText: 'احتمال مش حمرا = 1 - احتمال حمرا',
    explanation: 'احتمال حمرا = 2/8 = 1/4 | احتمال مش حمرا = 1 - 1/4 = 3/4',
    options: [
      { optionText: '3/4', isCorrect: true },
      { optionText: '1/4', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
      { optionText: '2/3', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رميت زهرين مع بعض. يريد تعرف احتمال مجموعهم 7.',
    questionText: 'احتمال مجموع زهرين يساوي 7 هو كم؟',
    hintText: 'إجمالي النتائج = 36. كم طريقة تجيب 7؟ (1+6، 2+5، 3+4، 4+3، 5+2، 6+1)',
    explanation: '6 طرق من 36 | الاحتمال = 6/36 = 1/6',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '1/12', isCorrect: false },
      { optionText: '7/36', isCorrect: false },
      { optionText: '1/9', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في صندوق فيه 12 كرة مرقمة من 1 لـ 12.',
    questionText: 'احتمال تسحب كرة رقمها يقبل القسمة على 3 كم؟',
    hintText: 'الأرقام اللي بتقبل القسمة على 3 من 1 لـ 12 هي: 3، 6، 9، 12',
    explanation: '4 أرقام من 12 بتقبل القسمة على 3 | الاحتمال = 4/12 = 1/3',
    options: [
      { optionText: '1/3', isCorrect: true },
      { optionText: '1/4', isCorrect: false },
      { optionText: '3/12', isCorrect: false },
      { optionText: '1/6', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في كيس فيه 5 كور حمرا و 3 كور خضرا. سحبت كورة ورجعتها وسحبت تاني.',
    questionText: 'احتمال الاثنين يطلعوا حمرا كم؟',
    hintText: 'احتمال حمرا = 5/8 في كل مرة (بنرجع الكورة)',
    explanation: '5/8 × 5/8 = 25/64',
    options: [
      { optionText: '25/64', isCorrect: true },
      { optionText: '5/8', isCorrect: false },
      { optionText: '10/16', isCorrect: false },
      { optionText: '25/32', isCorrect: false },
    ],
  },

  // --- Topic 4, Open-ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'في كيس فيه 4 كور حمرا و 6 كور زرقا. يريد تعرف احتمال سحب كورة حمرا.',
    questionText: 'لو رميت 50 مرة، المتوقع كم مرة تطلع حمرا؟',
    correctAnswer: '20',
    correctAnswerNumeric: 20,
    hintText: 'احتمال حمرا = 4/10 = 2/5، اضرب في 50',
    explanation: 'احتمال حمرا = 4/10 = 0٫4 | المتوقع = 0٫4 × 50 = 20 مرة',
  },

  // --- Topic 4, Open-ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'رميت زهر (نرد) 180 مرة.',
    questionText: 'المتوقع كم مرة يطلع رقم 3؟',
    correctAnswer: '30',
    correctAnswerNumeric: 30,
    hintText: 'احتمال 3 = 1/6',
    explanation: 'احتمال 3 = 1/6 | المتوقع = 180 ÷ 6 = 30 مرة',
  },

  // --- Topic 4, Open-ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'في صندوق فيه 15 كرة: 5 حمرا و 4 زرقا و 6 خضرا.',
    questionText: 'لو سحبت 90 مرة (مع الإرجاع)، المتوقع كم مرة تطلع خضرا؟',
    correctAnswer: '36',
    correctAnswerNumeric: 36,
    hintText: 'احتمال خضرا = 6/15 = 2/5',
    explanation: 'احتمال خضرا = 6/15 = 2/5 = 0٫4 | المتوقع = 0٫4 × 90 = 36 مرة',
  },

  // --- Topic 4, Open-ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'رميت عملة 200 مرة.',
    questionText: 'المتوقع كم مرة تطلع صورة؟',
    correctAnswer: '100',
    correctAnswerNumeric: 100,
    hintText: 'احتمال صورة = 1/2',
    explanation: 'احتمال صورة = 1/2 | المتوقع = 200 × 1/2 = 100 مرة',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: الحجم (Volume)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك حوض سمك طوله 60 سم وعرضه 30 سم وارتفاعه 40 سم.',
    questionText: 'حجم الحوض كم سم³؟',
    hintText: 'الحجم = الطول × العرض × الارتفاع',
    explanation: '60 × 30 × 40 = 72000 سم³',
    options: [
      { optionText: '72000 سم³', isCorrect: true },
      { optionText: '36000 سم³', isCorrect: false },
      { optionText: '130 سم³', isCorrect: false },
      { optionText: '7200 سم³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'يريد تغلف علبة هدية على شكل مكعب طول ضلعه 15 سم.',
    questionText: 'حجم العلبة كم سم³؟',
    hintText: 'حجم المكعب = الضلع × الضلع × الضلع',
    explanation: '15³ = 15 × 15 × 15 = 3375 سم³',
    options: [
      { optionText: '3375 سم³', isCorrect: true },
      { optionText: '2250 سم³', isCorrect: false },
      { optionText: '45 سم³', isCorrect: false },
      { optionText: '225 سم³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك علبة عصير طولها 20 سم وعرضها 10 سم وارتفاعها 30 سم.',
    questionText: 'كم لتر عصير تقدر تملا فيها العلبة؟ (1 لتر = 1000 سم³)',
    hintText: 'احسب الحجم بالسم³ واقسم على 1000',
    explanation: '20 × 10 × 30 = 6000 سم³ = 6 لتر',
    options: [
      { optionText: '6 لتر', isCorrect: true },
      { optionText: '60 لتر', isCorrect: false },
      { optionText: '3 لتر', isCorrect: false },
      { optionText: '0٫6 لتر', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'حمام سباحة طوله 25 متر وعرضه 10 متر وعمقه 2 متر.',
    questionText: 'كم متر مكعب مياه محتاجين نملأه؟',
    hintText: 'الحجم = الطول × العرض × العمق',
    explanation: '25 × 10 × 2 = 500 متر مكعب',
    options: [
      { optionText: '500 م³', isCorrect: true },
      { optionText: '250 م³', isCorrect: false },
      { optionText: '37 م³', isCorrect: false },
      { optionText: '1000 م³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'صندوق شحن أبعاده 80 سم × 50 سم × 40 سم.',
    questionText: 'حجم الصندوق كم سم³؟',
    hintText: 'اضرب الطول × العرض × الارتفاع',
    explanation: '80 × 50 × 40 = 160000 سم³',
    options: [
      { optionText: '160000 سم³', isCorrect: true },
      { optionText: '170 سم³', isCorrect: false },
      { optionText: '4000 سم³', isCorrect: false },
      { optionText: '16000 سم³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'تحتاج أن تعرف كم مكعب صغير (ضلعه 5 سم) يملا صندوق 20 × 15 × 10 سم.',
    questionText: 'كم مكعب صغير هيملا الصندوق؟',
    hintText: 'حجم الصندوق ÷ حجم المكعب الصغير',
    explanation:
      'حجم الصندوق = 20 × 15 × 10 = 3000 سم³ | حجم المكعب = 5³ = 125 سم³ | العدد = 3000 ÷ 125 = 24',
    options: [
      { optionText: '24 مكعب', isCorrect: true },
      { optionText: '12 مكعب', isCorrect: false },
      { optionText: '30 مكعب', isCorrect: false },
      { optionText: '48 مكعب', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'ثلاجة من جوه أبعادها 50 سم × 50 سم × 100 سم.',
    questionText: 'حجم الثلاجة من جوه كم لتر؟ (1 لتر = 1000 سم³)',
    hintText: 'احسب الحجم بالسم³ الأول',
    explanation: '50 × 50 × 100 = 250000 سم³ = 250 لتر',
    options: [
      { optionText: '250 لتر', isCorrect: true },
      { optionText: '25 لتر', isCorrect: false },
      { optionText: '2500 لتر', isCorrect: false },
      { optionText: '200 لتر', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك صندوقين: الأول 10 × 10 × 10 سم والتاني 5 × 20 × 10 سم.',
    questionText: 'حجم الصندوق الأول بيساوي كم مرة حجم التاني؟',
    hintText: 'احسب حجم كل واحد وقارن',
    explanation: 'الأول = 1000 سم³ | التاني = 1000 سم³ | متساويين! مرة واحدة',
    options: [
      { optionText: 'متساويين (مرة واحدة)', isCorrect: true },
      { optionText: 'الأول ضعف التاني', isCorrect: false },
      { optionText: 'التاني ضعف الأول', isCorrect: false },
      { optionText: 'الأول 3 أضعاف التاني', isCorrect: false },
    ],
  },

  // --- Topic 5, Open-ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'يريد تملا حوض سمك أبعاده 80 سم × 40 سم × 50 سم.',
    questionText: 'حجم الحوض كم لتر؟ (1 لتر = 1000 سم³)',
    correctAnswer: '160',
    correctAnswerNumeric: 160,
    hintText: '80 × 40 × 50 = ؟ بعدين اقسم على 1000',
    explanation: '80 × 40 × 50 = 160000 سم³ = 160 لتر',
  },

  // --- Topic 5, Open-ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'غرفة تخزين طولها 4 متر وعرضها 3 متر وارتفاعها 3 متر.',
    questionText: 'حجم الغرفة كم متر مكعب؟',
    correctAnswer: '36',
    correctAnswerNumeric: 36,
    hintText: '4 × 3 × 3',
    explanation: '4 × 3 × 3 = 36 متر مكعب',
  },

  // --- Topic 5, Open-ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'علبة فواكه مكعبة الشكل طول ضلعها 12 سم.',
    questionText: 'حجمها كم سم³؟',
    correctAnswer: '1728',
    correctAnswerNumeric: 1728,
    hintText: '12 × 12 × 12',
    explanation: '12³ = 12 × 12 × 12 = 1728 سم³',
  },

  // --- Topic 5, Open-ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'خزان مياه أبعاده 2 متر × 1 متر × 1٫5 متر.',
    questionText: 'كم لتر مياه يسع الخزان؟ (1 م³ = 1000 لتر)',
    correctAnswer: '3000',
    correctAnswerNumeric: 3000,
    hintText: '2 × 1 × 1٫5 = 3 م³',
    explanation: '2 × 1 × 1٫5 = 3 م³ = 3000 لتر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: المعادلات المتقدمة (2-step Equations)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'اشتريت 2 كيلو فاكهة ودفعت 3 جنيه توصيل. الإجمالي 15 جنيه.',
    questionText: 'لو 2س + 3 = 15، كم سعر الكيلو (س)؟',
    hintText: 'اطرح 3 من الطرفين الأول، بعدين اقسم على 2',
    explanation: '2س + 3 = 15 | 2س = 12 | س = 6 جنيه',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '7', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عمر أحمد ضعف عمر أخوه الصغير زائد 5 سنين. عمر أحمد 17 سنة.',
    questionText: 'لو 2س + 5 = 17، عمر أخوه (س) كم؟',
    hintText: 'اطرح 5 من 17 الأول',
    explanation: '2س + 5 = 17 | 2س = 12 | س = 6 سنين',
    options: [
      { optionText: '6 سنين', isCorrect: true },
      { optionText: '7 سنين', isCorrect: false },
      { optionText: '8 سنين', isCorrect: false },
      { optionText: '11 سنة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ماما قسمت الفواكه على 3 أطفال بالتساوي وتبقى 4 قطع. كان عندها 25 قطعة.',
    questionText: 'لو 3س + 4 = 25، كم قطعة أخذ كل طفل (س)؟',
    hintText: '25 - 4 = 21، بعدين اقسم على 3',
    explanation: '3س + 4 = 25 | 3س = 21 | س = 7 قطع',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '5', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في محل ألعاب، اشتريت 4 ألعاب وخدت خصم 10 جنيه. دفعت 50 جنيه.',
    questionText: 'لو 4س - 10 = 50، سعر اللعبة الواحدة (س) كم؟',
    hintText: 'اجمع 10 على الطرفين الأول',
    explanation: '4س - 10 = 50 | 4س = 60 | س = 15 جنيه',
    options: [
      { optionText: '15 جنيه', isCorrect: true },
      { optionText: '10 جنيه', isCorrect: false },
      { optionText: '20 جنيه', isCorrect: false },
      { optionText: '12 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'فكّر في عدد، اضربه في 5 واطرح 8. النتيجة 27.',
    questionText: 'لو 5س - 8 = 27، العدد (س) كم؟',
    hintText: 'اجمع 8 على 27 واقسم على 5',
    explanation: '5س - 8 = 27 | 5س = 35 | س = 7',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '5', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '3', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'مجموع عمر سارة وأختها 28 سنة. سارة أكبر من أختها بـ 4 سنين.',
    questionText: 'لو عمر الأخت = س وعمر سارة = س + 4، يكون 2س + 4 = 28. عمر الأخت كم؟',
    hintText: '28 - 4 = 24، بعدين اقسم على 2',
    explanation: '2س + 4 = 28 | 2س = 24 | س = 12 سنة',
    options: [
      { optionText: '12 سنة', isCorrect: true },
      { optionText: '14 سنة', isCorrect: false },
      { optionText: '10 سنين', isCorrect: false },
      { optionText: '16 سنة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 7 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'تاكسي أجرة الركوب 10 جنيه وكل كيلومتر بـ 3 جنيه. دفعت 37 جنيه.',
    questionText: 'لو 3س + 10 = 37، مشيت كم كيلومتر (س)؟',
    hintText: '37 - 10 = 27، اقسم على 3',
    explanation: '3س + 10 = 37 | 3س = 27 | س = 9 كم',
    options: [
      { optionText: '9 كم', isCorrect: true },
      { optionText: '12 كم', isCorrect: false },
      { optionText: '7 كم', isCorrect: false },
      { optionText: '8 كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'اشتريت 6 كراسات ودفعت 5 جنيه تغليف. الإجمالي 47 جنيه.',
    questionText: 'لو 6س + 5 = 47، سعر الكراسة (س) كم؟',
    hintText: '47 - 5 = 42، اقسم على 6',
    explanation: '6س + 5 = 47 | 6س = 42 | س = 7 جنيه',
    options: [
      { optionText: '7 جنيه', isCorrect: true },
      { optionText: '8 جنيه', isCorrect: false },
      { optionText: '6 جنيه', isCorrect: false },
      { optionText: '5 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 6, Open-ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'فكّر في عدد، اضربه في 7 وزوّد 11. النتيجة 67.',
    questionText: 'لو 7س + 11 = 67، العدد (س) كم؟',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
    hintText: '67 - 11 = 56، اقسم على 7',
    explanation: '7س + 11 = 67 | 7س = 56 | س = 8',
  },

  // --- Topic 6, Open-ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت 3 تيشيرتات وخصم 20 جنيه. دفعت 100 جنيه.',
    questionText: 'لو 3س - 20 = 100، سعر التيشيرت (س) كم؟',
    correctAnswer: '40',
    correctAnswerNumeric: 40,
    hintText: '100 + 20 = 120، اقسم على 3',
    explanation: '3س - 20 = 100 | 3س = 120 | س = 40 جنيه',
  },

  // --- Topic 6, Open-ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'مجموع عمر علي وأبوه 50 سنة. أبوه أكبر منه بـ 26 سنة.',
    questionText: 'عمر علي كم؟ (س + س + 26 = 50)',
    correctAnswer: '12',
    correctAnswerNumeric: 12,
    hintText: '2س + 26 = 50، اطرح 26 واقسم على 2',
    explanation: '2س + 26 = 50 | 2س = 24 | س = 12 سنة',
  },

  // --- Topic 6, Open-ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'يريد تحل المعادلة: 8س - 14 = 50.',
    questionText: 'قيمة س كم؟',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
    hintText: '50 + 14 = 64، اقسم على 8',
    explanation: '8س - 14 = 50 | 8س = 64 | س = 8',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: ألغاز رياضية (Math Puzzles & Logic)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'في مسابقة ألغاز، المقدم عرض النمط ده: 2، 6، 18، 54، ...',
    questionText: 'العدد اللي بعد 54 في النمط هذا كم؟',
    hintText: 'كل عدد يُضرب في 3',
    explanation: 'النمط: × 3 | 54 × 3 = 162',
    options: [
      { optionText: '162', isCorrect: true },
      { optionText: '108', isCorrect: false },
      { optionText: '72', isCorrect: false },
      { optionText: '150', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'صاحبك قالك لغز: مجموع 3 أعداد متتالية = 72.',
    questionText: 'العدد الأوسط كم؟',
    hintText: 'لو الأعداد متتالية، المجموع = 3 × العدد الأوسط',
    explanation: '3 أعداد متتالية مجموعهم 72 | العدد الأوسط = 72 ÷ 3 = 24 | الأعداد: 23، 24، 25',
    options: [
      { optionText: '24', isCorrect: true },
      { optionText: '23', isCorrect: false },
      { optionText: '25', isCorrect: false },
      { optionText: '36', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'النمط ده: 1، 1، 2، 3، 5، 8، 13، ...',
    questionText: 'العدد اللي بعد 13 كم؟ (فيبوناتشي)',
    hintText: 'كل عدد = مجموع العددين اللي قبله',
    explanation: '8 + 13 = 21',
    options: [
      { optionText: '21', isCorrect: true },
      { optionText: '18', isCorrect: false },
      { optionText: '20', isCorrect: false },
      { optionText: '26', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'لغز: عدد لو ضربته في نفسه يكون 196.',
    questionText: 'العدد هذا كم؟',
    hintText: 'دور على عدد تربيعه = 196',
    explanation: '14 × 14 = 196',
    options: [
      { optionText: '14', isCorrect: true },
      { optionText: '13', isCorrect: false },
      { optionText: '15', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'النمط ده: 1000، 500، 250، 125، ...',
    questionText: 'العدد اللي بعد 125 كم؟',
    hintText: 'كل عدد بيتقسم على 2',
    explanation: 'النمط: ÷ 2 | 125 ÷ 2 = 62٫5',
    options: [
      { optionText: '62٫5', isCorrect: true },
      { optionText: '65', isCorrect: false },
      { optionText: '60', isCorrect: false },
      { optionText: '75', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'لغز: مجموع عددين = 50 والفرق بينهم = 14.',
    questionText: 'العدد الأكبر كم؟',
    hintText: 'العدد الأكبر = (المجموع + الفرق) ÷ 2',
    explanation: 'الأكبر = (50 + 14) ÷ 2 = 64 ÷ 2 = 32',
    options: [
      { optionText: '32', isCorrect: true },
      { optionText: '25', isCorrect: false },
      { optionText: '18', isCorrect: false },
      { optionText: '36', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'النمط ده: 1، 4، 9، 16، 25، ...',
    questionText: 'العدد اللي بعد 25 كم؟',
    hintText: 'دي مربعات الأعداد: 1²، 2²، 3²، 4²، 5²...',
    explanation: 'الأعداد هي مربعات كاملة: 6² = 36',
    options: [
      { optionText: '36', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '35', isCorrect: false },
      { optionText: '49', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext:
      'لغز المثلث السحري: كل ضلع مجموعه 12. الأرقام 1-6. في رأس المثلث 1 وعلى ضلعه 5.',
    questionText: 'العدد الناقص على نفس الضلع (1 + ؟ + 5 = 12) كم؟',
    hintText: '12 - 1 - 5 = ؟',
    explanation: '1 + ؟ + 5 = 12 | ؟ = 12 - 6 = 6',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '4', isCorrect: false },
      { optionText: '7', isCorrect: false },
      { optionText: '3', isCorrect: false },
    ],
  },

  // --- Topic 7, Open-ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'النمط: 3، 9، 27، 81، ...',
    questionText: 'العدد اللي بعد 81 كم؟',
    correctAnswer: '243',
    correctAnswerNumeric: 243,
    hintText: 'كل عدد × 3',
    explanation: '81 × 3 = 243 (دي قوى العدد 3)',
  },

  // --- Topic 7, Open-ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'لغز: مجموع 5 أعداد متتالية = 145.',
    questionText: 'العدد الأوسط كم؟',
    correctAnswer: '29',
    correctAnswerNumeric: 29,
    hintText: 'المجموع = 5 × العدد الأوسط',
    explanation: '145 ÷ 5 = 29 | الأعداد: 27، 28، 29، 30، 31',
  },

  // --- Topic 7, Open-ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'لغز: مجموع عددين = 84 والفرق بينهم = 20.',
    questionText: 'العدد الأصغر كم؟',
    correctAnswer: '32',
    correctAnswerNumeric: 32,
    hintText: 'الأصغر = (المجموع - الفرق) ÷ 2',
    explanation: '(84 - 20) ÷ 2 = 64 ÷ 2 = 32',
  },

  // --- Topic 7, Open-ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'لغز: عدد لو ضربته في نفسه 3 مرات (تكعيب) يكون 512.',
    questionText: 'العدد هذا كم؟',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
    hintText: 'جرب 7³ و 8³ و 9³',
    explanation: '8 × 8 × 8 = 512 | يكون العدد = 8',
  },
];
