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
  Apple, 
  BookOpen, 
  ClipboardList, 
  HeartPulse, 
  Smile, 
  Sparkles, 
  Calendar, 
  AlertCircle
} from 'lucide-react';

export const metadata = {
  title: "PCOD & PCOS Care in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Comprehensive PCOD & PCOS management, insulin resistance reversal, and hormonal balance care by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/pcod-pcos-care-in-kalyani-nagar/",
  }
};

export default function PcodCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'PCOD & PCOS Care' },
  ];

  const symptomsData = [
    {
      title: "Irregular or Anovulatory Periods",
      description: "Infrequent, delayed, or missed menstrual cycles resulting from disrupted follicular maturation and lack of monthly ovulation.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Stubborn Central Weight Gain",
      description: "Difficulty shedding weight, particularly visceral abdominal fat accumulation driven by hyperinsulinemia and cellular insulin resistance.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Hyperandrogenism & Cystic Acne",
      description: "Elevated androgen levels triggering persistent jawline cystic acne, seborrheic skin inflammation, and male-pattern scalp hair thinning.",
      icon: <AlertCircle className="w-7 h-7" />
    },
    {
      title: "Hirsutism & Facial Hair Growth",
      description: "Coarse, dark hair growth on the chin, upper lip, chest, or abdomen caused by luteinizing hormone (LH) and androgen elevation.",
      icon: <Activity className="w-7 h-7" />
    }
  ];

  const treatmentTimeline = [
    {
      title: 'Step 1: Endocrine & Metabolic Profiling',
      description: 'Comprehensive blood panels (LH/FSH ratio, Fasting Insulin, AMH, Thyroid, Prolactin, DHEA-S) and high-resolution pelvic ultrasound to evaluate polycystic ovarian morphology.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Low-Glycemic Indian Dietary Mapping',
      description: 'Designing customized, anti-inflammatory whole-food meal plans tailored for Indian households (millet-based, fiber-rich, low-GI) to eliminate post-meal insulin spikes.',
      icon: <Apple className="w-5 h-5" />
    },
    {
      title: 'Step 3: Targeted Resistance & Aerobic Fitness',
      description: 'Guiding strength training and structured aerobic routines (150+ minutes weekly) to recruit GLUT4 glucose transporters and restore skeletal muscle insulin sensitivity.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Evidence-Based Medical Regulation',
      description: 'Prescribing cycle regulators, Inositol therapy, or targeted ovulation induction (Letrozole) for patients actively planning conception.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Personalized Low-GI Nutrition", description: "Shifting to low-glycemic, anti-inflammatory whole meals to stabilize blood sugar and prevent reactive insulin surges.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Metabolic Strength Training", description: "Engaging in progressive resistance workouts to burn visceral fat stores and improve muscular glucose uptake.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Targeted Inositol & Supplements", description: "Utilizing clinical Myo-Inositol, D-Chiro Inositol, Vitamin D3, and Chromium under Dr. Deepika Lalwani's guidance.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Circadian Rhythm & Sleep Hygiene", description: "Optimizing sleep cycles to reduce elevated evening cortisol levels that aggravate insulin and androgen imbalance.", icon: <Clock className="w-6 h-6 text-accent" /> },
    { title: "Serial Hormonal & Follicular Audits", description: "Monitoring ultrasound follicular dynamics and periodic metabolic parameters to track clinical remission.", icon: <ClipboardList className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Metabolic Stabilization (Month 1 - 2)",
      description: "Fasting insulin levels stabilize, sugar cravings subside, and cellular energy improves as dietary and exercise interventions lower systemic inflammation.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Hormonal & Cycle Restoration (Month 3 - 6)",
      description: "Menstrual intervals normalize (28–35 days), natural spontaneous ovulation resumes, and androgenic skin breakouts visibly clear.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Sustained Remission & Fertility (Long-Term)",
      description: "Consistent lifestyle habits preserve metabolic wellness, protecting against long-term risks like prediabetes while securing effortless natural conception.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of PCOD and PCOS diagnosis and treatment in Pune?",
      answer: "In Pune, an initial PCOD/PCOS consultation and clinical evaluation with Dr. Deepika Lalwani is ₹600 to ₹800. A comprehensive hormonal and metabolic diagnostic panel (including AMH, LH, FSH, Fasting Insulin, Total Testosterone, DHEAS, and Thyroid Profile) typically ranges from ₹3,000 to ₹6,000 depending on required markers. A high-resolution pelvic ultrasound to assess ovarian follicle volume costs between ₹1,500 and ₹2,500."
    },
    {
      question: "What is the key physiological difference between PCOD and PCOS?",
      answer: "PCOD (Polycystic Ovarian Disease) is a localized condition where ovaries release partially mature eggs due to a temporary hormonal imbalance, largely manageable with lifestyle shifts. PCOS (Polycystic Ovarian Syndrome) is a broader metabolic and endocrine disorder involving high androgen levels and insulin resistance, requiring structured medical therapy alongside diet to prevent long-term complications."
    },
    {
      question: "Can women with PCOD or PCOS conceive naturally?",
      answer: "Yes, absolutely! While PCOS is a common cause of anovulatory infertility, natural conception is highly achievable. Under Dr. Deepika Lalwani's care, combining low-GI dietary corrections, modest weight loss, and low-dose ovulation induction (such as Letrozole) successfully restores regular ovulation in the vast majority of patients."
    },
    {
      question: "How does losing just 5% to 10% of body weight help PCOS symptoms?",
      answer: "Weight loss significantly reduces visceral fat and improves insulin receptor sensitivity. This triggers a sharp decline in circulating insulin, which in turn reduces ovarian androgen production, restores natural ovulation, regulates periods, and clears cystic acne."
    },
    {
      question: "Is it possible to completely cure PCOS permanently?",
      answer: "PCOS is a chronic metabolic tendency rather than an infection, meaning it cannot be 'cured' permanently with a short pill course. However, it can be put into complete, long-term remission through sustained lifestyle habits, balanced nutrition, and medical support, leaving you completely symptom-free."
    },
    {
      question: "How is PCOD/PCOS diagnosed at Dr. Deepika Lalwani's Clinic?",
      answer: "We follow the international Rotterdam diagnostic criteria, combining clinical symptom evaluation (cycle history, acne, hirsutism), high-resolution transvaginal pelvic ultrasound to check ovarian follicle patterns, and targeted hormone blood panels (FSH, LH, AMH, fasting insulin, and thyroid)."
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
        <PageHeader title="PCOD &amp; PCOS Care" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/pcod-consultation-indian.webp" 
                  alt="Dr. Deepika Lalwani Providing Personalized PCOD & PCOS Consultation to Indian Patient" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is PCOD &amp; PCOS Care?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Polycystic Ovarian Disease (PCOD)</strong> and <strong>Polycystic Ovarian Syndrome (PCOS)</strong> are prevalent endocrine and metabolic conditions affecting women during their reproductive years. Driven by insulin resistance and hormonal dysregulation, the ovaries develop multiple immature follicles (cysts), impairing normal ovulation and resulting in irregular periods, stubborn weight gain, acne, hirsutism, and fertility delays.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we reject superficial symptom suppression. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of hormonal and reproductive expertise</strong>, our clinical approach targets the foundational root cause: hyperinsulinemia, chronic low-grade inflammation, and ovarian androgen excess.
                </p>
                <p>
                  In our private, tranquil clinic, every patient receives a personalized metabolic roadmap combining tailored Indian dietary plans, exercise prescriptions, and targeted medical therapies to restore regular cycles and natural ovulatory fertility.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your PCOD/PCOS Consultation Today
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

        {/* === SECTION 2: PCOD vs PCOS Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="PCOD vs. PCOS: Understanding the Key Differences" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Although frequently used interchangeably, PCOD and PCOS have distinct clinical severities and metabolic impacts.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: PCOD */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Polycystic Ovarian Disease (PCOD)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Hormonal Imbalance &bull; Lifestyle Reversible</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Condition Nature</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild hormonal imbalance causing ovaries to produce immature eggs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Severity &amp; Scope</span>
                      <p className="text-text text-[14px] leading-relaxed">Considered less severe; limited primarily to the ovaries with minimal systemic risk.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Women often continue ovulating and conceive easily with basic lifestyle adjustments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Management Approach</span>
                      <p className="text-text text-[14px] leading-relaxed">Successfully managed through balanced nutrition, exercise, and stress regulation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: PCOS */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Polycystic Ovarian Syndrome (PCOS)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Endocrine &amp; Metabolic Disorder</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Condition Nature</span>
                      <p className="text-text text-[14px] leading-relaxed">Complex metabolic disorder driven by insulin resistance and androgen excess.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Severity &amp; Scope</span>
                      <p className="text-text text-[14px] leading-relaxed">More severe; linked to elevated risk of prediabetes, dyslipidemia, and metabolic strain.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Leading cause of anovulatory cycles; requires targeted ovulation induction protocols.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Management Approach</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires medical management, insulin sensitizers (Inositol/Metformin), and active lifestyle resets.</p>
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

        {/* === SECTION 3: Common Symptoms Grid === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Common Symptoms &amp; Clinical Indicators" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {symptomsData.map((symptom, index) => {
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
                        {symptom.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {symptom.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {symptom.description}
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

        {/* === SECTION 4: Treatment Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="Our Holistic PCOD/PCOS Treatment Pathway" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured, evidence-based roadmap focused on restoring metabolic insulin sensitivity and spontaneous ovulatory rhythm.
              </p>
              <VerticalTimeline items={treatmentTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FAF6FD" />
          </svg>
        </div>

        {/* === SECTION 5: Lifestyle Shifts & Metabolic Guidelines === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Lifestyle Shifts &amp; Metabolic Support" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Sustained metabolic resets correct the endocrine cascade and yield permanent clinical results.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pcod-prep.webp" 
                alt="PCOS Holistic Lifestyle Shifts and Metabolic Support Diagram" 
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

        {/* === Wave Divider 5 === */}
        <div className="bg-gradient-to-b from-[#F5ECFA] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Treatment Milestones === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Expected Treatment &amp; Recovery Milestones" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Hormonal balance returns progressively. Here is what you can anticipate during your metabolic reset under Dr. Deepika Lalwani&apos;s guidance.
            </p>
            <CardStack items={recoveryCards} />
          </div>
        </section>

        {/* === Wave Divider 6 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FAF6FD" />
          </svg>
        </div>

        {/* === SECTION 7: Doctor Credentials & FAQs === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">
            
            {/* Why Choose Doctor Card */}
            <div className="gradient-dark-section text-white rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[24px] md:text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for PCOD &amp; PCOS Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Root-Cause Metabolic Reset Strategy</strong>
                      <span className="text-white/80 text-[14px]">Addressing underlying hyperinsulinemia and hormonal cascades rather than relying on short-term contraceptive pill band-aids.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Endocrine &amp; Ovulation Acumen</strong>
                      <span className="text-white/80 text-[14px]">Expert guidance from Dr. Deepika Lalwani (MBBS, DGO Mumbai) tailoring follicle tracking and fertility restoration in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Practical Indian Household Nutrition Plans</strong>
                      <span className="text-white/80 text-[14px]">Providing practical low-GI dietary structures and exercise plans easily integrated into busy daily Indian routines.</span>
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
