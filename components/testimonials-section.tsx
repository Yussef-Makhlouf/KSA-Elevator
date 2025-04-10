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
    <section className="py-16 lg:py-24 container mx-auto px-4 md:px-8 lg:px-[100px]" id="testimonials" dir="rtl">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 lg:gap-12 max-w-[582px] mx-auto">
        <div className="bg-[#EBF5FF] rounded-[40px] py-[10px] px-6 flex items-center">
          <span className="text-[#003B95] font-bold text-sm">التقييمات</span>
        </div>

        <h4 className="text-[#003B95] text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight lg:leading-[64px] text-center">
          مــاذا يقــول عملاؤنا عنا !.
        </h4>

        <p className="text-black text-base lg:text-lg font-medium leading-relaxed lg:leading-10 text-center">
          كن عميلا الان
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-[#F9F9F9] rounded-[40px] p-6 lg:p-10 flex flex-col items-start gap-6 transition-transform hover:transform hover:scale-[1.02]"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-5">
                <div className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] bg-[#003B95] rounded-[18px] flex items-center justify-center shadow-lg">
                  <span className="text-white font-extrabold text-xs">ع</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-extrabold text-sm">{testimonial.name}</h3>
                  <p className="text-sm text-[#4A4A4A]">{testimonial.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-semibold text-base">{testimonial.rating}</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#FFBE33">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
            </div>

            <p className="text-sm leading-[30px] text-right text-[#4A4A4A] min-h-[90px]">
              {testimonial.content}
            </p>

            <div className="flex justify-between items-center w-full">
              <span className="text-[#003B95] text-sm lg:text-base font-extrabold">{testimonial.location}</span>
              <span className="text-[#747474] text-xs font-medium">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12 lg:mt-16">
<Link href="/contact">
<Button 
          className="bg-[#E31E24] hover:bg-[#E31E24]/90 rounded-[40px] h-[60px] lg:h-[70px] px-8 text-white font-bold text-base transition-colors"
        >
          كن عميلا
          <img src="/vector.png" alt="arrow-right" className="w-3 h-3" />
        </Button>
</Link>
      </div>
    </section>
  )
} 