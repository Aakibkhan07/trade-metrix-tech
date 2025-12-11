import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import {
  Bot,
  Scan,
  Target,
  BarChart3,
  FileText,
  Wallet,
  TestTube,
  Zap,
  CheckCircle,
  Settings2,
  TrendingUp,
  AlertTriangle,
  LineChart,
  Server,
  Cpu,
  Database,
  Cloud,
  ExternalLink,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LiveDashboardPreview } from "@/components/algo-software/live-dashboard-preview"

const softwareFeatures = [
  {
    icon: Bot,
    title: "Strategy Automation System",
    description:
      "Convert any trading strategy into automated algorithms. Support for technical indicators, price action, and custom logic.",
    details: [
      "100+ built-in technical indicators",
      "Custom strategy creation",
      "Multi-timeframe analysis",
      "Condition-based triggers",
    ],
  },
  {
    icon: Scan,
    title: "Live Market Scanning",
    description: "Real-time scanning of NSE & BSE for trading opportunities based on your criteria.",
    details: [
      "Scan 1000+ stocks instantly",
      "Custom scanner creation",
      "Sector-wise filtering",
      "Volume & price alerts",
    ],
  },
  {
    icon: Target,
    title: "Auto Buy/Sell Triggers",
    description: "Automatic order execution when market conditions match your predefined rules.",
    details: ["Instant order placement", "Multiple order types", "Bracket orders support", "Time-based execution"],
  },
  {
    icon: BarChart3,
    title: "Profit/Loss Analytics Dashboard",
    description: "Comprehensive analytics to track and improve your trading performance.",
    details: ["Real-time P&L tracking", "Trade-wise breakdown", "Performance metrics", "Tax-ready reports"],
  },
  {
    icon: FileText,
    title: "Performance Reports",
    description: "Detailed reports with insights into your trading patterns and success rates.",
    details: ["Daily/weekly/monthly reports", "Win rate analysis", "Risk-adjusted returns", "Drawdown analysis"],
  },
  {
    icon: Wallet,
    title: "Multi-Broker Support",
    description: "Connect with 20+ Indian brokers through secure API integration.",
    details: ["Zerodha, Angel One, Upstox", "ICICI, HDFC, Kotak", "5paisa, Groww, Fyers", "Seamless switching"],
  },
]

const tradingModes = [
  {
    icon: TestTube,
    title: "Backtesting Mode",
    description: "Test your strategies on historical data to validate performance before deploying.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Live Trading Mode",
    description: "Execute real trades automatically through your connected broker account.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Connect Your Broker",
    description: "Link your trading account using secure API keys",
    icon: Wallet,
  },
  {
    step: 2,
    title: "Choose or Create Strategy",
    description: "Select from 50+ pre-built strategies or create your own",
    icon: Settings2,
  },
  {
    step: 3,
    title: "Backtest & Optimize",
    description: "Test against historical data and fine-tune parameters",
    icon: LineChart,
  },
  {
    step: 4,
    title: "Paper Trade",
    description: "Validate in real market conditions with virtual money",
    icon: TestTube,
  },
  {
    step: 5,
    title: "Go Live",
    description: "Deploy your strategy with real capital",
    icon: TrendingUp,
  },
]

export const metadata = {
  title: "Algo Software | TradeMetrix - Algorithmic Trading Platform",
  description:
    "TradeMetrix Algo Software - strategy automation, live scanners, auto buy/sell, P&L analytics, multi-broker support, and AI-powered trading system.",
}

export default function AlgoSoftwarePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Highlighted Launch Algo Platform Hero Section */}
      <section className="relative pt-28 pb-8 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 border-2 border-primary/50 glow text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Launch <span className="text-gradient">Algo Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access your algorithmic trading dashboard. Execute strategies, monitor positions, and analyze performance
              in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
              >
                <Link href="https://trade.trademetrix.tech" target="_blank" rel="noopener noreferrer">
                  <Rocket className="mr-2 h-5 w-5" />
                  Launch Platform Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6 h-auto bg-transparent"
              >
                <Link href="/register">Start Free Trial</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 2-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              Software Provider Only
            </span>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              Advanced <span className="text-gradient">Algo Trading Software</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade algorithmic trading tools designed for Indian markets. Automate your strategies with
              powerful software for NSE, BSE, Nifty & Bank Nifty.
            </p>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass rounded-xl p-4 border border-primary/20">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">0.02s</div>
                <div className="text-xs md:text-sm text-muted-foreground">Avg Execution Time</div>
              </div>
              <div className="glass rounded-xl p-4 border border-primary/20">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">60-88%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Strategy Accuracy*</div>
              </div>
              <div className="glass rounded-xl p-4 border border-primary/20">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Pre-Built Strategies</div>
              </div>
              <div className="glass rounded-xl p-4 border border-primary/20">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Market Monitoring</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              *Based on historical backtesting. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-8 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider mb-6">
            Connect With Any Indian Broker
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center justify-center">
              <div className="glass rounded-lg px-6 py-4 border border-primary/20">
                <div className="text-primary font-bold text-lg">NSE</div>
                <div className="text-xs text-muted-foreground">Integrated</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="glass rounded-lg px-6 py-4 border border-primary/20">
                <div className="text-primary font-bold text-lg">BSE</div>
                <div className="text-xs text-muted-foreground">Connected</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="glass rounded-lg px-6 py-4 border border-primary/20">
                <div className="text-primary font-bold text-lg">20+</div>
                <div className="text-xs text-muted-foreground">Brokers Supported</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="glass rounded-lg px-6 py-4 border border-primary/20">
                <div className="text-primary font-bold text-lg">Software</div>
                <div className="text-xs text-muted-foreground">Provider Only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Technology Architecture
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Powerful Algorithm <span className="text-gradient">Architecture</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technology stack with AI/ML capabilities, real-time data processing, and
              enterprise-grade security protocols.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">System Architecture</h3>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border border-border">
                <svg
                  className="w-full h-80"
                  viewBox="0 0 400 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="TradeMetrix system architecture diagram"
                >
                  {/* Market Data Layer with animation */}
                  <rect x="20" y="20" width="360" height="55" rx="8" fill="currentColor" className="text-primary/10">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <text x="200" y="42" textAnchor="middle" className="fill-primary text-sm font-semibold">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                    Market Data Layer
                  </text>
                  <text x="200" y="62" textAnchor="middle" className="fill-muted-foreground text-xs">
                    NSE/BSE Real-Time Feeds
                  </text>

                  {/* Animated data particles */}
                  {[0, 0.15, 0.3, 0.45, 0.6].map((delay, i) => (
                    <circle key={i} r="3" className="fill-primary">
                      <animateMotion dur="1s" repeatCount="indefinite" begin={`${delay}s`} path="M200,75 L200,95" />
                      <animate
                        attributeName="opacity"
                        values="1;0.3;1"
                        dur="1s"
                        repeatCount="indefinite"
                        begin={`${delay}s`}
                      />
                    </circle>
                  ))}

                  {/* AI Processing Layer with pulse */}
                  <rect x="20" y="95" width="360" height="70" rx="8" fill="currentColor" className="text-primary/20">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
                  </rect>
                  <text x="200" y="120" textAnchor="middle" className="fill-primary text-sm font-semibold">
                    AI Processing Engine
                  </text>
                  <text x="200" y="140" textAnchor="middle" className="fill-muted-foreground text-xs">
                    Machine Learning Models
                  </text>
                  <text x="200" y="155" textAnchor="middle" className="fill-muted-foreground text-xs">
                    Pattern Recognition - Risk Analysis
                  </text>

                  {/* Processing pulse effect */}
                  <circle
                    cx="200"
                    cy="130"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    className="text-primary/30"
                    strokeWidth="2"
                  >
                    <animate attributeName="r" values="15;40;15" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Animated arrows */}
                  <path d="M150 165 L100 185" stroke="currentColor" className="stroke-primary" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="0.8s" repeatCount="indefinite" />
                  </path>
                  <path d="M250 165 L300 185" stroke="currentColor" className="stroke-yellow-500" strokeWidth="2">
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,60;60,0"
                      dur="0.8s"
                      repeatCount="indefinite"
                      begin="0.4s"
                    />
                  </path>

                  {/* Data packets moving */}
                  <circle r="4" className="fill-primary">
                    <animateMotion dur="0.8s" repeatCount="indefinite" path="M150,165 L100,185" />
                  </circle>
                  <circle r="4" className="fill-yellow-500">
                    <animateMotion dur="0.8s" repeatCount="indefinite" begin="0.4s" path="M250,165 L300,185" />
                  </circle>

                  {/* Strategy Engine with pulse */}
                  <rect x="20" y="185" width="170" height="55" rx="8" fill="currentColor" className="text-primary/15">
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.2s"
                    />
                  </rect>
                  <text x="105" y="208" textAnchor="middle" className="fill-primary text-xs font-semibold">
                    Strategy Engine
                  </text>
                  <text x="105" y="228" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                    50+ Algorithms
                  </text>

                  {/* Risk Manager with pulse */}
                  <rect
                    x="210"
                    y="185"
                    width="170"
                    height="55"
                    rx="8"
                    fill="currentColor"
                    className="text-yellow-500/15"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                  </rect>
                  <text x="295" y="208" textAnchor="middle" className="fill-yellow-500 text-xs font-semibold">
                    Risk Management
                  </text>
                  <text x="295" y="228" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                    Real-Time Monitoring
                  </text>

                  {/* Arrows to execution with particles */}
                  <circle r="4" className="fill-primary">
                    <animateMotion dur="0.6s" repeatCount="indefinite" path="M105,240 L150,260" />
                  </circle>
                  <circle r="4" className="fill-yellow-500">
                    <animateMotion dur="0.6s" repeatCount="indefinite" begin="0.3s" path="M295,240 L250,260" />
                  </circle>

                  {/* Execution Layer with glow */}
                  <rect
                    x="20"
                    y="260"
                    width="360"
                    height="40"
                    rx="8"
                    fill="currentColor"
                    className="text-foreground/10"
                  >
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="1s" repeatCount="indefinite" />
                  </rect>
                  <text x="200" y="285" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                    Order Execution Layer (0.02s)
                  </text>

                  {/* Pulsing nodes */}
                  <circle cx="200" cy="80" r="5" className="fill-primary">
                    <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="105" cy="175" r="5" className="fill-primary">
                    <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite" begin="0.33s" />
                  </circle>
                  <circle cx="295" cy="175" r="5" className="fill-yellow-500">
                    <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite" begin="0.66s" />
                  </circle>

                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="currentColor" className="fill-muted-foreground" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Microservices Architecture</div>
                    <div className="text-sm text-muted-foreground">Scalable, fault-tolerant system design</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Real-Time Data Pipeline</div>
                    <div className="text-sm text-muted-foreground">Sub-millisecond market data processing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Multi-Layer Security</div>
                    <div className="text-sm text-muted-foreground">Bank-grade encryption and authentication</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Specifications</h3>
              <div className="space-y-6">
                {/* Performance Metrics with Animations */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">System Performance</h4>
                  <div className="space-y-4">
                    <div className="glass rounded-lg p-4 border border-primary/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Order Execution Speed</span>
                        <span className="font-semibold text-primary">0.02 seconds</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-emerald-500 h-3 rounded-full animate-pulse"
                          style={{ width: "98%" }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-lg p-4 border border-blue-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Data Processing Rate</span>
                        <span className="font-semibold text-blue-500">10,000 ticks/sec</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                          style={{ width: "95%" }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite_0.5s]" />
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-lg p-4 border border-purple-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">System Uptime</span>
                        <span className="font-semibold text-purple-500">99.9%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-violet-500 h-3 rounded-full"
                          style={{ width: "99.9%" }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite_1s]" />
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-lg p-4 border border-orange-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Latency (NSE/BSE)</span>
                        <span className="font-semibold text-orange-500">&lt; 5ms</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full"
                          style={{ width: "97%" }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite_1.5s]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Technology Stack</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass rounded-lg p-3 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                      <div className="flex items-center gap-2 mb-1">
                        <Cpu className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">AI/ML Engine</span>
                      </div>
                      <div className="text-xs text-muted-foreground">TensorFlow, PyTorch</div>
                    </div>
                    <div className="glass rounded-lg p-3 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                      <div className="flex items-center gap-2 mb-1">
                        <Server className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">Data Processing</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Apache Kafka, Redis</div>
                    </div>
                    <div className="glass rounded-lg p-3 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                      <div className="flex items-center gap-2 mb-1">
                        <Database className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">Database</span>
                      </div>
                      <div className="text-xs text-muted-foreground">PostgreSQL, TimescaleDB</div>
                    </div>
                    <div className="glass rounded-lg p-3 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                      <div className="flex items-center gap-2 mb-1">
                        <Cloud className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">Infrastructure</span>
                      </div>
                      <div className="text-xs text-muted-foreground">AWS, Docker, K8s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">From Setup to Live Trading in 5 Steps</h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden lg:block" />

            <div className="grid gap-8 lg:grid-cols-5">
              {workflowSteps.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-medium text-primary mb-2">Step {item.step}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Software Features
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Everything You Need for Automated Trading
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {softwareFeatures.map((feature, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-8 transition-all hover:glow hover:border-primary/50"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Modes */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Trading Modes
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Backtest & Go Live</h2>
            <p className="mt-4 text-lg text-muted-foreground">Validate your strategy, then deploy with confidence</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {tradingModes.map((mode, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border-2 border-transparent hover:border-primary/50 transition-all"
              >
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${mode.bgColor} ${mode.color}`}
                >
                  <mode.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{mode.title}</h3>
                <p className="text-muted-foreground text-lg">{mode.description}</p>
              </div>
            ))}
          </div>

          {/* Risk Warning */}
          <div className="mt-12 glass rounded-xl p-6 max-w-3xl mx-auto border border-yellow-500/30 bg-yellow-500/5">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Risk Disclosure</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Trading in securities market involves risk. Past performance is not indicative of future returns.
                  Please read all related documents carefully before trading. We recommend thorough backtesting first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backtesting Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Backtesting Engine
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Historical <span className="text-gradient">Strategy Testing</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Test your strategies against 5+ years of historical market data. Analyze performance metrics before
              deploying with real capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Backtesting Features */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Backtesting Capabilities</h3>
              <div className="space-y-4">
                {[
                  { title: "5+ Years Historical Data", desc: "NSE & BSE tick-by-tick data from 2019 onwards" },
                  { title: "Multiple Timeframes", desc: "1-min, 5-min, 15-min, hourly, daily candles" },
                  { title: "Slippage Simulation", desc: "Realistic order execution with market impact modeling" },
                  { title: "Commission Calculation", desc: "Accurate brokerage and tax deduction simulation" },
                  { title: "Walk-Forward Analysis", desc: "Out-of-sample testing for strategy validation" },
                  { title: "Monte Carlo Simulation", desc: "Risk analysis with randomized scenario testing" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics Available */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Analysis Metrics</h3>
              <p className="text-muted-foreground mb-6">
                Our backtesting engine provides comprehensive metrics to help you evaluate your strategy&apos;s
                historical behavior:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Total Returns",
                  "Win/Loss Ratio",
                  "Sharpe Ratio",
                  "Sortino Ratio",
                  "Max Drawdown",
                  "Recovery Factor",
                  "Profit Factor",
                  "Avg Trade Duration",
                  "Total Trades",
                  "Consecutive Wins/Losses",
                  "Monthly Breakdown",
                  "Risk-Adjusted Returns",
                ].map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Important Disclaimer */}
              <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Important Notice</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Backtesting results are based on historical data and do not guarantee future performance. Past
                      results are not indicative of future returns. All trading involves risk of loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Dashboard Preview
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Intuitive Trading Dashboard</h2>
          </div>

          <div className="glass rounded-2xl p-2 glow max-w-5xl mx-auto">
            <div className="rounded-xl bg-card p-6">
              {/* Window Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground">TradeMetrix Pro Dashboard</span>
              </div>

              <LiveDashboardPreview />

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-secondary/30 p-4 border border-border relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-foreground">Option Strategies Running</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">LIVE</span>
                  </div>
                  {/* Blurred trades */}
                  <div className="space-y-3 blur-sm pointer-events-none">
                    {[
                      { name: "AIMetrix", status: "Running", pnl: "+₹12,450", color: "text-green-500" },
                      { name: "DeltaMax", status: "Running", pnl: "+₹8,320", color: "text-green-500" },
                      { name: "ThetaPro", status: "Running", pnl: "+₹5,680", color: "text-green-500" },
                      { name: "GammaPro", status: "Pending", pnl: "₹0", color: "text-muted-foreground" },
                    ].map((strategy, i) => (
                      <div key={i} className="flex items-center justify-between text-sm p-2 rounded bg-background/50">
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${strategy.status === "Running" ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`}
                          />
                          <span className="text-foreground">{strategy.name}</span>
                        </div>
                        <span className={strategy.color}>{strategy.pnl}</span>
                      </div>
                    ))}
                  </div>
                  {/* P&L overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 backdrop-blur-[2px]">
                    <div className="bg-card/95 border border-primary/30 rounded-xl px-8 py-4 shadow-xl text-center">
                      <p className="text-xs text-muted-foreground mb-1">Total P&L</p>
                      <p className="text-3xl font-bold text-green-500">+₹26,450</p>
                      <p className="text-xs text-muted-foreground mt-1">From 4 strategies</p>
                    </div>
                  </div>
                </div>

                {/* Strategy Performance Overview - Blurred */}
                <div className="rounded-lg bg-secondary/30 p-4 border border-border relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-foreground">Strategy Categories</span>
                  </div>
                  {/* Blurred categories */}
                  <div className="space-y-3 blur-sm pointer-events-none">
                    {[
                      { name: "Directional Strategies", count: "8 Active", icon: "📈" },
                      { name: "Non-Directional", count: "6 Active", icon: "⚖️" },
                      { name: "Hedging Strategies", count: "4 Active", icon: "🛡️" },
                      { name: "Scalping Options", count: "5 Active", icon: "⚡" },
                    ].map((cat, i) => (
                      <div key={i} className="flex items-center justify-between text-sm p-2 rounded bg-background/50">
                        <div className="flex items-center gap-2">
                          <span>{cat.icon}</span>
                          <span className="text-foreground">{cat.name}</span>
                        </div>
                        <span className="text-primary">{cat.count}</span>
                      </div>
                    ))}
                  </div>
                  {/* Categories overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 backdrop-blur-[2px]">
                    <div className="bg-card/95 border border-primary/30 rounded-xl px-8 py-4 shadow-xl text-center">
                      <p className="text-xs text-muted-foreground mb-1">Strategy Types</p>
                      <p className="text-3xl font-bold text-primary">4</p>
                      <p className="text-xs text-muted-foreground mt-1">Categories Active</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="rounded-lg bg-secondary/30 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Today&apos;s P&L</p>
                  <p className="text-lg font-bold text-green-500">+₹26,450</p>
                </div>
                <div className="rounded-lg bg-secondary/30 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Win Rate</p>
                  <p className="text-lg font-bold text-primary">78%</p>
                </div>
                <div className="rounded-lg bg-secondary/30 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Open Positions</p>
                  <p className="text-lg font-bold text-foreground">2</p>
                </div>
                <div className="rounded-lg bg-secondary/30 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Margin Used</p>
                  <p className="text-lg font-bold text-foreground">62%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
