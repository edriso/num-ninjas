import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

function createPrismaClient() {
  // Ensure mariadb:// prefix — the adapter requires it, but mysql:// is commonly used in env vars
  // Note: DO NOT add URL query params — PrismaMariaDb breaks with pool params in URL
  const url = process.env.DATABASE_URL!.replace(/^mysql:\/\//, 'mariadb://');
  const adapter = new PrismaMariaDb(url);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { __prisma: ReturnType<typeof createPrismaClient> };
const prisma = globalForPrisma.__prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.__prisma = prisma;

export default prisma;
