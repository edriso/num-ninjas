import { prisma } from "@numninjas/database";

const typeLabels: Record<string, string> = {
  string: "نص",
  integer: "رقم",
  boolean: "منطقي",
  time: "وقت",
};

export default async function SettingsPage() {
  const settings = await prisma.setting.findMany({
    orderBy: { settingKey: "asc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">الإعدادات</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-right font-medium">المفتاح</th>
                <th className="px-4 py-3 text-right font-medium">القيمة</th>
                <th className="px-4 py-3 text-right font-medium">النوع</th>
                <th className="px-4 py-3 text-right font-medium">الوصف</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {settings.map((setting) => (
                <tr key={setting.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-gray-700" dir="ltr">
                    {setting.settingKey}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900" dir="ltr">
                    {setting.value}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {settings.length === 0 && (
        <div className="text-center text-gray-400 py-12">لا يوجد إعدادات</div>
      )}
    </div>
  );
}
