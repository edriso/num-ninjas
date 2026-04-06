import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

function createPrismaClient() {
  const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { __prisma: ReturnType<typeof createPrismaClient> };
const prisma = globalForPrisma.__prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.__prisma = prisma;

export default prisma;
