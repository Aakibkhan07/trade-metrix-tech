import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LiveNewsSection } from "@/components/home/live-news-section"

export const metadata = {
  title: "Market News | Trade Metrix Technologies - Live Stock Market Updates",
  description:
    "Stay updated with live Indian stock market news, NSE/BSE updates, economy news, and global market insights from trusted sources.",
}

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <LiveNewsSection />
      </main>
      <Footer />
    </div>
  )
}
