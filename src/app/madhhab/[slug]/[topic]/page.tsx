import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaBook, FaArrowLeft, FaBalanceScale, FaArrowRight } from 'react-icons/fa';
import ChapterAccordion from '@/app/components/ChapterAccordion';
import { topicData } from '@/app/lib/topicData';

interface MadhabTopicPageProps {
  params: {
    slug: string;
    topic: string;
  };
}

const madhabNames = {
  hanafi: 'Hanafi',
  maliki: 'Maliki',
  shafii: "Shafi'i",
  hanbali: 'Hanbali'
};

export default function MadhabTopicPage({ params }: MadhabTopicPageProps) {
  const { slug, topic } = params;
  
  // Validate madhhab
  if (!Object.keys(madhabNames).includes(slug)) {
    notFound();
  }

  const data = topicData[topic];

  if (!data) {
    notFound();
  }

  // For now, we only have Hanbali content
  const isContentAvailable = slug === 'hanbali';
  const madhabName = madhabNames[slug as keyof typeof madhabNames];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href={`/topics/${topic}`}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft className="w-4 h-4 mr-2" />
          Go to Comparison
        </Link>
        <Link
          href={`/madhhab/${slug}`}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          Go to {madhabName} Madhhab
          <FaArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaBook className="w-6 h-6 text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {data.title} ({madhabName} Madhhab)
          </h1>
        </div>
        {!isContentAvailable && (
          <div className="bg-yellow-100 border border-yellow-200 rounded-lg px-4 py-2 text-sm text-yellow-800 inline-block">
            Content for this madhhab coming soon
          </div>
        )}
      </div>

      {/* Content */}
      {isContentAvailable ? (
        <ChapterAccordion chapters={data.chapters} />
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <FaBook className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Content Coming Soon
          </h2>
          <p className="text-gray-600 mb-6">
            We are currently working on adding content for the {madhabName} madhhab.
            Check back soon or view the comparative analysis for now.
          </p>
          <Link
            href={`/topics/${topic}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
          >
            <FaBalanceScale className="w-4 h-4" />
            View Comparative Analysis
          </Link>
        </div>
      )}
    </div>
  );
} 