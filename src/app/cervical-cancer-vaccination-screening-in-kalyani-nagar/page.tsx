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
  title: "Cervical Cancer Screening & HPV Vaccine in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Cervical cancer prevention with Pap Smears, HPV DNA co-testing, and HPV vaccines (Gardasil 9 & Cervavac) by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/cervical-cancer-vaccination-screening-in-kalyani-nagar/",
  }
};

export default function CervicalCancerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cervical Screening & HPV Vaccine' },
  ];

  const screeningPrograms = [
    { 
      title: "Liquid-Based Cytology (LBC)", 
      description: "High-precision automated cytology screening capturing a thin layer of cervical cells to detect pre-cancerous dysplasia years before tumor progression.", 
      icon: <Stethoscope className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "High-Risk HPV DNA PCR Testing", 
      description: "Molecular PCR assays identifying high-risk oncogenic HPV viral genotypes (16, 18, 31, 33, 45, 52, 58) directly responsible for cervical lesions.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Diagnostic Colposcopy Exam", 
      description: "High-magnification optical inspection of the transformation zone with acetic acid staining for patients with abnormal or ASC-US screening reports.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Annual Preventive Gynae Audit", 
      description: "Comprehensive pelvic wellness checks evaluating external vulvar health, vaginal microbiome balance, and cervical epithelial integrity.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const vaccineSchedules = [
    { 
      title: "Adolescent Schedule (Ages 9 to 14)", 
      description: "Requires a 2-dose regimen (0 and 6 months). Administering the vaccine at this age generates the strongest, lifelong neutralizing antibody titers.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Catch-up Adult Schedule (Ages 15 to 45)", 
      description: "Requires a 3-dose regimen (0, 2, and 6 months). Highly recommended for active adult women to protect against unexposed oncogenic HPV strains.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Lifelong Co-Testing Protocol", 
      description: "For women aged 30+, combining Pap smear cytology with HPV DNA molecular testing every 5 years guarantees complete preventive safety.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const vaccinationTimeline = [
    {
      title: 'Step 1: Clinical Assessment & Vaccine Selection',
      description: 'Reviewing age, previous sexual activity, and screening history to recommend either Gardasil 9 or Cervavac according to national guidelines.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Pap or HPV Swab Collection',
      description: 'If due for periodic screening, a quick and painless cervical swab is taken using specialized soft cytobrushes to ensure maximum comfort.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Sterile Intramuscular Vaccine Administration',
      description: 'Administering the approved HPV vaccine as a gentle, sterile deltoid intramuscular injection with minimal post-injection tenderness.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Digital Dose Reminders & Follow-Up',
      description: 'Logging the immunization schedule in our clinic system and dispatching automated reminders for subsequent catch-up doses.',
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of HPV vaccines (Gardasil 9 & Cervavac) and Pap tests in Pune?",
      answer: "In Pune, Cervavac (Serum Institute of India's quadrivalent HPV vaccine) typically costs approximately ₹2,200 to ₹2,500 per dose. Gardasil 9 (MSD's imported nonavalent HPV vaccine covering 9 oncogenic strains) costs approximately ₹10,500 to ₹11,500 per dose. Liquid-Based Cytology (Pap Smear) ranges from ₹1,500 to ₹2,200, while combined Pap + HPV DNA molecular co-testing ranges from ₹3,200 to ₹4,800."
    },
    {
      question: "Why should women get the HPV vaccine and who is eligible?",
      answer: "The HPV vaccine protects against oncogenic Human Papillomavirus strains that cause over 90% of cervical cancers, vulvar cancers, and genital warts. It is recommended for girls and boys starting from age 9 up to adult women aged 45."
    },
    {
      question: "What is the difference between Cervavac and Gardasil 9?",
      answer: "Gardasil 9 (MSD) is an imported nonavalent vaccine protecting against 9 HPV strains (6, 11, 16, 18, 31, 33, 45, 52, 58). Cervavac (Serum Institute of India) is an indigenous quadrivalent vaccine covering the 4 primary strains (6, 11, 16, 18) responsible for the majority of Indian cervical cancer cases, offering an affordable alternative."
    },
    {
      question: "Do married or sexually active women still benefit from the HPV vaccine?",
      answer: "Yes, absolutely. Even if a woman has been exposed to one strain of HPV, the vaccine still provides powerful immunity against the remaining high-risk oncogenic strains included in the formulation."
    },
    {
      question: "Do I still need routine Pap smears after completing the full HPV vaccine course?",
      answer: "Yes. While the vaccine covers the most dangerous cancer-causing strains, it does not protect against 100% of all rare HPV genotypes. Continuing routine Pap smears or HPV DNA tests every 3 to 5 years ensures comprehensive protection."
    },
    {
      question: "How do I schedule an HPV vaccination or cervical screening visit?",
      answer: "Visits are scheduled strictly by prior appointment in our New Kalyani Nagar clinic during dedicated morning and evening hours, ensuring cold-chain vaccine integrity, zero waiting room crowds, and dedicated clinical time with Dr. Deepika Lalwani."
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
        <PageHeader title="Cervical Screening &amp; HPV Vaccine" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-purple-100/60 group">
                <Image 
                  src="/images/cervical-overview.webp" 
                  alt="Cervical Screening and HPV Vaccine Vial representation for Cervical Cancer Prevention" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Cervical Screening &amp; HPV Vaccination?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  Cervical cancer is almost entirely preventable through proactive vaccination and periodic clinical screening. Over 99% of cervical malignancies originate from chronic, high-risk <strong>Human Papillomavirus (HPV)</strong> infections. By combining periodic Pap smear cytology with molecular HPV DNA co-testing and HPV immunization, women can lower their lifetime risk of cervical cancer by over 90%.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we provide a comfortable, supportive environment for cervical cancer prevention. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, our practice offers DCGI-approved HPV vaccines (Gardasil 9 and Cervavac) alongside gentle cytology swabs.
                </p>
                <p>
                  All vaccinations and Pap smears are personally conducted by Dr. Deepika Lalwani strictly by prior appointment, ensuring complete privacy, pristine sterilization, and compassionate preventive care.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Cervical Screening &amp; Vaccine Today
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

        {/* === SECTION 2: Gardasil 9 vs Cervavac Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Gardasil 9 vs. Cervavac: HPV Vaccine Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We offer both globally established vaccines and India&apos;s indigenous cervical cancer vaccine to provide flexible, evidence-based preventive protection.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Gardasil 9 */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Gardasil 9 (Nonavalent)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Broadest Global Coverage &bull; 9 Strains</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Viral Strains Covered</span>
                      <p className="text-text text-[14px] leading-relaxed">Protects against 9 strains (HPV 6, 11, 16, 18, 31, 33, 45, 52, 58).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Evidence</span>
                      <p className="text-text text-[14px] leading-relaxed">Extensive global clinical track record across 100+ countries over a decade.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Eligible Demographics</span>
                      <p className="text-text text-[14px] leading-relaxed">Approved for females and males aged 9 to 45 years against cancer and warts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Manufacturer Origin</span>
                      <p className="text-text text-[14px] leading-relaxed">Manufactured by MSD (Merck &amp; Co., USA), WHO pre-qualified worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Cervavac */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Cervavac (Quadrivalent)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Indigenous Innovation &bull; High Efficacy</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Viral Strains Covered</span>
                      <p className="text-text text-[14px] leading-relaxed">Protects against 4 primary high-risk strains (HPV 6, 11, 16, 18).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Evidence</span>
                      <p className="text-text text-[14px] leading-relaxed">Robust antibody response demonstrated specifically in Indian clinical trials.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Eligible Demographics</span>
                      <p className="text-text text-[14px] leading-relaxed">Approved for girls and young women aged 9 to 26 years across India.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Manufacturer Origin</span>
                      <p className="text-text text-[14px] leading-relaxed">Developed by Serum Institute of India (Pune), offering affordable protection.</p>
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

        {/* === SECTION 3: Screening Programs === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Comprehensive Cervical Screening Programs" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Early detection is the most powerful defense against cervical cellular changes, identifying risks years before tumors form.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {screeningPrograms.map((program, index) => {
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
                        {program.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {program.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {program.description}
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

        {/* === SECTION 4: Vaccination Schedules === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Recommended HPV Vaccination &amp; Screening Schedules" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Adhering to age-specific vaccination and co-testing intervals delivers maximum lifetime preventive protection.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[16/9] w-full max-h-[420px] group">
              <Image 
                src="/images/cervical-vaccine-screening-indian.webp" 
                alt="Dr. Deepika Lalwani Guiding Indian Patient on HPV Vaccination & Cervical Cancer Screening Schedules" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vaccineSchedules.map((card, index) => {
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

        {/* === SECTION 5: Clinical Screening & Vaccination Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Clinical Screening &amp; Vaccination Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Structured clinical protocols with rigorous cold-chain storage to guarantee comfort, safety, and vaccine potency.
              </p>
              <VerticalTimeline items={vaccinationTimeline} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for HPV Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Gynecologist Specimen Collection</strong>
                      <span className="text-white/80 text-[14px]">Cytological swabs are taken directly by Dr. Deepika Lalwani (MBBS, DGO Mumbai), avoiding sample inadequacy and errors.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Guaranteed Cold-Chain Vaccine Potency</strong>
                      <span className="text-white/80 text-[14px]">Direct access to authentic DCGI-approved Cervavac and Gardasil 9 maintained under continuous temperature monitoring.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">All appointments are scheduled privately in New Kalyani Nagar with zero waiting queues and complete medical confidentiality.</span>
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
