import { getWeeklyRankings } from '@/lib/queries/leaderboard';
import { Footer } from '@/components/footer';
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

function rankBadge(rank: number): string {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return String(rank);
}

export default async function LeaderboardPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const levelRankings = await getWeeklyRankings();

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2"><span>📊</span> {d.leaderboard.title}</h1>
        <p className="text-slate-400 mt-2">{d.leaderboard.subtitle}</p>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">
        {levelRankings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">{d.leaderboard.empty}</p>
            <p className="text-slate-500 mt-2">{d.leaderboard.emptyHint}</p>
          </div>
        ) : (
          levelRankings.map((level) => (
            <div key={level.levelId} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-slate-100 px-5 py-3 border-b border-slate-200">
                <h2 className="font-bold text-slate-800 text-lg">
                  {level.levelEmoji} {locale === 'en' && level.levelNameEn ? level.levelNameEn : level.levelName}
                </h2>
              </div>
              <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs">
                    <th className={`py-2 px-4 ${locale === 'ar' ? 'text-right' : 'text-left'} font-medium`}>{d.leaderboard.rank}</th>
                    <th className={`py-2 px-4 ${locale === 'ar' ? 'text-right' : 'text-left'} font-medium`}>{d.leaderboard.name}</th>
                    <th className="py-2 px-4 text-center font-medium">{d.leaderboard.correct}</th>
                    <th className="py-2 px-4 text-center font-medium">{d.leaderboard.wrong}</th>
                    <th className="py-2 px-4 text-center font-medium">{d.leaderboard.hints}</th>
                    <th className="py-2 px-4 text-center font-medium">{d.leaderboard.days}</th>
                  </tr>
                </thead>
                <tbody>
                  {level.rankings.slice(0, 10).map((entry) => (
                    <tr
                      key={entry.userId}
                      className="border-t border-slate-50 hover:bg-slate-50 transition-colors"
                    >
                      <td className={`py-3 px-4 ${locale === 'ar' ? 'text-right' : 'text-left'} font-bold text-lg`}>
                        {rankBadge(entry.rank)}
                      </td>
                      <td className={`py-3 px-4 ${locale === 'ar' ? 'text-right' : 'text-left'} font-medium text-slate-800`}>
                        {entry.nickname}
                      </td>
                      <td className="py-3 px-4 text-center text-emerald-600 font-semibold">
                        {entry.correctCount}
                      </td>
                      <td className="py-3 px-4 text-center text-red-500">
                        {entry.wrongCount}
                      </td>
                      <td className="py-3 px-4 text-center text-amber-500">
                        {entry.hintCount}
                      </td>
                      <td className="py-3 px-4 text-center text-slate-600">
                        {entry.activeDays}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          ))
        )}
      </main>
      <Footer d={d} locale={locale} />
    </div>
  );
}
