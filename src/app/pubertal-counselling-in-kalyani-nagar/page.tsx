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
  title: "Pubertal Counselling & Adolescent Health in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Supportive pubertal counselling, menarche education, adolescent PCOS care, and HPV vaccination guidance by Dr. Deepika Lalwani in Pune.",
  alternates: {
    canonical: '/pubertal-counselling-in-kalyani-nagar/',
  }
};

export default function PubertalCounsellingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pubertal Counselling' },
  ];

  const adolescentWellnessAreas = [
    { 
      title: "Menarche Education & Period Confidence", 
      description: "Explaining the menstrual cycle using simple medical diagrams, demonstrating sanitary hygiene options, and tracking cycles to eliminate anxiety.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Adolescent PCOS & Irregular Cycles", 
      description: "Identifying early signs of endocrine imbalance, teen PCOS, or thyroid anomalies causing delayed periods, excessive cramping, or heavy flows.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Hormonal Acne & Weight Balance", 
      description: "Addressing metabolic changes during pubertal growth spurts, managing persistent acne breakouts, and offering teen-focused nutrition advice.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Emotional Wellness & Body Confidence", 
      description: "Providing supportive, non-judgmental mentoring to help young girls navigate hormonal mood shifts, peer pressure, and foster positive body image.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const parentGuidelines = [
    { 
      title: "Early, Fear-Free Preparation", 
      description: "Initiating open, positive discussions regarding bodily development before periods begin, framing menarche as a healthy, proud milestone of growing up.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Period Hygiene & Tracking Kits", 
      description: "Helping your daughter prepare a discreet personal sanitary kit and teaching her how to use cycle tracking calendars or mobile apps to predict dates.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "HPV Vaccine Immunization", 
      description: "Scheduling the cervical cancer HPV vaccine during early adolescence (recommended starting ages 9 to 14) for optimal, lifelong cervical immunity.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: Friendly Trust-Building Meeting',
      description: 'A relaxed, conversational consultation with Dr. Deepika Lalwani where the young girl feels completely safe, valued, respected, and heard.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Interactive Pubertal Physiology Education',
      description: 'Demystifying reproductive anatomy, estrogen/progesterone cycles, and bodily transitions using friendly, scientific educational aids.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Gentle Growth & Development Check',
      description: 'Conducting non-invasive height, weight, BMI, and growth velocity tracking. Internal pelvic exams are strictly avoided during routine adolescent visits.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Empowered Self-Care & Hygiene Blueprint',
      description: 'Equipping the teenager with practical advice on menstrual cramps, sanitary product disposal, balanced iron-rich nutrition, and HPV vaccination.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of an adolescent pubertal counselling session in Pune?",
      answer: "In Pune, a dedicated 45-minute private adolescent and pubertal wellness consultation with Dr. Deepika Lalwani is ₹700 to ₹1,000. This includes an unhurried, reassuring discussion on menarche, period hygiene, emotional wellness, and growth assessment. If adolescent hormonal screening (thyroid or PCOS profile) is medically recommended, laboratory investigations typically range from ₹1,800 to ₹3,500."
    },
    {
      question: "What is pubertal counselling and why is it beneficial for young girls?",
      answer: "Pubertal counselling provides tailored medical, physiological, and emotional guidance for girls entering puberty. It demystifies menstrual cycles, addresses concerns about bodily changes, establishes correct hygiene practices, and prevents fear or anxiety surrounding their first period (menarche)."
    },
    {
      question: "At what age should an adolescent girl have her first gynaecological visit?",
      answer: "Leading pediatric and gynecological guidelines recommend a first visit between ages 13 and 15, or earlier if cycle problems arise. The initial consultation is entirely conversational and educational—focused on building trust, answering questions, and checking growth metrics without invasive examinations."
    },
    {
      question: "Are irregular menstrual cycles normal during the first 1 to 2 years after menarche?",
      answer: "Yes, menstrual cycles are frequently irregular for the first 12 to 24 months post-menarche because the hypothalamic-pituitary-ovarian (HPO) axis is still maturing. However, if cycles are missed for more than 3 months, occur more frequently than every 21 days, or cause severe pain, a gentle evaluation is advised."
    },
    {
      question: "Why is the HPV vaccine recommended during early adolescence (ages 9 to 14)?",
      answer: "The HPV (Human Papillomavirus) vaccine produces the strongest immune response when administered between ages 9 and 14, requiring only 2 doses. It provides near-100% protection against high-risk HPV strains responsible for over 90% of cervical cancers and genital warts."
    },
    {
      question: "How do I book a private pubertal counselling consultation at the clinic?",
      answer: "Appointments are scheduled strictly by prior booking during dedicated morning and evening hours in our New Kalyani Nagar clinic. This ensures a calm, private atmosphere where your daughter feels comfortable without waiting room crowds. Call our clinic coordinator to reserve a session."
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
        <PageHeader title="Pubertal Counselling" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-purple-100/60 group">
                <Image 
                  src="/images/pubertal-counselling-overview.webp" 
                  alt="Educational adolescent growth materials and biological endocrine charts on a clinical table" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Pubertal Counselling?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Pubertal Counselling</strong> is a specialized, reassuring branch of adolescent gynaecology designed to support young girls through the physical, hormonal, and emotional transitions of puberty. It demystifies menstruation, addresses early gynaecological concerns (like painful or irregular periods, acne, and weight shifts), and equips teenagers with confident, lifelong self-care habits.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we provide a warm, encouraging, and strictly confidential space for young girls and their parents. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, our practice ensures your daughter feels informed, respected, and empowered.
                </p>
                <p>
                  Every adolescent wellness session is conducted strictly by prior appointment in our tranquil clinic, ensuring an unhurried, private environment that eliminates waiting room anxiety.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Adolescent Wellness Consultation Today
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

        {/* === SECTION 2: Normal Milestones vs When to Seek Help === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Normal Pubertal Milestones vs. When to Seek Help" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Parents and teenagers often find it challenging to distinguish between normal developmental adjustments and symptoms requiring clinical evaluation.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Normal Milestones */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Normal Pubertal Milestones</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Expected Transitions &bull; Natural Maturation</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">First Period (Menarche)</span>
                      <p className="text-text text-[14px] leading-relaxed">Menstrual cycles begin naturally between ages 10 and 15 years.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Cycle Regularity</span>
                      <p className="text-text text-[14px] leading-relaxed">Cycles may fluctuate during the first 1 to 2 years post-menarche.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Skin &amp; Body Changes</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild occasional breakouts and normal body shape maturation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Cramp Intensity</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild, temporary pelvic cramps manageable with warmth or basic rest.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: When to Seek Help */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">When to Seek Clinical Care</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Clinical Anomalies &bull; Early Checkup</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">First Period (Menarche)</span>
                      <p className="text-text text-[14px] leading-relaxed">No menstrual bleeding by age 15, or lack of breast development by age 13.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Cycle Regularity</span>
                      <p className="text-text text-[14px] leading-relaxed">Cycles shorter than 21 days, longer than 45 days, or bleeding lasting &gt;7 days.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Skin &amp; Body Changes</span>
                      <p className="text-text text-[14px] leading-relaxed">Severe cystic acne, rapid weight gain, or excess facial/body hair (PCOS signs).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Cramp Intensity</span>
                      <p className="text-text text-[14px] leading-relaxed">Severe, debilitating pain that causes the student to miss school days regularly.</p>
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

        {/* === SECTION 3: Key Areas of Adolescent Wellness === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Areas of Adolescent Wellness" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical practice helps teenage girls navigate bodily, metabolic, and emotional transitions safely and with full confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {adolescentWellnessAreas.map((area, index) => {
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
                        {area.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {area.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {area.description}
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

        {/* === SECTION 4: Parent Preparation & Safety Guidelines === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Procedure Preparation &amp; Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Preparing with reassurance ensures your daughter feels comfortable, builds trust, and adopts healthy self-care strategies.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pubertal-counselling-prep.webp" 
                alt="Clean medical charts and checklist preparing for an adolescent wellness checkup" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parentGuidelines.map((card, index) => {
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

        {/* === SECTION 5: Adolescent Care Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Adolescent Care Journey Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A comforting, conversational pathway designed to make every young patient feel respected and confident.
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Pubertal Counselling?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Mentor-Like, Compassionate Approach</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) communicates in a warm, non-judgmental style that immediately dispels teenage hesitation.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Adolescent Health Expertise</strong>
                      <span className="text-white/80 text-[14px]">Extensive experience guiding young girls through pubertal maturation, menarche, teen PCOS, and HPV vaccination in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Scheduling</strong>
                      <span className="text-white/80 text-[14px]">Consultations are scheduled strictly by appointment in New Kalyani Nagar, ensuring zero lobby crowding and maximum comfort.</span>
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
