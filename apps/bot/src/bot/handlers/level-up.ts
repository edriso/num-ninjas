import type { BotContext } from '../middleware/session';
import { prisma } from '@numninjas/database';
import { cbParam } from '../callbacks';

/**
 * Level-up flow handlers.
 *
 * Reached from showDailySummary (in question.ts) when a kid has mastered
 * every topic in their current level. They get a certificate image and a
 * choice — promote up, or stay and keep practicing. These two callback
 * handlers respond to that choice.
 *
 * Kept in their own file because they're self-contained: no shared state
 * with the answer flow, just (callback) → (DB update) → (UI message).
 */

export async function handleLevelUp(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  const data = ctx.callbackQuery?.data;
  if (!data) return;

  const nextLevelIdStr = cbParam(data, 0);
  const nextLevelId = nextLevelIdStr ? parseInt(nextLevelIdStr, 10) : NaN;
  if (Number.isNaN(nextLevelId)) return;

  const profileId = ctx.session.activeProfileId;
  if (!profileId) {
    const text = locale === 'en' ? 'Choose a player first /start' : 'اختر لاعباً أولاً /start';
    await ctx.answerCallbackQuery({ text });
    return;
  }

  const nextLevel = await prisma.level.findUnique({ where: { id: nextLevelId } });
  if (!nextLevel) {
    const errText = locale === 'en' ? 'An error occurred' : 'حدث خطأ';
    await ctx.answerCallbackQuery({ text: errText });
    return;
  }

  await prisma.user.update({
    where: { id: profileId },
    data: { levelId: nextLevelId },
  });

  const emoji = nextLevel.iconEmoji || '🥷';
  const nextLevelName = (locale === 'en' && nextLevel.nameEn) ? nextLevel.nameEn : nextLevel.name;
  await ctx.answerCallbackQuery();

  const levelUpText = locale === 'en'
    ? `🎉 *Promoted!*\n\nYou're now at ${emoji} ${nextLevelName}!\nLet's keep the challenge going! 💪`
    : `🎉 *تم الترقية!*\n\nأنت الآن في ${emoji} ${nextLevelName}!\nهيا نستمر في التحدي! 💪`;
  await ctx.editMessageText(levelUpText, { parse_mode: 'Markdown' });
}

export async function handleStayLevel(ctx: BotContext) {
  const locale = ctx.session.locale || 'ar';
  await ctx.answerCallbackQuery();
  const stayText = locale === 'en'
    ? '👍 Great! Keep practicing at this level — practice makes you stronger! 💪'
    : '👍 ممتاز! استمر في نفس المستوى — التمرين يجعلك أقوى! 💪';
  await ctx.editMessageText(stayText);
}
