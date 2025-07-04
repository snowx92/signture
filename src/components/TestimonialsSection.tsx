'use client';

import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './ClientIntlProvider';

// Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

// Memoized testimonial card component for better performance
const TestimonialCard = memo(({ testimonial, isVisible }: { 
  testimonial: Testimonial; 
  isVisible: boolean; 
}) => {
  if (!isVisible) {
    return <div className="bg-transparent p-8 md:p-12 mx-4" style={{ minHeight: '400px' }} />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-4 hover:shadow-2xl transition-shadow duration-300">
      {/* Quote icon */}
      <div className="flex justify-center mb-6">
        <Quote className="w-12 h-12 text-blue-500 opacity-50" />
      </div>

      {/* Stars */}
      <div className="flex justify-center items-center space-x-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star 
            key={i} 
            className="w-6 h-6 text-yellow-400 fill-current" 
          />
        ))}
      </div>
      
      {/* Testimonial text */}
      <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      
      {/* Author info */}
      <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div className="text-center">
          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

const TestimonialsSection = () => {
  const { direction } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const testimonials = useMemo(() => [
    {
      id: 1,
      name: 'أميرة محمد',
      role: 'أم لطالبين',
      text: 'فعلا ماشاء الله حضرتك اسلوبك وترتيب افكارك اكتر من ممتاز الموضوع سهل وفي نفس الوقت مهم لكل أم وأب ومربي',
      rating: 5
    },
    {
      id: 2,
      name: 'فاطمة الزهراء',
      role: 'طالبة في الأكاديمية',
      text: 'جزاكي الله عنا خير الجزاء دكتور لحضرتك في ذمتي كمت Signature academy',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah Ahmed',
      role: 'Professional Student',
      text: 'Thank you so much for the great presentation. The content was incredibly valuable and well-structured.',
      rating: 5
    },
    {
      id: 4,
      name: 'نور الهدى',
      role: 'أم وطالبة',
      text: 'محاضرة مهمة جدا فعلا لازم توعية. المحتوى قيم ومفيد جداً',
      rating: 5
    },
    {
      id: 5,
      name: 'هدى السيد',
      role: 'معلمة',
      text: 'محاضرة اكثر من رائعة فعلا معلومات قيمة ومعلم كل كلمة سلمت وممتعة ومشكورة اختي',
      rating: 5
    },
    {
      id: 6,
      name: 'مريم عبدالله',
      role: 'طالبة دبلوم',
      text: 'محاضرة رائعة ومفيدة جدا. استفدت كثيراً من المعلومات المقدمة',
      rating: 5
    },
    {
      id: 7,
      name: 'علياء محمود',
      role: 'أم لثلاثة أطفال',
      text: 'شكراً لأسلوبك حضرتك المميز، محاضرة ممتعة جداً ومفيدة',
      rating: 5
    },
    {
      id: 8,
      name: 'خديجة أحمد',
      role: 'مدربة تنمية بشرية',
      text: 'ماشاء الله عليكي دكتورة هدى الله يعطيك الصحة والعافية. محتوى رائع ومتميز',
      rating: 5
    }
  ], []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isClient]);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    // Only start auto-play after component has mounted and is visible
    const timer = setTimeout(() => {
      if (isIntersecting) {
        setIsAutoPlaying(true);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [isIntersecting]);

  const nextSlide = useCallback(() => {
    if (!isClient) return;
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length, isClient]);

  const prevSlide = useCallback(() => {
    if (!isClient) return;
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length, isClient]);

  const goToSlide = useCallback((index: number) => {
    if (!isClient) return;
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, [isClient]);

  // Auto-play only when visible and on client
  useEffect(() => {
    if (!isClient || !isAutoPlaying || !isIntersecting) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying, isClient, isIntersecting]);

  // Resume auto-play after inactivity
  useEffect(() => {
    if (!isClient || isAutoPlaying) return;
    
    const timeout = setTimeout(() => {
      if (isIntersecting) {
        setIsAutoPlaying(true);
      }
    }, 10000);
    
    return () => clearTimeout(timeout);
  }, [isAutoPlaying, isClient, isIntersecting]);

  // Show loading state during hydration
  if (!isClient) {
    return (
      <section id="testimonials-section" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-4 animate-pulse">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-center items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="space-y-4 mb-8">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                willChange: 'transform'
              }}
            >
              {testimonials.map((testimonial, index) => {
                const isVisible = Math.abs(index - currentSlide) <= 1;
                
                return (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isVisible={isVisible}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation buttons - only show when client is ready */}
          {isClient && (
            <>
              <button
                onClick={prevSlide}
                className={`absolute top-1/2 -translate-y-1/2 ${direction === 'rtl' ? 'right-4' : 'left-4'} 
                  bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 
                  hover:scale-105 z-10 group focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute top-1/2 -translate-y-1/2 ${direction === 'rtl' ? 'left-4' : 'right-4'} 
                  bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 
                  hover:scale-105 z-10 group focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      index === currentSlide 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Simplified floating elements - only show after hydration and when visible */}
        {isClient && isIntersecting && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(TestimonialsSection); 