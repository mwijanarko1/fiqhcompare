import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaBook, FaGraduationCap, FaLandmark, FaHistory, FaBalanceScale } from 'react-icons/fa';

const madhhabs = {
  hanafi: {
    name: "Hanafi",
    arabicName: "الحنفي",
    founder: {
      name: "Imam Abu Hanifa",
      fullName: "Nu'man ibn Thabit ibn Zuta ibn Marzuban",
      birth: "80 AH (699 CE)",
      death: "150 AH (767 CE)",
      birthPlace: "Kufa, Iraq",
      biography: `Abu Hanifa was born into a family of Persian origin. His father was a successful merchant, and Abu Hanifa followed in the family business while pursuing knowledge. He studied under many scholars, including Hammad ibn Abi Sulayman for 18 years. He was known for his exceptional intelligence, piety, and his use of analogical reasoning (qiyas) in jurisprudence.

He lived during both the Umayyad and Abbasid caliphates and was offered the position of chief judge multiple times, but refused due to his desire to maintain independence in his scholarly work. Despite persecution, he continued teaching and developing his legal methodology until his death in Baghdad.`
    },
    history: `The Hanafi school is the oldest of the four major madhhabs of Islamic jurisprudence. It developed primarily in Iraq, particularly in the intellectual centers of Kufa and Baghdad. The school gained prominence during the Abbasid caliphate and became the official madhhab of the Ottoman Empire, leading to its widespread adoption across Central and South Asia.

The systematic development of the school was carried out by Abu Hanifa's students, particularly Abu Yusuf and Muhammad al-Shaybani, who documented and expanded upon their teacher's legal reasoning. Their works formed the foundation of the school's legal doctrine.`,
    methodology: [
      "Strong emphasis on systematic legal reasoning (qiyas)",
      "Consideration of juristic preference (istihsan) when strict analogy leads to hardship",
      "Recognition of local customs (urf) as a supplementary source of law",
      "Preference for established practice over isolated hadith",
      "Progressive interpretation of Islamic law to address new situations"
    ],
    sourceWorks: [
      {
        title: "Al-Hidayah",
        author: "Burhan al-Din al-Marghinani",
        description: "A comprehensive guide to Hanafi fiqh, widely considered the most authoritative text of the school"
      },
      {
        title: "Badai al-Sanai",
        author: "Al-Kasani",
        description: "A detailed explanation of jurisprudential rulings and their reasoning"
      },
      {
        title: "Al-Mabsut",
        author: "Al-Sarakhsi",
        description: "An extensive work covering various aspects of Islamic law with detailed arguments"
      }
    ],
    scholars: [
      {
        name: "Abu Yusuf",
        period: "113-182 AH",
        contribution: "Chief judge under Harun al-Rashid, authored several foundational texts"
      },
      {
        name: "Muhammad al-Shaybani",
        period: "132-189 AH",
        contribution: "Systematized Hanafi fiqh through his written works"
      },
      {
        name: "Al-Tahawi",
        period: "239-321 AH",
        contribution: "Authored major works reconciling different opinions within the school"
      }
    ]
  },
  maliki: {
    name: "Maliki",
    arabicName: "المالكي",
    founder: {
      name: "Imam Malik ibn Anas",
      fullName: "Malik ibn Anas ibn Malik ibn Abi Amir al-Asbahi",
      birth: "93 AH (711 CE)",
      death: "179 AH (795 CE)",
      birthPlace: "Medina",
      biography: `Imam Malik was born in Medina, the city of the Prophet ﷺ. He studied under numerous scholars who had learned from the Companions and their successors. He was known for his exceptional memory and strict criteria in accepting hadith narrations.

He authored Al-Muwatta, the oldest surviving systematic collection of hadith and fiqh. Despite facing persecution, he maintained his scholarly integrity and became known as the "Imam of the Abode of Migration" (Medina). His teachings emphasized the importance of the practice of the people of Medina as a source of legal rulings.`
    },
    history: `The Maliki school developed in Medina, drawing heavily on the practices and traditions preserved in the Prophet's city. It spread throughout North Africa and Muslim Spain (Al-Andalus) through Imam Malik's students.

The school's emphasis on the practice of the people of Medina and consideration of public welfare (maslaha) made it particularly adaptable to different societies while maintaining its core principles. It became the predominant school in North and West Africa, where it continues to have a strong presence.`,
    methodology: [
      "Primary emphasis on the Quran and Sunnah",
      "Consideration of the practice of the people of Medina as a crucial source",
      "Recognition of public welfare (maslaha) in legal rulings",
      "Use of custom and consideration of consequences in juristic decisions",
      "Strong emphasis on scholarly consensus (ijma)"
    ],
    sourceWorks: [
      {
        title: "Al-Muwatta",
        author: "Imam Malik",
        description: "The foundational text of the school, combining hadith and fiqh"
      },
      {
        title: "Al-Mudawwana",
        author: "Sahnun",
        description: "A comprehensive collection of Maliki legal opinions"
      },
      {
        title: "Bidayat al-Mujtahid",
        author: "Ibn Rushd",
        description: "A comparative study of Islamic law with emphasis on Maliki views"
      }
    ],
    scholars: [
      {
        name: "Ibn al-Qasim",
        period: "132-191 AH",
        contribution: "Primary transmitter of Imam Malik's teachings"
      },
      {
        name: "Sahnun",
        period: "160-240 AH",
        contribution: "Compiled Al-Mudawwana, a cornerstone of Maliki fiqh"
      },
      {
        name: "Ibn Rushd (Averroes)",
        period: "520-595 AH",
        contribution: "Authored comprehensive works on comparative fiqh"
      }
    ]
  },
  shafii: {
    name: "Shafi'i",
    arabicName: "الشافعي",
    founder: {
      name: "Imam al-Shafi'i",
      fullName: "Muhammad ibn Idris al-Shafi'i",
      birth: "150 AH (767 CE)",
      death: "204 AH (820 CE)",
      birthPlace: "Gaza, Palestine",
      biography: `Imam al-Shafi'i was born in Gaza and grew up in Mecca. He memorized the Quran and Malik's Muwatta at a young age. He studied under both Imam Malik in Medina and Muhammad al-Shaybani (a student of Abu Hanifa) in Baghdad.

His unique position of having studied under both the traditionalist school of Medina and the rationalist school of Iraq led him to develop a systematic methodology of Islamic jurisprudence (usul al-fiqh). He was known as the "Champion of Sunnah" for his balanced approach between hadith and reason.`
    },
    history: `The Shafi'i school emerged as a middle path between the traditionalist approach of the Malikis and the rationalist approach of the Hanafis. It spread from Egypt throughout the Muslim world, becoming prominent in East Africa, Southeast Asia, and parts of the Middle East.

The school's systematic approach to legal theory, documented in al-Shafi'i's Al-Risala, influenced all subsequent development of Islamic jurisprudence. The school underwent significant development through later scholars, particularly al-Nawawi and al-Rafi'i.`,
    methodology: [
      "Systematic approach to deriving legal rulings",
      "Strong emphasis on both Quran and authentic hadith",
      "Strict conditions for using analogical reasoning",
      "Clear hierarchy of legal sources",
      "Balance between textual evidence and rational inference"
    ],
    sourceWorks: [
      {
        title: "Al-Risala",
        author: "Imam al-Shafi'i",
        description: "The first systematic work on Islamic legal theory"
      },
      {
        title: "Al-Umm",
        author: "Imam al-Shafi'i",
        description: "Comprehensive collection of his legal opinions"
      },
      {
        title: "Minhaj al-Talibin",
        author: "Imam al-Nawawi",
        description: "A later authoritative text summarizing school's positions"
      }
    ],
    scholars: [
      {
        name: "Al-Muzani",
        period: "175-264 AH",
        contribution: "Summarized and spread al-Shafi'i's teachings"
      },
      {
        name: "Al-Nawawi",
        period: "631-676 AH",
        contribution: "Refined and standardized Shafi'i legal doctrine"
      },
      {
        name: "Ibn Hajar al-Asqalani",
        period: "773-852 AH",
        contribution: "Major hadith scholar who followed Shafi'i fiqh"
      }
    ]
  },
  hanbali: {
    name: "Hanbali",
    arabicName: "الحنبلي",
    founder: {
      name: "Imam Ahmad ibn Hanbal",
      fullName: "Ahmad ibn Muhammad ibn Hanbal al-Shaybani",
      birth: "164 AH (780 CE)",
      death: "241 AH (855 CE)",
      birthPlace: "Baghdad, Iraq",
      biography: `Imam Ahmad was born in Baghdad and began his study of hadith at a young age. He traveled extensively to collect hadith, studying under many scholars including Imam al-Shafi'i. He was known for his exceptional memory and vast knowledge of hadith.

He faced severe persecution during the Mihna (inquisition) over the issue of the creation of the Quran but remained steadfast in his beliefs. Despite his focus on hadith collection and teaching, his legal opinions were preserved by his students and formed the basis of the Hanbali school.`
    },
    history: `The Hanbali school emerged from the teachings and methodology of Imam Ahmad ibn Hanbal, who was primarily known as a hadith scholar. The school was systematized by his students and later scholars, particularly Ibn Qudamah.

Initially concentrated in Baghdad and its surroundings, the school later became prominent in Najd (central Arabia). It experienced a revival through scholars like Ibn Taymiyyah and Ibn al-Qayyim, and is now the official school of Saudi Arabia.`,
    methodology: [
      "Strong emphasis on textual evidence from Quran and Sunnah",
      "Preference for weak hadith over analogical reasoning",
      "Strict adherence to the understanding of the Salaf",
      "Limited use of personal opinion in legal matters",
      "Consideration of necessity and hardship in applying rulings"
    ],
    sourceWorks: [
      {
        title: "Al-Musnad",
        author: "Imam Ahmad",
        description: "Major collection of hadith with legal implications"
      },
      {
        title: "Al-Mughni",
        author: "Ibn Qudamah",
        description: "Comprehensive encyclopedia of Hanbali jurisprudence"
      },
      {
        title: "Al-Insaf",
        author: "Al-Mardawi",
        description: "Detailed work reconciling different opinions within the school"
      }
    ],
    scholars: [
      {
        name: "Ibn Qudamah",
        period: "541-620 AH",
        contribution: "Systematized Hanbali fiqh through his writings"
      },
      {
        name: "Ibn Taymiyyah",
        period: "661-728 AH",
        contribution: "Reformed and revived the school's methodology"
      },
      {
        name: "Ibn al-Qayyim",
        period: "691-751 AH",
        contribution: "Expanded the school's legal theory and application"
      }
    ]
  }
};

export default function MadhabAboutPage({ params }: { params: { slug: string } }) {
  const madhhab = madhhabs[params.slug as keyof typeof madhhabs];

  if (!madhhab) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href={`/madhhab/${params.slug}`}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to {madhhab.name} School
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">
            <span className="block font-display text-4xl text-primary-600 mb-2">
              {madhhab.arabicName}
            </span>
            <span className="text-3xl font-bold text-gray-900">
              The {madhhab.name} School of Thought
            </span>
          </h1>
        </div>

        {/* Founder Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaGraduationCap className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-semibold text-gray-900">The Founder</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 text-sm text-gray-600">
              <span><strong>Name:</strong> {madhhab.founder.fullName}</span>
              <span><strong>Born:</strong> {madhhab.founder.birth}</span>
              <span><strong>Died:</strong> {madhhab.founder.death}</span>
            </div>
            <div className="text-sm text-gray-600">
              <strong>Birthplace:</strong> {madhhab.founder.birthPlace}
            </div>
            <div className="prose prose-sm max-w-none mt-4">
              <p className="text-gray-600 whitespace-pre-line">
                {madhhab.founder.biography}
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaHistory className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Historical Development</h2>
          </div>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-600 whitespace-pre-line">
              {madhhab.history}
            </p>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaBalanceScale className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Methodology</h2>
          </div>
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
        </section>

        {/* Source Works Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaBook className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Major Source Works</h2>
          </div>
          <div className="space-y-6">
            {madhhab.sourceWorks.map((work, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">{work.title}</h3>
                <p className="text-sm text-gray-500 mb-2">by {work.author}</p>
                <p className="text-gray-600">{work.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notable Scholars Section */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <FaLandmark className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Notable Scholars</h2>
          </div>
          <div className="space-y-6">
            {madhhab.scholars.map((scholar, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">{scholar.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{scholar.period}</p>
                <p className="text-gray-600">{scholar.contribution}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 