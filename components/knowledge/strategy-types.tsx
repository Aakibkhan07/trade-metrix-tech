import { TrendingUp, ArrowLeftRight, Zap, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const strategies = [
  {
    icon: TrendingUp,
    title: "Trend Following",
    description:
      "Identifies and follows market trends using moving averages, MACD, or ADX. Buys in uptrends, sells in downtrends. Works best in trending markets but may suffer in sideways conditions.",
    examples: ["Moving Average Crossover", "Breakout Trading", "Momentum Strategies"],
    risk: "Medium",
  },
  {
    icon: ArrowLeftRight,
    title: "Mean Reversion",
    description:
      "Assumes prices revert to their historical average. Buys oversold conditions, sells overbought. Uses indicators like RSI, Bollinger Bands. Works in range-bound markets.",
    examples: ["RSI Oversold/Overbought", "Bollinger Band Bounce", "Statistical Arbitrage"],
    risk: "Medium-High",
  },
  {
    icon: Zap,
    title: "Breakout Strategies",
    description:
      "Enters trades when price breaks key support/resistance levels. Captures large moves at the start of new trends. Requires good volatility filters to avoid false breakouts.",
    examples: ["Range Breakout", "Opening Range Breakout", "Volatility Breakout"],
    risk: "High",
  },
  {
    icon: Layers,
    title: "Options Strategies",
    description:
      "Uses options for hedging, income generation, or directional bets. Includes spreads, straddles, and iron condors. Requires understanding of Greeks (Delta, Theta, Vega, Gamma).",
    examples: ["Iron Condor", "Bull Call Spread", "Straddle/Strangle"],
    risk: "Variable",
  },
]

export function StrategyTypes() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Types of Trading Strategies</h2>
          <p className="text-muted-foreground">Common algorithmic trading approaches and when to use them</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {strategies.map((strategy) => (
            <Card key={strategy.title} className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <strategy.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline">Risk: {strategy.risk}</Badge>
                </div>
                <CardTitle className="text-xl">{strategy.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm font-medium">Examples:</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.examples.map((example) => (
                    <Badge key={example} variant="secondary" className="text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
