export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 animate-pulse">
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 px-6 text-center">
        <div className="h-9 w-60 bg-slate-700 rounded mx-auto" />
        <div className="h-5 w-72 bg-slate-700 rounded mx-auto mt-3" />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {/* Table header */}
          <div className="bg-slate-100 flex gap-4 px-4 py-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded flex-1" />
            ))}
          </div>
          {/* Table rows */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-4 px-4 py-3 border-t border-slate-50"
            >
              {Array.from({ length: 6 }).map((_, j) => (
                <div key={j} className="h-4 bg-gray-200 rounded flex-1" />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
