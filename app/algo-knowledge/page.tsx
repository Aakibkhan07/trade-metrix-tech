import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { KnowledgeHero } from "@/components/knowledge/knowledge-hero"
import { AlgoBasics } from "@/components/knowledge/algo-basics"
import { StrategyTypes } from "@/components/knowledge/strategy-types"
import { AlgoRiskManagement } from "@/components/knowledge/algo-risk-management"
import { KnowledgeDisclaimer } from "@/components/knowledge/knowledge-disclaimer"
import { AlgoArchitecture } from "@/components/knowledge/algo-architecture"
import { AlgoSvgArchitecture } from "@/components/knowledge/algo-svg-architecture"

export const metadata = {
  title: "Algo Trading Guide | Trade Metrix Technologies - Learn Algorithmic Trading",
  description:
    "Comprehensive guide to algorithmic trading - strategy logic, backtesting, paper trading, risk management, and broker API integration.",
}

export default function AlgoKnowledgePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <KnowledgeHero
          title="Algo Trading Guide"
          subtitle="Master Algorithmic Trading"
          description="Learn the fundamentals of algorithmic trading, from strategy development to execution and risk management."
        />
        <AlgoSvgArchitecture />
        <AlgoArchitecture />
        <AlgoBasics />
        <StrategyTypes />
        <AlgoRiskManagement />
        <KnowledgeDisclaimer />
      </main>
      <Footer />
    </div>
  )
}
