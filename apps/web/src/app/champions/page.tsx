import { getHallOfFame } from '@/lib/queries/leaderboard';
import { Footer } from '@/components/footer';
import { getLocale } from '@/lib/locale';
import { getDictionary } from '@/lib/dictionaries';
import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const title = `${d.champions.title} — ${d.siteName}`;
  return {
    title,
    description: d.champions.subtitle,
    openGraph: { title },
  };
}

export default async function HallOfFamePage() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const { categories, recentBadges } = await getHallOfFame();

  const categoryCards = [
    {
      emoji: '🔥',
      title: d.champions.mostActive,
      desc: d.champions.mostActiveDesc,
      winner: categories.mostActive,
      stat: categories.mostActive
        ? d.champions.activeDays(categories.mostActive.activeDays)
        : null,
    },
    {
      emoji: '🎯',
      title: d.champions.sharpest,
      desc: d.champions.sharpestDesc,
      winner: categories.sharpest,
      stat: categories.sharpest
        ? d.champions.accuracy(Math.round(categories.sharpest.accuracy * 100))
        : null,
    },
    {
      emoji: '⚡',
      title: d.champions.independent,
      desc: d.champions.independentDesc,
      winner: categories.independent,
      stat: categories.independent
        ? d.champions.hintsOnly(categories.independent.hints)
        : null,
    },
  ];

  const dateLocale = locale === 'en' ? 'en-US' : 'ar-EG';

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2"><span>🏆</span> {d.champions.title}</h1>
        <p className="text-slate-400 mt-2">{d.champions.subtitle}</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Monthly Categories */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><span>⭐</span> {d.champions.monthlyTitle}</h2>
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
                  <p className="text-slate-500">{d.champions.noWinner}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Badges */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><span>🏅</span> {d.champions.recentBadges}</h2>
          {recentBadges.length === 0 ? (
            <p className="text-slate-500 text-center py-10">{d.champions.noBadges}</p>
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
                      {locale === 'en' && ub.badge.nameEn ? ub.badge.nameEn : ub.badge.name}
                      {' — '}
                      {locale === 'en' && ub.badge.descriptionEn ? ub.badge.descriptionEn : ub.periodLabel}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {new Date(ub.earnedAt).toLocaleDateString(dateLocale)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer d={d} locale={locale} />
    </div>
  );
}
