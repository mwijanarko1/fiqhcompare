import Link from 'next/link';
import { FaBook, FaBalanceScale, FaMosque, FaSearch, FaQuran, FaGraduationCap } from 'react-icons/fa';
import TopicCard from './components/TopicCard'

export default function Home() {
  const topics = [
    {
      title: "Purification",
      description: "Compare rulings on ritual purity, types of water, wudu, ghusl, tayammum across the four schools of thought.",
      slug: "purification"
    },
    {
      title: "Prayer",
      description: "Explore how the four madhhabs approach prayer, its conditions, pillars, and proper performance.",
      slug: "prayer"
    },
    {
      title: "Zakat",
      description: "Compare calculations, conditions, and distribution of zakat according to different schools.",
      slug: "zakat"
    },
    {
      title: "Fasting",
      description: "Study the comparative rulings on Ramadan fasting, exemptions, and invalidators.",
      slug: "fasting"
    },
    {
      title: "Hajj",
      description: "Learn about the pilgrimage rituals and their variations across different madhhabs.",
      slug: "hajj"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              FiqhCompare
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore and compare Islamic jurisprudence across the four major schools of thought: Hanafi, Maliki, Shafi'i, and Hanbali.
            </p>
            <div className="inline-block bg-yellow-100 border border-yellow-200 rounded-lg px-4 py-2 text-sm text-yellow-800">
              Currently displaying Hanbali rulings. Other madhhabs coming soon.
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Browse Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <TopicCard
                key={topic.slug}
                title={topic.title}
                description={topic.description}
                slug={topic.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Why FiqhCompare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>}
              title="Side-by-Side Comparison"
              description="Easily compare rulings across different schools of thought to understand their methodologies and conclusions."
            />
            <FeatureCard
              icon={<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>}
              title="Authentic Sources"
              description="All rulings are sourced from authoritative texts of each madhhab, with references provided."
            />
            <FeatureCard
              icon={<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
              </div>}
              title="Comprehensive Coverage"
              description="Detailed explanations of rulings covering all major aspects of Islamic worship and practice."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
