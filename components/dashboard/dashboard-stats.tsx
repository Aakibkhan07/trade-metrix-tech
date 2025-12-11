"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Target, BarChart3, Activity } from "lucide-react"

interface DashboardStatsProps {
  plan: string
}

export function DashboardStats({ plan }: DashboardStatsProps) {
  const getAccuracy = (planType: string) => {
    switch (planType) {
      case "monthly":
        return "70-75%"
      case "quarterly":
        return "75-80%"
      case "half-yearly":
        return "80-85%"
      case "yearly":
      case "customized":
        return "88%+"
      default:
        return "70-75%"
    }
  }

  const stats = [
    {
      title: "Plan Accuracy",
      value: getAccuracy(plan),
      description: "Expected accuracy range",
      icon: Target,
      trend: "up",
      color: "from-purple-500 to-purple-600",
      sparkline: [30, 45, 40, 60, 55, 70, 65, 75],
    },
    {
      title: "Active Alerts",
      value: "12",
      description: "Open trading signals",
      icon: Activity,
      trend: "up",
      color: "from-blue-500 to-blue-600",
      sparkline: [20, 35, 45, 40, 55, 50, 60, 55],
    },
    {
      title: "Closed Trades",
      value: "45",
      description: "This month",
      icon: BarChart3,
      trend: "up",
      color: "from-indigo-500 to-indigo-600",
      sparkline: [25, 40, 35, 50, 45, 60, 55, 65],
    },
    {
      title: "Success Rate",
      value: "78%",
      description: "Last 30 days",
      icon: TrendingUp,
      trend: "up",
      color: "from-violet-500 to-violet-600",
      sparkline: [40, 55, 50, 65, 60, 75, 70, 78],
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="group overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${stat.color} transition-transform group-hover:scale-110`}
            >
              <stat.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              {stat.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-success" />
              ) : (
                <TrendingDown className="h-3 w-3 text-destructive" />
              )}
              {stat.description}
            </p>

            <div className="mt-3 flex items-end gap-0.5 h-8">
              {stat.sparkline.map((value, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-gradient-to-t ${stat.color} rounded-t opacity-40 group-hover:opacity-70 transition-opacity`}
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
