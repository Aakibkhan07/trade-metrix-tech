"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Check, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [seatsRemaining, setSeatsRemaining] = useState(12)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 12 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-background to-card/30">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Main Card */}
          <div className="relative mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-background to-accent/20 p-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            
            <div className="relative rounded-3xl bg-background/95 backdrop-blur-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Features */}
                <div className="p-8 md:p-12 flex flex-col justify-center border-r border-primary/10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6 w-fit">
                    <Sparkles className="h-4 w-4" />
                    Limited Time Offer
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                    Transform Your <span className="text-primary">Trading</span> Today
                  </h2>

                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Join the next generation of algorithmic traders. Get unlimited access to all premium features.
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-3 mb-8">
                    {[
                      "50+ AI-powered strategies",
                      "Real-time execution engine",
                      "24/7 automated trading",
                      "Multi-broker integration",
                      "Advanced risk management"
                    ].map((feature, idx) => (
                      <div key={feature} className={`flex items-center gap-3 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${idx * 50}ms` }}>
                        <Check className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link href="/register" className="block">
                      <Button 
                        size="lg" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:-translate-y-1 group text-base"
                      >
                        <Zap className="h-5 w-5 mr-2" />
                        Start Free Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/contact" className="block">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full border-primary/40 hover:bg-primary/10 font-bold px-8 py-6 rounded-xl transition-all"
                      >
                        Talk to Expert
                      </Button>
                    </Link>
                  </div>

                  <p className="text-xs text-foreground/60 mt-4">
                    ✓ No credit card required · ✓ Instant access · ✓ Full feature access
                  </p>
                </div>

                {/* Right Side - Dashboard Preview */}
                <div className="relative p-8 md:p-12 bg-gradient-to-br from-card/50 to-background/50 flex items-center justify-center min-h-[400px] overflow-hidden">
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(133,_110,_214,_.1)_25%,rgba(133,_110,_214,_.1)_50%,transparent_50%,transparent_75%,rgba(133,_110,_214,_.1)_75%,rgba(133,_110,_214,_.1))] bg-[length:20px_20px] animate-pulse" />

                  <div className="relative w-full max-w-xs">
                    {/* Live Trading Card */}
                    <div className="bg-card border border-primary/40 rounded-xl p-4 space-y-4 mb-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold text-primary">LIVE DASHBOARD</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                          <span className="text-xs text-success">LIVE</span>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-2 bg-background/50 rounded border border-border/30">
                          <span className="text-foreground/60">Today's P&L</span>
                          <span className="font-bold text-success">+₹8,432</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-background/50 rounded border border-border/30">
                          <span className="text-foreground/60">Win Rate</span>
                          <span className="font-bold text-accent">84%</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-background/50 rounded border border-border/30">
                          <span className="text-foreground/60">Trades</span>
                          <span className="font-bold text-primary">24</span>
                        </div>
                      </div>
                    </div>

                    {/* Urgency Elements */}
                    <div className="space-y-3 bg-card/60 border border-primary/30 rounded-xl p-4">
                      <div className="text-center">
                        <p className="text-xs text-foreground/60 mb-1">PREMIUM SEATS AVAILABLE</p>
                        <p className="text-2xl font-black text-primary">{seatsRemaining}</p>
                        <p className="text-xs text-foreground/60">Filling up fast!</p>
                      </div>

                      <div className="border-t border-primary/20 pt-3">
                        <p className="text-xs text-foreground/60 mb-2 text-center">OFFER EXPIRES IN</p>
                        <div className="flex gap-2 justify-center">
                          <div className="text-center">
                            <p className="text-lg font-black text-primary">{String(timeLeft.hours).padStart(2, '0')}</p>
                            <p className="text-xs text-foreground/60">h</p>
                          </div>
                          <p className="text-primary font-black">:</p>
                          <div className="text-center">
                            <p className="text-lg font-black text-primary">{String(timeLeft.minutes).padStart(2, '0')}</p>
                            <p className="text-xs text-foreground/60">m</p>
                          </div>
                          <p className="text-primary font-black">:</p>
                          <div className="text-center">
                            <p className="text-lg font-black text-primary">{String(timeLeft.seconds).padStart(2, '0')}</p>
                            <p className="text-xs text-foreground/60">s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`mt-8 grid md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { label: "Active Users", value: "2,500+", icon: "👥" },
              { label: "Successful Trades", value: "50K+/day", icon: "✓" },
              { label: "Avg. ROI", value: "18-25%", icon: "📈" }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-card/50 border border-primary/20 rounded-lg backdrop-blur-sm">
                <p className="text-xl mb-1">{stat.icon}</p>
                <p className="font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
