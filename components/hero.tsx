"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignCenter, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Video and Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-[100px]">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[140px] max-w-[966px] mx-auto">
            {/* Welcome Badge */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 backdrop-blur-[40px] p-[6px] sm:p-[8px] md:p-[10px] rounded-[25px] sm:rounded-[30px] md:rounded-[40px] bg-white/20 w-fit">
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
                حيــــاك الله
              </span>
              <span className="text-sm sm:text-base md:text-lg">👋</span>
            </div>

            {/* Main Headings */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full text-center">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[66px] font-extrabold leading-tight md:leading-[67px] whitespace-pre-line">
                شــــريكك الأول فـي تــركيـــــب
              </h1>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[56px] font-extrabold leading-tight md:leading-[67px] max-w-[803px] mx-auto text-center">
                وصيانة المصاعد بإحترافيـــة
              </h2>
            </div>

            {/* Description */}
            <p className="text-white text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed md:leading-10 max-w-[711px] px-4">
              منذ أكثر من 18 عامًا، تقدم مصاعد إعمار المتحدة حلولًا متكاملة في
              بيع وتوريد وتركيب وصيانة المصاعد، مع التزام صارم بمعايير الجودة
              والسلامة العالمية...
            </p>

            {/* Bottom Section */}
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full mt-4 sm:mt-6 md:mt-8">
              {/* Profile Button */}
              <a href="/catalog1.pdf" download className="bg-white/20 backdrop-blur-[40px] rounded-[50px] sm:rounded-[60px] md:rounded-[80px] h-[45px] sm:h-[50px] md:h-[60px] w-[140px] sm:w-[160px] md:w-[186px] text-white font-extrabold text-xs hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                بروفــايل الشركــة
                <span className="transform rotate-180">
                  <img
                    src="/download.png"
                    alt="arrow-right"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                </span>
              </a>

              {/* Stats and Info */}
              <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
                {/* Avatar Stack */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="flex items-center gap-1 sm:gap-2 px-2">
                    <span className="text-white font-medium text-sm">5.0</span>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.54894 1.42705C5.8483 0.505738 7.1517 0.50574 7.45106 1.42705L8.0716 3.33688C8.20547 3.7489 8.58943 4.02786 9.02265 4.02786H11.0308C11.9995 4.02786 12.4023 5.26748 11.6186 5.83688L9.99395 7.01722C9.64347 7.27187 9.49681 7.72323 9.63068 8.13525L10.2512 10.0451C10.5506 10.9664 9.4961 11.7325 8.71238 11.1631L7.08778 9.98278C6.7373 9.72813 6.2627 9.72814 5.91221 9.98278L4.28761 11.1631C3.5039 11.7325 2.44942 10.9664 2.74878 10.0451L3.36932 8.13526C3.50319 7.72323 3.35653 7.27186 3.00604 7.01722L1.38144 5.83688C0.597731 5.26748 1.00051 4.02786 1.96923 4.02786H3.97735C4.41057 4.02786 4.79453 3.7489 4.9284 3.33688L5.54894 1.42705Z"
                        fill="#FFB81F"
                      />
                    </svg>
                  </div>
                  <div className="flex -space-x-3 sm:-space-x-4 md:-space-x-6 rtl:space-x-reverse">
                    <div
                      className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#EDEDED] flex items-center justify-center transform hover:scale-110 transition-transform"
                      style={{
                        zIndex: 0,
                        marginLeft: "-10px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <span className="text-[#05509F] font-semibold text-xs sm:text-sm">
                        +1k
                      </span>
                    </div>
                    {["/img4.png", "/img.png", "/img2.png", "/img.png"].map(
                      (avatar, i) => (
                        <div
                          key={i}
                          className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] rounded-full border-3 border-white overflow-hidden transform transition-transform hover:scale-110"
                          style={{
                            zIndex: 40 - i * 10,
                            marginLeft: i > 0 ? "-10px" : "0",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <Image
                            src={avatar}
                            alt={`Avatar ${i + 1}`}
                            width={50}
                            height={50}
                            className="w-full h-full object-cover transition-transform hover:scale-105 filter brightness-105"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center">
                    <span className="text-xs sm:text-sm md:text-base font-medium">استدامة</span>
                    <svg
                      width="15"
                      height="2"
                      viewBox="0 0 25 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5 1H0.5"
                        stroke="url(#paint0_linear_28_493)"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_28_493"
                          x1="24.5"
                          y1="1.5"
                          x2="0.5"
                          y2="1.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base font-medium">جودة</span>
                    <svg
                      width="15"
                      height="2"
                      viewBox="0 0 25 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5 1H0.5"
                        stroke="url(#paint0_linear_28_493)"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_28_493"
                          x1="24.5"
                          y1="1.5"
                          x2="0.5"
                          y2="1.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base font-medium">نزاهه</span>
                    <svg width="3" height="2" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2.5" cy="2" r="2" fill="white"/>
                    </svg>

                    <span className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                      أنت شريك الحلول لنظام المصاعد.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Responsive Positioning */}
      <div className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[40px] left-0 right-0 md:right-auto md:left-[40px] lg:left-[60px] xl:left-[100px] flex justify-center md:justify-start gap-[5px] z-20">
        {[
          {
            icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.87 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.05.78.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 17.65a6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.32-6.33V8.05c1.18.69 2.47 1.07 3.85 1.07v-3.4a4.85 4.85 0 0 1-1.91.97Z",
            href: "https://tiktok.com/@example",
          },
          {
            icon: "M17.863 3.726H20.5L14.2 10.812L21.638 20.274H16.362L11.846 14.507L6.669 20.274H4.026L10.721 12.736L3.5 3.726H8.9L13.022 9.023L17.863 3.726ZM17.159 18.571H18.724L8.034 5.344H6.359L17.159 18.571Z",
            href: "https://x.com",
          },
          {
            icon: "M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z",
            href: "https://instagram.com",
          },
          {
            icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
            href: "https://facebook.com",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center group"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={social.icon}
                fill="white"
                className="group-hover:fill-white/90 transition-colors"
              />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
