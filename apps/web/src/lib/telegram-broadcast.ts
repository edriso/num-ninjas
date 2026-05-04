import { prisma } from "@numninjas/database";

/**
 * Direct-to-Telegram broadcast helper for the admin panel.
 *
 * Why direct (not via the bot process):
 *   The bot runs on Railway, the web app on Hostinger — separate processes
 *   with no shared memory. The two simplest IPC options are (1) call the
 *   Telegram HTTP API from the web with BOT_TOKEN, or (2) write to a
 *   broadcasts queue table and have the bot poll it. We use (1) because
 *   broadcasts are rare and the queue option requires a bot-side worker
 *   loop just for this feature.
 *
 *   Security trade-off: BOT_TOKEN is now in the web env. A web-app
 *   compromise lets the attacker spam users — but the same attacker could
 *   already corrupt questions or settings via admin Server Actions, so the
 *   marginal risk is small.
 *
 * Rate limit:
 *   Telegram caps bot broadcasts at 30 msg/sec per bot to distinct chats.
 *   We chunk at 25 with Promise.all per chunk; each chunk completes in the
 *   slowest send time (~300ms typical). 100 accounts ≈ 1.2 seconds.
 *
 * Errors:
 *   Per-account failures are counted (sent / failed) but never thrown — a
 *   single bad chat shouldn't break the whole announcement. The 'bot was
 *   blocked' 403 self-heals via the bot's session middleware on the user's
 *   next interaction, so we don't try to update blocked_at from here.
 */

const TELEGRAM_API = 'https://api.telegram.org';
const CHUNK_SIZE = 25;

export interface BroadcastInput {
  /** Arabic text. Sent to accounts whose active profile uses 'ar'. */
  ar: string;
  /** English text. Sent to accounts whose active profile uses 'en'. */
  en: string;
}

export interface BroadcastResult {
  sent: number;
  failed: number;
  total: number;
}

export async function sendTelegramBroadcast(input: BroadcastInput): Promise<BroadcastResult> {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    throw new Error('BOT_TOKEN missing — set it in the web env to enable announcements');
  }

  // Pull only reachable accounts (not blocked) with an active profile.
  // Same filter the bot's broadcast jobs use.
  const accounts = await prisma.account.findMany({
    where: { activeProfileId: { not: null }, blockedAt: null },
    select: {
      telegramId: true,
      activeProfile: { select: { locale: true } },
    },
  });

  let sent = 0;
  let failed = 0;

  for (let i = 0; i < accounts.length; i += CHUNK_SIZE) {
    const chunk = accounts.slice(i, i + CHUNK_SIZE);
    await Promise.all(
      chunk.map(async (account) => {
        const locale = account.activeProfile?.locale === 'en' ? 'en' : 'ar';
        const text = locale === 'en' ? input.en : input.ar;
        try {
          const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: Number(account.telegramId),
              text,
              parse_mode: 'Markdown',
            }),
          });
          if (res.ok) {
            sent++;
          } else {
            failed++;
          }
        } catch {
          failed++;
        }
      }),
    );
  }

  return { sent, failed, total: accounts.length };
}
