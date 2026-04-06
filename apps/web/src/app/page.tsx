import { Footer } from '@/components/footer';

const levels = [
  { emoji: '🥋', name: 'الحزام الأبيض', desc: 'بناء الثقة — جمع وطرح وضرب وقسمة وأساسيات الأعداد' },
  { emoji: '🟡', name: 'الحزام الأصفر', desc: 'بناء المهارات — كسور وأعداد عشرية ومحيط ومساحة' },
  { emoji: '🟠', name: 'الحزام البرتقالي', desc: 'الإتقان — كسور مختلفة المقامات وترتيب العمليات والمال' },
  { emoji: '🟢', name: 'الحزام الأخضر', desc: 'الخبير — نسبة مئوية وجبر وسرعة ومسافة وزمن' },
  { emoji: '⚫', name: 'الحزام الأسود', desc: 'النينجا الأعلى — أسس وأعداد سالبة واحتمالات وألغاز رياضية' },
];

const steps = [
  { num: '١', title: 'ابدأ البوت', desc: 'افتح تليجرام وابدأ محادثة مع نينجا الأرقام' },
  { num: '٢', title: 'أجب على الاختبار', desc: '٣ أسئلة سريعة تحدد مستواك تلقائياً' },
  { num: '٣', title: 'حُلّ كل يوم', desc: 'كل يوم تصلك ٣ أسئلة مخصصة لنقاط ضعفك' },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4" dir="ltr">🥷 NumNinjas</h1>
        <p className="text-2xl font-bold text-slate-200 mb-2">نينجا الأرقام</p>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
          بوت تليجرام يُعلّم الأطفال الرياضيات بطريقة ممتعة
        </p>
        <p className="text-lg text-slate-300 max-w-xl mx-auto mb-10">
          ٣ أسئلة كل يوم، نظام أحزمة نينجا، نقاط وترتيب أسبوعي — وكل ذلك مجاناً!
        </p>
        <a
          href="https://t.me/NumNinjasBot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors"
        >
          هيا نبدأ على تليجرام ←
        </a>
      </section>

      {/* How it works */}
      <main>
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">كيف يعمل؟</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800"><span className="inline-block" dir="ltr">🥷</span> مستويات النينجا</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {levels.map((level, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm"
              >
                <span className="text-3xl" aria-hidden="true">{level.emoji}</span>
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
          <h2 className="text-3xl font-bold mb-4">هل أنت جاهز لرحلة النينجا؟</h2>
          <p className="text-slate-300 mb-8">هيا ابدأ الآن وتحدَّ نفسك كل يوم</p>
          <a
            href="https://t.me/NumNinjasBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors"
          >
            ابدأ على تليجرام ←
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
