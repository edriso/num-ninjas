"use server";

import { prisma } from "@numninjas/database";
import { revalidatePath } from "next/cache";

export async function updateSettingAction(formData: FormData) {
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
