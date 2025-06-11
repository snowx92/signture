'use client';

import React from 'react';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';

const AboutSection = () => {
  const { direction } = useLanguage();

  const values = [
    {
      icon: Heart,
      titleId: 'about.values.care.title',
      titleFallback: 'Care & Compassion',
      descId: 'about.values.care.desc',
      descFallback: 'Every child receives individual attention and support',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Award,
      titleId: 'about.values.excellence.title',
      titleFallback: 'Academic Excellence',
      descId: 'about.values.excellence.desc',
      descFallback: 'Maintaining the highest educational standards',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      titleId: 'about.values.community.title',
      titleFallback: 'Community Building',
      descId: 'about.values.community.desc',
      descFallback: 'Creating strong bonds between families and school',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      titleId: 'about.values.global.title',
      titleFallback: 'Global Perspective',
      descId: 'about.values.global.desc',
      descFallback: 'Preparing students for an interconnected world',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-50 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-50 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            <Message id="about.badge" fallback="About Us" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${direction === 'rtl' ? 'text-right' : 'text-left'} sm:text-center`}>
            <Message id="about.title" fallback="Building Bright" />
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Message id="about.titleHighlight" fallback="Futures Together" />
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${direction === 'rtl' ? 'text-right' : 'text-left'} sm:text-center`}>
            <Message 
              id="about.subtitle" 
              fallback="For over 15 years, Signature Academy has been dedicated to nurturing young minds and building strong foundations for lifelong learning." 
            />
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                <Message id="about.mission.title" fallback="Our Mission" />
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <Message 
                id="about.mission.text" 
                fallback="To provide exceptional bilingual education that empowers students to become confident, creative, and compassionate global citizens who contribute positively to their communities." 
              />
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                <Message id="about.vision.title" fallback="Our Vision" />
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <Message 
                id="about.vision.text" 
                fallback="To be the leading educational institution that bridges cultures and languages, creating tomorrow's leaders who embrace diversity and drive positive change in the world." 
              />
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            <Message id="about.values.title" fallback="Our Core Values" />
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <Message 
              id="about.values.subtitle" 
              fallback="These fundamental principles guide everything we do and shape the culture of our academy." 
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.titleId}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 border border-gray-100 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  <Message id={value.titleId} fallback={value.titleFallback} />
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  <Message id={value.descId} fallback={value.descFallback} />
                </p>

                {/* Decorative line */}
                <div className={`mt-4 h-1 w-8 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${direction === 'rtl' ? 'ml-auto' : ''}`}></div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default AboutSection; 