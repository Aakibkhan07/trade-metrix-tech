import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { PricingArchitecture } from "@/components/pricing/pricing-architecture"
import { PricingSvgArchitecture } from "@/components/pricing/pricing-svg-architecture"
import { PricingAddOns } from "@/components/pricing/pricing-addons"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingDisclaimer } from "@/components/pricing/pricing-disclaimer"

export const metadata = {
  title: "Pricing Plans | Trade Metrix Technologies - Algo Trading Software",
  description:
    "Trade Metrix Technologies pricing plans starting from ₹14,999. Monthly, Quarterly, Half-Yearly, Annual and Enterprise options available.",
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PricingHero />
        <PricingPlans />
        <PricingSvgArchitecture />
        <PricingArchitecture />
        <PricingAddOns />
        <PricingFAQ />
        <PricingDisclaimer />
      </main>
      <Footer />
    </div>
  )
}
