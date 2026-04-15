"use client"

import { Check, X, Star, Zap, Rocket, Crown, Building2, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import { StripePaymentModal } from "@/components/payment/stripe-payment-modal"

const marketPlans = {
  equity: [
    {
      name: "Monthly",
      price: "₹15,000",
      originalPrice: null,
      period: "/month",
      description: "Perfect for getting started with equity options",
      strategies: 2,
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      candles: [
        { o: 45, h: 55, l: 40, c: 52 },
        { o: 52, h: 60, l: 48, c: 58 },
        { o: 58, h: 65, l: 55, c: 62 },
        { o: 62, h: 68, l: 58, c: 65 },
        { o: 65, h: 72, l: 60, c: 70 },
        { o: 70, h: 75, l: 65, c: 73 },
      ],
      features: [
        { name: "2 Active Strategies", included: true },
        { name: "Real-Time Signals", included: true },
        { name: "One-Click Execution", included: true },
        { name: "Basic Stoploss", included: true },
        { name: "Email Support", included: true },
        { name: "Single Broker", included: true },
        { name: "Trailing Stoploss", included: false },
        { name: "Auto Hedging", included: false },
        { name: "Strategy Builder", included: false },
        { name: "Dedicated Manager", included: false },
      ],
      popular: false,
    },
    {
      name: "Quarterly",
      price: "₹35,000",
      originalPrice: "₹45,000",
      period: "/quarter",
      description: "Save 22% with quarterly plan",
      strategies: 4,
      icon: Rocket,
      color: "from-blue-500 to-blue-600",
      candles: [
        { o: 50, h: 60, l: 45, c: 58 },
        { o: 58, h: 68, l: 55, c: 65 },
        { o: 65, h: 72, l: 60, c: 70 },
        { o: 70, h: 78, l: 66, c: 76 },
        { o: 76, h: 82, l: 72, c: 80 },
        { o: 80, h: 85, l: 75, c: 82 },
      ],
      features: [
        { name: "4 Active Strategies", included: true },
        { name: "Real-Time Signals", included: true },
        { name: "One-Click Execution", included: true },
        { name: "Smart Stoploss", included: true },
        { name: "Trailing Stoploss", included: false },
        { name: "3 Broker Integrations", included: true },
        { name: "Priority Email Support", included: true },
        { name: "Auto Hedging", included: false },
        { name: "Strategy Builder", included: false },
        { name: "Dedicated Manager", included: false },
      ],
      popular: false,
    },
    {
      name: "Half-Yearly",
      price: "₹65,000",
      originalPrice: "₹90,000",
      period: "/6 months",
      description: "Save 28% with half-yearly plan",
      strategies: 8,
      icon: Crown,
      color: "from-indigo-500 to-violet-500",
      candles: [
        { o: 55, h: 65, l: 50, c: 63 },
        { o: 63, h: 72, l: 60, c: 70 },
        { o: 70, h: 78, l: 66, c: 76 },
        { o: 76, h: 84, l: 72, c: 82 },
        { o: 82, h: 88, l: 78, c: 86 },
        { o: 86, h: 92, l: 82, c: 90 },
      ],
      features: [
        { name: "8 Active Strategies", included: true },
        { name: "Real-Time Signals", included: true },
        { name: "One-Click Execution", included: true },
        { name: "Smart Stoploss", included: true },
        { name: "Trailing Stoploss", included: false },
        { name: "Auto Hedging", included: true },
        { name: "5 Broker Integrations", included: true },
        { name: "Strategy Builder Access", included: true },
        { name: "Phone + Email Support", included: true },
        { name: "Strategy Backtesting", included: true },
        { name: "Dedicated Manager", included: false },
      ],
      popular: true,
    },
    {
      name: "Annual",
      price: "₹1,25,000",
      originalPrice: "₹1,80,000",
      period: "/year",
      description: "Save 30% with annual plan",
      strategies: 15,
      icon: Building2,
      color: "from-violet-500 to-purple-600",
      candles: [
        { o: 60, h: 70, l: 55, c: 68 },
        { o: 68, h: 78, l: 65, c: 76 },
        { o: 76, h: 85, l: 72, c: 83 },
        { o: 83, h: 90, l: 80, c: 88 },
        { o: 88, h: 94, l: 85, c: 92 },
        { o: 92, h: 98, l: 88, c: 96 },
      ],
      features: [
        { name: "15 Active Strategies", included: true },
        { name: "All Platform Features", included: true },
        { name: "Smart + Trailing SL", included: true },
        { name: "Auto Hedging", included: true },
        { name: "Unlimited Brokers", included: true },
        { name: "Custom Strategy Dev", included: true },
        { name: "Strategy Builder Pro", included: true },
        { name: "Backtesting + Live Trading", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Dedicated Account Manager", included: true },
      ],
      popular: false,
    },
  ],
  mcx: [
    {
      name: "Monthly",
      price: "₹18,000",
      originalPrice: null,
      period: "/month",
      description: "Perfect for getting started with MCX trading",
      strategies: 2,
      icon: Zap,
      color: "from-orange-500 to-red-600",
      candles: [
        { o: 45, h: 55, l: 40, c: 52 },
        { o: 52, h: 60, l: 48, c: 58 },
        { o: 58, h: 65, l: 55, c: 62 },
        { o: 62, h: 68, l: 58, c: 65 },
        { o: 65, h: 72, l: 60, c: 70 },
        { o: 70, h: 75, l: 65, c: 73 },
      ],
      features: [
        { name: "2 Active Strategies", included: true },
        { name: "Real-Time Signals", included: true },
        { name: "One-Click Execution", included: true },
        { name: "Basic Stoploss", included: true },
        { name: "Email Support", included: true },
        { name: "Single Broker", included: true },
        { name: "Trailing Stoploss", included: false },
        { name: "Auto Hedging", included: false },
        { name: "Strategy Builder", included: false },
        { name: "Dedicated Manager", included: false },
      ],
      popular: false,
    },
    {
      name: "Quarterly",
      price: "₹44,000",
      originalPrice: "₹54,000",
      period: "/quarter",
      description: "Save 18% with quarterly plan",
      strategies: 4,
      icon: Rocket,
      color: "from-orange-500 to-red-600",
      candles: [
        { o: 50, h: 60, l: 45, c: 58 },
        { o: 58, h: 68, l: 55, c: 65 },
        { o: 65, h: 72, l: 60, c: 70 },
        { o: 70, h: 78, l: 66, c: 76 },
        { o: 76, h: 82, l: 72, c: 80 },
        { o: 80, h: 85, l: 75, c: 82 },
      ],
      features: [
        { name: "4 Active Strategies", included: true },
        { name: "Real-Time Signals", included: true },
        { name: "One-Click Execution", included: true },
        { name: "Smart Stoploss", included: true },
        { name: "Trailing Stoploss", included: false },
        { name: "3 Broker Integrations", included: true },
        { name: "Priority Email Support", included: true },
        { name: "Auto Hedging", included: false },
        { name: "Strategy Builder", included: false },
        { name: "Dedicated Manager", included: false },
      ],
      popular: false,
    },
    {
      name: "Half-Yearly",
      price: "₹75,000",
      originalPrice: "₹1,02,000",
      period: "/6 months",
      description: "Save 26% with half-yearly plan",
      strategies: 8,
      icon: Crown,
      color: "from-orange-500 to-red-600",
      candles: [
        { o: 55, h: 65, l: 50, c: 63 },
        { o: 63, h: 72, l: 60, c: 70 },
        { o: 70, h: 78, l: 66, c: 76 },
        { o: 76, h: 84, l: 72, c: 82 },
        { o: 82, h: 88, l: 78, c: 86 },
        { o: 86, h: 92, l: 82, c: 90 },
      ],
      features: [
        { name: "8 Active Strategies", included: true },
        { name: "Real-Time Signals", included: true },
        { name: "One-Click Execution", included: true },
        { name: "Smart Stoploss", included: true },
        { name: "Trailing Stoploss", included: false },
        { name: "Auto Hedging", included: true },
        { name: "5 Broker Integrations", included: true },
        { name: "Strategy Builder Access", included: true },
        { name: "Phone + Email Support", included: true },
        { name: "Strategy Backtesting", included: true },
        { name: "Dedicated Manager", included: false },
      ],
      popular: true,
    },
    {
      name: "Annual",
      price: "₹1,55,000",
      originalPrice: "₹2,16,000",
      period: "/year",
      description: "Save 28% with annual plan",
      strategies: 15,
      icon: Building2,
      color: "from-orange-500 to-red-600",
      candles: [
        { o: 60, h: 70, l: 55, c: 68 },
        { o: 68, h: 78, l: 65, c: 76 },
        { o: 76, h: 85, l: 72, c: 83 },
        { o: 83, h: 90, l: 80, c: 88 },
        { o: 88, h: 94, l: 85, c: 92 },
        { o: 92, h: 98, l: 88, c: 96 },
      ],
      features: [
        { name: "15 Active Strategies", included: true },
        { name: "All Platform Features", included: true },
        { name: "Smart + Trailing SL", included: true },
        { name: "Auto Hedging", included: true },
        { name: "Unlimited Brokers", included: true },
        { name: "Custom Strategy Dev", included: true },
        { name: "Strategy Builder Pro", included: true },
        { name: "Backtesting + Live Trading", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Dedicated Account Manager", included: true },
      ],
      popular: false,
    },
  ],
}

function AnimatedCandleChart({ candles, color }: { candles: any[]; color: string }) {
  const [animatedCandles, setAnimatedCandles] = useState(candles.map((c) => ({ ...c, animated: 0 })))

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCandles((prev) =>
        prev.map((candle, i) => ({
          ...candle,
          c: candle.c + (Math.random() - 0.48) * 3,
          h: Math.max(candle.h, candle.c + Math.random() * 2),
          l: Math.min(candle.l, candle.c - Math.random() * 2),
        })),
      )
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  const minVal = Math.min(...animatedCandles.map((c) => c.l)) - 5
  const maxVal = Math.max(...animatedCandles.map((c) => c.h)) + 5
  const range = maxVal - minVal

  const getY = (val: number) => 48 - ((val - minVal) / range) * 40

  return (
    <svg className="w-full h-12" viewBox="0 0 100 48" preserveAspectRatio="none">
      {animatedCandles.map((candle, i) => {
        const x = 8 + i * 15
        const isGreen = candle.c >= candle.o
        const bodyTop = getY(Math.max(candle.o, candle.c))
        const bodyBottom = getY(Math.min(candle.o, candle.c))
        const bodyHeight = Math.max(bodyBottom - bodyTop, 1)

        return (
          <g key={i}>
            {/* Wick */}
            <line
              x1={x}
              y1={getY(candle.h)}
              x2={x}
              y2={getY(candle.l)}
              stroke={isGreen ? "#22c55e" : "#ef4444"}
              strokeWidth="0.8"
              className="transition-all duration-500"
            />
            {/* Body */}
            <rect
              x={x - 3}
              y={bodyTop}
              width="6"
              height={bodyHeight}
              fill={isGreen ? "#22c55e" : "#ef4444"}
              className="transition-all duration-500"
              rx="0.5"
            />
          </g>
        )
      })}
      {/* Animated pulse at last candle */}
      <circle
        cx={8 + (animatedCandles.length - 1) * 15}
        cy={getY(animatedCandles[animatedCandles.length - 1]?.c || 50)}
        r="2"
        className="fill-primary animate-pulse"
      />
    </svg>
  )
}

export function PricingPlans() {
  const [activeMarket, setActiveMarket] = useState<"equity" | "mcx">("equity")
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean
    productId: string
    productName: string
    price: string
  }>({
    isOpen: false,
    productId: "",
    productName: "",
    price: "",
  })
  const plans = marketPlans[activeMarket]

  const handleBuyClick = (plan: any) => {
    setPaymentModal({
      isOpen: true,
      productId: `${activeMarket}-${plan.name.toLowerCase().replace(/\s+/g, "-")}`,
      productName: plan.name,
      price: plan.price,
    })
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Market Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveMarket("equity")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeMarket === "equity"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Equity Options
          </button>
          <button
            onClick={() => setActiveMarket("mcx")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeMarket === "mcx"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            MCX (Commodity)
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col group overflow-hidden ${plan.popular ? "border-accent shadow-lg shadow-accent/10" : "border-border/50"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="mr-1 h-3 w-3" /> Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${plan.color} transition-transform group-hover:scale-110`}
                  >
                    <plan.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {plan.strategies} Strategies
                  </Badge>
                  {/* Removed the accuracy badge as it was not declared */}
                </div>

                <div className="mb-4 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Expected Performance</span>
                    <span className="flex items-center gap-1 text-xs text-accent">
                      <TrendingUp className="h-3 w-3" />
                      Live
                    </span>
                  </div>
                  <AnimatedCandleChart candles={plan.candles} color={plan.color} />
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-muted-foreground/40 mt-0.5" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground/50"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleBuyClick(plan)}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Enterprise Plan */}
        <Card className="mt-8 border-border/50 bg-primary/5">
          <CardContent className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Enterprise Plan</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                For institutional traders and high-volume operations requiring custom solutions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <Badge variant="outline">₹2,50,000+</Badge>
                <Badge variant="secondary">20+ Custom Strategies</Badge>
                {/* Removed the accuracy badge as it was not declared */}
              </div>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          * Accuracy ranges are indicative based on historical performance. Markets are subject to risk and returns are
          not guaranteed.
        </p>
      </div>

      <StripePaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
        productId={paymentModal.productId}
        productName={paymentModal.productName}
        price={paymentModal.price}
      />
    </section>
  )
}
