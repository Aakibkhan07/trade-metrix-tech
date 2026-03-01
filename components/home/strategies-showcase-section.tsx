"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Zap, Target, BarChart3, ArrowRight, ChevronDown } from "lucide-react"

const strategies = [
  {
    name: "AI-Nifty Smart",
    complexity: "Advanced",
    expectedROI: "15-25%",
    risk: "Medium",
    icon: "🤖",
    badge: "TRENDING",
    features: ["ML-based entry/exit", "Auto risk management", "Market adaptation"]
  },
  {
    name: "Greeks Master",
    complexity: "Expert",
    expectedROI: "20-35%",
    risk: "High",
    icon: "📊",
    badge: "PREMIUM",
    features: ["Greeks analysis", "Theta optimization", "IV crush detector"]
  },
  {
    name: "Scalper Pro",
    complexity: "Intermediate",
    expectedROI: "5-15%",
    risk: "Low",
    icon: "⚡",
    badge: "POPULAR",
    features: ["Ultra-fast execution", "Tight stops", "Volume analysis"]
  },
  {
    name: "Swing Trader",
    complexity: "Beginner",
    expectedROI: "8-18%",
    risk: "Low",
    icon: "📈",
    features: ["Support/resistance", "Trend following", "Daily signals"]
  },
  {
    name: "Options Chain",
    complexity: "Advanced",
    expectedROI: "18-28%",
    risk: "Medium",
    icon: "⛓️",
    badge: "NEW",
    features: ["Chain analysis", "Premium harvesting", "Hedge builder"]
  },
  {
    name: "Multi-Leg",
    complexity: "Expert",
    expectedROI: "12-22%",
    risk: "Medium",
    icon: "🎯",
    features: ["Spread management", "Auto hedging", "P&L optimizer"]
  }
]

export function StrategiesShowcaseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case "Low": return "text-success"
      case "Medium": return "text-warning"
      case "High": return "text-destructive"
      default: return "text-foreground"
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case "Beginner": return "from-success to-teal-500"
      case "Intermediate": return "from-warning to-orange-500"
      case "Advanced": return "from-primary to-accent"
      case "Expert": return "from-destructive to-rose-500"
      default: return "from-primary to-accent"
    }
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background/50 via-background to-background/50">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Trading Strategies</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            50+ AI-Powered <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">Strategies</span>
          </h2>
          <p className="text-foreground/70">From beginner-friendly to expert-level algorithmic trading strategies</p>
        </div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, idx) => (
            <div
              key={strategy.name}
              className={`relative group transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getComplexityColor(strategy.complexity)} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-xl`} />

              <div className="relative bg-card/60 border border-primary/30 rounded-2xl p-6 backdrop-blur-sm group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-300 overflow-hidden">
                {/* Badge */}
                {strategy.badge && (
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                      strategy.badge === "TRENDING" ? "bg-accent/20 text-accent" :
                      strategy.badge === "PREMIUM" ? "bg-primary/20 text-primary" :
                      strategy.badge === "POPULAR" ? "bg-success/20 text-success" :
                      "bg-warning/20 text-warning"
                    }`}>
                      {strategy.badge === "TRENDING" && <Zap className="w-3 h-3" />}
                      {strategy.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-4">
                  <div className="text-4xl mb-3">{strategy.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{strategy.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className={`px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${getComplexityColor(strategy.complexity)} bg-clip-text text-transparent`}>
                      {strategy.complexity}
                    </div>
                  </div>
                </div>

                {/* Main metrics */}
                <div className="space-y-3 mb-4 pb-4 border-b border-primary/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/60">Expected ROI</span>
                    <span className="font-bold text-primary">{strategy.expectedROI}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/60">Risk Level</span>
                    <span className={`font-bold text-sm ${getRiskColor(strategy.risk)}`}>{strategy.risk}</span>
                  </div>
                </div>

                {/* Features */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-2 pt-3 border-t border-primary/20">
                    {strategy.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-primary/20">
                  <button className="text-primary hover:text-primary/80 font-medium text-xs transition-colors">
                    Try Now
                  </button>
                  <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-300 ${expandedIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-foreground/70 mb-6">Want to create your own custom strategy?</p>
          <a href="/algo-software" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/30 group">
            Explore Full Library
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
