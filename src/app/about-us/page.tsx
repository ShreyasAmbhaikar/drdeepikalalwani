import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/landing/PageHeader";
import { CheckCircle, Award, Heart, ShieldCheck, Sparkles, Stethoscope, Baby, Activity, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "About Dr. Deepika Lalwani | Senior Gynecologist & Obstetrician in Kalyani Nagar Pune",
  description: "Learn about Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai, 10+ yrs exp), leading female Obstetrician & Gynecologist in Kalyani Nagar & Wadgaon Sheri, Pune. Dedicated to compassionate maternity, normal delivery, PCOS reversal & fertility care.",
  keywords: [
    "Dr Deepika Lalwani",
    "About Dr Deepika Lalwani Gynecologist",
    "Best Gynecologist in Kalyani Nagar Pune",
    "Lady Gynecologist in Wadgaon Sheri",
    "Obstetrician near New Kalyani Nagar",
    "MBBS DGO Mumbai Gynecologist Pune",
    "Normal Delivery Doctor Pune",
    "PCOD PCOS Specialist Kalyani Nagar",
    "Infertility and IUI Specialist Pune",
    "The Collection by Brahma Corp Clinic"
  ],
  alternates: {
    canonical: "/about-us/",
  },
  openGraph: {
    title: "About Dr. Deepika Lalwani | Senior Gynecologist & Obstetrician in Kalyani Nagar Pune",
    description: "Senior Consultant Obstetrician & Gynecologist with 10+ years experience in New Kalyani Nagar, Pune. Expert in normal delivery, high-risk pregnancy, PCOS, and fertility care.",
    url: `${siteConfig.url}/about-us/`,
    siteName: "Dr. Deepika Lalwani's Clinic",
    images: [
      {
        url: "/images/dr-deepika-lalwani-portrait.webp",
        width: 800,
        height: 600,
        alt: "Dr. Deepika Lalwani(Nagwani) - Obstetrician & Gynecologist in Pune",
      }
    ],
    locale: "en_IN",
    type: "profile",
  },
};

export default function AboutUsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ];

  const clinicalPillars = [
    {
      icon: <Baby className="w-8 h-8 text-accent" />,
      title: "Maternity & Normal Delivery",
      desc: "Dedicated prenatal coaching, continuous labor monitoring, and evidence-based birth protocols supporting natural vaginal delivery and safe postpartum recovery."
    },
    {
      icon: <Activity className="w-8 h-8 text-accent" />,
      title: "PCOD & Hormonal Health",
      desc: "Comprehensive diagnostic evaluations, cycle regulation, personalized metabolic lifestyle strategies, and sustainable management of PCOS and ovulatory issues."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Fertility & Pre-Conception",
      desc: "Couples fertility workups, high-precision follicular tracking, pre-pregnancy counseling, and Intrauterine Insemination (IUI) support in a comforting setting."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-accent" />,
      title: "Minimally Invasive Care",
      desc: "Modern gynecological interventions including diagnostic hysteroscopy, scarless vaginal surgeries, Pap smears, and preventive cancer screenings."
    }
  ];

  const coreValues = [
    {
      number: "01",
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Unhurried, Empathetic Listening",
      desc: "We dedicate ample time to every consultation, ensuring your symptoms, lifestyle, and emotional comfort are thoroughly understood without judgment."
    },
    {
      number: "02",
      icon: <Award className="w-10 h-10 text-accent" />,
      title: "Rigorous Mumbai Clinical Standards",
      desc: "Trained at premier medical centers in Mumbai (MBBS, DGO), Dr. Deepika adheres strictly to contemporary, evidence-based international clinical guidelines."
    },
    {
      number: "03",
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: "Ethical & Transparent Guidance",
      desc: "Clear, transparent communication on all diagnoses, tests, and options, avoiding unnecessary medical or surgical procedures wherever conservative care suffices."
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": ["AboutPage", "ProfilePage"],
    "mainEntity": {
      "@type": "Physician",
      "name": "Dr. Deepika Lalwani(Nagwani)",
      "jobTitle": "Consultant Obstetrician & Gynecologist",
      "medicalSpecialty": ["Obstetrics", "Gynecology", "ReproductiveHealth"],
      "alumniOf": "Mumbai University Medical College",
      "description": "Senior Consultant Obstetrician & Gynecologist (MBBS, DGO Mumbai) with 10+ years of clinical excellence in New Kalyani Nagar and Wadgaon Sheri, Pune.",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "Dr. Deepika Lalwani's Clinic",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tower, 2nd Floor, Lalwani's Clinic The collection by Brahma Corp, W10, Shop no. 219, New Kalyani Nagar, Wadgaon Sheri",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main>
        <PageHeader title="About Dr. Deepika Lalwani" breadcrumbs={breadcrumbs} />

        {/* Section 1: Doctor Introduction & Practice Story */}
        <section className="py-[75px] lg:py-[105px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[36px] lg:gap-[60px] items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                  <span className="text-[12.5px] md:text-[13.5px] font-bold tracking-[0.15em] text-accent uppercase">
                    CONSULTANT OBSTETRICIAN &amp; GYNECOLOGIST
                  </span>
                </div>

                <h1 className="text-[30px] md:text-[42px] font-extrabold text-primary mb-5 leading-[1.2]">
                  Devoted to Elevating Women&apos;s Health Across Every Stage of Life
                </h1>

                <div className="text-text space-y-4 mb-7 text-[15px] md:text-[16px] leading-[1.7em]">
                  <p>
                    <strong>Dr. Deepika Lalwani(Nagwani)</strong> is a distinguished Consultant Obstetrician and Gynecologist holding <strong>MBBS and DGO (Mumbai)</strong> with <strong>over 10 years of specialized clinical experience</strong>. Practicing from her state-of-the-art clinic at <strong>The Collection by Brahma Corp, New Kalyani Nagar</strong>, Dr. Deepika is widely recognized for combining clinical excellence with deeply compassionate, patient-centered care.
                  </p>
                  <p>
                    Her practice serves as a trusted healthcare home for women and families across <strong>Kalyani Nagar, Wadgaon Sheri, Chandan Nagar, Viman Nagar, Kharadi, and Koregaon Park</strong>. From guiding first-time expectant mothers through safe normal deliveries to helping women manage complex hormonal conditions like PCOS and fertility challenges, she provides thoughtful, science-backed solutions tailored to each patient.
                  </p>
                </div>

                {/* Checklist Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-[14px] border border-purple-100/80 shadow-xs">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-[14px] text-primary">10+ Years Specialized Experience</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-[14px] border border-purple-100/80 shadow-xs">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-[14px] text-primary">Mumbai-Trained Clinical Standards</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-[14px] border border-purple-100/80 shadow-xs">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-[14px] text-primary">Normal Vaginal Delivery Advocate</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-[14px] border border-purple-100/80 shadow-xs">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-[14px] text-primary">Comprehensive PCOS &amp; Fertility Care</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2.5 gradient-purple-cta text-white font-bold text-[14.5px] px-[24px] py-[12px] rounded-[11px] shadow-[0_4px_15px_rgba(124,37,184,0.3)] hover:brightness-110 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Consultation</span>
                  </Link>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-primary font-bold text-[14.5px] px-[20px] py-[11px] rounded-[11px] border border-purple-200 hover:bg-purple-50 transition-colors duration-200"
                  >
                    Call: {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/4.8] rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-purple-50">
                  <Image
                    src="/images/dr-deepika-lalwani-portrait.webp"
                    alt="Dr. Deepika Lalwani(Nagwani) - Best Gynecologist in Kalyani Nagar & Wadgaon Sheri Pune"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-[18px] p-3.5 border border-purple-100 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[13.5px] font-bold text-primary mb-0.5">Dr. Deepika Lalwani(Nagwani)</p>
                        <p className="text-[11.5px] text-accent font-semibold">MBBS, DGO (Mumbai)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[13.5px] font-bold text-[#FF9E00]">★ 4.9 Rating</p>
                        <p className="text-[11px] text-[#777]">105+ Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Four Core Clinical Pillars */}
        <section className="py-[75px] lg:py-[105px] bg-secondary/70">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="text-center max-w-[680px] mx-auto mb-[45px]">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                <span className="text-accent text-[13px] font-bold tracking-wider uppercase">Areas of Specialized Focus</span>
              </div>
              <h2 className="text-[28px] md:text-[40px] font-extrabold text-primary leading-tight">
                Comprehensive, evidence-based care tailored for women
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clinicalPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-[22px] border border-purple-100/80 shadow-[0_6px_24px_rgba(45,10,78,0.04)] hover:shadow-[0_12px_32px_rgba(45,10,78,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-purple-50 flex items-center justify-center mb-4 text-accent">
                      {pillar.icon}
                    </div>
                    <h3 className="text-[17.5px] font-bold text-primary mb-2.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-text text-[13.5px] md:text-[14px] leading-[1.65em]">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Academic Credentials & Hospital Affiliations */}
        <section className="py-[75px] lg:py-[105px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                  <span className="text-accent text-[13px] font-bold tracking-wider uppercase">Medical Qualifications</span>
                </div>
                <h2 className="text-[28px] md:text-[38px] font-extrabold text-primary mb-4 leading-tight">
                  Solid academic foundation &amp; extensive clinical background
                </h2>
                <p className="text-text text-[15px] leading-relaxed mb-6">
                  Dr. Deepika Lalwani completed rigorous medical graduation and post-graduate obstetrics &amp; gynecology training in Mumbai. She continuously integrates the latest advances in reproductive medicine, fetal health surveillance, and minimally invasive techniques into everyday clinical consultations.
                </p>
                <div className="bg-white rounded-[20px] p-6 border border-purple-100/90 shadow-sm space-y-3.5">
                  <div className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                    <div>
                      <h4 className="text-[15px] font-bold text-primary">MBBS (Bachelor of Medicine &amp; Bachelor of Surgery)</h4>
                      <p className="text-[13px] text-text">Comprehensive foundation across medical sciences, pathology, and general surgical care.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                    <div>
                      <h4 className="text-[15px] font-bold text-primary">DGO Mumbai (Diploma in Gynaecology and Obstetrics)</h4>
                      <p className="text-[13px] text-text">Specialized post-graduate training in advanced maternal-fetal medicine, labor management, and operative gynecology.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                    <div>
                      <h4 className="text-[15px] font-bold text-primary">Hospital Network &amp; Cashless Claims</h4>
                      <p className="text-[13px] text-text">Affiliated with premier tertiary care hospitals across Pune for cashless deliveries and major laparoscopic surgeries.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-gradient-to-br from-[#3D145A] to-[#2D0E44] rounded-[28px] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#FFB800]"></span>
                      <span className="text-[12px] font-bold tracking-[0.14em] text-purple-200 uppercase">
                        PATIENT TRUST &amp; EXCELLENCE
                      </span>
                    </div>
                    <h3 className="text-[24px] md:text-[28px] font-extrabold !text-white mb-4 leading-snug drop-shadow-sm">
                      Recognized as a leading female gynecologist in Pune
                    </h3>
                    <p className="!text-white/90 text-[14.5px] leading-relaxed mb-6 font-normal">
                      With over 105+ verified 5-star Google reviews (4.9 Rating), patients consistently praise Dr. Deepika Lalwani for her calm disposition, detailed diagnostic explanations, and supportive care during stressful medical moments.
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                      <div>
                        <p className="text-[32px] font-extrabold text-[#FFD700] leading-none mb-1">10+</p>
                        <p className="text-[12.5px] text-white/80">Years Clinical Practice</p>
                      </div>
                      <div>
                        <p className="text-[32px] font-extrabold text-[#FFD700] leading-none mb-1">4.9 ★</p>
                        <p className="text-[12.5px] text-white/80">Google Rating (105+ Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Core Values */}
        <section className="py-[75px] lg:py-[105px] bg-secondary/70">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="text-center max-w-[620px] mx-auto mb-[45px]">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                <span className="text-accent text-[13px] font-bold tracking-wider uppercase">Our Core Philosophy</span>
              </div>
              <h2 className="text-[28px] md:text-[40px] font-extrabold text-primary leading-tight">
                Guiding principles behind every patient interaction
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-7 md:p-8 rounded-[24px] border border-purple-100/80 shadow-[0_6px_24px_rgba(45,10,78,0.03)] hover:shadow-[0_14px_36px_rgba(45,10,78,0.08)] hover:-translate-y-1 transition-all duration-300 relative"
                >
                  <div className="text-[54px] font-black text-purple-900/5 absolute right-4 top-2 select-none pointer-events-none">
                    {val.number}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4 inline-block">{val.icon}</div>
                    <h3 className="text-[18px] font-bold text-primary mb-2">{val.title}</h3>
                    <p className="text-text leading-[1.65] text-[13.5px] md:text-[14px]">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
