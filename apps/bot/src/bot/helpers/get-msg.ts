import type { BotContext } from '../middleware/session';
import { getMessages, type Messages } from '../messages';

/**
 * Get localized messages for the current user.
 * Reads locale from session or defaults to 'ar'.
 */
export function getMsg(ctx: BotContext): Messages {
  const locale = ctx.session.locale || 'ar';
  return getMessages(locale);
}
