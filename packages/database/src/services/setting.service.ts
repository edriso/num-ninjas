import prisma from '../client';

// In-memory cache for settings (refreshed on demand)
const cache = new Map<string, string>();

export async function loadSettings() {
  const settings = await prisma.setting.findMany();
  cache.clear();
  for (const s of settings) {
    cache.set(s.settingKey, s.value);
  }
}

export async function getSetting(key: string): Promise<string> {
  if (cache.size === 0) await loadSettings();
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
