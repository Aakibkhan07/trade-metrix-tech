import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Database, Cloud, Shield, Zap, Globe } from "lucide-react"

const techCategories = [
  {
    icon: Server,
    title: "Backend Infrastructure",
    technologies: ["Node.js", "Python", "WebSocket", "REST APIs", "Microservices"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    technologies: ["Real-time Data Feeds", "Time Series DB", "ML Models", "Backtesting Engine"],
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    technologies: ["AWS", "High Availability", "Auto Scaling", "Global CDN", "99.9% Uptime"],
  },
  {
    icon: Shield,
    title: "Security",
    technologies: ["End-to-End Encryption", "2FA", "API Security", "Data Protection"],
  },
  {
    icon: Zap,
    title: "Performance",
    technologies: ["Sub-ms Latency", "Order Co-location", "Smart Routing", "Queue Management"],
  },
  {
    icon: Globe,
    title: "Market Coverage",
    technologies: ["NSE", "BSE", "Nifty 50", "Bank Nifty", "F&O Segment"],
  },
]

export function AboutTechStack() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Technology Stack</h2>
          <p className="text-muted-foreground">
            Built with cutting-edge technology for reliability, speed, and security
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <Card key={category.title} className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <category.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
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
