"use client"

import { useEffect, useRef, useState } from "react"
import { Bot, LineChart, Zap, Shield, Target, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Bot,
    title: "Strategy Automation",
    description: "50+ pre-built algo templates ready to deploy.",
    gradient: "from-violet-500 to-purple-600",
    stats: "50+ Templates",
    delay: 0,
  },
  {
    icon: Target,
    title: "Option Chain Scanner",
    description: "Real-time Greeks & OI data analysis.",
    gradient: "from-blue-500 to-cyan-600",
    stats: "Live Data",
    delay: 50,
  },
  {
    icon: LineChart,
    title: "Index Trading",
    description: "Nifty & Bank Nifty focused strategies.",
    gradient: "from-emerald-500 to-teal-600",
    stats: "NSE & BSE",
    delay: 100,
  },
  {
    icon: BarChart3,
    title: "Backtesting",
    description: "Test with 5+ years historical data.",
    gradient: "from-orange-500 to-amber-600",
    stats: "5+ Years",
    delay: 150,
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Auto stop-loss & capital protection.",
    gradient: "from-rose-500 to-pink-600",
    stats: "Auto SL/TP",
    delay: 200,
  },
  {
    icon: Zap,
    title: "Auto Execution",
    description: "0.02s latency with 20+ brokers.",
    gradient: "from-indigo-500 to-violet-600",
    stats: "0.02s",
    delay: 250,
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div
          className={`text-center max-w-2xl mx-auto mb-10 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-bounce-subtle">
            Our Services
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Everything to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
              automate trading
            </span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">Professional tools for options traders.</p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card/50 rounded-xl md:rounded-2xl border border-border p-4 md:p-6 transition-all duration-500 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${service.delay}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
              />

              <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />

              <div
                className={`relative inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                <service.icon className="h-5 w-5 md:h-7 md:w-7 text-white" />
                {/* Pulse ring on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} animate-ping opacity-0 group-hover:opacity-30`}
                />
              </div>

              <h3 className="text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 line-clamp-2">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 text-xs font-medium`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-white animate-pulse`} />
                  {service.stats}
                </span>

                <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-10 md:mt-14 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group"
          >
            Explore all features
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
