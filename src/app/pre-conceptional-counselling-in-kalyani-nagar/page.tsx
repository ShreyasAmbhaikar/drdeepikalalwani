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
  Shield, 
  HeartPulse, 
  Smile, 
  Sparkles,
  ClipboardList
} from 'lucide-react';

export const metadata = {
  title: "Pre-Conceptional Counselling in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Plan a safe pregnancy with expert Pre-Conceptional Counselling by Dr. Deepika Lalwani (MBBS, DGO Mumbai, 10+ yrs exp) in Kalyani Nagar, Pune. Genetic, hormonal & nutrition screening.",
  alternates: {
    canonical: '/pre-conceptional-counselling-in-kalyani-nagar/',
  }
};

export default function PreConceptionalPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pre-Conceptional Counselling' },
  ];

  const screeningElements = [
    { 
      title: "Pelvic & Ovarian Ultrasound Audit", 
      description: "High-resolution pelvic ultrasound to examine uterine cavity architecture, endometrium thickness, and antral follicle counts to rule out anatomical barriers before conception.", 
      icon: <Stethoscope className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Endocrine & Metabolic Profiling", 
      description: "Evaluating thyroid hormones (TSH, Free T4), fasting blood glucose, HbA1c, and prolactin to ensure optimal metabolic stability prior to fertilization.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Immunity & Viral Antibody Screening", 
      description: "Screening maternal IgG titers for Rubella and Varicella, alongside Hepatitis B and HIV panels, allowing safe catch-up vaccination windows before pregnancy.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Genetic & Hemoglobinopathy Panels", 
      description: "Screening couples for Thalassemia minor and genetic carrier traits to assess transmission risks and guide informed reproductive choices.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepSchedules = [
    { 
      title: "Periconceptional Folic Acid Intake", 
      description: "Initiating 400 to 500 mcg of daily folic acid at least 1 to 3 months prior to conception, reducing fetal neural tube defects (spina bifida) by up to 70%.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Teratogenic Drug Review", 
      description: "Auditing ongoing daily prescriptions (for acne, hypertension, seizures, or migraines) to substitute embryotoxic medications with pregnancy-safe alternatives.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "BMI & Lifestyle Optimization", 
      description: "Creating tailored low-glycemic nutrition plans and stress management strategies to normalize body mass index, supporting spontaneous ovulation.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: Clinical History & Lifestyle Audit',
      description: 'Dr. Deepika Lalwani conducts an in-depth review of menstrual patterns, past medical histories, surgical records, lifestyle factors, and familial genetic conditions.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Targeted Pre-Pregnancy Investigations',
      description: 'Coordinating essential blood tests including Complete Blood Count (CBC), blood typing (Rh factor), thyroid panel, viral markers, and pelvic baseline ultrasound.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Micronutrient & Vaccination Setup',
      description: 'Starting vital pre-conception supplements (folic acid, vitamin D3, active B12) and administering catch-up vaccines (MMR, Tdap) with safe washout timelines.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Ovulation Tracking & Fertile Window Plan',
      description: 'Educating the couple on basal body temperature cues, cervical mucus changes, and ovulation tracking to maximize natural conception success calmly.',
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of pre-conceptional counselling and screening in Pune?",
      answer: "In Pune, a comprehensive couple pre-conceptional counselling session with Dr. Deepika Lalwani is ₹800 to ₹1,200. Essential pre-pregnancy diagnostic investigations—such as complete blood counts, blood grouping, Thalassemia carrier screening, Rubella IgG immunity, thyroid profile, and blood sugar tests—typically cost between ₹2,500 and ₹4,500. A baseline pelvic ultrasound to check uterine cavity and ovarian follicular reserve ranges from ₹1,500 to ₹2,200."
    },
    {
      question: "What is pre-conceptional counselling and why is it essential?",
      answer: "Pre-conceptional counselling is a specialized medical consultation for individuals and couples planning a pregnancy. It assesses underlying medical conditions, lifestyle habits, nutritional deficiencies, and genetic risks before conception, creating optimal biological conditions for a healthy pregnancy and baby."
    },
    {
      question: "When should we schedule a pre-pregnancy consultation with Dr. Deepika Lalwani?",
      answer: "The ideal time is 3 to 6 months before you actively start trying to conceive. This window allows adequate time to correct thyroid or sugar imbalances, initiate folic acid, update vaccinations, and adjust existing medications safely."
    },
    {
      question: "Why is taking Folic Acid before getting pregnant so crucial?",
      answer: "The neural tube (which forms the baby's brain and spinal cord) develops within the first 28 days after conception—often before a pregnancy test shows positive. Starting folic acid 1 to 3 months before pregnancy prevents neural tube defects like spina bifida by up to 70%."
    },
    {
      question: "Can pre-conceptional counselling assist couples with PCOS or irregular cycles?",
      answer: "Yes. Dr. Deepika Lalwani specializes in hormonal optimization for PCOS/PCOD, addressing insulin resistance, regulating cycles through nutritional therapy, and tracking natural follicular maturation to facilitate timely conception."
    },
    {
      question: "How do I book a private pre-conception consultation at the clinic?",
      answer: "Dr. Deepika Lalwani's Clinic operates strictly by prior appointment during morning and evening OPD hours to ensure absolute privacy, zero waiting room crowds, and unhurried clinical counseling. You can reserve your appointment directly via call or WhatsApp."
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
        <PageHeader title="Pre-Conceptional Counselling" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/preconceptional-counselling-indian.webp" 
                  alt="Dr. Deepika Lalwani Providing Personalized Pre-Conceptional Counselling to Indian Couple" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Pre-Conceptional Counselling?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  Planning to bring a new life into the world is an extraordinary milestone, and optimizing your physical health beforehand is the single most impactful step you can take. <strong>Pre-Conceptional Counselling</strong> is a proactive clinical assessment designed to evaluate a couple&apos;s nutritional status, hormonal balance, medical history, and genetic profiles before conception occurs.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we provide a private, empathetic, and comprehensive pre-pregnancy evaluation. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of clinical excellence</strong>, our goal is to identify and resolve subtle obstacles—from thyroid fluctuations and PCOS to vitamin deficiencies—ensuring your pregnancy begins with maximum vitality.
                </p>
                <p>
                  Because we run a focused private clinic rather than a high-volume hospital, your consultation is completely confidential, unhurried, and personalized to your unique medical and family history.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Pre-Pregnancy Consultation Today
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

        {/* === SECTION 2: Unplanned vs Planned Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Unplanned vs. Planned Pregnancy: A Medical Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Preparing your body 3 to 6 months before conception creates the ideal biological environment for fertilization, embryo implantation, and early organ development.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Unplanned Pregnancy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Unplanned Pregnancy</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Reactive Care &bull; Higher Potential Risk</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Neural Tube Risk</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher vulnerability to neural tube birth defects due to late initiation of folic acid.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Chronic Conditions</span>
                      <p className="text-text text-[14px] leading-relaxed">Unmanaged thyroid levels, blood glucose spikes, or hypertension during critical early organogenesis.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Infection Defenses</span>
                      <p className="text-text text-[14px] leading-relaxed">Unchecked immunity to Rubella or Varicella, creating fetal risk if exposed during pregnancy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Medication Safety</span>
                      <p className="text-text text-[14px] leading-relaxed">Unintended exposure to embryotoxic medications before the pregnancy is confirmed.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Planned Pregnancy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Planned Pregnancy</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Proactive Health &bull; Mitigated Risks</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Neural Tube Risk</span>
                      <p className="text-text text-[14px] leading-relaxed">Defects prevented by up to 70% through timely pre-conceptional folic acid saturation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Chronic Conditions</span>
                      <p className="text-text text-[14px] leading-relaxed">Thyroid levels (TSH &lt; 2.5) and HbA1c are medically stabilized before conception attempts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Infection Defenses</span>
                      <p className="text-text text-[14px] leading-relaxed">Immunizations updated beforehand, guaranteeing maternal antibodies protect the fetus.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Medication Safety</span>
                      <p className="text-text text-[14px] leading-relaxed">All ongoing prescriptions switched to pregnancy-compatible drugs well in advance.</p>
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

        {/* === SECTION 3: Key Elements of Pre-Pregnancy Checkups === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Elements of Our Pre-Pregnancy Diagnostic Checkup" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical protocol conducts comprehensive physiological screenings to lay a robust, healthy foundation for pregnancy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {screeningElements.map((element, index) => {
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
                        {element.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {element.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {element.description}
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
              text="Pre-Conceptional Preparation &amp; Supplement Schedules" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Optimizing your micronutrient levels and daily lifestyle sets the stage for a confident, joyful pregnancy.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/preconceptional-prep.webp" 
                alt="Pre-Conceptional Diet and Supplement Schedule Diagram" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prepSchedules.map((card, index) => {
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

        {/* === SECTION 5: Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Pre-Conceptional Counselling Journey Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured 4-step path guiding couples calmly toward healthy conception with clinical accuracy and individualized care.
              </p>
              <VerticalTimeline items={processTimeline} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Pre-Conceptional Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct One-on-One Specialist Guidance</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Deepika Lalwani (MBBS, DGO Mumbai) personally at every visit with complete privacy and empathetic clinical counsel.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Reproductive &amp; Hormonal Expertise</strong>
                      <span className="text-white/80 text-[14px]">Specialized clinical acumen in optimizing thyroid markers, managing PCOS/PCOD, and guiding natural ovulation tracking.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">Quiet, sterilized private clinic environment in New Kalyani Nagar with zero waiting room delays.</span>
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
