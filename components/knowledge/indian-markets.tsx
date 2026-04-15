"use client"

import { Building2, BarChart3, TrendingUp, Clock, Sparkles, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const markets = [
  {
    icon: Building2,
    title: "National Stock Exchange (NSE)",
    description:
      "India's leading stock exchange by trading volume, headquartered in Mumbai. Established in 1992, NSE introduced electronic trading in India and is home to the benchmark Nifty 50 index.",
    facts: [
      "Largest derivatives exchange in India",
      "Over 2,000 listed companies",
      "Fully automated electronic trading",
    ],
    color: "purple",
  },
  {
    icon: Building2,
    title: "Bombay Stock Exchange (BSE)",
    description:
      "Asia's oldest stock exchange, established in 1875. Located in Mumbai, BSE is home to the Sensex index and lists over 5,500 companies, making it one of the world's largest exchanges by listed companies.",
    facts: ["Oldest stock exchange in Asia", "Home to Sensex (S&P BSE Sensex)", "Over 5,500 listed companies"],
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Nifty 50 Index",
    description:
      "The benchmark index of NSE comprising 50 largest and most liquid Indian companies across 12 sectors. Represents approximately 65% of total market capitalization of NSE.",
    facts: ["Top 50 companies by market cap", "Covers 12 economic sectors", "Most traded index derivatives"],
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Bank Nifty Index",
    description:
      "A sectoral index comprising 12 most liquid and large capitalized banking stocks. Popular among traders for its volatility and active derivatives market.",
    facts: ["12 major banking stocks", "High liquidity and volatility", "Active weekly options market"],
    color: "blue",
  },
]

export function IndianMarkets() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400 mb-4 animate-pulse-glow">
            <Sparkles className="h-4 w-4 icon-glow" />
            <span>Stock Exchanges</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Indian <span className="text-gradient">Stock Exchanges</span>
          </h2>
          <p className="text-muted-foreground">Understanding the major exchanges and indices in Indian markets</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {markets.map((market, i) => (
            <Card
              key={market.title}
              className="border-border/50 glass hover-scale animate-float"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <CardHeader>
                <div
                  className={`mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${market.color === "purple" ? "from-purple-500/20 to-purple-600/20" : "from-blue-500/20 to-blue-600/20"} animate-pulse-glow`}
                >
                  <market.icon
                    className={`h-6 w-6 ${market.color === "purple" ? "text-purple-400 icon-glow" : "text-blue-400 icon-glow-blue"}`}
                  />
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  {market.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{market.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {market.facts.map((fact) => (
                    <li key={fact} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div
                        className={`h-2 w-2 rounded-full ${market.color === "purple" ? "bg-purple-500" : "bg-blue-500"} animate-pulse`}
                      />
                      {fact}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end gap-1 h-10 mt-4 pt-4 border-t border-border/50">
                  {[40, 55, 35, 70, 50, 85, 60, 75, 45, 90].map((h, j) => (
                    <div
                      key={j}
                      className={`flex-1 rounded-t ${market.color === "purple" ? "bg-purple-500/30" : "bg-blue-500/30"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Hours */}
        <Card className="mt-8 border-border/50 glass glow">
          <CardContent className="flex flex-col items-center gap-4 p-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
                <Clock className="h-6 w-6 text-purple-400 icon-glow" />
              </div>
              <div>
                <h3 className="font-semibold text-gradient">Market Hours (IST)</h3>
                <p className="text-sm text-muted-foreground">Monday to Friday</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:justify-end">
              {[
                { label: "Pre-Open", time: "9:00 - 9:15" },
                { label: "Regular", time: "9:15 - 15:30" },
                { label: "Post-Close", time: "15:40 - 16:00" },
              ].map((session, i) => (
                <div
                  key={session.label}
                  className="rounded-lg border border-border bg-secondary/30 px-4 py-2 text-center hover-scale"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-xs text-muted-foreground">{session.label}</div>
                  <div className="font-semibold text-foreground">{session.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
