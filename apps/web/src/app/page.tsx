import { Footer } from '@/components/footer';
import { getLocale } from '@/lib/locale';
import { getDictionary } from '@/lib/dictionaries';

const levelsAr = [
  { emoji: '⚪', name: 'الحزام الأبيض', desc: 'بناء الثقة: جمع وطرح وضرب وقسمة وأساسيات الأعداد' },
  { emoji: '🟡', name: 'الحزام الأصفر', desc: 'بناء المهارات: كسور وأعداد عشرية ومحيط ومساحة' },
  {
    emoji: '🟠',
    name: 'الحزام البرتقالي',
    desc: 'الإتقان: كسور مختلفة المقامات وترتيب العمليات والمال',
  },
  { emoji: '🟢', name: 'الحزام الأخضر', desc: 'الخبير: نسبة مئوية وجبر وسرعة ومسافة وزمن' },
  {
    emoji: '🥋',
    name: 'الحزام الأسود',
    desc: 'النينجا الأعلى: أسس وأعداد سالبة واحتمالات وألغاز رياضية',
  },
];

const levelsEn = [
  {
    emoji: '⚪',
    name: 'White Belt',
    desc: 'Confidence Builder: addition, subtraction, multiplication, division & number basics',
  },
  {
    emoji: '🟡',
    name: 'Yellow Belt',
    desc: 'Building Skills: fractions, decimals, perimeter & area',
  },
  {
    emoji: '🟠',
    name: 'Orange Belt',
    desc: 'Mastery: unlike fractions, order of operations & money math',
  },
  { emoji: '🟢', name: 'Green Belt', desc: 'Expert: percentages, algebra, speed, distance & time' },
  {
    emoji: '🥋',
    name: 'Black Belt',
    desc: 'Top Ninja: exponents, negative numbers, probability & math puzzles',
  },
];

export default async function Home() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const levels = locale === 'en' ? levelsEn : levelsAr;

  const steps = [
    { num: '1', title: d.landing.step1Title, desc: d.landing.step1Desc },
    { num: '2', title: d.landing.step2Title, desc: d.landing.step2Desc },
    { num: '3', title: d.landing.step3Title, desc: d.landing.step3Desc },
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 md:py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <span>🥷</span> {d.landing.title}
        </h1>
        <p className="text-xl md:text-2xl font-bold text-slate-200 mb-2">{d.landing.subtitle}</p>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-4">{d.landing.desc}</p>
        <p className="text-lg text-slate-300 max-w-xl mx-auto mb-10">{d.landing.subDesc}</p>
        <a
          href="https://t.me/NumNinjasBot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors"
        >
          {d.landing.cta}
        </a>
      </section>

      {/* How it works */}
      <main>
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            {d.landing.howItWorks}
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div
                  className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  aria-hidden="true"
                >
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
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 flex items-center justify-center gap-2">
            <span>🥷</span> {d.landing.ninjaLevels}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {levels.map((level, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm"
              >
                <span className="text-3xl" aria-hidden="true">
                  {level.emoji}
                </span>
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
          <h2 className="text-3xl font-bold mb-4">{d.landing.readyTitle}</h2>
          <p className="text-slate-300 mb-8">{d.landing.readyDesc}</p>
          <a
            href="https://t.me/NumNinjasBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors"
          >
            {d.landing.ctaBottom}
          </a>
        </section>
      </main>

      <Footer d={d} locale={locale} />
    </div>
  );
}
