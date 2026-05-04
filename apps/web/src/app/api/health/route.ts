import { prisma } from '@numninjas/database';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; // never cache health checks

/**
 * Health check endpoint for Cloudflare / Hostinger / external monitors.
 *
 * Returns 200 with { status: 'ok', database: 'ok' } when the web process
 * is running AND can reach MySQL. Returns 503 with { status: 'degraded',
 * database: 'unreachable' } when MySQL is down — distinguishing process
 * uptime from end-to-end health.
 *
 * Uses SELECT 1 because it's the cheapest possible round-trip to MySQL
 * — comparable to a TCP ping but proves Prisma + the connection pool
 * are wired up correctly.
 */
export async function GET() {
  const startedAt = Date.now();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: 'ok',
      database: 'ok',
      latencyMs: Date.now() - startedAt,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: 'degraded',
        database: 'unreachable',
        error: String(err),
      },
      { status: 503 },
    );
  }
}
