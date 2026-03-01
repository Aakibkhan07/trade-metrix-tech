"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Zap, Users } from "lucide-react"

export function RealtimeStatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({
    tradesExecuted: 0,
    strategiesActive: 0,
    totalRevenue: 0,
    activeUsers: 0
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Simulate live updates
    const tradesInterval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        tradesExecuted: prev.tradesExecuted + Math.floor(Math.random() * 50) + 10,
        strategiesActive: Math.floor(Math.random() * 5) + 12,
        totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 50000) + 10000,
        activeUsers: Math.floor(Math.random() * 20) + 150
      }))
    }, 3000)

    return () => clearInterval(tradesInterval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-card/50 via-background to-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_24%,oklch(0.15_0.008_0_/_0.08)_25%,oklch(0.15_0.008_0_/_0.08)_26%,transparent_27%,transparent_74%,oklch(0.15_0.008_0_/_0.08)_75%,oklch(0.15_0.008_0_/_0.08)_76%,transparent_77%,transparent)] bg-[size:80px_80px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-bounce-subtle">Real-time Dashboard</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Live Execution <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">Metrics</span>
          </h2>
          <p className="text-foreground/70">Watch automated trading in action across our platform</p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { 
              icon: Zap, 
              label: "Trades Executed Today", 
              value: stats.tradesExecuted.toLocaleString(),
              unit: "+",
              color: "from-primary to-accent",
              desc: "Live orders processed"
            },
            { 
              icon: TrendingUp, 
              label: "Active Strategies", 
              value: stats.strategiesActive,
              unit: "+",
              color: "from-success to-teal-500",
              desc: "Currently running"
            },
            { 
              icon: TrendingUp, 
              label: "Platform Revenue Share", 
              value: `₹${(stats.totalRevenue / 100000).toFixed(1)}L+`,
              unit: "",
              color: "from-violet-500 to-purple-500",
              desc: "Distributed this month"
            },
            { 
              icon: Users, 
              label: "Active Traders", 
              value: stats.activeUsers,
              unit: "+",
              color: "from-cyan-500 to-blue-500",
              desc: "Live on platform"
            }
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={`relative group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
              
              <div className="relative bg-card/60 border border-primary/30 rounded-2xl p-8 backdrop-blur-sm group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-300 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <p className="text-foreground/60 text-sm font-medium mb-2">{stat.label}</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <div className="text-4xl font-black text-foreground">{stat.value}</div>
                    <span className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.unit}</span>
                  </div>
                </div>

                <p className="text-xs text-foreground/60">{stat.desc}</p>

                {/* Live indicator */}
                <div className="mt-4 pt-4 border-t border-primary/20 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-success font-medium">LIVE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Chart Simulation */}
        <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/60 border border-primary/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Trading Activity (24h)</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs text-success font-medium">REAL-TIME</span>
              </div>
            </div>

            {/* Simulated bar chart */}
            <div className="space-y-3">
              {[
                { time: "00:00", activity: 45 },
                { time: "06:00", activity: 78 },
                { time: "09:30", activity: 95 },
                { time: "12:00", activity: 82 },
                { time: "15:00", activity: 88 },
                { time: "18:00", activity: 65 },
                { time: "Now", activity: 92, active: true }
              ].map((bar, idx) => (
                <div key={bar.time} className="flex items-center gap-3">
                  <span className="text-xs text-foreground/60 w-12">{bar.time}</span>
                  <div className="flex-1">
                    <div className="h-2 bg-background/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${bar.active ? 'bg-gradient-to-r from-primary via-accent to-primary animate-pulse' : 'bg-gradient-to-r from-primary to-accent'}`}
                        style={{
                          width: `${isVisible ? bar.activity : 0}%`
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary w-8 text-right">{bar.activity}%</span>
                </div>
              ))}
            </div>

            {/* Bottom info */}
            <div className="mt-8 pt-6 border-t border-primary/20 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Peak Hour", value: "09:30 AM" },
                { label: "Avg. Orders/min", value: "127" },
                { label: "Success Rate", value: "99.8%" }
              ].map((info) => (
                <div key={info.label}>
                  <p className="text-xs text-foreground/60 mb-1">{info.label}</p>
                  <p className="font-bold text-foreground">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Wins Ticker */}
        <div className={`mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/40 border border-success/30 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <p className="text-sm font-bold text-success">Recent Winning Trades</p>
            </div>
            <div className="space-y-2">
              {[
                { strategy: "AI-Nifty Smart", symbol: "NIFTY 50", profit: "+₹4,250", time: "2 mins ago" },
                { strategy: "Option Chain", symbol: "BANKNIFTY", profit: "+₹3,100", time: "5 mins ago" },
                { strategy: "Greeks Pro", symbol: "FINNIFTY", profit: "+₹2,880", time: "8 mins ago" }
              ].map((trade, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded bg-success/5 border border-success/20 text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-foreground">{trade.symbol}</span>
                    <span className="text-foreground/60">{trade.strategy}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-success">{trade.profit}</div>
                    <div className="text-foreground/60 text-[10px]">{trade.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
