import { InlineKeyboard } from 'grammy';
import type { Option } from '@numninjas/database';
import { shuffle } from '@numninjas/database';

/**
 * Build inline keyboard for MCQ question.
 * Options are shuffled each time. Hint button shown if hintText exists.
 */
export function buildMcqKeyboard(
  questionId: number,
  options: Option[],
  showHint: boolean,
  locale = 'ar',
) {
  const keyboard = new InlineKeyboard();
  const shuffled = shuffle(options);

  for (const opt of shuffled) {
    keyboard.text(opt.optionText, `answer:${questionId}:${opt.id}`).row();
  }

  if (showHint) {
    const hintLabel = locale === 'en' ? '💡 Hint' : '💡 تلميح';
    keyboard.text(hintLabel, `hint:${questionId}`).row();
  }

  const skipLabel = locale === 'en' ? 'Skip ⏭️' : 'تخطي ⏭️';
  keyboard.text(skipLabel, `skip:${questionId}`).row();

  return keyboard;
}

/**
 * Build hint-only keyboard for open-ended questions.
 */
export function buildHintKeyboard(questionId: number, locale = 'ar') {
  const hintLabel = locale === 'en' ? '💡 Hint' : '💡 تلميح';
  const skipLabel = locale === 'en' ? 'Skip ⏭️' : 'تخطي ⏭️';
  return new InlineKeyboard()
    .text(hintLabel, `hint:${questionId}`)
    .row()
    .text(skipLabel, `skip:${questionId}`);
}
