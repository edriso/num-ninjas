# Database Schema — نينجا الأرقام

## ER Diagram

```
┌──────────────┐       ┌──────────────┐
│   accounts   │       │    admins     │
│──────────────│       │──────────────│
│ telegram_id  │◄─┐    │ id           │
│ active_profile_id │  │ email        │
│ created_at   │   │   │ password     │
│ updated_at   │   │   │ created_at   │
└──────┬───────┘   │   │ updated_at   │
       │           │   └──────────────┘
       │ 1:N       │
       ▼           │
┌──────────────┐   │   ┌──────────────┐
│    users     │   │   │    levels    │
│──────────────│   │   │──────────────│
│ id           │◄──┘   │ id           │
│ account_id   │       │ name         │
│ nickname     │       │ rank_order   │
│ username     │  N:1  │ description  │
│ level_id     │──────►│ icon_emoji   │
│ streak_days  │       │ created_at   │
│ total_points │       │ updated_at   │
│ last_active_at│      └──────┬───────┘
│ created_at   │              │
│ updated_at   │              │ 1:N
└──┬───┬───┬───┘              ▼
   │   │   │          ┌──────────────┐
   │   │   │          │    topics    │
   │   │   │          │──────────────│
   │   │   │          │ id           │
   │   │   │          │ level_id     │
   │   │   │          │ name         │
   │   │   │          │ description  │
   │   │   │          │ order_in_level│
   │   │   │          │ created_at   │
   │   │   │          │ updated_at   │
   │   │   │          └──────┬───────┘
   │   │   │                 │
   │   │   │                 │ 1:N
   │   │   │                 ▼
   │   │   │          ┌──────────────┐       ┌──────────────┐
   │   │   │          │  questions   │       │   options    │
   │   │   │          │──────────────│       │──────────────│
   │   │   │          │ id           │──1:N─►│ id           │
   │   │   │          │ topic_id     │       │ question_id  │
   │   │   │          │ question_type│       │ option_text  │
   │   │   │          │ question_text│       │ is_correct   │
   │   │   │          │ correct_answer│      │ created_at   │
   │   │   │          │ correct_answer_numeric│ updated_at  │
   │   │   │          │ hint_text    │       └──────────────┘
   │   │   │          │ explanation  │
   │   │   │          │ real_life_context│
   │   │   │          │ image_url    │
   │   │   │          │ created_at   │
   │   │   │          │ updated_at   │
   │   │   │          └──────┬───────┘
   │   │   │                 │
   │   │   │          ┌──────┴───────┐
   │   │   │          │              │
   │   │   │          ▼              ▼
   │   │   │  ┌───────────────┐ ┌──────────────────┐
   │   │   │  │scheduled_     │ │question_attempts │
   │   │   └─►│questions      │ │──────────────────│
   │   │      │───────────────│ │ id               │
   │   │      │ id            │ │ user_id          │◄─┐
   │   │      │ user_id       │ │ question_id      │  │
   │   │      │ question_id   │ │ user_answer      │  │
   │   │      │ position      │ │ is_correct       │  │
   │   │      │ scheduled_date│ │ hint_used        │  │
   │   │      │ created_at    │ │ answered_at      │  │
   │   │      └───────────────┘ └──────────────────┘  │
   │   │      UNIQUE(user_id,                          │
   │   │        position,                              │
   │   │        scheduled_date)                        │
   │   │                                               │
   │   ▼                                               │
   │  ┌──────────────────┐                             │
   │  │ study_sessions   │                             │
   │  │──────────────────│                             │
   │  │ id               │                             │
   │  │ user_id          │─────────────────────────────┘
   │  │ session_date     │
   │  │ questions_sent   │
   │  │ questions_answered│
   │  │ is_complete      │
   │  │ created_at       │
   │  │ updated_at       │
   │  └──────────────────┘
   │  UNIQUE(user_id, session_date)
   │
   │  ┌──────────────┐       ┌──────────────┐
   │  │ user_badges  │       │   badges     │
   │  │──────────────│       │──────────────│
   └─►│ id           │       │ id           │
      │ user_id      │  N:1  │ name         │
      │ badge_id     │──────►│ award_title  │
      │ period_label │       │ description  │
      │ period_start │       │ icon_emoji   │
      │ metric_summary│      │ badge_type   │
      │ earned_at    │       │ rank_position│
      └──────────────┘       │ created_at   │
      UNIQUE(user_id,        │ updated_at   │
        badge_id,            └──────────────┘
        period_start)

┌──────────────┐
│   settings   │
│──────────────│
│ id           │
│ setting_key  │  (standalone, no relations)
│ value        │
│ type         │
│ description  │
│ created_at   │
│ updated_at   │
└──────────────┘
```

## Tables Summary

| Table | Rows (seeded) | Purpose |
|-------|--------------|---------|
| accounts | 0 | Telegram user accounts (one per phone) |
| users | 0 | Player profiles (up to 5 per account) |
| levels | 5 | Ninja belt levels (⚪🟡🟠🟢🥋) |
| topics | 35 | 7 topics per level |
| questions | 420 | 12 per topic, MCQ + open-ended |
| options | ~1260 | 3-4 options per MCQ question |
| scheduled_questions | dynamic | Per-user daily question assignments |
| study_sessions | dynamic | Daily progress tracking per user |
| question_attempts | dynamic | Every answer recorded |
| badges | 12 | Badge definitions (weekly/monthly/yearly/achievement) |
| user_badges | dynamic | Earned badges per user per period |
| settings | 9 | Runtime config (times, points, etc.) |
| admins | 1 | Website admin accounts |

## Key Relationships

- **Account → Users**: One Telegram account can have up to 5 player profiles
- **Account → Active Profile**: Circular FK — which profile is currently playing
- **User → Level**: Each player is on one level at a time
- **Level → Topics → Questions → Options**: The curriculum hierarchy
- **User → Scheduled Questions**: Per-user personalized daily questions (adaptive difficulty)
- **User → Study Sessions**: One session per user per day (tracks completion)
- **User → Question Attempts**: Every answer recorded with correctness + hint usage
- **User → User Badges ← Badges**: Earned badges with period deduplication

## Key Constraints

- `scheduled_questions`: UNIQUE(user_id, position, scheduled_date) — one question per slot per day per user
- `study_sessions`: UNIQUE(user_id, session_date) — one session per day per user
- `user_badges`: UNIQUE(user_id, badge_id, period_start) — prevents duplicate awards if scheduler runs twice
- `users.username`: UNIQUE — shareable profile URLs
- `admins.email`: UNIQUE — one admin per email
- `settings.setting_key`: UNIQUE — one value per setting
