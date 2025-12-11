import { Server, Database, Cpu, Globe, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const architectureComponents = [
  {
    icon: Globe,
    title: "Market Data Feed",
    description: "Real-time tick-by-tick data from NSE & BSE",
  },
  {
    icon: Cpu,
    title: "AI Engine",
    description: "Signal generation & pattern recognition",
  },
  {
    icon: Server,
    title: "Strategy Engine",
    description: "Rule-based execution & order management",
  },
  {
    icon: Database,
    title: "Data Store",
    description: "Historical data & analytics storage",
  },
  {
    icon: Shield,
    title: "Risk Manager",
    description: "Position limits & loss controls",
  },
  {
    icon: Zap,
    title: "Order Router",
    description: "Smart routing to connected brokers",
  },
]

export function AlgoArchitecture() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">AI System Architecture</h2>
          <p className="text-muted-foreground">Enterprise-grade infrastructure built for reliability and speed</p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Architecture Flow */}
          <div className="grid gap-4 md:grid-cols-3">
            {architectureComponents.map((component, index) => (
              <Card key={component.title} className="relative border-border/50 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <component.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1 font-semibold">{component.title}</h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </CardContent>
                {/* Connector */}
                {index < architectureComponents.length - 1 && index !== 2 && (
                  <div className="absolute -right-2 top-1/2 hidden h-0.5 w-4 bg-border md:block" />
                )}
              </Card>
            ))}
          </div>

          {/* Technical Details */}
          <Card className="mt-8 border-border/50 bg-muted/30">
            <CardContent className="grid gap-6 p-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">&lt;1ms</div>
                <div className="text-sm text-muted-foreground">Order Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99.99%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
