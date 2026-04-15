import { BookOpen } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function KnowledgeDisclaimer() {
  return (
    <section className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Alert className="mx-auto max-w-4xl border-accent/30 bg-accent/5">
          <BookOpen className="h-5 w-5 text-accent" />
          <AlertTitle className="text-accent-foreground">Educational Disclaimer</AlertTitle>
          <AlertDescription className="mt-2 text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>
              The information provided on this page is for <strong>educational purposes only</strong> and should not be
              construed as investment advice, recommendation, or solicitation to trade.
            </p>
            <p>
              TradeMetrix is a <strong>TECHNOLOGY COMPANY</strong> that builds trading software. We are in the tech
              business, not finance. Always consult with a qualified financial advisor before making investment
              decisions.
            </p>
            <p>
              Trading involves substantial risk of loss. Past performance does not guarantee future results. Please read
              all scheme related documents carefully before investing.
            </p>
          </AlertDescription>
        </Alert>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/features">Explore Platform</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
