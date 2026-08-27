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
  Scale, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  ClipboardList, 
  Shield, 
  Sparkles,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Confidential MTP & D&E Services in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Safe, legal, and strictly confidential Medical Termination of Pregnancy (MTP) and D&E by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Kalyani Nagar, Pune.",
  alternates: {
    canonical: '/mtp-d-e-services-in-kalyani-nagar/',
  }
};

export default function MtpDePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'MTP, D & E Services' },
  ];

  const safetyLegalCards = [
    { 
      title: "Strict Patient Anonymity & Privacy", 
      description: "We guarantee 100% confidentiality. Medical consultations and records are held strictly private with Dr. Deepika Lalwani in a non-judgmental atmosphere.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Legally Compliant with MTP Act", 
      description: "All medical and surgical procedures strictly adhere to the Medical Termination of Pregnancy (MTP) Act of India with registered clinical compliance.", 
      icon: <Scale className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Dangers of OTC Abortion Pills", 
      description: "Unsupervised over-the-counter pills risk incomplete evacuation, dangerous internal hemorrhage, and severe pelvic sepsis requiring emergency interventions.", 
      icon: <AlertTriangle className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Ultrasound & Ectopic Ruling", 
      description: "A mandatory baseline pelvic ultrasound confirms precise gestational age and rules out life-threatening tubal ectopic pregnancies before initiating care.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Blood Profiling & Rh Factor Check", 
      description: "Testing complete blood counts and maternal Rh blood group (administering Anti-D immunoglobulin if Rh-negative to safeguard future pregnancies).", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Fasting & Sedation Protocol", 
      description: "For minor surgical evacuations, maintaining a 6-hour nil-by-mouth fasting window ensures complete safety under short intravenous sedation.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Post-Procedure Recovery Care", 
      description: "Resting for 24 to 48 hours, taking prescribed prophylactic antibiotics, and avoiding tampons or intercourse for 2 weeks to promote uterine healing.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const protocolTimeline = [
    {
      title: 'Step 1: Private Gynaecological Consult & Ultrasound',
      description: 'A discreet evaluation with Dr. Deepika Lalwani including a high-resolution transvaginal ultrasound to verify gestational weeks and uterine location.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Method Selection & Informed Consent',
      description: 'Reviewing clinical options (medical pill kit up to 7–9 weeks vs. gentle daycare suction aspiration up to 12 weeks) and completing standard MTP documentation.',
      icon: <Scale className="w-5 h-5" />
    },
    {
      title: 'Step 3: Supervised Medical or Surgical Care',
      description: 'Administering regulated DCGI-approved medication protocols or performing a 10-minute sterile suction evacuation under gentle sedation in a certified theatre.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Day-14 Follow-Up & Clearance Scan',
      description: 'A mandatory follow-up ultrasound scan at 14 days to confirm complete endometrial clearance and discuss suitable future contraception options.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of medical abortion (MTP) and surgical D&E in Pune?",
      answer: "In Pune, a complete medical abortion package—including initial gynaecological consultation, pelvic ultrasound to rule out ectopic pregnancy, DCGI-approved medication kit, and day-14 clearance scan—typically ranges from ₹3,500 to ₹6,500. A gentle daycare surgical suction evacuation (D&E/MVA) under intravenous sedation ranges from ₹12,000 to ₹25,000, covering pre-procedure blood tests, OT charges, sedation, and post-procedure recovery."
    },
    {
      question: "What are the legal guidelines for pregnancy termination (MTP) in India?",
      answer: "Under the Medical Termination of Pregnancy (MTP) Amendment Act of India, pregnancy termination is legally permitted up to 20 weeks for all women (including unmarried women) with the opinion of one registered gynecologist, and up to 24 weeks for specific eligible categories."
    },
    {
      question: "What is the primary difference between medical abortion and surgical D&E?",
      answer: "Medical abortion uses prescribed oral tablets (Mifepristone and Misoprostol) to induce natural uterine contractions, suitable for early pregnancies up to 7 to 9 weeks. Surgical evacuation (suction aspiration/D&E) is a gentle 10 to 15-minute clinical procedure under light sedation, suitable up to 12 weeks of gestation."
    },
    {
      question: "Why is taking over-the-counter (OTC) abortion pills without a doctor dangerous?",
      answer: "Self-medicating with unprescribed pills carries life-threatening risks, including unrecognized ectopic pregnancy rupture (causing rapid internal bleeding), incomplete tissue expulsion leading to severe pelvic infection, and uncontrolled hemorrhage without clinical support."
    },
    {
      question: "Will having an MTP procedure affect my ability to get pregnant in the future?",
      answer: "No. When performed legally and safely under registered medical supervision by an experienced gynecologist like Dr. Deepika Lalwani, an MTP does not harm your uterus or affect future fertility. In Rh-negative mothers, Anti-D injection is administered to protect future pregnancies."
    },
    {
      question: "How is patient confidentiality and privacy ensured at the clinic?",
      answer: "We uphold strict medical confidentiality. Consultations are scheduled privately by prior appointment in our New Kalyani Nagar clinic with no crowded lobbies, ensuring your personal identity and records remain entirely confidential."
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
        <PageHeader title="MTP, D &amp; E Services" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-purple-100/60 group">
                <Image 
                  src="/images/mtp-overview.webp" 
                  alt="Confidential MTP and D&E medical documentation and clinical indicators" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What are MTP, D &amp; E Services?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Medical Termination of Pregnancy (MTP)</strong> and <strong>Dilation &amp; Evacuation (D&amp;E)</strong> are safe, legally approved healthcare procedures designed to terminate an unplanned pregnancy or clear retained tissues following an incomplete miscarriage. Receiving these services under registered medical supervision is essential to ensure complete uterine safety and preserve future reproductive health.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we provide strictly confidential, safe, and legally compliant reproductive care in accordance with the MTP Act of India. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, our practice offers non-judgmental counseling, ultrasound safety checks, and attentive post-procedure follow-ups.
                </p>
                <p>
                  Consultations, baseline ultrasounds, and medication protocols are managed in our private, confidential clinic. Minor surgical evacuations are performed by Dr. Deepika Lalwani in sterile, certified partner tertiary hospital suites in Pune under gentle sedation.
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

        {/* === SECTION 2: Medical vs Surgical Abortion Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Medical vs. Surgical Abortion: Method Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Depending on gestational age and medical history, Dr. Deepika Lalwani will guide you to select the safest and most suitable method under the MTP Act.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Medical Termination */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Medical Abortion (MTP Pills)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Non-Surgical &bull; Early Gestation</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Gestational Window</span>
                      <p className="text-text text-[14px] leading-relaxed">Suitable for early pregnancy up to 7 to 9 weeks of gestation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Non-invasive; involves taking prescribed DCGI-approved oral tablets.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Experience</span>
                      <p className="text-text text-[14px] leading-relaxed">Induces natural uterine cramping; tissue passes naturally at home with pain meds.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Mandatory Verification</span>
                      <p className="text-text text-[14px] leading-relaxed">Follow-up ultrasound on Day 14 is essential to confirm 100% complete clearance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Surgical Termination */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Surgical Abortion (D&amp;E / Suction)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Minor Daycare Procedure &bull; Instant Results</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Gestational Window</span>
                      <p className="text-text text-[14px] leading-relaxed">Performed up to 12 weeks of pregnancy in a certified hospital theatre.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Gentle manual vacuum aspiration (MVA) or electrical suction evacuation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Experience</span>
                      <p className="text-text text-[14px] leading-relaxed">Takes 10 to 15 minutes under gentle sedation; painless and discharged in 2 to 3 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Mandatory Verification</span>
                      <p className="text-text text-[14px] leading-relaxed">Provides immediate, complete clearing of the uterine cavity with minimal bleeding.</p>
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

        {/* === SECTION 3: Safety & Legal Safeguards === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Safety &amp; Legal Safeguards" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Your physical safety, emotional well-being, and legal rights are strictly protected under registered medical frameworks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {safetyLegalCards.map((card, index) => {
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
                        {card.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {card.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {card.description}
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
              Follow these safety preparation principles to prevent clinical complications and ensure smooth uterine restoration.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[16/9] w-full max-h-[420px] group">
              <Image 
                src="/images/contraception-advice-indian.webp" 
                alt="Dr. Deepika Lalwani Providing Confidential Pre-Procedure Preparation Guidance and Care" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
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

        {/* === SECTION 5: Confidential Protocol Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Confidential Protocol Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We manage each step in strict compliance with legal, clinical, and safety standards, keeping you supported and informed.
              </p>
              <VerticalTimeline items={protocolTimeline} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for MTP &amp; D&amp;E Services?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Absolute Confidentiality &amp; Non-Judgmental Care</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) ensures a safe, private space where your reproductive choices are respected with dignity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Registered Gynecological Acumen</strong>
                      <span className="text-white/80 text-[14px]">Extensive clinical experience adhering strictly to DCGI protocols, minimizing bleeding risks, and preventing pelvic complications.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Sterile Hospital Theatres &amp; Sedation Support</strong>
                      <span className="text-white/80 text-[14px]">Surgical evacuations are performed in partner premier tertiary hospital operating suites in Pune with certified anesthesiologists.</span>
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
