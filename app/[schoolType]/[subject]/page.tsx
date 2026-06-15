import Link from 'next/link';
import { notFound } from 'next/navigation';
import { subjectsData, lessonsData } from '@/lib/data';

const schoolTypes: Record<string, string> = {
  elementary: '小学生',
  middle: '中学生',
  high: '高校生',
};

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ schoolType: string; subject: string }>;
}) {
  const { schoolType, subject } = await params;

  const subjectInfo = subjectsData[subject];
  const schoolName = schoolTypes[schoolType];

  if (!subjectInfo || !schoolName) {
    notFound();
  }

  const chapters = lessonsData[`${schoolType}-${subject}`] || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8 flex items-center text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">ホーム</Link>
        <span className="mx-2">&gt;</span>
        <span>{schoolName}</span>
      </nav>

      <div className="mb-12">
        <h1 className={`text-4xl font-extrabold ${subjectInfo.color} mb-4`}>{subjectInfo.name}</h1>
        <p className="text-lg text-gray-600 font-medium">{schoolName}の{subjectInfo.name}の授業一覧です。</p>
      </div>

      <div className="space-y-8">
        {chapters.length > 0 ? (
          chapters.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-5 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {section.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/${schoolType}/${subject}/${lesson.id}`}
                    className="flex items-center px-6 py-5 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      講
                    </div>
                    <div>
                      <span className="text-gray-900 group-hover:text-blue-700 font-bold block">{lesson.title}</span>
                      <span className="text-sm text-gray-500">約15分</span>
                    </div>
                    <svg className="ml-auto w-6 h-6 text-gray-300 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
            <p className="text-gray-500 mb-4">準備中のコンテンツです</p>
            <Link href="/" className="text-blue-600 font-bold hover:underline">ホームに戻る</Link>
          </div>
        )}
      </div>
    </div>
  );
}
