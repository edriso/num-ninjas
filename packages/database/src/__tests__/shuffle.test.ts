import { describe, it, expect } from 'vitest';
import { shuffle } from '../utils/shuffle';

describe('shuffle', () => {
  it('should return an array of the same length', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result).toHaveLength(input.length);
  });

  it('should contain the same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result.sort()).toEqual(input.sort());
  });

  it('should not mutate the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const original = [...input];
    shuffle(input);
    expect(input).toEqual(original);
  });

  it('should return a new array reference', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result).not.toBe(input);
  });

  it('should return an empty array for empty input', () => {
    const result = shuffle([]);
    expect(result).toEqual([]);
  });

  it('should return a single-element array unchanged', () => {
    const result = shuffle([42]);
    expect(result).toEqual([42]);
  });

  it('should return a two-element array with the same elements', () => {
    const input = [1, 2];
    const result = shuffle(input);
    expect(result.sort()).toEqual([1, 2]);
  });

  it('should handle arrays with duplicate values', () => {
    const input = [1, 1, 2, 2, 3];
    const result = shuffle(input);
    expect(result.sort()).toEqual([1, 1, 2, 2, 3]);
  });

  it('should handle string arrays', () => {
    const input = ['a', 'b', 'c', 'd'];
    const result = shuffle(input);
    expect(result).toHaveLength(4);
    expect(result.sort()).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should handle object arrays', () => {
    const a = { id: 1 };
    const b = { id: 2 };
    const c = { id: 3 };
    const input = [a, b, c];
    const result = shuffle(input);
    expect(result).toHaveLength(3);
    expect(result).toContain(a);
    expect(result).toContain(b);
    expect(result).toContain(c);
  });

  it('should eventually produce a different order (statistical)', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let differentOrderSeen = false;
    for (let i = 0; i < 50; i++) {
      const result = shuffle(input);
      if (result.some((val, idx) => val !== input[idx])) {
        differentOrderSeen = true;
        break;
      }
    }
    expect(differentOrderSeen).toBe(true);
  });

  it('should handle a large array', () => {
    const input = Array.from({ length: 1000 }, (_, i) => i);
    const result = shuffle(input);
    expect(result).toHaveLength(1000);
    expect(result.sort((a, b) => a - b)).toEqual(input);
  });
});
