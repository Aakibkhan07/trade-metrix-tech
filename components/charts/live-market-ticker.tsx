"use client"

import { useEffect, useState, useCallback } from "react"
import { TrendingUp, TrendingDown, Activity, RefreshCw, Wifi, WifiOff } from "lucide-react"

interface TickerData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  high: number
  low: number
  open: number
  previousClose?: number
  lastUpdated: string
}

const marketData: TickerData[] = [
  {
    symbol: "NIFTY50",
    name: "NIFTY 50",
    price: 24850.35,
    change: 0,
    changePercent: 0,
    high: 24920,
    low: 24780,
    open: 24800,
    lastUpdated: "",
  },
  {
    symbol: "NIFTYBANK",
    name: "BANK NIFTY",
    price: 53425.7,
    change: 0,
    changePercent: 0,
    high: 53600,
    low: 53200,
    open: 53350,
    lastUpdated: "",
  },
  {
    symbol: "SENSEX",
    name: "SENSEX",
    price: 81652.45,
    change: 0,
    changePercent: 0,
    high: 81800,
    low: 81500,
    open: 81600,
    lastUpdated: "",
  },
  {
    symbol: "FINNIFTY",
    name: "FIN NIFTY",
    price: 23890.25,
    change: 0,
    changePercent: 0,
    high: 23950,
    low: 23820,
    open: 23860,
    lastUpdated: "",
  },
  {
    symbol: "MIDCPNIFTY",
    name: "MIDCAP NIFTY",
    price: 13245.8,
    change: 0,
    changePercent: 0,
    high: 13300,
    low: 13180,
    open: 13220,
    lastUpdated: "",
  },
  {
    symbol: "RELIANCE",
    name: "RELIANCE",
    price: 2945.6,
    change: 0,
    changePercent: 0,
    high: 2965,
    low: 2920,
    open: 2935,
    lastUpdated: "",
  },
  {
    symbol: "TCS",
    name: "TCS",
    price: 4125.8,
    change: 0,
    changePercent: 0,
    high: 4150,
    low: 4100,
    open: 4120,
    lastUpdated: "",
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC BANK",
    price: 1723.45,
    change: 0,
    changePercent: 0,
    high: 1740,
    low: 1710,
    open: 1720,
    lastUpdated: "",
  },
  {
    symbol: "INFY",
    name: "INFOSYS",
    price: 1876.35,
    change: 0,
    changePercent: 0,
    high: 1890,
    low: 1860,
    open: 1870,
    lastUpdated: "",
  },
  {
    symbol: "ICICIBANK",
    name: "ICICI BANK",
    price: 1285.2,
    change: 0,
    changePercent: 0,
    high: 1295,
    low: 1275,
    open: 1280,
    lastUpdated: "",
  },
]

function simulateMarketMovement(ticker: TickerData): TickerData {
  const volatility = ticker.symbol.includes("NIFTY") ? 0.0008 : 0.0012
  const trend = Math.random() > 0.48 ? 1 : -1 // Slight bullish bias
  const changeAmount = ticker.price * volatility * (Math.random() + 0.5) * trend

  const newPrice = Math.max(ticker.low * 0.99, Math.min(ticker.high * 1.01, ticker.price + changeAmount))
  const totalChange = newPrice - ticker.open
  const changePercent = (totalChange / ticker.open) * 100

  return {
    ...ticker,
    price: Number(newPrice.toFixed(2)),
    change: Number(totalChange.toFixed(2)),
    changePercent: Number(changePercent.toFixed(2)),
    high: Math.max(ticker.high, newPrice),
    low: Math.min(ticker.low, newPrice),
    lastUpdated: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
  }
}

export function LiveMarketTicker() {
  const [tickers, setTickers] = useState<TickerData[]>(marketData)
  const [isMarketOpen, setIsMarketOpen] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<string>("")
  const [isConnected, setIsConnected] = useState(true)
  const [dataSource, setDataSource] = useState<string>("loading")

  const checkMarketHours = useCallback(() => {
    const now = new Date()
    const istOffset = 5.5 * 60 * 60 * 1000
    const istTime = new Date(now.getTime() + istOffset)
    const hours = istTime.getUTCHours()
    const minutes = istTime.getUTCMinutes()
    const day = istTime.getUTCDay()

    const timeInMinutes = hours * 60 + minutes
    const marketOpen = 9 * 60 + 15 // 9:15 AM
    const marketClose = 15 * 60 + 30 // 3:30 PM

    return day >= 1 && day <= 5 && timeInMinutes >= marketOpen && timeInMinutes <= marketClose
  }, [])

  const fetchMarketData = useCallback(async () => {
    try {
      const response = await fetch("/api/market", {
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error("Failed to fetch market data")
      }

      const result = await response.json()

      if (result.success && result.data) {
        setTickers(result.data)
        setIsConnected(true)
        setDataSource(result.source || "api")
        setLastUpdate(
          new Date().toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        )
      }
    } catch (error) {
      console.error("Market data fetch error:", error)
      setIsConnected(false)
      setDataSource("offline")
    }
  }, [])

  useEffect(() => {
    setIsMarketOpen(checkMarketHours())

    // Initial fetch
    fetchMarketData()

    // Update every 3 seconds for live data
    const interval = setInterval(() => {
      fetchMarketData()
      setIsMarketOpen(checkMarketHours())
    }, 3000)

    return () => clearInterval(interval)
  }, [checkMarketHours, fetchMarketData])

  if (tickers.length === 0) {
    return (
      <div className="fixed top-0 left-0 right-0 z-[100] bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
        <div className="flex items-center justify-center gap-2 px-4 py-3">
          <RefreshCw className="h-4 w-4 animate-spin text-primary" />
          <span className="text-sm text-muted-foreground">Loading market data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
      <div className="flex items-center gap-2 px-4 py-1.5 border-b border-border/50 bg-muted/30">
        <Activity className="h-3.5 w-3.5 text-primary" />
        <span className="text-xs font-semibold text-foreground uppercase tracking-wide">NSE / BSE Live</span>

        <div className="flex items-center gap-1.5 ml-2">
          {isConnected ? <Wifi className="h-3 w-3 text-green-500" /> : <WifiOff className="h-3 w-3 text-red-500" />}
          <span className={`relative flex h-2 w-2 ${isMarketOpen ? "" : "opacity-50"}`}>
            <span
              className={`absolute inline-flex h-full w-full rounded-full ${isMarketOpen ? "bg-green-500 animate-ping" : "bg-yellow-500"} opacity-75`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${isMarketOpen ? "bg-green-500" : "bg-yellow-500"}`}
            />
          </span>
          <span className={`text-[10px] font-medium ${isMarketOpen ? "text-green-500" : "text-yellow-500"}`}>
            {isMarketOpen ? "MARKET OPEN" : "MARKET CLOSED"}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-3 text-[10px] text-muted-foreground">
          <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-muted font-medium uppercase">
            {dataSource === "nse"
              ? "NSE Live"
              : dataSource === "google"
                ? "Google"
                : dataSource === "realtime-fallback"
                  ? "Real-time"
                  : "API"}
          </span>
          <div className="flex items-center gap-1">
            <RefreshCw className="h-3 w-3 animate-spin" style={{ animationDuration: "3s" }} />
            <span className="font-mono">{lastUpdate}</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {[...tickers, ...tickers].map((ticker, i) => (
            <div
              key={`${ticker.symbol}-${i}`}
              className="flex items-center gap-3 px-4 py-2 border-r border-border/30 whitespace-nowrap hover:bg-muted/30 transition-colors cursor-default group relative"
            >
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground font-medium">{ticker.symbol}</span>
                <span className="font-semibold text-sm text-foreground">{ticker.name}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono font-bold text-sm text-foreground">
                  ₹{ticker.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span>
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold ${
                    ticker.changePercent >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {ticker.changePercent >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {ticker.changePercent >= 0 ? "+" : ""}
                  {ticker.change.toLocaleString("en-IN", { minimumFractionDigits: 2 })} (
                  {ticker.changePercent >= 0 ? "+" : ""}
                  {ticker.changePercent.toFixed(2)}%)
                </span>
              </div>
              <div className="hidden group-hover:flex absolute top-full left-0 mt-1 bg-popover border border-border rounded-lg p-2 shadow-xl z-50 text-[10px] gap-3">
                <div>
                  <span className="text-muted-foreground">O:</span>{" "}
                  <span className="font-mono">₹{ticker.open?.toLocaleString("en-IN")}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">H:</span>{" "}
                  <span className="font-mono text-green-500">₹{ticker.high?.toLocaleString("en-IN")}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">L:</span>{" "}
                  <span className="font-mono text-red-500">₹{ticker.low?.toLocaleString("en-IN")}</span>
                </div>
                {ticker.previousClose && (
                  <div>
                    <span className="text-muted-foreground">Prev:</span>{" "}
                    <span className="font-mono">₹{ticker.previousClose?.toLocaleString("en-IN")}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
