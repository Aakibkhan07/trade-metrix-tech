import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { KnowledgeHero } from "@/components/knowledge/knowledge-hero"
import { MarketBasics } from "@/components/knowledge/market-basics"
import { IndianMarkets } from "@/components/knowledge/indian-markets"
import { TradingConcepts } from "@/components/knowledge/trading-concepts"
import { KnowledgeDisclaimer } from "@/components/knowledge/knowledge-disclaimer"
import { MarketArchitecture } from "@/components/knowledge/market-architecture"
import { MarketSvgArchitecture } from "@/components/knowledge/market-svg-architecture"

export const metadata = {
  title: "Market Knowledge | Trade Metrix Technologies - Learn Stock Markets",
  description: "Educational resources about NSE, BSE, Nifty 50, Bank Nifty, options trading, intraday trading.",
}

export default function MarketKnowledgePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <KnowledgeHero
          title="Market Knowledge"
          subtitle="Understanding Indian Stock Markets"
          description="Educational resources to help you understand the fundamentals of NSE, BSE, and derivatives trading in India."
        />
        <MarketSvgArchitecture />
        <MarketArchitecture />
        <IndianMarkets />
        <MarketBasics />
        <TradingConcepts />
        <KnowledgeDisclaimer />
      </main>
      <Footer />
    </div>
  )
}
