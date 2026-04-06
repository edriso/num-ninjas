"use server";

import { prisma } from "@numninjas/database";
import { revalidatePath } from "next/cache";

export async function createTopicAction(formData: FormData) {
  const levelId = Number(formData.get("levelId"));
  const name = (formData.get("name") as string).trim();
  const description = (formData.get("description") as string)?.trim() || null;

  if (!levelId || !name) {
    throw new Error("اسم الموضوع والمستوى مطلوبان");
  }

  // Auto-assign next orderInLevel
  const lastTopic = await prisma.topic.findFirst({
    where: { levelId },
    orderBy: { orderInLevel: "desc" },
  });
  const orderInLevel = (lastTopic?.orderInLevel ?? 0) + 1;

  await prisma.topic.create({
    data: { levelId, name, description, orderInLevel },
  });

  revalidatePath("/admin/topics");
}

export async function updateTopicAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = (formData.get("name") as string).trim();
  const description = (formData.get("description") as string)?.trim() || null;
  const orderInLevel = Number(formData.get("orderInLevel"));

  if (!id || !name || !orderInLevel) {
    throw new Error("البيانات المطلوبة غير مكتملة");
  }

  await prisma.topic.update({
    where: { id },
    data: { name, description, orderInLevel },
  });

  revalidatePath("/admin/topics");
}

export async function deleteTopicAction(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    throw new Error("معرف الموضوع مطلوب");
  }

  // Check if topic has questions
  const questionCount = await prisma.question.count({
    where: { topicId: id },
  });

  if (questionCount > 0) {
    throw new Error(`لا يمكن حذف الموضوع لأنه يحتوي على ${questionCount} سؤال`);
  }

  await prisma.topic.delete({ where: { id } });

  revalidatePath("/admin/topics");
}
