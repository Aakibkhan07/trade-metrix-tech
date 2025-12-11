import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, DollarSign, BarChart3, Zap } from "lucide-react"

export function AlgoDashboardPreview() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Dashboard Preview
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Intuitive Trading Dashboard</h2>
          <p className="text-muted-foreground">Monitor your strategies, positions, and performance in real-time</p>
        </div>

        {/* Simulated Dashboard */}
        <Card className="mx-auto max-w-5xl overflow-hidden border-border/50">
          <CardContent className="p-0">
            <div className="bg-background p-6">
              {/* Dashboard Header */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">TradeMetrix Dashboard</h3>
                    <p className="text-xs text-muted-foreground">Live Trading Mode</p>
                  </div>
                </div>
                <Badge className="bg-success/10 text-success">Connected</Badge>
              </div>

              {/* Stats Row */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="border-border/50 bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Today's P&L</div>
                      <DollarSign className="h-4 w-4 text-success" />
                    </div>
                    <div className="mt-1 text-2xl font-bold text-success">+₹12,450</div>
                    <div className="text-xs text-muted-foreground">+2.4% from capital</div>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Active Strategies</div>
                      <Zap className="h-4 w-4 text-accent" />
                    </div>
                    <div className="mt-1 text-2xl font-bold">5/8</div>
                    <div className="text-xs text-muted-foreground">Running smoothly</div>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Win Rate</div>
                      <BarChart3 className="h-4 w-4 text-accent" />
                    </div>
                    <div className="mt-1 text-2xl font-bold">78%</div>
                    <div className="text-xs text-muted-foreground">Last 30 days</div>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Open Positions</div>
                      <Activity className="h-4 w-4 text-accent" />
                    </div>
                    <div className="mt-1 text-2xl font-bold">3</div>
                    <div className="text-xs text-muted-foreground">Nifty, BankNifty</div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Trades */}
              <Card className="border-border/50">
                <CardContent className="p-4">
                  <h4 className="mb-3 font-semibold">Recent Trades</h4>
                  <div className="space-y-2">
                    {[
                      {
                        symbol: "NIFTY 24500 CE",
                        type: "BUY",
                        price: "₹145.50",
                        status: "Executed",
                        profit: "+₹3,200",
                      },
                      {
                        symbol: "BANKNIFTY 52000 PE",
                        type: "SELL",
                        price: "₹280.00",
                        status: "Executed",
                        profit: "+₹5,600",
                      },
                      { symbol: "NIFTY 24400 PE", type: "BUY", price: "₹98.25", status: "Pending", profit: "-" },
                    ].map((trade, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg bg-muted/30 p-3 text-sm">
                        <div className="flex items-center gap-3">
                          {trade.type === "BUY" ? (
                            <TrendingUp className="h-4 w-4 text-success" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-destructive" />
                          )}
                          <div>
                            <div className="font-medium">{trade.symbol}</div>
                            <div className="text-xs text-muted-foreground">
                              {trade.type} @ {trade.price}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={
                              trade.profit.startsWith("+") ? "text-success font-medium" : "text-muted-foreground"
                            }
                          >
                            {trade.profit}
                          </div>
                          <div className="text-xs text-muted-foreground">{trade.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          * Dashboard preview for illustration purposes. Actual interface may vary. Data shown is simulated.
        </p>
      </div>
    </section>
  )
}
