import { getProblematicQuestions } from "@numninjas/database";
import { requireAdmin } from "@/lib/require-admin";
import Link from "next/link";

export const metadata = { title: "Question Quality" };
export const dynamic = "force-dynamic";

export default async function QualityPage({
  searchParams,
}: {
  searchParams: Promise<{ sortBy?: string; minAttempts?: string }>;
}) {
  await requireAdmin();
  const sp = await searchParams;
  const sortBy: "wrong" | "skip" = sp.sortBy === "skip" ? "skip" : "wrong";
  const minAttempts = Math.max(1, Number(sp.minAttempts) || 5);

  const rows = await getProblematicQuestions({ minAttempts, sortBy });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Question Quality</h1>
      <p className="text-sm text-gray-600 mb-6">
        Questions that may be misworded, miskeyed, or too hard. Sorted by the
        worst metric first. Filter by minimum attempts to silence noise from
        rarely-answered questions.
      </p>

      <div className="flex flex-wrap gap-4 mb-4 items-center text-sm">
        <div>
          <span className="text-gray-600 mr-2">Sort by:</span>
          <Link
            href={`?sortBy=wrong&minAttempts=${minAttempts}`}
            className={`px-3 py-1.5 rounded-lg ${
              sortBy === "wrong"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Wrong rate
          </Link>{" "}
          <Link
            href={`?sortBy=skip&minAttempts=${minAttempts}`}
            className={`px-3 py-1.5 rounded-lg ml-2 ${
              sortBy === "skip"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Skip rate
          </Link>
        </div>
        <div>
          <span className="text-gray-600 mr-2">Min attempts:</span>
          {[3, 5, 10, 20].map((n) => (
            <Link
              key={n}
              href={`?sortBy=${sortBy}&minAttempts=${n}`}
              className={`px-2.5 py-1 rounded ml-1 ${
                minAttempts === n
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {n}+
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Question</th>
                <th className="px-4 py-3 text-left font-medium">Topic</th>
                <th className="px-4 py-3 text-left font-medium">Locale</th>
                <th className="px-4 py-3 text-right font-medium">Attempts</th>
                <th className="px-4 py-3 text-right font-medium">Wrong</th>
                <th className="px-4 py-3 text-right font-medium">Skip</th>
                <th className="px-4 py-3 text-right font-medium">Hint</th>
                <th className="px-4 py-3 text-left font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => {
                const wrongPct = Math.round(row.wrongRate * 100);
                const skipPct = Math.round(row.skipRate * 100);
                const hintPct = Math.round(row.hintRate * 100);
                const wrongColor =
                  wrongPct > 70
                    ? "text-red-600 font-semibold"
                    : wrongPct > 40
                      ? "text-yellow-700"
                      : "text-gray-600";
                const skipColor =
                  skipPct > 30 ? "text-red-600" : "text-gray-600";
                return (
                  <tr key={row.questionId} className="hover:bg-gray-50 align-top">
                    <td className="px-4 py-3 text-gray-800 max-w-md">
                      <span className="line-clamp-2">{row.questionText}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {row.topicName}
                      <div className="text-xs text-gray-400">
                        {row.levelName}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-500 uppercase text-xs">
                      {row.locale}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {row.totalAttempts}
                    </td>
                    <td className={`px-4 py-3 text-right ${wrongColor}`}>
                      {wrongPct}%
                      <div className="text-xs text-gray-400">
                        {row.wrongCount}/{row.totalAttempts}
                      </div>
                    </td>
                    <td className={`px-4 py-3 text-right ${skipColor}`}>
                      {skipPct}%
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {hintPct}%
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/questions/${row.questionId}`}
                        className="text-blue-600 hover:underline text-xs"
                      >
                        Edit →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {rows.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              No questions meet the criteria yet — try lowering the minimum
              attempts.
            </div>
          )}
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-400">
        Wrong rate combines wrong answers and skips. Hint rate is the share
        of attempts where the kid revealed the hint before answering.
      </p>
    </div>
  );
}
