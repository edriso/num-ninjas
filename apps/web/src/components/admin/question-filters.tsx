"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Level = {
  id: number;
  name: string;
  iconEmoji: string | null;
  topics: { id: number; name: string }[];
};

export function QuestionFilters({ levels }: { levels: Level[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const levelId = searchParams.get("levelId") ?? "";
  const topicId = searchParams.get("topicId") ?? "";
  const type = searchParams.get("type") ?? "";
  const locale = searchParams.get("locale") ?? "";

  const hasFilters = levelId || topicId || type || locale;

  const filteredTopics = levelId
    ? levels.find((l) => l.id === Number(levelId))?.topics ?? []
    : levels.flatMap((l) => l.topics);

  const navigate = useCallback(
    (overrides: Record<string, string>) => {
      const params = new URLSearchParams();
      const merged: Record<string, string> = {
        levelId,
        topicId,
        type,
        locale,
        ...overrides,
      };
      for (const [k, v] of Object.entries(merged)) {
        if (v) params.set(k, v);
      }
      // Reset page when filters change
      params.delete("page");
      router.push(`/admin/questions?${params.toString()}`);
    },
    [levelId, topicId, type, locale, router],
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={levelId}
          onChange={(e) =>
            navigate({ levelId: e.target.value, topicId: "" })
          }
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">All Levels</option>
          {levels.map((l) => (
            <option key={l.id} value={l.id}>
              {l.iconEmoji} {l.name}
            </option>
          ))}
        </select>

        <select
          value={topicId}
          onChange={(e) => navigate({ topicId: e.target.value })}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">All Topics</option>
          {filteredTopics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        <select
          value={type}
          onChange={(e) => navigate({ type: e.target.value })}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">All Types</option>
          <option value="mcq">Multiple Choice</option>
          <option value="open_ended">Open Ended</option>
        </select>

        <select
          value={locale}
          onChange={(e) => navigate({ locale: e.target.value })}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">All Languages</option>
          <option value="ar">AR Arabic</option>
          <option value="en">EN English</option>
        </select>

        {hasFilters && (
          <button
            onClick={() => router.push("/admin/questions")}
            className="text-sm text-red-500 hover:text-red-600"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}
