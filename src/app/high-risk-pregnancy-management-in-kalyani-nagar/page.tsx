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
  TrendingUp
} from 'lucide-react';

export const metadata = {
  title: "High-Risk Pregnancy Care in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Specialized high-risk pregnancy management in Kalyani Nagar, Pune by Dr. Deepika Lalwani (MBBS, DGO Mumbai, 10+ yrs exp). Expert care for diabetes, BP, twins, and recurrent loss.",
  alternates: {
    canonical: '/high-risk-pregnancy-management-in-kalyani-nagar/',
  }
};

export default function HighRiskPregnancyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'High-Risk Pregnancy Care' },
  ];

  const highRiskConditions = [
    { 
      title: "Gestational Diabetes (GDM)", 
      description: "Rigorous blood sugar profiling, customized diabetic diet therapy, maternal lifestyle modification, and safe insulin titration to prevent fetal macrosomia.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Gestational Hypertension & Preeclampsia", 
      description: "Continuous blood pressure charting, urine protein monitoring, and pregnancy-compatible antihypertensives to safeguard maternal renal and placental health.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Multiple Pregnancies (Twins / Triplets)", 
      description: "Serial growth scans, chorionicity assessment, inter-twin amniotic fluid surveillance, and cervical length monitoring to prevent pre-term labor.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Recurrent Pregnancy Loss & Advanced Age", 
      description: "Comprehensive thrombophilia screening, cervical cerclage when indicated, progesterone support, and personalized reassurance for mothers aged 35+.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Daily Home Vitals Charting", 
      description: "Maintaining a structured digital or paper log of blood pressure readings and capillary fasting/postprandial glucose values.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Targeted Fetal Doppler Scans", 
      description: "Undergoing specialized growth scans and umbilical/middle cerebral artery Doppler flows to verify fetal oxygenation and placental resistance.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Structured Hospital Delivery Coordination", 
      description: "Proactively coordinating admission at our equipped tertiary delivery centers with 24/7 NICU, blood bank, and adult ICU backup in Pune.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const managementTimeline = [
    {
      title: 'Stage 1: Early Risk Stratification & Screening',
      description: 'Comprehensive baseline evaluation, biochemical testing (HbA1c, thyroid, renal profile), and high-resolution early dating/nuchal scans to map risk variables.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Stage 2: Continuous Placental & Fetal Surveillance',
      description: 'Frequent serial growth ultrasounds, biophysical profile scoring, and uterine artery Doppler checks to detect any subtle signs of intrauterine growth restriction (IUGR).',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Stage 3: Medical Stabilization & Fetal Cardiotocography',
      description: 'Tight therapeutic regulation of maternal sugars or blood pressure, combined with electronic fetal heart monitoring (CTG/NST) to ensure fetal stamina.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Stage 4: Timed Induction or Planned Caesarean Delivery',
      description: 'Determining the safest delivery window (typically weeks 37 to 39) to protect mother and child, conducted personally by Dr. Deepika Lalwani at premier Pune hospitals.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of high-risk pregnancy monitoring in Pune?",
      answer: "In Pune, specialized high-risk pregnancy consultations with an experienced obstetrician typically range from ₹700 to ₹1,000 per visit. Diagnostic surveillance costs include specialized Fetal Doppler and growth scans (₹2,000 to ₹3,500 per scan) and non-stress testing (NST/CTG fetal monitoring at ₹800 to ₹1,500 per session). Comprehensive multi-trimester high-risk surveillance packages generally average between ₹15,000 and ₹35,000 across the entire gestational period, ensuring intensive maternal and fetal safety."
    },
    {
      question: "What medical factors classify a pregnancy as high risk?",
      answer: "A pregnancy is classified as high risk when existing health issues (such as chronic hypertension, pre-gestational diabetes, thyroid disorders, or PCOS) or pregnancy-induced conditions (gestational diabetes, preeclampsia, low placenta, multiple fetuses, or history of repeated miscarriages) require intensified medical surveillance."
    },
    {
      question: "Can a mother with a high-risk pregnancy still have a normal delivery?",
      answer: "Yes. Being labeled high risk does not automatically necessitate a C-section. With vigilant blood pressure control, stable blood glucose levels, and reassuring fetal heart patterns, many high-risk expectant mothers deliver safely through natural vaginal birth under Dr. Deepika Lalwani's care."
    },
    {
      question: "How frequently will I need antenatal checkups for a high-risk pregnancy?",
      answer: "While routine pregnancies require monthly checkups until the 28th week, high-risk pregnancies typically require visits every 2 weeks initially, advancing to weekly or bi-weekly checkups with non-stress tests (NST) in the third trimester."
    },
    {
      question: "How is Gestational Diabetes Mellitus (GDM) managed at the clinic?",
      answer: "GDM is managed through personalized diabetic nutrition planning, daily home blood glucose monitoring logs, gentle physical activity, and safe oral hypoglycemic medications or insulin therapy if dietary control alone is insufficient."
    },
    {
      question: "Where are high-risk deliveries conducted for your patients?",
      answer: "Outpatient surveillance and scans are conducted at our New Kalyani Nagar clinic. Deliveries take place at leading partner tertiary hospitals across Pune that feature Level-III Neonatal Intensive Care Units (NICU), adult intensive care, and round-the-clock emergency support."
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
        <PageHeader title="High-Risk Pregnancy Care" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is High-Risk Pregnancy Management? === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/high-risk-pregnancy-indian.webp" 
                  alt="Dr. Deepika Lalwani Providing High-Risk Pregnancy Fetal Ultrasound Monitoring to Expectant Mother" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is High-Risk Pregnancy Management?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>High-Risk Pregnancy Management</strong> refers to specialized, vigilant obstetric care designed for pregnancies where maternal medical conditions or fetal factors increase the potential for complications. Conditions such as gestational diabetes, hypertension (preeclampsia), multiple gestations (twins), advanced maternal age (35+), and prior pregnancy losses require structured clinical surveillance to safeguard both mother and child.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we provide meticulous, empathetic, and evidence-based high-risk obstetric care. Guided by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, each patient receives unhurried, direct specialist oversight, personalized fetal Doppler mapping, and seamless delivery planning.
                </p>
                <p>
                  A high-risk diagnosis does not mean complications are inevitable—with proactive monitoring, early biochemical screenings, and tailored therapeutic protocols, the vast majority of our high-risk expectant mothers celebrate safe, joyful, and healthy deliveries.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your High-Risk Assessment Today
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
              text="Routine vs. High-Risk Pregnancy Care Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Understanding the difference between low-risk routine care and specialized high-risk surveillance helps you appreciate the protective protocols tailored for you.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Desktop VS badge */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Routine Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Routine Care (Standard)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Baseline Monitoring &bull; Standard Scans</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Antenatal Tracking</span>
                      <p className="text-text text-[14px] leading-relaxed">Monthly checkups with standard blood pressure, maternal weight, and fetal heart rate auscultation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Ultrasound Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Standard 3-4 milestone scans: Early dating, NT scan, anomaly (TIFFA), and late growth scan.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Consultation Schedule</span>
                      <p className="text-text text-[14px] leading-relaxed">Monthly until 28 weeks, every 2 weeks until 36 weeks, and weekly until delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Delivery Planning</span>
                      <p className="text-text text-[14px] leading-relaxed">Focus on spontaneous labor onset and natural birth facilitation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: High-Risk Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">High-Risk Care (Specialized)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Targeted Surveillance &bull; Co-Morbidities</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Antenatal Tracking</span>
                      <p className="text-text text-[14px] leading-relaxed">Daily home glucose/BP charts, cervical length scans, and Cardiotocography (CTG/NST) checks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Ultrasound Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Serial fetal growth scans, biophysical profiles, and umbilical/cerebral artery Doppler velocity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Consultation Schedule</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent fortnightly visits from early trimesters, progressing to weekly or bi-weekly reviews.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Delivery Planning</span>
                      <p className="text-text text-[14px] leading-relaxed">Proactively scheduled induction or planned C-section at equipped tertiary centers with NICU backup.</p>
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

        {/* === SECTION 3: High-Risk Conditions We Manage === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="High-Risk Pregnancy Conditions We Specialize In" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical protocol provides dedicated surveillance and personalized medical therapies to protect mothers and babies facing complex factors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {highRiskConditions.map((condition, index) => {
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
                        {condition.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {condition.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {condition.description}
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

        {/* === SECTION 4: Preparation & Monitoring Guidelines === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our High-Risk Preparation &amp; Monitoring Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Proactive self-tracking, growth velocity audits, and tertiary hospital coordination ensure a smooth, safe outcome.
            </p>
            
            {/* Bento Banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/high-risk-prep.webp" 
                alt="High-resolution Cardiotocography CTG monitoring display showing fetal heart rate patterns" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
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

        {/* === SECTION 5: High-Risk Management Protocol === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="Our High-Risk Management Protocol Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured surveillance roadmap designed to identify risk variables early, optimize maternal parameters, and achieve a safe, healthy delivery.
              </p>
              <VerticalTimeline items={managementTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-gradient-to-b from-[#F5ECFA] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Doctor Credentials + FAQs === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">
            
            {/* Why Choose Doctor Card */}
            <div className="gradient-dark-section text-white rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[24px] md:text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for High-Risk Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Specialist Care &amp; Continuity</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Deepika Lalwani personally at every visit. Registered high-risk mothers receive prioritized clinical communication and unhurried care.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years Managing Complex Pregnancies</strong>
                      <span className="text-white/80 text-[14px]">Deep clinical expertise in gestational diabetes, preeclampsia, recurrent pregnancy loss, twins, and VBAC across Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Advanced Tertiary Care &amp; NICU Network</strong>
                      <span className="text-white/80 text-[14px]">Outpatient care in New Kalyani Nagar with deliveries conducted at equipped partner hospitals featuring Level-III NICU backup.</span>
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
