'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';

const Footer: React.FC = () => {
  const { direction } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              <Message id="footer.about.title" fallback="About Signature Academy" />
            </h3>
            <p className="text-gray-300 leading-relaxed">
              <Message 
                id="footer.about.description" 
                fallback="Empowering young minds through innovative educational programs designed to nurture creativity, critical thinking, and lifelong learning." 
              />
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">
                <Message id="footer.about.status" fallback="Currently Accepting New Students" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              <Message id="footer.links.title" fallback="Quick Links" />
            </h3>
            <nav className="space-y-2">
              {[
                { href: '/', labelId: 'footer.links.home', fallback: 'Home' },
                { href: '#about', labelId: 'footer.links.about', fallback: 'About Us' },
                { href: '#programs', labelId: 'footer.links.programs', fallback: 'Programs' },
                { href: '#partners', labelId: 'footer.links.partners', fallback: 'Partners' },
                { href: '#certificates', labelId: 'footer.links.certificates', fallback: 'Certificates' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  <Message id={link.labelId} fallback={link.fallback} />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              <Message id="footer.contact.title" fallback="Contact Info" />
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+201275444617"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Message id="footer.contact.phone" fallback="+20 12 75444617" />
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:signatureacademy30@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200 break-all"
                >
                  <Message id="footer.contact.email" fallback="signatureacademy30@gmail.com" />
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps/place//@30.1065521,31.3401985,17z/data=!4m6!1m5!3m4!2zMzDCsDA2JzIzLjYiTiAzMcKwMjAnMzQuMCJF!8m2!3d30.1065521!4d31.3427734?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 leading-relaxed"
                >
                  <Message 
                    id="footer.contact.address" 
                    fallback="٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١  بجوار مسجد ابو بكر الصديق بجوار قسم النزهه" 
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              <Message id="footer.social.title" fallback="Connect With Us" />
            </h3>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61573583622784"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.instagram.com/signatureacadmy?igsh=bWF0Mml2dm4ybjl3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>


          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${direction === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-gray-400 text-sm">
              <Message 
                id="footer.copyright" 
                fallback="© 2024 Signature Academy. All rights reserved." 
              />
            </div>
            
            <div className={`flex items-center gap-6 text-sm text-gray-400 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                <Message id="footer.privacy" fallback="Privacy Policy" />
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                <Message id="footer.terms" fallback="Terms of Service" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 