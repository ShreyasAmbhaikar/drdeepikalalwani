import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import { Button } from '@/components/ui/Button';
import CardStack from '@/components/ui/CardStack';
import { 
  Heart, 
  CheckCircle, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Home, 
  Shield, 
  Stethoscope, 
  BookOpen, 
  ClipboardList, 
  HeartPulse, 
  Smile, 
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Scarless Hysterectomy (NDVH) in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Advanced scarless Non-Descent Vaginal Hysterectomy (NDVH) with zero abdominal cuts by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Kalyani Nagar, Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/scarless-hysterectomy-in-kalyani-nagar/",
  }
};

export default function ScarlessHysterectomyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Scarless Hysterectomy' },
  ];

  const procedureTimeline = [
    {
      title: 'Step 1: Diagnostic Assessment & Uterine Mapping',
      description: 'High-resolution transvaginal ultrasound (TVS) evaluates uterine size, fibroid location, and pelvic mobility to ensure safe vaginal extraction feasibility.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Anesthesia & Natural Internal Entry',
      description: 'Under regional spinal or general anesthesia, a discreet circumferential incision is made at the top of the vaginal fornix surrounding the cervix.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Uterine Vessel Ligation & Devascularization',
      description: 'The uterine arteries and cardinal-uterosacral ligament complexes are securely clamped, ligated, and divided with zero abdominal penetration.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Specimen Delivery & Vaginal Vault Reconstruction',
      description: 'The uterus is gently delivered through the vaginal canal (using internal debulking if enlarged), followed by anatomic closure of the vaginal vault using dissolvable sutures.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Pre-Anesthetic Clearance", description: "Completing comprehensive blood investigations, kidney profiles, coagulation screen, and 2D-Echo/ECG checks.", icon: <ClipboardList className="w-6 h-6 text-accent" /> },
    { title: "Fasting & Cleansing Protocol", description: "Strict 8-hour nil-by-mouth fasting accompanied by safe preoperative bowel preparation for optimal pelvic exposure.", icon: <Clock className="w-6 h-6 text-accent" /> },
    { title: "Personal Essentials Packing", description: "Pack comfortable loose cotton garments, high-absorbency sanitary pads, and toiletries for a 24 to 48-hour hospital stay.", icon: <Home className="w-6 h-6 text-accent" /> },
    { title: "Medication Adjustment", description: "Reviewing daily prescriptions with Dr. Deepika Lalwani to pause blood thinners or optimize diabetic and thyroid regimens.", icon: <BookOpen className="w-6 h-6 text-accent" /> },
    { title: "At-Home Rest Planning", description: "Arranging family support for meal prep and household assistance during the initial 1 to 2 weeks of recovery.", icon: <Smile className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Immediate Hospital Recovery (Day 1 - 2)",
      description: "Mild pelvic pressure is managed with gentle oral analgesics. Patients are encouraged to ambulate within 12 to 24 hours, with discharge typically occurring on Day 2.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Early Home Convalescence (Week 2 - 3)",
      description: "Normal household light activities resume. Avoid heavy lifting (>5 kg), intense straining, or constipation by maintaining high dietary fiber and hydration.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Complete Tissue Healing (Week 4 - 6)",
      description: "The vaginal vault suture line heals completely. Dr. Deepika conducts a follow-up review before clearing you for intercourse, exercise, and full physical activity.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of a Scarless Hysterectomy (NDVH) in Pune?",
      answer: "In Pune, a Scarless Non-Descent Vaginal Hysterectomy (NDVH) surgical package generally ranges from ₹60,000 to ₹1,05,000 in premier partner tertiary hospitals. This comprehensive package includes 24 to 48 hours of hospital stay, operation theatre charges, gynaecological surgeon and anesthesiologist fees, nursing care, and standard post-operative medications. The procedure is fully eligible for cashless medical insurance and corporate health policies."
    },
    {
      question: "What is a Scarless Hysterectomy (NDVH) and why is it called scarless?",
      answer: "Non-Descent Vaginal Hysterectomy (NDVH) is a surgical technique where the diseased uterus is removed entirely through the natural vaginal opening. Because there are zero incisions on the abdominal skin, there are no visible external scars, resulting in superior cosmetic outcomes and less abdominal pain."
    },
    {
      question: "How does NDVH differ from a Laparoscopic Hysterectomy (TLH)?",
      answer: "While Laparoscopic Hysterectomy (TLH) is minimally invasive, it still requires 3 to 4 small keyhole incisions on your abdomen. NDVH is performed entirely through the natural vaginal canal, requiring zero abdominal cuts, minimal equipment trauma, and providing an even faster return to daily mobility."
    },
    {
      question: "Can NDVH be performed if my uterus is enlarged with fibroids?",
      answer: "Yes, in many cases. Dr. Deepika Lalwani utilizes specialized surgical reduction techniques such as bisection, myomectomy, and morcellation to safely debulk and extract enlarged fibroid uteri (up to 12-14 weeks size) through the vaginal pathway without abdominal cuts."
    },
    {
      question: "Will having a hysterectomy cause sudden menopause?",
      answer: "No, not if your ovaries are preserved. In non-cancerous conditions, healthy ovaries are left intact. They continue producing natural estrogen and progesterone, preventing premature surgical menopause. You will simply stop having menstrual bleeding."
    },
    {
      question: "What is the typical hospital stay and recovery time after a scarless hysterectomy?",
      answer: "Most patients stay in the hospital for 24 to 48 hours. Because abdominal muscles are not cut, postoperative pain is low and most women walk comfortably within a day, returning to light work within 2 to 3 weeks."
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
        <PageHeader title="Scarless Hysterectomy (NDVH)" breadcrumbs={breadcrumbs} bgImage="/images/scarless-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[2.2/1] w-full max-h-[420px] bg-white p-4 border border-purple-100/60 group">
                <Image 
                  src="/images/scarless-prep.webp" 
                  alt="Non-Descent Vaginal Hysterectomy (NDVH) Scarless Uterus Removal Pelvic Anatomy Diagram" 
                  fill
                  className="object-contain group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Scarless Hysterectomy (NDVH)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Scarless Hysterectomy</strong>, medically known as <strong>Non-Descent Vaginal Hysterectomy (NDVH)</strong>, represents the most natural and minimally invasive method for removing the uterus. By performing the entire surgery through the natural vaginal canal, it completely avoids any abdominal incisions, delivering zero external scarring, significantly reduced postoperative pain, and an exceptionally swift recovery.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we specialize in NDVH for benign conditions including heavy menstrual bleeding (AUB), adenomyosis, and uterine fibroids. With over <strong>10+ years of advanced surgical experience</strong>, <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> evaluates each patient meticulously to deliver safe, incision-free surgical solutions.
                </p>
                <p>
                  All surgical procedures are conducted in partner premier tertiary hospital operating suites in Pune, featuring modern surgical instrumentation, dedicated anesthesia teams, and round-the-clock nursing care.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Hysterectomy Consultation Today
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

        {/* === SECTION 2: NDVH vs Abdominal Hysterectomy Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Scarless Vaginal vs. Open Abdominal Hysterectomy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Global gynaecological guidelines endorse vaginal hysterectomy as the gold standard approach whenever feasible due to its unmatched safety profile.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Scarless Hysterectomy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#F6F1FF] text-[#2A1650] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Scarless (Vaginal) Hysterectomy</h4>
                  <p className="text-[13px] text-[#4A3270] font-semibold uppercase tracking-wider">Zero Cuts &bull; Rapid Healing &bull; Minimal Pain</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Abdominal Cuts</span>
                      <p className="text-text text-[14px] leading-relaxed">Zero external cuts; 100% scar-free cosmetic outcome on the abdomen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Postoperative Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild pelvic cramping easily controlled with mild oral analgesics.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Short hospital stay of 24 to 48 hours with early walking on Day 1.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Return to normal light routines and desk jobs in 2 to 3 weeks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Open Abdominal Hysterectomy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Open Abdominal Hysterectomy</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Traditional Cut &bull; Prolonged Bed Rest</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Abdominal Cuts</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires a large 5 to 7-inch incision across lower abdominal muscles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Postoperative Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Significant abdominal wall soreness requiring strong injectable pain relief.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 3 to 5 days of inpatient hospital observation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 6 to 8 weeks for complete abdominal muscle healing.</p>
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

        {/* === SECTION 3: Surgical Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Scarless Hysterectomy (NDVH) Surgical Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A seamless internal surgical process that delivers safe removal of the uterus without abdominal trauma.
              </p>
              <VerticalTimeline items={procedureTimeline} />
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
              text="Preparing for a Safe Scarless Hysterectomy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Follow these preoperative steps to ensure an uncomplicated procedure and smooth postoperative healing.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/scarless-overview.webp" 
                alt="Hysterectomy Incision Site Comparison - Abdominal vs Laparoscopic vs Vaginal NDVH" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preparationCards.map((card, index) => {
                const prepColors = [
                  { bg: 'bg-[#FDE8EC]', num: 'text-[#E8475F]', iconBg: 'bg-[#F9CDD5]' },
                  { bg: 'bg-[#FFF3E0]', num: 'text-[#F5A623]', iconBg: 'bg-[#FFE0B2]' },
                  { bg: 'bg-[#E8F5E9]', num: 'text-[#4CAF50]', iconBg: 'bg-[#C8E6C9]' },
                  { bg: 'bg-[#EDE7F6]', num: 'text-[#7C4DFF]', iconBg: 'bg-[#D1C4E9]' },
                  { bg: 'bg-[#E3F2FD]', num: 'text-[#2196F3]', iconBg: 'bg-[#BBDEFB]' },
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

        {/* === SECTION 5: Post-Operative Recovery Stages === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Post-Operative Recovery Milestones" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Recovery from a scarless vaginal hysterectomy is remarkably smooth, with structured milestones to guide your return to full health.
            </p>
            <CardStack items={recoveryCards} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Scarless Hysterectomy?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Advanced Vaginal Surgical Mastery</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) specializes in non-descent vaginal surgery, achieving scarless results even in challenging enlarged uterine cases.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Organ Preservation &amp; Hormonal Balance</strong>
                      <span className="text-white/80 text-[14px]">Healthy ovaries are preserved whenever clinically indicated, protecting you from abrupt surgical menopause and maintaining natural bone and heart vitality.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Tertiary Hospital Theatre Care</strong>
                      <span className="text-white/80 text-[14px]">Surgeries are personally performed by Dr. Deepika Lalwani in premier partner tertiary hospitals with dedicated sterile post-op monitoring.</span>
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
