"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, ChevronRight, Play, Bot, Target, TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

const stats = [
  { label: "Active Traders", value: 5000, suffix: "+", icon: "👥" },
  { label: "Strategies", value: 50, suffix: "+", icon: "🎯" },
  { label: "Success Rate", value: 87, suffix: "%", icon: "📈" },
  { label: "Years Experience", value: 15, suffix: "+", icon: "🏆" },
]

const trustedBy = ["Angel One", "Zerodha", "Upstox", "Fyers", "5Paisa", "IIFL", "Kotak"]

const strategyShowcase = [
  { name: "AIMetrix", accuracy: 88, trend: "up", profit: "+12.4%" },
  { name: "DeltaMax", accuracy: 85, trend: "up", profit: "+9.8%" },
  { name: "ThetaPro", accuracy: 82, trend: "up", profit: "+7.2%" },
  { name: "GammaPro", accuracy: 79, trend: "down", profit: "-2.1%" },
  { name: "NeuroMax", accuracy: 86, trend: "up", profit: "+11.3%" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [activeWord, setActiveWord] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activeStrategy, setActiveStrategy] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const rotatingWords = [
    { text: "Precision", color: "from-emerald-400 to-cyan-400" },
    { text: "Discipline", color: "from-violet-400 to-purple-400" },
    { text: "Profits", color: "from-amber-400 to-orange-400" },
    { text: "Consistency", color: "from-rose-400 to-pink-400" },
    { text: "Success", color: "from-blue-400 to-indigo-400" },
  ]

  useEffect(() => {
    setMounted(true)
    const wordInterval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveWord((prev) => (prev + 1) % rotatingWords.length)
        setIsTransitioning(false)
      }, 300)
    }, 2500)
    return () => clearInterval(wordInterval)
  }, [])

  useEffect(() => {
    if (!mounted || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            const duration = 1500
            const steps = 30
            const increment = stat.value / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(current)
                return newCounters
              })
            }, duration / steps)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (counterRef.current) observer.observe(counterRef.current)
    return () => observer.disconnect()
  }, [mounted, hasAnimated])

  useEffect(() => {
    if (!mounted) return
    const strategyInterval = setInterval(() => {
      setActiveStrategy((prev) => (prev + 1) % strategyShowcase.length)
    }, 3000)
    return () => clearInterval(strategyInterval)
  }, [mounted])

  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-background pt-16 md:pt-20 pb-16 md:pb-32 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0.1_260/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.1_260/0.05)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-16 pb-16 md:pb-32 lg:px-8">
        <div className={`flex justify-center mb-8 md:mb-12 ${mounted ? "animate-slide-down" : "opacity-0"}`}>
          <Link
            href="/algo-software"
            className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-primary/10 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-foreground hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:scale-105"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span>2-Day Free Trial - Start Today</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight ${mounted ? "animate-blur-in" : "opacity-0"}`}
            >
              <span className="block">Trade With Code,</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
                Not Emotions.
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl mt-4 font-medium text-muted-foreground">
                Built for{" "}
                <span className="relative inline-block min-w-[140px] md:min-w-[180px]">
                  <span
                    className={`bg-gradient-to-r ${rotatingWords[activeWord].color} bg-clip-text text-transparent transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
                  >
                    {rotatingWords[activeWord].text}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-6 md:mt-8 text-base md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed ${mounted ? "animate-fade-in animation-delay-200" : "opacity-0"}`}
            >
              <span className="text-foreground font-semibold">Let algorithms execute.</span> You just watch the profits.
              Purchase battle-tested strategies. No tips, no signals — just automated systems.
            </p>

            <div
              className={`mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start ${mounted ? "animate-fade-in animation-delay-300" : "opacity-0"}`}
            >
              <Link href="/register">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-medium rounded-full gap-2 group hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/algo-software">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-medium rounded-full bg-transparent group hover:bg-primary/10 transition-all duration-300"
                >
                  <Play className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div
              className={`mt-8 md:mt-12 flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start ${mounted ? "animate-fade-in animation-delay-400" : "opacity-0"}`}
            >
              {[
                { icon: Shield, label: "Secure", color: "text-success", delay: "0ms" },
                { icon: Zap, label: "0.02s Speed", color: "text-warning", delay: "50ms" },
                { icon: Target, label: "50+ Strategies", color: "text-primary", delay: "100ms" },
                { icon: Bot, label: "AI-Powered", color: "text-accent", delay: "150ms" },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-card border border-border px-3 md:px-4 py-2 text-xs md:text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                  style={{ animationDelay: feature.delay }}
                >
                  <feature.icon className={`h-3 w-3 md:h-4 md:w-4 ${feature.color}`} />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="hidden lg:block">
            <div className={`relative ${mounted ? "animate-fade-in animation-delay-400" : "opacity-0"}`}>
              {/* Floating glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl animate-pulse" />

              {/* Main card */}
              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-6 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Live Strategy Performance</h3>
                      <p className="text-xs text-muted-foreground">Auto-updating results</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                    </span>
                    <span className="text-xs text-success font-medium">LIVE</span>
                  </div>
                </div>

                {/* Strategy list */}
                <div className="space-y-3">
                  {strategyShowcase.map((strategy, idx) => (
                    <div
                      key={strategy.name}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-500 ${
                        activeStrategy === idx
                          ? "bg-primary/10 border border-primary/30 scale-[1.02]"
                          : "bg-background/50 border border-transparent hover:bg-background/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            activeStrategy === idx ? "bg-primary/20" : "bg-muted"
                          }`}
                        >
                          {strategy.trend === "up" ? (
                            <TrendingUp
                              className={`h-4 w-4 ${activeStrategy === idx ? "text-success" : "text-muted-foreground"}`}
                            />
                          ) : (
                            <TrendingDown
                              className={`h-4 w-4 ${activeStrategy === idx ? "text-destructive" : "text-muted-foreground"}`}
                            />
                          )}
                        </div>
                        <div>
                          <p
                            className={`font-medium text-sm ${activeStrategy === idx ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {strategy.name}
                          </p>
                          <p className="text-xs text-muted-foreground">Accuracy: {strategy.accuracy}%</p>
                        </div>
                      </div>
                      <div
                        className={`text-right ${activeStrategy === idx ? "scale-110" : ""} transition-transform duration-300`}
                      >
                        <p
                          className={`font-bold text-sm ${strategy.trend === "up" ? "text-success" : "text-destructive"}`}
                        >
                          {strategy.profit}
                        </p>
                        <p className="text-xs text-muted-foreground">Today</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer stats */}
                <div className="mt-6 pt-4 border-t border-border/50 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-success">+38.6%</p>
                    <p className="text-xs text-muted-foreground">Monthly Return</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">5</p>
                    <p className="text-xs text-muted-foreground">Trades Today</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">84%</p>
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                  </div>
                </div>

                {/* Animated progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Daily Target Progress</span>
                    <span>76%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"
                      style={{ width: "76%" }}
                    />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={counterRef}
          className={`mt-12 md:mt-24 ${mounted ? "animate-fade-in animation-delay-500" : "opacity-0"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group bg-card/50 rounded-xl md:rounded-2xl border border-border/50 p-4 md:p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="text-2xl md:text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </span>
                <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">
                  {counters[idx]}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-12 md:mt-20 ${mounted ? "animate-fade-in animation-delay-700" : "opacity-0"}`}>
          <p className="text-center text-xs md:text-sm text-muted-foreground mb-4 md:mb-8">
            Integrated with India's top brokers
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-ticker">
              {[...trustedBy, ...trustedBy].map((broker, idx) => (
                <div
                  key={`${broker}-${idx}`}
                  className="flex-shrink-0 px-6 py-3 rounded-full bg-card border border-border text-lg font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {broker}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
