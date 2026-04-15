import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { FeaturesGrid } from "@/components/features/features-grid"
import { FeaturesArchitecture } from "@/components/features/features-architecture"
import { FeaturesSvgArchitecture } from "@/components/features/features-svg-architecture"
import { ComparisonTable } from "@/components/features/comparison-table"
import { BrokerIntegrations } from "@/components/features/broker-integrations"
import { FeaturesDisclaimer } from "@/components/features/features-disclaimer"

export const metadata = {
  title: "Platform Features | Trade Metrix Technologies - Algo Trading Software",
  description:
    "Explore Trade Metrix Technologies platform features - real-time signals, one-click execution, smart stoploss, backtesting engine, and 20+ broker integrations.",
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <FeaturesHero />
        <FeaturesGrid />
        <FeaturesSvgArchitecture />
        <FeaturesArchitecture />
        <ComparisonTable />
        <BrokerIntegrations />
        <FeaturesDisclaimer />
      </main>
      <Footer />
    </div>
  )
}
