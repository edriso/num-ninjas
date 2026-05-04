import { prisma, todayCairoAsUtcMidnight } from "@numninjas/database";
import { requireAdmin } from "@/lib/require-admin";

export const metadata = {
  title: 'Dashboard',
};

export default async function AdminDashboard() {
  await requireAdmin();
  const today = todayCairoAsUtcMidnight();

  const [accountCount, userCount, questionCount, todaySessions, completedToday] =
    await Promise.all([
      prisma.account.count(),
      prisma.user.count(),
      prisma.question.count(),
      prisma.studySession.count({
        where: { sessionDate: today },
      }),
      prisma.studySession.count({
        where: { sessionDate: today, isComplete: true },
      }),
    ]);

  const completionRate =
    todaySessions > 0
      ? Math.round((completedToday / todaySessions) * 100)
      : 0;

  const stats = [
    { label: "Accounts", value: accountCount, color: "bg-blue-500" },
    { label: "Users", value: userCount, color: "bg-green-500" },
    { label: "Questions", value: questionCount, color: "bg-purple-500" },
    { label: "Today's Sessions", value: todaySessions, color: "bg-orange-500" },
    {
      label: "Today's Completion Rate",
      value: `${completionRate}%`,
      color: "bg-teal-500",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-sm p-5 border border-gray-100"
          >
            <div className={`w-10 h-10 ${stat.color} rounded-lg mb-3`} />
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
