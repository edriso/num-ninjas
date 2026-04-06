import { prisma, getUserBadges } from '@numninjas/database';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

const levelEmojis: Record<number, string> = {
  1: '🥋',
  2: '🟡',
  3: '🟠',
  4: '🟢',
  5: '⬛',
};

type Props = {
  params: Promise<{ userId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { userId } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
    include: { level: true },
  });

  if (!user) return { title: 'الملف الشخصي غير موجود' };

  return {
    title: `${user.nickname} — نينجا الأرقام`,
    description: `${user.level.iconEmoji} ${user.level.name} · ${user.totalPoints} نقطة · ${user.streakDays} يوم سلسلة`,
    openGraph: {
      title: `الملف الشخصي — ${user.nickname}`,
      description: `${user.level.iconEmoji} ${user.level.name} · ${user.totalPoints} نقطة`,
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { userId } = await params;
  const id = parseInt(userId);

  if (isNaN(id)) notFound();

  const user = await prisma.user.findUnique({
    where: { id },
    include: { level: true },
  });

  if (!user) notFound();

  const badges = await getUserBadges(id);

  // Compute accuracy
  const attempts = await prisma.questionAttempt.count({ where: { userId: id } });
  const correct = await prisma.questionAttempt.count({ where: { userId: id, isCorrect: true } });
  const accuracy = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  const levelEmoji = user.level.iconEmoji || levelEmojis[user.level.rankOrder] || '🥷';

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <span className="text-5xl block mb-3">{levelEmoji}</span>
        <h1 className="text-3xl font-bold">{user.nickname}</h1>
        <p className="text-slate-400 mt-1">{user.level.name}</p>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'النقاط', value: user.totalPoints, emoji: '⭐' },
            { label: 'سلسلة الأيام', value: `${user.streakDays} يوم`, emoji: '🔥' },
            { label: 'الدقة', value: `${accuracy}%`, emoji: '🎯' },
            { label: 'إجابات صحيحة', value: correct, emoji: '✅' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 text-center"
            >
              <span className="text-2xl block mb-1">{stat.emoji}</span>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🏅 الأوسمة</h2>
          {badges.length === 0 ? (
            <p className="text-slate-500 text-center py-8">لا توجد أوسمة بعد — استمر وستكسب!</p>
          ) : (
            <div className="space-y-3">
              {badges.map((ub) => (
                <div
                  key={ub.id}
                  className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4"
                >
                  <span className="text-2xl">{ub.badge.iconEmoji || '🏅'}</span>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800">{ub.badge.name}</p>
                    <p className="text-sm text-slate-500">{ub.periodLabel}</p>
                    {ub.metricSummary && (
                      <p className="text-xs text-slate-400">{ub.metricSummary}</p>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">
                    {new Date(ub.earnedAt).toLocaleDateString('ar-EG')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
