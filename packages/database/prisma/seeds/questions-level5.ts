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
    questionText: 'كام يساوي ٢ أُس ٥ (٢⁵)؟',
    hintText: '٢ × ٢ × ٢ × ٢ × ٢ ... اضرب ٢ في نفسها ٥ مرات',
    explanation: '٢⁵ = ٢ × ٢ × ٢ × ٢ × ٢ = ٣٢',
    options: [
      { optionText: '٣٢', isCorrect: true },
      { optionText: '١٦', isCorrect: false },
      { optionText: '٦٤', isCorrect: false },
      { optionText: '١٠', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'بابا بيشرح لك إن البكتيريا بتتضاعف. كل ساعة عددها بيتضرب في ٣.',
    questionText: 'لو بدأنا بـ ١ بكتيريا، بعد ٤ ساعات هيبقى كام؟ (٣⁴)',
    hintText: '٣ × ٣ × ٣ × ٣',
    explanation: '٣⁴ = ٣ × ٣ × ٣ × ٣ = ٨١ بكتيريا',
    options: [
      { optionText: '٨١', isCorrect: true },
      { optionText: '٢٧', isCorrect: false },
      { optionText: '١٢', isCorrect: false },
      { optionText: '٦٤', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عايز تحسب مساحة مربع طول ضلعه ٩ سم.',
    questionText: 'كام تساوي ٩² (٩ تربيع)؟',
    hintText: 'المساحة = الضلع × الضلع',
    explanation: '٩² = ٩ × ٩ = ٨١ سم²',
    options: [
      { optionText: '٨١', isCorrect: true },
      { optionText: '١٨', isCorrect: false },
      { optionText: '٧٢', isCorrect: false },
      { optionText: '٩٩', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في حصة العلوم، المُدرِّس بيشرح إن الخلايا بتنقسم وكل خلية بتبقى ٢.',
    questionText: 'لو بدأنا بخلية واحدة وانقسمت ١٠ مرات، كام خلية هيبقى عندنا؟ (٢¹⁰)',
    hintText: '٢¹⁰ يعني ٢ مضروبة في نفسها ١٠ مرات',
    explanation: '٢¹⁰ = ١٠٢٤ خلية',
    options: [
      { optionText: '١٠٢٤', isCorrect: true },
      { optionText: '٥١٢', isCorrect: false },
      { optionText: '٢٠٤٨', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عايز تعرف حجم مكعب طول ضلعه ٥ سم.',
    questionText: 'كام يساوي ٥³ (٥ تكعيب)؟',
    hintText: 'الحجم = الضلع × الضلع × الضلع',
    explanation: '٥³ = ٥ × ٥ × ٥ = ١٢٥ سم³',
    options: [
      { optionText: '١٢٥', isCorrect: true },
      { optionText: '١٥', isCorrect: false },
      { optionText: '٧٥', isCorrect: false },
      { optionText: '١٥٠', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'في لعبة كمبيوتر، قوة الشخصية بتتضاعف كل مرحلة. القوة الأساسية ٤ والمرحلة ٣.',
    questionText: 'كام تساوي ٤³؟',
    hintText: '٤ × ٤ × ٤',
    explanation: '٤³ = ٤ × ٤ × ٤ = ٦٤',
    options: [
      { optionText: '٦٤', isCorrect: true },
      { optionText: '١٢', isCorrect: false },
      { optionText: '٤٨', isCorrect: false },
      { optionText: '١٦', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'المدرس سأل سؤال تحدي في الحصة.',
    questionText: 'أي عدد لو رفعناه للأُس صفر بيساوي كام؟ مثلاً ٧⁰ = ؟',
    hintText: 'أي عدد (غير الصفر) أُس صفر بيساوي رقم ثابت',
    explanation: 'أي عدد غير الصفر مرفوع للأُس صفر بيساوي ١. يبقى ٧⁰ = ١',
    options: [
      { optionText: '١', isCorrect: true },
      { optionText: '٧', isCorrect: false },
      { optionText: '٠', isCorrect: false },
      { optionText: '٤٩', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'عايز تقارن بين ٣⁴ و ٤³ عشان تعرف أنهي أكبر.',
    questionText: 'أنهي أكبر: ٣⁴ ولا ٤³؟',
    hintText: 'احسب كل واحدة لوحدها وقارن',
    explanation: '٣⁴ = ٨١ و ٤³ = ٦٤، يبقى ٣⁴ أكبر',
    options: [
      { optionText: '٣⁴ أكبر (٨١ > ٦٤)', isCorrect: true },
      { optionText: '٤³ أكبر', isCorrect: false },
      { optionText: 'متساويين', isCorrect: false },
      { optionText: 'مش ممكن نقارنهم', isCorrect: false },
    ],
  },

  // --- Topic 1, Open-ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'في مسابقة الرياضيات، المعلم طلب تحسب ٦ أُس ٣.',
    questionText: 'كام يساوي ٦³؟',
    correctAnswer: '٢١٦',
    correctAnswerNumeric: 216,
    hintText: '٦ × ٦ = ٣٦، بعدين × ٦',
    explanation: '٦³ = ٦ × ٦ × ٦ = ٢١٦',
  },

  // --- Topic 1, Open-ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'عايز تعرف مساحة أرضية أوضتك اللي هي مربع طول ضلعه ١٢ متر.',
    questionText: 'كام تساوي ١٢²؟',
    correctAnswer: '١٤٤',
    correctAnswerNumeric: 144,
    hintText: '١٢ × ١٢',
    explanation: '١٢² = ١٢ × ١٢ = ١٤٤ متر مربع',
  },

  // --- Topic 1, Open-ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'الكمبيوتر بيشتغل بالنظام الثنائي. كل بت بيضاعف الاحتمالات.',
    questionText: 'كام يساوي ٢⁸؟',
    correctAnswer: '٢٥٦',
    correctAnswerNumeric: 256,
    hintText: '٢⁴ = ١٦، يبقى ٢⁸ = ١٦ × ١٦',
    explanation: '٢⁸ = ٢٥٦',
  },

  // --- Topic 1, Open-ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'محتاج تحسب حجم صندوق مكعب طول ضلعه ٧ سم.',
    questionText: 'كام يساوي ٧³؟',
    correctAnswer: '٣٤٣',
    correctAnswerNumeric: 343,
    hintText: '٧ × ٧ = ٤٩، بعدين × ٧',
    explanation: '٧³ = ٧ × ٧ × ٧ = ٣٤٣ سم³',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: العوامل المشتركة والمضاعفات (GCD & LCM)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك ٣٦ تفاحة و ٢٤ برتقالة وعايز توزعهم في أكياس متساوية بأكبر عدد ممكن.',
    questionText: 'كام كيس تقدر تعمل (أكبر عدد)؟ يعني العامل المشترك الأكبر لـ ٣٦ و ٢٤؟',
    hintText: 'دور على أكبر عدد يقسم ٣٦ و ٢٤ من غير باقي',
    explanation: 'عوامل ٣٦: ١، ٢، ٣، ٤، ٦، ٩، ١٢، ١٨، ٣٦ | عوامل ٢٤: ١، ٢، ٣، ٤، ٦، ٨، ١٢، ٢٤ | العامل المشترك الأكبر = ١٢',
    options: [
      { optionText: '١٢', isCorrect: true },
      { optionText: '٦', isCorrect: false },
      { optionText: '٨', isCorrect: false },
      { optionText: '٤', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'أحمد بيروح الجيم كل ٦ أيام ومحمد كل ٨ أيام. النهارده راحوا مع بعض.',
    questionText: 'بعد كام يوم هيروحوا مع بعض تاني؟ (المضاعف المشترك الأصغر لـ ٦ و ٨)',
    hintText: 'دور على أصغر عدد يقبل القسمة على ٦ و ٨',
    explanation: 'مضاعفات ٦: ٦، ١٢، ١٨، ٢٤... | مضاعفات ٨: ٨، ١٦، ٢٤... | المضاعف المشترك الأصغر = ٢٤ يوم',
    options: [
      { optionText: '٢٤ يوم', isCorrect: true },
      { optionText: '١٢ يوم', isCorrect: false },
      { optionText: '٤٨ يوم', isCorrect: false },
      { optionText: '١٦ يوم', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك ٤٨ قلم أحمر و ٦٠ قلم أزرق وعايز توزعهم على مجموعات متساوية.',
    questionText: 'أكبر عدد مجموعات تقدر تعمله؟ (العامل المشترك الأكبر لـ ٤٨ و ٦٠)',
    hintText: 'العامل المشترك الأكبر هو أكبر عدد يقسم الاتنين',
    explanation: '٤٨ = ٢⁴ × ٣ و ٦٠ = ٢² × ٣ × ٥ | العامل المشترك الأكبر = ٢² × ٣ = ١٢',
    options: [
      { optionText: '١٢', isCorrect: true },
      { optionText: '٦', isCorrect: false },
      { optionText: '٢٤', isCorrect: false },
      { optionText: '٨', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'إشارة مرور بتبقى خضرا كل ٤ دقايق والتانية كل ٦ دقايق. الاتنين بقوا أخضر دلوقتي.',
    questionText: 'بعد كام دقيقة هيبقوا أخضر مع بعض تاني؟',
    hintText: 'المضاعف المشترك الأصغر لـ ٤ و ٦',
    explanation: 'مضاعفات ٤: ٤، ٨، ١٢ | مضاعفات ٦: ٦، ١٢ | م.م.أ = ١٢ دقيقة',
    options: [
      { optionText: '١٢ دقيقة', isCorrect: true },
      { optionText: '١٠ دقايق', isCorrect: false },
      { optionText: '٢٤ دقيقة', isCorrect: false },
      { optionText: '٨ دقايق', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'في المصنع، عايزين يعلبوا ٧٢ شوكولاتة و ٩٠ بونبون في علب متساوية.',
    questionText: 'أكبر عدد علب يقدروا يعملوه؟ (ع.م.أ لـ ٧٢ و ٩٠)',
    hintText: 'دور على أكبر عدد يقسم ٧٢ و ٩٠',
    explanation: '٧٢ = ٢³ × ٣² و ٩٠ = ٢ × ٣² × ٥ | ع.م.أ = ٢ × ٣² = ١٨',
    options: [
      { optionText: '١٨', isCorrect: true },
      { optionText: '٩', isCorrect: false },
      { optionText: '٣٦', isCorrect: false },
      { optionText: '٦', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'حافلة رقم ١ بتيجي كل ١٥ دقيقة وحافلة رقم ٢ كل ٢٠ دقيقة. الاتنين وصلوا المحطة دلوقتي.',
    questionText: 'بعد كام دقيقة هيوصلوا المحطة مع بعض تاني؟',
    hintText: 'المضاعف المشترك الأصغر لـ ١٥ و ٢٠',
    explanation: '١٥ = ٣ × ٥ و ٢٠ = ٢² × ٥ | م.م.أ = ٢² × ٣ × ٥ = ٦٠ دقيقة',
    options: [
      { optionText: '٦٠ دقيقة', isCorrect: true },
      { optionText: '٣٠ دقيقة', isCorrect: false },
      { optionText: '٤٠ دقيقة', isCorrect: false },
      { optionText: '٤٥ دقيقة', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'عندك ٤٢ وردة حمرا و ٥٦ وردة بيضا وعايز تعمل بوكيهات متساوية.',
    questionText: 'أكبر عدد بوكيهات تقدر تعمله؟ (ع.م.أ لـ ٤٢ و ٥٦)',
    hintText: 'العامل المشترك الأكبر',
    explanation: '٤٢ = ٢ × ٣ × ٧ و ٥٦ = ٢³ × ٧ | ع.م.أ = ٢ × ٧ = ١٤',
    options: [
      { optionText: '١٤', isCorrect: true },
      { optionText: '٧', isCorrect: false },
      { optionText: '٢٨', isCorrect: false },
      { optionText: '٢١', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'فاطمة بتسقي الزرع كل ١٢ يوم وبتسمّده كل ١٨ يوم. النهارده عملت الاتنين.',
    questionText: 'بعد كام يوم هتعمل الاتنين مع بعض تاني؟',
    hintText: 'م.م.أ لـ ١٢ و ١٨',
    explanation: '١٢ = ٢² × ٣ و ١٨ = ٢ × ٣² | م.م.أ = ٢² × ٣² = ٣٦ يوم',
    options: [
      { optionText: '٣٦ يوم', isCorrect: true },
      { optionText: '٢٤ يوم', isCorrect: false },
      { optionText: '٧٢ يوم', isCorrect: false },
      { optionText: '١٨ يوم', isCorrect: false },
    ],
  },

  // --- Topic 2, Open-ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'في حفلة المدرسة، عندك ٨٠ ساندوتش و ١٢٠ عصير وعايز توزعهم بالتساوي على الطلبة.',
    questionText: 'أكبر عدد طلبة تقدر توزع عليهم بالتساوي (ع.م.أ لـ ٨٠ و ١٢٠)؟',
    correctAnswer: '٤٠',
    correctAnswerNumeric: 40,
    hintText: '٨٠ = ٢⁴ × ٥ و ١٢٠ = ٢³ × ٣ × ٥',
    explanation: 'ع.م.أ = ٢³ × ٥ = ٤٠ طالب',
  },

  // --- Topic 2, Open-ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'جرس المدرسة بيرن كل ٤٥ دقيقة وجرس المصنع كل ٦٠ دقيقة. رنوا مع بعض الصبح.',
    questionText: 'بعد كام دقيقة هيرنوا مع بعض تاني؟ (م.م.أ لـ ٤٥ و ٦٠)',
    correctAnswer: '١٨٠',
    correctAnswerNumeric: 180,
    hintText: '٤٥ = ٣² × ٥ و ٦٠ = ٢² × ٣ × ٥',
    explanation: 'م.م.أ = ٢² × ٣² × ٥ = ١٨٠ دقيقة (٣ ساعات)',
  },

  // --- Topic 2, Open-ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'مصنع بسكويت عنده م٦ قطعة شوكولاتة و ١٤٤ قطعة فانيليا وعايز يعلبهم في علب متساوية.',
    questionText: 'أكبر عدد علب (ع.م.أ لـ ٩٦ و ١٤٤)؟',
    correctAnswer: '٤٨',
    correctAnswerNumeric: 48,
    hintText: '٩٦ = ٢⁵ × ٣ و ١٤٤ = ٢⁴ × ٣²',
    explanation: 'ع.م.أ = ٢⁴ × ٣ = ٤٨ علبة',
  },

  // --- Topic 2, Open-ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'قطر بيعدي كل ١٦ دقيقة وأتوبيس كل ٢٤ دقيقة. عدوا مع بعض دلوقتي.',
    questionText: 'بعد كام دقيقة هيعدوا مع بعض تاني؟ (م.م.أ لـ ١٦ و ٢٤)',
    correctAnswer: '٤٨',
    correctAnswerNumeric: 48,
    hintText: '١٦ = ٢⁴ و ٢٤ = ٢³ × ٣',
    explanation: 'م.م.أ = ٢⁴ × ٣ = ٤٨ دقيقة',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: الأعداد السالبة (Negative Numbers)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'درجة الحرارة في موسكو كانت -٨ درجات وارتفعت ١٢ درجة.',
    questionText: 'درجة الحرارة دلوقتي كام؟',
    hintText: 'اجمع -٨ + ١٢',
    explanation: '-٨ + ١٢ = ٤ درجات',
    options: [
      { optionText: '٤ درجات', isCorrect: true },
      { optionText: '-٤ درجات', isCorrect: false },
      { optionText: '٢٠ درجة', isCorrect: false },
      { optionText: '-٢٠ درجة', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'أحمد كان في الدور الثالث تحت الأرض (-٣) وطلع ٧ أدوار بالأسانسير.',
    questionText: 'هو في أنهي دور دلوقتي؟',
    hintText: '-٣ + ٧ = ؟',
    explanation: '-٣ + ٧ = ٤ | أحمد في الدور الرابع فوق الأرض',
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
    realLifeContext: 'رصيد كريم في البنك كان ٥٠ جنيه وسحب ٨٠ جنيه.',
    questionText: 'رصيده بقى كام؟',
    hintText: '٥٠ - ٨٠ = ؟',
    explanation: '٥٠ - ٨٠ = -٣٠ جنيه (يعني عليه دين ٣٠ جنيه)',
    options: [
      { optionText: '-٣٠ جنيه', isCorrect: true },
      { optionText: '٣٠ جنيه', isCorrect: false },
      { optionText: '-١٣٠ جنيه', isCorrect: false },
      { optionText: '١٣٠ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'الحرارة كانت -٥ الصبح ونزلت ٧ درجات بالليل.',
    questionText: 'درجة الحرارة بالليل كام؟',
    hintText: '-٥ - ٧ = ؟',
    explanation: '-٥ - ٧ = -١٢ درجة',
    options: [
      { optionText: '-١٢ درجة', isCorrect: true },
      { optionText: '-٢ درجة', isCorrect: false },
      { optionText: '٢ درجة', isCorrect: false },
      { optionText: '١٢ درجة', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'غواصة كانت على عمق -٢٠٠ متر وطلعت ٧٥ متر.',
    questionText: 'على أنهي عمق هي دلوقتي؟',
    hintText: '-٢٠٠ + ٧٥ = ؟',
    explanation: '-٢٠٠ + ٧٥ = -١٢٥ متر',
    options: [
      { optionText: '-١٢٥ متر', isCorrect: true },
      { optionText: '-٢٧٥ متر', isCorrect: false },
      { optionText: '١٢٥ متر', isCorrect: false },
      { optionText: '-١٥٠ متر', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'محتاج تحسب (-٣) × (-٥) في امتحان الرياضيات.',
    questionText: 'كام يساوي (-٣) × (-٥)؟',
    hintText: 'سالب × سالب = ؟',
    explanation: 'سالب × سالب = موجب | (-٣) × (-٥) = +١٥',
    options: [
      { optionText: '١٥', isCorrect: true },
      { optionText: '-١٥', isCorrect: false },
      { optionText: '٨', isCorrect: false },
      { optionText: '-٨', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'رتب درجات الحرارة دي من الأبرد للأسخن: -٣، ٥، -٧، ٢، -١.',
    questionText: 'أنهي ترتيب صح من الأبرد للأسخن؟',
    hintText: 'الأبرد هو الأصغر (أكبر سالب)',
    explanation: '-٧ < -٣ < -١ < ٢ < ٥',
    options: [
      { optionText: '-٧، -٣، -١، ٢، ٥', isCorrect: true },
      { optionText: '-١، -٣، -٧، ٢، ٥', isCorrect: false },
      { optionText: '٥، ٢، -١، -٣، -٧', isCorrect: false },
      { optionText: '-٣، -٧، -١، ٢، ٥', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'نورا عليها دين ١٥ جنيه (-١٥) واتديّنت تاني ٢٠ جنيه.',
    questionText: 'إجمالي الدين بتاعها كام؟',
    hintText: '-١٥ + (-٢٠) = ؟',
    explanation: '-١٥ + (-٢٠) = -٣٥ جنيه (عليها ٣٥ جنيه)',
    options: [
      { optionText: '-٣٥ جنيه', isCorrect: true },
      { optionText: '-٥ جنيه', isCorrect: false },
      { optionText: '٣٥ جنيه', isCorrect: false },
      { optionText: '٥ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 3, Open-ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'درجة الحرارة في القطب الجنوبي كانت -٢٥ وارتفعت ١٨ درجة.',
    questionText: 'الحرارة بقت كام؟ (اكتب الرقم بس، لو سالب حط - قبله)',
    correctAnswer: '-٧',
    correctAnswerNumeric: -7,
    hintText: '-٢٥ + ١٨ = ؟',
    explanation: '-٢٥ + ١٨ = -٧ درجات',
  },

  // --- Topic 3, Open-ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'سمكة كانت على عمق -٤٠ متر ونزلت كمان ٣٥ متر.',
    questionText: 'على أنهي عمق السمكة دلوقتي؟',
    correctAnswer: '-٧٥',
    correctAnswerNumeric: -75,
    hintText: '-٤٠ - ٣٥ = ؟',
    explanation: '-٤٠ - ٣٥ = -٧٥ متر',
  },

  // --- Topic 3, Open-ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'في لعبة، خسرت ٨ نقط (-٨) وبعدين كسبت ١٥ نقطة وبعدين خسرت ١٠.',
    questionText: 'مجموع نقطك كام؟',
    correctAnswer: '-٣',
    correctAnswerNumeric: -3,
    hintText: '-٨ + ١٥ - ١٠ = ؟',
    explanation: '-٨ + ١٥ = ٧ | ٧ - ١٠ = -٣ نقط',
  },

  // --- Topic 3, Open-ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'حساب أحمد فيه -٤٥ جنيه (دين) وحط فيه ١٢٠ جنيه.',
    questionText: 'رصيده بقى كام؟',
    correctAnswer: '٧٥',
    correctAnswerNumeric: 75,
    hintText: '-٤٥ + ١٢٠ = ؟',
    explanation: '-٤٥ + ١٢٠ = ٧٥ جنيه',
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
    questionText: 'احتمال يطلع رقم ٦ هو كام؟',
    hintText: 'الزهر فيه ٦ أوجه متساوية',
    explanation: 'احتمال = عدد النتائج المطلوبة ÷ إجمالي النتائج = ١ ÷ ٦ ≈ ٠٫١٦٦٧',
    options: [
      { optionText: '١/٦', isCorrect: true },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '١/٢', isCorrect: false },
      { optionText: '١/١٢', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في كيس فيه ٣ كور حمرا و ٥ كور زرقا و ٢ كور خضرا.',
    questionText: 'احتمال تسحب كورة زرقا كام؟',
    hintText: 'إجمالي الكور = ٣ + ٥ + ٢',
    explanation: 'إجمالي = ١٠ كور | احتمال أزرق = ٥/١٠ = ١/٢',
    options: [
      { optionText: '١/٢', isCorrect: true },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '٥/٨', isCorrect: false },
      { optionText: '٣/١٠', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رميت عملة معدنية (صورة أو كتابة) مرتين.',
    questionText: 'احتمال يطلع صورة في المرتين كام؟',
    hintText: 'احتمال صورة في مرة = ١/٢، اضربهم',
    explanation: 'احتمال صورة × صورة = ١/٢ × ١/٢ = ١/٤',
    options: [
      { optionText: '١/٤', isCorrect: true },
      { optionText: '١/٢', isCorrect: false },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '٣/٤', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رميت زهر (نرد) مرة واحدة.',
    questionText: 'احتمال يطلع رقم فردي (١ أو ٣ أو ٥) كام؟',
    hintText: 'كام رقم فردي من ١ لـ ٦؟',
    explanation: 'الأرقام الفردية: ١، ٣، ٥ = ٣ أرقام من ٦ | الاحتمال = ٣/٦ = ١/٢',
    options: [
      { optionText: '١/٢', isCorrect: true },
      { optionText: '١/٣', isCorrect: false },
      { optionText: '٢/٣', isCorrect: false },
      { optionText: '١/٦', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في كيس فيه ٨ كور: ٢ حمرا، ٣ صفرا، ٣ بيضا. هتسحب كورة بدون ما تبص.',
    questionText: 'احتمال ما تطلعش حمرا كام؟',
    hintText: 'احتمال مش حمرا = ١ - احتمال حمرا',
    explanation: 'احتمال حمرا = ٢/٨ = ١/٤ | احتمال مش حمرا = ١ - ١/٤ = ٣/٤',
    options: [
      { optionText: '٣/٤', isCorrect: true },
      { optionText: '١/٤', isCorrect: false },
      { optionText: '١/٢', isCorrect: false },
      { optionText: '٢/٣', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'رميت زهرين مع بعض. عايز تعرف احتمال مجموعهم ٧.',
    questionText: 'احتمال مجموع زهرين يساوي ٧ هو كام؟',
    hintText: 'إجمالي النتائج = ٣٦. كام طريقة تجيب ٧؟ (١+٦، ٢+٥، ٣+٤، ٤+٣، ٥+٢، ٦+١)',
    explanation: '٦ طرق من ٣٦ | الاحتمال = ٦/٣٦ = ١/٦',
    options: [
      { optionText: '١/٦', isCorrect: true },
      { optionText: '١/١٢', isCorrect: false },
      { optionText: '٧/٣٦', isCorrect: false },
      { optionText: '١/٩', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في صندوق فيه ١٢ كرة مرقمة من ١ لـ ١٢.',
    questionText: 'احتمال تسحب كرة رقمها يقبل القسمة على ٣ كام؟',
    hintText: 'الأرقام اللي بتقبل القسمة على ٣ من ١ لـ ١٢ هي: ٣، ٦، ٩، ١٢',
    explanation: '٤ أرقام من ١٢ بتقبل القسمة على ٣ | الاحتمال = ٤/١٢ = ١/٣',
    options: [
      { optionText: '١/٣', isCorrect: true },
      { optionText: '١/٤', isCorrect: false },
      { optionText: '٣/١٢', isCorrect: false },
      { optionText: '١/٦', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'في كيس فيه ٥ كور حمرا و ٣ كور خضرا. سحبت كورة ورجعتها وسحبت تاني.',
    questionText: 'احتمال الاتنين يطلعوا حمرا كام؟',
    hintText: 'احتمال حمرا = ٥/٨ في كل مرة (بنرجع الكورة)',
    explanation: '٥/٨ × ٥/٨ = ٢٥/٦٤',
    options: [
      { optionText: '٢٥/٦٤', isCorrect: true },
      { optionText: '٥/٨', isCorrect: false },
      { optionText: '١٠/١٦', isCorrect: false },
      { optionText: '٢٥/٣٢', isCorrect: false },
    ],
  },

  // --- Topic 4, Open-ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'في كيس فيه ٤ كور حمرا و ٦ كور زرقا. عايز تعرف احتمال سحب كورة حمرا.',
    questionText: 'لو رميت ٥٠ مرة، المتوقع كام مرة تطلع حمرا؟',
    correctAnswer: '٢٠',
    correctAnswerNumeric: 20,
    hintText: 'احتمال حمرا = ٤/١٠ = ٢/٥، اضرب في ٥٠',
    explanation: 'احتمال حمرا = ٤/١٠ = ٠٫٤ | المتوقع = ٠٫٤ × ٥٠ = ٢٠ مرة',
  },

  // --- Topic 4, Open-ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'رميت زهر (نرد) ١٨٠ مرة.',
    questionText: 'المتوقع كام مرة يطلع رقم ٣؟',
    correctAnswer: '٣٠',
    correctAnswerNumeric: 30,
    hintText: 'احتمال ٣ = ١/٦',
    explanation: 'احتمال ٣ = ١/٦ | المتوقع = ١٨٠ ÷ ٦ = ٣٠ مرة',
  },

  // --- Topic 4, Open-ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'في صندوق فيه ١٥ كرة: ٥ حمرا و ٤ زرقا و ٦ خضرا.',
    questionText: 'لو سحبت ٩٠ مرة (مع الإرجاع)، المتوقع كام مرة تطلع خضرا؟',
    correctAnswer: '٣٦',
    correctAnswerNumeric: 36,
    hintText: 'احتمال خضرا = ٦/١٥ = ٢/٥',
    explanation: 'احتمال خضرا = ٦/١٥ = ٢/٥ = ٠٫٤ | المتوقع = ٠٫٤ × ٩٠ = ٣٦ مرة',
  },

  // --- Topic 4, Open-ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'رميت عملة ٢٠٠ مرة.',
    questionText: 'المتوقع كام مرة تطلع صورة؟',
    correctAnswer: '١٠٠',
    correctAnswerNumeric: 100,
    hintText: 'احتمال صورة = ١/٢',
    explanation: 'احتمال صورة = ١/٢ | المتوقع = ٢٠٠ × ١/٢ = ١٠٠ مرة',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: الحجم (Volume)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك حوض سمك طوله ٦٠ سم وعرضه ٣٠ سم وارتفاعه ٤٠ سم.',
    questionText: 'حجم الحوض كام سم³؟',
    hintText: 'الحجم = الطول × العرض × الارتفاع',
    explanation: '٦٠ × ٣٠ × ٤٠ = ٧٢٠٠٠ سم³',
    options: [
      { optionText: '٧٢٠٠٠ سم³', isCorrect: true },
      { optionText: '٣٦٠٠٠ سم³', isCorrect: false },
      { optionText: '١٣٠ سم³', isCorrect: false },
      { optionText: '٧٢٠٠ سم³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عايز تغلف علبة هدية على شكل مكعب طول ضلعه ١٥ سم.',
    questionText: 'حجم العلبة كام سم³؟',
    hintText: 'حجم المكعب = الضلع × الضلع × الضلع',
    explanation: '١٥³ = ١٥ × ١٥ × ١٥ = ٣٣٧٥ سم³',
    options: [
      { optionText: '٣٣٧٥ سم³', isCorrect: true },
      { optionText: '٢٢٥٠ سم³', isCorrect: false },
      { optionText: '٤٥ سم³', isCorrect: false },
      { optionText: '٢٢٥ سم³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك علبة عصير طولها ٢٠ سم وعرضها ١٠ سم وارتفاعها ٣٠ سم.',
    questionText: 'كام لتر عصير تقدر تملا فيها العلبة؟ (١ لتر = ١٠٠٠ سم³)',
    hintText: 'احسب الحجم بالسم³ واقسم على ١٠٠٠',
    explanation: '٢٠ × ١٠ × ٣٠ = ٦٠٠٠ سم³ = ٦ لتر',
    options: [
      { optionText: '٦ لتر', isCorrect: true },
      { optionText: '٦٠ لتر', isCorrect: false },
      { optionText: '٣ لتر', isCorrect: false },
      { optionText: '٠٫٦ لتر', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'حمام سباحة طوله ٢٥ متر وعرضه ١٠ متر وعمقه ٢ متر.',
    questionText: 'كام متر مكعب مية محتاجين نملاه؟',
    hintText: 'الحجم = الطول × العرض × العمق',
    explanation: '٢٥ × ١٠ × ٢ = ٥٠٠ متر مكعب',
    options: [
      { optionText: '٥٠٠ م³', isCorrect: true },
      { optionText: '٢٥٠ م³', isCorrect: false },
      { optionText: '٣٧ م³', isCorrect: false },
      { optionText: '١٠٠٠ م³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'صندوق شحن أبعاده ٨٠ سم × ٥٠ سم × ٤٠ سم.',
    questionText: 'حجم الصندوق كام سم³؟',
    hintText: 'اضرب الطول × العرض × الارتفاع',
    explanation: '٨٠ × ٥٠ × ٤٠ = ١٦٠٠٠٠ سم³',
    options: [
      { optionText: '١٦٠٠٠٠ سم³', isCorrect: true },
      { optionText: '١٧٠ سم³', isCorrect: false },
      { optionText: '٤٠٠٠ سم³', isCorrect: false },
      { optionText: '١٦٠٠٠ سم³', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'محتاج تعرف كام مكعب صغير (ضلعه ٥ سم) يملا صندوق ٢٠ × ١٥ × ١٠ سم.',
    questionText: 'كام مكعب صغير هيملا الصندوق؟',
    hintText: 'حجم الصندوق ÷ حجم المكعب الصغير',
    explanation: 'حجم الصندوق = ٢٠ × ١٥ × ١٠ = ٣٠٠٠ سم³ | حجم المكعب = ٥³ = ١٢٥ سم³ | العدد = ٣٠٠٠ ÷ ١٢٥ = ٢٤',
    options: [
      { optionText: '٢٤ مكعب', isCorrect: true },
      { optionText: '١٢ مكعب', isCorrect: false },
      { optionText: '٣٠ مكعب', isCorrect: false },
      { optionText: '٤٨ مكعب', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'ثلاجة من جوه أبعادها ٥٠ سم × ٥٠ سم × ١٠٠ سم.',
    questionText: 'حجم الثلاجة من جوه كام لتر؟ (١ لتر = ١٠٠٠ سم³)',
    hintText: 'احسب الحجم بالسم³ الأول',
    explanation: '٥٠ × ٥٠ × ١٠٠ = ٢٥٠٠٠٠ سم³ = ٢٥٠ لتر',
    options: [
      { optionText: '٢٥٠ لتر', isCorrect: true },
      { optionText: '٢٥ لتر', isCorrect: false },
      { optionText: '٢٥٠٠ لتر', isCorrect: false },
      { optionText: '٢٠٠ لتر', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'عندك صندوقين: الأول ١٠ × ١٠ × ١٠ سم والتاني ٥ × ٢٠ × ١٠ سم.',
    questionText: 'حجم الصندوق الأول بيساوي كام مرة حجم التاني؟',
    hintText: 'احسب حجم كل واحد وقارن',
    explanation: 'الأول = ١٠٠٠ سم³ | التاني = ١٠٠٠ سم³ | متساويين! مرة واحدة',
    options: [
      { optionText: 'متساويين (مرة واحدة)', isCorrect: true },
      { optionText: 'الأول ضعف التاني', isCorrect: false },
      { optionText: 'التاني ضعف الأول', isCorrect: false },
      { optionText: 'الأول ٣ أضعاف التاني', isCorrect: false },
    ],
  },

  // --- Topic 5, Open-ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'عايز تملا حوض سمك أبعاده ٨٠ سم × ٤٠ سم × ٥٠ سم.',
    questionText: 'حجم الحوض كام لتر؟ (١ لتر = ١٠٠٠ سم³)',
    correctAnswer: '١٦٠',
    correctAnswerNumeric: 160,
    hintText: '٨٠ × ٤٠ × ٥٠ = ؟ بعدين اقسم على ١٠٠٠',
    explanation: '٨٠ × ٤٠ × ٥٠ = ١٦٠٠٠٠ سم³ = ١٦٠ لتر',
  },

  // --- Topic 5, Open-ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'غرفة تخزين طولها ٤ متر وعرضها ٣ متر وارتفاعها ٣ متر.',
    questionText: 'حجم الغرفة كام متر مكعب؟',
    correctAnswer: '٣٦',
    correctAnswerNumeric: 36,
    hintText: '٤ × ٣ × ٣',
    explanation: '٤ × ٣ × ٣ = ٣٦ متر مكعب',
  },

  // --- Topic 5, Open-ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'علبة حلويات مكعبة الشكل طول ضلعها ١٢ سم.',
    questionText: 'حجمها كام سم³؟',
    correctAnswer: '١٧٢٨',
    correctAnswerNumeric: 1728,
    hintText: '١٢ × ١٢ × ١٢',
    explanation: '١٢³ = ١٢ × ١٢ × ١٢ = ١٧٢٨ سم³',
  },

  // --- Topic 5, Open-ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'خزان مية أبعاده ٢ متر × ١ متر × ١٫٥ متر.',
    questionText: 'كام لتر مية يشيل الخزان؟ (١ م³ = ١٠٠٠ لتر)',
    correctAnswer: '٣٠٠٠',
    correctAnswerNumeric: 3000,
    hintText: '٢ × ١ × ١٫٥ = ٣ م³',
    explanation: '٢ × ١ × ١٫٥ = ٣ م³ = ٣٠٠٠ لتر',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: المعادلات المتقدمة (2-step Equations)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'اشتريت ٢ كيلو فاكهة ودفعت ٣ جنيه توصيل. الإجمالي ١٥ جنيه.',
    questionText: 'لو ٢س + ٣ = ١٥، كام سعر الكيلو (س)؟',
    hintText: 'اطرح ٣ من الطرفين الأول، بعدين اقسم على ٢',
    explanation: '٢س + ٣ = ١٥ | ٢س = ١٢ | س = ٦ جنيه',
    options: [
      { optionText: '٦', isCorrect: true },
      { optionText: '٩', isCorrect: false },
      { optionText: '٧', isCorrect: false },
      { optionText: '٤', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'عمر أحمد ضعف عمر أخوه الصغير زائد ٥ سنين. عمر أحمد ١٧ سنة.',
    questionText: 'لو ٢س + ٥ = ١٧، عمر أخوه (س) كام؟',
    hintText: 'اطرح ٥ من ١٧ الأول',
    explanation: '٢س + ٥ = ١٧ | ٢س = ١٢ | س = ٦ سنين',
    options: [
      { optionText: '٦ سنين', isCorrect: true },
      { optionText: '٧ سنين', isCorrect: false },
      { optionText: '٨ سنين', isCorrect: false },
      { optionText: '١١ سنة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'ماما قسمت الحلويات على ٣ أطفال بالتساوي وفضل ٤ قطع. كان عندها ٢٥ قطعة.',
    questionText: 'لو ٣س + ٤ = ٢٥، كام قطعة أخد كل طفل (س)؟',
    hintText: '٢٥ - ٤ = ٢١، بعدين اقسم على ٣',
    explanation: '٣س + ٤ = ٢٥ | ٣س = ٢١ | س = ٧ قطع',
    options: [
      { optionText: '٧', isCorrect: true },
      { optionText: '٩', isCorrect: false },
      { optionText: '٨', isCorrect: false },
      { optionText: '٥', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'في محل ألعاب، اشتريت ٤ ألعاب وخدت خصم ١٠ جنيه. دفعت ٥٠ جنيه.',
    questionText: 'لو ٤س - ١٠ = ٥٠، سعر اللعبة الواحدة (س) كام؟',
    hintText: 'اجمع ١٠ على الطرفين الأول',
    explanation: '٤س - ١٠ = ٥٠ | ٤س = ٦٠ | س = ١٥ جنيه',
    options: [
      { optionText: '١٥ جنيه', isCorrect: true },
      { optionText: '١٠ جنيه', isCorrect: false },
      { optionText: '٢٠ جنيه', isCorrect: false },
      { optionText: '١٢ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'فكّر في عدد، اضربه في ٥ واطرح ٨. النتيجة ٢٧.',
    questionText: 'لو ٥س - ٨ = ٢٧، العدد (س) كام؟',
    hintText: 'اجمع ٨ على ٢٧ واقسم على ٥',
    explanation: '٥س - ٨ = ٢٧ | ٥س = ٣٥ | س = ٧',
    options: [
      { optionText: '٧', isCorrect: true },
      { optionText: '٥', isCorrect: false },
      { optionText: '٨', isCorrect: false },
      { optionText: '٣', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'مجموع عمر سارة وأختها ٢٨ سنة. سارة أكبر من أختها بـ ٤ سنين.',
    questionText: 'لو عمر الأخت = س وعمر سارة = س + ٤، يبقى ٢س + ٤ = ٢٨. عمر الأخت كام؟',
    hintText: '٢٨ - ٤ = ٢٤، بعدين اقسم على ٢',
    explanation: '٢س + ٤ = ٢٨ | ٢س = ٢٤ | س = ١٢ سنة',
    options: [
      { optionText: '١٢ سنة', isCorrect: true },
      { optionText: '١٤ سنة', isCorrect: false },
      { optionText: '١٠ سنين', isCorrect: false },
      { optionText: '١٦ سنة', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 7 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'تاكسي أجرة الركوب ١٠ جنيه وكل كيلومتر بـ ٣ جنيه. دفعت ٣٧ جنيه.',
    questionText: 'لو ٣س + ١٠ = ٣٧، مشيت كام كيلومتر (س)؟',
    hintText: '٣٧ - ١٠ = ٢٧، اقسم على ٣',
    explanation: '٣س + ١٠ = ٣٧ | ٣س = ٢٧ | س = ٩ كم',
    options: [
      { optionText: '٩ كم', isCorrect: true },
      { optionText: '١٢ كم', isCorrect: false },
      { optionText: '٧ كم', isCorrect: false },
      { optionText: '٨ كم', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'اشتريت ٦ كراسات ودفعت ٥ جنيه تغليف. الإجمالي ٤٧ جنيه.',
    questionText: 'لو ٦س + ٥ = ٤٧، سعر الكراسة (س) كام؟',
    hintText: '٤٧ - ٥ = ٤٢، اقسم على ٦',
    explanation: '٦س + ٥ = ٤٧ | ٦س = ٤٢ | س = ٧ جنيه',
    options: [
      { optionText: '٧ جنيه', isCorrect: true },
      { optionText: '٨ جنيه', isCorrect: false },
      { optionText: '٦ جنيه', isCorrect: false },
      { optionText: '٥ جنيه', isCorrect: false },
    ],
  },

  // --- Topic 6, Open-ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'فكّر في عدد، اضربه في ٧ وزوّد ١١. النتيجة ٦٧.',
    questionText: 'لو ٧س + ١١ = ٦٧، العدد (س) كام؟',
    correctAnswer: '٨',
    correctAnswerNumeric: 8,
    hintText: '٦٧ - ١١ = ٥٦، اقسم على ٧',
    explanation: '٧س + ١١ = ٦٧ | ٧س = ٥٦ | س = ٨',
  },

  // --- Topic 6, Open-ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'اشتريت ٣ تيشيرتات وخصم ٢٠ جنيه. دفعت ١٠٠ جنيه.',
    questionText: 'لو ٣س - ٢٠ = ١٠٠، سعر التيشيرت (س) كام؟',
    correctAnswer: '٤٠',
    correctAnswerNumeric: 40,
    hintText: '١٠٠ + ٢٠ = ١٢٠، اقسم على ٣',
    explanation: '٣س - ٢٠ = ١٠٠ | ٣س = ١٢٠ | س = ٤٠ جنيه',
  },

  // --- Topic 6, Open-ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'مجموع عمر علي وأبوه ٥٠ سنة. أبوه أكبر منه بـ ٢٦ سنة.',
    questionText: 'عمر علي كام؟ (س + س + ٢٦ = ٥٠)',
    correctAnswer: '١٢',
    correctAnswerNumeric: 12,
    hintText: '٢س + ٢٦ = ٥٠، اطرح ٢٦ واقسم على ٢',
    explanation: '٢س + ٢٦ = ٥٠ | ٢س = ٢٤ | س = ١٢ سنة',
  },

  // --- Topic 6, Open-ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'عايز تحل المعادلة: ٨س - ١٤ = ٥٠.',
    questionText: 'قيمة س كام؟',
    correctAnswer: '٨',
    correctAnswerNumeric: 8,
    hintText: '٥٠ + ١٤ = ٦٤، اقسم على ٨',
    explanation: '٨س - ١٤ = ٥٠ | ٨س = ٦٤ | س = ٨',
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: ألغاز رياضية (Math Puzzles & Logic)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'في مسابقة ألغاز، المقدم عرض النمط ده: ٢، ٦، ١٨، ٥٤، ...',
    questionText: 'العدد اللي بعد ٥٤ في النمط ده كام؟',
    hintText: 'كل عدد بيتضرب في ٣',
    explanation: 'النمط: × ٣ | ٥٤ × ٣ = ١٦٢',
    options: [
      { optionText: '١٦٢', isCorrect: true },
      { optionText: '١٠٨', isCorrect: false },
      { optionText: '٧٢', isCorrect: false },
      { optionText: '١٥٠', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'صاحبك قالك لغز: مجموع ٣ أعداد متتالية = ٧٢.',
    questionText: 'العدد الأوسط كام؟',
    hintText: 'لو الأعداد متتالية، المجموع = ٣ × العدد الأوسط',
    explanation: '٣ أعداد متتالية مجموعهم ٧٢ | العدد الأوسط = ٧٢ ÷ ٣ = ٢٤ | الأعداد: ٢٣، ٢٤، ٢٥',
    options: [
      { optionText: '٢٤', isCorrect: true },
      { optionText: '٢٣', isCorrect: false },
      { optionText: '٢٥', isCorrect: false },
      { optionText: '٣٦', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'النمط ده: ١، ١، ٢، ٣، ٥، ٨، ١٣، ...',
    questionText: 'العدد اللي بعد ١٣ كام؟ (فيبوناتشي)',
    hintText: 'كل عدد = مجموع العددين اللي قبله',
    explanation: '٨ + ١٣ = ٢١',
    options: [
      { optionText: '٢١', isCorrect: true },
      { optionText: '١٨', isCorrect: false },
      { optionText: '٢٠', isCorrect: false },
      { optionText: '٢٦', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'لغز: عدد لو ضربته في نفسه يبقى ١٩٦.',
    questionText: 'العدد ده كام؟',
    hintText: 'دور على عدد تربيعه = ١٩٦',
    explanation: '١٤ × ١٤ = ١٩٦',
    options: [
      { optionText: '١٤', isCorrect: true },
      { optionText: '١٣', isCorrect: false },
      { optionText: '١٥', isCorrect: false },
      { optionText: '١٢', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'النمط ده: ١٠٠٠، ٥٠٠، ٢٥٠، ١٢٥، ...',
    questionText: 'العدد اللي بعد ١٢٥ كام؟',
    hintText: 'كل عدد بيتقسم على ٢',
    explanation: 'النمط: ÷ ٢ | ١٢٥ ÷ ٢ = ٦٢٫٥',
    options: [
      { optionText: '٦٢٫٥', isCorrect: true },
      { optionText: '٦٥', isCorrect: false },
      { optionText: '٦٠', isCorrect: false },
      { optionText: '٧٥', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'لغز: مجموع عددين = ٥٠ والفرق بينهم = ١٤.',
    questionText: 'العدد الأكبر كام؟',
    hintText: 'العدد الأكبر = (المجموع + الفرق) ÷ ٢',
    explanation: 'الأكبر = (٥٠ + ١٤) ÷ ٢ = ٦٤ ÷ ٢ = ٣٢',
    options: [
      { optionText: '٣٢', isCorrect: true },
      { optionText: '٢٥', isCorrect: false },
      { optionText: '١٨', isCorrect: false },
      { optionText: '٣٦', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'النمط ده: ١، ٤، ٩، ١٦، ٢٥، ...',
    questionText: 'العدد اللي بعد ٢٥ كام؟',
    hintText: 'دي مربعات الأعداد: ١²، ٢²، ٣²، ٤²، ٥²...',
    explanation: 'الأعداد هي مربعات كاملة: ٦² = ٣٦',
    options: [
      { optionText: '٣٦', isCorrect: true },
      { optionText: '٣٠', isCorrect: false },
      { optionText: '٣٥', isCorrect: false },
      { optionText: '٤٩', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'لغز المثلث السحري: كل ضلع مجموعه ١٢. الأرقام ١-٦. في رأس المثلث ١ وعلى ضلعه ٥.',
    questionText: 'العدد الناقص على نفس الضلع (١ + ؟ + ٥ = ١٢) كام؟',
    hintText: '١٢ - ١ - ٥ = ؟',
    explanation: '١ + ؟ + ٥ = ١٢ | ؟ = ١٢ - ٦ = ٦',
    options: [
      { optionText: '٦', isCorrect: true },
      { optionText: '٤', isCorrect: false },
      { optionText: '٧', isCorrect: false },
      { optionText: '٣', isCorrect: false },
    ],
  },

  // --- Topic 7, Open-ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'النمط: ٣، ٩، ٢٧، ٨١، ...',
    questionText: 'العدد اللي بعد ٨١ كام؟',
    correctAnswer: '٢٤٣',
    correctAnswerNumeric: 243,
    hintText: 'كل عدد × ٣',
    explanation: '٨١ × ٣ = ٢٤٣ (دي قوى العدد ٣)',
  },

  // --- Topic 7, Open-ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'لغز: مجموع ٥ أعداد متتالية = ١٤٥.',
    questionText: 'العدد الأوسط كام؟',
    correctAnswer: '٢٩',
    correctAnswerNumeric: 29,
    hintText: 'المجموع = ٥ × العدد الأوسط',
    explanation: '١٤٥ ÷ ٥ = ٢٩ | الأعداد: ٢٧، ٢٨، ٢٩، ٣٠، ٣١',
  },

  // --- Topic 7, Open-ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'لغز: مجموع عددين = ٨٤ والفرق بينهم = ٢٠.',
    questionText: 'العدد الأصغر كام؟',
    correctAnswer: '٣٢',
    correctAnswerNumeric: 32,
    hintText: 'الأصغر = (المجموع - الفرق) ÷ ٢',
    explanation: '(٨٤ - ٢٠) ÷ ٢ = ٦٤ ÷ ٢ = ٣٢',
  },

  // --- Topic 7, Open-ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'لغز: عدد لو ضربته في نفسه ٣ مرات (تكعيب) يبقى ٥١٢.',
    questionText: 'العدد ده كام؟',
    correctAnswer: '٨',
    correctAnswerNumeric: 8,
    hintText: 'جرب ٧³ و ٨³ و ٩³',
    explanation: '٨ × ٨ × ٨ = ٥١٢ | يبقى العدد = ٨',
  },
];
