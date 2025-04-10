import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="relative py-12 w-full overflow-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="flex flex-col items-start gap-10 order-2 lg:order-1 w-full">
            <div className="flex items-start gap-5 w-full">
              <div className="bg-[#EBF2F9] rounded-[40px] py-[10px] px-6">
                <span className="text-primary font-bold text-sm sm:text-base">تواصل معنا</span>
              </div>
            </div>

            <div className="space-y-10 text-right w-full">
              <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-[1.2]">
                كيف يمكننا مساعدتك؟
              </h2>

              <h3 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-extrabold leading-[1.2]">
                تواصل معنا على مدار اليوم 24/7.
              </h3>

              <p className="text-[#475467] text-sm sm:text-base md:text-lg font-medium leading-7 sm:leading-8 max-w-full lg:max-w-[427px]">
                هل تحتاج دعمًا سريعًا؟ فريقنا جاهز لخدمتك في أي وقت!
              </p>
            </div>

            <div className="space-y-4 items-end text-right w-full">
              <a href="mailto:info@emaarelevators.com" className="flex items-center justify-start gap-3 hover:opacity-90 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.23518 4.36555C2.66855 4.8917 2.28906 5.74543 2.28906 7.08464V12.918C2.28906 14.2571 2.66855 15.1109 3.23518 15.6371C3.81019 16.171 4.67654 16.4596 5.83073 16.4596H14.1641C15.3182 16.4596 16.1846 16.171 16.7596 15.6371C17.3262 15.1109 17.7057 14.2571 17.7057 12.918V7.08464C17.7057 5.74543 17.3262 4.8917 16.7596 4.36555C16.1846 3.83161 15.3182 3.54297 14.1641 3.54297H5.83073C4.67654 3.54297 3.81019 3.83161 3.23518 4.36555ZM2.38461 3.44955C3.26794 2.62933 4.48492 2.29297 5.83073 2.29297H14.1641C15.5099 2.29297 16.7269 2.62933 17.6101 3.44955C18.5019 4.27757 18.9557 5.50718 18.9557 7.08464V12.918C18.9557 14.4955 18.5019 15.7251 17.6101 16.5531C16.7269 17.3733 15.5099 17.7096 14.1641 17.7096H5.83073C4.48492 17.7096 3.26794 17.3733 2.38461 16.5531C1.49291 15.7251 1.03906 14.4955 1.03906 12.918V7.08464C1.03906 5.50718 1.49291 4.27757 2.38461 3.44955Z" fill="#05509F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1332 6.09445C16.3443 6.36758 16.294 6.7601 16.0209 6.97115L11.3983 10.5431C10.573 11.1807 9.42124 11.1807 8.5959 10.5431L3.97335 6.97115C3.70021 6.7601 3.64989 6.36758 3.86094 6.09445C4.072 5.8213 4.46451 5.77098 4.73765 5.98204L9.36015 9.5539C9.73532 9.84381 10.2589 9.84381 10.634 9.5539L15.2566 5.98204C15.5297 5.77098 15.9222 5.8213 16.1332 6.09445Z" fill="#05509F"/>
</svg>

                <span className="text-primary text-lg font-bold">info@emaarelevators.com</span>
              </a>

              <a href="tel:+966510447756" className="flex items-center justify-start gap-3 hover:opacity-90 transition-opacity">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.59224 0.626708C2.86097 0.5428 3.13977 0.5 3.42047 0.5C4.76966 0.5 5.76924 1.68804 5.76923 3.03159V6.04534C5.76923 7.38892 4.76965 8.57692 3.42047 8.57692C3.13977 8.57692 2.86097 8.53417 2.59224 8.45025L2.38682 8.38608C2.31668 8.36417 2.24767 8.33992 2.17987 8.31333C3.25008 10.4868 5.01326 12.2499 7.18667 13.3202C7.16008 13.2523 7.13583 13.1833 7.11392 13.1132L7.04975 12.9078C6.96583 12.639 6.92308 12.3602 6.92308 12.0795C6.92308 10.7303 8.11108 9.73075 9.45467 9.73075H12.4684C13.8119 9.73075 15 10.7303 15 12.0795C15 12.3602 14.9572 12.639 14.8733 12.9078L14.8092 13.1132C14.4355 14.3098 13.3667 15.1763 12.0883 15.4017C11.344 15.5328 10.5791 15.5328 9.83475 15.4017C9.80542 15.3965 9.77625 15.391 9.74717 15.3852C4.86904 14.4466 1.05337 10.6309 0.11485 5.75274C0.109025 5.72369 0.103533 5.69453 0.098375 5.66526C-0.0327917 4.92092 -0.0327917 4.15601 0.098375 3.41167C0.323642 2.13324 1.19023 1.06449 2.38683 0.69085L2.59224 0.626708Z" fill="#05509F"/>
<path d="M8.42733 1.82575C9.9055 1.40459 11.5151 1.75686 12.629 2.87079C13.743 3.98473 14.0952 5.59436 13.6741 7.07248C13.5867 7.37898 13.7644 7.69814 14.0708 7.78548C14.3772 7.87273 14.6964 7.69514 14.7837 7.38873C15.3106 5.53961 14.8776 3.48759 13.4449 2.0549C12.0122 0.62222 9.96025 0.18922 8.11116 0.71607C7.80466 0.803378 7.62708 1.12257 7.71441 1.429C7.80166 1.73543 8.12091 1.91306 8.42733 1.82575Z" fill="#05509F"/>
<path d="M9.87182 3.92303C10.2611 3.84549 10.7542 3.97623 11.1391 4.36113C11.524 4.74604 11.6547 5.23912 11.5772 5.6284C11.515 5.94088 11.7178 6.24466 12.0303 6.3069C12.3428 6.36914 12.6466 6.16628 12.7088 5.85379C12.868 5.05468 12.5887 4.17898 11.955 3.54524C11.3212 2.9115 10.4456 2.63225 9.64641 2.79141C9.33399 2.85365 9.13107 3.15743 9.19332 3.46992C9.25557 3.7824 9.55932 3.98527 9.87182 3.92303Z" fill="#05509F"/>
</svg>

                <span className="text-primary text-lg font-bold">966510447756+</span>
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] order-1 lg:order-2 rounded-[80px] box-shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <img 
                  src="/maps.png" 
                  alt="Location Map" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-32 bg-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute -inset-16 bg-primary/10 rounded-full blur-[50px]" />
                    <div className="relative w-20 h-20 rounded-full bg-primary/20" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
