import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

export function AlgoCTA() {
  return (
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="mx-auto max-w-4xl border-accent/30 bg-accent/5">
          <CardContent className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-bold">Ready to Start Trading?</h2>
              <p className="text-muted-foreground">
                Get started with TradeMetrix Algo Software today. Choose a plan that fits your trading needs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="https://trade.trademetrix.tech" target="_blank" rel="noopener noreferrer">
                  Launch Platform <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
