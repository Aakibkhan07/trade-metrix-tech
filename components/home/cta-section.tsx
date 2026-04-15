"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`relative mx-auto max-w-4xl rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-accent p-[1px] md:p-[2px] ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="rounded-[calc(1rem-1px)] md:rounded-[calc(1.5rem-2px)] bg-background p-6 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-primary mb-4 md:mb-6">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                Start Trading Today
              </div>

              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
                Ready to automate{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  your trading?
                </span>
              </h2>

              <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-10 max-w-xl mx-auto">
                Join thousands of traders who trust TradeMetrix. Start your 2-day free trial today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-medium rounded-full gap-2"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-medium rounded-full bg-transparent"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>

              <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
                No credit card required · 2-day free trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
