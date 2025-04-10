"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import Link from "next/link";
import ContactSection from "@/components/contact-section";
export default function AboutSection() {
  return (
    <div className=" relative">
       <div className="w-full h-full pb-28">
   <Header />
   </div>
      
      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0  z-10" />
        <Image
          src="/subhero.png"
          alt="من نحن"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[301px] h-[185px] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-10 px-10 gap-[38px] z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] w-[180px] h-[14px]">
            <span className="text-white text-[14px] font-semibold ">من نحـــن</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">
            <span className="text-white text-[14px] font-semibold leading-[14px]">الرئيــسية</span>
            </Link>
          </div>
          <h1 className="text-white text-[52px] font-extrabold leading-[53px]">من نحـــن</h1>
        </div>
      </section>

      {/* About Section */}
      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[100px]">
        {/* About Us Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="flex flex-row items-center gap-5">
              <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
                <span className="text-[#05509F] text-[14px] font-bold">نبــذة عن المؤسســـة</span>
              </div>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">من نحـــن !.</h2>
            
            <div className="flex flex-col gap-8 lg:gap-12 text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              <p>مصاعد إعمار المتحدة هي مؤسسة متخصصة في بيع وتوريد وتركيب وصيانة المصاعد الكهربائية والهيدروليكية ذات الجودة العالية المطابقة للمواصفات العالمية.</p>
              
              <p>تأسست المؤسسة في المملكة العربية السعودية عام 1428هـ، وسُجلت المؤسسة بسجل تجاري عام 1431هـ، أي ما يقارب من 18 عامًا. وحرصًا منذ انطلاقتها على الالتزام الكامل بمعايير وشروط الأمن والسلامة العامة ونتيجة لذلك نالت الاعتماد رسميًا من قبل الجهات الرسمية المختصة كمؤسسة ملتزمة بمعايير الأمن والسلامة.</p>
              
              <p>قدّمت مصاعد إعمار المتحدة كل ما هو جديد ومبتكر في عالم المصاعد حتى غدت من أهم المؤسسات العاملة في السوق الخليجية، حيث افتتحت فروعًا لها داخل المملكة وتتطلع في التوسع في جميع مناطق المملكة السعودية والدول العربية خارج المملكة.</p>
            </div>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-1.png"
              alt="Vision"
              fill
              className="object-cover"
            />
          </div>

            <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">الرؤيــة</span>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">رؤيتنــــــــا</h2>
            
            <p className="text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              نسعى للريادة في قطاع المصاعد من خلال تقديم حلول مبتكرة، تواكب التطور، وتُعزز ثقة العملاء عبر جودة عالية واهتمام دائم بتجربتهم.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-[25px] w-full">
            <div className="w-[45px] h-[45px] lg:w-[58px] lg:h-[58px] bg-[#05509F] rounded-[15px] lg:rounded-[19px] flex items-center justify-center flex-shrink-0">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" stroke-width="1.5" stroke-miterlimit="10"/>
<g opacity="0.15">
<path d="M11.0007 23.5029C16.4885 23.5029 20.9373 19.0541 20.9373 13.5662C20.9373 8.07841 16.4885 3.62964 11.0007 3.62964C5.51286 3.62964 1.06409 8.07841 1.06409 13.5662C1.06409 19.0541 5.51286 23.5029 11.0007 23.5029Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
<path d="M11.0007 20.3703C16.4885 20.3703 20.9373 15.9215 20.9373 10.4337C20.9373 4.94584 16.4885 0.49707 11.0007 0.49707C5.51286 0.49707 1.06409 4.94584 1.06409 10.4337C1.06409 15.9215 5.51286 20.3703 11.0007 20.3703Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
              </div>
              <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold text-right">ريادة الأعمال والاستمرار في تقديم كل جديد ومتطور.</p>
            
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-[25px] w-full">
            <div className="w-[45px] h-[45px] lg:w-[58px] lg:h-[58px] bg-[#05509F] rounded-[15px] lg:rounded-[19px] flex items-center justify-center flex-shrink-0">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" stroke-width="1.5" stroke-miterlimit="10"/>
<g opacity="0.15">
<path d="M11.0007 23.5029C16.4885 23.5029 20.9373 19.0541 20.9373 13.5662C20.9373 8.07841 16.4885 3.62964 11.0007 3.62964C5.51286 3.62964 1.06409 8.07841 1.06409 13.5662C1.06409 19.0541 5.51286 23.5029 11.0007 23.5029Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
<path d="M11.0007 20.3703C16.4885 20.3703 20.9373 15.9215 20.9373 10.4337C20.9373 4.94584 16.4885 0.49707 11.0007 0.49707C5.51286 0.49707 1.06409 4.94584 1.06409 10.4337C1.06409 15.9215 5.51286 20.3703 11.0007 20.3703Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
              </div>
              <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold text-right">ثقة عملائنا ورضاهم جوهر اهتماماتنا.</p>
           
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">الرســـالة</span>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">رســــالتنا</h2>
            
            <p className="text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              نلتزم بتقديم مصاعد آمنة وموثوقة بجودة عالية، من خلال خبراتنا المتراكمة وخدمة احترافية تُلبي تطلعات العملاء وتضمن رضاهم التام.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-[25px] w-full">    
            <div className="w-[45px] h-[45px] lg:w-[58px] lg:h-[58px] bg-[#05509F] rounded-[15px] lg:rounded-[19px] flex items-center justify-center flex-shrink-0">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" stroke-width="1.5" stroke-miterlimit="10"/>
<g opacity="0.15">
<path d="M11.0007 23.5029C16.4885 23.5029 20.9373 19.0541 20.9373 13.5662C20.9373 8.07841 16.4885 3.62964 11.0007 3.62964C5.51286 3.62964 1.06409 8.07841 1.06409 13.5662C1.06409 19.0541 5.51286 23.5029 11.0007 23.5029Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
<path d="M11.0007 20.3703C16.4885 20.3703 20.9373 15.9215 20.9373 10.4337C20.9373 4.94584 16.4885 0.49707 11.0007 0.49707C5.51286 0.49707 1.06409 4.94584 1.06409 10.4337C1.06409 15.9215 5.51286 20.3703 11.0007 20.3703Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>

              </div>
              <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold text-right">نضمن الجودة العالية ليصل عملاؤنا بأمان.</p>
          
            </div>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-2.png"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sales Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-3.png"
              alt="Sales"
              fill
              className="object-cover"
            />
          </div>

            <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">البيع</span>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">المبيعــــات</h2>
            
            <div className="flex flex-col gap-8 lg:gap-12 text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              <p>تتميز مصاعد إعمار المتحدة بامتلاكها أكبر صالات عرض للمصاعد في المملكة العربية السعودية وبشكل يليق بعملائنا، فإن موظفي الاستقبال والمبيعات ذوي الخبرة الاحترافية جاهزون دومًا لخدمة عملائنا وتقديم كل المعلومات اللازمة، والرد على كل الأسئلة والاستفسارات التي يطرحها عملاؤنا وتقديم النصح والمشورة في معارضنا.</p>
              
              <p>يتم استقبال عملائنا الراغبين بالتعرف على منتجاتنا ليخوضوا تجربة حقيقية للمصعد قبل شرائه، كما يتم عرض كامل أجزاء ومكوّنات مصاعدنا لإتاحة الفرصة للعملاء للاطلاع عليها ومعرفة طرازاتها ومنشأها ومواصفاتها.</p>
              
              <p>وتعكس أرقام المبيعات السنوية الرسمية الطبية لمؤسسة مصاعد إعمار المتحدة في السوق، الثقة الكبيرة التي نالتها خلال سنوات عملها.</p>
            </div>
          </div>
        </div>
      </div>
<TestimonialsSection />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}