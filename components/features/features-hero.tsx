import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-foreground">
            <Zap className="h-4 w-4" />
            <span>Platform That Trades For You</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
            Your Strategy. <span className="text-accent">Our Execution.</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
            From signal to execution in milliseconds. Trade Metrix handles entries, exits, stop-losses, and position
            sizing — while you focus on what matters.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/pricing">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/algo-software">See It In Action</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
