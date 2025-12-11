"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  LineChart,
  Shield,
  Target,
  Zap,
  Settings2,
  Sparkles,
  ChevronRight,
  Crown,
  Rocket,
  Building2,
  Lock,
  Check,
  PieChart,
  AlertTriangle,
  Info,
  Wallet,
  IndianRupee,
  ShoppingCart,
  Bot,
  X,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const pricingPlans = {
  monthly: {
    name: "Monthly",
    priceDisplay: "₹14,999",
    duration: 1,
    strategies: 2,
    accuracy: { min: 70, max: 75 },
    icon: Zap,
    color: "from-cyan-500 to-cyan-600",
    recommendedCapital: "₹50K - ₹2L",
    minCapital: "₹50,000",
    features: {
      hasTrailingSL: false,
      hasAutoHedging: false,
      hasStrategyBuilder: false,
      hasAdvancedRisk: false,
      hasSensitivity: false,
    },
    metrics: {
      winRate: 72,
      avgMonthlyReturn: 15,
      totalReturn: 15,
      netReturn: 10,
      sharpeRatio: 1.4,
      sortinoRatio: 1.8,
      calmarRatio: 2.0,
      maxDrawdown: 12,
      avgDrawdown: 6,
      profitFactor: 1.6,
      avgWinPercent: 2.5,
      avgLossPercent: 1.8,
      totalTrades: 45,
    },
  },
  quarterly: {
    name: "Quarterly",
    priceDisplay: "₹35,000",
    duration: 3,
    strategies: 4,
    accuracy: { min: 75, max: 80 },
    icon: Rocket,
    color: "from-teal-500 to-emerald-600",
    recommendedCapital: "₹1L - ₹5L",
    minCapital: "₹1,00,000",
    features: {
      hasTrailingSL: true,
      hasAutoHedging: false,
      hasStrategyBuilder: false,
      hasAdvancedRisk: true,
      hasSensitivity: false,
    },
    metrics: {
      winRate: 77,
      avgMonthlyReturn: 20,
      totalReturn: 60,
      netReturn: 50,
      sharpeRatio: 1.9,
      sortinoRatio: 2.5,
      calmarRatio: 3.2,
      maxDrawdown: 10,
      avgDrawdown: 4,
      profitFactor: 2.1,
      avgWinPercent: 3.2,
      avgLossPercent: 1.6,
      totalTrades: 128,
    },
  },
  halfYearly: {
    name: "Half-Yearly",
    priceDisplay: "₹55,000",
    duration: 6,
    strategies: 8,
    accuracy: { min: 80, max: 85 },
    icon: Crown,
    color: "from-violet-500 to-purple-600",
    popular: true,
    recommendedCapital: "₹2L - ₹10L",
    minCapital: "₹2,00,000",
    features: {
      hasTrailingSL: true,
      hasAutoHedging: true,
      hasStrategyBuilder: true,
      hasAdvancedRisk: true,
      hasSensitivity: true,
    },
    metrics: {
      winRate: 82,
      avgMonthlyReturn: 25,
      totalReturn: 150,
      netReturn: 130,
      sharpeRatio: 2.5,
      sortinoRatio: 3.4,
      calmarRatio: 5.0,
      maxDrawdown: 7,
      avgDrawdown: 3,
      profitFactor: 2.8,
      avgWinPercent: 4.0,
      avgLossPercent: 1.5,
      totalTrades: 312,
    },
  },
  annual: {
    name: "Annual",
    priceDisplay: "₹1,00,000",
    duration: 12,
    strategies: 15,
    accuracy: { min: 88, max: 92 },
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    recommendedCapital: "₹5L - ₹25L+",
    minCapital: "₹5,00,000",
    features: {
      hasTrailingSL: true,
      hasAutoHedging: true,
      hasStrategyBuilder: true,
      hasAdvancedRisk: true,
      hasSensitivity: true,
    },
    metrics: {
      winRate: 88,
      avgMonthlyReturn: 30,
      totalReturn: 360,
      netReturn: 320,
      sharpeRatio: 3.2,
      sortinoRatio: 4.3,
      calmarRatio: 7.5,
      maxDrawdown: 5,
      avgDrawdown: 2,
      profitFactor: 3.6,
      avgWinPercent: 5.0,
      avgLossPercent: 1.2,
      totalTrades: 580,
    },
  },
}

function generateMonthlyReturns(plan: keyof typeof pricingPlans) {
  const { avgMonthlyReturn } = pricingPlans[plan].metrics
  const months = pricingPlans[plan].duration
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  let cumulativeReturn = 0
  return monthNames.slice(0, months).map((month, i) => {
    const variance = Math.sin(i * 2.3) * 0.15 + 0.9
    const monthReturn = avgMonthlyReturn * variance
    cumulativeReturn += monthReturn
    return {
      month,
      return: Math.round(monthReturn * 10) / 10,
      cumulative: Math.round(cumulativeReturn * 10) / 10,
    }
  })
}

function generateEquityCurve(plan: keyof typeof pricingPlans) {
  const { avgMonthlyReturn, maxDrawdown } = pricingPlans[plan].metrics
  const months = pricingPlans[plan].duration
  const points: number[] = [100]

  for (let i = 1; i <= months * 4; i++) {
    const weeklyReturn = avgMonthlyReturn / 4
    const variance = Math.sin(i * 1.7) * 0.4 + 0.8
    const drawdownFactor = i % 7 === 0 ? 1 - maxDrawdown / 200 : 1
    const newValue = points[i - 1] * (1 + (weeklyReturn * variance * drawdownFactor) / 100)
    points.push(Math.round(newValue * 100) / 100)
  }

  return points
}

function generateDrawdownData(plan: keyof typeof pricingPlans) {
  const { maxDrawdown, avgDrawdown } = pricingPlans[plan].metrics
  return [
    { period: "Week 3", drawdown: maxDrawdown, recovery: 5 },
    { period: "Week 8", drawdown: avgDrawdown + 2, recovery: 3 },
    { period: "Week 15", drawdown: avgDrawdown, recovery: 4 },
    { period: "Week 22", drawdown: avgDrawdown - 1, recovery: 2 },
  ]
}

function generateHeatmapData(plan: keyof typeof pricingPlans) {
  const baseAccuracy = pricingPlans[plan].accuracy.min
  const stopLosses = [0.5, 1.0, 1.5, 2.0]
  const targets = [1.0, 1.5, 2.0, 2.5]

  return stopLosses.map((sl) =>
    targets.map((target) => {
      const ratio = target / sl
      const base = baseAccuracy * 0.8
      const bonus = ratio > 1.5 ? 15 : ratio > 1 ? 10 : 5
      return Math.min(Math.round(base + bonus + Math.random() * 10), 95)
    }),
  )
}

function AnimatedSparkline({
  data,
  height = 60,
  color = "#22d3ee",
}: { data: number[]; height?: number; color?: string }) {
  const [animatedData, setAnimatedData] = useState<number[]>(data.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 1500
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setAnimatedData(
        data.map((value, i) => {
          const delay = i * 0.02
          const adjustedProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)))
          return value * adjustedProgress * easeOut
        }),
      )
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [data, isVisible])

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const points = animatedData
    .map((value, i) => {
      const x = (i / (animatedData.length - 1)) * 100
      const y = height - ((value - min) / range) * (height - 10) - 5
      return `${x},${y}`
    })
    .join(" ")
  const areaPoints = `0,${height} ${points} 100,${height}`

  return (
    <svg ref={ref} width="100%" height={height} className="overflow-visible">
      <defs>
        <linearGradient id={`spark-gradient-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon points={areaPoints} fill={`url(#spark-gradient-${color.replace("#", "")})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      {animatedData.length > 0 && (
        <circle
          cx="100"
          cy={height - ((animatedData[animatedData.length - 1] - min) / range) * (height - 10) - 5}
          r="4"
          fill={color}
          className="animate-pulse"
        />
      )}
    </svg>
  )
}

function AnimatedGauge({
  value,
  max,
  label,
  color,
  size = 120,
}: { value: number; max: number; label: string; color: string; size?: number }) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 1500
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setAnimatedValue(value * easeOut)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [value, isVisible])

  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI * 1.5
  const progress = (animatedValue / max) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg ref={ref} width={size} height={size * 0.75} className="overflow-visible">
        <defs>
          <linearGradient id={`gauge-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.5" />
          </linearGradient>
          <filter id="gauge-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={`M ${strokeWidth / 2} ${size * 0.6} A ${radius} ${radius} 0 1 1 ${size - strokeWidth / 2} ${size * 0.6}`}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d={`M ${strokeWidth / 2} ${size * 0.6} A ${radius} ${radius} 0 1 1 ${size - strokeWidth / 2} ${size * 0.6}`}
          fill="none"
          stroke={`url(#gauge-${label})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
          filter="url(#gauge-glow)"
          className="transition-all duration-300"
        />
        <text
          x={size / 2}
          y={size * 0.45}
          textAnchor="middle"
          className="fill-foreground text-xl font-bold"
          style={{ fontSize: size * 0.18 }}
        >
          {animatedValue.toFixed(2)}
        </text>
      </svg>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  )
}

function AnimatedBarChart({
  data,
  height = 150,
}: { data: { month: string; return: number; cumulative?: number }[]; height?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const maxReturn = Math.max(...data.map((d) => Math.abs(d.return)))

  return (
    <div ref={ref} className="w-full" style={{ height }}>
      <div className="flex items-end justify-between h-full gap-1 md:gap-2">
        {data.map((item, i) => {
          const barHeight = (Math.abs(item.return) / maxReturn) * (height - 30)
          const isPositive = item.return >= 0
          return (
            <div key={item.month} className="flex flex-col items-center flex-1 group">
              <div
                className="relative w-full max-w-[40px] rounded-t-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  height: isVisible ? barHeight : 0,
                  transitionDelay: `${i * 80}ms`,
                  transitionDuration: "800ms",
                }}
              >
                <div
                  className={`absolute inset-0 ${isPositive ? "bg-gradient-to-t from-cyan-600 to-teal-400" : "bg-gradient-to-t from-rose-600 to-rose-400"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />

                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-popover border border-border rounded-lg px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                  <div className="font-medium text-cyan-400">Upto +{item.return.toFixed(1)}%</div>
                  {item.cumulative && <div className="text-muted-foreground">Expected: +{item.cumulative}%</div>}
                </div>
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground mt-1">{item.month}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AnimatedHeatmap({ data, stopLosses, targets }: { data: number[][]; stopLosses: number[]; targets: number[] }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const getColor = (value: number) => {
    if (value >= 80) return "bg-gradient-to-br from-cyan-500 to-teal-500 text-white"
    if (value >= 60) return "bg-gradient-to-br from-teal-600 to-emerald-600 text-white"
    if (value >= 40) return "bg-gradient-to-br from-amber-500 to-orange-500 text-white"
    return "bg-gradient-to-br from-rose-500 to-red-500 text-white"
  }

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-xs text-muted-foreground">SL \ Target</th>
            {targets.map((t) => (
              <th key={t} className="p-2 text-xs text-muted-foreground">
                {t}%
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={stopLosses[i]}>
              <td className="p-2 text-xs text-muted-foreground font-medium">{stopLosses[i]}%</td>
              {row.map((value, j) => (
                <td key={j} className="p-1">
                  <div
                    className={`${getColor(value)} rounded-lg p-3 text-center font-bold text-sm transition-all duration-500 hover:scale-110 cursor-pointer`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.5)",
                      transitionDelay: `${(i * 4 + j) * 50}ms`,
                    }}
                  >
                    {value}%
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function AnalyticsPage() {
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof pricingPlans>("halfYearly")
  const [selectedStrategy, setSelectedStrategy] = useState("all")
  const [sliderSL, setSliderSL] = useState([1.5])
  const [sliderTarget, setSliderTarget] = useState([2.0])

  const currentPlan = pricingPlans[selectedPlan]
  const monthlyReturns = generateMonthlyReturns(selectedPlan)
  const equityCurve = generateEquityCurve(selectedPlan)
  const drawdownData = generateDrawdownData(selectedPlan)
  const heatmapData = generateHeatmapData(selectedPlan)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header */}
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
              <Activity className="w-3 h-3 mr-1" />
              Performance Dashboard
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Numbers Don't Lie. <span className="text-cyan-400">Neither Do We.</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent metrics. Expected returns. Real risk analysis. See exactly what each plan can deliver before
              you invest.
            </p>
          </div>

          {/* Animated Background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              <Activity className="w-3 h-3 mr-1" />
              Strategy Analytics & Performance
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Expected Performance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Metrics</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Analyze expected returns, risk measures, and optimize your trading strategies with our comprehensive
              analytics dashboard.
            </p>
          </div>

          <Card className="mb-8 border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <ShoppingCart className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    How It Works - Strategy Purchase Model
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>
                          You <strong className="text-foreground">purchase automated strategies</strong> from us
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>
                          Strategies execute trades <strong className="text-foreground">automatically</strong> on your
                          broker account
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>
                          You have <strong className="text-foreground">full control</strong> to start/stop anytime
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400" />
                        <span>
                          We do <strong className="text-rose-400">NOT</strong> provide trading tips or calls
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400" />
                        <span>
                          We do <strong className="text-rose-400">NOT</strong> manage your funds or portfolio
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400" />
                        <span>
                          We are <strong className="text-rose-400">NOT</strong> SEBI registered advisors
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-teal-500/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/20">
                  <Wallet className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    Returns Depend on Your Capital Investment
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The <strong className="text-foreground">percentage returns remain consistent</strong> across all
                    capital sizes, but your{" "}
                    <strong className="text-foreground">absolute profits scale with your investment</strong>.
                    Higher-tier plans (Annual & Custom) are designed for traders with larger capital to maximize
                    returns.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(pricingPlans).map(([key, plan]) => (
                      <div key={key} className="bg-background/50 rounded-lg p-3 text-center border border-border/50">
                        <div className="text-xs text-muted-foreground mb-1">{plan.name}</div>
                        <div className="font-semibold text-sm text-foreground">{plan.recommendedCapital}</div>
                        <div className="text-xs text-cyan-400 mt-1">Min: {plan.minCapital}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan Selector */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Select Plan to View Expected Analytics</h2>
              <Badge variant="outline" className="text-xs">
                <Info className="w-3 h-3 mr-1" />
                Expected returns shown below
              </Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(pricingPlans).map(([key, plan]) => {
                const Icon = plan.icon
                const isSelected = selectedPlan === key
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key as keyof typeof pricingPlans)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? "border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                        : "border-border hover:border-cyan-500/50 bg-card/50"
                    }`}
                  >
                    {"popular" in plan && plan.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs">
                        Popular
                      </Badge>
                    )}
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center mb-3`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-semibold">{plan.name}</div>
                    <div className="text-xs text-muted-foreground">{plan.strategies} Strategies</div>
                    <div className="text-xs text-cyan-400 mt-1">Upto {plan.accuracy.max}% Accuracy</div>
                    <div className="text-xs text-muted-foreground mt-1">Capital: {plan.recommendedCapital}</div>
                    <div className="mt-2 pt-2 border-t border-border/50">
                      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                        Upto +{plan.metrics.totalReturn}%
                      </div>
                      <div className="text-xs text-muted-foreground">Expected Return</div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-rose-300 font-medium">Important Disclaimer</p>
                <p className="text-xs text-muted-foreground mt-1">
                  All returns shown are <strong>expected/projected</strong> based on backtested data and past
                  performance. Actual results may vary significantly. Trading in derivatives involves substantial risk
                  of loss. Past performance does not guarantee future results. Returns depend on your capital, market
                  conditions, and execution. We sell automated trading strategies - NOT tips, advisory, or portfolio
                  management services.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <Card className="mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    Expected Performance Summary - {currentPlan.name} Plan
                  </CardTitle>
                  <CardDescription>
                    Projected metrics based on {currentPlan.accuracy.min}-{currentPlan.accuracy.max}% accuracy
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                    <Target className="w-3 h-3 mr-1" />
                    {currentPlan.strategies} Strategies
                  </Badge>
                  <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/30">
                    <Wallet className="w-3 h-3 mr-1" />
                    {currentPlan.recommendedCapital}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-muted-foreground">Avg Monthly Return</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">Upto +{currentPlan.metrics.avgMonthlyReturn}%</div>
                  <div className="text-xs text-muted-foreground mt-1">Expected per month</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-teal-400" />
                    <span className="text-xs text-muted-foreground">Total Expected Return</span>
                  </div>
                  <div className="text-2xl font-bold text-teal-400">Upto +{currentPlan.metrics.totalReturn}%</div>
                  <div className="text-xs text-muted-foreground mt-1">Over {currentPlan.duration} month(s)</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-muted-foreground">Win Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">Upto {currentPlan.metrics.winRate}%</div>
                  <div className="text-xs text-muted-foreground mt-1">Expected accuracy</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-rose-400" />
                    <span className="text-xs text-muted-foreground">Max Drawdown</span>
                  </div>
                  <div className="text-2xl font-bold text-rose-400">-{currentPlan.metrics.maxDrawdown}%</div>
                  <div className="text-xs text-muted-foreground mt-1">Worst case scenario</div>
                </div>
              </div>

              {/* Equity Curve */}
              <div className="p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-cyan-400" />
                    Expected Equity Growth Curve
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    Starting: 100% → Expected: {equityCurve[equityCurve.length - 1].toFixed(0)}%
                  </Badge>
                </div>
                <AnimatedSparkline data={equityCurve} height={120} color="#22d3ee" />
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  *Projected growth based on expected {currentPlan.metrics.avgMonthlyReturn}% monthly returns. Actual
                  results may vary.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="performance" className="space-y-6">
            <TabsList className="bg-card/50 border border-border/50 p-1 rounded-xl">
              <TabsTrigger
                value="performance"
                className="rounded-lg data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Performance
              </TabsTrigger>
              <TabsTrigger
                value="drawdowns"
                className="rounded-lg data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
              >
                <TrendingDown className="w-4 h-4 mr-2" />
                Drawdowns
              </TabsTrigger>
              <TabsTrigger
                value="risk"
                className="rounded-lg data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
              >
                <Shield className="w-4 h-4 mr-2" />
                Risk Analysis
              </TabsTrigger>
              <TabsTrigger
                value="sensitivity"
                className="rounded-lg data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
              >
                <Settings2 className="w-4 h-4 mr-2" />
                Sensitivity
              </TabsTrigger>
            </TabsList>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-cyan-400" />
                      Expected Monthly Returns
                    </CardTitle>
                    <CardDescription>Projected returns for {currentPlan.duration} month(s)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatedBarChart data={monthlyReturns} height={180} />
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      *Expected returns based on backtested data. Actual performance may differ.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-cyan-400" />
                      Trade Statistics
                    </CardTitle>
                    <CardDescription>Expected win/loss distribution</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                        <div className="text-2xl font-bold text-emerald-400">
                          Upto +{currentPlan.metrics.avgWinPercent}%
                        </div>
                        <div className="text-xs text-muted-foreground">Avg Win / Trade</div>
                      </div>
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                        <div className="text-2xl font-bold text-rose-400">-{currentPlan.metrics.avgLossPercent}%</div>
                        <div className="text-xs text-muted-foreground">Avg Loss / Trade</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Expected Trades</span>
                        <span className="font-semibold">~{currentPlan.metrics.totalTrades}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Profit Factor</span>
                        <span className="font-semibold text-cyan-400">{currentPlan.metrics.profitFactor}x</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Expected Win Rate</span>
                        <span className="font-semibold text-emerald-400">Upto {currentPlan.metrics.winRate}%</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      *Statistics based on backtested results with the {currentPlan.name} plan strategies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Drawdowns Tab */}
            <TabsContent value="drawdowns" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-rose-400" />
                    Expected Drawdown Analysis
                  </CardTitle>
                  <CardDescription>Projected worst-case scenarios based on backtesting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                      <div className="text-2xl font-bold text-rose-400">-{currentPlan.metrics.maxDrawdown}%</div>
                      <div className="text-xs text-muted-foreground">Max Drawdown</div>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                      <div className="text-2xl font-bold text-amber-400">-{currentPlan.metrics.avgDrawdown}%</div>
                      <div className="text-xs text-muted-foreground">Avg Drawdown</div>
                    </div>
                    <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                      <div className="text-2xl font-bold text-cyan-400">~5 days</div>
                      <div className="text-xs text-muted-foreground">Avg Recovery</div>
                    </div>
                    <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-center">
                      <div className="text-2xl font-bold text-teal-400">{currentPlan.metrics.calmarRatio}</div>
                      <div className="text-xs text-muted-foreground">Calmar Ratio</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {drawdownData.map((dd, i) => (
                      <div key={dd.period} className="p-3 rounded-lg bg-card/50 border border-border/50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{dd.period}</span>
                          <Badge variant="outline" className="text-rose-400 border-rose-500/30">
                            -{dd.drawdown}%
                          </Badge>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full transition-all duration-1000"
                            style={{ width: `${(dd.drawdown / currentPlan.metrics.maxDrawdown) * 100}%` }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Expected recovery: ~{dd.recovery} days</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    *Drawdown data based on backtested scenarios. Actual drawdowns may be higher during extreme market
                    conditions.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Risk Tab */}
            <TabsContent value="risk" className="space-y-6">
              {!currentPlan.features.hasAdvancedRisk ? (
                <Card className="border-amber-500/30">
                  <CardContent className="p-8 text-center">
                    <Lock className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Advanced Risk Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Upgrade to Quarterly or higher plan to unlock detailed risk metrics
                    </p>
                    <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-500">
                      <Link href="/pricing">Upgrade Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      Risk-Adjusted Metrics
                    </CardTitle>
                    <CardDescription>Expected risk ratios based on backtesting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-8 justify-items-center">
                      <AnimatedGauge
                        value={currentPlan.metrics.sharpeRatio}
                        max={5}
                        label="Sharpe Ratio"
                        color="#22d3ee"
                      />
                      <AnimatedGauge
                        value={currentPlan.metrics.sortinoRatio}
                        max={6}
                        label="Sortino Ratio"
                        color="#2dd4bf"
                      />
                      <AnimatedGauge
                        value={currentPlan.metrics.calmarRatio}
                        max={10}
                        label="Calmar Ratio"
                        color="#34d399"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 text-center">
                      *Risk metrics are calculated from backtested data and may not reflect future performance.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Sensitivity Tab */}
            <TabsContent value="sensitivity" className="space-y-6">
              {!currentPlan.features.hasSensitivity ? (
                <Card className="border-amber-500/30">
                  <CardContent className="p-8 text-center">
                    <Lock className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Parameter Sensitivity Analysis</h3>
                    <p className="text-muted-foreground mb-4">
                      Upgrade to Half-Yearly or higher plan to unlock parameter optimization
                    </p>
                    <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-500">
                      <Link href="/pricing">Upgrade Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Settings2 className="w-5 h-5 text-cyan-400" />
                      Expected Returns by SL/Target Combinations
                    </CardTitle>
                    <CardDescription>Heatmap showing projected accuracy at different parameters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatedHeatmap
                      data={heatmapData}
                      stopLosses={[0.5, 1.0, 1.5, 2.0]}
                      targets={[1.0, 1.5, 2.0, 2.5]}
                    />
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      *Sensitivity analysis based on backtested scenarios. Actual performance varies with market
                      conditions.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Bottom Disclaimer */}
          <Card className="mt-8 border-muted bg-muted/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-muted-foreground space-y-2">
                  <p>
                    <strong className="text-foreground">Disclaimer:</strong> All analytics, metrics, and returns
                    displayed on this page are
                    <strong> expected/projected figures</strong> based on historical backtesting and past performance
                    data. They are for informational purposes only and should not be considered as guaranteed returns or
                    financial advice.
                  </p>
                  <p>
                    <strong className="text-foreground">Our Service Model:</strong> We sell automated trading strategies
                    that execute on your linked broker account. We do <strong>NOT</strong> provide tips, calls, advisory
                    services, or portfolio management. You purchase strategies and deploy them at your own discretion
                    with full control over execution.
                  </p>
                  <p>
                    <strong className="text-foreground">Capital Requirement:</strong> Returns are percentage-based. Your
                    absolute profit depends on your invested capital. Higher-tier plans (Annual/Custom) are designed for
                    traders with larger capital (₹5L+) to maximize potential returns relative to subscription costs.
                  </p>
                  <p>
                    Trading in derivatives involves substantial risk and may not be suitable for all investors. Past
                    performance does not guarantee future results. Please consult a qualified financial advisor before
                    making investment decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              <Link href="/pricing">
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Strategy Plans & Purchase
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Purchase automated strategies • No tips or advisory • Full control over execution
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AnalyticsPage
