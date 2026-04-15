"use client"

import {
  Zap,
  MousePointerClick,
  Shield,
  TrendingUp,
  GitBranch,
  FlaskConical,
  Cloud,
  BarChart3,
  Target,
  Layers,
  RefreshCw,
  Lock,
  Activity,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Real-Time Signals",
    description:
      "Get instant trading signals with sub-second latency. Our system analyzes market data continuously to identify opportunities as they arise.",
    color: "from-purple-500 to-purple-600",
    chartData: [40, 55, 45, 70, 60, 80, 70, 85],
  },
  {
    icon: MousePointerClick,
    title: "One-Click Execution",
    description:
      "Execute trades instantly with a single click. No manual order entry, no delays - just seamless automated execution.",
    color: "from-blue-500 to-blue-600",
    chartData: [50, 60, 55, 75, 65, 85, 75, 90],
  },
  {
    icon: Shield,
    title: "Smart Stoploss",
    description:
      "Intelligent stoploss placement based on volatility, support levels, and risk parameters. Protect your capital automatically.",
    color: "from-indigo-500 to-indigo-600",
    chartData: [60, 55, 65, 60, 70, 65, 75, 70],
  },
  {
    icon: TrendingUp,
    title: "Trailing SL",
    description:
      "Dynamic trailing stoploss that moves with profitable trades. Lock in gains while letting winners run further.",
    color: "from-violet-500 to-violet-600",
    chartData: [35, 50, 45, 65, 55, 75, 70, 85],
  },
  {
    icon: GitBranch,
    title: "Auto Hedging",
    description:
      "Automatic position hedging to manage risk exposure. Balance your portfolio with algorithmic precision.",
    color: "from-purple-600 to-blue-500",
    chartData: [45, 55, 50, 60, 55, 65, 60, 70],
  },
  {
    icon: FlaskConical,
    title: "Strategy Builder",
    description:
      "Create custom strategies without coding. Visual builder with drag-and-drop indicators and conditions.",
    color: "from-blue-600 to-indigo-500",
    chartData: [30, 45, 55, 50, 65, 60, 75, 80],
  },
  {
    icon: BarChart3,
    title: "Backtesting Engine",
    description: "Test strategies against historical data. Analyze performance metrics before deploying real capital.",
    color: "from-indigo-600 to-violet-500",
    chartData: [40, 60, 50, 70, 55, 75, 65, 85],
  },
  {
    icon: Cloud,
    title: "Cloud System",
    description:
      "100% cloud-based infrastructure. No software installation required - access from any device, anywhere.",
    color: "from-violet-600 to-purple-500",
    chartData: [55, 60, 65, 70, 75, 80, 85, 90],
  },
  {
    icon: Target,
    title: "Target Management",
    description: "Automated target booking with partial profit taking. Scale out of positions systematically.",
    color: "from-purple-500 to-blue-500",
    chartData: [45, 55, 60, 65, 70, 75, 80, 85],
  },
  {
    icon: Layers,
    title: "Multi-Strategy",
    description: "Run multiple strategies simultaneously. Diversify across instruments, timeframes, and approaches.",
    color: "from-blue-500 to-indigo-500",
    chartData: [35, 50, 45, 60, 55, 70, 65, 80],
  },
  {
    icon: RefreshCw,
    title: "Auto Re-Entry",
    description:
      "Intelligent re-entry logic after stoploss hits. Capitalize on trends that continue despite initial volatility.",
    color: "from-indigo-500 to-violet-500",
    chartData: [40, 35, 50, 45, 60, 55, 70, 75],
  },
  {
    icon: Lock,
    title: "Risk Controls",
    description: "Daily loss limits, position sizing rules, and exposure caps. Comprehensive risk management built-in.",
    color: "from-violet-500 to-purple-500",
    chartData: [70, 65, 75, 70, 80, 75, 85, 80],
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Complete Trading Toolkit</h2>
          <p className="text-muted-foreground">
            Everything you need for professional algorithmic trading in one platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/50 bg-card/50 backdrop-blur transition-all hover:border-accent/30 hover:shadow-lg overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div
                  className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} transition-transform group-hover:scale-110`}
                >
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">{feature.description}</CardDescription>

                <div className="h-10 flex items-end gap-0.5 pt-3 border-t border-border/50">
                  {feature.chartData.map((value, i) => (
                    <div
                      key={i}
                      className={`flex-1 bg-gradient-to-t ${feature.color} rounded-t opacity-30 group-hover:opacity-60 transition-all`}
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-end mt-2">
                  <span className="flex items-center gap-1 text-xs text-accent">
                    <Activity className="h-3 w-3" />
                    Active
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
