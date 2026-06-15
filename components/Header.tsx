import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Study Platform
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              ホーム
            </Link>
            <Link href="/elementary" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              小学生
            </Link>
            <Link href="/middle" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              中学生
            </Link>
            <Link href="/high" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              高校生
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
