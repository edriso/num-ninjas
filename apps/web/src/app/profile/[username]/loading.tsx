export default function Loading() {
  return (
    <div className="flex-1 bg-slate-50 animate-pulse">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 px-6 text-center">
        <div className="h-12 w-12 bg-slate-700 rounded-full mx-auto mb-3" />
        <div className="h-9 w-40 bg-slate-700 rounded mx-auto" />
        <div className="h-5 w-28 bg-slate-700 rounded mx-auto mt-2" />
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* Stats grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 text-center"
            >
              <div className="h-8 w-8 bg-gray-200 rounded-full mx-auto mb-2" />
              <div className="h-6 w-16 bg-gray-200 rounded mx-auto mb-1" />
              <div className="h-3 w-20 bg-gray-200 rounded mx-auto" />
            </div>
          ))}
        </section>

        {/* Badges section */}
        <div className="h-7 w-32 bg-gray-200 rounded mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4"
            >
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="h-3 w-40 bg-gray-200 rounded" />
              </div>
              <div className="h-3 w-16 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
