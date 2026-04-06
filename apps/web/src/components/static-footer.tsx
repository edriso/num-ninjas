import Link from "next/link";

/**
 * A minimal footer used in loading skeletons and error pages
 * where the locale/dictionary isn't available yet.
 */
export function StaticFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 px-6 mt-auto">
      <nav className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4 mb-4 text-sm">
        <Link href="/" className="hover:text-white transition-colors rounded px-1">
          الرئيسية
        </Link>
        <Link href="/levels" className="hover:text-white transition-colors rounded px-1">
          المستويات
        </Link>
        <Link href="/leaderboard" className="hover:text-white transition-colors rounded px-1">
          الترتيب
        </Link>
        <Link href="/champions" className="hover:text-white transition-colors rounded px-1">
          أبطال النينجا
        </Link>
        <a
          href="https://t.me/NumNinjasBot"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-emerald-500 transition-colors"
        >
          ابدأ على تليجرام
        </a>
      </nav>
      <div className="flex items-center justify-center gap-3 mt-4">
        <p className="text-xs text-slate-500">© نينجا الأرقام</p>
      </div>
    </footer>
  );
}
