import { describe, it, expect } from 'vitest';
import { CRON_RUN_RETENTION_DAYS } from '../services/cron-run.service';

// withCronRun, getCronRunOverview, getRecentCronRuns are DB-bound and need
// integration tests against a live MySQL — those live elsewhere. Here we
// pin the public contract: exported constants and types.

describe('CRON_RUN_RETENTION_DAYS', () => {
  it('is a positive integer', () => {
    expect(CRON_RUN_RETENTION_DAYS).toBeGreaterThan(0);
    expect(Number.isInteger(CRON_RUN_RETENTION_DAYS)).toBe(true);
  });

  it('is at least a week so a busy operator who skips checking for a few days still has history', () => {
    expect(CRON_RUN_RETENTION_DAYS).toBeGreaterThanOrEqual(7);
  });

  it('matches the documented 30-day default', () => {
    // Locked at 30 to match the rest of cleanup retention (scheduled_questions,
    // study_sessions). Bump deliberately if you change retention semantics.
    expect(CRON_RUN_RETENTION_DAYS).toBe(30);
  });
});
