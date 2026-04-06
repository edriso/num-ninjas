import { getWeeklyRankings } from '@/lib/queries/leaderboard';

export const revalidate = 3600;

export const metadata = {
  title: 'الترتيب الأسبوعي — نينجا الأرقام',
  description: 'ترتيب أبطال الأسبوع في نينجا الأرقام',
  openGraph: { title: 'الترتيب الأسبوعي — نينجا الأرقام' },
};

function rankBadge(rank: number): string {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return String(rank);
}

export default async function LeaderboardPage() {
  const rankings = await getWeeklyRankings();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold">📊 الترتيب الأسبوعي</h1>
        <p className="text-slate-400 mt-2">اللاعبين الأكثر نشاط الأسبوع ده</p>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {rankings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">مفيش ترتيب لسه الأسبوع ده</p>
            <p className="text-slate-400 mt-2">ابدأ حل أسئلة عشان تظهر هنا!</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="py-3 px-4 text-right font-semibold">الترتيب</th>
                  <th className="py-3 px-4 text-right font-semibold">الاسم</th>
                  <th className="py-3 px-4 text-center font-semibold">✅ صح</th>
                  <th className="py-3 px-4 text-center font-semibold">❌ غلط</th>
                  <th className="py-3 px-4 text-center font-semibold">💡 تلميحات</th>
                  <th className="py-3 px-4 text-center font-semibold">📅 أيام</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((entry) => (
                  <tr
                    key={entry.userId}
                    className="border-t border-slate-50 hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-right font-bold text-lg">
                      {rankBadge(entry.rank)}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-slate-800">
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
        )}
      </main>
    </div>
  );
}
