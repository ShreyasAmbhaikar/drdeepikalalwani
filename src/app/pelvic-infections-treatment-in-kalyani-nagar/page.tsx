import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import { Button } from '@/components/ui/Button';
import { 
  ShieldCheck, 
  CheckCircle, 
  Activity, 
  Heart, 
  Stethoscope, 
  Calendar, 
  Clock, 
  ClipboardList, 
  Shield, 
  Sparkles,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Pelvic Infection & PID Treatment in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Accurate clinical diagnosis and targeted treatment for Pelvic Inflammatory Disease (PID), chronic vaginal infections, and pelvic pain by Dr. Deepika Lalwani in Pune.",
  alternates: {
    canonical: '/pelvic-infections-treatment-in-kalyani-nagar/',
  }
};

export default function PelvicInfectionsTreatmentPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pelvic Infections Treatment' },
  ];

  const subServices = [
    { 
      title: "Vaginal Discharge & Vaginitis Care", 
      description: "Diagnostic evaluation and targeted eradication of Candida yeast infections, Bacterial Vaginosis (BV), and Trichomoniasis to restore natural vaginal flora.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pelvic Inflammatory Disease (PID) Care", 
      description: "Targeted, evidence-based antimicrobial regimens halting upper genital tract inflammation, shielding fallopian tubes and endometrium from chronic scarring.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pathogen-Specific Culture Diagnostics", 
      description: "High vaginal and endocervical swab cultures isolating the exact microbial pathogen instead of relying on empiric over-the-counter guesswork.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Post-Infection Tubal Fertility Shield", 
      description: "Ultrasound and clinical monitoring after infection clearance to ensure fallopian patency and prevent tubal factor subfertility.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const safetyGuidelines = [
    { 
      title: "Detailed Symptom Reporting", 
      description: "Share all symptoms including deep lower abdominal aching, pain during intercourse, foul-smelling discharge, or mid-cycle spotting during consultation.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Full Antibiotic Compliance", 
      description: "Always complete the full prescribed course of antibiotics or antifungals, even if symptoms subside within 48 hours, to prevent chronic recurrence.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Concurrent Partner Treatment", 
      description: "If a sexually transmitted pathogen is diagnosed, simultaneous partner treatment is mandatory to break the cycle of continuous reinfection.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const careProtocol = [
    {
      title: 'Step 1: Clinical Evaluation & Bimanual Exam',
      description: 'A gentle pelvic bimanual examination by Dr. Deepika Lalwani checking for cervical motion tenderness, uterine tenderness, or adnexal swelling.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: High Vaginal Swab & Microscopy',
      description: 'Collecting endocervical and vaginal swab specimens for wet-mount microscopy and laboratory culture sensitivity testing.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Transvaginal Pelvic Ultrasound Scan',
      description: 'Sonography inspecting the uterus, ovaries, and fallopian tubes to rule out fluid accumulation (hydrosalpinx) or tubo-ovarian abscesses.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Targeted Antimicrobial Therapy & Follow-Up',
      description: 'Prescribing DCGI-approved dual-action oral or injectable antibiotics, paired with a mandatory 14-day clearance check to confirm complete healing.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of pelvic infection diagnosis and treatment in Pune?",
      answer: "In Pune, a specialized pelvic infection consultation with Dr. Deepika Lalwani is ₹600 to ₹800. Diagnostic testing—including high vaginal swab microscopy and bacterial/fungal culture sensitivity—typically ranges from ₹1,200 to ₹2,500. If a pelvic ultrasound is required to rule out upper tract complications (such as hydrosalpinx or tubo-ovarian abscess), it ranges from ₹1,500 to ₹2,500."
    },
    {
      question: "What are the classic warning symptoms of Pelvic Inflammatory Disease (PID)?",
      answer: "PID symptoms include persistent, dull aching in the lower abdomen, abnormal yellow/greenish vaginal discharge with a foul odor, deep pain during sexual intercourse (dyspareunia), burning during urination, irregular spotting between periods, and fever or chills in acute cases."
    },
    {
      question: "Can an untreated pelvic infection cause infertility or ectopic pregnancy?",
      answer: "Yes, untreated PID is a leading cause of preventable tubal infertility and ectopic pregnancy. Ascending bacteria create permanent scar tissue (adhesions) inside the delicate fallopian tubes, blocking egg transport and creating life-threatening ectopic risks."
    },
    {
      question: "What is the clinical difference between a yeast infection and bacterial PID?",
      answer: "A yeast infection (Candidiasis) is a superficial fungal overgrowth inside the vagina causing itching and thick white discharge without pelvic pain. Bacterial PID is a serious upper tract infection reaching the uterus and fallopian tubes, causing deep lower abdominal pain, painful intercourse, and fever."
    },
    {
      question: "Why is self-treating vaginal discharge with over-the-counter washes dangerous?",
      answer: "Over-the-counter intimate washes disrupt the natural acidic vaginal pH (3.8–4.5) and strip protective Lactobacillus bacteria. This worsens bacterial vaginosis and allows harmful pathogens to ascend past the cervix into the pelvic cavity."
    },
    {
      question: "How do I book a confidential pelvic infection consultation at the clinic?",
      answer: "Consultations are scheduled strictly by prior appointment during dedicated morning and evening hours in our New Kalyani Nagar clinic, guaranteeing absolute privacy, zero lobby crowds, and compassionate care with Dr. Deepika Lalwani."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <PageHeader title="Pelvic Infections Treatment" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/pelvic-infections-indian.webp" 
                  alt="Dr. Deepika Lalwani Reviewing Pelvic Ultrasound Scans and Providing Targeted PID Treatment" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Pelvic Infection &amp; PID Treatment?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Pelvic Infections</strong> and <strong>Pelvic Inflammatory Disease (PID)</strong> are serious bacterial infections affecting a woman&apos;s reproductive organs. When lower genital tract infections (like bacterial vaginosis or cervicitis) are left untreated or self-medicated with generic OTC washes, pathogens migrate upward into the uterus, fallopian tubes, and ovaries.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we emphasize accurate, culture-based diagnostics to prevent chronic complications like tubal scarring, ectopic pregnancy, and long-term pelvic pain. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, we provide compassionate, targeted medical care.
                </p>
                <p>
                  Every consultation, pelvic exam, and follow-up is conducted strictly by prior appointment in our tranquil clinic, ensuring absolute privacy, complete confidentiality, and pristine sterilization.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Confidential Consultation Today
              </Button>
            </div>
          </div>
        </section>

        {/* === Wave Divider 1 === */}
        <div className="bg-gradient-to-b from-[#EFE4F8] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 2: Yeast Infection vs Bacterial PID Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Yeast Infection vs. Bacterial PID: Key Differences" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Many women mistake early upper tract pelvic infections for a simple yeast infection. Recognizing the difference is crucial to preventing tubal damage.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Yeast Infection */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Yeast Infection (Candidiasis)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Superficial Vaginal &bull; Non-Scarring</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Primary Causative Agent</span>
                      <p className="text-text text-[14px] leading-relaxed">Fungal overgrowth (Candida albicans) inside the lower vaginal canal.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Discharge Characteristics</span>
                      <p className="text-text text-[14px] leading-relaxed">Thick, white, curd-like (cottage cheese) texture, completely odorless.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Pelvic Pain Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">External itching and burning; no deep lower abdominal aching or fever.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Superficial mucosal condition; causes zero fallopian or uterine tissue scarring.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Bacterial PID */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Bacterial PID (Pelvic Infection)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Upper Tract Infection &bull; Scarring Risk</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Primary Causative Agent</span>
                      <p className="text-text text-[14px] leading-relaxed">Pathogenic bacteria ascending into uterus, fallopian tubes, and ovaries.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Discharge Characteristics</span>
                      <p className="text-text text-[14px] leading-relaxed">Heavy, yellowish or greenish discharge, frequently accompanied by a foul odor.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Pelvic Pain Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Deep lower abdominal cramps, painful intercourse (dyspareunia), and fever.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Can cause permanent tubal blockage, ectopic pregnancy risks, or subfertility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FAF6FD" />
          </svg>
        </div>

        {/* === SECTION 3: Services Grid === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Pelvic Infection Services We Provide" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical practice provides advanced diagnostic swabs and targeted antimicrobial therapies to resolve infections permanently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {subServices.map((service, index) => {
                const pastels = [
                  { cardBg: 'bg-[#F2FBF5]', blob1: 'bg-[#B8E6C4]', blob2: 'bg-[#D1F2D9]', iconBg: 'bg-[#D1F2D9]', text: 'text-[#15332B]', descText: 'text-[#2D5545]' },
                  { cardBg: 'bg-[#EEF4FF]', blob1: 'bg-[#B3D1FF]', blob2: 'bg-[#C4DEFF]', iconBg: 'bg-[#C4DEFF]', text: 'text-[#142952]', descText: 'text-[#2B4A7A]' },
                  { cardBg: 'bg-[#F6F1FF]', blob1: 'bg-[#D4BFFF]', blob2: 'bg-[#E2D4FF]', iconBg: 'bg-[#E2D4FF]', text: 'text-[#2A1650]', descText: 'text-[#4A3270]' },
                  { cardBg: 'bg-[#FFF6EE]', blob1: 'bg-[#FFD4A8]', blob2: 'bg-[#FFE2C2]', iconBg: 'bg-[#FFE2C2]', text: 'text-[#4A2E0F]', descText: 'text-[#6B4A25]' },
                ];
                const style = pastels[index % pastels.length];
                
                return (
                  <div key={index} className={`${style.cardBg} p-7 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-1 border border-black/[0.04]`}>
                    <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob1} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                    <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob2} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                    
                    <div className="relative z-10">
                      <div className={`mb-5 ${style.iconBg} w-14 h-14 rounded-[16px] flex items-center justify-center ${style.text} group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {service.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-gradient-to-b from-[#F5ECFA] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Preparation Guidelines === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Procedure Preparation &amp; Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Adhering to proper clinical guidelines is vital to eradicate pathogens completely and prevent recurrent infections.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pelvic-infections-prep.webp" 
                alt="Post-treatment hygiene guides, safety checklists, and vaginal health diagnostics charts" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyGuidelines.map((card, index) => {
                const prepColors = [
                  { bg: 'bg-[#FDE8EC]', num: 'text-[#E8475F]', iconBg: 'bg-[#F9CDD5]' },
                  { bg: 'bg-[#FFF3E0]', num: 'text-[#F5A623]', iconBg: 'bg-[#FFE0B2]' },
                  { bg: 'bg-[#E8F5E9]', num: 'text-[#4CAF50]', iconBg: 'bg-[#C8E6C9]' },
                ];
                const c = prepColors[index % prepColors.length];
                return (
                  <div key={index} className={`${c.bg} p-7 rounded-[24px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border border-black/[0.03]`}>
                    <div className={`absolute -top-2 -right-1 text-[80px] font-black leading-none opacity-[0.06] ${c.num} pointer-events-none select-none`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className={`${c.iconBg} w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug font-onest">{card.title}</h3>
                    <p className="text-text text-[14px] leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FAF6FD" />
          </svg>
        </div>

        {/* === SECTION 5: Treatment Protocol Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="Our Diagnostic &amp; Treatment Care Protocol" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured, evidence-based clinical pathway to isolate pathogens and restore comfort without guesswork.
              </p>
              <VerticalTimeline items={careProtocol} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-gradient-to-b from-[#F5ECFA] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Doctor Credentials & FAQs === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">
            
            {/* Why Choose Doctor Card */}
            <div className="gradient-dark-section text-white rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[24px] md:text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Pelvic Infection Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Targeted, Culture-Driven Antimicrobial Plans</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) isolates specific bacterial or fungal strains via culture, avoiding empiric medication failures.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Gynecological Acumen</strong>
                      <span className="text-white/80 text-[14px]">Extensive clinical expertise in shielding fallopian tubes, preventing ectopic risks, and preserving natural fertility in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Confidentiality</strong>
                      <span className="text-white/80 text-[14px]">Sensitive gynecological concerns and exams are managed in a quiet, sterilized clinic with zero waiting room exposure.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[35%] lg:w-[30%] flex justify-center md:justify-end shrink-0 relative z-10">
                <div className="bg-white/10 border border-white/15 p-8 rounded-[24px] text-center w-full max-w-[280px] backdrop-blur-sm shadow-inner">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="text-[52px] font-bold text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] leading-none">4.9</div>
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wider text-white/90 mb-1 font-onest">Google Rating</p>
                  <p className="text-[14px] text-white/80">Based on 105+ Reviews</p>
                </div>
              </div>
            </div>

            {/* Exactly 6 FAQs */}
            <div>
              <AnimatedHeading 
                text="Frequently Asked Questions" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight text-center" 
              />
              <Accordion items={faqs} />
              
              <div className="mt-[50px] text-center">
                <Button href="/contact-us" variant="primary" icon size="lg">
                  Have More Questions? Schedule a Visit Today
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
