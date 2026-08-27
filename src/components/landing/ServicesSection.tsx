import React from "react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Normal Delivery Care",
    description: "Compassionate antenatal support, continuous labor guidance, and safe natural childbirth facilitation based on international clinical protocols.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        <path d="M12 5v4"/>
        <path d="M10 7h4"/>
      </svg>
    ),
    href: "/normal-delivery-in-kalyani-nagar",
  },
  {
    title: "PCOD / PCOS Care",
    description: "Holistic, lifestyle-integrated medical care for menstrual irregularities, hormonal acne, insulin resistance, and ovulation restoration.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 3v18"/>
        <path d="M3 12h18"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    href: "/pcod-pcos-care-in-kalyani-nagar",
  },
  {
    title: "LSCS (Caesarean Section)",
    description: "Sterile, precision surgical delivery when medically indicated for high-risk pregnancies or emergency fetal conditions with minimal scarring.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    href: "/lscs-caesarean-section-in-kalyani-nagar",
  },
  {
    title: "Infertility & IUI Care",
    description: "Thorough reproductive evaluation, precise follicular ultrasound monitoring, and evidence-guided Intrauterine Insemination (IUI) support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    href: "/infertility-iui-ivf-in-kalyani-nagar",
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-[90px] lg:py-[120px] bg-secondary/70 relative z-0">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Header (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[60px] items-start mb-[50px]">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-3 animate-fade-in-up">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
              <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-accent uppercase">
                CLINICAL SPECIALTIES
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-[30px] md:text-[44px] font-extrabold text-primary leading-[1.2] tracking-tight -mt-1">
              Advanced Obstetrics &amp; Gynecology Care in Kalyani Nagar &amp; Wadgaon Sheri
            </h2>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pt-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <p className="text-[15px] md:text-[16px] text-text leading-[1.65em] mb-5">
              Senior Consultant <strong>Dr. Deepika Lalwani(Nagwani)</strong> provides personalized, evidence-based treatments across maternity care, normal deliveries, PCOD reversal, infertility evaluation, and minimally invasive gynecological procedures.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gradient-purple-cta text-white hover:opacity-95 transition-all duration-300 font-bold rounded-[12px] text-[15px] py-[13px] px-[26px] gap-2 shadow-md group"
            >
              View All 20+ Treatments
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px]">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[24px] p-[26px] md:p-[30px] border border-purple-100/80 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white relative overflow-hidden z-10 shadow-[0_8px_30px_rgba(45,10,78,0.04)] hover:shadow-[0_15px_40px_rgba(45,10,78,0.15)] flex flex-col justify-between min-h-[300px] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                {/* SVG Icon */}
                <div className="text-accent group-hover:text-purple-300 transition-colors duration-300 mb-[18px] inline-block">
                  {service.icon}
                </div>
                
                {/* Card Title */}
                <h3 className="text-[20px] md:text-[22px] font-bold text-primary mb-[10px] group-hover:text-white transition-colors duration-300 leading-snug">
                  <Link href={service.href} className="before:absolute before:inset-0">
                    {service.title}
                  </Link>
                </h3>
                
                {/* Description */}
                <p className="text-[14px] text-text leading-[1.6em] mb-[18px] group-hover:text-white/85 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              {/* Read More link */}
              <div className="inline-flex items-center gap-[6px] text-[14px] font-bold text-accent group-hover:text-purple-300 transition-colors duration-300 mt-auto">
                Read Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-[50px] text-[15px] text-primary animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <span className="gradient-purple-cta text-white py-1 px-3.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
            Consultation
          </span>
          <p className="font-medium text-center sm:text-left text-primary">
            Have questions about maternity or gynecological health?{" "}
            <Link href="/contact-us" className="font-bold underline hover:text-accent transition-colors duration-300">
              Schedule an Appointment with Dr. Deepika Lalwani
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
export default ServicesSection;
