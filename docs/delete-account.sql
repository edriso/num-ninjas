-- Delete a Telegram account and ALL related data
-- Usage: Replace TELEGRAM_ID_HERE with the actual Telegram ID, then run in phpMyAdmin
--
-- Example: To delete account 5422369364, find-and-replace TELEGRAM_ID_HERE with 5422369364

SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM scheduled_questions WHERE user_id IN (SELECT id FROM users WHERE account_id = TELEGRAM_ID_HERE);
DELETE FROM question_attempts WHERE user_id IN (SELECT id FROM users WHERE account_id = TELEGRAM_ID_HERE);
DELETE FROM study_sessions WHERE user_id IN (SELECT id FROM users WHERE account_id = TELEGRAM_ID_HERE);
DELETE FROM user_badges WHERE user_id IN (SELECT id FROM users WHERE account_id = TELEGRAM_ID_HERE);
DELETE FROM users WHERE account_id = TELEGRAM_ID_HERE;
DELETE FROM accounts WHERE telegram_id = TELEGRAM_ID_HERE;

SET FOREIGN_KEY_CHECKS = 1;
