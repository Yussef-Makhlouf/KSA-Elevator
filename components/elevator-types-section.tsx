"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

type TabItem = {
  id: number;
  title: string;
  image: string;
};

type Tab = {
  id: string;
  label: string;
};

type TabContent = {
  [key: string]: TabItem[];
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

const SkeletonCard = () => (
  <motion.div
    variants={itemVariants}
    className="sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-4 lg:p-6 w-full flex flex-col border border-gray-100"
  >
    <div className="w-full aspect-square rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden bg-gray-100 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer" />
    </div>
    <div className="w-full pt-2 sm:pt-3 lg:pt-4 border-t border-gray-100">
      <div className="flex flex-row-reverse items-center gap-2 sm:gap-3 justify-end">
        <h3 className="text-primary text-sm sm:text-base lg:text-lg font-bold leading-tight sm:leading-relaxed text-right line-clamp-2">
          {/* Title will be visible */}
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
)

const SkeletonTabs = () => (
  <div className="flex items-center gap-3 flex-wrap justify-center">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="rounded-[40px] py-[10px] px-6 h-[58px] w-32 bg-gray-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer" />
      </div>
    ))}
  </div>
)

export default function ElevatorTypesSection() {
  const [activeTab, setActiveTab] = useState("types")
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tabs: Tab[] = [
    { id: "types", label: "انواع المصاعد" },
    { id: "machines", label: "المكينات" },
    { id: "doors", label: "أبــواب" },
    { id: "cabins", label: "كباين" },
    { id: "control", label: "كنترول التحكم والكهرباء" },
  ]

  const tabContent: TabContent = {
    types: [
      { id: 1, title: "مصاعد الأشخاص", image: "/duct1.png" },
      { id: 2, title: "مصاعد المجمعات", image: "/duct2.png" },
      { id: 3, title: "مصاعد البضائع", image: "/duct3.png" },
      { id: 4, title: "مصاعد الأبراج (السرعات العالية)", image: "/duct4.png" },
      { id: 5, title: "مصاعد بدون غرفة ماكينة", image: "/duct5.png" },
      { id: 6, title: "مصاعد سيارات", image: "/duct6.png" },
      { id: 7, title: "مصاعد بانوراما", image: "/duct7.png" },
      { id: 8, title: "مصاعد المستشفيات", image: "/duct8.png" },
    ],
    machines: [
      { id: 1, title: "ITALY GEAR BOX – MIG 504", image: "/machine1.png" },
      { id: 2, title: "TOP GEARS BOX – MTG 503", image: "/machine2.png" },
      { id: 3, title: "ALBERTO SASSI LEO – MAS 502", image: "/machine3.png" },
      { id: 4, title: "MONTANARI – MM 501", image: "/machine4.png" },
      { id: 5, title: "ZIEH ABEGG GEARLESS – MCH 508", image: "/machine5.png" },
      { id: 6, title: "GEM GEARLESS – MB 507", image: "/machine6.png" },
      { id: 7, title: "SCHINDLER – MSG 506", image: "/machine7.png" },
      { id: 8, title: "SICOR GEARS BOX – MSG 505", image: "/machine8.png" },
      { id: 9, title: "SICOR GEARLESS – MZ 509", image: "/machine9.png" }
    ],
    doors: [
      { id: 1, title: "DIS 204", image: "/door1.png" },
      { id: 2, title: "DS 201", image: "/door2.png" },
      { id: 3, title: "DM 202", image: "/door3.png" },
      { id: 4, title: "DM 203", image: "/door4.png" },
      { id: 5, title: "DHS 305", image: "/door5.png" },
      { id: 6, title: "DH 303", image: "/door6.png" },
      { id: 7, title: "DH 302", image: "/door7.png" },
      { id: 8, title: "DH 301", image: "/door8.png" },
      { id: 9, title: "DIS 205", image: "/door9.png" },
      { id: 10, title: "DHS 307", image: "/door10.png" },
      { id: 11, title: "DHG 306", image: "/door11.png" },
      { id: 12, title: "DHS 308", image: "/door12.png" },
      { id: 13, title: "DSV 304", image: "/door13.png" }
    ],
    cabins: [
      { id: 1, title: "Cabin 1   ", image: "/cabin1.png" },
      { id: 2, title: "Cabin 2 ", image: "/cabin2.png" },
      { id: 3, title: "Cabin 3 ", image: "/cabin3.png" },
      { id: 4, title: "Cabin 4 ", image: "/cabin4.png" },
      { id: 5, title: "Cabin 5 ", image: "/cabin5.png" },
      { id: 6, title: "Cabin 6 ", image: "/cabin6.png" },
      { id: 7, title: "Cabin 7 ", image: "/cabin7.png" },
      { id: 8, title: "Cabin 8 ", image: "/cabin8.png" },
      { id: 9, title: "Cabin 9 ", image: "/cabin9.png" },
    ],
    control: [
      { id: 1, title: "Control Panel Type A", image: "/control1.png" },
      { id: 2, title: "Control Panel Type B", image: "/control2.png" },
      { id: 3, title: "Control Panel Type C", image: "/control3.png" },
      { id: 4, title: "Control Panel Type D", image: "/control4.png" },
      { id: 5, title: "Control Panel Type E", image: "/control5.png" },
      { id: 6, title: "Control Panel Type F", image: "/control6.png" }
    ]
  }

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-12 max-w-[967px] mx-auto">
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

          {isLoading ? (
            <SkeletonTabs />
          ) : (
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-[40px] py-[10px] px-6 h-[58px] transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-[#EBF2F9] text-[#475467]"
                  }`}
                >
                  <span className="font-bold text-sm whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16 w-full px-2 sm:px-4 max-w-[1600px] mx-auto"
        >
          {isLoading ? (
            <>
              {[...Array(12)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          ) : (
            tabContent[activeTab].map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-4 lg:p-6 w-full flex flex-col transition-all hover:border-2 hover:border-primary"
              >
                <div className="w-full aspect-square rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#ffff] mb-4 sm:mb-6 lg:mb-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 sm:p-3 lg:p-4"
                      loading="lazy"
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
            ))
          )}
        </motion.div>

        <div className="flex justify-center mt-16">
        <Link href="/elevators">
        <Button className="bg-secondary hover:bg-secondary/90 rounded-[40px] h-[58px] px-8 text-white font-bold text-base gap-2">
            شــاهد المزيــــد
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </Link>
        </div>
      </div>
    </section>
  )
}
