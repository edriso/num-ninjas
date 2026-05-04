import { describe, it, expect } from 'vitest';
import { isBlockedError } from '../services/block-status.service';

describe('isBlockedError', () => {
  it('matches the canonical Telegram 403 error message', () => {
    const err = new Error(
      "GrammyError: Call to 'sendMessage' failed! (403: Forbidden: bot was blocked by the user)",
    );
    expect(isBlockedError(err)).toBe(true);
  });

  it('matches when the underlying object is just the GrammyError text', () => {
    expect(isBlockedError('Forbidden: bot was blocked by the user')).toBe(true);
  });

  it('does not match "user is deactivated" (different unreachable case)', () => {
    const err = new Error('Forbidden: user is deactivated');
    expect(isBlockedError(err)).toBe(false);
  });

  it('does not match "chat not found"', () => {
    const err = new Error('Bad Request: chat not found');
    expect(isBlockedError(err)).toBe(false);
  });

  it('does not match generic network errors', () => {
    expect(isBlockedError(new Error('ECONNRESET'))).toBe(false);
    expect(isBlockedError(new Error('Timeout'))).toBe(false);
  });

  it('does not match null/undefined/empty', () => {
    expect(isBlockedError(null)).toBe(false);
    expect(isBlockedError(undefined)).toBe(false);
    expect(isBlockedError('')).toBe(false);
  });

  it('does not match unrelated text that contains "blocked" but not the full phrase', () => {
    // We require the full "bot was blocked by the user" phrase to keep
    // the signal precise — partial matches like "the request was blocked"
    // (e.g. by a firewall) must not flip blocked_at.
    expect(isBlockedError(new Error('the request was blocked'))).toBe(false);
    expect(isBlockedError(new Error('user is blocked from this group'))).toBe(false);
  });

  it('handles non-error objects via String coercion', () => {
    expect(isBlockedError({ toString: () => 'bot was blocked by the user' })).toBe(true);
    expect(isBlockedError(42)).toBe(false);
  });
});
