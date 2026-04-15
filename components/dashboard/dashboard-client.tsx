"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardHeader } from "./dashboard-header"
import { DashboardStats } from "./dashboard-stats"
import { RecentAlerts } from "./recent-alerts"
import { MarketOverview } from "./market-overview"
import { QuickActions } from "./quick-actions"
import { DashboardArchitecture } from "./dashboard-architecture"
import { EconomicCalendar } from "./economic-calendar"
import { PaperTrading } from "./paper-trading"
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

export function DashboardClient() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

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

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
            <Loader2 className="h-8 w-8 animate-spin text-purple-400 icon-glow" />
          </div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-8 md:px-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold md:text-3xl">
              Welcome back, <span className="text-gradient">{user.fullName.split(" ")[0]}</span>!
            </h1>
            <p className="text-muted-foreground">{"Here's what's happening with your portfolio today."}</p>
          </div>

          <DashboardArchitecture />

          <div className="grid gap-6 lg:grid-cols-3 mt-6">
            <div className="lg:col-span-2 space-y-6">
              <DashboardStats plan={user.plan} />
              <MarketOverview />
              <PaperTrading />
              <RecentAlerts />
            </div>

            <div className="space-y-6">
              <QuickActions />
              <EconomicCalendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
