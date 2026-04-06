"use server";

import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "@numninja/database";
import { redirect } from "next/navigation";

export async function createQuestionAction(formData: FormData) {
  const questionType = formData.get("questionType") as string;
  const topicId = Number(formData.get("topicId"));
  const questionText = (formData.get("questionText") as string).trim();
  const explanation = (formData.get("explanation") as string).trim();
  const realLifeContext =
    (formData.get("realLifeContext") as string)?.trim() || undefined;
  const hintText = (formData.get("hintText") as string)?.trim() || undefined;

  if (!topicId || !questionText || !explanation || !questionType) {
    throw new Error("الحقول المطلوبة ناقصة");
  }

  if (questionType === "mcq") {
    const options: { optionText: string; isCorrect: boolean }[] = [];
    const correctIndex = Number(formData.get("correctOption"));

    for (let i = 0; i < 4; i++) {
      const text = (formData.get(`option${i}Text`) as string)?.trim();
      if (text) {
        options.push({ optionText: text, isCorrect: i === correctIndex });
      }
    }

    if (options.length < 2) {
      throw new Error("الأسئلة الاختيارية لازم يكون فيها على الأقل خيارين");
    }

    await createQuestion({
      topicId,
      questionType,
      questionText,
      explanation,
      realLifeContext,
      hintText,
      options,
    });
  } else {
    const correctAnswer =
      (formData.get("correctAnswer") as string)?.trim() || undefined;
    const numericStr = formData.get("correctAnswerNumeric") as string;
    const correctAnswerNumeric = numericStr ? parseFloat(numericStr) : undefined;

    await createQuestion({
      topicId,
      questionType: "open_ended",
      questionText,
      explanation,
      realLifeContext,
      hintText,
      correctAnswer,
      correctAnswerNumeric,
    });
  }

  redirect("/admin/questions");
}

export async function updateQuestionAction(id: number, formData: FormData) {
  const topicId = Number(formData.get("topicId"));
  const questionText = (formData.get("questionText") as string).trim();
  const explanation = (formData.get("explanation") as string).trim();
  const realLifeContext =
    (formData.get("realLifeContext") as string)?.trim() || undefined;
  const hintText = (formData.get("hintText") as string)?.trim() || undefined;
  const questionType = formData.get("questionType") as string;

  if (!topicId || !questionText || !explanation || !questionType) {
    throw new Error("الحقول المطلوبة ناقصة");
  }

  const correctAnswer =
    questionType === "open_ended"
      ? ((formData.get("correctAnswer") as string)?.trim() || undefined)
      : undefined;
  const numericStr = formData.get("correctAnswerNumeric") as string;
  const correctAnswerNumeric =
    questionType === "open_ended" && numericStr
      ? parseFloat(numericStr)
      : undefined;

  await updateQuestion(id, {
    topicId,
    questionType,
    questionText,
    explanation,
    realLifeContext,
    hintText,
    correctAnswer,
    correctAnswerNumeric,
  });

  redirect("/admin/questions");
}

export async function deleteQuestionAction(id: number) {
  await deleteQuestion(id);
  redirect("/admin/questions");
}
