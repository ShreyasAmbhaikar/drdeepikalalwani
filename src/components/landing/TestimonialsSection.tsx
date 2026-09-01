"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

interface Testimonial {
  name: string;
  role: string;
  isLocalGuide?: boolean;
  avatar: string;
  initial: string;
  avatarBg: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vaishnavi Patki",
    role: "Verified Google Patient",
    isLocalGuide: true,
    avatar: "/images/testimonials/vaishnavi-patki.webp",
    initial: "V",
    avatarBg: "bg-[#E11D48]",
    text: "Best gynecologist in Wadgaonsheri 😍 Thank you so much 😊 for your guidance. Taking treatment for PCOS for 1 year and now my period cycle is completely normal. Don't worry and visit this clinic, she is the best! Must recommend.",
    rating: 5
  },
  {
    name: "syed furquan ahmed",
    role: "Verified Google Patient",
    isLocalGuide: false,
    avatar: "/images/testimonials/syed-furquan-ahmed.webp",
    initial: "S",
    avatarBg: "bg-[#2563EB]",
    text: "She is an Excellent Doctor, simple, superb Human being, Sober, approachable, friendly approach with smiling face with her selfless service. Overall 100/100.",
    rating: 5
  },
  {
    name: "Nisha Giri",
    role: "Verified Google Patient",
    isLocalGuide: false,
    avatar: "/images/testimonials/nisha-giri.webp",
    initial: "N",
    avatarBg: "bg-[#7C3AED]",
    text: "Such an experienced personality she is. Treated the disease perfectly. Extremely kind towards patient. Feel free to speak to her, as she ll attend you in her best possible way. Thank You Dr. Deepika.",
    rating: 5
  },
  {
    name: "Navneet Sharma",
    role: "Verified Google Patient",
    isLocalGuide: true,
    avatar: "/images/testimonials/navneet-sharma.webp",
    initial: "N",
    avatarBg: "bg-[#0D9488]",
    text: "After moving to Pune, we met Dr. Deepika and she took wonderful care of my wife during pregnancy. Her kindness, expertise, and attentiveness made all the difference. Excellent at counselling and monitoring pregnancy!",
    rating: 5
  },
  {
    name: "Payal Dalwadi",
    role: "Verified Google Patient",
    isLocalGuide: false,
    avatar: "/images/testimonials/payal-dalwadi.webp",
    initial: "P",
    avatarBg: "bg-[#D97706]",
    text: "Dr. Deepika Lalwani is a highly skilled and compassionate gynecologist known for patient-friendly care and thorough medical guidance. Highly recommended for anyone seeking a trustworthy gynecologist. ☺️😊✨",
    rating: 5
  }
];

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="rounded-[18px] p-[20px] md:p-[24px] w-full h-full flex flex-col justify-between border transition-all duration-300 bg-[#2D0E44] border-white/10 hover:border-white/20 shadow-lg min-h-[230px] md:min-h-[250px]"
    >
      <div>
        {/* Top bar: 5 Yellow Stars & Google Badge */}
        <div className="flex items-center justify-between gap-2 mb-[14px]">
          <div className="flex gap-[4px]">
            {Array.from({ length: item.rating }).map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512" 
                className="w-[14px] h-[14px] fill-[#FFC107]"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            ))}
          </div>

          {/* Google Icon Badge */}
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10.5px] font-medium">
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Review</span>
          </div>
        </div>

        {/* Quote Text */}
        <p className="text-[13.5px] md:text-[14.5px] font-normal leading-[1.6em] text-white/90 mb-[16px]">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-[12px] pt-[14px] border-t border-white/10 mt-[12px]">
        {/* Avatar */}
        <div className="relative shrink-0">
          {!imgError && item.avatar ? (
            <div className="w-[42px] h-[42px] rounded-full overflow-hidden ring-2 ring-white/20 bg-[#391754]">
              <Image 
                src={item.avatar} 
                alt={item.name}
                width={42} 
                height={42} 
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center text-white font-bold text-[15px] ${item.avatarBg} ring-2 ring-white/20`}>
              {item.initial}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <p className="text-[14.5px] md:text-[15px] font-bold text-white leading-tight">
              {item.name}
            </p>
            {item.isLocalGuide && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#FFB800]/15 text-[#FFC107] border border-[#FFB800]/30 shadow-xs">
                <svg className="w-2.5 h-2.5 fill-[#FFC107]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Local Guide
              </span>
            )}
          </div>
          <p className="text-[11.5px] text-white/60 m-0 leading-normal flex items-center gap-1">
            <span>{item.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="py-[75px] lg:py-[95px] bg-[#391754] relative overflow-hidden">
      {/* Background Dotted World Map Graphic */}
      <div 
        className="absolute inset-0 opacity-[0.09] pointer-events-none bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/images/testimonials-world-map.webp")`
        }}
      />

      <div className="container mx-auto max-w-[1300px] px-4 relative z-10">
        
        {/* Top Header */}
        <div className="mb-[36px] lg:mb-[44px] animate-fade-in-up">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800]"></span>
            <span className="text-[12.5px] md:text-[13.5px] font-bold tracking-[0.15em] text-purple-200 uppercase">
              PATIENT REVIEWS &amp; TESTIMONIALS
            </span>
          </div>
          <h2 className="text-[30px] md:text-[42px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[700px]">
            Real experiences shared by real patients
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="w-full"
          >
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide key={index} className="!flex h-auto">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center items-center gap-[12px] mt-[32px] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <button className="testimonial-prev flex items-center justify-center w-[38px] h-[38px] rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 cursor-pointer" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className="testimonial-next flex items-center justify-center w-[38px] h-[38px] rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 cursor-pointer" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};
export default TestimonialsSection;
