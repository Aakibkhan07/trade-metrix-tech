import { Badge } from "@/components/ui/badge"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Since 2020
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
            We Build <span className="text-accent">Trading Machines</span>, Not Dreams
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Trade Metrix was born from a simple belief: traders deserve systems, not signals. We engineer algorithms
            that trade with discipline — so you don't have to fight your emotions.
          </p>
        </div>
      </div>
    </section>
  )
}
