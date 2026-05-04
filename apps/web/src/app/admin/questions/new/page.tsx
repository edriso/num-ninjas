import { prisma } from "@numninjas/database";
import Link from "next/link";
import { QuestionForm } from "@/components/admin/question-form";
import { requireAdmin } from "@/lib/require-admin";

export default async function NewQuestionPage() {
  await requireAdmin();
  const levels = await prisma.level.findMany({
    orderBy: { rankOrder: "asc" },
    include: { topics: { orderBy: { orderInLevel: "asc" } } },
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/questions"
          className="text-gray-400 hover:text-gray-600"
        >
          Questions
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-bold text-gray-900">Add Question</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <QuestionForm
          levels={levels.map((l) => ({
            id: l.id,
            name: l.name,
            iconEmoji: l.iconEmoji,
            topics: l.topics.map((t) => ({ id: t.id, name: t.name })),
          }))}
        />
      </div>
    </div>
  );
}
