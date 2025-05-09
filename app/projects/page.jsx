"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import ProjectsSection from "@/components/projects-section";
import Link from "next/link";
import ContactSection from "@/components/contact-section";
export default function ProjectsSections() {
  return (
    <div className=" relative">
      <div className="w-full h-full pb-28">
   <Header />
   </div>
      
      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0  z-10" />
        <Image
          src="/subhero.png"
          alt="مشاريعنا"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[301px] h-[185px] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-10 px-10 gap-[38px] z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] w-[140px] h-[14px]">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">المشاريع</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">الرئيــسية</span>
            </Link>
          </div>
          <h1 className="text-white text-[32px] sm:text-[42px] md:text-[52px] font-extrabold leading-[1.2]">المشاريع</h1>
        </div>
      </section>

      {/* About Section */}
      <ProjectsSection showButton={false} />
<TestimonialsSection />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}