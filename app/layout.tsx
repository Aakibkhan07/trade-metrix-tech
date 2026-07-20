import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AuthGuard } from "@/components/auth/auth-guard"
import UserTrackingClient from "@/components/auth/user-tracking-client"
import { LiveChatWidget } from "@/components/chat/live-chat-widget"

import {
  Inter,
  JetBrains_Mono,
  Oxygen as V0_Font_Oxygen,
  Geist_Mono as V0_Font_Geist_Mono,
  Merriweather as V0_Font_Merriweather,
} from "next/font/google"

// Initialize fonts
const _oxygen = V0_Font_Oxygen({ subsets: ["latin"], weight: ["300", "400", "700"] })
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _merriweather = V0_Font_Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trade Metrix — Algo Strategy Builder & Deployment Platform",
  description:
    "Build, backtest and deploy your own algorithmic trading strategies across 10+ Indian brokers. No coding required. No tips, no advisory — pure strategy automation.",
  keywords:
    "algo trading, algorithmic trading strategy builder, backtesting software, deploy trading algorithm, trading bot builder, custom trading strategy, NSE, BSE, strategy automation, multi broker trading",
  openGraph: {
    title: "Trade Metrix — Build & Deploy Algo Trading Strategies",
    description:
      "Build, backtest and deploy custom algorithmic trading strategies across 10+ brokers. No advisory, no tips — pure strategy automation.",
    url: "https://algo.trademetrix.tech",
    siteName: "Trade Metrix",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://algo.trademetrix.tech/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Metrix — Algo Strategy Builder & Deployment Platform",
    description: "Build, backtest and deploy algorithmic trading strategies across 10+ brokers.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: "index, follow",
  category: "finance",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Trade Metrix",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              description:
                "Build, backtest and deploy custom algorithmic trading strategies across 10+ brokers. Strategy builder, backtesting engine, and automated execution.",
              brand: { "@type": "Brand", name: "Trade Metrix" },
              featureList:
                "Strategy Builder, Backtesting Engine, Multi-Broker Support, Auto Execution, Risk Management, AI Trading Desk",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <UserTrackingClient />
        <div className="pt-0">
          <AuthGuard>{children}</AuthGuard>
        </div>
        <LiveChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
