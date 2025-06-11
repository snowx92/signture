import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import CertificatesSection from '../components/CertificatesSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="programs">
        <ProgramsSection />
      </div>
      <StatsSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <PartnersSection />
      <CertificatesSection />
      <div id="faqs">
        <FAQSection />
      </div>
      <CTASection />
    </div>
  );
}
