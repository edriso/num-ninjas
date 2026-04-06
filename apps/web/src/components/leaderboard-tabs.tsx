'use client';

import { useState, useEffect } from 'react';
import type { LevelRanking } from '@/lib/queries/leaderboard';

const STORAGE_KEY = 'numninjas_selected_level';

function rankBadge(rank: number): string {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return String(rank);
}

interface Props {
  levelRankings: LevelRanking[];
  locale: string;
  labels: {
    rank: string;
    name: string;
    correct: string;
    wrong: string;
    hints: string;
    days: string;
  };
}

export function LeaderboardTabs({ levelRankings, locale, labels }: Props) {
  const [selectedLevel, setSelectedLevel] = useState<number>(
    levelRankings[0]?.levelId ?? 0,
  );

  // Load saved tab from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const id = parseInt(saved, 10);
      if (levelRankings.some((l) => l.levelId === id)) {
        setSelectedLevel(id);
      }
    }
  }, [levelRankings]);

  // Save selected tab
  function selectLevel(id: number) {
    setSelectedLevel(id);
    localStorage.setItem(STORAGE_KEY, String(id));
  }

  const selected = levelRankings.find((l) => l.levelId === selectedLevel);
  const textAlign = locale === 'ar' ? 'text-right' : 'text-left';

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {levelRankings.map((level) => (
          <button
            key={level.levelId}
            onClick={() => selectLevel(level.levelId)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedLevel === level.levelId
                ? 'bg-slate-800 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>{level.levelEmoji}</span>
            {locale === 'en' && level.levelNameEn
              ? level.levelNameEn
              : level.levelName}
          </button>
        ))}
      </div>

      {/* Selected level table */}
      {selected && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs">
                  <th className={`py-2.5 px-4 ${textAlign} font-medium`}>
                    {labels.rank}
                  </th>
                  <th className={`py-2.5 px-4 ${textAlign} font-medium`}>
                    {labels.name}
                  </th>
                  <th className="py-2.5 px-4 text-center font-medium" dir="ltr">
                    {labels.correct}
                  </th>
                  <th className="py-2.5 px-4 text-center font-medium" dir="ltr">
                    {labels.wrong}
                  </th>
                  <th className="py-2.5 px-4 text-center font-medium" dir="ltr">
                    {labels.hints}
                  </th>
                  <th className="py-2.5 px-4 text-center font-medium" dir="ltr">
                    {labels.days}
                  </th>
                </tr>
              </thead>
              <tbody>
                {selected.rankings.slice(0, 10).map((entry) => (
                  <tr
                    key={entry.userId}
                    className="border-t border-slate-50 hover:bg-slate-50 transition-colors"
                  >
                    <td
                      className={`py-3 px-4 ${textAlign} ${entry.rank <= 3 ? 'text-xl' : 'text-sm text-slate-400'}`}
                    >
                      {rankBadge(entry.rank)}
                    </td>
                    <td
                      className={`py-3 px-4 ${textAlign} font-medium text-slate-800`}
                    >
                      {entry.nickname}
                    </td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-semibold">
                      {entry.correctCount}
                    </td>
                    <td className="py-3 px-4 text-center text-red-500">
                      {entry.wrongCount}
                    </td>
                    <td className="py-3 px-4 text-center text-amber-500">
                      {entry.hintCount}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-600">
                      {entry.activeDays}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
