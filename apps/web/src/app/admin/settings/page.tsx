import { prisma } from '@numninjas/database';
import { SettingRow } from '@/components/admin/setting-row';
import { requireAdmin } from '@/lib/require-admin';

export default async function SettingsPage() {
  await requireAdmin();
  const settings = await prisma.setting.findMany({
    orderBy: { settingKey: 'asc' },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Key</th>
                <th className="px-4 py-3 text-left font-medium">Value</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {settings.map((setting) => (
                <SettingRow
                  key={setting.id}
                  setting={{
                    id: setting.id,
                    settingKey: setting.settingKey,
                    value: setting.value,
                    type: setting.type,
                    description: setting.description,
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {settings.length === 0 && <div className="text-center text-gray-400 py-12">No settings</div>}
    </div>
  );
}
