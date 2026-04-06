"use client";

import { getDictionary } from "@/lib/dictionaries";

function getClientLocale(): "ar" | "en" {
  if (typeof document === "undefined") return "ar";
  const match = document.cookie.match(/(?:^|;\s*)locale=(\w+)/);
  return match?.[1] === "en" ? "en" : "ar";
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = getClientLocale();
  const d = getDictionary(locale);

  return (
    <div className="flex-1 bg-slate-50 flex flex-col items-center justify-center px-6">
      <span className="text-5xl mb-4">😵</span>
      <h2 className="text-xl font-bold text-red-600 mb-4">{d.error.title}</h2>
      <p className="text-gray-500 mb-6 text-center">
        {d.error.desc}
      </p>
      {process.env.NODE_ENV === "development" && (
        <pre className="text-xs text-red-400 bg-red-50 rounded-lg p-4 mb-6 max-w-lg overflow-auto">
          {error.message}
        </pre>
      )}
      <button
        onClick={reset}
        className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors"
      >
        {d.error.retry}
      </button>
    </div>
  );
}
