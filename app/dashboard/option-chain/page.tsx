"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, TrendingUp, TrendingDown, Activity, BarChart3, RefreshCw, Target, Layers, Zap } from "lucide-react"
import { niftyOptionChain, bankNiftyOptionChain, type OptionData } from "@/lib/trading-store"

export default function OptionChainPage() {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState<"nifty" | "banknifty">("nifty")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [optionData, setOptionData] = useState<OptionData[]>(niftyOptionChain)

  useEffect(() => {
    setOptionData(selectedIndex === "nifty" ? niftyOptionChain : bankNiftyOptionChain)
  }, [selectedIndex])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      // Simulate price refresh with small random changes
      setOptionData((prev) =>
        prev.map((opt) => ({
          ...opt,
          callLTP: opt.callLTP + (Math.random() - 0.5) * 5,
          putLTP: opt.putLTP + (Math.random() - 0.5) * 5,
          callChange: opt.callChange + (Math.random() - 0.5) * 2,
          putChange: opt.putChange + (Math.random() - 0.5) * 2,
        })),
      )
      setIsRefreshing(false)
    }, 1000)
  }

  const totalCallOI = optionData.reduce((sum, opt) => sum + opt.callOI, 0)
  const totalPutOI = optionData.reduce((sum, opt) => sum + opt.putOI, 0)
  const pcrRatio = (totalPutOI / totalCallOI).toFixed(2)
  const atmStrike = optionData.find((opt) => opt.isATM)

  return (
    <div className="min-h-screen bg-background">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard")}
                className="hover:bg-purple-500/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">Option Chain</h1>
                <p className="text-sm text-muted-foreground">Real-time options data analysis</p>
              </div>
            </div>
            <Button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="glass glow-sm hover-scale">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Target className="h-5 w-5 text-purple-400 icon-glow" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ATM Strike</p>
                    <p className="text-xl font-bold text-gradient">{atmStrike?.strikePrice || "-"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass glow-sm hover-scale">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Call OI</p>
                    <p className="text-xl font-bold text-green-400">{(totalCallOI / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass glow-sm hover-scale">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Put OI</p>
                    <p className="text-xl font-bold text-red-400">{(totalPutOI / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass glow-sm hover-scale">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-blue-400 icon-glow-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">PCR Ratio</p>
                    <p className="text-xl font-bold text-blue-400">{pcrRatio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Index Selector */}
          <Tabs
            value={selectedIndex}
            onValueChange={(v) => setSelectedIndex(v as "nifty" | "banknifty")}
            className="mb-6"
          >
            <TabsList className="glass">
              <TabsTrigger
                value="nifty"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
              >
                <Layers className="h-4 w-4 mr-2" />
                NIFTY 50
              </TabsTrigger>
              <TabsTrigger
                value="banknifty"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                BANK NIFTY
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Option Chain Table */}
          <Card className="glass glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-400 icon-glow" />
                {selectedIndex === "nifty" ? "NIFTY 50" : "BANK NIFTY"} Option Chain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50">
                      <TableHead colSpan={4} className="text-center bg-green-500/10 text-green-400">
                        CALLS
                      </TableHead>
                      <TableHead className="text-center bg-purple-500/10 text-purple-400">STRIKE</TableHead>
                      <TableHead colSpan={4} className="text-center bg-red-500/10 text-red-400">
                        PUTS
                      </TableHead>
                    </TableRow>
                    <TableRow className="border-border/50">
                      <TableHead className="text-right">OI</TableHead>
                      <TableHead className="text-right">Delta</TableHead>
                      <TableHead className="text-right">LTP</TableHead>
                      <TableHead className="text-right">Chg%</TableHead>
                      <TableHead className="text-center font-bold">Price</TableHead>
                      <TableHead className="text-left">Chg%</TableHead>
                      <TableHead className="text-left">LTP</TableHead>
                      <TableHead className="text-left">Delta</TableHead>
                      <TableHead className="text-left">OI</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {optionData.map((option, index) => (
                      <TableRow
                        key={option.strikePrice}
                        className={`border-border/50 transition-all duration-300 ${
                          option.isATM
                            ? "bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 border-l-4 border-l-purple-500"
                            : "hover:bg-card/50"
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Calls */}
                        <TableCell className="text-right font-mono text-sm">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                                style={{ width: `${(option.callOI / 350000) * 100}%` }}
                              />
                            </div>
                            {(option.callOI / 1000).toFixed(0)}K
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-muted-foreground">
                          {option.callDelta.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right font-mono font-semibold">
                          ₹{option.callLTP.toFixed(2)}
                        </TableCell>
                        <TableCell
                          className={`text-right font-mono text-sm ${option.callChange >= 0 ? "text-green-400" : "text-red-400"}`}
                        >
                          {option.callChange >= 0 ? "+" : ""}
                          {option.callChange.toFixed(1)}%
                        </TableCell>

                        {/* Strike Price */}
                        <TableCell className="text-center">
                          <Badge
                            variant={option.isATM ? "default" : "outline"}
                            className={
                              option.isATM ? "bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse-glow" : ""
                            }
                          >
                            {option.strikePrice}
                          </Badge>
                        </TableCell>

                        {/* Puts */}
                        <TableCell
                          className={`text-left font-mono text-sm ${option.putChange >= 0 ? "text-green-400" : "text-red-400"}`}
                        >
                          {option.putChange >= 0 ? "+" : ""}
                          {option.putChange.toFixed(1)}%
                        </TableCell>
                        <TableCell className="text-left font-mono font-semibold">₹{option.putLTP.toFixed(2)}</TableCell>
                        <TableCell className="text-left font-mono text-sm text-muted-foreground">
                          {option.putDelta.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-left font-mono text-sm">
                          <div className="flex items-center gap-2">
                            {(option.putOI / 1000).toFixed(0)}K
                            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full"
                                style={{ width: `${(option.putOI / 400000) * 100}%` }}
                              />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
