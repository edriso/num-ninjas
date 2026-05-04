import { InlineKeyboard } from 'grammy';
import type { Option } from '@numninjas/database';
import { shuffle } from '@numninjas/database';
import { CB, cbBuild } from '../callbacks';

/**
 * Regex matching option text that starts with a number or fraction (e.g. "63 جنيه", "½ كيلو", "¼ لتر").
 * Digits (0-9), Unicode fractions (½¼¾⅐-⅟), and minus/negative sign are all covered.
 */
const STARTS_WITH_NUMBER = /^[-−]?[\d½¼¾⅐-⅟]/;

/**
 * Fix bidi display for mixed number+Arabic text in Telegram inline buttons.
 *
 * Problem: Telegram renders inline button text with LTR base direction.
 * Text like "63 جنيه" shows the number on the LEFT (wrong for Arabic).
 * Arabic readers expect: جنيه 63 (number on right, unit on left).
 *
 * Solution: Wrap in Right-to-Left Isolate (U+2067) ... Pop Directional Isolate (U+2069).
 * This sets RTL base direction for the enclosed text and isolates it from
 * surrounding context, per W3C recommendation for plain-text bidi control.
 * The bidi algorithm then places digits on the right and Arabic text on the left.
 *
 * Only applied to Arabic-locale options that start with a number/fraction.
 * English options and pure-Arabic options are left unchanged.
 */
export function fixRtlOptionText(text: string, locale: string): string {
  if (locale !== 'ar') return text;
  if (!STARTS_WITH_NUMBER.test(text)) return text;
  // \u2067 = Right-to-Left Isolate, \u2069 = Pop Directional Isolate
  return `\u2067${text}\u2069`;
}

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
    const text = fixRtlOptionText(opt.optionText, locale);
    keyboard.text(text, cbBuild(CB.answer, questionId, opt.id)).row();
  }

  if (showHint) {
    const hintLabel = locale === 'en' ? '💡 Hint' : '💡 تلميح';
    keyboard.text(hintLabel, cbBuild(CB.hint, questionId)).row();
  }

  const skipLabel = locale === 'en' ? 'Skip ⏭️' : 'تخطي ⏭️';
  keyboard.text(skipLabel, cbBuild(CB.skip, questionId)).row();

  return keyboard;
}

/**
 * Build hint-only keyboard for open-ended questions.
 */
export function buildHintKeyboard(questionId: number, locale = 'ar') {
  const hintLabel = locale === 'en' ? '💡 Hint' : '💡 تلميح';
  const skipLabel = locale === 'en' ? 'Skip ⏭️' : 'تخطي ⏭️';
  return new InlineKeyboard()
    .text(hintLabel, cbBuild(CB.hint, questionId))
    .row()
    .text(skipLabel, cbBuild(CB.skip, questionId));
}
