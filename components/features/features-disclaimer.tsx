import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturesDisclaimer() {
  return (
    <section className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Alert className="mx-auto max-w-4xl border-accent/30 bg-accent/5">
          <AlertTriangle className="h-5 w-5 text-accent" />
          <AlertTitle className="text-accent-foreground">Important Disclaimer</AlertTitle>
          <AlertDescription className="mt-2 text-sm text-muted-foreground leading-relaxed">
            <p className="mb-2">
              TradeMetrix is a <strong>TECHNOLOGY COMPANY</strong> providing algorithmic trading software. We are in the
              tech business, not the finance business. We do not provide investment advice, recommendations, or
              portfolio management services.
            </p>
            <p className="mb-2">
              Trading in securities market involves substantial risk of loss and is not suitable for every investor.
              Past performance (70-88% accuracy ranges) is indicative only and does not guarantee future results.
              Markets are volatile and returns are never guaranteed.
            </p>
            <p>
              <strong>No refund policy applies.</strong> By using our software, you acknowledge these risks and accept
              full responsibility for your trading decisions.
            </p>
          </AlertDescription>
        </Alert>

        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
