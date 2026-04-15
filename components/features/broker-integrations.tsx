import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const brokers = [
  "Zerodha",
  "Upstox",
  "Angel One",
  "5paisa",
  "ICICI Direct",
  "HDFC Securities",
  "Kotak Securities",
  "Motilal Oswal",
  "Sharekhan",
  "Groww",
  "Alice Blue",
  "IIFL Securities",
  "Axis Direct",
  "Edelweiss",
  "Finvasia",
  "Fyers",
  "Dhan",
  "Paytm Money",
  "SBI Securities",
  "Yes Securities",
]

export function BrokerIntegrations() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            20+ Integrations
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Seamless Broker Integration</h2>
          <p className="text-muted-foreground">
            Connect your preferred broker and start trading. We support all major Indian brokers with secure API
            integration.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl border-border/50 bg-card/50">
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {brokers.map((broker) => (
                <div
                  key={broker}
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {broker}
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              * Broker availability may vary. Contact support for specific integration requirements.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
