import { StaticFooter } from '@/components/static-footer';

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 px-6 text-center animate-pulse">
        <div className="h-9 w-48 bg-slate-700 rounded mx-auto" />
        <div className="h-5 w-36 bg-slate-700 rounded mx-auto mt-3" />
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 animate-pulse">
        {/* Section title */}
        <div className="h-7 w-48 bg-gray-200 rounded mb-6" />

        {/* 3 category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center"
            >
              <div className="h-10 w-10 bg-gray-200 rounded-full mx-auto mb-3" />
              <div className="h-5 w-24 bg-gray-200 rounded mx-auto mb-1" />
              <div className="h-4 w-32 bg-gray-200 rounded mx-auto mb-4" />
              <div className="h-6 w-28 bg-gray-200 rounded mx-auto" />
            </div>
          ))}
        </div>

        {/* Recent badges title */}
        <div className="h-7 w-40 bg-gray-200 rounded mb-6" />

        {/* Badge list */}
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4"
            >
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-48 bg-gray-200 rounded" />
              </div>
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </main>
      <StaticFooter />
    </div>
  );
}
