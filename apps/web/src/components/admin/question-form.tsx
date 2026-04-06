"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createQuestionAction,
  updateQuestionAction,
  deleteQuestionAction,
} from "@/app/admin/questions/actions";

type Level = {
  id: number;
  name: string;
  iconEmoji: string | null;
  topics: { id: number; name: string }[];
};

type ExistingQuestion = {
  id: number;
  topicId: number;
  questionType: string;
  questionText: string;
  correctAnswer: string | null;
  correctAnswerNumeric: number | null;
  realLifeContext: string | null;
  hintText: string | null;
  explanation: string;
  topic: { levelId: number };
  options: { id: number; optionText: string; isCorrect: boolean }[];
};

export function QuestionForm({
  levels,
  question,
}: {
  levels: Level[];
  question?: ExistingQuestion;
}) {
  const router = useRouter();
  const isEdit = !!question;

  const [selectedLevelId, setSelectedLevelId] = useState<number>(
    question?.topic.levelId ?? (levels[0]?.id ?? 0),
  );
  const [questionType, setQuestionType] = useState<string>(
    question?.questionType ?? "mcq",
  );
  const [submitting, setSubmitting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const topics =
    levels.find((l) => l.id === selectedLevelId)?.topics ?? [];

  // Find correct option index for pre-fill
  const correctOptionIndex =
    question?.options.findIndex((o) => o.isCorrect) ?? 0;

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    try {
      if (isEdit) {
        await updateQuestionAction(question!.id, formData);
      } else {
        await createQuestionAction(formData);
      }
    } catch {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    setSubmitting(true);
    try {
      await deleteQuestionAction(question!.id);
    } catch {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form action={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Level (not submitted, just for filtering topics) */}
      <div>
        <label className={labelClass}>المستوى</label>
        <select
          value={selectedLevelId}
          onChange={(e) => setSelectedLevelId(Number(e.target.value))}
          className={inputClass}
        >
          {levels.map((l) => (
            <option key={l.id} value={l.id}>
              {l.iconEmoji} {l.name}
            </option>
          ))}
        </select>
      </div>

      {/* Topic */}
      <div>
        <label className={labelClass}>الموضوع *</label>
        <select
          name="topicId"
          defaultValue={question?.topicId ?? (topics[0]?.id ?? "")}
          key={selectedLevelId}
          required
          className={inputClass}
        >
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
          {topics.length === 0 && (
            <option value="" disabled>
              لا يوجد مواضيع في المستوى ده
            </option>
          )}
        </select>
      </div>

      {/* Question type */}
      <div>
        <label className={labelClass}>نوع السؤال *</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="questionType"
              value="mcq"
              checked={questionType === "mcq"}
              onChange={() => setQuestionType("mcq")}
              className="accent-gray-900"
            />
            <span className="text-sm">اختياري (MCQ)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="questionType"
              value="open_ended"
              checked={questionType === "open_ended"}
              onChange={() => setQuestionType("open_ended")}
              className="accent-gray-900"
            />
            <span className="text-sm">مفتوح</span>
          </label>
        </div>
      </div>

      {/* Real life context */}
      <div>
        <label className={labelClass}>سياق حياتي (اختياري)</label>
        <textarea
          name="realLifeContext"
          defaultValue={question?.realLifeContext ?? ""}
          rows={2}
          className={inputClass}
          placeholder="مثال: محمد راح السوبر ماركت..."
        />
      </div>

      {/* Question text */}
      <div>
        <label className={labelClass}>نص السؤال *</label>
        <textarea
          name="questionText"
          defaultValue={question?.questionText ?? ""}
          rows={3}
          required
          className={inputClass}
          placeholder="اكتب السؤال هنا..."
        />
      </div>

      {/* Explanation */}
      <div>
        <label className={labelClass}>الشرح *</label>
        <textarea
          name="explanation"
          defaultValue={question?.explanation ?? ""}
          rows={3}
          required
          className={inputClass}
          placeholder="شرح الحل خطوة بخطوة..."
        />
      </div>

      {/* Hint */}
      <div>
        <label className={labelClass}>تلميح (اختياري)</label>
        <input
          type="text"
          name="hintText"
          defaultValue={question?.hintText ?? ""}
          className={inputClass}
          placeholder="تلميح يساعد الطالب..."
        />
      </div>

      {/* MCQ options */}
      {questionType === "mcq" && (
        <div>
          <label className={labelClass}>الخيارات *</label>
          <p className="text-xs text-gray-400 mb-3">
            اختار الإجابة الصحيحة بالضغط على الراديو
          </p>
          <div className="space-y-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="correctOption"
                  value={i}
                  defaultChecked={i === correctOptionIndex}
                  className="accent-green-600 mt-0.5"
                />
                <input
                  type="text"
                  name={`option${i}Text`}
                  defaultValue={question?.options[i]?.optionText ?? ""}
                  required={i < 2}
                  className={inputClass}
                  placeholder={`خيار ${i + 1}${i < 2 ? " *" : " (اختياري)"}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Open-ended answer */}
      {questionType === "open_ended" && (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>الإجابة الصحيحة (نص)</label>
            <input
              type="text"
              name="correctAnswer"
              defaultValue={question?.correctAnswer ?? ""}
              className={inputClass}
              placeholder="مثال: ٤٥"
            />
          </div>
          <div>
            <label className={labelClass}>الإجابة الصحيحة (رقم)</label>
            <input
              type="number"
              name="correctAnswerNumeric"
              defaultValue={question?.correctAnswerNumeric ?? ""}
              step="any"
              className={inputClass}
              placeholder="مثال: 45"
              dir="ltr"
            />
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <button
          type="submit"
          disabled={submitting}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {submitting ? "جاري الحفظ..." : isEdit ? "حفظ التعديلات" : "إضافة السؤال"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/questions")}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          إلغاء
        </button>

        {isEdit && (
          <div className="mr-auto">
            {showDeleteConfirm ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-600">متأكد؟</span>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={submitting}
                  className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-red-700 disabled:opacity-50"
                >
                  أيوه، امسح
                </button>
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(false)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  لا
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(true)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                حذف السؤال
              </button>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
