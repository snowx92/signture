'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';

const AnnounceBar: React.FC = () => {
  const { direction } = useLanguage();

  return (
    <div className="bg-gray-900 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-4 text-sm ${direction === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Contact Information */}
          <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            <div className={`flex items-center gap-2 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Phone className="w-4 h-4 text-blue-400" />
              <a 
                href="tel:+201275444617"
                className="hover:text-blue-400 transition-colors duration-200 hidden sm:inline"
                dir="ltr"
              >
                +20 12 75444617
              </a>
            </div>
            
            <div className={`flex items-center gap-2 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Mail className="w-4 h-4 text-blue-400" />
              <a 
                href="mailto:signatureacademy30@gmail.com"
                className="hover:text-blue-400 transition-colors duration-200 hidden sm:inline"
                dir="ltr"
              >
                signatureacademy30@gmail.com
              </a>
            </div>
            
            <div className={`flex items-center gap-2 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <MapPin className="w-4 h-4 text-blue-400" />
              <a 
                href="https://www.google.com/maps/place//@30.1065521,31.3401985,17z/data=!4m6!1m5!3m4!2zMzDCsDA2JzIzLjYiTiAzMcKwMjAnMzQuMCJF!8m2!3d30.1065521!4d31.3427734?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer hidden sm:inline"
              >
                <Message id="header.address" fallback="٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١  بجوار مسجد ابو بكر الصديق بجوار قسم النزهه" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-gray-400 hidden sm:inline">
              <Message id="header.followUs" fallback="Follow us:" />
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61573583622784"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-blue-600 rounded transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.instagram.com/signatureacadmy?igsh=bWF0Mml2dm4ybjl3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceBar; 