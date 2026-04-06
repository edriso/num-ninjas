export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-40 bg-gray-200 rounded mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-5 border border-gray-100"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-lg mb-3" />
            <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
            <div className="h-7 w-16 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
