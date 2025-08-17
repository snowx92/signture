"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";

const CTASection = () => {
  const { direction } = useLanguage();

  // WhatsApp consultation function
  const handleWhatsAppConsultation = () => {
    const phoneNumber = "201275444617";
    const message = encodeURIComponent(
      "مرحباً! أريد الحصول على استشارة مجانية لمدة 10 دقائق حول البرامج التعليمية المتاحة في سيجنتشر أكاديمي. Hello! I would like to get a free 10-minute consultation about the educational programs available at Signature Academy."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-lg transform rotate-45 animate-float-slow"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-cyan-300/20 rounded-full animate-float-delay-1"></div>
        <div className="absolute top-40 right-16 w-20 h-20 bg-pink-300/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-8 h-8 bg-yellow-300/20 rounded-lg animate-float-delay-3"></div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/6 opacity-20 animate-float-icons">
          <Star className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="absolute top-1/3 right-1/5 opacity-15 animate-float-icons-delay">
          <Heart className="w-6 h-6 text-pink-300" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-10 animate-float-icons-delay-2">
          <Target className="w-10 h-10 text-cyan-300" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 opacity-20 animate-float-icons-delay-3">
          <Sparkles className="w-7 h-7 text-purple-300" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-medium mb-6 shadow-lg animate-bounce-in">
            <Calendar className="w-5 h-5 mr-2 text-cyan-300" />
            <Message id="cta.badge" fallback="Enrollment Open" />
            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight ${
              direction === "rtl" ? "text-right" : "text-left"
            } sm:text-center`}
          >
            <Message id="cta.title" fallback="Ready to Begin Your Child's" />
            <span className="block mt-2 animate-gradient bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              <Message
                id="cta.titleHighlight"
                fallback="Educational Journey?"
              />
            </span>
          </h2>

          <p
            className={`text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed ${
              direction === "rtl" ? "text-right" : "text-left"
            } sm:text-center`}
          >
            <Message
              id="cta.subtitle"
              fallback="Join our community of families who have chosen excellence in education. Enrollment is now open for the upcoming academic year."
            />
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Learning Images & Features */}
          <div className="space-y-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <Image
                    src="/kids.png"
                    alt="Students learning at Signature Academy"
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Users className="w-6 h-6 mb-1" />
                    <p className="text-sm font-medium">
                      <Message
                        id="cta.interactiveLearning"
                        fallback="Interactive Learning"
                      />
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fade-in-up">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        <Message
                          id="cta.expertGuidance"
                          fallback="Expert Guidance"
                        />
                      </h4>
                      <p className="text-blue-200 text-sm">
                        <Message
                          id="cta.personalizedConsultation"
                          fallback="Personalized consultation"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fade-in-up-delay">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        <Message
                          id="cta.programsCount"
                          fallback="18+ Programs"
                        />
                      </h4>
                      <p className="text-blue-200 text-sm">
                        <Message
                          id="cta.professionalDiplomas"
                          fallback="Professional diplomas"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center border border-white/20">
                    <div className="text-center text-white">
                      <Award className="w-16 h-16 mx-auto mb-4 opacity-60" />
                      <p className="text-lg font-semibold">
                        <Message
                          id="cta.certifiedPrograms"
                          fallback="Certified Programs"
                        />
                      </p>
                      <p className="text-sm text-blue-200">
                        <Message
                          id="cta.industryRecognition"
                          fallback="Industry Recognition"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Features Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <Clock className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">
                  <Message id="cta.freeMinutes" fallback="10 Min Free" />
                </h4>
                <p className="text-blue-200 text-sm">
                  <Message
                    id="cta.quickConsultation"
                    fallback="Quick consultation"
                  />
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <MessageCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">
                  <Message id="cta.whatsapp" fallback="WhatsApp" />
                </h4>
                <p className="text-blue-200 text-sm">
                  <Message
                    id="cta.instantResponse"
                    fallback="Instant response"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form & Info */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <Message
                    id="programs.cta.button"
                    fallback="Get Personal Consultation"
                  />
                </h3>
                <p className="text-blue-200">
                  <Message
                    id="cta.freeExpertGuidance"
                    fallback="Free 10-minute expert guidance"
                  />
                </p>
              </div>

              <button
                onClick={handleWhatsAppConsultation}
                className="w-full group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>
                  <Message
                    id="cta.startWhatsappConsultation"
                    fallback="Start WhatsApp Consultation"
                  />
                </span>
                <ArrowRight
                  className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${
                    direction === "rtl"
                      ? "rotate-180 group-hover:-translate-x-1"
                      : ""
                  }`}
                />
              </button>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-blue-200 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <Message
                      id="cta.noCommitment"
                      fallback="No commitment required"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6 text-center">
                <Message id="cta.contact.title" fallback="Get in Touch" />
              </h4>

              <div className="space-y-4">
                <div
                  className={`flex items-center space-x-4 group hover:bg-white/10 rounded-lg p-3 transition-all duration-300 ${
                    direction === "rtl" ? "space-x-reverse" : ""
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold" dir="ltr">
                      0227757515
                    </p>
                    <p className="text-blue-200 text-sm">
                      <Message
                        id="cta.contact.phone"
                        fallback="Call us anytime"
                      />
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center space-x-4 group hover:bg-white/10 rounded-lg p-3 transition-all duration-300 ${
                    direction === "rtl" ? "space-x-reverse" : ""
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold break-all" dir="ltr">
                      info@signatureacademyedu.com
                    </p>
                    <p className="text-blue-200 text-sm">
                      <Message
                        id="cta.contact.email"
                        fallback="Quick response guaranteed"
                      />
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 group hover:bg-white/10 rounded-lg p-3 transition-all duration-300 ${
                    direction === "rtl" ? "space-x-reverse" : ""
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold leading-relaxed">
                      ٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١ بجوار مسجد ابو
                      بكر الصديق بجوار قسم النزهه
                    </p>
                    <p className="text-blue-200 text-sm">
                      <Message
                        id="cta.contact.address"
                        fallback="Visit our campus"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
              <Message
                id="cta.features.flexible.title"
                fallback="Flexible Start Dates"
              />
            </h4>
            <p className="text-blue-200 leading-relaxed">
              <Message
                id="cta.features.flexible.desc"
                fallback="Multiple enrollment periods throughout the year"
              />
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
              <Message
                id="cta.features.support.title"
                fallback="24/7 Support"
              />
            </h4>
            <p className="text-blue-200 leading-relaxed">
              <Message
                id="cta.features.support.desc"
                fallback="Always here to help with any questions"
              />
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
              <Message
                id="cta.features.easy.title"
                fallback="Easy Application"
              />
            </h4>
            <p className="text-blue-200 leading-relaxed">
              <Message
                id="cta.features.easy.desc"
                fallback="Simple online application process"
              />
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(55deg);
          }
        }

        @keyframes float-icons {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }

        @keyframes bounce-in {
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

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 5s ease-in-out infinite 1s;
        }

        .animate-float-delay-2 {
          animation: float 7s ease-in-out infinite 2s;
        }

        .animate-float-delay-3 {
          animation: float 6s ease-in-out infinite 3s;
        }

        .animate-float-icons {
          animation: float-icons 4s ease-in-out infinite;
        }

        .animate-float-icons-delay {
          animation: float-icons 5s ease-in-out infinite 1s;
        }

        .animate-float-icons-delay-2 {
          animation: float-icons 6s ease-in-out infinite 2s;
        }

        .animate-float-icons-delay-3 {
          animation: float-icons 4.5s ease-in-out infinite 1.5s;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
