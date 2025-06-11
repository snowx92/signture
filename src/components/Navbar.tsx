'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, direction, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: '/', labelId: 'nav.home', fallback: 'Home', section: null },
    { href: '/#about', labelId: 'nav.about', fallback: 'About Us', section: 'about' },
    { href: '/#programs', labelId: 'nav.programs', fallback: 'Programs', section: 'programs' },
    { href: '/#testimonials', labelId: 'nav.testimonials', fallback: 'Reviews', section: 'testimonials' },
    { href: '/#faqs', labelId: 'nav.faqs', fallback: 'FAQs', section: 'faqs' },
    { href: '/#contact', labelId: 'nav.contact', fallback: 'Contact', section: 'contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (href: string, section: string | null) => {
    if (href === '/') {
      return pathname === '/';
    }
    // For section links, check if we're on home page
    if (section && pathname === '/') {
      return false; // We could add active section detection here later
    }
    return pathname.startsWith(href.split('#')[0]);
  };

  const handleNavClick = (href: string, section: string | null) => {
    if (section) {
      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        router.push('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(section);
        }, 100);
      } else {
        // We're already on home page, just scroll
        scrollToSection(section);
      }
    } else {
      // Regular navigation for home link
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
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
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.section)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group cursor-pointer ${
                    isActiveLink(link.href, link.section)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Message id={link.labelId} fallback={link.fallback} />
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform transition-transform duration-200 ${
                    isActiveLink(link.href, link.section) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
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
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.section)}
                className={`w-full text-left block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActiveLink(link.href, link.section)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Message id={link.labelId} fallback={link.fallback} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 