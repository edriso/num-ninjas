import { getHallOfFame } from '@/lib/queries/leaderboard';
import { Footer } from '@/components/footer';

export const revalidate = 86400;

export const metadata = {
  title: 'أبطال النينجا — نينجا الأرقام',
  description: 'أبطال الشهر وأحدث الأوسمة في نينجا الأرقام',
  openGraph: { title: 'أبطال النينجا — نينجا الأرقام' },
};

export default async function HallOfFamePage() {
  const { categories, recentBadges } = await getHallOfFame();

  const categoryCards = [
    {
      emoji: '🔥',
      title: 'الثابت',
      desc: 'أكثر لاعب نشاطاً',
      winner: categories.mostActive,
      stat: categories.mostActive
        ? `${categories.mostActive.activeDays} يوم نشط`
        : null,
    },
    {
      emoji: '🎯',
      title: 'العقل الحاد',
      desc: 'أعلى نسبة إجابات صحيحة',
      winner: categories.sharpest,
      stat: categories.sharpest
        ? `${Math.round(categories.sharpest.accuracy * 100)}% دقة`
        : null,
    },
    {
      emoji: '⚡',
      title: 'المستقل',
      desc: 'أقل استخدام للتلميحات',
      winner: categories.independent,
      stat: categories.independent
        ? `${categories.independent.hints} تلميح فقط`
        : null,
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2"><span>🏆</span> أبطال النينجا</h1>
        <p className="text-slate-400 mt-2">أبطال الشهر</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Monthly Categories */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><span>⭐</span> أبطال هذا الشهر</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryCards.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center"
              >
                <span className="text-4xl block mb-3">{cat.emoji}</span>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{cat.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{cat.desc}</p>
                {cat.winner ? (
                  <>
                    <p className="text-xl font-bold text-emerald-600">{cat.winner.nickname}</p>
                    <p className="text-sm text-slate-500 mt-1">{cat.stat}</p>
                  </>
                ) : (
                  <p className="text-slate-500">لا يوجد فائز بعد</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Badges */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><span>🏅</span> آخر الأوسمة</h2>
          {recentBadges.length === 0 ? (
            <p className="text-slate-500 text-center py-10">لا توجد أوسمة بعد</p>
          ) : (
            <div className="space-y-3">
              {recentBadges.map((ub) => (
                <div
                  key={ub.id}
                  className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4"
                >
                  <span className="text-2xl">{ub.badge.iconEmoji || '🏅'}</span>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800">{ub.user.nickname}</p>
                    <p className="text-sm text-slate-500">
                      {ub.badge.name} — {ub.periodLabel}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {new Date(ub.earnedAt).toLocaleDateString('ar-EG')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
