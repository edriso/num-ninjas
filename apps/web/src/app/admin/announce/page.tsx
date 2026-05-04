import { requireAdmin } from "@/lib/require-admin";
import { AnnounceForm } from "@/components/admin/announce-form";

export const metadata = { title: "Announce" };

export default async function AnnouncePage() {
  await requireAdmin();
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Announcement</h1>
      <p className="text-sm text-gray-600 mb-6">
        Send a one-shot message to every reachable user. Each account
        receives the message in their active profile&apos;s locale. Users who
        have blocked the bot are skipped automatically.
      </p>
      <AnnounceForm />
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
        <strong>Heads up:</strong> Telegram allows ~30 messages/second per bot
        to distinct chats. Large announcements take a few seconds — don&apos;t
        click send twice. The bot also caps at the 500 connections/hour
        Hostinger budget, so don&apos;t send more than once an hour.
      </div>
    </div>
  );
}
