import { auth } from "@/auth";
import { AdminSidebar } from "@/components/admin/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Login page renders without layout chrome
  if (!session) {
    return <>{children}</>;
  }

  return (
    <div dir="ltr" className="h-screen overflow-hidden flex bg-gray-50">
      <AdminSidebar email={session.user?.email ?? ""} />
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
