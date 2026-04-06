import { InlineKeyboard } from 'grammy';
import type { User, Level } from '@numninjas/database';

type UserWithLevel = User & { level: Level };

export function buildProfileKeyboard(profiles: UserWithLevel[], showAddButton = true) {
  const keyboard = new InlineKeyboard();

  for (const profile of profiles) {
    keyboard.text(
      `${profile.level.iconEmoji || '🥷'} ${profile.nickname}`,
      `pick_profile:${profile.id}`,
    ).row();
  }

  if (showAddButton && profiles.length < 5) {
    keyboard.text('➕ إضافة طفل', 'add_child').row();
  }

  return keyboard;
}
