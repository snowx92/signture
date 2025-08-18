"use client";



import { Phone, Mail, MapPin, Clock, Users } from "lucide-react";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";



const CTASection = () => {
  useLanguage();
  return (
  <section id="cta" className="py-20 px-4 sm:px-8 lg:px-16 bg-[#3791b9]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
              <Message id="cta.contact.title" fallback="Get in Touch" />
            </h2>
            <div className="space-y-8">
              {/* Phone Card */}
              <div className="group relative rounded-3xl border border-[#021982]/20 bg-white/90 p-7 shadow-lg flex items-center gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#3791b9] group-hover:bg-[#021982] transition-colors duration-200 shadow-lg ring-4 ring-[#021982]/10">
                  <Phone className="w-8 h-8 text-white" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#021982] text-lg mb-1 tracking-tight">
                    <Message id="cta.contact.phoneTitle" fallback="Call Us Anytime" />
                  </h3>
                  <button
                    onClick={() => window.open(`tel:${process.env.NEXT_PUBLIC_PHONE || '0227757515'}`, '_self')}
                    className="text-[#021982] text-xl font-mono underline underline-offset-4 hover:text-[#3791b9] transition-colors focus:outline-none"
                  >
                    <Message id="header.phone" fallback="0227757515" />
                  </button>
                  <p className="text-xs text-[#3791b9] mt-1">
                    <Message id="cta.contact.phone" fallback="Quick response guaranteed" />
                  </p>
                </div>
              </div>
              {/* Email Card */}
              <div className="group relative rounded-3xl border border-[#021982]/20 bg-white/90 p-7 shadow-lg flex items-center gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#3791b9] group-hover:bg-[#021982] transition-colors duration-200 shadow-lg ring-4 ring-[#021982]/10">
                  <Mail className="w-8 h-8 text-white" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#021982] text-lg mb-1 tracking-tight">
                    <Message id="cta.contact.emailTitle" fallback="Email Us" />
                  </h3>
                  <button
                    onClick={() => window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'info@signatureacademyedu.com'}`, '_blank')}
                    className="text-[#021982] text-xl font-mono underline underline-offset-4 hover:text-[#3791b9] transition-colors focus:outline-none"
                  >
                    <Message id="header.email" fallback="info@signatureacademyedu.com" />
                  </button>
                  <p className="text-xs text-[#3791b9] mt-1">
                    <Message id="cta.contact.email" fallback="Quick response guaranteed" />
                  </p>
                </div>
              </div>
              {/* Address Card */}
              <div className="group relative rounded-3xl border border-[#021982]/20 bg-white/90 p-7 shadow-lg flex items-start gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <a
                  href="https://maps.app.goo.gl/yakChTkmLTRv8ZKv6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#3791b9] group-hover:bg-[#021982] transition-colors duration-200 shadow-lg ring-4 ring-[#021982]/10 mt-1"
                  aria-label="Open in Google Maps"
                >
                  <MapPin className="w-8 h-8 text-white" />
                </a>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#021982] text-lg mb-1 tracking-tight">
                    <Message id="cta.contact.addressTitle" fallback="Visit Our Campus" />
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/yakChTkmLTRv8ZKv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#021982] text-base underline underline-offset-4 hover:text-[#3791b9] transition-colors block mb-2 font-mono"
                  >
                    <Message id="header.address" fallback={"أ. عبدالرحمن رشدي الدور الارضي مكتب ١\nبجوار مسجد ابو بكر الصديق\nبجوار قسم النزهه"} />
                  </a>
                  <div className="rounded-xl overflow-hidden border border-[#021982]/10 mt-2">
                    <iframe
                      src="https://maps.google.com/maps?q=30.120857,31.367857&z=17&output=embed"
                      width="100%"
                      height="120"
                      className="w-full min-h-[120px]"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={
                        // Use translated title for iframe
                        // Fallback to Arabic if available, else English
                        // This is not visible but helps with accessibility
                        // You may want to add a new translation key for this if needed
                        'Signature Academy Location'
                      }
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
              <Message id="cta.why.title" fallback="Why Choose Us" />
            </h2>
            <div className="space-y-8">
              {/* Flexible Start Dates */}
              <div className="group relative rounded-3xl border border-[#021982]/20 bg-white/90 p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-4 mb-2">
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#3791b9] group-hover:bg-[#021982] transition-colors duration-200 shadow-lg ring-4 ring-[#021982]/10">
                    <Clock className="w-7 h-7 text-white" />
                  </span>
                  <span className="text-xl text-[#021982] font-bold">
                    <Message id="cta.features.flexible.title" fallback="Flexible Start Dates" />
                  </span>
                </div>
                <p className="text-[#021982] text-base">
                  <Message id="cta.features.flexible.desc" fallback="Multiple enrollment periods throughout the year to accommodate your schedule and learning goals." />
                </p>
              </div>
              {/* 24/7 Support */}
              <div className="group relative rounded-3xl border border-[#021982]/20 bg-white/90 p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-4 mb-2">
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#3791b9] group-hover:bg-[#021982] transition-colors duration-200 shadow-lg ring-4 ring-[#021982]/10">
                    <Users className="w-7 h-7 text-white" />
                  </span>
                  <span className="text-xl text-[#021982] font-bold">
                    <Message id="cta.features.support.title" fallback="24/7 Support" />
                  </span>
                </div>
                <p className="text-[#021982] text-base">
                  <Message id="cta.features.support.desc" fallback="Always here to help with any questions or concerns. Our dedicated support team is available around the clock." />
                </p>
              </div>
              {/* Join Our Team */}
              <div className="group relative rounded-3xl border border-[#021982]/20 bg-white/90 p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="mb-2 flex items-center gap-4">
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#021982] group-hover:bg-[#3791b9] transition-colors duration-200 shadow-lg ring-4 ring-[#3791b9]/10">
                    <Users className="w-7 h-7 text-white" />
                  </span>
                  <span className="text-xl font-bold text-[#3791b9]">
                    <Message id="cta.joinTeam.title" fallback="Join Our Team" />
                  </span>
                </div>
                <p className="text-[#021982] mb-4 text-base">
                  <Message id="cta.joinTeam.desc" fallback="Are you passionate about education? We're always looking for talented educators to join our growing team." />
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe9cJ6ErzcA_oM8nEar37KFuM0szKohXvMdf_QAE-IfSfCnUg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#021982] hover:bg-[#3791b9] text-white font-bold py-3 rounded-xl transition-colors duration-200 shadow-md"
                >
                  <Message id="cta.joinTeam.button" fallback="Explore Career Opportunities" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
