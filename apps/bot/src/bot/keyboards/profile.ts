import { InlineKeyboard } from 'grammy';
import type { User, Level } from '@numninjas/database';
import { CB, cbBuild } from '../callbacks';

type UserWithLevel = User & { level: Level };

export function buildProfileKeyboard(
  profiles: UserWithLevel[],
  showAddButton = true,
  locale = 'ar',
) {
  const keyboard = new InlineKeyboard();

  for (const profile of profiles) {
    keyboard
      .text(
        `${profile.level.iconEmoji || '🥷'} ${profile.nickname}`,
        cbBuild(CB.pickProfile, profile.id),
      )
      .row();
  }

  if (showAddButton && profiles.length < 5) {
    const addLabel = locale === 'en' ? '➕ Add a child' : '➕ إضافة طفل';
    keyboard.text(addLabel, CB.addChild).row();
  }

  return keyboard;
}
