import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PCPHero } from "@/components/products/pcp/pcp-hero"
import { PCPProblem } from "@/components/products/pcp/pcp-problem"
import { PCPExplanation } from "@/components/products/pcp/pcp-explanation"
import { PCPTiers } from "@/components/products/pcp/pcp-tiers"
import { PCPExposure } from "@/components/products/pcp/pcp-exposure"
import { PCPLogic } from "@/components/products/pcp/pcp-logic"
import { PCPBenefits } from "@/components/products/pcp/pcp-benefits"
import { PCPWhoIsFor } from "@/components/products/pcp/pcp-who-is-for"
import { PCPDisclaimer } from "@/components/products/pcp/pcp-disclaimer"
import { PCPCTA } from "@/components/products/pcp/pcp-cta"

export const metadata = {
  title: "PCP – Points Covering Plan | Trade Metrix Technologies",
  description:
    "PCP (Points Covering Plan) is a starter trading plan focused on disciplined, systematic trading without daily profit pressure. Perfect for retail traders.",
}

export default function PCPPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PCPHero />
        <PCPProblem />
        <PCPExplanation />
        <PCPTiers />
        <PCPExposure />
        <PCPLogic />
        <PCPBenefits />
        <PCPWhoIsFor />
        <PCPDisclaimer />
        <PCPCTA />
      </main>
      <Footer />
    </div>
  )
}
