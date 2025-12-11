import { Shield, AlertTriangle, Target, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const riskTopics = [
  {
    icon: Shield,
    title: "Position Sizing",
    description:
      "Never risk more than 1-2% of your capital on a single trade. Calculate position size based on stop loss distance and risk tolerance. Proper sizing prevents catastrophic losses.",
  },
  {
    icon: AlertTriangle,
    title: "Drawdown Management",
    description:
      "Maximum drawdown is the largest peak-to-trough decline. Set daily loss limits (e.g., 3-5%) and weekly limits. Stop trading if limits are breached to prevent emotional decisions.",
  },
  {
    icon: Target,
    title: "Risk-Reward Ratio",
    description:
      "Aim for minimum 1:2 risk-reward ratio. If risking ₹1000 per trade, target should be at least ₹2000. Higher ratios allow profitability even with lower win rates.",
  },
  {
    icon: BarChart,
    title: "Diversification",
    description:
      "Don't put all capital in one strategy or instrument. Diversify across strategies, timeframes, and instruments to reduce correlation and overall portfolio risk.",
  },
]

export function AlgoRiskManagement() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Risk Management in Algo Trading</h2>
          <p className="text-muted-foreground">Essential risk management principles for algorithmic traders</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {riskTopics.map((topic) => (
            <Card key={topic.title} className="border-border/50">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <topic.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{topic.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
