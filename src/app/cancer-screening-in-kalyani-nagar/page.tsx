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
  title: "Gynaecological & Breast Cancer Screening in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Painless Pap smears, HPV DNA co-testing, clinical breast exams, and pelvic ultrasound screenings by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/cancer-screening-in-kalyani-nagar/",
  }
};

export default function CancerScreeningPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cancer Screening' },
  ];

  const subServices = [
    { 
      title: "Liquid-Based Cytology (Pap Smear)", 
      description: "A gentle, painless cervical swab collecting epithelial cells to detect early pre-cancerous cellular dysplasia years before malignancy develops.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "High-Risk HPV DNA Co-Testing", 
      description: "Highly sensitive molecular testing identifying oncogenic HPV strains (16, 18, 31, 45) that trigger over 90% of cervical malignancies.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Clinical Breast Examination (CBE)", 
      description: "Comprehensive physical palpation of breast and axillary lymph nodes to identify discrete lumps, fibroadenomas, and skin changes early.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pelvic & Endometrial Ultrasound", 
      description: "High-resolution transvaginal sonography measuring endometrial stripe thickness and evaluating ovarian morphology for cystic or solid masses.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const safetyGuidelines = [
    { 
      title: "Optimal Cycle Window", 
      description: "Schedule your screening appointment 10 to 14 days after the first day of your period for the clearest cytological cell visualization.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Avoid Intimate Products", 
      description: "Refrain from using vaginal washes, douches, contraceptive spermicides, or vaginal pessaries for 48 hours prior to your Pap swab.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pelvic Rest Pre-Test", 
      description: "Avoid sexual intercourse for 24 to 48 hours before testing to prevent cellular distortion or obscuring mucus on the cytology slide.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const careProtocol = [
    {
      title: 'Step 1: Confidential Risk & Family History Audit',
      description: 'A private discussion with Dr. Deepika Lalwani reviewing family cancer history, lifestyle factors, and prior screening intervals.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Specimen Swab & Clinical Exam',
      description: 'Using a soft cytobrush and lubricated speculum, Dr. Deepika Lalwani collects cervical cells in a quick, comfortable step lasting under 60 seconds.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: High-Precision NABL Lab Processing',
      description: 'Specimens are processed via liquid-based cytology and PCR molecular DNA profiling at accredited diagnostic pathology partner centers.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Report Explanation & HPV Vaccine Guidance',
      description: 'Dr. Deepika Lalwani explains your results in detail and maps personalized follow-up intervals along with HPV vaccine advice.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of gynaecological cancer screening tests in Pune?",
      answer: "In Pune, a preventive gynaecological screening consultation with Dr. Deepika Lalwani is ₹600 to ₹800. Liquid-Based Cytology (LBC Pap smear) costs between ₹1,200 and ₹1,800. High-Risk HPV DNA molecular PCR testing ranges from ₹2,200 to ₹3,500, while a combined Co-Testing package (Pap Smear + HPV DNA) typically costs ₹3,200 to ₹4,800. A pelvic and endometrial screening ultrasound ranges from ₹1,500 to ₹2,500."
    },
    {
      question: "Why is regular gynaecological cancer screening critical for every woman?",
      answer: "Most gynaecological malignancies—particularly cervical and early-stage ovarian or endometrial cancers—develop silently without noticeable pain or bleeding. Routine screenings like Pap smears and HPV DNA testing detect pre-cancerous lesions 5 to 10 years before they become invasive, making prevention nearly 100% achievable."
    },
    {
      question: "What is the primary difference between a Pap smear and an HPV DNA test?",
      answer: "A Pap smear evaluates the physical shape and structure of cervical cells under a microscope to detect active dysplasia (cell damage). An HPV DNA test is a molecular PCR test checking for the presence of high-risk viral strains that cause cell damage. Combining both ('co-testing') provides the gold standard in diagnostic accuracy."
    },
    {
      question: "At what age should women begin cervical and breast cancer screenings?",
      answer: "Cervical Pap smear screening should start at age 21, repeated every 3 years. From age 30 onwards, co-testing with an HPV DNA test every 5 years is recommended until age 65. Clinical breast exams should begin in your 20s, with screening mammograms starting around age 40 (or earlier if you have a family history)."
    },
    {
      question: "Does an abnormal Pap smear result mean I have cancer?",
      answer: "No, absolutely not. An abnormal Pap smear simply indicates atypical cells or mild inflammatory changes (such as ASC-US or LSIL), often caused by a temporary infection. Dr. Deepika Lalwani will guide you on whether a repeat test, HPV check, or a simple magnifying examination (colposcopy) is warranted."
    },
    {
      question: "How do I schedule a cancer screening appointment at the clinic?",
      answer: "Screenings are scheduled strictly by prior appointment during dedicated morning and evening shifts in our New Kalyani Nagar clinic. This ensures a calm, private clinical environment without crowded waiting rooms. Contact our clinic line directly to book your visit."
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
        <PageHeader title="Cancer Screening" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-purple-100/60 group">
                <Image 
                  src="/images/cancer-screening-overview.webp" 
                  alt="Cervical cytobrush and pap smear screening collection kit in clinic" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Gynaecological Cancer Screening?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  Preventive <strong>Gynaecological &amp; Breast Cancer Screening</strong> is the most impactful investment a woman can make in her long-term health. Most reproductive tract malignancies—particularly cervical cancer—develop slowly over many years through pre-cancerous cellular mutations that show zero early warning signs or pain.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we provide comfortable, confidential, and evidence-based preventive screenings. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, our practice offers gentle Pap smears, HPV DNA molecular tests, clinical breast exams, and ultrasound assessments in a reassuring environment.
                </p>
                <p>
                  All screenings are performed directly by Dr. Deepika Lalwani strictly by prior appointment, ensuring complete privacy, high sterilization, and zero waiting room stress.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Preventive Screening Today
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

        {/* === SECTION 2: Pap Smear vs HPV DNA Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Pap Smear vs. HPV DNA Molecular Testing" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Both tests use a quick cervical swab during a pelvic examination, but they analyze different biological indicators to safeguard your health.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Pap Smear */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Pap Smear (Liquid Cytology)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Cellular Morphology &bull; Cytology</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Primary Target</span>
                      <p className="text-text text-[14px] leading-relaxed">Detects abnormal, pre-cancerous dysplasia in cervical epithelial cells.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Analysis Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Microscopic evaluation of stained cells on liquid cytology slides.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Screening Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Recommended every 3 years for women aged 21 to 29 years.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Benefit</span>
                      <p className="text-text text-[14px] leading-relaxed">Identifies cell changes early before they progress into invasive lesions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: HPV DNA Test */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">HPV DNA Molecular Test</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Viral Identification &bull; Molecular PCR</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Primary Target</span>
                      <p className="text-text text-[14px] leading-relaxed">Detects high-risk oncogenic Human Papillomavirus strains (16, 18, etc.).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Analysis Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Automated DNA amplification (PCR) to isolate high-risk viral genetic material.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Screening Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Recommended every 5 years for women aged 30 to 65 (ideally co-tested with Pap).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Benefit</span>
                      <p className="text-text text-[14px] leading-relaxed">High sensitivity; flags viral risk years before visible cellular changes occur.</p>
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

        {/* === SECTION 3: Screening Modalities === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Screening Services We Provide" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Comprehensive preventive evaluations to protect your cervical, uterine, ovarian, and breast health.
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
              Follow these simple preparation steps to ensure optimal specimen collection and complete diagnostic accuracy.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[16/9] w-full max-h-[420px] group">
              <Image 
                src="/images/cervical-vaccine-screening-indian.webp" 
                alt="Dr. Deepika Lalwani Guiding Patient on Pre-Procedure Cancer Screening and HPV Prevention Guidelines" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
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

        {/* === SECTION 5: Screening Process Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Cervical &amp; Breast Screening Process" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A comfortable, unhurried clinical screening completed in a matter of minutes during your routine consultation.
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Cancer Screening?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Gentle, Painless Specimen Swabs</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) conducts swabs with extreme gentleness, ensuring minimal physical discomfort.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">NABL-Accredited Diagnostic Precision</strong>
                      <span className="text-white/80 text-[14px]">Partnering with premier NABL-certified laboratories for liquid cytology and high-risk HPV DNA PCR testing in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Confidentiality</strong>
                      <span className="text-white/80 text-[14px]">Screenings are conducted in a tranquil, sterilized private room with zero lobby crowds and complete patient privacy.</span>
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
