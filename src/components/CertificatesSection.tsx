'use client';

import React from 'react';
import { CheckCircle, Users, TrendingUp, BookOpen } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';
import Image from 'next/image';

const CertificatesSection = () => {
  const { direction } = useLanguage();

  const certificates = [
    {
      id: 1,
      name: 'ISO 21001:2018',
      category: 'Educational Organizations',
      description: 'Management systems for educational organizations - enhancing satisfaction of learners, other beneficiaries and staff',
      logo: '/cert/iso21001.png',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      name: 'ISO 9001:2015',
      category: 'Quality Management',
      description: 'International standard for quality management systems ensuring consistent quality and customer satisfaction',
      logo: '/cert/iso_9001.png',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 3,
      name: 'NQA Certification',
      category: 'Quality Assurance',
      description: 'National Quality Assurance accreditation demonstrating our commitment to excellence and continuous improvement',
      logo: '/cert/nqa.png',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      name: 'CINPAA Accreditation',
      category: 'Professional Standards',
      description: 'Certified International Professional Accreditation Association recognition for meeting international standards',
      logo: '/cert/cinpaa.png',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Excellence Award 2023',
      description: 'Outstanding contribution to education',
      year: '2023'
    },
    {
      id: 2,
      title: 'Innovation in Learning',
      description: 'Best innovative teaching methods',
      year: '2022'
    },
    {
      id: 3,
      title: 'Community Impact',
      description: 'Significant positive community impact',
      year: '2022'
    },
    {
      id: 4,
      title: 'Student Success Award',
      description: 'Highest student achievement rates',
      year: '2021'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Medal className="w-4 h-4 mr-2" />
            <Message id="certificates.badge" fallback="Certifications & Awards" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <Message id="certificates.title" fallback="Recognized for" />
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              <Message id="certificates.titleHighlight" fallback="Excellence & Quality" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <Message 
              id="certificates.subtitle" 
              fallback="Our commitment to excellence is validated by prestigious certifications and awards from renowned international organizations." 
            />
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className={`group ${cert.bgColor} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 overflow-hidden`}
            >
              <div className="p-8 md:p-10">
                {/* Logo Section */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32 bg-white rounded-2xl shadow-lg p-4 group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={cert.logo}
                      alt={`${cert.name} certification logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    <Message id={`certificates.name.${cert.id}`} fallback={cert.name} />
                  </h3>
                  
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                    <Message id={`certificates.category.${cert.id}`} fallback={cert.category} />
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-base mt-4">
                    <Message id={`certificates.desc.${cert.id}`} fallback={cert.description} />
                  </p>
                </div>
                
                {/* Verification Badge */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      <Message id="certificates.verified" fallback="Verified Certification" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Bottom gradient line */}
              <div className={`h-3 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
            </div>
          ))}
        </div>

        {/* Awards Timeline */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <Message id="certificates.awards.title" fallback="Recent Awards & Achievements" />
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <Message id="certificates.awards.subtitle" fallback="Recognition of our continuous commitment to educational excellence and innovation" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-amber-600 font-bold text-sm mb-2">
                      {achievement.year}
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      <Message id={`certificates.achievement.title.${achievement.id}`} fallback={achievement.title} />
                    </h4>
                    
                    <p className="text-gray-600 text-xs leading-relaxed">
                      <Message id={`certificates.achievement.desc.${achievement.id}`} fallback={achievement.description} />
                    </p>
                  </div>
                </div>
                
                {/* Connecting line for larger screens */}
                {index < achievements.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-amber-200 transform translate-x-4 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <Message id="certificates.quality.title" fallback="Quality Assurance" />
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                <Message 
                  id="certificates.quality.description" 
                  fallback="Our rigorous quality standards ensure that every program meets international benchmarks for educational excellence." 
                />
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>
                    <Message id="certificates.quality.feature1" fallback="Internationally recognized standards" />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>
                    <Message id="certificates.quality.feature2" fallback="Regular external audits" />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>
                    <Message id="certificates.quality.feature3" fallback="Continuous improvement processes" />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>
                    <Message id="certificates.quality.feature4" fallback="Student outcome tracking" />
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm text-gray-300">
                    <Message id="certificates.stats.compliance" fallback="Compliance Rate" />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm text-gray-300">
                    <Message id="certificates.stats.certifications" fallback="Certifications" />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm text-gray-300">
                    <Message id="certificates.stats.satisfaction" fallback="Quality Rating" />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">5</div>
                  <div className="text-sm text-gray-300">
                    <Message id="certificates.stats.awards" fallback="Recent Awards" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CertificatesSection; 