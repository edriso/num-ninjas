-- Inspect a kid's question attempts.
--
-- One Telegram account can have up to 5 kid profiles, so we work in two steps:
--
--   Step 1 — Lookup: paste the parent's Telegram ID (the BigInt account_id)
--            into TELEGRAM_ID_HERE and run query 0. It lists every kid on that
--            account with their user_id, nickname, level, points, and last
--            active timestamp so you can pick the one to inspect.
--
--   Step 2 — Pick a user_id from query 0's output, paste it into USER_ID_HERE,
--            and run any of queries 1–3.
--
-- Queries 1–3 each return the question, all MCQ options, what the kid wrote,
-- the correct answer, and whether they got it right — ordered newest first.
--
-- Notes:
--   - For MCQ questions, the correct answer is taken from options.is_correct = 1
--   - For open_ended questions, it's taken from questions.correct_answer
--   - All MCQ options are concatenated with " | " for readability
--   - USER_ID_HERE is the integer users.id, NOT the parent's Telegram ID

-- ─── 0. Lookup: list all kids for a Telegram ID ─────────────────────
SELECT
  u.id AS user_id,
  u.nickname,
  u.username,
  l.name AS level,
  u.locale,
  u.streak_days,
  u.total_points,
  u.last_active_at,
  u.created_at
FROM users u
JOIN levels l ON l.id = u.level_id
WHERE u.account_id = TELEGRAM_ID_HERE
ORDER BY u.created_at ASC;

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
JOIN questions q ON q.id = qa.question_id
WHERE qa.user_id = USER_ID_HERE
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
JOIN questions q ON q.id = qa.question_id
WHERE qa.user_id = USER_ID_HERE
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
JOIN questions q ON q.id = qa.question_id
WHERE qa.user_id = USER_ID_HERE
  AND qa.is_correct = 0
ORDER BY qa.answered_at DESC;
