"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMachinesOpen, setIsMachinesOpen] = useState(false)
  const [isDoorsOpen, setIsDoorsOpen] = useState(false)


  const handleMenuClose = () => {
    setIsMenuOpen(false)
    setIsMachinesOpen(false)
    setIsDoorsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#003B95] py-1.5 sm:py-2 md:py-2.5 lg:py-3 hidden sm:block">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Working Hours */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 text-center sm:text-left w-full sm:w-auto justify-center sm:justify-start">
            <svg className="hidden sm:block w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.3 16.3L11 13V7H12.5V12.2L17 15L16.3 16.3Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg">أيــام العمل :</span>
            {/* Hide on medium (md) screens but show on large (lg) and nest-hub screens */}
            <span className="text-white text-xs sm:text-sm md:hidden lg:inline nest-hub:inline lg:text-lg">من الاحد الى الخميس / 08:00 الــى 17:00</span>
            {/* Show only on medium (md) screens */}
            <span className="text-white text-base hidden md:inline lg:hidden nest-hub:hidden">08:00 الــى 17:00</span>
          </div>

          {/* Contact Numbers */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap justify-center w-full sm:w-auto">
            <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg hidden sm:inline">للإستشارات الرجاء الإتصال على الرقم:</span>
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 flex-wrap justify-center">
              {/* First Phone Number */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                <svg width="12" height="12" className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg nest-hub:text-base font-medium hover:text-gray-200 transition-colors">0564630179</span>
              </div>

              {/* Divider */}
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-white hidden sm:block"></div>

              {/* Second Phone Number */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                <svg width="12" height="12" className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg nest-hub:text-base font-medium hover:text-gray-200 transition-colors">0590113144</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 md:py-4">
          <div className="flex justify-between items-center relative">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-1.5 sm:gap-2 max-w-[180px] sm:max-w-[200px] md:max-w-none">
              <Image src="/logo.png" alt="Logo" width={48} height={48} className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
              <span className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg truncate">شركة إعمار المتحدة للمصاعد</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6">
              <Link href="/" className="font-semibold text-[#003B95] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95]/90 whitespace-nowrap">
                الرئـيـسية
              </Link>
              <Link href="/about" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                من نحـــن
              </Link>
              <Link href="/projects" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                مشاريعنا
              </Link>
              <div className="relative group">
                <button
                  onClick={() => setIsMachinesOpen(!isMachinesOpen)}
                  className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] flex items-center gap-1 whitespace-nowrap"
                >
                  انواع المصاعد
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`sm:w-3 sm:h-3 transition-transform duration-200 ${isMachinesOpen ? 'rotate-180' : ''}`}>
                    <path d="M7 10L12 15L17 10" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`absolute top-full right-0 mt-1 sm:mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg py-1.5 sm:py-2 transition-all duration-200 ${isMachinesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <Link href="/elevators" className="block px-3 sm:px-4 py-1.5 sm:py-2 text-[13px] xl:text-[14px] 2xl:text-[15px] text-[#1A1A1A] hover:bg-gray-100">
                    المكينات
                  </Link>
                </div>
              </div>

              {/* Doors dropdown menu */}
              <div className="relative group">
                <button
                  onClick={() => setIsDoorsOpen(!isDoorsOpen)}
                  className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] flex items-center gap-1 whitespace-nowrap"
                >
                  أبــواب
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`sm:w-3 sm:h-3 transition-transform duration-200 ${isDoorsOpen ? 'rotate-180' : ''}`}>
                    <path d="M7 10L12 15L17 10" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`absolute top-full right-0 mt-1 sm:mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg py-1.5 sm:py-2 transition-all duration-200 ${isDoorsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <Link href="/doors" className="block px-3 sm:px-4 py-1.5 sm:py-2 text-[13px] xl:text-[14px] 2xl:text-[15px] text-[#1A1A1A] hover:bg-gray-100">
                    كابين
                  </Link>
                </div>
              </div>
              <Link href="/control" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                كنترول التحكم والكهرباء
              </Link>
              <a href="/catalog.pdf" download className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                بروفايل الشركة
              </a>
            </nav>

            {/* Contact Button - Hidden on Mobile */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact">
                <Button className="bg-[#E31E24] hover:bg-[#E31E24]/90 rounded-[20px] sm:rounded-[24px] h-[32px] sm:h-[36px] md:h-[38px] px-3 sm:px-4 md:px-6 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all duration-200">
                  <svg width="16" height="14" className="sm:w-[18px] sm:h-[16px]" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84698 14.4008H14.047C14.8108 14.4008 15.5434 14.0973 16.0834 13.5573C16.6235 13.0171 16.927 12.2847 16.927 11.5208V4.32081C16.927 3.55699 16.6235 2.82441 16.0834 2.2843C15.5434 1.7442 14.8108 1.44081 14.047 1.44081H5.40698C4.64315 1.44081 3.91061 1.7442 3.37051 2.2843C2.8304 2.82441 2.52698 3.55699 2.52698 4.32081V7.9208" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.08704 12.2408H8.28706" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.08704 10.0808H3.96704" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.3505 2.90234C12.3113 10.5631 7.12733 10.5559 3.08813 2.90234" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-semibold text-[11px] sm:text-[12px] md:text-[13px]">تواصل معنا</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
                <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
                  <div className="flex justify-between items-center mb-6 sm:mb-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-8 sm:h-10 w-auto" />
                      <span className="font-bold text-xs sm:text-sm">شركة إعمار المتحدة للمصاعد</span>
                    </div>
                    <button
                      onClick={handleMenuClose}
                      className="p-1.5 sm:p-2"
                      aria-label="Close menu"
                    >
                      <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-col gap-3 sm:gap-4">
                    <Link href="/" className="font-semibold text-[#003B95] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      الرئـيـسية
                    </Link>
                    <Link href="/about" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      من نحـــن
                    </Link>
                    <Link href="/projects" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      مشاريعنا
                    </Link>
                    <div className="flex flex-col">
                      <button
                        onClick={() => setIsMachinesOpen(!isMachinesOpen)}
                        className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2 flex items-center gap-1"
                      >
                        انواع المصاعد
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`sm:w-3 sm:h-3 transition-transform duration-200 ${isMachinesOpen ? 'rotate-180' : ''}`}>
                          <path d="M7 10L12 15L17 10" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-200 ${isMachinesOpen ? 'max-h-20' : 'max-h-0'}`}>
                        <Link href="/elevators" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2 pl-3 sm:pl-4 block" onClick={handleMenuClose}>
                          المكينات
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <button
                        onClick={() => setIsDoorsOpen(!isDoorsOpen)}
                        className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2 flex items-center gap-1"
                      >
                        أبــواب
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`sm:w-3 sm:h-3 transition-transform duration-200 ${isDoorsOpen ? 'rotate-180' : ''}`}>
                          <path d="M7 10L12 15L17 10" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-200 ${isDoorsOpen ? 'max-h-20' : 'max-h-0'}`}>
                        <Link href="/doors" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2 pl-3 sm:pl-4 block" onClick={handleMenuClose}>
                          كابين
                        </Link>
                      </div>
                    </div>
                    <Link href="/control" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      كنترول التحكم والكهرباء
                    </Link>
                    <a href="/catalog.pdf" download className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      بروفايل الشركة
                    </a>
                    {/* Mobile Contact Button */}
                    <Button className="bg-[#E31E24] hover:bg-[#E31E24]/90 rounded-[20px] sm:rounded-[24px] h-[32px] sm:h-[36px] md:h-[38px] px-3 sm:px-4 md:px-6 flex items-center gap-1.5 sm:gap-2 justify-center mt-3 sm:mt-4">
                      <svg width="16" height="14" className="sm:w-[18px] sm:h-[16px]" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.84698 14.4008H14.047C14.8108 14.4008 15.5434 14.0973 16.0834 13.5573C16.6235 13.0171 16.927 12.2847 16.927 11.5208V4.32081C16.927 3.55699 16.6235 2.82441 16.0834 2.2843C15.5434 1.7442 14.8108 1.44081 14.047 1.44081H5.40698C4.64315 1.44081 3.91061 1.7442 3.37051 2.2843C2.8304 2.82441 2.52698 3.55699 2.52698 4.32081V7.9208" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.08704 12.2408H8.28706" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.08704 10.0808H3.96704" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.3505 2.90234C12.3113 10.5631 7.12733 10.5559 3.08813 2.90234" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-semibold text-[11px] sm:text-[12px] md:text-[13px]">تواصل معنا</span>
                    </Button>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
