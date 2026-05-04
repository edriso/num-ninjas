-- NumNinjas Database Schema
-- Run this in phpMyAdmin for your database

CREATE TABLE IF NOT EXISTS `accounts` (
  `telegram_id` BIGINT NOT NULL,
  `active_profile_id` INT NULL,
  `last_nudge_at` DATETIME(3) NULL,
  `blocked_at` DATETIME(3) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`telegram_id`),
  UNIQUE INDEX `accounts_active_profile_id_key` (`active_profile_id`),
  INDEX `accounts_blocked_at_idx` (`blocked_at`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `levels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  `name_en` VARCHAR(191) NULL,
  `rank_order` INT NOT NULL,
  `description` VARCHAR(191) NULL,
  `description_en` VARCHAR(191) NULL,
  `icon_emoji` VARCHAR(191) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `account_id` BIGINT NOT NULL,
  `nickname` VARCHAR(191) NOT NULL,
  `username` VARCHAR(191) NULL,
  `locale` VARCHAR(191) NOT NULL DEFAULT 'ar',
  `is_public` BOOLEAN NOT NULL DEFAULT true,
  `level_id` INT NOT NULL,
  `streak_days` INT NOT NULL DEFAULT 0,
  `total_points` INT NOT NULL DEFAULT 0,
  `last_active_at` DATETIME(3) NULL,
  `last_nudge_at` DATETIME(3) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `users_username_key` (`username`),
  INDEX `users_account_id_idx` (`account_id`),
  INDEX `users_level_id_idx` (`level_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `topics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level_id` INT NOT NULL,
  `name` VARCHAR(191) NOT NULL,
  `name_en` VARCHAR(191) NULL,
  `description` VARCHAR(191) NULL,
  `description_en` VARCHAR(191) NULL,
  `order_in_level` INT NOT NULL DEFAULT 1,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `topic_id` INT NOT NULL,
  `question_type` VARCHAR(191) NOT NULL,
  `locale` VARCHAR(191) NOT NULL DEFAULT 'ar',
  `real_life_context` VARCHAR(191) NULL,
  `question_text` VARCHAR(191) NOT NULL,
  `correct_answer` VARCHAR(191) NULL,
  `correct_answer_numeric` DOUBLE NULL,
  `hint_text` VARCHAR(191) NULL,
  `explanation` VARCHAR(191) NOT NULL,
  `image_url` VARCHAR(191) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `questions_topic_id_locale_idx` (`topic_id`, `locale`),
  INDEX `questions_topic_id_idx` (`topic_id`),
  INDEX `questions_locale_idx` (`locale`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `options` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question_id` INT NOT NULL,
  `option_text` VARCHAR(191) NOT NULL,
  `is_correct` BOOLEAN NOT NULL DEFAULT false,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `scheduled_questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `position` INT NOT NULL,
  `scheduled_date` DATETIME(3) NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_position_date` (`user_id`, `position`, `scheduled_date`),
  INDEX `scheduled_questions_scheduled_date_idx` (`scheduled_date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `study_sessions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `session_date` DATETIME(3) NOT NULL,
  `questions_sent` INT NOT NULL DEFAULT 0,
  `questions_answered` INT NOT NULL DEFAULT 0,
  `is_complete` BOOLEAN NOT NULL DEFAULT false,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_session_date` (`user_id`, `session_date`),
  INDEX `study_sessions_session_date_idx` (`session_date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `question_attempts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `user_answer` VARCHAR(191) NULL,
  `is_correct` BOOLEAN NOT NULL DEFAULT false,
  `hint_used` BOOLEAN NOT NULL DEFAULT false,
  `answered_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  INDEX `question_attempts_user_id_answered_at_idx` (`user_id`, `answered_at`),
  INDEX `question_attempts_question_id_idx` (`question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `badges` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  `name_en` VARCHAR(191) NULL,
  `award_title` VARCHAR(191) NULL,
  `award_title_en` VARCHAR(191) NULL,
  `description` VARCHAR(191) NULL,
  `description_en` VARCHAR(191) NULL,
  `icon_emoji` VARCHAR(191) NULL,
  `badge_type` VARCHAR(191) NOT NULL,
  `rank_position` INT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `user_badges` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `badge_id` INT NOT NULL,
  `period_label` VARCHAR(191) NOT NULL,
  `period_label_en` VARCHAR(191) NULL,
  `period_start` DATETIME(3) NOT NULL,
  `metric_summary` VARCHAR(191) NULL,
  `metric_summary_en` VARCHAR(191) NULL,
  `earned_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_badge_period` (`user_id`, `badge_id`, `period_start`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `settings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `setting_key` VARCHAR(191) NOT NULL,
  `value` VARCHAR(191) NOT NULL,
  `type` VARCHAR(191) NOT NULL DEFAULT 'string',
  `description` VARCHAR(191) NULL,
  `description_en` VARCHAR(191) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `settings_setting_key_key` (`setting_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(191) NOT NULL,
  `password` VARCHAR(191) NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `admins_email_key` (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Foreign keys
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_active_profile_id_fkey` FOREIGN KEY (`active_profile_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE `users` ADD CONSTRAINT `users_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`telegram_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `users` ADD CONSTRAINT `users_level_id_fkey` FOREIGN KEY (`level_id`) REFERENCES `levels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `topics` ADD CONSTRAINT `topics_level_id_fkey` FOREIGN KEY (`level_id`) REFERENCES `levels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `questions` ADD CONSTRAINT `questions_topic_id_fkey` FOREIGN KEY (`topic_id`) REFERENCES `topics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `options` ADD CONSTRAINT `options_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `scheduled_questions` ADD CONSTRAINT `scheduled_questions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `scheduled_questions` ADD CONSTRAINT `scheduled_questions_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `study_sessions` ADD CONSTRAINT `study_sessions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `question_attempts` ADD CONSTRAINT `question_attempts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `question_attempts` ADD CONSTRAINT `question_attempts_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `user_badges` ADD CONSTRAINT `user_badges_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `user_badges` ADD CONSTRAINT `user_badges_badge_id_fkey` FOREIGN KEY (`badge_id`) REFERENCES `badges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
