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
  Home, 
  Shield, 
  TrendingUp, 
  Droplets,
  Stethoscope,
  Apple,
  BookOpen,
  ClipboardList,
  HeartPulse,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Normal Delivery Care in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Consult Dr. Deepika Lalwani (MBBS, DGO Mumbai, 10+ yrs exp) for safe natural normal delivery, painless labor, VBAC, and compassionate maternity care in Kalyani Nagar, Pune.",
  alternates: {
    canonical: '/normal-delivery-in-kalyani-nagar/',
  }
};

export default function NormalDeliveryPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Normal Delivery Care' },
  ];

  const benefitsData = [
    {
      title: "Swift Postpartum Recovery",
      description: "Natural vaginal delivery promotes rapid physical recovery, enabling mothers to mobilize comfortably within hours and return smoothly to daily routines.",
      icon: <TrendingUp className="w-7 h-7" />
    },
    {
      title: "Enhanced Newborn Immunity",
      description: "Passing through the natural birth canal inoculates the baby with beneficial maternal microflora, strengthening their respiratory and gut immunity.",
      icon: <Shield className="w-7 h-7" />
    },
    {
      title: "Minimal Hospital Stay",
      description: "Uncomplicated normal deliveries typically require just 24 to 48 hours of observation, allowing you to settle comfortably at home sooner.",
      icon: <Home className="w-7 h-7" />
    },
    {
      title: "Immediate Breastfeeding Initiation",
      description: "Natural birth triggers vital oxytocin and prolactin hormonal surges, facilitating immediate skin-to-skin bonding and early lactation success.",
      icon: <Droplets className="w-7 h-7" />
    },
    {
      title: "Zero Abdominal Incisions",
      description: "Avoiding major surgical intervention eliminates abdominal scar tissue, surgical infection risks, and anesthesia-related recovery delays.",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "Favorable Future Pregnancies",
      description: "A successful vaginal birth preserves uterine muscle integrity, significantly lowering risks of placental complications in future gestations.",
      icon: <Activity className="w-7 h-7" />
    }
  ];

  const laborTimeline = [
    {
      title: 'Phase 1: Cervical Effacement & Active Labor',
      description: 'The cervix thins, softens, and gradually dilates from 0 to 10 cm driven by rhythmic contractions. Dr. Deepika Lalwani closely assesses fetal heart rate patterns, maternal vitals, and comfort through breathing guidance and position optimization.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Phase 2: Fetal Descent & Childbirth',
      description: 'Once full cervical dilation is achieved, coordinated pushing begins. With patient, step-by-step coaching, the mother works in harmony with contractions to guide the baby smoothly through the birth canal.',
      icon: <Baby className="w-5 h-5" />
    },
    {
      title: 'Phase 3: Safe Placental Expulsion',
      description: 'Within 5 to 20 minutes following birth, mild contractions deliver the placenta and membranes cleanly, followed by careful inspection to ensure complete uterine contracting.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Phase 4: Golden Hour Bonding & Postpartum Check',
      description: 'The first hour after delivery is dedicated to uninterrupted skin-to-skin contact, latch assistance, maternal perineal assessment, and newborn vital stabilization.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Structured Antenatal Checkups", description: "Regular trimesters visits to track fetal growth velocity, amniotic fluid volume (AFI), and placental maturity.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Prenatal Nutrition & Hydration", description: "Iron-rich, protein-dense dietary counseling to build hemoglobin stores and muscular stamina for labor.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Pelvic Mobility & Kegel Exercises", description: "Doctor-approved gentle yoga, pelvic tilts, and perineal stretches that prepare the pelvic outlet for natural descent.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Breathing & Relaxation Techniques", description: "Structured breathwork coaching that empowers expectant mothers to manage labor contractions calmly.", icon: <BookOpen className="w-6 h-6 text-accent" /> },
    { title: "Customized Birth Preferences", description: "Detailed discussions on labor choices, pain management options including painless epidural analgesia, and support partner roles.", icon: <ClipboardList className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Perineal & Physical Restoration",
      description: "Guidance on warm sitz baths, hygienic perineal care, and gentle walking to stimulate pelvic circulation and accelerate tissue recovery.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Lactation & Newborn Latch Support",
      description: "Hands-on counseling for correct feeding postures, colostrum feeding, and preventing engorgement or nipple soreness during the early weeks.",
      icon: <Baby className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Emotional Wellness & Postpartum Care",
      description: "Attentive monitoring for hormonal mood shifts, guidance on restorative sleep patterns, and comprehensive 6-week postnatal health assessment.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of normal delivery in Pune partner hospitals?",
      answer: "The cost of a normal delivery package in Pune generally ranges from ₹45,000 to ₹75,000 depending on the partner hospital category and room selection (general, semi-private, or deluxe). This typically includes 2 to 3 days of hospital stay, labor room and nursing charges, obstetrician and pediatrician fees, and routine postnatal care. If painless delivery (epidural analgesia) is opted for, an additional ₹8,000 to ₹12,000 is typically applicable. Outpatient antenatal consultations at our clinic are ₹600."
    },
    {
      question: "What are the earliest physical signs that labor has begun?",
      answer: "True labor is marked by rhythmic uterine contractions that grow progressively stronger, longer, and closer together (every 3 to 5 minutes), lower back pressure that does not ease with rest, passage of the pinkish mucus plug (bloody show), or spontaneous rupture of membranes (water breaking)."
    },
    {
      question: "What medical measures maximize the likelihood of a natural normal delivery?",
      answer: "Maintaining active daily movement with approved prenatal walking, balanced maternal weight gain, optimized hemoglobin and iron levels, routine pelvic floor exercises, and continuous antenatal guidance with Dr. Deepika Lalwani significantly enhance normal delivery success rates."
    },
    {
      question: "Is painless normal delivery (Epidural Analgesia) available and safe?",
      answer: "Yes. Painless normal delivery utilizes continuous lumbar epidural analgesia administered by a specialist anesthetist. It effectively numbs labor pain while allowing the mother to remain fully awake, mobile, and able to actively push during the final stage of childbirth."
    },
    {
      question: "Can I attempt a normal delivery after a previous C-section (VBAC)?",
      answer: "Yes, many mothers are suitable candidates for a Trial of Labor After Caesarean (TOLAC/VBAC). Suitability depends on having a lower segment transverse uterine scar, non-recurring prior surgical indications, adequate inter-pregnancy spacing, and healthy fetal position."
    },
    {
      question: "Where are deliveries conducted for patients of Dr. Deepika Lalwani's Clinic?",
      answer: "Outpatient antenatal checkups, high-resolution scans, and labor coaching are provided at our New Kalyani Nagar clinic. Deliveries and hospital stays are conducted by Dr. Deepika Lalwani personally at premier, fully-equipped tertiary partner hospitals in Pune with 24/7 NICU and operation theater backup."
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
        <PageHeader title="Normal Delivery Care" breadcrumbs={breadcrumbs} bgImage="/images/normal-delivery-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/normal-delivery-indian.webp" 
                  alt="Normal Delivery Care and Newborn Mother Consultation with Dr. Deepika Lalwani" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Normal Delivery (Natural Childbirth)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6" 
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  Normal delivery, also known as natural vaginal delivery, is the physiological process of childbirth through the birth canal without requiring major abdominal surgery. For healthy expectant mothers, natural delivery is universally recognized as the safest and most rewarding pathway, promoting rapid postpartum recovery, immediate mother-infant bonding, and lifelong biological benefits for the baby.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, our clinical philosophy is built upon encouraging and facilitating natural childbirth whenever medically safe. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of dedicated clinical experience</strong>, we provide personalized antenatal care, continuous fetal well-being surveillance, and active labor preparation.
                </p>
                <p>
                  From your first pregnancy trimester scan to labor pain management techniques (including modern painless epidural delivery), our evidence-backed guidance ensures you feel confident, informed, and nurtured throughout your journey into motherhood.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Normal Delivery Consultation
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

        {/* === SECTION 2: Benefits === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Clinical Advantages of Natural Normal Delivery" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {benefitsData.map((benefit, index) => {
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

        {/* === SECTION 3: Labor Stages === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="Understanding the Stages of Labor &amp; Childbirth" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Clear understanding of the physiological labor progression helps reduce fear and empowers you to actively participate in your birth experience.
              </p>
              <VerticalTimeline items={laborTimeline} />
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
              text="Preparing for a Safe, Confident Normal Delivery" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Systematic antenatal conditioning, guided exercises, and personalized birth planning optimize your physical readiness for vaginal delivery.
            </p>
            
            {/* Bento Banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg relative aspect-[21/9] w-full mb-8 group cursor-pointer border border-purple-100/60">
              <Image 
                src="/images/prenatal-yoga-indian.webp" 
                alt="Radiant Indian Expectant Mother Practicing Gentle Prenatal Yoga" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A0E44]/90 via-[#2A0E44]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Active Prenatal Health</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Doctor-approved pelvic mobility routines and mindful breathing strengthen stamina for a serene birth journey.</p>
              </div>
            </div>

            {/* Grid of numbered cards */}
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

            {/* Postnatal Recovery Cards */}
            <div>
              <AnimatedHeading 
                text="Postnatal Recovery &amp; Mother-Baby Well-Being" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
                Comprehensive postpartum care ensures your body transitions comfortably into motherhood with structured medical follow-ups.
              </p>
              <CardStack items={recoveryCards} />
            </div>

            {/* Why Choose Doctor Card (Themed Royal Purple) */}
            <div className="gradient-dark-section text-white rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[24px] md:text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Normal Delivery?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years Clinical Excellence</strong>
                      <span className="text-white/80 text-[14px]">Extensive specialized experience conducting safe natural vaginal deliveries, managing complex labor, and guiding VBAC cases in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Personalized Maternity Protocol</strong>
                      <span className="text-white/80 text-[14px]">Direct one-on-one consultations with Dr. Deepika Lalwani (MBBS, DGO Mumbai) with zero hurried visits and tailored birth mapping.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Equipped Delivery Network</strong>
                      <span className="text-white/80 text-[14px]">Outpatient care in New Kalyani Nagar with seamless hospital admissions at premier tertiary delivery facilities in Pune.</span>
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
