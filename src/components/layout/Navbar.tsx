'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Add refs for the dropdown containers
  const topicsDropdownRef = useRef<HTMLDivElement>(null);
  const madhabsDropdownRef = useRef<HTMLDivElement>(null);

  const topics = [
    { name: 'Purification', href: '/topics/purification' },
    { name: 'Prayer', href: '/topics/prayer' },
    { name: 'Fasting', href: '/topics/fasting' },
    { name: 'Zakat', href: '/topics/zakat' },
    { name: 'Hajj', href: '/topics/hajj' },
  ];

  const madhhabs = [
    { name: 'Hanafi School', href: '/madhhab/hanafi' },
    { name: 'Maliki School', href: '/madhhab/maliki' },
    { name: "Shafi'i School", href: '/madhhab/shafii' },
    { name: 'Hanbali School', href: '/madhhab/hanbali' },
  ];

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown === 'topics' && 
          topicsDropdownRef.current && 
          !topicsDropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (activeDropdown === 'madhhabs' && 
          madhabsDropdownRef.current && 
          !madhabsDropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-xl text-gray-900">FiqhCompare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Topics Dropdown */}
            <div className="relative" ref={topicsDropdownRef}>
              <button
                onClick={() => handleDropdownClick('topics')}
                className="flex items-center text-gray-600 hover:text-primary-600 transition"
              >
                Topics
                <FaChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'topics' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'topics' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  {topics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {topic.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Madhhabs Dropdown */}
            <div className="relative" ref={madhabsDropdownRef}>
              <button
                onClick={() => handleDropdownClick('madhhabs')}
                className="flex items-center text-gray-600 hover:text-primary-600 transition"
              >
                Madhhabs
                <FaChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'madhhabs' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'madhhabs' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  {madhhabs.map((madhhab) => (
                    <Link
                      key={madhhab.href}
                      href={madhhab.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {madhhab.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-primary-600 transition"
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition"
            aria-label="Toggle Menu"
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
                placeholder="Search for topics, rulings, or terms..."
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
          <div className="px-4 py-2 space-y-1">
            {/* Topics Section */}
            <div className="py-2">
              <div className="font-medium text-gray-900 mb-2">Topics</div>
              {topics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  onClick={handleLinkClick}
                  className="block py-2 pl-4 text-gray-600 hover:text-primary-600"
                >
                  {topic.name}
                </Link>
              ))}
            </div>

            {/* Madhhabs Section */}
            <div className="py-2 border-t">
              <div className="font-medium text-gray-900 mb-2">Madhhabs</div>
              {madhhabs.map((madhhab) => (
                <Link
                  key={madhhab.href}
                  href={madhhab.href}
                  onClick={handleLinkClick}
                  className="block py-2 pl-4 text-gray-600 hover:text-primary-600"
                >
                  {madhhab.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 