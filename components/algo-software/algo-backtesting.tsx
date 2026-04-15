import { FlaskConical, BarChart3, Clock, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const backtestFeatures = [
  {
    icon: Clock,
    title: "Historical Data",
    description: "5+ years of tick-by-tick historical data for accurate backtesting across NSE and BSE instruments.",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Comprehensive metrics including Sharpe ratio, max drawdown, win rate, profit factor, and more.",
  },
  {
    icon: Target,
    title: "Walk-Forward Analysis",
    description: "Out-of-sample testing to validate strategy robustness across different market conditions.",
  },
  {
    icon: FlaskConical,
    title: "Optimization Engine",
    description: "Parameter optimization to find optimal strategy settings without overfitting.",
  },
]

export function AlgoBacktesting() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Backtesting Engine
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Test Before You Trade</h2>
          <p className="text-muted-foreground">
            Validate your strategies against historical data before deploying real capital
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {backtestFeatures.map((feature) => (
            <Card key={feature.title} className="border-border/50">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sample Backtest Results */}
        <Card className="mx-auto mt-8 max-w-4xl border-border/50">
          <CardContent className="p-6">
            <h4 className="mb-4 font-semibold">Sample Backtest Report</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Total Returns", value: "+127.4%", note: "2 Year Period" },
                { label: "Win Rate", value: "72.3%", note: "486 Trades" },
                { label: "Max Drawdown", value: "-8.2%", note: "Controlled Risk" },
                { label: "Sharpe Ratio", value: "2.14", note: "Risk-Adjusted" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-muted/30 p-4 text-center">
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.note}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground text-center">
              * Sample data for illustration. Actual results will vary. Past performance does not guarantee future
              results.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
