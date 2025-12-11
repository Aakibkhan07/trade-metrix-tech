"use client"

import { Monitor, Server, Database, Cloud, Cpu, Shield, Zap, ArrowDown, Wifi, BarChart3, Bell } from "lucide-react"

export function FeaturesArchitecture() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Platform Architecture
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How Our <span className="text-gradient">Technology</span> Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end trading technology infrastructure designed for speed, reliability, and scalability
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="glass rounded-2xl border border-primary/20 p-8 md:p-12">
          {/* Top Layer - User Interface */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">User Interface Layer</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Web Dashboard</div>
                  <div className="text-xs text-muted-foreground">Real-time monitoring</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Alert System</div>
                  <div className="text-xs text-muted-foreground">Instant notifications</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Analytics Portal</div>
                  <div className="text-xs text-muted-foreground">Performance insights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <ArrowDown className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Middle Layer - Processing */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">Processing Layer</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass rounded-xl p-4 border border-primary/30 bg-primary/5">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center mb-3">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
                <div className="font-semibold text-foreground text-sm">Signal Engine</div>
                <div className="text-xs text-muted-foreground mt-1">Generate buy/sell signals</div>
              </div>
              <div className="glass rounded-xl p-4 border border-primary/30 bg-primary/5">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="font-semibold text-foreground text-sm">Execution Engine</div>
                <div className="text-xs text-muted-foreground mt-1">Ultra-fast order placement</div>
              </div>
              <div className="glass rounded-xl p-4 border border-primary/30 bg-primary/5">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="font-semibold text-foreground text-sm">Risk Manager</div>
                <div className="text-xs text-muted-foreground mt-1">Position & loss limits</div>
              </div>
              <div className="glass rounded-xl p-4 border border-primary/30 bg-primary/5">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center mb-3">
                  <Server className="h-5 w-5 text-white" />
                </div>
                <div className="font-semibold text-foreground text-sm">Strategy Server</div>
                <div className="text-xs text-muted-foreground mt-1">Algorithm processing</div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <ArrowDown className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Bottom Layer - Infrastructure */}
          <div>
            <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">Infrastructure Layer</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Data Storage</div>
                  <div className="text-xs text-muted-foreground">Secure & encrypted</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Cloud Infrastructure</div>
                  <div className="text-xs text-muted-foreground">99.9% uptime SLA</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Broker APIs</div>
                  <div className="text-xs text-muted-foreground">20+ integrations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow Indicator */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span>Real-time Data Flow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span>Encrypted Connection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span>Low Latency Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
