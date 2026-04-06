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
    questionText: 'أحمد اشترى ساندوتش بـ ١٥ جنيه وعصير بـ ٨ جنيه. كم دفع؟',
    hintText: 'اجمع تمن الساندوتش مع تمن العصير',
    explanation: '١٥ + ٨ = ٢٣ جنيه',
    options: [
      { optionText: '٢٣ جنيه', isCorrect: true },
      { optionText: '٢٢ جنيه', isCorrect: false },
      { optionText: '٢٥ جنيه', isCorrect: false },
      { optionText: '٧ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 2
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'سارة معاها مصروف ٥٠ جنيه واشترت أدوات مدرسية',
    questionText: 'سارة معاها ٥٠ جنيه واشترت كراسة بـ ١٢ جنيه وقلم بـ ٨ جنيه. المتبقي معاها كام؟',
    hintText: 'اجمع اللي اشترته الأول وبعدين اطرح من الـ ٥٠',
    explanation: '١٢ + ٨ = ٢٠ جنيه مشتريات. ٥٠ - ٢٠ = ٣٠ جنيه المتبقية',
    options: [
      { optionText: '٣٠ جنيه', isCorrect: true },
      { optionText: '٣٨ جنيه', isCorrect: false },
      { optionText: '٢٠ جنيه', isCorrect: false },
      { optionText: '٣٢ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 3
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'كريم يجمع مال الحصّالة بتاعته',
    questionText: 'كريم عنده ١٢٥ جنيه في الحصّالة وأضاف ٧٥ جنيه. المجموع كام؟',
    hintText: 'اجمع الرقمين مع بعض',
    explanation: '١٢٥ + ٧٥ = ٢٠٠ جنيه',
    options: [
      { optionText: '٢٠٠ جنيه', isCorrect: true },
      { optionText: '١٩٠ جنيه', isCorrect: false },
      { optionText: '١٩٥ جنيه', isCorrect: false },
      { optionText: '٢١٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 4
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'نور راحت السوبر ماركت مع ماما وبيحسبوا الفاتورة',
    questionText: 'الفاتورة كانت ٢٣٧ جنيه وماما دفعت ٣٠٠ جنيه. الباقي كام؟',
    hintText: 'اطرح الفاتورة من المبلغ اللي اتدفع',
    explanation: '٣٠٠ - ٢٣٧ = ٦٣ جنيه',
    options: [
      { optionText: '٦٣ جنيه', isCorrect: true },
      { optionText: '٧٣ جنيه', isCorrect: false },
      { optionText: '٥٣ جنيه', isCorrect: false },
      { optionText: '٣٧ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 5
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عمر بيشتري هدية لصاحبه من محل لعب',
    questionText: 'عمر اشترى لعبة بـ ٤٥ جنيه وكارت معايدة بـ ١٥ جنيه وكيس هدايا بـ ٥ جنيه. المجموع كام؟',
    hintText: 'اجمع الثلاث حاجات مع بعض',
    explanation: '٤٥ + ١٥ + ٥ = ٦٥ جنيه',
    options: [
      { optionText: '٦٥ جنيه', isCorrect: true },
      { optionText: '٦٠ جنيه', isCorrect: false },
      { optionText: '٥٥ جنيه', isCorrect: false },
      { optionText: '٧٥ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 6
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتوفر من مصروفها كل أسبوع',
    questionText: 'ياسمين وفرت ١٤٨ جنيه هذا الشهر وصرفت ٥٩ جنيه على كتاب. كم يتبقى؟',
    hintText: 'اطرح ثمن الكتاب من اللي وفرته',
    explanation: '١٤٨ - ٥٩ = ٨٩ جنيه',
    options: [
      { optionText: '٨٩ جنيه', isCorrect: true },
      { optionText: '٩٩ جنيه', isCorrect: false },
      { optionText: '٧٩ جنيه', isCorrect: false },
      { optionText: '٩١ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 7
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'محل الكانتين بيعمل حساب آخر اليوم',
    questionText: 'الكانتين باع الصبح بـ ٣٥٠ جنيه وبعد الضهر بـ ٢٧٥ جنيه. مجموع المبيعات كام؟',
    hintText: 'اجمع مبيعات الصبح مع بعد الضهر',
    explanation: '٣٥٠ + ٢٧٥ = ٦٢٥ جنيه',
    options: [
      { optionText: '٦٢٥ جنيه', isCorrect: true },
      { optionText: '٦١٥ جنيه', isCorrect: false },
      { optionText: '٥٢٥ جنيه', isCorrect: false },
      { optionText: '٧٢٥ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 8
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'مريم بتشتري لبس المدرسة الجديد',
    questionText: 'مريم اشترت بلوزة بـ ١٢٠ جنيه وجيبة بـ ٩٥ جنيه. لو معاها ٢٥٠ جنيه، هيتبقى كام؟',
    hintText: 'اجمع تمن الحاجتين وبعدين اطرح من ٢٥٠',
    explanation: '١٢٠ + ٩٥ = ٢١٥ جنيه. ٢٥٠ - ٢١٥ = ٣٥ جنيه',
    options: [
      { optionText: '٣٥ جنيه', isCorrect: true },
      { optionText: '٢٥ جنيه', isCorrect: false },
      { optionText: '٤٥ جنيه', isCorrect: false },
      { optionText: '١٥ جنيه', isCorrect: false },
    ],
  },

  // Topic 1 - Open Ended 1
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'خالد اشترى من الكانتين تفاح وموز',
    questionText: 'خالد اشترى تفاح بـ ١٠ جنيه وموز بـ ٧ جنيه. كم دفع في المجموع؟',
    hintText: 'اجمع التمنين مع بعض',
    explanation: '١٠ + ٧ = ١٧ جنيه',
    correctAnswer: '١٧',
    correctAnswerNumeric: 17,
  },

  // Topic 1 - Open Ended 2
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'مريم معاها مصروف الأسبوع وتريد تشتري أكل',
    questionText: 'مريم معاها ١٠٠ جنيه واشترت أكل بـ ٦٤ جنيه. المتبقي معاها كم جنيه؟',
    hintText: 'اطرح تمن الأكل من اللي معاها',
    explanation: '١٠٠ - ٦٤ = ٣٦ جنيه',
    correctAnswer: '٣٦',
    correctAnswerNumeric: 36,
  },

  // Topic 1 - Open Ended 3
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'أحمد يجمع مال حتى يشتري كورة',
    questionText: 'أحمد معاه ٨٦ جنيه ومحتاج ١٥٠ جنيه حتى الكورة. يحتاج أن يوفر كم المزيد؟',
    hintText: 'اطرح اللي معاه من تمن الكورة',
    explanation: '١٥٠ - ٨٦ = ٦٤ جنيه لسه يحتاج أن يوفرهم',
    correctAnswer: '٦٤',
    correctAnswerNumeric: 64,
  },

  // Topic 1 - Open Ended 4
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'نور بتحسب مشتريات ماما من الخضري',
    questionText: 'ماما اشترت خضار بـ ٤٥ جنيه وفاكهة بـ ٣٨ جنيه ولحمة بـ ١٢٠ جنيه. المجموع كام؟',
    hintText: 'اجمع التلات أرقام مع بعض',
    explanation: '٤٥ + ٣٨ = ٨٣، وبعدين ٨٣ + ١٢٠ = ٢٠٣ جنيه',
    correctAnswer: '٢٠٣',
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
    questionText: 'كل كراسة بـ ١٢ جنيه وسارة تريد ٣ كراسات. كم ستدفع؟',
    hintText: 'اضرب تمن الكراسة في عدد الكراسات',
    explanation: '١٢ × ٣ = ٣٦ جنيه',
    options: [
      { optionText: '٣٦ جنيه', isCorrect: true },
      { optionText: '٣٢ جنيه', isCorrect: false },
      { optionText: '١٥ جنيه', isCorrect: false },
      { optionText: '٣٩ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 2
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'المدرّسة بتجهز أدوات لحصة العلوم',
    questionText: 'المدرّسة محتاجة ٥ مجموعات تجارب، كل مجموعة بـ ٢٥ جنيه. التكلفة كام؟',
    hintText: 'اضرب ٥ في ٢٥',
    explanation: '٥ × ٢٥ = ١٢٥ جنيه',
    options: [
      { optionText: '١٢٥ جنيه', isCorrect: true },
      { optionText: '١٣٠ جنيه', isCorrect: false },
      { optionText: '١٢٠ جنيه', isCorrect: false },
      { optionText: '١٥٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 3
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عمر بيشتري عُلب عصير لحفلة الفصل',
    questionText: 'كل علبة عصير بـ ٧ جنيه وعمر اشترى ٨ علب. الحساب كام؟',
    hintText: 'اضرب ٧ في ٨',
    explanation: '٧ × ٨ = ٥٦ جنيه',
    options: [
      { optionText: '٥٦ جنيه', isCorrect: true },
      { optionText: '٥٤ جنيه', isCorrect: false },
      { optionText: '٤٨ جنيه', isCorrect: false },
      { optionText: '٦٣ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 4
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'مريم بتنظم رحلة الفصل وبتحسب تكلفة التذاكر',
    questionText: 'تذكرة الحديقة بـ ٣٥ جنيه وعدد التلاميذ ٤. التكلفة الكلية كام؟',
    hintText: 'اضرب تمن التذكرة في عدد التلاميذ',
    explanation: '٣٥ × ٤ = ١٤٠ جنيه',
    options: [
      { optionText: '١٤٠ جنيه', isCorrect: true },
      { optionText: '١٢٠ جنيه', isCorrect: false },
      { optionText: '١٣٩ جنيه', isCorrect: false },
      { optionText: '١٤٥ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 5
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'كريم بيشتري ألوان لحصة الرسم',
    questionText: 'كل علبة ألوان بـ ١٨ جنيه وكريم يريد ٦ علب. هيكم دفع؟',
    hintText: 'اضرب ١٨ في ٦',
    explanation: '١٨ × ٦ = ١٠٨ جنيه',
    options: [
      { optionText: '١٠٨ جنيه', isCorrect: true },
      { optionText: '٩٦ جنيه', isCorrect: false },
      { optionText: '١١٨ جنيه', isCorrect: false },
      { optionText: '١٠٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 6
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتشتري هدايا لأصدقائها في عيد ميلادها',
    questionText: 'كل هدية بـ ٤٠ جنيه وياسمين تريد ٧ هدايا. المجموع كام؟',
    hintText: 'اضرب ٤٠ في ٧',
    explanation: '٤٠ × ٧ = ٢٨٠ جنيه',
    options: [
      { optionText: '٢٨٠ جنيه', isCorrect: true },
      { optionText: '٢٧٠ جنيه', isCorrect: false },
      { optionText: '٣٢٠ جنيه', isCorrect: false },
      { optionText: '٢٤٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 7
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'المدرسة بتطلب دفاتر للتلاميذ',
    questionText: 'كل دفتر بـ ١٥ جنيه والفصل فيه ٩ تلاميذ. تكلفة الدفاتر كام؟',
    hintText: 'اضرب ١٥ في ٩',
    explanation: '١٥ × ٩ = ١٣٥ جنيه',
    options: [
      { optionText: '١٣٥ جنيه', isCorrect: true },
      { optionText: '١٢٥ جنيه', isCorrect: false },
      { optionText: '١٤٥ جنيه', isCorrect: false },
      { optionText: '١٥٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 8
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'نور بتحسب تمن الكعك اللي ماما صنعته للعيد',
    questionText: 'ماما صنعت ١٢ صينية كعك وكل صينية محتاجة سمنة بـ ٢٠ جنيه. تمن السمنة كلها كام؟',
    hintText: 'اضرب ١٢ في ٢٠',
    explanation: '١٢ × ٢٠ = ٢٤٠ جنيه',
    options: [
      { optionText: '٢٤٠ جنيه', isCorrect: true },
      { optionText: '٢٢٠ جنيه', isCorrect: false },
      { optionText: '٣٢٠ جنيه', isCorrect: false },
      { optionText: '٢٠٠ جنيه', isCorrect: false },
    ],
  },

  // Topic 2 - Open Ended 1
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'خالد بيشتري أقلام رصاص لزمايله',
    questionText: 'كل قلم بـ ٤ جنيه وخالد يريد ٩ أقلام. هيكم دفع جنيه؟',
    hintText: 'اضرب ٤ في ٩',
    explanation: '٤ × ٩ = ٣٦ جنيه',
    correctAnswer: '٣٦',
    correctAnswerNumeric: 36,
  },

  // Topic 2 - Open Ended 2
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيشتري زجاجات مياه لفريق الكورة',
    questionText: 'كل زجاجة بـ ٥ جنيه والفريق ١١ لاعب. التكلفة الكلية كم جنيه؟',
    hintText: 'اضرب ٥ في ١١',
    explanation: '٥ × ١١ = ٥٥ جنيه',
    correctAnswer: '٥٥',
    correctAnswerNumeric: 55,
  },

  // Topic 2 - Open Ended 3
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتحسب ثمن البيض اللي ماما طلبته',
    questionText: 'كل كرتونة بيض بـ ٨٥ جنيه وماما تريد ٣ كراتين. المجموع كم جنيه؟',
    hintText: 'اضرب ٨٥ في ٣',
    explanation: '٨٥ × ٣ = ٢٥٥ جنيه',
    correctAnswer: '٢٥٥',
    correctAnswerNumeric: 255,
  },

  // Topic 2 - Open Ended 4
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'المدرّس بيوزع كتب على ٦ مجموعات في الفصل',
    questionText: 'كل مجموعة فيها ٧ تلاميذ. كم تلميذ في الفصل كله؟',
    hintText: 'اضرب عدد المجموعات في عدد التلاميذ في كل مجموعة',
    explanation: '٦ × ٧ = ٤٢ تلميذ',
    correctAnswer: '٤٢',
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
    questionText: 'أحمد عنده ٢٠ قطعة فواكه ويريد يقسمهم على ٤ أصدقاء بالتساوي. كل واحد يأخذ كام؟',
    hintText: 'اقسم ٢٠ على ٤',
    explanation: '٢٠ ÷ ٤ = ٥ قطع لكل واحد',
    options: [
      { optionText: '٥', isCorrect: true },
      { optionText: '٤', isCorrect: false },
      { optionText: '٦', isCorrect: false },
      { optionText: '٨', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 2
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'سارة عندها تمر وتريد توزعها على زميلاتها',
    questionText: 'سارة عندها ٢٥ تمرة وتريد توزعهم على ٤ زميلات بالتساوي. كل واحدة تأخذ كم ويتبقى كام؟',
    hintText: 'اقسم ٢٥ على ٤ وشوف الباقي',
    explanation: '٢٥ ÷ ٤ = ٦ لكل واحدة والباقي ١ (لأن ٤ × ٦ = ٢٤)',
    options: [
      { optionText: '٦ لكل واحدة والباقي ١', isCorrect: true },
      { optionText: '٥ لكل واحدة والباقي ٥', isCorrect: false },
      { optionText: '٧ لكل واحدة والباقي ٠', isCorrect: false },
      { optionText: '٦ لكل واحدة والباقي ٢', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 3
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'كريم اشترى كيس لب ويريد يقسمه على أصدقائه',
    questionText: 'كريم عنده ٣٧ حبة لب ويريد يقسمهم على ٥ أصدقاء. كل واحد يأخذ كم ويتبقى كام؟',
    hintText: 'اقسم ٣٧ على ٥',
    explanation: '٣٧ ÷ ٥ = ٧ لكل واحد والباقي ٢ (لأن ٥ × ٧ = ٣٥)',
    options: [
      { optionText: '٧ لكل واحد والباقي ٢', isCorrect: true },
      { optionText: '٧ لكل واحد والباقي ٣', isCorrect: false },
      { optionText: '٦ لكل واحد والباقي ٧', isCorrect: false },
      { optionText: '٨ لكل واحد والباقي ٠', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 4
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'المدرّسة تقسم التلاميذ على فرق في حصة الرياضة',
    questionText: 'الفصل فيه ٣٠ تلميذ والمدرّسة تريد تقسمهم ٦ فرق. كل فريق فيه كام؟',
    hintText: 'اقسم ٣٠ على ٦',
    explanation: '٣٠ ÷ ٦ = ٥ تلاميذ في كل فريق',
    options: [
      { optionText: '٥', isCorrect: true },
      { optionText: '٦', isCorrect: false },
      { optionText: '٤', isCorrect: false },
      { optionText: '٣', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 5
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'نور توزع موز على إخواتها',
    questionText: 'نور عندها ٢٣ موزة وتريد توزعهم على ٣ إخوات. كل واحد يأخذ كم ويتبقى كام؟',
    hintText: 'اقسم ٢٣ على ٣',
    explanation: '٢٣ ÷ ٣ = ٧ لكل واحد والباقي ٢ (لأن ٣ × ٧ = ٢١)',
    options: [
      { optionText: '٧ لكل واحد والباقي ٢', isCorrect: true },
      { optionText: '٨ لكل واحد والباقي ٠', isCorrect: false },
      { optionText: '٧ لكل واحد والباقي ٣', isCorrect: false },
      { optionText: '٦ لكل واحد والباقي ٥', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 6
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'ياسمين تقسم مال العيدية على أيام الأسبوع',
    questionText: 'ياسمين أخدت عيدية ٥٠ جنيه وتريد تقسمهم على ٧ أيام. كل يوم تصرف كم ويتبقى كام؟',
    hintText: 'اقسم ٥٠ على ٧',
    explanation: '٥٠ ÷ ٧ = ٧ جنيه كل يوم والباقي ١ (لأن ٧ × ٧ = ٤٩)',
    options: [
      { optionText: '٧ جنيه والباقي ١', isCorrect: true },
      { optionText: '٨ جنيه والباقي ٠', isCorrect: false },
      { optionText: '٦ جنيه والباقي ٨', isCorrect: false },
      { optionText: '٧ جنيه والباقي ٣', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 7
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'عمر عنده ملصقات ويريد يحطهم في ألبومات',
    questionText: 'عمر عنده ٤٥ ملصق وكل صفحة بتشيل ٨ ملصقات. محتاج كم صفحة على الأقل؟',
    hintText: 'اقسم ٤٥ على ٨ ولو فيه باقي محتاج صفحة زيادة',
    explanation: '٤٥ ÷ ٨ = ٥ صفحات والباقي ٥، فمحتاج ٦ صفحات على الأقل',
    options: [
      { optionText: '٦ صفحات', isCorrect: true },
      { optionText: '٥ صفحات', isCorrect: false },
      { optionText: '٧ صفحات', isCorrect: false },
      { optionText: '٤ صفحات', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 8
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'خالد يقسم تفاح على أأصدقائه في الفسحة',
    questionText: 'خالد عنده ٤٢ كيس تفاح ويريد يقسمهم على ٨ أصدقاء. كل واحد يأخذ كم ويتبقى كام؟',
    hintText: 'اقسم ٤٢ على ٨',
    explanation: '٤٢ ÷ ٨ = ٥ لكل واحد والباقي ٢ (لأن ٨ × ٥ = ٤٠)',
    options: [
      { optionText: '٥ لكل واحد والباقي ٢', isCorrect: true },
      { optionText: '٥ لكل واحد والباقي ٣', isCorrect: false },
      { optionText: '٦ لكل واحد والباقي ٠', isCorrect: false },
      { optionText: '٤ لكل واحد والباقي ١٠', isCorrect: false },
    ],
  },

  // Topic 3 - Open Ended 1
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'مريم عندها فواكه وتريد توزعها',
    questionText: 'مريم عندها ٣٦ حلاوة وتريد توزعهم على ٦ أصدقاء بالتساوي. كل واحدة تأخذ كام؟',
    hintText: 'اقسم ٣٦ على ٦',
    explanation: '٣٦ ÷ ٦ = ٦ حلاوات لكل واحدة',
    correctAnswer: '٦',
    correctAnswerNumeric: 6,
  },

  // Topic 3 - Open Ended 2
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'أحمد يقسم تفاح على أصدقائه',
    questionText: 'أحمد عنده ٢٩ تفاحة ويريد يقسمهم على ٥ أصدقاء. كل واحد يأخذ ٥ تفاحات. الباقي كم تفاحة؟',
    hintText: 'احسب ٥ × ٥ واطرح من ٢٩',
    explanation: '٥ × ٥ = ٢٥، والباقي = ٢٩ - ٢٥ = ٤ تفاحات',
    correctAnswer: '٤',
    correctAnswerNumeric: 4,
  },

  // Topic 3 - Open Ended 3
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'سارة توزع أقلام على مجموعات الفصل',
    questionText: 'سارة عندها ٥٦ قلم وتريد توزعهم على ٧ مجموعات بالتساوي. كل مجموعة تأخذ كم قلم؟',
    hintText: 'اقسم ٥٦ على ٧',
    explanation: '٥٦ ÷ ٧ = ٨ أقلام لكل مجموعة',
    correctAnswer: '٨',
    correctAnswerNumeric: 8,
  },

  // Topic 3 - Open Ended 4
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'نور تقسم ألعاب على إخواتها',
    questionText: 'نور عندها ٣٤ لعبة وتريد توزعهم على ٤ إخوات بالتساوي. الباقي كم لعبة؟',
    hintText: 'اقسم ٣٤ على ٤ وشوف الباقي',
    explanation: '٣٤ ÷ ٤ = ٨ لكل واحد والباقي ٢ (لأن ٤ × ٨ = ٣٢)',
    correctAnswer: '٢',
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
    questionText: 'العداد بيقول ٢٤٬٨٥٧ كيلومتر. الرقم ٤ قيمته المكانية كام؟',
    hintText: 'شوف الـ ٤ في أي خانة',
    explanation: 'الـ ٤ في خانة الآلاف، فقيمتها المكانية = ٤٬٠٠٠',
    options: [
      { optionText: '٤٬٠٠٠', isCorrect: true },
      { optionText: '٤٠٠', isCorrect: false },
      { optionText: '٤٠', isCorrect: false },
      { optionText: '٤', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 2
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'سارة بتقرب عدد سكان مدينتها',
    questionText: 'عدد سكان المدينة ٤٧٬٣٢٩. قربي الرقم لأقرب ألف؟',
    hintText: 'شوف الرقم اللي في خانة المئات، لو أقل من ٥ نزّل',
    explanation: 'الرقم في خانة المئات = ٣ (أقل من ٥)، فنقرب لـ ٤٧٬٠٠٠',
    options: [
      { optionText: '٤٧٬٠٠٠', isCorrect: true },
      { optionText: '٤٨٬٠٠٠', isCorrect: false },
      { optionText: '٤٧٬٣٠٠', isCorrect: false },
      { optionText: '٥٠٬٠٠٠', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 3
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'نور بتقارن أسعار موبايلين في محلين مختلفين',
    questionText: 'أي أكبر: ٣٬٤٥٠ جنيه ولا ٣٬٥٤٠ جنيه؟',
    hintText: 'قارن الأرقام من الشمال لليمين',
    explanation: 'الألاف متساوية (٣). المئات: ٤ < ٥، فـ ٣٬٥٤٠ أكبر',
    options: [
      { optionText: '٣٬٥٤٠', isCorrect: true },
      { optionText: '٣٬٤٥٠', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش عارف أحدد', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 4
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيلعب لعبة أرقام مع صاحبه',
    questionText: 'رتب الأرقام دي من الأصغر للأكبر: ٥٬٢٠١ - ٥٬٠٢١ - ٥٬٢١٠',
    hintText: 'قارن خانة المئات في كل رقم',
    explanation: 'الألاف كلهم ٥. المئات: ٠ < ٢ = ٢. فالترتيب: ٥٬٠٢١ ثم ٥٬٢٠١ ثم ٥٬٢١٠',
    options: [
      { optionText: '٥٬٠٢١ ثم ٥٬٢٠١ ثم ٥٬٢١٠', isCorrect: true },
      { optionText: '٥٬٢١٠ ثم ٥٬٢٠١ ثم ٥٬٠٢١', isCorrect: false },
      { optionText: '٥٬٢٠١ ثم ٥٬٠٢١ ثم ٥٬٢١٠', isCorrect: false },
      { optionText: '٥٬٠٢١ ثم ٥٬٢١٠ ثم ٥٬٢٠١', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 5
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتقرب أسعار في السوبر ماركت',
    questionText: 'تمن الغسالة ٨٬٤٧٥ جنيه. قربي لأقرب مئة؟',
    hintText: 'شوف الرقم في خانة العشرات، لو ٥ أو أكتر ارفع',
    explanation: 'العشرات = ٧ (أكبر من ٥)، فنقرب لـ ٨٬٥٠٠',
    options: [
      { optionText: '٨٬٥٠٠', isCorrect: true },
      { optionText: '٨٬٤٠٠', isCorrect: false },
      { optionText: '٨٬٠٠٠', isCorrect: false },
      { optionText: '٩٬٠٠٠', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 6
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'عمر بيكتب رقم تليفون ويريد يعرف قيمة أول رقم',
    questionText: 'في العدد ٧٢٬٤٥٦، الرقم ٧ قيمته المكانية كام؟',
    hintText: 'الـ ٧ في أول خانة من الشمال',
    explanation: 'الـ ٧ في خانة عشرات الآلاف، فقيمتها = ٧٠٬٠٠٠',
    options: [
      { optionText: '٧٠٬٠٠٠', isCorrect: true },
      { optionText: '٧٬٠٠٠', isCorrect: false },
      { optionText: '٧٠٠', isCorrect: false },
      { optionText: '٧', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 7
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقارن نتائج الامتحانات بين فصلين',
    questionText: 'فصل أ مجموعه ١٬٢٥٠ وفصل ب مجموعه ١٬٢٠٥. أي فصل مجموعه أكبر؟',
    hintText: 'قارن الأرقام من اليسار',
    explanation: 'الألاف والمئات متساويين. العشرات: ٥ > ٠، ففصل أ (١٬٢٥٠) أكبر',
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
    questionText: 'المسافة ٢١٩ كم. قرب لأقرب عشرة؟',
    hintText: 'شوف رقم الآحاد، لو ٥ أو أكتر ارفع',
    explanation: 'الآحاد = ٩ (أكبر من ٥)، فنقرب لـ ٢٢٠',
    options: [
      { optionText: '٢٢٠', isCorrect: true },
      { optionText: '٢١٠', isCorrect: false },
      { optionText: '٢٠٠', isCorrect: false },
      { optionText: '٣٠٠', isCorrect: false },
    ],
  },

  // Topic 4 - Open Ended 1
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتتعلم القيمة المكانية في حصة الرياضيات',
    questionText: 'في العدد ٦٬٣٨٢، الرقم ٣ قيمته المكانية كام؟',
    hintText: 'الـ ٣ في خانة المئات',
    explanation: 'الـ ٣ في خانة المئات، فقيمتها المكانية = ٣٠٠',
    correctAnswer: '٣٠٠',
    correctAnswerNumeric: 300,
  },

  // Topic 4 - Open Ended 2
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'نور بتقرب ثمن التابلت اللي يريداه',
    questionText: 'تمن التابلت ٣٬٨٦٢ جنيه. قربي لأقرب ألف؟',
    hintText: 'شوف المئات: ٨ أكبر من ٥ فارفعي',
    explanation: 'المئات = ٨ (أكبر من ٥)، فنقرب لـ ٤٬٠٠٠',
    correctAnswer: '٤٠٠٠',
    correctAnswerNumeric: 4000,
  },

  // Topic 4 - Open Ended 3
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيقرب عدد الطلاب في المدرسة',
    questionText: 'عدد الطلاب ٧٤٣. قرب لأقرب عشرة؟',
    hintText: 'شوف الآحاد: ٣ أقل من ٥ فنزّل',
    explanation: 'الآحاد = ٣ (أقل من ٥)، فنقرب لـ ٧٤٠',
    correctAnswer: '٧٤٠',
    correctAnswerNumeric: 740,
  },

  // Topic 4 - Open Ended 4
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيقرب ثمن دراجة نارية',
    questionText: 'تمن العجلة ١٬٤٥٠ جنيه. قرب لأقرب مئة؟',
    hintText: 'شوف العشرات: ٥ يعني ارفع',
    explanation: 'العشرات = ٥ (يساوي ٥ فنرفع)، فنقرب لـ ١٬٥٠٠',
    correctAnswer: '١٥٠٠',
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
    questionText: 'أحمد عنده ١٤ كورة. هل يقدر يرتبهم في صفين متساويين؟',
    hintText: 'لو الرقم زوجي يكون يتقسم على ٢',
    explanation: '١٤ عدد زوجي لأنه بيتقسم على ٢ بدون باقي (١٤ ÷ ٢ = ٧)، فأيوا يقدر',
    options: [
      { optionText: 'أيوا لأن ١٤ عدد زوجي', isCorrect: true },
      { optionText: 'لأ لأن ١٤ عدد فردي', isCorrect: false },
      { optionText: 'أيوا لأن ١٤ عدد فردي', isCorrect: false },
      { optionText: 'لأ لأن ١٤ عدد أولي', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 2
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'سارة بتدور على عوامل رقم في حصة الرياضيات',
    questionText: 'إيه عوامل العدد ١٢؟',
    hintText: 'العوامل هي الأرقام اللي بتتقسم عليها من غير باقي',
    explanation: '١٢ = ١×١٢ = ٢×٦ = ٣×٤، فالعوامل: ١، ٢، ٣، ٤، ٦، ١٢',
    options: [
      { optionText: '١، ٢، ٣، ٤، ٦، ١٢', isCorrect: true },
      { optionText: '١، ٢، ٤، ٦، ١٢', isCorrect: false },
      { optionText: '٢، ٣، ٤، ٦', isCorrect: false },
      { optionText: '١، ٢، ٣، ١٢', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 3
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'كريم بيلعب لعبة الأرقام ويحتاج أن يعرف مضاعفات ٦',
    questionText: 'أي رقم من دول مضاعف للعدد ٦؟',
    hintText: 'مضاعفات ٦ هي: ٦، ١٢، ١٨، ٢٤، ٣٠...',
    explanation: '٢٤ = ٦ × ٤ فهو مضاعف للعدد ٦',
    options: [
      { optionText: '٢٤', isCorrect: true },
      { optionText: '١٦', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
      { optionText: '٢٢', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 4
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'نور بتلعب لعبة زوجي/فردي مع أختها',
    questionText: 'لو جمعنا عدد فردي + عدد فردي، النتيجة بتكون إيه؟',
    hintText: 'جرب مثال: ٣ + ٥ = ؟',
    explanation: 'فردي + فردي = زوجي دايماً. مثال: ٣ + ٥ = ٨ (زوجي)',
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
    questionText: 'هل ٧ عامل للعدد ٣٥؟',
    hintText: 'اقسم ٣٥ على ٧ وشوف لو الناتج عدد صحيح',
    explanation: '٣٥ ÷ ٧ = ٥ (عدد صحيح بدون باقي)، فأيوا ٧ عامل للعدد ٣٥',
    options: [
      { optionText: 'أيوا لأن ٣٥ ÷ ٧ = ٥', isCorrect: true },
      { optionText: 'لأ لأن ٧ عدد فردي', isCorrect: false },
      { optionText: 'لأ لأن ٣٥ عدد فردي', isCorrect: false },
      { optionText: 'أيوا لأن ٧ + ٣٥ = ٤٢', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 6
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'مريم بتحل تمرين على المضاعفات',
    questionText: 'إيه أول ٣ مضاعفات للعدد ٩؟',
    hintText: 'اضرب ٩ في ١، ٢، ٣',
    explanation: '٩ × ١ = ٩، ٩ × ٢ = ١٨، ٩ × ٣ = ٢٧',
    options: [
      { optionText: '٩، ١٨، ٢٧', isCorrect: true },
      { optionText: '٩، ١٩، ٢٩', isCorrect: false },
      { optionText: '١، ٩، ١٨', isCorrect: false },
      { optionText: '٩، ١٨، ٣٦', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 7
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'ياسمين توزع تفاح على أطباق بالتساوي',
    questionText: 'ياسمين عندها ١٥ تفاحة. أي عدد أطباق تقدر توزع عليه بالتساوي من غير باقي؟',
    hintText: 'دوري على عوامل ١٥',
    explanation: 'عوامل ١٥ هي ١، ٣، ٥، ١٥. فتقدر توزع على ٣ أو ٥ أطباق بالتساوي',
    options: [
      { optionText: '٥ أطباق', isCorrect: true },
      { optionText: '٤ أطباق', isCorrect: false },
      { optionText: '٧ أطباق', isCorrect: false },
      { optionText: '٢ أطباق', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 8
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'خالد بيصنف الأعداد في حصة الرياضيات',
    questionText: 'أي عدد من دول عدد فردي؟',
    hintText: 'العدد الفردي مش بيتقسم على ٢ بالتساوي',
    explanation: '٣٧ عدد فردي لأن ٣٧ ÷ ٢ = ١٨ والباقي ١',
    options: [
      { optionText: '٣٧', isCorrect: true },
      { optionText: '٤٤', isCorrect: false },
      { optionText: '٢٨', isCorrect: false },
      { optionText: '٥٠', isCorrect: false },
    ],
  },

  // Topic 5 - Open Ended 1
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتحل سؤال عن المضاعفات',
    questionText: 'إيه ناتج ٨ × ٧؟ (وهو مضاعف مشترك لـ ٨ و ٧)',
    hintText: 'اضرب ٨ في ٧',
    explanation: '٨ × ٧ = ٥٦',
    correctAnswer: '٥٦',
    correctAnswerNumeric: 56,
  },

  // Topic 5 - Open Ended 2
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'نور بتعد عوامل رقم',
    questionText: 'العدد ١٨ له كم عامل؟ (العوامل: ١، ٢، ٣، ٦، ٩، ١٨)',
    hintText: 'عد الأرقام اللي تقسم ١٨ من غير باقي',
    explanation: 'عوامل ١٨: ١، ٢، ٣، ٦، ٩، ١٨ = ٦ عوامل',
    correctAnswer: '٦',
    correctAnswerNumeric: 6,
  },

  // Topic 5 - Open Ended 3
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'كريم بيحسب مضاعفات في لعبة حسابية',
    questionText: 'إيه خامس مضاعف للعدد ٤؟',
    hintText: 'اضرب ٤ × ٥',
    explanation: 'مضاعفات ٤: ٤، ٨، ١٢، ١٦، ٢٠. الخامس = ٢٠',
    correctAnswer: '٢٠',
    correctAnswerNumeric: 20,
  },

  // Topic 5 - Open Ended 4
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيرتب كراسي في صفوف',
    questionText: 'أحمد عنده ٤٨ كرسي. لو رتبهم في صفوف كل صف ٨ كراسي، هيطلع كم صف؟',
    hintText: 'اقسم ٤٨ على ٨',
    explanation: '٤٨ ÷ ٨ = ٦ صفوف',
    correctAnswer: '٦',
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
    realLifeContext: 'أحمد وعيلته بياكلوا بيتزا متقسمة ٨ حتت',
    questionText: 'أحمد أكل ٣ حتت من ٨. أكل كم من البيتزا؟',
    hintText: 'عدد اللي أكله على العدد الكلي',
    explanation: 'أكل ٣ من ٨ = ٣/٨ من البيتزا',
    options: [
      { optionText: '٣/٨', isCorrect: true },
      { optionText: '٨/٣', isCorrect: false },
      { optionText: '٣/٥', isCorrect: false },
      { optionText: '٥/٨', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 2
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'سارة قسمت الكيكة ٤ حتت متساوية',
    questionText: 'سارة أكلت حتة واحدة من ٤. أي كسر يمثل اللي أكلته؟',
    hintText: 'عدد الحتت اللي أكلتها فوق وعدد الحتت الكلي تحت',
    explanation: 'أكلت حتة من ٤ = ١/٤',
    options: [
      { optionText: '١/٤', isCorrect: true },
      { optionText: '٤/١', isCorrect: false },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '٣/٤', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 3
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'كريم عنده لوح فواكه متقسم ١٠ مربعات',
    questionText: 'أي كسر أكبر: ٣/١٠ ولا ٧/١٠؟',
    hintText: 'لو المقام واحد، قارن البسط',
    explanation: 'المقام واحد (١٠)، و ٧ > ٣، فـ ٧/١٠ أكبر',
    options: [
      { optionText: '٧/١٠', isCorrect: true },
      { optionText: '٣/١٠', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش عارف أقارن', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 4
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'نور أكلت جزء من البيتزا المقسمة ٦ حتت',
    questionText: 'نور أكلت ٢/٦ من البيتزا. الكسر هذا يساوي كم في أبسط صورة؟',
    hintText: 'دوري على رقم يقسم البسط والمقام',
    explanation: '٢/٦ = ١/٣ (قسمنا البسط والمقام على ٢)',
    options: [
      { optionText: '١/٣', isCorrect: true },
      { optionText: '١/٢', isCorrect: false },
      { optionText: '٢/٣', isCorrect: false },
      { optionText: '٣/٦', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 5
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عمر بيتعلم الكسور المتكافئة في حصة الرياضيات',
    questionText: 'أي كسر يكافئ ١/٢؟',
    hintText: 'اضرب البسط والمقام في نفس الرقم',
    explanation: '١/٢ = ٢/٤ = ٣/٦ = ٤/٨ (نضرب البسط والمقام في نفس العدد)',
    options: [
      { optionText: '٣/٦', isCorrect: true },
      { optionText: '٢/٣', isCorrect: false },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '٣/٥', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 6
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ياسمين تقسم لوح فواكه على أصدقائها',
    questionText: 'لوح الفواكه متقسم ١٢ مربع. ياسمين أكلت ٤ مربعات. أكلت قد إيه؟',
    hintText: 'اكتبي الكسر وبسطيه',
    explanation: '٤/١٢ = ١/٣ (قسمنا على ٤)',
    options: [
      { optionText: '١/٣', isCorrect: true },
      { optionText: '٤/٨', isCorrect: false },
      { optionText: '١/٤', isCorrect: false },
      { optionText: '٢/٣', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 7
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقارن حصص الكيك بين أخواتها',
    questionText: 'أي أكبر: ١/٢ ولا ١/٤؟',
    hintText: 'لو البسط واحد، المقام الأصغر يكون الكسر الأكبر',
    explanation: 'نفس البسط (١)، والمقام ٢ < ٤، فـ ١/٢ أكبر من ١/٤',
    options: [
      { optionText: '١/٢', isCorrect: true },
      { optionText: '١/٤', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: '١/٤ أكبر لأن ٤ أكبر', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 8
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'خالد اشترى بيتزا كبيرة متقسمة ٨ حتت',
    questionText: 'خالد أكل ٢/٨ وأخوه أكل ٢/٨. المتبقي قد إيه؟',
    hintText: 'اجمع اللي اتاكل واطرح من ٨/٨',
    explanation: '٢/٨ + ٢/٨ = ٤/٨. الالمتبقي = ٨/٨ - ٤/٨ = ٤/٨ = ١/٢',
    options: [
      { optionText: '٤/٨', isCorrect: true },
      { optionText: '٢/٨', isCorrect: false },
      { optionText: '٦/٨', isCorrect: false },
      { optionText: '٨/٨', isCorrect: false },
    ],
  },

  // Topic 6 - Open Ended 1
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'أحمد أكل جزء من بيتزا مقسمة ٦ حتت',
    questionText: 'أحمد أكل ٢ حتة من ٦. البسط في الكسر هذا كام؟',
    hintText: 'البسط هو عدد الحتت اللي أكلها',
    explanation: 'أكل ٢ من ٦، فالكسر = ٢/٦ والبسط = ٢',
    correctAnswer: '٢',
    correctAnswerNumeric: 2,
  },

  // Topic 6 - Open Ended 2
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتبسط كسور في الواجب',
    questionText: 'بسطي الكسر ٤/٨. المقام في أبسط صورة كام؟',
    hintText: 'اقسمي البسط والمقام على ٤',
    explanation: '٤/٨ = ١/٢ (قسمنا على ٤). المقام = ٢',
    correctAnswer: '٢',
    correctAnswerNumeric: 2,
  },

  // Topic 6 - Open Ended 3
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'كريم قسم كيكة ٥ حتت ومحدش أكل حاجة',
    questionText: 'لو الكيكة كلها متقسمة ٥ حتت، الكيكة كاملة بتتكتب كسر إزاي؟ البسط كام؟',
    hintText: 'الكل يعني البسط = المقام',
    explanation: 'الكيكة الكاملة = ٥/٥، فالبسط = ٥',
    correctAnswer: '٥',
    correctAnswerNumeric: 5,
  },

  // Topic 6 - Open Ended 4
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'نور بتقارن كسور في حصة الرياضيات',
    questionText: 'لوح فواكه متقسم ١٠ مربعات. نور أكلت ٥ مربعات. أكلت كم على ١٠ من اللوح؟ (اكتب البسط)',
    hintText: 'البسط = عدد المربعات اللي اتاكلت',
    explanation: 'أكلت ٥ من ١٠ = ٥/١٠ = ١/٢. البسط = ٥',
    correctAnswer: '٥',
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
    questionText: 'ماما اشترت ٣ كيلو تفاح و ٢ كيلو برتقال. اشترت كم كيلو فاكهة في المجموع؟',
    hintText: 'اجمع الكيلوهات مع بعض',
    explanation: '٣ + ٢ = ٥ كيلو فاكهة',
    options: [
      { optionText: '٥ كيلو', isCorrect: true },
      { optionText: '٦ كيلو', isCorrect: false },
      { optionText: '٤ كيلو', isCorrect: false },
      { optionText: '١ كيلو', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 2
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'كريم بيقيس طول الفصل',
    questionText: 'طول الفصل ٨ متر وعرضه ٦ متر. المحيط كم متر؟',
    hintText: 'محيط المستطيل = ٢ × (الطول + العرض)',
    explanation: 'المحيط = ٢ × (٨ + ٦) = ٢ × ١٤ = ٢٨ متر',
    options: [
      { optionText: '٢٨ متر', isCorrect: true },
      { optionText: '١٤ متر', isCorrect: false },
      { optionText: '٤٨ متر', isCorrect: false },
      { optionText: '٢٤ متر', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 3
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'سارة بتملى زجاجات مياه للرحلة',
    questionText: 'سارة عندها جركن ٥ لتر مياه وملت ٣ زجاجات كل واحدة نص لتر. كم يتبقى لتر؟',
    hintText: 'احسبي المياه اللي في الزجاجات واطرحيها',
    explanation: '٣ زجاجات × ٠.٥ لتر = ١.٥ لتر. الالمتبقي = ٥ - ١.٥ = ٣.٥ لتر',
    options: [
      { optionText: '٣ ونص لتر', isCorrect: true },
      { optionText: '٤ لتر', isCorrect: false },
      { optionText: '٢ لتر', isCorrect: false },
      { optionText: '٣ لتر', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 4
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيوزن شنطة المدرسة',
    questionText: 'شنطة أحمد وزنها ٤ كيلو. لو حط فيها كتاب وزنه ٥٠٠ جرام، الوزن الكلي كام؟',
    hintText: '٥٠٠ جرام = نص كيلو',
    explanation: '٥٠٠ جرام = ٠.٥ كيلو. الوزن = ٤ + ٠.٥ = ٤.٥ كيلو = ٤ كيلو ونص',
    options: [
      { optionText: '٤ كيلو ونص', isCorrect: true },
      { optionText: '٥٠٤ كيلو', isCorrect: false },
      { optionText: '٩ كيلو', isCorrect: false },
      { optionText: '٤ كيلو و ٥ جرام', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 5
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'نور بتقيس قماش حتى تعمل فستان',
    questionText: 'نور محتاجة ٢ متر قماش. لو القماش عندها ١٥٠ سم، ينفع ولا لأ؟',
    hintText: 'حولي المتر لسنتيمتر: ١ متر = ١٠٠ سم',
    explanation: '٢ متر = ٢٠٠ سم. عندها ١٥٠ سم بس، فمش كفاية ومحتاجة ٥٠ سم إضافية',
    options: [
      { optionText: 'لأ، ناقصها ٥٠ سم', isCorrect: true },
      { optionText: 'أيوا، كفاية', isCorrect: false },
      { optionText: 'لأ، ناقصها ١ متر', isCorrect: false },
      { optionText: 'لأ، ناقصها ١٥٠ سم', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 6
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'ياسمين بتحسب كمية اللبن اللي محتاجاها لوصفة',
    questionText: 'الوصفة محتاجة لتر ونص لبن. كم مل ده؟',
    hintText: '١ لتر = ١٠٠٠ مل',
    explanation: '١ لتر = ١٠٠٠ مل. لتر ونص = ١٠٠٠ + ٥٠٠ = ١٥٠٠ مل',
    options: [
      { optionText: '١٥٠٠ مل', isCorrect: true },
      { optionText: '١٥٠ مل', isCorrect: false },
      { optionText: '١٠٥٠ مل', isCorrect: false },
      { optionText: '٢٠٠٠ مل', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 7
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'عمر بيشتري رز من البقالة',
    questionText: 'ماما طلبت ٢ كيلو رز. كم جرام ده؟',
    hintText: '١ كيلو = ١٠٠٠ جرام',
    explanation: '٢ كيلو = ٢ × ١٠٠٠ = ٢٠٠٠ جرام',
    options: [
      { optionText: '٢٠٠٠ جرام', isCorrect: true },
      { optionText: '٢٠٠ جرام', isCorrect: false },
      { optionText: '٢٠ جرام', isCorrect: false },
      { optionText: '٢٠٠٠٠ جرام', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 8
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'مريم بتقيس طولها وطول أختها',
    questionText: 'طول مريم ١٤٠ سم وطول أختها ١ متر و ٢٥ سم. الفرق كم سم؟',
    hintText: 'حولي طول الأخت لسنتيمتر الأول',
    explanation: '١ متر و ٢٥ سم = ١٢٥ سم. الفرق = ١٤٠ - ١٢٥ = ١٥ سم',
    options: [
      { optionText: '١٥ سم', isCorrect: true },
      { optionText: '٢٥ سم', isCorrect: false },
      { optionText: '١٠ سم', isCorrect: false },
      { optionText: '١١٥ سم', isCorrect: false },
    ],
  },

  // Topic 7 - Open Ended 1
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'خالد بيشتري بطيخة من الخضري',
    questionText: 'البطيخة وزنها ٣ كيلو. كم جرام ده؟',
    hintText: '١ كيلو = ١٠٠٠ جرام',
    explanation: '٣ كيلو = ٣ × ١٠٠٠ = ٣٠٠٠ جرام',
    correctAnswer: '٣٠٠٠',
    correctAnswerNumeric: 3000,
  },

  // Topic 7 - Open Ended 2
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'سارة بتحسب طول سور الحديقة',
    questionText: 'حديقة مربعة طول ضلعها ٥ متر. المحيط كم متر؟',
    hintText: 'محيط المربع = ٤ × طول الضلع',
    explanation: 'محيط المربع = ٤ × ٥ = ٢٠ متر',
    correctAnswer: '٢٠',
    correctAnswerNumeric: 20,
  },

  // Topic 7 - Open Ended 3
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'أحمد بيملى حوض السمك بالمياه',
    questionText: 'حوض السمك محتاج ٤ لتر مياه. كم مل ده؟',
    hintText: '١ لتر = ١٠٠٠ مل',
    explanation: '٤ لتر = ٤ × ١٠٠٠ = ٤٠٠٠ مل',
    correctAnswer: '٤٠٠٠',
    correctAnswerNumeric: 4000,
  },

  // Topic 7 - Open Ended 4
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'نور بتقيس طول حبل النط',
    questionText: 'حبل النط طوله ٢ متر و ٥٠ سم. كم سم في المجموع؟',
    hintText: 'حولي المتر لسنتيمتر واجمعي',
    explanation: '٢ متر = ٢٠٠ سم. ٢٠٠ + ٥٠ = ٢٥٠ سم',
    correctAnswer: '٢٥٠',
    correctAnswerNumeric: 250,
  },
];
