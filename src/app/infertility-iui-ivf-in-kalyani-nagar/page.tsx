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
  Baby, 
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
  Calendar, 
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Infertility, IUI & IVF Support in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Consult Dr. Deepika Lalwani (MBBS, DGO Mumbai, 10+ yrs exp) for comprehensive female fertility evaluation, ovulation induction, IUI, and IVF support in Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/infertility-iui-ivf-in-kalyani-nagar/",
  }
};

export default function InfertilityIuiIvfPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Infertility, IUI & IVF' },
  ];

  const seekTreatmentData = [
    {
      title: "Irregular or Anovulatory Cycles",
      description: "Infrequent or absent menstruation, commonly driven by PCOS or hormonal imbalances, which makes calculating fertile windows challenging without medical guidance.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Endometriosis & Uterine Fibroids",
      description: "Structural or inflammatory pelvic conditions that impair egg release, distort fallopian architecture, or reduce endometrial receptivity for embryo implantation.",
      icon: <Stethoscope className="w-7 h-7" />
    },
    {
      title: "Diminished Ovarian Reserve (Low AMH)",
      description: "Age-related follicular decline or low Anti-Müllerian Hormone (AMH) levels requiring time-sensitive ovarian stimulation and proactive reproductive planning.",
      icon: <Activity className="w-7 h-7" />
    },
    {
      title: "Recurrent Early Pregnancy Loss",
      description: "Multiple miscarriages warranting thorough immunological, thrombophilia, uterine anatomical, and chromosomal evaluations before the next conception.",
      icon: <Heart className="w-7 h-7" />
    }
  ];

  const servicesStack = [
    {
      title: "Ovulation Induction & Follicular Tracking",
      description: "Using safe oral agents (Letrozole, Clomiphene) or gonadotropins paired with serial transvaginal ultrasound (TVS) scans to monitor follicle growth and pinpoint the exact rupture window.",
      icon: <Activity className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description: "A gentle outpatient procedure where high-motility washed sperm is placed directly into the uterine cavity during peak ovulation, bypassing cervical barriers to enhance natural fertilization.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Pre & Post-IVF Medical Support",
      description: "Endometrial priming, luteal phase hormonal support, and diagnostic tubal patency checks (HSG/HyCoSy) designed to maximize embryo implantation success for couples undergoing IVF.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const treatmentJourney = [
    {
      title: 'Step 1: Baseline Reproductive & Hormonal Evaluation',
      description: 'Comprehensive evaluation of ovarian reserve (AMH, Day 2 FSH/LH), semen analysis parameters, thyroid levels, and pelvic ultrasound to identify root causes.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Controlled Ovarian Stimulation',
      description: 'Customized low-dose fertility medications prescribed to stimulate the maturation of 1 to 2 dominant follicles without risking hyperstimulation.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: High-Resolution Follicular Tracking',
      description: 'Serial ultrasound scans monitor follicular diameter, endometrial lining thickness (triple-line pattern), and pelvic blood perfusion.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Timed Insemination (IUI) & Luteal Support',
      description: 'Triggering ovulation with hCG and performing precise, painless intrauterine insemination, followed by natural progesterone support to aid implantation.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Anti-Inflammatory Nutrition", description: "Consuming antioxidant-dense foods, Mediterranean-style whole grains, and healthy fats to support oocyte and sperm cellular health.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Targeted Fertility Micronutrients", description: "Taking CoQ10, Active Methylfolate, Vitamin D3, and Inositol under Dr. Deepika Lalwani's clinical guidance.", icon: <Sparkles className="w-6 h-6 text-accent" /> },
    { title: "Endocrine & Metabolic Harmony", description: "Stabilizing fasting insulin and thyroid markers (TSH < 2.5 mIU/L) to establish an optimal reproductive environment.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Stress Reduction & Gentle Yoga", description: "Practicing restorative breathwork and pelvic mobility yoga to reduce cortisol levels that interfere with the HPO axis.", icon: <Smile className="w-6 h-6 text-accent" /> },
    { title: "Open Consultation & Care Plan", description: "Transparent discussions regarding treatment timelines, success parameters, and gradual step-up approaches without rush.", icon: <BookOpen className="w-6 h-6 text-accent" /> }
  ];

  const faqs = [
    {
      question: "What is the typical cost of fertility treatments (IUI & IVF) in Pune?",
      answer: "In Pune, an initial fertility evaluation and consultation with Dr. Deepika Lalwani is ₹700 to ₹1,000. An Intrauterine Insemination (IUI) cycle—including ovarian stimulation monitoring, follicular tracking ultrasound scans, sperm preparation/washing, and in-clinic catheter insemination—ranges from ₹10,000 to ₹18,000 per cycle. For advanced cases requiring IVF/ICSI, standard treatment cycles in premier Pune partner fertility centres range from ₹1,20,000 to ₹1,80,000 (excluding individualized hormonal medications)."
    },
    {
      question: "What is the primary difference between IUI and IVF?",
      answer: "IUI (Intrauterine Insemination) is a minimally invasive, low-cost procedure where processed sperm is placed directly inside the uterus, allowing fertilization to occur naturally within the fallopian tubes. In contrast, IVF (In Vitro Fertilization) involves surgical egg retrieval, fertilization in an embryology laboratory, and transferring the resulting embryo into the uterus."
    },
    {
      question: "Is the IUI procedure painful and does it require anesthesia?",
      answer: "No. The IUI procedure is virtually painless, takes only 5 to 10 minutes in our clinic, and does not require any anesthesia. Most women describe the sensation as similar to a routine pelvic exam or Pap smear."
    },
    {
      question: "What is the typical success rate of an IUI cycle?",
      answer: "The average success rate of IUI ranges from 15% to 20% per cycle, depending on maternal age, ovarian reserve, tubal health, and sperm parameters. Doctors generally recommend 3 to 4 well-timed IUI cycles before considering advanced ART/IVF."
    },
    {
      question: "How does PCOS impact fertility and how is it managed at your clinic?",
      answer: "PCOS causes irregular or absent ovulation due to hormonal imbalances and insulin resistance. Under Dr. Deepika Lalwani's care, PCOS-related fertility challenges are treated with lifestyle modifications, insulin sensitizers, low-dose ovulation induction (Letrozole), and precise ultrasound follicular tracking."
    },
    {
      question: "What diagnostic tests are performed before starting fertility treatment?",
      answer: "Initial evaluations include Day 2/3 hormonal profiling, Anti-Müllerian Hormone (AMH) test, thyroid and prolactin checks, comprehensive Semen Analysis for the partner, pelvic baseline ultrasound, and a tubal patency evaluation (HSG or HyCoSy)."
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
        <PageHeader title="Infertility, IUI &amp; IVF Support" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/fertility-consultation-indian.webp" 
                  alt="Compassionate Fertility Consultation and IUI Support with Dr. Deepika Lalwani in Pune" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Infertility, IUI &amp; IVF Support?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  Infertility is medically defined as the inability to conceive naturally after 12 months of regular, unprotected intercourse (or after 6 months for women over 35). Modern reproductive medicine offers a tiered spectrum of solutions, beginning with ovulation tracking and minimally invasive <strong>Intrauterine Insemination (IUI)</strong>, extending to advanced <strong>In Vitro Fertilization (IVF)</strong> support when indicated.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we believe in a thoughtful, stepwise approach to fertility care. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, we prioritize identifying the precise root cause—whether anovulation, PCOS, tubal factors, or male parameters—before recommending treatment.
                </p>
                <p>
                  We avoid jumping prematurely to aggressive or costly procedures. Instead, we empower couples with clear diagnostic clarity, transparent treatment timelines, and compassionate one-on-one medical supervision at every cycle.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Fertility Consultation Today
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

        {/* === SECTION 2: When to Seek Treatment === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="When Should You Seek Female Fertility Evaluation?" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {seekTreatmentData.map((benefit, index) => {
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
                        {benefit.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {benefit.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FAF6FD" />
          </svg>
        </div>

        {/* === SECTION 3: IUI vs IVF Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="IUI vs. IVF: Understanding Your Treatment Options" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Understanding the mechanical, financial, and procedural differences between IUI and IVF helps you plan your fertility journey with clarity.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: IUI */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Intrauterine Insemination (IUI)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Minimally Invasive &bull; Natural Fertilization</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Concentrated, washed motile sperm is placed directly inside the uterine cavity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Fertilization Site</span>
                      <p className="text-text text-[14px] leading-relaxed">Occurs biologically inside the woman&apos;s natural fallopian tubes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Anesthesia / Invasiveness</span>
                      <p className="text-text text-[14px] leading-relaxed">Zero anesthesia needed; feels similar to a routine 5-minute pelvic exam.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Best Indication</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild male factor, cervical mucus hostility, PCOS anovulation, unexplained infertility.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: IVF */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">In Vitro Fertilization (IVF)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Advanced Embryology &bull; High Precision</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Eggs are retrieved from ovaries, fertilized in an embryology lab, and transferred as embryos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Fertilization Site</span>
                      <p className="text-text text-[14px] leading-relaxed">Occurs in vitro in a state-of-the-art incubation chamber (ICSI / standard IVF).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Anesthesia / Invasiveness</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires short sedation for ultrasound-guided transvaginal oocyte retrieval.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Best Indication</span>
                      <p className="text-text text-[14px] leading-relaxed">Bilateral tubal blockage, severe male factor (low count/motility), low AMH, failed IUI cycles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-gradient-to-b from-[#F5ECFA] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Comprehensive Services Stack === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Comprehensive Fertility Services" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We provide individualized reproductive support tailored to your unique hormonal, tubal, and metabolic profile.
            </p>
            <CardStack items={servicesStack} />
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FAF6FD" />
          </svg>
        </div>

        {/* === SECTION 5: Treatment Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="Your Fertility Treatment Journey Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured, ultrasound-guided clinical roadmap designed to optimize follicular growth and maximize conception rates.
              </p>
              <VerticalTimeline items={treatmentJourney} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-gradient-to-b from-[#F5ECFA] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Preparation Bento Grid === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for Your Fertility Treatment Cycle" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Optimizing reproductive cell quality through balanced lifestyle modifications significantly improves treatment outcomes.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg relative min-h-[300px] md:min-h-0 md:aspect-[21/9] w-full mb-8 group cursor-pointer border border-purple-100/60">
              <Image 
                src="/images/fertility-care.webp" 
                alt="Doctor pointing to ultrasound screen showing follicle study" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A0E44]/90 via-[#2A0E44]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Follicular Monitoring</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Digital ultrasound tracking precisely detects egg maturation to time insemination for maximum success.</p>
              </div>
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Infertility &amp; IUI Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Specialist Consultation at Every Visit</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Deepika Lalwani (MBBS, DGO Mumbai) directly, ensuring deep familiarity with your cycle dynamics without rotating clinical staff.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Reproductive &amp; Hormonal Acumen</strong>
                      <span className="text-white/80 text-[14px]">Extensive clinical track record managing complex PCOS/PCOD, poor ovarian reserve, unexplained infertility, and high-success IUI cycles in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Evidence-Based &amp; Ethical Step-Up Approach</strong>
                      <span className="text-white/80 text-[14px]">We prioritize simple, cost-effective therapies and lifestyle optimization before escalating to advanced assisted reproductive options.</span>
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
