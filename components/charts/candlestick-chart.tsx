"use client"

import { useEffect, useState } from "react"

interface CandleData {
  open: number
  high: number
  low: number
  close: number
  volume: number
  timestamp: string
}

interface CandlestickChartProps {
  symbol?: string
  title?: string
  height?: number
  showVolume?: boolean
  className?: string
}

export function CandlestickChart({
  symbol = "NIFTY",
  title = "NIFTY 50",
  height = 300,
  showVolume = true,
  className = "",
}: CandlestickChartProps) {
  const [candles, setCandles] = useState<CandleData[]>([])
  const [hoveredCandle, setHoveredCandle] = useState<CandleData | null>(null)

  // Generate realistic candle data
  useEffect(() => {
    const generateCandles = () => {
      const data: CandleData[] = []
      let basePrice = symbol === "BANKNIFTY" ? 53000 : symbol === "SENSEX" ? 81000 : 24800
      const now = new Date()

      for (let i = 29; i >= 0; i--) {
        const volatility = basePrice * 0.008
        const open = basePrice + (Math.random() - 0.5) * volatility
        const closeChange = (Math.random() - 0.48) * volatility
        const close = open + closeChange
        const high = Math.max(open, close) + Math.random() * volatility * 0.5
        const low = Math.min(open, close) - Math.random() * volatility * 0.5
        const volume = Math.floor(Math.random() * 1000000) + 500000

        const timestamp = new Date(now.getTime() - i * 5 * 60000)

        data.push({
          open: Number(open.toFixed(2)),
          high: Number(high.toFixed(2)),
          low: Number(low.toFixed(2)),
          close: Number(close.toFixed(2)),
          volume,
          timestamp: timestamp.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
        })

        basePrice = close
      }
      return data
    }

    setCandles(generateCandles())

    const interval = setInterval(() => {
      setCandles((prev) => {
        const newCandles = [...prev.slice(1)]
        const lastCandle = prev[prev.length - 1]
        const volatility = lastCandle.close * 0.005
        const open = lastCandle.close
        const closeChange = (Math.random() - 0.48) * volatility
        const close = open + closeChange
        const high = Math.max(open, close) + Math.random() * volatility * 0.3
        const low = Math.min(open, close) - Math.random() * volatility * 0.3

        newCandles.push({
          open: Number(open.toFixed(2)),
          high: Number(high.toFixed(2)),
          low: Number(low.toFixed(2)),
          close: Number(close.toFixed(2)),
          volume: Math.floor(Math.random() * 1000000) + 500000,
          timestamp: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
        })
        return newCandles
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [symbol])

  if (candles.length === 0) return null

  const allPrices = candles.flatMap((c) => [c.high, c.low])
  const minPrice = Math.min(...allPrices)
  const maxPrice = Math.max(...allPrices)
  const priceRange = maxPrice - minPrice
  const maxVolume = Math.max(...candles.map((c) => c.volume))

  const chartHeight = showVolume ? height - 60 : height - 30
  const volumeHeight = 40
  const candleWidth = 8
  const candleGap = 4
  const chartWidth = candles.length * (candleWidth + candleGap)

  const priceToY = (price: number) => {
    return chartHeight - ((price - minPrice) / priceRange) * (chartHeight - 20)
  }

  const lastCandle = candles[candles.length - 1]
  const firstCandle = candles[0]
  const overallChange = ((lastCandle.close - firstCandle.open) / firstCandle.open) * 100

  return (
    <div className={`glass rounded-xl p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center icon-glow">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18" />
              <path d="M18 9l-5-6-4 6-5-4" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">5-minute candles</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-foreground">₹{lastCandle.close.toLocaleString("en-IN")}</p>
          <p className={`text-sm ${overallChange >= 0 ? "text-green-500" : "text-red-500"}`}>
            {overallChange >= 0 ? "+" : ""}
            {overallChange.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Candlestick Info on Hover */}
      {hoveredCandle && (
        <div className="absolute top-16 left-4 glass rounded-lg p-3 text-xs z-10 border border-primary/30">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <span className="text-muted-foreground">Open:</span>
            <span className="text-foreground font-medium">₹{hoveredCandle.open.toLocaleString("en-IN")}</span>
            <span className="text-muted-foreground">High:</span>
            <span className="text-green-500 font-medium">₹{hoveredCandle.high.toLocaleString("en-IN")}</span>
            <span className="text-muted-foreground">Low:</span>
            <span className="text-red-500 font-medium">₹{hoveredCandle.low.toLocaleString("en-IN")}</span>
            <span className="text-muted-foreground">Close:</span>
            <span className="text-foreground font-medium">₹{hoveredCandle.close.toLocaleString("en-IN")}</span>
            <span className="text-muted-foreground">Volume:</span>
            <span className="text-foreground font-medium">{(hoveredCandle.volume / 1000).toFixed(0)}K</span>
          </div>
        </div>
      )}

      {/* Chart SVG */}
      <div className="relative overflow-hidden rounded-lg bg-background/50 border border-border">
        <svg width="100%" height={height} viewBox={`0 0 ${chartWidth + 60} ${height}`} preserveAspectRatio="none">
          {/* Grid Lines */}
          {[...Array(5)].map((_, i) => {
            const y = (chartHeight / 4) * i + 10
            const price = maxPrice - (priceRange / 4) * i
            return (
              <g key={i}>
                <line
                  x1="50"
                  y1={y}
                  x2={chartWidth + 50}
                  y2={y}
                  stroke="currentColor"
                  className="text-border"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <text x="5" y={y + 4} className="fill-muted-foreground text-[8px]">
                  {price.toFixed(0)}
                </text>
              </g>
            )
          })}

          {/* Candles */}
          {candles.map((candle, i) => {
            const x = 50 + i * (candleWidth + candleGap)
            const isGreen = candle.close >= candle.open
            const bodyTop = priceToY(Math.max(candle.open, candle.close))
            const bodyBottom = priceToY(Math.min(candle.open, candle.close))
            const bodyHeight = Math.max(bodyBottom - bodyTop, 1)

            return (
              <g
                key={i}
                onMouseEnter={() => setHoveredCandle(candle)}
                onMouseLeave={() => setHoveredCandle(null)}
                className="cursor-crosshair"
              >
                {/* Wick */}
                <line
                  x1={x + candleWidth / 2}
                  y1={priceToY(candle.high)}
                  x2={x + candleWidth / 2}
                  y2={priceToY(candle.low)}
                  stroke={isGreen ? "#22c55e" : "#ef4444"}
                  strokeWidth="1"
                />
                {/* Body */}
                <rect
                  x={x}
                  y={bodyTop}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={isGreen ? "#22c55e" : "#ef4444"}
                  rx="1"
                  className="transition-opacity hover:opacity-80"
                />
              </g>
            )
          })}

          {/* Volume Bars */}
          {showVolume && (
            <g>
              <line
                x1="50"
                y1={chartHeight + 10}
                x2={chartWidth + 50}
                y2={chartHeight + 10}
                stroke="currentColor"
                className="text-border"
                strokeWidth="0.5"
              />
              {candles.map((candle, i) => {
                const x = 50 + i * (candleWidth + candleGap)
                const barHeight = (candle.volume / maxVolume) * volumeHeight
                const isGreen = candle.close >= candle.open

                return (
                  <rect
                    key={i}
                    x={x}
                    y={chartHeight + 15 + (volumeHeight - barHeight)}
                    width={candleWidth}
                    height={barHeight}
                    fill={isGreen ? "rgba(139, 92, 246, 0.5)" : "rgba(59, 130, 246, 0.5)"}
                    rx="1"
                  />
                )
              })}
            </g>
          )}
        </svg>
      </div>

      {/* Time Labels */}
      <div className="flex justify-between mt-2 px-12">
        {[0, 9, 19, 29].map((i) => (
          <span key={i} className="text-xs text-muted-foreground">
            {candles[i]?.timestamp}
          </span>
        ))}
      </div>
    </div>
  )
}
