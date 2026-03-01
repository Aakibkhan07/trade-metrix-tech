"use client"

import { useEffect, useRef, useState } from "react"
import { Network, Check, ArrowRight } from "lucide-react"

const integrations = [
  { name: "Zerodha", category: "Premium", icon: "Z", status: "Connected" },
  { name: "Angel One", category: "Premium", icon: "A", status: "Connected" },
  { name: "Upstox", category: "Premium", icon: "U", status: "Connected" },
  { name: "Fyers", category: "Standard", icon: "F", status: "Connected" },
  { name: "5Paisa", category: "Standard", icon: "5", status: "Connected" },
  { name: "IIFL", category: "Standard", icon: "I", status: "Connected" },
  { name: "Kotak", category: "Standard", icon: "K", status: "Coming Soon" },
  { name: "HDFC", category: "Coming Soon", icon: "H", status: "Coming Soon" }
]

const features = [
  { icon: "⚡", label: "Real-time Data", desc: "Live market feeds" },
  { icon: "🔗", label: "API Integration", desc: "Direct order routing" },
  { icon: "🔒", label: "Secure Auth", desc: "OAuth 2.0" },
  { icon: "📊", label: "Portfolio Sync", desc: "Real-time balances" }
]

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBroker, setHoveredBroker] = useState<string | null>(null)
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
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-card/50 to-background/50">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 flex items-center justify-center gap-2 mx-auto w-fit">
            <Network className="w-4 h-4" />
            Integrations & Compatibility
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Works with All <span className="text-primary">Major Brokers</span>
          </h2>
          <p className="text-foreground/70">Seamlessly integrated with India's leading trading platforms</p>
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {/* Features */}
          <div className={`space-y-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {features.map((feature, idx) => (
              <div key={feature.label} className={`bg-card/60 border border-primary/30 rounded-xl p-4 backdrop-blur-sm group hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground">{feature.label}</h4>
                    <p className="text-xs text-foreground/60">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Network Visualization */}
          <div className={`relative min-h-[300px] bg-gradient-to-br from-card/40 to-primary/5 border border-primary/30 rounded-2xl p-8 flex items-center justify-center backdrop-blur-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Center circle */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/50">
                <Network className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Orbiting elements */}
              {["API", "SDK", "WebSocket", "REST"].map((tech, idx) => {
                const angle = (idx / 4) * Math.PI * 2
                const x = Math.cos(angle) * 80
                const y = Math.sin(angle) * 80
                return (
                  <div
                    key={tech}
                    className="absolute w-12 h-12 rounded-lg bg-card border border-primary/40 flex items-center justify-center text-xs font-bold text-primary hover:scale-110 transition-transform"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {tech}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Brokers Section */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-xl font-bold mb-6">Supported Brokers</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {integrations.map((broker, idx) => (
              <div
                key={broker.name}
                className={`relative group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + idx * 50}ms` }}
                onMouseEnter={() => setHoveredBroker(broker.name)}
                onMouseLeave={() => setHoveredBroker(null)}
              >
                <div className={`bg-card/60 border-2 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${
                  broker.status === "Connected" 
                    ? "border-success/40 group-hover:border-success/80 group-hover:bg-success/10" 
                    : "border-primary/40 group-hover:border-primary/80 group-hover:bg-primary/10"
                }`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">
                      {broker.icon}
                    </div>
                    {broker.status === "Connected" && (
                      <Check className="w-5 h-5 text-success" />
                    )}
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-foreground mb-1">{broker.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/60">{broker.category}</span>
                    <span className={`text-xs font-bold ${broker.status === "Connected" ? 'text-success' : 'text-warning'}`}>
                      {broker.status}
                    </span>
                  </div>

                  {/* Hover Details */}
                  <div className={`mt-3 pt-3 border-t border-primary/20 overflow-hidden transition-all duration-300 ${hoveredBroker === broker.name ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-foreground/70 mb-2">Real-time integration with:</p>
                    <div className="space-y-1">
                      <div className="text-xs text-foreground/60">✓ Market data streaming</div>
                      <div className="text-xs text-foreground/60">✓ Order execution</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Network className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Add Your Broker</h4>
                <p className="text-sm text-foreground/70 mb-4">Don't see your broker? We're constantly adding new integrations. Request one today!</p>
                <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm group">
                  Request Integration
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
