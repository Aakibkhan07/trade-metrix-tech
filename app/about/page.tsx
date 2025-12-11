import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutArchitecture } from "@/components/about/about-architecture"
import { AboutSvgArchitecture } from "@/components/about/about-svg-architecture"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutTechStack } from "@/components/about/about-tech-stack"
import { AboutStats } from "@/components/about/about-stats"
import { AboutDisclaimer } from "@/components/about/about-disclaimer"

export const metadata = {
  title: "About Us | Trade Metrix Technologies - Algo Trading Software Provider",
  description:
    "Learn about Trade Metrix Technologies - our mission, vision, and journey since 2020. 10,000+ users, 50+ strategies, serving NSE & BSE markets.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutMission />
        <AboutSvgArchitecture />
        <AboutArchitecture />
        <AboutStats />
        <AboutTimeline />
        <AboutTechStack />
        <AboutDisclaimer />
      </main>
      <Footer />
    </div>
  )
}
