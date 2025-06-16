'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';

const HeroSection = () => {
  const { direction } = useLanguage();

  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const fallbackContent = {
    badge: 'World-Class Education',
    welcome: 'Welcome to',
    brandName: 'Signature Academy',
    subtitle: 'Empowering Tomorrow\'s Leaders, Today',
    slogan: 'Learn today, lead tomorrow',
    sloganAr: 'اتدرب انطلق',
    description: 'At Signature Academy, we nurture young minds through world-class education rooted in values, creativity, and innovation. Our globally recognized programs and expert educators prepare students with the skills, confidence, and mindset to thrive in a changing world.',
    values: 'values',
    creativity: 'creativity',
    innovation: 'innovation',
    students: '1000+ Students',
    programs: '50+ Programs',
    recognition: 'Global Recognition',
    explore: 'Explore Our Programs',
    visit: 'Schedule a Visit',
    trust: 'Trusted by families worldwide',
    join: 'Join thousands of happy families',
    excellence: 'Excellence in Education',
    liveLearning: 'Live Learning',
    certified: 'Certified Programs'
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] ${direction === 'rtl' ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Content Side */}
          <div className={`space-y-8 animate-fade-in-up ${direction === 'rtl' ? 'lg:order-1 text-right' : 'lg:order-1 text-left'}`}>
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-bounce-in ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Star className={`w-4 h-4 text-yellow-500 ${direction === 'rtl' ? 'ml-2 mr-0' : 'mr-2'}`} />
              <Message id="hero.badge" fallback={fallbackContent.badge} />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-left">
                <span className="text-gray-900">
                  <Message id="hero.welcome" fallback={fallbackContent.welcome} />
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                  <Message id="hero.brandName" fallback={fallbackContent.brandName} />
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 animate-slide-in-right">
                <Message id="hero.subtitle" fallback={fallbackContent.subtitle} />
              </h2>
              
              {/* Slogan */}
              <p className="text-lg sm:text-xl italic font-medium text-blue-600 animate-slide-in-right">
                <Message id="hero.slogan" fallback={fallbackContent.slogan} />
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-fade-in delay-300">
              <Message
                id="hero.description"
                fallback={fallbackContent.description}
                values={{
                  values: <span className="font-semibold text-blue-600"><Message id="hero.values" fallback={fallbackContent.values} /></span>,
                  creativity: <span className="font-semibold text-purple-600"><Message id="hero.creativity" fallback={fallbackContent.creativity} /></span>,
                  innovation: <span className="font-semibold text-green-600"><Message id="hero.innovation" fallback={fallbackContent.innovation} /></span>
                }}
              />
            </p>

            {/* Stats */}
            <div className={`flex flex-wrap gap-6 py-4 animate-slide-in-up delay-500 ${direction === 'rtl' ? 'justify-end sm:justify-start' : ''}`}>
              <div className={`flex items-center space-x-2 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  <Message id="hero.stats.students" fallback={fallbackContent.students} />
                </span>
              </div>
              <div className={`flex items-center space-x-2 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">
                  <Message id="hero.stats.programs" fallback={fallbackContent.programs} />
                </span>
              </div>
              <div className={`flex items-center space-x-2 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">
                  <Message id="hero.stats.recognition" fallback={fallbackContent.recognition} />
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-700">
              <button 
                onClick={scrollToPrograms}
                className={`group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
              >
                <Message id="hero.cta.explore" fallback={fallbackContent.explore} />
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${direction === 'rtl' ? 'mr-2 ml-0 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 animate-fade-in delay-1000">
              <p className="text-sm text-gray-500 mb-4">
                <Message id="hero.trust" fallback={fallbackContent.trust} />
              </p>
              <div className={`flex items-center space-x-4 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                <div className={`flex ${direction === 'rtl' ? 'space-x-reverse -space-x-2' : '-space-x-2'}`}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  <Message id="hero.join" fallback={fallbackContent.join} />
                </span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative animate-fade-in-right ${direction === 'rtl' ? 'lg:order-2' : 'lg:order-2'}`}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/kids.png"
                  alt="Happy students learning with technology at Signature Academy"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Floating elements */}
                <div className={`absolute top-4 bg-white rounded-full p-3 shadow-lg animate-float ${direction === 'rtl' ? 'left-4' : 'right-4'}`}>
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                
                <div className={`absolute bottom-4 bg-blue-600 text-white rounded-full px-4 py-2 shadow-lg animate-slide-up ${direction === 'rtl' ? 'right-4' : 'left-4'}`}>
                  <span className="text-sm font-semibold">
                    <Message id="hero.excellence" fallback={fallbackContent.excellence} />
                  </span>
                </div>
              </div>

              {/* Floating cards */}
              <div className={`absolute -top-6 bg-white rounded-xl shadow-lg p-4 animate-float-delay-1 ${direction === 'rtl' ? '-right-6' : '-left-6'}`}>
                <div className={`flex items-center space-x-2 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-medium text-gray-700">
                    <Message id="hero.liveLearning" fallback={fallbackContent.liveLearning} />
                  </span>
                </div>
              </div>

              <div className={`absolute -bottom-6 bg-white rounded-xl shadow-lg p-4 animate-float-delay-2 ${direction === 'rtl' ? '-left-6' : '-right-6'}`}>
                <div className={`flex items-center space-x-2 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">
                    <Message id="hero.certified" fallback={fallbackContent.certified} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" className="animate-wave" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-25px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out 0.2s both;
        }

        .animate-slide-in-up {
          animation: slideInUp 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out 0.3s both;
        }

        .animate-bounce-in {
          animation: bounceIn 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite 0.5s;
        }

        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 1s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }

        .delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }

        .delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }

        .delay-700 {
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }

        .delay-1000 {
          animation-delay: 1s;
          animation-fill-mode: both;
        }

        .animate-slide-up {
          animation: slideInUp 1s ease-out 2s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 