-- Migration: add cron_runs table for scheduled-job observability
-- Date: 2026-05-04
--
-- A new bookkeeping table that records every execution of a scheduled or
-- manually-triggered job. Lets us answer "did the 14:30 send actually run
-- today?" without grepping logs, surface the latest status of each job in
-- the admin panel, and (eventually) detect overdue jobs.
--
-- Lifecycle of a row:
--   * Inserted at the start of every run with: name, started_at, success=false,
--     finished_at=null. The id of this row is the "current run" handle.
--   * Updated when the job finishes (success or failure): success=true|false,
--     finished_at=NOW(), duration_ms, stats_json (JSON-encoded counts), and
--     error_message on failure.
--   * Deleted by the weekly cleanup cron when older than 30 days. The
--     started_at index makes the cleanup query fast.
--
-- Safe to re-run: uses information_schema guards.

SET @schema = DATABASE();

SET @tbl_exists = (
  SELECT COUNT(*) FROM information_schema.TABLES
  WHERE TABLE_SCHEMA = @schema AND TABLE_NAME = 'cron_runs'
);
SET @sql = IF(@tbl_exists = 0,
  'CREATE TABLE `cron_runs` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `started_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `finished_at` DATETIME(3) NULL,
    `success` BOOLEAN NOT NULL DEFAULT false,
    `duration_ms` INT NULL,
    `stats_json` TEXT NULL,
    `error_message` TEXT NULL,
    PRIMARY KEY (`id`),
    INDEX `cron_runs_name_started_at_idx` (`name`, `started_at` DESC),
    INDEX `cron_runs_started_at_idx` (`started_at`)
  ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci',
  'SELECT "cron_runs already exists" AS note'
);
PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;
