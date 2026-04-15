"use client"

import { Bot, Cpu, FlaskConical, PlayCircle, Gauge, Link2, Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const algoTopics = [
  {
    icon: Bot,
    title: "What is Algo Trading?",
    description:
      "Algorithmic trading uses computer programs to execute trades based on predefined rules and conditions. It removes emotional decision-making, enables faster execution, and can process multiple markets simultaneously.",
    color: "purple",
  },
  {
    icon: Cpu,
    title: "Strategy Logic",
    description:
      "A trading strategy consists of entry conditions (when to buy/sell), exit conditions (profit targets, stop losses), position sizing rules, and risk management parameters. Logic can be based on technical indicators, price patterns, or statistical models.",
    color: "blue",
  },
  {
    icon: FlaskConical,
    title: "Backtesting",
    description:
      "Backtesting involves testing a strategy against historical data to evaluate its performance. Key metrics include win rate, profit factor, maximum drawdown, Sharpe ratio, and consistency across different market conditions.",
    color: "purple",
  },
  {
    icon: PlayCircle,
    title: "Paper Trading",
    description:
      "Paper trading (simulation) allows you to test strategies in real-time market conditions without risking real money. Essential step before live deployment to validate strategy behavior in current market conditions.",
    color: "blue",
  },
  {
    icon: Gauge,
    title: "Execution Speed",
    description:
      "Speed matters in algo trading. Factors include API latency, broker server location, network speed, and code optimization. Trade Metrix Technologies uses co-located servers for minimal execution delays.",
    color: "purple",
  },
  {
    icon: Link2,
    title: "Broker API Integration",
    description:
      "APIs allow programmatic access to broker platforms for placing orders, fetching data, and managing positions. Each broker has unique API specifications. Trade Metrix Technologies handles all broker integrations seamlessly.",
    color: "blue",
  },
]

export function AlgoBasics() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 mb-4 animate-pulse-glow">
            <Sparkles className="h-4 w-4 icon-glow-blue" />
            <span>Core Concepts</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Algo Trading <span className="text-gradient">Fundamentals</span>
          </h2>
          <p className="text-muted-foreground">Understanding the building blocks of algorithmic trading</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {algoTopics.map((topic, i) => (
            <Card
              key={topic.title}
              className="border-border/50 glass hover-scale animate-float"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div
                  className={`mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${topic.color === "purple" ? "from-purple-500/20 to-purple-600/20" : "from-blue-500/20 to-blue-600/20"} animate-pulse-glow`}
                >
                  <topic.icon
                    className={`h-6 w-6 ${topic.color === "purple" ? "text-purple-400 icon-glow" : "text-blue-400 icon-glow-blue"}`}
                  />
                </div>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{topic.description}</CardDescription>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                  <TrendingUp className={`h-4 w-4 ${topic.color === "purple" ? "text-purple-400" : "text-blue-400"}`} />
                  <div className="flex-1 h-1 rounded-full bg-secondary overflow-hidden">
                    <div
                      className={`h-full rounded-full ${topic.color === "purple" ? "bg-gradient-to-r from-purple-500 to-purple-400" : "bg-gradient-to-r from-blue-500 to-blue-400"}`}
                      style={{ width: `${60 + i * 8}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
