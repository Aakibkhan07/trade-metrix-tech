"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  TrendingUp,
  Layers,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Shield,
  Bot,
  Gauge,
  ScanLine,
  BrainCircuit,
  Radar,
  Clock,
  Lock,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const tradingTools = [
  {
    name: "OI Scanner Pro",
    description: "Real-time Open Interest analysis with PCR tracking & strike-wise buildup detection",
    icon: Layers,
    color: "from-emerald-500 to-green-500",
    features: ["Live OI Tracking", "PCR Analysis", "Strike Buildup"],
    capability: "Identifies high-probability setups based on OI data",
    included: "all",
  },
  {
    name: "Strategy Screener",
    description: "AI-powered screener to filter and identify optimal option strategies in real-time",
    icon: ScanLine,
    color: "from-blue-500 to-cyan-500",
    features: ["Multi-leg Screening", "Risk Filters", "Profit Probability"],
    capability: "Scans 1000+ strategy combinations per second",
    popular: true,
    included: "all",
  },
  {
    name: "IV Analyzer",
    description: "Implied Volatility analysis with IV percentile, IV rank & volatility skew charts",
    icon: BarChart3,
    color: "from-orange-500 to-amber-500",
    features: ["IV Percentile", "Volatility Skew", "Historical IV"],
    capability: "Detects IV crush & expansion opportunities",
    included: "quarterly",
  },
  {
    name: "Greeks Dashboard",
    description: "Complete options Greeks monitoring with Delta, Gamma, Theta & Vega tracking",
    icon: Gauge,
    color: "from-purple-500 to-violet-500",
    features: ["Delta Neutral", "Gamma Scalping", "Theta Decay"],
    capability: "Real-time Greeks adjustments for active positions",
    popular: true,
    included: "quarterly",
  },
  {
    name: "Payoff Visualizer",
    description: "Interactive payoff diagrams with profit zones, breakeven & max loss visualization",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-500",
    features: ["3D Payoff Charts", "Breakeven Analysis", "Risk Zones"],
    capability: "Visualize strategy outcomes before execution",
    included: "all",
  },
  {
    name: "Market Pulse AI",
    description: "AI-driven market sentiment analysis with institutional flow & FII/DII tracking",
    icon: BrainCircuit,
    color: "from-cyan-500 to-teal-500",
    features: ["Sentiment Score", "Flow Analysis", "FII/DII Data"],
    capability: "Predicts market direction with ML models",
    included: "halfyearly",
  },
  {
    name: "Signal Radar",
    description: "Real-time entry/exit signals with automated alerts & Telegram notifications",
    icon: Radar,
    color: "from-red-500 to-orange-500",
    features: ["Live Signals", "Auto Alerts", "Telegram Push"],
    capability: "Never miss a trade opportunity",
    popular: true,
    included: "all",
  },
  {
    name: "Backtest Engine",
    description: "Historical strategy backtesting with detailed P&L reports & drawdown analysis",
    icon: Clock,
    color: "from-indigo-500 to-blue-500",
    features: ["5 Year Data", "Custom Params", "Monte Carlo"],
    capability: "Test strategies before deploying capital",
    included: "halfyearly",
  },
]

const platformAdvantages = [
  {
    icon: Bot,
    title: "Fully Automated",
    description: "All tools integrated with auto-execution - no manual intervention",
  },
  {
    icon: Shield,
    title: "Risk Controls",
    description: "Built-in stop-loss, position sizing & capital protection",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second signal generation & order execution",
  },
]

const planInclusions = {
  all: "All Plans",
  quarterly: "Quarterly+",
  halfyearly: "Half-Yearly+",
  yearly: "Yearly Only",
}

export function TradingToolsSection() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">
            <Zap className="w-3 h-3 mr-1" />
            Built-In Arsenal
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools That{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Think For You
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every tool you need, built into one platform. Scan, analyze, execute — all without leaving Trade Metrix.
          </p>
        </motion.div>

        {/* Platform Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-primary/30 bg-gradient-to-r from-primary/10 via-background to-cyan-500/10">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {platformAdvantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tradingTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <Card
                className={`group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 h-full ${hoveredTool === tool.name ? "shadow-lg shadow-primary/10" : ""}`}
              >
                {/* Badges */}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-1 items-end">
                  {tool.popular && (
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <Badge
                    variant="outline"
                    className={`text-xs ${tool.included === "all" ? "border-green-500/50 text-green-400" : "border-amber-500/50 text-amber-400"}`}
                  >
                    {tool.included !== "all" && <Lock className="w-3 h-3 mr-1" />}
                    {planInclusions[tool.included as keyof typeof planInclusions]}
                  </Badge>
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <CardContent className="p-5">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tool.description}</p>

                  {/* Capability highlight */}
                  <div className="flex items-start gap-2 mb-4 p-2 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">{tool.capability}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {tool.features.map((feature) => (
                      <span key={feature} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="border-primary/30 bg-gradient-to-r from-primary/5 via-background to-cyan-500/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Get Access to All Tools</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Subscribe to any plan and unlock our complete analysis suite. Higher plans include advanced tools like
                IV Analyzer, Market Pulse AI & Backtest Engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/pricing">
                    View Plans & Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/algo-software">
                    Explore Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto"
        >
          * All tools are proprietary to Trade Metrix Technologies. We provide automated trading strategies - not tips
          or advisory services. Strategy performance depends on market conditions and capital deployed.
        </motion.p>
      </div>
    </section>
  )
}
