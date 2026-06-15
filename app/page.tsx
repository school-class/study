import Link from 'next/link';

const schoolLevels = [
  {
    title: '小学生',
    id: 'elementary',
    description: '基礎から楽しく学ぼう',
    subjects: [
      { name: '算数', id: 'math' },
      { name: '国語', id: 'japanese' },
    ],
    color: 'bg-green-500',
  },
  {
    title: '中学生',
    id: 'middle',
    description: '高校入試に向けて力をつけよう',
    subjects: [
      { name: '数学', id: 'math' },
      { name: '英語', id: 'english' },
      { name: '理科', id: 'science' },
    ],
    color: 'bg-blue-500',
  },
  {
    title: '高校生',
    id: 'high',
    description: '大学受験・定期テスト対策',
    subjects: [
      { name: '英語', id: 'english' },
      { name: '数学', id: 'math' },
      { name: '社会', id: 'social' },
    ],
    color: 'bg-orange-500',
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          自分にぴったりの学びを、<span className="text-blue-600">ここから。</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          登録不要、完全無料で全ての動画・講義テキストが利用可能です。
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        {schoolLevels.map((level) => (
          <div key={level.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`${level.color} h-3`} />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h2>
              <p className="text-gray-500 mb-6">{level.description}</p>

              <div className="space-y-4">
                {level.subjects.map((subject) => (
                  <Link
                    key={subject.id}
                    href={`/${level.id}/${subject.id}`}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">{subject.name}</span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
