
"use client";
import { Award, Mail, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Message from "../../components/Message";
import { useLanguage } from "../../components/ClientIntlProvider";

export default function BoardPage() {
  const { direction } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#3791b9]/10 text-[#021982] rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            <Message id="about.board.title" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#3791b9] to-[#021982] bg-clip-text text-transparent">
              <Message id="about.board.title" />
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <Message id="about.board.content1" />
          </p>
        </div>

        {/* Dr. Tarek Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className={`lg:flex ${direction === "rtl" ? "lg:flex-row-reverse" : ""}`}>
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/tarek.jpg"
                  alt="Dr. Tarek Issa - Chairman of the Board"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    <Message id="about.board.tarek.title" />
                  </h2>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#3791b9] to-[#021982] text-white rounded-full text-sm font-semibold">
                    <Message id="about.board.tarek.role" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <Message id="about.board.tarek.bio" />
                </p>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[#3791b9]" />
                    <Message id="about.board.tarek.credentials" />
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><span className="text-gray-700 font-semibold"><Message id="about.board.tarek.cred1" /></span></li>
                    <li className="ml-6 text-gray-700"><Message id="about.board.tarek.cred2" /></li>
                    <li className="ml-6 text-gray-700"><Message id="about.board.tarek.cred3" /></li>
                    <li className="text-gray-700"><Message id="about.board.tarek.cred4" /></li>
                    <li className="text-gray-700"><Message id="about.board.tarek.cred5" /></li>
                    <li className="text-gray-700"><Message id="about.board.tarek.cred6" /></li>
                    <li className="text-gray-700"><Message id="about.board.tarek.cred7" /></li>
                    <li className="text-gray-700"><Message id="about.board.tarek.cred8" /></li>
                    <li className="text-gray-700"><Message id="about.board.tarek.cred9" /></li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <Message id="about.board.tarek.vision" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Amal Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className={`lg:flex ${direction === "rtl" ? "lg:flex-row-reverse" : ""}`}>
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/amal.jpg"
                  alt="Dr. Amal Talaat"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    <Message id="about.board.amal.title" />
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <Message id="about.board.amal.bio" />
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <Message id="about.board.amal.impact" />
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <Message id="about.board.amal.portfolio" />
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <Message id="about.board.amal.vision" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-gradient-to-r from-[#3791b9] to-[#021982] rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            <Message id="cta.contact.title" />
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            <Message id="cta.contact.email" />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+201275444617"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              +20227757515
            </a>
            <a
              href="mailto:info@signatureacademyedu.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@signatureacademyedu.com
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#3791b9] text-white rounded-full font-semibold hover:bg-[#021982] transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
