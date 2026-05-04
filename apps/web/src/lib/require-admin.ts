import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * Auth gate for admin server components and Server Actions.
 *
 * Why this exists:
 *   - The Next.js 16 proxy (apps/web/src/proxy.ts) only checks for the
 *     presence of an Auth.js session cookie because the Edge Runtime can't
 *     import Prisma (per CLAUDE.md). A forged cookie passes that gate.
 *   - The admin layout calls `auth()` for the sidebar email but renders
 *     children without a session for the login page case, so it can't be
 *     trusted as the redirect chokepoint either.
 *   - Per Next.js 16 docs ("Authentication and authorization in Server
 *     Functions"), every page and Server Action must verify auth itself
 *     rather than relying on the proxy alone.
 *
 * Usage:
 *   - At the top of every admin page (server component): `await requireAdmin();`
 *   - At the top of every admin Server Action: `await requireAdmin();`
 *
 * Returns the verified session so callers can avoid a duplicate `auth()` call.
 */
export async function requireAdmin() {
  const session = await auth();
  if (!session) redirect("/admin/login");
  return session;
}
