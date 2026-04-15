"use client"

import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Full-Time Options Trader",
    location: "Mumbai",
    initials: "VM",
    rating: 5,
    text: "Switched to ScalperX 8 months ago. The automated stoploss saved me ₹45K in a single bad trade. Best decision for my capital preservation strategy.",
    strategy: "ScalperX",
    since: "8 months",
    verified: true,
  },
  {
    name: "Ananya Krishnamurthy",
    role: "Day Trader",
    location: "Bengaluru",
    initials: "AK",
    rating: 5,
    text: "Real-time signals are spot-on. Executed 240+ trades via platform and the accuracy on entries is remarkable. No more FOMO trading.",
    strategy: "OptiFlow",
    since: "5 months",
    verified: true,
  },
  {
    name: "Arun Patel",
    role: "Nifty 50 Specialist",
    location: "Delhi",
    initials: "AP",
    rating: 5,
    text: "Cut my losing trades by 60% using the trailing stoploss feature. The platform's discipline-first approach aligned perfectly with my trading goals.",
    strategy: "ScalperX",
    since: "10 months",
    verified: true,
  },
  {
    name: "Priya Sharma",
    role: "Portfolio Manager",
    location: "Hyderabad",
    initials: "PS",
    rating: 5,
    text: "Integrated TradeMetrix across all 5 brokers. Multi-broker execution saved us from missed setups. Institutional-grade execution at retail pricing.",
    strategy: "OptiFlow",
    since: "6 months",
    verified: true,
  },
  {
    name: "Rajesh Kumar",
    role: "Part-Time MCX Trader",
    location: "Pune",
    initials: "RK",
    rating: 5,
    text: "Trading crude oil and gold on MCX became consistent after using the platform. Auto-hedging reduced overnight gaps exposure significantly.",
    strategy: "ScalperX",
    since: "12 months",
    verified: true,
  },
  {
    name: "Sneha Desai",
    role: "Risk Management Consultant",
    location: "Ahmedabad",
    initials: "SD",
    rating: 5,
    text: "Position sizing recommendations are data-driven and precise. Helped my firm implement risk protocols 10x faster. Recommending to all traders.",
    strategy: "OptiFlow",
    since: "7 months",
    verified: true,
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  // ... existing intersection observer code ...

  // ... existing auto-play effect ...

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const featuredTestimonial = testimonials[activeIndex]

  const getInitialColor = (initials: string) => {
    const colors = [
      "bg-gradient-to-br from-blue-500 to-blue-600",
      "bg-gradient-to-br from-purple-500 to-purple-600",
      "bg-gradient-to-br from-cyan-500 to-cyan-600",
      "bg-gradient-to-br from-pink-500 to-pink-600",
      "bg-gradient-to-br from-green-500 to-green-600",
      "bg-gradient-to-br from-orange-500 to-orange-600",
    ]
    const hash = initials.charCodeAt(0) + initials.charCodeAt(1)
    return colors[hash % colors.length]
  }

  return (
    null
  )
}
