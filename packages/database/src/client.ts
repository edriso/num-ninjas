import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

function parseDbUrl(url: string) {
  const parsed = new URL(url);
  return {
    host: parsed.hostname,
    port: parseInt(parsed.port || '3306'),
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: parsed.pathname.replace(/^\//, ''),
  };
}

function createPrismaClient() {
  const dbConfig = parseDbUrl(process.env.DATABASE_URL!);
  const adapter = new PrismaMariaDb({
    ...dbConfig,
    connectionLimit: 5,
    idleTimeout: 60,          // Close idle connections after 60s (Hostinger kills them sooner)
    minimumIdle: 0,           // Don't keep idle connections open
    acquireTimeout: 15000,    // Wait up to 15s for a connection
    minDelayValidation: 500,  // Validate connections before use
  });
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { __prisma: ReturnType<typeof createPrismaClient> };
const prisma = globalForPrisma.__prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.__prisma = prisma;

export default prisma;
