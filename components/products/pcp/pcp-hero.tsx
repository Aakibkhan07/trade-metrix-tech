import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Target, Zap } from "lucide-react"

export function PCPHero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-float-reverse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Points-Based Trading System</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Stop Chasing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Daily Profits</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Trade with our 20 proven strategies. Cover your points target. Complete your plan. That's it.
          </p>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground">Clear Target</div>
              <div className="text-xs text-muted-foreground">No guesswork, just points</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-semibold text-foreground">20 Strategies</div>
              <div className="text-xs text-muted-foreground">All included in every plan</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-success" />
              </div>
              <div className="text-sm font-semibold text-foreground">No Time Limit</div>
              <div className="text-xs text-muted-foreground">Complete when you hit target</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 px-8">
              <Link href="#tiers">View Plans & Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8">
              <Link href="#explanation">Learn How It Works</Link>
            </Button>
          </div>

          {/* Trust Message */}
          <p className="text-sm text-muted-foreground">
            Join traders who focus on the system, not the stress. No guarantees. Just disciplined trading.
          </p>
        </div>
      </div>
    </section>
  )
}
