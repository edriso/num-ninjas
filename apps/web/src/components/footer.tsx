import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 px-6 mt-auto">
      <nav
        className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 mb-4 text-sm"
        aria-label="تنقل الموقع"
      >
        <Link
          href="/"
          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
        >
          الرئيسية
        </Link>
        <Link
          href="/levels"
          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
        >
          المستويات
        </Link>
        <Link
          href="/leaderboard"
          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
        >
          الترتيب
        </Link>
        <Link
          href="/hall-of-fame"
          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
        >
          قاعة الشهرة
        </Link>
        <a
          href="https://t.me/NumNinjasBot"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
        >
          ابدأ على تليجرام
        </a>
      </nav>
      <p className="text-center text-xs text-slate-500">&copy; نينجا الأرقام</p>
    </footer>
  );
}
