import { prisma, getUserBadges, findUserByUsername } from '@numninjas/database';
import { Footer } from '@/components/footer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ username: string }>;
};

/**
 * Resolve a user by username or numeric ID (for backwards compatibility).
 */
async function resolveUser(usernameOrId: string) {
  // Try numeric ID first (backwards compat with old /profile/123 links)
  if (/^\d+$/.test(usernameOrId)) {
    return prisma.user.findUnique({
      where: { id: parseInt(usernameOrId) },
      include: { level: true },
    });
  }
  // Look up by username
  return findUserByUsername(usernameOrId);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const user = await resolveUser(username);

  if (!user) return { title: 'الملف الشخصي غير موجود' };

  return {
    title: `${user.nickname} — نينجا الأرقام`,
    description: `${user.level.iconEmoji} ${user.level.name} · ${user.totalPoints} نقطة · ${user.streakDays} يوم سلسلة`,
    openGraph: {
      title: `الملف الشخصي — ${user.nickname}`,
      description: `${user.level.iconEmoji} ${user.level.name} · ${user.totalPoints} نقطة`,
      images: [`/api/certificate/${user.username || user.id}`],
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { username } = await params;
  const user = await resolveUser(username);

  if (!user) notFound();

  const badges = await getUserBadges(user.id);

  const attempts = await prisma.questionAttempt.count({ where: { userId: user.id } });
  const correct = await prisma.questionAttempt.count({ where: { userId: user.id, isCorrect: true } });
  const accuracy = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  const levelEmoji = user.level.iconEmoji || '🥷';
  const profileSlug = user.username || String(user.id);

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <span className="text-5xl block mb-3">{levelEmoji}</span>
        <h1 className="text-3xl font-bold">{user.nickname}</h1>
        <p className="text-slate-400 mt-1">{user.level.name}</p>
        {user.username && (
          <p className="text-slate-500 text-sm mt-1">@{user.username}</p>
        )}
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* Share Button */}
        <div className="flex justify-center mb-6">
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(`https://numninjas.com/profile/${profileSlug}`)}&text=${encodeURIComponent(`${levelEmoji} ${user.nickname} — نينجا الأرقام\n${user.totalPoints} نقطة · ${user.streakDays} يوم سلسلة`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            📤 شارك الملف الشخصي
          </a>
        </div>

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
          <h2 className="text-2xl font-bold text-slate-800 mb-4" dir="ltr">🏅 الأوسمة</h2>
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
                      <p className="text-xs text-slate-500">{ub.metricSummary}</p>
                    )}
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
