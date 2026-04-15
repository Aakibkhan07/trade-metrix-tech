"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Briefcase, TrendingUp, TrendingDown, X, History, Target, IndianRupee, Percent, RefreshCw } from "lucide-react"
import { portfolioStore, type Position } from "@/lib/portfolio-store"

interface PositionsTableProps {
  refreshTrigger?: number
}

export function PositionsTable({ refreshTrigger }: PositionsTableProps) {
  const [positions, setPositions] = useState<Position[]>([])
  const [prices, setPrices] = useState<Record<string, number>>({})
  const [summary, setSummary] = useState(portfolioStore.getSummary())

  const loadData = () => {
    const portfolio = portfolioStore.getPortfolio()
    setPositions(portfolio.positions)
    setPrices(portfolioStore.getAllPrices())
    setSummary(portfolioStore.getSummary())
  }

  useEffect(() => {
    loadData()

    // Update every second
    const interval = setInterval(() => {
      loadData()
    }, 1000)

    return () => clearInterval(interval)
  }, [refreshTrigger])

  const handleClosePosition = (positionId: string) => {
    const result = portfolioStore.closePosition(positionId)
    if (result.success) {
      loadData()
    }
  }

  const handleResetPortfolio = () => {
    if (confirm("Are you sure you want to reset your portfolio? All positions will be closed.")) {
      portfolioStore.resetPortfolio()
      loadData()
    }
  }

  const openPositions = positions.filter((p) => p.status === "OPEN")
  const closedPositions = positions.filter((p) => p.status === "CLOSED")

  const calculatePnl = (position: Position) => {
    const currentPrice = prices[position.symbol] || position.currentPrice
    if (position.type === "BUY") {
      return (currentPrice - position.avgPrice) * position.quantity
    } else {
      return (position.avgPrice - currentPrice) * position.quantity
    }
  }

  const calculatePnlPercent = (position: Position) => {
    const pnl = calculatePnl(position)
    return (pnl / (position.avgPrice * position.quantity)) * 100
  }

  return (
    <Card className="glass glow border-purple-500/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
              <Briefcase className="h-5 w-5 text-purple-400 icon-glow" />
            </div>
            <div>
              <span className="block text-lg">Positions</span>
              <span className="text-xs font-normal text-muted-foreground">
                {openPositions.length} Open | {closedPositions.length} Closed
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetPortfolio}
            className="border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
              <IndianRupee className="h-3 w-3" />
              Balance
            </div>
            <p className="text-lg font-bold text-gradient font-mono">
              ₹{summary.virtualBalance.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
              <Target className="h-3 w-3" />
              Unrealized P&L
            </div>
            <p
              className={`text-lg font-bold font-mono ${summary.unrealizedPnl >= 0 ? "text-green-400" : "text-red-400"}`}
            >
              {summary.unrealizedPnl >= 0 ? "+" : ""}₹
              {summary.unrealizedPnl.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
              <TrendingUp className="h-3 w-3" />
              Realized P&L
            </div>
            <p
              className={`text-lg font-bold font-mono ${summary.realizedPnl >= 0 ? "text-green-400" : "text-red-400"}`}
            >
              {summary.realizedPnl >= 0 ? "+" : ""}₹
              {summary.realizedPnl.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
              <Percent className="h-3 w-3" />
              Win Rate
            </div>
            <p className="text-lg font-bold font-mono text-blue-400">{summary.winRate.toFixed(1)}%</p>
          </div>
        </div>

        {/* Positions Tabs */}
        <Tabs defaultValue="open" className="w-full">
          <TabsList className="glass w-full grid grid-cols-2">
            <TabsTrigger
              value="open"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
            >
              <Target className="h-4 w-4 mr-1" />
              Open ({openPositions.length})
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
            >
              <History className="h-4 w-4 mr-1" />
              History ({closedPositions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="open" className="mt-4">
            {openPositions.length === 0 ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-muted-foreground opacity-50" />
                </div>
                <p className="text-muted-foreground">No open positions</p>
                <p className="text-xs text-muted-foreground mt-1">Place a trade to get started</p>
              </div>
            ) : (
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-background/50 hover:bg-background/50">
                      <TableHead className="text-xs">Symbol</TableHead>
                      <TableHead className="text-xs">Type</TableHead>
                      <TableHead className="text-xs text-right">Qty</TableHead>
                      <TableHead className="text-xs text-right">Avg Price</TableHead>
                      <TableHead className="text-xs text-right">LTP</TableHead>
                      <TableHead className="text-xs text-right">P&L</TableHead>
                      <TableHead className="text-xs text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {openPositions.map((position, index) => {
                      const pnl = calculatePnl(position)
                      const pnlPercent = calculatePnlPercent(position)
                      const ltp = prices[position.symbol] || position.currentPrice

                      return (
                        <TableRow
                          key={position.id}
                          className="hover:bg-purple-500/5 transition-all"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <TableCell className="font-medium">{position.symbol}</TableCell>
                          <TableCell>
                            <Badge
                              variant={position.type === "BUY" ? "default" : "destructive"}
                              className={`${
                                position.type === "BUY"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {position.type === "BUY" ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {position.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono">{position.quantity}</TableCell>
                          <TableCell className="text-right font-mono">₹{position.avgPrice.toFixed(2)}</TableCell>
                          <TableCell className="text-right font-mono">₹{ltp.toFixed(2)}</TableCell>
                          <TableCell className="text-right">
                            <div className={`font-mono ${pnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                              <div>
                                {pnl >= 0 ? "+" : ""}₹{pnl.toFixed(0)}
                              </div>
                              <div className="text-xs opacity-70">
                                ({pnlPercent >= 0 ? "+" : ""}
                                {pnlPercent.toFixed(2)}%)
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleClosePosition(position.id)}
                              className="h-8 px-2 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            {closedPositions.length === 0 ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center mb-4">
                  <History className="h-8 w-8 text-muted-foreground opacity-50" />
                </div>
                <p className="text-muted-foreground">No trade history</p>
                <p className="text-xs text-muted-foreground mt-1">Close a position to see history</p>
              </div>
            ) : (
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-background/50 hover:bg-background/50">
                      <TableHead className="text-xs">Symbol</TableHead>
                      <TableHead className="text-xs">Type</TableHead>
                      <TableHead className="text-xs text-right">Qty</TableHead>
                      <TableHead className="text-xs text-right">Entry</TableHead>
                      <TableHead className="text-xs text-right">Exit</TableHead>
                      <TableHead className="text-xs text-right">P&L</TableHead>
                      <TableHead className="text-xs text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {closedPositions
                      .slice()
                      .reverse()
                      .slice(0, 20)
                      .map((position, index) => (
                        <TableRow key={position.id} className="hover:bg-purple-500/5 transition-all">
                          <TableCell className="font-medium">{position.symbol}</TableCell>
                          <TableCell>
                            <Badge
                              variant={position.type === "BUY" ? "default" : "destructive"}
                              className={`${
                                position.type === "BUY"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {position.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono">{position.quantity}</TableCell>
                          <TableCell className="text-right font-mono">₹{position.avgPrice.toFixed(2)}</TableCell>
                          <TableCell className="text-right font-mono">₹{position.currentPrice.toFixed(2)}</TableCell>
                          <TableCell className="text-right">
                            <span
                              className={`font-mono ${(position.pnl || 0) >= 0 ? "text-green-400" : "text-red-400"}`}
                            >
                              {(position.pnl || 0) >= 0 ? "+" : ""}₹{(position.pnl || 0).toFixed(0)}
                            </span>
                          </TableCell>
                          <TableCell className="text-right text-xs text-muted-foreground">
                            {position.closedAt
                              ? new Date(position.closedAt).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                })
                              : "-"}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
