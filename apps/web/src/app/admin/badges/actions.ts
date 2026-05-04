"use server";

import { prisma } from "@numninjas/database";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/require-admin";

export async function createBadgeAction(formData: FormData) {
  await requireAdmin();
  const name = (formData.get("name") as string).trim();
  const description = (formData.get("description") as string)?.trim() || null;
  const iconEmoji = (formData.get("iconEmoji") as string)?.trim() || null;
  const awardTitle = (formData.get("awardTitle") as string)?.trim() || null;
  const badgeType = (formData.get("badgeType") as string).trim();
  const rankPositionStr = formData.get("rankPosition") as string;
  const rankPosition = rankPositionStr ? Number(rankPositionStr) : null;

  if (!name || !badgeType) {
    throw new Error("Badge name and type are required");
  }

  await prisma.badge.create({
    data: { name, description, iconEmoji, awardTitle, badgeType, rankPosition },
  });

  revalidatePath("/admin/badges");
}

export async function updateBadgeAction(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const name = (formData.get("name") as string).trim();
  const description = (formData.get("description") as string)?.trim() || null;
  const iconEmoji = (formData.get("iconEmoji") as string)?.trim() || null;
  const awardTitle = (formData.get("awardTitle") as string)?.trim() || null;
  const badgeType = (formData.get("badgeType") as string).trim();
  const rankPositionStr = formData.get("rankPosition") as string;
  const rankPosition = rankPositionStr ? Number(rankPositionStr) : null;

  if (!id || !name || !badgeType) {
    throw new Error("Required data is incomplete");
  }

  await prisma.badge.update({
    where: { id },
    data: { name, description, iconEmoji, awardTitle, badgeType, rankPosition },
  });

  revalidatePath("/admin/badges");
}

export async function deleteBadgeAction(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));

  if (!id) {
    throw new Error("Badge ID is required");
  }

  // Only allow deleting achievement badges
  const badge = await prisma.badge.findUnique({ where: { id } });
  if (!badge) {
    throw new Error("Badge not found");
  }
  if (badge.badgeType !== "achievement") {
    throw new Error("Cannot delete built-in rank badges");
  }

  // Check if badge has been awarded
  const awardCount = await prisma.userBadge.count({
    where: { badgeId: id },
  });

  if (awardCount > 0) {
    throw new Error(`Cannot delete badge: it's awarded to ${awardCount} users`);
  }

  await prisma.badge.delete({ where: { id } });

  revalidatePath("/admin/badges");
}
