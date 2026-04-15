"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, TrendingUp, CheckCircle, Zap, Target, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturedStrategySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({ scalperTrades: 0, optiFlowTrades: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          let scalperCount = 0
          let optiFlowCount = 0

          const interval = setInterval(() => {
            if (scalperCount < 847) scalperCount += 28
            if (optiFlowCount < 634) optiFlowCount += 21

            setStats({
              scalperTrades: Math.min(scalperCount, 847),
              optiFlowTrades: Math.min(optiFlowCount, 634),
            })

            if (scalperCount >= 847 && optiFlowCount >= 634) {
              clearInterval(interval)
            }
          }, 20)

          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    null
  )
}
