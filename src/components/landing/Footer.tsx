import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICES_COL_1 = [
  { label: "Normal Delivery", href: "/normal-delivery-in-kalyani-nagar" },
  { label: "Infertility, IUI & IVF", href: "/infertility-iui-ivf-in-kalyani-nagar" },
  { label: "PCOD / PCOS Care", href: "/pcod-pcos-care-in-kalyani-nagar" },
  { label: "Pre Conceptional Counselling", href: "/pre-conceptional-counselling-in-kalyani-nagar" },
  { label: "Tubal Ligation & Reversal", href: "/tubal-ligation-reversal-in-kalyani-nagar" },
  { label: "Hysteroscopy", href: "/hysteroscopy-in-kalyani-nagar" },
  { label: "High Risk Pregnancy Management", href: "/high-risk-pregnancy-management-in-kalyani-nagar" },
  { label: "Menstrual Hygiene", href: "/menstrual-hygiene-in-kalyani-nagar" },
  { label: "Lactational Counselling", href: "/lactational-counselling-in-kalyani-nagar" },
  { label: "Pelvic Infections", href: "/pelvic-infections-treatment-in-kalyani-nagar" },
  { label: "Addressing Menstrual Cycle Problems", href: "/menstrual-cycle-problems-in-kalyani-nagar" },
];

const SERVICES_COL_2 = [
  { label: "LSCS (Caesarean Section)", href: "/lscs-caesarean-section-in-kalyani-nagar" },
  { label: "Scarless Hysterectomy (NDVH)", href: "/scarless-hysterectomy-in-kalyani-nagar" },
  { label: "Cervical Cancer Vaccine", href: "/cervical-cancer-vaccination-screening-in-kalyani-nagar" },
  { label: "MTP, D & E Services", href: "/mtp-d-e-services-in-kalyani-nagar" },
  { label: "Laparoscopic Procedures", href: "/laparoscopic-procedures-in-kalyani-nagar" },
  { label: "Pregnancy Care", href: "/pregnancy-care-in-kalyani-nagar" },
  { label: "Pubertal Counselling", href: "/pubertal-counselling-in-kalyani-nagar" },
  { label: "Contraception Advice", href: "/contraception-advice-in-kalyani-nagar" },
  { label: "Family Planning Center", href: "/family-planning-center-in-kalyani-nagar" },
  { label: "Cancer Screening", href: "/cancer-screening-in-kalyani-nagar" },
];

export const Footer = () => {
  return (
    <footer className="gradient-dark-section pt-[95px] pb-8 text-white relative overflow-hidden z-10">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-[1300px] px-4 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[45px] lg:gap-[40px] mb-[65px]">
          
          {/* Column 1: Brand & Clinic Bio (span 3) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <Link href="/" prefetch={false} className="flex items-center gap-3.5 md:gap-4 shrink-0 group">
              <Image
                src="/images/logo-emblem-light.svg"
                alt="Dr. Deepika Lalwani(Nagwani)"
                width={60}
                height={60}
                className="h-12 md:h-14 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col text-left justify-center select-none gap-1.5 md:gap-2">
                <span className="text-[18px] md:text-[21px] font-[850] text-white tracking-[0.06em] uppercase font-outfit leading-none">
                  Dr. Deepika
                </span>
                <span className="text-[12.5px] md:text-[14px] font-[750] text-[#D8B4FE] tracking-[0.16em] uppercase font-outfit leading-none">
                  Lalwani (Nagwani)
                </span>
              </div>
            </Link>
            <p className="text-white/80 text-[14px] leading-[1.7] mt-2">
              Dr. Deepika Lalwani(Nagwani)&apos;s Clinic is a leading gynecologist clinic in New Kalyani Nagar &amp; Wadgaon Sheri, Pune. Led by Dr. Deepika Lalwani (MBBS, DGO Mumbai), senior obstetrician-gynecologist, offering expert care in normal delivery, pregnancy care, infertility, IUI, PCOD, and women&apos;s health screening.
            </p>
          </div>

          {/* Column 2: Quick Links (span 2) */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:pl-3">
            <h3 className="text-[19px] font-bold text-white tracking-tight mb-1">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    prefetch={false}
                    className="text-white/80 hover:text-purple-200 transition-colors duration-200 text-[14px] block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (span 4) - 2 Subcolumns */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h3 className="text-[19px] font-bold text-white tracking-tight mb-1">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
              {/* Sub-column 1 */}
              <ul className="flex flex-col gap-3">
                {SERVICES_COL_1.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href}
                      prefetch={false}
                      className="text-white/80 hover:text-purple-200 transition-colors duration-200 text-[13px] leading-snug block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Sub-column 2 */}
              <ul className="flex flex-col gap-3">
                {SERVICES_COL_2.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href}
                      prefetch={false}
                      className="text-white/80 hover:text-purple-200 transition-colors duration-200 text-[13px] leading-snug block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Working Hours & NAP (span 3) */}
          <div className="flex flex-col gap-4 lg:col-span-3 lg:pl-3">
            <h3 className="text-[19px] font-bold text-white tracking-tight mb-1">Working Hours</h3>
            
            <div className="flex flex-col gap-2 pb-3.5 border-b border-white/15 text-[13px] text-white/90">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-white">Mon – Sat:</span>
                <div className="flex flex-col items-end text-purple-100 font-medium">
                  <span>10:00 AM – 1:30 PM</span>
                  <span>6:00 PM – 8:30 PM</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-white/10">
                <span className="font-semibold text-white">Sunday:</span>
                <span className="text-purple-100 font-medium">10:00 AM – 1:30 PM</span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 text-[13px] text-white/85 mt-1">
              {/* Call */}
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-purple-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col">
                  <span>Call Clinic: <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-semibold text-white hover:text-purple-200 transition-colors">{siteConfig.contact.phone}</a></span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-purple-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href={siteConfig.contact.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-purple-200 transition-colors text-white/80 leading-relaxed"
                >
                  {siteConfig.contact.address}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="border-t border-white/15 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-white/70">
          <p>© {new Date().getFullYear()} Dr. Deepika Lalwani(Nagwani). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Developed with <span className="text-red-400">❤️</span> by{" "}
            <a 
              href="https://quantumbridgemedia.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-300 font-medium hover:underline hover:text-white transition-colors ml-0.5"
            >
              QuantumReach Media
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
