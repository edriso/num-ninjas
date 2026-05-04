import { Context, SessionFlavor, session } from 'grammy';
import type { SessionState } from '@numninjas/database';

/**
 * Per-state scratchpad data stored alongside the session state.
 *
 * All fields are optional — the session is reset to {} on /start, on
 * profile switch, and at the end of any flow that uses these fields.
 * The discriminated meaning is implicit (which fields are populated
 * depends on which flow the user is in), but we keep the type narrow
 * so typos like `chaningLevel` are caught at compile time and we don't
 * need `as` casts at every read site.
 *
 * If you add a new transient field, add it here first.
 */
export interface PendingData {
  // ─── Onboarding (nickname → level / quiz) ────────────────
  nickname?: string;
  quizStep?: number;
  quizCorrect?: number;

  // ─── Profile editing (toggled when user opens an edit flow) ──
  changingNickname?: boolean;
  changingUsername?: boolean;
  changingLevel?: boolean;
  changingLevelFromOnboarding?: boolean;

  // ─── Active question (set when an open-ended question is sent) ──
  currentQuestionId?: number;
  hintUsed?: boolean;

  // ─── Per-question flags (template-literal index signature) ──
  // These are keyed by the specific question ID so a kid can have parallel
  // retry/hint markers if questions are interleaved (rare but supported).
  // Set when the corresponding button is tapped, cleared after the answer.
  [key: `retry_${number}`]: boolean | undefined;
  [key: `hint_${number}`]: boolean | undefined;
}

export interface SessionData {
  activeProfileId: number | null;
  state: SessionState;
  pendingData: PendingData;
  locale: string;
}

export type BotContext = Context & SessionFlavor<SessionData>;

function initialSession(): SessionData {
  return {
    activeProfileId: null,
    state: 'idle',
    pendingData: {},
    locale: 'ar',
  };
}

export function sessionMiddleware() {
  return session<SessionData, BotContext>({ initial: initialSession });
}
