"use client";

import Image from "next/image";
import { useLanguage } from "./ClientIntlProvider";
import Message from "./Message";

const HeroSection = () => {
  const { direction } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Signature Academy Hero"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 flex items-center min-h-screen ${
          direction === "rtl" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`max-w-2xl ${
              direction === "rtl" ? "text-right" : "text-left"
            }`}
          >
            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white opacity-90">
                <Message id="hero.welcome" fallback="Welcome to" />{" "}
                <span className="bg-gradient-to-r from-[#3791b9] to-[#021982] bg-clip-text text-transparent">
                  <Message id="hero.brandName" fallback="Signature Academy" />
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 leading-relaxed">
                <Message
                  id="hero.subtitle"
                  fallback="Shaping the Visionaries of Tomorrow, Today"
                />
              </h2>

              <p className="text-lg sm:text-xl font-medium text-[#3791b9] italic">
                <Message
                  id="hero.slogan"
                  fallback="Train today, Lead tomorrow"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
