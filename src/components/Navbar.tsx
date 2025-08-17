"use client";

import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, direction, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on a page that should have white navbar
  const isStaticPage =
    pathname.startsWith("/courses/") ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/board";

  const navLinks = [
    { href: "/", labelId: "nav.home", fallback: "Home", section: null },
    {
      href: "/#about",
      labelId: "nav.about",
      fallback: "About Us",
      section: "about",
    },
    {
      href: "/#programs",
      labelId: "nav.programs",
      fallback: "Programs",
      section: "programs",
    },
    {
      href: "/#testimonials",
      labelId: "nav.testimonials",
      fallback: "Reviews",
      section: "testimonials",
    },
    { href: "/#faqs", labelId: "nav.faqs", fallback: "FAQs", section: "faqs" },
    {
      href: "/#contact",
      labelId: "nav.contact",
      fallback: "Contact",
      section: "contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (href: string, section: string | null) => {
    if (href === "/") {
      return pathname === "/";
    }
    // For section links, check if we're on home page
    if (section && pathname === "/") {
      return false; // We could add active section detection here later
    }
    return pathname.startsWith(href.split("#")[0]);
  };

  const handleNavClick = (href: string, section: string | null) => {
    if (section) {
      // If we're not on the home page, navigate to home first
      if (pathname !== "/") {
        router.push("/");
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
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isStaticPage || isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Only */}
          <div
            className={`flex items-center ${
              direction === "rtl" ? "order-2" : "order-1"
            }`}
          >
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Signature Academy Logo"
                  width={80}
                  height={80}
                  className="h-12 w-12 lg:h-14 lg:w-14 object-contain transition-all duration-300"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:block ${
              direction === "rtl" ? "order-1" : "order-2"
            }`}
          >
            <div
              className={`flex items-baseline ${
                direction === "rtl" ? "space-x-reverse space-x-8" : "space-x-8"
              }`}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.section)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group cursor-pointer ${
                    isActiveLink(link.href, link.section)
                      ? "text-[#3791b9]"
                      : isStaticPage || isScrolled
                      ? "text-gray-700 hover:text-[#3791b9]"
                      : "text-white hover:text-[#3791b9]"
                  }`}
                >
                  <Message id={link.labelId} fallback={link.fallback} />
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#3791b9] transform transition-transform duration-200 ${
                      isActiveLink(link.href, link.section)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}

              {/* Language Switcher - Desktop */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#3791b9]"
                    : "text-white hover:text-[#3791b9]"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>
                  <Message
                    id={
                      language === "en" ? "language.arabic" : "language.english"
                    }
                    fallback={language === "en" ? "العربية" : "English"}
                  />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#3791b9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </button>
            </div>
          </div>

          {/* Mobile menu button and language switcher */}
          <div
            className={`lg:hidden flex items-center gap-2 ${
              direction === "rtl" ? "order-1" : "order-3"
            }`}
          >
            {/* Language Switcher - Mobile */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3791b9] ${
                isScrolled
                  ? "bg-white text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Globe className="h-5 w-5" />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3791b9] ${
                isScrolled
                  ? "bg-white text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
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
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
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
        <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
              isScrolled
                ? "bg-white border-gray-200"
                : "bg-white/95 backdrop-blur-md border-white/20"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.section)}
                className={`w-full text-left block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActiveLink(link.href, link.section)
                    ? "text-[#3791b9] bg-[#3791b9]/10"
                    : "text-gray-700 hover:text-[#3791b9] hover:bg-[#3791b9]/10"
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
