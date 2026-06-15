import Link from 'next/link';
import { notFound } from 'next/navigation';
import { subjectsData, lessonsData } from '@/lib/data';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ schoolType: string; subject: string; lessonId: string }>;
}) {
  const { schoolType, subject, lessonId } = await params;
  const subjectInfo = subjectsData[subject];

  const chapters = lessonsData[`${schoolType}-${subject}`] || [];
  let currentLesson = null;

  for (const chapter of chapters) {
    const lesson = chapter.lessons.find(l => l.id === lessonId);
    if (lesson) {
      currentLesson = lesson;
      break;
    }
  }

  if (!subjectInfo || !currentLesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center">
          <Link
            href={`/${schoolType}/${subject}`}
            className="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 19l-7-7 7-7" />
            </svg>
            授業一覧に戻る
          </Link>
          <div className="mx-4 h-4 w-px bg-gray-200" />
          <span className="text-sm font-bold text-gray-900 truncate">{currentLesson.title}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <span className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider ${subjectInfo.color.replace('text', 'bg').replace('600', '100')} ${subjectInfo.color} mb-4`}>
                {subjectInfo.name}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{currentLesson.title}</h1>
            </div>

            <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center text-white mb-12 shadow-lg group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="relative text-center z-10">
                <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-xl font-bold">講義動画を再生</p>
                <p className="text-sm text-gray-300 mt-2">※サンプルにつき動画は再生されません</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-2 h-8 bg-blue-600 rounded-full mr-4" />
                  この授業のポイント
                </h2>
                <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl">
                  <ul className="space-y-4">
                    {currentLesson.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-2 h-8 bg-blue-600 rounded-full mr-4" />
                  講義テキスト
                </h2>
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm leading-relaxed text-gray-700 text-lg">
                  {currentLesson.content}
                </div>
              </section>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-8 border-t border-gray-200 flex justify-between items-center">
            <button className="px-8 py-3 rounded-xl border border-gray-300 text-gray-600 font-bold hover:bg-white transition-all shadow-sm active:scale-95">
              前の授業
            </button>
            <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 active:scale-95">
              次の授業へ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
