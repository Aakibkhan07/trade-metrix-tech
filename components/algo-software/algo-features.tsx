import { Bot, Scan, ShoppingCart, LineChart, Layers, History, Cloud, FileText, Smartphone, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Bot,
    title: "Strategy Automation",
    description:
      "Fully automated strategy execution with zero manual intervention. Set your conditions and let the system trade for you.",
  },
  {
    icon: Scan,
    title: "Live Scanners",
    description:
      "Real-time market scanners that identify trading opportunities based on your criteria across multiple instruments.",
  },
  {
    icon: ShoppingCart,
    title: "Auto Buy/Sell",
    description:
      "Instant order execution when conditions are met. One-click trading with smart order routing to your broker.",
  },
  {
    icon: LineChart,
    title: "P&L Analytics",
    description:
      "Comprehensive profit and loss tracking with detailed reports, trade journals, and performance analytics.",
  },
  {
    icon: Layers,
    title: "Multi-Broker Support",
    description: "Connect multiple broker accounts and trade across platforms seamlessly. 20+ brokers supported.",
  },
  {
    icon: History,
    title: "Backtesting Engine",
    description:
      "Test strategies on historical data to validate performance. Essential step before live deployment to ensure strategy viability.",
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    description: "100% cloud-based infrastructure. No downloads, no installation. Access from any device, anywhere.",
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description:
      "Daily, weekly, and monthly performance reports. Export to Excel, track tax-relevant P&L, and analyze trades.",
  },
  {
    icon: Smartphone,
    title: "Mobile Alerts",
    description:
      "Real-time notifications for trade executions, signals, and important market events on your mobile device.",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description:
      "Bank-grade encryption, 2FA authentication, and secure API connections. Your data and trades are protected.",
  },
]

export function AlgoFeatures() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Software Capabilities</h2>
          <p className="text-muted-foreground">Everything you need for professional algorithmic trading</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
