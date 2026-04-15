"use client"

import { useState, useEffect } from "react"

export function HomeSvgArchitecture() {
  const [counters, setCounters] = useState({ speed: 0, uptime: 0, security: 0, processing: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        speed: Math.min(prev.speed + 2, 98),
        uptime: Math.min(prev.uptime + 2, 99.9),
        security: Math.min(prev.security + 2, 100),
        processing: Math.min(prev.processing + 200, 10000),
      }))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            How It Works
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Powerful <span className="text-gradient">System Architecture</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure built for speed, reliability, and security
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main SVG Diagram with enhanced animations */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Trading System Architecture</h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-border">
              <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Market Data Layer */}
                <rect x="20" y="20" width="360" height="50" rx="8" className="fill-primary/10">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="42" textAnchor="middle" className="fill-primary text-sm font-semibold">
                  Market Data Layer
                </text>
                <text x="200" y="58" textAnchor="middle" className="fill-muted-foreground text-xs">
                  NSE/BSE Real-Time Feeds
                </text>

                {/* Animated data particles flowing down */}
                {[0, 0.2, 0.4, 0.6, 0.8].map((delay, i) => (
                  <circle key={i} r="3" className="fill-primary">
                    <animateMotion dur="1s" repeatCount="indefinite" begin={`${delay}s`} path="M200,70 L200,95" />
                    <animate
                      attributeName="opacity"
                      values="1;0.3;1"
                      dur="1s"
                      repeatCount="indefinite"
                      begin={`${delay}s`}
                    />
                  </circle>
                ))}

                {/* AI Processing Layer */}
                <rect x="20" y="95" width="360" height="70" rx="8" className="fill-primary/20">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="118" textAnchor="middle" className="fill-primary text-sm font-semibold">
                  AI Processing Engine
                </text>
                <text x="200" y="138" textAnchor="middle" className="fill-muted-foreground text-xs">
                  Machine Learning Models
                </text>
                <text x="200" y="155" textAnchor="middle" className="fill-muted-foreground text-xs">
                  Pattern Recognition - Risk Analysis
                </text>

                {/* Processing pulse effect */}
                <circle
                  cx="200"
                  cy="130"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary/20"
                  strokeWidth="2"
                >
                  <animate attributeName="r" values="15;45;15" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Animated arrows */}
                <path d="M150 165 L100 185" stroke="currentColor" className="text-primary" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="0.8s" repeatCount="indefinite" />
                </path>
                <path d="M250 165 L300 185" stroke="currentColor" className="text-yellow-500" strokeWidth="2">
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,50;50,0"
                    dur="0.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                </path>

                {/* Data packets */}
                <circle r="4" className="fill-primary">
                  <animateMotion dur="0.8s" repeatCount="indefinite" path="M150,165 L100,185" />
                </circle>
                <circle r="4" className="fill-yellow-500">
                  <animateMotion dur="0.8s" repeatCount="indefinite" begin="0.4s" path="M250,165 L300,185" />
                </circle>

                {/* Strategy Engine */}
                <rect x="20" y="185" width="160" height="55" rx="8" className="fill-primary/15">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.2s" />
                </rect>
                <text x="100" y="208" textAnchor="middle" className="fill-primary text-xs font-semibold">
                  Strategy Engine
                </text>
                <text x="100" y="228" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  50+ Pre-built Algorithms
                </text>

                {/* Risk Manager */}
                <rect x="220" y="185" width="160" height="55" rx="8" className="fill-yellow-500/15">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </rect>
                <text x="300" y="208" textAnchor="middle" className="fill-yellow-500 text-xs font-semibold">
                  Risk Management
                </text>
                <text x="300" y="228" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  Real-Time Monitoring
                </text>

                {/* Arrows to execution */}
                <circle r="4" className="fill-primary">
                  <animateMotion dur="0.6s" repeatCount="indefinite" path="M100,240 L150,260" />
                </circle>
                <circle r="4" className="fill-yellow-500">
                  <animateMotion dur="0.6s" repeatCount="indefinite" begin="0.3s" path="M300,240 L250,260" />
                </circle>

                {/* Execution Layer */}
                <rect x="20" y="260" width="360" height="45" rx="8" className="fill-foreground/10">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="1s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="280" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                  Order Execution Layer (0.02s)
                </text>
                <text x="200" y="295" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  20+ Broker Integrations
                </text>

                {/* Animated Pulses */}
                <circle cx="200" cy="80" r="5" className="fill-primary">
                  <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="175" r="5" className="fill-primary">
                  <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite" begin="0.33s" />
                </circle>
                <circle cx="300" cy="175" r="5" className="fill-yellow-500">
                  <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite" begin="0.66s" />
                </circle>
              </svg>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Performance Metrics</h3>
            <div className="space-y-5">
              <div className="glass rounded-xl p-4 border border-border hover:border-primary/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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
                      <span className="text-sm text-primary font-semibold font-mono">0.02s</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${counters.speed}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">System Uptime</span>
                      <span className="text-sm text-blue-500 font-semibold font-mono">
                        {counters.uptime.toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${counters.uptime}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite_0.3s]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border hover:border-purple-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Security Rating</span>
                      <span className="text-sm text-purple-500 font-semibold">A+</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${counters.security}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite_0.6s]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border border-border hover:border-orange-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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
                      <span className="text-sm text-orange-500 font-semibold font-mono">
                        {counters.processing.toLocaleString()} ticks/sec
                      </span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${(counters.processing / 10000) * 100}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite_0.9s]" />
                      </div>
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
