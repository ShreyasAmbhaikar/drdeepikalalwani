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
  Smile,
  HeartPulse
} from 'lucide-react';

export const metadata = {
  title: "Lactational Counselling & Breastfeeding Support in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Get compassionate breastfeeding support and lactational counselling in Kalyani Nagar, Pune by Dr. Deepika Lalwani (MBBS, DGO Mumbai). Latch correction, low milk supply, mastitis care.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/lactational-counselling-in-kalyani-nagar/",
  }
};

export default function LactationalCounsellingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Lactational Counselling' },
  ];

  const lactationServices = [
    { 
      title: "Hands-On Latch & Positioning Coaching", 
      description: "Step-by-step guidance on ergonomic body holds (cross-cradle, football hold, side-lying) and deep asymmetric latch techniques to eliminate nipple trauma.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Milk Supply & Volume Management", 
      description: "Formulating clinical protocols to stimulate prolactin and oxytocin reflexes, boost low milk supply, and monitor newborn hydration and weight velocity.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Engorgement, Blocked Ducts & Mastitis", 
      description: "Rapid clinical relief for painful breast engorgement, clearing blocked lactiferous ducts, and prescribing lactation-compatible therapies for mastitis.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pumping & Return-to-Work Blueprint", 
      description: "Empowering working mothers with customized breast pump selection, sterile expressing schedules, and CDC-approved breast milk storage protocols.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const safetyGuidelines = [
    { 
      title: "Feeding Demand & Frequency Rules", 
      description: "Lactation operates strictly on supply-and-demand physiology. Nurse or express every 2 to 3 hours in the early weeks to establish robust prolactin receptor pathways.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Maternal Hydration & Galactagogues", 
      description: "Maintain 3 to 3.5 liters of daily fluid intake alongside doctor-approved dietary galactagogues (fennel, fenugreek, garlic, cumin, oats) to sustain volume.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Sterile Milk Expressing & Storage", 
      description: "Store expressed milk at room temperature up to 4 hours, in a refrigerator for up to 4 days, or deep frozen for 3 to 6 months in BPA-free containers.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: Comprehensive Feeding & Postpartum History',
      description: 'Dr. Deepika Lalwani conducts a detailed review of labor history, feeding frequency, wet/dirty diaper counts, newborn weight trends, and maternal pain symptoms.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Infant Oral Anatomy & Movement Assessment',
      description: 'Gentle clinical examination of the baby\'s lips, palate, and sublingual frenulum to rule out anatomical latch hindrances such as ankyloglossia (tongue-tie).',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Live Feeding Observation & Diagnosis',
      description: 'Observing an active nursing session to assess maternal posture, infant head tilt, areola coverage, and swallowing rhythm (suck-swallow-breathe coordination).',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Corrective Technique Coaching & Plan',
      description: 'Hands-on practice to establish an asymmetric latch, nipple healing strategies with lanolin/expressed colostrum, and a customized nutrition schedule.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of a lactational counselling session in Pune?",
      answer: "In Pune, an in-depth, one-on-one in-clinic lactation and latch evaluation session (45 to 60 minutes) with a specialist gynaecologist ranges from ₹800 to ₹1,500. This includes real-time feeding observation, corrective latch training, engorgement relief protocols, and customized dietary advice. Follow-up reviews typically range between ₹500 and ₹800."
    },
    {
      question: "What is lactational counselling and when should a new mother seek help?",
      answer: "Lactational counselling is clinical guidance provided by a medical professional to help mothers establish and maintain pain-free, nutritionally adequate breastfeeding. You should seek counselling if you experience severe nipple pain, latching struggles, breast engorgement, concerns about low milk supply, or poor infant weight gain."
    },
    {
      question: "How do I know if my baby has achieved a proper, deep latch?",
      answer: "A proper latch is comfortable and pain-free for the mother. The baby's mouth will be wide open with both upper and lower lips flared outward like fish lips, their chin firmly touching the breast, covering more of the lower areola than the top, with audible, rhythmic swallowing sounds."
    },
    {
      question: "What can I do to naturally increase low breast milk supply?",
      answer: "Milk production increases with frequent, thorough breast emptying (nursing or pumping every 2 to 3 hours). Ensure ample hydration (3+ liters of water daily), adequate sleep, skin-to-skin contact, and incorporating traditional galactagogues like fenugreek and fennel. Dr. Deepika Lalwani can prescribe safe lactation medications if clinically indicated."
    },
    {
      question: "How are blocked milk ducts and mastitis treated at the clinic?",
      answer: "Blocked ducts are treated with warm compresses before feeding, gentle lymphatic massage towards the nipple during nursing, and frequent feeding on the affected breast. If fever, red streaks, or body chills develop (mastitis), Dr. Deepika prescribes safe, lactation-compatible antibiotics and analgesics."
    },
    {
      question: "Can I bring my newborn along for a private lactation consultation?",
      answer: "Yes, absolutely! Having your baby present allows Dr. Deepika Lalwani to observe a live feeding session and guide you through real-time corrective positioning. Consultations are scheduled strictly by prior appointment in a calm, highly sterilized environment in New Kalyani Nagar."
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
        <PageHeader title="Lactational Counselling" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-purple-100/60 group">
                <Image 
                  src="/images/lactational-overview.webp" 
                  alt="Mother holding infant close in a supportive, private lactational counselling session" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Lactational Counselling &amp; Breastfeeding Support?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Lactational Counselling</strong> is specialized clinical guidance and physical coaching provided to new mothers to establish, optimize, and sustain a pain-free, nourishing breastfeeding journey. Breastfeeding is a natural biological process, but it is also a learned skill for both mother and infant that often requires clinical troubleshooting.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we believe no mother should navigate postpartum feeding challenges in pain or isolation. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of clinical experience</strong>, we provide compassionate, hands-on coaching to correct latch mechanics, resolve low supply concerns, and treat painful conditions like mastitis.
                </p>
                <p>
                  Our private clinic provides a serene, highly sterilized environment where you and your baby receive unhurried, one-on-one attention without the stress or exposure of crowded hospital waiting rooms.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Lactation Consultation Today
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

        {/* === SECTION 2: Latch Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Normal Healthy Latch vs. Poor Latch: What Every Mother Should Know" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              An improper latch is the primary reason for painful nursing, cracked nipples, and inadequate infant weight gain. Learn to spot the key differences.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Normal Healthy Latch */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Normal Healthy Latch</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Pain-Free &bull; Rhythmic Swallowing</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Maternal Sensation</span>
                      <p className="text-text text-[14px] leading-relaxed">A gentle, firm pulling sensation on the breast tissue; entirely comfortable and pain-free.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Baby Mouth Flare</span>
                      <p className="text-text text-[14px] leading-relaxed">Mouth wide open (140&deg;+ angle); lips are visibly flared outward like a fish.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Areola Coverage</span>
                      <p className="text-text text-[14px] leading-relaxed">More of the lower areola is deeply grasped into the mouth than the top portion.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Post-Feed Nipple</span>
                      <p className="text-text text-[14px] leading-relaxed">Nipple emerges rounded, cylindrical, and elongated without flattening or pinching.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Poor Latch */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Poor Latch (Needs Correction)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Pinching Pain &bull; Inefficient Milk Transfer</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Maternal Sensation</span>
                      <p className="text-text text-[14px] leading-relaxed">Sharp, pinching, or burning pain throughout the entire nursing session.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Baby Mouth Flare</span>
                      <p className="text-text text-[14px] leading-relaxed">Lips curled inward; baby chomps or bites directly on the sensitive nipple tissue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Areola Coverage</span>
                      <p className="text-text text-[14px] leading-relaxed">Baby is shallowly sucking only on the nipple tip, missing the underlying milk sinuses.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Post-Feed Nipple</span>
                      <p className="text-text text-[14px] leading-relaxed">Nipple appears squished, blanched white, or flattened like a brand-new lipstick.</p>
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

        {/* === SECTION 3: Key Lactation Services === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Our Clinical Lactation Support Services" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We provide gentle, evidence-based post-natal guidance to help you nurse comfortably and nourish your baby with confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {lactationServices.map((service, index) => {
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

        {/* === SECTION 4: Preparation Guidelines === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Safe Lactation Guidelines &amp; Storage Rules" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Follow these foundational principles to maintain a strong milk supply and protect your infant with safe milk hygiene.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/lactational-prep.webp" 
                alt="Postpartum maternal guidance charts and clean infant nutrition checklist displays" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyGuidelines.map((card, index) => {
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

        {/* === SECTION 5: Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="Our Clinical Lactation Assessment &amp; Coaching Process" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A hands-on, encouraging roadmap to help you overcome latch obstacles and establish an effortless feeding bond with your newborn.
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Lactation Care?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Empathetic, Postpartum-Focused Coaching</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) conducts sessions with warmth and patience, relieving anxiety and nursing fatigue.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Postnatal &amp; Newborn Acumen</strong>
                      <span className="text-white/80 text-[14px]">Extensive clinical expertise resolving complex latch issues, flat/inverted nipples, low milk production, and mastitis in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Quiet, Sterilized Clinical Environment</strong>
                      <span className="text-white/80 text-[14px]">Private appointments in New Kalyani Nagar ensure a tranquil, zero-crowd space for sensitive nursing sessions.</span>
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
