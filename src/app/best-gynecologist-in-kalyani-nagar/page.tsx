import { HeroSection } from "@/components/landing/HeroSection";
import { InfoStrip } from "@/components/landing/InfoStrip";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FaqMapSection } from "@/components/landing/FaqMapSection";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Best Gynecologist in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani(Nagwani)",
  description: "Consult Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai), Consultant Obstetrician & Gynecologist with 10+ years clinical experience at The Collection by Brahma Corp, New Kalyani Nagar, Wadgaon Sheri, Pune. Specializing in normal delivery, high-risk pregnancy, PCOS care, & fertility evaluation. Book an appointment today.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "https://drdeepikalalwani.com/best-gynecologist-in-kalyani-nagar/",
  },
  openGraph: {
    title: "Best Gynecologist in Kalyani Nagar & Wadgaon Sheri | Dr. Deepika Lalwani(Nagwani)",
    description: "Senior Consultant Obstetrician & Gynecologist (MBBS, DGO Mumbai) at The Collection by Brahma Corp, New Kalyani Nagar, Pune. Compassionate pregnancy, normal delivery, PCOD & infertility care.",
    url: `${siteConfig.url}/best-gynecologist-in-kalyani-nagar/`,
    siteName: "Dr. Deepika Lalwani's Clinic",
    images: [
      {
        url: "/images/dr-deepika-lalwani-portrait.webp",
        width: 800,
        height: 600,
        alt: "Dr. Deepika Lalwani(Nagwani) - Best Gynecologist in Kalyani Nagar & Wadgaon Sheri Pune",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I book a consultation or appointment with Dr. Deepika Lalwani?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can easily schedule your consultation by calling our clinic directly at +91 9359264895 or by sending us a message on WhatsApp. We offer flexible appointment slots and also accommodate walk-in consultations during morning (10:00 AM – 1:30 PM) and evening (6:00 PM – 8:30 PM) OPD hours."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas and localities in Pune are near the clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our clinic is situated at Tower, 2nd Floor, Lalwani's Clinic The collection by Brahma Corp, W10, Shop no. 219, New Kalyani Nagar, Wadgaon Sheri, Pune 411014. We conveniently serve patients across Kalyani Nagar, Wadgaon Sheri, Chandan Nagar, Viman Nagar, Koregaon Park, Kharadi, Sainath Nagar, Anand Park, and Digambar Nagar."
      }
    },
    {
      "@type": "Question",
      "name": "What pregnancy and maternity care services are provided at the clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Deepika Lalwani provides complete pregnancy care from pre-conception planning and antenatal trimester checkups to natural normal delivery support, high-risk pregnancy management (gestational diabetes, hypertension, twin pregnancies), painless labor guidance, and postnatal recovery care."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer diagnosis and treatment for PCOD/PCOS and irregular periods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide personalized, evidence-based management for PCOD/PCOS, heavy menstrual bleeding, painful cramps (dysmenorrhea), and hormonal imbalances. Treatment includes root-cause evaluation, customized lifestyle and dietary guidance, cycle regulation, and ovulation support."
      }
    },
    {
      "@type": "Question",
      "name": "What is the consultation fee and cost structure at Dr. Deepika Lalwani's Clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We maintain transparent and fair pricing. A standard consultation with Dr. Deepika Lalwani is ₹600. In-clinic diagnostic procedures like ultrasound scans, Pap smears, and IUD insertions range between ₹1,200 and ₹4,500. Major surgical and delivery procedures are conducted at accredited partner hospitals in Pune with full support for cashless health insurance and corporate claims."
      }
    },
    {
      "@type": "Question",
      "name": "What fertility evaluation and IUI treatments are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive fertility assessments for couples, including follicular tracking, hormonal profiling, tubal patency evaluation, semen analysis guidance, and Intrauterine Insemination (IUI) procedures in a supportive, confidential environment."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteConfig.url
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Best Gynecologist in Kalyani Nagar & Wadgaon Sheri",
      "item": `${siteConfig.url}/best-gynecologist-in-kalyani-nagar/`
    }
  ]
};

export default function GynecologistKalyaniNagarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <HeroSection />
        <InfoStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqMapSection />
      </main>
    </>
  );
}
