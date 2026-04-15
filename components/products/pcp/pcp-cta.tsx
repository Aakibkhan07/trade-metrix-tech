import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PCPCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" id="cta">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Trade Smarter, Not Harder?</h2>

        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          PCP is about building a discipline that lasts. No daily pressure, no emotional trading, just systematic 
          results over a 3-month cycle. Join traders who think differently.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="/contact">Schedule a Call with Our Team</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base bg-transparent" asChild>
            <Link href="/pricing">View All Plans</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Have questions? Reach out to us. We're here to help you understand if PCP is right for you.
        </p>
      </div>
    </section>
  )
}
