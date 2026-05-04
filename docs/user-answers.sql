-- Show questions a specific user answered, with options, their answer,
-- the correct answer, and whether they got it right. Ordered newest first.
--
-- Usage: Replace TELEGRAM_ID_HERE with the user's Telegram account_id, then run in phpMyAdmin.
-- Example: find-and-replace TELEGRAM_ID_HERE with 5422369364
--
-- Contains 3 queries:
--   1. All answers
--   2. Correct answers only
--   3. Incorrect answers only
--
-- Notes:
--   - For MCQ questions, the correct answer is taken from options.is_correct = 1
--   - For open_ended questions, it's taken from questions.correct_answer
--   - All MCQ options are concatenated with " | " for readability

-- ─── 1. All answers ─────────────────────────────────────────────────
SELECT
  qa.answered_at,
  q.id AS question_id,
  q.question_type,
  q.locale,
  q.question_text,
  (
    SELECT GROUP_CONCAT(o.option_text ORDER BY o.id SEPARATOR ' | ')
    FROM options o
    WHERE o.question_id = q.id
  ) AS options,
  qa.user_answer,
  COALESCE(
    q.correct_answer,
    (
      SELECT o2.option_text
      FROM options o2
      WHERE o2.question_id = q.id AND o2.is_correct = 1
      LIMIT 1
    )
  ) AS correct_answer,
  CASE WHEN qa.is_correct = 1 THEN 'YES' ELSE 'NO' END AS correct,
  qa.hint_used
FROM question_attempts qa
JOIN users u ON u.id = qa.user_id
JOIN questions q ON q.id = qa.question_id
WHERE u.account_id = TELEGRAM_ID_HERE
ORDER BY qa.answered_at DESC;

-- ─── 2. Correct answers only ────────────────────────────────────────
SELECT
  qa.answered_at,
  q.id AS question_id,
  q.question_type,
  q.locale,
  q.question_text,
  (
    SELECT GROUP_CONCAT(o.option_text ORDER BY o.id SEPARATOR ' | ')
    FROM options o
    WHERE o.question_id = q.id
  ) AS options,
  qa.user_answer,
  COALESCE(
    q.correct_answer,
    (
      SELECT o2.option_text
      FROM options o2
      WHERE o2.question_id = q.id AND o2.is_correct = 1
      LIMIT 1
    )
  ) AS correct_answer,
  qa.hint_used
FROM question_attempts qa
JOIN users u ON u.id = qa.user_id
JOIN questions q ON q.id = qa.question_id
WHERE u.account_id = TELEGRAM_ID_HERE
  AND qa.is_correct = 1
ORDER BY qa.answered_at DESC;

-- ─── 3. Incorrect answers only ──────────────────────────────────────
SELECT
  qa.answered_at,
  q.id AS question_id,
  q.question_type,
  q.locale,
  q.question_text,
  (
    SELECT GROUP_CONCAT(o.option_text ORDER BY o.id SEPARATOR ' | ')
    FROM options o
    WHERE o.question_id = q.id
  ) AS options,
  qa.user_answer,
  COALESCE(
    q.correct_answer,
    (
      SELECT o2.option_text
      FROM options o2
      WHERE o2.question_id = q.id AND o2.is_correct = 1
      LIMIT 1
    )
  ) AS correct_answer,
  qa.hint_used
FROM question_attempts qa
JOIN users u ON u.id = qa.user_id
JOIN questions q ON q.id = qa.question_id
WHERE u.account_id = TELEGRAM_ID_HERE
  AND qa.is_correct = 0
ORDER BY qa.answered_at DESC;
