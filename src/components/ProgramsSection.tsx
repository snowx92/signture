'use client';

import React from 'react';
import { BookOpen, Users, Clock, ArrowRight, Star, Award, Globe } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';
import Message from './Message';
import Link from 'next/link';
import Image from 'next/image';

const ProgramsSection = () => {
  const { direction } = useLanguage();

  const handleConsultation = () => {
    const phoneNumber = "+201275444617";
    const message = `Hello, I'd like to book a 10-minute free consultation to help me find the right diploma program for my professional goals.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const programs = [
    {
      id: 'motivational-skills',
      title: 'Motivational Skills',
      shortDesc: 'Develop compelling visions and empower teams to achieve their goals through effective motivational strategies.',
      duration: '3-6 months',
      level: 'Intermediate',
      image: '/programs/soft skills.jpg',
      color: 'from-purple-500 to-indigo-500',
      category: 'Leadership'
    },
    {
      id: 'branding-diploma',
      title: 'Branding Diploma',
      shortDesc: 'Master the art of building powerful brands through strategic positioning, storytelling, and visual identity.',
      duration: '6-8 months',
      level: 'Beginner to Advanced',
      image: '/programs/branding .jpg',
      color: 'from-pink-500 to-rose-500',
      category: 'Marketing'
    },
    {
      id: 'business-english',
      title: 'Business English Communication',
      shortDesc: 'Enhance professional communication skills across diverse business contexts with confidence.',
      duration: '4-6 months',
      level: 'All Levels',
      image: '/programs/business english.jpg',
      color: 'from-blue-500 to-cyan-500',
      category: 'Communication'
    },
    {
      id: 'professional-branding',
      title: 'Professional Branding & Brand Management',
      shortDesc: 'Comprehensive foundation in brand management for beginners and aspiring professionals.',
      duration: '6-9 months',
      level: 'Beginner',
      image: '/programs/professional branding diploma.jpg',
      color: 'from-green-500 to-emerald-500',
      category: 'Marketing'
    },
    {
      id: 'leadership-diploma',
      title: 'Leadership Diploma',
      shortDesc: 'Develop foundational leadership skills to influence others and achieve organizational goals.',
      duration: '6-8 months',
      level: 'All Levels',
      image: '/programs/leadership.jpg',
      color: 'from-orange-500 to-red-500',
      category: 'Leadership'
    },
    {
      id: 'ecommerce-diploma',
      title: 'Online eCommerce Diploma',
      shortDesc: 'Master eCommerce platform design, development, and management in today\'s digital marketplace.',
      duration: '8-12 months',
      level: 'Advanced',
      image: '/programs/online ecommerce .jpeg',
      color: 'from-teal-500 to-green-500',
      category: 'Digital Business'
    },
    {
      id: 'human-resources',
      title: 'Human Resources Diploma',
      shortDesc: 'Comprehensive understanding of HR functions, processes, and emerging workplace technologies.',
      duration: '6-9 months',
      level: 'All Levels',
      image: '/placeholder-hr.jpg',
      color: 'from-indigo-500 to-purple-500',
      category: 'Management'
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills Diploma',
      shortDesc: 'Essential competencies for personal growth and professional effectiveness in any career.',
      duration: '4-6 months',
      level: 'All Levels',
      image: '/programs/soft skills.jpg',
      color: 'from-cyan-500 to-blue-500',
      category: 'Personal Development'
    },
    {
      id: 'marketing-diploma',
      title: 'Marketing Diploma',
      shortDesc: 'Transformative learning journey through analysis, strategy, implementation, and evaluation.',
      duration: '8-12 months',
      level: 'Intermediate to Advanced',
      image: '/programs/marketing.jpg',
      color: 'from-red-500 to-pink-500',
      category: 'Marketing'
    },
    {
      id: 'advertising-diploma',
      title: 'Advertising Diploma',
      shortDesc: 'Comprehensive understanding of marketing principles with focus on advertising strategies.',
      duration: '6-8 months',
      level: 'Intermediate',
      image: '/programs/advertisements.jpg',
      color: 'from-yellow-500 to-orange-500',
      category: 'Marketing'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Diploma',
      shortDesc: 'Complete digital marketing expertise from SEO to social media strategy and analytics.',
      duration: '6-9 months',
      level: 'All Levels',
      image: '/programs/digital marketing.jpg',
      color: 'from-violet-500 to-purple-500',
      category: 'Digital Marketing'
    },
    {
      id: 'food-safety',
      title: 'Food Safety & Hygiene Diploma',
      shortDesc: 'Egypt\'s first accredited program with dual UK and Finland certification.',
      duration: '3-4 months',
      level: 'All Levels',
      image: '/placeholder-food.jpg',
      color: 'from-green-600 to-teal-600',
      category: 'Health & Safety'
    },
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence Diploma',
      shortDesc: 'Comprehensive foundation in AI principles, machine learning, and neural networks.',
      duration: '8-12 months',
      level: 'Intermediate to Advanced',
      image: '/programs/artificial intelligence.jpg',
      color: 'from-slate-600 to-gray-600',
      category: 'Technology'
    },
    {
      id: 'vendor-management',
      title: 'Vendor Management Diploma',
      shortDesc: 'Master vendor relationships and drive optimal business outcomes through strategic management.',
      duration: '4-6 months',
      level: 'Intermediate',
      image: '/placeholder-vendor.jpg',
      color: 'from-emerald-500 to-teal-500',
      category: 'Management'
    },
    {
      id: 'first-100-days',
      title: 'First 100 Days as a Manager',
      shortDesc: 'Strategic guidance for professionals transitioning into new leadership roles.',
      duration: '2-3 months',
      level: 'Intermediate',
      image: '/programs/100 as brand manager.jpg',
      color: 'from-blue-600 to-indigo-600',
      category: 'Leadership'
    },
    {
      id: 'finance-non-financial',
      title: 'Finance for Non-Financial Managers',
      shortDesc: 'Essential financial knowledge and skills for non-financial professionals.',
      duration: '4-6 months',
      level: 'Beginner to Intermediate',
      image: '/placeholder-finance.jpg',
      color: 'from-green-700 to-emerald-700',
      category: 'Finance'
    },
    {
      id: 'digital-transformation-finance',
      title: 'Digital Transformation in Financial Services',
      shortDesc: 'Explore business strategy and technological innovation in financial services.',
      duration: '6-8 months',
      level: 'Advanced',
      image: '/placeholder-digital-finance.jpg',
      color: 'from-blue-700 to-cyan-700',
      category: 'Technology'
    },
    {
      id: 'sustainable-hospitality',
      title: 'Sustainable Hospitality Diploma',
      shortDesc: 'Lead sustainable operations and transform hospitality organizations into purpose-driven enterprises.',
      duration: '5-6 months',
      level: 'All Levels',
      image: '/placeholder-hospitality.jpg',
      color: 'from-green-500 to-lime-500',
      category: 'Hospitality'
    }
  ];

  const categories = [
    { key: 'all', labelId: 'programs.categories.all', fallback: 'All' },
    { key: 'marketing', labelId: 'programs.categories.marketing', fallback: 'Marketing' },
    { key: 'leadership', labelId: 'programs.categories.leadership', fallback: 'Leadership' },
    { key: 'technology', labelId: 'programs.categories.technology', fallback: 'Technology' },
    { key: 'management', labelId: 'programs.categories.management', fallback: 'Management' },
    { key: 'digital-marketing', labelId: 'programs.categories.digitalMarketing', fallback: 'Digital Marketing' },
    { key: 'communication', labelId: 'programs.categories.communication', fallback: 'Communication' },
    { key: 'personal-development', labelId: 'programs.categories.personalDevelopment', fallback: 'Personal Development' },
    { key: 'finance', labelId: 'programs.categories.finance', fallback: 'Finance' },
    { key: 'health-safety', labelId: 'programs.categories.healthSafety', fallback: 'Health & Safety' },
    { key: 'digital-business', labelId: 'programs.categories.digitalBusiness', fallback: 'Digital Business' },
    { key: 'hospitality', labelId: 'programs.categories.hospitality', fallback: 'Hospitality' }
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => {
        const categoryMap: Record<string, string> = {
          'marketing': 'Marketing',
          'leadership': 'Leadership',
          'technology': 'Technology',
          'management': 'Management',
          'digital-marketing': 'Digital Marketing',
          'communication': 'Communication',
          'personal-development': 'Personal Development',
          'finance': 'Finance',
          'health-safety': 'Health & Safety',
          'digital-business': 'Digital Business',
          'hospitality': 'Hospitality'
        };
        return program.category === categoryMap[selectedCategory];
      });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <Message id="programs.title" fallback="Professional Diploma Courses" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <Message 
              id="programs.subtitle" 
              fallback="Advance your career with our comprehensive diploma programs designed by industry experts. Choose from 18+ specialized courses across multiple disciplines." 
            />
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Message id={category.labelId} fallback={category.fallback} />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
            >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center`;
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80`}></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <Message id={`programs.${program.id}.title`} fallback={program.title} />
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    <Message id={`programs.${program.id}.desc`} fallback={program.shortDesc} />
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">
                        <Message id={`programs.${program.id}.duration`} fallback={program.duration} />
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">
                        <Message id="programs.certified" fallback="Certified" />
                      </span>
                    </div>
                  </div>

                  <Link 
                    href={`/courses/${program.id}`}
                    className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${program.color} text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    <span>
                      <Message id="programs.viewDetails" fallback="View Details" />
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <Message id="programs.cta.title" fallback="Can't Find the Right Program?" />
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              <Message 
                id="programs.cta.desc" 
                fallback="Our education consultants can help you find the perfect program that matches your needs and interests. We offer a free 10-minute consultation with our expert to guide you towards the best choice." 
              />
            </p>
            <button 
              onClick={handleConsultation}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>
                <Message id="programs.cta.button" fallback="Get Personal Consultation" />
              </span>
              <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 