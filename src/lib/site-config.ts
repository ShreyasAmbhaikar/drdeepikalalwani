export const siteConfig = {
  name: "Dr. Deepika Lalwani(Nagwani)",
  clinicName: "Dr. Deepika Lalwani's Clinic",
  shortName: "Dr. Deepika Lalwani",
  tagline: "A place where healing starts",
  description: "Dr. Deepika Lalwani(Nagwani) is a trusted Consultant Obstetrician & Gynecologist (MBBS, DGO Mumbai) in Kalyani Nagar & Wadgaon Sheri, Pune. Providing expert care in normal delivery, high-risk pregnancy, PCOD/PCOS treatment, infertility & IUI, laparoscopic surgery, and comprehensive women's healthcare.",
  url: "https://drdeepikalalwani.com", // update to production domain
  logo: "/images/logo.png",
  logoIcon: "/images/logo-icon.png",
  footerLogo: "/images/logo.png",
  
  doctor: {
    name: "Dr. Deepika Lalwani(Nagwani)",
    shortName: "Dr. Deepika Lalwani",
    qualifications: "MBBS, DGO (Mumbai)",
    role: "Consultant Obstetrician & Gynecologist (OBS & Gynae)",
    experience: "10+ Years",
    bio: "Dr. Deepika Lalwani(Nagwani) is a highly skilled Obstetrician and Gynecologist trained in Mumbai with extensive clinical expertise. Known for her compassionate, patient-first approach, she specializes in normal vaginal deliveries, high-risk pregnancy care, advanced laparoscopic surgeries, PCOD/PCOS hormonal management, and personalized fertility care.",
    quote: "Every woman deserves unhurried, empathetic medical care that empowers her with knowledge and confidence at every stage of her life."
  },

  // NAP (Name, Address, Phone) details
  contact: {
    phone: "+91 9359264895",
    phoneRaw: "+919359264895",
    phoneFormatted: "093592 64895",
    whatsappUrl: "https://wa.me/919359264895?text=Hello%20Dr.%20Deepika%20Lalwani,%20I%20would%20like%20to%20book%20a%20consultation.",
    address: "Tower, 2nd Floor, Lalwani's Clinic The collection by Brahma Corp, W10, Shop no. 219, New Kalyani Nagar, Digambar Nagar, Wadgaon Sheri, Pune, Maharashtra 411014",
    addressShort: "Tower, 2nd Floor, Lalwani's Clinic The collection by Brahma Corp, W10, Shop no. 219, New Kalyani Nagar, Wadgaon Sheri, Pune 411014",
    landmark: "The collection by Brahma Corp, W10 Tower, 2nd Floor, Shop no. 219",
    hours: {
      weekday: "Mon - Sat: 10:00 AM – 1:30 PM & 6:00 PM – 8:30 PM",
      sunday: "Sunday: 10:00 AM – 1:30 PM"
    },
    hoursStructured: [
      { days: "Monday to Saturday", morning: "10:00 AM - 1:30 PM", evening: "6:00 PM - 8:30 PM" },
      { days: "Sunday", morning: "10:00 AM - 1:30 PM", evening: "Closed" }
    ],
    hoursShort: "Mo,Tu,We,Th,Fr,Sa 10:00-13:30 18:00-20:30, Su 10:00-13:30",
    mapsLink: "https://www.google.com/maps/place/Dr+Deepika+Lalwani(Nagwani)/@18.5491654,73.9160916,15z/data=!4m6!3m5!1s0x3bc2c377cbbb5dc1:0xa0b44fba70f64f8c!8m2!3d18.5491654!4d73.9160916!16s%2Fg%2F11tg6bj2pl",
    embedMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.420857321289!2d73.9135167!3d18.5491654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c377cbbb5dc1%3A0xa0b44fba70f64f8c!2sDr%20Deepika%20Lalwani(Nagwani)!5e0!3m2!1sen!2sin!4v1716912345678"
  },

  // Social handles
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919359264895?text=Hello%20Dr.%20Deepika%20Lalwani,%20I%20would%20like%20to%20book%20a%20consultation.",
    linkedin: "#"
  },

  // Google reviews
  reviews: {
    rating: "4.9",
    count: "105+",
    totalReviews: 105
  },

  // Service Areas
  serviceAreas: {
    primary: "Kalyani Nagar & Wadgaon Sheri",
    secondary: [
      "New Kalyani Nagar",
      "Wadgaon Sheri",
      "Kalyani Nagar",
      "Chandan Nagar",
      "Koregaon Park",
      "Viman Nagar",
      "Anand Park",
      "Sainath Nagar",
      "Somnath Nagar",
      "Digambar Nagar",
      "Adarsh Nagar",
      "Bramha Sun City",
      "Bramha Corp",
      "Ramwadi",
      "Yerawada",
      "Pune"
    ]
  },

  // Core services list
  services: [
    { 
      title: "Normal Delivery Care", 
      slug: "normal-delivery-in-kalyani-nagar",
      desc: "Compassionate antenatal monitoring, natural labor support, and expert guidance for safe vaginal childbirth." 
    },
    { 
      title: "PCOD & PCOS Care", 
      slug: "pcod-pcos-care-in-kalyani-nagar",
      desc: "Holistic, evidence-based management of PCOS with personalized nutrition, hormonal balance, and skin/weight care." 
    },
    { 
      title: "High-Risk Pregnancy Care", 
      slug: "high-risk-pregnancy-management-in-kalyani-nagar",
      desc: "Specialized care for gestational diabetes, hypertension, advanced maternal age, and multiple pregnancies." 
    },
    { 
      title: "Infertility & IUI Care", 
      slug: "infertility-iui-ivf-in-kalyani-nagar",
      desc: "Comprehensive fertility evaluations, ovulation tracking, Intrauterine Insemination (IUI), and IVF guidance." 
    },
    { 
      title: "Laparoscopic Procedures", 
      slug: "laparoscopic-procedures-in-kalyani-nagar",
      desc: "Minimally invasive keyhole surgeries for ovarian cysts, uterine fibroids, endometriosis, and tubal evaluation." 
    },
    { 
      title: "LSCS (Caesarean Section)", 
      slug: "lscs-caesarean-section-in-kalyani-nagar",
      desc: "Safe, precision surgical deliveries performed with highest clinical safety standards when medically indicated." 
    },
    { 
      title: "Cervical Cancer Screening & HPV Vaccine", 
      slug: "cervical-cancer-vaccination-screening-in-kalyani-nagar",
      desc: "Preventative HPV vaccination and painless Pap smear screenings for early detection and lifelong cervical health." 
    },
    { 
      title: "Scarless Hysterectomy (NDVH)", 
      slug: "scarless-hysterectomy-in-kalyani-nagar",
      desc: "Non-descent vaginal hysterectomy for uterine conditions without any external abdominal cuts or visible scars." 
    },
    { 
      title: "Pre-Conceptional Counselling", 
      slug: "pre-conceptional-counselling-in-kalyani-nagar",
      desc: "Personalized medical checkups, genetic screenings, and lifestyle advice for couples planning a healthy pregnancy." 
    },
    { 
      title: "Hysteroscopy Procedures", 
      slug: "hysteroscopy-in-kalyani-nagar",
      desc: "Direct endoscopic diagnosis and treatment for uterine polyps, abnormal bleeding, and endometrial septum." 
    },
    { 
      title: "Menstrual Cycle Disorder Management", 
      slug: "menstrual-cycle-problems-in-kalyani-nagar",
      desc: "Expert treatment for heavy bleeding (menorrhagia), severe menstrual cramps, painful periods, and cycle irregularities." 
    },
    { 
      title: "Family Planning & Contraception", 
      slug: "contraception-advice-in-kalyani-nagar",
      desc: "Confidential, tailored advice on oral pills, hormonal implants, copper-T/Mirena IUD insertion, and permanent sterilization." 
    }
  ],

  // Target SEO Keywords
  keywords: [
    "gynecologist in kalyani nagar",
    "gynecologist in wadgaon sheri",
    "best gynecologist in new kalyani nagar",
    "lady gynecologist near me pune",
    "obstetrician in koregaon park",
    "pregnancy care clinic kalyani nagar",
    "pcod pcos doctor in wadgaon sheri",
    "normal delivery specialist in pune",
    "high risk pregnancy doctor kalyani nagar",
    "infertility clinic in wadgaon sheri",
    "laparoscopic gynecologist pune",
    "women clinic brahma corp kalyani nagar",
    "gynecologist near chandan nagar pune"
  ]
};

export type SiteConfig = typeof siteConfig;
