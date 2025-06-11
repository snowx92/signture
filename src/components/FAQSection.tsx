'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import Message from './Message';
import { useLanguage } from './ClientIntlProvider';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { direction } = useLanguage();

  const faqs = [
    {
      id: 1,
      question: 'What age groups do you accept at Signature Academy?',
      answer: 'We welcome students from age 3 to 18 years old. Our programs are designed for different age groups: Early Childhood (3-6 years), Elementary (6-12 years), and Secondary (12-18 years). Each program is tailored to the developmental needs and learning capabilities of the respective age group.'
    },
    {
      id: 2,
      question: 'What languages are the courses taught in?',
      answer: 'Our courses are offered in both English and Arabic. We believe in bilingual education that helps students become globally competitive while maintaining their cultural identity. Most of our programs offer instruction in both languages, with some specialized courses available in English only.'
    },
    {
      id: 3,
      question: 'Are your certificates internationally recognized?',
      answer: 'Yes, absolutely! Our certificates are internationally recognized and accredited by prestigious organizations including Cambridge Assessment, British Council, and other international bodies. Our graduates have successfully pursued higher education and careers worldwide.'
    },
    {
      id: 4,
      question: 'What is the admission process?',
      answer: 'Our admission process is simple and straightforward: 1) Submit an online application, 2) Schedule a placement assessment, 3) Attend an interview with our educational consultants, 4) Receive acceptance letter, 5) Complete enrollment. We also offer a free 10-minute consultation to help you choose the right program.'
    },
    {
      id: 5,
      question: 'Do you offer online learning options?',
      answer: 'Yes, we offer flexible learning options including online, hybrid, and in-person classes. Our digital learning platform provides interactive lessons, virtual classrooms, and comprehensive support. Students can choose the format that best suits their needs and schedule.'
    },
    {
      id: 6,
      question: 'What support do you provide for students?',
      answer: 'We provide comprehensive support including academic tutoring, career guidance, mental health support, and extracurricular activities. Our dedicated support team is available 24/7 to assist students with any challenges they may face during their learning journey.'
    },
    {
      id: 7,
      question: 'How much do the programs cost?',
      answer: 'Our program fees vary depending on the course level, duration, and format. We offer competitive pricing and flexible payment plans to make quality education accessible. Contact us for detailed pricing information and available scholarships or discounts.'
    },
    {
      id: 8,
      question: 'Can I visit the academy before enrolling?',
      answer: 'Absolutely! We encourage prospective students and parents to visit our campus. You can schedule a guided tour, meet our educators, observe classes, and get a feel for our learning environment. Virtual tours are also available for those who cannot visit in person.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => 
      prev === index ? null : index
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <HelpCircle className="w-4 h-4 mr-2" />
            <Message id="faq.badge" fallback="Frequently Asked Questions" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <Message id="faq.title" fallback="Got Questions?" />
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Message id="faq.titleHighlight" fallback="We Have Answers" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <Message 
              id="faq.subtitle" 
              fallback="Find answers to the most common questions about our programs, admission process, and services. Can't find what you're looking for? Contact us directly." 
            />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ${
                      openIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        <Message id={`faq.question.${faq.id}`} fallback={faq.question} />
                      </h3>
                      <div className="flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp className="w-6 h-6 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        <Message id={`faq.answer.${faq.id}`} fallback={faq.answer} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-2">
                  <Message id="faq.contact.title" fallback="Still Have Questions?" />
                </h3>
                <p className="text-blue-100 text-sm">
                  <Message id="faq.contact.subtitle" fallback="Our team is here to help you" />
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="tel:+201275444617"
                  className={`flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}
                >
                  <Phone className="w-5 h-5 text-blue-200" />
                  <div>
                    <div className="font-semibold text-sm" dir="ltr">+20 12 75444617</div>
                    <div className="text-blue-200 text-xs">
                      <Message id="faq.contact.phone" fallback="Call us now" />
                    </div>
                  </div>
                </a>
                
                <a
                  href="mailto:signatureacademy30@gmail.com"
                  className={`flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}
                >
                  <Mail className="w-5 h-5 text-blue-200" />
                  <div>
                    <div className="font-semibold text-sm break-all" dir="ltr">signatureacademy30@gmail.com</div>
                    <div className="text-blue-200 text-xs">
                      <Message id="faq.contact.email" fallback="Send us an email" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-4">
                <Message id="faq.tips.title" fallback="Quick Tips" />
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-800">
                    <Message id="faq.tips.tip1" fallback="Schedule a free consultation before enrolling" />
                  </p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-800">
                    <Message id="faq.tips.tip2" fallback="Visit our campus to see the facilities" />
                  </p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-800">
                    <Message id="faq.tips.tip3" fallback="Ask about payment plans and scholarships" />
                  </p>
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

export default FAQSection; 