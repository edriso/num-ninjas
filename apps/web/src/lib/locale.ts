import { cookies } from 'next/headers';
import type { Locale } from './dictionaries';

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value;
  return (locale === 'en' ? 'en' : 'ar') as Locale;
}
