import 'dotenv/config';

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const config = Object.freeze({
  botToken: requireEnv('BOT_TOKEN'),
  adminTelegramId: Number(requireEnv('ADMIN_TELEGRAM_ID')),
  channelUsername: process.env.CHANNEL_USERNAME || '', // e.g. '@NumNinjas'
  databaseUrl: process.env.DATABASE_URL || 'file:./dev.db',
  timezone: 'Africa/Cairo',
  isDev: process.env.NODE_ENV !== 'production',
});
