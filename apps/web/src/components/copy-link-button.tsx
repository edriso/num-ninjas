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
      className="inline-flex items-center gap-1.5 text-slate-400 text-xs border border-slate-600 px-3 py-1.5 rounded-full hover:text-white hover:border-slate-400 transition-colors cursor-pointer"
    >
      {copied ? `✅ ${copiedLabel}` : `🔗 ${label}`}
    </button>
  );
}
