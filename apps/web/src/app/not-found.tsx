import Link from 'next/link';
import { Footer } from '@/components/footer';
import { getLocale } from '@/lib/locale';
import { getDictionary } from '@/lib/dictionaries';

export default async function NotFound() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <div className="flex flex-col flex-1 bg-slate-50">
      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h1 className="text-6xl font-bold text-slate-400 mb-4">{d.notFound.code}</h1>
        <p className="text-2xl font-bold text-slate-700 mb-2">{d.notFound.title}</p>
        <p className="text-slate-500 mb-8">{d.notFound.desc}</p>
        <Link
          href="/"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        >
          {d.notFound.back}
        </Link>
      </main>
      <Footer d={d} locale={locale} />
    </div>
  );
}
