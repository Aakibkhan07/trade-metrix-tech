import { Plus, Code, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const addons = [
  {
    icon: Plus,
    title: "Additional Strategy Pack",
    description:
      "Expand your portfolio with additional strategies. Each pack includes 3 pre-built, tested strategies across different market conditions.",
    price: "₹5,000",
    period: "per pack",
  },
  {
    icon: Code,
    title: "Custom Strategy Development",
    description:
      "Get a fully custom strategy built to your specifications. Includes backtesting, optimization, and deployment support.",
    price: "₹15,000",
    period: "per strategy",
  },
  {
    icon: GraduationCap,
    title: "1-on-1 Training Session",
    description:
      "Personal training session with our algo trading experts. Learn platform features, strategy building, and risk management.",
    price: "₹3,000",
    period: "per hour",
  },
]

export function PricingAddOns() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Add-On Services</h2>
          <p className="text-muted-foreground">Enhance your trading experience with optional add-ons</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {addons.map((addon) => (
            <Card key={addon.title} className="border-border/50">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <addon.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{addon.title}</CardTitle>
                <CardDescription>{addon.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{addon.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{addon.period}</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Inquire</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
