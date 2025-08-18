"use client";


import Message from "./Message";
import Image from "next/image";


const CertificatesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#021982] mb-8">
          <Message id="certificates.educationHeadline" fallback="Internationally Certified for Educational Excellence" />
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <Image
              src="/cert/iso21001.png"
              alt="ISO 21001:2018"
              width={120}
              height={120}
              className="mb-2"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/cert/iso_9001.png"
              alt="ISO 9001:2015"
              width={120}
              height={120}
              className="mb-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
