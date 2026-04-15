"use client"

import { Building2, BarChart3, TrendingUp, Globe, Database, Cpu, ArrowDown, Shield, Clock, Zap } from "lucide-react"

export function MarketArchitecture() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400 mb-4">
            <Globe className="h-4 w-4 icon-glow" />
            <span>Market Ecosystem</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Indian Market <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-muted-foreground">How data flows through Indian financial markets</p>
        </div>

        {/* Architecture Diagram */}
        <div className="glass rounded-2xl p-8 glow-lg">
          {/* Top Layer - Exchanges */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              EXCHANGES
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Building2, name: "NSE", desc: "National Stock Exchange", color: "purple" },
                { icon: Building2, name: "BSE", desc: "Bombay Stock Exchange", color: "blue" },
                { icon: TrendingUp, name: "MCX", desc: "Multi Commodity Exchange", color: "purple" },
                { icon: BarChart3, name: "NCDEX", desc: "Commodity Derivatives", color: "blue" },
              ].map((exchange, i) => (
                <div
                  key={exchange.name}
                  className={`glass rounded-xl p-4 hover-scale animate-float`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-br ${exchange.color === "purple" ? "from-purple-500/20 to-purple-600/20" : "from-blue-500/20 to-blue-600/20"} flex items-center justify-center mb-3 animate-pulse-glow`}
                  >
                    <exchange.icon
                      className={`h-6 w-6 ${exchange.color === "purple" ? "text-purple-400 icon-glow" : "text-blue-400 icon-glow-blue"}`}
                    />
                  </div>
                  <h4 className="font-bold text-foreground">{exchange.name}</h4>
                  <p className="text-xs text-muted-foreground">{exchange.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="flex justify-center my-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ArrowDown className="h-6 w-6 animate-bounce text-purple-400" />
              <span className="text-sm">Data Flow</span>
              <ArrowDown className="h-6 w-6 animate-bounce text-blue-400" style={{ animationDelay: "0.2s" }} />
            </div>
          </div>

          {/* Middle Layer - Indices */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              BENCHMARK INDICES
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "NIFTY 50", value: "24,850", change: "+0.51%" },
                { name: "BANK NIFTY", value: "53,425", change: "-0.17%" },
                { name: "SENSEX", value: "81,652", change: "+0.42%" },
                { name: "FIN NIFTY", value: "23,890", change: "+0.33%" },
                { name: "MIDCAP", value: "12,450", change: "+0.28%" },
              ].map((index, i) => (
                <div
                  key={index.name}
                  className="glass rounded-lg p-3 text-center hover-scale"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p className="text-xs text-muted-foreground mb-1">{index.name}</p>
                  <p className="font-bold text-foreground">{index.value}</p>
                  <p className={`text-xs ${index.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {index.change}
                  </p>
                  {/* Mini chart */}
                  <div className="flex items-end justify-center gap-0.5 h-6 mt-2">
                    {[30, 50, 40, 70, 60, 80, 55].map((h, j) => (
                      <div
                        key={j}
                        className={`w-1 rounded-t ${index.change.startsWith("+") ? "bg-green-500/50" : "bg-red-500/50"}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="flex justify-center my-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <ArrowDown className="h-6 w-6 animate-bounce text-purple-400" />
              <div className="flex gap-2">
                <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
                <span className="text-sm">Real-time Processing</span>
              </div>
              <ArrowDown className="h-6 w-6 animate-bounce text-blue-400" style={{ animationDelay: "0.2s" }} />
            </div>
          </div>

          {/* Bottom Layer - Infrastructure */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              MARKET INFRASTRUCTURE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Database, name: "SEBI", desc: "Regulatory Body", stat: "Market Regulator" },
                { icon: Shield, name: "CDSL/NSDL", desc: "Depositories", stat: "Settlement T+1" },
                { icon: Clock, name: "Clearing Corp", desc: "Trade Settlement", stat: "99.99% Uptime" },
                { icon: Cpu, name: "Data Centers", desc: "Co-location", stat: "<1ms Latency" },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className="glass rounded-xl p-4 hover-scale"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
                      <item.icon className="h-5 w-5 text-purple-400 icon-glow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="text-xs text-blue-400 font-medium">{item.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
