"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, TrendingDown, Maximize2, ZoomIn, ZoomOut } from "lucide-react"
import { portfolioStore } from "@/lib/portfolio-store"

interface Candle {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

interface TradingViewChartProps {
  symbol?: string
  onPriceUpdate?: (price: number) => void
}

export function TradingViewChart({ symbol: initialSymbol = "NIFTY 50", onPriceUpdate }: TradingViewChartProps) {
  const [symbol, setSymbol] = useState(initialSymbol)
  const [timeframe, setTimeframe] = useState("5m")
  const [candles, setCandles] = useState<Candle[]>([])
  const [currentPrice, setCurrentPrice] = useState(0)
  const [priceChange, setPriceChange] = useState(0)
  const [zoom, setZoom] = useState(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const symbols = ["NIFTY 50", "BANK NIFTY", "SENSEX", "FIN NIFTY", "RELIANCE", "TCS", "INFY", "HDFC BANK"]

  const basePrice: Record<string, number> = {
    "NIFTY 50": 24285,
    "BANK NIFTY": 51942,
    SENSEX: 80142,
    "FIN NIFTY": 23856,
    RELIANCE: 2456,
    TCS: 3842,
    INFY: 1592,
    "HDFC BANK": 1728,
  }

  // Generate realistic candle data
  const generateCandles = (sym: string): Candle[] => {
    const base = basePrice[sym] || 24285
    const candles: Candle[] = []
    let price = base * (0.98 + Math.random() * 0.04)
    const now = Date.now()

    for (let i = 100; i >= 0; i--) {
      const volatility = base * 0.002
      const open = price
      const change = (Math.random() - 0.48) * volatility * 2
      const close = open + change
      const high = Math.max(open, close) + Math.random() * volatility
      const low = Math.min(open, close) - Math.random() * volatility
      const volume = Math.floor(100000 + Math.random() * 500000)

      candles.push({
        time: now - i * 5 * 60 * 1000,
        open,
        high,
        low,
        close,
        volume,
      })

      price = close
    }

    return candles
  }

  useEffect(() => {
    setCandles(generateCandles(symbol))
  }, [symbol])

  useEffect(() => {
    // Update last candle and add new one periodically
    const interval = setInterval(() => {
      setCandles((prev) => {
        if (prev.length === 0) return prev

        const newCandles = [...prev]
        const lastCandle = { ...newCandles[newCandles.length - 1] }
        const base = basePrice[symbol] || 24285
        const volatility = base * 0.001

        // Update current candle
        const change = (Math.random() - 0.48) * volatility
        lastCandle.close = lastCandle.close + change
        lastCandle.high = Math.max(lastCandle.high, lastCandle.close)
        lastCandle.low = Math.min(lastCandle.low, lastCandle.close)
        lastCandle.volume += Math.floor(Math.random() * 10000)

        newCandles[newCandles.length - 1] = lastCandle

        setCurrentPrice(lastCandle.close)
        setPriceChange(((lastCandle.close - newCandles[0].open) / newCandles[0].open) * 100)

        // Update portfolio store with new price
        portfolioStore.updatePrices({ [symbol]: lastCandle.close })
        onPriceUpdate?.(lastCandle.close)

        return newCandles
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [symbol, onPriceUpdate])

  // Draw candlestick chart
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || candles.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height
    const padding = { top: 20, right: 60, bottom: 30, left: 10 }

    // Clear canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0)"
    ctx.fillRect(0, 0, width, height)

    // Calculate price range
    const visibleCandles = candles.slice(-Math.floor(50 * zoom))
    const prices = visibleCandles.flatMap((c) => [c.high, c.low])
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    const priceRange = maxPrice - minPrice || 1

    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom
    const candleWidth = chartWidth / visibleCandles.length
    const bodyWidth = Math.max(candleWidth * 0.7, 2)

    // Draw grid lines
    ctx.strokeStyle = "rgba(139, 92, 246, 0.1)"
    ctx.lineWidth = 1

    for (let i = 0; i <= 5; i++) {
      const y = padding.top + (chartHeight / 5) * i
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
      ctx.stroke()

      // Price labels
      const price = maxPrice - (priceRange / 5) * i
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
      ctx.font = "10px monospace"
      ctx.textAlign = "left"
      ctx.fillText(price.toFixed(2), width - padding.right + 5, y + 3)
    }

    // Draw candles
    visibleCandles.forEach((candle, i) => {
      const x = padding.left + i * candleWidth + candleWidth / 2
      const isGreen = candle.close >= candle.open

      // Scale prices to canvas
      const yHigh = padding.top + ((maxPrice - candle.high) / priceRange) * chartHeight
      const yLow = padding.top + ((maxPrice - candle.low) / priceRange) * chartHeight
      const yOpen = padding.top + ((maxPrice - candle.open) / priceRange) * chartHeight
      const yClose = padding.top + ((maxPrice - candle.close) / priceRange) * chartHeight

      // Draw wick
      ctx.strokeStyle = isGreen ? "#22c55e" : "#ef4444"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x, yHigh)
      ctx.lineTo(x, yLow)
      ctx.stroke()

      // Draw body
      const bodyTop = Math.min(yOpen, yClose)
      const bodyHeight = Math.max(Math.abs(yClose - yOpen), 1)

      if (isGreen) {
        ctx.fillStyle = "#22c55e"
      } else {
        ctx.fillStyle = "#ef4444"
      }

      ctx.fillRect(x - bodyWidth / 2, bodyTop, bodyWidth, bodyHeight)
    })

    // Draw current price line
    const currentY = padding.top + ((maxPrice - currentPrice) / priceRange) * chartHeight
    ctx.strokeStyle = "rgba(139, 92, 246, 0.8)"
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(padding.left, currentY)
    ctx.lineTo(width - padding.right, currentY)
    ctx.stroke()
    ctx.setLineDash([])

    // Current price badge
    ctx.fillStyle = "rgba(139, 92, 246, 0.9)"
    ctx.fillRect(width - padding.right, currentY - 10, 55, 20)
    ctx.fillStyle = "#fff"
    ctx.font = "bold 10px monospace"
    ctx.textAlign = "left"
    ctx.fillText(currentPrice.toFixed(2), width - padding.right + 3, currentY + 4)
  }, [candles, currentPrice, zoom])

  return (
    <Card className="glass glow border-purple-500/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
              <BarChart3 className="h-5 w-5 text-purple-400 icon-glow" />
            </div>
            <div>
              <Select value={symbol} onValueChange={setSymbol}>
                <SelectTrigger className="w-[140px] bg-transparent border-none p-0 h-auto text-lg font-bold hover:bg-transparent focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {symbols.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xl font-bold font-mono text-gradient">
                  ₹{currentPrice.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <Badge
                  variant={priceChange >= 0 ? "default" : "destructive"}
                  className={`text-xs ${
                    priceChange >= 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {priceChange >= 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {priceChange >= 0 ? "+" : ""}
                  {priceChange.toFixed(2)}%
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {["1m", "5m", "15m", "1h", "1D"].map((tf) => (
                <Button
                  key={tf}
                  variant="ghost"
                  size="sm"
                  onClick={() => setTimeframe(tf)}
                  className={`h-7 px-2 text-xs ${
                    timeframe === tf
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tf}
                </Button>
              ))}
            </div>
            <div className="flex gap-1 border-l border-border/50 pl-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}
                className="h-7 w-7 p-0"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}
                className="h-7 w-7 p-0"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden bg-background/30">
          <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
        </div>
      </CardContent>
    </Card>
  )
}
