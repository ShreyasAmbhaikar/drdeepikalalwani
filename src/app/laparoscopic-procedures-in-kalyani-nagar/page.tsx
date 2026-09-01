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
  Crosshair, 
  Calendar, 
  Clock, 
  ClipboardList, 
  Shield, 
  Sparkles,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Laparoscopic Gynecologist in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Advanced gynecological laparoscopic keyhole surgeries by Dr. Deepika Lalwani (MBBS, DGO Mumbai, 10+ yrs exp) in Kalyani Nagar, Pune. Ovarian cyst, fibroid, endometriosis care.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/laparoscopic-procedures-in-kalyani-nagar/",
  }
};

export default function LaparoscopicProceduresPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Laparoscopic Procedures' },
  ];

  const treatableConditions = [
    { 
      title: "Ovarian Cystectomy", 
      description: "Precision microsurgical excision of benign, dermoid, or endometriotic cysts while preserving healthy ovarian cortical tissue to safeguard reproductive reserve.", 
      icon: <Crosshair className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Laparoscopic Myomectomy", 
      description: "Removal of symptomatic subserosal and intramural uterine fibroids causing pelvic pressure or menorrhagia, meticulously reconstructing the uterine myometrium.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Endometriosis Excision & Adhesiolysis", 
      description: "Carefully excising deep infiltrating pelvic endometriosis implants and freeing peritoneal adhesions to alleviate chronic menstrual pain and dyspareunia.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Diagnostic Laparoscopy & Dye Test", 
      description: "High-definition visual survey of the pelvic cavity paired with methylene blue chromotubation to definitively assess fallopian tube patency in unexplained infertility.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Pre-Operative Anesthetic Profiling", 
      description: "Mandatory blood profile (CBC, coagulation markers, viral screens), 12-lead ECG, and chest X-ray to establish complete anesthetic fitness.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Fasting & Bowel Preparation", 
      description: "Strict 6 to 8-hour nil-by-mouth protocol prior to general anesthesia, accompanied by gentle bowel cleansing to optimize pelvic visualization.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Post-Op Rest & Early Ambulation", 
      description: "Light walking within 6 to 12 hours post-surgery to disperse residual CO2 gas, followed by 3 to 7 days of restful recovery at home.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: General Anesthesia & Sub-Umbilical Port Entry',
      description: 'Under general anesthesia, a discreet 5 to 10 mm incision is made inside the natural crease of the navel (belly button).',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Carbon Dioxide (CO2) Insufflation',
      description: 'Medical-grade CO2 gas is introduced gently into the abdominal cavity, creating a dome-like workspace that separates the abdominal wall from internal organs.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: High-Definition Laparoscopic Camera Insertion',
      description: 'A miniature camera rod illuminates and magnifies the pelvic anatomy 10x to 15x on ultra-HD screens, providing unprecedented surgical clarity.',
      icon: <Crosshair className="w-5 h-5" />
    },
    {
      title: 'Step 4: Precision Micro-Surgical Intervention & Closure',
      description: 'Using 1 to 2 micro-ports (5mm), cysts or fibroids are dissected and removed. The gas is evacuated and incisions are closed with dissolvable cosmetic sutures.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the approximate cost of laparoscopic gynaecological surgery in Pune?",
      answer: "In Pune, diagnostic laparoscopy and chromotubation (for fertility assessment) typically ranges from ₹35,000 to ₹55,000 in daycare. Major operative laparoscopic procedures—such as ovarian cystectomy, laparoscopic myomectomy (fibroid removal), or total laparoscopic hysterectomy (TLH)—range from ₹55,000 to ₹1,10,000 depending on surgical complexity, hospital room category, and daycare vs. overnight hospital stay. Cashless medical insurance is accepted at all partner hospitals."
    },
    {
      question: "What are the primary clinical benefits of laparoscopic gynecological surgery over open surgery?",
      answer: "Laparoscopic (keyhole) surgery offers dramatically smaller incisions (5–10 mm vs. 10–15 cm), minimal blood loss, significantly less post-operative pain, lower infection risks, barely visible cosmetic scars, and a rapid recovery time of 3 to 7 days compared to 4 to 6 weeks for open surgery."
    },
    {
      question: "What gynecological conditions can be treated through laparoscopy?",
      answer: "Laparoscopy treats ovarian cysts (cystectomy), uterine fibroids (myomectomy), pelvic endometriosis, tubal blockages, ectopic pregnancies, adenomyosis, pelvic adhesions, and complete hysterectomy (TLH)."
    },
    {
      question: "Why do some patients feel shoulder tip pain after a laparoscopic procedure?",
      answer: "During keyhole surgery, carbon dioxide (CO2) is used to inflate the abdomen for clear visualization. Small amounts of residual gas can temporarily stimulate the diaphragmatic phrenic nerve, causing mild referred shoulder discomfort that resolves naturally within 24 to 48 hours."
    },
    {
      question: "How long does a patient need to stay in the hospital after laparoscopic surgery?",
      answer: "Most diagnostic and minor laparoscopic procedures are performed on a daycare basis, allowing you to return home the same day. For more complex surgeries like myomectomy or total laparoscopic hysterectomy, an overnight stay of 24 hours is standard."
    },
    {
      question: "Where are laparoscopic surgeries performed for patients of Dr. Deepika Lalwani's Clinic?",
      answer: "Pre-surgical planning, diagnostics, and post-operative reviews occur at our New Kalyani Nagar clinic. Surgeries are personally performed by Dr. Deepika Lalwani at premier partner tertiary hospital operating suites in Pune equipped with advanced HD laparoscopy towers."
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
        <PageHeader title="Laparoscopic Procedures" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/laparoscopy-procedures-indian.webp" 
                  alt="Dr. Deepika Lalwani Performing Minimally Invasive Laparoscopic Keyhole Surgery in Advanced OT" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What are Laparoscopic (Keyhole) Procedures?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Laparoscopic Surgery (Keyhole Surgery)</strong> represents the pinnacle of modern minimally invasive gynecological surgery. By inserting specialized micro-instruments and a high-definition illuminated camera through miniature incisions (5 to 10 mm), surgeons can treat complex pelvic conditions with microscopic precision while sparing abdominal muscles from large, painful cuts.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we specialize in advanced gynecological laparoscopy. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of surgical expertise</strong>, our keyhole surgical protocols treat ovarian cysts, uterine fibroids, and endometriosis with minimal tissue trauma and rapid recovery.
                </p>
                <p>
                  Pre-surgical counseling and comprehensive ultrasound evaluations take place in our private clinic. All surgical procedures are conducted by Dr. Deepika Lalwani personally at premier tertiary hospital operation theaters in Pune equipped with the latest high-definition laparoscopic towers.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Laparoscopy Consultation Today
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

        {/* === SECTION 2: Laparoscopic vs Open Surgery Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Laparoscopic vs. Traditional Open Surgery Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Whenever medically appropriate, Dr. Deepika Lalwani prioritizes keyhole laparoscopy over traditional laparotomy to ensure faster healing, minimal scarring, and lower clinical risks.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Laparoscopic Surgery */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Laparoscopic (Keyhole) Surgery</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Minimally Invasive &bull; Fast Recovery</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Incision Dimensions</span>
                      <p className="text-text text-[14px] leading-relaxed">Tiny keyhole cuts measuring just 0.5 cm to 1 cm hidden near the navel.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Hospital Stay</span>
                      <p className="text-text text-[14px] leading-relaxed">Daycare procedure or brief overnight stay (usually discharged in 24 hours).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Post-Operative Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Significantly reduced pain; abdominal muscle fibers are gently separated, not cut.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Return to light routines and office work in 3 to 7 days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Traditional Open Surgery */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Traditional Open Surgery</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Invasive Approach &bull; Prolonged Healing</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Incision Dimensions</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires a large 10 cm to 15 cm incision across the abdominal wall.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Hospital Stay</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 3 to 5 days of inpatient hospital admission.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Post-Operative Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher pain levels requiring strong intravenous analgesics and bed rest.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 4 to 6 weeks of resting for muscle layer healing.</p>
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

        {/* === SECTION 3: Treatable Conditions === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Gynecological Conditions Treated via Laparoscopy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our advanced keyhole surgical techniques address benign uterine and ovarian pathologies while preserving reproductive potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {treatableConditions.map((condition, index) => {
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

        {/* === SECTION 4: Preparation Guidelines === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Surgery Preparation &amp; Recovery Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Systematic pre-operative assessment ensures surgical safety and promotes rapid postoperative healing.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/laparoscopy-prep.webp" 
                alt="Safe recovery and pre-surgical guidelines for Laparoscopic procedures" 
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
                text="The Laparoscopic Surgical Journey Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured surgical roadmap from general anesthesia and CO2 insufflation to micro-port repair and cosmetic closure.
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Laparoscopic Surgery?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Senior Minimally Invasive Skill</strong>
                      <span className="text-white/80 text-[14px]">Extensive surgical track record successfully performing laparoscopic cystectomies, myomectomies, and tubal procedures across Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Equipped Advanced Hospital Theatres</strong>
                      <span className="text-white/80 text-[14px]">All surgical operations are personally conducted by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in leading tertiary centers with state-of-the-art HD towers.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Private Prior-Appointment Consultations</strong>
                      <span className="text-white/80 text-[14px]">Surgical evaluations, ultrasound checks, and post-op wound reviews are conducted strictly by prior appointment in New Kalyani Nagar.</span>
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
