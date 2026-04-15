"use client"

export function FeaturesSvgArchitecture() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            System Design
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Platform <span className="text-gradient">Architecture</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SVG Architecture Diagram */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Data Flow Architecture</h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-border">
              <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Market Data Input */}
                <rect x="20" y="20" width="360" height="50" rx="8" className="fill-primary/10">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="40" textAnchor="middle" className="fill-primary text-sm font-semibold">
                  Market Data Input
                </text>
                <text x="200" y="58" textAnchor="middle" className="fill-muted-foreground text-xs">
                  NSE | BSE | MCX Real-Time Feeds
                </text>

                {/* Animated data stream */}
                <g>
                  <circle r="3" className="fill-primary">
                    <animateMotion dur="0.8s" repeatCount="indefinite" path="M200,70 L200,95" />
                  </circle>
                  <circle r="3" className="fill-primary">
                    <animateMotion dur="0.8s" repeatCount="indefinite" begin="0.4s" path="M200,70 L200,95" />
                  </circle>
                </g>

                {/* Processing Core */}
                <rect x="60" y="95" width="280" height="80" rx="8" className="fill-primary/20">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="120" textAnchor="middle" className="fill-primary text-sm font-semibold">
                  Processing Core
                </text>
                <text x="120" y="145" textAnchor="middle" className="fill-muted-foreground text-xs">
                  Signal Engine
                </text>
                <text x="200" y="145" textAnchor="middle" className="fill-muted-foreground text-xs">
                  AI/ML Models
                </text>
                <text x="280" y="145" textAnchor="middle" className="fill-muted-foreground text-xs">
                  Risk Manager
                </text>
                <text x="200" y="165" textAnchor="middle" className="fill-foreground text-xs font-medium">
                  Latency: &lt;10ms
                </text>

                {/* Internal processing animation */}
                <circle
                  cx="200"
                  cy="130"
                  r="25"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary/30"
                  strokeWidth="1"
                >
                  <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Arrows with animation */}
                <path d="M130 175 L130 195" stroke="currentColor" className="text-primary" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="0.5s" repeatCount="indefinite" />
                </path>
                <path d="M270 175 L270 195" stroke="currentColor" className="text-primary" strokeWidth="2">
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,20;20,0"
                    dur="0.5s"
                    repeatCount="indefinite"
                    begin="0.25s"
                  />
                </path>

                {/* Strategy & Execution */}
                <rect x="20" y="200" width="160" height="50" rx="8" className="fill-purple-500/15">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.3s" />
                </rect>
                <text x="100" y="220" textAnchor="middle" className="fill-purple-400 text-xs font-semibold">
                  Strategy Engine
                </text>
                <text x="100" y="238" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  50+ Pre-built Algorithms
                </text>

                <rect x="220" y="200" width="160" height="50" rx="8" className="fill-blue-500/15">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.6s" />
                </rect>
                <text x="300" y="220" textAnchor="middle" className="fill-blue-400 text-xs font-semibold">
                  Order Execution
                </text>
                <text x="300" y="238" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  0.02s Avg Time
                </text>

                {/* Output arrows */}
                <circle r="3" className="fill-purple-500">
                  <animateMotion dur="0.6s" repeatCount="indefinite" path="M100,250 L100,270" />
                </circle>
                <circle r="3" className="fill-blue-500">
                  <animateMotion dur="0.6s" repeatCount="indefinite" begin="0.3s" path="M300,250 L300,270" />
                </circle>

                {/* Output Layer */}
                <rect x="20" y="270" width="360" height="40" rx="8" className="fill-foreground/10" />
                <text x="200" y="295" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                  Broker APIs (20+ Integrations)
                </text>

                {/* Pulsing connection dots */}
                <circle cx="200" cy="80" r="4" className="fill-primary">
                  <animate attributeName="r" values="3;6;3" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="130" cy="185" r="4" className="fill-purple-500">
                  <animate attributeName="r" values="3;6;3" dur="1s" repeatCount="indefinite" begin="0.33s" />
                </circle>
                <circle cx="270" cy="185" r="4" className="fill-blue-500">
                  <animate attributeName="r" values="3;6;3" dur="1s" repeatCount="indefinite" begin="0.66s" />
                </circle>
              </svg>
            </div>
          </div>

          {/* Technical Specs - keep existing */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Specifications</h3>
            <div className="space-y-6">
              <div className="glass rounded-xl p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center icon-glow">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Execution Speed</span>
                      <span className="text-sm text-primary">0.02s</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-primary to-emerald-500 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">System Uptime</span>
                      <span className="text-sm text-primary">99.9%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[99%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Security Score</span>
                      <span className="text-sm text-primary">A+</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Data Processing</span>
                      <span className="text-sm text-primary">1M+/sec</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                    </div>
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
