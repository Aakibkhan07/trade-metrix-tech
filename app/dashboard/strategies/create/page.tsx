"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Plus,
  Trash2,
  Save,
  Code2,
  GitBranch,
  TrendingUp,
  TrendingDown,
  Zap,
  AlertTriangle,
  Sparkles,
  Play,
  Target,
  Shield,
  GripVertical,
  Copy,
  Eye,
} from "lucide-react"
import {
  strategyStore,
  indicators,
  operators,
  timeframes,
  symbols,
  getIndicatorLabel,
  getOperatorSymbol,
  type StrategyCondition,
  type AdvancedStrategy,
  type IndicatorType,
  type OperatorType,
  type CompareToType,
  type LogicType,
  type ActionType,
} from "@/lib/strategy-store"

export default function CreateStrategyPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("builder")

  // Strategy form state
  const [strategyName, setStrategyName] = useState("")
  const [strategyDescription, setStrategyDescription] = useState("")
  const [selectedSymbol, setSelectedSymbol] = useState("NIFTY")
  const [selectedTimeframe, setSelectedTimeframe] = useState("15m")
  const [conditions, setConditions] = useState<StrategyCondition[]>([])
  const [action, setAction] = useState<ActionType>("BUY")
  const [quantity, setQuantity] = useState(1)
  const [stopLoss, setStopLoss] = useState<number | undefined>()
  const [takeProfit, setTakeProfit] = useState<number | undefined>()

  // Saved strategies
  const [savedStrategies, setSavedStrategies] = useState<AdvancedStrategy[]>([])

  useEffect(() => {
    setSavedStrategies(strategyStore.getAll())
  }, [])

  // Add new condition
  const addCondition = () => {
    const newCondition: StrategyCondition = {
      id: `condition-${Date.now()}`,
      indicator: "RSI",
      operator: "GREATER_THAN",
      compareToType: "VALUE",
      value: 50,
      logic: conditions.length > 0 ? "AND" : undefined,
    }
    setConditions([...conditions, newCondition])
  }

  // Update condition
  const updateCondition = (id: string, updates: Partial<StrategyCondition>) => {
    setConditions(conditions.map((c) => (c.id === id ? { ...c, ...updates } : c)))
  }

  // Remove condition
  const removeCondition = (id: string) => {
    setConditions(conditions.filter((c) => c.id !== id))
  }

  // Duplicate condition
  const duplicateCondition = (condition: StrategyCondition) => {
    const newCondition: StrategyCondition = {
      ...condition,
      id: `condition-${Date.now()}`,
      logic: "AND",
    }
    setConditions([...conditions, newCondition])
  }

  // Save strategy
  const saveStrategy = () => {
    if (!strategyName || conditions.length === 0) return

    const newStrategy = strategyStore.create({
      name: strategyName,
      description: strategyDescription,
      symbol: selectedSymbol,
      timeframe: selectedTimeframe,
      conditions,
      action,
      quantity,
      stopLoss,
      takeProfit,
      isActive: false,
    })

    setSavedStrategies([...savedStrategies, newStrategy])

    // Reset form
    setStrategyName("")
    setStrategyDescription("")
    setConditions([])
    setAction("BUY")
    setQuantity(1)
    setStopLoss(undefined)
    setTakeProfit(undefined)
  }

  // Toggle strategy active state
  const toggleStrategy = (id: string) => {
    strategyStore.toggleActive(id)
    setSavedStrategies(strategyStore.getAll())
  }

  // Delete strategy
  const deleteStrategy = (id: string) => {
    strategyStore.delete(id)
    setSavedStrategies(strategyStore.getAll())
  }

  // Run backtest
  const runBacktest = (id: string) => {
    strategyStore.runBacktest(id)
    setSavedStrategies(strategyStore.getAll())
  }

  // Group indicators by category
  const groupedIndicators = indicators.reduce(
    (acc, ind) => {
      if (!acc[ind.category]) acc[ind.category] = []
      acc[ind.category].push(ind)
      return acc
    },
    {} as Record<string, typeof indicators>,
  )

  // Generate strategy preview code
  const generatePreviewCode = () => {
    if (conditions.length === 0) return "// Add conditions to see preview"

    let code = `// Strategy: ${strategyName || "Untitled"}\n`
    code += `// Symbol: ${selectedSymbol} | Timeframe: ${selectedTimeframe}\n\n`
    code += `if (\n`

    conditions.forEach((condition, index) => {
      const indent = "  "
      const logicPrefix = condition.logic ? `${condition.logic.toLowerCase()} ` : ""
      const indicator = getIndicatorLabel(condition.indicator)
      const operator = getOperatorSymbol(condition.operator)
      const compareTo =
        condition.compareToType === "VALUE" ? condition.value : getIndicatorLabel(condition.compareIndicator!)

      if (index > 0) code += `\n`
      code += `${indent}${logicPrefix}${indicator} ${operator} ${compareTo}`
    })

    code += `\n) {\n`
    code += `  execute${action}({\n`
    code += `    symbol: "${selectedSymbol}",\n`
    code += `    quantity: ${quantity},\n`
    if (stopLoss) code += `    stopLoss: ${stopLoss}%,\n`
    if (takeProfit) code += `    takeProfit: ${takeProfit}%,\n`
    code += `  });\n`
    code += `}`

    return code
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Gradient orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-50">
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
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center icon-glow animate-pulse-glow">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient">No-Code Strategy Builder</h1>
                  <p className="text-sm text-muted-foreground">
                    Create automated trading strategies without writing code
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                <Sparkles className="h-3 w-3 mr-1" />
                Advanced
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-card/50 p-1">
              <TabsTrigger
                value="builder"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/20"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Builder
              </TabsTrigger>
              <TabsTrigger
                value="strategies"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/20"
              >
                <GitBranch className="h-4 w-4 mr-2" />
                My Strategies ({savedStrategies.length})
              </TabsTrigger>
            </TabsList>

            {/* Strategy Builder Tab */}
            <TabsContent value="builder" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column - Strategy Setup */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Basic Info Card */}
                  <Card className="glass border-border/50">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                          <Target className="h-4 w-4 text-purple-400" />
                        </div>
                        Strategy Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Strategy Name</Label>
                          <Input
                            id="name"
                            placeholder="e.g., RSI Momentum Breakout"
                            value={strategyName}
                            onChange={(e) => setStrategyName(e.target.value)}
                            className="bg-background/50 border-border/50 focus:border-purple-500/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="symbol">Symbol</Label>
                          <Select value={selectedSymbol} onValueChange={setSelectedSymbol}>
                            <SelectTrigger className="bg-background/50 border-border/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {symbols.map((s) => (
                                <SelectItem key={s.value} value={s.value}>
                                  {s.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="timeframe">Timeframe</Label>
                          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                            <SelectTrigger className="bg-background/50 border-border/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {timeframes.map((t) => (
                                <SelectItem key={t.value} value={t.value}>
                                  {t.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="action">Action</Label>
                          <Select value={action} onValueChange={(v) => setAction(v as ActionType)}>
                            <SelectTrigger className="bg-background/50 border-border/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="BUY">
                                <span className="flex items-center gap-2">
                                  <TrendingUp className="h-4 w-4 text-green-400" />
                                  Buy
                                </span>
                              </SelectItem>
                              <SelectItem value="SELL">
                                <span className="flex items-center gap-2">
                                  <TrendingDown className="h-4 w-4 text-red-400" />
                                  Sell
                                </span>
                              </SelectItem>
                              <SelectItem value="ALERT">
                                <span className="flex items-center gap-2">
                                  <AlertTriangle className="h-4 w-4 text-yellow-400" />
                                  Alert Only
                                </span>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your strategy logic..."
                          value={strategyDescription}
                          onChange={(e) => setStrategyDescription(e.target.value)}
                          className="bg-background/50 border-border/50 min-h-[80px] focus:border-purple-500/50"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Conditions Card */}
                  <Card className="glass border-border/50">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                            <GitBranch className="h-4 w-4 text-blue-400" />
                          </div>
                          Entry Conditions
                        </CardTitle>
                        <Button
                          size="sm"
                          onClick={addCondition}
                          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/25"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add Condition
                        </Button>
                      </div>
                      <CardDescription>Define when your strategy should trigger</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {conditions.length === 0 ? (
                        <div className="text-center py-12 border-2 border-dashed border-border/50 rounded-xl bg-muted/5">
                          <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                            <GitBranch className="h-8 w-8 text-muted-foreground/50" />
                          </div>
                          <p className="text-muted-foreground font-medium">No conditions added yet</p>
                          <p className="text-sm text-muted-foreground/70 mt-1">
                            Click "Add Condition" to start building your strategy
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {conditions.map((condition, index) => (
                            <div
                              key={condition.id}
                              className="group relative p-4 rounded-xl bg-gradient-to-r from-background/80 to-background/40 border border-border/50 hover:border-purple-500/30 transition-all duration-300"
                            >
                              {/* Drag handle */}
                              <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                                <GripVertical className="h-4 w-4 text-muted-foreground" />
                              </div>

                              {/* Logic connector */}
                              {condition.logic && (
                                <div className="flex items-center gap-2 mb-3 pl-6">
                                  <Select
                                    value={condition.logic}
                                    onValueChange={(v) => updateCondition(condition.id, { logic: v as LogicType })}
                                  >
                                    <SelectTrigger className="w-20 h-7 text-xs bg-purple-500/10 border-purple-500/30 text-purple-400">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="AND">AND</SelectItem>
                                      <SelectItem value="OR">OR</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                                </div>
                              )}

                              <div className="flex items-center gap-3 flex-wrap pl-6">
                                {/* Condition number badge */}
                                <Badge
                                  variant="outline"
                                  className="h-6 w-6 p-0 justify-center rounded-full border-purple-500/50 text-purple-400 text-xs"
                                >
                                  {index + 1}
                                </Badge>

                                {/* Indicator selector */}
                                <Select
                                  value={condition.indicator}
                                  onValueChange={(v) =>
                                    updateCondition(condition.id, { indicator: v as IndicatorType })
                                  }
                                >
                                  <SelectTrigger className="w-40 bg-background/50 border-border/50 hover:border-purple-500/50">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="max-h-[300px]">
                                    {Object.entries(groupedIndicators).map(([category, inds]) => (
                                      <SelectGroup key={category}>
                                        <SelectLabel className="text-xs text-muted-foreground">{category}</SelectLabel>
                                        {inds.map((ind) => (
                                          <SelectItem key={ind.value} value={ind.value}>
                                            {ind.label}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    ))}
                                  </SelectContent>
                                </Select>

                                {/* Operator selector */}
                                <Select
                                  value={condition.operator}
                                  onValueChange={(v) => updateCondition(condition.id, { operator: v as OperatorType })}
                                >
                                  <SelectTrigger className="w-44 bg-background/50 border-border/50 hover:border-blue-500/50">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {operators.map((op) => (
                                      <SelectItem key={op.value} value={op.value}>
                                        <span className="flex items-center gap-2">
                                          <span className="text-blue-400 font-mono">{op.symbol}</span>
                                          {op.label}
                                        </span>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>

                                {/* Compare to type toggle */}
                                <Select
                                  value={condition.compareToType}
                                  onValueChange={(v) =>
                                    updateCondition(condition.id, { compareToType: v as CompareToType })
                                  }
                                >
                                  <SelectTrigger className="w-32 bg-background/50 border-border/50">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="VALUE">Value</SelectItem>
                                    <SelectItem value="INDICATOR">Indicator</SelectItem>
                                  </SelectContent>
                                </Select>

                                {/* Value or Indicator selector */}
                                {condition.compareToType === "VALUE" ? (
                                  <Input
                                    type="number"
                                    value={condition.value ?? ""}
                                    onChange={(e) =>
                                      updateCondition(condition.id, { value: Number.parseFloat(e.target.value) || 0 })
                                    }
                                    className="w-24 bg-background/50 border-border/50 text-center"
                                    placeholder="Value"
                                  />
                                ) : (
                                  <Select
                                    value={condition.compareIndicator}
                                    onValueChange={(v) =>
                                      updateCondition(condition.id, { compareIndicator: v as IndicatorType })
                                    }
                                  >
                                    <SelectTrigger className="w-40 bg-background/50 border-border/50">
                                      <SelectValue placeholder="Select..." />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[300px]">
                                      {Object.entries(groupedIndicators).map(([category, inds]) => (
                                        <SelectGroup key={category}>
                                          <SelectLabel className="text-xs text-muted-foreground">
                                            {category}
                                          </SelectLabel>
                                          {inds.map((ind) => (
                                            <SelectItem key={ind.value} value={ind.value}>
                                              {ind.label}
                                            </SelectItem>
                                          ))}
                                        </SelectGroup>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                )}

                                {/* Action buttons */}
                                <div className="flex items-center gap-1 ml-auto">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => duplicateCondition(condition)}
                                    className="h-8 w-8 text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10"
                                  >
                                    <Copy className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeCondition(condition.id)}
                                    className="h-8 w-8 text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Risk Management Card */}
                  <Card className="glass border-border/50">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                          <Shield className="h-4 w-4 text-green-400" />
                        </div>
                        Risk Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity (Lots)</Label>
                          <Input
                            id="quantity"
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                            className="bg-background/50 border-border/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="stoploss">Stop Loss (%)</Label>
                          <Input
                            id="stoploss"
                            type="number"
                            step="0.1"
                            placeholder="e.g., 2.0"
                            value={stopLoss ?? ""}
                            onChange={(e) => setStopLoss(Number.parseFloat(e.target.value) || undefined)}
                            className="bg-background/50 border-border/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="takeprofit">Take Profit (%)</Label>
                          <Input
                            id="takeprofit"
                            type="number"
                            step="0.1"
                            placeholder="e.g., 4.0"
                            value={takeProfit ?? ""}
                            onChange={(e) => setTakeProfit(Number.parseFloat(e.target.value) || undefined)}
                            className="bg-background/50 border-border/50"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Preview & Actions */}
                <div className="space-y-6">
                  {/* Strategy Preview */}
                  <Card className="glass border-border/50 sticky top-24">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                          <Eye className="h-4 w-4 text-cyan-400" />
                        </div>
                        Strategy Preview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Visual summary */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Symbol</span>
                          <Badge variant="outline">{selectedSymbol}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Timeframe</span>
                          <Badge variant="outline">
                            {timeframes.find((t) => t.value === selectedTimeframe)?.label}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Action</span>
                          <Badge
                            className={
                              action === "BUY"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : action === "SELL"
                                  ? "bg-red-500/20 text-red-400 border-red-500/30"
                                  : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }
                          >
                            {action}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Conditions</span>
                          <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400">
                            {conditions.length}
                          </Badge>
                        </div>
                      </div>

                      <Separator className="bg-border/50" />

                      {/* Code preview */}
                      <div className="relative">
                        <pre className="p-4 rounded-lg bg-background/80 border border-border/50 text-xs font-mono overflow-x-auto max-h-[200px] overflow-y-auto">
                          <code className="text-foreground/80">{generatePreviewCode()}</code>
                        </pre>
                      </div>

                      <Separator className="bg-border/50" />

                      {/* Save button */}
                      <Button
                        onClick={saveStrategy}
                        disabled={!strategyName || conditions.length === 0}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/25 h-12 text-base"
                      >
                        <Save className="h-5 w-5 mr-2" />
                        Save Strategy
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Strategy logic will be logged to console on save
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* My Strategies Tab */}
            <TabsContent value="strategies" className="space-y-6">
              {savedStrategies.length === 0 ? (
                <Card className="glass border-border/50">
                  <CardContent className="py-16 text-center">
                    <div className="h-20 w-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                      <GitBranch className="h-10 w-10 text-muted-foreground/30" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No Strategies Yet</h3>
                    <p className="text-muted-foreground mb-6">Create your first strategy using the Builder tab</p>
                    <Button
                      onClick={() => setActiveTab("builder")}
                      className="bg-gradient-to-r from-purple-500 to-blue-500"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Create Strategy
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {savedStrategies.map((strategy, index) => (
                    <Card
                      key={strategy.id}
                      className={`glass border-border/50 transition-all duration-300 hover:border-purple-500/30 ${
                        strategy.isActive ? "ring-1 ring-purple-500/50" : ""
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                                strategy.isActive
                                  ? "bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse-glow"
                                  : "bg-muted"
                              }`}
                            >
                              <Target className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{strategy.name}</CardTitle>
                              <CardDescription className="text-xs">
                                {strategy.symbol} | {timeframes.find((t) => t.value === strategy.timeframe)?.label}
                              </CardDescription>
                            </div>
                          </div>
                          <Switch checked={strategy.isActive} onCheckedChange={() => toggleStrategy(strategy.id)} />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Conditions preview */}
                        <div className="flex flex-wrap gap-1.5">
                          {strategy.conditions.slice(0, 3).map((condition) => (
                            <Badge key={condition.id} variant="outline" className="text-xs">
                              {condition.logic && <span className="text-purple-400 mr-1">{condition.logic}</span>}
                              {getIndicatorLabel(condition.indicator)} {getOperatorSymbol(condition.operator)}{" "}
                              {condition.compareToType === "VALUE"
                                ? condition.value
                                : getIndicatorLabel(condition.compareIndicator!)}
                            </Badge>
                          ))}
                          {strategy.conditions.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{strategy.conditions.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Backtest results */}
                        {strategy.backtestResults && (
                          <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-background/50 border border-border/50">
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground">Win Rate</p>
                              <p className="text-sm font-semibold text-green-400">
                                {strategy.backtestResults.winRate.toFixed(1)}%
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground">Profit Factor</p>
                              <p className="text-sm font-semibold text-blue-400">
                                {strategy.backtestResults.profitFactor.toFixed(2)}
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground">Total Trades</p>
                              <p className="text-sm font-semibold">{strategy.backtestResults.totalTrades}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground">Max DD</p>
                              <p className="text-sm font-semibold text-red-400">
                                -{strategy.backtestResults.maxDrawdown.toFixed(1)}%
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => runBacktest(strategy.id)}
                            className="flex-1 border-border/50 hover:border-purple-500/50 hover:bg-purple-500/10"
                          >
                            <Play className="h-4 w-4 mr-1" />
                            Backtest
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteStrategy(strategy.id)}
                            className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {strategy.isActive && (
                          <div className="flex items-center gap-2 text-xs text-green-400 pt-1">
                            <Zap className="h-3 w-3 animate-pulse" />
                            Strategy is actively monitoring
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
