"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICES_ITEMS = [
  { label: "Normal Delivery Care", href: "/normal-delivery-in-kalyani-nagar" },
  { label: "PCOD & PCOS Care", href: "/pcod-pcos-care-in-kalyani-nagar" },
  { label: "High Risk Pregnancy Management", href: "/high-risk-pregnancy-management-in-kalyani-nagar" },
  { label: "Infertility, IUI & IVF", href: "/infertility-iui-ivf-in-kalyani-nagar" },
  { label: "Laparoscopic Procedures", href: "/laparoscopic-procedures-in-kalyani-nagar" },
  { label: "LSCS (Caesarean Section)", href: "/lscs-caesarean-section-in-kalyani-nagar" },
  { label: "Cervical Cancer Vaccine & Screening", href: "/cervical-cancer-vaccination-screening-in-kalyani-nagar" },
  { label: "Scarless Hysterectomy (NDVH)", href: "/scarless-hysterectomy-in-kalyani-nagar" },
  { label: "Pre Conceptional Counselling", href: "/pre-conceptional-counselling-in-kalyani-nagar" },
  { label: "Hysteroscopy Procedures", href: "/hysteroscopy-in-kalyani-nagar" },
  { label: "Menstrual Cycle Problems", href: "/menstrual-cycle-problems-in-kalyani-nagar" },
  { label: "Family Planning & Contraception", href: "/contraception-advice-in-kalyani-nagar" },
  { label: "Pregnancy Care", href: "/pregnancy-care-in-kalyani-nagar" },
  { label: "Pubertal Counselling", href: "/pubertal-counselling-in-kalyani-nagar" },
  { label: "Menstrual Hygiene", href: "/menstrual-hygiene-in-kalyani-nagar" },
  { label: "Lactational Counselling", href: "/lactational-counselling-in-kalyani-nagar" },
  { label: "Pelvic Infections Treatment", href: "/pelvic-infections-treatment-in-kalyani-nagar" },
  { label: "Cancer Screening", href: "/cancer-screening-in-kalyani-nagar" },
  { label: "Tubal Ligation & Reversal", href: "/tubal-ligation-reversal-in-kalyani-nagar" },
  { label: "MTP, D & E Services", href: "/mtp-d-e-services-in-kalyani-nagar" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const normalize = (path: string) => {
    if (!path) return "/";
    const cleaned = path.replace(/\/$/, "");
    return cleaned === "" ? "/" : cleaned;
  };
  const isLinkActive = (href: string) => {
    const normPath = normalize(pathname || "");
    const normHref = normalize(href);
    if (normHref === "/") {
      return normPath === "/" || normPath === "/best-gynecologist-in-kalyani-nagar";
    }
    return normPath === normHref || normPath.startsWith(normHref + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3 md:py-3.5" : "bg-white py-4 md:py-5"
      )}
    >
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" prefetch={false} className="relative z-50 flex items-center gap-3.5 md:gap-4 shrink-0 group">
            <Image
              src="/images/logo-emblem-dark.svg"
              alt="Dr. Deepika Lalwani(Nagwani)"
              width={60}
              height={60}
              className="h-12 md:h-14 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col text-left justify-center select-none gap-1.5 md:gap-2">
              <span className="text-[17.5px] md:text-[20.5px] font-[850] text-[#242736] tracking-[0.06em] uppercase font-outfit leading-none group-hover:text-primary transition-colors">
                Dr. Deepika
              </span>
              <span className="text-[12px] md:text-[13.5px] font-[750] text-[#7C25B8] tracking-[0.16em] uppercase font-outfit leading-none">
                Lalwani (Nagwani)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              if (link.label === "Services") {
                return (
                  <div key={link.label} className="relative group py-2">
                    <Link
                      href={link.href}
                      prefetch={false}
                      className={cn(
                        "text-[15px] font-semibold transition-all duration-300 pb-[4px] border-b-2 flex items-center gap-1",
                        active ? "text-accent border-accent font-bold" : "text-primary border-transparent hover:text-accent"
                      )}
                    >
                      <span>{link.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:rotate-180 opacity-70"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </Link>
                    
                    {/* Dropdown Menu with Scrollbar (visible ~10 items) */}
                    <div className="absolute top-full left-0 w-[310px] max-h-[380px] overflow-y-auto scrollbar-thin bg-white rounded-2xl shadow-2xl border border-purple-100/90 py-2.5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      {SERVICES_ITEMS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          prefetch={false}
                          className={cn(
                            "px-5 py-2 text-[13.5px] font-semibold transition-colors duration-200 hover:bg-secondary hover:text-accent text-primary block",
                            isLinkActive(item.href) ? "text-accent bg-secondary/50 font-bold" : ""
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={false}
                  className={cn(
                    "text-[15px] font-semibold transition-all duration-300 pb-[4px] border-b-2",
                    active ? "text-accent border-accent font-bold" : "text-primary border-transparent hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2.5 gradient-purple-cta text-white font-bold text-[14px] md:text-[14.5px] px-[22px] py-[11px] rounded-[11px] shadow-[0_4px_14px_rgba(124,37,184,0.32)] hover:shadow-[0_6px_20px_rgba(124,37,184,0.45)] hover:brightness-110 transition-all duration-300 group shrink-0"
            >
              <span>Book An Appointment</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-out */}
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 lg:hidden flex flex-col p-6 overflow-y-auto transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mt-16 flex flex-col gap-6">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            if (link.label === "Services") {
              return (
                <div key={link.label} className="flex flex-col border-b border-divider pb-4">
                  <Link
                    href={link.href}
                    prefetch={false}
                    className={cn(
                      "text-[18px] font-semibold transition-all duration-300 pb-2 pl-2 border-l-4",
                      active ? "text-accent font-bold border-accent" : "text-primary border-transparent"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="flex flex-col gap-3 pl-4 pt-2">
                    {SERVICES_ITEMS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        prefetch={false}
                        className={cn(
                          "text-[15px] font-medium transition-all duration-300 pl-2 border-l-2",
                          isLinkActive(item.href) ? "text-accent font-bold border-accent" : "text-primary/80 border-transparent hover:text-accent"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                className={cn(
                  "text-[18px] font-semibold transition-all duration-300 border-b border-divider pb-4 pl-2 border-l-4",
                  active ? "text-accent font-bold border-accent" : "text-primary border-transparent"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact-us" size="sm" icon className="w-full mt-4">
            Book An Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
