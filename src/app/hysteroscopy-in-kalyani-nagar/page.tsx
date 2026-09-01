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
  Eye, 
  Scissors, 
  Calendar, 
  Clock, 
  ClipboardList, 
  Shield, 
  Sparkles,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Diagnostic & Operative Hysteroscopy in Kalyani Nagar | Dr. Deepika Lalwani",
  description: "Advanced hysteroscopy for uterine polyps, fibroids, Asherman's syndrome, and IVF cavity optimization by Dr. Deepika Lalwani (MBBS, DGO Mumbai) in Pune.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/hysteroscopy-in-kalyani-nagar/",
  }
};

export default function HysteroscopyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Hysteroscopy Procedures' },
  ];

  const clinicalIndications = [
    { 
      title: "Abnormal Uterine Bleeding (AUB)", 
      description: "Direct optical visualization to pinpoint structural causes of menorrhagia, post-coital spotting, or postmenopausal bleeding refractory to medication.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Endometrial Polyps & Submucosal Fibroids", 
      description: "Guided micro-surgical resection (polypectomy/myomectomy) of intracavitary lesions that distort the endometrial baseline and trigger recurrent bleeding.", 
      icon: <Eye className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Uterine Septum & Synechiae (Asherman's)", 
      description: "Microsurgical division of congenital uterine septa or gentle release of intrauterine scar bands to restore uterine cavity volume for healthy pregnancy.", 
      icon: <Scissors className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pre-IVF Cavity Optimization", 
      description: "Comprehensive baseline hysteroscopic audit to treat subclinical chronic endometritis or micro-polyps before embryo transfer, maximizing implantation rates.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Menstrual Phase Synchronization", 
      description: "Scheduling the procedure during the early follicular phase (cycle days 5 to 10) when the endometrium is thinnest, ensuring optimal camera visualization.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pelvic Ultrasound & Blood Panel", 
      description: "Completing transvaginal ultrasound mapping, complete blood count (CBC), viral screens, and pre-anesthesia clearance for conscious sedation.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Fasting & Short Daycare Protocol", 
      description: "Adhering to a 6-hour fasting window prior to operative hysteroscopy; patients ambulate comfortably and return home the same afternoon.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const procedureTimeline = [
    {
      title: 'Step 1: Clinical Consultation & Pre-Procedure Audit',
      description: 'Comprehensive pelvic exam and transvaginal ultrasound by Dr. Deepika Lalwani to evaluate endometrial thickness and schedule optimal follicular timing.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Cervical Preparation & Sedation',
      description: 'Conducted in a sterile operating theatre with light intravenous sedation or local paracervical block, ensuring zero procedural pain or discomfort.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Atraumatic Scope Insertion & Saline Distension',
      description: 'A 3 to 5 mm miniature lighted hysteroscope is guided through the natural cervix. Sterile normal saline gently expands the cavity for panoramic visualization.',
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: 'Step 4: HD Video Mapping & Targeted Micro-Therapy',
      description: 'Direct high-definition magnification of the cavity on clinical monitors, enabling instantaneous micro-instrument resection of polyps, septa, or adhesions.',
      icon: <Scissors className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical cost of diagnostic and operative hysteroscopy in Pune?",
      answer: "In Pune, diagnostic hysteroscopy (for cavity evaluation or pre-IVF checks) typically ranges from ₹20,000 to ₹35,000 in daycare. Operative hysteroscopy (such as hysteroscopic polypectomy, uterine septum resection, or submucosal fibroid removal) ranges between ₹35,000 and ₹65,000 depending on procedural complexity and daycare hospital stay. Operative procedures are eligible for cashless health insurance coverage."
    },
    {
      question: "What is a hysteroscopy and why is it performed?",
      answer: "A hysteroscopy is a minimally invasive optical procedure where a miniature, illuminated camera (hysteroscope) is gently guided through the vagina and cervix into the uterine cavity. It allows direct inspection and simultaneous treatment of polyps, fibroids, scar tissue (Asherman's), or abnormal bleeding with zero abdominal incisions."
    },
    {
      question: "Is hysteroscopy painful and what anesthesia is used?",
      answer: "Diagnostic hysteroscopy produces mild cramping similar to menstrual sensations and is performed under local paracervical blocks. Operative hysteroscopy (for polyp removal or septum division) is done under conscious sedation or short general anesthesia, ensuring you remain entirely pain-free throughout."
    },
    {
      question: "What is the recovery timeline after a hysteroscopy procedure?",
      answer: "Hysteroscopy is an outpatient daycare procedure. You can return home after 2 to 3 hours of recovery and resume normal desk work within 24 to 48 hours. Mild spotting or light pelvic cramps for 2 to 4 days are normal."
    },
    {
      question: "How does hysteroscopy improve IVF and fertility success rates?",
      answer: "Hysteroscopy visualizes subtle cavity defects that pelvic ultrasound may miss, including intrauterine adhesions, endometrial polyps, or chronic endometritis. Correcting these before embryo transfer significantly improves endometrial receptivity and embryo implantation rates."
    },
    {
      question: "Where are hysteroscopy procedures conducted for Dr. Deepika Lalwani's patients?",
      answer: "Pre-procedure evaluations and follow-up checks are conducted at our New Kalyani Nagar clinic. Operative hysteroscopies are performed personally by Dr. Deepika Lalwani in fully equipped, certified partner tertiary hospital operation theatres in Pune."
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
        <PageHeader title="Hysteroscopy Procedures" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] via-[#F4EBFA] to-[#EFE4F8]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group border border-purple-100/60">
                <Image 
                  src="/images/hysteroscopy-procedures-indian.webp" 
                  alt="Dr. Deepika Lalwani Utilizing Advanced High-Definition Diagnostic Hysteroscopy Equipment" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is a Hysteroscopy Procedure?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px] text-[15px]">
                <p>
                  A <strong>Hysteroscopy</strong> is the clinical gold standard for exploring and treating disorders of the uterine cavity. By guiding a micro-thin, illuminated telescope (hysteroscope) through the natural opening of the cervix, gynecologists can directly inspect the endometrial lining in high definition without making a single cut or stitch on your body.
                </p>
                <p>
                  At <strong>Dr. Deepika Lalwani (Nagwani)&apos;s Clinic</strong> in New Kalyani Nagar &amp; Wadgaon Sheri, Pune, we perform advanced diagnostic and operative hysteroscopy. Led by <strong>Dr. Deepika Lalwani (MBBS, DGO Mumbai)</strong> with over <strong>10+ years of clinical acumen</strong>, our practice provides precise diagnoses for abnormal bleeding, recurrent pregnancy loss, and pre-IVF endometrial cavity optimization.
                </p>
                <p>
                  Consultations, baseline ultrasound scans, and post-procedure counseling are provided in our private, tranquil clinic. Operative hysteroscopy procedures are personally conducted by Dr. Deepika Lalwani at premier tertiary hospital theatres in Pune equipped with the latest HD video towers and continuous fluid management systems.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Hysteroscopy Consultation Today
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

        {/* === SECTION 2: Diagnostic vs Operative Hysteroscopy Comparison === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Diagnostic vs. Operative Hysteroscopy: Method Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Depending on your clinical presentation, Dr. Deepika Lalwani will recommend a targeted visual assessment or an instant corrective micro-surgical procedure.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-purple-200 z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center font-bold text-accent shadow-sm z-10 font-onest">
                  VS
                </div>
              </div>

              {/* Left Card: Diagnostic Hysteroscopy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Diagnostic Hysteroscopy</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Visual Inspection &bull; Cavity Audit</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Objective</span>
                      <p className="text-text text-[14px] leading-relaxed">Direct optical assessment of the endometrium, tubal ostia, and cervical canal.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Swift examination completed in 5 to 10 minutes with minimal intervention.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Anesthesia / Comfort</span>
                      <p className="text-text text-[14px] leading-relaxed">Performed under local paracervical block or mild oral relaxation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Post-Procedure Plan</span>
                      <p className="text-text text-[14px] leading-relaxed">Patient returns home after 30 minutes with immediate diagnostic findings.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Operative Hysteroscopy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1 font-onest">Operative Hysteroscopy</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Corrective Surgery &bull; Micro-Instruments</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Clinical Objective</span>
                      <p className="text-text text-[14px] leading-relaxed">Active micro-resection of polyps, submucosal fibroids, septa, or intrauterine scar tissue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 15 to 30 minutes depending on lesion size and complexity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Anesthesia / Comfort</span>
                      <p className="text-text text-[14px] leading-relaxed">Carried out under gentle intravenous sedation or short general anesthesia.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block font-onest">Post-Procedure Plan</span>
                      <p className="text-text text-[14px] leading-relaxed">Daycare discharge within 2 to 3 hours; resume normal work in 24 to 48 hours.</p>
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

        {/* === SECTION 3: Clinical Indications === */}
        <section className="py-[40px] lg:py-[60px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Clinical Indications for Hysteroscopy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our advanced hysteroscopic imaging accurately detects and treats intracavitary pathologies affecting uterine health and fertility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {clinicalIndications.map((indicator, index) => {
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
                        {indicator.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug font-onest`}>
                        {indicator.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {indicator.description}
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
              text="Our Pre-Procedure Preparation &amp; Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Follow these simple clinical preparation steps to ensure optimal visibility and a seamless recovery experience.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-purple-100/60 bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/hysteroscopy-prep.webp" 
                alt="Safe medical setup and monitors preparing for a diagnostic hysteroscopy procedure" 
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

        {/* === SECTION 5: Procedure Journey Timeline === */}
        <section className="py-[60px] lg:py-[80px] bg-gradient-to-b from-[#FAF6FD] to-[#F5ECFA]">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[28px] shadow-sm border border-purple-100/80">
              <AnimatedHeading 
                text="The Hysteroscopy Journey Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A gentle, high-precision clinical process that prioritizes patient comfort and thorough diagnostic accuracy at every phase.
              </p>
              <VerticalTimeline items={procedureTimeline} />
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
                  Why Choose Dr. Deepika Lalwani&apos;s Clinic for Hysteroscopy?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Specialist Attention at Every Phase</strong>
                      <span className="text-white/80 text-[14px]">Dr. Deepika Lalwani (MBBS, DGO Mumbai) conducts all diagnostic and pre-procedure evaluations personally without rotating staff.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">10+ Years of Endoscopic &amp; Fertility Acumen</strong>
                      <span className="text-white/80 text-[14px]">Extensive clinical track record successfully treating complex endometrial polyps, uterine septa, and intrauterine adhesions in Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Advanced Tertiary Theatre Infrastructure</strong>
                      <span className="text-white/80 text-[14px]">Operative procedures are performed at premier partner tertiary centers equipped with modern high-definition hysteroscopes and certified anesthesiologists.</span>
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
