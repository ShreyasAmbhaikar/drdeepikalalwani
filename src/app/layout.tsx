import type { Metadata } from "next";
import { Onest, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWidgets } from "@/components/landing/FloatingWidgets";
import { siteConfig } from "@/lib/site-config";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Dr. Deepika Lalwani(Nagwani) | Best Gynecologist in Kalyani Nagar & Wadgaon Sheri, Pune",
  description: "Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai) is a top lady gynecologist and obstetrician in Kalyani Nagar & Wadgaon Sheri, Pune. Compassionate care in normal delivery, high-risk pregnancy, PCOD/PCOS, infertility, & laparoscopic surgery.",
  keywords: siteConfig.keywords,
  authors: [{ name: "Dr. Deepika Lalwani(Nagwani)" }],
  creator: "Dr. Deepika Lalwani",
  publisher: "Dr. Deepika Lalwani(Nagwani)",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Dr. Deepika Lalwani(Nagwani)",
    title: "Dr. Deepika Lalwani(Nagwani) | Best Gynecologist in Kalyani Nagar & Wadgaon Sheri",
    description: "Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai) - Consultant Obstetrician & Gynecologist in New Kalyani Nagar, Wadgaon Sheri, Pune. Expert maternity, PCOD, infertility & gynae care.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Dr. Deepika Lalwani(Nagwani) Gynecologist Clinic",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Deepika Lalwani(Nagwani) | Best Gynecologist in Kalyani Nagar & Wadgaon Sheri",
    description: "Consult Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai) for pregnancy care, normal delivery, PCOD/PCOS, and laparoscopic procedures in Pune.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalClinic"],
    "name": "Dr. Deepika Lalwani(Nagwani)",
    "alternateName": "Dr. Deepika Lalwani's Clinic",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/images/logo.png`,
    "image": `${siteConfig.url}/images/logo.png`,
    "description": siteConfig.description,
    "telephone": siteConfig.contact.phoneRaw,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tower, 2nd Floor, Lalwani's Clinic The collection by Brahma Corp, W10, Shop no. 219, New Kalyani Nagar, Digambar Nagar, Wadgaon Sheri",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411014",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5491654",
      "longitude": "73.9160916"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "13:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "18:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "13:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "105",
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "Obstetrics",
      "Gynecology",
      "Infertility",
      "Laparoscopy"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Women's Health & Gynecological Services",
      "itemListElement": siteConfig.services.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": s.title,
          "description": s.desc
        }
      }))
    }
  };

  return (
    <html lang="en" className={`${onest.variable} ${outfit.variable} scroll-smooth antialiased overflow-x-hidden`}>
      <head>
        <meta name="theme-color" content="#2D0A4E" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}

