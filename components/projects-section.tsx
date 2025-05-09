"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { JSX } from 'react'

export default function ProjectsSection({ showButton = true }: { showButton?: boolean }) {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-[100px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-12 max-w-[876px] mx-auto mb-20">
          <div className="w-full flex justify-center">
            <div className="bg-[#05509F]/10 rounded-[40px] py-[10px] px-6 transform hover:scale-105 transition-transform duration-300">
              <span className="text-[#05509F] font-bold text-xs sm:text-sm">مشاريعنا</span>
            </div>
          </div>

          <h2 className="text-[#05509F] text-3xl sm:text-[42px] md:text-[52px] font-extrabold leading-[1.2] md:leading-[64px] text-center w-full">
            تطلعاتنا لمستقبل أفضل لنــــا ولكم.
          </h2>

          <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-7 sm:leading-8 md:leading-10 text-center max-w-[700px]">
            تتميز "مصاعد إعمار المتحدة" بامتلاكها أكبر صالات عرض للمصاعد في المملكة العربية السعودية وبشكل يليق بعملائنا،
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Project Card Component - repeated for each project */}
          {[
            {
              image: "/pro1.png",
              alt: "حكومية",
              title: "حكوميــــة",
              description: "ننفذ مشاريع مصاعد حكومية بمعايير أمان وجودة عالية، تلبي متطلبات الجهات الرسمية بكفاءة."
            },
            {
              image: "/pro2.png",
              alt: "مستشفيات",
              title: "مستشفيــات",
              description: "مصاعدنا الطبية مصممة لتناسب المستشفيات والمراكز الصحية بأعلى معايير السلامة والنظافة."
            },
            {
              image: "/pro3.png",
              alt: "مطارات",
              title: "مـــطارات",
              description: "نقدم حلول مصاعد ذكية للمطارات تُسهّل حركة المسافرين وتدعم التشغيل الآلي بفعالية."
            },
            {
              image: "/pro4.png",
              alt: "منشآت مميزة",
              title: "منشــآت مميـــزة",
              description: "نوفر حلول مصاعد مخصصة للمباني المميزة بأعلى التقنيات لتناسب التصميم والهندسة المعمارية الفريدة."
            },
            {
              image: "/pro5.png",
              alt: "مراكز تسوق",
              title: "مراكــز تســوق",
              description: "نركب مصاعد وسلالم متحركة للمولات تضمن سهولة التنقل وسرعة الحركة داخل المركز."
            },
            {
              image: "/pro6.png",
              alt: "فنادق",
              title: "فنـــادق",
              description: "نوفر مصاعد فاخرة للفنادق تضيف لمسة راقية وتُحسّن تجربة الضيوف بشكل مميز."
            }
          ].map((project, index) => (
            <div key={index} className="flex flex-col items-center group ">
              <div className="relative w-full aspect-square rounded-[80px] overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-black/35 transition-opacity group-hover:bg-black/50"></div>
                <img src={project.image} alt={project.alt} className="w-full h-full object-cover rounded-[80px]" />
              
                <div className="absolute top-6 right-6 py-2 px-4">
                  <div className="bg-white rounded-[12px] py-1 px-3 flex flex-col items-center gap-1 shadow-md transform transition-transform duration-300 hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB81F">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <span className="text-[#05509F] font-extrabold text-xs sm:text-sm">5.0</span>
                  </div>
                </div>
                <Link href="/projects">
                <img src="/arow1.png" alt="arrow-right" className="w-12 h-12 absolute bottom-6 left-6" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-4 w-full mt-6" dir="rtl">
                <p className="text-2xl md:text-[32px] font-bold text-start text-[#05509F]">{project.title}</p>
                <p className="text-[#656565] text-sm sm:text-base md:text-xl font-medium leading-7 sm:leading-8 md:leading-10 text-right">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center mt-20">
            <Link href="/projects">
              <Button className="bg-[#E41937] hover:bg-[#E41937]/90 rounded-[40px] h-[70px] px-12 text-white font-bold text-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                رؤيــة المزيــــد
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 8.75L1.25 1.25M1.25 1.25V8M1.25 1.25H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
