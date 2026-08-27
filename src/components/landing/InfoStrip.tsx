import React from "react";
import { siteConfig } from "@/lib/site-config";

export const InfoStrip = () => {
  return (
    <div className="relative -mt-[45px] z-30">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="bg-white rounded-[24px] shadow-[0_15px_45px_rgba(74,29,109,0.08)] border border-purple-100/90 p-[24px] md:p-[28px] lg:p-[32px] grid grid-cols-1 lg:grid-cols-12 gap-[24px] lg:gap-0 items-center">
          
          {/* Block 1: Phone Info (3 columns) */}
          <div className="flex items-center gap-[16px] w-full lg:pr-6 lg:border-r lg:border-purple-100/80 h-full lg:col-span-3">
            <div className="w-[50px] h-[50px] rounded-2xl bg-secondary text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <p className="text-[11.5px] font-bold text-accent uppercase tracking-[0.14em] mb-1 font-onest">
                Book Consultation
              </p>
              <div className="text-[16px] md:text-[17px] font-extrabold text-primary leading-tight font-onest">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-accent transition-colors duration-200">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Block 2: Hours Info (4 columns) */}
          <div className="flex items-center gap-[16px] w-full lg:px-6 lg:border-r lg:border-purple-100/80 h-full lg:col-span-4">
            <div className="w-[50px] h-[50px] rounded-2xl bg-secondary text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11.5px] font-bold text-accent uppercase tracking-[0.14em] mb-1 font-onest">
                Clinic Timings
              </p>
              <div className="text-[12.5px] md:text-[13px] font-bold text-primary leading-snug space-y-1">
                <p className="m-0 font-semibold text-primary">
                  Mon – Sat: 10:00 AM – 1:30 PM &amp; 6:00 PM – 8:30 PM
                </p>
                <p className="m-0 text-accent font-bold text-[11.5px]">
                  Sunday: 10:00 AM – 1:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Block 3: Location Info (5 columns - expanded width for long address) */}
          <div className="flex items-center gap-[16px] w-full lg:pl-7 h-full lg:col-span-5">
            <div className="w-[50px] h-[50px] rounded-2xl bg-secondary text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11.5px] font-bold text-accent uppercase tracking-[0.14em] mb-1 font-onest">
                Clinic Location
              </p>
              <a 
                href={siteConfig.contact.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[12.5px] md:text-[13px] font-medium text-primary hover:text-accent transition-colors duration-200 leading-snug block"
              >
                {siteConfig.contact.addressShort}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default InfoStrip;
