export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-28 bg-gray-200 rounded mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="h-9 w-9 bg-gray-200 rounded-full mb-3" />
            <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-48 bg-gray-200 rounded mb-4" />
            <div className="flex gap-4">
              <div className="h-3 w-20 bg-gray-200 rounded" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
