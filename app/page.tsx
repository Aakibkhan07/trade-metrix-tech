import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { FeaturedStrategySection } from "@/components/home/featured-strategy-section"
import { ServicesSection } from "@/components/home/services-section"
import { AccuracySection } from "@/components/home/accuracy-section"
import { CTASection } from "@/components/home/cta-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PaymentSection } from "@/components/home/payment-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturedStrategySection />
        <TestimonialsSection />
        <ServicesSection />
        <AccuracySection />
        <PaymentSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
