import { FaSearch } from 'react-icons/fa';

const topics = [
  {
    category: 'Purification (Taharah)',
    subtopics: ['Wudu', 'Ghusl', 'Tayammum', 'Najasah', 'Menstruation'],
    href: '/topics/purification'
  },
  {
    category: 'Prayer (Salah)',
    subtopics: ['Prayer Times', 'Prayer Conditions', 'Prayer Actions', 'Congregational Prayer', 'Friday Prayer'],
    href: '/topics/prayer'
  },
  {
    category: 'Fasting (Sawm)',
    subtopics: ['Fasting Conditions', 'What Breaks the Fast', 'Making Up Fasts', 'Voluntary Fasts'],
    href: '/topics/fasting'
  },
  {
    category: 'Zakat',
    subtopics: ['Zakat Conditions', 'Types of Wealth', 'Recipients', 'Calculation'],
    href: '/topics/zakat'
  },
  {
    category: 'Hajj',
    subtopics: ['Hajj Requirements', 'Umrah', 'Ihram', 'Tawaf', 'Sai'],
    href: '/topics/hajj'
  }
];

export default function TopicsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Topics</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore comparative rulings across different schools of thought on various Islamic topics.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <a
            key={topic.category}
            href={topic.href}
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{topic.category}</h2>
            <ul className="space-y-2">
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic} className="text-gray-600 hover:text-emerald-600">
                  • {subtopic}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
} 