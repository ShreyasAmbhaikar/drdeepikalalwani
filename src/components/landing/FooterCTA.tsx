import React from "react";
import { RotatingTextPath } from "@/components/ui/RotatingTextPath";

export const FooterCTA = () => {
  return (
    <section className="bg-background pt-[80px] pb-[40px] relative z-10 -mb-[50px]">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="bg-secondary rounded-[32px] p-[50px] md:p-[70px] lg:p-[90px] flex flex-col md:flex-row items-center justify-between gap-[40px] border border-purple-200/70 shadow-lg">
          <div className="max-w-[540px]">
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-primary mb-4 leading-[1.15em]">
              Ready to schedule your visit?
            </h2>
            <p className="text-text text-[15px] md:text-[16px] leading-[1.65em] uppercase font-medium tracking-wide">
              Book an appointment with Dr. Deepika Lalwani for personalized & compassionate women's healthcare in Kalyani Nagar & Wadgaon Sheri.
            </p>
          </div>
          
          <div className="shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <RotatingTextPath 
              text="Dr. Deepika Lalwani • Obstetrician & Gynecologist • Kalyani Nagar • Wadgaon Sheri • " 
              radius={120} 
              fontSize={14}
              letterSpacing="0.09em"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FooterCTA;

