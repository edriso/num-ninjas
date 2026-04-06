import { InlineKeyboard } from 'grammy';
import type { Option } from '@numninja/database';
import { shuffle } from '@numninja/database';

/**
 * Build inline keyboard for MCQ question.
 * Options are shuffled each time. Hint button shown if hintText exists.
 */
export function buildMcqKeyboard(
  questionId: number,
  options: Option[],
  showHint: boolean,
) {
  const keyboard = new InlineKeyboard();
  const shuffled = shuffle(options);

  for (const opt of shuffled) {
    keyboard.text(opt.optionText, `answer:${questionId}:${opt.id}`).row();
  }

  if (showHint) {
    keyboard.text('💡 تلميح', `hint:${questionId}`).row();
  }

  keyboard.text('تخطي ⏭️', `skip:${questionId}`).row();

  return keyboard;
}

/**
 * Build hint-only keyboard for open-ended questions.
 */
export function buildHintKeyboard(questionId: number) {
  return new InlineKeyboard()
    .text('💡 تلميح', `hint:${questionId}`)
    .row()
    .text('تخطي ⏭️', `skip:${questionId}`);
}
