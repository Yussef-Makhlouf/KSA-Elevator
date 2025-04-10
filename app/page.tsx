import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsSection from "@/components/projects-section"
import ElevatorTypesSection from "@/components/elevator-types-section"
import ContactSection from "@/components/contact-section"
import FaqSection from "@/components/faq-section"
import PartnersSection from "@/components/partners-section"
import Hero from "@/components/hero"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative w-full overflow-x-hidden">
      <Header />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ElevatorTypesSection />
      <TestimonialsSection />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      {/* Note: Remove this from page.tsx since we'll add it to layout.tsx instead */}
    </main>
  )
}
