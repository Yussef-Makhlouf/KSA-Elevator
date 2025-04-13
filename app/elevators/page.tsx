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

const ImageWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full aspect-square">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain p-2 sm:p-3 lg:p-4 transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default function ElevatorPage() {
  const [activeTab, setActiveTab] = useState("elevators");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const tabs = [
    { id: "elevators", label: "انواع المصاعد" },
    { id: "floors", label: "الأرضيات والأسقف والمساكات" },
  ];

  const tabContent: TabContent = {
    elevators: [
      { title: "مصاعد الأشخاص", image: "/duct1.png" },
      { title: "مصاعد المجمعات", image: "/duct2.png" },
      { title: "مصاعد البضائع", image: "/duct3.png" },
      { title: "مصاعد الأبراج (السرعات العالية)", image: "/duct4.png" },
      { title: "مصاعد بدون غرفة ماكينة", image: "/duct5.png" },
      { title: "مصاعد سيارات", image: "/duct6.png" },
      { title: "مصاعد بانوراما", image: "/duct7.png" },
      { title: "مصاعد المستشفيات", image: "/duct8.png" },
      { title: "مصاعد ذوي الهمم", image: "/duct9.png" },
      { title: "مصاعد طعام", image: "/duct10.png" },
      { title: "مصاعد حموله", image: "/duct11.png" },
      { title: "مصاعد سيارات", image: "/duct12.png" },
      { title: "مصاعد بانوراما", image: "/duct13.png" },
      { title: "مصاعد بانوراما", image: "/duct14.png" },
      { title: "مصاعد بانوراما", image: "/duct15.png" },

    ],
    floors: [
      { title: "أرضيات ", image: "/floor1.png" },
      { title: "أرضيات ", image: "/floor2.png" },
      { title: "أسقف ", image: "/floor3.png" },
      { title: "مساكات ", image: "/floor4.png" },
      { title: "أرضيات ", image: "/floor5.png" },
      { title: "أسقف ", image: "/floor6.png" },
      { title: "مساكات ", image: "/floor7.png" },
      { title: "أرضيات ", image: "/floor8.png" },
      { title: "أسقف ", image: "/floor9.png" },
      { title: "مساكات ", image: "/floor10.png" },
      { title: "أرضيات ", image: "/floor11.png" },
      { title: "أسقف ", image: "/floor12.png" },
      { title: "مساكات ", image: "/floor13.png" },
      { title: "أرضيات ", image: "/floor14.png" },
      { title: "أسقف ", image: "/floor15.png" },
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
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] text-center whitespace-nowrap">أنواع المصاعد / الماكينات</h1>
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
                <span className="text-primary font-bold text-base">مصــاعد</span>
              </div>
            </div>

            <h2 className="text-primary text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[1.2] text-center">
              إليـــك أبرز أنـــــواع المصــاعد
            </h2>

            <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
              نقدّم مجموعة متكاملة من المصاعد تلبي مختلف الاحتياجات، من السكنية والطبية إلى الفاخرة وذات السرعات العالية والمتخصصة.
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
                  <ImageWithSkeleton src={item.image} alt={item.title} />
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