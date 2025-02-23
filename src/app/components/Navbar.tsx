'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronDown } from 'react-icons/fa'
import SearchBar from './SearchBar'

export default function Navbar() {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-emerald-600">FiqhCompare</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === '/'
                    ? 'border-emerald-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                href="/topics/purification"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname.startsWith('/topics')
                    ? 'border-emerald-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Compare
              </Link>
              <div className="relative">
                <button
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname.startsWith('/madhhab')
                      ? 'border-emerald-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Madhhabs
                  <FaChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {['hanafi', 'maliki', 'shafii', 'hanbali'].map((madhhab) => (
                        <Link
                          key={madhhab}
                          href={`/madhhab/${madhhab}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {madhhab} School
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/references"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === '/references'
                    ? 'border-emerald-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                References
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  )
} 