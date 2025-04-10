"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    name: "عبد الله العتيبــي",
    type: "فندق",
    rating: 5.0,
    content: "قمنا بتركيب مصاعد متعددة في فندقنا، وكانت الخدمة راقية والتصاميم فاخرة وتناسب هوية المكان.",
    date: "14 مارس 2025",
    location: "جدة – المملكة العربية السعودية"
  },
  {
    name: "عبد الله العتيبــي",
    type: "مؤسسة",
    rating: 5.0,
    content: "تعامل احترافي، دعم فني سريع، ومصاعد تعمل بكفاءة عالية حتى اليوم. أنصح بالتعاون معهم بشدة.",
    date: "14 مارس 2025",
    location: "الطائف – المملكة العربية السعودية"
  },
  {
    name: "عبد الله العتيبــي",
    type: "شركــة",
    rating: 5.0,
    content: "تجربتنا مع مصاعد إعمار المتحدة كانت ممتازة من البداية حتى التسليم. التزام بالمواعيد، وجودة تركيب لا تُضاهى.",
    date: "14 مارس 2025",
    location: "الريـاض – المملكة العربية السعودية"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]" id="testimonials" dir="rtl">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-12 max-w-[582px] mx-auto">
        <div className="bg-[#EBF5FF] rounded-[40px] py-[8px] sm:py-[10px] px-4 sm:px-6 flex items-center">
          <span className="text-[#003B95] font-bold text-xs sm:text-sm">التقييمات</span>
        </div>

        <h4 className="text-[#003B95] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight lg:leading-[64px] text-center">
          مــاذا يقــول عملاؤنا عنا !.
        </h4>

        <p className="text-black text-sm sm:text-base lg:text-lg font-medium leading-relaxed lg:leading-10 text-center">
          كن عميلا الان
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-[#F9F9F9] rounded-[30px] sm:rounded-[40px] p-4 sm:p-6 lg:p-10 flex flex-col items-start gap-4 sm:gap-6 transition-transform hover:transform hover:scale-[1.02] shadow-sm hover:shadow-md"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] bg-[#003B95] rounded-[15px] sm:rounded-[18px] flex items-center justify-center shadow-lg">
                  <span className="text-white font-extrabold text-xs">ع</span>
                </div>
                <div className="flex flex-col items-start gap-1 sm:gap-2">
                  <h3 className="font-extrabold text-xs sm:text-sm">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-[#4A4A4A]">{testimonial.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-semibold text-sm sm:text-base">{testimonial.rating}.0</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFBE33" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-[24px] sm:leading-[30px] text-right text-[#4A4A4A] min-h-[80px] sm:min-h-[90px]">
              {testimonial.content}
            </p>

            <div className="flex justify-between items-center w-full mt-auto">
              <span className="text-[#003B95] text-xs sm:text-sm lg:text-base font-extrabold">{testimonial.location}</span>
              <span className="text-[#747474] text-[10px] sm:text-xs font-medium">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
        <Link href="/contact" className="w-full sm:w-auto">
          <Button 
            className="w-full sm:w-auto bg-[#E31E24] hover:bg-[#E31E24]/90 rounded-[30px] sm:rounded-[40px] h-[50px] sm:h-[60px] lg:h-[70px] px-6 sm:px-8 text-white font-bold text-sm sm:text-base transition-colors"
          >
            كن عميلا
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 8.75L1.25 1.25M1.25 1.25V8M1.25 1.25H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Button>
        </Link>
      </div>
    </section>
  )
} 