"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { TradingViewChart } from "./trading-view-chart"
import { BuySellPanel } from "./buy-sell-panel"
import { PositionsTable } from "./positions-table"
import { Loader2 } from "lucide-react"

interface UserData {
  id: string
  fullName: string
  email: string
  mobile: string
  plan: string
  role: string
  consentStatus: string
  createdAt: string
}

export function TradingDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSymbol, setSelectedSymbol] = useState("NIFTY 50")
  const [currentPrice, setCurrentPrice] = useState(24285)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("/api/user/profile")

        if (!response.ok) {
          router.push("/login")
          return
        }

        const data = await response.json()
        setUser(data.user)
      } catch {
        router.push("/login")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleOrderPlaced = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
            <Loader2 className="h-8 w-8 animate-spin text-purple-400 icon-glow" />
          </div>
          <p className="text-muted-foreground">Loading trading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-6 md:px-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold md:text-3xl">
              <span className="text-gradient">Paper Trading</span> Terminal
            </h1>
            <p className="text-muted-foreground">Practice trading with virtual ₹10,00,000</p>
          </div>

          {/* Main Trading Layout */}
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Chart - Takes 3 columns */}
            <div className="lg:col-span-3">
              <TradingViewChart symbol={selectedSymbol} onPriceUpdate={setCurrentPrice} />
            </div>

            {/* Order Panel - Takes 1 column */}
            <div className="lg:col-span-1">
              <BuySellPanel symbol={selectedSymbol} currentPrice={currentPrice} onOrderPlaced={handleOrderPlaced} />
            </div>
          </div>

          {/* Positions Table - Full width below */}
          <div className="mt-6">
            <PositionsTable refreshTrigger={refreshTrigger} />
          </div>
        </main>
      </div>
    </div>
  )
}
