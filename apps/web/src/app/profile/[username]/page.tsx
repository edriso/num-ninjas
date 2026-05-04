import { prisma, getUserBadges, findPublicProfile } from '@numninjas/database';
import { Footer } from '@/components/footer';
import { CopyLinkButton } from '@/components/copy-link-button';
import { notFound } from 'next/navigation';
import { getLocale } from '@/lib/locale';
import { getDictionary } from '@/lib/dictionaries';
import type { Metadata } from 'next';

export const revalidate = 60; // Cache profiles for 1 minute

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const locale = await getLocale();
  const d = getDictionary(locale);
  const user = await findPublicProfile(username);

  // Private or unknown profiles share the same metadata so existence isn't leaked.
  if (!user) return { title: d.profile.notFound };

  return {
    title: `${user.nickname} | ${d.siteName}`,
    description: `${user.level.iconEmoji} ${locale === 'en' && user.level.nameEn ? user.level.nameEn : user.level.name} · ${user.totalPoints} ${d.profile.points} · ${user.streakDays} ${d.profile.day}`,
    openGraph: {
      title: `${user.nickname} | ${d.siteName}`,
      description: `${user.level.iconEmoji} ${locale === 'en' && user.level.nameEn ? user.level.nameEn : user.level.name} · ${user.totalPoints} ${d.profile.points}`,
      images: [`/api/certificate/${user.username || user.id}`],
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { username } = await params;
  const locale = await getLocale();
  const d = getDictionary(locale);
  // findPublicProfile returns null for both "not found" and "private", so a
  // private profile is indistinguishable from a missing one to outsiders.
  const user = await findPublicProfile(username);

  if (!user) notFound();

  const badges = await getUserBadges(user.id);

  const [attempts, correct] = await Promise.all([
    prisma.questionAttempt.count({ where: { userId: user.id } }),
    prisma.questionAttempt.count({ where: { userId: user.id, isCorrect: true } }),
  ]);
  const accuracy = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  const levelEmoji = user.level.iconEmoji || '🥷';
  const levelName = locale === 'en' && user.level.nameEn ? user.level.nameEn : user.level.name;
  const formatDate = (date: Date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6 text-center">
        <span className="text-5xl block mb-3">{levelEmoji}</span>
        <h1 className="text-3xl font-bold">{user.nickname}</h1>
        <p className="text-slate-400 mt-1">{levelName}</p>
        {user.username && <p className="text-slate-500 text-sm mt-1">@{user.username}</p>}
        <div className="mt-4">
          <CopyLinkButton label={d.profile.copyLink} copiedLabel={d.profile.copied} />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: d.profile.points, value: user.totalPoints, emoji: '⭐' },
            { label: d.profile.streak, value: `${user.streakDays} ${d.profile.day}`, emoji: '🔥' },
            { label: d.profile.accuracy, value: `${accuracy}%`, emoji: '🎯' },
            { label: d.profile.correctAnswers, value: correct, emoji: '✅' },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span>🏅</span> {d.profile.badges}
          </h2>
          {badges.length === 0 ? (
            <p className="text-slate-500 text-center py-8">{d.profile.noBadges}</p>
          ) : (
            <div className="space-y-3">
              {badges.map((ub) => (
                <div
                  key={ub.id}
                  className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4"
                >
                  <span className="text-2xl">{ub.badge.iconEmoji || '🏅'}</span>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800">
                      {locale === 'en' && ub.badge.nameEn ? ub.badge.nameEn : ub.badge.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {locale === 'en'
                        ? ub.metricSummaryEn || ub.badge.descriptionEn || ub.metricSummary || ''
                        : ub.metricSummary || ub.periodLabel}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500">{formatDate(ub.earnedAt)}</span>
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
