import { Context, SessionFlavor, session } from 'grammy';
import type { SessionState } from '@numninjas/database';

export interface SessionData {
  activeProfileId: number | null;
  state: SessionState;
  pendingData: Record<string, unknown>;
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
