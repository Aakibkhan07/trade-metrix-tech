"use client"

import {
  Bot,
  Cpu,
  Database,
  Server,
  ArrowRight,
  Workflow,
  Shield,
  Zap,
  BarChart3,
  GitBranch,
  Clock,
  CheckCircle2,
} from "lucide-react"

export function AlgoArchitecture() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/3 left-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 mb-4">
            <Workflow className="h-4 w-4 icon-glow-blue" />
            <span>System Design</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Algo Trading <span className="text-gradient">System Architecture</span>
          </h2>
          <p className="text-muted-foreground">How automated trading systems process and execute trades</p>
        </div>

        {/* Architecture Diagram */}
        <div className="glass rounded-2xl p-8 glow-lg">
          {/* Data Input Layer */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              DATA INPUT LAYER
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: BarChart3, name: "Market Data", desc: "Real-time quotes", latency: "< 1ms" },
                { icon: Database, name: "Historical Data", desc: "Tick-by-tick", storage: "10+ Years" },
                { icon: Zap, name: "News Feed", desc: "Event triggers", sources: "50+" },
                { icon: GitBranch, name: "Sentiment", desc: "Social signals", accuracy: "85%" },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className="glass rounded-xl p-4 hover-scale animate-float"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-3 animate-pulse-glow">
                    <item.icon className="h-6 w-6 text-purple-400 icon-glow" />
                  </div>
                  <h4 className="font-bold text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                  <div className="text-xs text-purple-400 font-mono">
                    {item.latency || item.storage || item.sources || item.accuracy}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Processing Flow */}
          <div className="flex justify-center items-center gap-4 my-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <ArrowRight className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Processing Pipeline</span>
              <ArrowRight className="h-4 w-4 text-blue-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>

          {/* Processing Core */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              PROCESSING CORE
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Bot,
                  name: "Strategy Engine",
                  desc: "Executes trading logic",
                  features: ["50+ Indicators", "Custom Rules", "Multi-timeframe"],
                  color: "purple",
                },
                {
                  icon: Cpu,
                  name: "Risk Manager",
                  desc: "Real-time risk monitoring",
                  features: ["Position Sizing", "Stop Loss", "Max Drawdown"],
                  color: "blue",
                },
                {
                  icon: Server,
                  name: "Order Router",
                  desc: "Smart order execution",
                  features: ["Best Price", "Slippage Control", "Multi-broker"],
                  color: "purple",
                },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className="glass rounded-xl p-6 hover-scale border-glow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${item.color === "purple" ? "from-purple-500/30 to-purple-600/30" : "from-blue-500/30 to-blue-600/30"} flex items-center justify-center mb-4 animate-float`}
                  >
                    <item.icon
                      className={`h-7 w-7 ${item.color === "purple" ? "text-purple-400 icon-glow" : "text-blue-400 icon-glow-blue"}`}
                    />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2
                          className={`h-3 w-3 ${item.color === "purple" ? "text-purple-400" : "text-blue-400"}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Output Flow */}
          <div className="flex justify-center items-center gap-4 my-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
              <ArrowRight className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Execution Output</span>
              <ArrowRight className="h-4 w-4 text-blue-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>

          {/* Output Layer */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              EXECUTION & OUTPUT
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Zap, name: "Trade Execution", stat: "< 50ms", desc: "Order to fill" },
                { icon: Shield, name: "Risk Reports", stat: "Real-time", desc: "P&L tracking" },
                { icon: Clock, name: "Audit Logs", stat: "100%", desc: "Compliance ready" },
                { icon: BarChart3, name: "Analytics", stat: "50+ Metrics", desc: "Performance" },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className="glass rounded-lg p-4 hover-scale"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center animate-pulse-glow">
                      <item.icon className="h-5 w-5 text-blue-400 icon-glow-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gradient">{item.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
