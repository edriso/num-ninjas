const CAIRO_TZ = 'Africa/Cairo';

/**
 * Get today's date string in Cairo timezone (YYYY-MM-DD).
 */
export function todayCairoString(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: CAIRO_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

/**
 * Get today's date as midnight UTC, but representing the Cairo local date.
 * E.g., if Cairo is April 5, returns April 5 00:00:00 UTC.
 * Used for session_date and scheduled_date comparisons.
 */
export function todayCairoAsUtcMidnight(): Date {
  const dateStr = todayCairoString();
  return new Date(dateStr + 'T00:00:00.000Z');
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
