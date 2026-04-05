/**
 * Convert Eastern Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩) to Western digits (0123456789).
 */
export function normalizeArabicNumerals(input: string): string {
  return input.replace(/[\u0660-\u0669]/g, (char) =>
    String(char.charCodeAt(0) - 0x0660),
  );
}

/**
 * Parse a user's text answer into a number.
 * Handles: Arabic digits, fractions (1/4), mixed numbers (2 1/4),
 * European decimal commas (2,5), and strips Arabic/Latin text units.
 */
export function parseNumericAnswer(input: string): number | null {
  // Normalize Arabic digits
  let s = normalizeArabicNumerals(input.trim());

  // Remove Arabic/Latin text (units like جنيه, EGP, كيلو)
  s = s.replace(/[a-zA-Z\u0600-\u06FF]+/g, '').trim();

  // European decimal comma: "2,5" → "2.5"
  s = s.replace(/(\d),(\d)/g, '$1.$2');

  // Remove thousands separators (remaining commas)
  s = s.replace(/,/g, '');

  // Mixed number: "2 1/4"
  const mixed = s.match(/^(-?\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (mixed) {
    const whole = parseInt(mixed[1], 10);
    const num = parseInt(mixed[2], 10);
    const den = parseInt(mixed[3], 10);
    if (den === 0) return null;
    return whole + num / den;
  }

  // Fraction: "1/4"
  const frac = s.match(/^(-?\d+)\s*\/\s*(\d+)$/);
  if (frac) {
    const num = parseInt(frac[1], 10);
    const den = parseInt(frac[2], 10);
    if (den === 0) return null;
    return num / den;
  }

  // Plain number
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : null;
}

/**
 * Check if a numeric answer is correct within a tolerance.
 */
export function isNumericMatch(
  parsed: number,
  correct: number,
  tolerance = 0.01,
): boolean {
  return Math.abs(parsed - correct) <= tolerance;
}
