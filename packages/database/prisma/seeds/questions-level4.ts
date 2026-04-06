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

export const level4Questions: QuestionSeed[] = [
  // ══════════════════════════════════════════════════════════════════════
  // Topic 1: النسبة والتناسب (Ratio & Proportion)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 1, MCQ 1 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما بتعمل كشري لـ 4 أشخاص ومحتاجة 2 كوباية عدس. اليوم عندنا 8 ضيوف.',
    questionText: 'محتاجة كم كوباية عدس حتى تعمل كشري لـ 8 أشخاص؟',
    hintText: 'عدد الأشخاص اتضاعف، يكون الكمية هتتضاعف',
    explanation: '8 ÷ 4 = 2 (الضعف)، يكون 2 × 2 = 4 كوبايات عدس',
    options: [
      { optionText: '4 كوبايات', isCorrect: true },
      { optionText: '3 كوبايات', isCorrect: false },
      { optionText: '6 كوبايات', isCorrect: false },
      { optionText: '5 كوبايات', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة الرسم، يريد تعمل لون أخضر. الوصفة بتقول 3 أجزاء أزرق لكل 1 جزء أصفر.',
    questionText: 'لو استخدمت 12 جزء أزرق، محتاج كم جزء أصفر؟',
    hintText: 'النسبة أزرق : أصفر = 3 : 1',
    explanation: '12 ÷ 3 = 4، يكون محتاج 4 أجزاء أصفر',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'على الخريطة، كل 1 سم بيمثل 50 كم في الحقيقة. المسافة بين مدينتين على الخريطة 4 سم.',
    questionText: 'كم كيلومتر المسافة الحقيقية بين المدينتين؟',
    hintText: 'اضرب عدد السنتيمترات في 50',
    explanation: '4 × 50 = 200 كم',
    options: [
      { optionText: '200 كم', isCorrect: true },
      { optionText: '150 كم', isCorrect: false },
      { optionText: '250 كم', isCorrect: false },
      { optionText: '100 كم', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما بتعمل بسبوسة لـ 6 أشخاص ومحتاجة 3 كوبايات سميد. تريد تعمل لـ 12 شخص.',
    questionText: 'محتاجة كم كوباية سميد لـ 12 شخص؟',
    hintText: '12 ÷ 6 = 2 يكون الكمية هتتضاعف',
    explanation: '12 ÷ 6 = 2 (ضعف العدد)، يكون 3 × 2 = 6 كوبايات سميد',
    options: [
      { optionText: '6 كوبايات', isCorrect: true },
      { optionText: '4 كوبايات', isCorrect: false },
      { optionText: '9 كوبايات', isCorrect: false },
      { optionText: '5 كوبايات', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في مصنع مياه، كل 3 لتر مياه بيحتاجوا 1 لتر شربات حتى يعملوا عصير.',
    questionText: 'لو عندك 15 لتر مياه، محتاج كم لتر شربات؟',
    hintText: 'النسبة مياه : شربات = 3 : 1',
    explanation: '15 ÷ 3 = 5 لتر شربات',
    options: [
      { optionText: '5 لتر', isCorrect: true },
      { optionText: '3 لتر', isCorrect: false },
      { optionText: '6 لتر', isCorrect: false },
      { optionText: '4 لتر', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'على الخريطة، كل 2 سم بيمثل 70 كم. المسافة على الخريطة بين القاهرة والمنصورة 3 سم.',
    questionText: 'كم كيلومتر تقريبًا المسافة الحقيقية؟',
    hintText: 'لو 2 سم = 70 كم، يكون 1 سم = 35 كم',
    explanation: '1 سم = 70 ÷ 2 = 35 كم، يكون 3 سم = 35 × 3 = 105 كم',
    options: [
      { optionText: '105 كم', isCorrect: true },
      { optionText: '140 كم', isCorrect: false },
      { optionText: '70 كم', isCorrect: false },
      { optionText: '210 كم', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في الفصل، نسبة البنات للولاد 3 : 5. عدد الولاد 20.',
    questionText: 'كم بنت في الفصل؟',
    hintText: 'لو 5 أجزاء = 20، يكون الجزء الواحد = 4',
    explanation: '20 ÷ 5 = 4 (قيمة الجزء)، يكون عدد البنات = 3 × 4 = 12',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '15', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'وصفة الكيكة بتقول 2 بيضة لكل 1 كوباية دقيق. يريد تعمل كيكة كبيرة بـ 5 كوبايات دقيق.',
    questionText: 'محتاج كم بيضة؟',
    hintText: 'النسبة بيض : دقيق = 2 : 1',
    explanation: 'لكل كوباية دقيق محتاج 2 بيضة، يكون 5 × 2 = 10 بيضات',
    options: [
      { optionText: '10', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // --- Topic 1, Open-ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'ماما بتعمل كشري لـ 4 أشخاص ومحتاجة 1 كوباية أرز. جالنا 12 ضيف.',
    questionText: 'محتاجة كم كوباية أرز لـ 12 شخص؟',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
    hintText: '12 ÷ 4 = 3 يكون الكمية هتتضرب في 3',
    explanation: '12 ÷ 4 = 3 (ثلاثة أضعاف)، يكون 1 × 3 = 3 كوبايات أرز',
  },

  // --- Topic 1, Open-ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'على الخريطة، كل 1 سم = 40 كم. المسافة على الخريطة بين مدينتين 6 سم.',
    questionText: 'كم كيلومتر المسافة الحقيقية؟',
    correctAnswer: '240',
    correctAnswerNumeric: 240,
    hintText: 'اضرب عدد السنتيمترات في مقياس الرسم',
    explanation: '6 × 40 = 240 كم',
  },

  // --- Topic 1, Open-ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'يريد تعمل لون برتقالي. النسبة: 2 أجزاء أحمر لكل 3 أجزاء أصفر. استخدمت 8 أجزاء أحمر.',
    questionText: 'محتاج كم جزء أصفر؟',
    correctAnswer: '12',
    correctAnswerNumeric: 12,
    hintText: '8 ÷ 2 = 4 يكون كل حاجة هتتضرب في 4',
    explanation: '8 ÷ 2 = 4 (المضاعف)، يكون 3 × 4 = 12 جزء أصفر',
  },

  // --- Topic 1, Open-ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في معسكر كشافة، نسبة المشرفين للأطفال 1 : 8. عدد الأطفال 40.',
    questionText: 'كم مشرف لازم يكون موجود؟',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
    hintText: 'كل 8 أطفال محتاجين 1 مشرف',
    explanation: '40 ÷ 8 = 5 مشرفين',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: النسبة المئوية (Percentages)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أحمد جاب في امتحان الرياضيات 42 من 60.',
    questionText: 'كم في المية نتيجة أحمد؟',
    hintText: 'اقسم الدرجة على الدرجة الكلية واضرب في 100',
    explanation: '(42 ÷ 60) × 100 = 70٪',
    options: [
      { optionText: '70٪', isCorrect: true },
      { optionText: '65٪', isCorrect: false },
      { optionText: '75٪', isCorrect: false },
      { optionText: '80٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'الموبايل بتاع سارة البطارية بتاعته 100٪ الصبح. استخدمت 35٪ لحد الضهر.',
    questionText: 'كم في المية بطارية المتبقية؟',
    hintText: 'اطرح النسبة المستخدمة من 100',
    explanation: '100٪ - 35٪ = 65٪',
    options: [
      { optionText: '65٪', isCorrect: true },
      { optionText: '70٪', isCorrect: false },
      { optionText: '55٪', isCorrect: false },
      { optionText: '75٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'باقة النت بتاعتك 20 جيجا. استخدمت 15 جيجا هذا الشهر.',
    questionText: 'كم في المية من النت استخدمته؟',
    hintText: 'اقسم المستخدم على الكلي واضرب في 100',
    explanation: '(15 ÷ 20) × 100 = 75٪',
    options: [
      { optionText: '75٪', isCorrect: true },
      { optionText: '60٪', isCorrect: false },
      { optionText: '80٪', isCorrect: false },
      { optionText: '70٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في الفصل 40 طالب. 30 طالب حضروا الرحلة المدرسية.',
    questionText: 'كم في المية من الطلاب حضروا الرحلة؟',
    hintText: 'اقسم اللي حضروا على العدد الكلي واضرب في 100',
    explanation: '(30 ÷ 40) × 100 = 75٪',
    options: [
      { optionText: '75٪', isCorrect: true },
      { optionText: '60٪', isCorrect: false },
      { optionText: '85٪', isCorrect: false },
      { optionText: '70٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'نورا جابت 36 من 40 في امتحان العلوم.',
    questionText: 'كم في المية نتيجة نورا؟',
    hintText: 'اقسم 36 على 40 واضرب في 100',
    explanation: '(36 ÷ 40) × 100 = 90٪',
    options: [
      { optionText: '90٪', isCorrect: true },
      { optionText: '85٪', isCorrect: false },
      { optionText: '80٪', isCorrect: false },
      { optionText: '95٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'محمد عنده 50 جنيه وصرف 20 جنيه على الأكل.',
    questionText: 'كم في المية من ماله صرفها؟',
    hintText: 'اقسم اللي اتصرف على الكلي واضرب في 100',
    explanation: '(20 ÷ 50) × 100 = 40٪',
    options: [
      { optionText: '40٪', isCorrect: true },
      { optionText: '35٪', isCorrect: false },
      { optionText: '50٪', isCorrect: false },
      { optionText: '25٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في مباراة كرة قدم، الفريق سدد 20 شوطة، 8 منهم دخلت الجون.',
    questionText: 'كم في المية من الشوطات جابت جول؟',
    hintText: 'اقسم عدد الأهداف على عدد الشوطات واضرب في 100',
    explanation: '(8 ÷ 20) × 100 = 40٪',
    options: [
      { optionText: '40٪', isCorrect: true },
      { optionText: '35٪', isCorrect: false },
      { optionText: '50٪', isCorrect: false },
      { optionText: '45٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'تليفون سارة فيه 80 جيجا مساحة. استخدمت 60 جيجا في الصور والتطبيقات.',
    questionText: 'كم في المية من المساحة لسه فاضية؟',
    hintText: 'احسب المساحة الفاضية الأول وبعدين اقسم على الكلي',
    explanation: 'الفاضي = 80 - 60 = 20 جيجا. (20 ÷ 80) × 100 = 25٪',
    options: [
      { optionText: '25٪', isCorrect: true },
      { optionText: '20٪', isCorrect: false },
      { optionText: '30٪', isCorrect: false },
      { optionText: '75٪', isCorrect: false },
    ],
  },

  // --- Topic 2, Open-ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'كريم جاب 27 من 30 في امتحان العربي.',
    questionText: 'كم في المية نتيجة كريم؟',
    correctAnswer: '90',
    correctAnswerNumeric: 90,
    hintText: 'اقسم 27 على 30 واضرب في 100',
    explanation: '(27 ÷ 30) × 100 = 90٪',
  },

  // --- Topic 2, Open-ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'البطارية كانت 100٪ ونزلت 45٪ بعد ما لعبت.',
    questionText: 'كم في المية بطارية المتبقية؟',
    correctAnswer: '55',
    correctAnswerNumeric: 55,
    hintText: 'اطرح اللي نزل من 100',
    explanation: '100 - 45 = 55٪ المتبقية',
  },

  // --- Topic 2, Open-ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'باقة النت 10 جيجا واستخدمت 3 جيجا.',
    questionText: 'كم في المية من النت استخدمته؟',
    correctAnswer: '30',
    correctAnswerNumeric: 30,
    hintText: 'اقسم المستخدم على الكلي واضرب في 100',
    explanation: '(3 ÷ 10) × 100 = 30٪',
  },

  // --- Topic 2, Open-ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين عندها 25 كتاب وقرأت 20 كتاب منهم.',
    questionText: 'كم في المية من الكتب قرأتها؟',
    correctAnswer: '80',
    correctAnswerNumeric: 80,
    hintText: 'اقسم عدد الكتب اللي قرأتها على العدد الكلي واضرب في 100',
    explanation: '(20 ÷ 25) × 100 = 80٪',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: تطبيقات النسبة المئوية (Percentage Applications)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في الأوكازيون، تيشيرت سعره 200 جنيه وعليه خصم 30٪.',
    questionText: 'كم ستدفع بعد الخصم؟',
    hintText: 'احسب قيمة الخصم الأول وبعدين اطرحها من السعر',
    explanation: 'الخصم = 200 × 30 ÷ 100 = 60 جنيه. السعر بعد الخصم = 200 - 60 = 140 جنيه',
    options: [
      { optionText: '140 جنيه', isCorrect: true },
      { optionText: '170 جنيه', isCorrect: false },
      { optionText: '160 جنيه', isCorrect: false },
      { optionText: '130 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سعر كيلو الفراخ كان 100 جنيه وزاد 20٪.',
    questionText: 'كم سعر الكيلو بعد الزيادة؟',
    hintText: 'احسب قيمة الزيادة واجمعها على السعر الأصلي',
    explanation: 'الزيادة = 100 × 20 ÷ 100 = 20 جنيه. السعر الجديد = 100 + 20 = 120 جنيه',
    options: [
      { optionText: '120 جنيه', isCorrect: true },
      { optionText: '110 جنيه', isCorrect: false },
      { optionText: '130 جنيه', isCorrect: false },
      { optionText: '125 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 3 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'بابا اشترى تابلت سعره 4000 جنيه وعليه ضريبة قيمة مضافة 10٪.',
    questionText: 'كم المبلغ الكلي اللي هيدفعه؟',
    hintText: 'احسب الضريبة وزوّدها على السعر',
    explanation: 'الضريبة = 4000 × 10 ÷ 100 = 400 جنيه. الإجمالي = 4000 + 400 = 4400 جنيه',
    options: [
      { optionText: '4400 جنيه', isCorrect: true },
      { optionText: '4200 جنيه', isCorrect: false },
      { optionText: '4040 جنيه', isCorrect: false },
      { optionText: '4800 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'جزمة في المحل سعرها 500 جنيه وعليها تخفيض 20٪.',
    questionText: 'كم سعر الجزمة بعد التخفيض؟',
    hintText: 'الخصم = السعر × النسبة ÷ 100',
    explanation: 'الخصم = 500 × 20 ÷ 100 = 100 جنيه. السعر = 500 - 100 = 400 جنيه',
    options: [
      { optionText: '400 جنيه', isCorrect: true },
      { optionText: '450 جنيه', isCorrect: false },
      { optionText: '380 جنيه', isCorrect: false },
      { optionText: '350 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سعر الاشتراك في النادي كان 600 جنيه وزاد 15٪.',
    questionText: 'كم سعر الاشتراك الجديد؟',
    hintText: 'الزيادة = 600 × 15 ÷ 100',
    explanation: 'الزيادة = 600 × 15 ÷ 100 = 90 جنيه. السعر الجديد = 600 + 90 = 690 جنيه',
    options: [
      { optionText: '690 جنيه', isCorrect: true },
      { optionText: '700 جنيه', isCorrect: false },
      { optionText: '650 جنيه', isCorrect: false },
      { optionText: '750 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'شنطة مدرسة سعرها 300 جنيه. المحل عامل عرض خصم 25٪.',
    questionText: 'هتوفر كم جنيه؟',
    hintText: 'التوفير = السعر × نسبة الخصم ÷ 100',
    explanation: 'التوفير = 300 × 25 ÷ 100 = 75 جنيه',
    options: [
      { optionText: '75 جنيه', isCorrect: true },
      { optionText: '50 جنيه', isCorrect: false },
      { optionText: '100 جنيه', isCorrect: false },
      { optionText: '60 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في السوبرماركت، علبة فواكه سعرها 80 جنيه وعليها ضريبة 5٪.',
    questionText: 'كم ستدفع كله؟',
    hintText: 'الضريبة = 80 × 5 ÷ 100',
    explanation: 'الضريبة = 80 × 5 ÷ 100 = 4 جنيه. الإجمالي = 80 + 4 = 84 جنيه',
    options: [
      { optionText: '84 جنيه', isCorrect: true },
      { optionText: '85 جنيه', isCorrect: false },
      { optionText: '88 جنيه', isCorrect: false },
      { optionText: '82 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'بنطلون جينز سعره 800 جنيه. في الأوكازيون عليه خصم 40٪.',
    questionText: 'كم ستدفع بعد الخصم؟',
    hintText: 'الخصم = 800 × 40 ÷ 100',
    explanation: 'الخصم = 800 × 40 ÷ 100 = 320 جنيه. السعر = 800 - 320 = 480 جنيه',
    options: [
      { optionText: '480 جنيه', isCorrect: true },
      { optionText: '500 جنيه', isCorrect: false },
      { optionText: '440 جنيه', isCorrect: false },
      { optionText: '520 جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, Open-ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'ساعة يد سعرها 1000 جنيه وعليها خصم 15٪.',
    questionText: 'كم ستدفع بعد الخصم؟',
    correctAnswer: '850',
    correctAnswerNumeric: 850,
    hintText: 'الخصم = 1000 × 15 ÷ 100',
    explanation: 'الخصم = 1000 × 15 ÷ 100 = 150 جنيه. السعر = 1000 - 150 = 850 جنيه',
  },

  // --- Topic 3, Open-ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'سعر كيلو اللحمة كان 400 جنيه وزاد 25٪.',
    questionText: 'كم السعر الجديد؟',
    correctAnswer: '500',
    correctAnswerNumeric: 500,
    hintText: 'الزيادة = 400 × 25 ÷ 100',
    explanation: 'الزيادة = 400 × 25 ÷ 100 = 100 جنيه. السعر الجديد = 400 + 100 = 500 جنيه',
  },

  // --- Topic 3, Open-ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'لعبة في المحل سعرها 200 جنيه وعليها ضريبة 10٪.',
    questionText: 'كم المبلغ الكلي؟',
    correctAnswer: '220',
    correctAnswerNumeric: 220,
    hintText: 'الضريبة = 200 × 10 ÷ 100',
    explanation: 'الضريبة = 200 × 10 ÷ 100 = 20 جنيه. الإجمالي = 200 + 20 = 220 جنيه',
  },

  // --- Topic 3, Open-ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'فستان سعره 600 جنيه وعليه تخفيض 35٪.',
    questionText: 'كم التوفير (المبلغ اللي هيتخصم)؟',
    correctAnswer: '210',
    correctAnswerNumeric: 210,
    hintText: 'التوفير = 600 × 35 ÷ 100',
    explanation: 'التوفير = 600 × 35 ÷ 100 = 210 جنيه',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 4: مقدمة الجبر (Intro to Algebra)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 4, MCQ 1 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عمر أحمد ضعف عمر سارة. مجموع عمرهم 24 سنة.',
    questionText: 'كم عمر سارة؟',
    hintText: 'لو عمر سارة = س، يكون أحمد = 2س، يكون س + 2س = 24',
    explanation: 'س + 2س = 24، يكون 3س = 24، يكون س = 8 سنين',
    options: [
      { optionText: '8 سنين', isCorrect: true },
      { optionText: '12 سنين', isCorrect: false },
      { optionText: '6 سنين', isCorrect: false },
      { optionText: '10 سنين', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عند ياسمين عدد من الألعاب. أخوها عنده أقل منها بـ 5 ألعاب. مجموع ألعابهم 21.',
    questionText: 'كم لعبة عند ياسمين؟',
    hintText: 'لو ياسمين = س، يكون أخوها = س - 5',
    explanation: 'س + (س - 5) = 21، يكون 2س - 5 = 21، يكون 2س = 26، يكون س = 13',
    options: [
      { optionText: '13', isCorrect: true },
      { optionText: '11', isCorrect: false },
      { optionText: '16', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'بابا عمره 3 أمثال عمر محمد. الفرق بين عمرهم 20 سنة.',
    questionText: 'كم عمر محمد؟',
    hintText: 'لو محمد = س، يكون بابا = 3س، والفرق = 3س - س = 20',
    explanation: '3س - س = 20، يكون 2س = 20، يكون س = 10 سنين',
    options: [
      { optionText: '10 سنين', isCorrect: true },
      { optionText: '7 سنين', isCorrect: false },
      { optionText: '15 سنين', isCorrect: false },
      { optionText: '20 سنين', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'فكّر في عدد. لو ضربته في 4 وزوّدت 3، الناتج 31.',
    questionText: 'العدد هذا كام؟',
    hintText: 'العدد × 4 + 3 = 31',
    explanation: '4 × س + 3 = 31، يكون 4س = 28، يكون س = 7',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'مريم عندها 3 أكياس تمر متساوية و4 تمرات لوحدهم. المجموع 22 تمرة.',
    questionText: 'كم تمرة في الكيس الواحد؟',
    hintText: 'لو الكيس = س، يكون 3س + 4 = 22',
    explanation: '3س + 4 = 22، يكون 3س = 18، يكون س = 6 تمرات',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '5', isCorrect: false },
      { optionText: '7', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عمر ماما 4 أمثال عمر نور. مجموع عمرهم 45 سنة.',
    questionText: 'كم عمر نور؟',
    hintText: 'لو نور = س، يكون ماما = 4س، يكون س + 4س = 45',
    explanation: 'س + 4س = 45، يكون 5س = 45، يكون س = 9 سنين',
    options: [
      { optionText: '9 سنين', isCorrect: true },
      { optionText: '10 سنين', isCorrect: false },
      { optionText: '12 سنين', isCorrect: false },
      { optionText: '11 سنين', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'فكّر في عدد. لو نقصت منه 8 وقسمت على 2 يكون الناتج 5.',
    questionText: 'العدد هذا كام؟',
    hintText: '(العدد - 8) ÷ 2 = 5',
    explanation: '(س - 8) ÷ 2 = 5، يكون س - 8 = 10، يكون س = 18',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '13', isCorrect: false },
      { optionText: '16', isCorrect: false },
      { optionText: '20', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'أحمد وسارة ومحمد عندهم بلي. أحمد عنده ضعف اللي عند سارة. محمد عنده زي سارة. المجموع 32.',
    questionText: 'كم بلية عند سارة؟',
    hintText: 'لو سارة = س، يكون أحمد = 2س ومحمد = س',
    explanation: 'س + 2س + س = 32، يكون 4س = 32، يكون س = 8',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '10', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // --- Topic 4, Open-ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'عمر أخوك ضعف عمرك. مجموع عمركم 30 سنة.',
    questionText: 'كم عمرك؟',
    correctAnswer: '10',
    correctAnswerNumeric: 10,
    hintText: 'لو عمرك = س، يكون أخوك = 2س',
    explanation: 'س + 2س = 30، يكون 3س = 30، يكون س = 10 سنين',
  },

  // --- Topic 4, Open-ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'فكّر في عدد. لو ضربته في 5 وطرحت 3، الناتج 32.',
    questionText: 'العدد هذا كام؟',
    correctAnswer: '7',
    correctAnswerNumeric: 7,
    hintText: '5 × العدد - 3 = 32',
    explanation: '5س - 3 = 32، يكون 5س = 35، يكون س = 7',
  },

  // --- Topic 4, Open-ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'في رحلة مدرسية، عدد البنات 3 أمثال عدد الولاد. المجموع 40 طالب.',
    questionText: 'كم ولد في الرحلة؟',
    correctAnswer: '10',
    correctAnswerNumeric: 10,
    hintText: 'لو الولاد = س، يكون البنات = 3س',
    explanation: 'س + 3س = 40، يكون 4س = 40، يكون س = 10 ولاد',
  },

  // --- Topic 4, Open-ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'عند خالد 2 علبة ألوان متساوية و6 ألوان لوحدهم. المجموع 18 لون.',
    questionText: 'كم لون في العلبة الواحدة؟',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
    hintText: '2 × عدد الألوان في العلبة + 6 = 18',
    explanation: '2س + 6 = 18، يكون 2س = 12، يكون س = 6 ألوان',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: المعادلات البسيطة (Simple Equations - 1 step)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'أحمد كان معاه مال واشترى ساندوتش بـ 5 جنيه. تبقى معاه 7 جنيه.',
    questionText: 'كان معاه كم في الأول؟ (حل: س - 5 = 7)',
    hintText: 'زوّد 5 على الطرفين',
    explanation: 'س - 5 = 7، يكون س = 7 + 5 = 12 جنيه',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '2', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '35', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'وزّع المدرس أقلام على الطلاب. كل طالب أخد 3 أقلام والمجموع 24 قلم.',
    questionText: 'كم طالب في الفصل؟ (حل: 3س = 24)',
    hintText: 'اقسم الطرفين على 3',
    explanation: '3س = 24، يكون س = 24 ÷ 3 = 8 طلاب',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'سارة جمعت مال العيدية وحطت عليهم 8 جنيه من مصروفها. بقى معاها 20 جنيه.',
    questionText: 'العيدية كانت كام؟ (حل: س + 8 = 20)',
    hintText: 'اطرح 8 من الطرفين',
    explanation: 'س + 8 = 20، يكون س = 20 - 8 = 12 جنيه',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '28', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '14', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشترى محمد 5 أكياس تفاح بنفس السعر ودفع 35 جنيه.',
    questionText: 'سعر الكيس الواحد كام؟ (حل: 5س = 35)',
    hintText: 'اقسم 35 على 5',
    explanation: '5س = 35، يكون س = 35 ÷ 5 = 7 جنيه',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '5', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'كان عند ياسمين تمر ووزعت 9 على أصدقائها. تبقى لديها 6.',
    questionText: 'كان عندها كم تمرة في الأول؟ (حل: س - 9 = 6)',
    hintText: 'زوّد 9 على الطرفين',
    explanation: 'س - 9 = 6، يكون س = 6 + 9 = 15 تمرة',
    options: [
      { optionText: '15', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '12', isCorrect: false },
      { optionText: '18', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'قسّم المدرب اللاعبين على فرق. كل فريق فيه 6 لاعبين والمجموع 42 لاعب.',
    questionText: 'كم فريق عنده؟ (حل: 6س = 42)',
    hintText: 'اقسم 42 على 6',
    explanation: '6س = 42، يكون س = 42 ÷ 6 = 7 فرق',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'نورا ادّت أخوها 4 ملصقات (ستيكرز) وبقى عندها 11.',
    questionText: 'كان عندها كم ملصق في الأول؟ (حل: س - 4 = 11)',
    hintText: 'زوّد 4 على الطرفين',
    explanation: 'س - 4 = 11، يكون س = 11 + 4 = 15 ملصق',
    options: [
      { optionText: '15', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '14', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عمر اشترى عدد من الكراسات بـ 4 جنيه الواحد ودفع 32 جنيه.',
    questionText: 'اشترى كم كراسة؟ (حل: 4س = 32)',
    hintText: 'اقسم 32 على 4',
    explanation: '4س = 32، يكون س = 32 ÷ 4 = 8 كراسات',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // --- Topic 5, Open-ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'كان معاك مال واشتريت أيس كريم بـ 15 جنيه. تبقى معاك 10 جنيه.',
    questionText: 'كان معاك كم في الأول؟ (حل: س - 15 = 10)',
    correctAnswer: '25',
    correctAnswerNumeric: 25,
    hintText: 'زوّد 15 على الطرفين',
    explanation: 'س - 15 = 10، يكون س = 10 + 15 = 25 جنيه',
  },

  // --- Topic 5, Open-ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت 6 أقلام بنفس السعر ودفعت 48 جنيه.',
    questionText: 'سعر القلم الواحد كام؟ (حل: 6س = 48)',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
    hintText: 'اقسم 48 على 6',
    explanation: '6س = 48، يكون س = 48 ÷ 6 = 8 جنيه',
  },

  // --- Topic 5, Open-ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'حصّلت مصروف اليوم وزوّدت عليه 11 جنيه كان عندك. بقى المجموع 26 جنيه.',
    questionText: 'مصروف اليوم كان كام؟ (حل: س + 11 = 26)',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
    hintText: 'اطرح 11 من الطرفين',
    explanation: 'س + 11 = 26، يكون س = 26 - 11 = 15 جنيه',
  },

  // --- Topic 5, Open-ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت 7 تذاكر سينما بنفس السعر ودفعت 56 جنيه.',
    questionText: 'سعر التذكرة الواحدة كام؟ (حل: 7س = 56)',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
    hintText: 'اقسم 56 على 7',
    explanation: '7س = 56، يكون س = 56 ÷ 7 = 8 جنيه',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: السرعة والمسافة والزمن (Speed/Distance/Time)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'القطر السريع بيمشي من القاهرة للإسكندرية (220 كم) في ساعتين.',
    questionText: 'سرعة القطر كم كم/ساعة؟',
    hintText: 'السرعة = المسافة ÷ الزمن',
    explanation: 'السرعة = 220 ÷ 2 = 110 كم/ساعة',
    options: [
      { optionText: '110 كم/ساعة', isCorrect: true },
      { optionText: '100 كم/ساعة', isCorrect: false },
      { optionText: '120 كم/ساعة', isCorrect: false },
      { optionText: '440 كم/ساعة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'تاكسي ماشي بسرعة 60 كم/ساعة.',
    questionText: 'هيقطع كم كيلومتر في 3 ساعات؟',
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = 60 × 3 = 180 كم',
    options: [
      { optionText: '180 كم', isCorrect: true },
      { optionText: '20 كم', isCorrect: false },
      { optionText: '120 كم', isCorrect: false },
      { optionText: '240 كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'يريد تروح مكان يبعد 150 كم. السيارة ماشية بسرعة 50 كم/ساعة.',
    questionText: 'الرحلة هتأخذ كم ساعة؟',
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = 150 ÷ 50 = 3 ساعات',
    options: [
      { optionText: '3 ساعات', isCorrect: true },
      { optionText: '2 ساعة', isCorrect: false },
      { optionText: '4 ساعات', isCorrect: false },
      { optionText: '5 ساعات', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عجلة (دراجة) بتمشي بسرعة 15 كم/ساعة.',
    questionText: 'كم كيلومتر هتقطع في 4 ساعات؟',
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = 15 × 4 = 60 كم',
    options: [
      { optionText: '60 كم', isCorrect: true },
      { optionText: '45 كم', isCorrect: false },
      { optionText: '50 كم', isCorrect: false },
      { optionText: '75 كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'أتوبيس مشي 360 كم في 4 ساعات.',
    questionText: 'كم كانت سرعة الأتوبيس؟',
    hintText: 'السرعة = المسافة ÷ الزمن',
    explanation: 'السرعة = 360 ÷ 4 = 90 كم/ساعة',
    options: [
      { optionText: '90 كم/ساعة', isCorrect: true },
      { optionText: '80 كم/ساعة', isCorrect: false },
      { optionText: '100 كم/ساعة', isCorrect: false },
      { optionText: '70 كم/ساعة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'قطر بيمشي بسرعة 80 كم/ساعة من القاهرة لطنطا (المسافة 120 كم).',
    questionText: 'الرحلة هتأخذ كم ساعة ونص؟',
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = 120 ÷ 80 = 1.5 ساعة = ساعة ونص',
    options: [
      { optionText: 'ساعة ونص', isCorrect: true },
      { optionText: 'ساعتين', isCorrect: false },
      { optionText: 'ساعة', isCorrect: false },
      { optionText: 'ساعة وربع', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 7 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'مركب في النيل بيمشي بسرعة 20 كم/ساعة ومشي 5 ساعات.',
    questionText: 'قطع كم كيلومتر؟',
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = 20 × 5 = 100 كم',
    options: [
      { optionText: '100 كم', isCorrect: true },
      { optionText: '80 كم', isCorrect: false },
      { optionText: '120 كم', isCorrect: false },
      { optionText: '4 كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ميكروباص ماشي من القاهرة لأسيوط (360 كم) بسرعة 90 كم/ساعة.',
    questionText: 'الرحلة هتأخذ كم ساعة؟',
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = 360 ÷ 90 = 4 ساعات',
    options: [
      { optionText: '4 ساعات', isCorrect: true },
      { optionText: '3 ساعات', isCorrect: false },
      { optionText: '5 ساعات', isCorrect: false },
      { optionText: '6 ساعات', isCorrect: false },
    ],
  },

  // --- Topic 6, Open-ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'عربية مشيت 240 كم في 3 ساعات.',
    questionText: 'كم كانت سرعة العربية بالكم/ساعة؟',
    correctAnswer: '80',
    correctAnswerNumeric: 80,
    hintText: 'السرعة = المسافة ÷ الزمن',
    explanation: 'السرعة = 240 ÷ 3 = 80 كم/ساعة',
  },

  // --- Topic 6, Open-ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'قطر ماشي بسرعة 120 كم/ساعة ويحتاج أن يقطع مسافة 360 كم.',
    questionText: 'الرحلة هتأخذ كم ساعة؟',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = 360 ÷ 120 = 3 ساعات',
  },

  // --- Topic 6, Open-ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'تاكسي ماشي بسرعة 40 كم/ساعة لمدة 2 ساعة.',
    questionText: 'قطع كم كيلومتر؟',
    correctAnswer: '80',
    correctAnswerNumeric: 80,
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = 40 × 2 = 80 كم',
  },

  // --- Topic 6, Open-ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'طيارة بتمشي بسرعة 600 كم/ساعة وقطعت 1800 كم.',
    questionText: 'الرحلة أخدت كم ساعة؟',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = 1800 ÷ 600 = 3 ساعات',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: المتوسط الحسابي (Averages/Mean)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أحمد جاب في 4 امتحانات: 80، 90، 70، 60.',
    questionText: 'كم متوسط درجاته؟',
    hintText: 'المتوسط = مجموع الدرجات ÷ عددها',
    explanation: '(80 + 90 + 70 + 60) ÷ 4 = 300 ÷ 4 = 75',
    options: [
      { optionText: '75', isCorrect: true },
      { optionText: '80', isCorrect: false },
      { optionText: '70', isCorrect: false },
      { optionText: '85', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة لعبت 3 جولات في لعبة فيديو وجابت: 120، 150، 90 نقطة.',
    questionText: 'كم متوسط نقطها؟',
    hintText: 'اجمع النقط كلها واقسم على عدد الجولات',
    explanation: '(120 + 150 + 90) ÷ 3 = 360 ÷ 3 = 120',
    options: [
      { optionText: '120', isCorrect: true },
      { optionText: '150', isCorrect: false },
      { optionText: '110', isCorrect: false },
      { optionText: '130', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'درجة الحرارة 5 أيام في القاهرة كانت: 30، 32، 28، 34، 26.',
    questionText: 'كم متوسط درجة الحرارة؟',
    hintText: 'اجمع درجات الحرارة واقسم على 5',
    explanation: '(30 + 32 + 28 + 34 + 26) ÷ 5 = 150 ÷ 5 = 30',
    options: [
      { optionText: '30', isCorrect: true },
      { optionText: '32', isCorrect: false },
      { optionText: '28', isCorrect: false },
      { optionText: '31', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نورا جابت في 5 اختبارات قصيرة: 8، 10، 6، 9، 7.',
    questionText: 'كم متوسط درجاتها؟',
    hintText: 'اجمع الدرجات واقسم على 5',
    explanation: '(8 + 10 + 6 + 9 + 7) ÷ 5 = 40 ÷ 5 = 8',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'فريق كرة سجّل في 4 مباريات: 3، 1، 2، 4 أهداف.',
    questionText: 'كم متوسط الأهداف في المباراة؟',
    hintText: 'المتوسط = مجموع الأهداف ÷ عدد المباريات',
    explanation: '(3 + 1 + 2 + 4) ÷ 4 = 10 ÷ 4 = 2.5',
    options: [
      { optionText: '2.5', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '2', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عدد ركاب المترو في 3 أيام كان: 1000، 1200، 800.',
    questionText: 'كم متوسط عدد الركاب يوميًا؟',
    hintText: 'اجمع عدد الركاب واقسم على 3',
    explanation: '(1000 + 1200 + 800) ÷ 3 = 3000 ÷ 3 = 1000',
    options: [
      { optionText: '1000', isCorrect: true },
      { optionText: '900', isCorrect: false },
      { optionText: '1100', isCorrect: false },
      { optionText: '1200', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'محمد اشترى 4 حاجات أسعارها: 20، 35، 15، 30 جنيه.',
    questionText: 'كم متوسط سعر الحاجة الواحدة؟',
    hintText: 'اجمع الأسعار واقسم على 4',
    explanation: '(20 + 35 + 15 + 30) ÷ 4 = 100 ÷ 4 = 25 جنيه',
    options: [
      { optionText: '25', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '20', isCorrect: false },
      { optionText: '35', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أطوال 5 طلاب في الفصل بالسنتيمتر: 140، 150، 135، 145، 130.',
    questionText: 'كم متوسط طول الطلاب؟',
    hintText: 'اجمع الأطوال واقسم على 5',
    explanation: '(140 + 150 + 135 + 145 + 130) ÷ 5 = 700 ÷ 5 = 140 سم',
    options: [
      { optionText: '140', isCorrect: true },
      { optionText: '145', isCorrect: false },
      { optionText: '135', isCorrect: false },
      { optionText: '150', isCorrect: false },
    ],
  },

  // --- Topic 7, Open-ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'درجات ياسمين في 3 مواد: 85، 95، 70.',
    questionText: 'كم متوسط درجاتها؟',
    correctAnswer: '83.3',
    correctAnswerNumeric: 83.3,
    hintText: 'اجمع الدرجات الـ 3 واقسم على 3',
    explanation: '(85 + 95 + 70) ÷ 3 = 250 ÷ 3 ≈ 83.3',
  },

  // --- Topic 7, Open-ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'كريم لعب 4 جولات بولينج وجاب: 90، 110، 100، 100.',
    questionText: 'كم متوسط نقطه في الجولة؟',
    correctAnswer: '100',
    correctAnswerNumeric: 100,
    hintText: 'اجمع النقط واقسم على 4',
    explanation: '(90 + 110 + 100 + 100) ÷ 4 = 400 ÷ 4 = 100',
  },

  // --- Topic 7, Open-ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'مصروف مريم في 5 أيام كان: 10، 20، 15، 25، 30 جنيه.',
    questionText: 'كم متوسط مصروفها اليومي؟',
    correctAnswer: '20',
    correctAnswerNumeric: 20,
    hintText: 'اجمع المصروف كله واقسم على 5',
    explanation: '(10 + 20 + 15 + 25 + 30) ÷ 5 = 100 ÷ 5 = 20 جنيه',
  },

  // --- Topic 7, Open-ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'درجة الحرارة في 4 أيام في أسوان: 36، 40، 38، 42.',
    questionText: 'كم متوسط درجة الحرارة؟',
    correctAnswer: '39',
    correctAnswerNumeric: 39,
    hintText: 'اجمع درجات الحرارة واقسم على 4',
    explanation: '(36 + 40 + 38 + 42) ÷ 4 = 156 ÷ 4 = 39 درجة',
  },
];
