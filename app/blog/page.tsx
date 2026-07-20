import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const posts = [
  {
    slug: "build-deploy-algo-strategy",
    title: "Build and Deploy Your Own Algorithmic Trading Strategy",
    excerpt:
      "Learn how to create, backtest, and deploy custom algorithmic trading strategies using a strategy builder — no coding required.",
    date: "2026-07-21",
    readTime: "8 min read",
    tags: ["Strategy Builder", "Backtesting", "Deployment"],
  },
  {
    slug: "trademetrix-vs-tradetron-vs-algotest",
    title: "Trade Metrix vs TradeTron vs AlgoTest: Strategy Builder Comparison",
    excerpt:
      "A detailed comparison of the top algo strategy builder platforms in India — features, pricing, backtesting, and ease of use.",
    date: "2026-07-21",
    readTime: "10 min read",
    tags: ["Comparison", "Platforms", "Algo Trading"],
  },
  {
    slug: "how-to-backtest-strategies",
    title: "How to Backtest Trading Strategies Before Going Live",
    excerpt:
      "Backtesting is essential before deploying any strategy live. Here's a step-by-step guide to testing your trading algorithms effectively.",
    date: "2026-07-21",
    readTime: "6 min read",
    tags: ["Backtesting", "Risk Management", "Strategy Testing"],
  },
  {
    slug: "custom-trading-bot-builder-india",
    title: "Custom Trading Bot Builder for Indian Markets",
    excerpt:
      "Build your own automated trading bot for NSE and BSE. A guide to creating custom algo trading strategies for Indian stock markets.",
    date: "2026-07-21",
    readTime: "7 min read",
    tags: ["Trading Bot", "Automation", "Indian Markets"],
  },
]

export const metadata = {
  title: "Blog | Trade Metrix Technologies — Algo Trading Insights",
  description:
    "Learn about algorithmic trading strategy building, backtesting, deployment, and platform comparisons. Guides and insights for Indian traders.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Blog</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Guides, comparisons, and insights on building and deploying algorithmic trading strategies.
              </p>
            </div>
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="border rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time>{post.date}</time>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
