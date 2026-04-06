'use client';

import { useRouter } from 'next/navigation';
import { setLocale } from '@/app/actions/locale';

export function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();

  async function switchLang() {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    await setLocale(newLocale);
    router.refresh();
  }

  return (
    <button
      onClick={switchLang}
      className="text-xs px-2.5 py-1 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition-colors cursor-pointer"
    >
      {locale === 'ar' ? 'EN' : 'عربي'}
    </button>
  );
}
