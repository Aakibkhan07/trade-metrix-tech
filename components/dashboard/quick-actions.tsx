import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, FileText, MessageCircle, HelpCircle, Settings, Layers, Code2, BarChart3, History } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    { icon: History, label: "Backtesting", href: "/dashboard/backtest", highlight: true },
    { icon: Layers, label: "Option Chain", href: "/dashboard/option-chain", highlight: true },
    { icon: Code2, label: "Strategy Builder", href: "/dashboard/strategy-builder", highlight: true },
    { icon: Bell, label: "View All Alerts", href: "/dashboard/alerts" },
    { icon: FileText, label: "Performance Report", href: "/dashboard/reports" },
    { icon: MessageCircle, label: "Contact Support", href: "/contact" },
    { icon: HelpCircle, label: "Help & FAQ", href: "/contact" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <Card className="glass glow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-purple-400 icon-glow" />
          </div>
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full justify-start transition-all ${
              action.highlight
                ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 hover:from-purple-500/20 hover:to-blue-500/20"
                : "hover:bg-purple-500/10"
            }`}
            asChild
          >
            <Link href={action.href}>
              <action.icon className={`mr-3 h-4 w-4 ${action.highlight ? "text-purple-400 icon-glow" : ""}`} />
              {action.label}
              {action.highlight && (
                <span className="ml-auto text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">New</span>
              )}
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
