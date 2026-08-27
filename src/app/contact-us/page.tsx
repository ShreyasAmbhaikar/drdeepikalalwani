import React from "react";
import PageHeader from "@/components/landing/PageHeader";
import { Clock, MapPin, Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact Dr. Deepika Lalwani(Nagwani) | Gynecologist in Kalyani Nagar Pune",
  description: "Get in touch with Dr. Deepika Lalwani(Nagwani) (MBBS, DGO Mumbai) at Tower, 2nd Floor, Lalwani's Clinic The collection by Brahma Corp, W10, Shop no. 219, New Kalyani Nagar, Digambar Nagar, Wadgaon Sheri, Pune. Call +91 9359264895 for appointments.",
  alternates: {
    canonical: "/contact-us/",
  },
};

export default function ContactUsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  return (
    <>
      <main>
        <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />

        {/* Info Boxes Section */}
        <section className="py-[80px] lg:py-[100px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Clinic Hours (Soft Lilac Secondary Card) */}
              <div className="bg-secondary/90 p-8 rounded-[30px] border border-purple-200/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full text-primary shadow-sm">
                <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center text-accent mb-6 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-[22px] font-bold text-primary mb-6 font-onest">Clinic Hours</h3>
                <ul className="space-y-3.5 text-text text-[14px] mt-auto">
                  <li className="flex justify-between border-b border-purple-200/50 pb-2.5">
                    <span className="font-semibold text-primary">Monday – Saturday</span>
                    <div className="flex flex-col items-end text-right font-medium">
                      <span>10:00 AM – 1:30 PM</span>
                      <span>6:00 PM – 8:30 PM</span>
                    </div>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span className="font-semibold text-primary">Sunday</span>
                    <span className="font-medium text-primary">10:00 AM – 1:30 PM</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Clinic Address (Vibrant Gradient CTA Card) */}
              <div className="gradient-purple-cta text-white p-8 rounded-[30px] border border-white/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full shadow-md">
                <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-white mb-6 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-4 font-onest">Clinic Address</h3>
                <a 
                  href={siteConfig.contact.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-200 transition-colors duration-300 font-medium text-[14px] leading-[1.65] mt-auto block"
                >
                  {siteConfig.contact.address}
                </a>
              </div>

              {/* Card 3: Call & WhatsApp (Dark Primary Purple Card) */}
              <div className="bg-primary text-white p-8 rounded-[30px] border border-white/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full shadow-md">
                <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-accent mb-6 shrink-0">
                  <Phone className="w-7 h-7 text-purple-300" />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-6 font-onest">Call &amp; WhatsApp</h3>
                <div className="space-y-4 mt-auto">
                  <a 
                    href={`tel:${siteConfig.contact.phoneRaw}`} 
                    className="flex items-center gap-3 text-white font-bold hover:text-purple-300 transition-colors duration-300 text-[16px]"
                  >
                    <Phone className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <a 
                    href={siteConfig.contact.whatsappUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white font-bold hover:text-[#25D366] transition-colors duration-300 text-[15px]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-[80px] lg:pb-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="w-full h-[450px] lg:h-[550px] rounded-[30px] overflow-hidden border border-purple-200/60 shadow-xl relative">
              <iframe 
                src="https://maps.google.com/maps?q=Dr%20Deepika%20Lalwani(Nagwani)%20Brahma%20Corp%20Wadgaon%20Sheri%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                title="Dr Deepika Lalwani(Nagwani) Clinic Location, New Kalyani Nagar, Pune" 
                aria-label="Dr Deepika Lalwani(Nagwani) Clinic Location, New Kalyani Nagar, Pune"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
