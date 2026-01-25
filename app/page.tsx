import BehavioralCopilot from '@/components/BehavioralCopilot';
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { AccuracySection } from "@/components/home/accuracy-section"
import { CTASection } from "@/components/home/cta-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BehavioralCopilot />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AccuracySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
