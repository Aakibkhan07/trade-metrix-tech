import { Target, Eye, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize algorithmic trading by providing powerful, accessible software that enables traders of all levels to execute sophisticated strategies with institutional-grade tools.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted algorithmic trading software platform, known for innovation, reliability, and unwavering commitment to trader success through technology.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Precision in execution, clarity in communication, and control for our users. We believe in transparency, continuous innovation, and putting our traders first in everything we build.",
  },
]

export function AboutMission() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <Card key={item.title} className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
