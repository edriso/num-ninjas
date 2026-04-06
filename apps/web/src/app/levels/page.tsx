import { prisma } from '@numninjas/database';
import { Footer } from '@/components/footer';
import { getLocale } from '@/lib/locale';
import { getDictionary } from '@/lib/dictionaries';
import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const title = `${d.levels.title} — ${d.siteName}`;
  return {
    title,
    description: d.levels.subtitle,
    openGraph: { title },
  };
}

const levelEmojis: Record<number, string> = {
  1: '⚪',
  2: '🟡',
  3: '🟠',
  4: '🟢',
  5: '🥋',
};

export default async function LevelsPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  const levels = await prisma.level.findMany({
    include: {
      topics: {
        orderBy: { orderInLevel: 'asc' },
      },
    },
    orderBy: { rankOrder: 'asc' },
  });

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2"><span>🥷</span> {d.levels.title}</h1>
        <p className="text-slate-400 mt-2">{d.levels.subtitle}</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <h2 className="text-lg font-bold">{locale === 'en' && level.nameEn ? level.nameEn : level.name}</h2>
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
                  <span className="text-slate-700">{locale === 'en' && topic.nameEn ? topic.nameEn : topic.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <Footer d={d} locale={locale} />
    </div>
  );
}
