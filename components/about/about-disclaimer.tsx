import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutDisclaimer() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Alert className="mx-auto max-w-4xl border-accent/30 bg-accent/5">
          <Info className="h-5 w-5 text-accent" />
          <AlertTitle className="text-accent-foreground">Important Notice</AlertTitle>
          <AlertDescription className="mt-2 text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>
              TradeMetrix is a <strong>TECHNOLOGY COMPANY</strong> providing algorithmic trading software and automation
              tools for traders.
            </p>
            <p>
              We are in the <strong>technology business</strong>, not the finance or advisory business. We build
              software tools - we do not provide investment advice, stock recommendations, or portfolio management
              services.
            </p>
            <p>
              All trading decisions made using our software are solely at the user's discretion and risk. Past
              performance does not guarantee future results. Markets are subject to risk.
            </p>
          </AlertDescription>
        </Alert>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/features">Explore Features</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
