"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/ui/Counter";

export const HeroSection = () => {
  return (
    <section className="pt-[130px] pb-[75px] lg:pt-[155px] lg:pb-[95px] bg-[#F8F6F1] relative overflow-hidden">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Content (7 columns on desktop - natural gap towards image) */}
          <div className="lg:col-span-7 relative z-10">
            <h1 className="mb-[20px] text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold text-primary leading-[1.14] tracking-tight font-onest">
              Best Gynecologist in Kalyani Nagar &amp; Wadgaon Sheri, Pune
            </h1>
            
            <p className="text-[16px] text-[#4A453E] mb-[30px] max-w-[560px] leading-[1.68em]">
              Consult Senior Obstetrician &amp; Gynecologist <strong>Dr. Deepika Lalwani(Nagwani)</strong> (MBBS, DGO Mumbai with 10+ years experience) at The Collection by Brahma Corp. Specializing in normal delivery, high-risk pregnancy care, PCOD/PCOS treatment, infertility/IUI, and advanced laparoscopic procedures.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#E6E0D5] pt-[24px] mb-[30px] max-w-[480px]">
              <div>
                <h3 className="text-[32px] md:text-[36px] font-extrabold text-primary leading-tight font-onest">
                  <Counter end={10} suffix="+" />
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#6B655C] font-medium mt-1">Years of experience</p>
              </div>
              <div>
                <h3 className="text-[32px] md:text-[38px] font-extrabold text-primary leading-tight font-onest">
                  <Counter end={5} suffix=".0" />
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#6B655C] font-medium mt-1">Google rating</p>
              </div>
              <div>
                <h3 className="text-[32px] md:text-[38px] font-extrabold text-primary leading-tight font-onest">
                  <Counter end={105} suffix="+" />
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#6B655C] font-medium mt-1">Google reviews</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-[18px]">
              <Link 
                href="/contact-us" 
                className="inline-flex items-center gap-2.5 gradient-purple-cta hover:brightness-110 text-white font-bold text-[15px] px-[28px] py-[15px] rounded-[10px] shadow-[0_6px_20px_rgba(124,37,184,0.32)] transition-all duration-300 group"
              >
                <span>Book a Consultation</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Image (5 columns on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Doctor Photo Container */}
              <div className="relative rounded-[28px] overflow-hidden aspect-[1/1.12] w-full shadow-xl bg-[#EBE7DF]">
                <Image 
                  src="/images/dr-deepika-lalwani-portrait.webp" 
                  alt="Dr. Deepika Lalwani(Nagwani) - Best Obstetrician & Gynecologist in Kalyani Nagar & Wadgaon Sheri Pune" 
                  fill 
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>

              {/* Floating Google Review Card with Float Animation */}
              <div className="absolute bottom-[28px] -left-[16px] md:-left-[28px] bg-white rounded-[16px] p-[20px] shadow-[0_12px_32px_rgba(74,29,109,0.12)] border border-gray-100 z-20 max-w-[270px] animate-float">
                {/* 5 Gold Stars */}
                <div className="flex gap-[3px] items-center mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 576 512" 
                      className="w-[14px] h-[14px] fill-[#FFC107]"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  ))}
                </div>
                <h4 className="text-[14px] font-bold text-primary leading-snug font-onest">
                  5-Star Rated Clinic
                </h4>
                <p className="text-[12px] text-[#555] m-0 leading-relaxed mt-1">
                  Compassionate Clinic Care and Advanced Diagnostics for Women
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
