import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TradingToolsSection } from "@/components/home/trading-tools-section"

export const metadata = {
  title: "Trading Tools | Trade Metrix Technologies - Proprietary Analysis Suite",
  description:
    "Access Trade Metrix's powerful proprietary trading tools including OI Scanner, Strategy Screener, IV Analyzer, Greeks Dashboard and more for comprehensive option chain analysis.",
}

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TradingToolsSection />
      </main>
      <Footer />
    </div>
  )
}
