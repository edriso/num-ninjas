"use client";

import { useActionState } from "react";
import { announceAction, type AnnounceState } from "@/app/admin/announce/actions";

export function AnnounceForm() {
  const [state, formAction, isPending] = useActionState<AnnounceState | null, FormData>(
    announceAction,
    null,
  );

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="ar" className="block text-sm font-medium text-gray-800 mb-1">
          Arabic message
        </label>
        <textarea
          id="ar"
          name="ar"
          rows={5}
          dir="rtl"
          placeholder="🥷 رسالة قصيرة..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="en" className="block text-sm font-medium text-gray-800 mb-1">
          English message
        </label>
        <textarea
          id="en"
          name="en"
          rows={5}
          placeholder="🥷 Short announcement..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <p className="text-xs text-gray-500">
        Markdown is supported (<code>*bold*</code>, <code>_italic_</code>,{" "}
        <code>[link](url)</code>). If you fill only one language, the other
        gets the same text.
      </p>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isPending ? "Sending..." : "Send to everyone"}
        </button>

        {state?.error && (
          <p className="text-sm text-red-600">{state.error}</p>
        )}

        {state && state.error === undefined && state.total !== undefined && (
          <p className="text-sm text-green-700">
            ✅ Sent {state.sent}/{state.total}
            {state.failed ? ` · ${state.failed} failed` : ""}
          </p>
        )}
      </div>
    </form>
  );
}
