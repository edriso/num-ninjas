import { ar, type Dictionary } from './ar';
import { en } from './en';

const dictionaries: Record<string, Dictionary> = { ar, en };

export type { Dictionary };
export type Locale = 'ar' | 'en';

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale] || dictionaries.ar;
}
