'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/lib/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const mainCategories = [
    { 
      name: { en: 'Purification', ar: 'الطهارة' }, 
      href: '/topics/purification' 
    },
    { 
      name: { en: 'Prayer', ar: 'الصلاة' }, 
      href: '/topics/prayer' 
    },
    { 
      name: { en: 'Fasting', ar: 'الصيام' }, 
      href: '/topics/fasting' 
    },
    { 
      name: { en: 'Zakat', ar: 'الزكاة' }, 
      href: '/topics/zakat' 
    },
    { 
      name: { en: 'Hajj', ar: 'الحج' }, 
      href: '/topics/hajj' 
    },
  ];

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl text-primary-600">فقه</span>
            <span className="font-semibold text-xl text-gray-900">Compare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="text-gray-600 hover:text-primary-600 transition"
              >
                {category.name[language]}
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-primary-600 transition"
              aria-label={language === 'en' ? 'Search' : 'بحث'}
            >
              <FaSearch className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-primary-600 transition"
              aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <FaGlobe className="w-5 h-5" />
              <span className="sr-only">
                {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition"
            aria-label={language === 'en' ? 'Toggle Menu' : 'القائمة'}
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4">
          <div className="container mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={language === 'en' ? 'Search for topics, rulings, or terms...' : 'ابحث عن المواضيع والأحكام...'}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {mainCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="block py-2 text-gray-600 hover:text-primary-600 transition"
              >
                {category.name[language]}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
              <button 
                onClick={toggleLanguage}
                className="p-2 text-gray-600 hover:text-primary-600 transition"
              >
                <FaGlobe className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 