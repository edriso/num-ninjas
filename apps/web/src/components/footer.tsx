import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { LanguageSwitcher } from "./language-switcher";

export function Footer({ d, locale }: { d: Dictionary; locale: string }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 px-6 mt-auto">
      <nav
        className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4 mb-4 text-sm"
        aria-label={locale === "ar" ? "تنقل الموقع" : "Site navigation"}
      >
        <Link
          href="/"
          className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
        >
          {d.nav.home}
        </Link>
        <Link
          href="/levels"
          className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
        >
          {d.nav.levels}
        </Link>
        <Link
          href="/leaderboard"
          className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
        >
          {d.nav.leaderboard}
        </Link>
        <Link
          href="/champions"
          className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
        >
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
  );
}
