"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Target,
  PieChart,
  History,
  Zap,
  IndianRupee,
} from "lucide-react"
import { tradingStore, type VirtualPortfolio } from "@/lib/trading-store"

const mockPrices: Record<string, number> = {
  NIFTY: 24250,
  BANKNIFTY: 51900,
  RELIANCE: 2450,
  TCS: 3820,
  INFY: 1580,
  HDFC: 1720,
}

export function PaperTrading() {
  const [portfolio, setPortfolio] = useState<VirtualPortfolio | null>(null)
  const [orderForm, setOrderForm] = useState({
    symbol: "NIFTY",
    type: "BUY" as "BUY" | "SELL",
    quantity: 50,
  })
  const [currentPrices, setCurrentPrices] = useState(mockPrices)

  useEffect(() => {
    setPortfolio(tradingStore.getPortfolio())

    // Simulate price updates
    const interval = setInterval(() => {
      setCurrentPrices((prev) => {
        const newPrices = { ...prev }
        Object.keys(newPrices).forEach((key) => {
          newPrices[key] = prev[key] + (Math.random() - 0.5) * prev[key] * 0.002
        })
        return newPrices
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const placeTrade = () => {
    const price = currentPrices[orderForm.symbol]
    const trade = tradingStore.placeTrade({
      symbol: orderForm.symbol,
      type: orderForm.type,
      quantity: orderForm.quantity,
      price,
    })
    setPortfolio(tradingStore.getPortfolio())
  }

  const closeTrade = (tradeId: string, symbol: string) => {
    const closePrice = currentPrices[symbol]
    tradingStore.closeTrade(tradeId, closePrice)
    setPortfolio(tradingStore.getPortfolio())
  }

  const resetPortfolio = () => {
    tradingStore.resetPortfolio()
    setPortfolio(tradingStore.getPortfolio())
  }

  if (!portfolio) return null

  const openPositions = portfolio.positions.filter((p) => p.status === "OPEN")
  const closedPositions = portfolio.positions.filter((p) => p.status === "CLOSED")
  const unrealizedPnl = openPositions.reduce((sum, pos) => {
    const currentPrice = currentPrices[pos.symbol] || pos.price
    const pnl =
      pos.type === "BUY" ? (currentPrice - pos.price) * pos.quantity : (pos.price - currentPrice) * pos.quantity
    return sum + pnl
  }, 0)

  return (
    <Card className="glass glow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
              <Wallet className="h-5 w-5 text-purple-400 icon-glow" />
            </div>
            <div>
              <span className="block">Paper Trading</span>
              <span className="text-sm font-normal text-muted-foreground">Virtual Portfolio Simulator</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={resetPortfolio}
            className="border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-background/50 border border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IndianRupee className="h-4 w-4" />
              Balance
            </div>
            <p className="text-xl font-bold text-gradient">
              ₹{portfolio.balance.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-4 rounded-lg bg-background/50 border border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Target className="h-4 w-4" />
              Open Positions
            </div>
            <p className="text-xl font-bold">{openPositions.length}</p>
          </div>
          <div className="p-4 rounded-lg bg-background/50 border border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <TrendingUp className="h-4 w-4" />
              Unrealized P&L
            </div>
            <p className={`text-xl font-bold ${unrealizedPnl >= 0 ? "text-green-400" : "text-red-400"}`}>
              {unrealizedPnl >= 0 ? "+" : ""}₹{unrealizedPnl.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-4 rounded-lg bg-background/50 border border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <PieChart className="h-4 w-4" />
              Realized P&L
            </div>
            <p className={`text-xl font-bold ${portfolio.totalPnl >= 0 ? "text-green-400" : "text-red-400"}`}>
              {portfolio.totalPnl >= 0 ? "+" : ""}₹
              {portfolio.totalPnl.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>

        {/* Order Form */}
        <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Zap className="h-4 w-4 text-purple-400" />
            Place Order
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-end">
            <div>
              <Label className="text-xs">Symbol</Label>
              <Select value={orderForm.symbol} onValueChange={(v) => setOrderForm((prev) => ({ ...prev, symbol: v }))}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(currentPrices).map((symbol) => (
                    <SelectItem key={symbol} value={symbol}>
                      {symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">Type</Label>
              <Select
                value={orderForm.type}
                onValueChange={(v) => setOrderForm((prev) => ({ ...prev, type: v as "BUY" | "SELL" }))}
              >
                <SelectTrigger
                  className={`bg-background/50 ${orderForm.type === "BUY" ? "border-green-500/50" : "border-red-500/50"}`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BUY">BUY</SelectItem>
                  <SelectItem value="SELL">SELL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">Quantity</Label>
              <Input
                type="number"
                value={orderForm.quantity}
                onChange={(e) => setOrderForm((prev) => ({ ...prev, quantity: Number.parseInt(e.target.value) || 0 }))}
                className="bg-background/50"
              />
            </div>
            <div>
              <Label className="text-xs">Price (LTP)</Label>
              <div className="h-10 px-3 rounded-md bg-background/50 border border-input flex items-center font-mono">
                ₹{currentPrices[orderForm.symbol]?.toFixed(2)}
              </div>
            </div>
            <Button
              onClick={placeTrade}
              className={`${
                orderForm.type === "BUY"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              }`}
            >
              {orderForm.type === "BUY" ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              {orderForm.type}
            </Button>
          </div>
        </div>

        {/* Positions */}
        <Tabs defaultValue="open">
          <TabsList className="glass">
            <TabsTrigger
              value="open"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
            >
              Open ({openPositions.length})
            </TabsTrigger>
            <TabsTrigger
              value="closed"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
            >
              <History className="h-4 w-4 mr-1" />
              History ({closedPositions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="open" className="mt-4">
            {openPositions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Target className="h-12 w-12 mx-auto mb-2 opacity-30" />
                <p>No open positions</p>
              </div>
            ) : (
              <div className="space-y-2">
                {openPositions.map((pos, index) => {
                  const currentPrice = currentPrices[pos.symbol] || pos.price
                  const pnl =
                    pos.type === "BUY"
                      ? (currentPrice - pos.price) * pos.quantity
                      : (pos.price - currentPrice) * pos.quantity
                  const pnlPercent = (pnl / (pos.price * pos.quantity)) * 100

                  return (
                    <div
                      key={pos.id}
                      className="p-3 rounded-lg bg-background/50 border border-border/50 flex items-center justify-between hover:border-purple-500/30 transition-all"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <Badge
                          variant={pos.type === "BUY" ? "default" : "destructive"}
                          className={
                            pos.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                          }
                        >
                          {pos.type}
                        </Badge>
                        <div>
                          <p className="font-semibold">{pos.symbol}</p>
                          <p className="text-xs text-muted-foreground">
                            {pos.quantity} @ ₹{pos.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">LTP: ₹{currentPrice.toFixed(2)}</p>
                          <p className={`font-semibold ${pnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                            {pnl >= 0 ? "+" : ""}₹{pnl.toFixed(0)} ({pnlPercent.toFixed(2)}%)
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => closeTrade(pos.id, pos.symbol)}
                          className="border-purple-500/30 hover:bg-purple-500/10"
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </TabsContent>

          <TabsContent value="closed" className="mt-4">
            {closedPositions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <History className="h-12 w-12 mx-auto mb-2 opacity-30" />
                <p>No trade history</p>
              </div>
            ) : (
              <div className="space-y-2">
                {closedPositions
                  .slice(-10)
                  .reverse()
                  .map((pos, index) => (
                    <div
                      key={pos.id}
                      className="p-3 rounded-lg bg-background/50 border border-border/50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <Badge
                          variant={pos.type === "BUY" ? "default" : "destructive"}
                          className={
                            pos.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                          }
                        >
                          {pos.type}
                        </Badge>
                        <div>
                          <p className="font-semibold">{pos.symbol}</p>
                          <p className="text-xs text-muted-foreground">
                            {pos.quantity} @ ₹{pos.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${(pos.pnl || 0) >= 0 ? "text-green-400" : "text-red-400"}`}>
                          {(pos.pnl || 0) >= 0 ? "+" : ""}₹{(pos.pnl || 0).toFixed(0)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(pos.timestamp).toLocaleString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
