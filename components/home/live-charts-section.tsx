"use client"

import { useEffect, useRef, useState } from "react"
import { LiveMarketTicker } from "@/components/charts/live-market-ticker"
import { TrendingUp, BarChart3, Activity, Zap, Clock, Layers, LineChart, CandlestickChart } from "lucide-react"

const features = [
  { icon: CandlestickChart, label: "Candlestick", desc: "OHLC visualization" },
  { icon: LineChart, label: "Line Charts", desc: "Trend analysis" },
  { icon: BarChart3, label: "Volume Bars", desc: "Market activity" },
  { icon: Clock, label: "Multi-Timeframe", desc: "1m to Monthly" },
]

const stats = [
  { icon: Zap, value: "0.1s", label: "Chart Update" },
  { icon: Layers, value: "15+", label: "Chart Types" },
  { icon: TrendingUp, value: "100+", label: "Indicators" },
  { icon: Activity, value: "24/7", label: "Monitoring" },
]

export function LiveChartsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.9_0.005_240)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.9_0.005_240)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Activity className="h-4 w-4" />
            Live Market Data
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real-Time <span className="text-gradient">Market Analytics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade analytics with live data, volume analysis, and pattern recognition
          </p>
        </div>

        {/* Live Ticker */}
        <div className={`mb-12 ${isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"}`}>
          <LiveMarketTicker />
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${isVisible ? "animate-slide-up animation-delay-300" : "opacity-0"}`}
        >
          {stats.map((stat, idx) => (
            <div key={stat.label} className="bg-background rounded-xl border border-border p-5 hover-lift">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Features */}
        <div
          className={`bg-background rounded-2xl border border-border p-8 ${isVisible ? "animate-scale-in animation-delay-400" : "opacity-0"}`}
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Chart Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={feature.label} className="text-center group">
                <div className="h-14 w-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="font-medium text-foreground">{feature.label}</p>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
