import { prisma, listQuestions } from "@numninjas/database";
import Link from "next/link";
import { QuestionFilters } from "@/components/admin/question-filters";

export default async function QuestionsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    levelId?: string;
    topicId?: string;
    type?: string;
  }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const levelId = sp.levelId ? Number(sp.levelId) : undefined;
  const topicId = sp.topicId ? Number(sp.topicId) : undefined;
  const type = sp.type || undefined;

  const levels = await prisma.level.findMany({
    orderBy: { rankOrder: "asc" },
    include: { topics: { orderBy: { orderInLevel: "asc" } } },
  });

  const { questions, total, totalPages } = await listQuestions({
    levelId,
    topicId,
    type,
    page,
  });

  // Build query string preserving current filters
  function buildHref(overrides: Record<string, string | undefined>) {
    const params = new URLSearchParams();
    const merged = {
      page: String(page),
      levelId: sp.levelId,
      topicId: sp.topicId,
      type: sp.type,
      ...overrides,
    };
    for (const [k, v] of Object.entries(merged)) {
      if (v) params.set(k, v);
    }
    return `/admin/questions?${params.toString()}`;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Questions</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">{total} questions</span>
          <Link
            href="/admin/questions/new"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            Add Question
          </Link>
        </div>
      </div>

      {/* Filter bar (client component) */}
      <QuestionFilters
        levels={levels.map((l) => ({
          id: l.id,
          name: l.name,
          iconEmoji: l.iconEmoji,
          topics: l.topics.map((t) => ({ id: t.id, name: t.name })),
        }))}
      />

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-medium">#</th>
                <th className="px-4 py-3 text-left font-medium">Question</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Level</th>
                <th className="px-4 py-3 text-left font-medium">Topic</th>
                <th className="px-4 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {questions.map((q) => (
                <tr key={q.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{q.id}</td>
                  <td className="px-4 py-3 max-w-xs truncate">
                    {q.questionText.length > 60
                      ? q.questionText.slice(0, 60) + "..."
                      : q.questionText}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        q.questionType === "mcq"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {q.questionType === "mcq" ? "Multiple Choice" : "Open Ended"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {q.topic.level.iconEmoji} {q.topic.level.name}
                  </td>
                  <td className="px-4 py-3">{q.topic.name}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/questions/${q.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
              {questions.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    No questions
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {page > 1 && (
            <Link
              href={buildHref({ page: String(page - 1) })}
              className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Previous
            </Link>
          )}
          <span className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={buildHref({ page: String(page + 1) })}
              className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
