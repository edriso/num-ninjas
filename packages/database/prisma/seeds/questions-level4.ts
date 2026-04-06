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
    realLifeContext: 'ماما بتعمل كشري لـ ٤ أشخاص ومحتاجة ٢ كوباية عدس. اليوم عندنا ٨ ضيوف.',
    questionText: 'محتاجة كام كوباية عدس حتى تعمل كشري لـ ٨ أشخاص؟',
    hintText: 'عدد الأشخاص اتضاعف، يبقى الكمية هتتضاعف',
    explanation: '٨ ÷ ٤ = ٢ (الضعف)، يبقى ٢ × ٢ = ٤ كوبايات عدس',
    options: [
      { optionText: '٤ كوبايات', isCorrect: true },
      { optionText: '٣ كوبايات', isCorrect: false },
      { optionText: '٦ كوبايات', isCorrect: false },
      { optionText: '٥ كوبايات', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة الرسم، عايز تعمل لون أخضر. الوصفة بتقول ٣ أجزاء أزرق لكل ١ جزء أصفر.',
    questionText: 'لو استخدمت ١٢ جزء أزرق، محتاج كام جزء أصفر؟',
    hintText: 'النسبة أزرق : أصفر = ٣ : ١',
    explanation: '١٢ ÷ ٣ = ٤، يبقى محتاج ٤ أجزاء أصفر',
    options: [
      { optionText: '٤', isCorrect: true },
      { optionText: '٣', isCorrect: false },
      { optionText: '٦', isCorrect: false },
      { optionText: '٩', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'على الخريطة، كل ١ سم بيمثل ٥٠ كم في الحقيقة. المسافة بين مدينتين على الخريطة ٤ سم.',
    questionText: 'كام كيلومتر المسافة الحقيقية بين المدينتين؟',
    hintText: 'اضرب عدد السنتيمترات في ٥٠',
    explanation: '٤ × ٥٠ = ٢٠٠ كم',
    options: [
      { optionText: '٢٠٠ كم', isCorrect: true },
      { optionText: '١٥٠ كم', isCorrect: false },
      { optionText: '٢٥٠ كم', isCorrect: false },
      { optionText: '١٠٠ كم', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما بتعمل بسبوسة لـ ٦ أشخاص ومحتاجة ٣ كوبايات سميد. تريد تعمل لـ ١٢ شخص.',
    questionText: 'محتاجة كام كوباية سميد لـ ١٢ شخص؟',
    hintText: '١٢ ÷ ٦ = ٢ يبقى الكمية هتتضاعف',
    explanation: '١٢ ÷ ٦ = ٢ (ضعف العدد)، يبقى ٣ × ٢ = ٦ كوبايات سميد',
    options: [
      { optionText: '٦ كوبايات', isCorrect: true },
      { optionText: '٤ كوبايات', isCorrect: false },
      { optionText: '٩ كوبايات', isCorrect: false },
      { optionText: '٥ كوبايات', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في مصنع مياه، كل ٣ لتر مياه بيحتاجوا ١ لتر شربات حتى يعملوا عصير.',
    questionText: 'لو عندك ١٥ لتر مياه، محتاج كام لتر شربات؟',
    hintText: 'النسبة مياه : شربات = ٣ : ١',
    explanation: '١٥ ÷ ٣ = ٥ لتر شربات',
    options: [
      { optionText: '٥ لتر', isCorrect: true },
      { optionText: '٣ لتر', isCorrect: false },
      { optionText: '٦ لتر', isCorrect: false },
      { optionText: '٤ لتر', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'على الخريطة، كل ٢ سم بيمثل ٧٠ كم. المسافة على الخريطة بين القاهرة والمنصورة ٣ سم.',
    questionText: 'كام كيلومتر تقريبًا المسافة الحقيقية؟',
    hintText: 'لو ٢ سم = ٧٠ كم، يبقى ١ سم = ٣٥ كم',
    explanation: '١ سم = ٧٠ ÷ ٢ = ٣٥ كم، يبقى ٣ سم = ٣٥ × ٣ = ١٠٥ كم',
    options: [
      { optionText: '١٠٥ كم', isCorrect: true },
      { optionText: '١٤٠ كم', isCorrect: false },
      { optionText: '٧٠ كم', isCorrect: false },
      { optionText: '٢١٠ كم', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في الفصل، نسبة البنات للولاد ٣ : ٥. عدد الولاد ٢٠.',
    questionText: 'كام بنت في الفصل؟',
    hintText: 'لو ٥ أجزاء = ٢٠، يبقى الجزء الواحد = ٤',
    explanation: '٢٠ ÷ ٥ = ٤ (قيمة الجزء)، يبقى عدد البنات = ٣ × ٤ = ١٢',
    options: [
      { optionText: '١٢', isCorrect: true },
      { optionText: '١٥', isCorrect: false },
      { optionText: '٨', isCorrect: false },
      { optionText: '١٠', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'وصفة الكيكة بتقول ٢ بيضة لكل ١ كوباية دقيق. عايز تعمل كيكة كبيرة بـ ٥ كوبايات دقيق.',
    questionText: 'محتاج كام بيضة؟',
    hintText: 'النسبة بيض : دقيق = ٢ : ١',
    explanation: 'لكل كوباية دقيق محتاج ٢ بيضة، يبقى ٥ × ٢ = ١٠ بيضات',
    options: [
      { optionText: '١٠', isCorrect: true },
      { optionText: '٧', isCorrect: false },
      { optionText: '٨', isCorrect: false },
      { optionText: '١٢', isCorrect: false },
    ],
  },

  // --- Topic 1, Open-ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'ماما بتعمل كشري لـ ٤ أشخاص ومحتاجة ١ كوباية أرز. جالنا ١٢ ضيف.',
    questionText: 'محتاجة كام كوباية أرز لـ ١٢ شخص؟',
    correctAnswer: '٣',
    correctAnswerNumeric: 3,
    hintText: '١٢ ÷ ٤ = ٣ يبقى الكمية هتتضرب في ٣',
    explanation: '١٢ ÷ ٤ = ٣ (ثلاثة أضعاف)، يبقى ١ × ٣ = ٣ كوبايات أرز',
  },

  // --- Topic 1, Open-ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'على الخريطة، كل ١ سم = ٤٠ كم. المسافة على الخريطة بين مدينتين ٦ سم.',
    questionText: 'كام كيلومتر المسافة الحقيقية؟',
    correctAnswer: '٢٤٠',
    correctAnswerNumeric: 240,
    hintText: 'اضرب عدد السنتيمترات في مقياس الرسم',
    explanation: '٦ × ٤٠ = ٢٤٠ كم',
  },

  // --- Topic 1, Open-ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'عايز تعمل لون برتقالي. النسبة: ٢ أجزاء أحمر لكل ٣ أجزاء أصفر. استخدمت ٨ أجزاء أحمر.',
    questionText: 'محتاج كام جزء أصفر؟',
    correctAnswer: '١٢',
    correctAnswerNumeric: 12,
    hintText: '٨ ÷ ٢ = ٤ يبقى كل حاجة هتتضرب في ٤',
    explanation: '٨ ÷ ٢ = ٤ (المضاعف)، يبقى ٣ × ٤ = ١٢ جزء أصفر',
  },

  // --- Topic 1, Open-ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في معسكر كشافة، نسبة المشرفين للأطفال ١ : ٨. عدد الأطفال ٤٠.',
    questionText: 'كام مشرف لازم يكون موجود؟',
    correctAnswer: '٥',
    correctAnswerNumeric: 5,
    hintText: 'كل ٨ أطفال محتاجين ١ مشرف',
    explanation: '٤٠ ÷ ٨ = ٥ مشرفين',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: النسبة المئوية (Percentages)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أحمد جاب في امتحان الرياضيات ٤٢ من ٦٠.',
    questionText: 'كام في المية نتيجة أحمد؟',
    hintText: 'اقسم الدرجة على الدرجة الكلية واضرب في ١٠٠',
    explanation: '(٤٢ ÷ ٦٠) × ١٠٠ = ٧٠٪',
    options: [
      { optionText: '٧٠٪', isCorrect: true },
      { optionText: '٦٥٪', isCorrect: false },
      { optionText: '٧٥٪', isCorrect: false },
      { optionText: '٨٠٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'الموبايل بتاع سارة البطارية بتاعته ١٠٠٪ الصبح. استخدمت ٣٥٪ لحد الضهر.',
    questionText: 'كام في المية بطارية المتبقية؟',
    hintText: 'اطرح النسبة المستخدمة من ١٠٠',
    explanation: '١٠٠٪ - ٣٥٪ = ٦٥٪',
    options: [
      { optionText: '٦٥٪', isCorrect: true },
      { optionText: '٧٠٪', isCorrect: false },
      { optionText: '٥٥٪', isCorrect: false },
      { optionText: '٧٥٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'باقة النت بتاعتك ٢٠ جيجا. استخدمت ١٥ جيجا هذا الشهر.',
    questionText: 'كام في المية من النت استخدمته؟',
    hintText: 'اقسم المستخدم على الكلي واضرب في ١٠٠',
    explanation: '(١٥ ÷ ٢٠) × ١٠٠ = ٧٥٪',
    options: [
      { optionText: '٧٥٪', isCorrect: true },
      { optionText: '٦٠٪', isCorrect: false },
      { optionText: '٨٠٪', isCorrect: false },
      { optionText: '٧٠٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في الفصل ٤٠ طالب. ٣٠ طالب حضروا الرحلة المدرسية.',
    questionText: 'كام في المية من الطلاب حضروا الرحلة؟',
    hintText: 'اقسم اللي حضروا على العدد الكلي واضرب في ١٠٠',
    explanation: '(٣٠ ÷ ٤٠) × ١٠٠ = ٧٥٪',
    options: [
      { optionText: '٧٥٪', isCorrect: true },
      { optionText: '٦٠٪', isCorrect: false },
      { optionText: '٨٥٪', isCorrect: false },
      { optionText: '٧٠٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'نورا جابت ٣٦ من ٤٠ في امتحان العلوم.',
    questionText: 'كام في المية نتيجة نورا؟',
    hintText: 'اقسم ٣٦ على ٤٠ واضرب في ١٠٠',
    explanation: '(٣٦ ÷ ٤٠) × ١٠٠ = ٩٠٪',
    options: [
      { optionText: '٩٠٪', isCorrect: true },
      { optionText: '٨٥٪', isCorrect: false },
      { optionText: '٨٠٪', isCorrect: false },
      { optionText: '٩٥٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'محمد عنده ٥٠ جنيه وصرف ٢٠ جنيه على الأكل.',
    questionText: 'كام في المية من ماله صرفها؟',
    hintText: 'اقسم اللي اتصرف على الكلي واضرب في ١٠٠',
    explanation: '(٢٠ ÷ ٥٠) × ١٠٠ = ٤٠٪',
    options: [
      { optionText: '٤٠٪', isCorrect: true },
      { optionText: '٣٥٪', isCorrect: false },
      { optionText: '٥٠٪', isCorrect: false },
      { optionText: '٢٥٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في مباراة كرة قدم، الفريق سدد ٢٠ شوطة، ٨ منهم دخلت الجون.',
    questionText: 'كام في المية من الشوطات جابت جول؟',
    hintText: 'اقسم عدد الأهداف على عدد الشوطات واضرب في ١٠٠',
    explanation: '(٨ ÷ ٢٠) × ١٠٠ = ٤٠٪',
    options: [
      { optionText: '٤٠٪', isCorrect: true },
      { optionText: '٣٥٪', isCorrect: false },
      { optionText: '٥٠٪', isCorrect: false },
      { optionText: '٤٥٪', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'تليفون سارة فيه ٨٠ جيجا مساحة. استخدمت ٦٠ جيجا في الصور والتطبيقات.',
    questionText: 'كام في المية من المساحة لسه فاضية؟',
    hintText: 'احسب المساحة الفاضية الأول وبعدين اقسم على الكلي',
    explanation: 'الفاضي = ٨٠ - ٦٠ = ٢٠ جيجا. (٢٠ ÷ ٨٠) × ١٠٠ = ٢٥٪',
    options: [
      { optionText: '٢٥٪', isCorrect: true },
      { optionText: '٢٠٪', isCorrect: false },
      { optionText: '٣٠٪', isCorrect: false },
      { optionText: '٧٥٪', isCorrect: false },
    ],
  },

  // --- Topic 2, Open-ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'كريم جاب ٢٧ من ٣٠ في امتحان العربي.',
    questionText: 'كام في المية نتيجة كريم؟',
    correctAnswer: '٩٠',
    correctAnswerNumeric: 90,
    hintText: 'اقسم ٢٧ على ٣٠ واضرب في ١٠٠',
    explanation: '(٢٧ ÷ ٣٠) × ١٠٠ = ٩٠٪',
  },

  // --- Topic 2, Open-ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'البطارية كانت ١٠٠٪ ونزلت ٤٥٪ بعد ما لعبت.',
    questionText: 'كام في المية بطارية المتبقية؟',
    correctAnswer: '٥٥',
    correctAnswerNumeric: 55,
    hintText: 'اطرح اللي نزل من ١٠٠',
    explanation: '١٠٠ - ٤٥ = ٥٥٪ المتبقية',
  },

  // --- Topic 2, Open-ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'باقة النت ١٠ جيجا واستخدمت ٣ جيجا.',
    questionText: 'كام في المية من النت استخدمته؟',
    correctAnswer: '٣٠',
    correctAnswerNumeric: 30,
    hintText: 'اقسم المستخدم على الكلي واضرب في ١٠٠',
    explanation: '(٣ ÷ ١٠) × ١٠٠ = ٣٠٪',
  },

  // --- Topic 2, Open-ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين عندها ٢٥ كتاب وقرأت ٢٠ كتاب منهم.',
    questionText: 'كام في المية من الكتب قرأتها؟',
    correctAnswer: '٨٠',
    correctAnswerNumeric: 80,
    hintText: 'اقسم عدد الكتب اللي قرأتها على العدد الكلي واضرب في ١٠٠',
    explanation: '(٢٠ ÷ ٢٥) × ١٠٠ = ٨٠٪',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: تطبيقات النسبة المئوية (Percentage Applications)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في الأوكازيون، تيشيرت سعره ٢٠٠ جنيه وعليه خصم ٣٠٪.',
    questionText: 'كم ستدفع بعد الخصم؟',
    hintText: 'احسب قيمة الخصم الأول وبعدين اطرحها من السعر',
    explanation: 'الخصم = ٢٠٠ × ٣٠ ÷ ١٠٠ = ٦٠ جنيه. السعر بعد الخصم = ٢٠٠ - ٦٠ = ١٤٠ جنيه',
    options: [
      { optionText: '١٤٠ جنيه', isCorrect: true },
      { optionText: '١٧٠ جنيه', isCorrect: false },
      { optionText: '١٦٠ جنيه', isCorrect: false },
      { optionText: '١٣٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سعر كيلو الفراخ كان ١٠٠ جنيه وزاد ٢٠٪.',
    questionText: 'كام سعر الكيلو بعد الزيادة؟',
    hintText: 'احسب قيمة الزيادة واجمعها على السعر الأصلي',
    explanation: 'الزيادة = ١٠٠ × ٢٠ ÷ ١٠٠ = ٢٠ جنيه. السعر الجديد = ١٠٠ + ٢٠ = ١٢٠ جنيه',
    options: [
      { optionText: '١٢٠ جنيه', isCorrect: true },
      { optionText: '١١٠ جنيه', isCorrect: false },
      { optionText: '١٣٠ جنيه', isCorrect: false },
      { optionText: '١٢٥ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 3 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'بابا اشترى تابلت سعره ٤٠٠٠ جنيه وعليه ضريبة قيمة مضافة ١٠٪.',
    questionText: 'كام المبلغ الكلي اللي هيدفعه؟',
    hintText: 'احسب الضريبة وزوّدها على السعر',
    explanation: 'الضريبة = ٤٠٠٠ × ١٠ ÷ ١٠٠ = ٤٠٠ جنيه. الإجمالي = ٤٠٠٠ + ٤٠٠ = ٤٤٠٠ جنيه',
    options: [
      { optionText: '٤٤٠٠ جنيه', isCorrect: true },
      { optionText: '٤٢٠٠ جنيه', isCorrect: false },
      { optionText: '٤٠٤٠ جنيه', isCorrect: false },
      { optionText: '٤٨٠٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'جزمة في المحل سعرها ٥٠٠ جنيه وعليها تخفيض ٢٠٪.',
    questionText: 'كام سعر الجزمة بعد التخفيض؟',
    hintText: 'الخصم = السعر × النسبة ÷ ١٠٠',
    explanation: 'الخصم = ٥٠٠ × ٢٠ ÷ ١٠٠ = ١٠٠ جنيه. السعر = ٥٠٠ - ١٠٠ = ٤٠٠ جنيه',
    options: [
      { optionText: '٤٠٠ جنيه', isCorrect: true },
      { optionText: '٤٥٠ جنيه', isCorrect: false },
      { optionText: '٣٨٠ جنيه', isCorrect: false },
      { optionText: '٣٥٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سعر الاشتراك في النادي كان ٦٠٠ جنيه وزاد ١٥٪.',
    questionText: 'كام سعر الاشتراك الجديد؟',
    hintText: 'الزيادة = ٦٠٠ × ١٥ ÷ ١٠٠',
    explanation: 'الزيادة = ٦٠٠ × ١٥ ÷ ١٠٠ = ٩٠ جنيه. السعر الجديد = ٦٠٠ + ٩٠ = ٦٩٠ جنيه',
    options: [
      { optionText: '٦٩٠ جنيه', isCorrect: true },
      { optionText: '٧٠٠ جنيه', isCorrect: false },
      { optionText: '٦٥٠ جنيه', isCorrect: false },
      { optionText: '٧٥٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'شنطة مدرسة سعرها ٣٠٠ جنيه. المحل عامل عرض خصم ٢٥٪.',
    questionText: 'هتوفر كام جنيه؟',
    hintText: 'التوفير = السعر × نسبة الخصم ÷ ١٠٠',
    explanation: 'التوفير = ٣٠٠ × ٢٥ ÷ ١٠٠ = ٧٥ جنيه',
    options: [
      { optionText: '٧٥ جنيه', isCorrect: true },
      { optionText: '٥٠ جنيه', isCorrect: false },
      { optionText: '١٠٠ جنيه', isCorrect: false },
      { optionText: '٦٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'في السوبرماركت، علبة شيكولاتة سعرها ٨٠ جنيه وعليها ضريبة ٥٪.',
    questionText: 'كم ستدفع كله؟',
    hintText: 'الضريبة = ٨٠ × ٥ ÷ ١٠٠',
    explanation: 'الضريبة = ٨٠ × ٥ ÷ ١٠٠ = ٤ جنيه. الإجمالي = ٨٠ + ٤ = ٨٤ جنيه',
    options: [
      { optionText: '٨٤ جنيه', isCorrect: true },
      { optionText: '٨٥ جنيه', isCorrect: false },
      { optionText: '٨٨ جنيه', isCorrect: false },
      { optionText: '٨٢ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'بنطلون جينز سعره ٨٠٠ جنيه. في الأوكازيون عليه خصم ٤٠٪.',
    questionText: 'كم ستدفع بعد الخصم؟',
    hintText: 'الخصم = ٨٠٠ × ٤٠ ÷ ١٠٠',
    explanation: 'الخصم = ٨٠٠ × ٤٠ ÷ ١٠٠ = ٣٢٠ جنيه. السعر = ٨٠٠ - ٣٢٠ = ٤٨٠ جنيه',
    options: [
      { optionText: '٤٨٠ جنيه', isCorrect: true },
      { optionText: '٥٠٠ جنيه', isCorrect: false },
      { optionText: '٤٤٠ جنيه', isCorrect: false },
      { optionText: '٥٢٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, Open-ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'ساعة يد سعرها ١٠٠٠ جنيه وعليها خصم ١٥٪.',
    questionText: 'كم ستدفع بعد الخصم؟',
    correctAnswer: '٨٥٠',
    correctAnswerNumeric: 850,
    hintText: 'الخصم = ١٠٠٠ × ١٥ ÷ ١٠٠',
    explanation: 'الخصم = ١٠٠٠ × ١٥ ÷ ١٠٠ = ١٥٠ جنيه. السعر = ١٠٠٠ - ١٥٠ = ٨٥٠ جنيه',
  },

  // --- Topic 3, Open-ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'سعر كيلو اللحمة كان ٤٠٠ جنيه وزاد ٢٥٪.',
    questionText: 'كام السعر الجديد؟',
    correctAnswer: '٥٠٠',
    correctAnswerNumeric: 500,
    hintText: 'الزيادة = ٤٠٠ × ٢٥ ÷ ١٠٠',
    explanation: 'الزيادة = ٤٠٠ × ٢٥ ÷ ١٠٠ = ١٠٠ جنيه. السعر الجديد = ٤٠٠ + ١٠٠ = ٥٠٠ جنيه',
  },

  // --- Topic 3, Open-ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'لعبة في المحل سعرها ٢٠٠ جنيه وعليها ضريبة ١٠٪.',
    questionText: 'كام المبلغ الكلي؟',
    correctAnswer: '٢٢٠',
    correctAnswerNumeric: 220,
    hintText: 'الضريبة = ٢٠٠ × ١٠ ÷ ١٠٠',
    explanation: 'الضريبة = ٢٠٠ × ١٠ ÷ ١٠٠ = ٢٠ جنيه. الإجمالي = ٢٠٠ + ٢٠ = ٢٢٠ جنيه',
  },

  // --- Topic 3, Open-ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'فستان سعره ٦٠٠ جنيه وعليه تخفيض ٣٥٪.',
    questionText: 'كام التوفير (المبلغ اللي هيتخصم)؟',
    correctAnswer: '٢١٠',
    correctAnswerNumeric: 210,
    hintText: 'التوفير = ٦٠٠ × ٣٥ ÷ ١٠٠',
    explanation: 'التوفير = ٦٠٠ × ٣٥ ÷ ١٠٠ = ٢١٠ جنيه',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 4: مقدمة الجبر (Intro to Algebra)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 4, MCQ 1 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عمر أحمد ضعف عمر سارة. مجموع عمرهم ٢٤ سنة.',
    questionText: 'كام عمر سارة؟',
    hintText: 'لو عمر سارة = س، يبقى أحمد = ٢س، يبقى س + ٢س = ٢٤',
    explanation: 'س + ٢س = ٢٤، يبقى ٣س = ٢٤، يبقى س = ٨ سنين',
    options: [
      { optionText: '٨ سنين', isCorrect: true },
      { optionText: '١٢ سنين', isCorrect: false },
      { optionText: '٦ سنين', isCorrect: false },
      { optionText: '١٠ سنين', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عند ياسمين عدد من الألعاب. أخوها عنده أقل منها بـ ٥ ألعاب. مجموع ألعابهم ٢١.',
    questionText: 'كام لعبة عند ياسمين؟',
    hintText: 'لو ياسمين = س، يبقى أخوها = س - ٥',
    explanation: 'س + (س - ٥) = ٢١، يبقى ٢س - ٥ = ٢١، يبقى ٢س = ٢٦، يبقى س = ١٣',
    options: [
      { optionText: '١٣', isCorrect: true },
      { optionText: '١١', isCorrect: false },
      { optionText: '١٦', isCorrect: false },
      { optionText: '١٠', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'بابا عمره ٣ أمثال عمر محمد. الفرق بين عمرهم ٢٠ سنة.',
    questionText: 'كام عمر محمد؟',
    hintText: 'لو محمد = س، يبقى بابا = ٣س، والفرق = ٣س - س = ٢٠',
    explanation: '٣س - س = ٢٠، يبقى ٢س = ٢٠، يبقى س = ١٠ سنين',
    options: [
      { optionText: '١٠ سنين', isCorrect: true },
      { optionText: '٧ سنين', isCorrect: false },
      { optionText: '١٥ سنين', isCorrect: false },
      { optionText: '٢٠ سنين', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'فكّر في عدد. لو ضربته في ٤ وزوّدت ٣، الناتج ٣١.',
    questionText: 'العدد هذا كام؟',
    hintText: 'العدد × ٤ + ٣ = ٣١',
    explanation: '٤ × س + ٣ = ٣١، يبقى ٤س = ٢٨، يبقى س = ٧',
    options: [
      { optionText: '٧', isCorrect: true },
      { optionText: '٨', isCorrect: false },
      { optionText: '٦', isCorrect: false },
      { optionText: '٩', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'مريم عندها ٣ أكياس بونبوني متساوية و٤ بونبونيات لوحدهم. المجموع ٢٢ بونبونية.',
    questionText: 'كام بونبونية في الكيس الواحد؟',
    hintText: 'لو الكيس = س، يبقى ٣س + ٤ = ٢٢',
    explanation: '٣س + ٤ = ٢٢، يبقى ٣س = ١٨، يبقى س = ٦ بونبونيات',
    options: [
      { optionText: '٦', isCorrect: true },
      { optionText: '٥', isCorrect: false },
      { optionText: '٧', isCorrect: false },
      { optionText: '٨', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عمر ماما ٤ أمثال عمر نور. مجموع عمرهم ٤٥ سنة.',
    questionText: 'كام عمر نور؟',
    hintText: 'لو نور = س، يبقى ماما = ٤س، يبقى س + ٤س = ٤٥',
    explanation: 'س + ٤س = ٤٥، يبقى ٥س = ٤٥، يبقى س = ٩ سنين',
    options: [
      { optionText: '٩ سنين', isCorrect: true },
      { optionText: '١٠ سنين', isCorrect: false },
      { optionText: '١٢ سنين', isCorrect: false },
      { optionText: '١١ سنين', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'فكّر في عدد. لو نقصت منه ٨ وقسمت على ٢ يبقى الناتج ٥.',
    questionText: 'العدد هذا كام؟',
    hintText: '(العدد - ٨) ÷ ٢ = ٥',
    explanation: '(س - ٨) ÷ ٢ = ٥، يبقى س - ٨ = ١٠، يبقى س = ١٨',
    options: [
      { optionText: '١٨', isCorrect: true },
      { optionText: '١٣', isCorrect: false },
      { optionText: '١٦', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'أحمد وسارة ومحمد عندهم بلي. أحمد عنده ضعف اللي عند سارة. محمد عنده زي سارة. المجموع ٣٢.',
    questionText: 'كام بلية عند سارة؟',
    hintText: 'لو سارة = س، يبقى أحمد = ٢س ومحمد = س',
    explanation: 'س + ٢س + س = ٣٢، يبقى ٤س = ٣٢، يبقى س = ٨',
    options: [
      { optionText: '٨', isCorrect: true },
      { optionText: '١٠', isCorrect: false },
      { optionText: '٦', isCorrect: false },
      { optionText: '١٢', isCorrect: false },
    ],
  },

  // --- Topic 4, Open-ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'عمر أخوك ضعف عمرك. مجموع عمركم ٣٠ سنة.',
    questionText: 'كام عمرك؟',
    correctAnswer: '١٠',
    correctAnswerNumeric: 10,
    hintText: 'لو عمرك = س، يبقى أخوك = ٢س',
    explanation: 'س + ٢س = ٣٠، يبقى ٣س = ٣٠، يبقى س = ١٠ سنين',
  },

  // --- Topic 4, Open-ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'فكّر في عدد. لو ضربته في ٥ وطرحت ٣، الناتج ٣٢.',
    questionText: 'العدد هذا كام؟',
    correctAnswer: '٧',
    correctAnswerNumeric: 7,
    hintText: '٥ × العدد - ٣ = ٣٢',
    explanation: '٥س - ٣ = ٣٢، يبقى ٥س = ٣٥، يبقى س = ٧',
  },

  // --- Topic 4, Open-ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'في رحلة مدرسية، عدد البنات ٣ أمثال عدد الولاد. المجموع ٤٠ طالب.',
    questionText: 'كام ولد في الرحلة؟',
    correctAnswer: '١٠',
    correctAnswerNumeric: 10,
    hintText: 'لو الولاد = س، يبقى البنات = ٣س',
    explanation: 'س + ٣س = ٤٠، يبقى ٤س = ٤٠، يبقى س = ١٠ ولاد',
  },

  // --- Topic 4, Open-ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'عند خالد ٢ علبة ألوان متساوية و٦ ألوان لوحدهم. المجموع ١٨ لون.',
    questionText: 'كام لون في العلبة الواحدة؟',
    correctAnswer: '٦',
    correctAnswerNumeric: 6,
    hintText: '٢ × عدد الألوان في العلبة + ٦ = ١٨',
    explanation: '٢س + ٦ = ١٨، يبقى ٢س = ١٢، يبقى س = ٦ ألوان',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: المعادلات البسيطة (Simple Equations - 1 step)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'أحمد كان معاه مال واشترى ساندوتش بـ ٥ جنيه. فضل معاه ٧ جنيه.',
    questionText: 'كان معاه كام في الأول؟ (حل: س - ٥ = ٧)',
    hintText: 'زوّد ٥ على الطرفين',
    explanation: 'س - ٥ = ٧، يبقى س = ٧ + ٥ = ١٢ جنيه',
    options: [
      { optionText: '١٢', isCorrect: true },
      { optionText: '٢', isCorrect: false },
      { optionText: '١٠', isCorrect: false },
      { optionText: '٣٥', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'وزّع المدرس أقلام على الطلاب. كل طالب أخد ٣ أقلام والمجموع ٢٤ قلم.',
    questionText: 'كام طالب في الفصل؟ (حل: ٣س = ٢٤)',
    hintText: 'اقسم الطرفين على ٣',
    explanation: '٣س = ٢٤، يبقى س = ٢٤ ÷ ٣ = ٨ طلاب',
    options: [
      { optionText: '٨', isCorrect: true },
      { optionText: '٧', isCorrect: false },
      { optionText: '٩', isCorrect: false },
      { optionText: '٦', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'سارة جمعت مال العيدية وحطت عليهم ٨ جنيه من مصروفها. بقى معاها ٢٠ جنيه.',
    questionText: 'العيدية كانت كام؟ (حل: س + ٨ = ٢٠)',
    hintText: 'اطرح ٨ من الطرفين',
    explanation: 'س + ٨ = ٢٠، يبقى س = ٢٠ - ٨ = ١٢ جنيه',
    options: [
      { optionText: '١٢', isCorrect: true },
      { optionText: '٢٨', isCorrect: false },
      { optionText: '١٠', isCorrect: false },
      { optionText: '١٤', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'اشترى محمد ٥ أكياس شيبسي بنفس السعر ودفع ٣٥ جنيه.',
    questionText: 'سعر الكيس الواحد كام؟ (حل: ٥س = ٣٥)',
    hintText: 'اقسم ٣٥ على ٥',
    explanation: '٥س = ٣٥، يبقى س = ٣٥ ÷ ٥ = ٧ جنيه',
    options: [
      { optionText: '٧', isCorrect: true },
      { optionText: '٦', isCorrect: false },
      { optionText: '٨', isCorrect: false },
      { optionText: '٥', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'كان عند ياسمين بونبوني ووزعت ٩ على صحابها. فضل عندها ٦.',
    questionText: 'كان عندها كام بونبونية في الأول؟ (حل: س - ٩ = ٦)',
    hintText: 'زوّد ٩ على الطرفين',
    explanation: 'س - ٩ = ٦، يبقى س = ٦ + ٩ = ١٥ بونبونية',
    options: [
      { optionText: '١٥', isCorrect: true },
      { optionText: '٣', isCorrect: false },
      { optionText: '١٢', isCorrect: false },
      { optionText: '١٨', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'قسّم المدرب اللاعبين على فرق. كل فريق فيه ٦ لاعبين والمجموع ٤٢ لاعب.',
    questionText: 'كام فريق عنده؟ (حل: ٦س = ٤٢)',
    hintText: 'اقسم ٤٢ على ٦',
    explanation: '٦س = ٤٢، يبقى س = ٤٢ ÷ ٦ = ٧ فرق',
    options: [
      { optionText: '٧', isCorrect: true },
      { optionText: '٨', isCorrect: false },
      { optionText: '٦', isCorrect: false },
      { optionText: '٩', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'نورا ادّت أخوها ٤ ملصقات (ستيكرز) وبقى عندها ١١.',
    questionText: 'كان عندها كام ملصق في الأول؟ (حل: س - ٤ = ١١)',
    hintText: 'زوّد ٤ على الطرفين',
    explanation: 'س - ٤ = ١١، يبقى س = ١١ + ٤ = ١٥ ملصق',
    options: [
      { optionText: '١٥', isCorrect: true },
      { optionText: '٧', isCorrect: false },
      { optionText: '١٤', isCorrect: false },
      { optionText: '١٢', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عمر اشترى عدد من الكراسات بـ ٤ جنيه الواحد ودفع ٣٢ جنيه.',
    questionText: 'اشترى كام كراسة؟ (حل: ٤س = ٣٢)',
    hintText: 'اقسم ٣٢ على ٤',
    explanation: '٤س = ٣٢، يبقى س = ٣٢ ÷ ٤ = ٨ كراسات',
    options: [
      { optionText: '٨', isCorrect: true },
      { optionText: '٧', isCorrect: false },
      { optionText: '٩', isCorrect: false },
      { optionText: '٦', isCorrect: false },
    ],
  },

  // --- Topic 5, Open-ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'كان معاك مال واشتريت أيس كريم بـ ١٥ جنيه. فضل معاك ١٠ جنيه.',
    questionText: 'كان معاك كام في الأول؟ (حل: س - ١٥ = ١٠)',
    correctAnswer: '٢٥',
    correctAnswerNumeric: 25,
    hintText: 'زوّد ١٥ على الطرفين',
    explanation: 'س - ١٥ = ١٠، يبقى س = ١٠ + ١٥ = ٢٥ جنيه',
  },

  // --- Topic 5, Open-ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت ٦ أقلام بنفس السعر ودفعت ٤٨ جنيه.',
    questionText: 'سعر القلم الواحد كام؟ (حل: ٦س = ٤٨)',
    correctAnswer: '٨',
    correctAnswerNumeric: 8,
    hintText: 'اقسم ٤٨ على ٦',
    explanation: '٦س = ٤٨، يبقى س = ٤٨ ÷ ٦ = ٨ جنيه',
  },

  // --- Topic 5, Open-ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'حصّلت مصروف اليوم وزوّدت عليه ١١ جنيه كان عندك. بقى المجموع ٢٦ جنيه.',
    questionText: 'مصروف اليوم كان كام؟ (حل: س + ١١ = ٢٦)',
    correctAnswer: '١٥',
    correctAnswerNumeric: 15,
    hintText: 'اطرح ١١ من الطرفين',
    explanation: 'س + ١١ = ٢٦، يبقى س = ٢٦ - ١١ = ١٥ جنيه',
  },

  // --- Topic 5, Open-ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت ٧ تذاكر سينما بنفس السعر ودفعت ٥٦ جنيه.',
    questionText: 'سعر التذكرة الواحدة كام؟ (حل: ٧س = ٥٦)',
    correctAnswer: '٨',
    correctAnswerNumeric: 8,
    hintText: 'اقسم ٥٦ على ٧',
    explanation: '٧س = ٥٦، يبقى س = ٥٦ ÷ ٧ = ٨ جنيه',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: السرعة والمسافة والزمن (Speed/Distance/Time)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'القطر السريع بيمشي من القاهرة للإسكندرية (٢٢٠ كم) في ساعتين.',
    questionText: 'سرعة القطر كام كم/ساعة؟',
    hintText: 'السرعة = المسافة ÷ الزمن',
    explanation: 'السرعة = ٢٢٠ ÷ ٢ = ١١٠ كم/ساعة',
    options: [
      { optionText: '١١٠ كم/ساعة', isCorrect: true },
      { optionText: '١٠٠ كم/ساعة', isCorrect: false },
      { optionText: '١٢٠ كم/ساعة', isCorrect: false },
      { optionText: '٤٤٠ كم/ساعة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'تاكسي ماشي بسرعة ٦٠ كم/ساعة.',
    questionText: 'هيقطع كام كيلومتر في ٣ ساعات؟',
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = ٦٠ × ٣ = ١٨٠ كم',
    options: [
      { optionText: '١٨٠ كم', isCorrect: true },
      { optionText: '٢٠ كم', isCorrect: false },
      { optionText: '١٢٠ كم', isCorrect: false },
      { optionText: '٢٤٠ كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عايز تروح مكان يبعد ١٥٠ كم. السيارة ماشية بسرعة ٥٠ كم/ساعة.',
    questionText: 'الرحلة هتاخد كام ساعة؟',
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = ١٥٠ ÷ ٥٠ = ٣ ساعات',
    options: [
      { optionText: '٣ ساعات', isCorrect: true },
      { optionText: '٢ ساعة', isCorrect: false },
      { optionText: '٤ ساعات', isCorrect: false },
      { optionText: '٥ ساعات', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عجلة (دراجة) بتمشي بسرعة ١٥ كم/ساعة.',
    questionText: 'كام كيلومتر هتقطع في ٤ ساعات؟',
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = ١٥ × ٤ = ٦٠ كم',
    options: [
      { optionText: '٦٠ كم', isCorrect: true },
      { optionText: '٤٥ كم', isCorrect: false },
      { optionText: '٥٠ كم', isCorrect: false },
      { optionText: '٧٥ كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'أتوبيس مشي ٣٦٠ كم في ٤ ساعات.',
    questionText: 'كام كانت سرعة الأتوبيس؟',
    hintText: 'السرعة = المسافة ÷ الزمن',
    explanation: 'السرعة = ٣٦٠ ÷ ٤ = ٩٠ كم/ساعة',
    options: [
      { optionText: '٩٠ كم/ساعة', isCorrect: true },
      { optionText: '٨٠ كم/ساعة', isCorrect: false },
      { optionText: '١٠٠ كم/ساعة', isCorrect: false },
      { optionText: '٧٠ كم/ساعة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'قطر بيمشي بسرعة ٨٠ كم/ساعة من القاهرة لطنطا (المسافة ١٢٠ كم).',
    questionText: 'الرحلة هتاخد كام ساعة ونص؟',
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = ١٢٠ ÷ ٨٠ = ١.٥ ساعة = ساعة ونص',
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
    realLifeContext: 'مركب في النيل بيمشي بسرعة ٢٠ كم/ساعة ومشي ٥ ساعات.',
    questionText: 'قطع كام كيلومتر؟',
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = ٢٠ × ٥ = ١٠٠ كم',
    options: [
      { optionText: '١٠٠ كم', isCorrect: true },
      { optionText: '٨٠ كم', isCorrect: false },
      { optionText: '١٢٠ كم', isCorrect: false },
      { optionText: '٤ كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ميكروباص ماشي من القاهرة لأسيوط (٣٦٠ كم) بسرعة ٩٠ كم/ساعة.',
    questionText: 'الرحلة هتاخد كام ساعة؟',
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = ٣٦٠ ÷ ٩٠ = ٤ ساعات',
    options: [
      { optionText: '٤ ساعات', isCorrect: true },
      { optionText: '٣ ساعات', isCorrect: false },
      { optionText: '٥ ساعات', isCorrect: false },
      { optionText: '٦ ساعات', isCorrect: false },
    ],
  },

  // --- Topic 6, Open-ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'عربية مشيت ٢٤٠ كم في ٣ ساعات.',
    questionText: 'كام كانت سرعة العربية بالكم/ساعة؟',
    correctAnswer: '٨٠',
    correctAnswerNumeric: 80,
    hintText: 'السرعة = المسافة ÷ الزمن',
    explanation: 'السرعة = ٢٤٠ ÷ ٣ = ٨٠ كم/ساعة',
  },

  // --- Topic 6, Open-ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'قطر ماشي بسرعة ١٢٠ كم/ساعة ويحتاج أن يقطع مسافة ٣٦٠ كم.',
    questionText: 'الرحلة هتاخد كام ساعة؟',
    correctAnswer: '٣',
    correctAnswerNumeric: 3,
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = ٣٦٠ ÷ ١٢٠ = ٣ ساعات',
  },

  // --- Topic 6, Open-ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'تاكسي ماشي بسرعة ٤٠ كم/ساعة لمدة ٢ ساعة.',
    questionText: 'قطع كام كيلومتر؟',
    correctAnswer: '٨٠',
    correctAnswerNumeric: 80,
    hintText: 'المسافة = السرعة × الزمن',
    explanation: 'المسافة = ٤٠ × ٢ = ٨٠ كم',
  },

  // --- Topic 6, Open-ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'طيارة بتمشي بسرعة ٦٠٠ كم/ساعة وقطعت ١٨٠٠ كم.',
    questionText: 'الرحلة أخدت كام ساعة؟',
    correctAnswer: '٣',
    correctAnswerNumeric: 3,
    hintText: 'الزمن = المسافة ÷ السرعة',
    explanation: 'الزمن = ١٨٠٠ ÷ ٦٠٠ = ٣ ساعات',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: المتوسط الحسابي (Averages/Mean)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أحمد جاب في ٤ امتحانات: ٨٠، ٩٠، ٧٠، ٦٠.',
    questionText: 'كام متوسط درجاته؟',
    hintText: 'المتوسط = مجموع الدرجات ÷ عددها',
    explanation: '(٨٠ + ٩٠ + ٧٠ + ٦٠) ÷ ٤ = ٣٠٠ ÷ ٤ = ٧٥',
    options: [
      { optionText: '٧٥', isCorrect: true },
      { optionText: '٨٠', isCorrect: false },
      { optionText: '٧٠', isCorrect: false },
      { optionText: '٨٥', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة لعبت ٣ جولات في لعبة فيديو وجابت: ١٢٠، ١٥٠، ٩٠ نقطة.',
    questionText: 'كام متوسط نقطها؟',
    hintText: 'اجمع النقط كلها واقسم على عدد الجولات',
    explanation: '(١٢٠ + ١٥٠ + ٩٠) ÷ ٣ = ٣٦٠ ÷ ٣ = ١٢٠',
    options: [
      { optionText: '١٢٠', isCorrect: true },
      { optionText: '١٥٠', isCorrect: false },
      { optionText: '١١٠', isCorrect: false },
      { optionText: '١٣٠', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'درجة الحرارة ٥ أيام في القاهرة كانت: ٣٠، ٣٢، ٢٨، ٣٤، ٢٦.',
    questionText: 'كام متوسط درجة الحرارة؟',
    hintText: 'اجمع درجات الحرارة واقسم على ٥',
    explanation: '(٣٠ + ٣٢ + ٢٨ + ٣٤ + ٢٦) ÷ ٥ = ١٥٠ ÷ ٥ = ٣٠',
    options: [
      { optionText: '٣٠', isCorrect: true },
      { optionText: '٣٢', isCorrect: false },
      { optionText: '٢٨', isCorrect: false },
      { optionText: '٣١', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نورا جابت في ٥ اختبارات قصيرة: ٨، ١٠، ٦، ٩، ٧.',
    questionText: 'كام متوسط درجاتها؟',
    hintText: 'اجمع الدرجات واقسم على ٥',
    explanation: '(٨ + ١٠ + ٦ + ٩ + ٧) ÷ ٥ = ٤٠ ÷ ٥ = ٨',
    options: [
      { optionText: '٨', isCorrect: true },
      { optionText: '٧', isCorrect: false },
      { optionText: '٩', isCorrect: false },
      { optionText: '١٠', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'فريق كرة سجّل في ٤ مباريات: ٣، ١، ٢، ٤ أهداف.',
    questionText: 'كام متوسط الأهداف في المباراة؟',
    hintText: 'المتوسط = مجموع الأهداف ÷ عدد المباريات',
    explanation: '(٣ + ١ + ٢ + ٤) ÷ ٤ = ١٠ ÷ ٤ = ٢.٥',
    options: [
      { optionText: '٢.٥', isCorrect: true },
      { optionText: '٣', isCorrect: false },
      { optionText: '٢', isCorrect: false },
      { optionText: '٤', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عدد ركاب المترو في ٣ أيام كان: ١٠٠٠، ١٢٠٠، ٨٠٠.',
    questionText: 'كام متوسط عدد الركاب يوميًا؟',
    hintText: 'اجمع عدد الركاب واقسم على ٣',
    explanation: '(١٠٠٠ + ١٢٠٠ + ٨٠٠) ÷ ٣ = ٣٠٠٠ ÷ ٣ = ١٠٠٠',
    options: [
      { optionText: '١٠٠٠', isCorrect: true },
      { optionText: '٩٠٠', isCorrect: false },
      { optionText: '١١٠٠', isCorrect: false },
      { optionText: '١٢٠٠', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'محمد اشترى ٤ حاجات أسعارها: ٢٠، ٣٥، ١٥، ٣٠ جنيه.',
    questionText: 'كام متوسط سعر الحاجة الواحدة؟',
    hintText: 'اجمع الأسعار واقسم على ٤',
    explanation: '(٢٠ + ٣٥ + ١٥ + ٣٠) ÷ ٤ = ١٠٠ ÷ ٤ = ٢٥ جنيه',
    options: [
      { optionText: '٢٥', isCorrect: true },
      { optionText: '٣٠', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
      { optionText: '٣٥', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أطوال ٥ طلاب في الفصل بالسنتيمتر: ١٤٠، ١٥٠، ١٣٥، ١٤٥، ١٣٠.',
    questionText: 'كام متوسط طول الطلاب؟',
    hintText: 'اجمع الأطوال واقسم على ٥',
    explanation: '(١٤٠ + ١٥٠ + ١٣٥ + ١٤٥ + ١٣٠) ÷ ٥ = ٧٠٠ ÷ ٥ = ١٤٠ سم',
    options: [
      { optionText: '١٤٠', isCorrect: true },
      { optionText: '١٤٥', isCorrect: false },
      { optionText: '١٣٥', isCorrect: false },
      { optionText: '١٥٠', isCorrect: false },
    ],
  },

  // --- Topic 7, Open-ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'درجات ياسمين في ٣ مواد: ٨٥، ٩٥، ٧٠.',
    questionText: 'كام متوسط درجاتها؟',
    correctAnswer: '٨٣.٣',
    correctAnswerNumeric: 83.3,
    hintText: 'اجمع الدرجات الـ ٣ واقسم على ٣',
    explanation: '(٨٥ + ٩٥ + ٧٠) ÷ ٣ = ٢٥٠ ÷ ٣ ≈ ٨٣.٣',
  },

  // --- Topic 7, Open-ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'كريم لعب ٤ جولات بولينج وجاب: ٩٠، ١١٠، ١٠٠، ١٠٠.',
    questionText: 'كام متوسط نقطه في الجولة؟',
    correctAnswer: '١٠٠',
    correctAnswerNumeric: 100,
    hintText: 'اجمع النقط واقسم على ٤',
    explanation: '(٩٠ + ١١٠ + ١٠٠ + ١٠٠) ÷ ٤ = ٤٠٠ ÷ ٤ = ١٠٠',
  },

  // --- Topic 7, Open-ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'مصروف مريم في ٥ أيام كان: ١٠، ٢٠، ١٥، ٢٥، ٣٠ جنيه.',
    questionText: 'كام متوسط مصروفها اليومي؟',
    correctAnswer: '٢٠',
    correctAnswerNumeric: 20,
    hintText: 'اجمع المصروف كله واقسم على ٥',
    explanation: '(١٠ + ٢٠ + ١٥ + ٢٥ + ٣٠) ÷ ٥ = ١٠٠ ÷ ٥ = ٢٠ جنيه',
  },

  // --- Topic 7, Open-ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'درجة الحرارة في ٤ أيام في أسوان: ٣٦، ٤٠، ٣٨، ٤٢.',
    questionText: 'كام متوسط درجة الحرارة؟',
    correctAnswer: '٣٩',
    correctAnswerNumeric: 39,
    hintText: 'اجمع درجات الحرارة واقسم على ٤',
    explanation: '(٣٦ + ٤٠ + ٣٨ + ٤٢) ÷ ٤ = ١٥٦ ÷ ٤ = ٣٩ درجة',
  },
];
