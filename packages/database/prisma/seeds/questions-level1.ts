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

export const level1Questions: QuestionSeed[] = [
  // =============================================
  // Topic 1: الجمع والطرح (Addition & Subtraction)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 1 - MCQ 1
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'أحمد راح الكانتين المدرسة واشترى ساندوتش وعصير',
    questionText: 'أحمد اشترى ساندوتش بـ 15 جنيه وعصير بـ 8 جنيه. كم دفع؟',
    hintText: 'اجمع تمن الساندوتش مع تمن العصير',
    explanation: '15 + 8 = 23 جنيه',
    options: [
      { optionText: '23 جنيه', isCorrect: true },
      { optionText: '22 جنيه', isCorrect: false },
      { optionText: '25 جنيه', isCorrect: false },
      { optionText: '7 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 2
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'سارة معاها مصروف 50 جنيه واشترت أدوات مدرسية',
    questionText: 'سارة معاها 50 جنيه واشترت كراسة بـ 12 جنيه وقلم بـ 8 جنيه. المتبقي معاها كم؟',
    hintText: 'اجمع اللي اشترته الأول وبعدين اطرح من الـ 50',
    explanation: '12 + 8 = 20 جنيه مشتريات. 50 - 20 = 30 جنيه المتبقية',
    options: [
      { optionText: '30 جنيه', isCorrect: true },
      { optionText: '38 جنيه', isCorrect: false },
      { optionText: '20 جنيه', isCorrect: false },
      { optionText: '32 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 3
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'كريم يجمع مال الحصّالة خاصته',
    questionText: 'كريم عنده 125 جنيه في الحصّالة وأضاف 75 جنيه. المجموع كم؟',
    hintText: 'اجمع الرقمين مع بعض',
    explanation: '125 + 75 = 200 جنيه',
    options: [
      { optionText: '200 جنيه', isCorrect: true },
      { optionText: '190 جنيه', isCorrect: false },
      { optionText: '195 جنيه', isCorrect: false },
      { optionText: '210 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 4
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'نور راحت السوبر ماركت مع ماما وبيحسبوا الفاتورة',
    questionText: 'الفاتورة كانت 237 جنيه وماما دفعت 300 جنيه. الباقي كم؟',
    hintText: 'اطرح الفاتورة من المبلغ اللي اتدفع',
    explanation: '300 - 237 = 63 جنيه',
    options: [
      { optionText: '63 جنيه', isCorrect: true },
      { optionText: '73 جنيه', isCorrect: false },
      { optionText: '53 جنيه', isCorrect: false },
      { optionText: '37 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 5
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عمر بيشتري هدية لصاحبه من محل لعب',
    questionText:
      'عمر اشترى لعبة بـ 45 جنيه وكارت معايدة بـ 15 جنيه وكيس هدايا بـ 5 جنيه. المجموع كم؟',
    hintText: 'اجمع الثلاث حاجات مع بعض',
    explanation: '45 + 15 + 5 = 65 جنيه',
    options: [
      { optionText: '65 جنيه', isCorrect: true },
      { optionText: '60 جنيه', isCorrect: false },
      { optionText: '55 جنيه', isCorrect: false },
      { optionText: '75 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 6
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتوفر من مصروفها كل أسبوع',
    questionText: 'ياسمين وفرت 148 جنيه هذا الشهر وصرفت 59 جنيه على كتاب. كم يتبقى؟',
    hintText: 'اطرح ثمن الكتاب من اللي وفرته',
    explanation: '148 - 59 = 89 جنيه',
    options: [
      { optionText: '89 جنيه', isCorrect: true },
      { optionText: '99 جنيه', isCorrect: false },
      { optionText: '79 جنيه', isCorrect: false },
      { optionText: '91 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 7
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'محل الكانتين بيعمل حساب آخر اليوم',
    questionText: 'الكانتين باع الصبح بـ 350 جنيه وبعد الضهر بـ 275 جنيه. مجموع المبيعات كم؟',
    hintText: 'اجمع مبيعات الصبح مع بعد الضهر',
    explanation: '350 + 275 = 625 جنيه',
    options: [
      { optionText: '625 جنيه', isCorrect: true },
      { optionText: '615 جنيه', isCorrect: false },
      { optionText: '525 جنيه', isCorrect: false },
      { optionText: '725 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 8
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'مريم بتشتري لبس المدرسة الجديد',
    questionText: 'مريم اشترت بلوزة بـ 120 جنيه وجيبة بـ 95 جنيه. لو معاها 250 جنيه، هيتبقى كم؟',
    hintText: 'اجمع تمن الحاجتين وبعدين اطرح من 250',
    explanation: '120 + 95 = 215 جنيه. 250 - 215 = 35 جنيه',
    options: [
      { optionText: '35 جنيه', isCorrect: true },
      { optionText: '25 جنيه', isCorrect: false },
      { optionText: '45 جنيه', isCorrect: false },
      { optionText: '15 جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - Open Ended 1
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'خالد اشترى من الكانتين تفاح وموز',
    questionText: 'خالد اشترى تفاح بـ 10 جنيه وموز بـ 7 جنيه. كم دفع في المجموع؟',
    hintText: 'اجمع التمنين مع بعض',
    explanation: '10 + 7 = 17 جنيه',
    correctAnswer: '17',
    correctAnswerNumeric: 17,
  },

  // Topic 1 - Open Ended 2
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'مريم معاها مصروف الأسبوع وتريد تشتري أكل',
    questionText: 'مريم معاها 100 جنيه واشترت أكل بـ 64 جنيه. المتبقي معاها كم جنيه؟',
    hintText: 'اطرح تمن الأكل من اللي معاها',
    explanation: '100 - 64 = 36 جنيه',
    correctAnswer: '36',
    correctAnswerNumeric: 36,
  },

  // Topic 1 - Open Ended 3
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'أحمد يجمع مال حتى يشتري كورة',
    questionText: 'أحمد معاه 86 جنيه ومحتاج 150 جنيه حتى الكورة. يحتاج أن يوفر كم المزيد؟',
    hintText: 'اطرح اللي معاه من تمن الكورة',
    explanation: '150 - 86 = 64 جنيه لسه يحتاج أن يوفرهم',
    correctAnswer: '64',
    correctAnswerNumeric: 64,
  },

  // Topic 1 - Open Ended 4
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'نور بتحسب مشتريات ماما من الخضري',
    questionText: 'ماما اشترت خضار بـ 45 جنيه وفاكهة بـ 38 جنيه ولحمة بـ 120 جنيه. المجموع كم؟',
    hintText: 'اجمع التلات أرقام مع بعض',
    explanation: '45 + 38 = 83، وبعدين 83 + 120 = 203 جنيه',
    correctAnswer: '203',
    correctAnswerNumeric: 203,
  },

  // =============================================
  // Topic 2: الضرب (Multiplication)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 2 - MCQ 1
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'سارة بتشتري كراسات لأخواتها الثلاثة',
    questionText: 'كل كراسة بـ 12 جنيه وسارة تريد 3 كراسات. كم ستدفع؟',
    hintText: 'اضرب تمن الكراسة في عدد الكراسات',
    explanation: '12 × 3 = 36 جنيه',
    options: [
      { optionText: '36 جنيه', isCorrect: true },
      { optionText: '32 جنيه', isCorrect: false },
      { optionText: '15 جنيه', isCorrect: false },
      { optionText: '39 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 2
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'المدرّسة بتجهز أدوات لحصة العلوم',
    questionText: 'المدرّسة محتاجة 5 مجموعات تجارب، كل مجموعة بـ 25 جنيه. التكلفة كم؟',
    hintText: 'اضرب 5 في 25',
    explanation: '5 × 25 = 125 جنيه',
    options: [
      { optionText: '125 جنيه', isCorrect: true },
      { optionText: '130 جنيه', isCorrect: false },
      { optionText: '120 جنيه', isCorrect: false },
      { optionText: '150 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 3
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عمر بيشتري عُلب عصير لحفلة الفصل',
    questionText: 'كل علبة عصير بـ 7 جنيه وعمر اشترى 8 علب. الحساب كم؟',
    hintText: 'اضرب 7 في 8',
    explanation: '7 × 8 = 56 جنيه',
    options: [
      { optionText: '56 جنيه', isCorrect: true },
      { optionText: '54 جنيه', isCorrect: false },
      { optionText: '48 جنيه', isCorrect: false },
      { optionText: '63 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 4
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'مريم بتنظم رحلة الفصل وبتحسب تكلفة التذاكر',
    questionText: 'تذكرة الحديقة بـ 35 جنيه وعدد التلاميذ 4. التكلفة الكلية كم؟',
    hintText: 'اضرب تمن التذكرة في عدد التلاميذ',
    explanation: '35 × 4 = 140 جنيه',
    options: [
      { optionText: '140 جنيه', isCorrect: true },
      { optionText: '120 جنيه', isCorrect: false },
      { optionText: '139 جنيه', isCorrect: false },
      { optionText: '145 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 5
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'كريم بيشتري ألوان لحصة الرسم',
    questionText: 'كل علبة ألوان بـ 18 جنيه وكريم يريد 6 علب. كم سيدفع؟',
    hintText: 'اضرب 18 في 6',
    explanation: '18 × 6 = 108 جنيه',
    options: [
      { optionText: '108 جنيه', isCorrect: true },
      { optionText: '96 جنيه', isCorrect: false },
      { optionText: '118 جنيه', isCorrect: false },
      { optionText: '100 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 6
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتشتري هدايا لأصدقائها في عيد ميلادها',
    questionText: 'كل هدية بـ 40 جنيه وياسمين تريد 7 هدايا. المجموع كم؟',
    hintText: 'اضرب 40 في 7',
    explanation: '40 × 7 = 280 جنيه',
    options: [
      { optionText: '280 جنيه', isCorrect: true },
      { optionText: '270 جنيه', isCorrect: false },
      { optionText: '320 جنيه', isCorrect: false },
      { optionText: '240 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 7
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'المدرسة بتطلب دفاتر للتلاميذ',
    questionText: 'كل دفتر بـ 15 جنيه والفصل فيه 9 تلاميذ. تكلفة الدفاتر كم؟',
    hintText: 'اضرب 15 في 9',
    explanation: '15 × 9 = 135 جنيه',
    options: [
      { optionText: '135 جنيه', isCorrect: true },
      { optionText: '125 جنيه', isCorrect: false },
      { optionText: '145 جنيه', isCorrect: false },
      { optionText: '150 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 8
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'نور بتحسب تمن الكعك اللي ماما صنعته للعيد',
    questionText: 'ماما صنعت 12 صينية كعك وكل صينية محتاجة سمنة بـ 20 جنيه. تمن السمنة كلها كم؟',
    hintText: 'اضرب 12 في 20',
    explanation: '12 × 20 = 240 جنيه',
    options: [
      { optionText: '240 جنيه', isCorrect: true },
      { optionText: '220 جنيه', isCorrect: false },
      { optionText: '320 جنيه', isCorrect: false },
      { optionText: '200 جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - Open Ended 1
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'خالد بيشتري أقلام رصاص لزمايله',
    questionText: 'كل قلم بـ 4 جنيه وخالد يريد 9 أقلام. كم سيدفع جنيه؟',
    hintText: 'اضرب 4 في 9',
    explanation: '4 × 9 = 36 جنيه',
    correctAnswer: '36',
    correctAnswerNumeric: 36,
  },

  // Topic 2 - Open Ended 2
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيشتري زجاجات مياه لفريق الكورة',
    questionText: 'كل زجاجة بـ 5 جنيه والفريق 11 لاعب. التكلفة الكلية كم جنيه؟',
    hintText: 'اضرب 5 في 11',
    explanation: '5 × 11 = 55 جنيه',
    correctAnswer: '55',
    correctAnswerNumeric: 55,
  },

  // Topic 2 - Open Ended 3
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتحسب ثمن البيض اللي ماما طلبته',
    questionText: 'كل كرتونة بيض بـ 85 جنيه وماما تريد 3 كراتين. المجموع كم جنيه؟',
    hintText: 'اضرب 85 في 3',
    explanation: '85 × 3 = 255 جنيه',
    correctAnswer: '255',
    correctAnswerNumeric: 255,
  },

  // Topic 2 - Open Ended 4
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'المدرّس بيوزع كتب على 6 مجموعات في الفصل',
    questionText: 'كل مجموعة فيها 7 تلاميذ. كم تلميذ في الفصل كله؟',
    hintText: 'اضرب عدد المجموعات في عدد التلاميذ في كل مجموعة',
    explanation: '6 × 7 = 42 تلميذ',
    correctAnswer: '42',
    correctAnswerNumeric: 42,
  },

  // =============================================
  // Topic 3: القسمة والباقي (Division with Remainders)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 3 - MCQ 1
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'أحمد عنده فواكه ويريد يقسمها على أصدقائه',
    questionText: 'أحمد عنده 20 قطعة فواكه ويريد يقسمهم على 4 أصدقاء بالتساوي. كل واحد يأخذ كم؟',
    hintText: 'اقسم 20 على 4',
    explanation: '20 ÷ 4 = 5 قطع لكل واحد',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '4', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 2
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سارة عندها تمر وتريد توزعها على زميلاتها',
    questionText:
      'سارة عندها 25 تمرة وتريد توزعهم على 4 زميلات بالتساوي. كل واحدة تأخذ كم ويتبقى كم؟',
    hintText: 'اقسم 25 على 4 وشوف الباقي',
    explanation: '25 ÷ 4 = 6 لكل واحدة والباقي 1 (لأن 4 × 6 = 24)',
    options: [
      { optionText: '6 لكل واحدة والباقي 1', isCorrect: true },
      { optionText: '5 لكل واحدة والباقي 5', isCorrect: false },
      { optionText: '7 لكل واحدة والباقي 0', isCorrect: false },
      { optionText: '6 لكل واحدة والباقي 2', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 3
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'كريم اشترى كيس لب ويريد يقسمه على أصدقائه',
    questionText: 'كريم عنده 37 حبة لب ويريد يقسمهم على 5 أصدقاء. كل واحد يأخذ كم ويتبقى كم؟',
    hintText: 'اقسم 37 على 5',
    explanation: '37 ÷ 5 = 7 لكل واحد والباقي 2 (لأن 5 × 7 = 35)',
    options: [
      { optionText: '7 لكل واحد والباقي 2', isCorrect: true },
      { optionText: '7 لكل واحد والباقي 3', isCorrect: false },
      { optionText: '6 لكل واحد والباقي 7', isCorrect: false },
      { optionText: '8 لكل واحد والباقي 0', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 4
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'المدرّسة تقسم التلاميذ على فرق في حصة الرياضة',
    questionText: 'الفصل فيه 30 تلميذ والمدرّسة تريد تقسمهم 6 فرق. كل فريق فيه كم؟',
    hintText: 'اقسم 30 على 6',
    explanation: '30 ÷ 6 = 5 تلاميذ في كل فريق',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '4', isCorrect: false },
      { optionText: '3', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 5
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'نور توزع موز على إخواتها',
    questionText: 'نور عندها 23 موزة وتريد توزعهم على 3 إخوات. كل واحد يأخذ كم ويتبقى كم؟',
    hintText: 'اقسم 23 على 3',
    explanation: '23 ÷ 3 = 7 لكل واحد والباقي 2 (لأن 3 × 7 = 21)',
    options: [
      { optionText: '7 لكل واحد والباقي 2', isCorrect: true },
      { optionText: '8 لكل واحد والباقي 0', isCorrect: false },
      { optionText: '7 لكل واحد والباقي 3', isCorrect: false },
      { optionText: '6 لكل واحد والباقي 5', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 6
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ياسمين تقسم مال العيدية على أيام الأسبوع',
    questionText: 'ياسمين أخذت عيدية 50 جنيه وتريد تقسمهم على 7 أيام. كل يوم تصرف كم ويتبقى كم؟',
    hintText: 'اقسم 50 على 7',
    explanation: '50 ÷ 7 = 7 جنيه كل يوم والباقي 1 (لأن 7 × 7 = 49)',
    options: [
      { optionText: '7 جنيه والباقي 1', isCorrect: true },
      { optionText: '8 جنيه والباقي 0', isCorrect: false },
      { optionText: '6 جنيه والباقي 8', isCorrect: false },
      { optionText: '7 جنيه والباقي 3', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 7
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عمر عنده ملصقات ويريد يحطهم في ألبومات',
    questionText: 'عمر عنده 45 ملصق وكل صفحة بتشيل 8 ملصقات. محتاج كم صفحة على الأقل؟',
    hintText: 'اقسم 45 على 8 ولو فيه باقي محتاج صفحة زيادة',
    explanation: '45 ÷ 8 = 5 صفحات والباقي 5، فمحتاج 6 صفحات على الأقل',
    options: [
      { optionText: '6 صفحات', isCorrect: true },
      { optionText: '5 صفحات', isCorrect: false },
      { optionText: '7 صفحات', isCorrect: false },
      { optionText: '4 صفحات', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 8
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'خالد يقسم تفاح على أأصدقائه في الفسحة',
    questionText: 'خالد عنده 42 كيس تفاح ويريد يقسمهم على 8 أصدقاء. كل واحد يأخذ كم ويتبقى كم؟',
    hintText: 'اقسم 42 على 8',
    explanation: '42 ÷ 8 = 5 لكل واحد والباقي 2 (لأن 8 × 5 = 40)',
    options: [
      { optionText: '5 لكل واحد والباقي 2', isCorrect: true },
      { optionText: '5 لكل واحد والباقي 3', isCorrect: false },
      { optionText: '6 لكل واحد والباقي 0', isCorrect: false },
      { optionText: '4 لكل واحد والباقي 10', isCorrect: false },
    ],
  },

  // Topic 3 - Open Ended 1
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'مريم عندها فواكه وتريد توزعها',
    questionText: 'مريم عندها 36 تمرة وتريد توزعهم على 6 أصدقاء بالتساوي. كل واحدة تأخذ كم؟',
    hintText: 'اقسم 36 على 6',
    explanation: '36 ÷ 6 = 6 تمرات لكل واحدة',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 3 - Open Ended 2
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'أحمد يقسم تفاح على أصدقائه',
    questionText:
      'أحمد عنده 29 تفاحة ويريد يقسمهم على 5 أصدقاء. كل واحد يأخذ 5 تفاحات. الباقي كم تفاحة؟',
    hintText: 'احسب 5 × 5 واطرح من 29',
    explanation: '5 × 5 = 25، والباقي = 29 - 25 = 4 تفاحات',
    correctAnswer: '4',
    correctAnswerNumeric: 4,
  },

  // Topic 3 - Open Ended 3
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'سارة توزع أقلام على مجموعات الفصل',
    questionText: 'سارة عندها 56 قلم وتريد توزعهم على 7 مجموعات بالتساوي. كل مجموعة تأخذ كم قلم؟',
    hintText: 'اقسم 56 على 7',
    explanation: '56 ÷ 7 = 8 أقلام لكل مجموعة',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
  },

  // Topic 3 - Open Ended 4
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'نور تقسم ألعاب على إخواتها',
    questionText: 'نور عندها 34 لعبة وتريد توزعهم على 4 إخوات بالتساوي. الباقي كم لعبة؟',
    hintText: 'اقسم 34 على 4 وشوف الباقي',
    explanation: '34 ÷ 4 = 8 لكل واحد والباقي 2 (لأن 4 × 8 = 32)',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // =============================================
  // Topic 4: حس الأعداد (Number Sense)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 4 - MCQ 1
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'كريم بيقرأ عداد عربية بابا',
    questionText: 'العداد بيقول 24,857 كيلومتر. الرقم 4 قيمته المكانية كم؟',
    hintText: 'شوف الـ 4 في أي خانة',
    explanation: 'الـ 4 في خانة الآلاف، فقيمتها المكانية = 4,000',
    options: [
      { optionText: '4,000', isCorrect: true },
      { optionText: '400', isCorrect: false },
      { optionText: '40', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 2
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'سارة بتقرب عدد سكان مدينتها',
    questionText: 'عدد سكان المدينة 47,329. قربي الرقم لأقرب ألف؟',
    hintText: 'شوف الرقم اللي في خانة المئات، لو أقل من 5 نزّل',
    explanation: 'الرقم في خانة المئات = 3 (أقل من 5)، فنقرب لـ 47,000',
    options: [
      { optionText: '47,000', isCorrect: true },
      { optionText: '48,000', isCorrect: false },
      { optionText: '47,300', isCorrect: false },
      { optionText: '50,000', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 3
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'نور بتقارن أسعار موبايلين في محلين مختلفين',
    questionText: 'أي أكبر: 3,450 جنيه ولا 3,540 جنيه؟',
    hintText: 'قارن الأرقام من الشمال لليمين',
    explanation: 'الألاف متساوية (3). المئات: 4 < 5، فـ 3,540 أكبر',
    options: [
      { optionText: '3,540', isCorrect: true },
      { optionText: '3,450', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش عارف أحدد', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 4
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيلعب لعبة أرقام مع صاحبه',
    questionText: 'رتب الأرقام دي من الأصغر للأكبر: 5,201 - 5,021 - 5,210',
    hintText: 'قارن خانة المئات في كل رقم',
    explanation: 'الألاف كلهم 5. المئات: 0 < 2 = 2. فالترتيب: 5,021 ثم 5,201 ثم 5,210',
    options: [
      { optionText: '5,021 ثم 5,201 ثم 5,210', isCorrect: true },
      { optionText: '5,210 ثم 5,201 ثم 5,021', isCorrect: false },
      { optionText: '5,201 ثم 5,021 ثم 5,210', isCorrect: false },
      { optionText: '5,021 ثم 5,210 ثم 5,201', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 5
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتقرب أسعار في السوبر ماركت',
    questionText: 'تمن الغسالة 8,475 جنيه. قربي لأقرب مئة؟',
    hintText: 'شوف الرقم في خانة العشرات، لو 5 أو أكتر ارفع',
    explanation: 'العشرات = 7 (أكبر من 5)، فنقرب لـ 8,500',
    options: [
      { optionText: '8,500', isCorrect: true },
      { optionText: '8,400', isCorrect: false },
      { optionText: '8,000', isCorrect: false },
      { optionText: '9,000', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 6
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عمر بيكتب رقم تليفون ويريد يعرف قيمة أول رقم',
    questionText: 'في العدد 72,456، الرقم 7 قيمته المكانية كم؟',
    hintText: 'الـ 7 في أول خانة من الشمال',
    explanation: 'الـ 7 في خانة عشرات الآلاف، فقيمتها = 70,000',
    options: [
      { optionText: '70,000', isCorrect: true },
      { optionText: '7,000', isCorrect: false },
      { optionText: '700', isCorrect: false },
      { optionText: '7', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 7
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقارن نتائج الامتحانات بين فصلين',
    questionText: 'فصل أ مجموعه 1,250 وفصل ب مجموعه 1,205. أي فصل مجموعه أكبر؟',
    hintText: 'قارن الأرقام من اليسار',
    explanation: 'الألاف والمئات متساويين. العشرات: 5 > 0، ففصل أ (1,250) أكبر',
    options: [
      { optionText: 'فصل أ', isCorrect: true },
      { optionText: 'فصل ب', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'محتاجين معلومات أكتر', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 8
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'خالد بيقرب المسافة بين القاهرة والإسكندرية',
    questionText: 'المسافة 219 كم. قرب لأقرب عشرة؟',
    hintText: 'شوف رقم الآحاد، لو 5 أو أكتر ارفع',
    explanation: 'الآحاد = 9 (أكبر من 5)، فنقرب لـ 220',
    options: [
      { optionText: '220', isCorrect: true },
      { optionText: '210', isCorrect: false },
      { optionText: '200', isCorrect: false },
      { optionText: '300', isCorrect: false },
    ],
  },

  // Topic 4 - Open Ended 1
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتتعلم القيمة المكانية في حصة الرياضيات',
    questionText: 'في العدد 6,382، الرقم 3 قيمته المكانية كم؟',
    hintText: 'الـ 3 في خانة المئات',
    explanation: 'الـ 3 في خانة المئات، فقيمتها المكانية = 300',
    correctAnswer: '300',
    correctAnswerNumeric: 300,
  },

  // Topic 4 - Open Ended 2
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'نور بتقرب ثمن التابلت اللي يريداه',
    questionText: 'تمن التابلت 3,862 جنيه. قربي لأقرب ألف؟',
    hintText: 'شوف المئات: 8 أكبر من 5 فارفعي',
    explanation: 'المئات = 8 (أكبر من 5)، فنقرب لـ 4,000',
    correctAnswer: '4000',
    correctAnswerNumeric: 4000,
  },

  // Topic 4 - Open Ended 3
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيقرب عدد الطلاب في المدرسة',
    questionText: 'عدد الطلاب 743. قرب لأقرب عشرة؟',
    hintText: 'شوف الآحاد: 3 أقل من 5 فنزّل',
    explanation: 'الآحاد = 3 (أقل من 5)، فنقرب لـ 740',
    correctAnswer: '740',
    correctAnswerNumeric: 740,
  },

  // Topic 4 - Open Ended 4
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيقرب ثمن دراجة نارية',
    questionText: 'تمن العجلة 1,450 جنيه. قرب لأقرب مئة؟',
    hintText: 'شوف العشرات: 5 يعني ارفع',
    explanation: 'العشرات = 5 (يساوي 5 فنرفع)، فنقرب لـ 1,500',
    correctAnswer: '1500',
    correctAnswerNumeric: 1500,
  },

  // =============================================
  // Topic 5: خصائص الأعداد (Number Properties)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 5 - MCQ 1
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيرتب الكور في صفوف متساوية',
    questionText: 'أحمد عنده 14 كورة. هل يقدر يرتبهم في صفين متساويين؟',
    hintText: 'لو الرقم زوجي يكون يتقسم على 2',
    explanation: '14 عدد زوجي لأنه بيتقسم على 2 بدون باقي (14 ÷ 2 = 7)، فأيوا يقدر',
    options: [
      { optionText: 'أيوا لأن 14 عدد زوجي', isCorrect: true },
      { optionText: 'لأ لأن 14 عدد فردي', isCorrect: false },
      { optionText: 'أيوا لأن 14 عدد فردي', isCorrect: false },
      { optionText: 'لأ لأن 14 عدد أولي', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 2
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'سارة بتدور على عوامل رقم في حصة الرياضيات',
    questionText: 'ما عوامل العدد 12؟',
    hintText: 'العوامل هي الأرقام اللي بتتقسم عليها من غير باقي',
    explanation: '12 = 1×12 = 2×6 = 3×4، فالعوامل: 1، 2، 3، 4، 6، 12',
    options: [
      { optionText: '1، 2، 3، 4، 6، 12', isCorrect: true },
      { optionText: '1، 2، 4، 6، 12', isCorrect: false },
      { optionText: '2، 3، 4، 6', isCorrect: false },
      { optionText: '1، 2، 3، 12', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 3
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'كريم بيلعب لعبة الأرقام ويحتاج أن يعرف مضاعفات 6',
    questionText: 'أي رقم من دول مضاعف للعدد 6؟',
    hintText: 'مضاعفات 6 هي: 6، 12، 18، 24، 30...',
    explanation: '24 = 6 × 4 فهو مضاعف للعدد 6',
    options: [
      { optionText: '24', isCorrect: true },
      { optionText: '16', isCorrect: false },
      { optionText: '20', isCorrect: false },
      { optionText: '22', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 4
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'نور بتلعب لعبة زوجي/فردي مع أختها',
    questionText: 'لو جمعنا عدد فردي + عدد فردي، النتيجة تكون ماذا؟',
    hintText: 'جرب مثال: 3 + 5 = ؟',
    explanation: 'فردي + فردي = زوجي دايماً. مثال: 3 + 5 = 8 (زوجي)',
    options: [
      { optionText: 'زوجي دايماً', isCorrect: true },
      { optionText: 'فردي دايماً', isCorrect: false },
      { optionText: 'ساعات زوجي وساعات فردي', isCorrect: false },
      { optionText: 'مش عارف أحدد', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 5
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عمر بيحل واجب الرياضيات عن العوامل',
    questionText: 'هل 7 عامل للعدد 35؟',
    hintText: 'اقسم 35 على 7 وشوف لو الناتج عدد صحيح',
    explanation: '35 ÷ 7 = 5 (عدد صحيح بدون باقي)، فأيوا 7 عامل للعدد 35',
    options: [
      { optionText: 'أيوا لأن 35 ÷ 7 = 5', isCorrect: true },
      { optionText: 'لأ لأن 7 عدد فردي', isCorrect: false },
      { optionText: 'لأ لأن 35 عدد فردي', isCorrect: false },
      { optionText: 'أيوا لأن 7 + 35 = 42', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 6
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'مريم بتحل تمرين على المضاعفات',
    questionText: 'ما أول 3 مضاعفات للعدد 9؟',
    hintText: 'اضرب 9 في 1، 2، 3',
    explanation: '9 × 1 = 9، 9 × 2 = 18، 9 × 3 = 27',
    options: [
      { optionText: '9، 18، 27', isCorrect: true },
      { optionText: '9، 19، 29', isCorrect: false },
      { optionText: '1، 9، 18', isCorrect: false },
      { optionText: '9، 18، 36', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 7
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'ياسمين توزع تفاح على أطباق بالتساوي',
    questionText: 'ياسمين عندها 15 تفاحة. أي عدد أطباق تقدر توزع عليه بالتساوي من غير باقي؟',
    hintText: 'دوري على عوامل 15',
    explanation: 'عوامل 15 هي 1، 3، 5، 15. فتقدر توزع على 3 أو 5 أطباق بالتساوي',
    options: [
      { optionText: '5 أطباق', isCorrect: true },
      { optionText: '4 أطباق', isCorrect: false },
      { optionText: '7 أطباق', isCorrect: false },
      { optionText: '2 أطباق', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 8
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'خالد بيصنف الأعداد في حصة الرياضيات',
    questionText: 'أي عدد من دول عدد فردي؟',
    hintText: 'العدد الفردي مش بيتقسم على 2 بالتساوي',
    explanation: '37 عدد فردي لأن 37 ÷ 2 = 18 والباقي 1',
    options: [
      { optionText: '37', isCorrect: true },
      { optionText: '44', isCorrect: false },
      { optionText: '28', isCorrect: false },
      { optionText: '50', isCorrect: false },
    ],
  },

  // Topic 5 - Open Ended 1
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتحل سؤال عن المضاعفات',
    questionText: 'ما ناتج 8 × 7؟ (وهو مضاعف مشترك لـ 8 و 7)',
    hintText: 'اضرب 8 في 7',
    explanation: '8 × 7 = 56',
    correctAnswer: '56',
    correctAnswerNumeric: 56,
  },

  // Topic 5 - Open Ended 2
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'نور بتعد عوامل رقم',
    questionText: 'العدد 18 له كم عامل؟ (العوامل: 1، 2، 3، 6، 9، 18)',
    hintText: 'عد الأرقام اللي تقسم 18 من غير باقي',
    explanation: 'عوامل 18: 1، 2، 3، 6، 9، 18 = 6 عوامل',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 5 - Open Ended 3
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيحسب مضاعفات في لعبة حسابية',
    questionText: 'ما خامس مضاعف للعدد 4؟',
    hintText: 'اضرب 4 × 5',
    explanation: 'مضاعفات 4: 4، 8، 12، 16، 20. الخامس = 20',
    correctAnswer: '20',
    correctAnswerNumeric: 20,
  },

  // Topic 5 - Open Ended 4
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيرتب كراسي في صفوف',
    questionText: 'أحمد عنده 48 كرسي. لو رتبهم في صفوف كل صف 8 كراسي، هيطلع كم صف؟',
    hintText: 'اقسم 48 على 8',
    explanation: '48 ÷ 8 = 6 صفوف',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // =============================================
  // Topic 6: مقدمة الكسور (Intro to Fractions)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 6 - MCQ 1
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'أحمد وعيلته بياكلوا بيتزا متقسمة 8 حتت',
    questionText: 'أحمد أكل 3 حتت من 8. أكل كم من البيتزا؟',
    hintText: 'عدد اللي أكله على العدد الكلي',
    explanation: 'أكل 3 من 8 = 3/8 من البيتزا',
    options: [
      { optionText: '3/8', isCorrect: true },
      { optionText: '8/3', isCorrect: false },
      { optionText: '3/5', isCorrect: false },
      { optionText: '5/8', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 2
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'سارة قسمت الكيكة 4 حتت متساوية',
    questionText: 'سارة أكلت حتة واحدة من 4. أي كسر يمثل اللي أكلته؟',
    hintText: 'عدد الحتت اللي أكلتها فوق وعدد الحتت الكلي تحت',
    explanation: 'أكلت حتة من 4 = 1/4',
    options: [
      { optionText: '1/4', isCorrect: true },
      { optionText: '4/1', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '3/4', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 3
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'كريم عنده لوح فواكه متقسم 10 مربعات',
    questionText: 'أي كسر أكبر: 3/10 ولا 7/10؟',
    hintText: 'لو المقام واحد، قارن البسط',
    explanation: 'المقام واحد (10)، و 7 > 3، فـ 7/10 أكبر',
    options: [
      { optionText: '7/10', isCorrect: true },
      { optionText: '3/10', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش عارف أقارن', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 4
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'نور أكلت جزء من البيتزا المقسمة 6 حتت',
    questionText: 'نور أكلت 2/6 من البيتزا. الكسر هذا يساوي كم في أبسط صورة؟',
    hintText: 'دوري على رقم يقسم البسط والمقام',
    explanation: '2/6 = 1/3 (قسمنا البسط والمقام على 2)',
    options: [
      { optionText: '1/3', isCorrect: true },
      { optionText: '1/2', isCorrect: false },
      { optionText: '2/3', isCorrect: false },
      { optionText: '3/6', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 5
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عمر بيتعلم الكسور المتكافئة في حصة الرياضيات',
    questionText: 'أي كسر يكافئ 1/2؟',
    hintText: 'اضرب البسط والمقام في نفس الرقم',
    explanation: '1/2 = 2/4 = 3/6 = 4/8 (نضرب البسط والمقام في نفس العدد)',
    options: [
      { optionText: '3/6', isCorrect: true },
      { optionText: '2/3', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '3/5', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 6
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ياسمين تقسم لوح فواكه على أصدقائها',
    questionText: 'لوح الفواكه متقسم 12 مربع. ياسمين أكلت 4 مربعات. أكلت كم؟',
    hintText: 'اكتبي الكسر وبسطيه',
    explanation: '4/12 = 1/3 (قسمنا على 4)',
    options: [
      { optionText: '1/3', isCorrect: true },
      { optionText: '4/8', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
      { optionText: '2/3', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 7
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقارن حصص الكيك بين أخواتها',
    questionText: 'أي أكبر: 1/2 ولا 1/4؟',
    hintText: 'لو البسط واحد، المقام الأصغر يكون الكسر الأكبر',
    explanation: 'نفس البسط (1)، والمقام 2 < 4، فـ 1/2 أكبر من 1/4',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '1/4', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: '1/4 أكبر لأن 4 أكبر', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 8
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'خالد اشترى بيتزا كبيرة متقسمة 8 حتت',
    questionText: 'خالد أكل 2/8 وأخوه أكل 2/8. المتبقي كم؟',
    hintText: 'اجمع اللي أُكِل واطرح من 8/8',
    explanation: '2/8 + 2/8 = 4/8. المتبقي = 8/8 - 4/8 = 4/8 = 1/2',
    options: [
      { optionText: '4/8', isCorrect: true },
      { optionText: '2/8', isCorrect: false },
      { optionText: '6/8', isCorrect: false },
      { optionText: '8/8', isCorrect: false },
    ],
  },

  // Topic 6 - Open Ended 1
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'أحمد أكل جزء من بيتزا مقسمة 6 حتت',
    questionText: 'أحمد أكل 2 حتة من 6. البسط في الكسر هذا كم؟',
    hintText: 'البسط هو عدد الحتت اللي أكلها',
    explanation: 'أكل 2 من 6، فالكسر = 2/6 والبسط = 2',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // Topic 6 - Open Ended 2
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتبسط كسور في الواجب',
    questionText: 'بسطي الكسر 4/8. المقام في أبسط صورة كم؟',
    hintText: 'اقسمي البسط والمقام على 4',
    explanation: '4/8 = 1/2 (قسمنا على 4). المقام = 2',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // Topic 6 - Open Ended 3
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'كريم قسم كيكة 5 حتت ومحدش أكل حاجة',
    questionText: 'لو الكيكة كلها متقسمة 5 حتت، الكيكة كاملة بتتكتب كسر إزاي؟ البسط كم؟',
    hintText: 'الكل يعني البسط = المقام',
    explanation: 'الكيكة الكاملة = 5/5، فالبسط = 5',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // Topic 6 - Open Ended 4
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'نور بتقارن كسور في حصة الرياضيات',
    questionText:
      'لوح فواكه متقسم 10 مربعات. نور أكلت 5 مربعات. أكلت كم على 10 من اللوح؟ (اكتب البسط)',
    hintText: 'البسط = عدد المربعات اللي أُكِلت',
    explanation: 'أكلت 5 من 10 = 5/10 = 1/2. البسط = 5',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // =============================================
  // Topic 7: القياس والوحدات (Measurement)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 7 - MCQ 1
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'ماما بتشتري فاكهة من البقال',
    questionText: 'ماما اشترت 3 كيلو تفاح و 2 كيلو برتقال. اشترت كم كيلو فاكهة في المجموع؟',
    hintText: 'اجمع الكيلوهات مع بعض',
    explanation: '3 + 2 = 5 كيلو فاكهة',
    options: [
      { optionText: '5 كيلو', isCorrect: true },
      { optionText: '6 كيلو', isCorrect: false },
      { optionText: '4 كيلو', isCorrect: false },
      { optionText: '1 كيلو', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 2
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'كريم بيقيس طول الفصل',
    questionText: 'طول الفصل 8 متر وعرضه 6 متر. المحيط كم متر؟',
    hintText: 'محيط المستطيل = 2 × (الطول + العرض)',
    explanation: 'المحيط = 2 × (8 + 6) = 2 × 14 = 28 متر',
    options: [
      { optionText: '28 متر', isCorrect: true },
      { optionText: '14 متر', isCorrect: false },
      { optionText: '48 متر', isCorrect: false },
      { optionText: '24 متر', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 3
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة بتملى زجاجات مياه للرحلة',
    questionText: 'سارة عندها جركن 5 لتر مياه وملت 3 زجاجات كل واحدة نص لتر. كم يتبقى لتر؟',
    hintText: 'احسبي المياه اللي في الزجاجات واطرحيها',
    explanation: '3 زجاجات × 0.5 لتر = 1.5 لتر. المتبقي = 5 - 1.5 = 3.5 لتر',
    options: [
      { optionText: '3 ونص لتر', isCorrect: true },
      { optionText: '4 لتر', isCorrect: false },
      { optionText: '2 لتر', isCorrect: false },
      { optionText: '3 لتر', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 4
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيوزن شنطة المدرسة',
    questionText: 'شنطة أحمد وزنها 4 كيلو. لو حط فيها كتاب وزنه 500 جرام، الوزن الكلي كم؟',
    hintText: '500 جرام = نص كيلو',
    explanation: '500 جرام = 0.5 كيلو. الوزن = 4 + 0.5 = 4.5 كيلو = 4 كيلو ونص',
    options: [
      { optionText: '4 كيلو ونص', isCorrect: true },
      { optionText: '504 كيلو', isCorrect: false },
      { optionText: '9 كيلو', isCorrect: false },
      { optionText: '4 كيلو و 5 جرام', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 5
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نور بتقيس قماش حتى تعمل فستان',
    questionText: 'نور محتاجة 2 متر قماش. لو القماش عندها 150 سم، ينفع ولا لأ؟',
    hintText: 'حولي المتر لسنتيمتر: 1 متر = 100 سم',
    explanation: '2 متر = 200 سم. عندها 150 سم بس، فمش كفاية ومحتاجة 50 سم إضافية',
    options: [
      { optionText: 'لأ، ناقصها 50 سم', isCorrect: true },
      { optionText: 'أيوا، كفاية', isCorrect: false },
      { optionText: 'لأ، ناقصها 1 متر', isCorrect: false },
      { optionText: 'لأ، ناقصها 150 سم', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 6
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتحسب كمية اللبن اللي محتاجاها لوصفة',
    questionText: 'الوصفة محتاجة لتر ونص لبن. كم مل ده؟',
    hintText: '1 لتر = 1000 مل',
    explanation: '1 لتر = 1000 مل. لتر ونص = 1000 + 500 = 1500 مل',
    options: [
      { optionText: '1500 مل', isCorrect: true },
      { optionText: '150 مل', isCorrect: false },
      { optionText: '1050 مل', isCorrect: false },
      { optionText: '2000 مل', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 7
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عمر بيشتري رز من البقالة',
    questionText: 'ماما طلبت 2 كيلو رز. كم جرام ده؟',
    hintText: '1 كيلو = 1000 جرام',
    explanation: '2 كيلو = 2 × 1000 = 2000 جرام',
    options: [
      { optionText: '2000 جرام', isCorrect: true },
      { optionText: '200 جرام', isCorrect: false },
      { optionText: '20 جرام', isCorrect: false },
      { optionText: '20000 جرام', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 8
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقيس طولها وطول أختها',
    questionText: 'طول مريم 140 سم وطول أختها 1 متر و 25 سم. الفرق كم سم؟',
    hintText: 'حولي طول الأخت لسنتيمتر الأول',
    explanation: '1 متر و 25 سم = 125 سم. الفرق = 140 - 125 = 15 سم',
    options: [
      { optionText: '15 سم', isCorrect: true },
      { optionText: '25 سم', isCorrect: false },
      { optionText: '10 سم', isCorrect: false },
      { optionText: '115 سم', isCorrect: false },
    ],
  },

  // Topic 7 - Open Ended 1
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'خالد بيشتري بطيخة من الخضري',
    questionText: 'البطيخة وزنها 3 كيلو. كم جرام ده؟',
    hintText: '1 كيلو = 1000 جرام',
    explanation: '3 كيلو = 3 × 1000 = 3000 جرام',
    correctAnswer: '3000',
    correctAnswerNumeric: 3000,
  },

  // Topic 7 - Open Ended 2
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتحسب طول سور الحديقة',
    questionText: 'حديقة مربعة طول ضلعها 5 متر. المحيط كم متر؟',
    hintText: 'محيط المربع = 4 × طول الضلع',
    explanation: 'محيط المربع = 4 × 5 = 20 متر',
    correctAnswer: '20',
    correctAnswerNumeric: 20,
  },

  // Topic 7 - Open Ended 3
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيملى حوض السمك بالمياه',
    questionText: 'حوض السمك محتاج 4 لتر مياه. كم مل ده؟',
    hintText: '1 لتر = 1000 مل',
    explanation: '4 لتر = 4 × 1000 = 4000 مل',
    correctAnswer: '4000',
    correctAnswerNumeric: 4000,
  },

  // Topic 7 - Open Ended 4
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'نور بتقيس طول حبل النط',
    questionText: 'حبل النط طوله 2 متر و 50 سم. كم سم في المجموع؟',
    hintText: 'حولي المتر لسنتيمتر واجمعي',
    explanation: '2 متر = 200 سم. 200 + 50 = 250 سم',
    correctAnswer: '250',
    correctAnswerNumeric: 250,
  },
];
