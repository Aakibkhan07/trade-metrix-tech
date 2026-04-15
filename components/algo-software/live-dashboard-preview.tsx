"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Wifi, WifiOff } from "lucide-react"

interface MarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
}

export function LiveDashboardPreview() {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const res = await fetch("/api/market")
        const data = await res.json()
        if (data.success && data.data) {
          setMarketData(data.data)
          setIsConnected(true)
          setLastUpdate(new Date())
        }
      } catch (error) {
        setIsConnected(false)
      }
    }

    fetchMarketData()
    const interval = setInterval(fetchMarketData, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const nifty = marketData.find((m) => m.symbol === "NIFTY50")
  const bankNifty = marketData.find((m) => m.symbol === "NIFTYBANK")

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Live NIFTY 50 */}
      <div className="rounded-lg bg-secondary/50 p-4 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
        <div className="absolute top-2 right-2 flex items-center gap-1">
          {isConnected ? (
            <>
              <Wifi className="h-3 w-3 text-green-500" />
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </>
          ) : (
            <WifiOff className="h-3 w-3 text-red-500" />
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
          NIFTY 50
          <span className="text-[10px] bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded font-medium">LIVE</span>
        </p>
        <p className="text-3xl font-bold text-foreground font-mono transition-all">
          {nifty ? nifty.price.toLocaleString("en-IN", { minimumFractionDigits: 2 }) : "24,857.75"}
        </p>
        <p
          className={`text-sm mt-1 flex items-center gap-1 ${nifty && nifty.change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {nifty && nifty.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {nifty
            ? `${nifty.change >= 0 ? "+" : ""}${nifty.change.toFixed(2)} (${nifty.changePercent >= 0 ? "+" : ""}${nifty.changePercent.toFixed(2)}%)`
            : "+185.30 (+0.75%)"}
        </p>
      </div>

      {/* Live BANK NIFTY */}
      <div className="rounded-lg bg-secondary/50 p-4 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
        <div className="absolute top-2 right-2 flex items-center gap-1">
          {isConnected ? (
            <>
              <Wifi className="h-3 w-3 text-green-500" />
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </>
          ) : (
            <WifiOff className="h-3 w-3 text-red-500" />
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
          BANK NIFTY
          <span className="text-[10px] bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded font-medium">LIVE</span>
        </p>
        <p className="text-3xl font-bold text-foreground font-mono transition-all">
          {bankNifty ? bankNifty.price.toLocaleString("en-IN", { minimumFractionDigits: 2 }) : "53,412.85"}
        </p>
        <p
          className={`text-sm mt-1 flex items-center gap-1 ${bankNifty && bankNifty.change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {bankNifty && bankNifty.change >= 0 ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {bankNifty
            ? `${bankNifty.change >= 0 ? "+" : ""}${bankNifty.change.toFixed(2)} (${bankNifty.changePercent >= 0 ? "+" : ""}${bankNifty.changePercent.toFixed(2)}%)`
            : "+342.60 (+0.64%)"}
        </p>
      </div>

      {/* Active Strategies */}
      <div className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-4 border border-primary/30">
        <p className="text-sm text-muted-foreground mb-2">Active Strategies</p>
        <p className="text-3xl font-bold text-primary">20+</p>
        <p className="text-sm text-muted-foreground mt-1">All in Options Trading</p>
      </div>

      {/* Last update timestamp */}
      {lastUpdate && (
        <div className="md:col-span-3 text-center">
          <p className="text-[10px] text-muted-foreground">
            Last updated: {lastUpdate.toLocaleTimeString("en-IN")} IST
          </p>
        </div>
      )}
    </div>
  )
}
