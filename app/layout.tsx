import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { LiveMarketTicker } from "@/components/charts/live-market-ticker"
import "./globals.css"

import { Inter, JetBrains_Mono, Oxygen as V0_Font_Oxygen, Geist_Mono as V0_Font_Geist_Mono, Merriweather as V0_Font_Merriweather } from 'next/font/google'

// Initialize fonts
const _oxygen = V0_Font_Oxygen({ subsets: ['latin'], weight: ["300","400","700"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _merriweather = V0_Font_Merriweather({ subsets: ['latin'], weight: ["300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trade Metrix - Algo Trading Strategies",
  description:
    "Professional algorithmic trading software. Purchase proven algo strategies for NSE & BSE. Trade with code, not emotions.",
  keywords: "algo trading, automated trading, NSE, BSE, nifty options, bank nifty, trading strategies, algo software",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LiveMarketTicker />
        <div className="pt-[72px]">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
