/**
 * Escape user-controlled text for Telegram's legacy Markdown parse_mode.
 *
 * Why this exists:
 *   Nicknames and usernames are validated for length only (2-20 chars), not
 *   for Markdown special characters. A kid named `Mo*ham_ed` or
 *   `[click](url)` would either break formatting, inject a clickable link,
 *   or cause Telegram to 400 the entire message.
 *
 * What we escape:
 *   Telegram legacy Markdown treats four characters as formatting markers:
 *     _ → italic
 *     * → bold
 *     ` → inline code
 *     [ → start of link
 *   Everything else is literal. We prepend a backslash to each of these.
 *   We also escape `]` for symmetry; it's harmless when not preceded by `[`
 *   but keeps the regex simple and the output predictable.
 *
 *   See: https://core.telegram.org/bots/api#markdown-style
 *
 *   We do NOT use MarkdownV2 — its escape set is much larger (16 chars
 *   including ., -, !, etc.) which would force escaping in nearly every
 *   message, complicate static templates, and break Arabic punctuation.
 *
 * Lives in @numninjas/database (not in apps/bot) so it can be unit-tested
 * without a vitest setup in the bot package — the function is pure string
 * manipulation with no Telegram-runtime dependencies.
 *
 * Usage:
 *   const safe = escapeMd(user.nickname);
 *   await ctx.reply(`Hello, *${safe}*!`, { parse_mode: 'Markdown' });
 */
export function escapeMd(text: string): string {
  return text.replace(/[_*`[\]]/g, '\\$&');
}
