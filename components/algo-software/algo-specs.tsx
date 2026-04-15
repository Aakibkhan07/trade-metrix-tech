import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const specs = {
  Platform: [
    { label: "Deployment", value: "100% Cloud-Based" },
    { label: "Access", value: "Web Browser (Any Device)" },
    { label: "Uptime SLA", value: "99.99%" },
    { label: "Data Centers", value: "Mumbai (Primary), Singapore (DR)" },
  ],
  Trading: [
    { label: "Exchanges", value: "NSE, BSE" },
    { label: "Segments", value: "Equity, F&O, Currency" },
    { label: "Order Types", value: "Market, Limit, SL, SL-M, GTT" },
    { label: "Brokers Supported", value: "20+" },
  ],
  Performance: [
    { label: "Order Latency", value: "<1 millisecond" },
    { label: "Data Refresh", value: "Real-time (Tick-by-Tick)" },
    { label: "Max Strategies", value: "Based on Plan" },
    { label: "Concurrent Users", value: "Unlimited" },
  ],
  Security: [
    { label: "Encryption", value: "AES-256, TLS 1.3" },
    { label: "Authentication", value: "2FA, OAuth 2.0" },
    { label: "API Security", value: "Rate Limited, IP Whitelist" },
    { label: "Data Retention", value: "As per regulatory norms" },
  ],
}

export function AlgoSpecs() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Technical Specifications</h2>
          <p className="text-muted-foreground">Enterprise-grade infrastructure and security</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {Object.entries(specs).map(([category, items]) => (
            <Card key={category} className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <Badge variant="secondary">{item.value}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
