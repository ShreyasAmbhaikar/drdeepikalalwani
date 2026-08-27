import React from "react";
import Image from "next/image";
import Link from "next/link";

export const WhyChooseSection = () => {
  return (
    <section className="py-[90px] lg:py-[120px] bg-gradient-to-b from-[#FAF6FD] via-[#F5ECFA] to-[#EFE3F7]">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Top Content: Grid 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-center mb-[50px] lg:mb-[60px]">
          
          {/* Left Side: Image */}
          <div className="animate-fade-in-up">
            <div className="rounded-[24px] lg:rounded-[32px] overflow-hidden relative aspect-[4/3] w-full shadow-lg border-2 border-white">
              <Image 
                src="/images/why-choose-img.webp" 
                alt="Dr. Deepika Lalwani gentle gynecological consultation" 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side: Text & Checklist */}
          <div className="flex flex-col items-start gap-4 lg:pl-[20px] animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
              <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-accent uppercase">
                WHY CHOOSE OUR CLINIC
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-primary leading-[1.2] tracking-tight -mt-1">
              Trusted women's care by Dr. Deepika Lalwani in Kalyani Nagar
            </h2>
            
            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-text leading-[1.7em] mb-2">
              Choosing <strong>Dr. Deepika Lalwani(Nagwani)</strong> means partnering with an empathetic, Mumbai-trained specialist who listens attentively, explains every diagnosis thoroughly, and respects your health choices at every stage.
            </p>

            {/* Checklist items */}
            <div className="flex flex-col gap-3.5 mb-4 w-full">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent shrink-0 mt-0.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-[14px] md:text-[15px] text-text font-medium leading-relaxed">
                  Consultant Obstetrician & Gynecologist (MBBS, DGO Mumbai) with 10+ years of specialized clinical excellence.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent shrink-0 mt-0.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-[14px] md:text-[15px] text-text font-medium leading-relaxed">
                  Centrally located at The Collection by Brahma Corp, New Kalyani Nagar, easily accessible from Wadgaon Sheri, Chandan Nagar & Koregaon Park.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent shrink-0 mt-0.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-[14px] md:text-[15px] text-text font-medium leading-relaxed">
                  Evidence-based approaches for painless normal delivery, PCOS reversal, high-risk pregnancy monitoring, and fertility workups.
                </span>
              </div>
            </div>

            {/* Discover Us Button */}
            <Link 
              href="/about-us" 
              className="hidden lg:inline-flex items-center justify-center gradient-purple-cta text-white hover:opacity-95 transition-all duration-300 font-bold rounded-[12px] text-[15px] py-[14px] px-[28px] gap-2 shadow-md group"
            >
              Learn More About Doctor
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </Link>
          </div>

        </div>

        {/* Bottom stats horizontal bar */}
        <div className="mt-[40px] lg:mt-[50px] bg-secondary rounded-[24px] py-[36px] px-[24px] md:px-[45px] border border-purple-200/60 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            
            {/* Stat 1: Normal Delivery Support */}
            <div className="flex items-start gap-3.5">
              <div className="text-accent shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[16px] md:text-[17px] font-bold text-primary mb-1">
                  Natural Childbirth Focus
                </h4>
                <p className="text-[13px] text-text leading-relaxed">
                  Dedicated prenatal counseling, labor guidance, and safe vaginal delivery facilitation.
                </p>
              </div>
            </div>

            {/* Stat 2: Mumbai Trained Specialist */}
            <div className="flex items-start gap-3.5">
              <div className="text-accent shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[16px] md:text-[17px] font-bold text-primary mb-1">
                  Consultant OBS & Gynae
                </h4>
                <p className="text-[13px] text-text leading-relaxed">
                  MBBS, DGO (Mumbai) with high surgical standards and 10+ years clinical expertise.
                </p>
              </div>
            </div>

            {/* Stat 3: 4.9 Star Google Rating */}
            <div className="flex items-start gap-3.5">
              <div className="text-accent shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[16px] md:text-[17px] font-bold text-primary mb-1">
                  105+ Five-Star Reviews
                </h4>
                <p className="text-[13px] text-text leading-relaxed">
                  Highly rated on Google for patient empathy, transparent advice, and gentle care.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Discover Us Button */}
        <div className="flex justify-center mt-6 lg:hidden animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link 
            href="/about-us" 
            className="inline-flex items-center justify-center gradient-purple-cta text-white font-bold rounded-[12px] text-[15px] py-[14px] px-[28px] gap-2 shadow-md"
          >
            Learn More About Doctor
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </Link>
        </div>

      </div>
    </section>
  );
};
export default WhyChooseSection;
