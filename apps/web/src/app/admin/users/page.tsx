import { prisma } from "@numninjas/database";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

const PAGE_SIZE = 50;

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  await requireAdmin();
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const skip = (page - 1) * PAGE_SIZE;

  // Fetch the page slice + total count in parallel so the table doesn't
  // wait for both to serialize. count() is fast (uses table stats) but
  // there's no reason to make it sequential with the findMany.
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      orderBy: { totalPoints: "desc" },
      include: { account: true, level: true },
      skip,
      take: PAGE_SIZE,
    }),
    prisma.user.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <span className="text-sm text-gray-500">
          {total} {total === 1 ? "user" : "users"} · page {page} of {totalPages}
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Level</th>
                <th className="px-4 py-3 text-left font-medium">Points</th>
                <th className="px-4 py-3 text-left font-medium">Streak</th>
                <th className="px-4 py-3 text-left font-medium">Last Active</th>
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
                        {user.streakDays} days
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {user.lastActiveAt
                      ? user.lastActiveAt.toLocaleDateString("en-US")
                      : "Never active"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {users.length === 0 && (
        <div className="text-center text-gray-400 py-12">No users on this page</div>
      )}

      {/* Pagination — server-rendered links so a fresh page load (no JS) still works */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <Link
            href={hasPrev ? `?page=${page - 1}` : "#"}
            aria-disabled={!hasPrev}
            className={`px-4 py-2 rounded-lg border ${
              hasPrev
                ? "border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
                : "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed pointer-events-none"
            }`}
          >
            ← Previous
          </Link>
          <span className="text-gray-500">
            Showing {skip + 1}–{Math.min(skip + PAGE_SIZE, total)} of {total}
          </span>
          <Link
            href={hasNext ? `?page=${page + 1}` : "#"}
            aria-disabled={!hasNext}
            className={`px-4 py-2 rounded-lg border ${
              hasNext
                ? "border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
                : "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed pointer-events-none"
            }`}
          >
            Next →
          </Link>
        </div>
      )}
    </div>
  );
}
