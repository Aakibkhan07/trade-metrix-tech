"use client"

import { useEffect, useRef, useState } from "react"
import { Server, Zap, Shield, BarChart3, Network, Clock } from "lucide-react"

const techSpecs = [
  {
    icon: Clock,
    metric: "<1ms",
    label: "Execution Latency",
    description: "Sub-millisecond order placement"
  },
  {
    icon: Server,
    metric: "99.8%",
    label: "Uptime SLA",
    description: "24/7 reliability guarantee"
  },
  {
    icon: Network,
    metric: "20+",
    label: "Broker Integrations",
    description: "All major Indian brokers"
  },
  {
    icon: Zap,
    metric: "50+",
    label: "AI Strategies",
    description: "Pre-built and custom"
  },
  {
    icon: Shield,
    metric: "256-bit",
    label: "SSL Encryption",
    description: "Bank-level security"
  },
  {
    icon: BarChart3,
    metric: "Real-time",
    label: "Market Data",
    description: "Live feed integration"
  }
]

export function TechnicalExcellenceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedMetrics, setAnimatedMetrics] = useState<Record<number, number>>({})
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

  useEffect(() => {
    if (!isVisible) return

    const metrics = [1, 2, 3, 4, 5]
    metrics.forEach((idx) => {
      const timer = setInterval(() => {
        setAnimatedMetrics(prev => ({
          ...prev,
          [idx]: Math.min((prev[idx] || 0) + Math.random() * 30, 100)
        }))
      }, 200)
      return () => clearInterval(timer)
    })
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background/50 to-card/30">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Technical Excellence</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Enterprise-Grade <span className="text-primary">Performance</span> at Scale
          </h2>
          <p className="text-foreground/70">Built on cutting-edge infrastructure for maximum speed and reliability</p>
        </div>

        {/* Tech Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techSpecs.map((spec, idx) => (
            <div
              key={spec.label}
              className={`relative group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative bg-card/60 border border-primary/30 rounded-2xl p-6 backdrop-blur-sm group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <spec.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                <div className="text-3xl font-black text-primary mb-2 group-hover:text-accent transition-colors">
                  {spec.metric}
                </div>
                <h3 className="font-bold text-foreground mb-1">{spec.label}</h3>
                <p className="text-xs text-foreground/60">{spec.description}</p>

                <div className="mt-4 h-1 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{
                    width: '85%',
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Section */}
        <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/50 border border-primary/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-black mb-8">System Architecture</h3>

              {/* Architecture flow */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Market Data", icon: "📊" },
                  { label: "AI Engine", icon: "🤖" },
                  { label: "Order Router", icon: "⚡" },
                  { label: "Broker APIs", icon: "🔗" }
                ].map((layer, idx) => (
                  <div key={layer.label} className="relative group">
                    <div className="bg-background/80 border-2 border-primary/30 group-hover:border-primary/60 rounded-xl p-4 text-center transition-all duration-300">
                      <div className="text-3xl mb-2">{layer.icon}</div>
                      <p className="font-bold text-sm text-foreground">{layer.label}</p>
                    </div>
                    {idx < 3 && (
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground font-bold hidden md:flex">→</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Features list */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Distributed cloud infrastructure across 3 regions",
                  "Real-time market data from multiple sources",
                  "Machine learning model optimization 24/7",
                  "Automated failover and disaster recovery",
                  "Advanced risk management algorithms",
                  "API rate limiting and load balancing"
                ].map((feature, idx) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success mt-0.5 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                    <p className="text-sm text-foreground/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className={`mt-12 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { title: "Processing Speed", value: "1000+ TPS", desc: "Transactions per second" },
            { title: "Availability", value: "99.8%", desc: "Monthly uptime" },
            { title: "Data Security", value: "256-bit SSL", desc: "End-to-end encryption" }
          ].map((metric) => (
            <div key={metric.title} className="bg-card/60 border border-primary/30 rounded-xl p-6 text-center group hover:border-primary/60 hover:bg-primary/10 transition-all duration-300">
              <div className="text-2xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">{metric.value}</div>
              <h4 className="font-bold text-foreground mb-1">{metric.title}</h4>
              <p className="text-xs text-foreground/60">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
