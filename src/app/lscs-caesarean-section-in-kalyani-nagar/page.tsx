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
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "LSCS (Caesarean Section) in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Consult Dr. Deepika Lalwani (MBBS, DGO Mumbai, 10+ yrs exp) for planned and emergency LSCS Caesarean delivery, cosmetic closure, and high-risk maternity care in Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/lscs-caesarean-section-in-kalyani-nagar/",
  }
};

export default function LscsCaesareanPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'LSCS (Caesarean Section)' },
  ];

  const indicationsData = [
    {
      title: "Fetal Distress or Heart Decelerations",
      description: "Non-reassuring cardiotocography (CTG) tracings or umbilical cord compression during labor necessitating rapid, safe delivery of the baby.",
      icon: <Activity className="w-7 h-7" />
    },
    {
      title: "Breech or Transverse Fetal Lie",
      description: "When the baby is positioned feet-first (breech) or sideways (transverse) at term, making vaginal delivery structurally high risk.",
      icon: <Baby className="w-7 h-7" />
    },
    {
      title: "Placenta Previa or Abruption",
      description: "Low-lying placenta completely covering the internal cervical os or premature placental detachment requiring scheduled surgical delivery.",
      icon: <Shield className="w-7 h-7" />
    },
    {
      title: "Cephalopelvic Disproportion (CPD)",
      description: "Mismatches between the fetal head dimensions and maternal pelvic outlet dimensions where natural passage is mechanically obstructed.",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "Previous Uterine Surgery / Classical Scar",
      description: "Prior complex myomectomy or multiple previous C-sections where natural labor risks uterine scar dehiscence.",
      icon: <Clock className="w-7 h-7" />
    },
    {
      title: "Higher-Order Multiple Gestation",
      description: "Twin or triplet gestations presenting with non-cephalic leading twins, shared amniotic sacs, or maternal hypertension.",
      icon: <HeartPulse className="w-7 h-7" />
    }
  ];

  const surgicalTimeline = [
    {
      title: 'Phase 1: Preoperative Audit & Regional Anesthesia',
      description: 'Comprehensive blood profiling, fetal CTG verification, and administration of spinal anesthesia by a senior anesthetist, keeping the mother completely pain-free, comfortable, and conscious throughout the birth.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Phase 2: Precision Incision & Gentle Delivery',
      description: 'A discreet bikini-line (Pfannenstiel) transverse incision is made in the lower uterine segment. The baby is safely delivered within 10 to 15 minutes and immediately placed for pediatric evaluation and skin-to-skin touch.',
      icon: <Baby className="w-5 h-5" />
    },
    {
      title: 'Phase 3: Placental Extraction & Uterine Repair',
      description: 'The placenta is gently removed, followed by precise multi-layer uterine reconstruction and hemostasis verification to preserve future reproductive wellness.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Phase 4: Cosmetic Subcuticular Closure & Recovery',
      description: 'The skin is closed using dissolvable sub-cuticular sutures or waterproof cosmetic dressings that minimize scarring. The mother is transferred to the recovery suite for monitored breastfeeding.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Pre-Operative Fasting Protocols", description: "Clear instructions regarding 6 to 8-hour fasting schedules before planned surgery to ensure anesthetic safety.", icon: <ClipboardList className="w-6 h-6 text-accent" /> },
    { title: "Complete Hematological Profile", description: "Confirming adequate hemoglobin, coagulation parameters, and blood group cross-matching beforehand.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Hospital Bag & Postpartum Planning", description: "Organizing high-waisted cotton garments, maternity nursing bras, sanitary pads, and newborn layette.", icon: <Home className="w-6 h-6 text-accent" /> },
    { title: "Pre-Delivery Consultation & Birth Plan", description: "Thorough discussion on newborn bonding, partner presence options, and early lactation techniques.", icon: <BookOpen className="w-6 h-6 text-accent" /> },
    { title: "Balanced Pre-Surgical Nutrition", description: "Optimizing maternal protein and micronutrient intake during the final trimester to aid rapid surgical tissue repair.", icon: <Apple className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Incision Care & Cosmetic Healing",
      description: "Instructions on keeping the dressing clean and dry, recognizing normal tissue healing, and managing gentle wound care after dressing removal.",
      icon: <ShieldCheck className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Post-Surgical Nursing Positions",
      description: "Guidance on the 'football hold' and side-lying breastfeeding techniques to feed comfortably without abdominal pressure on the surgical scar.",
      icon: <Baby className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Gradual Mobility & DVT Prevention",
      description: "Encouraging early supported ambulation within 12 to 24 hours to prevent venous thrombosis, stimulate bowel activity, and speed discharge.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: "What is the approximate cost of an LSCS Caesarean delivery in Pune partner hospitals?",
      answer: "In Pune, an LSCS Caesarean delivery package typically ranges between ₹65,000 and ₹1,10,000 depending on the selected partner hospital infrastructure, room category (shared, single private, or luxury suite), and elective vs. emergency requirements. This comprehensive package includes 3 to 4 days of hospital stay, operation theatre charges, obstetrician, assistant surgeon, anesthesiologist, and pediatrician fees, nursing care, and standard post-operative medications. Cashless health insurance and maternity claims are widely supported."
    },
    {
      question: "What is the primary difference between a planned (elective) and emergency LSCS?",
      answer: "A planned LSCS is scheduled in advance (usually around 38 to 39 weeks) due to pre-existing maternal or fetal factors like breech positioning or placenta previa. An emergency LSCS is performed during active labor if unexpected complications arise, such as fetal distress or stalled cervical dilation."
    },
    {
      question: "How long does a standard LSCS Caesarean surgery take?",
      answer: "The total surgical duration is typically 45 to 60 minutes. The baby is safely delivered within the first 10 to 15 minutes, while the remaining time is dedicated to meticulous uterine suturing, peritoneal closure, and cosmetic skin alignment."
    },
    {
      question: "Will I be awake during my Caesarean delivery?",
      answer: "Yes. The vast majority of LSCS procedures are performed under spinal or epidural regional anesthesia. This numbs the lower body from the chest down while keeping you awake, relaxed, and able to hear your baby's first cry and hold your newborn immediately."
    },
    {
      question: "What is the expected recovery timeline following a C-section?",
      answer: "Mothers typically stay in the hospital for 2 to 3 days for observation. Light household activities can be resumed after 2 to 3 weeks, while complete internal muscle and fascial healing takes approximately 6 to 8 weeks."
    },
    {
      question: "Can I attempt a normal delivery in a future pregnancy after this C-section?",
      answer: "Yes. Having an LSCS with a lower segment transverse incision makes you a viable candidate for Vaginal Birth After Caesarean (VBAC) in subsequent pregnancies, provided there are no recurring surgical indications."
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
        <PageHeader title="LSCS (Caesarean Section)" breadcrumbs={breadcrumbs} bgImage="/images/lscs-header-indian.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/lscs-overview-indian.webp" 
                  alt="LSCS Caesarean Section Care in Kalyani Nagar" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is LSCS (Lower Segment Caesarean Section)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  <strong>Lower Segment Caesarean Section (LSCS)</strong> is a surgical procedure in which a baby is safely delivered through a horizontal incision in the mother&apos;s lower abdomen and uterus. When medical, anatomical, or fetal indications make a natural vaginal delivery hazardous, a Caesarean section is a life-saving, routine, and highly refined obstetric intervention.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we approach every birth with scientific diligence, sterile surgical excellence, and deep empathy. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of clinical experience</strong>, we ensure both planned and emergency C-sections are executed with utmost precision, cosmetic sub-cuticular sutures, and dedicated postpartum support.
                </p>
                <p>
                  Whether you require an elective C-section due to breech presentation, placenta previa, or twin gestation, or are navigating emergency intrapartum decisions, Dr. Deepika ensures transparent clinical counsel, supportive pain management, and rapid recovery guidance.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Schedule Your Maternity Consultation
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

        {/* === SECTION 2: Indications === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Medical Indications for Caesarean Delivery (LSCS)" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {indicationsData.map((benefit, index) => {
                const pastels = [
                  { cardBg: 'bg-[#F2FBF5]', blob1: 'bg-[#B8E6C4]', blob2: 'bg-[#D1F2D9]', iconBg: 'bg-[#D1F2D9]', text: 'text-[#15332B]', descText: 'text-[#2D5545]' },
                  { cardBg: 'bg-[#EEF4FF]', blob1: 'bg-[#B3D1FF]', blob2: 'bg-[#C4DEFF]', iconBg: 'bg-[#C4DEFF]', text: 'text-[#142952]', descText: 'text-[#2B4A7A]' },
                  { cardBg: 'bg-[#F6F1FF]', blob1: 'bg-[#D4BFFF]', blob2: 'bg-[#E2D4FF]', iconBg: 'bg-[#E2D4FF]', text: 'text-[#2A1650]', descText: 'text-[#4A3270]' },
                  { cardBg: 'bg-[#FFF6EE]', blob1: 'bg-[#FFD4A8]', blob2: 'bg-[#FFE2C2]', iconBg: 'bg-[#FFE2C2]', text: 'text-[#4A2E0F]', descText: 'text-[#6B4A25]' },
                  { cardBg: 'bg-[#FFF1F5]', blob1: 'bg-[#FFC0D4]', blob2: 'bg-[#FFD0DF]', iconBg: 'bg-[#FFD0DF]', text: 'text-[#4A1228]', descText: 'text-[#6B2A45]' },
                  { cardBg: 'bg-[#EFF9F9]', blob1: 'bg-[#A8DEDE]', blob2: 'bg-[#C4EDED]', iconBg: 'bg-[#C4EDED]', text: 'text-[#103838]', descText: 'text-[#255555]' },
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
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
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

        {/* === SECTION 3: Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Caesarean Delivery (LSCS) Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A structured surgical overview of your C-section procedure from regional anesthesia to newborn delivery and cosmetic closure.
              </p>
              <VerticalTimeline items={surgicalTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-gradient-to-b from-[#F5ECFA] to-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Preparation === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for a Planned Caesarean Section" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Systematic pre-operative guidance ensures maximum safety, emotional calm, and a streamlined postpartum hospital stay.
            </p>
            
            {/* Bento Banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg relative min-h-[300px] md:min-h-0 md:aspect-[21/9] w-full mb-8 group cursor-pointer border border-purple-100/60">
              <Image 
                src="/images/lscs-prep-indian.webp" 
                alt="Pregnant Indian Woman Packing Hospital Bag" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A0E44]/90 via-[#2A0E44]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Prepared &amp; Confident</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Packing essential hospital gear and coordinating your arrival time guarantees a relaxed delivery day.</p>
              </div>
            </div>
            
            {/* Grid of cards */}
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
                    <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug">{card.title}</h3>
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

        {/* === SECTION 5: Recovery + Doctor Credentials + FAQ === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">

            {/* Postnatal Care (Recovery Cards) */}
            <div>
              <AnimatedHeading 
                text="Postoperative Recovery Following a Caesarean Delivery" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
                Comprehensive surgical aftercare ensures optimal wound healing, comfortable nursing, and smooth restoration of physical energy.
              </p>
              <CardStack items={recoveryCards} />
            </div>

            {/* Why Choose Doctor Card */}
            <div className="gradient-dark-section text-white rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[24px] md:text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Caesarean Delivery?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Surgical Precision &amp; Cosmetic Closure</strong>
                      <span className="text-white/80 text-[14px]">Sub-cuticular dissolvable suturing techniques that reduce tissue trauma and promote minimal cosmetic scarring.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of High-Risk Obstetric Skill</strong>
                      <span className="text-white/80 text-[14px]">Extensive track record handling complex repeat C-sections, twins, CPD, and emergency intrapartum interventions in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Continuous Post-Operative Support</strong>
                      <span className="text-white/80 text-[14px]">Dedicated wound checkups, nursing position counseling, and direct specialist communication.</span>
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
