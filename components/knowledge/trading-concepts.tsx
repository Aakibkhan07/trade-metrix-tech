import { ArrowUpRight, ArrowDownRight, Repeat, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const concepts = [
  {
    icon: ArrowUpRight,
    title: "Long Position",
    description:
      "Buying a security expecting price to rise. Profit = Sell Price - Buy Price. Used when bullish on a stock or index.",
  },
  {
    icon: ArrowDownRight,
    title: "Short Position",
    description:
      "Selling a security expecting price to fall. Profit = Sell Price - Buy Price. Used when bearish. Requires margin.",
  },
  {
    icon: Repeat,
    title: "Hedging",
    description:
      "Taking offsetting positions to reduce risk. E.g., buying Put options to protect long stock positions against downside.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Techniques to limit losses: position sizing (1-2% per trade), stop losses, diversification, and maximum daily loss limits.",
  },
]

export function TradingConcepts() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Key Trading Concepts</h2>
          <p className="text-muted-foreground">Understanding positions, hedging, and risk management</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {concepts.map((concept) => (
            <Card key={concept.title} className="border-border/50">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <concept.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{concept.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
