/**
 * Fisher-Yates shuffle — returns a new shuffled array. Accepts readonly
 * inputs because the implementation copies before swapping, so callers
 * can safely pass `readonly` arrays from `as const` literals.
 */
export function shuffle<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
