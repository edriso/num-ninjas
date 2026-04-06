export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-8 w-40 bg-gray-200 rounded" />
        <div className="h-5 w-32 bg-gray-200 rounded" />
      </div>

      <div className="space-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* User header */}
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
              <div className="h-5 w-36 bg-gray-200 rounded" />
            </div>
            {/* Question cards */}
            {Array.from({ length: 3 }).map((_, j) => (
              <div
                key={j}
                className="px-5 py-3 flex items-center gap-3 border-t border-gray-50"
              >
                <div className="w-7 h-7 bg-gray-200 rounded-full" />
                <div className="flex-1 space-y-1">
                  <div className="h-4 w-48 bg-gray-200 rounded" />
                  <div className="h-3 w-32 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
