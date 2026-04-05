import { Context, SessionFlavor, session } from 'grammy';
import type { SessionState } from '../../types.js';

export interface SessionData {
  activeProfileId: number | null;
  state: SessionState;
  pendingData: Record<string, unknown>;
}

export type BotContext = Context & SessionFlavor<SessionData>;

function initialSession(): SessionData {
  return {
    activeProfileId: null,
    state: 'idle',
    pendingData: {},
  };
}

export function sessionMiddleware() {
  return session<SessionData, BotContext>({ initial: initialSession });
}
