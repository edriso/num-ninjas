export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-28 bg-gray-200 rounded mb-6" />

      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Group header */}
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
              <div className="h-5 w-44 bg-gray-200 rounded" />
            </div>
            {/* Topic rows */}
            {Array.from({ length: 7 }).map((_, j) => (
              <div
                key={j}
                className="px-5 py-3 flex items-center gap-3 border-t border-gray-50"
              >
                <div className="w-6 h-6 bg-gray-200 rounded-full" />
                <div className="h-4 w-40 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
