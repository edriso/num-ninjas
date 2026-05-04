/**
 * Centralised callback names for inline-keyboard buttons.
 *
 * Why:
 *   Callback strings live in two places — the keyboard builder that *sends*
 *   the button, and the bot.callbackQuery() registration that *handles* the
 *   tap. If they drift, taps silently do nothing. Putting every name here
 *   gives us one source of truth, autocompletion, and rename safety.
 *
 * Two callback shapes:
 *   1. Exact-match — the data IS the name (e.g. `add_child`). Registered
 *      via `bot.callbackQuery(CB.addChild, ...)`.
 *   2. Parameterised — the data is `name:param1:param2` (e.g. `answer:42`).
 *      Registered via `bot.callbackQuery(cbPrefix(CB.answer), ...)` and
 *      built via `cbBuild(CB.answer, optionId)`.
 *
 * If you're adding a new callback: add it here first, then use the helpers
 * everywhere else. Keep names snake_case (the convention Telegram chose).
 */
export const CB = {
  // Onboarding
  onboardLang: 'onboard_lang', // onboard_lang:ar | onboard_lang:en
  quizAnswer: 'quiz_answer', // quiz_answer:0|1|2 (0/1/2 = answer index)
  changeQuizLevel: 'change_quiz_level', // exact
  startFirstQuestion: 'start_first_question', // exact
  selectLevel: 'select_level', // select_level:1..5

  // Profile
  pickProfile: 'pick_profile', // pick_profile:<userId>
  addChild: 'add_child', // exact
  editNickname: 'edit_nickname', // exact
  editLevel: 'edit_level', // exact
  editUsername: 'edit_username', // exact

  // Question flow
  answer: 'answer', // answer:<optionId>
  hint: 'hint', // hint:<questionId>
  skip: 'skip', // skip:<questionId>
  retryMcq: 'retry_mcq', // retry_mcq:<questionId>
  retryOpen: 'retry_open', // retry_open:<questionId>

  // Level transition
  levelUp: 'level_up', // level_up:<nextLevelId>
  stayLevel: 'stay_level', // exact

  // Settings
  showLang: 'show_lang', // exact
  showPrivacy: 'show_privacy', // exact
  setLang: 'set_lang', // set_lang:ar|en
  setPrivacy: 'set_privacy', // set_privacy:public|private
} as const;

export type CallbackName = (typeof CB)[keyof typeof CB];

/**
 * Build a callback data string. Pass the CB.* name and any parameters.
 * Examples:
 *   cbBuild(CB.answer, 42)         → "answer:42"
 *   cbBuild(CB.setLang, 'ar')      → "set_lang:ar"
 *   cbBuild(CB.addChild)           → "add_child"
 *
 * Telegram's callback_data is capped at 64 bytes — keep parameters short.
 */
export function cbBuild(name: CallbackName, ...params: (string | number)[]): string {
  return params.length === 0 ? name : `${name}:${params.join(':')}`;
}

/**
 * Regex for matching a parameterised callback.
 *   cbPrefix(CB.answer) → /^answer:/
 *
 * Use with bot.callbackQuery(cbPrefix(CB.answer), handler).
 */
export function cbPrefix(name: CallbackName): RegExp {
  // Escape any regex-meta chars; our names are snake_case so this is mostly
  // defensive but keeps us safe if a future name includes a dot or hyphen.
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^${escaped}:`);
}

/**
 * Extract a parameter from a callback data string.
 *   cbParam('answer:42', 0) → '42'
 *   cbParam('set_lang:ar', 0) → 'ar'
 */
export function cbParam(data: string, index = 0): string | undefined {
  const parts = data.split(':');
  return parts[index + 1]; // [0] is the name, params start at [1]
}
