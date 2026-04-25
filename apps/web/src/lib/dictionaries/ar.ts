export const ar = {
  // Layout
  siteName: 'نينجا الأرقام',
  siteDesc: 'بوت تليجرام يُعلّم الأطفال الرياضيات بطريقة ممتعة',

  // Navigation
  nav: {
    home: 'الرئيسية',
    levels: 'المستويات',
    leaderboard: 'الترتيب',
    champions: 'أبطال النينجا',
    startOnTelegram: 'ابدأ على تليجرام',
  },

  // Landing page
  landing: {
    title: 'NumNinjas',
    subtitle: 'نينجا الأرقام',
    desc: 'بوت تليجرام يُعلّم الأطفال الرياضيات بطريقة ممتعة',
    subDesc:
      '3 أسئلة كل يوم، نظام أحزمة نينجا، نقاط وترتيب أسبوعي، وكل ذلك مجاناً!',
    cta: 'هيا نبدأ على تليجرام ←',
    howItWorks: 'كيف يعمل؟',
    step1Title: 'ابدأ البوت',
    step1Desc: 'افتح تليجرام وابدأ محادثة مع نينجا الأرقام',
    step2Title: 'أجب على الاختبار',
    step2Desc: '3 أسئلة سريعة تحدد مستواك تلقائياً',
    step3Title: 'حُلّ كل يوم',
    step3Desc: 'كل يوم 3 أسئلة جديدة، ابدأ وقتما تريد',
    ninjaLevels: 'مستويات النينجا',
    readyTitle: 'هل أنت جاهز لرحلة النينجا؟',
    readyDesc: 'هيا ابدأ الآن وتحدَّ نفسك كل يوم',
    ctaBottom: 'ابدأ على تليجرام ←',
  },

  // Leaderboard
  leaderboard: {
    title: 'الترتيب الأسبوعي',
    subtitle: 'لكل مستوى ترتيبه الخاص، المنافسة عادلة!',
    empty: 'لا يوجد ترتيب بعد لهذا الأسبوع',
    emptyHint: 'ابدأ بحل الأسئلة حتى تظهر هنا!',
    rank: 'الترتيب',
    name: 'الاسم',
    correct: 'صح ✅',
    wrong: 'خطأ ❌',
    hints: 'تلميحات 💡',
    days: 'أيام 📅',
  },

  // Champions
  champions: {
    title: 'أبطال النينجا',
    subtitle: 'أبطال الشهر',
    monthlyTitle: 'أبطال هذا الشهر',
    recentBadges: 'آخر الأوسمة',
    noWinner: 'لا يوجد فائز بعد',
    noBadges: 'لا توجد أوسمة بعد',
    mostActive: 'الثابت',
    mostActiveDesc: 'أكثر لاعب نشاطاً',
    sharpest: 'العقل الحاد',
    sharpestDesc: 'أعلى نسبة إجابات صحيحة',
    independent: 'المستقل',
    independentDesc: 'أقل استخدام للتلميحات',
    activeDays: (n: number) => `${n} يوم نشط`,
    accuracy: (n: number) => `${n}% دقة`,
    hintsOnly: (n: number) => `${n} تلميح فقط`,
  },

  // Profile
  profile: {
    notFound: 'الملف الشخصي غير موجود',
    points: 'النقاط',
    streak: 'سلسلة الأيام',
    accuracy: 'الدقة',
    correctAnswers: 'إجابات صحيحة',
    badges: 'الأوسمة',
    noBadges: 'لا توجد أوسمة بعد، استمر وستكسب!',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ',
    day: 'يوم',
  },

  // Levels
  levels: {
    title: 'مستويات النينجا',
    subtitle: '5 مستويات × 7 موضوعات = 35 موضوع',
  },

  // Not found
  notFound: {
    code: '404',
    title: 'الصفحة غير موجودة',
    desc: 'الصفحة التي تبحث عنها ليست هنا',
    back: 'العودة للصفحة الرئيسية',
  },

  // Error
  error: {
    title: 'حدثت مشكلة',
    desc: 'حاول مرة أخرى أو تواصل مع الدعم',
    retry: 'حاول مرة أخرى',
  },

  // Footer
  footer: {
    copyright: '© نينجا الأرقام',
  },
} as const;

export interface Dictionary {
  siteName: string;
  siteDesc: string;
  nav: {
    home: string;
    levels: string;
    leaderboard: string;
    champions: string;
    startOnTelegram: string;
  };
  landing: {
    title: string;
    subtitle: string;
    desc: string;
    subDesc: string;
    cta: string;
    howItWorks: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    ninjaLevels: string;
    readyTitle: string;
    readyDesc: string;
    ctaBottom: string;
  };
  leaderboard: {
    title: string;
    subtitle: string;
    empty: string;
    emptyHint: string;
    rank: string;
    name: string;
    correct: string;
    wrong: string;
    hints: string;
    days: string;
  };
  champions: {
    title: string;
    subtitle: string;
    monthlyTitle: string;
    recentBadges: string;
    noWinner: string;
    noBadges: string;
    mostActive: string;
    mostActiveDesc: string;
    sharpest: string;
    sharpestDesc: string;
    independent: string;
    independentDesc: string;
    activeDays: (n: number) => string;
    accuracy: (n: number) => string;
    hintsOnly: (n: number) => string;
  };
  profile: {
    notFound: string;
    points: string;
    streak: string;
    accuracy: string;
    correctAnswers: string;
    badges: string;
    noBadges: string;
    copyLink: string;
    copied: string;
    day: string;
  };
  levels: {
    title: string;
    subtitle: string;
  };
  notFound: {
    code: string;
    title: string;
    desc: string;
    back: string;
  };
  error: {
    title: string;
    desc: string;
    retry: string;
  };
  footer: {
    copyright: string;
  };
}
