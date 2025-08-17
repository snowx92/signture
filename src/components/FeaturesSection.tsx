"use client";

import {
  Award,
  BookOpen,
  Clock,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";

const FeaturesSection = () => {
  const { direction } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      titleId: "features.expert.title",
      titleFallback: "Expert Instructors",
      descId: "features.expert.desc",
      descFallback: "Learn from qualified educators with years of experience",
      color: "from-[#3791b9] to-[#021982]",
    },
    {
      icon: Users,
      titleId: "features.interactive.title",
      titleFallback: "Interactive Learning",
      descId: "features.interactive.desc",
      descFallback: "Engaging classroom activities and group discussions",
      color: "from-[#021982] to-[#3791b9]",
    },
    {
      icon: Award,
      titleId: "features.certified.title",
      titleFallback: "Certified Programs",
      descId: "features.certified.desc",
      descFallback: "Internationally recognized certificates and credentials",
      color: "from-[#3791b9] to-[#021982]",
    },
    {
      icon: Clock,
      titleId: "features.flexible.title",
      titleFallback: "Flexible Schedule",
      descId: "features.flexible.desc",
      descFallback: "Choose from morning, evening, and weekend classes",
      color: "from-[#021982] to-[#3791b9]",
    },
    {
      icon: Globe,
      titleId: "features.global.title",
      titleFallback: "Global Curriculum",
      descId: "features.global.desc",
      descFallback:
        "World-class education standards and modern teaching methods",
      color: "from-[#3791b9] to-[#021982]",
    },
    {
      icon: Target,
      titleId: "features.personalized.title",
      titleFallback: "Personalized Learning",
      descId: "features.personalized.desc",
      descFallback: "Tailored approach to meet each student's unique needs",
      color: "from-[#021982] to-[#3791b9]",
    },
    {
      icon: Lightbulb,
      titleId: "features.innovative.title",
      titleFallback: "Innovative Methods",
      descId: "features.innovative.desc",
      descFallback: "Latest technology and creative teaching techniques",
      color: "from-[#3791b9] to-[#021982]",
    },
    {
      icon: Heart,
      titleId: "features.supportive.title",
      titleFallback: "Supportive Environment",
      descId: "features.supportive.desc",
      descFallback: "Nurturing atmosphere where every student can thrive",
      color: "from-[#021982] to-[#3791b9]",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3791b9]/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#021982]/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#3791b9]/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#3791b9]/20 text-[#021982] rounded-full text-sm font-medium mb-4 animate-fade-in-up">
            <Award className="w-4 h-4 mr-2" />
            <Message id="features.badge" fallback="Why Choose Us" />
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-200 ${
              direction === "rtl" ? "text-right" : "text-left"
            } sm:text-center`}
          >
            <Message id="features.title" fallback="Excellence in Every" />
            <span className="block bg-gradient-to-r from-[#3791b9] to-[#021982] bg-clip-text text-transparent">
              <Message
                id="features.titleHighlight"
                fallback="Learning Experience"
              />
            </span>
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 ${
              direction === "rtl" ? "text-right" : "text-left"
            } sm:text-center`}
          >
            <Message
              id="features.subtitle"
              fallback="Discover what makes our academy the preferred choice for thousands of students and families worldwide."
            />
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.titleId}
                className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                  direction === "rtl" ? "text-right" : "text-left"
                }`}
                style={{ animationDelay: `${index * 100 + 600}ms` }}
              >
                {/* Icon with gradient background */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#3791b9] transition-colors duration-300">
                  <Message
                    id={feature.titleId}
                    fallback={feature.titleFallback}
                  />
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  <Message
                    id={feature.descId}
                    fallback={feature.descFallback}
                  />
                </p>

                {/* Decorative element */}
                <div
                  className={`mt-6 h-1 w-12 bg-gradient-to-r ${
                    feature.color
                  } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                    direction === "rtl" ? "ml-auto" : ""
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center space-x-2 text-gray-700 font-medium hover:text-[#3791b9] transition-colors duration-300 cursor-pointer group">
            <span>
              <Message
                id="features.learnMore"
                fallback="Learn more about our programs"
              />
            </span>
            <div className="w-6 h-6 rounded-full bg-[#3791b9]/20 flex items-center justify-center group-hover:bg-[#3791b9]/30 transition-colors duration-300">
              <div
                className={`w-2 h-2 bg-[#3791b9] rounded-full transform ${
                  direction === "rtl"
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                } transition-transform duration-300`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
