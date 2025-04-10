"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="pt-16" >
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Logo and Description Section */}
          <div className="lg:col-span-5 order-1">
            <img src="/logo.png" alt="Emaar United Elevators Logo" className="w-[92px] h-[92px] object-contain mb-6" />
            <p className="text-[#656565] text-base leading-[32px] text-right mb-8 max-w-[467px]" dir="rtl">
              منذ أكثر من 18 عاماً، تقدم مصاعد إعمار المتحدة حلولاً متكاملة في بيع وتوريد وتركيب وصيانة المصاعد، مع التزام صارم بمعايير الجودة والسلامة العالمية...
            </p>
            <a href="/catalog.pdf" download className="bg-[#E41937] text-white  px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#E41937]/90 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9C1.5 12.5355 1.5 14.3033 2.59835 15.4016C3.6967 16.5 5.46446 16.5 9 16.5C12.5355 16.5 14.3033 16.5 15.4016 15.4016C16.5 14.3033 16.5 12.5355 16.5 9C16.5 5.4645 16.5 3.69667 15.4016 2.59837C14.3033 1.5 12.5355 1.5 9 1.5C5.46446 1.5 3.6967 1.5 2.59835 2.59837C1.5 3.69667 1.5 5.4645 1.5 9ZM9 4.6875C9.31065 4.6875 9.5625 4.93935 9.5625 5.25V9.14197L10.8523 7.85227C11.072 7.6326 11.4281 7.6326 11.6477 7.85227C11.8674 8.07195 11.8674 8.42805 11.6477 8.64772L9.39773 10.8977C9.29228 11.0032 9.14918 11.0625 9 11.0625C8.85083 11.0625 8.70773 11.0032 8.60228 10.8977L6.35225 8.64772C6.13259 8.42805 6.13259 8.07195 6.35225 7.85227C6.57192 7.6326 6.92808 7.6326 7.14775 7.85227L8.4375 9.14197V5.25C8.4375 4.93935 8.68935 4.6875 9 4.6875ZM6 12.1875C5.68934 12.1875 5.4375 12.4393 5.4375 12.75C5.4375 13.0607 5.68934 13.3125 6 13.3125H12C12.3107 13.3125 12.5625 13.0607 12.5625 12.75C12.5625 12.4393 12.3107 12.1875 12 12.1875H6Z" fill="white"/>
</svg>

              بروفايل الشركة
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3 order-2 ">
            <div className="flex flex-col items-start">
              <h3 className="text-[#05509F] text-2xl font-bold mb-4">روابــط سريعة</h3>
              <div className="w-12 h-0.5 bg-[#05509F] mb-8"></div>
              <div className="flex flex-col items-start gap-5">
                <Link href="/" className="text-[#656565] hover:text-[#05509F] transition-colors text-base">الرئيسية</Link>
                <Link href="/projects" className="text-[#656565] hover:text-[#05509F] transition-colors text-base">مشاريعنا</Link>
                <Link href="/elevators" className="text-[#656565] hover:text-[#05509F] transition-colors text-base">انواع المصاعد - المكينات</Link>
                <Link href="/doors" className="text-[#656565] hover:text-[#05509F] transition-colors text-base">ابواب - كابين</Link>
                <Link href="/control" className="text-[#656565] hover:text-[#05509F] transition-colors text-base">كنترول التحكم والكهرباء</Link>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="lg:col-span-2 order-3">
            <div className="flex flex-col items-start">
              <h3 className="text-[#05509F] text-2xl font-bold mb-4">المســـاعدة</h3>
              <div className="w-12 h-0.5 bg-[#05509F] mb-8"></div>
              <div className="flex flex-col items-start gap-5">
                <Link href="/contact" className="text-[#656565] hover:text-[#05509F] transition-colors text-base">اتصل بنا</Link>
                <Link href="/about" className="text-[#656565] hover:text-[#05509F] transition-colors text-base">من نحن ؟</Link>
                <a href="/catalog.pdf" download className="text-[#656565] hover:text-[#05509F] transition-colors text-base">بروفايل الشركة</a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2 order-4">
            <div className="flex flex-col items-start">
              <h3 className="text-[#05509F] text-2xl font-bold mb-4">اتصل بنــــــــا</h3>
              <div className="w-12 h-0.5 bg-[#05509F] mb-8"></div>
              <div className="flex flex-col items-start gap-5">
                <span className="text-[#656565] text-base">info@emaarelevators.com</span>
                <span className="text-[#656565] text-base">0590113144</span>
                <span className="text-[#656565] text-base">0564630179</span>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="mt-16 mb-16">
          <div className="flex flex-col items-center">
            <h3 className="text-[#05509F] text-2xl font-bold mb-6">عنــوانــنا</h3>
            <div className="w-12 h-0.5 bg-[#05509F] mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#05509F]/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#05509F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#05509F] font-bold text-lg mb-2">المدينة المنورة</h4>
                    <p className="text-[#656565] text-base leading-relaxed">As Sih, Medina 42312,<br />Saudi Arabia</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#05509F]/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#05509F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#05509F] font-bold text-lg mb-2">جدة</h4>
                    <p className="text-[#656565] text-base leading-relaxed">A1 Falah, Jeddah 23762,<br />Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and تابعنا على Section */}
        <div className="flex flex-col items-start mt-16">
          <h3 className="text-[#05509F] text-2xl font-bold mb-6">تــابعنا على</h3>
          <div className="flex gap-3">
            <Link href="#" className="w-10 h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/facebook.png" alt="Facebook" className="w-12 h-10" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/tiktok.png" alt="TikTok" className="w-12 h-10" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/instagram.png" alt="Instagram" className="w-12 h-10" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3946 -0.00976562H14.7373L9.61917 5.83988L15.6402 13.7999H10.9258L7.23328 8.97221L3.00822 13.7999H0.664116L6.13842 7.54308L0.362427 -0.00976562H5.19653L8.53423 4.40297L12.3946 -0.00976562ZM11.5724 12.3977H12.8705L4.49117 1.3188H3.09816L11.5724 12.3977Z" fill="white"/>
</svg>

            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#05509F] mt-16">
        <div className="container mx-auto px-4 lg:px-[100px] py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs order-2 md:order-1">طور بإتقــان بواسطة  <Link href="https://www.tarmeeztech.com/ar" className="text-white hover:text-gray-300 transition-colors">ترميز كــود</Link></p>
            <p className="text-white text-xs font-bold order-1 md:order-2 text-center md:text-right">
              جميع الحقوق محفوظة لشركة شركة اعمار المتحدة للمصاعد - Emaar United Elevators Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
