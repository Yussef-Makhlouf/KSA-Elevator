"use client"

import { useState } from "react"

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(0)

  const faqItems = [
    {
      question: "كم يستغرق تركيب المصعد من البداية حتى التشغيل؟",
      answer: "يختلف حسب نوع المصعد والموقع، لكنه عادة يستغرق من 7 إلى 15 يوم عمل."
    },
    {
      question: "هل توفرون عقود صيانة دورية بعد التركيب؟",
      answer: "نعم، نوفر عقود صيانة دورية شاملة لضمان كفاءة وسلامة المصعد على المدى الطويل."
    },
    {
      question: "هل يوجد ضمان على المصعد؟",
      answer: "نعم، نقدم ضمان شامل على جميع مصاعدنا يغطي القطع والتركيب والصيانة."
    },
    {
      question: "هل يمكن تخصيص تصميم الكابينة حسب رغبة العميل؟",
      answer: "نعم، نوفر خيارات متعددة للتصميم الداخلي للكابينة حسب رغبة العميل."
    },
    {
      question: "هل المصاعد مناسبة لذوي الاحتياجات الخاصة؟",
      answer: "نعم، مصاعدنا مصممة وفقاً للمعايير العالمية لتناسب جميع المستخدمين بما فيهم ذوي الاحتياجات الخاصة."
    },
    {
      question: "ما أنواع المصاعد التي تقدمونها؟",
      answer: "نقدم مجموعة متنوعة من المصاعد تشمل المصاعد السكنية، التجارية، البانورامية، ومصاعد الشحن."
    },
    {
      question: "كيف يمكنني طلب عرض سعر؟",
      answer: "يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني، وسيقوم فريقنا بتقديم عرض سعر مفصل يناسب احتياجاتك."
    },
    {
      question: "هل يمكن تركيب مصعد بدون غرفة ماكينة؟",
      answer: "نعم، نوفر مصاعد حديثة بدون غرفة ماكينة، مما يوفر مساحة إضافية في المبنى."
    }
  ]

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-12 max-w-[813px] mx-auto">
          <div className="flex items-center gap-5">
            <div className="bg-primary/10 rounded-[40px] py-[10px] px-4 flex items-center">
              <span className="text-primary font-bold text-xs sm:text-sm">الاسئلة الشــائعة</span>
            </div>
          </div>

          <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight sm:leading-[53px] text-right">
            استفسارات متكررة وإجابات واضحة !.
          </h2>

          <p className="text-black text-base sm:text-lg font-medium leading-8 sm:leading-10">أسئلتكم، وإجاباتنا</p>
        </div>

        <div className="flex flex-col gap-3 mt-16 max-w-[1720px] mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[40px] p-5 cursor-pointer transition-all duration-300 hover:shadow-md"
              onClick={() => setOpenItem(openItem === index ? -1 : index)}
            >
              <div className="flex justify-between items-center">
                <div className={`w-5 h-5 ${openItem === index ? 'bg-primary' : 'bg-black'} rounded-full flex items-center justify-center transition-colors duration-300`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {openItem === index ? (
                      <path d="M19 13H5V11H19V13Z" fill="white" />
                    ) : (
                      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white" />
                    )}
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className={`${openItem === index ? 'text-primary text-xl sm:text-2xl font-extrabold' : 'text-black text-sm sm:text-base font-semibold'} transition-all duration-300`}>
                    {item.question}
                  </h3>
                  {openItem === index && (
                    <p className="text-black text-sm sm:text-base font-semibold animate-fadeIn text-center">
                      {item.answer}
                    </p>
                  )}
                </div>
                <div className={`w-8 h-8 bg-secondary rounded-full flex items-center justify-center transform transition-transform duration-300 ${openItem === index ? 'rotate-180' : 'rotate-90'}`}>
                  <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L1 1L3.5 3L6 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
