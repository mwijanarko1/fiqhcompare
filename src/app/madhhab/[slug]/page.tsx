import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaDroplet, FaPersonPraying, FaHandHoldingDollar, FaMoon, FaKaaba } from 'react-icons/fa6';

const getTopicIcon = (slug: string) => {
  switch(slug) {
    case 'purification':
      return <FaDroplet className="w-6 h-6 text-primary-600" />;
    case 'prayer':
      return <FaPersonPraying className="w-6 h-6 text-primary-600" />;
    case 'zakat':
      return <FaHandHoldingDollar className="w-6 h-6 text-primary-600" />;
    case 'fasting':
      return <FaMoon className="w-6 h-6 text-primary-600" />;
    case 'hajj':
      return <FaKaaba className="w-6 h-6 text-primary-600" />;
    default:
      return <FaPersonPraying className="w-6 h-6 text-primary-600" />;
  }
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

const madhhabs = {
  hanafi: {
    name: "Hanafi",
    arabicName: "الحنفي",
    founder: "Imam Abu Hanifa (d. 767)",
    description: "The oldest of the four schools, known for its emphasis on reason and systematic legal reasoning.",
    methodology: [
      "Strong emphasis on analogical deduction (qiyas)",
      "Consideration of juristic preference (istihsan)",
      "Reliance on established customs (urf)",
      "Systematic approach to legal reasoning"
    ],
    mainTexts: [
      "Al-Hidayah by Al-Marghinani",
      "Badai al-Sanai by Al-Kasani",
      "Al-Mabsut by Al-Sarakhsi"
    ]
  },
  maliki: {
    name: "Maliki",
    arabicName: "المالكي",
    founder: "Imam Malik ibn Anas (d. 795)",
    description: "Known for its emphasis on the practices of Madinah and consideration of public welfare.",
    methodology: [
      "Strong emphasis on the practice of Madinah's people",
      "Consideration of public interest (maslahah)",
      "Use of custom and tradition",
      "Emphasis on scholarly consensus (ijma)"
    ],
    mainTexts: [
      "Al-Muwatta by Imam Malik",
      "Al-Mudawwana by Sahnun",
      "Bidayat al-Mujtahid by Ibn Rushd"
    ]
  },
  shafii: {
    name: "Shafi'i",
    arabicName: "الشافعي",
    founder: "Imam al-Shafi'i (d. 820)",
    description: "Balances between textual evidence and analogical reasoning, known for systematic methodology.",
    methodology: [
      "Systematic approach to legal theory",
      "Balance between hadith and reason",
      "Strict conditions for analogical reasoning",
      "Emphasis on consensus and clear textual evidence"
    ],
    mainTexts: [
      "Al-Risala by Imam al-Shafi'i",
      "Al-Umm by Imam al-Shafi'i",
      "Minhaj al-Talibin by Al-Nawawi"
    ]
  },
  hanbali: {
    name: "Hanbali",
    arabicName: "الحنبلي",
    founder: "Imam Ahmad ibn Hanbal (d. 855)",
    description: "Known for its strict adherence to textual evidence from the Quran and Sunnah.",
    methodology: [
      "Strong emphasis on textual evidence",
      "Preference for weak hadith over analogical reasoning",
      "Limited use of personal opinion",
      "Strict adherence to the understanding of the salaf"
    ],
    mainTexts: [
      "Al-Musnad by Imam Ahmad",
      "Al-Mughni by Ibn Qudamah",
      "Al-Insaf by Al-Mardawi"
    ]
  }
};

export default function MadhabPage({ params }: { params: { slug: string } }) {
  const madhhab = madhhabs[params.slug as keyof typeof madhhabs];

  if (!madhhab) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">
            <span className="block font-display text-4xl text-primary-600 mb-2">
              {madhhab.arabicName}
            </span>
            <span className="text-3xl font-bold text-gray-900">
              {madhhab.name} School of Thought
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Founded by {madhhab.founder}
          </p>
          <Link
            href={`/madhhab/${params.slug}/about`}
            className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-700 font-medium"
          >
            Learn more about their history →
          </Link>
        </div>

        {/* Description */}
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600 text-center">
            {madhhab.description}
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/madhhab/${params.slug}/${topic.slug}`}
              className="group"
            >
              <div className="relative flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-200">
                    {getTopicIcon(topic.slug)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
                </div>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Methodology
          </h2>
          <ul className="space-y-4">
            {madhhab.methodology.map((method, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3 mt-1">
                  •
                </span>
                <span className="text-gray-600">{method}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Texts */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Main Texts
          </h2>
          <ul className="space-y-4">
            {madhhab.mainTexts.map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mr-3 mt-1">
                  📚
                </span>
                <span className="text-gray-600">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 