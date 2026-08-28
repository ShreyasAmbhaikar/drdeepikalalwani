"use client";

import React, { useState } from "react";
import PageHeader from "@/components/landing/PageHeader";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  categoryLabel: string;
  title: string;
}

export default function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gallery" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/gallery/clinic-entrance-arch.webp",
      alt: "Grand Clinic Entrance and Welcome Gateway at Dr. Deepika Lalwani's Clinic in Kalyani Nagar",
      categoryLabel: "Clinic Entrance",
      title: "Clinic Entrance & Welcome Gateway",
    },
    {
      id: 2,
      src: "/images/gallery/clinic-exterior-corridor.webp",
      alt: "Executive Clinic Corridor and Official Nameplate for Dr. Deepika Lalwani (Nagwani)",
      categoryLabel: "Clinic Facility",
      title: "Executive Corridor & Doctor Nameplate",
    },
    {
      id: 3,
      src: "/images/gallery/clinic-reception-lobby.webp",
      alt: "Reception Counter and Executive Lobby at Dr. Deepika Lalwani's Clinic",
      categoryLabel: "Reception & Lobby",
      title: "Reception Counter & Executive Lobby",
    },
    {
      id: 4,
      src: "/images/gallery/patient-waiting-lounge.webp",
      alt: "Comfortable Patient Waiting Lounge and Certifications Wall at Dr. Deepika Lalwani's Clinic",
      categoryLabel: "Waiting Lounge",
      title: "Comfortable Patient Waiting Lounge",
    },
    {
      id: 5,
      src: "/images/gallery/clinic-building-night-view.webp",
      alt: "The Collection by Brahma Corp Building Facade with Illuminated Signage at Night",
      categoryLabel: "Building Exterior",
      title: "The Collection Building & Illuminated Signage",
    },
  ];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    setIsZoomed(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? galleryImages.length - 1 : activeImageIndex - 1
      );
      setIsZoomed(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === galleryImages.length - 1 ? 0 : activeImageIndex + 1
      );
      setIsZoomed(false);
    }
  };

  return (
    <>
      <main>
        <PageHeader title="Our Clinic Gallery" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            {/* Header intro */}
            <div className="text-center max-w-[750px] mx-auto mb-[50px] flex flex-col gap-3">
              <span className="text-accent text-[14px] font-bold tracking-widest uppercase">
                Virtual Clinic Tour
              </span>
              <h2 className="text-[30px] md:text-[42px] font-extrabold text-primary leading-tight font-onest">
                Step Inside Dr. Deepika Lalwani&apos;s Clinic
              </h2>
              <p className="text-text text-[15px] md:text-[16px] leading-relaxed">
                Explore our modern facilities at {siteConfig.contact.address}. We provide a hygienic, tranquil, and comfortable medical environment equipped with advanced diagnostic tools to ensure your visit is reassuring and seamless.
              </p>
            </div>

            {/* Masonry CSS Column Gallery */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border">
              {galleryImages.map((image, idx) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(idx)}
                  className="break-inside-avoid mb-6 group relative overflow-hidden rounded-[24px] border border-purple-100/80 shadow-sm cursor-zoom-in transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image Element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 z-10" />

                  {/* Absolute UI overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                    <div>
                      <span className="inline-block text-[11px] font-bold text-white/90 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 font-onest">
                        {image.categoryLabel}
                      </span>
                      <h3 className="text-white font-bold text-[17px] leading-tight font-onest">
                        {image.title}
                      </h3>
                    </div>
                    
                    {/* Maximize Icon */}
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Ribbon */}
            <div className="mt-[50px] bg-secondary/90 border border-purple-200/70 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
              <div>
                <h4 className="font-bold text-[20px] text-primary mb-1 font-onest">
                  Want to consult Dr. Deepika Lalwani in person?
                </h4>
                <p className="text-text text-[15px]">
                  Book an appointment online or call us directly at {siteConfig.contact.phone} to schedule a clinic visit today.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="gradient-purple-cta text-white font-bold text-[15px] px-6 py-3.5 rounded-[12px] hover:opacity-95 transition-all duration-300 shrink-0 shadow-md"
              >
                Schedule Clinic Visit
              </Link>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 cursor-zoom-out"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Image Container */}
            <div 
              className="relative max-w-[95vw] max-h-[92vh] flex flex-col items-center justify-center z-40 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-auto max-w-full max-h-[78vh] md:max-h-[83vh] rounded-[12px] scrollbar-thin">
                <img
                  src={galleryImages[activeImageIndex].src}
                  alt={galleryImages[activeImageIndex].alt}
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`object-contain shadow-2xl border border-white/10 transition-all duration-300 ${
                    isZoomed 
                      ? "max-w-none max-h-none w-[130vw] md:w-[110vw] cursor-zoom-out" 
                      : "max-w-full max-h-[78vh] md:max-h-[83vh] cursor-zoom-in"
                  }`}
                />
              </div>
              {/* Description strip at the bottom */}
              <div className="mt-4 text-center text-white/90 px-4 max-w-[700px] pointer-events-none flex flex-col items-center gap-1">
                <span className="text-[12px] font-bold text-white/80 bg-white/15 backdrop-blur-md px-3 py-0.5 rounded-full uppercase tracking-wider font-onest">
                  {galleryImages[activeImageIndex].categoryLabel}
                </span>
                <p className="text-[16px] md:text-[19px] font-bold leading-snug font-onest text-white drop-shadow">
                  {galleryImages[activeImageIndex].title}
                </p>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>
    </>
  );
}
