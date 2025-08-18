"use client";

import { ArrowRight, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";

const ProgramsSection = () => {
  const { direction } = useLanguage();

  const handleConsultation = () => {
    const phoneNumber = "+201275444617";
    const message = `Hello, I'd like to book a 10-minute free consultation to help me find the right diploma program for my professional goals.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const programs = [
    // --- Technology & Management Diplomas (Upcoming) ---
    {
      id: "artificial-intelligence-diploma",
      title: "Artificial Intelligence Diploma",
      shortDesc:
        "Comprehensive foundation in AI principles, machine learning, and neural networks.",
      duration: "",
      level: "",
      image: "/programs/artificial intelligence.jpg",
      color: "from-slate-600 to-gray-600",
      category: "Technology",
      upcoming: true,
    },
    {
      id: "vendor-management-diploma",
      title: "Vendor Management Diploma",
      shortDesc:
        "Master vendor relationships and drive optimal business outcomes through strategic management.",
      duration: "",
      level: "",
      image: "/programs/vendor management.jpeg",
      color: "from-emerald-500 to-teal-500",
      category: "Management",
      upcoming: true,
    },
    {
      id: "first-100-days-manager",
      title: "First 100 Days as a Manager",
      shortDesc:
        "Strategic guidance for professionals transitioning into new leadership roles.",
      duration: "",
      level: "",
      image: "/programs/100 as brand manager.jpg",
      color: "from-[#3791b9] to-[#021982]",
      category: "Leadership",
      upcoming: true,
    },
    {
      id: "finance-non-financial-managers",
      title: "Finance for Non-Financial Managers",
      shortDesc:
        "Essential financial knowledge and skills for non-financial professionals.",
      duration: "",
      level: "",
      image: "/programs/finance for non finance.jpeg",
      color: "from-green-700 to-emerald-700",
      category: "Finance",
      upcoming: true,
    },
    {
      id: "digital-transformation-financial-services",
      title: "Digital Transformation in Financial Services",
      shortDesc:
        "Explore business strategy and technological innovation in financial services.",
      duration: "",
      level: "",
      image: "/programs/digital transformation.jpeg",
      color: "from-[#3791b9] to-[#021982]",
      category: "Technology",
      upcoming: true,
    },
    {
      id: "branding-diploma-upcoming",
      title: "Branding Diploma",
      shortDesc:
        "Master the art of building powerful brands through strategic positioning, storytelling, and visual identity.",
      duration: "",
      level: "",
      image: "/programs/branding .jpg",
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      upcoming: true,
    },
    {
      id: "professional-branding-brand-management",
      title: "Professional Branding & Brand Management",
      shortDesc:
        "Comprehensive foundation in brand management for beginners and aspiring professionals.",
      duration: "",
      level: "",
      image: "/programs/professional branding diploma.jpg",
      color: "from-green-500 to-emerald-500",
      category: "Marketing",
      upcoming: true,
    },
    {
      id: "online-ecommerce-diploma",
      title: "Online eCommerce Diploma",
      shortDesc:
        "Master eCommerce platform design, development, and management in today's digital marketplace.",
      duration: "",
      level: "",
      image: "/programs/online ecommerce .jpeg",
      color: "from-teal-500 to-green-500",
      category: "Digital Business",
      upcoming: true,
    },
    {
      id: "soft-skills-diploma",
      title: "Soft Skills Diploma",
      shortDesc:
        "Essential competencies for personal growth and professional effectiveness in any career.",
      duration: "",
      level: "",
      image: "/programs/soft skills.jpg",
      color: "from-cyan-500 to-blue-500",
      category: "Personal Development",
      upcoming: true,
    },
    {
      id: "advertising-diploma",
      title: "Advertising Diploma",
      shortDesc:
        "Comprehensive understanding of marketing principles with focus on advertising strategies.",
      duration: "",
      level: "",
      image: "/programs/advertisements.jpg",
      color: "from-yellow-500 to-orange-500",
      category: "Marketing",
      upcoming: true,
    },
    {
      id: "sustainable-hospitality-diploma",
      title: "Sustainable Hospitality Diploma",
      shortDesc:
        "Lead sustainable operations and transform hospitality organizations into purpose-driven enterprises.",
      duration: "",
      level: "",
      image: "/programs/sustainablity.jpeg",
      color: "from-green-500 to-lime-500",
      category: "Hospitality",
      upcoming: true,
    },
    {
      id: "kitchen-management",
      title: "Kitchen Management",
      shortDesc: "Master the essentials of kitchen operations and management.",
      duration: "",
      level: "",
      image: "/programs/Kitchen management.jpeg",
      color: "from-yellow-700 to-orange-700",
      category: "Hospitality",
      upcoming: true,
    },
    {
      id: "etiquette-adults",
      title: "Etiquette for Adults",
      shortDesc: "Learn etiquette and social skills for adults.",
      duration: "",
      level: "",
      image: "/programs/Etiquette for adults.jpeg",
      color: "from-gray-400 to-gray-600",
      category: "Personal Development",
      upcoming: true,
    },
    {
      id: "etiquette-children",
      title: "Etiquette for Children",
      shortDesc: "Learn etiquette and social skills for children.",
      duration: "",
      level: "",
      image: "/programs/Etiquette for children .jpeg",
      color: "from-gray-200 to-gray-400",
      category: "Personal Development",
      upcoming: true,
    },
    {
      id: "motivational-skills-upcoming",
      title: "Motivational Skills",
      shortDesc:
        "Develop compelling visions and empower teams to achieve their goals through effective motivational strategies.",
      duration: "",
      level: "",
      image: "/programs/motivational.jpeg",
      color: "from-purple-500 to-indigo-500",
      category: "Leadership",
      upcoming: true,
    },
    // --- Language ---
    {
      id: "ielts",
      title: "IELTS",
      shortDesc: "IELTS preparation course.",
      duration: "",
      level: "",
      image: "/programs/IELTS.jpeg",
      color: "from-[#3791b9] to-[#021982]",
      category: "Language",
      upcoming: true,
    },
    {
      id: "general-english",
      title: "General English",
      shortDesc: "General English language course.",
      duration: "",
      level: "",
      image: "/programs/general english.jpeg",
      color: "from-[#3791b9] to-[#021982]",
      category: "Language",
      upcoming: true,
    },
    {
      id: "german-course",
      title: "German Course",
      shortDesc: "German language course.",
      duration: "",
      level: "",
      image: "/programs/German course.jpeg",
      color: "from-yellow-400 to-yellow-600",
      category: "Language",
      upcoming: false,
    },
    {
      id: "english-course",
      title: "English Course",
      shortDesc: "English language course.",
      duration: "",
      level: "",
      image: "/programs/english course.jpeg",
      color: "from-[#3791b9] to-[#021982]",
      category: "Language",
      upcoming: true,
    },
    // --- Education ---
    {
      id: "kindergarten-teacher-preparation",
      title: "Kindergarten Teacher Preparation",
      shortDesc: "Prepare to become a kindergarten teacher.",
      duration: "",
      level: "",
      image: "/programs/kindergarten teacher preparation .jpeg",
      color: "from-pink-200 to-pink-400",
      category: "Education",
      upcoming: false,
    },

    {
      id: "psychometrics",
      title: "Psychometrics Diploma",
      shortDesc:
        "Qualify to use psychometric tools professionally according to international standards in psychological diagnosis.",
      duration: "4-6 months",
      level: "Intermediate",
      image: "/programs/Psychological measures.jpeg",
      color: "from-[#3791b9] to-[#021982]",
      category: "Special Education",
    },
    {
      id: "behavior-modification",
      title: "Behavior Modification Diploma",
      shortDesc:
        "Learn to analyze human behavior patterns and apply effective behavior modification strategies based on behavioral psychology.",
      duration: "3-5 months",
      level: "All Levels",
      image: "/programs/motivational.jpeg",
      color: "from-green-400 to-teal-500",
      category: "Special Education",
    },
    {
      id: "learning-difficulties",
      title: "Learning Difficulties Diploma",
      shortDesc:
        "Understand, diagnose, and treat learning difficulties in children and adolescents using scientific methods and approved tools.",
      duration: "4-6 months",
      level: "Intermediate",
      image: "/programs/Learning difficulties.jpeg",
      color: "from-orange-400 to-red-500",
      category: "Special Education",
    },
    {
      id: "montessori",
      title: "Montessori Diploma",
      shortDesc:
        "Implement the Montessori methodology in early childhood education following Dr. Maria Montessori's philosophy of child development.",
      duration: "3-6 months",
      level: "All Levels",
      image: "/programs/Montessori.jpeg",
      color: "from-pink-400 to-rose-500",
      category: "Education",
    },
    {
      id: "family-counseling",
      title: "Family Educational Psychological Counseling",
      shortDesc:
        "Gain skills in psychological counseling integrating psychological, educational, and family aspects for comprehensive support.",
      duration: "4-6 months",
      level: "Intermediate",
      image: "/programs/Family educational psychological counseling.jpeg",
      color: "from-purple-400 to-violet-600",
      category: "Special Education",
    },
    {
      id: "occupational-safety",
      title: "Occupational Safety and Crisis Management",
      shortDesc:
        "Learn to apply safety standards in work environments and efficiently handle emergencies to protect lives and property.",
      duration: "3-4 months",
      level: "All Levels",
      image:
        "/programs/Training Program in Occupational Safety and Security and Crisis Management.jpeg",
      color: "from-yellow-500 to-amber-600",
      category: "Special Education",
      upcoming: true,
    },
    // Removed non-upcoming duplicate for Branding Diploma
    {
      id: "business-english",
      title: "Business English Communication",
      shortDesc:
        "Enhance professional communication skills across diverse business contexts with confidence.",
      duration: "4-6 months",
      level: "All Levels",
      image: "/programs/business english.jpg",
      color: "from-[#3791b9] to-[#021982]",
      category: "Communication",
      upcoming: true,
    },
    // Removed non-upcoming duplicate for Professional Branding & Brand Management
    {
      id: "leadership-diploma",
      title: "Leadership Diploma",
      shortDesc:
        "Develop foundational leadership skills to influence others and achieve organizational goals.",
      duration: "6-8 months",
      level: "All Levels",
      image: "/programs/leadership.jpg",
      color: "from-orange-500 to-red-500",
      category: "Leadership",
      upcoming: true,
    },
    // Removed non-upcoming duplicate for Online eCommerce Diploma
    {
      id: "human-resources",
      title: "Human Resources Diploma",
      shortDesc:
        "Comprehensive understanding of HR functions, processes, and emerging workplace technologies.",
      duration: "6-9 months",
      level: "All Levels",
      image: "/programs/HR.jpeg",
      color: "from-indigo-500 to-purple-500",
      category: "Management",
      upcoming: true,
    },
    // Removed non-upcoming duplicate for Soft Skills Diploma
    {
      id: "marketing-diploma",
      title: "Marketing Diploma",
      shortDesc:
        "Transformative learning journey through analysis, strategy, implementation, and evaluation.",
      duration: "8-12 months",
      level: "Intermediate to Advanced",
      image: "/programs/marketing.jpg",
      color: "from-red-500 to-pink-500",
      category: "Marketing",
      upcoming: true,
    },
    // Removed non-upcoming duplicate for Advertising Diploma
    {
      id: "digital-marketing",
      title: "Digital Marketing Diploma",
      shortDesc:
        "Complete digital marketing expertise from SEO to social media strategy and analytics.",
      duration: "6-9 months",
      level: "All Levels",
      image: "/programs/digital marketing.jpg",
      color: "from-violet-500 to-purple-500",
      category: "Digital Marketing",
      upcoming: true,
    },
    {
      id: "food-safety",
      title: "Food Safety & Hygiene Diploma",
      shortDesc:
        "Egypt's first accredited program with dual UK and Finland certification.",
      duration: "3-4 months",
      level: "All Levels",
      image: "/programs/food safety.jpeg",
      color: "from-green-600 to-teal-600",
      category: "Hospitality",
    },

    // Removed non-upcoming duplicate for Sustainable Hospitality Diploma
  ];

  const categories = [
    {
      key: "active",
      labelId: "programs.categories.active",
      fallback: "Active Courses",
    },
    { key: "all", labelId: "programs.categories.all", fallback: "All" },
    {
      key: "language",
      labelId: "programs.categories.language",
      fallback: "Language",
    },
    {
      key: "education",
      labelId: "programs.categories.education",
      fallback: "Education",
    },
    {
      key: "marketing",
      labelId: "programs.categories.marketing",
      fallback: "Marketing",
    },
    {
      key: "leadership",
      labelId: "programs.categories.leadership",
      fallback: "Leadership",
    },
    {
      key: "technology",
      labelId: "programs.categories.technology",
      fallback: "Technology",
    },
    {
      key: "management",
      labelId: "programs.categories.management",
      fallback: "Management",
    },
    {
      key: "digital-marketing",
      labelId: "programs.categories.digitalMarketing",
      fallback: "Digital Marketing",
    },
    {
      key: "communication",
      labelId: "programs.categories.communication",
      fallback: "Communication",
    },
    {
      key: "personal-development",
      labelId: "programs.categories.personalDevelopment",
      fallback: "Personal Development",
    },
    {
      key: "finance",
      labelId: "programs.categories.finance",
      fallback: "Finance",
    },
    {
      key: "digital-business",
      labelId: "programs.categories.digitalBusiness",
      fallback: "Digital Business",
    },
    {
      key: "hospitality",
      labelId: "programs.categories.hospitality",
      fallback: "Hospitality",
    },
    {
      key: "special-education",
      labelId: "programs.categories.specialEducation",
      fallback: "Special Education",
    },
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("active");

  // Remove non-upcoming duplicates for IDs that have an upcoming version
  const uniquePrograms = programs.filter((program, idx, arr) => {
    if (!program.upcoming) {
      // If there is an upcoming version with similar title, skip this one
      return !arr.some((p) => p.title === program.title && p.upcoming);
    }
    return true;
  });

  let filteredPrograms = [];
  if (selectedCategory === "all") {
    filteredPrograms = uniquePrograms.slice();
  } else if (selectedCategory === "active") {
    filteredPrograms = uniquePrograms.filter((program) => !program.upcoming);
  } else {
    const categoryMap: Record<string, string> = {
      marketing: "Marketing",
      leadership: "Leadership",
      technology: "Technology",
      management: "Management",
      "digital-marketing": "Digital Marketing",
      communication: "Communication",
      "personal-development": "Personal Development",
      finance: "Finance",
      "health-safety": "Health & Safety",
      "digital-business": "Digital Business",
      hospitality: "Hospitality",
      "special-education": "Special Education",
      language: "Language",
      education: "Education",
    };
    filteredPrograms = uniquePrograms.filter(
      (program) => program.category === categoryMap[selectedCategory]
    );
  }

  // Always show active (non-upcoming) programs first
  filteredPrograms = filteredPrograms.sort((a, b) => {
    if (a.upcoming === b.upcoming) return 0;
    return a.upcoming ? 1 : -1;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <Message
              id="programs.title"
              fallback="Professional Diploma Courses"
            />
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
                  ? "bg-gradient-to-r from-[#3791b9] to-[#021982] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
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
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 flex flex-col min-h-[500px]"
            >
              <div className="relative h-48 overflow-hidden">
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center`;
                    }}
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${program.color} text-white text-2xl font-bold`}
                  >
                    {program.title[0]}
                  </div>
                )}
                {/* Removed image overlay opacity */}
                {program.upcoming && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-[#3791b9] to-[#021982] text-white text-xs font-bold rounded-full animate-pulse z-10 shadow-lg">
                    Upcoming Soon
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Message
                    id={`programs.${program.id}.title`}
                    fallback={program.title}
                  />
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  <Message
                    id={`programs.${program.id}.desc`}
                    fallback={program.shortDesc}
                  />
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      <Message id="programs.certified" fallback="Certified" />
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  {program.upcoming ? (
                    <button
                      className={
                        "w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3791b9] to-[#021982] text-white py-3 rounded-xl font-medium opacity-60 cursor-not-allowed animate-pulse"
                      }
                      disabled
                    >
                      <span>Upcoming Soon</span>
                    </button>
                  ) : (
                    <Link
                      href={`/courses/${program.id}`}
                      className={
                        "w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3791b9] to-[#021982] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                      }
                    >
                      <span>
                        <Message
                          id="programs.viewDetails"
                          fallback="View Details"
                        />
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#3791b9]/10 to-[#3791b9]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <Message
                id="programs.cta.title"
                fallback="Can't Find the Right Program?"
              />
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              <Message
                id="programs.cta.desc"
                fallback="Our education consultants can help you find the perfect program that matches your needs and interests. We offer a free 10-minute consultation with our expert to guide you towards the best choice."
              />
            </p>
            <button
              onClick={handleConsultation}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#3791b9] to-[#021982] text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>
                <Message
                  id="programs.cta.button"
                  fallback="Get Personal Consultation"
                />
              </span>
              <ArrowRight
                className={`w-5 h-5 ${direction === "rtl" ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
