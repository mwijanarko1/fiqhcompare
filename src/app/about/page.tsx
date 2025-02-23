import React from 'react';
import Link from 'next/link';
import { FaBalanceScale, FaBook, FaUsers, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FaBalanceScale className="w-8 h-8" />,
    title: 'Comparative Analysis',
    description: 'Side-by-side comparison of rulings across the four major schools of Islamic jurisprudence.',
  },
  {
    icon: <FaBook className="w-8 h-8" />,
    title: 'Authentic Sources',
    description: 'All rulings are sourced from reliable classical texts and respected scholars.',
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: 'Educational Purpose',
    description: 'Designed to help Muslims understand the diversity of Islamic legal thought.',
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: 'Verified Content',
    description: 'Content is carefully reviewed and verified by qualified individuals.',
  },
];

export const metadata = {
  title: 'About Us - FiqhCompare',
  description: 'Learn about FiqhCompare\'s mission to provide clarity and insight into comparative Islamic jurisprudence across the four major schools of thought.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About FiqhCompare
        </h1>
        
        <div className="space-y-12">
          {/* Welcome Section */}
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed">
              Welcome to FiqhCompare, a dedicated resource for Muslims seeking to deepen their understanding of comparative fiqh across the four major schools of Islamic jurisprudence: Hanafi, Maliki, Shafi'i, and Hanbali. Our mission is to provide clarity and insight into the rulings of worship—such as purification, prayer, fasting, zakat, and hajj—by presenting them in a clear, side-by-side format that highlights both the similarities and differences among the madhhabs.
            </p>
          </div>

          {/* Vision Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              At FiqhCompare, we believe that knowledge is the foundation of faith. By offering a comprehensive and accessible platform for comparative fiqh, we aim to empower Muslims worldwide to make informed decisions about their worship while fostering a deeper appreciation for the rich diversity within Islamic scholarship. Whether you are a student of knowledge, a curious seeker, or simply someone looking to understand the nuances of fiqh, this website is designed to be your trusted guide.
            </p>
          </div>

          {/* What We Offer Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is meticulously structured to cater to both English-speaking and Arabic-speaking audiences. Each topic is organized into main categories (e.g., Purification, Prayer) and further divided into subtopics (e.g., Obligatory Acts, Nullifiers). Through responsive tables and concise summaries, we present rulings from each madhhab alongside references to classical texts and authoritative sources. This ensures that our content is not only practical but also rooted in scholarly tradition.
            </p>
          </div>

          {/* Why Comparative Fiqh Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Comparative Fiqh?</h2>
            <p className="text-gray-700 leading-relaxed">
              The study of comparative fiqh is an invaluable tool for understanding the breadth and depth of Islamic jurisprudence. While the core principles of Islam remain universal, the differences in interpretation among the madhhabs reflect the flexibility and adaptability of Islamic law to diverse contexts. By exploring these variations, we hope to promote unity through knowledge, dispel misconceptions, and encourage respect for the rich intellectual heritage of our religion.
            </p>
          </div>

          {/* Our Commitment Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to accuracy, accessibility, and authenticity. Every ruling presented on FiqhCompare is carefully researched and referenced, drawing upon classical works such as Al-Fiqh Al-Islami wa Adillatuhu by Wahbah Al-Zuhayli, Bulugh Al-Maram by Ibn Hajar, and other reputable sources. Our bilingual interface ensures that users from different linguistic backgrounds can benefit equally from the content.
            </p>
          </div>

          {/* Join Us Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Us on This Journey</h2>
            <p className="text-gray-700 leading-relaxed">
              FiqhCompare is more than just a website—it is a labor of love and a testament to the beauty of Islamic scholarship. We invite you to explore, learn, and grow with us. If you have feedback, suggestions, or questions, please don't hesitate to reach out. Together, we can build a community grounded in knowledge, respect, and faith.
            </p>
          </div>

          {/* Closing */}
          <div className="text-center italic text-gray-700 mt-8">
            <p>May Allah bless your journey of learning and grant us all sincerity in seeking His pleasure.</p>
            <p className="mt-4">Jazakum Allahu Khairan.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 