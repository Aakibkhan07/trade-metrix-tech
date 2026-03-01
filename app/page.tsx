import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { TechnicalExcellenceSection } from "@/components/home/technical-excellence-section"
import { RealtimeStatsSection } from "@/components/home/realtime-stats-section"
import { StrategiesShowcaseSection } from "@/components/home/strategies-showcase-section"
import { IntegrationsSection } from "@/components/home/integrations-section"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { AccuracySection } from "@/components/home/accuracy-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <TechnicalExcellenceSection />
        <RealtimeStatsSection />
        <StrategiesShowcaseSection />
        <IntegrationsSection />
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
