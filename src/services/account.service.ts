import prisma from '../db/prisma.js';

export async function findOrCreateAccount(telegramId: bigint) {
  return prisma.account.upsert({
    where: { telegramId },
    update: {},
    create: { telegramId },
    include: { users: { include: { level: true } }, activeProfile: { include: { level: true } } },
  });
}

export async function getProfiles(telegramId: bigint) {
  return prisma.user.findMany({
    where: { accountId: telegramId },
    include: { level: true },
    orderBy: { createdAt: 'asc' },
  });
}

export async function getActiveProfile(telegramId: bigint) {
  const account = await prisma.account.findUnique({
    where: { telegramId },
    include: { activeProfile: { include: { level: true } } },
  });
  return account?.activeProfile ?? null;
}

export async function createProfile(accountId: bigint, nickname: string, levelId: number) {
  const user = await prisma.user.create({
    data: { accountId, nickname, levelId },
    include: { level: true },
  });

  // Auto-set as active profile
  await prisma.account.update({
    where: { telegramId: accountId },
    data: { activeProfileId: user.id },
  });

  return user;
}

export async function setActiveProfile(telegramId: bigint, profileId: number) {
  await prisma.account.update({
    where: { telegramId },
    data: { activeProfileId: profileId },
  });
}

export async function getProfileCount(telegramId: bigint) {
  return prisma.user.count({ where: { accountId: telegramId } });
}

export async function updateNickname(userId: number, nickname: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { nickname },
  });
}
