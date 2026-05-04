import { prisma, getQuestionById } from '@numninjas/database';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { QuestionForm } from '@/components/admin/question-form';
import { requireAdmin } from '@/lib/require-admin';

export default async function EditQuestionPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const questionId = Number(id);

  if (isNaN(questionId)) notFound();

  const [question, levels] = await Promise.all([
    getQuestionById(questionId),
    prisma.level.findMany({
      orderBy: { rankOrder: 'asc' },
      include: { topics: { orderBy: { orderInLevel: 'asc' } } },
    }),
  ]);

  if (!question) notFound();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/questions" className="text-gray-400 hover:text-gray-600">
          Questions
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-bold text-gray-900">Edit Question #{question.id}</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <QuestionForm
          levels={levels.map((l) => ({
            id: l.id,
            name: l.name,
            iconEmoji: l.iconEmoji,
            topics: l.topics.map((t) => ({ id: t.id, name: t.name })),
          }))}
          question={{
            id: question.id,
            topicId: question.topicId,
            questionType: question.questionType,
            questionText: question.questionText,
            locale: question.locale,
            correctAnswer: question.correctAnswer,
            correctAnswerNumeric: question.correctAnswerNumeric,
            realLifeContext: question.realLifeContext,
            hintText: question.hintText,
            explanation: question.explanation,
            topic: { levelId: question.topic.levelId },
            options: question.options.map((o) => ({
              id: o.id,
              optionText: o.optionText,
              isCorrect: o.isCorrect,
            })),
          }}
        />
      </div>
    </div>
  );
}
