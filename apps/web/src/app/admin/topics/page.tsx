import { prisma } from '@numninjas/database';
import { TopicList } from '@/components/admin/topic-list';
import { requireAdmin } from '@/lib/require-admin';

export default async function TopicsPage() {
  await requireAdmin();
  const levels = await prisma.level.findMany({
    orderBy: { rankOrder: 'asc' },
    include: {
      topics: {
        orderBy: { orderInLevel: 'asc' },
      },
    },
  });

  const levelsData = levels.map((level) => ({
    id: level.id,
    name: level.name,
    iconEmoji: level.iconEmoji,
    topics: level.topics.map((topic) => ({
      id: topic.id,
      name: topic.name,
      description: topic.description,
      orderInLevel: topic.orderInLevel,
    })),
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Topics</h1>
      <TopicList levels={levelsData} />
    </div>
  );
}
