import { createServer } from 'node:http';
import { prisma, logger } from '@numninjas/database';

/**
 * Tiny HTTP health server for the bot process.
 *
 * The bot is a long-polling Telegram client, so it has no HTTP surface by
 * default. Railway and other PaaS health-checks need an HTTP endpoint to
 * confirm the process is alive AND its dependencies (MySQL) are reachable.
 *
 * Endpoint: GET /health
 *   200 { status: 'ok', database: 'ok', uptimeSeconds: N, latencyMs: N }
 *   503 { status: 'degraded', database: 'unreachable', error: '...' }
 *
 * Listens on PORT env var (Railway sets this) or 8080 as a sensible local
 * default. Failures to bind are logged but don't crash the bot — the bot
 * is still usable without health checks.
 */
export function startHealthServer(): void {
  const port = parseInt(process.env.PORT ?? '8080', 10);

  const server = createServer(async (req, res) => {
    if (req.method !== 'GET' || req.url !== '/health') {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const startedAt = Date.now();
    try {
      await prisma.$queryRaw`SELECT 1`;
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          status: 'ok',
          database: 'ok',
          uptimeSeconds: Math.round(process.uptime()),
          latencyMs: Date.now() - startedAt,
        }),
      );
    } catch (err) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 503;
      res.end(
        JSON.stringify({
          status: 'degraded',
          database: 'unreachable',
          error: String(err),
          uptimeSeconds: Math.round(process.uptime()),
        }),
      );
    }
  });

  server.on('error', (err) => {
    // Don't crash the bot if the health port is unavailable — just log it.
    logger.warn('Health server failed to bind, continuing without it', {
      port,
      error: String(err),
    });
  });

  server.listen(port, () => {
    logger.info('Health server listening', { port });
  });
}
