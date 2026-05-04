'use client';

import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import { LanguageSwitcher } from '@/components/language-switcher';

function getClientLocale(): 'ar' | 'en' {
  if (typeof document === 'undefined') return 'ar';
  const match = document.cookie.match(/(?:^|;\s*)locale=(\w+)/);
  return match?.[1] === 'en' ? 'en' : 'ar';
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = getClientLocale();
  const d = getDictionary(locale);

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <span className="text-5xl mb-4">😵</span>
        <h2 className="text-xl font-bold text-red-600 mb-4">{d.error.title}</h2>
        <p className="text-gray-500 mb-6 text-center">{d.error.desc}</p>
        {process.env.NODE_ENV === 'development' && (
          <pre className="text-xs text-red-400 bg-red-50 rounded-lg p-4 mb-6 max-w-lg overflow-auto">
            {error.message}
          </pre>
        )}
        <button
          onClick={reset}
          className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {d.error.retry}
        </button>
      </div>
      <footer className="bg-slate-950 text-slate-400 py-8 px-6 mt-auto">
        <nav className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4 mb-4 text-sm">
          <Link href="/" className="hover:text-white transition-colors rounded px-1">
            {d.nav.home}
          </Link>
          <Link href="/levels" className="hover:text-white transition-colors rounded px-1">
            {d.nav.levels}
          </Link>
          <Link href="/leaderboard" className="hover:text-white transition-colors rounded px-1">
            {d.nav.leaderboard}
          </Link>
          <Link href="/champions" className="hover:text-white transition-colors rounded px-1">
            {d.nav.champions}
          </Link>
          <a
            href="https://t.me/NumNinjasBot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-emerald-500 transition-colors"
          >
            {d.nav.startOnTelegram}
          </a>
        </nav>
        <div className="flex items-center justify-center gap-3 mt-4">
          <p className="text-xs text-slate-500">{d.footer.copyright}</p>
          <LanguageSwitcher locale={locale} />
        </div>
      </footer>
    </div>
  );
}
