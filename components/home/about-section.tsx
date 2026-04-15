"use client"

import { useEffect, useRef, useState } from "react"
import { Rocket, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const strategies = [
  "AIMetrix",
  "DeltaMax",
  "ThetaPro",
  "GammaPro",
  "NeuroMax",
  "ScalperX",
  "StrikeX",
  "VoltaX",
  "QuantumEdge",
  "IronDelta",
]

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    const numValue = Number.parseInt(value.replace(/\D/g, ""))
    const duration = 2000
    const steps = 60
    const increment = numValue / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numValue) {
        current = numValue
        clearInterval(timer)
      }
      setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold">
      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
        {count}
        {suffix}
      </span>
    </div>
  )
}

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float-reverse" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-medium text-primary mb-4 md:mb-6 border border-primary/20 animate-bounce-subtle">
              <Rocket className="h-4 w-4" />
              About TradeMetrix
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6 leading-tight">
              Specialized in{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Options Trading
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
              </span>
            </h2>

            <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              TradeMetrix builds powerful algorithmic trading software for{" "}
              <strong className="text-foreground">Nifty and Bank Nifty</strong> options.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {strategies.map((strategy, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 text-xs md:text-sm rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default hover:-translate-y-0.5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {strategy}
                </span>
              ))}
              <span className="px-3 py-1.5 text-xs md:text-sm rounded-full bg-primary/10 text-primary border border-primary/20 animate-pulse">
                +10 more
              </span>
            </div>

            <div className="space-y-3 mb-8">
              {["No tips or advisory", "Automated strategy execution", "Complete transparency"].map((feature, idx) => (
                <div
                  key={feature}
                  className={`flex items-center gap-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/features">
              <Button className="gap-2 rounded-full group hover:scale-105 transition-transform duration-300" size="lg">
                Explore Features
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div
            className={`grid grid-cols-2 gap-3 md:gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {[
              { value: "15", suffix: "+", label: "Years in Tech", icon: "🏆", delay: 0 },
              { value: "50", suffix: "+", label: "Strategies", icon: "🎯", delay: 100 },
              { value: "20", suffix: "+", label: "Brokers", icon: "🔗", delay: 200 },
              { value: "5", suffix: "K+", label: "Traders", icon: "👥", delay: 300 },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`group bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${idx % 2 === 1 ? "md:mt-8" : ""}`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <span className="text-2xl md:text-3xl mb-2 block group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </span>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>

                <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? "100%" : "0%", transitionDelay: `${stat.delay + 500}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
