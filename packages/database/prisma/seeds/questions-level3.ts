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
    realLifeContext: 'ماما بتعمل كيكة العيد ومحتاجة تخلط دقيق. حطت ١/٣ كيلو دقيق أبيض و١/٤ كيلو دقيق ذرة.',
    questionText: 'كام كيلو دقيق حطت في الكيكة كلها؟',
    hintText: 'وحّد المقامات الأول: المقام المشترك لـ ٣ و ٤ هو ١٢',
    explanation: '١/٣ + ١/٤ = ٤/١٢ + ٣/١٢ = ٧/١٢ كيلو',
    options: [
      { optionText: '٧/١٢', isCorrect: true },
      { optionText: '٢/٧', isCorrect: false },
      { optionText: '١/٢', isCorrect: false },
      { optionText: '٥/١٢', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في رمضان، أحمد شرب ٢/٥ لتر عصير قمر الدين وسارة شربت ١/٣ لتر.',
    questionText: 'كام لتر عصير اتشرب كله؟',
    hintText: 'المقام المشترك لـ ٥ و ٣ هو ١٥',
    explanation: '٢/٥ + ١/٣ = ٦/١٥ + ٥/١٥ = ١١/١٥ لتر',
    options: [
      { optionText: '١١/١٥', isCorrect: true },
      { optionText: '٣/٨', isCorrect: false },
      { optionText: '٣/٥', isCorrect: false },
      { optionText: '٧/١٥', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عندك ٣/٤ متر قماش وقصيت منه ١/٦ متر عشان تعمل شنطة صغيرة.',
    questionText: 'كام متر قماش فاضل؟',
    hintText: 'المقام المشترك لـ ٤ و ٦ هو ١٢',
    explanation: '٣/٤ - ١/٦ = ٩/١٢ - ٢/١٢ = ٧/١٢ متر',
    options: [
      { optionText: '٧/١٢', isCorrect: true },
      { optionText: '٢/٢', isCorrect: false },
      { optionText: '٥/١٢', isCorrect: false },
      { optionText: '١/٣', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما عملت أرز بلبن لإفطار رمضان. حطت ٥/٦ كوباية سكر الأول وبعدين زادت ١/٤ كوباية.',
    questionText: 'كام كوباية سكر حطت كلها؟',
    hintText: 'المقام المشترك لـ ٦ و ٤ هو ١٢',
    explanation: '٥/٦ + ١/٤ = ١٠/١٢ + ٣/١٢ = ١٣/١٢ = ١ و ١/١٢ كوباية',
    options: [
      { optionText: '١٣/١٢', isCorrect: true },
      { optionText: '٦/١٠', isCorrect: false },
      { optionText: '١١/١٢', isCorrect: false },
      { optionText: '٣/٥', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة العلوم، عملت تجربة ومليت ٢/٣ الكوباية ميّة وبعدين فضيت منها ٣/٨.',
    questionText: 'كام من الكوباية فاضل فيها ميّة؟',
    hintText: 'المقام المشترك لـ ٣ و ٨ هو ٢٤',
    explanation: '٢/٣ - ٣/٨ = ١٦/٢٤ - ٩/٢٤ = ٧/٢٤',
    options: [
      { optionText: '٧/٢٤', isCorrect: true },
      { optionText: '١/٥', isCorrect: false },
      { optionText: '٥/٢٤', isCorrect: false },
      { optionText: '١/٣', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'بابا اشترى ٣/٥ كيلو جبنة رومي و١/٢ كيلو جبنة بيضا للفطار.',
    questionText: 'كام كيلو جبنة اشترى كلها؟',
    hintText: 'المقام المشترك لـ ٥ و ٢ هو ١٠',
    explanation: '٣/٥ + ١/٢ = ٦/١٠ + ٥/١٠ = ١١/١٠ = ١ و ١/١٠ كيلو',
    options: [
      { optionText: '١١/١٠', isCorrect: true },
      { optionText: '٤/٧', isCorrect: false },
      { optionText: '٩/١٠', isCorrect: false },
      { optionText: '١/٢', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'كان معاك ٧/٨ لتر عصير مانجو وإديت صاحبك ٢/٥ لتر.',
    questionText: 'كام لتر فاضل معاك؟',
    hintText: 'المقام المشترك لـ ٨ و ٥ هو ٤٠',
    explanation: '٧/٨ - ٢/٥ = ٣٥/٤٠ - ١٦/٤٠ = ١٩/٤٠ لتر',
    options: [
      { optionText: '١٩/٤٠', isCorrect: true },
      { optionText: '٥/٣', isCorrect: false },
      { optionText: '٢١/٤٠', isCorrect: false },
      { optionText: '١/٢', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في تحضير الكنافة، حطيت ١/٣ كوباية سمنة وبعدين ١/٦ كوباية زبدة.',
    questionText: 'كام كوباية دهون حطيت كلها؟',
    hintText: 'المقام المشترك لـ ٣ و ٦ هو ٦',
    explanation: '١/٣ + ١/٦ = ٢/٦ + ١/٦ = ٣/٦ = ١/٢ كوباية',
    options: [
      { optionText: '١/٢', isCorrect: true },
      { optionText: '٢/٩', isCorrect: false },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '٥/٦', isCorrect: false },
    ],
  },

  // --- Topic 1, Open-ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في حفلة عيد ميلاد، أكلت ٢/٥ من التورتة وأخوك أكل ١/٤.',
    questionText: 'كام من التورتة اتاكل كله؟ (اكتب الإجابة ككسر)',
    correctAnswer: '13/20',
    correctAnswerNumeric: 0.65,
    hintText: 'المقام المشترك لـ ٥ و ٤ هو ٢٠',
    explanation: '٢/٥ + ١/٤ = ٨/٢٠ + ٥/٢٠ = ١٣/٢٠',
  },

  // --- Topic 1, Open-ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'ماما اشترت ٣/٤ كيلو فراولة واستعملت ٢/٥ كيلو في العصير.',
    questionText: 'كام كيلو فراولة فاضل؟ (اكتب الإجابة ككسر)',
    correctAnswer: '7/20',
    correctAnswerNumeric: 0.35,
    hintText: 'المقام المشترك لـ ٤ و ٥ هو ٢٠',
    explanation: '٣/٤ - ٢/٥ = ١٥/٢٠ - ٨/٢٠ = ٧/٢٠ كيلو',
  },

  // --- Topic 1, Open-ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'مشيت ٣/٨ كيلومتر للمدرسة وبعدين ١/٦ كيلومتر للمكتبة.',
    questionText: 'كام كيلومتر مشيت كلهم؟ (اكتب الإجابة ككسر)',
    correctAnswer: '13/24',
    correctAnswerNumeric: 0.5417,
    hintText: 'المقام المشترك لـ ٨ و ٦ هو ٢٤',
    explanation: '٣/٨ + ١/٦ = ٩/٢٤ + ٤/٢٤ = ١٣/٢٤ كيلومتر',
  },

  // --- Topic 1, Open-ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'كان عندك ٥/٦ لتر لبن واستخدمت ٣/١٠ لتر في عمل البان كيك.',
    questionText: 'كام لتر لبن فاضل؟ (اكتب الإجابة ككسر)',
    correctAnswer: '8/15',
    correctAnswerNumeric: 0.5333,
    hintText: 'المقام المشترك لـ ٦ و ١٠ هو ٣٠',
    explanation: '٥/٦ - ٣/١٠ = ٢٥/٣٠ - ٩/٣٠ = ١٦/٣٠ = ٨/١٥ لتر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: ضرب الكسور (Multiplying Fractions)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'ماما عملت بسبوسة وعايزة تاخد ٢/٣ الوصفة. الوصفة الأصلية محتاجة ٣/٤ كوباية سكر.',
    questionText: 'كام كوباية سكر هتحتاج؟',
    hintText: 'اضرب البسط × البسط والمقام × المقام',
    explanation: '٢/٣ × ٣/٤ = ٦/١٢ = ١/٢ كوباية',
    options: [
      { optionText: '١/٢', isCorrect: true },
      { optionText: '٥/٧', isCorrect: false },
      { optionText: '٦/٧', isCorrect: false },
      { optionText: '٢/٤', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيقطع خشب في حصة الأشغال. عنده لوح طوله ٤/٥ متر ومحتاج يقطع ١/٢ منه.',
    questionText: 'كام متر هيبقى طول القطعة اللي قطعها؟',
    hintText: 'اضرب الكسرين في بعض',
    explanation: '٤/٥ × ١/٢ = ٤/١٠ = ٢/٥ متر',
    options: [
      { optionText: '٢/٥', isCorrect: true },
      { optionText: '٥/٧', isCorrect: false },
      { optionText: '٤/٧', isCorrect: false },
      { optionText: '١/٥', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك ٣/٥ كيلو شوكولاتة وعايز توزع ١/٣ منها على صحابك في المدرسة.',
    questionText: 'كام كيلو شوكولاتة هتوزع؟',
    hintText: 'اضرب ٣/٥ في ١/٣',
    explanation: '٣/٥ × ١/٣ = ٣/١٥ = ١/٥ كيلو',
    options: [
      { optionText: '١/٥', isCorrect: true },
      { optionText: '٤/٨', isCorrect: false },
      { optionText: '٣/٨', isCorrect: false },
      { optionText: '٢/٥', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في رمضان، ماما بتعمل ٥ أطباق كنافة. كل طبق محتاج ٢/٣ كوباية سمنة.',
    questionText: 'كام كوباية سمنة هتحتاج كلها؟',
    hintText: 'اضرب العدد الصحيح في الكسر: ٥ × ٢/٣',
    explanation: '٥ × ٢/٣ = ١٠/٣ = ٣ و ١/٣ كوباية',
    options: [
      { optionText: '١٠/٣', isCorrect: true },
      { optionText: '٧/٣', isCorrect: false },
      { optionText: '٣', isCorrect: false },
      { optionText: '١٠/٥', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أرض الملعب طولها ٣/٤ كيلومتر وعرضها ٢/٥ كيلومتر.',
    questionText: 'كام مساحتها بالكيلومتر المربع؟',
    hintText: 'المساحة = الطول × العرض',
    explanation: '٣/٤ × ٢/٥ = ٦/٢٠ = ٣/١٠ كيلومتر مربع',
    options: [
      { optionText: '٣/١٠', isCorrect: true },
      { optionText: '٥/٩', isCorrect: false },
      { optionText: '٦/٩', isCorrect: false },
      { optionText: '١/٤', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'جدو عنده قطعة أرض ومداك ٢/٧ منها. وانت قررت تزرع ٣/٤ من نصيبك برسيم.',
    questionText: 'كام من الأرض كلها هتتزرع برسيم؟',
    hintText: 'اضرب نصيبك × الجزء اللي هتزرعه',
    explanation: '٢/٧ × ٣/٤ = ٦/٢٨ = ٣/١٤',
    options: [
      { optionText: '٣/١٤', isCorrect: true },
      { optionText: '٥/١١', isCorrect: false },
      { optionText: '٦/١١', isCorrect: false },
      { optionText: '١/٧', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في المطبخ، الوصفة محتاجة ٤/٩ كوباية زيت. ماما عايزة تعمل نص الوصفة بس.',
    questionText: 'كام كوباية زيت هتستخدم؟',
    hintText: 'اضرب ٤/٩ × ١/٢',
    explanation: '٤/٩ × ١/٢ = ٤/١٨ = ٢/٩ كوباية',
    options: [
      { optionText: '٢/٩', isCorrect: true },
      { optionText: '٥/١١', isCorrect: false },
      { optionText: '٤/١١', isCorrect: false },
      { optionText: '١/٩', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك ٧/٨ لتر عصير ليمون ومحتاج تاخد ٢/٣ منه تحطه في الثلاجة.',
    questionText: 'كام لتر هتحط في الثلاجة؟',
    hintText: 'اضرب ٧/٨ × ٢/٣',
    explanation: '٧/٨ × ٢/٣ = ١٤/٢٤ = ٧/١٢ لتر',
    options: [
      { optionText: '٧/١٢', isCorrect: true },
      { optionText: '٩/١١', isCorrect: false },
      { optionText: '١٤/١١', isCorrect: false },
      { optionText: '٥/١٢', isCorrect: false },
    ],
  },

  // --- Topic 2, Open-ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'ماما عندها ٣/٤ كيلو لحمة وعايزة تستخدم ٢/٥ منها لشوربة الإفطار.',
    questionText: 'كام كيلو لحمة هتستخدم في الشوربة؟ (اكتب الإجابة ككسر)',
    correctAnswer: '3/10',
    correctAnswerNumeric: 0.3,
    hintText: 'اضرب الكسرين: ٣/٤ × ٢/٥',
    explanation: '٣/٤ × ٢/٥ = ٦/٢٠ = ٣/١٠ كيلو',
  },

  // --- Topic 2, Open-ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'بابا اشترى ٤ أمتار قماش وعايز يستخدم ٣/٨ منهم لستارة الصالون.',
    questionText: 'كام متر قماش محتاج للستارة؟ (اكتب الإجابة ككسر)',
    correctAnswer: '3/2',
    correctAnswerNumeric: 1.5,
    hintText: 'اضرب ٤ × ٣/٨',
    explanation: '٤ × ٣/٨ = ١٢/٨ = ٣/٢ = ١.٥ متر',
  },

  // --- Topic 2, Open-ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'حوش المدرسة مساحته ٥/٦ فدان. المدير قرر يعمل ٢/٥ منه ملعب.',
    questionText: 'كام فدان هيبقى الملعب؟ (اكتب الإجابة ككسر)',
    correctAnswer: '1/3',
    correctAnswerNumeric: 0.3333,
    hintText: 'اضرب ٥/٦ × ٢/٥ وبسّط الناتج',
    explanation: '٥/٦ × ٢/٥ = ١٠/٣٠ = ١/٣ فدان',
  },

  // --- Topic 2, Open-ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'في العيد، جدتي عملت ٦ صواني بسبوسة. كل صينية محتاجة ٣/٤ كوباية سكر.',
    questionText: 'كام كوباية سكر محتاجة كلها؟ (اكتب الإجابة ككسر)',
    correctAnswer: '9/2',
    correctAnswerNumeric: 4.5,
    hintText: 'اضرب ٦ × ٣/٤',
    explanation: '٦ × ٣/٤ = ١٨/٤ = ٩/٢ = ٤.٥ كوباية',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: قسمة الكسور (Dividing Fractions)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عندك ٣/٤ كيلو حلاوة طحينية وعايز تقسمها على ٣ أصحاب بالتساوي.',
    questionText: 'كل واحد هياخد كام كيلو؟',
    hintText: 'القسمة على عدد صحيح = الضرب في مقلوبه: ٣/٤ ÷ ٣ = ٣/٤ × ١/٣',
    explanation: '٣/٤ ÷ ٣ = ٣/٤ × ١/٣ = ٣/١٢ = ١/٤ كيلو',
    options: [
      { optionText: '١/٤', isCorrect: true },
      { optionText: '٣/٧', isCorrect: false },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '٩/٤', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ماما عندها ٢/٣ لتر عصير وعايزة تملا أكواب كل واحد ١/٦ لتر.',
    questionText: 'كام كوباية هتقدر تملا؟',
    hintText: 'اقسم الكمية الكلية ÷ حجم الكوباية: ٢/٣ ÷ ١/٦',
    explanation: '٢/٣ ÷ ١/٦ = ٢/٣ × ٦/١ = ١٢/٣ = ٤ أكواب',
    options: [
      { optionText: '٤', isCorrect: true },
      { optionText: '٣', isCorrect: false },
      { optionText: '٢/١٨', isCorrect: false },
      { optionText: '٦', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 3 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عندك ٤/٥ كيلو فول سوداني وعايز تحط في كل كيس ٢/٥ كيلو.',
    questionText: 'كام كيس هتقدر تملا؟',
    hintText: 'اقسم ٤/٥ ÷ ٢/٥ = ٤/٥ × ٥/٢',
    explanation: '٤/٥ ÷ ٢/٥ = ٤/٥ × ٥/٢ = ٢٠/١٠ = ٢ كيس',
    options: [
      { optionText: '٢', isCorrect: true },
      { optionText: '٨/٢٥', isCorrect: false },
      { optionText: '٣', isCorrect: false },
      { optionText: '١٠/٢', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'حبل طوله ٥/٦ متر ومحتاج تقطعه قطع كل واحدة ١/٣ متر.',
    questionText: 'كام قطعة هتطلع؟',
    hintText: 'اقسم ٥/٦ ÷ ١/٣ = ٥/٦ × ٣/١',
    explanation: '٥/٦ ÷ ١/٣ = ٥/٦ × ٣/١ = ١٥/٦ = ٥/٢ = ٢ و ١/٢ قطعة',
    options: [
      { optionText: '٥/٢', isCorrect: true },
      { optionText: '٣', isCorrect: false },
      { optionText: '٥/١٨', isCorrect: false },
      { optionText: '٢', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عندك ٧/٨ كيلو جبنة وعايز تقسمها على ٧ ساندويتشات بالتساوي.',
    questionText: 'كل ساندويتش هياخد كام كيلو جبنة؟',
    hintText: 'اقسم ٧/٨ ÷ ٧',
    explanation: '٧/٨ ÷ ٧ = ٧/٨ × ١/٧ = ٧/٥٦ = ١/٨ كيلو',
    options: [
      { optionText: '١/٨', isCorrect: true },
      { optionText: '٧/١٥', isCorrect: false },
      { optionText: '١/٧', isCorrect: false },
      { optionText: '٤٩/٨', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في درس الطبخ، عندك ٣/٤ كوباية عسل وكل حلوى محتاجة ٣/٨ كوباية.',
    questionText: 'كام حلوى تقدر تعمل؟',
    hintText: 'اقسم ٣/٤ ÷ ٣/٨',
    explanation: '٣/٤ ÷ ٣/٨ = ٣/٤ × ٨/٣ = ٢٤/١٢ = ٢ حلوى',
    options: [
      { optionText: '٢', isCorrect: true },
      { optionText: '٩/٣٢', isCorrect: false },
      { optionText: '٣', isCorrect: false },
      { optionText: '١', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'خالتي عندها ٢/٣ متر شريطة ساتان وعايزة تعمل فيونكات كل واحدة ١/٩ متر.',
    questionText: 'كام فيونكة هتقدر تعمل؟',
    hintText: 'اقسم ٢/٣ ÷ ١/٩',
    explanation: '٢/٣ ÷ ١/٩ = ٢/٣ × ٩/١ = ١٨/٣ = ٦ فيونكات',
    options: [
      { optionText: '٦', isCorrect: true },
      { optionText: '٢/٢٧', isCorrect: false },
      { optionText: '٣', isCorrect: false },
      { optionText: '٩', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في المصنع، عندك ٥/٦ طن رمل ومحتاج تقسمه على شاحنات كل واحدة تشيل ٥/١٢ طن.',
    questionText: 'كام شاحنة محتاج؟',
    hintText: 'اقسم ٥/٦ ÷ ٥/١٢',
    explanation: '٥/٦ ÷ ٥/١٢ = ٥/٦ × ١٢/٥ = ٦٠/٣٠ = ٢ شاحنة',
    options: [
      { optionText: '٢', isCorrect: true },
      { optionText: '٢٥/٧٢', isCorrect: false },
      { optionText: '١٠/١٨', isCorrect: false },
      { optionText: '٤', isCorrect: false },
    ],
  },

  // --- Topic 3, Open-ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'ماما عندها ٤/٥ لتر لبن وعايزة توزعه على ٢ كوباية بالتساوي.',
    questionText: 'كل كوباية فيها كام لتر؟ (اكتب الإجابة ككسر)',
    correctAnswer: '2/5',
    correctAnswerNumeric: 0.4,
    hintText: 'اقسم ٤/٥ ÷ ٢',
    explanation: '٤/٥ ÷ ٢ = ٤/٥ × ١/٢ = ٤/١٠ = ٢/٥ لتر',
  },

  // --- Topic 3, Open-ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'عندك ٥/٨ كيلو مكسرات وعايز تحط في كل كيس ١/٤ كيلو.',
    questionText: 'كام كيس هتقدر تملا؟ (اكتب الإجابة كعدد)',
    correctAnswer: '5/2',
    correctAnswerNumeric: 2.5,
    hintText: 'اقسم ٥/٨ ÷ ١/٤ = ٥/٨ × ٤/١',
    explanation: '٥/٨ ÷ ١/٤ = ٥/٨ × ٤/١ = ٢٠/٨ = ٥/٢ = ٢.٥ كيس',
  },

  // --- Topic 3, Open-ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'في الورشة، عندك سلك طوله ٩/١٠ متر ومحتاج قطع كل واحدة ٣/١٠ متر.',
    questionText: 'كام قطعة هتطلع؟',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
    hintText: 'اقسم ٩/١٠ ÷ ٣/١٠',
    explanation: '٩/١٠ ÷ ٣/١٠ = ٩/١٠ × ١٠/٣ = ٩٠/٣٠ = ٣ قطع',
  },

  // --- Topic 3, Open-ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'خالتي عملت ٢/٣ كيلو كحك العيد وعايزة تقسمه على ٤ علب.',
    questionText: 'كل علبة فيها كام كيلو كحك؟ (اكتب الإجابة ككسر)',
    correctAnswer: '1/6',
    correctAnswerNumeric: 0.1667,
    hintText: 'اقسم ٢/٣ ÷ ٤ = ٢/٣ × ١/٤',
    explanation: '٢/٣ ÷ ٤ = ٢/٣ × ١/٤ = ٢/١٢ = ١/٦ كيلو',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 4: الأعداد الكسرية (Mixed Numbers & Improper Fractions)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 4, MCQ 1 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'ماما عملت ٢ و ١/٣ كيلو محشي وبعدين عملت ١ و ١/٤ كيلو تاني.',
    questionText: 'كام كيلو محشي عملت كلها؟',
    hintText: 'حوّل الأعداد الكسرية لكسور غير فعلية: ٧/٣ + ٥/٤',
    explanation: '٢ و ١/٣ + ١ و ١/٤ = ٧/٣ + ٥/٤ = ٢٨/١٢ + ١٥/١٢ = ٤٣/١٢ = ٣ و ٧/١٢',
    options: [
      { optionText: '٣ و ٧/١٢', isCorrect: true },
      { optionText: '٣ و ١/٢', isCorrect: false },
      { optionText: '٣ و ٢/٧', isCorrect: false },
      { optionText: '٤ و ١/١٢', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'حوّل الكسر غير الفعلي ١٧/٥ لعدد كسري.',
    questionText: 'ما هو العدد الكسري المكافئ لـ ١٧/٥؟',
    hintText: '١٧ ÷ ٥ = ٣ والباقي ٢',
    explanation: '١٧ ÷ ٥ = ٣ والباقي ٢، إذن ١٧/٥ = ٣ و ٢/٥',
    options: [
      { optionText: '٣ و ٢/٥', isCorrect: true },
      { optionText: '٣ و ٣/٥', isCorrect: false },
      { optionText: '٢ و ٧/٥', isCorrect: false },
      { optionText: '٤ و ١/٥', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'أحمد مشي ٣ و ١/٢ كيلومتر الصبح و٢ و ٣/٤ كيلومتر بالليل.',
    questionText: 'كام كيلومتر مشي في اليوم كله؟',
    hintText: 'اجمع الأعداد الصحيحة مع بعض والكسور مع بعض',
    explanation: '٣ و ١/٢ + ٢ و ٣/٤ = ٣ + ٢ + ٢/٤ + ٣/٤ = ٥ + ٥/٤ = ٦ و ١/٤',
    options: [
      { optionText: '٦ و ١/٤', isCorrect: true },
      { optionText: '٥ و ٣/٤', isCorrect: false },
      { optionText: '٦ و ١/٢', isCorrect: false },
      { optionText: '٥ و ٥/٦', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'حوّل العدد الكسري ٤ و ٣/٨ لكسر غير فعلي.',
    questionText: 'ما هو الكسر غير الفعلي المكافئ؟',
    hintText: 'اضرب العدد الصحيح × المقام + البسط: ٤ × ٨ + ٣',
    explanation: '٤ × ٨ + ٣ = ٣٥، إذن ٤ و ٣/٨ = ٣٥/٨',
    options: [
      { optionText: '٣٥/٨', isCorrect: true },
      { optionText: '٣٢/٨', isCorrect: false },
      { optionText: '١٢/٨', isCorrect: false },
      { optionText: '٣٧/٨', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عندك ٥ و ١/٣ أمتار خيط ومحتاج ٢ و ٢/٣ أمتار لعمل سوارة.',
    questionText: 'كام متر خيط هيفضل بعد ما تعمل السوارة؟',
    hintText: 'اطرح: ١٦/٣ - ٨/٣',
    explanation: '٥ و ١/٣ - ٢ و ٢/٣ = ١٦/٣ - ٨/٣ = ٨/٣ = ٢ و ٢/٣ متر',
    options: [
      { optionText: '٢ و ٢/٣', isCorrect: true },
      { optionText: '٣ و ١/٣', isCorrect: false },
      { optionText: '٢ و ١/٣', isCorrect: false },
      { optionText: '٣', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في إفطار رمضان، حضّرنا ١ و ٣/٤ كيلو أرز و٢ و ١/٢ كيلو لحمة.',
    questionText: 'كام كيلو أكل حضّرنا كله؟',
    hintText: 'اجمع: ٧/٤ + ٥/٢',
    explanation: '١ و ٣/٤ + ٢ و ١/٢ = ٧/٤ + ٥/٢ = ٧/٤ + ١٠/٤ = ١٧/٤ = ٤ و ١/٤',
    options: [
      { optionText: '٤ و ١/٤', isCorrect: true },
      { optionText: '٣ و ٣/٤', isCorrect: false },
      { optionText: '٤ و ١/٢', isCorrect: false },
      { optionText: '٣ و ١/٤', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رتّب الأعداد دي من الأصغر للأكبر: ٢ و ١/٣ ، ١١/٤ ، ٢ و ١/٢.',
    questionText: 'ما هو الترتيب الصحيح؟',
    hintText: 'حوّلهم كلهم لكسور غير فعلية وقارن: ٧/٣ ، ١١/٤ ، ٥/٢',
    explanation: '٧/٣ ≈ ٢.٣٣ ، ١١/٤ = ٢.٧٥ ، ٥/٢ = ٢.٥ → الترتيب: ٢ و ١/٣ ثم ٢ و ١/٢ ثم ١١/٤',
    options: [
      { optionText: '٢ و ١/٣ ، ٢ و ١/٢ ، ١١/٤', isCorrect: true },
      { optionText: '١١/٤ ، ٢ و ١/٢ ، ٢ و ١/٣', isCorrect: false },
      { optionText: '٢ و ١/٢ ، ٢ و ١/٣ ، ١١/٤', isCorrect: false },
      { optionText: '٢ و ١/٣ ، ١١/٤ ، ٢ و ١/٢', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت ٣ و ١/٥ كيلو برتقان واستعملت ١ و ٣/٥ كيلو في عصير.',
    questionText: 'كام كيلو برتقان فاضل؟',
    hintText: 'اطرح: ١٦/٥ - ٨/٥',
    explanation: '٣ و ١/٥ - ١ و ٣/٥ = ١٦/٥ - ٨/٥ = ٨/٥ = ١ و ٣/٥ كيلو',
    options: [
      { optionText: '١ و ٣/٥', isCorrect: true },
      { optionText: '٢ و ٢/٥', isCorrect: false },
      { optionText: '١ و ٢/٥', isCorrect: false },
      { optionText: '٢', isCorrect: false },
    ],
  },

  // --- Topic 4, Open-ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'حوّل العدد الكسري ٣ و ٥/٦ لكسر غير فعلي.',
    questionText: 'اكتب الكسر غير الفعلي المكافئ.',
    correctAnswer: '23/6',
    correctAnswerNumeric: 3.8333,
    hintText: 'اضرب ٣ × ٦ + ٥ = ؟',
    explanation: '٣ × ٦ + ٥ = ٢٣، إذن ٣ و ٥/٦ = ٢٣/٦',
  },

  // --- Topic 4, Open-ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'حوّل الكسر غير الفعلي ٢٩/٧ لعدد كسري.',
    questionText: 'اكتب العدد الكسري المكافئ. (مثال: ٢ و ١/٣)',
    correctAnswer: '4 و 1/7',
    correctAnswerNumeric: 4.1429,
    hintText: '٢٩ ÷ ٧ = ؟ والباقي = ؟',
    explanation: '٢٩ ÷ ٧ = ٤ والباقي ١، إذن ٢٩/٧ = ٤ و ١/٧',
  },

  // --- Topic 4, Open-ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'بابا اشترى ٢ و ٣/٤ كيلو تفاح و١ و ٥/٨ كيلو موز للبيت.',
    questionText: 'كام كيلو فاكهة اشترى كلها؟ (اكتب الإجابة كعدد كسري)',
    correctAnswer: '4 و 3/8',
    correctAnswerNumeric: 4.375,
    hintText: 'حوّل لكسور غير فعلية: ١١/٤ + ١٣/٨، ووحّد المقامات',
    explanation: '١١/٤ + ١٣/٨ = ٢٢/٨ + ١٣/٨ = ٣٥/٨ = ٤ و ٣/٨ كيلو',
  },

  // --- Topic 4, Open-ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'كان عندك ٥ و ١/٦ أمتار حبل واستعملت ٢ و ٢/٣ أمتار.',
    questionText: 'كام متر حبل فاضل؟ (اكتب الإجابة كعدد كسري)',
    correctAnswer: '2 و 1/2',
    correctAnswerNumeric: 2.5,
    hintText: 'حوّل: ٣١/٦ - ٨/٣ = ٣١/٦ - ١٦/٦',
    explanation: '٣١/٦ - ١٦/٦ = ١٥/٦ = ٥/٢ = ٢ و ١/٢ متر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: ضرب وقسمة العشرية (Multiply/Divide Decimals)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت ٣.٥ كيلو موز والكيلو بـ ١٢ جنيه.',
    questionText: 'كام الحساب كله؟',
    hintText: 'اضرب ٣.٥ × ١٢',
    explanation: '٣.٥ × ١٢ = ٤٢ جنيه',
    options: [
      { optionText: '٤٢ جنيه', isCorrect: true },
      { optionText: '٣٦ جنيه', isCorrect: false },
      { optionText: '٤٥ جنيه', isCorrect: false },
      { optionText: '٤٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت ٢.٤ كيلو عنب والكيلو بـ ١٥ جنيه.',
    questionText: 'كام هتدفع؟',
    hintText: 'اضرب ٢.٤ × ١٥',
    explanation: '٢.٤ × ١٥ = ٣٦ جنيه',
    options: [
      { optionText: '٣٦ جنيه', isCorrect: true },
      { optionText: '٣٠ جنيه', isCorrect: false },
      { optionText: '٣٨ جنيه', isCorrect: false },
      { optionText: '٣٤ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك ١٨.٦ لتر عصير ومحتاج توزعه على ٦ أكواب بالتساوي.',
    questionText: 'كل كوباية فيها كام لتر؟',
    hintText: 'اقسم ١٨.٦ ÷ ٦',
    explanation: '١٨.٦ ÷ ٦ = ٣.١ لتر',
    options: [
      { optionText: '٣.١', isCorrect: true },
      { optionText: '٣.٦', isCorrect: false },
      { optionText: '٢.٦', isCorrect: false },
      { optionText: '٣.٣', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت ٤ علب زبادي كل واحدة بـ ٧.٢٥ جنيه.',
    questionText: 'كام الحساب كله؟',
    hintText: 'اضرب ٤ × ٧.٢٥',
    explanation: '٤ × ٧.٢٥ = ٢٩ جنيه',
    options: [
      { optionText: '٢٩ جنيه', isCorrect: true },
      { optionText: '٢٨ جنيه', isCorrect: false },
      { optionText: '٢٩.٥ جنيه', isCorrect: false },
      { optionText: '٣٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'دفعت ٤٥.٥ جنيه تمن ٣.٥ كيلو طماطم.',
    questionText: 'كام سعر الكيلو الواحد؟',
    hintText: 'اقسم ٤٥.٥ ÷ ٣.٥',
    explanation: '٤٥.٥ ÷ ٣.٥ = ١٣ جنيه للكيلو',
    options: [
      { optionText: '١٣ جنيه', isCorrect: true },
      { optionText: '١٢.٥ جنيه', isCorrect: false },
      { optionText: '١٤ جنيه', isCorrect: false },
      { optionText: '١٥ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت ٠.٧٥ كيلو لحمة بـ ٢٨٠ جنيه للكيلو.',
    questionText: 'كام هتدفع؟',
    hintText: 'اضرب ٠.٧٥ × ٢٨٠',
    explanation: '٠.٧٥ × ٢٨٠ = ٢١٠ جنيه',
    options: [
      { optionText: '٢١٠ جنيه', isCorrect: true },
      { optionText: '٢٠٠ جنيه', isCorrect: false },
      { optionText: '٢٢٠ جنيه', isCorrect: false },
      { optionText: '١٩٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'مسافة البيت للمدرسة ١.٨ كيلومتر. رحت ورجعت ٥ أيام في الأسبوع.',
    questionText: 'كام كيلومتر مشيت في الأسبوع كله (رايح جاي)؟',
    hintText: 'المسافة اليومية = ١.٨ × ٢، بعدين اضرب × ٥',
    explanation: '١.٨ × ٢ = ٣.٦ كيلومتر في اليوم، ٣.٦ × ٥ = ١٨ كيلومتر',
    options: [
      { optionText: '١٨', isCorrect: true },
      { optionText: '٩', isCorrect: false },
      { optionText: '١٦.٢', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشتريت ٢.٥ متر قماش بـ ٨٤ جنيه للمتر.',
    questionText: 'كام الحساب كله؟',
    hintText: 'اضرب ٢.٥ × ٨٤',
    explanation: '٢.٥ × ٨٤ = ٢١٠ جنيه',
    options: [
      { optionText: '٢١٠ جنيه', isCorrect: true },
      { optionText: '٢٠٠ جنيه', isCorrect: false },
      { optionText: '١٦٨ جنيه', isCorrect: false },
      { optionText: '٢٢٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 5, Open-ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت ١.٥ كيلو مانجو والكيلو بـ ٣٥ جنيه.',
    questionText: 'كام هتدفع؟',
    correctAnswer: '52.5',
    correctAnswerNumeric: 52.5,
    hintText: 'اضرب ١.٥ × ٣٥',
    explanation: '١.٥ × ٣٥ = ٥٢.٥ جنيه',
  },

  // --- Topic 5, Open-ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'دفعت ٧٨ جنيه تمن ٢.٤ كيلو جوافة.',
    questionText: 'كام سعر الكيلو الواحد؟',
    correctAnswer: '32.5',
    correctAnswerNumeric: 32.5,
    hintText: 'اقسم ٧٨ ÷ ٢.٤',
    explanation: '٧٨ ÷ ٢.٤ = ٣٢.٥ جنيه للكيلو',
  },

  // --- Topic 5, Open-ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'ماما اشترت ٣ زجاجات عصير كل واحدة ١.٢٥ لتر.',
    questionText: 'كام لتر عصير عندها كلها؟',
    correctAnswer: '3.75',
    correctAnswerNumeric: 3.75,
    hintText: 'اضرب ٣ × ١.٢٥',
    explanation: '٣ × ١.٢٥ = ٣.٧٥ لتر',
  },

  // --- Topic 5, Open-ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'عندك ٢٤.٨ متر سلك ومحتاج تقطعه ٨ قطع متساوية.',
    questionText: 'كل قطعة طولها كام متر؟',
    correctAnswer: '3.1',
    correctAnswerNumeric: 3.1,
    hintText: 'اقسم ٢٤.٨ ÷ ٨',
    explanation: '٢٤.٨ ÷ ٨ = ٣.١ متر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: ترتيب العمليات (Order of Operations - BODMAS)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'بابا اشترى ٣ علب عصير بـ ٥ جنيه الواحدة وكيس شيبسي بـ ٨ جنيه.',
    questionText: 'احسب: ٣ × ٥ + ٨ = ؟',
    hintText: 'الضرب قبل الجمع! احسب ٣ × ٥ الأول',
    explanation: '٣ × ٥ = ١٥، بعدين ١٥ + ٨ = ٢٣',
    options: [
      { optionText: '٢٣', isCorrect: true },
      { optionText: '٣٩', isCorrect: false },
      { optionText: '١٨', isCorrect: false },
      { optionText: '٤٠', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في الفسحة اشتريت ٢ ساندويتش وعصير. الساندويتش بـ ١٠ جنيه والعصير بـ ٥ جنيه وأخوك إداك ٣ جنيه.',
    questionText: 'احسب: ٢ × ١٠ + ٥ - ٣ = ؟',
    hintText: 'الضرب الأول: ٢ × ١٠ = ٢٠، بعدين الجمع والطرح من الشمال لليمين',
    explanation: '٢ × ١٠ = ٢٠، بعدين ٢٠ + ٥ = ٢٥، بعدين ٢٥ - ٣ = ٢٢',
    options: [
      { optionText: '٢٢', isCorrect: true },
      { optionText: '٣٤', isCorrect: false },
      { optionText: '١٧', isCorrect: false },
      { optionText: '٢٥', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في مسابقة رياضيات، المطلوب تحسب العبارة دي.',
    questionText: 'احسب: (٨ + ٤) × ٣ = ؟',
    hintText: 'الأقواس أولاً! احسب اللي جوه القوس الأول',
    explanation: '٨ + ٤ = ١٢، بعدين ١٢ × ٣ = ٣٦',
    options: [
      { optionText: '٣٦', isCorrect: true },
      { optionText: '٢٠', isCorrect: false },
      { optionText: '١٥', isCorrect: false },
      { optionText: '٤٤', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ماما بتحسب تكلفة أغراض العيد.',
    questionText: 'احسب: ٥٠ - ٣ × (٤ + ٦) = ؟',
    hintText: 'القوس أولاً: ٤ + ٦ = ١٠، بعدين الضرب، بعدين الطرح',
    explanation: '٤ + ٦ = ١٠، بعدين ٣ × ١٠ = ٣٠، بعدين ٥٠ - ٣٠ = ٢٠',
    options: [
      { optionText: '٢٠', isCorrect: true },
      { optionText: '٤٧٠', isCorrect: false },
      { optionText: '١٧٠', isCorrect: false },
      { optionText: '١٠', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في حصة الرياضيات، المُدرّس طلب تحسب العبارة دي.',
    questionText: 'احسب: ٢٤ ÷ ٦ + ٣ × ٥ = ؟',
    hintText: 'القسمة والضرب أولاً (من الشمال لليمين)، بعدين الجمع',
    explanation: '٢٤ ÷ ٦ = ٤، و ٣ × ٥ = ١٥، بعدين ٤ + ١٥ = ١٩',
    options: [
      { optionText: '١٩', isCorrect: true },
      { optionText: '٣٥', isCorrect: false },
      { optionText: '٢٢', isCorrect: false },
      { optionText: '٩', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'صاحبك بيتحداك تحل المسألة دي بسرعة.',
    questionText: 'احسب: (١٥ - ٧) × ٢ + ٤ = ؟',
    hintText: 'القوس أولاً: ١٥ - ٧ = ٨',
    explanation: '١٥ - ٧ = ٨، بعدين ٨ × ٢ = ١٦، بعدين ١٦ + ٤ = ٢٠',
    options: [
      { optionText: '٢٠', isCorrect: true },
      { optionText: '١٢', isCorrect: false },
      { optionText: '٢٤', isCorrect: false },
      { optionText: '١٦', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 7 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'بتحسب مصاريف رحلة مدرسية.',
    questionText: 'احسب: ١٠٠ - (٢٠ + ١٥) × ٢ = ؟',
    hintText: 'القوس أولاً: ٢٠ + ١٥ = ٣٥، بعدين الضرب، بعدين الطرح',
    explanation: '٢٠ + ١٥ = ٣٥، بعدين ٣٥ × ٢ = ٧٠، بعدين ١٠٠ - ٧٠ = ٣٠',
    options: [
      { optionText: '٣٠', isCorrect: true },
      { optionText: '١٧٠', isCorrect: false },
      { optionText: '٦٥', isCorrect: false },
      { optionText: '١٣٠', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في مسابقة سريعة بين الفصول.',
    questionText: 'احسب: ٤٨ ÷ (٢ × ٤) + ٧ = ؟',
    hintText: 'القوس أولاً: ٢ × ٤ = ٨، بعدين القسمة، بعدين الجمع',
    explanation: '٢ × ٤ = ٨، بعدين ٤٨ ÷ ٨ = ٦، بعدين ٦ + ٧ = ١٣',
    options: [
      { optionText: '١٣', isCorrect: true },
      { optionText: '٣١', isCorrect: false },
      { optionText: '١١', isCorrect: false },
      { optionText: '١٧', isCorrect: false },
    ],
  },

  // --- Topic 6, Open-ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'في الامتحان، المطلوب تحسب العبارة الحسابية دي.',
    questionText: 'احسب: ٦ + ٣ × (١٠ - ٤) = ؟',
    correctAnswer: '24',
    correctAnswerNumeric: 24,
    hintText: 'القوس أولاً: ١٠ - ٤ = ٦، بعدين الضرب، بعدين الجمع',
    explanation: '١٠ - ٤ = ٦، بعدين ٣ × ٦ = ١٨، بعدين ٦ + ١٨ = ٢٤',
  },

  // --- Topic 6, Open-ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'سؤال تحدي من المُدرّس.',
    questionText: 'احسب: (٩ + ٣) ÷ ٤ + ٢ × ٥ = ؟',
    correctAnswer: '13',
    correctAnswerNumeric: 13,
    hintText: 'القوس أولاً: ٩ + ٣ = ١٢، بعدين القسمة والضرب، بعدين الجمع',
    explanation: '٩ + ٣ = ١٢، بعدين ١٢ ÷ ٤ = ٣، و ٢ × ٥ = ١٠، بعدين ٣ + ١٠ = ١٣',
  },

  // --- Topic 6, Open-ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'بتلعب لعبة رياضيات على التابلت.',
    questionText: 'احسب: ٤٠ ÷ ٥ - ٢ + ٣ × ٣ = ؟',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
    hintText: 'القسمة والضرب أولاً، بعدين الجمع والطرح',
    explanation: '٤٠ ÷ ٥ = ٨، و ٣ × ٣ = ٩، بعدين ٨ - ٢ + ٩ = ١٥',
  },

  // --- Topic 6, Open-ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'في مسابقة النينجا الحسابي.',
    questionText: 'احسب: (٢٠ - ٨) × ٢ ÷ ٣ = ؟',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
    hintText: 'القوس أولاً: ٢٠ - ٨ = ١٢، بعدين الضرب والقسمة من الشمال لليمين',
    explanation: '٢٠ - ٨ = ١٢، بعدين ١٢ × ٢ = ٢٤، بعدين ٢٤ ÷ ٣ = ٨',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: المال والأعمال (Money Math - profit, loss, budgets)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أحمد فتح كُشك صغير وبيبيع ساندويتشات شاورما. بيشتري المكونات بـ ٣٠ جنيه ويبيع الساندويتش بـ ٥٠ جنيه.',
    questionText: 'كام ربحه في الساندويتش الواحد؟',
    hintText: 'الربح = سعر البيع - سعر التكلفة',
    explanation: '٥٠ - ٣٠ = ٢٠ جنيه ربح',
    options: [
      { optionText: '٢٠ جنيه', isCorrect: true },
      { optionText: '٣٠ جنيه', isCorrect: false },
      { optionText: '١٥ جنيه', isCorrect: false },
      { optionText: '٨٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة اشترت ١٠ أساور بـ ١٥٠ جنيه وباعتهم بـ ٢٠ جنيه الواحدة.',
    questionText: 'كام ربحها أو خسارتها الكلية؟',
    hintText: 'احسب إجمالي البيع: ١٠ × ٢٠ = ؟ ثم اطرح التكلفة',
    explanation: 'إجمالي البيع = ١٠ × ٢٠ = ٢٠٠ جنيه. الربح = ٢٠٠ - ١٥٠ = ٥٠ جنيه ربح',
    options: [
      { optionText: 'ربح ٥٠ جنيه', isCorrect: true },
      { optionText: 'خسارة ٥٠ جنيه', isCorrect: false },
      { optionText: 'ربح ١٠٠ جنيه', isCorrect: false },
      { optionText: 'ربح ٣٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'ماما عايزة تعمل ميزانية للمدرسة. الكتب بـ ٢٥٠ جنيه، الأدوات بـ ١٥٠ جنيه، الشنطة بـ ٣٥٠ جنيه، والمعاها ١٠٠٠ جنيه.',
    questionText: 'كام هيفضل معاها بعد المصاريف دي كلها؟',
    hintText: 'اجمع المصاريف كلها واطرحها من المبلغ المتاح',
    explanation: 'المصاريف = ٢٥٠ + ١٥٠ + ٣٥٠ = ٧٥٠. الباقي = ١٠٠٠ - ٧٥٠ = ٢٥٠ جنيه',
    options: [
      { optionText: '٢٥٠ جنيه', isCorrect: true },
      { optionText: '٣٠٠ جنيه', isCorrect: false },
      { optionText: '٢٠٠ جنيه', isCorrect: false },
      { optionText: '١٥٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'محمد بيبيع كشري في العربية. تكلفة الطبق ٢٥ جنيه ويبيعه بـ ٤٥ جنيه. في اليوم باع ٢٠ طبق.',
    questionText: 'كام أرباحه في اليوم ده؟',
    hintText: 'ربح الطبق الواحد = ٤٥ - ٢٥ = ٢٠، بعدين اضرب × عدد الأطباق',
    explanation: 'ربح الطبق = ٤٥ - ٢٥ = ٢٠ جنيه. الربح الكلي = ٢٠ × ٢٠ = ٤٠٠ جنيه',
    options: [
      { optionText: '٤٠٠ جنيه', isCorrect: true },
      { optionText: '٥٠٠ جنيه', isCorrect: false },
      { optionText: '٩٠٠ جنيه', isCorrect: false },
      { optionText: '٣٠٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'اشتريت لعبة بـ ١٢٠ جنيه وبعد فترة بعتها لصاحبك بـ ٩٠ جنيه.',
    questionText: 'كام خسارتك؟',
    hintText: 'الخسارة = سعر الشراء - سعر البيع',
    explanation: '١٢٠ - ٩٠ = ٣٠ جنيه خسارة',
    options: [
      { optionText: '٣٠ جنيه', isCorrect: true },
      { optionText: '٢١٠ جنيه', isCorrect: false },
      { optionText: '٢٠ جنيه', isCorrect: false },
      { optionText: '٩٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'بابا عايز يعمل ميزانية شهرية. المرتب ٨٠٠٠ جنيه. الإيجار ٣٠٠٠، الأكل ٢٥٠٠، المواصلات ١٠٠٠.',
    questionText: 'كام هيفضل من المرتب بعد المصاريف؟',
    hintText: 'اجمع المصاريف واطرحها من المرتب',
    explanation: 'المصاريف = ٣٠٠٠ + ٢٥٠٠ + ١٠٠٠ = ٦٥٠٠. الباقي = ٨٠٠٠ - ٦٥٠٠ = ١٥٠٠ جنيه',
    options: [
      { optionText: '١٥٠٠ جنيه', isCorrect: true },
      { optionText: '٢٠٠٠ جنيه', isCorrect: false },
      { optionText: '١٠٠٠ جنيه', isCorrect: false },
      { optionText: '٢٥٠٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نورا بتبيع عصير ليمون في المدرسة. بتشتري الليمون بـ ٣٠ جنيه والسكر بـ ١٠ جنيه والأكواب بـ ١٠ جنيه. بتعمل ٢٠ كوباية وتبيع الواحدة بـ ٥ جنيه.',
    questionText: 'كام صافي ربحها؟',
    hintText: 'التكلفة = ٣٠ + ١٠ + ١٠. إجمالي البيع = ٢٠ × ٥',
    explanation: 'التكلفة = ٥٠ جنيه. إجمالي البيع = ٢٠ × ٥ = ١٠٠. صافي الربح = ١٠٠ - ٥٠ = ٥٠ جنيه',
    options: [
      { optionText: '٥٠ جنيه', isCorrect: true },
      { optionText: '١٠٠ جنيه', isCorrect: false },
      { optionText: '٧٠ جنيه', isCorrect: false },
      { optionText: '٣٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عمرو بيجمع فلوس عشان يشتري دراجة بـ ٢٤٠٠ جنيه. كل أسبوع بيحوّش ٢٠٠ جنيه ومعاه فعلاً ٦٠٠ جنيه.',
    questionText: 'كام أسبوع كمان محتاج عشان يجمع الفلوس كلها؟',
    hintText: 'المبلغ المتبقي = ٢٤٠٠ - ٦٠٠. اقسم على المبلغ الأسبوعي',
    explanation: 'المتبقي = ٢٤٠٠ - ٦٠٠ = ١٨٠٠. عدد الأسابيع = ١٨٠٠ ÷ ٢٠٠ = ٩ أسابيع',
    options: [
      { optionText: '٩ أسابيع', isCorrect: true },
      { optionText: '١٢ أسبوع', isCorrect: false },
      { optionText: '٦ أسابيع', isCorrect: false },
      { optionText: '١٠ أسابيع', isCorrect: false },
    ],
  },

  // --- Topic 7, Open-ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتبيع كب كيك في العيد. تكلفة الواحدة ٨ جنيه وبتبيعها بـ ١٥ جنيه. باعت ٣٠ واحدة.',
    questionText: 'كام صافي ربحها الكلي؟',
    correctAnswer: '210',
    correctAnswerNumeric: 210,
    hintText: 'ربح الواحدة = ١٥ - ٨ = ٧. اضرب × عدد المبيعات',
    explanation: 'ربح الواحدة = ١٥ - ٨ = ٧ جنيه. الربح الكلي = ٧ × ٣٠ = ٢١٠ جنيه',
  },

  // --- Topic 7, Open-ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'ماما عايزة تعمل ميزانية لشراء أدوات المدرسة لـ ٣ أطفال. كل واحد محتاج كشاكيل بـ ٨٠ جنيه وأقلام بـ ٤٠ جنيه وشنطة بـ ٢٥٠ جنيه.',
    questionText: 'كام الميزانية الكلية المحتاجة؟',
    correctAnswer: '1110',
    correctAnswerNumeric: 1110,
    hintText: 'تكلفة الطفل الواحد = ٨٠ + ٤٠ + ٢٥٠، بعدين اضرب × ٣',
    explanation: 'تكلفة الطفل = ٨٠ + ٤٠ + ٢٥٠ = ٣٧٠. الكلي = ٣٧٠ × ٣ = ١١١٠ جنيه',
  },

  // --- Topic 7, Open-ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'خالد اشترى ٢٠ قطعة إكسسوار بـ ٥٠٠ جنيه. باع ١٥ قطعة بـ ٤٠ جنيه الواحدة والباقي ما اتباعش.',
    questionText: 'كام ربحه أو خسارته؟',
    correctAnswer: '100',
    correctAnswerNumeric: 100,
    hintText: 'إجمالي البيع = ١٥ × ٤٠. الربح/الخسارة = إجمالي البيع - التكلفة',
    explanation: 'إجمالي البيع = ١٥ × ٤٠ = ٦٠٠. الربح = ٦٠٠ - ٥٠٠ = ١٠٠ جنيه ربح',
  },

  // --- Topic 7, Open-ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'في رمضان، ماما بتصرف يومياً: إفطار ١٥٠ جنيه، سحور ٧٠ جنيه، ومشروبات ٣٠ جنيه. الشهر ٣٠ يوم.',
    questionText: 'كام ميزانية الأكل كله في رمضان؟',
    correctAnswer: '7500',
    correctAnswerNumeric: 7500,
    hintText: 'تكلفة اليوم = ١٥٠ + ٧٠ + ٣٠. اضرب × ٣٠',
    explanation: 'تكلفة اليوم = ١٥٠ + ٧٠ + ٣٠ = ٢٥٠. الشهر = ٢٥٠ × ٣٠ = ٧٥٠٠ جنيه',
  },
];
