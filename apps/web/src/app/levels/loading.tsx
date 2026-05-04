import { StaticFooter } from '@/components/static-footer';

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 px-6 text-center animate-pulse">
        <div className="h-9 w-52 bg-slate-700 rounded mx-auto" />
        <div className="h-5 w-64 bg-slate-700 rounded mx-auto mt-3" />
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <div className="bg-slate-800 px-6 py-4 flex items-center gap-3">
              <div className="h-8 w-8 bg-slate-600 rounded-full" />
              <div className="space-y-2">
                <div className="h-5 w-32 bg-slate-600 rounded" />
                <div className="h-3 w-48 bg-slate-700 rounded" />
              </div>
            </div>
            {Array.from({ length: 7 }).map((_, j) => (
              <div key={j} className="px-6 py-3 flex items-center gap-3 border-t border-slate-50">
                <div className="w-7 h-7 bg-gray-200 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-40" />
              </div>
            ))}
          </div>
        ))}
      </main>
      <StaticFooter />
    </div>
  );
}
