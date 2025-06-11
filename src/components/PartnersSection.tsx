'use client';

import React from 'react';
import { Star, Globe, Users, Award, BookOpen, Handshake } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';
import Image from 'next/image';

const PartnersSection = () => {
  const { direction } = useLanguage();

  const partners = [
    {
      id: 1,
      name: 'ISS Germany',
      logo: '/partners/ISS_GERMANY_page-0001-removebg-preview.png',
      type: 'International Standards',
      description: 'German excellence in educational standards and quality assurance',
      bgColor: 'bg-red-50',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      name: 'National Quality Institute',
      logo: '/partners/National_Quality_Institute.png',
      type: 'Quality Assurance',
      description: 'National authority for quality certification and educational standards',
      bgColor: 'bg-blue-50',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Ekaasa Arab',
      logo: '/partners/EKAASALARAB.png',
      type: 'Regional Excellence',
      description: 'Leading Arab educational excellence and accreditation organization',
      bgColor: 'bg-green-50',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      name: 'CINPAA',
      logo: '/partners/cinpaa.png',
      type: 'Professional Accreditation',
      description: 'Certified International Professional Accreditation Association',
      bgColor: 'bg-purple-50',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Handshake className="w-4 h-4 mr-2" />
            <Message id="partners.badge" fallback="Our Partners" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <Message id="partners.title" fallback="Trusted by" />
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Message id="partners.titleHighlight" fallback="Global Leaders" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <Message 
              id="partners.subtitle" 
              fallback="We collaborate with renowned institutions and organizations worldwide to provide the highest quality education and opportunities for our students." 
            />
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600 text-sm">
              <Message id="partners.stats.countries" fallback="Countries" />
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600 text-sm">
              <Message id="partners.stats.partners" fallback="Partners" />
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
            <div className="text-gray-600 text-sm">
              <Message id="partners.stats.years" fallback="Years" />
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600 text-sm">
              <Message id="partners.stats.programs" fallback="Programs" />
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className={`group ${partner.bgColor} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 overflow-hidden`}
            >
              <div className="p-8 md:p-10">
                {/* Logo Section */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-40 h-28 bg-white rounded-2xl shadow-lg p-4 group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} partner logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    <Message id={`partners.name.${partner.id}`} fallback={partner.name} />
                  </h3>
                  
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${partner.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                    <Message id={`partners.type.${partner.id}`} fallback={partner.type} />
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-base mt-4">
                    <Message id={`partners.desc.${partner.id}`} fallback={partner.description} />
                  </p>
                </div>
                
                {/* Partnership Badge */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Handshake className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      <Message id="partners.verified" fallback="Verified Partner" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Bottom gradient line */}
              <div className={`h-3 bg-gradient-to-r ${partner.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <Message id="partners.benefits.title" fallback="Partnership Benefits" />
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      <Message id="partners.benefits.global.title" fallback="Global Recognition" />
                    </h4>
                    <p className="text-blue-100 text-sm">
                      <Message id="partners.benefits.global.desc" fallback="Internationally recognized certificates and qualifications" />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      <Message id="partners.benefits.quality.title" fallback="Quality Assurance" />
                    </h4>
                    <p className="text-blue-100 text-sm">
                      <Message id="partners.benefits.quality.desc" fallback="High standards maintained through partner oversight" />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      <Message id="partners.benefits.opportunities.title" fallback="Enhanced Opportunities" />
                    </h4>
                    <p className="text-blue-100 text-sm">
                      <Message id="partners.benefits.opportunities.desc" fallback="Access to global educational and career opportunities" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <div className="text-2xl font-bold mb-2">98%</div>
                  <div className="text-sm text-blue-100">
                    <Message id="partners.success.rate" fallback="Success Rate" />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <div className="text-2xl font-bold mb-2">4.9</div>
                  <div className="text-sm text-blue-100">
                    <Message id="partners.rating" fallback="Partner Rating" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection; 