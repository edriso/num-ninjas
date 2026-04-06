import { prisma } from "@numninja/database";

export default async function TopicsPage() {
  const levels = await prisma.level.findMany({
    orderBy: { rankOrder: "asc" },
    include: {
      topics: {
        orderBy: { orderInLevel: "asc" },
      },
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">المواضيع</h1>

      <div className="space-y-6">
        {levels.map((level) => (
          <div
            key={level.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
              <h2 className="font-bold text-gray-800">
                {level.iconEmoji} {level.name}
                <span className="text-sm font-normal text-gray-500 mr-2">
                  ({level.topics.length} موضوع)
                </span>
              </h2>
            </div>

            <div className="divide-y divide-gray-100">
              {level.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="px-5 py-3 flex items-center justify-between"
                >
                  <div>
                    <span className="text-sm text-gray-400 ml-3">
                      {topic.orderInLevel}.
                    </span>
                    <span className="text-gray-800">{topic.name}</span>
                  </div>
                  {topic.description && (
                    <span className="text-sm text-gray-500">
                      {topic.description}
                    </span>
                  )}
                </div>
              ))}

              {level.topics.length === 0 && (
                <div className="px-5 py-4 text-sm text-gray-400">
                  لا يوجد مواضيع
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
