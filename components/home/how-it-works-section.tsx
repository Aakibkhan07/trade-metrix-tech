"use client"

import { useEffect, useRef, useState } from "react"
import { Plug, Cpu, Zap, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Plug,
    title: "Connect Your Broker",
    description: "Link any of 20+ supported brokers securely using API keys",
    details: ["Zerodha", "Upstox", "Angel One", "Fyers"]
  },
  {
    number: 2,
    icon: Cpu,
    title: "Select or Build Strategy",
    description: "Choose from 50+ pre-built AI strategies or create your own",
    details: ["No code required", "Drag & drop interface", "AI-assisted optimization"]
  },
  {
    number: 3,
    icon: Zap,
    title: "Deploy & Optimize",
    description: "Deploy your strategy with automatic parameter optimization",
    details: ["Real-time tuning", "Risk adjustments", "Market adaptation"]
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Watch It Execute",
    description: "Strategy executes automatically with <1ms latency",
    details: ["100% automated", "24/7 trading", "Zero manual intervention"]
  },
  {
    number: 5,
    icon: Shield,
    title: "Monitor & Earn",
    description: "Track performance, earnings, and risk metrics in real-time",
    details: ["Live P&L", "Trade analytics", "Risk dashboard"]
  }
]

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background/50 via-background to-background/50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            From Broker Connection to <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">Automated Profits</span>
          </h2>
          <p className="text-foreground/70">Five simple steps to start your automated trading journey</p>
        </div>

        {/* Desktop Steps View - Horizontal Flow */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div
                  key={step.number}
                  className={`relative transition-all duration-500 cursor-pointer group`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(0)}
                >
                  {/* Step card */}
                  <div className={`text-center transition-all duration-500 ${activeStep === idx ? 'scale-110' : 'scale-100'}`}>
                    {/* Icon circle */}
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${activeStep === idx ? 'bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/50' : 'bg-card border-2 border-primary/30 group-hover:border-primary/60'}`}>
                      <step.icon className={`w-10 h-10 transition-all duration-300 ${activeStep === idx ? 'text-primary-foreground scale-125' : 'text-primary'}`} />
                    </div>

                    {/* Number badge */}
                    <div className={`absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 ${activeStep === idx ? 'bg-accent text-accent-foreground' : 'bg-card border border-primary/30 text-primary'}`}>
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-foreground/60">{step.description}</p>

                    {/* Details - Expand on hover */}
                    <div className={`mt-3 overflow-hidden transition-all duration-300 ${activeStep === idx ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-3 border-t border-primary/20 space-y-1">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center justify-center gap-2 text-xs text-success">
                            <CheckCircle className="w-3 h-3" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow to next */}
                  {idx < steps.length - 1 && (
                    <ArrowRight className="absolute -right-8 top-6 w-6 h-6 text-primary/50 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Steps View - Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex gap-4">
                {/* Line and icon */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent/50" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-6">
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{step.description}</p>
                  <div className="space-y-2">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-xs text-success">
                        <CheckCircle className="w-3 h-3" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-foreground/70 mb-6">Ready to start your automated trading journey?</p>
          <a href="/register" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/30 group">
            Start Free Demo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
