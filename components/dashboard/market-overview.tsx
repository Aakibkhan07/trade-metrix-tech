"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity, BarChart3, LineChart, PieChart } from "lucide-react"

export function MarketOverview() {
  const indices = [
    {
      name: "NIFTY 50",
      value: "22,456.80",
      change: "+0.45%",
      isUp: true,
      icon: LineChart,
      chartData: [45, 52, 48, 55, 50, 58, 54, 60, 56, 62],
    },
    {
      name: "BANK NIFTY",
      value: "47,234.50",
      change: "-0.32%",
      isUp: false,
      icon: BarChart3,
      chartData: [55, 52, 58, 54, 50, 53, 48, 52, 46, 48],
    },
    {
      name: "SENSEX",
      value: "73,890.25",
      change: "+0.38%",
      isUp: true,
      icon: Activity,
      chartData: [42, 48, 45, 52, 50, 55, 52, 58, 55, 60],
    },
    {
      name: "NIFTY IT",
      value: "34,567.90",
      change: "+1.24%",
      isUp: true,
      icon: PieChart,
      chartData: [40, 48, 55, 52, 60, 58, 65, 62, 70, 75],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5 text-accent" />
          Market Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {indices.map((index, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-lg border border-border p-4 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <index.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{index.name}</div>
                    <div className="text-lg font-semibold">{index.value}</div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${index.isUp ? "text-success" : "text-destructive"}`}>
                  {index.isUp ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="font-medium">{index.change}</span>
                </div>
              </div>

              <div className="h-12 flex items-end gap-0.5">
                {index.chartData.map((value, j) => (
                  <div
                    key={j}
                    className={`flex-1 rounded-t transition-all ${
                      index.isUp
                        ? "bg-gradient-to-t from-purple-500/30 to-blue-500/50 group-hover:from-purple-500/50 group-hover:to-blue-500/70"
                        : "bg-gradient-to-t from-red-500/30 to-orange-500/50 group-hover:from-red-500/50 group-hover:to-orange-500/70"
                    }`}
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
