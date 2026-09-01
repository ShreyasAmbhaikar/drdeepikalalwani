import Link from 'next/link';
import Image from 'next/image';
import { AnimatedHeading } from '../ui/AnimatedHeading';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHeader({ title, breadcrumbs, bgImage }: PageHeaderProps) {
  return (
    <section className="bg-[#2A0F40] pt-[140px] pb-[80px] lg:pt-[170px] lg:pb-[110px] relative overflow-hidden z-10">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {bgImage ? (
        <>
          <Image 
            src={bgImage} 
            alt={title} 
            fill 
            sizes="100vw"
            className="object-cover object-center z-0 brightness-[0.70] contrast-[1.05]"
            priority
          />
          {/* Light Translucent Royal Purple Tint Overlay for brand cohesion while keeping scene bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B1259]/50 via-[#5C1D88]/30 to-[#3B1259]/50 z-0" />
          <div className="absolute inset-0 bg-black/15 z-0" />
        </>
      ) : (
        <div className="absolute inset-0 gradient-dark-section z-0" />
      )}

      <div className="container mx-auto px-4 max-w-[1300px] relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <AnimatedHeading
            as="h1"
            text={title}
            className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-white leading-[1.15] mb-5 capitalize drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] font-onest"
          />

          <nav
            role="navigation"
            aria-label="Breadcrumbs"
            className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-sm"
          >
            <ol className="flex items-center space-x-2 text-[13.5px] md:text-[14.5px] font-medium text-purple-100">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-purple-300/50">/</span>}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="text-purple-200 hover:text-white transition-colors duration-200"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-bold">{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
