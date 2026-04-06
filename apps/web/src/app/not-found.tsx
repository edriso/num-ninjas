import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-6 text-center">
      <h1 className="text-6xl font-bold text-slate-300 mb-4">٤٠٤</h1>
      <p className="text-2xl font-bold text-slate-700 mb-2">الصفحة غير موجودة</p>
      <p className="text-slate-500 mb-8">الصفحة التي تبحث عنها ليست هنا</p>
      <Link
        href="/"
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
      >
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}
