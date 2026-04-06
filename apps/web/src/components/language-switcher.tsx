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
      className="text-sm px-3 py-1.5 rounded-full border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
    >
      {locale === 'ar' ? 'EN' : 'عربي'}
    </button>
  );
}
