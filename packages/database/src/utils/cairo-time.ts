const CAIRO_TZ = 'Africa/Cairo';

/**
 * Get the Cairo-local YYYY-MM-DD string for any UTC instant.
 * Use this when comparing two timestamps as "same calendar day" or
 * "yesterday vs today" — string comparison is timezone-safe.
 */
export function cairoDateString(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: CAIRO_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/**
 * Get today's date string in Cairo timezone (YYYY-MM-DD).
 */
export function todayCairoString(): string {
  return cairoDateString(new Date());
}

/**
 * Get today's date as midnight UTC, but representing the Cairo local date.
 * E.g., if Cairo is April 5, returns April 5 00:00:00 UTC.
 * Used as a date label/key for session_date and scheduled_date (exact-match queries).
 * NOT suitable for filtering real UTC timestamps — use todayCairoStartUtc() for that.
 */
export function todayCairoAsUtcMidnight(): Date {
  const dateStr = todayCairoString();
  return new Date(dateStr + 'T00:00:00.000Z');
}

/**
 * Get the UTC instant when today's Cairo day began (real Cairo midnight in UTC).
 * E.g., if Cairo is April 30 (UTC+3 DST), midnight was April 29 21:00:00 UTC.
 * Use this for range queries on actual UTC timestamps like answeredAt.
 *
 * Cairo offset: UTC+2 (winter) or UTC+3 (DST since last Friday of April).
 */
export function todayCairoStartUtc(): Date {
  const dateStr = todayCairoString();
  // Sample noon UTC on the Cairo date — safely inside the day, far from DST boundaries.
  const noonUtc = new Date(`${dateStr}T12:00:00Z`);
  const cairoHourAtNoon = parseInt(
    new Intl.DateTimeFormat('en-US', {
      timeZone: CAIRO_TZ,
      hour: '2-digit',
      hour12: false,
    }).format(noonUtc),
    10,
  ); // 14 when UTC+2 (winter), 15 when UTC+3 (DST)
  const offsetHours = cairoHourAtNoon - 12; // 2 or 3
  // Cairo midnight = UTC midnight on Cairo date minus the offset
  return new Date(new Date(`${dateStr}T00:00:00Z`).getTime() - offsetHours * 3_600_000);
}

/**
 * Format a Date for display in Cairo timezone.
 */
export function formatCairoDate(date: Date): string {
  return new Intl.DateTimeFormat('ar-EG', {
    timeZone: CAIRO_TZ,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format a Date for display with time in Cairo timezone.
 */
export function formatCairoDateTime(date: Date): string {
  return new Intl.DateTimeFormat('ar-EG', {
    timeZone: CAIRO_TZ,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}
