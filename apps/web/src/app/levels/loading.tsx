export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 animate-pulse">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 px-6 text-center">
        <div className="h-9 w-52 bg-slate-700 rounded mx-auto" />
        <div className="h-5 w-64 bg-slate-700 rounded mx-auto mt-3" />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
          >
            {/* Level header */}
            <div className="bg-slate-800 px-6 py-4 flex items-center gap-3">
              <div className="h-8 w-8 bg-slate-600 rounded-full" />
              <div className="space-y-2">
                <div className="h-5 w-32 bg-slate-600 rounded" />
                <div className="h-3 w-48 bg-slate-700 rounded" />
              </div>
            </div>
            {/* Topic items */}
            {Array.from({ length: 7 }).map((_, j) => (
              <div
                key={j}
                className="px-6 py-3 flex items-center gap-3 border-t border-slate-50"
              >
                <div className="w-7 h-7 bg-gray-200 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-40" />
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}
