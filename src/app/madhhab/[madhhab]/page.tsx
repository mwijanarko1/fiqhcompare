import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaBook } from 'react-icons/fa';
import TopicCard from '@/app/components/TopicCard';

interface MadhabPageProps {
  params: {
    madhhab: string;
  };
}

const madhabNames = {
  hanafi: 'Hanafi',
  maliki: 'Maliki',
  shafii: "Shafi'i",
  hanbali: 'Hanbali'
};

const madhabDescriptions = {
  hanafi: 'Founded by Imam Abu Hanifa (d. 767 CE), the Hanafi school is known for its emphasis on reason and systematic legal reasoning.',
  maliki: 'Founded by Imam Malik ibn Anas (d. 795 CE), the Maliki school is known for its incorporation of Madinan practice.',
  shafii: "Founded by Imam al-Shafi'i (d. 820 CE), the Shafi'i school is known for its systematic approach to legal theory.",
  hanbali: 'Founded by Imam Ahmad ibn Hanbal (d. 855 CE), the Hanbali school is known for its strict adherence to textual evidence.'
};

const topics = [
  {
    title: "Purification",
    description: "Detailed rulings on ritual purity, types of water, wudu, ghusl, and tayammum.",
    slug: "purification"
  },
  {
    title: "Prayer",
    description: "Comprehensive guide on prayer times, conditions, pillars, and proper performance.",
    slug: "prayer"
  },
  {
    title: "Zakat",
    description: "Detailed calculations and rulings for different types of wealth and recipients.",
    slug: "zakat"
  },
  {
    title: "Fasting",
    description: "Complete guide to fasting in Ramadan, including exemptions and make-up fasts.",
    slug: "fasting"
  },
  {
    title: "Hajj",
    description: "Step-by-step guide to performing the pilgrimage and its related rituals.",
    slug: "hajj"
  }
];

export default function MadhabPage({ params }: MadhabPageProps) {
  const { madhhab } = params;

  if (!Object.keys(madhabNames).includes(madhhab)) {
    notFound();
  }

  const madhabName = madhabNames[madhhab as keyof typeof madhabNames];
  const description = madhabDescriptions[madhhab as keyof typeof madhabDescriptions];
  const isContentAvailable = madhhab === 'hanbali';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {madhabName} School of Thought
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        {!isContentAvailable && (
          <div className="inline-block bg-yellow-100 border border-yellow-200 rounded-lg px-4 py-2 text-sm text-yellow-800">
            Content for this madhhab coming soon
          </div>
        )}
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div key={topic.slug} className="relative">
            <TopicCard
              title={topic.title}
              description={topic.description}
              slug={`${madhhab}/${topic.slug}`}
            />
            {!isContentAvailable && (
              <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                <div className="text-center p-6">
                  <FaBook className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">Coming Soon</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href={`/topics`}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Comparative View
            </h3>
            <p className="text-gray-600">
              Compare rulings across all four schools of thought
            </p>
          </Link>
          <Link
            href="/references"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              References
            </h3>
            <p className="text-gray-600">
              View source texts and scholarly works
            </p>
          </Link>
          <Link
            href="/about"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              About {madhabName} School
            </h3>
            <p className="text-gray-600">
              Learn about the history and methodology
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
} 