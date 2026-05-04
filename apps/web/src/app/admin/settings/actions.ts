"use server";

import { prisma, invalidateSettings } from "@numninjas/database";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/require-admin";

export async function updateSettingAction(formData: FormData) {
  await requireAdmin();
  const settingKey = formData.get("settingKey") as string;
  const value = (formData.get("value") as string).trim();

  if (!settingKey || !value) {
    throw new Error("Key and value are required");
  }

  await prisma.setting.update({
    where: { settingKey },
    data: { value },
  });

  // Drop the web app's in-memory cache so the next request sees the new
  // value immediately. The bot process picks up the change within the
  // 60s cache TTL — see settings.service.ts for why we don't try to push.
  invalidateSettings();

  revalidatePath("/admin/settings");
}
