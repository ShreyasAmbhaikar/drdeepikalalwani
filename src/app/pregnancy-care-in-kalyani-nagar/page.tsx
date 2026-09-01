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
  Baby,
  TrendingUp,
  Apple
} from 'lucide-react';

export const metadata = {
  title: "Comprehensive Pregnancy Care in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Consult Dr. Deepika Lalwani (MBBS, DGO Mumbai, 10+ yrs exp) for comprehensive antenatal pregnancy care, trimester fetal scans, and natural birth planning in Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/pregnancy-care-in-kalyani-nagar/",
  }
};

export default function PregnancyCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pregnancy Care (Maternity)' },
  ];

  const maternalIndicators = [
    { 
      title: "Blood Pressure & Preeclampsia Checks", 
      description: "Continuous maternal blood pressure tracking at each antenatal visit, combined with urine protein analysis to safeguard maternal and placental perfusion.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Gestational Diabetes (GDM) Screening", 
      description: "Standard oral glucose tolerance tests (OGTT) conducted between weeks 24 and 28 to detect and regulate blood sugars through nutrition and therapy.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Fetal Growth Velocity & Fluid Index", 
      description: "Measuring fundal height progression, tracking amniotic fluid index (AFI), and verifying active fetal movements across all pregnancy stages.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Hemoglobin & Iron Optimization", 
      description: "Regular complete blood count (CBC) screenings to maintain healthy maternal hemoglobin levels and support cardiovascular blood expansion.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Antenatal Vitals & Kick Log", 
      description: "Documenting blood pressure readings, symptom changes, and daily fetal kick counts after 28 weeks to present during clinical checkups.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Trimester Micronutrient Regimen", 
      description: "Consistent adherence to doctor-prescribed folic acid, active iron, elemental calcium, and vitamin D3 alongside a balanced maternal diet.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Labor Readiness & Birth Preferences", 
      description: "Understanding early labor signs, organizing hospital logistics, and finalizing your birth plan with Dr. Deepika Lalwani well in advance.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const trimesterTimeline = [
    {
      title: 'First Trimester: Conception to Week 12 (Foundations)',
      description: 'Confirming intrauterine pregnancy via early pelvic ultrasound, calculating the estimated due date (EDD), verifying fetal cardiac activity, and prescribing active folic acid to support embryogenesis.',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Second Trimester: Weeks 13 to 28 (Fetal Growth & Anomaly Scan)',
      description: 'Conducting the comprehensive anomaly (TIFFA) scan at weeks 18 to 20 to examine fetal anatomy, administering maternal tetanus toxoid vaccines, and performing glucose screening.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Third Trimester: Weeks 29 to 40 (Fetal Maturation & Labor Prep)',
      description: 'Consultations increase to fortnightly and weekly visits. Serial growth Doppler ultrasounds track placental resistance, fetal presentation, and cervical readiness for natural delivery.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Postpartum Transition: Weeks 1 to 6 (Maternal Recovery & Lactation)',
      description: 'Dedicated maternal pelvic restoration checks, emotional wellness screening for baby blues, hands-on breastfeeding coaching, and newborn weight monitoring.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of routine antenatal pregnancy care in Pune?",
      answer: "In Pune, a routine antenatal consultation with a specialist obstetrician ranges from ₹600 to ₹800 per visit. Diagnostic trimester ultrasound scans (such as Dating, NT/NB scan, TIFFA anomaly scan, and Growth Doppler) range between ₹1,500 and ₹3,000 per scan at accredited imaging centres. Routine antenatal blood panels and biochemical screening (Double Marker, Quadruple Marker, GTT, Thyroid, CBC) range from ₹1,500 to ₹4,000 across trimesters."
    },
    {
      question: "What does comprehensive antenatal pregnancy care include at Dr. Deepika Lalwani's Clinic?",
      answer: "Antenatal care includes regular clinical consultations, fetal heart rate auscultation, maternal blood pressure and weight tracking, customized trimester ultrasound scheduling, screening for gestational diabetes and anemia, prenatal vitamin management, and personalized birth planning."
    },
    {
      question: "What is the recommended schedule for routine prenatal checkups?",
      answer: "For healthy uncomplicated pregnancies, visits are scheduled monthly until 28 weeks, every two weeks between 28 and 36 weeks, and weekly from 36 weeks until childbirth. High-risk cases receive a more frequent, customized schedule."
    },
    {
      question: "What critical ultrasound scans are required during pregnancy?",
      answer: "Essential scans include: 1. Early Dating Scan (6–8 weeks) to confirm fetal viability; 2. Nuchal Translucency (NT) & Double Marker (11–13 weeks) for chromosomal screening; 3. Detailed Anomaly / TIFFA Scan (18–20 weeks) to check organ development; and 4. Third-trimester Growth Doppler scans to assess fluid levels and placental flow."
    },
    {
      question: "Can I contact Dr. Deepika Lalwani between scheduled appointments if questions arise?",
      answer: "Yes. Registered antenatal patients have direct communication access with Dr. Deepika Lalwani for non-emergency clinical queries and guidance. For red-flag symptoms, patients are guided directly to our partner tertiary hospital facilities."
    },
    {
      question: "Where are deliveries conducted for your maternity patients?",
      answer: "Routine antenatal checkups and diagnostic reviews take place at our New Kalyani Nagar clinic. Deliveries and hospital admissions are conducted personally by Dr. Deepika Lalwani at premier partner tertiary hospitals in Pune equipped with advanced labor suites and Level-III NICU care."
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
        <PageHeader title="Pregnancy Care (Maternity)" breadcrumbs={breadcrumbs} bgImage="/images/pregnancy-care-deepika-banner.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/pregnancy-care-indian.webp" 
                  alt="Dr. Deepika Lalwani Providing Comprehensive Antenatal Care and Ultrasound Screening to Expectant Indian Parents" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Comprehensive Pregnancy (Antenatal) Care?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Pregnancy Care (Antenatal / Maternity Care)</strong> encompasses the clinical, diagnostic, and nutritional support provided to an expectant mother from the moment of conception through to childbirth and postpartum recovery. Structured antenatal care monitors fetal organogenesis, detects potential maternal co-morbidities early, and ensures a tranquil, well-prepared delivery pathway.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we approach pregnancy as a sacred, transformative journey. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of obstetric experience</strong>, our care model combines clinical diligence with warm, personalized attention, ensuring every expectant mother feels heard, supported, and reassured at every stage.
                </p>
                <p>
                  Because our clinic is an exclusive private specialty practice, you consult Dr. Deepika Lalwani directly at every visit. Appointments are scheduled with generous time slots, eliminating crowded waiting rooms and giving you ample opportunity to discuss ultrasound reports, nutrition, and birth preferences.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Prenatal Consultation Today
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

        {/* === SECTION 2: Routine vs. High-Risk Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Low-Risk Routine Care vs. High-Risk Maternity Surveillance" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical protocol adapts seamlessly to your individual pregnancy profile, ensuring appropriate monitoring without unnecessary interventions.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Routine Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Routine Care (Low-Risk)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Natural Milestones &bull; Standard Scans</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Tracking fundal height, maternal weight gain, fetal heart sounds, and general maternal wellness.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Consultation Cadence</span>
                      <p className="text-text text-[14px] leading-relaxed">Monthly visits until week 28, fortnightly until week 36, and weekly until delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Birth Preparation</span>
                      <p className="text-text text-[14px] leading-relaxed">Active encouragement of natural normal delivery, pelvic floor conditioning, and breathing exercises.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Postpartum Support</span>
                      <p className="text-text text-[14px] leading-relaxed">Routine 6-week recovery checkup, newborn lactation support, and mental health check-in.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: High-Risk Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">High-Risk Care (Specialized)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Vigilant Monitoring &bull; Co-Morbidities</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Close management of diabetes, preeclampsia, twin gestations, thyroid disorders, or previous LSCS.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Consultation Cadence</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent fortnightly and weekly reviews with continuous home glucose and blood pressure logging.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Birth Preparation</span>
                      <p className="text-text text-[14px] leading-relaxed">Proactive delivery scheduling at equipped tertiary partner facilities with 24/7 NICU backup.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Postpartum Support</span>
                      <p className="text-text text-[14px] leading-relaxed">Specialized wound healing assessment, metabolic sugar stabilization, and blood pressure monitoring.</p>
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

        {/* === SECTION 3: Maternal Health Indicators === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Maternal &amp; Fetal Health Indicators" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We monitor these critical biological parameters at every antenatal checkup to ensure optimal maternal wellness and smooth fetal development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {maternalIndicators.map((indicator, index) => {
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
                        {indicator.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {indicator.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {indicator.description}
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
              text="Our Antenatal Preparation &amp; Wellness Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Step-by-step guidance to keep your pregnancy vibrant, organized, and stress-free throughout each trimester.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pregnancy-prep.webp" 
                alt="Ultrasound display and maternal antenatal checklist chart" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prepGuidelines.map((card, index) => {
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

        {/* === SECTION 5: Trimester Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Antenatal Care Journey: Trimester by Trimester" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured roadmap detailing key clinical milestones, scans, and nutritional support from early conception through delivery and lactation.
              </p>
              <VerticalTimeline items={trimesterTimeline} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Pregnancy Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Medical Access &amp; Continuity of Care</strong>
                      <span className="text-white/80 text-[14px]">You consult directly with Dr. Deepika Lalwani (MBBS, DGO Mumbai) at every appointment, ensuring comprehensive familiarity with your medical history.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years Dedicated Obstetric Excellence</strong>
                      <span className="text-white/80 text-[14px]">Expertise spanning thousands of natural deliveries, twin pregnancies, and complex high-risk maternity cases in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Equipped Partner Delivery Hospitals</strong>
                      <span className="text-white/80 text-[14px]">Outpatient care in New Kalyani Nagar with planned deliveries conducted personally by Dr. Deepika Lalwani at premier tertiary hospital facilities.</span>
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
