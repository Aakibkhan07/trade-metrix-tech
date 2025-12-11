import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      type: "BUY",
      symbol: "RELIANCE",
      price: "2,450.50",
      target: "2,520.00",
      stopLoss: "2,410.00",
      time: "10:30 AM",
      status: "active",
    },
    {
      id: 2,
      type: "SELL",
      symbol: "TCS",
      price: "3,890.00",
      target: "3,800.00",
      stopLoss: "3,940.00",
      time: "11:15 AM",
      status: "active",
    },
    {
      id: 3,
      type: "BUY",
      symbol: "INFY",
      price: "1,520.25",
      target: "1,580.00",
      stopLoss: "1,490.00",
      time: "Yesterday",
      status: "hit-target",
    },
    {
      id: 4,
      type: "BUY",
      symbol: "HDFC BANK",
      price: "1,650.00",
      target: "1,700.00",
      stopLoss: "1,620.00",
      time: "Yesterday",
      status: "active",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Trading Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    alert.type === "BUY" ? "bg-success/10" : "bg-destructive/10"
                  }`}
                >
                  {alert.type === "BUY" ? (
                    <ArrowUpRight className="h-5 w-5 text-success" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5 text-destructive" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{alert.symbol}</span>
                    <Badge variant={alert.type === "BUY" ? "default" : "destructive"} className="text-xs">
                      {alert.type}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Entry: ₹{alert.price} | Target: ₹{alert.target}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant={alert.status === "hit-target" ? "default" : "secondary"} className="text-xs">
                  {alert.status === "hit-target" ? "Target Hit" : "Active"}
                </Badge>
                <div className="mt-1 text-xs text-muted-foreground">{alert.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
