import Link from 'next/link';

const levels = [
  { emoji: '🥋', name: 'الحزام الأبيض', desc: 'بناء الثقة — جمع وطرح وضرب وقسمة وأساسيات الأعداد' },
  { emoji: '🟡', name: 'الحزام الأصفر', desc: 'بناء المهارات — كسور وأعداد عشرية ومحيط ومساحة' },
  { emoji: '🟠', name: 'الحزام البرتقالي', desc: 'الإتقان — كسور مختلفة المقامات وترتيب العمليات والفلوس' },
  { emoji: '🟢', name: 'الحزام الأخضر', desc: 'خبير — نسبة مئوية وجبر وسرعة ومسافة وزمن' },
  { emoji: '⬛', name: 'الحزام الأسود', desc: 'أسطورة — أسس وأعداد سالبة واحتمالات وألغاز رياضية' },
];

const steps = [
  { num: '١', title: 'ابدأ البوت', desc: 'افتح تليجرام وابدأ محادثة مع نينجا الأرقام' },
  { num: '٢', title: 'اختار مستواك', desc: 'اختار الحزام المناسب ليك من ٥ مستويات' },
  { num: '٣', title: 'حل كل يوم', desc: 'كل يوم هتوصلك ٣ أسئلة — حلهم واكسب نقاط' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">🥷 نينجا الأرقام</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
          بوت تليجرام بيعلّم أطفال مصر الرياضيات بطريقة ممتعة
        </p>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
          ٣ أسئلة كل يوم، نظام أحزمة نينجا، نقاط وترتيب أسبوعي — كل ده ببلاش!
        </p>
        <a
          href="https://t.me/NumNinjasBot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors"
        >
          ابدأ دلوقتي على تليجرام ←
        </a>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">إزاي بيشتغل؟</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 px-6 bg-slate-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">🥷 مستويات النينجا</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {levels.map((level, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm"
            >
              <span className="text-3xl">{level.emoji}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{level.name}</h3>
                <p className="text-slate-600 text-sm">{level.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">جاهز تبدأ رحلة النينجا؟</h2>
        <p className="text-slate-400 mb-8">ابدأ دلوقتي واتحدى نفسك كل يوم</p>
        <a
          href="https://t.me/NumNinjasBot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors"
        >
          ابدأ على تليجرام ←
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 text-center py-6 text-sm">
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/levels" className="hover:text-slate-300 transition-colors">
            المستويات
          </Link>
          <Link href="/leaderboard" className="hover:text-slate-300 transition-colors">
            الترتيب
          </Link>
          <Link href="/hall-of-fame" className="hover:text-slate-300 transition-colors">
            قاعة الشهرة
          </Link>
        </div>
        <p>&copy; نينجا الأرقام</p>
      </footer>
    </div>
  );
}
