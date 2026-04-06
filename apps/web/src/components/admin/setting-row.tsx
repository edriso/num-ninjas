"use client";

import { useState, useRef } from "react";
import { updateSettingAction } from "@/app/admin/settings/actions";

type Setting = {
  id: number;
  settingKey: string;
  value: string;
  type: string;
  description: string | null;
};

const typeLabels: Record<string, string> = {
  string: "نص",
  integer: "رقم",
  boolean: "منطقي",
  time: "وقت",
};

export function SettingRow({ setting }: { setting: Setting }) {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(formData: FormData) {
    setSaving(true);
    try {
      await updateSettingAction(formData);
      setEditing(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : "حدث خطأ");
    } finally {
      setSaving(false);
    }
  }

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 font-mono text-xs text-gray-700" dir="ltr">
        {setting.settingKey}
      </td>
      <td className="px-4 py-3 font-medium text-gray-900" dir="ltr">
        {editing ? (
          <form action={handleSubmit} className="flex items-center gap-2">
            <input type="hidden" name="settingKey" value={setting.settingKey} />
            <input
              ref={inputRef}
              type="text"
              name="value"
              defaultValue={setting.value}
              autoFocus
              className="border border-gray-300 rounded px-2 py-1 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onKeyDown={(e) => {
                if (e.key === "Escape") setEditing(false);
              }}
            />
            <button
              type="submit"
              disabled={saving}
              className="text-green-600 hover:text-green-700 text-sm font-medium disabled:opacity-50"
            >
              {saving ? "..." : "حفظ"}
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="text-gray-400 hover:text-gray-600 text-sm"
            >
              إلغاء
            </button>
          </form>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="hover:bg-gray-100 rounded px-2 py-0.5 -mx-2 transition-colors cursor-pointer"
            title="انقر للتعديل"
          >
            {setting.value}
          </button>
        )}
      </td>
      <td className="px-4 py-3">
        <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
          {typeLabels[setting.type] ?? setting.type}
        </span>
      </td>
      <td className="px-4 py-3 text-gray-500">
        {setting.description ?? "-"}
      </td>
    </tr>
  );
}
