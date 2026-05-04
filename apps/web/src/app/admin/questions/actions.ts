'use server';

import { createQuestion, updateQuestion, deleteQuestion } from '@numninjas/database';
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/require-admin';

export async function createQuestionAction(formData: FormData) {
  await requireAdmin();
  const questionType = formData.get('questionType') as string;
  const topicId = Number(formData.get('topicId'));
  const questionText = (formData.get('questionText') as string).trim();
  const explanation = (formData.get('explanation') as string).trim();
  const realLifeContext = (formData.get('realLifeContext') as string)?.trim() || undefined;
  const hintText = (formData.get('hintText') as string)?.trim() || undefined;

  if (!topicId || !questionText || !explanation || !questionType) {
    throw new Error('Required fields are incomplete');
  }

  if (questionType === 'mcq') {
    const options: { optionText: string; isCorrect: boolean }[] = [];
    const correctIndex = Number(formData.get('correctOption'));

    for (let i = 0; i < 4; i++) {
      const text = (formData.get(`option${i}Text`) as string)?.trim();
      if (text) {
        options.push({ optionText: text, isCorrect: i === correctIndex });
      }
    }

    if (options.length < 2) {
      throw new Error('Multiple choice questions need at least 2 options');
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
    const correctAnswer = (formData.get('correctAnswer') as string)?.trim() || undefined;
    const numericStr = formData.get('correctAnswerNumeric') as string;
    const correctAnswerNumeric = numericStr ? parseFloat(numericStr) : undefined;

    await createQuestion({
      topicId,
      questionType: 'open_ended',
      questionText,
      explanation,
      realLifeContext,
      hintText,
      correctAnswer,
      correctAnswerNumeric,
    });
  }

  redirect('/admin/questions');
}

export async function updateQuestionAction(id: number, formData: FormData) {
  await requireAdmin();
  const topicId = Number(formData.get('topicId'));
  const questionText = (formData.get('questionText') as string).trim();
  const explanation = (formData.get('explanation') as string).trim();
  const realLifeContext = (formData.get('realLifeContext') as string)?.trim() || undefined;
  const hintText = (formData.get('hintText') as string)?.trim() || undefined;
  const questionType = formData.get('questionType') as string;

  if (!topicId || !questionText || !explanation || !questionType) {
    throw new Error('Required fields are incomplete');
  }

  const correctAnswer =
    questionType === 'open_ended'
      ? (formData.get('correctAnswer') as string)?.trim() || undefined
      : undefined;
  const numericStr = formData.get('correctAnswerNumeric') as string;
  const correctAnswerNumeric =
    questionType === 'open_ended' && numericStr ? parseFloat(numericStr) : undefined;

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

  redirect('/admin/questions');
}

export async function deleteQuestionAction(id: number) {
  await requireAdmin();
  await deleteQuestion(id);
  redirect('/admin/questions');
}
