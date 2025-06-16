'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  isClient: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Messages for English
const messagesEn = {
  // Header
  'header.phone': '+20 12 75444617',
  'header.email': 'signatureacademy30@gmail.com',
  'header.address': '٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١  بجوار مسجد ابو بكر الصديق بجوار قسم النزهه',
  'header.followUs': 'Follow us:',
  
  // Navigation
  'nav.home': 'Home',
  'nav.about': 'About Us',
  'nav.programs': 'Programs',
  'nav.testimonials': 'Reviews',
  'nav.contact': 'Contact Us',
  'nav.faqs': 'FAQs',
  'nav.brandName': 'Signature Academy',
  
  // Hero Section
  'hero.badge': 'World-Class Education',
  'hero.welcome': 'Welcome to',
  'hero.brandName': 'Signature Academy',
  'hero.subtitle': 'Empowering Tomorrow\'s Leaders, Today',
  'hero.slogan': 'Learn today, lead tomorrow',
  'hero.description': 'At Signature Academy, we nurture young minds through world-class education rooted in {values}, {creativity}, and {innovation}. Our globally recognized programs and expert educators prepare students with the skills, confidence, and mindset to thrive in a changing world.',
  'hero.values': 'values',
  'hero.creativity': 'creativity',
  'hero.innovation': 'innovation',
  'hero.stats.students': '1000+ Students',
  'hero.stats.programs': '50+ Programs',
  'hero.stats.recognition': 'Global Recognition',
  'hero.cta.explore': 'Explore Our Programs',
  'hero.cta.visit': 'Schedule a Visit',
  'hero.trust': 'Trusted by families worldwide',
  'hero.join': 'Join thousands of happy families',
  'hero.excellence': 'Excellence in Education',
  'hero.liveLearning': 'Live Learning',
  'hero.certified': 'Certified Programs',

  // Features Section
  'features.badge': 'Why Choose Us',
  'features.title': 'Excellence in Every',
  'features.titleHighlight': 'Learning Experience',
  'features.subtitle': 'Discover what makes our academy the preferred choice for thousands of students and families worldwide.',
  'features.learnMore': 'Learn more about our programs',
  'features.expert.title': 'Expert Instructors',
  'features.expert.desc': 'Learn from qualified educators with years of experience',
  'features.interactive.title': 'Interactive Learning',
  'features.interactive.desc': 'Engaging classroom activities and group discussions',
  'features.certified.title': 'Certified Programs',
  'features.certified.desc': 'Internationally recognized certificates and credentials',
  'features.flexible.title': 'Flexible Schedule',
  'features.flexible.desc': 'Choose from morning, evening, and weekend classes',
  'features.global.title': 'Global Curriculum',
  'features.global.desc': 'World-class education standards and modern teaching methods',
  'features.personalized.title': 'Personalized Learning',
  'features.personalized.desc': 'Tailored approach to meet each student\'s unique needs',
  'features.innovative.title': 'Innovative Methods',
  'features.innovative.desc': 'Latest technology and creative teaching techniques',
  'features.supportive.title': 'Supportive Environment',
  'features.supportive.desc': 'Nurturing atmosphere where every student can thrive',

  // About Section
  'about.badge': 'About Us',
  'about.title': 'Building Bright',
  'about.titleHighlight': 'Futures Together',
  'about.subtitle': 'For over 15 years, Signature Academy has been dedicated to nurturing young minds and building strong foundations for lifelong learning.',
  'about.mission.title': 'Our Mission',
  'about.mission.text': 'To provide exceptional bilingual education that empowers students to become confident, creative, and compassionate global citizens who contribute positively to their communities.',
  'about.vision.title': 'Our Vision',
  'about.vision.text': 'To be the leading educational institution that bridges cultures and languages, creating tomorrow\'s leaders who embrace diversity and drive positive change in the world.',
  'about.values.title': 'Our Core Values',
  'about.values.subtitle': 'These fundamental principles guide everything we do and shape the culture of our academy.',
  'about.values.care.title': 'Care & Compassion',
  'about.values.care.desc': 'Every child receives individual attention and support',
  'about.values.excellence.title': 'Academic Excellence',
  'about.values.excellence.desc': 'Maintaining the highest educational standards',
  'about.values.community.title': 'Community Building',
  'about.values.community.desc': 'Creating strong bonds between families and school',
  'about.values.global.title': 'Global Perspective',
  'about.values.global.desc': 'Preparing students for an interconnected world',
  'about.stats.title': 'Our Journey in Numbers',
  'about.stats.subtitle': 'Achievements that reflect our commitment to excellence',
  'about.stats.years': 'Years of Excellence',
  'about.stats.graduates': 'Successful Graduates',
  'about.stats.teachers': 'Expert Teachers',
  'about.stats.satisfaction': 'Parent Satisfaction',

  // Programs Section
  'programs.title': 'Our Programs',
  'programs.subtitle': 'From early childhood to high school preparation, our programs are designed to nurture growth at every stage.',
  'programs.learnMore': 'Learn More',
  'programs.early.title': 'Early Childhood Education',
  'programs.early.desc': 'Foundation building for ages 3-6 with play-based learning',
  'programs.elementary.title': 'Elementary Excellence',
  'programs.elementary.desc': 'Comprehensive curriculum focusing on core subjects',
  'programs.middle.title': 'Middle School Mastery',
  'programs.middle.desc': 'Advanced learning with specialized subjects',
  'programs.cta.title': 'Can\'t Find the Right Program?',
  'programs.cta.desc': 'Our education consultants can help you find the perfect program that matches your needs and interests. We offer a free 10-minute consultation with our expert to guide you towards the best choice.',
  'programs.cta.button': 'Get Personal Consultation',

  // Stats Section
  'stats.badge': 'Our Impact',
  'stats.title': 'Numbers That Speak',
  'stats.titleHighlight': 'Our Success',
  'stats.subtitle': 'These achievements reflect our commitment to excellence and the trust families place in us.',
  'stats.students.title': 'Happy Students',
  'stats.students.desc': 'Students have achieved their goals',
  'stats.courses.title': 'Courses Available',
  'stats.courses.desc': 'Comprehensive educational programs',
  'stats.satisfaction.title': 'Satisfaction Rate',
  'stats.satisfaction.desc': 'Student and parent satisfaction',
  'stats.countries.title': 'Countries Reached',
  'stats.countries.desc': 'Global education impact',
  'stats.growing': 'Growing Every Day',
  'stats.trusted': 'Trusted Worldwide',

  // Testimonials Section
  'testimonials.title': 'What Parents Say',
  'testimonials.subtitle': 'Real stories from families who trust us with their children\'s education.',

  // CTA Section
  'cta.title': 'Ready to Begin Your Child\'s',
  'cta.titleHighlight': 'Educational Journey?',
  'cta.subtitle': 'Join our community of families who have chosen excellence in education. Enrollment is now open for the upcoming academic year.',
  'cta.badge': 'Enrollment Open',
  'cta.card.title': 'Secure Your Child\'s Spot Today',
  'cta.card.desc': 'Limited spaces available for our premium programs. Schedule a visit to see why families choose us for their children\'s education.',
  'cta.scheduleVisit': 'Schedule a Visit',
  'cta.downloadBrochure': 'Download Brochure',
  'cta.contact.title': 'Get in Touch',
  'cta.contact.phone': 'Call us anytime',
  'cta.contact.email': 'Quick response guaranteed',
  'cta.contact.address': 'Visit our campus',
  'cta.features.flexible.title': 'Flexible Start Dates',
  'cta.features.flexible.desc': 'Multiple enrollment periods throughout the year',
  'cta.features.support.title': '24/7 Support',
  'cta.features.support.desc': 'Always here to help with any questions',
  'cta.features.easy.title': 'Easy Application',
  'cta.features.easy.desc': 'Simple online application process',
  'cta.interactiveLearning': 'Interactive Learning',
  'cta.expertGuidance': 'Expert Guidance',
  'cta.personalizedConsultation': 'Personalized consultation',
  'cta.programsCount': '18+ Programs',
  'cta.professionalDiplomas': 'Professional diplomas',
  'cta.certifiedPrograms': 'Certified Programs',
  'cta.industryRecognition': 'Industry Recognition',
  'cta.freeMinutes': '10 Min Free',
  'cta.quickConsultation': 'Quick consultation',
  'cta.whatsapp': 'WhatsApp',
  'cta.instantResponse': 'Instant response',
  'cta.freeExpertGuidance': 'Free 10-minute expert guidance',
  'cta.startWhatsappConsultation': 'Start WhatsApp Consultation',
  'cta.noCommitment': 'No commitment required',
  
  // Partners Section
  'partners.badge': 'Our Partners',
  'partners.title': 'Trusted by',
  'partners.titleHighlight': 'Global Leaders',
  'partners.subtitle': 'We collaborate with renowned institutions and organizations worldwide to provide the highest quality education and opportunities for our students.',
  'partners.verified': 'Verified Partner',
  'partners.stats.countries': 'Countries',
  'partners.stats.partners': 'Partners',
  'partners.stats.years': 'Years',
  'partners.stats.programs': 'Programs',
  'partners.name.1': 'ISS Germany',
  'partners.name.2': 'National Quality Institute',
  'partners.name.3': 'Ekaasa Arab',
  'partners.name.4': 'CINPAA',
  'partners.type.1': 'International Standards',
  'partners.type.2': 'Quality Assurance',
  'partners.type.3': 'Regional Excellence',
  'partners.type.4': 'Professional Accreditation',
  'partners.desc.1': 'German excellence in educational standards and quality assurance',
  'partners.desc.2': 'National authority for quality certification and educational standards',
  'partners.desc.3': 'Leading Arab educational excellence and accreditation organization',
  'partners.desc.4': 'Certified International Professional Accreditation Association',
  'partners.benefits.title': 'Partnership Benefits',
  'partners.benefits.global.title': 'Global Recognition',
  'partners.benefits.global.desc': 'Internationally recognized certificates and qualifications',
  'partners.benefits.quality.title': 'Quality Assurance',
  'partners.benefits.quality.desc': 'High standards maintained through partner oversight',
  'partners.benefits.opportunities.title': 'Enhanced Opportunities',
  'partners.benefits.opportunities.desc': 'Access to global educational and career opportunities',
  'partners.success.rate': 'Success Rate',
  'partners.rating': 'Partner Rating',

  // Certificates Section
  'certificates.badge': 'Certifications & Awards',
  'certificates.title': 'Recognized for',
  'certificates.titleHighlight': 'Excellence & Quality',
  'certificates.subtitle': 'Our commitment to excellence is validated by prestigious certifications and awards from renowned international organizations.',
  'certificates.verified': 'Verified Certification',
  'certificates.name.1': 'ISO 21001:2018',
  'certificates.name.2': 'ISO 9001:2015',
  'certificates.name.3': 'NQI  Certification',
  'certificates.name.4': 'CINPAA Accreditation',
  'certificates.category.1': 'Educational Organizations',
  'certificates.category.2': 'Quality Management',
  'certificates.category.3': 'Quality Assurance',
  'certificates.category.4': 'Professional Standards',
  'certificates.desc.1': 'Management systems for educational organizations - enhancing satisfaction of learners, other beneficiaries and staff',
  'certificates.desc.2': 'International standard for quality management systems ensuring consistent quality and customer satisfaction',
  'certificates.desc.3': 'National Quality Assurance accreditation demonstrating our commitment to excellence and continuous improvement',
  'certificates.desc.4': 'Certified International Professional Accreditation Association recognition for meeting international standards',
  'certificates.awards.title': 'Recent Awards & Achievements',
  'certificates.awards.subtitle': 'Recognition of our continuous commitment to educational excellence and innovation',
  'certificates.achievement.title.1': 'Excellence Award 2023',
  'certificates.achievement.title.2': 'Innovation in Learning',
  'certificates.achievement.title.3': 'Community Impact',
  'certificates.achievement.title.4': 'Student Success Award',
  'certificates.achievement.desc.1': 'Outstanding contribution to education',
  'certificates.achievement.desc.2': 'Best innovative teaching methods',
  'certificates.achievement.desc.3': 'Significant positive community impact',
  'certificates.achievement.desc.4': 'Highest student achievement rates',
  'certificates.quality.title': 'Quality Assurance',
  'certificates.quality.description': 'Our rigorous quality standards ensure that every program meets international benchmarks for educational excellence.',
  'certificates.quality.feature1': 'Internationally recognized standards',
  'certificates.quality.feature2': 'Regular external audits',
  'certificates.quality.feature3': 'Continuous improvement processes',
  'certificates.quality.feature4': 'Student outcome tracking',
  'certificates.stats.compliance': 'Compliance Rate',
  'certificates.stats.certifications': 'Certifications',
  'certificates.stats.satisfaction': 'Quality Rating',
  'certificates.stats.awards': 'Recent Awards',

  // FAQ Section
  'faq.badge': 'Frequently Asked Questions',
  'faq.title': 'Got Questions?',
  'faq.titleHighlight': 'We Have Answers',
  'faq.subtitle': 'Find answers to the most common questions about our programs, admission process, and services. Can\'t find what you\'re looking for? Contact us directly.',
  'faq.question.1': 'What age groups do you accept at Signature Academy?',
  'faq.question.2': 'What languages are the courses taught in?',
  'faq.question.3': 'Are your certificates internationally recognized?',
  'faq.question.4': 'What is the admission process?',
  'faq.question.5': 'Do you offer online learning options?',
  'faq.question.6': 'What support do you provide for students?',
  'faq.question.7': 'How much do the programs cost?',
  'faq.question.8': 'Can I visit the academy before enrolling?',
  'faq.question.9': 'Do you offer both online and offline courses?',
  'faq.answer.1': 'We welcome students from age 18 and above. Our programs are designed to meet the learning needs and developmental goals of adult learners.',
  'faq.answer.2': 'Our courses are offered in both English and Arabic. We believe in bilingual education that helps students become globally competitive while maintaining their cultural identity. Most of our programs offer instruction in both languages, with some specialized courses available in English only.',
  'faq.answer.3': 'Our certificates are internationally accredited and can be authenticated by the Ministry of Foreign Affairs.',
  'faq.answer.4': 'Our admission process is simple and straightforward: 1) Submit an online application, 2) Schedule a placement assessment, 3) Attend an interview with our educational consultants, 4) Receive acceptance letter, 5) Complete enrollment. We also offer a free 10-minute consultation to help you choose the right program.',
  'faq.answer.5': 'Yes, we offer flexible learning options including online, hybrid, and in-person classes. Our digital learning platform provides interactive lessons, virtual classrooms, and comprehensive support. Students can choose the format that best suits their needs and schedule.',
  'faq.answer.6': 'We provide comprehensive support including academic tutoring, career guidance, mental health support, and extracurricular activities. Our dedicated support team is available 24/7 to assist students with any challenges they may face during their learning journey.',
  'faq.answer.7': 'Our program fees vary depending on the course level, duration, and format. We offer competitive pricing and flexible payment plans to make quality education accessible. Contact us for detailed pricing information and available scholarships or discounts.',
  'faq.answer.8': 'Absolutely! We encourage prospective students and parents to visit our campus. You can schedule a guided tour, meet our educators, observe classes, and get a feel for our learning environment. Virtual tours are also available for those who cannot visit in person.',
  'faq.answer.9': 'Yes, we offer both online and offline learning options to accommodate different needs and preferences. Our offline courses provide traditional classroom experiences with direct teacher interaction and hands-on activities. Online courses offer flexibility with self-paced learning and interactive digital content. Both formats maintain the same curriculum standards and certification value. We also offer hybrid options that combine both approaches, allowing students to attend some sessions in person and others remotely.',
  'faq.contact.title': 'Still Have Questions?',
  'faq.contact.subtitle': 'Our team is here to help you',
  'faq.contact.phone': 'Call us now',
  'faq.contact.email': 'Send us an email',
  'faq.categories.title': 'Help Categories',
  'faq.categories.admissions': 'Admissions & Enrollment',
  'faq.categories.programs': 'Programs & Courses',
  'faq.categories.fees': 'Fees & Payment',
  'faq.categories.support': 'Student Support',
  'faq.tips.title': 'Quick Tips',
  'faq.tips.tip1': 'Schedule a free consultation before enrolling',
  'faq.tips.tip2': 'Visit our campus to see the facilities',
  'faq.tips.tip3': 'Ask about payment plans and scholarships',
  
  // Footer
  'footer.about.title': 'About Signature Academy',
  'footer.about.description': 'We are dedicated to providing world-class education that empowers students to achieve their full potential in a global society.',
  'footer.about.status': 'Currently Accepting New Students',
  'footer.links.title': 'Quick Links',
  'footer.links.home': 'Home',
  'footer.links.about': 'About Us',
  'footer.links.programs': 'Programs',
  'footer.links.partners': 'Partners',
  'footer.links.certificates': 'Certificates',
  'footer.contact.title': 'Contact Info',
  'footer.contact.phone': '+20 12 75444617',
  'footer.contact.email': 'signatureacademy30@gmail.com',
  'footer.contact.address': '٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١  بجوار مسجد ابو بكر الصديق بجوار قسم النزهه',
  'footer.social.title': 'Connect With Us',
  'footer.social.newsletter': 'Subscribe to our newsletter for updates',
  'footer.social.subscribe': 'Subscribe',
  'footer.copyright': '© 2024 Signature Academy. All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  
  // Programs Section
  'programs.categories.all': 'All',
  'programs.categories.marketing': 'Marketing',
  'programs.categories.leadership': 'Leadership',
  'programs.categories.technology': 'Technology',
  'programs.categories.management': 'Management',
  'programs.categories.digitalMarketing': 'Digital Marketing',
  'programs.categories.communication': 'Communication',
  'programs.categories.personalDevelopment': 'Personal Development',
  'programs.categories.finance': 'Finance',
  'programs.categories.healthSafety': 'Health & Safety',
  'programs.categories.digitalBusiness': 'Digital Business',
  'programs.categories.hospitality': 'Hospitality',
  'programs.certified': 'Certified',
  'programs.viewDetails': 'View Details',

  // Individual Programs
  'programs.motivational-skills.title': 'Motivational Skills',
  'programs.motivational-skills.desc': 'Develop compelling visions and empower teams to achieve their goals through effective motivational strategies.',
  'programs.motivational-skills.duration': '3-6 months',
  'programs.branding-diploma.title': 'Branding Diploma',
  'programs.branding-diploma.desc': 'Master the art of building powerful brands through strategic positioning, storytelling, and visual identity.',
  'programs.branding-diploma.duration': '6-8 months',
  'programs.business-english.title': 'Business English Communication',
  'programs.business-english.desc': 'Enhance professional communication skills across diverse business contexts with confidence.',
  'programs.business-english.duration': '4-6 months',
  'programs.professional-branding.title': 'Professional Branding & Brand Management',
  'programs.professional-branding.desc': 'Comprehensive foundation in brand management for beginners and aspiring professionals.',
  'programs.professional-branding.duration': '6-9 months',
  'programs.leadership-diploma.title': 'Leadership Diploma',
  'programs.leadership-diploma.desc': 'Develop foundational leadership skills to influence others and achieve organizational goals.',
  'programs.leadership-diploma.duration': '6-8 months',
  'programs.ecommerce-diploma.title': 'Online eCommerce Diploma',
  'programs.ecommerce-diploma.desc': 'Master eCommerce platform design, development, and management in today\'s digital marketplace.',
  'programs.ecommerce-diploma.duration': '8-12 months',
  'programs.human-resources.title': 'Human Resources Diploma',
  'programs.human-resources.desc': 'Comprehensive understanding of HR functions, processes, and emerging workplace technologies.',
  'programs.human-resources.duration': '6-9 months',
  'programs.soft-skills.title': 'Soft Skills Diploma',
  'programs.soft-skills.desc': 'Essential competencies for personal growth and professional effectiveness in any career.',
  'programs.soft-skills.duration': '4-6 months',
  'programs.marketing-diploma.title': 'Marketing Diploma',
  'programs.marketing-diploma.desc': 'Transformative learning journey through analysis, strategy, implementation, and evaluation.',
  'programs.marketing-diploma.duration': '8-12 months',
  'programs.advertising-diploma.title': 'Advertising Diploma',
  'programs.advertising-diploma.desc': 'Comprehensive understanding of marketing principles with focus on advertising strategies.',
  'programs.advertising-diploma.duration': '6-8 months',
  'programs.digital-marketing.title': 'Digital Marketing Diploma',
  'programs.digital-marketing.desc': 'Complete digital marketing expertise from SEO to social media strategy and analytics.',
  'programs.digital-marketing.duration': '6-9 months',
  'programs.food-safety.title': 'Food Safety & Hygiene Diploma',
  'programs.food-safety.desc': 'Egypt\'s first accredited program with dual UK and Finland certification.',
  'programs.food-safety.duration': '3-4 months',
  'programs.artificial-intelligence.title': 'Artificial Intelligence Diploma',
  'programs.artificial-intelligence.desc': 'Comprehensive foundation in AI principles, machine learning, and neural networks.',
  'programs.artificial-intelligence.duration': '8-12 months',
  'programs.vendor-management.title': 'Vendor Management Diploma',
  'programs.vendor-management.desc': 'Master vendor relationships and drive optimal business outcomes through strategic management.',
  'programs.vendor-management.duration': '4-6 months',
  'programs.first-100-days.title': 'First 100 Days as a Manager',
  'programs.first-100-days.desc': 'Strategic guidance for professionals transitioning into new leadership roles.',
  'programs.first-100-days.duration': '2-3 months',
  'programs.finance-non-financial.title': 'Finance for Non-Financial Managers',
  'programs.finance-non-financial.desc': 'Essential financial knowledge and skills for non-financial professionals.',
  'programs.finance-non-financial.duration': '4-6 months',
  'programs.digital-transformation-finance.title': 'Digital Transformation in Financial Services',
  'programs.digital-transformation-finance.desc': 'Explore business strategy and technological innovation in financial services.',
  'programs.digital-transformation-finance.duration': '6-8 months',
  'programs.sustainable-hospitality.title': 'Sustainable Hospitality Diploma',
  'programs.sustainable-hospitality.desc': 'Lead sustainable operations and transform hospitality organizations into purpose-driven enterprises.',
  'programs.sustainable-hospitality.duration': '5-6 months',

  // Course Page
  'course.notFound': 'Course Not Found',
  'course.returnHome': 'Return to Home',
  'course.backToCourses': 'Back to Courses',
  'course.students': 'students',
  'course.enrollNow': 'Enroll Now',
  'course.overview': 'Course Overview',
  'course.whatYouLearn': 'What You\'ll Learn',
  'course.curriculum': 'Curriculum',
  'course.information': 'Course Information',
  'course.duration': 'Duration',
  'course.level': 'Level',
  'course.rating': 'Rating',
  'course.prerequisites': 'Prerequisites',
  'course.certification': 'Certification',
  'course.certificationDesc': 'Upon successful completion, you\'ll receive an industry-recognized certificate that validates your expertise.',
  'course.readyToStart': 'Ready to Start?',
  'course.joinProfessionals': 'Join thousands of professionals who have advanced their careers with our programs.',

  // Course Levels
  'programs.motivational-skills.level': 'Intermediate',
  'programs.branding-diploma.level': 'Beginner to Advanced',
  'programs.business-english.level': 'All Levels',
  'programs.professional-branding.level': 'Beginner',
  'programs.leadership-diploma.level': 'All Levels',
  'programs.ecommerce-diploma.level': 'Advanced',
  'programs.human-resources.level': 'All Levels',
  'programs.soft-skills.level': 'All Levels',
  'programs.marketing-diploma.level': 'Intermediate to Advanced',
  'programs.advertising-diploma.level': 'Intermediate',
  'programs.digital-marketing.level': 'All Levels',
  'programs.food-safety.level': 'All Levels',
  'programs.artificial-intelligence.level': 'Intermediate to Advanced',
  'programs.vendor-management.level': 'Intermediate',
  'programs.first-100-days.level': 'Intermediate',
  'programs.finance-non-financial.level': 'Beginner to Intermediate',
  'programs.digital-transformation-finance.level': 'Advanced',
  'programs.sustainable-hospitality.level': 'All Levels',

  // Motivational Skills Course Details
  'programs.motivational-skills.fullDesc': 'This diploma program will equip you with the skills to develop and communicate a compelling shared vision for your team. You will learn how to set clear, effective goals and expectations that align with this vision and empower your team to achieve it. Additionally, the program explores key drivers of performance across different cultural contexts and teaches you how to align incentives and rewards with desired behaviors to foster motivation and commitment.\n\nMotivation is a critical challenge in today\'s organizations. According to a recent Gallup poll, only 13% of employees globally are highly engaged and motivated at work. This course challenges the notion that low motivation stems from individual shortcomings. Instead, it emphasizes how motivation is shaped by workplace conditions, goal structure, and reward systems. Through this course, you will gain practical tools to diagnose and address motivational challenges, enabling you to create an environment where your team can thrive and perform at their best.',
  'programs.motivational-skills.highlight.0': 'Develop compelling shared visions',
  'programs.motivational-skills.highlight.1': 'Set effective goals and expectations',
  'programs.motivational-skills.highlight.2': 'Understand cultural drivers of performance',
  'programs.motivational-skills.highlight.3': 'Design incentive and reward systems',
  'programs.motivational-skills.highlight.4': 'Diagnose motivational challenges',
  'programs.motivational-skills.curriculum.0': 'Introduction to Motivational Leadership',
  'programs.motivational-skills.curriculum.1': 'Vision Development and Communication',
  'programs.motivational-skills.curriculum.2': 'Goal Setting and Performance Management',
  'programs.motivational-skills.curriculum.3': 'Cultural Context in Motivation',
  'programs.motivational-skills.curriculum.4': 'Incentive Design and Implementation',
  'programs.motivational-skills.curriculum.5': 'Diagnostic Tools for Motivation',
  'programs.motivational-skills.curriculum.6': 'Creating High-Performance Environments',
  'programs.motivational-skills.prerequisite.0': 'Basic management experience',
  'programs.motivational-skills.prerequisite.1': 'Understanding of team dynamics',
  'programs.motivational-skills.certificationName': 'Professional Motivational Skills Diploma',

  // Branding Diploma Course Details
  'programs.branding-diploma.fullDesc': 'In today\'s competitive marketplace, strong branding is essential for capturing attention, building trust, and creating lasting customer loyalty. This comprehensive Branding Diploma program is designed to equip you with the strategic and creative skills needed to build, manage, and grow powerful brands.\n\nThroughout the program, you will explore the core principles of brand identity, positioning, and storytelling. You will learn how to develop a unique brand voice, create cohesive visual and verbal branding across channels, and align brand strategy with business objectives. The curriculum also covers critical topics such as consumer behavior, brand equity, digital branding, and reputation management.\n\nBy the end of this diploma, you will have the tools to conduct brand audits, craft compelling brand strategies, and lead brand initiatives that resonate with target audiences and stand out in a crowded marketplace. Whether you are building a new brand from the ground up or revitalizing an existing one, this program will prepare you to drive meaningful and measurable impact through effective branding.',
  'programs.branding-diploma.highlight.0': 'Master brand identity and positioning',
  'programs.branding-diploma.highlight.1': 'Develop unique brand voice and storytelling',
  'programs.branding-diploma.highlight.2': 'Create cohesive visual branding',
  'programs.branding-diploma.highlight.3': 'Understand consumer behavior',
  'programs.branding-diploma.highlight.4': 'Build brand equity and manage reputation',
  'programs.branding-diploma.curriculum.0': 'Fundamentals of Branding',
  'programs.branding-diploma.curriculum.1': 'Brand Strategy and Positioning',
  'programs.branding-diploma.curriculum.2': 'Brand Identity Development',
  'programs.branding-diploma.curriculum.3': 'Visual Brand Design',
  'programs.branding-diploma.curriculum.4': 'Brand Storytelling and Communication',
  'programs.branding-diploma.curriculum.5': 'Consumer Psychology and Behavior',
  'programs.branding-diploma.curriculum.6': 'Digital Branding Strategies',
  'programs.branding-diploma.curriculum.7': 'Brand Management and Reputation',
  'programs.branding-diploma.prerequisite.0': 'Basic marketing knowledge helpful but not required',
  'programs.branding-diploma.certificationName': 'Professional Branding Diploma',

  // Business English Course Details
  'programs.business-english.fullDesc': 'This diploma program is designed to develop learners\' ability to communicate effectively and professionally in a variety of business contexts. Through the exploration of key business concepts and real-world scenarios, participants will enhance their linguistic proficiency while building confidence in both written and spoken English within a professional environment.\n\nThe curriculum integrates essential language skills—including listening, reading, writing, speaking, grammar, and vocabulary—tailored specifically to business applications. Learners will be encouraged to think critically and communicate creatively, applying language tools to authentic business situations.\n\nKey topics covered include branding, corporate travel, organizational structures, advertising, commerce, cross-cultural communication, and employment. By the end of the program, participants will be well-equipped to navigate diverse business environments with clarity, professionalism, and cultural awareness.',
  'programs.business-english.highlight.0': 'Professional business communication',
  'programs.business-english.highlight.1': 'Cross-cultural communication skills',
  'programs.business-english.highlight.2': 'Business writing and presentations',
  'programs.business-english.highlight.3': 'Industry-specific vocabulary',
  'programs.business-english.highlight.4': 'Confidence in professional settings',
  'programs.business-english.curriculum.0': 'Business Communication Fundamentals',
  'programs.business-english.curriculum.1': 'Professional Writing Skills',
  'programs.business-english.curriculum.2': 'Presentation and Public Speaking',
  'programs.business-english.curriculum.3': 'Cross-Cultural Business Communication',
  'programs.business-english.curriculum.4': 'Industry-Specific English',
  'programs.business-english.curriculum.5': 'Business Correspondence',
  'programs.business-english.curriculum.6': 'Negotiation and Meeting Skills',
  'programs.business-english.prerequisite.0': 'Intermediate English level',
  'programs.business-english.certificationName': 'Business English Communication Diploma',

  // Language
  'language.english': 'English',
  'language.arabic': 'العربية'
};

// Messages for Arabic
const messagesAr = {
  // Header
  'header.phone': '+20 12 75444617',
  'header.email': 'signatureacademy30@gmail.com',
  'header.address': '٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١  بجوار مسجد ابو بكر الصديق بجوار قسم النزهه',
  'header.followUs': 'تابعنا:',
  
  // Navigation
  'nav.home': 'الرئيسية',
  'nav.about': 'من نحن',
  'nav.programs': 'البرامج',
  'nav.testimonials': 'التقييمات',
  'nav.contact': 'اتصل بنا',
  'nav.faqs': 'الأسئلة الشائعة',
  'nav.brandName': 'سجنتشر اكادمي',
  
  // Hero Section
  'hero.badge': 'تعليم عالمي المستوى',
  'hero.welcome': 'مرحباً بكم في',
  'hero.brandName': 'سجنتشر اكادمي',
  'hero.subtitle': 'تمكين قادة المستقبل، اليوم',
  'hero.slogan': 'اتدرب انطلق',
  'hero.description': 'في سجنتشر اكادمي، نرعى العقول الشابة من خلال التعليم عالمي المستوى المتجذر في {values} و{creativity} و{innovation}. برامجنا المعترف بها عالمياً ومعلمونا الخبراء يُعدون الطلاب بالمهارات والثقة والعقلية للازدهار في عالم متغير.',
  'hero.values': 'القيم',
  'hero.creativity': 'الإبداع',
  'hero.innovation': 'الابتكار',
  'hero.stats.students': '1000+ طالب',
  'hero.stats.programs': '50+ برنامج',
  'hero.stats.recognition': 'اعتراف عالمي',
  'hero.cta.explore': 'استكشف برامجنا',
  'hero.cta.visit': 'احجز زيارة',
  'hero.trust': 'محل ثقة العائلات حول العالم',
  'hero.join': 'انضم إلى آلاف العائلات السعيدة',
  'hero.excellence': 'التميز في التعليم',
  'hero.liveLearning': 'التعلم المباشر',
  'hero.certified': 'برامج معتمدة',

  // Features Section
  'features.badge': 'لماذا نحن',
  'features.title': 'التميز في كل',
  'features.titleHighlight': 'تجربة تعليمية',
  'features.subtitle': 'اكتشف ما يجعل أكاديميتنا الخيار المفضل لآلاف الطلاب والعائلات حول العالم.',
  'features.learnMore': 'تعرف على برامجنا',
  'features.expert.title': 'مدرسون خبراء',
  'features.expert.desc': 'تعلم من معلمين مؤهلين ذوي خبرة سنوات طويلة',
  'features.interactive.title': 'التعلم التفاعلي',
  'features.interactive.desc': 'أنشطة صفية جذابة ومناقشات جماعية',
  'features.certified.title': 'برامج معتمدة',
  'features.certified.desc': 'شهادات واعتمادات معترف بها دولياً',
  'features.flexible.title': 'مواعيد مرنة',
  'features.flexible.desc': 'اختر من فصول الصباح والمساء وعطلة نهاية الأسبوع',
  'features.global.title': 'منهج عالمي',
  'features.global.desc': 'معايير تعليمية عالمية المستوى وطرق تدريس حديثة',
  'features.personalized.title': 'تعلم شخصي',
  'features.personalized.desc': 'نهج مخصص لتلبية احتياجات كل طالب الفريدة',
  'features.innovative.title': 'طرق مبتكرة',
  'features.innovative.desc': 'أحدث التقنيات وتقنيات التدريس الإبداعية',
  'features.supportive.title': 'بيئة داعمة',
  'features.supportive.desc': 'جو مغذي حيث يمكن لكل طالب أن يزدهر',

  // About Section
  'about.badge': 'من نحن',
  'about.title': 'نبني مستقبلاً',
  'about.titleHighlight': 'مشرقاً معاً',
  'about.subtitle': 'لأكثر من 15 عاماً، كرست سجنتشر اكادمي جهودها لرعاية العقول الشابة وبناء أسس قوية للتعلم مدى الحياة.',
  'about.mission.title': 'مهمتنا',
  'about.mission.text': 'توفير تعليم ثنائي اللغة استثنائي يمكّن الطلاب من أن يصبحوا مواطنين عالميين واثقين ومبدعين ومتعاطفين يساهمون بإيجابية في مجتمعاتهم.',
  'about.vision.title': 'رؤيتنا',
  'about.vision.text': 'أن نكون المؤسسة التعليمية الرائدة التي تربط بين الثقافات واللغات، وتخلق قادة المستقبل الذين يتبنون التنوع ويقودون التغيير الإيجابي في العالم.',
  'about.values.title': 'قيمنا الأساسية',
  'about.values.subtitle': 'هذه المبادئ الأساسية توجه كل ما نفعله وتشكل ثقافة أكاديميتنا.',
  'about.values.care.title': 'الرعاية والتعاطف',
  'about.values.care.desc': 'كل طفل يحصل على اهتمام ودعم فردي',
  'about.values.excellence.title': 'التميز الأكاديمي',
  'about.values.excellence.desc': 'الحفاظ على أعلى المعايير التعليمية',
  'about.values.community.title': 'بناء المجتمع',
  'about.values.community.desc': 'خلق روابط قوية بين العائلات والمدرسة',
  'about.values.global.title': 'المنظور العالمي',
  'about.values.global.desc': 'إعداد الطلاب لعالم مترابط',
  'about.stats.title': 'رحلتنا بالأرقام',
  'about.stats.subtitle': 'إنجازات تعكس التزامنا بالتميز',
  'about.stats.years': 'سنوات من التميز',
  'about.stats.graduates': 'خريجون ناجحون',
  'about.stats.teachers': 'معلمون خبراء',
  'about.stats.satisfaction': 'رضا أولياء الأمور',

  // Programs Section
  'programs.title': 'برامجنا',
  'programs.subtitle': 'من الطفولة المبكرة إلى الإعداد للثانوية العامة، صُممت برامجنا لرعاية النمو في كل مرحلة.',
  'programs.learnMore': 'تعرف أكثر',
  'programs.early.title': 'تعليم الطفولة المبكرة',
  'programs.early.desc': 'بناء الأسس للأعمار 3-6 سنوات مع التعلم القائم على اللعب',
  'programs.elementary.title': 'التميز الابتدائي',
  'programs.elementary.desc': 'منهج شامل يركز على المواد الأساسية',
  'programs.middle.title': 'إتقان المرحلة المتوسطة',
  'programs.middle.desc': 'تعلم متقدم مع مواد متخصصة',
  'programs.cta.title': 'لا تجد البرنامج المناسب؟',
  'programs.cta.desc': 'يمكن لمستشارينا التعليميين مساعدتك في العثور على البرنامج الأمثل الذي يناسب احتياجاتك واهتماماتك. نقدم لك استشارة مجانية لمدة 10 دقائق مع خبرائنا لإرشادك نحو الخيار الأمثل.',
  'programs.cta.button': 'احصل على استشارة شخصية',

  // Stats Section
  'stats.badge': 'تأثيرنا',
  'stats.title': ' أرقام تتحدث عن',
  'stats.titleHighlight': 'نجاحنا  ',
  'stats.subtitle': 'هذه الإنجازات تعكس التزامنا بالتميز والثقة التي تضعها العائلات فينا.',
  'stats.students.title': 'طلاب سعداء',
  'stats.students.desc': 'طلاب حققوا أهدافهم',
  'stats.courses.title': 'دورات متوفرة',
  'stats.courses.desc': 'برامج تعليمية شاملة',
  'stats.satisfaction.title': 'معدل الرضا',
  'stats.satisfaction.desc': 'رضا الطلاب وأولياء الأمور',
  'stats.countries.title': 'دول وصلنا إليها',
  'stats.countries.desc': 'تأثير تعليمي عالمي',
  'stats.growing': 'نمو كل يوم',
  'stats.trusted': 'موثوق عالمياً',

  // Testimonials Section
  'testimonials.title': 'ماذا يقول أولياء الأمور',
  'testimonials.subtitle': 'قصص حقيقية من العائلات التي تثق بنا في تعليم أطفالها.',

  // CTA Section
  'cta.title': 'هل أنت مستعد لبدء',
  'cta.titleHighlight': 'رحلة طفلك التعليمية؟',
  'cta.subtitle': 'انضم إلى مجتمع العائلات التي اختارت التميز في التعليم. التسجيل مفتوح الآن للعام الأكاديمي القادم.',
  'cta.badge': 'التسجيل مفتوح',
  'cta.card.title': 'احجز مكان طفلك اليوم',
  'cta.card.desc': 'أماكن محدودة متاحة لبرامجنا المتميزة. احجز زيارة لترى لماذا تختارنا العائلات لتعليم أطفالها.',
  'cta.scheduleVisit': 'احجز زيارة',
  'cta.downloadBrochure': 'حمل الكتيب',
  'cta.contact.title': 'تواصل معنا',
  'cta.contact.phone': 'اتصل بنا في أي وقت',
  'cta.contact.email': 'استجابة سريعة مضمونة',
  'cta.contact.address': 'زر حرمنا الجامعي',
  'cta.features.flexible.title': 'مواعيد بدء مرنة',
  'cta.features.flexible.desc': 'فترات تسجيل متعددة على مدار السنة',
  'cta.features.support.title': 'دعم 24/7',
  'cta.features.support.desc': 'موجودون دائماً للمساعدة في أي أسئلة',
  'cta.features.easy.title': 'تطبيق سهل',
  'cta.features.easy.desc': 'عملية تطبيق بسيطة عبر الإنترنت',
  'cta.interactiveLearning': 'التعلم التفاعلي',
  'cta.expertGuidance': 'إرشاد الخبراء',
  'cta.personalizedConsultation': 'استشارة شخصية',
  'cta.programsCount': '18+ برنامج',
  'cta.professionalDiplomas': 'دبلومات مهنية',
  'cta.certifiedPrograms': 'برامج معتمدة',
  'cta.industryRecognition': 'اعتراف صناعي',
  'cta.freeMinutes': '10 دقائق مجاناً',
  'cta.quickConsultation': 'استشارة سريعة',
  'cta.whatsapp': 'واتساب',
  'cta.instantResponse': 'استجابة فورية',
  'cta.freeExpertGuidance': 'إرشاد خبير مجاني لمدة 10 دقائق',
  'cta.startWhatsappConsultation': 'ابدأ استشارة واتساب',
  'cta.noCommitment': 'لا يوجد التزام مطلوب',
  
  // Partners Section
  'partners.badge': 'شركاؤنا',
  'partners.title': 'موثوق من',
  'partners.titleHighlight': 'القادة العالميين',
  'partners.subtitle': 'نتعاون مع مؤسسات ومنظمات مرموقة حول العالم لتوفير أعلى جودة تعليمية وفرص لطلابنا.',
  'partners.verified': 'شريك موثق',
  'partners.stats.countries': 'دولة',
  'partners.stats.partners': 'شريك',
  'partners.stats.years': 'سنة',
  'partners.stats.programs': 'برنامج',
  'partners.name.1': 'آي إس إس ألمانيا',
  'partners.name.2': 'معهد الجودة الوطني',
  'partners.name.3': 'إكاسة العرب',
  'partners.name.4': 'سينبا',
  'partners.type.1': 'المعايير الدولية',
  'partners.type.2': 'ضمان الجودة',
  'partners.type.3': 'التميز الإقليمي',
  'partners.type.4': 'الاعتماد المهني',
  'partners.desc.1': 'التميز الألماني في المعايير التعليمية وضمان الجودة',
  'partners.desc.2': 'السلطة الوطنية لشهادة الجودة والمعايير التعليمية',
  'partners.desc.3': 'منظمة رائدة في التميز التعليمي العربي والاعتماد',
  'partners.desc.4': 'جمعية الاعتماد المهني الدولي المعتمد',
  'partners.benefits.title': 'فوائد الشراكة',
  'partners.benefits.global.title': 'الاعتراف العالمي',
  'partners.benefits.global.desc': 'شهادات ومؤهلات معترف بها دولياً',
  'partners.benefits.quality.title': 'ضمان الجودة',
  'partners.benefits.quality.desc': 'معايير عالية يتم الحفاظ عليها من خلال إشراف الشركاء',
  'partners.benefits.opportunities.title': 'فرص محسنة',
  'partners.benefits.opportunities.desc': 'الوصول إلى الفرص التعليمية والمهنية العالمية',
  'partners.success.rate': 'معدل النجاح',
  'partners.rating': 'تقييم الشريك',

  // Certificates Section
  'certificates.badge': 'الشهادات والجوائز',
  'certificates.title': 'معترف لـ',
  'certificates.titleHighlight': 'التميز والجودة',
  'certificates.subtitle': 'التزامنا بالتميز مُثبت من خلال شهادات وجوائز مرموقة من منظمات دولية معروفة.',
  'certificates.verified': 'شهادة موثقة',
  'certificates.name.1': 'أيزو 21001:2018',
  'certificates.name.2': 'أيزو 9001:2015',
  'certificates.name.3': 'شهادة NQI ',
  'certificates.name.4': 'اعتماد CINPAA',
  'certificates.category.1': 'المنظمات التعليمية',
  'certificates.category.2': 'إدارة الجودة',
  'certificates.category.3': 'ضمان الجودة',
  'certificates.category.4': 'المعايير المهنية',
  'certificates.desc.1': 'أنظمة إدارة المنظمات التعليمية - تعزيز رضا المتعلمين والمستفيدين والموظفين',
  'certificates.desc.2': 'المعيار الدولي لأنظمة إدارة الجودة يضمن الجودة المستمرة ورضا العملاء',
  'certificates.desc.3': 'اعتماد ضمان الجودة الوطني يظهر التزامنا بالتميز والتحسين المستمر',
  'certificates.desc.4': 'اعتراف جمعية الاعتماد المهني الدولي المعتمد لتلبية المعايير الدولية',
  'certificates.awards.title': 'الجوائز والإنجازات الحديثة',
  'certificates.awards.subtitle': 'اعتراف بالتزامنا المستمر بالتميز والابتكار التعليمي',
  'certificates.achievement.title.1': 'جائزة التميز 2023',
  'certificates.achievement.title.2': 'الابتكار في التعلم',
  'certificates.achievement.title.3': 'التأثير المجتمعي',
  'certificates.achievement.title.4': 'جائزة نجاح الطلاب',
  'certificates.achievement.desc.1': 'مساهمة بارزة في التعليم',
  'certificates.achievement.desc.2': 'أفضل طرق التدريس المبتكرة',
  'certificates.achievement.desc.3': 'تأثير إيجابي كبير على المجتمع',
  'certificates.achievement.desc.4': 'أعلى معدلات إنجاز الطلاب',
  'certificates.quality.title': 'ضمان الجودة',
  'certificates.quality.description': 'معايير الجودة الصارمة لدينا تضمن أن كل برنامج يلبي المعايير الدولية للتميز التعليمي.',
  'certificates.quality.feature1': 'معايير معترف بها دولياً',
  'certificates.quality.feature2': 'عمليات تدقيق خارجية منتظمة',
  'certificates.quality.feature3': 'عمليات التحسين المستمر',
  'certificates.quality.feature4': 'تتبع نتائج الطلاب',
  'certificates.stats.compliance': 'معدل الامتثال',
  'certificates.stats.certifications': 'الشهادات',
  'certificates.stats.satisfaction': 'تقييم الجودة',
  'certificates.stats.awards': 'الجوائز الحديثة',

  // FAQ Section
  'faq.badge': 'الأسئلة الشائعة',
  'faq.title': 'لديك أسئلة؟',
  'faq.titleHighlight': 'لدينا الإجابات',
  'faq.subtitle': 'اعثر على إجابات للأسئلة الأكثر شيوعاً حول برامجنا وعملية القبول وخدماتنا. لا تجد ما تبحث عنه؟ تواصل معنا مباشرة.',
  'faq.question.1': 'ما هي الفئات العمرية التي تقبلونها في سيجنتشر أكاديمي؟',
  'faq.question.2': 'ما هي اللغات التي تُدرَّس بها الدورات؟',
  'faq.question.3': 'هل شهاداتكم معترف بها دولياً؟',
  'faq.question.4': 'ما هي عملية القبول؟',
  'faq.question.5': 'هل تقدمون خيارات التعلم عبر الإنترنت؟',
  'faq.question.6': 'ما الدعم الذي تقدمونه للطلاب؟',
  'faq.question.7': 'كم تكلفة البرامج؟',
  'faq.question.8': 'هل يمكنني زيارة الأكاديمية قبل التسجيل؟',
  'faq.question.9': 'هل تقدمون دورات عبر الإنترنت وحضورية؟',
  'faq.answer.1': 'نرحب بالطلاب من عمر 18 سنة فما فوق. برامجنا مصممة لتلبية احتياجات التعلم والأهداف التنموية للمتعلمين البالغين.',
  'faq.answer.2': 'دوراتنا تُقدم باللغتين الإنجليزية والعربية. نؤمن بالتعليم ثنائي اللغة الذي يساعد الطلاب على أن يصبحوا منافسين عالمياً مع الحفاظ على هويتهم الثقافية. معظم برامجنا تقدم التدريس بكلا اللغتين، مع بعض الدورات المتخصصة المتوفرة بالإنجليزية فقط.',
  'faq.answer.3': 'نعم بالتأكيد! شهاداتنا معتمدة دولياً ومتاح توثيقها من وزارة الخارجية.',
  'faq.answer.4': 'عملية القبول لدينا بسيطة ومباشرة: 1) تقديم طلب عبر الإنترنت، 2) جدولة تقييم تحديد المستوى، 3) حضور مقابلة مع مستشارينا التعليميين، 4) تلقي رسالة القبول، 5) إكمال التسجيل. نقدم أيضاً استشارة مجانية لمدة 10 دقائق لمساعدتك في اختيار البرنامج المناسب.',
  'faq.answer.5': 'نعم، نقدم خيارات تعلم مرنة تشمل الصفوف عبر الإنترنت والمختلطة والحضورية. منصة التعلم الرقمية لدينا توفر دروساً تفاعلية وفصولاً افتراضية ودعماً شاملاً. يمكن للطلاب اختيار الشكل الذي يناسب احتياجاتهم وجدولهم.',
  'faq.answer.6': 'نقدم دعماً شاملاً يشمل التدريس الأكاديمي والإرشاد المهني ودعم الصحة النفسية والأنشطة اللامنهجية. فريق الدعم المخصص متاح 24/7 لمساعدة الطلاب في أي تحديات قد يواجهونها خلال رحلة التعلم.',
  'faq.answer.7': 'رسوم برامجنا تختلف حسب مستوى الدورة والمدة والشكل. نقدم أسعاراً تنافسية وخطط دفع مرنة لجعل التعليم الجيد متاحاً. تواصل معنا للحصول على معلومات مفصلة عن الأسعار والمنح أو الخصومات المتاحة.',
  'faq.answer.8': 'بالتأكيد! نشجع الطلاب المحتملين وأولياء الأمور على زيارة حرمنا الجامعي. يمكنك جدولة جولة موجهة ومقابلة معلمينا ومراقبة الصفوف والتعرف على بيئة التعلم لدينا. الجولات الافتراضية متاحة أيضاً لمن لا يستطيع الزيارة شخصياً.',
  'faq.answer.9': 'نعم، نقدم كلاً من خيارات التعلم عبر الإنترنت والحضورية لتلبية الاحتياجات والتفضيلات المختلفة. توفر دوراتنا الحضورية تجربة فصول دراسية تقليدية مع تفاعل مباشر مع المعلمين وأنشطة عملية. بينما توفر الدورات عبر الإنترنت مرونة مع التعلم الذاتي والمحتوى الرقمي التفاعلي. يحافظ كلا النوعين على نفس معايير المناهج وقيمة الشهادة. كما نقدم خيارات هجينة تجمع بين النهجين، مما يسمح للطلاب بحضور بعض الجلسات شخصياً والبعض الآخر عن بُعد.',
  'faq.contact.title': 'ما زالت لديك أسئلة؟',
  'faq.contact.subtitle': 'فريقنا هنا لمساعدتك',
  'faq.contact.phone': 'اتصل بنا الآن',
  'faq.contact.email': 'أرسل لنا إيميل',
  'faq.categories.title': 'فئات المساعدة',
  'faq.categories.admissions': 'القبول والتسجيل',
  'faq.categories.programs': 'البرامج والدورات',
  'faq.categories.fees': 'الرسوم والدفع',
  'faq.categories.support': 'دعم الطلاب',
  'faq.tips.title': 'نصائح سريعة',
  'faq.tips.tip1': 'احجز استشارة مجانية قبل التسجيل',
  'faq.tips.tip2': 'زر حرمنا لرؤية المرافق',
  'faq.tips.tip3': 'اسأل عن خطط الدفع والمنح الدراسية',
  
  // Footer
  'footer.about.title': 'حول سجنتشر اكادمي',
  'footer.about.description': 'نحن ملتزمون بتوفير تعليم عالمي المستوى يمكن الطلاب من تحقيق إمكاناتهم الكاملة في مجتمع عالمي.',
  'footer.about.status': 'نقبل حالياً طلاب جدد',
  'footer.links.title': 'روابط سريعة',
  'footer.links.home': 'الرئيسية',
  'footer.links.about': 'من نحن',
  'footer.links.programs': 'البرامج',
  'footer.links.partners': 'الشركاء',
  'footer.links.certificates': 'الشهادات',
  'footer.contact.title': 'معلومات الاتصال',
  'footer.contact.phone': '+20 12 75444617',
  'footer.contact.email': 'signatureacademy30@gmail.com',
  'footer.contact.address': '٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١  بجوار مسجد ابو بكر الصديق بجوار قسم النزهه',
  'footer.social.title': 'تواصل معنا',
  'footer.social.newsletter': 'اشترك في نشرتنا الإخبارية للحصول على التحديثات',
  'footer.social.subscribe': 'اشتراك',
  'footer.copyright': '© 2024 سجنتشر اكادمي. جميع الحقوق محفوظة.',
  'footer.privacy': 'سياسة الخصوصية',
  'footer.terms': 'شروط الخدمة',
  
  // Programs Section
  'programs.categories.all': 'الكل',
  'programs.categories.marketing': 'التسويق',
  'programs.categories.leadership': 'القيادة',
  'programs.categories.technology': 'التكنولوجيا',
  'programs.categories.management': 'الإدارة',
  'programs.categories.digitalMarketing': 'التسويق الرقمي',
  'programs.categories.communication': 'التواصل',
  'programs.categories.personalDevelopment': 'التطوير الشخصي',
  'programs.categories.finance': 'المالية',
  'programs.categories.healthSafety': 'الصحة والسلامة',
  'programs.categories.digitalBusiness': 'الأعمال الرقمية',
  'programs.categories.hospitality': 'الضيافة',
  'programs.certified': 'معتمد',
  'programs.viewDetails': 'عرض التفاصيل',

  // Individual Programs
  'programs.motivational-skills.title': 'مهارات التحفيز',
  'programs.motivational-skills.desc': 'تطوير رؤى مقنعة وتمكين الفرق لتحقيق أهدافها من خلال استراتيجيات التحفيز الفعالة.',
  'programs.motivational-skills.duration': '3-6 أشهر',
  'programs.branding-diploma.title': 'دبلوم العلامة التجارية',
  'programs.branding-diploma.desc': 'إتقان فن بناء العلامات التجارية القوية من خلال الموقع الاستراتيجي وسرد القصص والهوية البصرية.',
  'programs.branding-diploma.duration': '6-8 أشهر',
  'programs.business-english.title': 'التواصل باللغة الإنجليزية للأعمال',
  'programs.business-english.desc': 'تعزيز مهارات التواصل المهني عبر سياقات الأعمال المتنوعة بثقة.',
  'programs.business-english.duration': '4-6 أشهر',
  'programs.professional-branding.title': 'العلامة التجارية المهنية وإدارة العلامة التجارية',
  'programs.professional-branding.desc': 'أساس شامل في إدارة العلامة التجارية للمبتدئين والمهنيين الطموحين.',
  'programs.professional-branding.duration': '6-9 أشهر',
  'programs.leadership-diploma.title': 'دبلوم القيادة',
  'programs.leadership-diploma.desc': 'تطوير مهارات القيادة الأساسية للتأثير على الآخرين وتحقيق الأهداف التنظيمية.',
  'programs.leadership-diploma.duration': '6-8 أشهر',
  'programs.ecommerce-diploma.title': 'دبلوم التجارة الإلكترونية عبر الإنترنت',
  'programs.ecommerce-diploma.desc': 'إتقان تصميم وتطوير وإدارة منصات التجارة الإلكترونية في السوق الرقمي اليوم.',
  'programs.ecommerce-diploma.duration': '8-12 شهر',
  'programs.human-resources.title': 'دبلوم الموارد البشرية',
  'programs.human-resources.desc': 'فهم شامل لوظائف الموارد البشرية والعمليات وتقنيات مكان العمل الناشئة.',
  'programs.human-resources.duration': '6-9 أشهر',
  'programs.soft-skills.title': 'دبلوم المهارات الناعمة',
  'programs.soft-skills.desc': 'الكفاءات الأساسية للنمو الشخصي والفعالية المهنية في أي مهنة.',
  'programs.soft-skills.duration': '4-6 أشهر',
  'programs.marketing-diploma.title': 'دبلوم التسويق',
  'programs.marketing-diploma.desc': 'رحلة تعليمية تحويلية من خلال التحليل والاستراتيجية والتنفيذ والتقييم.',
  'programs.marketing-diploma.duration': '8-12 شهر',
  'programs.advertising-diploma.title': 'دبلوم الإعلان',
  'programs.advertising-diploma.desc': 'فهم شامل لمبادئ التسويق مع التركيز على استراتيجيات الإعلان.',
  'programs.advertising-diploma.duration': '6-8 أشهر',
  'programs.digital-marketing.title': 'دبلوم التسويق الرقمي',
  'programs.digital-marketing.desc': 'خبرة كاملة في التسويق الرقمي من تحسين محركات البحث إلى استراتيجية وسائل التواصل الاجتماعي والتحليلات.',
  'programs.digital-marketing.duration': '6-9 أشهر',
  'programs.food-safety.title': 'دبلوم سلامة الغذاء والنظافة',
  'programs.food-safety.desc': 'أول برنامج معتمد في مصر مع شهادة مزدوجة من المملكة المتحدة وفنلندا.',
  'programs.food-safety.duration': '3-4 أشهر',
  'programs.artificial-intelligence.title': 'دبلوم الذكاء الاصطناعي',
  'programs.artificial-intelligence.desc': 'أساس شامل في مبادئ الذكاء الاصطناعي والتعلم الآلي والشبكات العصبية.',
  'programs.artificial-intelligence.duration': '8-12 شهر',
  'programs.vendor-management.title': 'دبلوم إدارة الموردين',
  'programs.vendor-management.desc': 'إتقان علاقات الموردين وتحقيق نتائج أعمال مثلى من خلال الإدارة الاستراتيجية.',
  'programs.vendor-management.duration': '4-6 أشهر',
  'programs.first-100-days.title': 'أول 100 يوم كمدير',
  'programs.first-100-days.desc': 'التوجيه الاستراتيجي للمهنيين الذين ينتقلون إلى أدوار قيادية جديدة.',
  'programs.first-100-days.duration': '2-3 أشهر',
  'programs.finance-non-financial.title': 'المالية للمديرين غير الماليين',
  'programs.finance-non-financial.desc': 'المعرفة والمهارات المالية الأساسية للمهنيين غير الماليين.',
  'programs.finance-non-financial.duration': '4-6 أشهر',
  'programs.digital-transformation-finance.title': 'التحول الرقمي في الخدمات المالية',
  'programs.digital-transformation-finance.desc': 'استكشاف استراتيجية الأعمال والابتكار التكنولوجي في الخدمات المالية.',
  'programs.digital-transformation-finance.duration': '6-8 أشهر',
  'programs.sustainable-hospitality.title': 'دبلوم الضيافة المستدامة',
  'programs.sustainable-hospitality.desc': 'قيادة العمليات المستدامة وتحويل مؤسسات الضيافة إلى مؤسسات تدفعها الغاية.',
  'programs.sustainable-hospitality.duration': '5-6 أشهر',

  // Course Page
  'course.notFound': 'الدورة غير موجودة',
  'course.returnHome': 'العودة للرئيسية',
  'course.backToCourses': 'العودة للدورات',
  'course.students': 'طالب',
  'course.enrollNow': 'سجل الآن',
  'course.overview': 'نظرة عامة على الدورة',
  'course.whatYouLearn': 'ما ستتعلمه',
  'course.curriculum': 'المنهج الدراسي',
  'course.information': 'معلومات الدورة',
  'course.duration': 'المدة',
  'course.level': 'المستوى',
  'course.rating': 'التقييم',
  'course.prerequisites': 'المتطلبات المسبقة',
  'course.certification': 'الشهادة',
  'course.certificationDesc': 'عند الانتهاء بنجاح، ستحصل على شهادة معترف بها في الصناعة تؤكد خبرتك.',
  'course.readyToStart': 'مستعد للبدء؟',
  'course.joinProfessionals': 'انضم إلى آلاف المهنيين الذين طوروا مسيرتهم المهنية مع برامجنا.',

  // Course Levels
  'programs.motivational-skills.level': 'متوسط',
  'programs.branding-diploma.level': 'من المبتدئ إلى المتقدم',
  'programs.business-english.level': 'جميع المستويات',
  'programs.professional-branding.level': 'مبتدئ',
  'programs.leadership-diploma.level': 'جميع المستويات',
  'programs.ecommerce-diploma.level': 'متقدم',
  'programs.human-resources.level': 'جميع المستويات',
  'programs.soft-skills.level': 'جميع المستويات',
  'programs.marketing-diploma.level': 'من المتوسط إلى المتقدم',
  'programs.advertising-diploma.level': 'متوسط',
  'programs.digital-marketing.level': 'جميع المستويات',
  'programs.food-safety.level': 'جميع المستويات',
  'programs.artificial-intelligence.level': 'من المتوسط إلى المتقدم',
  'programs.vendor-management.level': 'متوسط',
  'programs.first-100-days.level': 'متوسط',
  'programs.finance-non-financial.level': 'من المبتدئ إلى المتوسط',
  'programs.digital-transformation-finance.level': 'متقدم',
  'programs.sustainable-hospitality.level': 'جميع المستويات',

  // Motivational Skills Course Details
  'programs.motivational-skills.fullDesc': 'سيزودك هذا البرنامج الدبلوم بالمهارات اللازمة لتطوير وتوصيل رؤية مشتركة مقنعة لفريقك. ستتعلم كيفية وضع أهداف وتوقعات واضحة وفعالة تتماشى مع هذه الرؤية وتمكن فريقك من تحقيقها. بالإضافة إلى ذلك، يستكشف البرنامج المحركات الرئيسية للأداء عبر السياقات الثقافية المختلفة ويعلمك كيفية مواءمة الحوافز والمكافآت مع السلوكيات المرغوبة لتعزيز الدافعية والالتزام.\n\nالدافعية تحدٍ بالغ الأهمية في منظمات اليوم. وفقاً لاستطلاع جالوب الأخير، فقط 13% من الموظفين عالمياً منخرطون ومتحفزون بشدة في العمل. تتحدى هذه الدورة فكرة أن انخفاض الدافعية ينبع من أوجه القصور الفردية. بدلاً من ذلك، تؤكد على كيفية تشكيل الدافعية من خلال ظروف مكان العمل وهيكل الأهداف وأنظمة المكافآت. من خلال هذه الدورة، ستكتسب أدوات عملية لتشخيص ومعالجة تحديات الدافعية، مما يمكنك من خلق بيئة يمكن لفريقك أن يزدهر فيها ويؤدي بأفضل ما لديه.',
  'programs.motivational-skills.highlight.0': 'تطوير رؤى مشتركة مقنعة',
  'programs.motivational-skills.highlight.1': 'وضع أهداف وتوقعات فعالة',
  'programs.motivational-skills.highlight.2': 'فهم المحركات الثقافية للأداء',
  'programs.motivational-skills.highlight.3': 'تصميم أنظمة الحوافز والمكافآت',
  'programs.motivational-skills.highlight.4': 'تشخيص تحديات الدافعية',
  'programs.motivational-skills.curriculum.0': 'مقدمة في القيادة التحفيزية',
  'programs.motivational-skills.curriculum.1': 'تطوير الرؤية والتواصل',
  'programs.motivational-skills.curriculum.2': 'وضع الأهداف وإدارة الأداء',
  'programs.motivational-skills.curriculum.3': 'السياق الثقافي في التحفيز',
  'programs.motivational-skills.curriculum.4': 'تصميم وتنفيذ الحوافز',
  'programs.motivational-skills.curriculum.5': 'أدوات التشخيص للدافعية',
  'programs.motivational-skills.curriculum.6': 'خلق بيئات عالية الأداء',
  'programs.motivational-skills.prerequisite.0': 'خبرة إدارية أساسية',
  'programs.motivational-skills.prerequisite.1': 'فهم ديناميكيات الفريق',
  'programs.motivational-skills.certificationName': 'دبلوم مهارات التحفيز المهني',

  // Branding Diploma Course Details
  'programs.branding-diploma.fullDesc': 'في السوق التنافسي اليوم، العلامة التجارية القوية ضرورية لجذب الانتباه وبناء الثقة وخلق ولاء العملاء الدائم. تم تصميم برنامج دبلوم العلامة التجارية الشامل هذا لتزويدك بالمهارات الاستراتيجية والإبداعية اللازمة لبناء وإدارة وتنمية العلامات التجارية القوية.\n\nطوال البرنامج، ستستكشف المبادئ الأساسية لهوية العلامة التجارية والموقع وسرد القصص. ستتعلم كيفية تطوير صوت علامة تجارية فريد، وإنشاء علامة تجارية بصرية ولفظية متماسكة عبر القنوات، ومواءمة استراتيجية العلامة التجارية مع أهداف العمل. يغطي المنهج أيضاً موضوعات حاسمة مثل سلوك المستهلك وقيمة العلامة التجارية والعلامة التجارية الرقمية وإدارة السمعة.\n\nبحلول نهاية هذا الدبلوم، ستمتلك الأدوات لإجراء تدقيق العلامة التجارية وصياغة استراتيجيات علامة تجارية مقنعة وقيادة مبادرات العلامة التجارية التي تتردد صداها مع الجماهير المستهدفة وتبرز في السوق المزدحم. سواء كنت تبني علامة تجارية جديدة من الصفر أو تنشط علامة تجارية موجودة، سيعدك هذا البرنامج لتحقيق تأثير ذي معنى وقابل للقياس من خلال العلامة التجارية الفعالة.',
  'programs.branding-diploma.highlight.0': 'إتقان هوية العلامة التجارية والموقع',
  'programs.branding-diploma.highlight.1': 'تطوير صوت العلامة التجارية الفريد وسرد القصص',
  'programs.branding-diploma.highlight.2': 'إنشاء علامة تجارية بصرية متماسكة',
  'programs.branding-diploma.highlight.3': 'فهم سلوك المستهلك',
  'programs.branding-diploma.highlight.4': 'بناء قيمة العلامة التجارية وإدارة السمعة',
  'programs.branding-diploma.curriculum.0': 'أساسيات العلامة التجارية',
  'programs.branding-diploma.curriculum.1': 'استراتيجية العلامة التجارية والموقع',
  'programs.branding-diploma.curriculum.2': 'تطوير هوية العلامة التجارية',
  'programs.branding-diploma.curriculum.3': 'تصميم العلامة التجارية البصرية',
  'programs.branding-diploma.curriculum.4': 'سرد القصص والتواصل للعلامة التجارية',
  'programs.branding-diploma.curriculum.5': 'علم النفس وسلوك المستهلك',
  'programs.branding-diploma.curriculum.6': 'استراتيجيات العلامة التجارية الرقمية',
  'programs.branding-diploma.curriculum.7': 'إدارة العلامة التجارية والسمعة',
  'programs.branding-diploma.prerequisite.0': 'المعرفة الأساسية بالتسويق مفيدة ولكن غير مطلوبة',
  'programs.branding-diploma.certificationName': 'دبلوم العلامة التجارية المهني',

  // Business English Course Details
  'programs.business-english.fullDesc': 'تم تصميم برنامج الدبلوم هذا لتطوير قدرة المتعلمين على التواصل بفعالية ومهنية في مجموعة متنوعة من السياقات التجارية. من خلال استكشاف المفاهيم التجارية الرئيسية والسيناريوهات الواقعية، سيعزز المشاركون كفاءتهم اللغوية بينما يبنون الثقة في اللغة الإنجليزية المكتوبة والمنطوقة داخل البيئة المهنية.\n\nيدمج المنهج المهارات اللغوية الأساسية - بما في ذلك الاستماع والقراءة والكتابة والتحدث والقواعد والمفردات - المصممة خصيصاً للتطبيقات التجارية. سيتم تشجيع المتعلمين على التفكير النقدي والتواصل الإبداعي، وتطبيق أدوات اللغة على المواقف التجارية الأصيلة.\n\nتشمل الموضوعات الرئيسية المغطاة العلامة التجارية والسفر المؤسسي والهياكل التنظيمية والإعلان والتجارة والتواصل عبر الثقافات والتوظيف. بحلول نهاية البرنامج، سيكون المشاركون مجهزين جيداً للتنقل في البيئات التجارية المتنوعة بوضوح ومهنية ووعي ثقافي.',
  'programs.business-english.highlight.0': 'التواصل التجاري المهني',
  'programs.business-english.highlight.1': 'مهارات التواصل عبر الثقافات',
  'programs.business-english.highlight.2': 'الكتابة التجارية والعروض التقديمية',
  'programs.business-english.highlight.3': 'المفردات الخاصة بالصناعة',
  'programs.business-english.highlight.4': 'الثقة في البيئات المهنية',
  'programs.business-english.curriculum.0': 'أساسيات التواصل التجاري',
  'programs.business-english.curriculum.1': 'مهارات الكتابة المهنية',
  'programs.business-english.curriculum.2': 'العرض والخطابة العامة',
  'programs.business-english.curriculum.3': 'التواصل التجاري عبر الثقافات',
  'programs.business-english.curriculum.4': 'الإنجليزية الخاصة بالصناعة',
  'programs.business-english.curriculum.5': 'المراسلات التجارية',
  'programs.business-english.curriculum.6': 'مهارات التفاوض والاجتماعات',
  'programs.business-english.prerequisite.0': 'مستوى متوسط في اللغة الإنجليزية',
  'programs.business-english.certificationName': 'دبلوم التواصل باللغة الإنجليزية للأعمال',
  
  // Language
  'language.english': 'English',
  'language.arabic': 'العربية'
};

const messages = {
  en: messagesEn,
  ar: messagesAr
};

interface ClientIntlProviderProps {
  children: React.ReactNode;
}

export const ClientIntlProvider: React.FC<ClientIntlProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Always start with consistent state
  const [direction, setDirection] = useState<Direction>('ltr'); // Always start with consistent state
  const [isClient, setIsClient] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Track hydration completion

  const toggleLanguage = () => {
    if (!isClient) return; // Prevent execution during SSR
    
    const newLanguage = language === 'en' ? 'ar' : 'en';
    const newDirection = newLanguage === 'ar' ? 'rtl' : 'ltr';
    
    setLanguage(newLanguage);
    setDirection(newDirection);
    
    // Update document attributes only on client
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', newDirection);
      document.documentElement.setAttribute('lang', newLanguage);
      
      // Store in localStorage
      try {
        localStorage.setItem('language', newLanguage);
      } catch (error) {
        console.warn('Failed to save language preference:', error);
      }
    }
  };

  useEffect(() => {
    // Mark as client-side and start hydration process
    setIsClient(true);
    
    // Load saved language from localStorage after hydration
    const loadSavedLanguage = () => {
      try {
        if (typeof window !== 'undefined') {
          const savedLanguage = localStorage.getItem('language') as Language;
          if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
            const savedDirection = savedLanguage === 'ar' ? 'rtl' : 'ltr';
            setLanguage(savedLanguage);
            setDirection(savedDirection);
            document.documentElement.setAttribute('dir', savedDirection);
            document.documentElement.setAttribute('lang', savedLanguage);
          }
        }
      } catch (error) {
        console.warn('Failed to load language preference:', error);
      } finally {
        setIsHydrated(true);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadSavedLanguage, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Provide consistent context during SSR and initial hydration
  const contextValue = {
    language,
    direction,
    toggleLanguage,
    isClient: isClient && isHydrated // Only true after full hydration
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <IntlProvider 
        locale={language} 
        messages={messages[language]}
        onError={(error) => {
          // Suppress missing translation warnings in development
          if (process.env.NODE_ENV === 'development' && error.code === 'MISSING_TRANSLATION') {
            return;
          }
          console.warn('IntlProvider error:', error);
        }}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}; 