'use client';

import React from "react";
import Accordion from "@/components/ui/Accordion";
import { siteConfig } from "@/lib/site-config";

export const FaqMapSection = () => {
  const faqItems = [
    {
      question: "How do I book a consultation or appointment with Dr. Deepika Lalwani?",
      answer: "You can easily schedule your consultation by calling our clinic directly at +91 9359264895 or by sending us a message on WhatsApp. We offer flexible appointment slots and also accommodate walk-in consultations during morning (10:00 AM – 1:30 PM) and evening (6:00 PM – 8:30 PM) OPD hours."
    },
    {
      question: "Which areas and localities in Pune are near the clinic?",
      answer: "Our clinic is situated at Tower, 2nd Floor, Lalwani's Clinic The collection by Brahma Corp, W10, Shop no. 219, New Kalyani Nagar, Wadgaon Sheri, Pune 411014. We conveniently serve patients across Kalyani Nagar, Wadgaon Sheri, Chandan Nagar, Viman Nagar, Koregaon Park, Kharadi, Sainath Nagar, Anand Park, and Digambar Nagar."
    },
    {
      question: "What pregnancy and maternity care services are provided at the clinic?",
      answer: "Dr. Deepika Lalwani provides complete pregnancy care from pre-conception planning and antenatal trimester checkups to natural normal delivery support, high-risk pregnancy management (gestational diabetes, hypertension, twin pregnancies), painless labor guidance, and postnatal recovery care."
    },
    {
      question: "Do you offer diagnosis and treatment for PCOD/PCOS and irregular periods?",
      answer: "Yes, we provide personalized, evidence-based management for PCOD/PCOS, heavy menstrual bleeding, painful cramps (dysmenorrhea), and hormonal imbalances. Treatment includes root-cause evaluation, customized lifestyle and dietary guidance, cycle regulation, and ovulation support."
    },
    {
      question: "What is the consultation fee and cost structure at Dr. Deepika Lalwani's Clinic?",
      answer: "We maintain transparent and fair pricing. A standard consultation with Dr. Deepika Lalwani is ₹600. In-clinic diagnostic procedures like ultrasound scans, Pap smears, and IUD insertions range between ₹1,200 and ₹4,500. Major surgical and delivery procedures are conducted at accredited partner hospitals in Pune with full support for cashless health insurance and corporate claims."
    },
    {
      question: "What fertility evaluation and IUI treatments are available?",
      answer: "We offer comprehensive fertility assessments for couples, including follicular tracking, hormonal profiling, tubal patency evaluation, semen analysis guidance, and Intrauterine Insemination (IUI) procedures in a supportive, confidential environment."
    }
  ];

  return (
    <section className="py-[80px] lg:py-[120px] bg-gradient-to-b from-[#FAF7FD] via-[#F5ECFA] to-[#EFE4F8]">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-center animate-fade-in-up">
            {/* Subtitle */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
              <span className="text-[13px] font-bold tracking-[0.15em] text-accent uppercase">
                COMMON PATIENT QUESTIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-primary leading-[1.2] mb-6">
              Frequently asked questions about our clinic
            </h2>

            {/* Accordion */}
            <Accordion items={faqItems} />
          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div 
              className="w-full h-[400px] lg:h-full rounded-[28px] overflow-hidden border border-purple-200/60 shadow-xl relative min-h-[420px] lg:min-h-[500px] animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <iframe 
                src="https://maps.google.com/maps?q=Dr%20Deepika%20Lalwani(Nagwani)%20Brahma%20Corp%20Wadgaon%20Sheri%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                title="Dr. Deepika Lalwani(Nagwani) Clinic Location, New Kalyani Nagar, Pune" 
                aria-label="Dr. Deepika Lalwani(Nagwani) Clinic Location, New Kalyani Nagar, Pune"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default FaqMapSection;
