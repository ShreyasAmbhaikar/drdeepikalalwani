import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Clinic Gallery & Tour | Dr. Deepika Lalwani's Clinic Kalyani Nagar Pune",
  description: "Take a virtual tour of Dr. Deepika Lalwani's Clinic at The Collection by Brahma Corp, New Kalyani Nagar, Pune. Explore our modern consultation rooms, reception lobby, and patient waiting area.",
  alternates: {
    canonical: "https://drdeepikalalwani.com/gallery/",
  },
  openGraph: {
    title: "Clinic Gallery & Tour | Dr. Deepika Lalwani's Clinic Kalyani Nagar Pune",
    description: "Explore our modern clinical facilities, consultation suite, and patient waiting lounge in Kalyani Nagar & Wadgaon Sheri, Pune.",
    url: `${siteConfig.url}/gallery/`,
    siteName: "Dr. Deepika Lalwani's Clinic",
    images: [
      {
        url: "/images/gallery/clinic-entrance-arch.webp",
        width: 1200,
        height: 900,
        alt: "Dr. Deepika Lalwani's Clinic Gallery Tour",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
