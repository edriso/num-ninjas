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

export const level3Questions: QuestionSeed[] = [
  // ══════════════════════════════════════════════════════════════════════
  // Topic 1: الكسور المختلفة المقامات (Fractions with unlike denominators)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 1, MCQ 1 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما بتعمل كيكة العيد ومحتاجة تخلط دقيق. حطت 1/3 كيلو دقيق أبيض و1/4 كيلو دقيق ذرة.',
    questionText: 'كم كيلو دقيق حطت في الكيكة كلها؟',
    hintText: 'وحّد المقامات الأول: المقام المشترك لـ 3 و 4 هو 12',
    explanation: '1/3 + 1/4 = 4/12 + 3/12 = 7/12 كيلو',
    options: [
      { optionText: '7/12', isCorrect: true },
      { optionText: '2/7', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
      { optionText: '5/12', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في رمضان، أحمد شرب 2/5 لتر عصير قمر الدين وسارة شربت 1/3 لتر.',
    questionText: 'كم لتر عصير اتشرب كله؟',
    hintText: 'المقام المشترك لـ 5 و 3 هو 15',
    explanation: '2/5 + 1/3 = 6/15 + 5/15 = 11/15 لتر',
    options: [
      { optionText: '11/15', isCorrect: true },
      { optionText: '3/8', isCorrect: false },
      { optionText: '3/5', isCorrect: false },
      { optionText: '7/15', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عندك 3/4 متر قماش وقصيت منه 1/6 متر حتى تعمل شنطة صغيرة.',
    questionText: 'كم متر قماش المتبقي؟',
    hintText: 'المقام المشترك لـ 4 و 6 هو 12',
    explanation: '3/4 - 1/6 = 9/12 - 2/12 = 7/12 متر',
    options: [
      { optionText: '7/12', isCorrect: true },
      { optionText: '2/2', isCorrect: false },
      { optionText: '5/12', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما صنعت أرز بلبن لإفطار رمضان. حطت 5/6 كوباية سكر الأول وبعدين زادت 1/4 كوباية.',
    questionText: 'كم كوباية سكر حطت كلها؟',
    hintText: 'المقام المشترك لـ 6 و 4 هو 12',
    explanation: '5/6 + 1/4 = 10/12 + 3/12 = 13/12 = 1 و 1/12 كوباية',
    options: [
      { optionText: '13/12', isCorrect: true },
      { optionText: '6/10', isCorrect: false },
      { optionText: '11/12', isCorrect: false },
      { optionText: '3/5', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة العلوم، أجريت تجربة ومليت 2/3 الكوباية ميّة وبعدين فضيت منها 3/8.',
    questionText: 'كم من الكوباية المتبقي فيها ميّة؟',
    hintText: 'المقام المشترك لـ 3 و 8 هو 24',
    explanation: '2/3 - 3/8 = 16/24 - 9/24 = 7/24',
    options: [
      { optionText: '7/24', isCorrect: true },
      { optionText: '1/5', isCorrect: false },
      { optionText: '5/24', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'بابا اشترى 3/5 كيلو جبنة رومي و1/2 كيلو جبنة بيضا للفطار.',
    questionText: 'كم كيلو جبنة اشترى كلها؟',
    hintText: 'المقام المشترك لـ 5 و 2 هو 10',
    explanation: '3/5 + 1/2 = 6/10 + 5/10 = 11/10 = 1 و 1/10 كيلو',
    options: [
      { optionText: '11/10', isCorrect: true },
      { optionText: '4/7', isCorrect: false },
      { optionText: '9/10', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'كان معاك 7/8 لتر عصير مانجو وإديت صاحبك 2/5 لتر.',
    questionText: 'كم لتر المتبقي معاك؟',
    hintText: 'المقام المشترك لـ 8 و 5 هو 40',
    explanation: '7/8 - 2/5 = 35/40 - 16/40 = 19/40 لتر',
    options: [
      { optionText: '19/40', isCorrect: true },
      { optionText: '5/3', isCorrect: false },
      { optionText: '21/40', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في تحضير الكنافة، حطيت 1/3 كوباية سمنة وبعدين 1/6 كوباية زبدة.',
    questionText: 'كم كوباية دهون حطيت كلها؟',
    hintText: 'المقام المشترك لـ 3 و 6 هو 6',
    explanation: '1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 كوباية',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '2/9', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '5/6', isCorrect: false },
    ],
  },

  // --- Topic 1, Open-ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في حفلة عيد ميلاد، أكلت 2/5 من التورتة وأخوك أكل 1/4.',
    questionText: 'كم من التورتة اتاكل كله؟ (اكتب الإجابة ككسر)',
    correctAnswer: '13/20',
    correctAnswerNumeric: 0.65,
    hintText: 'المقام المشترك لـ 5 و 4 هو 20',
    explanation: '2/5 + 1/4 = 8/20 + 5/20 = 13/20',
  },

  // --- Topic 1, Open-ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'ماما اشترت 3/4 كيلو فراولة واستعملت 2/5 كيلو في العصير.',
    questionText: 'كم كيلو فراولة المتبقي؟ (اكتب الإجابة ككسر)',
    correctAnswer: '7/20',
    correctAnswerNumeric: 0.35,
    hintText: 'المقام المشترك لـ 4 و 5 هو 20',
    explanation: '3/4 - 2/5 = 15/20 - 8/20 = 7/20 كيلو',
  },

  // --- Topic 1, Open-ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'مشيت 3/8 كيلومتر للمدرسة وبعدين 1/6 كيلومتر للمكتبة.',
    questionText: 'كم كيلومتر مشيت كلهم؟ (اكتب الإجابة ككسر)',
    correctAnswer: '13/24',
    correctAnswerNumeric: 0.5417,
    hintText: 'المقام المشترك لـ 8 و 6 هو 24',
    explanation: '3/8 + 1/6 = 9/24 + 4/24 = 13/24 كيلومتر',
  },

  // --- Topic 1, Open-ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'كان عندك 5/6 لتر لبن واستخدمت 3/10 لتر في عمل البان كيك.',
    questionText: 'كم لتر لبن المتبقي؟ (اكتب الإجابة ككسر)',
    correctAnswer: '8/15',
    correctAnswerNumeric: 0.5333,
    hintText: 'المقام المشترك لـ 6 و 10 هو 30',
    explanation: '5/6 - 3/10 = 25/30 - 9/30 = 16/30 = 8/15 لتر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: ضرب الكسور (Multiplying Fractions)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'ماما صنعت بسبوسة وتريد تأخذ 2/3 الوصفة. الوصفة الأصلية محتاجة 3/4 كوباية سكر.',
    questionText: 'كم كوباية سكر هتحتاج؟',
    hintText: 'اضرب البسط × البسط والمقام × المقام',
    explanation: '2/3 × 3/4 = 6/12 = 1/2 كوباية',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '5/7', isCorrect: false },
      { optionText: '6/7', isCorrect: false },
      { optionText: '2/4', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيقطع خشب في حصة الأشغال. عنده لوح طوله 4/5 متر ويحتاج أن يقطع 1/2 منه.',
    questionText: 'كم متر هيكون طول القطعة اللي قطعها؟',
    hintText: 'اضرب الكسرين في بعض',
    explanation: '4/5 × 1/2 = 4/10 = 2/5 متر',
    options: [
      { optionText: '2/5', isCorrect: true },
      { optionText: '5/7', isCorrect: false },
      { optionText: '4/7', isCorrect: false },
      { optionText: '1/5', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك 3/5 كيلو فواكه ويريد توزع 1/3 منها على أصدقاءك في المدرسة.',
    questionText: 'كم كيلو فواكه ستوزع؟',
    hintText: 'اضرب 3/5 في 1/3',
    explanation: '3/5 × 1/3 = 3/15 = 1/5 كيلو',
    options: [
      { optionText: '1/5', isCorrect: true },
      { optionText: '4/8', isCorrect: false },
      { optionText: '3/8', isCorrect: false },
      { optionText: '2/5', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في رمضان، ماما بتعمل 5 أطباق كنافة. كل طبق محتاج 2/3 كوباية سمنة.',
    questionText: 'كم كوباية سمنة هتحتاج كلها؟',
    hintText: 'اضرب العدد الصحيح في الكسر: 5 × 2/3',
    explanation: '5 × 2/3 = 10/3 = 3 و 1/3 كوباية',
    options: [
      { optionText: '10/3', isCorrect: true },
      { optionText: '7/3', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '10/5', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أرض الملعب طولها 3/4 كيلومتر وعرضها 2/5 كيلومتر.',
    questionText: 'كم مساحتها بالكيلومتر المربع؟',
    hintText: 'المساحة = الطول × العرض',
    explanation: '3/4 × 2/5 = 6/20 = 3/10 كيلومتر مربع',
    options: [
      { optionText: '3/10', isCorrect: true },
      { optionText: '5/9', isCorrect: false },
      { optionText: '6/9', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'جدو عنده قطعة أرض ومداك 2/7 منها. وانت قررت تزرع 3/4 من نصيبك برسيم.',
    questionText: 'كم من الأرض كلها هتتزرع برسيم؟',
    hintText: 'اضرب نصيبك × الجزء اللي هتزرعه',
    explanation: '2/7 × 3/4 = 6/28 = 3/14',
    options: [
      { optionText: '3/14', isCorrect: true },
      { optionText: '5/11', isCorrect: false },
      { optionText: '6/11', isCorrect: false },
      { optionText: '1/7', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في المطبخ، الوصفة محتاجة 4/9 كوباية زيت. ماما تريد تعمل نص الوصفة بس.',
    questionText: 'كم كوباية زيت هتستخدم؟',
    hintText: 'اضرب 4/9 × 1/2',
    explanation: '4/9 × 1/2 = 4/18 = 2/9 كوباية',
    options: [
      { optionText: '2/9', isCorrect: true },
      { optionText: '5/11', isCorrect: false },
      { optionText: '4/11', isCorrect: false },
      { optionText: '1/9', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك 7/8 لتر عصير ليمون وتحتاج أن تأخذ 2/3 منه تحطه في الثلاجة.',
    questionText: 'كم لتر هتحط في الثلاجة؟',
    hintText: 'اضرب 7/8 × 2/3',
    explanation: '7/8 × 2/3 = 14/24 = 7/12 لتر',
    options: [
      { optionText: '7/12', isCorrect: true },
      { optionText: '9/11', isCorrect: false },
      { optionText: '14/11', isCorrect: false },
      { optionText: '5/12', isCorrect: false },
    ],
  },

  // --- Topic 2, Open-ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'ماما عندها 3/4 كيلو لحمة وتريد تستخدم 2/5 منها لشوربة الإفطار.',
    questionText: 'كم كيلو لحمة هتستخدم في الشوربة؟ (اكتب الإجابة ككسر)',
    correctAnswer: '3/10',
    correctAnswerNumeric: 0.3,
    hintText: 'اضرب الكسرين: 3/4 × 2/5',
    explanation: '3/4 × 2/5 = 6/20 = 3/10 كيلو',
  },

  // --- Topic 2, Open-ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'بابا اشترى 4 أمتار قماش ويريد يستخدم 3/8 منهم لستارة الصالون.',
    questionText: 'كم متر قماش محتاج للستارة؟ (اكتب الإجابة ككسر)',
    correctAnswer: '3/2',
    correctAnswerNumeric: 1.5,
    hintText: 'اضرب 4 × 3/8',
    explanation: '4 × 3/8 = 12/8 = 3/2 = 1.5 متر',
  },

  // --- Topic 2, Open-ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'حوش المدرسة مساحته 5/6 فدان. المدير قرر يعمل 2/5 منه ملعب.',
    questionText: 'كم فدان هيكون الملعب؟ (اكتب الإجابة ككسر)',
    correctAnswer: '1/3',
    correctAnswerNumeric: 0.3333,
    hintText: 'اضرب 5/6 × 2/5 وبسّط الناتج',
    explanation: '5/6 × 2/5 = 10/30 = 1/3 فدان',
  },

  // --- Topic 2, Open-ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'في العيد، جدتي صنعت 6 صواني بسبوسة. كل صينية محتاجة 3/4 كوباية سكر.',
    questionText: 'كم كوباية سكر محتاجة كلها؟ (اكتب الإجابة ككسر)',
    correctAnswer: '9/2',
    correctAnswerNumeric: 4.5,
    hintText: 'اضرب 6 × 3/4',
    explanation: '6 × 3/4 = 18/4 = 9/2 = 4.5 كوباية',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: قسمة الكسور (Dividing Fractions)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عندك 3/4 كيلو حلاوة طحينية ويريد تقسمها على 3 أأصدقاء بالتساوي.',
    questionText: 'كل واحد هيأخذ كم كيلو؟',
    hintText: 'القسمة على عدد صحيح = الضرب في مقلوبه: 3/4 ÷ 3 = 3/4 × 1/3',
    explanation: '3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4 كيلو',
    options: [
      { optionText: '1/4', isCorrect: true },
      { optionText: '3/7', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '9/4', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ماما عندها 2/3 لتر عصير وتريد تملا أكواب كل واحد 1/6 لتر.',
    questionText: 'كم كوباية هتقدر تملا؟',
    hintText: 'اقسم الكمية الكلية ÷ حجم الكوباية: 2/3 ÷ 1/6',
    explanation: '2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4 أكواب',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '2/18', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 3 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عندك 4/5 كيلو فول سوداني ويريد تحط في كل كيس 2/5 كيلو.',
    questionText: 'كم كيس هتقدر تملا؟',
    hintText: 'اقسم 4/5 ÷ 2/5 = 4/5 × 5/2',
    explanation: '4/5 ÷ 2/5 = 4/5 × 5/2 = 20/10 = 2 كيس',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '8/25', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '10/2', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'حبل طوله 5/6 متر وتحتاج أن تقطعه قطع كل واحدة 1/3 متر.',
    questionText: 'كم قطعة هتطلع؟',
    hintText: 'اقسم 5/6 ÷ 1/3 = 5/6 × 3/1',
    explanation: '5/6 ÷ 1/3 = 5/6 × 3/1 = 15/6 = 5/2 = 2 و 1/2 قطعة',
    options: [
      { optionText: '5/2', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '5/18', isCorrect: false },
      { optionText: '2', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عندك 7/8 كيلو جبنة ويريد تقسمها على 7 ساندويتشات بالتساوي.',
    questionText: 'كل ساندويتش هيأخذ كم كيلو جبنة؟',
    hintText: 'اقسم 7/8 ÷ 7',
    explanation: '7/8 ÷ 7 = 7/8 × 1/7 = 7/56 = 1/8 كيلو',
    options: [
      { optionText: '1/8', isCorrect: true },
      { optionText: '7/15', isCorrect: false },
      { optionText: '1/7', isCorrect: false },
      { optionText: '49/8', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في درس الطبخ، عندك 3/4 كوباية عسل وكل حلوى محتاجة 3/8 كوباية.',
    questionText: 'كم حلوى تقدر تعمل؟',
    hintText: 'اقسم 3/4 ÷ 3/8',
    explanation: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2 حلوى',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '9/32', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '1', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'خالتي عندها 2/3 متر شريطة ساتان وتريد تعمل فيونكات كل واحدة 1/9 متر.',
    questionText: 'كم فيونكة هتقدر تعمل؟',
    hintText: 'اقسم 2/3 ÷ 1/9',
    explanation: '2/3 ÷ 1/9 = 2/3 × 9/1 = 18/3 = 6 فيونكات',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '2/27', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في المصنع، عندك 5/6 طن رمل وتحتاج أن تقسمه على شاحنات كل واحدة تشيل 5/12 طن.',
    questionText: 'كم شاحنة محتاج؟',
    hintText: 'اقسم 5/6 ÷ 5/12',
    explanation: '5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2 شاحنة',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '25/72', isCorrect: false },
      { optionText: '10/18', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 3, Open-ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'ماما عندها 4/5 لتر لبن وتريد توزعه على 2 كوباية بالتساوي.',
    questionText: 'كل كوباية فيها كم لتر؟ (اكتب الإجابة ككسر)',
    correctAnswer: '2/5',
    correctAnswerNumeric: 0.4,
    hintText: 'اقسم 4/5 ÷ 2',
    explanation: '4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5 لتر',
  },

  // --- Topic 3, Open-ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'عندك 5/8 كيلو مكسرات ويريد تحط في كل كيس 1/4 كيلو.',
    questionText: 'كم كيس هتقدر تملا؟ (اكتب الإجابة كعدد)',
    correctAnswer: '5/2',
    correctAnswerNumeric: 2.5,
    hintText: 'اقسم 5/8 ÷ 1/4 = 5/8 × 4/1',
    explanation: '5/8 ÷ 1/4 = 5/8 × 4/1 = 20/8 = 5/2 = 2.5 كيس',
  },

  // --- Topic 3, Open-ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'في الورشة، عندك سلك طوله 9/10 متر ومحتاج قطع كل واحدة 3/10 متر.',
    questionText: 'كم قطعة هتطلع؟',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
    hintText: 'اقسم 9/10 ÷ 3/10',
    explanation: '9/10 ÷ 3/10 = 9/10 × 10/3 = 90/30 = 3 قطع',
  },

  // --- Topic 3, Open-ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'خالتي صنعت 2/3 كيلو كحك العيد وتريد تقسمه على 4 علب.',
    questionText: 'كل علبة فيها كم كيلو كحك؟ (اكتب الإجابة ككسر)',
    correctAnswer: '1/6',
    correctAnswerNumeric: 0.1667,
    hintText: 'اقسم 2/3 ÷ 4 = 2/3 × 1/4',
    explanation: '2/3 ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6 كيلو',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 4: الأعداد الكسرية (Mixed Numbers & Improper Fractions)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 4, MCQ 1 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'ماما صنعت 2 و 1/3 كيلو محشي وبعدين صنعت 1 و 1/4 كيلو تاني.',
    questionText: 'كم كيلو محشي صنعت كلها؟',
    hintText: 'حوّل الأعداد الكسرية لكسور غير فعلية: 7/3 + 5/4',
    explanation: '2 و 1/3 + 1 و 1/4 = 7/3 + 5/4 = 28/12 + 15/12 = 43/12 = 3 و 7/12',
    options: [
      { optionText: '3 و 7/12', isCorrect: true },
      { optionText: '3 و 1/2', isCorrect: false },
      { optionText: '3 و 2/7', isCorrect: false },
      { optionText: '4 و 1/12', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'حوّل الكسر غير الفعلي 17/5 لعدد كسري.',
    questionText: 'ما هو العدد الكسري المكافئ لـ 17/5؟',
    hintText: '17 ÷ 5 = 3 والباقي 2',
    explanation: '17 ÷ 5 = 3 والباقي 2، إذن 17/5 = 3 و 2/5',
    options: [
      { optionText: '3 و 2/5', isCorrect: true },
      { optionText: '3 و 3/5', isCorrect: false },
      { optionText: '2 و 7/5', isCorrect: false },
      { optionText: '4 و 1/5', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'أحمد مشي 3 و 1/2 كيلومتر الصبح و2 و 3/4 كيلومتر بالليل.',
    questionText: 'كم كيلومتر مشي في اليوم كله؟',
    hintText: 'اجمع الأعداد الصحيحة مع بعض والكسور مع بعض',
    explanation: '3 و 1/2 + 2 و 3/4 = 3 + 2 + 2/4 + 3/4 = 5 + 5/4 = 6 و 1/4',
    options: [
      { optionText: '6 و 1/4', isCorrect: true },
      { optionText: '5 و 3/4', isCorrect: false },
      { optionText: '6 و 1/2', isCorrect: false },
      { optionText: '5 و 5/6', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'حوّل العدد الكسري 4 و 3/8 لكسر غير فعلي.',
    questionText: 'ما هو الكسر غير الفعلي المكافئ؟',
    hintText: 'اضرب العدد الصحيح × المقام + البسط: 4 × 8 + 3',
    explanation: '4 × 8 + 3 = 35، إذن 4 و 3/8 = 35/8',
    options: [
      { optionText: '35/8', isCorrect: true },
      { optionText: '32/8', isCorrect: false },
      { optionText: '12/8', isCorrect: false },
      { optionText: '37/8', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عندك 5 و 1/3 أمتار خيط ومحتاج 2 و 2/3 أمتار لعمل سوارة.',
    questionText: 'كم متر خيط هيتبقى بعد ما تعمل السوارة؟',
    hintText: 'اطرح: 16/3 - 8/3',
    explanation: '5 و 1/3 - 2 و 2/3 = 16/3 - 8/3 = 8/3 = 2 و 2/3 متر',
    options: [
      { optionText: '2 و 2/3', isCorrect: true },
      { optionText: '3 و 1/3', isCorrect: false },
      { optionText: '2 و 1/3', isCorrect: false },
      { optionText: '3', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في إفطار رمضان، حضّرنا 1 و 3/4 كيلو أرز و2 و 1/2 كيلو لحمة.',
    questionText: 'كم كيلو أكل حضّرنا كله؟',
    hintText: 'اجمع: 7/4 + 5/2',
    explanation: '1 و 3/4 + 2 و 1/2 = 7/4 + 5/2 = 7/4 + 10/4 = 17/4 = 4 و 1/4',
    options: [
      { optionText: '4 و 1/4', isCorrect: true },
      { optionText: '3 و 3/4', isCorrect: false },
      { optionText: '4 و 1/2', isCorrect: false },
      { optionText: '3 و 1/4', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رتّب الأعداد دي من الأصغر للأكبر: 2 و 1/3 ، 11/4 ، 2 و 1/2.',
    questionText: 'ما هو الترتيب الصحيح؟',
    hintText: 'حوّلهم كلهم لكسور غير فعلية وقارن: 7/3 ، 11/4 ، 5/2',
    explanation: '7/3 ≈ 2.33 ، 11/4 = 2.75 ، 5/2 = 2.5 → الترتيب: 2 و 1/3 ثم 2 و 1/2 ثم 11/4',
    options: [
      { optionText: '2 و 1/3 ، 2 و 1/2 ، 11/4', isCorrect: true },
      { optionText: '11/4 ، 2 و 1/2 ، 2 و 1/3', isCorrect: false },
      { optionText: '2 و 1/2 ، 2 و 1/3 ، 11/4', isCorrect: false },
      { optionText: '2 و 1/3 ، 11/4 ، 2 و 1/2', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت 3 و 1/5 كيلو برتقان واستعملت 1 و 3/5 كيلو في عصير.',
    questionText: 'كم كيلو برتقان المتبقي؟',
    hintText: 'اطرح: 16/5 - 8/5',
    explanation: '3 و 1/5 - 1 و 3/5 = 16/5 - 8/5 = 8/5 = 1 و 3/5 كيلو',
    options: [
      { optionText: '1 و 3/5', isCorrect: true },
      { optionText: '2 و 2/5', isCorrect: false },
      { optionText: '1 و 2/5', isCorrect: false },
      { optionText: '2', isCorrect: false },
    ],
  },

  // --- Topic 4, Open-ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'حوّل العدد الكسري 3 و 5/6 لكسر غير فعلي.',
    questionText: 'اكتب الكسر غير الفعلي المكافئ.',
    correctAnswer: '23/6',
    correctAnswerNumeric: 3.8333,
    hintText: 'اضرب 3 × 6 + 5 = ؟',
    explanation: '3 × 6 + 5 = 23، إذن 3 و 5/6 = 23/6',
  },

  // --- Topic 4, Open-ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'حوّل الكسر غير الفعلي 29/7 لعدد كسري.',
    questionText: 'اكتب العدد الكسري المكافئ. (مثال: 2 و 1/3)',
    correctAnswer: '4 و 1/7',
    correctAnswerNumeric: 4.1429,
    hintText: '29 ÷ 7 = ؟ والباقي = ؟',
    explanation: '29 ÷ 7 = 4 والباقي 1، إذن 29/7 = 4 و 1/7',
  },

  // --- Topic 4, Open-ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'بابا اشترى 2 و 3/4 كيلو تفاح و1 و 5/8 كيلو موز للبيت.',
    questionText: 'كم كيلو فاكهة اشترى كلها؟ (اكتب الإجابة كعدد كسري)',
    correctAnswer: '4 و 3/8',
    correctAnswerNumeric: 4.375,
    hintText: 'حوّل لكسور غير فعلية: 11/4 + 13/8، ووحّد المقامات',
    explanation: '11/4 + 13/8 = 22/8 + 13/8 = 35/8 = 4 و 3/8 كيلو',
  },

  // --- Topic 4, Open-ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'كان عندك 5 و 1/6 أمتار حبل واستعملت 2 و 2/3 أمتار.',
    questionText: 'كم متر حبل المتبقي؟ (اكتب الإجابة كعدد كسري)',
    correctAnswer: '2 و 1/2',
    correctAnswerNumeric: 2.5,
    hintText: 'حوّل: 31/6 - 8/3 = 31/6 - 16/6',
    explanation: '31/6 - 16/6 = 15/6 = 5/2 = 2 و 1/2 متر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: ضرب وقسمة العشرية (Multiply/Divide Decimals)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت 3.5 كيلو موز والكيلو بـ 12 جنيه.',
    questionText: 'كم الحساب كله؟',
    hintText: 'اضرب 3.5 × 12',
    explanation: '3.5 × 12 = 42 جنيه',
    options: [
      { optionText: '42 جنيه', isCorrect: true },
      { optionText: '36 جنيه', isCorrect: false },
      { optionText: '45 جنيه', isCorrect: false },
      { optionText: '40 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت 2.4 كيلو عنب والكيلو بـ 15 جنيه.',
    questionText: 'كم ستدفع؟',
    hintText: 'اضرب 2.4 × 15',
    explanation: '2.4 × 15 = 36 جنيه',
    options: [
      { optionText: '36 جنيه', isCorrect: true },
      { optionText: '30 جنيه', isCorrect: false },
      { optionText: '38 جنيه', isCorrect: false },
      { optionText: '34 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك 18.6 لتر عصير وتحتاج أن توزعه على 6 أكواب بالتساوي.',
    questionText: 'كل كوباية فيها كم لتر؟',
    hintText: 'اقسم 18.6 ÷ 6',
    explanation: '18.6 ÷ 6 = 3.1 لتر',
    options: [
      { optionText: '3.1', isCorrect: true },
      { optionText: '3.6', isCorrect: false },
      { optionText: '2.6', isCorrect: false },
      { optionText: '3.3', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت 4 علب زبادي كل واحدة بـ 7.25 جنيه.',
    questionText: 'كم الحساب كله؟',
    hintText: 'اضرب 4 × 7.25',
    explanation: '4 × 7.25 = 29 جنيه',
    options: [
      { optionText: '29 جنيه', isCorrect: true },
      { optionText: '28 جنيه', isCorrect: false },
      { optionText: '29.5 جنيه', isCorrect: false },
      { optionText: '30 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'دفعت 45.5 جنيه تمن 3.5 كيلو طماطم.',
    questionText: 'كم سعر الكيلو الواحد؟',
    hintText: 'اقسم 45.5 ÷ 3.5',
    explanation: '45.5 ÷ 3.5 = 13 جنيه للكيلو',
    options: [
      { optionText: '13 جنيه', isCorrect: true },
      { optionText: '12.5 جنيه', isCorrect: false },
      { optionText: '14 جنيه', isCorrect: false },
      { optionText: '15 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت 0.75 كيلو لحمة بـ 280 جنيه للكيلو.',
    questionText: 'كم ستدفع؟',
    hintText: 'اضرب 0.75 × 280',
    explanation: '0.75 × 280 = 210 جنيه',
    options: [
      { optionText: '210 جنيه', isCorrect: true },
      { optionText: '200 جنيه', isCorrect: false },
      { optionText: '220 جنيه', isCorrect: false },
      { optionText: '190 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'مسافة البيت للمدرسة 1.8 كيلومتر. رحت ورجعت 5 أيام في الأسبوع.',
    questionText: 'كم كيلومتر مشيت في الأسبوع كله (رايح جاي)؟',
    hintText: 'المسافة اليومية = 1.8 × 2، بعدين اضرب × 5',
    explanation: '1.8 × 2 = 3.6 كيلومتر في اليوم، 3.6 × 5 = 18 كيلومتر',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '16.2', isCorrect: false },
      { optionText: '20', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت 2.5 متر قماش بـ 84 جنيه للمتر.',
    questionText: 'كم الحساب كله؟',
    hintText: 'اضرب 2.5 × 84',
    explanation: '2.5 × 84 = 210 جنيه',
    options: [
      { optionText: '210 جنيه', isCorrect: true },
      { optionText: '200 جنيه', isCorrect: false },
      { optionText: '168 جنيه', isCorrect: false },
      { optionText: '220 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, Open-ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت 1.5 كيلو مانجو والكيلو بـ 35 جنيه.',
    questionText: 'كم ستدفع؟',
    correctAnswer: '52.5',
    correctAnswerNumeric: 52.5,
    hintText: 'اضرب 1.5 × 35',
    explanation: '1.5 × 35 = 52.5 جنيه',
  },

  // --- Topic 5, Open-ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'دفعت 78 جنيه تمن 2.4 كيلو جوافة.',
    questionText: 'كم سعر الكيلو الواحد؟',
    correctAnswer: '32.5',
    correctAnswerNumeric: 32.5,
    hintText: 'اقسم 78 ÷ 2.4',
    explanation: '78 ÷ 2.4 = 32.5 جنيه للكيلو',
  },

  // --- Topic 5, Open-ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'ماما اشترت 3 زجاجات عصير كل واحدة 1.25 لتر.',
    questionText: 'كم لتر عصير عندها كلها؟',
    correctAnswer: '3.75',
    correctAnswerNumeric: 3.75,
    hintText: 'اضرب 3 × 1.25',
    explanation: '3 × 1.25 = 3.75 لتر',
  },

  // --- Topic 5, Open-ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'عندك 24.8 متر سلك وتحتاج أن تقطعه 8 قطع متساوية.',
    questionText: 'كل قطعة طولها كم متر؟',
    correctAnswer: '3.1',
    correctAnswerNumeric: 3.1,
    hintText: 'اقسم 24.8 ÷ 8',
    explanation: '24.8 ÷ 8 = 3.1 متر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: ترتيب العمليات (Order of Operations - BODMAS)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'بابا اشترى 3 علب عصير بـ 5 جنيه الواحدة وكيس تفاح بـ 8 جنيه.',
    questionText: 'احسب: 3 × 5 + 8 = ؟',
    hintText: 'الضرب قبل الجمع! احسب 3 × 5 الأول',
    explanation: '3 × 5 = 15، بعدين 15 + 8 = 23',
    options: [
      { optionText: '23', isCorrect: true },
      { optionText: '39', isCorrect: false },
      { optionText: '18', isCorrect: false },
      { optionText: '40', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في الفسحة اشتريت 2 ساندويتش وعصير. الساندويتش بـ 10 جنيه والعصير بـ 5 جنيه وأخوك إداك 3 جنيه.',
    questionText: 'احسب: 2 × 10 + 5 - 3 = ؟',
    hintText: 'الضرب الأول: 2 × 10 = 20، بعدين الجمع والطرح من الشمال لليمين',
    explanation: '2 × 10 = 20، بعدين 20 + 5 = 25، بعدين 25 - 3 = 22',
    options: [
      { optionText: '22', isCorrect: true },
      { optionText: '34', isCorrect: false },
      { optionText: '17', isCorrect: false },
      { optionText: '25', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في مسابقة رياضيات، المطلوب تحسب العبارة دي.',
    questionText: 'احسب: (8 + 4) × 3 = ؟',
    hintText: 'الأقواس أولاً! احسب اللي جوه القوس الأول',
    explanation: '8 + 4 = 12، بعدين 12 × 3 = 36',
    options: [
      { optionText: '36', isCorrect: true },
      { optionText: '20', isCorrect: false },
      { optionText: '15', isCorrect: false },
      { optionText: '44', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ماما بتحسب تكلفة أغراض العيد.',
    questionText: 'احسب: 50 - 3 × (4 + 6) = ؟',
    hintText: 'القوس أولاً: 4 + 6 = 10، بعدين الضرب، بعدين الطرح',
    explanation: '4 + 6 = 10، بعدين 3 × 10 = 30، بعدين 50 - 30 = 20',
    options: [
      { optionText: '20', isCorrect: true },
      { optionText: '470', isCorrect: false },
      { optionText: '170', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في حصة الرياضيات، المُدرّس طلب تحسب العبارة دي.',
    questionText: 'احسب: 24 ÷ 6 + 3 × 5 = ؟',
    hintText: 'القسمة والضرب أولاً (من الشمال لليمين)، بعدين الجمع',
    explanation: '24 ÷ 6 = 4، و 3 × 5 = 15، بعدين 4 + 15 = 19',
    options: [
      { optionText: '19', isCorrect: true },
      { optionText: '35', isCorrect: false },
      { optionText: '22', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'صاحبك بيتحداك تحل المسألة دي بسرعة.',
    questionText: 'احسب: (15 - 7) × 2 + 4 = ؟',
    hintText: 'القوس أولاً: 15 - 7 = 8',
    explanation: '15 - 7 = 8، بعدين 8 × 2 = 16، بعدين 16 + 4 = 20',
    options: [
      { optionText: '20', isCorrect: true },
      { optionText: '12', isCorrect: false },
      { optionText: '24', isCorrect: false },
      { optionText: '16', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 7 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'بتحسب مصاريف رحلة مدرسية.',
    questionText: 'احسب: 100 - (20 + 15) × 2 = ؟',
    hintText: 'القوس أولاً: 20 + 15 = 35، بعدين الضرب، بعدين الطرح',
    explanation: '20 + 15 = 35، بعدين 35 × 2 = 70، بعدين 100 - 70 = 30',
    options: [
      { optionText: '30', isCorrect: true },
      { optionText: '170', isCorrect: false },
      { optionText: '65', isCorrect: false },
      { optionText: '130', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في مسابقة سريعة بين الفصول.',
    questionText: 'احسب: 48 ÷ (2 × 4) + 7 = ؟',
    hintText: 'القوس أولاً: 2 × 4 = 8، بعدين القسمة، بعدين الجمع',
    explanation: '2 × 4 = 8، بعدين 48 ÷ 8 = 6، بعدين 6 + 7 = 13',
    options: [
      { optionText: '13', isCorrect: true },
      { optionText: '31', isCorrect: false },
      { optionText: '11', isCorrect: false },
      { optionText: '17', isCorrect: false },
    ],
  },

  // --- Topic 6, Open-ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'في الامتحان، المطلوب تحسب العبارة الحسابية دي.',
    questionText: 'احسب: 6 + 3 × (10 - 4) = ؟',
    correctAnswer: '24',
    correctAnswerNumeric: 24,
    hintText: 'القوس أولاً: 10 - 4 = 6، بعدين الضرب، بعدين الجمع',
    explanation: '10 - 4 = 6، بعدين 3 × 6 = 18، بعدين 6 + 18 = 24',
  },

  // --- Topic 6, Open-ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'سؤال تحدي من المُدرّس.',
    questionText: 'احسب: (9 + 3) ÷ 4 + 2 × 5 = ؟',
    correctAnswer: '13',
    correctAnswerNumeric: 13,
    hintText: 'القوس أولاً: 9 + 3 = 12، بعدين القسمة والضرب، بعدين الجمع',
    explanation: '9 + 3 = 12، بعدين 12 ÷ 4 = 3، و 2 × 5 = 10، بعدين 3 + 10 = 13',
  },

  // --- Topic 6, Open-ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'بتلعب لعبة رياضيات على التابلت.',
    questionText: 'احسب: 40 ÷ 5 - 2 + 3 × 3 = ؟',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
    hintText: 'القسمة والضرب أولاً، بعدين الجمع والطرح',
    explanation: '40 ÷ 5 = 8، و 3 × 3 = 9، بعدين 8 - 2 + 9 = 15',
  },

  // --- Topic 6, Open-ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'في مسابقة النينجا الحسابي.',
    questionText: 'احسب: (20 - 8) × 2 ÷ 3 = ؟',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
    hintText: 'القوس أولاً: 20 - 8 = 12، بعدين الضرب والقسمة من الشمال لليمين',
    explanation: '20 - 8 = 12، بعدين 12 × 2 = 24، بعدين 24 ÷ 3 = 8',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: المال والأعمال (Money Math - profit, loss, budgets)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أحمد فتح كُشك صغير وبيبيع ساندويتشات شاورما. بيشتري المكونات بـ 30 جنيه ويبيع الساندويتش بـ 50 جنيه.',
    questionText: 'كم ربحه في الساندويتش الواحد؟',
    hintText: 'الربح = سعر البيع - سعر التكلفة',
    explanation: '50 - 30 = 20 جنيه ربح',
    options: [
      { optionText: '20 جنيه', isCorrect: true },
      { optionText: '30 جنيه', isCorrect: false },
      { optionText: '15 جنيه', isCorrect: false },
      { optionText: '80 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة اشترت 10 أساور بـ 150 جنيه وباعتهم بـ 20 جنيه الواحدة.',
    questionText: 'كم ربحها أو خسارتها الكلية؟',
    hintText: 'احسب إجمالي البيع: 10 × 20 = ؟ ثم اطرح التكلفة',
    explanation: 'إجمالي البيع = 10 × 20 = 200 جنيه. الربح = 200 - 150 = 50 جنيه ربح',
    options: [
      { optionText: 'ربح 50 جنيه', isCorrect: true },
      { optionText: 'خسارة 50 جنيه', isCorrect: false },
      { optionText: 'ربح 100 جنيه', isCorrect: false },
      { optionText: 'ربح 30 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'ماما تريد تعمل ميزانية للمدرسة. الكتب بـ 250 جنيه، الأدوات بـ 150 جنيه، الشنطة بـ 350 جنيه، والمعاها 1000 جنيه.',
    questionText: 'كم هيتبقى معاها بعد المصاريف دي كلها؟',
    hintText: 'اجمع المصاريف كلها واطرحها من المبلغ المتاح',
    explanation: 'المصاريف = 250 + 150 + 350 = 750. الباقي = 1000 - 750 = 250 جنيه',
    options: [
      { optionText: '250 جنيه', isCorrect: true },
      { optionText: '300 جنيه', isCorrect: false },
      { optionText: '200 جنيه', isCorrect: false },
      { optionText: '150 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'محمد بيبيع كشري في العربية. تكلفة الطبق 25 جنيه ويبيعه بـ 45 جنيه. في اليوم باع 20 طبق.',
    questionText: 'كم أرباحه في اليوم ده؟',
    hintText: 'ربح الطبق الواحد = 45 - 25 = 20، بعدين اضرب × عدد الأطباق',
    explanation: 'ربح الطبق = 45 - 25 = 20 جنيه. الربح الكلي = 20 × 20 = 400 جنيه',
    options: [
      { optionText: '400 جنيه', isCorrect: true },
      { optionText: '500 جنيه', isCorrect: false },
      { optionText: '900 جنيه', isCorrect: false },
      { optionText: '300 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'اشتريت لعبة بـ 120 جنيه وبعد فترة بعتها لصاحبك بـ 90 جنيه.',
    questionText: 'كم خسارتك؟',
    hintText: 'الخسارة = سعر الشراء - سعر البيع',
    explanation: '120 - 90 = 30 جنيه خسارة',
    options: [
      { optionText: '30 جنيه', isCorrect: true },
      { optionText: '210 جنيه', isCorrect: false },
      { optionText: '20 جنيه', isCorrect: false },
      { optionText: '90 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'بابا يريد يعمل ميزانية شهرية. المرتب 8000 جنيه. الإيجار 3000، الأكل 2500، المواصلات 1000.',
    questionText: 'كم هيتبقى من المرتب بعد المصاريف؟',
    hintText: 'اجمع المصاريف واطرحها من المرتب',
    explanation: 'المصاريف = 3000 + 2500 + 1000 = 6500. الباقي = 8000 - 6500 = 1500 جنيه',
    options: [
      { optionText: '1500 جنيه', isCorrect: true },
      { optionText: '2000 جنيه', isCorrect: false },
      { optionText: '1000 جنيه', isCorrect: false },
      { optionText: '2500 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نورا بتبيع عصير ليمون في المدرسة. بتشتري الليمون بـ 30 جنيه والسكر بـ 10 جنيه والأكواب بـ 10 جنيه. بتعمل 20 كوباية وتبيع الواحدة بـ 5 جنيه.',
    questionText: 'كم صافي ربحها؟',
    hintText: 'التكلفة = 30 + 10 + 10. إجمالي البيع = 20 × 5',
    explanation: 'التكلفة = 50 جنيه. إجمالي البيع = 20 × 5 = 100. صافي الربح = 100 - 50 = 50 جنيه',
    options: [
      { optionText: '50 جنيه', isCorrect: true },
      { optionText: '100 جنيه', isCorrect: false },
      { optionText: '70 جنيه', isCorrect: false },
      { optionText: '30 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عمرو يجمع مال حتى يشتري دراجة بـ 2400 جنيه. كل أسبوع يوفّر 200 جنيه ومعاه فعلاً 600 جنيه.',
    questionText: 'كم أسبوعاً يحتاج حتى يجمع المال كلها؟',
    hintText: 'المبلغ المتبقي = 2400 - 600. اقسم على المبلغ الأسبوعي',
    explanation: 'المتبقي = 2400 - 600 = 1800. عدد الأسابيع = 1800 ÷ 200 = 9 أسابيع',
    options: [
      { optionText: '9 أسابيع', isCorrect: true },
      { optionText: '12 أسبوع', isCorrect: false },
      { optionText: '6 أسابيع', isCorrect: false },
      { optionText: '10 أسابيع', isCorrect: false },
    ],
  },

  // --- Topic 7, Open-ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتبيع كب كيك في العيد. تكلفة الواحدة 8 جنيه وبتبيعها بـ 15 جنيه. باعت 30 واحدة.',
    questionText: 'كم صافي ربحها الكلي؟',
    correctAnswer: '210',
    correctAnswerNumeric: 210,
    hintText: 'ربح الواحدة = 15 - 8 = 7. اضرب × عدد المبيعات',
    explanation: 'ربح الواحدة = 15 - 8 = 7 جنيه. الربح الكلي = 7 × 30 = 210 جنيه',
  },

  // --- Topic 7, Open-ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'ماما تريد تعمل ميزانية لشراء أدوات المدرسة لـ 3 أطفال. كل واحد محتاج كشاكيل بـ 80 جنيه وأقلام بـ 40 جنيه وشنطة بـ 250 جنيه.',
    questionText: 'كم الميزانية الكلية المحتاجة؟',
    correctAnswer: '1110',
    correctAnswerNumeric: 1110,
    hintText: 'تكلفة الطفل الواحد = 80 + 40 + 250، بعدين اضرب × 3',
    explanation: 'تكلفة الطفل = 80 + 40 + 250 = 370. الكلي = 370 × 3 = 1110 جنيه',
  },

  // --- Topic 7, Open-ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'خالد اشترى 20 قطعة إكسسوار بـ 500 جنيه. باع 15 قطعة بـ 40 جنيه الواحدة والباقي ما اتباعش.',
    questionText: 'كم ربحه أو خسارته؟',
    correctAnswer: '100',
    correctAnswerNumeric: 100,
    hintText: 'إجمالي البيع = 15 × 40. الربح/الخسارة = إجمالي البيع - التكلفة',
    explanation: 'إجمالي البيع = 15 × 40 = 600. الربح = 600 - 500 = 100 جنيه ربح',
  },

  // --- Topic 7, Open-ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'في رمضان، ماما بتصرف يومياً: إفطار 150 جنيه، سحور 70 جنيه، ومشروبات 30 جنيه. الشهر 30 يوم.',
    questionText: 'كم ميزانية الأكل كله في رمضان؟',
    correctAnswer: '7500',
    correctAnswerNumeric: 7500,
    hintText: 'تكلفة اليوم = 150 + 70 + 30. اضرب × 30',
    explanation: 'تكلفة اليوم = 150 + 70 + 30 = 250. الشهر = 250 × 30 = 7500 جنيه',
  },
];
