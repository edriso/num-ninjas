import { prisma } from "@numninjas/database";

const badgeTypeLabels: Record<string, string> = {
  achievement: "إنجاز",
  weekly_rank: "ترتيب أسبوعي",
  monthly_rank: "ترتيب شهري",
  yearly_rank: "ترتيب سنوي",
};

export default async function BadgesPage() {
  const badges = await prisma.badge.findMany({
    orderBy: [{ badgeType: "asc" }, { id: "asc" }],
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">الشارات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">{badge.iconEmoji}</span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{badge.name}</h3>
                {badge.awardTitle && (
                  <p className="text-sm text-blue-600 mt-0.5">
                    {badge.awardTitle}
                  </p>
                )}
                {badge.description && (
                  <p className="text-sm text-gray-500 mt-1">
                    {badge.description}
                  </p>
                )}
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                  {badgeTypeLabels[badge.badgeType] ?? badge.badgeType}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {badges.length === 0 && (
        <div className="text-center text-gray-400 py-12">لا يوجد شارات</div>
      )}
    </div>
  );
}
