"use client"

import { LayoutDashboard, TrendingUp, Bell, Activity, PieChart, LineChart, Wallet, Shield, Zap } from "lucide-react"

export function DashboardArchitecture() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="glass rounded-2xl p-6 glow">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Activity className="h-5 w-5 text-purple-400 icon-glow" />
            <span className="text-gradient">Dashboard Overview</span>
          </h3>

          {/* Dashboard Modules Flow */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: LayoutDashboard, name: "Overview", status: "Active", color: "purple" },
              { icon: TrendingUp, name: "Positions", status: "Live", color: "blue" },
              { icon: PieChart, name: "Portfolio", status: "Synced", color: "purple" },
              { icon: LineChart, name: "Analytics", status: "Updated", color: "blue" },
              { icon: Bell, name: "Alerts", status: "3 New", color: "purple" },
            ].map((module, i) => (
              <div
                key={module.name}
                className="glass rounded-xl p-4 hover-scale animate-float text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`h-12 w-12 mx-auto rounded-lg bg-gradient-to-br ${module.color === "purple" ? "from-purple-500/20 to-purple-600/20" : "from-blue-500/20 to-blue-600/20"} flex items-center justify-center mb-3 animate-pulse-glow`}
                >
                  <module.icon
                    className={`h-6 w-6 ${module.color === "purple" ? "text-purple-400 icon-glow" : "text-blue-400 icon-glow-blue"}`}
                  />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{module.name}</h4>
                <span className={`text-xs ${module.status.includes("New") ? "text-yellow-400" : "text-green-400"}`}>
                  {module.status}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { icon: Wallet, label: "Balance", value: "₹2,45,000", change: "+12%" },
              { icon: Shield, label: "Risk Score", value: "Low", change: "Safe" },
              { icon: Zap, label: "Active Trades", value: "7", change: "Running" },
            ].map((stat, i) => (
              <div key={stat.label} className="glass rounded-lg p-4 hover-scale">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="h-4 w-4 text-purple-400 icon-glow" />
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-green-400">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
