import prisma from '../client';
import { parseNumericAnswer, isNumericMatch } from '../utils/arabic-numerals';

/**
 * Check if an MCQ answer (option ID) is correct.
 */
export async function checkMcqAnswer(optionId: number): Promise<boolean> {
  const option = await prisma.option.findUnique({ where: { id: optionId } });
  return option?.isCorrect ?? false;
}

/**
 * Check if an open-ended text answer matches the correct numeric answer.
 * Returns { isCorrect, parsed } so caller can show feedback.
 */
export function checkOpenEndedAnswer(
  userInput: string,
  correctNumeric: number,
): { isCorrect: boolean; parsed: number | null } {
  const parsed = parseNumericAnswer(userInput);
  if (parsed === null) return { isCorrect: false, parsed: null };
  return { isCorrect: isNumericMatch(parsed, correctNumeric), parsed };
}
