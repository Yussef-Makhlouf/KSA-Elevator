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
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
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
  </div>
);

export default function ElevatorPage() {
  const [activeTab, setActiveTab] = useState("control");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages(prev => ({ ...prev, [imageKey]: true }));
  };

  const tabs = [
    { id: "control", label: " لوحة التحكم" },
    { id: "request", label: " لوحة الطلب " },
  ];

  const tabContent: TabContent = {
    control: [
      { title: "لوحة تحكم أركوب - سيريل كونكشن", image: "/control1.png" },
      { title: "بطارية طوارئ", image: "/control2.png" },
      { title: "انفرتر", image: "/control3.png" },
      { title: "كنترول لوحة التحكم", image: "/control4.png" },
      { title: "كارت هيدفسان", image: "/control5.png" },
      { title: "كارت أركل 300", image: "/control6.png" },
      { title: "لوحة تحكم أركود - سيريل كونكشن", image: "/control7.png" },

    ],
    request: [
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out1.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out2.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out3.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out4.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out5.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out6.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out7.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out8.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out9.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out10.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out11.png" },
      { title: "لوحات الطلب الداخلية والخارجية ", image: "/out12.png" },

      
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
          alt="مصاعد"
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8 z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] h-[14px]">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">مصاعد</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">         
              <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">الرئيــسية</span>
            </Link>
          </div>
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] text-center whitespace-nowrap">  كنتــرول التحكــم و الكهــربــاء </h1>
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
                <span className="text-primary font-bold text-base">كنتــرول</span>
              </div>
            </div>

            <h2 className="text-primary text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[1.2] text-center">
            إليـــك أبرز كنتــرول التحكــم و الكهــربــاء       
                 </h2>

            <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
            نوفّر أحدث أنظمة التحكم واللوحات الكهربائية الذكية لضمان أداء دقيق وآمن، واستجابة فورية في تشغيل المصاعد.
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
            {isLoading ? (
              // Show skeleton loading
              Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  variants={itemVariants}
                >
                  <SkeletonCard />
                </motion.div>
              ))
            ) : (
              tabContent[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-4 lg:p-6 w-full flex flex-col transition-all hover:border-2 hover:border-primary"
                >
                  <div className="w-full aspect-square rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#FAFAFA] mb-4 sm:mb-6 lg:mb-8">
                    <div className="relative w-full h-full">
                      {!loadedImages[`${activeTab}-${index}`] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                      )}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={`object-contain p-2 sm:p-3 lg:p-4 transition-opacity duration-300 ${
                          loadedImages[`${activeTab}-${index}`] ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
                        onLoadingComplete={() => handleImageLoad(`${activeTab}-${index}`)}
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
              ))
            )}
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