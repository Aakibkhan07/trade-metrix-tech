"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Plus, Trash2, Save, Settings2, Layers, Zap, Code2, GitBranch, Target } from "lucide-react"
import { tradingStore, availableIndicators, type Strategy, type StrategyRule } from "@/lib/trading-store"

export default function StrategyBuilderPage() {
  const router = useRouter()
  const [strategies, setStrategies] = useState<Strategy[]>([])
  const [currentStrategy, setCurrentStrategy] = useState<{
    name: string
    rules: StrategyRule[]
  }>({
    name: "",
    rules: [],
  })

  useEffect(() => {
    setStrategies(tradingStore.getStrategies())
  }, [])

  const addRule = () => {
    const newRule: StrategyRule = {
      id: `rule-${Date.now()}`,
      indicator: "rsi",
      condition: ">",
      value: 50,
      logic: currentStrategy.rules.length > 0 ? "AND" : undefined,
    }
    setCurrentStrategy((prev) => ({
      ...prev,
      rules: [...prev.rules, newRule],
    }))
  }

  const updateRule = (ruleId: string, updates: Partial<StrategyRule>) => {
    setCurrentStrategy((prev) => ({
      ...prev,
      rules: prev.rules.map((rule) => (rule.id === ruleId ? { ...rule, ...updates } : rule)),
    }))
  }

  const removeRule = (ruleId: string) => {
    setCurrentStrategy((prev) => ({
      ...prev,
      rules: prev.rules.filter((rule) => rule.id !== ruleId),
    }))
  }

  const saveStrategy = () => {
    if (!currentStrategy.name || currentStrategy.rules.length === 0) return

    const newStrategy: Strategy = {
      id: `strategy-${Date.now()}`,
      name: currentStrategy.name,
      rules: currentStrategy.rules,
      createdAt: new Date().toISOString(),
      isActive: false,
    }

    tradingStore.addStrategy(newStrategy)
    setStrategies((prev) => [...prev, newStrategy])
    setCurrentStrategy({ name: "", rules: [] })
  }

  const toggleStrategy = (strategyId: string, isActive: boolean) => {
    tradingStore.updateStrategy(strategyId, { isActive })
    setStrategies((prev) => prev.map((s) => (s.id === strategyId ? { ...s, isActive } : s)))
  }

  const deleteStrategy = (strategyId: string) => {
    tradingStore.deleteStrategy(strategyId)
    setStrategies((prev) => prev.filter((s) => s.id !== strategyId))
  }

  const getIndicatorName = (id: string) => {
    return availableIndicators.find((i) => i.id === id)?.name || id
  }

  const groupedIndicators = availableIndicators.reduce(
    (acc, ind) => {
      if (!acc[ind.category]) acc[ind.category] = []
      acc[ind.category].push(ind)
      return acc
    },
    {} as Record<string, typeof availableIndicators>,
  )

  return (
    <div className="min-h-screen bg-background">
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
                <h1 className="text-xl font-bold">Strategy Builder</h1>
                <p className="text-sm text-muted-foreground">Create no-code trading strategies</p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Strategy Builder Form */}
            <Card className="glass glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-purple-400 icon-glow" />
                  Create New Strategy
                </CardTitle>
                <CardDescription>Define entry rules using technical indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Strategy Name */}
                <div className="space-y-2">
                  <Label htmlFor="strategy-name">Strategy Name</Label>
                  <Input
                    id="strategy-name"
                    placeholder="e.g., RSI Momentum Breakout"
                    value={currentStrategy.name}
                    onChange={(e) => setCurrentStrategy((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-background/50 border-border/50"
                  />
                </div>

                {/* Rules */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Entry Rules</Label>
                    <Button size="sm" onClick={addRule} className="bg-gradient-to-r from-purple-500 to-blue-500">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Rule
                    </Button>
                  </div>

                  {currentStrategy.rules.length === 0 ? (
                    <div className="text-center py-8 border border-dashed border-border/50 rounded-lg">
                      <GitBranch className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                      <p className="text-muted-foreground">No rules added yet</p>
                      <p className="text-sm text-muted-foreground/70">Click "Add Rule" to start building</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentStrategy.rules.map((rule, index) => (
                        <div
                          key={rule.id}
                          className="p-4 rounded-lg bg-background/50 border border-border/50 space-y-3 animate-float"
                          style={{ animationDelay: `${index * 100}ms`, animationDuration: "4s" }}
                        >
                          {rule.logic && (
                            <div className="flex items-center gap-2 mb-2">
                              <Select
                                value={rule.logic}
                                onValueChange={(v) => updateRule(rule.id, { logic: v as "AND" | "OR" })}
                              >
                                <SelectTrigger className="w-24 h-8 bg-purple-500/10 border-purple-500/30">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="AND">AND</SelectItem>
                                  <SelectItem value="OR">OR</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          )}

                          <div className="flex items-center gap-3 flex-wrap">
                            {/* Indicator */}
                            <Select value={rule.indicator} onValueChange={(v) => updateRule(rule.id, { indicator: v })}>
                              <SelectTrigger className="w-40 bg-background/50">
                                <SelectValue placeholder="Indicator" />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(groupedIndicators).map(([category, indicators]) => (
                                  <div key={category}>
                                    <div className="px-2 py-1 text-xs text-muted-foreground font-semibold">
                                      {category}
                                    </div>
                                    {indicators.map((ind) => (
                                      <SelectItem key={ind.id} value={ind.id}>
                                        {ind.name}
                                      </SelectItem>
                                    ))}
                                  </div>
                                ))}
                              </SelectContent>
                            </Select>

                            {/* Condition */}
                            <Select
                              value={rule.condition}
                              onValueChange={(v) => updateRule(rule.id, { condition: v as StrategyRule["condition"] })}
                            >
                              <SelectTrigger className="w-24 bg-background/50">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value=">">{">"}</SelectItem>
                                <SelectItem value="<">{"<"}</SelectItem>
                                <SelectItem value="==">{"=="}</SelectItem>
                                <SelectItem value=">=">{">="}</SelectItem>
                                <SelectItem value="<=">{"<="}</SelectItem>
                              </SelectContent>
                            </Select>

                            {/* Value */}
                            <Input
                              type="number"
                              value={rule.value}
                              onChange={(e) => updateRule(rule.id, { value: Number.parseFloat(e.target.value) || 0 })}
                              className="w-24 bg-background/50"
                            />

                            {/* Delete */}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeRule(rule.id)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Preview */}
                {currentStrategy.rules.length > 0 && (
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                    <Label className="text-purple-400 mb-2 block">Strategy Preview</Label>
                    <code className="text-sm text-foreground/80">
                      {currentStrategy.rules.map((rule, index) => (
                        <span key={rule.id}>
                          {rule.logic && <span className="text-purple-400"> {rule.logic} </span>}
                          <span className="text-blue-400">{getIndicatorName(rule.indicator)}</span>
                          <span className="text-yellow-400"> {rule.condition} </span>
                          <span className="text-green-400">{rule.value}</span>
                        </span>
                      ))}
                    </code>
                  </div>
                )}

                {/* Save Button */}
                <Button
                  onClick={saveStrategy}
                  disabled={!currentStrategy.name || currentStrategy.rules.length === 0}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Strategy
                </Button>
              </CardContent>
            </Card>

            {/* Saved Strategies */}
            <Card className="glass glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-400 icon-glow-blue" />
                  Saved Strategies
                </CardTitle>
                <CardDescription>{strategies.length} strategies created</CardDescription>
              </CardHeader>
              <CardContent>
                {strategies.length === 0 ? (
                  <div className="text-center py-12">
                    <Settings2 className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
                    <p className="text-muted-foreground">No strategies saved yet</p>
                    <p className="text-sm text-muted-foreground/70">Create your first strategy to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {strategies.map((strategy, index) => (
                      <div
                        key={strategy.id}
                        className={`p-4 rounded-lg border transition-all duration-300 hover-scale ${
                          strategy.isActive
                            ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50"
                            : "bg-background/50 border-border/50"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                                strategy.isActive
                                  ? "bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse-glow"
                                  : "bg-muted"
                              }`}
                            >
                              <Target className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{strategy.name}</h3>
                              <p className="text-xs text-muted-foreground">
                                {strategy.rules.length} rules | Created{" "}
                                {new Date(strategy.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={strategy.isActive}
                              onCheckedChange={(checked) => toggleStrategy(strategy.id, checked)}
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteStrategy(strategy.id)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {strategy.rules.map((rule, ruleIndex) => (
                            <Badge key={rule.id} variant="outline" className="text-xs">
                              {rule.logic && <span className="text-purple-400 mr-1">{rule.logic}</span>}
                              {getIndicatorName(rule.indicator)} {rule.condition} {rule.value}
                            </Badge>
                          ))}
                        </div>

                        {strategy.isActive && (
                          <div className="mt-3 flex items-center gap-2 text-sm text-green-400">
                            <Zap className="h-4 w-4 animate-pulse" />
                            Strategy is actively monitoring
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
