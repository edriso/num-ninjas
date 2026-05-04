import { describe, it, expect } from 'vitest';
import { escapeMd } from '../utils/markdown';

describe('escapeMd', () => {
  it('returns plain text unchanged when there are no special chars', () => {
    expect(escapeMd('hello world')).toBe('hello world');
    expect(escapeMd('')).toBe('');
    expect(escapeMd('Mohamed')).toBe('Mohamed');
    expect(escapeMd('عمر')).toBe('عمر');
  });

  it('escapes asterisks (bold)', () => {
    expect(escapeMd('Mo*ham*ed')).toBe('Mo\\*ham\\*ed');
    expect(escapeMd('*hi*')).toBe('\\*hi\\*');
  });

  it('escapes underscores (italic)', () => {
    expect(escapeMd('snake_case')).toBe('snake\\_case');
    expect(escapeMd('_hi_')).toBe('\\_hi\\_');
  });

  it('escapes backticks (code)', () => {
    expect(escapeMd('`code`')).toBe('\\`code\\`');
    expect(escapeMd('Mo`hamed`')).toBe('Mo\\`hamed\\`');
  });

  it('escapes square brackets (link start/end)', () => {
    expect(escapeMd('[click](url)')).toBe('\\[click\\](url)');
    expect(escapeMd('[hi]')).toBe('\\[hi\\]');
  });

  it('escapes multiple types in one string', () => {
    expect(escapeMd('Mo*ham_ed`[link]')).toBe('Mo\\*ham\\_ed\\`\\[link\\]');
  });

  it('does not escape parentheses, dots, dashes, exclamation marks, or other v2 chars', () => {
    // These ARE escaped in MarkdownV2 but NOT in legacy Markdown — escaping
    // them would render literal backslashes for Arabic users (full-stop,
    // hyphen, exclamation are everywhere in normal prose).
    expect(escapeMd('Hello, world!')).toBe('Hello, world!');
    expect(escapeMd('user (admin)')).toBe('user (admin)');
    expect(escapeMd('a-b.c')).toBe('a-b.c');
  });

  it('does not double-escape already-escaped sequences (no smart parsing)', () => {
    // The function is a pure regex replace — feeding it pre-escaped text
    // produces double-escaped output. This is fine because the contract is
    // "raw user input → safe Markdown" and callers shouldn't pre-escape.
    expect(escapeMd('\\*')).toBe('\\\\*');
  });

  it('handles Arabic letters mixed with special chars', () => {
    expect(escapeMd('احمد*123')).toBe('احمد\\*123');
    expect(escapeMd('علي_بن_محمد')).toBe('علي\\_بن\\_محمد');
  });

  it('handles Arabic-Indic digits unchanged (we keep Western digits convention)', () => {
    expect(escapeMd('٣ ٥ ١٥')).toBe('٣ ٥ ١٥');
  });

  it('preserves length semantics — escaped chars take 2 output chars each', () => {
    expect(escapeMd('a*b').length).toBe(4); // 'a' + '\\' + '*' + 'b'
    expect(escapeMd('***').length).toBe(6); // 3 escapes
  });
});
