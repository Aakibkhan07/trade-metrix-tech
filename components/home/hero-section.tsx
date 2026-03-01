"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, Bot, Code2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-card/30 pt-20 pb-20">
      {/* Bold geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_24%,oklch(0.15_0.008_0_/_0.08)_25%,oklch(0.15_0.008_0_/_0.08)_26%,transparent_27%,transparent_74%,oklch(0.15_0.008_0_/_0.08)_75%,oklch(0.15_0.008_0_/_0.08)_76%,transparent_77%,transparent)] bg-[size:50px_50px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Top badge */}
        <div className={`flex justify-center mb-8 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/30 transition-all cursor-pointer">
            <Zap className="h-4 w-4" />
            <span>Trading with Precision & Speed</span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <div className={`text-center lg:text-left ${mounted ? "animate-blur-in" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Trade Like <span className="text-primary">A Machine</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-lg">
              Automated trading systems that execute with zero emotion. Deploy proven algorithms. Watch your portfolio grow.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {[
                { icon: Zap, text: "Execute in 0.02 seconds" },
                { icon: TrendingUp, text: "50+ battle-tested strategies" },
                { icon: Code2, text: "Trade with code, not fingers" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-foreground/80">
                  <feature.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 py-6 rounded-xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:-translate-y-1 group"
                >
                  Start Trading Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/algo-software">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto border-primary/40 hover:bg-primary/10 font-bold text-base px-8 py-6 rounded-xl transition-all"
                >
                  View Strategies
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Visual showcase */}
          <div className={`hidden lg:block ${mounted ? "animate-fade-in animation-delay-200" : "opacity-0"}`}>
            <div className="relative">
              {/* Floating card */}
              <div className="bg-card border border-primary/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-primary/60 transition-all">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all" />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-primary mb-1">LIVE TRADING</h3>
                      <p className="text-xs text-foreground/60">Today's Performance</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span className="text-xs font-bold text-success">ACTIVE</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <p className="text-xs text-foreground/60 mb-2">Portfolio Value</p>
                      <p className="text-2xl font-black text-foreground">₹4.2M</p>
                      <p className="text-xs text-success font-bold mt-1">+12.4% today</p>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <p className="text-xs text-foreground/60 mb-2">Win Rate</p>
                      <p className="text-2xl font-black text-accent">84%</p>
                      <p className="text-xs text-foreground/60 font-bold mt-1">18/24 trades</p>
                    </div>
                  </div>

                  {/* Trades list */}
                  <div className="space-y-2">
                    {[
                      { name: "NIFTY 50", profit: "+8.2%", trend: "up" },
                      { name: "BANKNIFTY", profit: "+5.3%", trend: "up" },
                      { name: "FINNIFTY", profit: "-1.2%", trend: "down" },
                    ].map((trade, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 transition-all">
                        <div>
                          <p className="text-sm font-bold text-foreground">{trade.name}</p>
                        </div>
                        <div className={`text-sm font-black ${trade.trend === "up" ? "text-success" : "text-destructive"}`}>
                          {trade.profit}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs font-semibold text-foreground">Daily Target</p>
                      <p className="text-xs font-bold text-primary">85%</p>
                    </div>
                    <div className="h-2 bg-background/80 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className={`mt-20 ${mounted ? "animate-fade-in animation-delay-300" : "opacity-0"}`}>
          <p className="text-center text-sm text-foreground/60 mb-6 font-semibold uppercase tracking-widest">Trusted by India's Top Traders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Angel One", "Zerodha", "Upstox", "Fyers"].map((broker) => (
              <div key={broker} className="bg-card/50 border border-primary/10 rounded-lg p-4 text-center hover:border-primary/30 transition-all">
                <p className="text-sm font-bold text-foreground/70">{broker}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
