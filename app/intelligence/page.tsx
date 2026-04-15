"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrendingUp, Zap, Brain, Target, AlertCircle, ChevronRight, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntelligencePage() {
  const [marketRegime, setMarketRegime] = useState("Trending")
  const [selectedStrategy, setSelectedStrategy] = useState("ScalperX")
  const [sliderValue, setSliderValue] = useState(50)
  const [predictedAccuracy, setPredictedAccuracy] = useState(80)
  const [activeTab, setActiveTab] = useState("market-intelligence")

  useEffect(() => {
    const regimes = ["Trending", "Ranging", "Volatile", "Consolidating"]
    const cycle = Math.floor(Date.now() / 5000) % regimes.length
    setMarketRegime(regimes[cycle])
  }, [])

  useEffect(() => {
    const baseAccuracy = {
      ScalperX: 80,
      AIMetrix: 82,
      DeltaMax: 78,
      ThetaPro: 81,
    }
    const base = baseAccuracy[selectedStrategy as keyof typeof baseAccuracy] || 80
    const predicted = base + (sliderValue - 50) * 0.3
    setPredictedAccuracy(Math.max(65, Math.min(95, predicted)))
  }, [sliderValue, selectedStrategy])

  const strategies = [
    { name: "ScalperX", current: 80, trend: "up", regime: "Trending" },
    { name: "AIMetrix", current: 82, trend: "up", regime: "Volatile" },
    { name: "DeltaMax", current: 78, trend: "down", regime: "Ranging" },
    { name: "ThetaPro", current: 81, trend: "up", regime: "Consolidating" },
  ]

  const regimeStrategies = {
    Trending: ["ScalperX", "TrendMax", "MomentumPro"],
    Ranging: ["DeltaMax", "MeanRevPro", "BracketPro"],
    Volatile: ["AIMetrix", "VegaPro", "IronDeltaX"],
    Consolidating: ["ThetaPro", "GridTrade", "ScalperX"],
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse bg-primary -z-10" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse bg-accent -z-10"
            style={{ animationDelay: "1s" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
                <Brain className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                <span className="text-sm font-medium text-primary">AI-Powered Strategy Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Strategy Intelligence Hub
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The world's first AI-powered trading strategy advisor. Get real-time market regime detection, strategy
                recommendations, and predictive accuracy analysis—all in one intelligent dashboard.
              </p>

              <div className="flex gap-4 justify-center pt-4">
                <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                  Explore Intelligence
                </button>
                <button className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all">
                  See Features
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Dashboard */}
        <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="market-intelligence" className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  <span className="hidden sm:inline">Market Intelligence</span>
                </TabsTrigger>
                <TabsTrigger value="regime-analysis" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Market Regime</span>
                </TabsTrigger>
                <TabsTrigger value="optimizer" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="hidden sm:inline">Optimizer</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="market-intelligence" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Current Market Status */}
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Market Status
                      </CardTitle>
                      <CardDescription>Real-time regime detection</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-muted-foreground">Current Regime</span>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                            <span className="font-semibold text-lg">{marketRegime}</span>
                          </div>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-30" />
                      </div>

                      <div className="space-y-3 pt-4">
                        <h4 className="font-semibold text-sm">Regime Characteristics</h4>
                        <div className="space-y-2">
                          {marketRegime === "Trending" && (
                            <>
                              <div className="flex items-center gap-2 text-sm">
                                <ArrowUpRight className="w-4 h-4 text-green-500" />
                                <span>Strong directional movement</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span>High momentum continuation</span>
                              </div>
                            </>
                          )}
                          {marketRegime === "Ranging" && (
                            <>
                              <div className="flex items-center gap-2 text-sm">
                                <Target className="w-4 h-4 text-blue-500" />
                                <span>Price oscillating between levels</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Target className="w-4 h-4 text-blue-500" />
                                <span>Mean reversion opportunities</span>
                              </div>
                            </>
                          )}
                          {marketRegime === "Volatile" && (
                            <>
                              <div className="flex items-center gap-2 text-sm">
                                <AlertCircle className="w-4 h-4 text-yellow-500" />
                                <span>High price fluctuations</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <AlertCircle className="w-4 h-4 text-yellow-500" />
                                <span>Increased vega exposure needed</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-accent" />
                        Recommendations
                      </CardTitle>
                      <CardDescription>Best strategies for current regime</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {regimeStrategies[marketRegime as keyof typeof regimeStrategies].map((strategy, idx) => (
                        <div
                          key={strategy}
                          className="p-3 rounded-lg border border-accent/20 bg-accent/5 hover:bg-accent/10 cursor-pointer transition-all animate-in fade-in"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-sm">{strategy}</p>
                              <p className="text-xs text-muted-foreground">Recommended for {marketRegime}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-accent opacity-50" />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Strategy Performance Cards */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Your Strategies</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {strategies.map((strategy, idx) => (
                      <Card
                        key={strategy.name}
                        className={`cursor-pointer transition-all border-2 animate-in fade-in ${
                          selectedStrategy === strategy.name
                            ? "border-primary bg-primary/5"
                            : "border-primary/20 hover:border-primary/40"
                        }`}
                        onClick={() => setSelectedStrategy(strategy.name)}
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <CardContent className="pt-6">
                          <p className="font-semibold text-sm mb-2">{strategy.name}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold">{strategy.current}%</span>
                            <span
                              className={`text-xs font-semibold flex items-center gap-1 ${strategy.trend === "up" ? "text-green-500" : "text-red-500"}`}
                            >
                              {strategy.trend === "up" ? (
                                <ArrowUpRight className="w-3 h-3" />
                              ) : (
                                <ArrowDownRight className="w-3 h-3" />
                              )}
                              {strategy.trend === "up" ? "+2.3%" : "-1.5%"}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{strategy.regime}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Regime Analysis Tab */}
              <TabsContent value="regime-analysis" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Regime Analysis</CardTitle>
                    <CardDescription>Detailed breakdown of current market conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["Volatility Index", "Trend Strength", "Mean Reversion Score", "Momentum Index"].map(
                        (metric, idx) => (
                          <div key={metric} className="animate-in fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium">{metric}</span>
                              <span className="text-sm font-semibold text-primary">{45 + idx * 8}%</span>
                            </div>
                            <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                                style={{ width: `${45 + idx * 8}%` }}
                              />
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Optimizer Tab */}
              <TabsContent value="optimizer" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Parameter Optimizer</CardTitle>
                    <CardDescription>Fine-tune {selectedStrategy} for current conditions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium">Risk Tolerance</label>
                      <div className="flex gap-4 mt-4">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderValue}
                          onChange={(e) => setSliderValue(Number(e.target.value))}
                          className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="font-semibold min-w-fit">{sliderValue}%</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-primary/20">
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-xs text-muted-foreground mb-1">Predicted Accuracy</p>
                        <p className="text-3xl font-bold text-primary">{predictedAccuracy.toFixed(1)}%</p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <p className="text-xs text-muted-foreground mb-1">Sharpe Ratio</p>
                        <p className="text-3xl font-bold text-accent">{(1.8 + sliderValue / 100).toFixed(2)}</p>
                      </div>
                    </div>

                    <button className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all">
                      Apply Optimization
                    </button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">Revolutionary Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Never seen before in the trading industry
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Market Regime Detection",
                  desc: "Real-time detection of trending, ranging, volatile, and consolidating markets",
                },
                {
                  title: "Smart Strategy Recommendations",
                  desc: "Get AI-powered suggestions for best strategies based on current conditions",
                },
                {
                  title: "Interactive Parameter Optimizer",
                  desc: "Adjust parameters and see predicted accuracy and Sharpe ratio in real-time",
                },
                {
                  title: "Predictive Accuracy Analysis",
                  desc: "Get predicted accuracy for each strategy based on optimization",
                },
                { title: "Regime-Based Backtesting", desc: "See strategy performance across different market regimes" },
                { title: "Risk Profiling", desc: "Comprehensive risk analysis and scenario testing" },
              ].map((feature, idx) => (
                <Card
                  key={feature.title}
                  className="border-primary/20 hover:border-primary/50 transition-all animate-in fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Experience the Future of Trading</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get access to the world's first AI-powered strategy intelligence platform and make smarter trading
              decisions.
            </p>
            <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
              Launch Strategy Intelligence
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
