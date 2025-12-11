"use client"

export function AlgoSvgArchitecture() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            System Design
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Algo Trading <span className="text-gradient">Architecture</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding how algorithmic trading systems process market data and execute trades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SVG Architecture Diagram */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Trading System Flow</h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-border">
              <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Data Sources */}
                <rect x="20" y="15" width="110" height="45" rx="8" className="fill-blue-500/15">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                </rect>
                <text x="75" y="35" textAnchor="middle" className="fill-blue-400 text-[10px] font-semibold">
                  Market Data
                </text>
                <text x="75" y="50" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  Real-time Ticks
                </text>

                <rect x="145" y="15" width="110" height="45" rx="8" className="fill-purple-500/15">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.3s" />
                </rect>
                <text x="200" y="35" textAnchor="middle" className="fill-purple-400 text-[10px] font-semibold">
                  Historical Data
                </text>
                <text x="200" y="50" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  5+ Years
                </text>

                <rect x="270" y="15" width="110" height="45" rx="8" className="fill-emerald-500/15">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.6s" />
                </rect>
                <text x="325" y="35" textAnchor="middle" className="fill-emerald-400 text-[10px] font-semibold">
                  News & Sentiment
                </text>
                <text x="325" y="50" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  AI Analysis
                </text>

                {/* Animated data streams from sources */}
                <circle r="2" className="fill-blue-400">
                  <animateMotion dur="0.6s" repeatCount="indefinite" path="M75,60 L75,80 L200,80 L200,95" />
                </circle>
                <circle r="2" className="fill-purple-400">
                  <animateMotion dur="0.6s" repeatCount="indefinite" begin="0.2s" path="M200,60 L200,95" />
                </circle>
                <circle r="2" className="fill-emerald-400">
                  <animateMotion
                    dur="0.6s"
                    repeatCount="indefinite"
                    begin="0.4s"
                    path="M325,60 L325,80 L200,80 L200,95"
                  />
                </circle>

                {/* Arrows from data sources */}
                <path
                  d="M75 60 L75 80 L200 80 L200 95"
                  stroke="currentColor"
                  className="text-blue-400/50"
                  strokeWidth="1.5"
                />
                <path d="M200 60 L200 95" stroke="currentColor" className="text-purple-400/50" strokeWidth="1.5" />
                <path
                  d="M325 60 L325 80 L200 80 L200 95"
                  stroke="currentColor"
                  className="text-emerald-400/50"
                  strokeWidth="1.5"
                />

                {/* Processing Core */}
                <rect x="40" y="95" width="320" height="70" rx="10" className="fill-primary/20">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="118" textAnchor="middle" className="fill-primary text-sm font-semibold">
                  AI Processing Engine
                </text>

                {/* Processing pulse */}
                <circle
                  cx="200"
                  cy="130"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary/30"
                  strokeWidth="1"
                >
                  <animate attributeName="r" values="10;25;10" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite" />
                </circle>

                {/* Sub-components */}
                <rect x="55" y="130" width="85" height="25" rx="4" className="fill-background/50" />
                <text x="97" y="146" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  Signal Generator
                </text>

                <rect x="155" y="130" width="85" height="25" rx="4" className="fill-background/50" />
                <text x="197" y="146" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  Pattern Detection
                </text>

                <rect x="255" y="130" width="90" height="25" rx="4" className="fill-background/50" />
                <text x="300" y="146" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  Risk Assessment
                </text>

                {/* Animated arrows to strategy/risk */}
                <path d="M130 165 L100 190" stroke="currentColor" className="text-primary" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="0.6s" repeatCount="indefinite" />
                </path>
                <path d="M270 165 L300 190" stroke="currentColor" className="text-yellow-500" strokeWidth="2">
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,40;40,0"
                    dur="0.6s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                </path>

                <circle r="3" className="fill-primary">
                  <animateMotion dur="0.6s" repeatCount="indefinite" path="M130,165 L100,190" />
                </circle>
                <circle r="3" className="fill-yellow-500">
                  <animateMotion dur="0.6s" repeatCount="indefinite" begin="0.3s" path="M270,165 L300,190" />
                </circle>

                {/* Strategy Engine */}
                <rect x="20" y="190" width="160" height="55" rx="8" className="fill-primary/15">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.2s" />
                </rect>
                <text x="100" y="213" textAnchor="middle" className="fill-primary text-xs font-semibold">
                  Strategy Engine
                </text>
                <text x="100" y="230" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  50+ Pre-built Algorithms
                </text>

                {/* Risk Manager */}
                <rect x="220" y="190" width="160" height="55" rx="8" className="fill-yellow-500/15">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </rect>
                <text x="300" y="213" textAnchor="middle" className="fill-yellow-500 text-xs font-semibold">
                  Risk Manager
                </text>
                <text x="300" y="230" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  Real-time Monitoring
                </text>

                {/* Arrows to execution */}
                <circle r="3" className="fill-primary">
                  <animateMotion dur="0.5s" repeatCount="indefinite" path="M100,245 L150,268" />
                </circle>
                <circle r="3" className="fill-yellow-500">
                  <animateMotion dur="0.5s" repeatCount="indefinite" begin="0.25s" path="M300,245 L250,268" />
                </circle>

                {/* Execution Layer */}
                <rect x="60" y="265" width="280" height="40" rx="8" className="fill-foreground/10">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="1s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="285" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                  Order Execution (0.02s) → Broker APIs
                </text>
                <text x="200" y="298" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  20+ Indian Brokers Connected
                </text>

                {/* Animated Pulses */}
                <circle cx="200" cy="85" r="4" className="fill-primary">
                  <animate attributeName="r" values="3;7;3" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="180" r="4" className="fill-primary">
                  <animate attributeName="r" values="3;7;3" dur="1s" repeatCount="indefinite" begin="0.33s" />
                </circle>
                <circle cx="300" cy="180" r="4" className="fill-yellow-500">
                  <animate attributeName="r" values="3;7;3" dur="1s" repeatCount="indefinite" begin="0.66s" />
                </circle>
              </svg>
            </div>
          </div>

          {/* Learning Points */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Key Components Explained</h3>
            <div className="space-y-5">
              <div className="glass rounded-xl p-4 border border-border hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shrink-0">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Data Input Layer</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time market feeds, historical data, and sentiment analysis from multiple sources
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shrink-0">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">AI Processing Engine</h4>
                    <p className="text-sm text-muted-foreground">
                      Machine learning models for pattern recognition and signal generation
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shrink-0">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Strategy Engine</h4>
                    <p className="text-sm text-muted-foreground">
                      Executes trading logic with 50+ pre-built strategies and custom rule support
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border hover:border-yellow-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shrink-0">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Risk Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Position sizing, stop-loss controls, and real-time portfolio monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
