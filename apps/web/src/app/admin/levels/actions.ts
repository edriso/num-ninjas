"use server";

import { prisma } from "@numninjas/database";
import { revalidatePath } from "next/cache";

export async function updateLevelAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = (formData.get("name") as string).trim();
  const description = (formData.get("description") as string)?.trim() || null;
  const iconEmoji = (formData.get("iconEmoji") as string)?.trim() || null;

  if (!id || !name) {
    throw new Error("Level name is required");
  }

  await prisma.level.update({
    where: { id },
    data: { name, description, iconEmoji },
  });

  revalidatePath("/admin/levels");
}
