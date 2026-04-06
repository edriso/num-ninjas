import { prisma, todayCairoAsUtcMidnight } from "@numninja/database";

export default async function ScheduledPage() {
  const today = todayCairoAsUtcMidnight();

  const scheduled = await prisma.scheduledQuestion.findMany({
    where: { scheduledDate: today },
    orderBy: [{ userId: "asc" }, { position: "asc" }],
    include: {
      user: { include: { level: true } },
      question: { include: { topic: true } },
    },
  });

  // Group by user
  const grouped = new Map<
    number,
    {
      user: (typeof scheduled)[0]["user"];
      items: typeof scheduled;
    }
  >();

  for (const sq of scheduled) {
    if (!grouped.has(sq.userId)) {
      grouped.set(sq.userId, { user: sq.user, items: [] });
    }
    grouped.get(sq.userId)!.items.push(sq);
  }

  const todayStr = today.toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">الجدول الزمني</h1>
        <span className="text-sm text-gray-500">{todayStr}</span>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        كل طالب يحصل على أسئلة مختلفة بناءً على نقاط ضعفه (صعوبة تكيّفية)
      </p>

      {scheduled.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center text-gray-400">
          لا توجد أسئلة مجدولة لليوم — يتم تحضيرها الساعة 12:30 ليلاً
        </div>
      ) : (
        <div className="space-y-4">
          {Array.from(grouped.values()).map(({ user, items }) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-gray-800">
                  {user.level.iconEmoji} {user.nickname}
                </h2>
                <span className="text-xs text-gray-500">
                  {user.level.name} — {items.length} أسئلة
                </span>
              </div>

              <div className="divide-y divide-gray-100">
                {items.map((sq) => (
                  <div key={sq.id} className="px-5 py-3">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-medium">
                        {sq.position}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 text-sm">
                          {sq.question.questionText}
                        </p>
                        <div className="flex gap-3 mt-1">
                          <span className="text-xs text-gray-500">
                            {sq.question.topic.name}
                          </span>
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded ${
                              sq.question.questionType === "mcq"
                                ? "bg-blue-50 text-blue-600"
                                : "bg-green-50 text-green-600"
                            }`}
                          >
                            {sq.question.questionType === "mcq"
                              ? "اختيار متعدد"
                              : "إجابة مفتوحة"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
