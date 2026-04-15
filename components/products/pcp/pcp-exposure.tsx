"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PCPExposure() {
  const [selectedExposure, setSelectedExposure] = useState<"nifty" | "sensex">("nifty")

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Choose Your Trading Exposure</h2>

        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Choose your preferred index. Your exposure remains consistent as you trade towards your points target.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card
            className={`cursor-pointer transition-all ${
              selectedExposure === "nifty"
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => setSelectedExposure("nifty")}
          >
            <CardHeader>
              <CardTitle className="text-2xl">NIFTY 50 Index</CardTitle>
              <CardDescription>Higher potential, moderate volatility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Exposure Details</p>
                <p className="text-lg font-bold text-foreground">10 Lots</p>
                <p className="text-sm text-muted-foreground">Lot size: 65</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">{""}</p>
                <p className="text-2xl font-bold text-primary">{""}</p>
                <p className="text-sm text-muted-foreground">{""}</p>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all ${
              selectedExposure === "sensex"
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => setSelectedExposure("sensex")}
          >
            <CardHeader>
              <CardTitle className="text-2xl">SENSEX Index</CardTitle>
              <CardDescription>Stable, lower volatility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Exposure Details</p>
                <p className="text-lg font-bold text-foreground">20 Lots</p>
                <p className="text-sm text-muted-foreground">Lot size: 20</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Typical Points Pace</p>
                <p className="text-2xl font-bold text-primary">50-70Points/Day</p>
                <p className="text-sm text-muted-foreground">Varies based on market conditions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="font-bold text-foreground mb-4">Important to Know</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-warning font-bold">•</span>
              <span>These point estimates are illustrative, not guaranteed outcomes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-warning font-bold">•</span>
              <span>Actual points depend on market conditions and signal execution quality.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-warning font-bold">•</span>
              <span>Once you choose an exposure, maintain it consistently until you hit your points target.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
