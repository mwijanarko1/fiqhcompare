'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const mainCategories = [
    { name: 'Purification', href: '/topics/purification' },
    { name: 'Prayer', href: '/topics/prayer' },
    { name: 'Fasting', href: '/topics/fasting' },
    { name: 'Zakat', href: '/topics/zakat' },
    { name: 'Hajj', href: '/topics/hajj' },
  ];

  const aboutLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'References', href: '/references' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms of Use', href: '/terms' },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">FiqhCompare</h3>
            <p className="text-gray-600 text-sm">
              Exploring the beautiful diversity of Islamic jurisprudence through comparative study.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600 text-sm">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@fiqhcompare.com"
              className="text-emerald-600 hover:text-emerald-700 text-sm block mt-2"
            >
              contact@fiqhcompare.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FiqhCompare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 