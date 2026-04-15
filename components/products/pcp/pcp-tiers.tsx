'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, TrendingUp, Award, Crown } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    description: "Start with 800 points target",
    pointsRange: "800 Points",
    price: "₹1,20,000",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
    badge: "Recommended",
    features: [
      "All 20 Proprietary Strategies Included",
      "Real-time trade alerts & notifications",
      "5 Broker integrations with API access",
      "Advanced charting with technical indicators",
      "Live performance dashboard & analytics",
      "Historical trade data & backtesting",
      "Stop loss & profit target automation",
      "Position sizing calculator",
      "Risk management framework included",
      "Email & WhatsApp support",
      "Weekly strategy performance reports",
      "Monthly risk assessment reviews",
    ],
    benefits: [
      "Learn while trading",
      "All strategies available",
      "Complete automation",
      "Risk management built-in",
      "Community learning",
    ],
  },
  {
    name: "Pro",
    description: "Aim higher with 1500 points",
    pointsRange: "1500 Points",
    price: "₹2,40,000",
    icon: Award,
    color: "from-purple-500 to-pink-600",
    badge: "Popular",
    features: [
      "All 20 Proprietary Strategies Included",
      "Real-time alerts with AI predictions",
      "All brokers with API access support",
      "Advanced portfolio analytics engine",
      "Custom strategy builder interface",
      "Live market scan & opportunity finder",
      "API access for custom integrations",
      "Multi-timeframe analysis tools",
      "Drag & drop strategy designer",
      "24/7 Phone & chat support",
      "Priority customer onboarding",
      "Advanced risk management tools",
      "Weekly 1-on-1 strategy sessions",
      "Quarterly risk audit & optimization",
    ],
    benefits: [
      "Build your own strategies",
      "Institutional tools access",
      "Premium support included",
      "Deeper analytics",
      "API automation capability",
    ],
  },
  {
    name: "Elite",
    description: "Maximum points target 2200",
    pointsRange: "2200 Points",
    price: "₹3,10,000",
    icon: Crown,
    color: "from-amber-500 to-orange-600",
    badge: "Best Value",
    features: [
      "All 20 Proprietary Strategies Included",
      "AI-powered market prediction engine",
      "All brokers with enterprise API access",
      "Enterprise-grade analytics platform",
      "Full custom strategy development support",
      "Enterprise risk management system",
      "Real-time portfolio risk optimization",
      "Multi-asset class trading (Stocks, Options, Futures, Commodities)",
      "White-label solution available",
      "Dedicated account manager (24/7)",
      "Weekly elite traders webinar access",
      "Quarterly risk management audits",
      "Custom risk reporting tools",
      "Advanced alert system with webhooks",
      "Institutional partnership network access",
      "Priority feature request queue",
    ],
    benefits: [
      "Maximum profit potential",
      "Dedicated support team",
      "Institutional capabilities",
      "Custom solutions available",
      "Exclusive trader network",
    ],
  },
]

export function PCPTiers() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="tiers">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,180,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,180,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-float-reverse" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pick Your Points Target</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each plan gives you all 20 strategies. The only difference is your points target and plan fee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <div key={index} className="relative group">
                {tier.badge === "Popular" && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full flex flex-col border-2 transition-all duration-300 ${
                  tier.badge === "Popular"
                    ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                    : "border-border hover:border-primary/50"
                } ${tier.badge === "Best Value" ? "border-amber-500/50" : ""}`}>
                  <CardHeader className={`bg-gradient-to-br ${tier.color} bg-opacity-5 pb-6`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl text-foreground mb-2">{tier.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
                      </div>
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-6">
                    {/* Pricing and Points */}
                    <div className="mb-6 pb-6 border-b border-border">
                      <div className="text-3xl font-bold text-primary mb-1">{tier.price}</div>
                      <div className="text-2xl font-bold text-foreground mb-1">{tier.pointsRange} Target</div>
                      <p className="text-sm text-success font-semibold">Cover these points with our strategies</p>
                    </div>

                    {/* Key Metrics */}
                    <div className="mb-8 space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Trading Days</span>
                        <span className="font-semibold text-foreground">{tier.tradingDays}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Expected Accuracy</span>
                        <span className="font-semibold text-foreground">{tier.accuracy}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Profit Days (Approx)</span>
                        <span className="font-semibold text-foreground">{tier.profitDays}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Loss Days (Approx)</span>
                        <span className="font-semibold text-foreground">{tier.lossDays}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm pt-2 border-t border-border">
                        <span className="text-muted-foreground">Total Points Target</span>
                        <span className="font-bold text-primary">{tier.pointsTarget}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Monthly Average</span>
                        <span className="font-semibold text-foreground">{tier.monthlyPoints}</span>
                      </div>
                      <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                        <span className="font-semibold">Exposure:</span> {tier.exposure}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8 flex-1">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">What's Included</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full ${
                        tier.badge === "Popular"
                          ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700"
                          : tier.badge === "Best Value"
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Comparison Guide */}
        <div className="mt-20 pt-20 border-t border-border/30">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">Detailed Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-bold text-foreground bg-primary/5">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground bg-primary/5">Starter</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground bg-primary/5">Pro</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground bg-primary/5">Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 font-semibold text-foreground">Points Target</td>
                  <td className="px-6 py-4 text-center font-bold text-primary">800 Points</td>
                  <td className="px-6 py-4 text-center font-bold text-primary">1500 Points</td>
                  <td className="px-6 py-4 text-center font-bold text-primary">2200 Points</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">Plan Fee</td>
                  <td className="px-6 py-4 text-center font-bold text-foreground">₹1,20,000</td>
                  <td className="px-6 py-4 text-center font-bold text-foreground">₹2,40,000</td>
                  <td className="px-6 py-4 text-center font-bold text-foreground">₹3,10,000</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">Total Strategies</td>
                  <td className="px-6 py-4 text-center">✓ All 20</td>
                  <td className="px-6 py-4 text-center">✓ All 20</td>
                  <td className="px-6 py-4 text-center">✓ All 20</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 font-semibold text-foreground">Broker Support (API Access)</td>
                  <td className="px-6 py-4 text-center">5 Brokers</td>
                  <td className="px-6 py-4 text-center">All major brokers</td>
                  <td className="px-6 py-4 text-center">All brokers + Custom API</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">Support Level</td>
                  <td className="px-6 py-4 text-center">Email & Chat</td>
                  <td className="px-6 py-4 text-center">24/7 Phone & Chat</td>
                  <td className="px-6 py-4 text-center">Dedicated Manager</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 font-semibold text-foreground">Custom Strategy Builder</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Basic</td>
                  <td className="px-6 py-4 text-center text-success">✓ Advanced</td>
                  <td className="px-6 py-4 text-center text-success">✓ Full Custom Dev</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">Risk Management Tools</td>
                  <td className="px-6 py-4 text-center">✓ Standard</td>
                  <td className="px-6 py-4 text-center text-success">✓ Advanced</td>
                  <td className="px-6 py-4 text-center text-success">✓ Enterprise</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 font-semibold text-foreground">Risk Audits & Reviews</td>
                  <td className="px-6 py-4 text-center">Monthly</td>
                  <td className="px-6 py-4 text-center">Quarterly</td>
                  <td className="px-6 py-4 text-center text-success">Monthly + On-demand</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">Strategy Coaching</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">Weekly sessions</td>
                  <td className="px-6 py-4 text-center text-success">✓ Dedicated</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 font-semibold text-foreground">Community Access</td>
                  <td className="px-6 py-4 text-center">Standard</td>
                  <td className="px-6 py-4 text-center">Premium</td>
                  <td className="px-6 py-4 text-center text-success">✓ VIP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
