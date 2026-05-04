import { InlineKeyboard } from 'grammy';
import { prisma } from '@numninjas/database';
import { CB, cbBuild } from '../callbacks';

export async function buildLevelKeyboard(locale = 'ar') {
  const levels = await prisma.level.findMany({ orderBy: { rankOrder: 'asc' } });

  const keyboard = new InlineKeyboard();
  for (const level of levels) {
    const name = (locale === 'en' && level.nameEn) ? level.nameEn : level.name;
    keyboard.text(
      `${level.iconEmoji || '🥷'} ${name}`,
      cbBuild(CB.selectLevel, level.id),
    ).row();
  }

  return { keyboard, levels };
}
