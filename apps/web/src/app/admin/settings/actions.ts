"use server";

import { prisma } from "@numninjas/database";
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

  revalidatePath("/admin/settings");
}
