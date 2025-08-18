"use client";

import { Award, Eye, Globe, Target, Users } from "lucide-react";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";

const AboutSection = () => {
  const { direction } = useLanguage();

  const values = [
    {
      icon: Award,
      titleId: "about.values.excellence.title",
      titleFallback: "Academic Excellence",
      descId: "about.values.excellence.desc",
      descFallback:
        "Maintaining the highest educational standards with uncompromising quality",
      color: "from-[#3791b9] to-[#021982]",
    },

    {
      icon: Globe,
      titleId: "about.values.global.title",
      titleFallback: "Global Perspective",
      descId: "about.values.global.desc",
      descFallback:
        "Preparing culturally sophisticated leaders for an interconnected world",
      color: "from-[#3791b9] to-[#021982]",
    },
    {
      icon: Users,
      titleId: "about.values.leadership.title",
      titleFallback: "Leadership Development",
      descId: "about.values.leadership.desc",
      descFallback:
        "Cultivating visionary leaders with transformative influence",
      color: "from-[#021982] to-[#3791b9]",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#3791b9]/10 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#021982]/10 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#3791b9]/20 text-[#021982] rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            <Message id="about.badge" fallback="About Us" />
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${
              direction === "rtl" ? "text-right" : "text-left"
            } sm:text-center`}
          >
            <Message id="about.title" fallback="Building Bright" />
            <span className="block bg-gradient-to-r from-[#3791b9] to-[#021982] bg-clip-text text-transparent">
              <Message id="about.titleHighlight" fallback="Futures Together" />
            </span>
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-4xl mx-auto ${
              direction === "rtl" ? "text-right" : "text-left"
            } sm:text-center`}
          >
            <Message
              id="about.subtitle"
              fallback="At Signature Academy, we cultivate the minds of future leaders through an uncompromising standard of excellence in education. Our prestigious programs blend tradition with innovation, instilling timeless values, refined creativity, and pioneering vision. Guided by world-class educators and enriched by a global perspective."
            />
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-[#021982]/10 to-[#021982]/20 rounded-3xl p-8 border border-[#021982]/30">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#021982] to-[#021982] rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                <Message id="about.vision.title" fallback="Our Vision" />
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <Message
                id="about.vision.text"
                fallback="To stand as the world's foremost institution of elite learning, uniting cultures and ideas while setting new benchmarks in academic prestige. We envision a generation of leaders—cultured, visionary, and principled—who shape the future with innovation, grace, and transformative influence."
              />
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-[#3791b9]/10 to-[#3791b9]/20 rounded-3xl p-8 border border-[#3791b9]/30">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3791b9] to-[#3791b9] rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                <Message id="about.mission.title" fallback="Our Mission" />
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <Message
                id="about.mission.text"
                fallback="To deliver an unparalleled standard of education that inspires intellectual excellence, cultivates refined creativity, and instills a deep sense of integrity and purpose. At Signature Academy, we shape distinguished global citizens equipped with the wisdom, leadership, and cultural sophistication to make a lasting impact on the world."
              />
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 mb-20 border border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              <Message
                id="about.aboutUs.title"
                fallback="About Signature Academy"
              />
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              <Message
                id="about.aboutUs.text"
                fallback="Signature Academy, the training arm of Signature Group, delivers accredited programs aligned with Egypt's Vision 2030 and the Bedaya Presidential Initiative. With expert trainers and internationally certified content, it bridges education and market needs in health, hospitality, and corporate development."
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.titleId}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 border border-gray-100 ${
                  direction === "rtl" ? "text-right" : "text-left"
                }`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#3791b9] transition-colors duration-300">
                  <Message id={value.titleId} fallback={value.titleFallback} />
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  <Message id={value.descId} fallback={value.descFallback} />
                </p>

                {/* Decorative line */}
                <div
                  className={`mt-4 h-1 w-8 bg-gradient-to-r ${
                    value.color
                  } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                    direction === "rtl" ? "ml-auto" : ""
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
