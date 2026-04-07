"use client";

import { useState } from "react";
import {
  createBadgeAction,
  updateBadgeAction,
  deleteBadgeAction,
} from "@/app/admin/badges/actions";

type Badge = {
  id: number;
  name: string;
  description: string | null;
  iconEmoji: string | null;
  awardTitle: string | null;
  badgeType: string;
  rankPosition: number | null;
};

const badgeTypeLabels: Record<string, string> = {
  achievement: "Achievement",
  weekly_rank: "Weekly Rank",
  monthly_rank: "Monthly Rank",
  yearly_rank: "Yearly Rank",
};

const badgeTypeOptions = [
  { value: "achievement", label: "Achievement" },
  { value: "weekly_rank", label: "Weekly Rank" },
  { value: "monthly_rank", label: "Monthly Rank" },
  { value: "yearly_rank", label: "Yearly Rank" },
];

const inputClass =
  "border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300";
const labelClass = "block text-xs font-medium text-gray-500 mb-1";

export function BadgeList({ badges }: { badges: Badge[] }) {
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleCreate(formData: FormData) {
    setSubmitting(true);
    try {
      await createBadgeAction(formData);
      setShowCreate(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleUpdate(formData: FormData) {
    setSubmitting(true);
    try {
      await updateBadgeAction(formData);
      setEditingId(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(formData: FormData) {
    setSubmitting(true);
    try {
      await deleteBadgeAction(formData);
      setDeletingId(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* Header with create button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Badges</h1>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800"
        >
          {showCreate ? "Cancel" : "Add Badge +"}
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <form
          action={handleCreate}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6 space-y-4"
        >
          <h3 className="font-bold text-gray-800 mb-3">New Badge</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name *</label>
              <input type="text" name="name" required className={inputClass + " w-full"} autoFocus />
            </div>
            <div>
              <label className={labelClass}>Icon</label>
              <input type="text" name="iconEmoji" className={inputClass + " w-full"} placeholder="e.g. 🏆" />
            </div>
            <div>
              <label className={labelClass}>Award Title</label>
              <input type="text" name="awardTitle" className={inputClass + " w-full"} />
            </div>
            <div>
              <label className={labelClass}>Type *</label>
              <select name="badgeType" required className={inputClass + " w-full"}>
                {badgeTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Rank Position</label>
              <input type="number" name="rankPosition" min={1} className={inputClass + " w-full"} placeholder="Optional" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Description</label>
              <input type="text" name="description" className={inputClass + " w-full"} />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Adding..." : "Add Badge"}
          </button>
        </form>
      )}

      {/* Badges grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((badge) => (
          <div key={badge.id}>
            {editingId === badge.id ? (
              <BadgeEditForm
                badge={badge}
                submitting={submitting}
                onSubmit={handleUpdate}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 group">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{badge.iconEmoji}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-gray-900">{badge.name}</h3>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => {
                            setEditingId(badge.id);
                            setDeletingId(null);
                          }}
                          className="text-gray-300 hover:text-gray-600 p-1"
                          title="Edit"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        {badge.badgeType === "achievement" && (
                          deletingId === badge.id ? (
                            <form action={handleDelete} className="flex items-center gap-1">
                              <input type="hidden" name="id" value={badge.id} />
                              <span className="text-xs text-red-600">Sure?</span>
                              <button type="submit" disabled={submitting} className="text-red-600 hover:text-red-700 text-xs font-medium disabled:opacity-50">
                                Yes
                              </button>
                              <button type="button" onClick={() => setDeletingId(null)} className="text-gray-400 hover:text-gray-600 text-xs">
                                No
                              </button>
                            </form>
                          ) : (
                            <button
                              onClick={() => {
                                setDeletingId(badge.id);
                                setEditingId(null);
                              }}
                              className="text-gray-300 hover:text-red-500 p-1"
                              title="Delete"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                    {badge.awardTitle && (
                      <p className="text-sm text-blue-600 mt-0.5">{badge.awardTitle}</p>
                    )}
                    {badge.description && (
                      <p className="text-sm text-gray-500 mt-1">{badge.description}</p>
                    )}
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                      {badgeTypeLabels[badge.badgeType] ?? badge.badgeType}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {badges.length === 0 && (
        <div className="text-center text-gray-400 py-12">No badges</div>
      )}
    </div>
  );
}

function BadgeEditForm({
  badge,
  submitting,
  onSubmit,
  onCancel,
}: {
  badge: Badge;
  submitting: boolean;
  onSubmit: (formData: FormData) => Promise<void>;
  onCancel: () => void;
}) {
  return (
    <form
      action={onSubmit}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-3"
    >
      <input type="hidden" name="id" value={badge.id} />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Name *</label>
          <input type="text" name="name" defaultValue={badge.name} required className={inputClass + " w-full"} autoFocus />
        </div>
        <div>
          <label className={labelClass}>Icon</label>
          <input type="text" name="iconEmoji" defaultValue={badge.iconEmoji ?? ""} className={inputClass + " w-full"} />
        </div>
        <div>
          <label className={labelClass}>Award Title</label>
          <input type="text" name="awardTitle" defaultValue={badge.awardTitle ?? ""} className={inputClass + " w-full"} />
        </div>
        <div>
          <label className={labelClass}>Type *</label>
          <select name="badgeType" defaultValue={badge.badgeType} required className={inputClass + " w-full"}>
            {badgeTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Rank Position</label>
          <input type="number" name="rankPosition" defaultValue={badge.rankPosition ?? ""} min={1} className={inputClass + " w-full"} />
        </div>
        <div>
          <label className={labelClass}>Description</label>
          <input type="text" name="description" defaultValue={badge.description ?? ""} className={inputClass + " w-full"} />
        </div>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="bg-gray-900 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-gray-800 disabled:opacity-50"
        >
          {submitting ? "..." : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
