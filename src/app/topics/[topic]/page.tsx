import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaBalanceScale } from 'react-icons/fa';
import { topicData } from '@/app/lib/topicData';

interface TopicPageProps {
  params: {
    topic: string;
  };
}

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

      {/* Comparative View */}
      <div className="space-y-8">
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