import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

function parseDbUrl(url: string) {
  const parsed = new URL(url.replace(/^mysql:\/\//, 'mariadb://'));
  return {
    host: parsed.hostname,
    port: parsed.port ? parseInt(parsed.port) : 3306,
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: parsed.pathname.replace(/^\//, ''),
  };
}

function createPrismaClient() {
  const { host, port, user, password, database } = parseDbUrl(process.env.DATABASE_URL!);

  // Use PoolConfig object instead of URL string to control pool behavior.
  // Hostinger shared hosting kills idle MySQL connections after ~60s (low wait_timeout).
  // The mariadb driver's default idleTimeout is 1800s (30 min) — way too high.
  // Setting idleTimeout=0 keeps connections alive indefinitely in the pool,
  // preventing the pool from proactively closing connections that Hostinger already killed.
  // Instead, we set a short idle timeout so stale connections are recycled before the server kills them.
  const adapter = new PrismaMariaDb(
    {
      host,
      port,
      user,
      password,
      database,
      connectionLimit: 5, // Shared hosting has limited connections
      idleTimeout: 30, // Release idle connections after 30s (before Hostinger's ~60s kill)
      minimumIdle: 1, // Keep at least 1 warm connection
      acquireTimeout: 15_000, // 15s to get a connection (default 10s is tight)
    },
    { database },
  );
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { __prisma: ReturnType<typeof createPrismaClient> };
const prisma = globalForPrisma.__prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.__prisma = prisma;

export default prisma;
