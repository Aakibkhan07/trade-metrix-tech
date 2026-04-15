import { Badge } from "@/components/ui/badge"
import { BookOpen, Sparkles } from "lucide-react"

interface KnowledgeHeroProps {
  title: string
  subtitle: string
  description: string
}

export function KnowledgeHero({ title, subtitle, description }: KnowledgeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400 animate-pulse-glow">
            <BookOpen className="h-4 w-4 icon-glow" />
            <span>Educational Resources</span>
            <Sparkles className="h-3 w-3 text-blue-400 icon-glow-blue" />
          </div>

          <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400">
            {subtitle}
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
            <span className="text-gradient">{title}</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{description}</p>
        </div>
      </div>
    </section>
  )
}
