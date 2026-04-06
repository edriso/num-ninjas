import { prisma } from "@numninja/database";
import Link from "next/link";

const PAGE_SIZE = 20;

export default async function QuestionsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const skip = (page - 1) * PAGE_SIZE;

  const [questions, total] = await Promise.all([
    prisma.question.findMany({
      skip,
      take: PAGE_SIZE,
      orderBy: { id: "asc" },
      include: {
        topic: {
          include: { level: true },
        },
      },
    }),
    prisma.question.count(),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">الأسئلة</h1>
        <span className="text-sm text-gray-500">{total} سؤال</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-right font-medium">#</th>
                <th className="px-4 py-3 text-right font-medium">السؤال</th>
                <th className="px-4 py-3 text-right font-medium">النوع</th>
                <th className="px-4 py-3 text-right font-medium">المستوى</th>
                <th className="px-4 py-3 text-right font-medium">الموضوع</th>
                <th className="px-4 py-3 text-right font-medium">تاريخ الإنشاء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {questions.map((q) => (
                <tr key={q.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{q.id}</td>
                  <td className="px-4 py-3 max-w-xs truncate">
                    {q.questionText}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        q.questionType === "mcq"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {q.questionType === "mcq" ? "اختياري" : "مفتوح"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {q.topic.level.iconEmoji} {q.topic.level.name}
                  </td>
                  <td className="px-4 py-3">{q.topic.name}</td>
                  <td className="px-4 py-3 text-gray-500" dir="ltr">
                    {q.createdAt.toLocaleDateString("ar-EG")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {page > 1 && (
            <Link
              href={`/admin/questions?page=${page - 1}`}
              className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              السابق
            </Link>
          )}
          <span className="text-sm text-gray-500">
            صفحة {page} من {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/admin/questions?page=${page + 1}`}
              className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              التالي
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
