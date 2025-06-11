'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, direction, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', labelId: 'nav.home', fallback: 'Home' },
    { href: '/about', labelId: 'nav.about', fallback: 'About Us' },
    { href: '/courses', labelId: 'nav.courses', fallback: 'Courses' },
    { href: '/contact', labelId: 'nav.contact', fallback: 'Contact Us' },
    { href: '/faqs', labelId: 'nav.faqs', fallback: 'FAQs' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Brand Section (Logo + Academy Name) */}
          <div className={`flex items-center ${direction === 'rtl' ? 'order-2 flex-row-reverse space-x-reverse space-x-4' : 'order-1 space-x-4'}`}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Signature Academy Logo"
                  width={80}
                  height={80}
                  className="h-14 w-14 lg:h-16 lg:w-16 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Academy Name */}
            <div className="hidden sm:block">
              <Link href="/">
                <span className="text-xl lg:text-2xl font-bold text-blue-600">
                  <Message id="nav.brandName" fallback="Signature Academy" />
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:block ${direction === 'rtl' ? 'order-1' : 'order-2'}`}>
            <div className={`flex items-baseline ${direction === 'rtl' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActiveLink(link.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Message id={link.labelId} fallback={link.fallback} />
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform transition-transform duration-200 ${
                    isActiveLink(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
              
              {/* Language Switcher - Desktop */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                <Globe className="w-4 h-4" />
                <span>
                  <Message 
                    id={language === 'en' ? 'language.arabic' : 'language.english'} 
                    fallback={language === 'en' ? 'العربية' : 'English'} 
                  />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </button>
            </div>
          </div>

          {/* Mobile menu button and language switcher */}
          <div className={`lg:hidden flex items-center gap-2 ${direction === 'rtl' ? 'order-1' : 'order-3'}`}>
            {/* Language Switcher - Mobile */}
            <button
              onClick={toggleLanguage}
              className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Globe className="h-5 w-5" />
            </button>
            
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActiveLink(link.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Message id={link.labelId} fallback={link.fallback} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 