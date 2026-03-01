"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, BarChart3, Code2, Play, Download, Send, Cpu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [orderCount, setOrderCount] = useState(0)
  const [activeOrders, setActiveOrders] = useState([])

  useEffect(() => {
    setMounted(true)
    // Simulate live order execution
    const interval = setInterval(() => {
      setOrderCount(prev => prev + Math.floor(Math.random() * 5) + 1)
      if (Math.random() > 0.3) {
        setActiveOrders(prev => {
          const newOrders = [...prev, {
            id: Math.random(),
            symbol: ['NIFTY', 'BANKNIFTY', 'FINNIFTY'][Math.floor(Math.random() * 3)],
            type: Math.random() > 0.5 ? 'BUY' : 'SELL',
            executed: true
          }]
          return newOrders.slice(-4)
        })
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-card/40 pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_24%,oklch(0.15_0.008_0_/_0.05)_25%,oklch(0.15_0.008_0_/_0.05)_26%,transparent_27%,transparent_74%,oklch(0.15_0.008_0_/_0.05)_75%,oklch(0.15_0.008_0_/_0.05)_76%,transparent_77%,transparent)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Badge */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/30 transition-all group">
            <Cpu className="h-4 w-4 group-hover:animate-spin" />
            <span>AI-Powered Automatic Execution Engine</span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Left Column - Main headline and CTAs */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Trade <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">Automatically</span>, Profit <span className="text-primary">Instantly</span>
            </h1>
            
            <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
              Deploy AI-powered algorithmic strategies and watch them execute with zero latency. No manual trading. No emotions. Just pure automation and consistent results.
            </p>

            {/* Three Key Features */}
            <div className="grid grid-cols-3 gap-3 mb-10 md:mb-12">
              {[
                { icon: Zap, label: "<1ms", desc: "Execution" },
                { icon: BarChart3, label: "50+", desc: "Strategies" },
                { icon: Cpu, label: "24/7", desc: "Automated" },
              ].map((item, idx) => (
                <div key={idx} className={`bg-card/40 border border-primary/20 rounded-lg p-3 backdrop-blur-sm hover:border-primary/50 transition-all group transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${200 + idx * 100}ms` }}>
                  <item.icon className="h-5 w-5 text-primary mb-2 group-hover:scale-125 transition-transform" />
                  <p className="text-sm font-black text-foreground">{item.label}</p>
                  <p className="text-xs text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "400ms" }}>
              <Link href="/register">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:-translate-y-1 group"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Live Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/algo-software">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto border-primary/40 hover:bg-primary/10 font-bold px-8 py-6 rounded-xl transition-all"
                >
                  <Code2 className="h-4 w-4 mr-2" />
                  View Strategies
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Live Terminal Mockup */}
          <div className={`relative transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="sticky top-20">
              {/* Terminal-style card */}
              <div className="bg-gradient-to-br from-card/60 to-card/40 border border-primary/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                
                {/* Terminal header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary/20 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs font-mono font-bold text-primary">LIVE TRADING</span>
                  </div>
                  <span className="text-xs text-foreground/50 font-mono">UPTIME: 99.8%</span>
                </div>

                {/* Live stats */}
                <div className="space-y-3 mb-6 relative z-10">
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg border border-border/30">
                    <span className="text-xs font-mono text-foreground/60">Orders Executed</span>
                    <span className="text-lg font-black text-primary">{orderCount}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg border border-border/30">
                    <span className="text-xs font-mono text-foreground/60">Strategies Active</span>
                    <span className="text-lg font-black text-accent">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg border border-border/30">
                    <span className="text-xs font-mono text-foreground/60">Today's P&L</span>
                    <span className="text-lg font-black text-success">+₹84,720</span>
                  </div>
                </div>

                {/* Live order feed */}
                <div className="relative z-10 pt-4 border-t border-primary/20">
                  <p className="text-xs font-mono text-foreground/60 mb-2">RECENT EXECUTIONS</p>
                  <div className="space-y-1.5">
                    {activeOrders.map((order) => (
                      <div key={order.id} className={`text-xs font-mono p-2 rounded border transition-all ${order.type === 'BUY' ? 'border-success/30 bg-success/10 text-success' : 'border-destructive/30 bg-destructive/10 text-destructive'}`}>
                        <span>{order.type}</span> {order.symbol} @ <span className="font-bold">${'Market'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative lines */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Info Cards Below */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { 
              icon: Download, 
              title: "Deploy in Minutes", 
              desc: "Connect your broker and deploy strategies instantly"
            },
            { 
              icon: Send, 
              title: "100% Automated", 
              desc: "Orders execute automatically 24/7 with zero intervention"
            },
            { 
              icon: BarChart3, 
              title: "Real-time Tracking", 
              desc: "Monitor all trades and performance metrics live"
            },
          ].map((card, idx) => (
            <div 
              key={idx} 
              className={`bg-card/50 border border-primary/20 rounded-xl p-5 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${500 + idx * 100}ms` }}
            >
              <card.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm text-foreground mb-1">{card.title}</h3>
              <p className="text-xs text-foreground/60">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Broker Integration Section */}
        <div className={`mt-16 text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
          <p className="text-xs text-foreground/60 mb-4 font-semibold uppercase tracking-widest">Works with 20+ Leading Indian Brokers</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Angel One", "Zerodha", "Upstox", "Fyers", "5Paisa"].map((broker) => (
              <div key={broker} className="px-3 py-1.5 bg-card/50 border border-primary/20 rounded-full text-xs font-medium text-foreground/70 hover:border-primary/50 hover:bg-primary/10 transition-all">
                {broker}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
