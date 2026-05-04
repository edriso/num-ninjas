"use server";

import { sendTelegramBroadcast } from "@/lib/telegram-broadcast";
import { requireAdmin } from "@/lib/require-admin";

const MAX_LENGTH = 4096; // Telegram's per-message text limit

export interface AnnounceState {
  sent?: number;
  failed?: number;
  total?: number;
  error?: string;
}

export async function announceAction(
  _prev: AnnounceState | null,
  formData: FormData,
): Promise<AnnounceState> {
  await requireAdmin();

  const ar = ((formData.get("ar") as string) ?? "").trim();
  const en = ((formData.get("en") as string) ?? "").trim();

  if (!ar && !en) {
    return { error: "Provide at least one message (Arabic and/or English)." };
  }
  if (ar.length > MAX_LENGTH || en.length > MAX_LENGTH) {
    return { error: `Each message must be at most ${MAX_LENGTH} characters.` };
  }

  // If only one locale provided, mirror it to the other so users with the
  // missing locale still get something. Admins can leave both blank → error.
  const arEffective = ar || en;
  const enEffective = en || ar;

  const result = await sendTelegramBroadcast({ ar: arEffective, en: enEffective });
  return result;
}
