import { prisma } from "@numninjas/database";
import { LevelCard } from "@/components/admin/level-card";

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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Levels</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {levels.map((level) => (
          <LevelCard
            key={level.id}
            level={{
              id: level.id,
              name: level.name,
              description: level.description,
              iconEmoji: level.iconEmoji,
              _count: level._count,
            }}
          />
        ))}
      </div>
    </div>
  );
}
