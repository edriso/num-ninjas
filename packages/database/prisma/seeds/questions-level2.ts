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
    realLifeContext: 'أحمد وصاحبه بياكلوا بيتزا متقسمة 8 حتت',
    questionText: 'أحمد أكل 3/8 من البيتزا وصاحبه أكل 2/8. أكلوا كم مع بعض؟',
    hintText: 'اجمع البسط مع بعض والمقام يتبقى زي ما هو',
    explanation: '3/8 + 2/8 = 5/8 لأن المقام واحد فبنجمع البسط بس',
    options: [
      { optionText: '5/8', isCorrect: true },
      { optionText: '5/16', isCorrect: false },
      { optionText: '6/8', isCorrect: false },
      { optionText: '1/8', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 2
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'سارة عندها كيكة مقسومة 6 حتت',
    questionText: 'سارة أكلت 4/6 من الكيكة وأختها أكلت 1/6. المتبقي كم من الكيكة؟',
    hintText: 'اجمع اللي أُكِل الأول وبعدين اطرح من الواحد الصحيح',
    explanation: '4/6 + 1/6 = 5/6 أُكِلوا، فالمتبقي = 6/6 - 5/6 = 1/6',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '2/6', isCorrect: false },
      { optionText: '3/6', isCorrect: false },
      { optionText: '5/6', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 3
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت لتر عصير وقسمته على 5 كوبايات متساوية',
    questionText: 'لو شربت 3/5 من العصير، تحتاج أن تشرب كم أيضاً حتى تخلّص الكل؟',
    hintText: 'الكل = 5/5، اطرح منه اللي شربته',
    explanation: '5/5 - 3/5 = 2/5 هو اللي المتبقي',
    options: [
      { optionText: '2/5', isCorrect: true },
      { optionText: '3/5', isCorrect: false },
      { optionText: '1/5', isCorrect: false },
      { optionText: '4/5', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 4
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة الرسم، مريم لونت جزء من اللوحة بالأزرق وجزء بالأحمر',
    questionText: 'مريم لونت 2/10 أزرق و 5/10 أحمر. لونت كم من اللوحة كلها؟',
    hintText: 'المقام واحد فاجمع البسط',
    explanation: '2/10 + 5/10 = 7/10 من اللوحة اتلونت',
    options: [
      { optionText: '7/10', isCorrect: true },
      { optionText: '7/20', isCorrect: false },
      { optionText: '3/10', isCorrect: false },
      { optionText: '10/10', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 5
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'طارق بيعمل واجب الرياضيات وخلّص جزء من التمارين',
    questionText: 'طارق حل 3/4 من التمارين الصبح و 1/4 بالليل. حل كم من التمارين؟',
    hintText: 'اجمع الكسرين واللي المقام فيهم واحد',
    explanation: '3/4 + 1/4 = 4/4 = 1 يعني حل كل التمارين',
    options: [
      { optionText: '4/4 (كلهم)', isCorrect: true },
      { optionText: '3/4', isCorrect: false },
      { optionText: '2/4', isCorrect: false },
      { optionText: '4/8', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 6
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'نور تقسم شريط ملون 8 أجزاء متساوية حتى تعمل أساور',
    questionText: 'نور استخدمت 5/8 من الشريط. لو قصت أيضاً 1/8، يتبقى كم؟',
    hintText: 'اجمع اللي استخدمته وبعدين اطرح من 8/8',
    explanation: '5/8 + 1/8 = 6/8 استُخدمت، فالباقي = 8/8 - 6/8 = 2/8',
    options: [
      { optionText: '2/8', isCorrect: true },
      { optionText: '3/8', isCorrect: false },
      { optionText: '4/8', isCorrect: false },
      { optionText: '1/8', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 7
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عمر بيلعب لعبة وكسب نقط على مراحل',
    questionText: 'في المرحلة الأولى كسب 4/10 وفي التانية كسب 3/10. المجموع كم؟',
    hintText: 'المقام واحد = 10، اجمع البسط',
    explanation: '4/10 + 3/10 = 7/10',
    options: [
      { optionText: '7/10', isCorrect: true },
      { optionText: '7/20', isCorrect: false },
      { optionText: '1/10', isCorrect: false },
      { optionText: '12/10', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 8
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'كريم وخالد بياكلوا تورتة عيد ميلاد متقسمة 3 حتت كبار',
    questionText: 'كريم أكل 1/3 وخالد أكل 1/3. المتبقي كم؟',
    hintText: 'اجمع اللي أُكِل واطرح من الكل',
    explanation: '1/3 + 1/3 = 2/3 أُكِلوا، فالمتبقي = 3/3 - 2/3 = 1/3',
    options: [
      { optionText: '1/3', isCorrect: true },
      { optionText: '2/3', isCorrect: false },
      { optionText: '0', isCorrect: false },
      { optionText: '3/3', isCorrect: false },
    ],
  },

  // Topic 1 - Open Ended 1
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين تأكل فواكه مقسومة 5 مربعات',
    questionText: 'ياسمين أكلت 2/5 وأختها أكلت 1/5. كم يتبقى على 5 من الفواكه؟',
    hintText: 'اجمع اللي أُكِل واطرح من 5/5',
    explanation: '2/5 + 1/5 = 3/5 أُكِلوا. المتبقي = 5/5 - 3/5 = 2/5. البسط = 2',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // Topic 1 - Open Ended 2
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في المدرسة بيوزعوا ساندوتشات مقسومة 4 أجزاء',
    questionText: 'لو أكلت 3/4 من الساندوتش، اطرح من الكل. البسط الخاص بالمتبقي كم؟',
    hintText: '4/4 - 3/4 = ؟/4',
    explanation: '4/4 - 3/4 = 1/4، فالبسط = 1',
    correctAnswer: '1',
    correctAnswerNumeric: 1,
  },

  // Topic 1 - Open Ended 3
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'حازم ملأ خزان مياه البيت على مرتين',
    questionText: 'المرة الأولى ملا 3/8 والتانية ملا 4/8. اجمع الكسرين. البسط كم؟',
    hintText: '3 + 4 = ؟ والمقام يتبقى 8',
    explanation: '3/8 + 4/8 = 7/8، فالبسط = 7',
    correctAnswer: '7',
    correctAnswerNumeric: 7,
  },

  // Topic 1 - Open Ended 4
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في الفسحة، الأولاد أكلوا جزء من البطيخة والبنات أكلوا جزء تاني',
    questionText: 'الأولاد أكلوا 4/6 والبنات 1/6. مجموع اللي أُكِل: البسط كم؟',
    hintText: '4 + 1 = ؟',
    explanation: '4/6 + 1/6 = 5/6، فالبسط = 5',
    correctAnswer: '5',
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
    questionText: 'سعر اللبن 7٫50 جنيه وسعر العصير 7٫25 جنيه. أي أغلى؟',
    hintText: 'قارن الجزء العشري: 50 ولا 25 أكبر؟',
    explanation: '7٫50 أكبر من 7٫25 لأن 50 في الجزء العشري أكبر من 25',
    options: [
      { optionText: 'اللبن (7٫50)', isCorrect: true },
      { optionText: 'العصير (7٫25)', isCorrect: false },
      { optionText: 'نفس السعر', isCorrect: false },
      { optionText: 'مش ممكن نعرف', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 2
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في حصة العلوم بيقيسوا أطوال النباتات',
    questionText: 'نبتة أحمد طولها 12٫3 سم ونبتة سارة طولها 12٫7 سم. مين نبتتها أطول؟',
    hintText: 'الجزء الصحيح واحد، قارن العشري',
    explanation: '12٫7 > 12٫3 لأن 7 أعشار أكبر من 3 أعشار',
    options: [
      { optionText: 'سارة (12٫7)', isCorrect: true },
      { optionText: 'أحمد (12٫3)', isCorrect: false },
      { optionText: 'نفس الطول', isCorrect: false },
      { optionText: 'محتاجين نقيس تاني', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 3
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'ماما بتشتري فاكهة من البقال',
    questionText: 'الرقم 3٫45 جنيه: الـ 4 قيمتها المكانية ما هي؟',
    hintText: 'الـ 4 في خانة الأعشار',
    explanation: 'الـ 4 في خانة الأعشار يعني قيمتها 4 أعشار = 0٫4',
    options: [
      { optionText: '4 أعشار (0٫4)', isCorrect: true },
      { optionText: '4 وحدات', isCorrect: false },
      { optionText: '4 أجزاء من مية (0٫04)', isCorrect: false },
      { optionText: '40', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 4
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'الأولاد بيتسابقوا في الجري في حصة الألعاب',
    questionText: 'رتّب الأزمنة دي من الأسرع للأبطأ: 12٫9 ثانية، 12٫3 ثانية، 12٫5 ثانية',
    hintText: 'الأسرع هو اللي وقته أقل',
    explanation: '12٫3 < 12٫5 < 12٫9 فالترتيب من الأسرع: 12٫3 ثم 12٫5 ثم 12٫9',
    options: [
      { optionText: '12٫3 ، 12٫5 ، 12٫9', isCorrect: true },
      { optionText: '12٫9 ، 12٫5 ، 12٫3', isCorrect: false },
      { optionText: '12٫5 ، 12٫3 ، 12٫9', isCorrect: false },
      { optionText: '12٫3 ، 12٫9 ، 12٫5', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 5
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في المكتبة بيشتروا أدوات مدرسية',
    questionText: 'القلم بـ 3٫75 جنيه والكراسة بـ 5٫20 جنيه. أي أغلى وبكم فرق؟',
    hintText: 'قارن الأعداد العشرية: مين أكبر؟',
    explanation: '5٫20 > 3٫75 فالكراسة أغلى. الفرق = 5٫20 - 3٫75 = 1٫45 جنيه',
    options: [
      { optionText: 'الكراسة أغلى بـ 1٫45 جنيه', isCorrect: true },
      { optionText: 'القلم أغلى بـ 1٫45 جنيه', isCorrect: false },
      { optionText: 'الكراسة أغلى بـ 2٫45 جنيه', isCorrect: false },
      { optionText: 'نفس السعر', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 6
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'بابا بيملى بنزين العربية',
    questionText: 'سعر لتر البنزين 12٫50 جنيه. الرقم 5 في أي خانة؟',
    hintText: 'الـ 5 بعد العلامة العشرية في أول خانة',
    explanation: 'الـ 5 في خانة الأعشار يعني قيمتها 5 أعشار = 0٫50',
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
    realLifeContext: 'في السوبر ماركت يشاهدون أسعار التفاح',
    questionText: 'أي عدد أكبر: 4٫08 ولا 4٫80؟',
    hintText: 'قارن خانة الأعشار: 0 ولا 8؟',
    explanation: '4٫80 أكبر لأن خانة الأعشار فيها 8 بينما التاني 0',
    options: [
      { optionText: '4٫80', isCorrect: true },
      { optionText: '4٫08', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش ممكن نقارن', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 8
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'المدرس بيسأل عن الكسور العشرية',
    questionText: 'العدد 0٫7 يساوي كم من عشرة؟',
    hintText: 'العشري الأول بعد النقطة هو عدد الأعشار',
    explanation: '0٫7 = 7 من 10 = 7/10',
    options: [
      { optionText: '7 من 10', isCorrect: true },
      { optionText: '7 من 100', isCorrect: false },
      { optionText: '70 من 1000', isCorrect: false },
      { optionText: '7 من 1', isCorrect: false },
    ],
  },

  // Topic 2 - Open Ended 1
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'في الصيدلية ماما بتشتري دوا',
    questionText: 'سعر الدوا 15٫75 جنيه. الرقم 7 قيمته المكانية كم؟ اكتب الإجابة كعدد عشري.',
    hintText: 'الـ 7 في خانة الأعشار',
    explanation: 'الـ 7 في خانة الأعشار قيمتها 0٫7',
    correctAnswer: '0٫7',
    correctAnswerNumeric: 0.7,
  },

  // Topic 2 - Open Ended 2
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'خالد بيوزن شنطة المدرسة',
    questionText: 'وزن الشنطة 3٫4 كجم ووزن اللانش بوكس 1٫2 كجم. مين أتقل بكم كجم؟',
    hintText: 'اطرح الأصغر من الأكبر',
    explanation: '3٫4 - 1٫2 = 2٫2 كجم فرق',
    correctAnswer: '2٫2',
    correctAnswerNumeric: 2.2,
  },

  // Topic 2 - Open Ended 3
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'في محل الفواكه، سعر الكيلو مكتوب بالعشري',
    questionText: 'رتّب من الأصغر للأكبر: 2٫9 ، 2٫3 ، 2٫7. العدد اللي في النص (التاني) كم؟',
    hintText: 'الترتيب: 2٫3 ثم ؟ ثم 2٫9',
    explanation: 'الترتيب: 2٫3 ، 2٫7 ، 2٫9. العدد في النص = 2٫7',
    correctAnswer: '2٫7',
    correctAnswerNumeric: 2.7,
  },

  // Topic 2 - Open Ended 4
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتحسب مصروفها اليومي',
    questionText: 'عند ياسمين 8٫50 جنيه. اشترت ساندوتش بـ 5٫25 جنيه. المتبقي معاها كم؟',
    hintText: 'اطرح سعر الساندوتش من المبلغ',
    explanation: '8٫50 - 5٫25 = 3٫25 جنيه',
    correctAnswer: '3٫25',
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
    questionText: 'ساندوتش بـ 8٫50 جنيه وعصير بـ 4٫75 جنيه. المجموع كم؟',
    hintText: 'حط العلامة العشرية تحت بعض واجمع',
    explanation: '8٫50 + 4٫75 = 13٫25 جنيه',
    options: [
      { optionText: '13٫25 جنيه', isCorrect: true },
      { optionText: '12٫25 جنيه', isCorrect: false },
      { optionText: '13٫75 جنيه', isCorrect: false },
      { optionText: '12٫75 جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 2
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سارة معاها مال وراحت المكتبة تشتري كتاب',
    questionText: 'سارة معاها 20٫00 جنيه واشترت كتاب بـ 14٫50 جنيه. الباقي كم؟',
    hintText: 'اطرح سعر الكتاب من المال',
    explanation: '20٫00 - 14٫50 = 5٫50 جنيه',
    options: [
      { optionText: '5٫50 جنيه', isCorrect: true },
      { optionText: '6٫50 جنيه', isCorrect: false },
      { optionText: '5٫00 جنيه', isCorrect: false },
      { optionText: '4٫50 جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 3
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'بابا بيحسب فاتورة البقالة',
    questionText: 'جبنة بـ 12٫30 جنيه وزبدة بـ 9٫85 جنيه. المجموع كم؟',
    hintText: 'اجمع الأجزاء العشرية مع بعض والصحيحة مع بعض',
    explanation: '12٫30 + 9٫85 = 22٫15 جنيه',
    options: [
      { optionText: '22٫15 جنيه', isCorrect: true },
      { optionText: '21٫15 جنيه', isCorrect: false },
      { optionText: '22٫25 جنيه', isCorrect: false },
      { optionText: '21٫75 جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 4
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'خالد بيشتري هدية لصاحبه',
    questionText: 'عنده 50٫00 جنيه واشترى لعبة بـ 35٫75 جنيه. الباقي كم؟',
    hintText: 'اطرح: 50٫00 - 35٫75',
    explanation: '50٫00 - 35٫75 = 14٫25 جنيه',
    options: [
      { optionText: '14٫25 جنيه', isCorrect: true },
      { optionText: '15٫25 جنيه', isCorrect: false },
      { optionText: '14٫75 جنيه', isCorrect: false },
      { optionText: '25٫25 جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 5
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ماما اشترت خضار من السوق',
    questionText: 'طماطم بـ 6٫25 جنيه وخيار بـ 3٫50 جنيه وبصل بـ 2٫75 جنيه. المجموع كم؟',
    hintText: 'اجمع الأتنين الأولانيين وبعدين أضف التالت',
    explanation: '6٫25 + 3٫50 = 9٫75 ، ثم 9٫75 + 2٫75 = 12٫50 جنيه',
    options: [
      { optionText: '12٫50 جنيه', isCorrect: true },
      { optionText: '11٫50 جنيه', isCorrect: false },
      { optionText: '12٫00 جنيه', isCorrect: false },
      { optionText: '13٫50 جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 6
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'نور بتحسب وزنها قبل وبعد الرجيم',
    questionText: 'وزن نور كان 45٫8 كجم وبقى 43٫5 كجم. نقصت كم كجم؟',
    hintText: 'اطرح الوزن الجديد من القديم',
    explanation: '45٫8 - 43٫5 = 2٫3 كجم',
    options: [
      { optionText: '2٫3 كجم', isCorrect: true },
      { optionText: '2٫7 كجم', isCorrect: false },
      { optionText: '3٫3 كجم', isCorrect: false },
      { optionText: '1٫3 كجم', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 7
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'الأولاد بيتسابقوا في القفز الطويل',
    questionText: 'أحمد قفز 3٫25 متر وعمر قفز 2٫90 متر. الفرق كم متر؟',
    hintText: 'اطرح المسافة الأقل من الأكبر',
    explanation: '3٫25 - 2٫90 = 0٫35 متر',
    options: [
      { optionText: '0٫35 متر', isCorrect: true },
      { optionText: '0٫45 متر', isCorrect: false },
      { optionText: '0٫25 متر', isCorrect: false },
      { optionText: '1٫35 متر', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 8
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتجمع مال في الحصالة',
    questionText: 'كان فيها 25٫40 جنيه وأضافت 12٫60 جنيه. المجموع كم؟',
    hintText: 'اجمع الأعداد العشرية',
    explanation: '25٫40 + 12٫60 = 38٫00 جنيه',
    options: [
      { optionText: '38٫00 جنيه', isCorrect: true },
      { optionText: '37٫00 جنيه', isCorrect: false },
      { optionText: '38٫40 جنيه', isCorrect: false },
      { optionText: '37٫60 جنيه', isCorrect: false },
    ],
  },

  // Topic 3 - Open Ended 1
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'مريم بتشتري أدوات رسم',
    questionText: 'ألوان بـ 15٫30 جنيه وفرشاة بـ 7٫50 جنيه. المجموع كم جنيه؟',
    hintText: 'اجمع الجزء العشري مع بعض والصحيح مع بعض',
    explanation: '15٫30 + 7٫50 = 22٫80 جنيه',
    correctAnswer: '22٫80',
    correctAnswerNumeric: 22.8,
  },

  // Topic 3 - Open Ended 2
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'عمر بيشتري من كافيتيريا المدرسة',
    questionText: 'معاه 10٫00 جنيه واشترى عصير بـ 3٫25 جنيه وموز بـ 2٫50 جنيه. الباقي كم؟',
    hintText: 'اجمع المشتريات الأول وبعدين اطرح من 10',
    explanation: '3٫25 + 2٫50 = 5٫75، ثم 10٫00 - 5٫75 = 4٫25 جنيه',
    correctAnswer: '4٫25',
    correctAnswerNumeric: 4.25,
  },

  // Topic 3 - Open Ended 3
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'طارق بيحسب طوله السنة دي والسنة اللي فاتت',
    questionText: 'طوله السنة دي 142٫5 سم والسنة اللي فاتت كان 138٫8 سم. طال كم سم؟',
    hintText: 'اطرح الطول القديم من الجديد',
    explanation: '142٫5 - 138٫8 = 3٫7 سم',
    correctAnswer: '3٫7',
    correctAnswerNumeric: 3.7,
  },

  // Topic 3 - Open Ended 4
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'ماما بتحسب فاتورة الموبايل',
    questionText: 'فاتورة هذا الشهر 85٫40 جنيه والشهر اللي فات 79٫60 جنيه. مجموع الشهرين كم؟',
    hintText: 'اجمع الفاتورتين',
    explanation: '85٫40 + 79٫60 = 165٫00 جنيه',
    correctAnswer: '165',
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
    questionText: 'أحمد ساب البيت الساعة 7:15 ووصل المدرسة 7:45. الطريق أخذ كم؟',
    hintText: 'احسب الفرق بين الوقتين',
    explanation: '7:45 - 7:15 = 30 دقيقة',
    options: [
      { optionText: '30 دقيقة', isCorrect: true },
      { optionText: '45 دقيقة', isCorrect: false },
      { optionText: '15 دقيقة', isCorrect: false },
      { optionText: 'ساعة', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 2
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'سارة عندها حصة موسيقى في المدرسة',
    questionText: 'الحصة تبدأ الساعة 10:30 ومدتها 45 دقيقة. تنتهي الساعة كم؟',
    hintText: 'أضف 45 دقيقة على 10:30',
    explanation: '10:30 + 45 دقيقة = 11:15',
    options: [
      { optionText: '11:15', isCorrect: true },
      { optionText: '11:00', isCorrect: false },
      { optionText: '10:75', isCorrect: false },
      { optionText: '11:30', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 3
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'العيلة بتتفرج على ماتش كورة على التلفزيون',
    questionText: 'الماتش بدأ الساعة 9:00 بالليل وخلص 10:45. مدة الماتش كم؟',
    hintText: 'من 9:00 لـ 10:00 = ساعة، و45 دقيقة',
    explanation: 'من 9:00 لـ 10:45 = ساعة و 45 دقيقة = 105 دقيقة',
    options: [
      { optionText: 'ساعة و 45 دقيقة', isCorrect: true },
      { optionText: 'ساعتين', isCorrect: false },
      { optionText: 'ساعة و نص', isCorrect: false },
      { optionText: 'ساعة و 15 دقيقة', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 4
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'خالد بيركب مترو القاهرة من المرج لجامعة القاهرة',
    questionText: 'خالد ركب المترو الساعة 8:20 والرحلة أخذت 55 دقيقة. وصل الساعة كم؟',
    hintText: '8:20 + 40 دقيقة = 9:00، وباقي 15 دقيقة',
    explanation: '8:20 + 55 دقيقة = 9:15',
    options: [
      { optionText: '9:15', isCorrect: true },
      { optionText: '9:20', isCorrect: false },
      { optionText: '8:75', isCorrect: false },
      { optionText: '9:05', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 5
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'نور بتأخذ درس خصوصي بعد المدرسة',
    questionText: 'الدرس يبدأ الساعة 4:00 ومدته ساعة ونص. ينتهي الساعة كم؟',
    hintText: 'ساعة ونص = 90 دقيقة',
    explanation: '4:00 + 1:30 = 5:30',
    options: [
      { optionText: '5:30', isCorrect: true },
      { optionText: '5:00', isCorrect: false },
      { optionText: '6:00', isCorrect: false },
      { optionText: '4:30', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 6
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'الجدول المدرسي فيه 6 حصص في اليوم',
    questionText: 'اليوم الدراسي يبدأ 7:30 الصبح وينتهي 1:30 الضهر. مدته كم ساعة؟',
    hintText: 'احسب من 7:30 لـ 1:30',
    explanation: 'من 7:30 لـ 1:30 = 6 ساعات',
    options: [
      { optionText: '6 ساعات', isCorrect: true },
      { optionText: '5 ساعات', isCorrect: false },
      { optionText: '7 ساعات', isCorrect: false },
      { optionText: '4 ساعات ونص', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 7
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'بابا بيسافر بالقطر من القاهرة لإسكندرية',
    questionText: 'الساعة 14:00 بنظام 24 ساعة يعني كم بنظام 12 ساعة؟',
    hintText: 'اطرح 12 من الساعة لو أكبر من 12',
    explanation: '14:00 - 12 = 2:00 بعد الظهر',
    options: [
      { optionText: '2:00 م', isCorrect: true },
      { optionText: '4:00 م', isCorrect: false },
      { optionText: '2:00 ص', isCorrect: false },
      { optionText: '12:00 م', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 8
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'مريم بتطبخ مع ماما وتريد تعرف الأكل يخلص امتى',
    questionText: 'حطوا الأكل في الفرن الساعة 5:40 ومحتاج ساعة و 20 دقيقة. يطلع الساعة كم؟',
    hintText: '5:40 + 1 ساعة = 6:40، و20 دقيقة',
    explanation: '5:40 + 1:20 = 7:00',
    options: [
      { optionText: '7:00', isCorrect: true },
      { optionText: '6:60', isCorrect: false },
      { optionText: '6:40', isCorrect: false },
      { optionText: '7:20', isCorrect: false },
    ],
  },

  // Topic 4 - Open Ended 1
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'عمر يذهب تمرين كورة القدم',
    questionText: 'التمرين يبدأ 3:30 وينتهي 5:15. مدة التمرين كم دقيقة؟',
    hintText: 'من 3:30 لـ 5:15 احسب الساعات والدقايق',
    explanation: 'من 3:30 لـ 5:15 = ساعة و 45 دقيقة = 105 دقيقة',
    correctAnswer: '105',
    correctAnswerNumeric: 105,
  },

  // Topic 4 - Open Ended 2
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتشوف جدول مواعيد القطرات',
    questionText:
      'القطر بيمشي الساعة 16:45 بنظام 24 ساعة. هذا يكون كم بنظام 12 ساعة؟ اكتب الساعة بس.',
    hintText: 'اطرح 12 من 16',
    explanation: '16 - 12 = 4، يكون الساعة 4:45 مساءً',
    correctAnswer: '4:45',
    correctAnswerNumeric: 4.45,
  },

  // Topic 4 - Open Ended 3
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيذاكر للامتحان',
    questionText: 'بدأ المذاكرة 4:00 العصر وخلّص 6:30. ذاكر كم دقيقة؟',
    hintText: 'من 4:00 لـ 6:30 = ساعتين ونص',
    explanation: 'ساعتين ونص = 150 دقيقة',
    correctAnswer: '150',
    correctAnswerNumeric: 150,
  },

  // Topic 4 - Open Ended 4
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيركب أتوبيس المدرسة',
    questionText:
      'الأتوبيس يمر عليه 6:50 الصبح والمدرسة تبدأ 7:30. يصل قبل المدرسة بكم دقيقة لو الطريق 25 دقيقة؟',
    hintText: '6:50 + 25 = وقت الوصول، وبعدين احسب الفرق لـ 7:30',
    explanation: '6:50 + 25 = 7:15. الفرق بين 7:15 و 7:30 = 15 دقيقة',
    correctAnswer: '15',
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
    realLifeContext: 'أحمد يريد يحوّط أوضته بشريط زينة',
    questionText: 'أوضة أحمد طولها 4 متر وعرضها 3 متر. محيط الأوضة كم متر؟',
    hintText: 'محيط المستطيل = 2 × (الطول + العرض)',
    explanation: 'المحيط = 2 × (4 + 3) = 2 × 7 = 14 متر',
    options: [
      { optionText: '14 متر', isCorrect: true },
      { optionText: '12 متر', isCorrect: false },
      { optionText: '7 متر', isCorrect: false },
      { optionText: '24 متر', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 2
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'سارة تريد تفرش أوضتها بسجادة',
    questionText: 'أوضة سارة طولها 5 متر وعرضها 4 متر. مساحة الأوضة كم متر مربع؟',
    hintText: 'مساحة المستطيل = الطول × العرض',
    explanation: 'المساحة = 5 × 4 = 20 متر مربع',
    options: [
      { optionText: '20 متر مربع', isCorrect: true },
      { optionText: '18 متر مربع', isCorrect: false },
      { optionText: '9 متر مربع', isCorrect: false },
      { optionText: '25 متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 3
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'خالد بيحسب حجم ملعب الكورة في النادي',
    questionText: 'ملعب صغير طوله 20 متر وعرضه 10 متر. مساحته كم متر مربع؟',
    hintText: 'المساحة = الطول × العرض',
    explanation: 'المساحة = 20 × 10 = 200 متر مربع',
    options: [
      { optionText: '200 متر مربع', isCorrect: true },
      { optionText: '30 متر مربع', isCorrect: false },
      { optionText: '60 متر مربع', isCorrect: false },
      { optionText: '100 متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 4
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'نور تريد تعمل إطار لصورة مربعة',
    questionText: 'صورة مربعة طول ضلعها 6 متر. محيطها كم متر؟',
    hintText: 'محيط المربع = 4 × طول الضلع',
    explanation: 'المحيط = 4 × 6 = 24 متر',
    options: [
      { optionText: '24 متر', isCorrect: true },
      { optionText: '12 متر', isCorrect: false },
      { optionText: '36 متر', isCorrect: false },
      { optionText: '18 متر', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 5
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'بابا بيبلّط حوش البيت',
    questionText: 'الحوش مربع طول ضلعه 8 متر. مساحته كم متر مربع؟',
    hintText: 'مساحة المربع = الضلع × الضلع',
    explanation: 'المساحة = 8 × 8 = 64 متر مربع',
    options: [
      { optionText: '64 متر مربع', isCorrect: true },
      { optionText: '32 متر مربع', isCorrect: false },
      { optionText: '16 متر مربع', isCorrect: false },
      { optionText: '48 متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 6
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'المدرسة تريد تعمل سور حوالين حديقة المدرسة',
    questionText: 'الحديقة مستطيلة طولها 15 متر وعرضها 10 متر. محتاجين كم متر سور؟',
    hintText: 'السور = المحيط = 2 × (الطول + العرض)',
    explanation: 'المحيط = 2 × (15 + 10) = 2 × 25 = 50 متر',
    options: [
      { optionText: '50 متر', isCorrect: true },
      { optionText: '25 متر', isCorrect: false },
      { optionText: '150 متر', isCorrect: false },
      { optionText: '40 متر', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 7
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'مريم تريد تدهن حيطة أوضتها',
    questionText: 'الحيطة طولها 5 متر وارتفاعها 3 متر. مساحة الحيطة كم متر مربع؟',
    hintText: 'الحيطة مستطيل: المساحة = الطول × الارتفاع',
    explanation: 'المساحة = 5 × 3 = 15 متر مربع',
    options: [
      { optionText: '15 متر مربع', isCorrect: true },
      { optionText: '16 متر مربع', isCorrect: false },
      { optionText: '8 متر مربع', isCorrect: false },
      { optionText: '20 متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 8
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عمر بيقارن بين مساحة أوضته وأوضة أخوه',
    questionText: 'أوضة عمر 4×3 متر وأوضة أخوه 3×3 متر. الفرق في المساحة كم؟',
    hintText: 'احسب مساحة كل أوضة واطرح',
    explanation: 'مساحة أوضة عمر = 12، أوضة أخوه = 9. الفرق = 12 - 9 = 3 متر مربع',
    options: [
      { optionText: '3 متر مربع', isCorrect: true },
      { optionText: '6 متر مربع', isCorrect: false },
      { optionText: '1 متر مربع', isCorrect: false },
      { optionText: '4 متر مربع', isCorrect: false },
    ],
  },

  // Topic 5 - Open Ended 1
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'طارق بيحسب مساحة الصالة في البيت',
    questionText: 'الصالة مستطيلة طولها 6 متر وعرضها 4 متر. مساحتها كم متر مربع؟',
    hintText: 'المساحة = الطول × العرض',
    explanation: 'المساحة = 6 × 4 = 24 متر مربع',
    correctAnswer: '24',
    correctAnswerNumeric: 24,
  },

  // Topic 5 - Open Ended 2
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين تريد تعمل برواز حوالين لوحة مربعة',
    questionText: 'اللوحة مربعة طول ضلعها 7 متر. محيطها كم متر؟',
    hintText: 'محيط المربع = 4 × الضلع',
    explanation: 'المحيط = 4 × 7 = 28 متر',
    correctAnswer: '28',
    correctAnswerNumeric: 28,
  },

  // Topic 5 - Open Ended 3
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيعمل ملعب صغير في الحديقة',
    questionText: 'الملعب مستطيل طوله 12 متر وعرضه 8 متر. محيطه كم متر؟',
    hintText: 'المحيط = 2 × (الطول + العرض)',
    explanation: 'المحيط = 2 × (12 + 8) = 2 × 20 = 40 متر',
    correctAnswer: '40',
    correctAnswerNumeric: 40,
  },

  // Topic 5 - Open Ended 4
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيحسب مساحة سطح البيت المربع',
    questionText: 'السطح مربع طول ضلعه 9 متر. مساحته كم متر مربع؟',
    hintText: 'مساحة المربع = الضلع × الضلع',
    explanation: 'المساحة = 9 × 9 = 81 متر مربع',
    correctAnswer: '81',
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
    questionText: 'اشترت حاجات بـ 47 جنيه و 32 جنيه و 18 جنيه. قرّب كل عدد لأقرب عشرة واجمع.',
    hintText: '47 ≈ 50، 32 ≈ 30، 18 ≈ 20',
    explanation: '50 + 30 + 20 = 100 جنيه تقريبًا',
    options: [
      { optionText: '100 جنيه', isCorrect: true },
      { optionText: '90 جنيه', isCorrect: false },
      { optionText: '110 جنيه', isCorrect: false },
      { optionText: '97 جنيه', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 2
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'بابا بيقدر تكلفة رحلة العيلة',
    questionText: 'قرّب العدد 374 لأقرب مية.',
    hintText: 'شوف رقم العشرات: 7 أكبر من 5 ولا أصغر؟',
    explanation: '374: رقم العشرات 7 ≥ 5 فنقرب لفوق = 400',
    options: [
      { optionText: '400', isCorrect: true },
      { optionText: '300', isCorrect: false },
      { optionText: '370', isCorrect: false },
      { optionText: '380', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 3
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيحسب درجاته في الامتحانات',
    questionText: 'درجاته: 78 و 83 و 91. قرّب كل عدد لأقرب عشرة واجمع التقدير.',
    hintText: '78 ≈ 80، 83 ≈ 80، 91 ≈ 90',
    explanation: '80 + 80 + 90 = 250 تقريبًا',
    options: [
      { optionText: '250', isCorrect: true },
      { optionText: '240', isCorrect: false },
      { optionText: '260', isCorrect: false },
      { optionText: '252', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 4
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'سارة بتقدر عدد الطلاب في المدرسة',
    questionText: 'في المدرسة 845 طالب. قرّب لأقرب مية.',
    hintText: 'رقم العشرات 4 أقل من 5',
    explanation: '845: رقم العشرات 4 < 5 فنقرب لتحت = 800',
    options: [
      { optionText: '800', isCorrect: true },
      { optionText: '900', isCorrect: false },
      { optionText: '850', isCorrect: false },
      { optionText: '840', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 5
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'خالد بيقدر فاتورة المطعم',
    questionText: 'الفاتورة فيها: ساندوتش 29 جنيه ومشروب 14 جنيه. قرّب لأقرب عشرة وقدّر المجموع.',
    hintText: '29 ≈ 30، 14 ≈ 10',
    explanation: '30 + 10 = 40 جنيه تقريبًا',
    options: [
      { optionText: '40 جنيه', isCorrect: true },
      { optionText: '50 جنيه', isCorrect: false },
      { optionText: '43 جنيه', isCorrect: false },
      { optionText: '30 جنيه', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 6
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'نور بتقدر وزن شنطة السفر',
    questionText: 'قرّب العدد 16٫7 لأقرب عدد صحيح.',
    hintText: 'الجزء العشري 7 أكبر من 5',
    explanation: '16٫7: الجزء العشري 7 ≥ 5 فنقرب لفوق = 17',
    options: [
      { optionText: '17', isCorrect: true },
      { optionText: '16', isCorrect: false },
      { optionText: '20', isCorrect: false },
      { optionText: '16٫5', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 7
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقدر ثمن لعب العيد',
    questionText: 'لعبة بـ 145 جنيه ولعبة بـ 263 جنيه. قرّب لأقرب مية وقدّر المجموع.',
    hintText: '145 ≈ 100، 263 ≈ 300',
    explanation: '100 + 300 = 400 جنيه تقريبًا',
    options: [
      { optionText: '400 جنيه', isCorrect: true },
      { optionText: '500 جنيه', isCorrect: false },
      { optionText: '300 جنيه', isCorrect: false },
      { optionText: '408 جنيه', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 8
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عمر بيقدر مسافة بيته من المدرسة',
    questionText: 'المسافة 2٫3 كم. قرّب لأقرب عدد صحيح.',
    hintText: 'الجزء العشري 3 أقل من 5',
    explanation: '2٫3: الجزء العشري 3 < 5 فنقرب لتحت = 2',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '2٫5', isCorrect: false },
      { optionText: '1', isCorrect: false },
    ],
  },

  // Topic 6 - Open Ended 1
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'طارق بيقدر فاتورة البقالة',
    questionText: 'اشترى حاجات بـ 63 و 28 جنيه. قرّب كل عدد لأقرب عشرة واجمع. الناتج التقريبي كم؟',
    hintText: '63 ≈ 60، 28 ≈ 30',
    explanation: '60 + 30 = 90 جنيه تقريبًا',
    correctAnswer: '90',
    correctAnswerNumeric: 90,
  },

  // Topic 6 - Open Ended 2
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'ياسمين بتقرب أعداد في حصة الرياضيات',
    questionText: 'قرّب العدد 567 لأقرب مية. الناتج كم؟',
    hintText: 'رقم العشرات 6 ≥ 5',
    explanation: '567: رقم العشرات 6 ≥ 5 فنقرب لفوق = 600',
    correctAnswer: '600',
    correctAnswerNumeric: 600,
  },

  // Topic 6 - Open Ended 3
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيقدر سعر جزمة جديدة',
    questionText: 'سعر الجزمة 247 جنيه. قرّب لأقرب عشرة.',
    hintText: 'رقم الآحاد 7 ≥ 5',
    explanation: '247: رقم الآحاد 7 ≥ 5 فنقرب لفوق = 250',
    correctAnswer: '250',
    correctAnswerNumeric: 250,
  },

  // Topic 6 - Open Ended 4
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيقرب عدد عشري',
    questionText: 'قرّب العدد 8٫4 لأقرب عدد صحيح.',
    hintText: 'الجزء العشري 4 < 5',
    explanation: '8٫4: الجزء العشري 4 < 5 فنقرب لتحت = 8',
    correctAnswer: '8',
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
    questionText: 'الصف الأول فيه 2 كرسي، التاني 5، التالت 8. الصف الرابع فيه كم كرسي؟',
    hintText: 'شوف الفرق بين كل عدد واللي بعده',
    explanation: 'النمط: +3 كل مرة. 2، 5، 8، 11',
    options: [
      { optionText: '11', isCorrect: true },
      { optionText: '10', isCorrect: false },
      { optionText: '12', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 2
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة بتعمل عقد من الخرز الملون',
    questionText: 'النمط: 3، 6، 12، 24، ___. العدد اللي بعد كده كم؟',
    hintText: 'كل عدد يُضرب في كم؟',
    explanation: 'النمط: ×2 كل مرة. 24 × 2 = 48',
    options: [
      { optionText: '48', isCorrect: true },
      { optionText: '36', isCorrect: false },
      { optionText: '30', isCorrect: false },
      { optionText: '28', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 3
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'خالد بيلعب لعبة أرقام مع أصدقائه',
    questionText: 'التسلسل: 50، 45، 40، 35، ___. العدد التالي كم؟',
    hintText: 'كل مرة ينقص كم؟',
    explanation: 'النمط: -5 كل مرة. 35 - 5 = 30',
    options: [
      { optionText: '30', isCorrect: true },
      { optionText: '25', isCorrect: false },
      { optionText: '32', isCorrect: false },
      { optionText: '20', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 4
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نور توزع فواكه على صديقاتها كل يوم',
    questionText: 'أول يوم وزعت 1، تاني يوم 4، تالت يوم 9، رابع يوم 16. خامس يوم كم؟',
    hintText: 'الأعداد دي هي مربعات: 1²، 2²، 3²، 4²...',
    explanation: 'دي مربعات الأعداد: 1، 4، 9، 16، 25. الخامس = 5² = 25',
    options: [
      { optionText: '25', isCorrect: true },
      { optionText: '20', isCorrect: false },
      { optionText: '32', isCorrect: false },
      { optionText: '24', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 5
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'مريم بترتب أكواب على رفوف المطبخ',
    questionText: 'الرف الأول 10 أكواب، التاني 7، التالت 4. الرابع كم؟',
    hintText: 'كل رف ينقص 3',
    explanation: 'النمط: -3 كل مرة. 4 - 3 = 1',
    options: [
      { optionText: '1', isCorrect: true },
      { optionText: '2', isCorrect: false },
      { optionText: '0', isCorrect: false },
      { optionText: '3', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 6
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عمر بيحل لغز أرقام في مجلة أطفال',
    questionText: 'التسلسل: 2، 6، 18، 54، ___. العدد التالي كم؟',
    hintText: 'كل عدد يُضرب في 3',
    explanation: 'النمط: ×3 كل مرة. 54 × 3 = 162',
    options: [
      { optionText: '162', isCorrect: true },
      { optionText: '108', isCorrect: false },
      { optionText: '72', isCorrect: false },
      { optionText: '150', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 7
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتعمل نمط بالمكعبات الملونة',
    questionText: 'النمط: 4، 7، 10، 13، ___. العدد اللي بعد كده كم؟',
    hintText: 'كل مرة بيزيد 3',
    explanation: 'النمط: +3. 13 + 3 = 16',
    options: [
      { optionText: '16', isCorrect: true },
      { optionText: '15', isCorrect: false },
      { optionText: '17', isCorrect: false },
      { optionText: '14', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 8
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'طارق بيلاحظ نمط في أرقام البيوت في الشارع',
    questionText: 'أرقام البيوت: 3، 8، 13، 18، ___. البيت اللي بعد كده رقمه كم؟',
    hintText: 'الفرق بين كل رقم واللي بعده ثابت',
    explanation: 'النمط: +5 كل مرة. 18 + 5 = 23',
    options: [
      { optionText: '23', isCorrect: true },
      { optionText: '22', isCorrect: false },
      { optionText: '24', isCorrect: false },
      { optionText: '20', isCorrect: false },
    ],
  },

  // Topic 7 - Open Ended 1
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيحل تمرين أنماط في كتاب الرياضيات',
    questionText: 'أكمل النمط: 100، 90، 80، 70، ___. العدد التالي كم؟',
    hintText: 'كل مرة ينقص 10',
    explanation: 'النمط: -10 كل مرة. 70 - 10 = 60',
    correctAnswer: '60',
    correctAnswerNumeric: 60,
  },

  // Topic 7 - Open Ended 2
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'حازم بيرتب كتب على أرفف المكتبة',
    questionText: 'الرف الأول 5 كتب، التاني 10، التالت 15. الرف الرابع كم كتاب؟',
    hintText: 'كل رف بيزيد 5 كتب',
    explanation: 'النمط: +5. 15 + 5 = 20 كتاب',
    correctAnswer: '20',
    correctAnswerNumeric: 20,
  },

  // Topic 7 - Open Ended 3
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'نور بتعد نجوم ذهبية بتأخذها كل أسبوع',
    questionText: 'أول أسبوع 2، تاني أسبوع 4، تالت أسبوع 8، رابع أسبوع 16. خامس أسبوع كم؟',
    hintText: 'كل أسبوع العدد بيتضاعف',
    explanation: 'النمط: ×2. 16 × 2 = 32',
    correctAnswer: '32',
    correctAnswerNumeric: 32,
  },

  // Topic 7 - Open Ended 4
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'مريم بتعمل سلسلة أرقام في دفتر الرياضيات',
    questionText: 'التسلسل: 1، 4، 7، 10، 13، ___. العدد السادس كم؟',
    hintText: 'الفرق بين كل عدد والتاني = 3',
    explanation: 'النمط: +3 كل مرة. 13 + 3 = 16',
    correctAnswer: '16',
    correctAnswerNumeric: 16,
  },
];
