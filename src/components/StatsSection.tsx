"use client";

import {
  Award,
  BookOpen,
  Globe,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";

const StatsSection = () => {
  const { direction } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      number: 5000,
      suffix: "+",
      titleId: "stats.students.title",
      titleFallback: "Students Enrolled",
      descId: "stats.students.desc",
      descFallback: "Active learners worldwide",
      color: "from-[#3791b9] to-[#3791b9]",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: BookOpen,
      number: 18,
      suffix: "+",
      titleId: "stats.courses.title",
      titleFallback: "Diploma Programs",
      descId: "stats.courses.desc",
      descFallback: "Professional certifications",
      color: "from-[#3791b9] to-[#3791b9]",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Award,
      number: 95,
      suffix: "%",
      titleId: "stats.satisfaction.title",
      titleFallback: "Success Rate",
      descId: "stats.satisfaction.desc",
      descFallback: "Course completion rate",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Globe,
      number: 40,
      suffix: "+",
      titleId: "stats.countries.title",
      titleFallback: "Countries",
      descId: "stats.countries.desc",
      descFallback: "Global reach and impact",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-orange-500/10",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const CounterAnimation = ({
    number,
    suffix,
    isVisible,
  }: {
    number: number;
    suffix: string;
    isVisible: boolean;
  }) => {
    const [count, setCount] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (!isVisible || !isClient) return;

      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, number, isClient]);

    // Use English numerals to prevent hydration mismatch
    const formatNumber = (num: number) => {
      // Convert to string with English numerals only
      return num.toLocaleString("en-US");
    };

    return (
      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {isClient ? formatNumber(count) : formatNumber(number)}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="stats-section"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Background geometric patterns */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-blue-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-blue-200/30 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-50/30 to-blue-100/30 rounded-full blur-3xl transform translate-y-1/2"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 opacity-5">
          <Star
            className="w-8 h-8 text-blue-500 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5">
          <Target
            className="w-6 h-6 text-purple-500 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
        </div>
        <div className="absolute bottom-1/3 left-1/2 opacity-5">
          <Zap
            className="w-7 h-7 text-emerald-500 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          />
        </div>
        <div className="absolute bottom-1/4 right-1/3 opacity-5">
          <TrendingUp
            className="w-8 h-8 text-orange-500 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 text-gray-700 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <TrendingUp className="w-4 h-4 mr-2 text-[#3791b9]" />
            <Message id="stats.badge" fallback="Our Achievement Story" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <Message id="stats.title" fallback="Numbers That Speak" />{" "}
            <span className="bg-gradient-to-r from-[#3791b9] via-[#021982] to-[#3791b9] bg-clip-text text-transparent">
              <Message id="stats.titleHighlight" fallback="Our Success" />
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <Message
              id="stats.subtitle"
              fallback="Transforming careers and empowering professionals worldwide through excellence in education and training."
            />
          </p>
        </div>

        {/* Stats Grid with unique layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.titleId}
                className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-lg border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${stat.bgColor} rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                {/* Icon container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <CounterAnimation
                    number={stat.number}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3791b9] transition-colors duration-300">
                  <Message id={stat.titleId} fallback={stat.titleFallback} />
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  <Message id={stat.descId} fallback={stat.descFallback} />
                </p>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-8 p-6 bg-white/60 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                <Message id="stats.growing" fallback="Continuously Growing" />
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                <Message id="stats.trusted" fallback="Globally Trusted" />
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                {direction === "rtl"
                  ? "معتمد في الصناعة"
                  : "Industry Certified"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
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
      `}</style>
    </section>
  );
};

export default StatsSection;
