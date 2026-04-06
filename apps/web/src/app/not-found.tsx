import Link from 'next/link';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'الصفحة غير موجودة',
};

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 bg-slate-50">
      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h1 className="text-6xl font-bold text-slate-400 mb-4">٤٠٤</h1>
        <p className="text-2xl font-bold text-slate-700 mb-2">الصفحة غير موجودة</p>
        <p className="text-slate-500 mb-8">الصفحة التي تبحث عنها ليست هنا</p>
        <Link
          href="/"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        >
          العودة للصفحة الرئيسية
        </Link>
      </main>
      <Footer />
    </div>
  );
}
