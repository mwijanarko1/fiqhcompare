import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaBalanceScale, FaBook } from 'react-icons/fa';
import { topicData } from '@/app/lib/topicData';

interface TopicPageProps {
  params: {
    topic: string;
  };
}

const madhabNames = {
  hanafi: 'Hanafi',
  maliki: 'Maliki',
  shafii: "Shafi'i",
  hanbali: 'Hanbali'
};

export default function TopicPage({ params }: TopicPageProps) {
  const topic = params.topic;
  const data = topicData[topic];

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Compare rulings across the four major schools of thought
        </p>
        <div className="inline-block bg-yellow-100 border border-yellow-200 rounded-lg px-4 py-2 text-sm text-yellow-800 mb-8">
          Currently showing Hanbali rulings. Other madhhabs coming soon.
        </div>
      </div>

      {/* Links to Individual Madhhab Views */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {['hanafi', 'maliki', 'shafii', 'hanbali'].map((madhhab) => (
          <Link
            key={madhhab}
            href={`/madhhab/${madhhab}/${topic}`}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 capitalize mb-2">
              {madhhab} View
            </h2>
            <p className="text-gray-600 text-sm">
              View detailed rulings according to the {madhhab} school
            </p>
          </Link>
        ))}
      </div>

      {/* Comparative Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Comparative Analysis
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Topic</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Hanafi</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Maliki</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Shafi'i</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Hanbali</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.chapters.map((chapter, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FaBook className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-900">{chapter.title}</span>
                    </div>
                  </td>
                  {['hanafi', 'maliki', 'shafii', 'hanbali'].map((madhhab) => (
                    <td key={madhhab} className="px-6 py-4">
                      {madhhab === 'hanbali' ? (
                        <div className="text-sm text-gray-600">
                          <ul className="list-disc list-inside space-y-1">
                            {chapter.content.slice(0, 2).map((point, i) => (
                              <li key={i} className="truncate">
                                {point}
                              </li>
                            ))}
                            {chapter.content.length > 2 && (
                              <li className="text-emerald-600 hover:text-emerald-700 cursor-pointer">
                                <Link href={`/madhhab/hanbali/${topic}`}>
                                  View {chapter.content.length - 2} more...
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500 italic">
                          Content coming soon
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed View */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Detailed Comparison
        </h2>
        {data.chapters.map((chapter, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <FaBalanceScale className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {chapter.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Hanbali View</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {chapter.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Other Madhhabs</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-500 italic">
                      Content from other madhhabs will be added soon. This will show differences in rulings and their evidences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 