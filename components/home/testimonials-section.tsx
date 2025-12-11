"use client"

import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Chartered Accountant",
    location: "Mumbai",
    image: "/indian-professional-man-with-glasses.jpg",
    rating: 5,
    text: "Best risk control I've seen. The automated stop-loss and position sizing saved me from multiple bad trades.",
    strategy: "IronDelta",
    experience: "8 months",
    verified: true,
  },
  {
    name: "Ananya Krishnamurthy",
    role: "Software Engineer",
    location: "Bengaluru",
    image: "/indian-professional-woman-smiling.jpg",
    rating: 5,
    text: "Signals are clean and on time. No more second-guessing entries - the alerts are precise and actionable.",
    strategy: "NeuroMax",
    experience: "5 months",
    verified: true,
  },
  {
    name: "Dr. Arun Sharma",
    role: "Orthopedic Surgeon",
    location: "Delhi",
    image: "/indian-doctor-professional-male.jpg",
    rating: 5,
    text: "Finally stopped overtrading. The disciplined approach and automated execution changed my trading psychology completely.",
    strategy: "GammaPro",
    experience: "10 months",
    verified: true,
  },
  {
    name: "Priya Reddy",
    role: "Business Owner",
    location: "Hyderabad",
    image: "/indian-businesswoman-confident.jpg",
    rating: 5,
    text: "Risk management is top-notch. I sleep peacefully knowing my capital is protected with proper hedging.",
    strategy: "ThetaPro",
    experience: "6 months",
    verified: true,
  },
  {
    name: "Rajesh Gupta",
    role: "Retired Banker",
    location: "Pune",
    image: "/senior-indian-man-professional.jpg",
    rating: 5,
    text: "Entry and exit signals are crystal clear. No confusion, no emotional decisions - just systematic profits.",
    strategy: "DeltaMax",
    experience: "12 months",
    verified: true,
  },
  {
    name: "Sneha Patel",
    role: "IT Consultant",
    location: "Ahmedabad",
    image: "/young-indian-professional-woman.jpg",
    rating: 5,
    text: "Stopped revenge trading after losses. The strategy keeps me disciplined even in volatile markets.",
    strategy: "AIMetrix",
    experience: "4 months",
    verified: true,
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const featuredTestimonial = testimonials[activeIndex]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,180,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,180,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-medium text-primary mb-4 animate-bounce-subtle">
            <Star className="h-4 w-4" />
            Reviews
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Real Traders,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Results</span>
          </h2>
        </div>

        <div
          className={`mb-10 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-6 md:p-8 overflow-hidden group hover:border-primary/30 transition-all duration-500">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex flex-col md:flex-row items-center gap-6">
              {/* Image with animation */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse" />
                <Image
                  src={featuredTestimonial.image || "/placeholder.svg"}
                  alt={featuredTestimonial.name}
                  width={100}
                  height={100}
                  className="relative rounded-full object-cover border-4 border-primary/30 transition-transform duration-500 group-hover:scale-105"
                />
                {featuredTestimonial.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 text-center md:text-left">
                <Quote className="h-8 w-8 text-primary/20 mb-2 mx-auto md:mx-0" />
                <p className="text-lg md:text-xl text-foreground font-medium mb-4 leading-relaxed">
                  "{featuredTestimonial.text}"
                </p>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div>
                    <p className="font-bold text-foreground">{featuredTestimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {featuredTestimonial.role}, {featuredTestimonial.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 md:ml-auto">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {featuredTestimonial.strategy}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 transition-all duration-300 ${i < featuredTestimonial.rating ? "fill-yellow-500 text-yellow-500 animate-bounce-subtle" : "text-muted-foreground/30"}`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setActiveIndex(idx)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setActiveIndex(index)
              }}
              className={`group cursor-pointer bg-card rounded-xl p-3 md:p-4 border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${index === activeIndex ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={32}
                  height={32}
                  className="rounded-full object-cover border border-border group-hover:border-primary/50 transition-colors"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-xs text-foreground truncate">{testimonial.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-2.5 w-2.5 ${i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2 group-hover:text-foreground/70 transition-colors">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 p-3 md:p-4 rounded-xl bg-muted/30 border border-border transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-center text-[10px] md:text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> Results shown are from verified users and may not be typical. Trading involves
            risk. We provide strategies, not tips or advisory services.
          </p>
        </div>
      </div>
    </section>
  )
}
