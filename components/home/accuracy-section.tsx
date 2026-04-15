"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, Activity, CheckCircle2, TrendingUp } from "lucide-react"

const plans = [
  {
    name: "Monthly",
    color: "from-violet-500 to-purple-600",
    features: ["2 Strategies", "Real-time Signals", "Email Support"],
  },
  {
    name: "Quarterly",
    color: "from-blue-500 to-cyan-600",
    features: ["4 Strategies", "Priority Support", "Trailing Stoploss"],
  },
  {
    name: "Half-Yearly",
    color: "from-emerald-500 to-teal-600",
    features: ["8 Strategies", "24/7 Support", "Strategy Builder"],
    popular: true,
  },
  {
    name: "Yearly",
    color: "from-amber-500 to-orange-600",
    features: ["15 Strategies", "Dedicated Manager", "Full Platform Access"],
  },
]

function AnimatedCandleChart({ color }: { color: string }) {
  const [candles, setCandles] = useState<Array<{ open: number; high: number; low: number; close: number }>>([])

  useEffect(() => {
    // Generate initial candles
    const initialCandles = Array.from({ length: 12 }, (_, i) => {
      const base = 50 + Math.sin(i * 0.5) * 20
      const open = base + (Math.random() - 0.5) * 10
      const close = base + (Math.random() - 0.5) * 10
      const high = Math.max(open, close) + Math.random() * 8
      const low = Math.min(open, close) - Math.random() * 8
      return { open, high, low, close }
    })
    setCandles(initialCandles)

    // Animate candles
    const interval = setInterval(() => {
      setCandles((prev) => {
        const newCandles = [...prev.slice(1)]
        const lastClose = prev[prev.length - 1]?.close || 50
        const open = lastClose
        const close = open + (Math.random() - 0.5) * 15
        const high = Math.max(open, close) + Math.random() * 5
        const low = Math.min(open, close) - Math.random() * 5
        newCandles.push({ open, high, low, close })
        return newCandles
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-24 flex items-end gap-1 px-2">
      {candles.map((candle, idx) => {
        const isGreen = candle.close >= candle.open
        const bodyTop = Math.max(candle.open, candle.close)
        const bodyBottom = Math.min(candle.open, candle.close)
        const bodyHeight = Math.max(bodyTop - bodyBottom, 2)

        return (
          <div key={idx} className="flex-1 flex flex-col items-center relative" style={{ height: "100%" }}>
            {/* Wick */}
            <div
              className="absolute w-px bg-current opacity-50"
              style={{
                bottom: `${candle.low}%`,
                height: `${candle.high - candle.low}%`,
                color: isGreen ? "oklch(0.6 0.15 150)" : "oklch(0.6 0.2 25)",
              }}
            />
            {/* Body */}
            <div
              className={`absolute w-full rounded-sm transition-all duration-500 ${isGreen ? "bg-success" : "bg-destructive"}`}
              style={{
                bottom: `${bodyBottom}%`,
                height: `${bodyHeight}%`,
                opacity: 0.8,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export function AccuracySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(plans.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Animate counters
          plans.forEach((plan, index) => {
            const duration = 2000
            const steps = 60
            const increment = plan.accuracy / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= plan.accuracy) {
                current = plan.accuracy
                clearInterval(timer)
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev]
                newValues[index] = Math.floor(current)
                return newValues
              })
            }, duration / steps)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} id="accuracy" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0.1_260/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.1_260/0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/20">
            <Activity className="h-4 w-4 animate-pulse" />
            Performance Metrics
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Platform Features
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
              for Every Trader
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each plan includes powerful tools and features designed to enhance your trading execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${isVisible ? "animate-scale-in" : "opacity-0"} ${plan.popular ? "ring-2 ring-primary" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              )}

              <div className="p-6">
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-4">{plan.name} Plan</h3>

                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className={`h-6 w-6 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`} />
                  <span className="text-sm text-muted-foreground">Premium Features Included</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="mt-6 p-3 rounded-lg bg-success/10 border border-success/20 text-center">
                  <span className="text-xs font-semibold text-success">Ready to Use</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 max-w-3xl mx-auto text-center ${isVisible ? "animate-fade-in animation-delay-500" : "opacity-0"}`}>
          <p className="text-sm text-muted-foreground">
            All plans include real-time signal execution, risk management tools, and dedicated support. Choose the plan that best fits your trading needs.
          </p>
        </div>
      </div>
    </section>
  )
}
