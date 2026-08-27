import React from "react";
import Image from "next/image";
import { Counter } from "@/components/ui/Counter";

export const ProcessSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] w-full">
      {/* Left Column: Image Background + Glassmorphic Steps Card */}
      <div className="relative flex items-center justify-center p-6 md:p-12 lg:p-16 min-h-[550px] lg:min-h-auto w-full">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/how-it-work-bg.webp" 
            alt="Dr. Deepika Lalwani Patient Consultation" 
            fill 
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#3C125E]/65"></div>
        </div>
        
        {/* Floating Glassmorphic Card */}
        <div className="relative z-10 w-full max-w-[500px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[28px] p-8 md:p-10 shadow-2xl flex flex-col gap-7 animate-fade-in-up">
          
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[14px] bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shrink-0 font-bold text-lg">
              01
            </div>
            <div>
              <h4 className="text-[17px] md:text-[18px] font-bold text-white mb-1 leading-tight">
                Schedule Your Visit
              </h4>
              <p className="text-[14px] text-white/80 leading-relaxed">
                Connect easily via direct phone call or WhatsApp to confirm your preferred slot at our Kalyani Nagar clinic.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[14px] bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shrink-0 font-bold text-lg">
              02
            </div>
            <div>
              <h4 className="text-[17px] md:text-[18px] font-bold text-white mb-1 leading-tight">
                Thorough Clinical Assessment
              </h4>
              <p className="text-[14px] text-white/80 leading-relaxed">
                Detailed medical history review, physical exam, and ultrasound diagnostics conducted in a relaxed setting.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[14px] bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shrink-0 font-bold text-lg">
              03
            </div>
            <div>
              <h4 className="text-[17px] md:text-[18px] font-bold text-white mb-1 leading-tight">
                Personalized Care & Follow-Up
              </h4>
              <p className="text-[14px] text-white/80 leading-relaxed">
                Transparent treatment plan tailored to your health goals, complete with continuous monitoring and support.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Column: Text & Stats */}
      <div className="bg-secondary/90 flex flex-col justify-center p-8 md:p-12 lg:p-20 xl:p-24 text-primary w-full border-l border-purple-200/50">
        <div className="max-w-[580px] w-full flex flex-col gap-5">
          
          {/* Subtitle */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
            <span className="text-[13px] font-bold tracking-[0.15em] text-accent uppercase">
              PATIENT CARE JOURNEY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] md:text-[42px] font-extrabold text-primary leading-[1.2] tracking-tight -mt-1 animate-fade-in-up">
            Gentle, transparent care from your first consultation
          </h2>

          {/* Bold Intro Paragraph */}
          <p className="text-[15px] md:text-[16px] font-semibold text-primary/90 leading-[1.65em] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Starting your healthcare journey with Dr. Deepika Lalwani(Nagwani) is clear, comfortable, and centered around your individual wellness priorities.
          </p>

          {/* Detailed Paragraph */}
          <p className="text-[14px] md:text-[15px] text-text leading-[1.65em] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Whether you are preparing for motherhood, seeking solutions for PCOS, or managing gynecological health, we ensure every step is explained with empathy and clinical precision.
          </p>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-purple-200/80 pt-[32px] mt-[16px] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            
            {/* Stat 1 */}
            <div className="flex flex-col border-r border-purple-200/80 pr-2">
              <span className="text-[12px] md:text-[13px] text-text/80 font-bold mb-1">
                PATIENTS
              </span>
              <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-primary mb-1 leading-none">
                <Counter end={1000} suffix="+" />
              </h3>
              <p className="text-[12px] md:text-[13px] text-text font-medium leading-tight">
                Treated with Care
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col border-r border-purple-200/80 px-2 md:px-4">
              <span className="text-[12px] md:text-[13px] text-text/80 font-bold mb-1">
                RATING
              </span>
              <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-primary mb-1 leading-none">
                4.9★
              </h3>
              <p className="text-[12px] md:text-[13px] text-text font-medium leading-tight">
                105+ Reviews
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col pl-2 md:pl-4">
              <span className="text-[12px] md:text-[13px] text-text/80 font-bold mb-1">
                EXPERIENCE
              </span>
              <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-primary mb-1 leading-none">
                <Counter end={10} suffix="+" />
              </h3>
              <p className="text-[12px] md:text-[13px] text-text font-medium leading-tight">
                Years of Expertise
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default ProcessSection;
