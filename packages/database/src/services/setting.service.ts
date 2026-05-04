import prisma from '../client';

/**
 * Settings cache.
 *
 * Settings are read on every cron run and many message handlers, so caching
 * them is worth it — but admin updates from the website happen in a SEPARATE
 * process from the bot, so we can't propagate cache invalidation directly.
 *
 * Compromise: a TTL-based cache. Admin changes propagate within TTL_MS, which
 * is fast enough for a kids' app where settings rarely change and never
 * mid-cron-run. Each app process has its own cache.
 *
 * For explicit invalidation within the same process (e.g., the admin Server
 * Action that updates a setting), call invalidateSettings() — that path
 * doesn't help cross-process but is useful for tests and same-app updates.
 */

const TTL_MS = 60 * 1000; // 60 seconds — balances admin responsiveness vs DB load

const cache = new Map<string, string>();
let cacheLoadedAt = 0;

async function refreshCache(): Promise<void> {
  const settings = await prisma.setting.findMany();
  cache.clear();
  for (const s of settings) {
    cache.set(s.settingKey, s.value);
  }
  cacheLoadedAt = Date.now();
}

function isCacheStale(): boolean {
  return cache.size === 0 || Date.now() - cacheLoadedAt > TTL_MS;
}

/**
 * Force-load all settings into the in-memory cache.
 * Called explicitly at bot startup (so the first request is fast) and
 * implicitly whenever the cache is cold or expired.
 */
export async function loadSettings(): Promise<void> {
  await refreshCache();
}

/**
 * Drop the in-memory cache so the next read goes to the DB. Use after
 * mutating a setting in-process. Cross-process callers (e.g. the bot
 * reading a value the website just changed) rely on the TTL instead.
 */
export function invalidateSettings(): void {
  cache.clear();
  cacheLoadedAt = 0;
}

export async function getSetting(key: string): Promise<string> {
  if (isCacheStale()) await refreshCache();
  const value = cache.get(key);
  if (value === undefined) throw new Error(`Setting not found: ${key}`);
  return value;
}

export async function getSettingInt(key: string): Promise<number> {
  const value = await getSetting(key);
  return parseInt(value, 10);
}

export async function getSettingBool(key: string): Promise<boolean> {
  const value = await getSetting(key);
  return value === '1' || value === 'true';
}
