import prisma from '../client';

/**
 * Cron-run observability.
 *
 * Every scheduled or manually-triggered job is wrapped in withCronRun,
 * which inserts a row at start, runs the work, then updates the row with
 * success / failure / duration / stats. The result is a queryable history
 * of "what ran, when, and how it went" — useful for both the admin panel
 * and for catching silently-failed jobs.
 *
 * Failure policy:
 *   * If the job itself throws, the row is marked success=false with the
 *     error message, then the original exception is re-thrown so the
 *     scheduler's own catch can log/handle it normally.
 *   * If the bookkeeping itself fails (DB unreachable at start, can't
 *     INSERT), we don't fail the job — observability shouldn't block
 *     business logic. We log a warning and run the job without tracking.
 *
 * Retention:
 *   The weekly cleanup cron deletes rows older than CRON_RUN_RETENTION_DAYS
 *   so this table stays small even on long-running deployments.
 */

const ERROR_MESSAGE_MAX_LENGTH = 4000; // truncate so a giant stack trace doesn't blow up the row

/**
 * Days to keep cron_runs rows before the cleanup job deletes them.
 * Exported so tests and the cleanup service share one definition.
 */
export const CRON_RUN_RETENTION_DAYS = 30;

export interface CronRunStats {
  // Free-form record of counters/metrics produced by the job. Stored as JSON.
  // Examples: { sent: 12, failed: 0 }, { resetCount: 3 }, { prepared: 100, skippedSleeping: 5 }.
  [key: string]: number | string | boolean | null | undefined;
}

/**
 * Wrap a cron-job function in observability. Records start/finish/duration/stats
 * to the cron_runs table. Re-throws any error so callers can still react.
 *
 * Usage:
 *   await withCronRun('sendFirstQuestion', async (track) => {
 *     const { sent, failed } = await sendFirstQuestion(bot);
 *     track({ sent, failed });
 *   });
 */
export async function withCronRun<T>(
  name: string,
  fn: (track: (stats: CronRunStats) => void) => Promise<T>,
): Promise<T> {
  let runId: number | null = null;
  let stats: CronRunStats = {};
  const startedAt = new Date();

  // Bookkeeping must never block the job: if the INSERT fails, we run the
  // job anyway and just don't record anything for this execution.
  try {
    const created = await prisma.cronRun.create({
      data: { name, startedAt, success: false },
      select: { id: true },
    });
    runId = created.id;
  } catch (err) {
    // Note: can't use logger here without a circular import — services don't
    // know about apps/bot's logger wrapper. Swallow with stderr only.
    console.warn('[cron-run] Failed to record start row, continuing without tracking', {
      name,
      error: String(err),
    });
  }

  const track = (incoming: CronRunStats) => {
    stats = { ...stats, ...incoming };
  };

  let result: T;
  try {
    result = await fn(track);
  } catch (err) {
    if (runId !== null) {
      const finishedAt = new Date();
      await prisma.cronRun
        .update({
          where: { id: runId },
          data: {
            success: false,
            finishedAt,
            durationMs: finishedAt.getTime() - startedAt.getTime(),
            errorMessage: truncateError(err),
            statsJson: serializeStats(stats),
          },
        })
        .catch(() => undefined); // bookkeeping failures still don't mask the real error
    }
    throw err;
  }

  if (runId !== null) {
    const finishedAt = new Date();
    await prisma.cronRun
      .update({
        where: { id: runId },
        data: {
          success: true,
          finishedAt,
          durationMs: finishedAt.getTime() - startedAt.getTime(),
          statsJson: serializeStats(stats),
        },
      })
      .catch(() => undefined);
  }

  return result;
}

function truncateError(err: unknown): string {
  const s = String(err instanceof Error && err.stack ? err.stack : err);
  return s.length > ERROR_MESSAGE_MAX_LENGTH ? s.slice(0, ERROR_MESSAGE_MAX_LENGTH) : s;
}

function serializeStats(stats: CronRunStats): string | null {
  if (Object.keys(stats).length === 0) return null;
  try {
    return JSON.stringify(stats);
  } catch {
    return null;
  }
}

// ─── Read helpers (used by admin panel) ─────────────────────────────

export interface CronRunSummary {
  name: string;
  lastRunAt: Date | null;
  lastSuccess: boolean | null;
  lastDurationMs: number | null;
  totalRuns: number;
  failureRate: number; // 0..1, last 30 days
}

/**
 * Latest status of each distinct job name, for the admin overview page.
 * Returns one row per known job name with its most-recent run summary.
 */
export async function getCronRunOverview(sinceDays = 30): Promise<CronRunSummary[]> {
  const since = new Date();
  since.setUTCDate(since.getUTCDate() - sinceDays);

  // Pull the latest run per name plus aggregate counts. Two queries instead
  // of one because correlated subqueries are clumsy in Prisma; this is a
  // rarely-hit admin page so simplicity wins over query count.
  const allNames = await prisma.cronRun.findMany({
    where: { startedAt: { gte: since } },
    distinct: ['name'],
    select: { name: true },
  });

  const summaries: CronRunSummary[] = [];
  for (const { name } of allNames) {
    const [latest, total, failures] = await Promise.all([
      prisma.cronRun.findFirst({
        where: { name },
        orderBy: { startedAt: 'desc' },
        select: { startedAt: true, success: true, durationMs: true, finishedAt: true },
      }),
      prisma.cronRun.count({ where: { name, startedAt: { gte: since } } }),
      prisma.cronRun.count({
        where: { name, startedAt: { gte: since }, success: false, finishedAt: { not: null } },
      }),
    ]);

    summaries.push({
      name,
      lastRunAt: latest?.startedAt ?? null,
      lastSuccess: latest?.finishedAt ? latest.success : null,
      lastDurationMs: latest?.durationMs ?? null,
      totalRuns: total,
      failureRate: total === 0 ? 0 : failures / total,
    });
  }

  summaries.sort((a, b) => {
    const aTime = a.lastRunAt?.getTime() ?? 0;
    const bTime = b.lastRunAt?.getTime() ?? 0;
    return bTime - aTime;
  });
  return summaries;
}

/**
 * Recent runs of a specific job, newest first. Used by the admin detail view.
 */
export async function getRecentCronRuns(name: string, limit = 50) {
  return prisma.cronRun.findMany({
    where: { name },
    orderBy: { startedAt: 'desc' },
    take: limit,
  });
}
