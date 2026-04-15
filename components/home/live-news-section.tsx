"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Newspaper,
  ExternalLink,
  Clock,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  RefreshCw,
  Rss,
  Globe,
  Building2,
  IndianRupee,
  Activity,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NewsItem {
  id: string
  title: string
  source: string
  time: string
  category: "market" | "stocks" | "economy" | "global"
  sentiment?: "bullish" | "bearish" | "neutral"
  url: string
}

// Simulated live news data
const generateNews = (): NewsItem[] => [
  {
    id: "1",
    title: "Nifty 50 touches all-time high amid strong FII inflows",
    source: "Economic Times",
    time: "2 min ago",
    category: "market",
    sentiment: "bullish",
    url: "https://economictimes.indiatimes.com/markets",
  },
  {
    id: "2",
    title: "RBI keeps repo rate unchanged at 6.5% in latest policy meet",
    source: "Moneycontrol",
    time: "15 min ago",
    category: "economy",
    sentiment: "neutral",
    url: "https://www.moneycontrol.com/news/business/economy",
  },
  {
    id: "3",
    title: "Bank Nifty rallies 400 points on strong Q3 earnings outlook",
    source: "LiveMint",
    time: "32 min ago",
    category: "market",
    sentiment: "bullish",
    url: "https://www.livemint.com/market",
  },
  {
    id: "4",
    title: "IT stocks under pressure as US Fed signals prolonged high rates",
    source: "Business Standard",
    time: "45 min ago",
    category: "stocks",
    sentiment: "bearish",
    url: "https://www.business-standard.com/markets",
  },
  {
    id: "5",
    title: "Reliance Industries announces major investment in green energy",
    source: "NDTV Profit",
    time: "1 hr ago",
    category: "stocks",
    sentiment: "bullish",
    url: "https://www.ndtvprofit.com",
  },
  {
    id: "6",
    title: "Global markets mixed as investors await US inflation data",
    source: "Reuters",
    time: "1.5 hr ago",
    category: "global",
    sentiment: "neutral",
    url: "https://www.reuters.com/markets",
  },
  {
    id: "7",
    title: "HDFC Bank crosses Rs 12 lakh crore market cap milestone",
    source: "Economic Times",
    time: "2 hr ago",
    category: "stocks",
    sentiment: "bullish",
    url: "https://economictimes.indiatimes.com/markets",
  },
  {
    id: "8",
    title: "Rupee strengthens against dollar on positive FII sentiment",
    source: "Moneycontrol",
    time: "2.5 hr ago",
    category: "economy",
    sentiment: "bullish",
    url: "https://www.moneycontrol.com/news/business/economy",
  },
]

const newsSources = [
  { name: "Economic Times", url: "https://economictimes.indiatimes.com/markets", icon: Newspaper },
  { name: "Moneycontrol", url: "https://www.moneycontrol.com/news/business/markets", icon: TrendingUp },
  { name: "LiveMint", url: "https://www.livemint.com/market", icon: Globe },
  { name: "Business Standard", url: "https://www.business-standard.com/markets", icon: Building2 },
  { name: "NDTV Profit", url: "https://www.ndtvprofit.com", icon: IndianRupee },
  { name: "Reuters India", url: "https://www.reuters.com/markets/asia", icon: Rss },
]

const categoryIcons = {
  market: TrendingUp,
  stocks: Building2,
  economy: IndianRupee,
  global: Globe,
}

export function LiveNewsSection() {
  const [news, setNews] = useState<NewsItem[]>(generateNews())
  const [activeCategory, setActiveCategory] = useState("all")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  // Auto-refresh news every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshNews()
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const refreshNews = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      // Shuffle and update times for simulation
      const shuffled = [...generateNews()].sort(() => Math.random() - 0.5)
      setNews(shuffled)
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  const filteredNews = activeCategory === "all" ? news : news.filter((item) => item.category === activeCategory)

  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case "bullish":
        return "text-emerald-500"
      case "bearish":
        return "text-red-500"
      default:
        return "text-muted-foreground"
    }
  }

  const getSentimentIcon = (sentiment?: string) => {
    switch (sentiment) {
      case "bullish":
        return TrendingUp
      case "bearish":
        return TrendingDown
      default:
        return AlertCircle
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4"
        >
          <div>
            <Badge variant="outline" className="mb-4 border-red-500/30 bg-red-500/5 text-red-500">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
              Live Updates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Stay Sharp.{" "}
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                Stay Informed.
              </span>
            </h2>
            <p className="text-muted-foreground">Know what's moving the market — let the algo handle the trades.</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <Button variant="outline" size="sm" onClick={refreshNews} disabled={isRefreshing}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Feed */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader className="pb-4">
                <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                  <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="market">Market</TabsTrigger>
                    <TabsTrigger value="stocks">Stocks</TabsTrigger>
                    <TabsTrigger value="economy">Economy</TabsTrigger>
                    <TabsTrigger value="global">Global</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50 max-h-[500px] overflow-y-auto">
                  <AnimatePresence mode="popLayout">
                    {filteredNews.map((item, index) => {
                      const SentimentIcon = getSentimentIcon(item.sentiment)
                      const CategoryIcon = categoryIcons[item.category]

                      return (
                        <motion.a
                          key={item.id}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors group"
                        >
                          {/* Category Icon */}
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <CategoryIcon className="w-5 h-5 text-primary" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="font-medium">{item.source}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {item.time}
                              </span>
                              {item.sentiment && (
                                <span className={`flex items-center gap-1 ${getSentimentColor(item.sentiment)}`}>
                                  <SentimentIcon className="w-3 h-3" />
                                  {item.sentiment}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* External link */}
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </motion.a>
                      )
                    })}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links to News Sources */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Rss className="w-5 h-5 text-primary" />
                  News Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {newsSources.map((source, index) => (
                  <motion.a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <source.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="flex-1 text-sm font-medium group-hover:text-primary transition-colors">
                      {source.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Market Pulse Card */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-violet-500/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Market Pulse</h3>
                    <p className="text-xs text-muted-foreground">Real-time sentiment</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Overall Sentiment</span>
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Bullish
                    </Badge>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "72%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Bearish 28%</span>
                    <span>Bullish 72%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
