import { prisma } from "@numninjas/database";

export default async function LevelsPage() {
  const levels = await prisma.level.findMany({
    orderBy: { rankOrder: "asc" },
    include: {
      _count: {
        select: {
          topics: true,
          users: true,
        },
      },
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">المستويات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {levels.map((level) => (
          <div
            key={level.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
          >
            <div className="text-3xl mb-3">{level.iconEmoji}</div>
            <h2 className="text-lg font-bold text-gray-900">{level.name}</h2>
            {level.description && (
              <p className="text-sm text-gray-500 mt-1">{level.description}</p>
            )}
            <div className="flex gap-4 mt-4 text-sm text-gray-600">
              <div>
                <span className="font-medium">{level._count.topics}</span>{" "}
                موضوع
              </div>
              <div>
                <span className="font-medium">{level._count.users}</span>{" "}
                مستخدم
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
