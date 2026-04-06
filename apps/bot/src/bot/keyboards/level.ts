import { InlineKeyboard } from 'grammy';
import { prisma } from '@numninjas/database';

export async function buildLevelKeyboard() {
  const levels = await prisma.level.findMany({ orderBy: { rankOrder: 'asc' } });

  const keyboard = new InlineKeyboard();
  for (const level of levels) {
    keyboard.text(
      `${level.iconEmoji || '🥋'} ${level.name}`,
      `select_level:${level.id}`,
    ).row();
  }

  return { keyboard, levels };
}
