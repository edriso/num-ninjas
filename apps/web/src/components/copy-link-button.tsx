'use client';

import { useState } from 'react';

export function CopyLinkButton({ label, copiedLabel }: { label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 bg-slate-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-600 transition-colors cursor-pointer"
    >
      {copied ? `✅ ${copiedLabel}` : `🔗 ${label}`}
    </button>
  );
}
