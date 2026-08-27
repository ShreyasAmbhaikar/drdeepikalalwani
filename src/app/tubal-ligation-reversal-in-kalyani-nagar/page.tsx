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
  Scissors, 
  Calendar, 
  Clock, 
  ClipboardList, 
  Shield, 
  Sparkles,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Tubal Ligation & Tubal Reversal in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Laparoscopic tubal ligation (tubectomy) and microsurgical tubal re-anastomosis by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Kalyani Nagar, Pune.",
  alternates: {
    canonical: '/tubal-ligation-reversal-in-kalyani-nagar/',
  }
};

export default function TubalLigationPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tubal Ligation & Reversal' },
  ];

  const reversalFactors = [
    { 
      title: "Original Sterilization Technique", 
      description: "Tubes occluded with mechanical clips (Hulka/Filshie) or silicone rings preserve the most fallopian tissue, offering the highest reversal success compared to cauterization.", 
      icon: <Scissors className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Remaining Fallopian Tube Length", 
      description: "For successful microsurgical re-anastomosis, at least 4 cm of healthy, well-vascularized fallopian tube must remain on at least one side for active egg transport.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Maternal Age & Ovarian Reserve", 
      description: "Maternal age and Anti-Müllerian Hormone (AMH) levels directly govern oocyte quality. Highest conception rates occur in women under 35 with confirmed regular ovulation.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Partner Semen Parameters", 
      description: "A comprehensive baseline semen analysis is mandatory prior to surgery to confirm that natural conception is biologically feasible post-reversal.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Diagnostic HSG & Operative Records", 
      description: "Retrieving original surgical discharge notes and performing a hysterosalpingogram (HSG dye test) to measure proximal tube stumps and confirm uterine health.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pre-Anesthetic Fitness Clearance", 
      description: "Completing comprehensive blood tests, ECG, chest radiography, and pre-anesthetic checkups for general anesthesia in a sterile hospital suite.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Post-Operative Recovery Plan", 
      description: "Resting for 7 to 10 days at home, avoiding lifting objects >5 kg, and keeping the mini-laparotomy dressing clean and dry to ensure smooth healing.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: Clinical Evaluation & Candidate Assessment',
      description: 'In-depth review of sterilization history, transvaginal pelvic ultrasound, ovarian reserve testing (AMH), and partner semen evaluation with Dr. Deepika Lalwani.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Anesthesia & Mini-Laparotomy Access',
      description: 'Under general anesthesia in a sterile operating theatre, a discreet 4 to 6 cm horizontal mini-laparotomy incision is placed just along the bikini line.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Microsurgical Re-anastomosis',
      description: 'Using high-magnification surgical loupes/microscopes and ultra-fine 6-0/7-0 sutures, Dr. Deepika meticulously re-aligns the mucosal and muscular layers of the fallopian tubes.',
      icon: <Scissors className="w-5 h-5" />
    },
    {
      title: 'Step 4: Intraoperative Dye Patency Check & Closure',
      description: 'Methylene blue dye is flushed through the uterus (chromotubation) to confirm leak-free bilateral patency before layered anatomical closure with cosmetic sutures.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of tubal ligation and tubal reversal in Pune?",
      answer: "In Pune, laparoscopic tubal ligation (permanent female sterilization) typically ranges from ₹25,000 to ₹45,000 as a daycare procedure. Microsurgical tubal reversal (tubal re-anastomosis reconstruction under operating microscope) ranges from ₹65,000 to ₹1,15,000 in premier partner hospitals, including 1 to 2 days of hospital stay, specialized microsurgical equipment, anesthesia, and surgeon charges."
    },
    {
      question: "What is the difference between tubal ligation and tubal reversal?",
      answer: "Tubal ligation (tubectomy) is a permanent contraception procedure where the fallopian tubes are clipped, tied, or sealed to prevent pregnancy. Tubal reversal (microsurgical re-anastomosis) is a delicate reconstructive surgery that removes the blocked scar tissue and reconnects the healthy tube ends to restore natural fertility."
    },
    {
      question: "What is the pregnancy success rate following a tubal reversal surgery?",
      answer: "Pregnancy success rates after tubal reversal range from 40% to 75%. Key determinants include maternal age (highest under 35), remaining healthy fallopian tube length (ideally >4 cm), the original sterilization method used, and normal partner semen parameters."
    },
    {
      question: "Is tubal reversal or IVF better after having had a tubectomy?",
      answer: "Both are effective options. Tubal reversal allows couples to conceive naturally every month without repeated medical cycles, making it cost-effective if the woman is under 35 with adequate tube length. IVF is preferred if the tubes are severely shortened, the woman is over 38, or severe male factor infertility exists."
    },
    {
      question: "How long is the hospital stay and recovery period for tubal ligation vs. reversal?",
      answer: "Laparoscopic tubal ligation is performed as a daycare procedure with recovery in 3 to 5 days. Microsurgical tubal reversal involves a 24 to 48-hour hospital observation, with return to normal light activities within 1 to 2 weeks."
    },
    {
      question: "Where are tubal ligation and reversal procedures performed for your patients?",
      answer: "Consultations and pre-surgical evaluations occur at our New Kalyani Nagar clinic. Surgeries are personally performed by Dr. Deepika Lalwani at partner premier tertiary hospital operating theatres in Pune equipped with microsurgical instruments."
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
        <PageHeader title="Tubal Ligation &amp; Reversal" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/laparoscopy-procedures-indian.webp" 
                  alt="Dr. Deepika Lalwani Performing Microsurgical Tubal Ligation & Reversal in Advanced Operation Theater" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Tubal Ligation &amp; Reversal?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Tubal Ligation (Tubectomy)</strong> is a safe, permanent form of female sterilization for women who have completed their family. In contrast, <strong>Tubal Reversal (Microsurgical Tubal Re-anastomosis)</strong> is a delicate reconstructive procedure that re-opens and reconnects previously ligated fallopian tubes, restoring the natural biological pathway for sperm and egg fertilization.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we support women across every phase of family planning. With over <strong>10+ years of clinical and microsurgical experience</strong>, <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> provides daycare laparoscopic sterilization as well as high-precision tubal reversals for women seeking to conceive naturally again.
                </p>
                <p>
                  Initial consultations, tubal length feasibility audits, and partner evaluations take place in our private clinic. Reconstructive surgical procedures are personally conducted by Dr. Deepika Lalwani in state-of-the-art partner tertiary hospital operating suites in Pune.
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

        {/* === SECTION 2: Tubal Ligation vs Reversal Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Tubal Ligation vs. Tubal Reversal Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              While tubal ligation is a brief procedure to permanently occlude the tubes, reversal is a delicate microsurgery that precisely joins them back together.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Tubal Ligation */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Tubal Ligation (Tubectomy)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Permanent Sterilization &bull; Contraception</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Purpose</span>
                      <p className="text-text text-[14px] leading-relaxed">Permanent, highly reliable birth control preventing future pregnancy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Quick laparoscopic procedure taking 20 to 30 minutes to complete.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Surgical Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Fallopian tubes are tied, clipped, or sealed using medical rings or bipolar energy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Efficacy Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Over 99.5% effective; patients return home the same day (daycare basis).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Tubal Reversal */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Tubal Ligation Reversal</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Fertility Reconstruction &bull; Re-anastomosis</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Purpose</span>
                      <p className="text-text text-[14px] leading-relaxed">Reconstruct fallopian tube patency to restore natural monthly conception.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Delicate microsurgery requiring 2 to 3 hours of high-magnification suturing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Surgical Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Excising scarred segments and re-approximating luminal layers with 6-0/7-0 sutures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Efficacy Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Success averages 40% to 75% depending on tube length, method, and maternal age.</p>
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

        {/* === SECTION 3: Key Factors for Success === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Factors Influencing Reversal Success" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We conduct a rigorous pre-surgical audit of these indicators to give every couple a realistic, transparent prognosis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {reversalFactors.map((factor, index) => {
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
                        {factor.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {factor.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {factor.description}
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
              text="Our Pre-Surgery Preparation &amp; Recovery Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Follow these essential surgical preparation steps to promote optimal tissue healing and patency.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/tubal-ligation-prep.webp" 
                alt="Safe recovery and fertility guidelines after Tubal Reversal microsurgery" 
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

        {/* === SECTION 5: Surgical Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Reversal Microsurgery Journey Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured surgical roadmap from pre-operative dye verification to high-magnification layer-by-layer micro-suturing.
              </p>
              <VerticalTimeline items={processTimeline} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Tubal Surgery?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Microsurgical Precision &amp; Tubal Experience</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) specializes in high-magnification fallopian re-anastomosis with meticulous luminal alignment.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Comprehensive Family Planning Acumen</strong>
                      <span className="text-white/80 text-[14px]">Expertise spanning both daycare laparoscopic sterilization and complex fertility-restoration microsurgeries in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Confidentiality</strong>
                      <span className="text-white/80 text-[14px]">All consultations, ultrasound examinations, and surgical post-op checks are scheduled privately in New Kalyani Nagar.</span>
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
