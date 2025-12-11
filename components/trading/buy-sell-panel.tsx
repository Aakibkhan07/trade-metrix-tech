"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Zap, Target, AlertCircle, CheckCircle2, IndianRupee } from "lucide-react"
import { portfolioStore } from "@/lib/portfolio-store"

interface BuySellPanelProps {
  symbol?: string
  currentPrice?: number
  onOrderPlaced?: () => void
}

export function BuySellPanel({ symbol: initialSymbol, currentPrice: initialPrice, onOrderPlaced }: BuySellPanelProps) {
  const [orderType, setOrderType] = useState<"MARKET" | "LIMIT">("MARKET")
  const [symbol, setSymbol] = useState(initialSymbol || "NIFTY 50")
  const [quantity, setQuantity] = useState(1)
  const [limitPrice, setLimitPrice] = useState(0)
  const [currentPrice, setCurrentPrice] = useState(initialPrice || 0)
  const [balance, setBalance] = useState(0)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const symbols = [
    "NIFTY 50",
    "BANK NIFTY",
    "SENSEX",
    "FIN NIFTY",
    "RELIANCE",
    "TCS",
    "INFY",
    "HDFC BANK",
    "ICICI BANK",
    "BHARTI AIRTEL",
  ]

  useEffect(() => {
    const portfolio = portfolioStore.getPortfolio()
    setBalance(portfolio.virtualBalance)

    // Update prices every second
    const interval = setInterval(() => {
      const price = portfolioStore.getPrice(symbol)
      if (price > 0) {
        setCurrentPrice(price)
        if (orderType === "MARKET") {
          setLimitPrice(price)
        }
      }
      setBalance(portfolioStore.getPortfolio().virtualBalance)
    }, 1000)

    return () => clearInterval(interval)
  }, [symbol, orderType])

  useEffect(() => {
    if (initialSymbol) setSymbol(initialSymbol)
    if (initialPrice) {
      setCurrentPrice(initialPrice)
      setLimitPrice(initialPrice)
    }
  }, [initialSymbol, initialPrice])

  const handleOrder = (type: "BUY" | "SELL") => {
    setIsProcessing(true)
    setMessage(null)

    setTimeout(() => {
      const result = portfolioStore.placeOrder(
        symbol,
        type,
        quantity,
        orderType,
        orderType === "LIMIT" ? limitPrice : undefined,
      )

      setMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      })

      if (result.success) {
        setBalance(portfolioStore.getPortfolio().virtualBalance)
        onOrderPlaced?.()
      }

      setIsProcessing(false)

      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000)
    }, 500)
  }

  const orderValue = (orderType === "MARKET" ? currentPrice : limitPrice) * quantity

  return (
    <Card className="glass glow border-purple-500/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse-glow">
              <Zap className="h-5 w-5 text-purple-400 icon-glow" />
            </div>
            <div>
              <span className="block text-lg">Quick Trade</span>
              <span className="text-xs font-normal text-muted-foreground">Paper Trading</span>
            </div>
          </div>
          <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
            <IndianRupee className="h-3 w-3 mr-1" />
            {balance.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Symbol Selection */}
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Symbol</Label>
          <Select value={symbol} onValueChange={setSymbol}>
            <SelectTrigger className="bg-background/50 border-border/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {symbols.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Current Price Display */}
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Current Price</span>
            <span className="text-xl font-bold text-gradient font-mono">
              ₹{currentPrice.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Order Type Tabs */}
        <Tabs value={orderType} onValueChange={(v) => setOrderType(v as "MARKET" | "LIMIT")}>
          <TabsList className="grid w-full grid-cols-2 glass">
            <TabsTrigger
              value="MARKET"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
            >
              <Target className="h-4 w-4 mr-1" />
              Market
            </TabsTrigger>
            <TabsTrigger
              value="LIMIT"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              Limit
            </TabsTrigger>
          </TabsList>

          <TabsContent value="MARKET" className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Quantity</Label>
              <Input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                className="bg-background/50 border-border/50 font-mono"
              />
            </div>
          </TabsContent>

          <TabsContent value="LIMIT" className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Quantity</Label>
                <Input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="bg-background/50 border-border/50 font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Limit Price</Label>
                <Input
                  type="number"
                  step={0.05}
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(Number.parseFloat(e.target.value) || 0)}
                  className="bg-background/50 border-border/50 font-mono"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Order Value */}
        <div className="flex items-center justify-between p-2 rounded bg-background/30 border border-border/30">
          <span className="text-sm text-muted-foreground">Order Value</span>
          <span className="font-semibold font-mono">
            ₹{orderValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </span>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`flex items-center gap-2 p-2 rounded text-sm ${
              message.type === "success"
                ? "bg-green-500/10 text-green-400 border border-green-500/30"
                : "bg-red-500/10 text-red-400 border border-red-500/30"
            }`}
          >
            {message.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            {message.text}
          </div>
        )}

        {/* Buy/Sell Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => handleOrder("BUY")}
            disabled={isProcessing || orderValue > balance}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold h-12 glow-sm"
          >
            <TrendingUp className="h-5 w-5 mr-2" />
            BUY
          </Button>
          <Button
            onClick={() => handleOrder("SELL")}
            disabled={isProcessing}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold h-12"
          >
            <TrendingDown className="h-5 w-5 mr-2" />
            SELL
          </Button>
        </div>

        {/* Risk Warning */}
        <p className="text-[10px] text-muted-foreground text-center">Paper trading only. No real money involved.</p>
      </CardContent>
    </Card>
  )
}
