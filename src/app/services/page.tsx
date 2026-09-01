import React from "react";
import PageHeader from "@/components/landing/PageHeader";
import { 
  Baby, 
  Heart, 
  AlertTriangle, 
  Sparkles, 
  Activity, 
  Scissors, 
  ShieldCheck, 
  Layers, 
  Users, 
  Eye, 
  Shield, 
  Droplet, 
  HeartHandshake, 
  FileSpreadsheet, 
  FolderLock,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Obstetrics & Gynecology Services in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani",
  description: "Explore expert women's healthcare services at Dr. Deepika Lalwani's Clinic in New Kalyani Nagar, Wadgaon Sheri, Pune. Led by Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai), offering normal delivery, PCOD/PCOS care, high-risk pregnancy care, & IUI fertility guidance.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/services/",
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/best-gynecologist-in-kalyani-nagar/" },
    { label: "Services" },
  ];

  // Sorted strictly matching the Header dropdown sequence (20 services)
  const services = [
    {
      icon: <Baby className="w-9 h-9 text-accent" />,
      title: "Normal Delivery Care",
      desc: "Compassionate antenatal support, continuous labor coaching, and safe natural childbirth practices prioritizing maternal-fetal wellness.",
      href: "/normal-delivery-in-kalyani-nagar/",
    },
    {
      icon: <Heart className="w-9 h-9 text-accent" />,
      title: "PCOD & PCOS Care",
      desc: "Holistic clinical management and lifestyle-integrated medical care for hormonal acne, irregular cycles, insulin resistance, and ovulation restoration.",
      href: "/pcod-pcos-care-in-kalyani-nagar/",
    },
    {
      icon: <AlertTriangle className="w-9 h-9 text-accent" />,
      title: "High Risk Pregnancy Management",
      desc: "Vigilant antenatal surveillance and clinical expertise for gestational diabetes, preeclampsia, multiple gestations, and previous surgical deliveries.",
      href: "/high-risk-pregnancy-management-in-kalyani-nagar/",
    },
    {
      icon: <Sparkles className="w-9 h-9 text-accent" />,
      title: "Infertility, IUI & IVF",
      desc: "Evidence-guided reproductive assessments, high-precision follicular ultrasound tracking, and personalized Intrauterine Insemination (IUI) support.",
      href: "/infertility-iui-ivf-in-kalyani-nagar/",
    },
    {
      icon: <Activity className="w-9 h-9 text-accent" />,
      title: "Laparoscopic Procedures",
      desc: "Advanced minimally invasive keyhole surgeries for ovarian cysts, uterine fibroids, endometriosis, and diagnostic pelvic evaluations.",
      href: "/laparoscopic-procedures-in-kalyani-nagar/",
    },
    {
      icon: <Scissors className="w-9 h-9 text-accent" />,
      title: "LSCS (Caesarean Section)",
      desc: "Sterile, precision surgical delivery when medically indicated for high-risk maternal or emergency fetal conditions with minimal scarring.",
      href: "/lscs-caesarean-section-in-kalyani-nagar/",
    },
    {
      icon: <ShieldCheck className="w-9 h-9 text-accent" />,
      title: "Cervical Cancer Vaccine & Screening",
      desc: "Preventative Pap smears, liquid-based cytology (LBC), and HPV vaccination to safeguard long-term cervical and reproductive health.",
      href: "/cervical-cancer-vaccination-screening-in-kalyani-nagar/",
    },
    {
      icon: <Layers className="w-9 h-9 text-accent" />,
      title: "Scarless Hysterectomy (NDVH)",
      desc: "Non-Descent Vaginal Hysterectomy for benign uterine conditions, ensuring removal without any abdominal incisions and rapid recovery.",
      href: "/scarless-hysterectomy-in-kalyani-nagar/",
    },
    {
      icon: <Users className="w-9 h-9 text-accent" />,
      title: "Pre Conceptional Counselling",
      desc: "Personalized genetic health risk evaluation, pre-pregnancy nutritional optimization, and comprehensive fertility mapping for couples.",
      href: "/pre-conceptional-counselling-in-kalyani-nagar/",
    },
    {
      icon: <Eye className="w-9 h-9 text-accent" />,
      title: "Hysteroscopy Procedures",
      desc: "Minimally invasive diagnostic and operative visualization of the uterine cavity to evaluate abnormal bleeding, polyps, and uterine septum.",
      href: "/hysteroscopy-in-kalyani-nagar/",
    },
    {
      icon: <Activity className="w-9 h-9 text-accent" />,
      title: "Menstrual Cycle Problems",
      desc: "Scientific diagnosis and customized hormonal treatments for irregular periods, heavy menstrual bleeding (menorrhagia), and dysmenorrhea.",
      href: "/menstrual-cycle-problems-in-kalyani-nagar/",
    },
    {
      icon: <Shield className="w-9 h-9 text-accent" />,
      title: "Family Planning & Contraception",
      desc: "Confidential birth spacing counseling, modern contraception methods, hormonal implants, and intrauterine devices (Copper T / Mirena).",
      href: "/contraception-advice-in-kalyani-nagar/",
    },
    {
      icon: <Baby className="w-9 h-9 text-accent" />,
      title: "Pregnancy Care",
      desc: "Comprehensive trimester-by-trimester antenatal checkups, high-resolution anomaly scans, dietary guidance, and continuous maternal support.",
      href: "/pregnancy-care-in-kalyani-nagar/",
    },
    {
      icon: <HeartHandshake className="w-9 h-9 text-accent" />,
      title: "Pubertal Counselling",
      desc: "Empathetic, approachable clinical guidance for adolescent girls managing early menarche, hormonal fluctuations, cramps, and body changes.",
      href: "/pubertal-counselling-in-kalyani-nagar/",
    },
    {
      icon: <Droplet className="w-9 h-9 text-accent" />,
      title: "Menstrual Hygiene",
      desc: "Dedicated medical education and clinical care for infection prevention, safe menstrual cup usage, and personal intimate hygiene.",
      href: "/menstrual-hygiene-in-kalyani-nagar/",
    },
    {
      icon: <Users className="w-9 h-9 text-accent" />,
      title: "Lactational Counselling",
      desc: "Supportive post-delivery guidance assisting new mothers with proper breastfeeding latching technique, milk supply, and mastitis relief.",
      href: "/lactational-counselling-in-kalyani-nagar/",
    },
    {
      icon: <AlertTriangle className="w-9 h-9 text-accent" />,
      title: "Pelvic Infections Treatment",
      desc: "Accurate microbiological diagnostics and targeted therapies for Pelvic Inflammatory Disease (PID), recurrent vaginitis, and chronic pelvic pain.",
      href: "/pelvic-infections-treatment-in-kalyani-nagar/",
    },
    {
      icon: <Eye className="w-9 h-9 text-accent" />,
      title: "Cancer Screening",
      desc: "Comprehensive preventative screenings including clinical breast exams, pelvic ultrasonography, and cervical Pap tests for early detection.",
      href: "/cancer-screening-in-kalyani-nagar/",
    },
    {
      icon: <FolderLock className="w-9 h-9 text-accent" />,
      title: "Tubal Ligation & Reversal",
      desc: "Permanent family planning options (tubectomy) and microsurgical tubal re-canalization procedures to restore fertility pathways.",
      href: "/tubal-ligation-reversal-in-kalyani-nagar/",
    },
    {
      icon: <FileSpreadsheet className="w-9 h-9 text-accent" />,
      title: "MTP, D & E Services",
      desc: "Confidential, compassionate, and legally compliant Medical Termination of Pregnancy and Dilation & Evacuation medical care.",
      href: "/mtp-d-e-services-in-kalyani-nagar/",
    },
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Obstetrics & Gynecology Services at Dr. Deepika Lalwani's Clinic",
    "description": "Specialized obstetric, gynecological, laparoscopic, and fertility services in Kalyani Nagar & Wadgaon Sheri, Pune.",
    "itemListElement": services.map((s, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": s.title,
      "description": s.desc,
      "url": `${siteConfig.url}${s.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <main>
        <PageHeader title="Our Services" breadcrumbs={breadcrumbs} />

        {/* Services List Grid */}
        <section className="py-[75px] lg:py-[105px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="text-center max-w-[740px] mx-auto mb-[55px]">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                <span className="text-accent text-[13px] font-bold tracking-wider uppercase">Comprehensive Care</span>
              </div>
              <h2 className="text-[30px] md:text-[42px] font-extrabold text-primary leading-tight">
                Specialized Obstetrics &amp; Gynecology Treatments in Pune
              </h2>
              <p className="text-text mt-3 text-[14.5px] md:text-[15.5px] leading-relaxed">
                Consult Senior Obstetrician &amp; Gynecologist Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai) at The Collection by Brahma Corp, New Kalyani Nagar, serving patients across Wadgaon Sheri, Chandan Nagar, Koregaon Park, and Viman Nagar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-7 md:p-8 rounded-[24px] border border-purple-100/80 shadow-[0_6px_24px_rgba(45,10,78,0.03)] hover:shadow-[0_16px_40px_rgba(45,10,78,0.08)] transition-all duration-300 flex flex-col gap-4 items-start hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 bg-secondary/80 rounded-[18px] flex items-center justify-center shrink-0 border border-purple-100 group-hover:bg-purple-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1 flex flex-col h-full w-full">
                    <h3 className="text-[19px] font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-text leading-[1.65] text-[13.5px] md:text-[14px] mb-5">
                      {service.desc}
                    </p>
                    
                    <div className="mt-auto pt-2 border-t border-purple-50">
                      <Link 
                        href={service.href}
                        className="inline-flex items-center gap-1.5 font-bold text-[13.5px] text-accent hover:text-primary transition-colors duration-200"
                      >
                        <span>View Treatment Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
