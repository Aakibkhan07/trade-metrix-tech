"use client"

import { Users, Layers, TrendingUp, Building } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    description: "Traders trust TradeMetrix",
    color: "from-purple-500 to-purple-600",
    chartData: [40, 50, 55, 60, 70, 75, 85, 90],
  },
  {
    icon: Layers,
    value: "50+",
    label: "Trading Strategies",
    description: "Pre-built and tested",
    color: "from-blue-500 to-blue-600",
    chartData: [30, 35, 42, 45, 48, 50, 52, 55],
  },
  {
    icon: TrendingUp,
    value: "70-88%",
    label: "Accuracy Range*",
    description: "Historical performance",
    color: "from-indigo-500 to-indigo-600",
    chartData: [60, 65, 70, 72, 75, 78, 82, 88],
  },
  {
    icon: Building,
    value: "20+",
    label: "Broker Integrations",
    description: "Seamless connectivity",
    color: "from-violet-500 to-violet-600",
    chartData: [5, 8, 10, 12, 15, 17, 19, 22],
  },
]

export function AboutStats() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group flex flex-col items-center text-center">
              <div
                className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} transition-transform group-hover:scale-110`}
              >
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-xs text-muted-foreground mb-3">{stat.description}</div>

              <div className="w-full max-w-[120px] h-8 flex items-end gap-0.5">
                {stat.chartData.map((value, i) => (
                  <div
                    key={i}
                    className={`flex-1 bg-gradient-to-t ${stat.color} rounded-t opacity-40 group-hover:opacity-70 transition-opacity`}
                    style={{ height: `${(value / Math.max(...stat.chartData)) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          * Accuracy is indicative based on historical performance. Markets are subject to risk and returns are not
          guaranteed.
        </p>
      </div>
    </section>
  )
}
