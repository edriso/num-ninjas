import { getWeeklyRankings } from '@/lib/queries/leaderboard';
import { Footer } from '@/components/footer';

export const revalidate = 3600;

export const metadata = {
  title: 'الترتيب الأسبوعي — نينجا الأرقام',
  description: 'ترتيب أبطال الأسبوع في نينجا الأرقام — لكل مستوى ترتيبه الخاص',
  openGraph: { title: 'الترتيب الأسبوعي — نينجا الأرقام' },
};

function rankBadge(rank: number): string {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return String(rank);
}

export default async function LeaderboardPage() {
  const levelRankings = await getWeeklyRankings();

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold" dir="ltr">📊 الترتيب الأسبوعي</h1>
        <p className="text-slate-400 mt-2">لكل مستوى ترتيبه الخاص — المنافسة عادلة!</p>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">
        {levelRankings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">لا يوجد ترتيب بعد لهذا الأسبوع</p>
            <p className="text-slate-500 mt-2">ابدأ بحل الأسئلة حتى تظهر هنا!</p>
          </div>
        ) : (
          levelRankings.map((level) => (
            <div key={level.levelId} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-slate-100 px-5 py-3 border-b border-slate-200">
                <h2 className="font-bold text-slate-800 text-lg">
                  {level.levelEmoji} {level.levelName}
                </h2>
              </div>
              <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs">
                    <th className="py-2 px-4 text-right font-medium">الترتيب</th>
                    <th className="py-2 px-4 text-right font-medium">الاسم</th>
                    <th className="py-2 px-4 text-center font-medium">✅ صحيحة</th>
                    <th className="py-2 px-4 text-center font-medium">❌ خطأ</th>
                    <th className="py-2 px-4 text-center font-medium">💡 تلميحات</th>
                    <th className="py-2 px-4 text-center font-medium">📅 أيام</th>
                  </tr>
                </thead>
                <tbody>
                  {level.rankings.slice(0, 10).map((entry) => (
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
            </div>
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}
