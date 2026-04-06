import { prisma } from '@numninja/database';

export const revalidate = 86400;

const levelEmojis: Record<number, string> = {
  1: '🥋',
  2: '🟡',
  3: '🟠',
  4: '🟢',
  5: '⬛',
};

export default async function LevelsPage() {
  const levels = await prisma.level.findMany({
    include: {
      topics: {
        orderBy: { orderInLevel: 'asc' },
      },
    },
    orderBy: { rankOrder: 'asc' },
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold">🥷 مستويات النينجا</h1>
        <p className="text-slate-400 mt-2">٥ مستويات × ٧ موضوعات = ٣٥ موضوع</p>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {levels.map((level) => (
          <div
            key={level.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <div className="bg-slate-800 text-white px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">
                {level.iconEmoji || levelEmojis[level.rankOrder] || '🥷'}
              </span>
              <div>
                <h2 className="text-lg font-bold">{level.name}</h2>
                {level.description && (
                  <p className="text-slate-400 text-sm">{level.description}</p>
                )}
              </div>
            </div>
            <ul className="divide-y divide-slate-50">
              {level.topics.map((topic, i) => (
                <li key={topic.id} className="px-6 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{topic.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}
