"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";

type TabItem = {
  title: string;
  image: string;
};

type TabContent = {
  [key: string]: TabItem[];
};

// Add Skeleton component
const SkeletonCard = () => (
  <div className="sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-4 lg:p-6 w-full flex flex-col">
    <div className="w-full aspect-square rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden bg-gray-200 animate-pulse mb-4 sm:mb-6 lg:mb-8" />
    <div className="w-full pt-2 sm:pt-3 lg:pt-4 border-t border-gray-100">
      <div className="flex flex-row-reverse items-center gap-2 sm:gap-3 justify-end">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

export default function DoorsPage() {
  const [activeTab, setActiveTab] = useState("doors");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages(prev => ({ ...prev, [imageKey]: true }));
  };

  const tabs = [
    { id: "doors", label: "أبـــواب" },
    { id: "machines", label: "  مكـــاين" },
  ];

  const tabContent: TabContent = {
    doors: [
      { title: "DIS 204", image: "/door1.png" },
      { title: "DS 201", image: "/door2.png" },
      { title: "DM 202", image: "/door3.png" },
      { title: "DM 203", image: "/door4.png" },
      { title: "DHS 305", image: "/door5.png" },
      { title: "DH 303", image: "/door6.png" },
      { title: "DH 302", image: "/door7.png" },
      { title: "DH 301", image: "/door8.png" },
      { title: "DIS 205", image: "/door9.png" },
      { title: "DHS 307", image: "/door10.png" },
      { title: "DHG 306", image: "/door11.png" },
      { title: "DHS 308", image: "/door12.png" },
      { title: "DSV 304", image: "/door13.png" }
    ],
    machines: [
      { title: "ITALY GEAR BOX – MIG 504", image: "/machine1.png" },
      { title: "TOP GEARS BOX – MTG 503", image: "/machine2.png" },
      { title: "ALBERTO SASSI LEO – MAS 502", image: "/machine3.png" },
      { title: "MONTANARI – MM 501", image: "/machine4.png" },
      { title: "ZIEH ABEGG GEARLESS – MCH 508", image: "/machine5.png" },
      { title: "GEM GEARLESS – MB 507", image: "/machine6.png" },
      { title: "SCHINDLER – MSG 506", image: "/machine7.png" },
      { title: "SICOR GEARS BOX – MSG 505", image: "/machine8.png" },
      { title: "SICOR GEARLESS – MZ 509", image: "/machine9.png" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className=" relative">
      <div className="w-full h-full pb-28">
        <Header />
      </div>
      
      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0  z-10" />
        <Image
          src="/subhero.png"
          alt="مكـــاين"
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8 z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] h-[14px]">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">أبـــواب</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">         
              <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">الرئيــسية</span>
            </Link>
          </div>
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] text-center whitespace-nowrap"> أبـــواب / كبــاين</h1>
        </div>
      </section>

      {/* Elevator Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-[100px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-12 max-w-[967px] mx-auto">
            <div className="flex items-center gap-5">
              <div className="bg-[#EBF2F9] rounded-[40px] py-[10px] px-6">
                <span className="text-primary font-bold text-base">أبـــواب</span>
              </div>
            </div>

            <h2 className="text-primary text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[1.2] text-center">
            إليـــك أبرز أبــواب و المكــاين         
               </h2>

            <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
            نوفّر أبواب مصاعد مصنوعة من الفولاذ المقاوم للصدأ، تجمع بين الصلابة والمظهر العصري، وتضمن أداءً طويل الأمد في جميع البيئات.
                        </p>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-[40px] py-[10px] px-6 h-[58px] transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-[#EBF2F9] text-[#475467]"
                  }`}
                >
                  <span className="font-bold text-sm whitespace-nowrap">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16 w-full px-2 sm:px-4 max-w-[1600px] mx-auto"
          >
            {tabContent[activeTab].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-4 lg:p-6 w-full flex flex-col transition-all hover:border-2 hover:border-primary"
              >
                <div className="w-full aspect-square rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#FAFAFA] mb-4 sm:mb-6 lg:mb-8">
                  <div className="relative w-full h-full">
                    {!loadedImages[`${item.image}-${index}`] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-contain p-2 sm:p-3 lg:p-4 transition-opacity duration-300 ${
                        loadedImages[`${item.image}-${index}`] ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoadingComplete={() => handleImageLoad(`${item.image}-${index}`)}
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
                    />
                  </div>
                </div>
                <div className="w-full pt-2 sm:pt-3 lg:pt-4 border-t border-gray-100">
                  <div className="flex flex-row-reverse items-center gap-2 sm:gap-3 justify-end">
                    <h3 className="text-primary text-sm sm:text-base lg:text-lg font-bold leading-tight sm:leading-relaxed text-right line-clamp-2">
                      {item.title}
                    </h3>
                    <svg 
                      width="8" 
                      height="8" 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-[-90deg] flex-shrink-0 sm:w-3 sm:h-3 lg:w-4 lg:h-4"
                    >
                      <path d="M6 0L11.1962 9L0.803847 9L6 0Z" fill="#EC2127"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}