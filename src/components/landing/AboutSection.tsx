import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RotatingTextPath } from "@/components/ui/RotatingTextPath";

export const AboutSection = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8] overflow-hidden">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[40px] items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 animate-fade-in-up">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-[13px] font-bold tracking-[0.15em] text-accent uppercase">
                ABOUT DR. DEEPIKA LALWANI
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-primary leading-[1.18] -mt-2">
              Empowering women's health with clinical precision and gentle care
            </h2>

            {/* Paragraph Description */}
            <p className="text-[15px] md:text-[16px] text-text leading-[1.7em] max-w-[620px]">
              At <strong>Dr. Deepika Lalwani(Nagwani)&apos;s Clinic</strong>, we believe every woman deserves personalized, dignified, and scientifically grounded healthcare. Led by <strong>Dr. Deepika Lalwani(Nagwani)</strong>, a dedicated Consultant Obstetrician &amp; Gynecologist holding <strong>MBBS and DGO (Mumbai)</strong> with <strong>10+ years of specialized clinical experience</strong>, our clinic is situated at <strong>The Collection by Brahma Corp, New Kalyani Nagar &amp; Wadgaon Sheri, Pune</strong>. We blend contemporary gynecological diagnostics with heartfelt care to support you through adolescence, maternity, hormonal wellness, and beyond.
            </p>

            {/* List & Trust Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-2">
              {/* Left Sub-column: Features List */}
              <div className="md:col-span-7 flex flex-col gap-4">
                {/* Feature 1 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-purple-100 border border-purple-200/60 flex items-center justify-center text-accent shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="7" cy="7" r="3" />
                      <circle cx="17" cy="7" r="3" />
                      <circle cx="7" cy="17" r="3" />
                      <circle cx="17" cy="17" r="3" />
                    </svg>
                  </div>
                  <span className="font-bold text-primary text-[14px] md:text-[15px]">
                    Compassionate Maternity & Normal Delivery Care
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-purple-100 border border-purple-200/60 flex items-center justify-center text-accent shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1.5" />
                      <path d="M20.2 20.2c2-2 .02-9.1-4.5-13.6s-11.6-6.5-13.6-4.5c-2 2-.02 9.1 4.5 13.6s11.6 6.5 13.6 4.5z" />
                      <path d="M15.7 15.7c4.5-4.5 6.5-11.6 4.5-13.6-2-2-9.1-.02-13.6 4.5s-6.5 11.6-4.5 13.6 9.1.02 13.6-4.5z" />
                    </svg>
                  </div>
                  <span className="font-bold text-primary text-[14px] md:text-[15px]">
                    Consultant OBS & Gynae (MBBS, DGO Mumbai)
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-purple-100 border border-purple-200/60 flex items-center justify-center text-accent shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className="font-bold text-primary text-[14px] md:text-[15px]">
                    Advanced PCOD, Infertility & Laparoscopic Care
                  </span>
                </div>
              </div>

              {/* Right Sub-column: White Trust Card */}
              <div className="md:col-span-5 flex justify-start md:justify-center">
                <div className="bg-white rounded-[24px] p-5 shadow-[0_15px_40px_rgba(45,10,78,0.06)] border border-purple-100 flex flex-col items-center justify-center text-center w-full max-w-[240px]">
                  {/* Overlapping Avatars */}
                  <div className="flex -space-x-3 mb-3">
                    {['review-1-mayuri', 'review-2-shrutika', 'review-6-amani', 'review-5-kartika'].map((avatar, i) => (
                      <div 
                        key={i} 
                        className="w-[38px] h-[38px] rounded-full border-2 border-white relative overflow-hidden shadow-xs shrink-0"
                      >
                        <Image 
                          src={`/images/${avatar}.webp`} 
                          alt={`Verified Patient ${i + 1}`} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Stars Rating */}
                  <div className="flex gap-1 text-[#FFB800] mb-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  {/* Trust Text */}
                  <p className="text-[13px] font-bold text-primary leading-tight">
                    4.9 Google Rating
                  </p>
                  <span className="text-[11px] text-text">105+ Patient Reviews</span>
                </div>
              </div>
            </div>

            {/* Mobile-only Quadrants Grid with central rotating badge */}
            <div className="block lg:hidden my-8 w-full max-w-[480px] mx-auto aspect-square relative">
              <div className="grid grid-cols-2 gap-3 w-full h-full">
                <div className="relative w-full h-full overflow-hidden rounded-tl-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-1.webp" 
                    alt="Gynecology consultation room" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="relative w-full h-full overflow-hidden rounded-tr-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-2.webp" 
                    alt="Doctor with newborn baby" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="relative w-full h-full overflow-hidden rounded-bl-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-3.webp" 
                    alt="Maternity and prenatal care" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="relative w-full h-full overflow-hidden rounded-br-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-4.webp" 
                    alt="Compassionate patient consultation" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <RotatingTextPath 
                  text="Dr. Deepika Lalwani • OBS & Gynae • " 
                  radius={52} 
                  fontSize={13}
                  letterSpacing="0.09em"
                  className="shadow-xl bg-primary text-white" 
                />
              </div>
            </div>

            {/* Button */}
            <div className="mt-3 flex justify-center lg:justify-start">
              <Link 
                href="/about-us" 
                className="inline-flex items-center justify-center gradient-purple-cta hover:opacity-95 text-white font-bold py-3.5 px-[28px] rounded-[12px] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-[15px] shadow-md"
              >
                <span>Read Doctor Profile</span>
                <span className="ml-2.5 bg-white/20 w-[22px] h-[22px] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side: Quadrants Image Grid */}
          <div className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end animate-fade-in-up">
            <div className="relative w-full max-w-[540px] aspect-square">
              {/* Quadrant grid */}
              <div className="grid grid-cols-2 gap-3 w-full h-full">
                {/* Top-Left */}
                <div className="relative w-full h-full overflow-hidden rounded-tl-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-1.webp" 
                    alt="Gynecology consultation room" 
                    fill 
                    className="object-cover" 
                  />
                </div>

                {/* Top-Right */}
                <div className="relative w-full h-full overflow-hidden rounded-tr-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-2.webp" 
                    alt="Doctor with newborn baby" 
                    fill 
                    className="object-cover" 
                  />
                </div>

                {/* Bottom-Left */}
                <div className="relative w-full h-full overflow-hidden rounded-bl-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-3.webp" 
                    alt="Maternity and prenatal care" 
                    fill 
                    className="object-cover" 
                  />
                </div>

                {/* Bottom-Right */}
                <div className="relative w-full h-full overflow-hidden rounded-br-[100%] shadow-sm">
                  <Image 
                    src="/images/about-us-img-4.webp" 
                    alt="Compassionate patient consultation" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>

              {/* Absolute Central Rotating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <RotatingTextPath 
                  text="Dr. Deepika Lalwani • OBS & Gynae • " 
                  radius={52} 
                  fontSize={13}
                  letterSpacing="0.09em"
                  className="shadow-xl bg-primary text-white" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutSection;
