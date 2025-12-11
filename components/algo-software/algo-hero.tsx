import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, ExternalLink, Cpu } from "lucide-react"

export function AlgoHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-foreground">
            <Cpu className="h-4 w-4" />
            <span>AI-Powered Trading Platform</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
            TradeMetrix <span className="text-accent">Algo Software</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
            Professional-grade algorithmic trading software with strategy automation, real-time scanners, automated
            execution, and comprehensive analytics. Trade smarter with AI-powered insights.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <Badge variant="secondary">Strategy Automation</Badge>
            <Badge variant="secondary">Live Scanners</Badge>
            <Badge variant="secondary">Auto Buy/Sell</Badge>
            <Badge variant="secondary">P&L Analytics</Badge>
            <Badge variant="secondary">20+ Brokers</Badge>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://trade.trademetrix.tech" target="_blank" rel="noopener noreferrer">
                Launch Platform <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">
                View Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
