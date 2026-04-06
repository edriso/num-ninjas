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

export const level2Questions: QuestionSeed[] = [
  // =============================================
  // Topic 1: جمع وطرح الكسور (Add/Subtract Fractions - like denominators)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 1 - MCQ 1
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'أحمد وصاحبه بياكلوا بيتزا متقسمة ٨ حتت',
    questionText: 'أحمد أكل ٣/٨ من البيتزا وصاحبه أكل ٢/٨. أكلوا كم مع بعض؟',
    hintText: 'اجمع البسط مع بعض والمقام يفضل زي ما هو',
    explanation: '٣/٨ + ٢/٨ = ٥/٨ لأن المقام واحد فبنجمع البسط بس',
    options: [
      { optionText: '٥/٨', isCorrect: true },
      { optionText: '٥/١٦', isCorrect: false },
      { optionText: '٦/٨', isCorrect: false },
      { optionText: '١/٨', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 2
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'سارة عندها كيكة مقسومة ٦ حتت',
    questionText: 'سارة أكلت ٤/٦ من الكيكة وأختها أكلت ١/٦. المتبقي كم من الكيكة؟',
    hintText: 'اجمع اللي اتاكل الأول وبعدين اطرح من الواحد الصحيح',
    explanation: '٤/٦ + ١/٦ = ٥/٦ اتاكلوا، فالالمتبقي = ٦/٦ - ٥/٦ = ١/٦',
    options: [
      { optionText: '١/٦', isCorrect: true },
      { optionText: '٢/٦', isCorrect: false },
      { optionText: '٣/٦', isCorrect: false },
      { optionText: '٥/٦', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 3
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت لتر عصير وقسمته على ٥ كوبايات متساوية',
    questionText: 'لو شربت ٣/٥ من العصير، تحتاج أن تشرب كم أيضاً حتى تخلّص الكل؟',
    hintText: 'الكل = ٥/٥، اطرح منه اللي شربته',
    explanation: '٥/٥ - ٣/٥ = ٢/٥ هو اللي المتبقي',
    options: [
      { optionText: '٢/٥', isCorrect: true },
      { optionText: '٣/٥', isCorrect: false },
      { optionText: '١/٥', isCorrect: false },
      { optionText: '٤/٥', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 4
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة الرسم، مريم لونت جزء من اللوحة بالأزرق وجزء بالأحمر',
    questionText: 'مريم لونت ٢/١٠ أزرق و ٥/١٠ أحمر. لونت كم من اللوحة كلها؟',
    hintText: 'المقام واحد فاجمع البسط',
    explanation: '٢/١٠ + ٥/١٠ = ٧/١٠ من اللوحة اتلونت',
    options: [
      { optionText: '٧/١٠', isCorrect: true },
      { optionText: '٧/٢٠', isCorrect: false },
      { optionText: '٣/١٠', isCorrect: false },
      { optionText: '١٠/١٠', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 5
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'طارق بيعمل واجب الرياضيات وخلّص جزء من التمارين',
    questionText: 'طارق حل ٣/٤ من التمارين الصبح و ١/٤ بالليل. حل كام من التمارين؟',
    hintText: 'اجمع الكسرين واللي المقام فيهم واحد',
    explanation: '٣/٤ + ١/٤ = ٤/٤ = ١ يعني حل كل التمارين',
    options: [
      { optionText: '٤/٤ (كلهم)', isCorrect: true },
      { optionText: '٣/٤', isCorrect: false },
      { optionText: '٢/٤', isCorrect: false },
      { optionText: '٤/٨', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 6
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'نور تقسم شريط ملون ٨ أجزاء متساوية حتى تعمل أساور',
    questionText: 'نور استخدمت ٥/٨ من الشريط. لو قصت أيضاً ١/٨، يفضل قد إيه؟',
    hintText: 'اجمع اللي استخدمته وبعدين اطرح من ٨/٨',
    explanation: '٥/٨ + ١/٨ = ٦/٨ استُخدمت، فالباقي = ٨/٨ - ٦/٨ = ٢/٨',
    options: [
      { optionText: '٢/٨', isCorrect: true },
      { optionText: '٣/٨', isCorrect: false },
      { optionText: '٤/٨', isCorrect: false },
      { optionText: '١/٨', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 7
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عمر بيلعب لعبة وكسب نقط على مراحل',
    questionText: 'في المرحلة الأولى كسب ٤/١٠ وفي التانية كسب ٣/١٠. المجموع كام؟',
    hintText: 'المقام واحد = ١٠، اجمع البسط',
    explanation: '٤/١٠ + ٣/١٠ = ٧/١٠',
    options: [
      { optionText: '٧/١٠', isCorrect: true },
      { optionText: '٧/٢٠', isCorrect: false },
      { optionText: '١/١٠', isCorrect: false },
      { optionText: '١٢/١٠', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 8
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'كريم وخالد بياكلوا تورتة عيد ميلاد متقسمة ٣ حتت كبار',
    questionText: 'كريم أكل ١/٣ وخالد أكل ١/٣. الالمتبقي قد إيه؟',
    hintText: 'اجمع اللي اتاكل واطرح من الكل',
    explanation: '١/٣ + ١/٣ = ٢/٣ اتاكلوا، فالالمتبقي = ٣/٣ - ٢/٣ = ١/٣',
    options: [
      { optionText: '١/٣', isCorrect: true },
      { optionText: '٢/٣', isCorrect: false },
      { optionText: '٠', isCorrect: false },
      { optionText: '٣/٣', isCorrect: false },
    ],
  },

  // Topic 1 - Open Ended 1
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتاكل شوكولاتة مقسومة ٥ مربعات',
    questionText: 'ياسمين أكلت ٢/٥ وأختها أكلت ١/٥. كم يتبقى على ٥ من الشوكولاتة؟',
    hintText: 'اجمع اللي اتاكل واطرح من ٥/٥',
    explanation: '٢/٥ + ١/٥ = ٣/٥ اتاكلوا. الالمتبقي = ٥/٥ - ٣/٥ = ٢/٥. البسط = ٢',
    correctAnswer: '٢',
    correctAnswerNumeric: 2,
  },

  // Topic 1 - Open Ended 2
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في المدرسة بيوزعوا ساندوتشات مقسومة ٤ أجزاء',
    questionText: 'لو أكلت ٣/٤ من الساندوتش، اطرح من الكل. البسط بتاع الكم يتبقى؟',
    hintText: '٤/٤ - ٣/٤ = ؟/٤',
    explanation: '٤/٤ - ٣/٤ = ١/٤، فالبسط = ١',
    correctAnswer: '١',
    correctAnswerNumeric: 1,
  },

  // Topic 1 - Open Ended 3
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'حازم ملا خزان مية البيت على مرتين',
    questionText: 'المرة الأولى ملا ٣/٨ والتانية ملا ٤/٨. اجمع الكسرين. البسط كام؟',
    hintText: '٣ + ٤ = ؟ والمقام يفضل ٨',
    explanation: '٣/٨ + ٤/٨ = ٧/٨، فالبسط = ٧',
    correctAnswer: '٧',
    correctAnswerNumeric: 7,
  },

  // Topic 1 - Open Ended 4
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في الفسحة، الأولاد أكلوا جزء من البطيخة والبنات أكلوا جزء تاني',
    questionText: 'الأولاد أكلوا ٤/٦ والبنات ١/٦. مجموع اللي اتاكل: البسط كام؟',
    hintText: '٤ + ١ = ؟',
    explanation: '٤/٦ + ١/٦ = ٥/٦، فالبسط = ٥',
    correctAnswer: '٥',
    correctAnswerNumeric: 5,
  },

  // =============================================
  // Topic 2: الأعداد العشرية (Decimals - reading, comparing, place value)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 2 - MCQ 1
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أحمد رايح السوبر ماركت يشتري حاجات للبيت',
    questionText: 'سعر اللبن ٧٫٥٠ جنيه وسعر العصير ٧٫٢٥ جنيه. أي أغلى؟',
    hintText: 'قارن الجزء العشري: ٥٠ ولا ٢٥ أكبر؟',
    explanation: '٧٫٥٠ أكبر من ٧٫٢٥ لأن ٥٠ في الجزء العشري أكبر من ٢٥',
    options: [
      { optionText: 'اللبن (٧٫٥٠)', isCorrect: true },
      { optionText: 'العصير (٧٫٢٥)', isCorrect: false },
      { optionText: 'نفس السعر', isCorrect: false },
      { optionText: 'مش ممكن نعرف', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 2
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في حصة العلوم بيقيسوا أطوال النباتات',
    questionText: 'نبتة أحمد طولها ١٢٫٣ سم ونبتة سارة طولها ١٢٫٧ سم. مين نبتتها أطول؟',
    hintText: 'الجزء الصحيح واحد، قارن العشري',
    explanation: '١٢٫٧ > ١٢٫٣ لأن ٧ أعشار أكبر من ٣ أعشار',
    options: [
      { optionText: 'سارة (١٢٫٧)', isCorrect: true },
      { optionText: 'أحمد (١٢٫٣)', isCorrect: false },
      { optionText: 'نفس الطول', isCorrect: false },
      { optionText: 'محتاجين نقيس تاني', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 3
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'ماما بتشتري فاكهة من البقال',
    questionText: 'الرقم ٣٫٤٥ جنيه: الـ ٤ قيمتها المكانية إيه؟',
    hintText: 'الـ ٤ في خانة الأعشار',
    explanation: 'الـ ٤ في خانة الأعشار يعني قيمتها ٤ أعشار = ٠٫٤',
    options: [
      { optionText: '٤ أعشار (٠٫٤)', isCorrect: true },
      { optionText: '٤ وحدات', isCorrect: false },
      { optionText: '٤ أجزاء من مية (٠٫٠٤)', isCorrect: false },
      { optionText: '٤٠', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 4
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'الأولاد بيتسابقوا في الجري في حصة الألعاب',
    questionText: 'رتّب الأزمنة دي من الأسرع للأبطأ: ١٢٫٩ ثانية، ١٢٫٣ ثانية، ١٢٫٥ ثانية',
    hintText: 'الأسرع هو اللي وقته أقل',
    explanation: '١٢٫٣ < ١٢٫٥ < ١٢٫٩ فالترتيب من الأسرع: ١٢٫٣ ثم ١٢٫٥ ثم ١٢٫٩',
    options: [
      { optionText: '١٢٫٣ ، ١٢٫٥ ، ١٢٫٩', isCorrect: true },
      { optionText: '١٢٫٩ ، ١٢٫٥ ، ١٢٫٣', isCorrect: false },
      { optionText: '١٢٫٥ ، ١٢٫٣ ، ١٢٫٩', isCorrect: false },
      { optionText: '١٢٫٣ ، ١٢٫٩ ، ١٢٫٥', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 5
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في المكتبة بيشتروا أدوات مدرسية',
    questionText: 'القلم بـ ٣٫٧٥ جنيه والكراسة بـ ٥٫٢٠ جنيه. أي أغلى وبكام فرق؟',
    hintText: 'قارن الأعداد العشرية: مين أكبر؟',
    explanation: '٥٫٢٠ > ٣٫٧٥ فالكراسة أغلى. الفرق = ٥٫٢٠ - ٣٫٧٥ = ١٫٤٥ جنيه',
    options: [
      { optionText: 'الكراسة أغلى بـ ١٫٤٥ جنيه', isCorrect: true },
      { optionText: 'القلم أغلى بـ ١٫٤٥ جنيه', isCorrect: false },
      { optionText: 'الكراسة أغلى بـ ٢٫٤٥ جنيه', isCorrect: false },
      { optionText: 'نفس السعر', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 6
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'بابا بيملى بنزين العربية',
    questionText: 'سعر لتر البنزين ١٢٫٥٠ جنيه. الرقم ٥ في خانة إيه؟',
    hintText: 'الـ ٥ بعد العلامة العشرية في أول خانة',
    explanation: 'الـ ٥ في خانة الأعشار يعني قيمتها ٥ أعشار = ٠٫٥٠',
    options: [
      { optionText: 'خانة الأعشار', isCorrect: true },
      { optionText: 'خانة الآحاد', isCorrect: false },
      { optionText: 'خانة أجزاء المية', isCorrect: false },
      { optionText: 'خانة العشرات', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 7
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في السوبر ماركت بيشوفوا أسعار الشيبسي',
    questionText: 'أي عدد أكبر: ٤٫٠٨ ولا ٤٫٨٠؟',
    hintText: 'قارن خانة الأعشار: ٠ ولا ٨؟',
    explanation: '٤٫٨٠ أكبر لأن خانة الأعشار فيها ٨ بينما التاني ٠',
    options: [
      { optionText: '٤٫٨٠', isCorrect: true },
      { optionText: '٤٫٠٨', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش ممكن نقارن', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 8
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'المدرس بيسأل عن الكسور العشرية',
    questionText: 'العدد ٠٫٧ يساوي كام من عشرة؟',
    hintText: 'العشري الأول بعد النقطة هو عدد الأعشار',
    explanation: '٠٫٧ = ٧ من ١٠ = ٧/١٠',
    options: [
      { optionText: '٧ من ١٠', isCorrect: true },
      { optionText: '٧ من ١٠٠', isCorrect: false },
      { optionText: '٧٠ من ١٠٠٠', isCorrect: false },
      { optionText: '٧ من ١', isCorrect: false },
    ],
  },

  // Topic 2 - Open Ended 1
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'في الصيدلية ماما بتشتري دوا',
    questionText: 'سعر الدوا ١٥٫٧٥ جنيه. الرقم ٧ قيمته المكانية كام؟ اكتب الإجابة كعدد عشري.',
    hintText: 'الـ ٧ في خانة الأعشار',
    explanation: 'الـ ٧ في خانة الأعشار قيمتها ٠٫٧',
    correctAnswer: '٠٫٧',
    correctAnswerNumeric: 0.7,
  },

  // Topic 2 - Open Ended 2
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'خالد بيوزن شنطة المدرسة',
    questionText: 'وزن الشنطة ٣٫٤ كجم ووزن اللانش بوكس ١٫٢ كجم. مين أتقل بكام كجم؟',
    hintText: 'اطرح الأصغر من الأكبر',
    explanation: '٣٫٤ - ١٫٢ = ٢٫٢ كجم فرق',
    correctAnswer: '٢٫٢',
    correctAnswerNumeric: 2.2,
  },

  // Topic 2 - Open Ended 3
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'في محل الحلويات، سعر الكيلو مكتوب بالعشري',
    questionText: 'رتّب من الأصغر للأكبر: ٢٫٩ ، ٢٫٣ ، ٢٫٧. العدد اللي في النص (التاني) كام؟',
    hintText: 'الترتيب: ٢٫٣ ثم ؟ ثم ٢٫٩',
    explanation: 'الترتيب: ٢٫٣ ، ٢٫٧ ، ٢٫٩. العدد في النص = ٢٫٧',
    correctAnswer: '٢٫٧',
    correctAnswerNumeric: 2.7,
  },

  // Topic 2 - Open Ended 4
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتحسب مصروفها اليومي',
    questionText: 'عند ياسمين ٨٫٥٠ جنيه. اشترت ساندوتش بـ ٥٫٢٥ جنيه. المتبقي معاها كام؟',
    hintText: 'اطرح سعر الساندوتش من المبلغ',
    explanation: '٨٫٥٠ - ٥٫٢٥ = ٣٫٢٥ جنيه',
    correctAnswer: '٣٫٢٥',
    correctAnswerNumeric: 3.25,
  },

  // =============================================
  // Topic 3: جمع وطرح العشرية (Add/Subtract Decimals)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 3 - MCQ 1
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيشتري أكل من الكانتين',
    questionText: 'ساندوتش بـ ٨٫٥٠ جنيه وعصير بـ ٤٫٧٥ جنيه. المجموع كام؟',
    hintText: 'حط العلامة العشرية تحت بعض واجمع',
    explanation: '٨٫٥٠ + ٤٫٧٥ = ١٣٫٢٥ جنيه',
    options: [
      { optionText: '١٣٫٢٥ جنيه', isCorrect: true },
      { optionText: '١٢٫٢٥ جنيه', isCorrect: false },
      { optionText: '١٣٫٧٥ جنيه', isCorrect: false },
      { optionText: '١٢٫٧٥ جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 2
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سارة معاها مال وراحت المكتبة تشتري كتاب',
    questionText: 'سارة معاها ٢٠٫٠٠ جنيه واشترت كتاب بـ ١٤٫٥٠ جنيه. الباقي كام؟',
    hintText: 'اطرح سعر الكتاب من المال',
    explanation: '٢٠٫٠٠ - ١٤٫٥٠ = ٥٫٥٠ جنيه',
    options: [
      { optionText: '٥٫٥٠ جنيه', isCorrect: true },
      { optionText: '٦٫٥٠ جنيه', isCorrect: false },
      { optionText: '٥٫٠٠ جنيه', isCorrect: false },
      { optionText: '٤٫٥٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 3
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'بابا بيحسب فاتورة البقالة',
    questionText: 'جبنة بـ ١٢٫٣٠ جنيه وزبدة بـ ٩٫٨٥ جنيه. المجموع كام؟',
    hintText: 'اجمع الأجزاء العشرية مع بعض والصحيحة مع بعض',
    explanation: '١٢٫٣٠ + ٩٫٨٥ = ٢٢٫١٥ جنيه',
    options: [
      { optionText: '٢٢٫١٥ جنيه', isCorrect: true },
      { optionText: '٢١٫١٥ جنيه', isCorrect: false },
      { optionText: '٢٢٫٢٥ جنيه', isCorrect: false },
      { optionText: '٢١٫٧٥ جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 4
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'خالد بيشتري هدية لصاحبه',
    questionText: 'عنده ٥٠٫٠٠ جنيه واشترى لعبة بـ ٣٥٫٧٥ جنيه. الباقي كام؟',
    hintText: 'اطرح: ٥٠٫٠٠ - ٣٥٫٧٥',
    explanation: '٥٠٫٠٠ - ٣٥٫٧٥ = ١٤٫٢٥ جنيه',
    options: [
      { optionText: '١٤٫٢٥ جنيه', isCorrect: true },
      { optionText: '١٥٫٢٥ جنيه', isCorrect: false },
      { optionText: '١٤٫٧٥ جنيه', isCorrect: false },
      { optionText: '٢٥٫٢٥ جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 5
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت خضار من السوق',
    questionText: 'طماطم بـ ٦٫٢٥ جنيه وخيار بـ ٣٫٥٠ جنيه وبصل بـ ٢٫٧٥ جنيه. المجموع كام؟',
    hintText: 'اجمع الأتنين الأولانيين وبعدين أضف التالت',
    explanation: '٦٫٢٥ + ٣٫٥٠ = ٩٫٧٥ ، ثم ٩٫٧٥ + ٢٫٧٥ = ١٢٫٥٠ جنيه',
    options: [
      { optionText: '١٢٫٥٠ جنيه', isCorrect: true },
      { optionText: '١١٫٥٠ جنيه', isCorrect: false },
      { optionText: '١٢٫٠٠ جنيه', isCorrect: false },
      { optionText: '١٣٫٥٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 6
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'نور بتحسب وزنها قبل وبعد الرجيم',
    questionText: 'وزن نور كان ٤٥٫٨ كجم وبقى ٤٣٫٥ كجم. نقصت كام كجم؟',
    hintText: 'اطرح الوزن الجديد من القديم',
    explanation: '٤٥٫٨ - ٤٣٫٥ = ٢٫٣ كجم',
    options: [
      { optionText: '٢٫٣ كجم', isCorrect: true },
      { optionText: '٢٫٧ كجم', isCorrect: false },
      { optionText: '٣٫٣ كجم', isCorrect: false },
      { optionText: '١٫٣ كجم', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 7
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'الأولاد بيتسابقوا في القفز الطويل',
    questionText: 'أحمد قفز ٣٫٢٥ متر وعمر قفز ٢٫٩٠ متر. الفرق كام متر؟',
    hintText: 'اطرح المسافة الأقل من الأكبر',
    explanation: '٣٫٢٥ - ٢٫٩٠ = ٠٫٣٥ متر',
    options: [
      { optionText: '٠٫٣٥ متر', isCorrect: true },
      { optionText: '٠٫٤٥ متر', isCorrect: false },
      { optionText: '٠٫٢٥ متر', isCorrect: false },
      { optionText: '١٫٣٥ متر', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 8
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتجمع مال في الحصالة',
    questionText: 'كان فيها ٢٥٫٤٠ جنيه وأضافت ١٢٫٦٠ جنيه. المجموع كام؟',
    hintText: 'اجمع الأعداد العشرية',
    explanation: '٢٥٫٤٠ + ١٢٫٦٠ = ٣٨٫٠٠ جنيه',
    options: [
      { optionText: '٣٨٫٠٠ جنيه', isCorrect: true },
      { optionText: '٣٧٫٠٠ جنيه', isCorrect: false },
      { optionText: '٣٨٫٤٠ جنيه', isCorrect: false },
      { optionText: '٣٧٫٦٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - Open Ended 1
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'مريم بتشتري أدوات رسم',
    questionText: 'ألوان بـ ١٥٫٣٠ جنيه وفرشاة بـ ٧٫٥٠ جنيه. المجموع كام جنيه؟',
    hintText: 'اجمع الجزء العشري مع بعض والصحيح مع بعض',
    explanation: '١٥٫٣٠ + ٧٫٥٠ = ٢٢٫٨٠ جنيه',
    correctAnswer: '٢٢٫٨٠',
    correctAnswerNumeric: 22.80,
  },

  // Topic 3 - Open Ended 2
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'عمر بيشتري من كافيتيريا المدرسة',
    questionText: 'معاه ١٠٫٠٠ جنيه واشترى عصير بـ ٣٫٢٥ جنيه وبسكويت بـ ٢٫٥٠ جنيه. الباقي كام؟',
    hintText: 'اجمع المشتريات الأول وبعدين اطرح من ١٠',
    explanation: '٣٫٢٥ + ٢٫٥٠ = ٥٫٧٥، ثم ١٠٫٠٠ - ٥٫٧٥ = ٤٫٢٥ جنيه',
    correctAnswer: '٤٫٢٥',
    correctAnswerNumeric: 4.25,
  },

  // Topic 3 - Open Ended 3
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'طارق بيحسب طوله السنة دي والسنة اللي فاتت',
    questionText: 'طوله السنة دي ١٤٢٫٥ سم والسنة اللي فاتت كان ١٣٨٫٨ سم. طال كام سم؟',
    hintText: 'اطرح الطول القديم من الجديد',
    explanation: '١٤٢٫٥ - ١٣٨٫٨ = ٣٫٧ سم',
    correctAnswer: '٣٫٧',
    correctAnswerNumeric: 3.7,
  },

  // Topic 3 - Open Ended 4
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'ماما بتحسب فاتورة الموبايل',
    questionText: 'فاتورة هذا الشهر ٨٥٫٤٠ جنيه والشهر اللي فات ٧٩٫٦٠ جنيه. مجموع الشهرين كام؟',
    hintText: 'اجمع الفاتورتين',
    explanation: '٨٥٫٤٠ + ٧٩٫٦٠ = ١٦٥٫٠٠ جنيه',
    correctAnswer: '١٦٥',
    correctAnswerNumeric: 165,
  },

  // =============================================
  // Topic 4: الوقت والمواعيد (Time Calculations)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 4 - MCQ 1
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'أحمد يذهب المدرسة كل يوم الصبح',
    questionText: 'أحمد ساب البيت الساعة ٧:١٥ ووصل المدرسة ٧:٤٥. الطريق أخد قد إيه؟',
    hintText: 'احسب الفرق بين الوقتين',
    explanation: '٧:٤٥ - ٧:١٥ = ٣٠ دقيقة',
    options: [
      { optionText: '٣٠ دقيقة', isCorrect: true },
      { optionText: '٤٥ دقيقة', isCorrect: false },
      { optionText: '١٥ دقيقة', isCorrect: false },
      { optionText: 'ساعة', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 2
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'سارة عندها حصة موسيقى في المدرسة',
    questionText: 'الحصة بتبدأ الساعة ١٠:٣٠ ومدتها ٤٥ دقيقة. بتخلص الساعة كام؟',
    hintText: 'أضف ٤٥ دقيقة على ١٠:٣٠',
    explanation: '١٠:٣٠ + ٤٥ دقيقة = ١١:١٥',
    options: [
      { optionText: '١١:١٥', isCorrect: true },
      { optionText: '١١:٠٠', isCorrect: false },
      { optionText: '١٠:٧٥', isCorrect: false },
      { optionText: '١١:٣٠', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 3
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'العيلة بتتفرج على ماتش كورة على التلفزيون',
    questionText: 'الماتش بدأ الساعة ٩:٠٠ بالليل وخلص ١٠:٤٥. مدة الماتش قد إيه؟',
    hintText: 'من ٩:٠٠ لـ ١٠:٠٠ = ساعة، و٤٥ دقيقة',
    explanation: 'من ٩:٠٠ لـ ١٠:٤٥ = ساعة و ٤٥ دقيقة = ١٠٥ دقيقة',
    options: [
      { optionText: 'ساعة و ٤٥ دقيقة', isCorrect: true },
      { optionText: 'ساعتين', isCorrect: false },
      { optionText: 'ساعة و نص', isCorrect: false },
      { optionText: 'ساعة و ١٥ دقيقة', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 4
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'خالد بيركب مترو القاهرة من المرج لجامعة القاهرة',
    questionText: 'خالد ركب المترو الساعة ٨:٢٠ والرحلة أخدت ٥٥ دقيقة. وصل الساعة كام؟',
    hintText: '٨:٢٠ + ٤٠ دقيقة = ٩:٠٠، وباقي ١٥ دقيقة',
    explanation: '٨:٢٠ + ٥٥ دقيقة = ٩:١٥',
    options: [
      { optionText: '٩:١٥', isCorrect: true },
      { optionText: '٩:٢٠', isCorrect: false },
      { optionText: '٨:٧٥', isCorrect: false },
      { optionText: '٩:٠٥', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 5
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'نور بتاخد درس خصوصي بعد المدرسة',
    questionText: 'الدرس بيبدأ الساعة ٤:٠٠ ومدته ساعة ونص. بيخلص الساعة كام؟',
    hintText: 'ساعة ونص = ٩٠ دقيقة',
    explanation: '٤:٠٠ + ١:٣٠ = ٥:٣٠',
    options: [
      { optionText: '٥:٣٠', isCorrect: true },
      { optionText: '٥:٠٠', isCorrect: false },
      { optionText: '٦:٠٠', isCorrect: false },
      { optionText: '٤:٣٠', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 6
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'الجدول المدرسي فيه ٦ حصص في اليوم',
    questionText: 'اليوم الدراسي بيبدأ ٧:٣٠ الصبح وبيخلص ١:٣٠ الضهر. مدته كام ساعة؟',
    hintText: 'احسب من ٧:٣٠ لـ ١:٣٠',
    explanation: 'من ٧:٣٠ لـ ١:٣٠ = ٦ ساعات',
    options: [
      { optionText: '٦ ساعات', isCorrect: true },
      { optionText: '٥ ساعات', isCorrect: false },
      { optionText: '٧ ساعات', isCorrect: false },
      { optionText: '٤ ساعات ونص', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 7
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'بابا بيسافر بالقطر من القاهرة لإسكندرية',
    questionText: 'الساعة ١٤:٠٠ بنظام ٢٤ ساعة يعني كام بنظام ١٢ ساعة؟',
    hintText: 'اطرح ١٢ من الساعة لو أكبر من ١٢',
    explanation: '١٤:٠٠ - ١٢ = ٢:٠٠ بعد الظهر',
    options: [
      { optionText: '٢:٠٠ م', isCorrect: true },
      { optionText: '٤:٠٠ م', isCorrect: false },
      { optionText: '٢:٠٠ ص', isCorrect: false },
      { optionText: '١٢:٠٠ م', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 8
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'مريم بتطبخ مع ماما وتريد تعرف الأكل يخلص امتى',
    questionText: 'حطوا الأكل في الفرن الساعة ٥:٤٠ ومحتاج ساعة و ٢٠ دقيقة. يطلع الساعة كام؟',
    hintText: '٥:٤٠ + ١ ساعة = ٦:٤٠، و٢٠ دقيقة',
    explanation: '٥:٤٠ + ١:٢٠ = ٧:٠٠',
    options: [
      { optionText: '٧:٠٠', isCorrect: true },
      { optionText: '٦:٦٠', isCorrect: false },
      { optionText: '٦:٤٠', isCorrect: false },
      { optionText: '٧:٢٠', isCorrect: false },
    ],
  },

  // Topic 4 - Open Ended 1
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'عمر يذهب تمرين كورة القدم',
    questionText: 'التمرين بيبدأ ٣:٣٠ وبيخلص ٥:١٥. مدة التمرين كام دقيقة؟',
    hintText: 'من ٣:٣٠ لـ ٥:١٥ احسب الساعات والدقايق',
    explanation: 'من ٣:٣٠ لـ ٥:١٥ = ساعة و ٤٥ دقيقة = ١٠٥ دقيقة',
    correctAnswer: '١٠٥',
    correctAnswerNumeric: 105,
  },

  // Topic 4 - Open Ended 2
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتشوف جدول مواعيد القطرات',
    questionText: 'القطر بيمشي الساعة ١٦:٤٥ بنظام ٢٤ ساعة. هذا يبقى كام بنظام ١٢ ساعة؟ اكتب الساعة بس.',
    hintText: 'اطرح ١٢ من ١٦',
    explanation: '١٦ - ١٢ = ٤، يبقى الساعة ٤:٤٥ مساءً',
    correctAnswer: '٤:٤٥',
    correctAnswerNumeric: 4.45,
  },

  // Topic 4 - Open Ended 3
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيذاكر للامتحان',
    questionText: 'بدأ المذاكرة ٤:٠٠ العصر وخلّص ٦:٣٠. ذاكر كام دقيقة؟',
    hintText: 'من ٤:٠٠ لـ ٦:٣٠ = ساعتين ونص',
    explanation: 'ساعتين ونص = ١٥٠ دقيقة',
    correctAnswer: '١٥٠',
    correctAnswerNumeric: 150,
  },

  // Topic 4 - Open Ended 4
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيركب أتوبيس المدرسة',
    questionText: 'الأتوبيس يمر عليه ٦:٥٠ الصبح والمدرسة بتبدأ ٧:٣٠. بيوصل قبل المدرسة بكام دقيقة لو الطريق ٢٥ دقيقة؟',
    hintText: '٦:٥٠ + ٢٥ = وقت الوصول، وبعدين احسب الفرق لـ ٧:٣٠',
    explanation: '٦:٥٠ + ٢٥ = ٧:١٥. الفرق بين ٧:١٥ و ٧:٣٠ = ١٥ دقيقة',
    correctAnswer: '١٥',
    correctAnswerNumeric: 15,
  },

  // =============================================
  // Topic 5: المحيط والمساحة (Perimeter & Area - rectangles, squares)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 5 - MCQ 1
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'أحمد عايز يحوّط أوضته بشريط زينة',
    questionText: 'أوضة أحمد طولها ٤ متر وعرضها ٣ متر. محيط الأوضة كام متر؟',
    hintText: 'محيط المستطيل = ٢ × (الطول + العرض)',
    explanation: 'المحيط = ٢ × (٤ + ٣) = ٢ × ٧ = ١٤ متر',
    options: [
      { optionText: '١٤ متر', isCorrect: true },
      { optionText: '١٢ متر', isCorrect: false },
      { optionText: '٧ متر', isCorrect: false },
      { optionText: '٢٤ متر', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 2
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'سارة تريد تفرش أوضتها بسجادة',
    questionText: 'أوضة سارة طولها ٥ متر وعرضها ٤ متر. مساحة الأوضة كام متر مربع؟',
    hintText: 'مساحة المستطيل = الطول × العرض',
    explanation: 'المساحة = ٥ × ٤ = ٢٠ متر مربع',
    options: [
      { optionText: '٢٠ متر مربع', isCorrect: true },
      { optionText: '١٨ متر مربع', isCorrect: false },
      { optionText: '٩ متر مربع', isCorrect: false },
      { optionText: '٢٥ متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 3
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'خالد بيحسب حجم ملعب الكورة في النادي',
    questionText: 'ملعب صغير طوله ٢٠ متر وعرضه ١٠ متر. مساحته كام متر مربع؟',
    hintText: 'المساحة = الطول × العرض',
    explanation: 'المساحة = ٢٠ × ١٠ = ٢٠٠ متر مربع',
    options: [
      { optionText: '٢٠٠ متر مربع', isCorrect: true },
      { optionText: '٣٠ متر مربع', isCorrect: false },
      { optionText: '٦٠ متر مربع', isCorrect: false },
      { optionText: '١٠٠ متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 4
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'نور تريد تعمل إطار لصورة مربعة',
    questionText: 'صورة مربعة طول ضلعها ٦ متر. محيطها كام متر؟',
    hintText: 'محيط المربع = ٤ × طول الضلع',
    explanation: 'المحيط = ٤ × ٦ = ٢٤ متر',
    options: [
      { optionText: '٢٤ متر', isCorrect: true },
      { optionText: '١٢ متر', isCorrect: false },
      { optionText: '٣٦ متر', isCorrect: false },
      { optionText: '١٨ متر', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 5
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'بابا بيبلّط حوش البيت',
    questionText: 'الحوش مربع طول ضلعه ٨ متر. مساحته كام متر مربع؟',
    hintText: 'مساحة المربع = الضلع × الضلع',
    explanation: 'المساحة = ٨ × ٨ = ٦٤ متر مربع',
    options: [
      { optionText: '٦٤ متر مربع', isCorrect: true },
      { optionText: '٣٢ متر مربع', isCorrect: false },
      { optionText: '١٦ متر مربع', isCorrect: false },
      { optionText: '٤٨ متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 6
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'المدرسة تريد تعمل سور حوالين حديقة المدرسة',
    questionText: 'الحديقة مستطيلة طولها ١٥ متر وعرضها ١٠ متر. محتاجين كام متر سور؟',
    hintText: 'السور = المحيط = ٢ × (الطول + العرض)',
    explanation: 'المحيط = ٢ × (١٥ + ١٠) = ٢ × ٢٥ = ٥٠ متر',
    options: [
      { optionText: '٥٠ متر', isCorrect: true },
      { optionText: '٢٥ متر', isCorrect: false },
      { optionText: '١٥٠ متر', isCorrect: false },
      { optionText: '٤٠ متر', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 7
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'مريم تريد تدهن حيطة أوضتها',
    questionText: 'الحيطة طولها ٥ متر وارتفاعها ٣ متر. مساحة الحيطة كام متر مربع؟',
    hintText: 'الحيطة مستطيل: المساحة = الطول × الارتفاع',
    explanation: 'المساحة = ٥ × ٣ = ١٥ متر مربع',
    options: [
      { optionText: '١٥ متر مربع', isCorrect: true },
      { optionText: '١٦ متر مربع', isCorrect: false },
      { optionText: '٨ متر مربع', isCorrect: false },
      { optionText: '٢٠ متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 8
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عمر بيقارن بين مساحة أوضته وأوضة أخوه',
    questionText: 'أوضة عمر ٤×٣ متر وأوضة أخوه ٣×٣ متر. الفرق في المساحة كام؟',
    hintText: 'احسب مساحة كل أوضة واطرح',
    explanation: 'مساحة أوضة عمر = ١٢، أوضة أخوه = ٩. الفرق = ١٢ - ٩ = ٣ متر مربع',
    options: [
      { optionText: '٣ متر مربع', isCorrect: true },
      { optionText: '٦ متر مربع', isCorrect: false },
      { optionText: '١ متر مربع', isCorrect: false },
      { optionText: '٤ متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - Open Ended 1
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'طارق بيحسب مساحة الصالة في البيت',
    questionText: 'الصالة مستطيلة طولها ٦ متر وعرضها ٤ متر. مساحتها كام متر مربع؟',
    hintText: 'المساحة = الطول × العرض',
    explanation: 'المساحة = ٦ × ٤ = ٢٤ متر مربع',
    correctAnswer: '٢٤',
    correctAnswerNumeric: 24,
  },

  // Topic 5 - Open Ended 2
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين تريد تعمل برواز حوالين لوحة مربعة',
    questionText: 'اللوحة مربعة طول ضلعها ٧ متر. محيطها كام متر؟',
    hintText: 'محيط المربع = ٤ × الضلع',
    explanation: 'المحيط = ٤ × ٧ = ٢٨ متر',
    correctAnswer: '٢٨',
    correctAnswerNumeric: 28,
  },

  // Topic 5 - Open Ended 3
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيعمل ملعب صغير في الحديقة',
    questionText: 'الملعب مستطيل طوله ١٢ متر وعرضه ٨ متر. محيطه كام متر؟',
    hintText: 'المحيط = ٢ × (الطول + العرض)',
    explanation: 'المحيط = ٢ × (١٢ + ٨) = ٢ × ٢٠ = ٤٠ متر',
    correctAnswer: '٤٠',
    correctAnswerNumeric: 40,
  },

  // Topic 5 - Open Ended 4
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيحسب مساحة سطح البيت المربع',
    questionText: 'السطح مربع طول ضلعه ٩ متر. مساحته كام متر مربع؟',
    hintText: 'مساحة المربع = الضلع × الضلع',
    explanation: 'المساحة = ٩ × ٩ = ٨١ متر مربع',
    correctAnswer: '٨١',
    correctAnswerNumeric: 81,
  },

  // =============================================
  // Topic 6: التقدير والتقريب (Estimation & Approximation)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 6 - MCQ 1
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ماما بتقدر فاتورة السوبر ماركت قبل ما تدفع',
    questionText: 'اشترت حاجات بـ ٤٧ جنيه و ٣٢ جنيه و ١٨ جنيه. قرّب كل عدد لأقرب عشرة واجمع.',
    hintText: '٤٧ ≈ ٥٠، ٣٢ ≈ ٣٠، ١٨ ≈ ٢٠',
    explanation: '٥٠ + ٣٠ + ٢٠ = ١٠٠ جنيه تقريبًا',
    options: [
      { optionText: '١٠٠ جنيه', isCorrect: true },
      { optionText: '٩٠ جنيه', isCorrect: false },
      { optionText: '١١٠ جنيه', isCorrect: false },
      { optionText: '٩٧ جنيه', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 2
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'بابا بيقدر تكلفة رحلة العيلة',
    questionText: 'قرّب العدد ٣٧٤ لأقرب مية.',
    hintText: 'شوف رقم العشرات: ٧ أكبر من ٥ ولا أصغر؟',
    explanation: '٣٧٤: رقم العشرات ٧ ≥ ٥ فنقرب لفوق = ٤٠٠',
    options: [
      { optionText: '٤٠٠', isCorrect: true },
      { optionText: '٣٠٠', isCorrect: false },
      { optionText: '٣٧٠', isCorrect: false },
      { optionText: '٣٨٠', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 3
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيحسب درجاته في الامتحانات',
    questionText: 'درجاته: ٧٨ و ٨٣ و ٩١. قرّب كل عدد لأقرب عشرة واجمع التقدير.',
    hintText: '٧٨ ≈ ٨٠، ٨٣ ≈ ٨٠، ٩١ ≈ ٩٠',
    explanation: '٨٠ + ٨٠ + ٩٠ = ٢٥٠ تقريبًا',
    options: [
      { optionText: '٢٥٠', isCorrect: true },
      { optionText: '٢٤٠', isCorrect: false },
      { optionText: '٢٦٠', isCorrect: false },
      { optionText: '٢٥٢', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 4
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'سارة بتقدر عدد الطلاب في المدرسة',
    questionText: 'في المدرسة ٨٤٥ طالب. قرّب لأقرب مية.',
    hintText: 'رقم العشرات ٤ أقل من ٥',
    explanation: '٨٤٥: رقم العشرات ٤ < ٥ فنقرب لتحت = ٨٠٠',
    options: [
      { optionText: '٨٠٠', isCorrect: true },
      { optionText: '٩٠٠', isCorrect: false },
      { optionText: '٨٥٠', isCorrect: false },
      { optionText: '٨٤٠', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 5
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'خالد بيقدر فاتورة المطعم',
    questionText: 'الفاتورة فيها: ساندوتش ٢٩ جنيه ومشروب ١٤ جنيه. قرّب لأقرب عشرة وقدّر المجموع.',
    hintText: '٢٩ ≈ ٣٠، ١٤ ≈ ١٠',
    explanation: '٣٠ + ١٠ = ٤٠ جنيه تقريبًا',
    options: [
      { optionText: '٤٠ جنيه', isCorrect: true },
      { optionText: '٥٠ جنيه', isCorrect: false },
      { optionText: '٤٣ جنيه', isCorrect: false },
      { optionText: '٣٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 6
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'نور بتقدر وزن شنطة السفر',
    questionText: 'قرّب العدد ١٦٫٧ لأقرب عدد صحيح.',
    hintText: 'الجزء العشري ٧ أكبر من ٥',
    explanation: '١٦٫٧: الجزء العشري ٧ ≥ ٥ فنقرب لفوق = ١٧',
    options: [
      { optionText: '١٧', isCorrect: true },
      { optionText: '١٦', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
      { optionText: '١٦٫٥', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 7
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقدر ثمن لعب العيد',
    questionText: 'لعبة بـ ١٤٥ جنيه ولعبة بـ ٢٦٣ جنيه. قرّب لأقرب مية وقدّر المجموع.',
    hintText: '١٤٥ ≈ ١٠٠، ٢٦٣ ≈ ٣٠٠',
    explanation: '١٠٠ + ٣٠٠ = ٤٠٠ جنيه تقريبًا',
    options: [
      { optionText: '٤٠٠ جنيه', isCorrect: true },
      { optionText: '٥٠٠ جنيه', isCorrect: false },
      { optionText: '٣٠٠ جنيه', isCorrect: false },
      { optionText: '٤٠٨ جنيه', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 8
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عمر بيقدر مسافة بيته من المدرسة',
    questionText: 'المسافة ٢٫٣ كم. قرّب لأقرب عدد صحيح.',
    hintText: 'الجزء العشري ٣ أقل من ٥',
    explanation: '٢٫٣: الجزء العشري ٣ < ٥ فنقرب لتحت = ٢',
    options: [
      { optionText: '٢', isCorrect: true },
      { optionText: '٣', isCorrect: false },
      { optionText: '٢٫٥', isCorrect: false },
      { optionText: '١', isCorrect: false },
    ],
  },

  // Topic 6 - Open Ended 1
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'طارق بيقدر فاتورة البقالة',
    questionText: 'اشترى حاجات بـ ٦٣ و ٢٨ جنيه. قرّب كل عدد لأقرب عشرة واجمع. الناتج التقريبي كام؟',
    hintText: '٦٣ ≈ ٦٠، ٢٨ ≈ ٣٠',
    explanation: '٦٠ + ٣٠ = ٩٠ جنيه تقريبًا',
    correctAnswer: '٩٠',
    correctAnswerNumeric: 90,
  },

  // Topic 6 - Open Ended 2
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتقرب أعداد في حصة الرياضيات',
    questionText: 'قرّب العدد ٥٦٧ لأقرب مية. الناتج كام؟',
    hintText: 'رقم العشرات ٦ ≥ ٥',
    explanation: '٥٦٧: رقم العشرات ٦ ≥ ٥ فنقرب لفوق = ٦٠٠',
    correctAnswer: '٦٠٠',
    correctAnswerNumeric: 600,
  },

  // Topic 6 - Open Ended 3
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيقدر سعر جزمة جديدة',
    questionText: 'سعر الجزمة ٢٤٧ جنيه. قرّب لأقرب عشرة.',
    hintText: 'رقم الآحاد ٧ ≥ ٥',
    explanation: '٢٤٧: رقم الآحاد ٧ ≥ ٥ فنقرب لفوق = ٢٥٠',
    correctAnswer: '٢٥٠',
    correctAnswerNumeric: 250,
  },

  // Topic 6 - Open Ended 4
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيقرب عدد عشري',
    questionText: 'قرّب العدد ٨٫٤ لأقرب عدد صحيح.',
    hintText: 'الجزء العشري ٤ < ٥',
    explanation: '٨٫٤: الجزء العشري ٤ < ٥ فنقرب لتحت = ٨',
    correctAnswer: '٨',
    correctAnswerNumeric: 8,
  },

  // =============================================
  // Topic 7: الأنماط والتسلسلات (Patterns & Sequences)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 7 - MCQ 1
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيرتب كراسي الفصل في صفوف',
    questionText: 'الصف الأول فيه ٢ كرسي، التاني ٥، التالت ٨. الصف الرابع فيه كام كرسي؟',
    hintText: 'شوف الفرق بين كل عدد واللي بعده',
    explanation: 'النمط: +٣ كل مرة. ٢، ٥، ٨، ١١',
    options: [
      { optionText: '١١', isCorrect: true },
      { optionText: '١٠', isCorrect: false },
      { optionText: '١٢', isCorrect: false },
      { optionText: '٩', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 2
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة بتعمل عقد من الخرز الملون',
    questionText: 'النمط: ٣، ٦، ١٢، ٢٤، ___. العدد اللي بعد كده كام؟',
    hintText: 'كل عدد بيتضرب في كام؟',
    explanation: 'النمط: ×٢ كل مرة. ٢٤ × ٢ = ٤٨',
    options: [
      { optionText: '٤٨', isCorrect: true },
      { optionText: '٣٦', isCorrect: false },
      { optionText: '٣٠', isCorrect: false },
      { optionText: '٢٨', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 3
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'خالد بيلعب لعبة أرقام مع صحابه',
    questionText: 'التسلسل: ٥٠، ٤٥، ٤٠، ٣٥، ___. العدد التالي كام؟',
    hintText: 'كل مرة بينقص كام؟',
    explanation: 'النمط: -٥ كل مرة. ٣٥ - ٥ = ٣٠',
    options: [
      { optionText: '٣٠', isCorrect: true },
      { optionText: '٢٥', isCorrect: false },
      { optionText: '٣٢', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 4
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نور بتوزع حلويات على صحباتها كل يوم',
    questionText: 'أول يوم وزعت ١، تاني يوم ٤، تالت يوم ٩، رابع يوم ١٦. خامس يوم كام؟',
    hintText: 'الأعداد دي هي مربعات: ١²، ٢²، ٣²، ٤²...',
    explanation: 'دي مربعات الأعداد: ١، ٤، ٩، ١٦، ٢٥. الخامس = ٥² = ٢٥',
    options: [
      { optionText: '٢٥', isCorrect: true },
      { optionText: '٢٠', isCorrect: false },
      { optionText: '٣٢', isCorrect: false },
      { optionText: '٢٤', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 5
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'مريم بترتب أكواب على رفوف المطبخ',
    questionText: 'الرف الأول ١٠ أكواب، التاني ٧، التالت ٤. الرابع كام؟',
    hintText: 'كل رف بينقص ٣',
    explanation: 'النمط: -٣ كل مرة. ٤ - ٣ = ١',
    options: [
      { optionText: '١', isCorrect: true },
      { optionText: '٢', isCorrect: false },
      { optionText: '٠', isCorrect: false },
      { optionText: '٣', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 6
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عمر بيحل لغز أرقام في مجلة أطفال',
    questionText: 'التسلسل: ٢، ٦، ١٨، ٥٤، ___. العدد التالي كام؟',
    hintText: 'كل عدد بيتضرب في ٣',
    explanation: 'النمط: ×٣ كل مرة. ٥٤ × ٣ = ١٦٢',
    options: [
      { optionText: '١٦٢', isCorrect: true },
      { optionText: '١٠٨', isCorrect: false },
      { optionText: '٧٢', isCorrect: false },
      { optionText: '١٥٠', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 7
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتعمل نمط بالمكعبات الملونة',
    questionText: 'النمط: ٤، ٧، ١٠، ١٣، ___. العدد اللي بعد كده كام؟',
    hintText: 'كل مرة بيزيد ٣',
    explanation: 'النمط: +٣. ١٣ + ٣ = ١٦',
    options: [
      { optionText: '١٦', isCorrect: true },
      { optionText: '١٥', isCorrect: false },
      { optionText: '١٧', isCorrect: false },
      { optionText: '١٤', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 8
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'طارق بيلاحظ نمط في أرقام البيوت في الشارع',
    questionText: 'أرقام البيوت: ٣، ٨، ١٣، ١٨، ___. البيت اللي بعد كده رقمه كام؟',
    hintText: 'الفرق بين كل رقم واللي بعده ثابت',
    explanation: 'النمط: +٥ كل مرة. ١٨ + ٥ = ٢٣',
    options: [
      { optionText: '٢٣', isCorrect: true },
      { optionText: '٢٢', isCorrect: false },
      { optionText: '٢٤', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
    ],
  },

  // Topic 7 - Open Ended 1
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيحل تمرين أنماط في كتاب الرياضيات',
    questionText: 'أكمل النمط: ١٠٠، ٩٠، ٨٠، ٧٠، ___. العدد التالي كام؟',
    hintText: 'كل مرة بينقص ١٠',
    explanation: 'النمط: -١٠ كل مرة. ٧٠ - ١٠ = ٦٠',
    correctAnswer: '٦٠',
    correctAnswerNumeric: 60,
  },

  // Topic 7 - Open Ended 2
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيرتب كتب على أرفف المكتبة',
    questionText: 'الرف الأول ٥ كتب، التاني ١٠، التالت ١٥. الرف الرابع كام كتاب؟',
    hintText: 'كل رف بيزيد ٥ كتب',
    explanation: 'النمط: +٥. ١٥ + ٥ = ٢٠ كتاب',
    correctAnswer: '٢٠',
    correctAnswerNumeric: 20,
  },

  // Topic 7 - Open Ended 3
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'نور بتعد نجوم ذهبية بتاخدها كل أسبوع',
    questionText: 'أول أسبوع ٢، تاني أسبوع ٤، تالت أسبوع ٨، رابع أسبوع ١٦. خامس أسبوع كام؟',
    hintText: 'كل أسبوع العدد بيتضاعف',
    explanation: 'النمط: ×٢. ١٦ × ٢ = ٣٢',
    correctAnswer: '٣٢',
    correctAnswerNumeric: 32,
  },

  // Topic 7 - Open Ended 4
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'مريم بتعمل سلسلة أرقام في دفتر الرياضيات',
    questionText: 'التسلسل: ١، ٤، ٧، ١٠، ١٣، ___. العدد السادس كام؟',
    hintText: 'الفرق بين كل عدد والتاني = ٣',
    explanation: 'النمط: +٣ كل مرة. ١٣ + ٣ = ١٦',
    correctAnswer: '١٦',
    correctAnswerNumeric: 16,
  },
];
