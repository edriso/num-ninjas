import { prisma } from "@numninjas/database";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { totalPoints: "desc" },
    include: {
      account: true,
      level: true,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">المستخدمين</h1>
        <span className="text-sm text-gray-500">{users.length} مستخدم</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-right font-medium">الاسم</th>
                <th className="px-4 py-3 text-right font-medium">المستوى</th>
                <th className="px-4 py-3 text-right font-medium">النقاط</th>
                <th className="px-4 py-3 text-right font-medium">سلسلة الأيام</th>
                <th className="px-4 py-3 text-right font-medium">آخر نشاط</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {user.nickname}
                  </td>
                  <td className="px-4 py-3">
                    {user.level.iconEmoji} {user.level.name}
                  </td>
                  <td className="px-4 py-3">{user.totalPoints}</td>
                  <td className="px-4 py-3">
                    {user.streakDays > 0 ? (
                      <span className="text-orange-600">
                        {user.streakDays} يوم
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {user.lastActiveAt
                      ? user.lastActiveAt.toLocaleDateString("ar-EG")
                      : "لم يسجل دخول"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {users.length === 0 && (
        <div className="text-center text-gray-400 py-12">لا يوجد مستخدمين</div>
      )}
    </div>
  );
}
