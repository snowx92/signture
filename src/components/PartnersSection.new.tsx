import Image from "next/image";
import Message from "./Message";

// Add Ain Shams logo to public/partners/ainshams.png or use a static import if needed
const partnerLogos = [
  { src: "/partners/ISS_GERMANY_page-0001-removebg-preview.png", alt: "ISS Germany" },
  { src: "/partners/National_Quality_Institute.png", alt: "National Quality Institute" },
  { src: "/partners/EKAASALARAB.png", alt: "EKAASALARAB" },
  { src: "/partners/cinpaa.png", alt: "CINPAA" },
  { src: "/partners/ainshams.png", alt: "Ain Shams University" }, // New logo
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-[#f8fbfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#3791b9]/10 text-[#021982] rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <span className="inline-block mr-2">🤝</span>
            <Message id="partners.badge" fallback="Our Partners" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#021982] mb-6 leading-tight">
            <Message id="partners.title" fallback="Trusted by" />
            <span className="block bg-gradient-to-r from-[#3791b9] to-[#021982] bg-clip-text text-transparent">
              <Message id="partners.titleHighlight" fallback="Global Leaders" />
            </span>
          </h2>
          <p className="text-xl text-[#3791b9] max-w-3xl mx-auto leading-relaxed">
            <Message
              id="partners.subtitle"
              fallback="We collaborate with renowned institutions and organizations worldwide to provide the highest quality education and opportunities for our students."
            />
          </p>
        </div>
        {/* Animated logos row */}
        <div className="relative w-full overflow-x-hidden">
          <div className="flex items-center gap-16 animate-partners-scroll whitespace-nowrap">
            {partnerLogos.concat(partnerLogos).map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={90}
                  className="object-contain drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partners-scroll {
          animation: partners-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
