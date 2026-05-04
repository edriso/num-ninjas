import { getCronRunOverview, getRecentCronRuns } from '@numninjas/database';
import { requireAdmin } from '@/lib/require-admin';

export const metadata = { title: 'Cron Runs' };
export const dynamic = 'force-dynamic'; // observability data should never be cached

function formatDuration(ms: number | null): string {
  if (ms === null) return '—';
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

function formatRelative(date: Date | null): string {
  if (!date) return 'never';
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default async function CronPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  await requireAdmin();
  const sp = await searchParams;
  const focusName = sp.name;

  // Show the per-job overview table; if the admin clicks into a job name,
  // show its 50 most recent runs side-by-side.
  const [overview, recent] = await Promise.all([
    getCronRunOverview(),
    focusName ? getRecentCronRuns(focusName, 50) : Promise.resolve([]),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Cron Runs</h1>

      {/* Overview: one row per job name, sorted by most recent run */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Job</th>
                <th className="px-4 py-3 text-left font-medium">Last run</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-left font-medium">Duration</th>
                <th className="px-4 py-3 text-left font-medium">30d runs</th>
                <th className="px-4 py-3 text-left font-medium">30d failure rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {overview.map((row) => {
                const failurePct = Math.round(row.failureRate * 100);
                const failureColor =
                  failurePct === 0
                    ? 'text-gray-400'
                    : failurePct < 10
                      ? 'text-yellow-600'
                      : 'text-red-600';
                return (
                  <tr key={row.name} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-gray-800">
                      <a href={`?name=${encodeURIComponent(row.name)}`} className="hover:underline">
                        {row.name}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{formatRelative(row.lastRunAt)}</td>
                    <td className="px-4 py-3">
                      {row.lastSuccess === null && <span className="text-gray-400">running…</span>}
                      {row.lastSuccess === true && <span className="text-green-600">✅ ok</span>}
                      {row.lastSuccess === false && <span className="text-red-600">❌ failed</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {formatDuration(row.lastDurationMs)}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.totalRuns}</td>
                    <td className={`px-4 py-3 ${failureColor}`}>{failurePct}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {overview.length === 0 && (
            <div className="text-center text-gray-400 py-12">No cron runs recorded yet.</div>
          )}
        </div>
      </div>

      {/* Detail: recent runs of the selected job */}
      {focusName && (
        <>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent runs · <span className="font-mono">{focusName}</span>
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Started</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                    <th className="px-4 py-3 text-left font-medium">Duration</th>
                    <th className="px-4 py-3 text-left font-medium">Stats</th>
                    <th className="px-4 py-3 text-left font-medium">Error</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recent.map((run) => (
                    <tr key={run.id} className="hover:bg-gray-50 align-top">
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                        {run.startedAt.toISOString().replace('T', ' ').slice(0, 19)}
                      </td>
                      <td className="px-4 py-3">
                        {run.finishedAt === null && <span className="text-gray-400">running…</span>}
                        {run.finishedAt !== null && run.success && (
                          <span className="text-green-600">✅</span>
                        )}
                        {run.finishedAt !== null && !run.success && (
                          <span className="text-red-600">❌</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {formatDuration(run.durationMs)}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        <code className="text-xs">{run.statsJson || '—'}</code>
                      </td>
                      <td className="px-4 py-3 text-red-600">
                        {run.errorMessage ? (
                          <details>
                            <summary className="cursor-pointer text-xs">
                              {run.errorMessage.slice(0, 80)}
                              {run.errorMessage.length > 80 ? '…' : ''}
                            </summary>
                            <pre className="mt-1 text-xs whitespace-pre-wrap">
                              {run.errorMessage}
                            </pre>
                          </details>
                        ) : (
                          '—'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {recent.length === 0 && (
                <div className="text-center text-gray-400 py-8">No recent runs for this job.</div>
              )}
            </div>
          </div>
        </>
      )}

      <p className="mt-6 text-xs text-gray-400">
        Rows older than 30 days are pruned by the weekly cleanup job.
      </p>
    </div>
  );
}
