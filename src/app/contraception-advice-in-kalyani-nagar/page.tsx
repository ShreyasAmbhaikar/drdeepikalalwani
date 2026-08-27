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
  title: "Contraception Advice & Family Planning in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Safe contraception advice, Copper T & Mirena IUD insertion, oral birth control pills, and family planning by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Pune.",
  alternates: {
    canonical: '/contraception-advice-in-kalyani-nagar/',
  }
};

export default function ContraceptionAdvicePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contraception Advice' },
  ];

  const contraceptiveServices = [
    { 
      title: "Daily Oral Contraceptive Pills", 
      description: "Low-dose combined or progesterone-only pills that suppress ovulation, tailored to regulate cycles and minimize hormonal side effects.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Long-Acting IUD / Copper T", 
      description: "Sterile in-clinic insertion and removal of hormone-free Copper T (5 to 10 years) or hormonal IUDs (Mirena) for reliable, long-term protection.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Contraceptive Injections", 
      description: "Quarterly progestin injections (Depo-Provera) providing 3 months of continuous, hassle-free pregnancy prevention.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Emergency Contraception Guidance", 
      description: "Clinical advice on morning-after pills or emergency copper IUD placement within 72 to 120 hours of unprotected intercourse.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const selectionGuidelines = [
    { 
      title: "Efficacy Assessment", 
      description: "Evaluating clinical effectiveness across methods, ranging from 91% for oral pills (user-dependent) to over 99.5% for intrauterine devices (IUDs).", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Lifestyle & Routine Audit", 
      description: "Determining whether you prefer daily self-tracking or a convenient 'fit-and-forget' intrauterine device that aligns with your daily routine.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Hormonal Sensitivity Review", 
      description: "Screening for estrogen intolerance, migraines, or blood pressure factors to decide between non-hormonal Copper T or low-dose progestins.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: Clinical History & Health Screening',
      description: 'Reviewing age, blood pressure, BMI, migraine history, and family thrombosis risk factors before advising suitable contraceptive options.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Family Planning Timeline Mapping',
      description: 'Discussing child spacing goals to determine whether a short-acting daily method or a long-acting reversible contraceptive (LARC) is ideal.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Personalized Method Selection',
      description: 'Dr. Deepika Lalwani clearly explains the pros, cons, and mechanism of each method, empowering you to make an informed decision.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Sterile Placement or Prescription',
      description: 'Providing clear dosage instructions for oral methods, or performing gentle, sterile IUD insertion in our private clinic treatment room.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of contraception consultations and IUD fittings in Pune?",
      answer: "In Pune, a family planning and contraception consultation with Dr. Deepika Lalwani is ₹600 to ₹800. A standard Copper-T IUD insertion (including the sterile device, local block, and clinical insertion procedure) ranges from ₹2,500 to ₹4,500. Advanced hormonal IUD fittings (such as Mirena for heavy bleeding control) range from ₹7,000 to ₹10,500 depending on the device. Quarterly contraceptive injections (Depo-Provera) are ₹600 to ₹900 per dose."
    },
    {
      question: "What are the primary birth control options available at Dr. Deepika Lalwani's Clinic?",
      answer: "We offer short-term daily oral contraceptive pills (OCPs), barrier options, quarterly hormonal injections (Depo-Provera), and long-acting reversible intrauterine devices (such as Copper T and Mirena IUD). Permanent sterilization (laparoscopic tubectomy) is also coordinated for patients who have completed their families."
    },
    {
      question: "How does Dr. Deepika Lalwani help choose the safest contraceptive method for me?",
      answer: "Dr. Deepika Lalwani conducts a personalized health assessment reviewing your age, blood pressure, cycle regularity, acne/bleeding patterns, and future pregnancy timeline. We match you with the method that provides maximum efficacy with minimal side effects."
    },
    {
      question: "Are intrauterine devices (IUDs like Copper T and Mirena) safe and painful to insert?",
      answer: "Yes, IUDs are over 99.5% effective and internationally recommended. Insertion takes only 5 to 10 minutes in our clinic under gentle local analgesia. Copper T is 100% hormone-free (lasts 5 to 10 years), while Mirena releases localized progestin (lasts 5 years) and significantly reduces heavy menstrual bleeding and cramps."
    },
    {
      question: "Will taking birth control pills or having an IUD affect my future fertility?",
      answer: "No. Reversible contraceptives do not harm your long-term fertility. Once you discontinue oral pills or have your IUD removed by Dr. Deepika Lalwani, your natural ovulatory cycles resume and you can plan pregnancy immediately."
    },
    {
      question: "How do I book a private family planning consultation?",
      answer: "Appointments are scheduled strictly by prior booking during dedicated morning and evening hours in our New Kalyani Nagar clinic. This guarantees complete confidentiality, zero lobby crowds, and dedicated time with Dr. Deepika Lalwani."
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
        <PageHeader title="Contraception Advice" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/contraception-advice-indian.webp" 
                  alt="Dr. Deepika Lalwani Providing Family Planning and Contraception Guidance to Indian Couple" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Contraception Advice &amp; Family Planning?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Contraception Advice &amp; Family Planning</strong> encompasses the personalized medical evaluation, selection, and administration of birth control methods designed to prevent unplanned pregnancies, manage menstrual cycles, and support reproductive autonomy. Choosing the right method—whether temporary pills, quarterly injectables, or long-acting reversible IUDs—is essential for your health and peace of mind.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we offer compassionate, non-judgmental family planning guidance. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, our practice provides customized contraceptive counseling and sterile in-clinic IUD insertions.
                </p>
                <p>
                  All consultations and procedures are coordinated strictly by prior appointment, ensuring absolute privacy, zero waiting room crowds, and dedicated attention.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Family Planning Consultation Today
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

        {/* === SECTION 2: Daily Oral Pills vs IUD Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Daily Oral Pills vs. Intrauterine Devices (IUD)" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Deciding between a self-administered daily pill and a long-acting &quot;fit-and-forget&quot; IUD depends on your health profile and lifestyle preferences.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Daily Oral Pills */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Daily Oral Contraceptive Pills</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Self-Administered &bull; Short-Acting</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Daily Administration</span>
                      <p className="text-text text-[14px] leading-relaxed">Must be taken at the exact same time every day to maintain high efficacy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Protection Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Short-term. Natural fertility returns immediately upon stopping the pill.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Hormonal Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Contains estrogen and progestin, or low-dose progestin-only formulations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Non-Contraceptive Perks</span>
                      <p className="text-text text-[14px] leading-relaxed">Highly effective at regulating irregular cycles, reducing heavy flow, and clearing acne.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Intrauterine Devices */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Intrauterine Devices (IUD)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Clinical Fitting &bull; Long-Acting (LARC)</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Daily Administration</span>
                      <p className="text-text text-[14px] leading-relaxed">Convenient &quot;fit-and-forget&quot; method; requires zero daily memory or tracking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Protection Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Long-term. Provides continuous, reversible protection for 5 to 10 years.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Hormonal Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Available as hormonal (Mirena) or entirely hormone-free (Copper T).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Non-Contraceptive Perks</span>
                      <p className="text-text text-[14px] leading-relaxed">Hormonal IUDs (Mirena) dramatically reduce severe dysmenorrhea and heavy bleeding.</p>
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

        {/* === SECTION 3: Contraceptive Services Grid === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Contraceptive Services We Provide" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinic offers a full range of modern family planning methods to match your body, lifestyle, and reproductive goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {contraceptiveServices.map((service, index) => {
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

        {/* === SECTION 4: Method Selection Guidelines === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Procedure Preparation &amp; Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Selecting contraception thoughtfully prevents side effects and supports long-term reproductive well-being.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/contraception-prep.webp" 
                alt="Clean medical charts and birth control options checklist preparing for a clinic fitting" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectionGuidelines.map((card, index) => {
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

        {/* === SECTION 5: Evaluation & Fitting Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="Our Evaluation &amp; Fitting Process Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A thorough clinical screening to guide your method selection and ensure safe, sterile placement.
              </p>
              <VerticalTimeline items={journeySteps} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Contraception Advice?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Absolute Privacy &amp; Non-Judgmental Care</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) ensures a safe, private space where your family planning choices are respected with dignity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Certified In-Clinic IUD Fitting Expertise</strong>
                      <span className="text-white/80 text-[14px]">High-precision, sterile insertion and removal of long-term reversible intrauterine devices (Copper T and Mirena).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Scheduling</strong>
                      <span className="text-white/80 text-[14px]">Consultations are scheduled strictly by prior appointment in New Kalyani Nagar, ensuring zero lobby crowding and maximum comfort.</span>
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
