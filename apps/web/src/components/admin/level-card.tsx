"use client";

import { useState } from "react";
import { updateLevelAction } from "@/app/admin/levels/actions";

type LevelData = {
  id: number;
  name: string;
  description: string | null;
  iconEmoji: string | null;
  _count: { topics: number; users: number };
};

export function LevelCard({ level }: { level: LevelData }) {
  const [editing, setEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300";

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    try {
      await updateLevelAction(formData);
      setEditing(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  }

  if (editing) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <form action={handleSubmit} className="space-y-3">
          <input type="hidden" name="id" value={level.id} />

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Icon
            </label>
            <input
              type="text"
              name="iconEmoji"
              defaultValue={level.iconEmoji ?? ""}
              className={inputClass + " w-20 text-center text-2xl"}
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={level.name}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Description
            </label>
            <input
              type="text"
              name="description"
              defaultValue={level.description ?? ""}
              placeholder="Level description (optional)"
              className={inputClass}
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="bg-gray-900 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-gray-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group">
      <div className="flex items-start justify-between">
        <div className="text-3xl mb-3">{level.iconEmoji}</div>
        <button
          onClick={() => setEditing(true)}
          className="text-gray-300 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity p-1"
          title="Edit"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
      <h2 className="text-lg font-bold text-gray-900">{level.name}</h2>
      {level.description && (
        <p className="text-sm text-gray-500 mt-1">{level.description}</p>
      )}
      <div className="flex gap-4 mt-4 text-sm text-gray-600">
        <div>
          <span className="font-medium">{level._count.topics}</span> topics
        </div>
        <div>
          <span className="font-medium">{level._count.users}</span> users
        </div>
      </div>
    </div>
  );
}
