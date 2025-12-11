const timeline = [
  {
    year: "2020",
    title: "Founded",
    description:
      "TradeMetrix was founded with a vision to bring institutional-grade algorithmic trading to retail traders in India.",
  },
  {
    year: "2021",
    title: "First Platform Release",
    description:
      "Launched our first version with basic algo execution, supporting 5 major brokers and serving 500+ beta users.",
  },
  {
    year: "2022",
    title: "Strategy Builder Launch",
    description:
      "Introduced the visual strategy builder, allowing traders to create custom strategies without coding. User base crossed 2,000.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description:
      "Integrated AI-powered market analysis and signal generation. Expanded to 15+ broker integrations and 5,000+ users.",
  },
  {
    year: "2024",
    title: "Enterprise Solutions",
    description:
      "Launched enterprise tier for institutional traders. Crossed 8,000 active users with 40+ pre-built strategies.",
  },
  {
    year: "2025",
    title: "Market Leader",
    description:
      "Became one of India's leading algo trading software providers with 10,000+ users, 50+ strategies, and 20+ broker integrations.",
  },
]

export function AboutTimeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Journey</h2>
          <p className="text-muted-foreground">
            From a small startup to India's trusted algo trading software provider
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative mb-8 flex items-start gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 z-10 h-3 w-3 rounded-full bg-accent md:left-1/2 md:-translate-x-1/2" />

              {/* Content */}
              <div
                className={`ml-10 flex-1 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
              >
                <div className="rounded-lg border border-border bg-card p-4">
                  <span className="mb-1 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                    {item.year}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
