import { getWeeklyRankings } from '@/lib/queries/leaderboard';
import { Footer } from '@/components/footer';
import { LeaderboardTabs } from '@/components/leaderboard-tabs';
import { getLocale } from '@/lib/locale';
import { getDictionary } from '@/lib/dictionaries';
import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const title = `${d.leaderboard.title} — ${d.siteName}`;
  return {
    title,
    description: d.leaderboard.subtitle,
    openGraph: { title },
  };
}

export default async function LeaderboardPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const levelRankings = await getWeeklyRankings();

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <span>📊</span> {d.leaderboard.title}
        </h1>
        <p className="text-slate-400 mt-2">{d.leaderboard.subtitle}</p>
      </header>

      <main className="max-w-3xl mx-auto w-full px-6 py-10">
        {levelRankings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">{d.leaderboard.empty}</p>
            <p className="text-slate-500 mt-2">{d.leaderboard.emptyHint}</p>
          </div>
        ) : (
          <LeaderboardTabs
            levelRankings={levelRankings}
            locale={locale}
            labels={{
              rank: d.leaderboard.rank,
              name: d.leaderboard.name,
              correct: d.leaderboard.correct,
              wrong: d.leaderboard.wrong,
              hints: d.leaderboard.hints,
              days: d.leaderboard.days,
            }}
          />
        )}
      </main>
      <Footer d={d} locale={locale} />
    </div>
  );
}
