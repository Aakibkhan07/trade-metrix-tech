"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, TrendingUp, AlertTriangle, ChevronRight, Zap } from "lucide-react"
import { economicEvents, type EconomicEvent } from "@/lib/trading-store"

export function EconomicCalendar() {
  const [showAll, setShowAll] = useState(false)

  const sortedEvents = [...economicEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const displayEvents = showAll ? sortedEvents : sortedEvents.slice(0, 4)

  const getImpactColor = (impact: EconomicEvent["impact"]) => {
    switch (impact) {
      case "HIGH":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "MEDIUM":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "LOW":
        return "bg-green-500/20 text-green-400 border-green-500/30"
    }
  }

  const getCountryFlag = (country: string) => {
    switch (country) {
      case "IN":
        return "🇮🇳"
      case "US":
        return "🇺🇸"
      default:
        return "🌐"
    }
  }

  const isUpcoming = (date: string) => {
    const eventDate = new Date(date)
    const today = new Date()
    const diffDays = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return diffDays <= 3 && diffDays >= 0
  }

  return (
    <Card className="glass glow-sm hover-scale">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-purple-400 icon-glow" />
            </div>
            <span>Economic Calendar</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="text-purple-400 hover:text-purple-300"
          >
            {showAll ? "Show Less" : "View All"}
            <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${showAll ? "rotate-90" : ""}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {displayEvents.map((event, index) => (
          <div
            key={event.id}
            className={`p-3 rounded-lg border transition-all duration-300 ${
              isUpcoming(event.date)
                ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30 animate-pulse-glow"
                : "bg-background/50 border-border/50 hover:border-purple-500/30"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{getCountryFlag(event.country)}</div>
                <div>
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    at {event.time} IST
                  </div>
                  {(event.forecast || event.previous) && (
                    <div className="flex items-center gap-3 mt-2 text-xs">
                      {event.forecast && (
                        <span className="text-blue-400">
                          <TrendingUp className="h-3 w-3 inline mr-1" />
                          Forecast: {event.forecast}
                        </span>
                      )}
                      {event.previous && <span className="text-muted-foreground">Previous: {event.previous}</span>}
                    </div>
                  )}
                </div>
              </div>
              <Badge variant="outline" className={getImpactColor(event.impact)}>
                {event.impact === "HIGH" && <AlertTriangle className="h-3 w-3 mr-1" />}
                {event.impact}
              </Badge>
            </div>
            {isUpcoming(event.date) && (
              <div className="mt-2 flex items-center gap-1 text-xs text-purple-400">
                <Zap className="h-3 w-3 animate-pulse" />
                Upcoming - High market volatility expected
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
