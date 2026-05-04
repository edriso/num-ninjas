import prisma from '../client';

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

export async function createProfile(
  accountId: bigint,
  nickname: string,
  levelId: number,
  telegramUsername?: string,
  locale?: string,
) {
  // Generate a unique username
  const username = await generateUniqueUsername(nickname, telegramUsername);

  const user = await prisma.user.create({
    data: { accountId, nickname, username, levelId, ...(locale ? { locale } : {}) },
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

export async function updateUsername(userId: number, username: string) {
  const clean = username.toLowerCase().trim();
  // URL-safe only: 3-20 chars, lowercase letters, numbers, underscore
  // No Arabic — URLs with Arabic get percent-encoded and look ugly
  if (!/^[a-z0-9_]{3,20}$/.test(clean)) {
    throw new Error('INVALID_USERNAME');
  }

  // Check uniqueness
  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing && existing.id !== userId) {
    throw new Error('USERNAME_TAKEN');
  }

  return prisma.user.update({
    where: { id: userId },
    data: { username },
  });
}

export async function findUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: { username },
    include: { level: true },
  });
}

/**
 * Resolve a public-facing profile by either username string or numeric ID.
 *
 * Privacy: returns null when the user has `isPublic = false`, regardless of
 * whether the username/ID is correct. This is the single chokepoint for
 * public website pages — profile page, certificate API, OG metadata. The
 * website is unauthenticated for kids, so a hidden profile means hidden from
 * everyone on the web.
 *
 * Backwards compat: numeric `usernameOrId` falls back to the integer user.id
 * lookup so old `/profile/123` links still work.
 */
export async function findPublicProfile(usernameOrId: string) {
  const user = /^\d+$/.test(usernameOrId)
    ? await prisma.user.findUnique({
        where: { id: parseInt(usernameOrId, 10) },
        include: { level: true },
      })
    : await prisma.user.findUnique({
        where: { username: usernameOrId },
        include: { level: true },
      });

  if (!user || !user.isPublic) return null;
  return user;
}

/**
 * Generate a unique username from nickname or Telegram username.
 *
 * Priority:
 * 1. Telegram username (if exists, e.g. "ahmed_m") → use as-is if available
 * 2. Nickname transliterated to safe chars + random digits
 *
 * If the generated username is taken, append incrementing numbers.
 */
async function generateUniqueUsername(
  nickname: string,
  telegramUsername?: string,
): Promise<string> {
  // Try Telegram username first (already ASCII-safe)
  if (telegramUsername) {
    const clean = telegramUsername.replace(/^@/, '').toLowerCase();
    if (clean.length >= 3) {
      const exists = await prisma.user.findUnique({ where: { username: clean } });
      if (!exists) return clean;
    }
  }

  // Generate from nickname: keep only URL-safe ASCII chars
  let base = nickname
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '')
    .slice(0, 14);

  // Arabic names produce empty string after filtering — use 'ninja' as base
  if (base.length < 2) base = 'ninja';

  // Add random 3-digit suffix
  const suffix = Math.floor(100 + Math.random() * 900);
  let candidate = `${base}${suffix}`;

  // Check uniqueness, increment if taken
  let attempts = 0;
  while (attempts < 10) {
    const exists = await prisma.user.findUnique({ where: { username: candidate } });
    if (!exists) return candidate;
    candidate = `${base}${suffix + attempts + 1}`;
    attempts++;
  }

  // Fallback: use timestamp
  return `${base}${Date.now() % 100000}`;
}
