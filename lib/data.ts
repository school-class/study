export interface Lesson {
  id: string;
  title: string;
  points: string[];
  content: string;
}

export interface Chapter {
  title: string;
  lessons: Lesson[];
}

export const subjectsData: Record<string, { name: string; color: string }> = {
  math: { name: '数学', color: 'text-blue-600' },
  english: { name: '英語', color: 'text-orange-600' },
  japanese: { name: '国語', color: 'text-green-600' },
  science: { name: '理科', color: 'text-purple-600' },
  social: { name: '社会', color: 'text-red-600' },
};

export const lessonsData: Record<string, Chapter[]> = {
  'middle-math': [
    {
      title: '第1章：正の数と負の数',
      lessons: [
        {
          id: 'pos-neg-intro',
          title: '正の数・負の数とは？',
          points: [
            '0より大きい数を正の数、0より小さい数を負の数という',
            '負の数は「-」（マイナス）をつけて表す',
            '0は正の数でも負の数でもない',
          ],
          content: '数直線上で、0を基準にして右側にあるのが正の数、左側にあるのが負の数です。マイナスの記号を使うことで、温度の氷点下や、借金、反対方向への移動などを表現できるようになります。',
        },
        {
          id: 'pos-neg-calc',
          title: '加法と減法',
          points: [
            '同符号の2数の和は、絶対値の和に共通の符号をつける',
            '異符号の2数の和は、絶対値の大きい方から小さい方を引き、絶対値の大きい方の符号をつける',
          ],
          content: 'プラスとマイナスの計算は、数直線上での移動と考えるとわかりやすいです。例えば、(-3) + (+5) は、-3から右に5進むので +2 になります。',
        },
      ],
    },
  ],
  'high-english': [
    {
      title: '第1章：時制',
      lessons: [
        {
          id: 'present-perfect',
          title: '現在完了形',
          points: [
            'have/has + 過去分詞の形で表す',
            '「完了・結果」「経験」「継続」の3つの意味がある',
            '過去の出来事が現在にどうつながっているかを表す',
          ],
          content: '現在完了形は、日本語にはない感覚なので難しく感じますが、「今持っている(have)状態」をイメージしましょう。過去にした経験を「今も持っている」から経験、過去に始めたことを「今も持っている」から継続になります。',
        },
      ],
    },
  ],
};
