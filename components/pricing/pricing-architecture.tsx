"use client"

import {
  CreditCard,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Building,
  Sparkles,
  Lock,
  RefreshCw,
} from "lucide-react"

export function PricingArchitecture() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Subscription Flow
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How <span className="text-gradient">Subscription</span> Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing with instant access to our trading technology
          </p>
        </div>

        {/* Subscription Flow Diagram */}
        <div className="glass rounded-2xl border border-primary/20 p-8 md:p-12">
          {/* Flow Steps */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Choose Plan</h3>
              <p className="text-sm text-muted-foreground">Select Basic, Pro, or Enterprise based on your needs</p>
            </div>

            <ArrowRight className="h-6 w-6 text-primary hidden md:block" />

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Pay via UPI, Net Banking, or Cards</p>
            </div>

            <ArrowRight className="h-6 w-6 text-primary hidden md:block" />

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instant Access</h3>
              <p className="text-sm text-muted-foreground">Get immediate access to all features</p>
            </div>

            <ArrowRight className="h-6 w-6 text-primary hidden md:block" />

            {/* Step 4 */}
            <div className="flex-1 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Start Trading</h3>
              <p className="text-sm text-muted-foreground">Connect broker & deploy strategies</p>
            </div>
          </div>

          {/* Plan Comparison Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Basic</div>
                  <div className="text-xs text-muted-foreground">Individual Traders</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>5 Active Strategies</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Basic Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Email Support</span>
                </div>
              </div>
              {/* Mini Chart */}
              <div className="mt-4 flex items-end gap-1 h-12">
                {[40, 55, 45, 60, 50, 65, 55].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500/30 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-primary/30 bg-primary/5 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Pro</div>
                  <div className="text-xs text-muted-foreground">Active Traders</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Unlimited Strategies</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Advanced Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Priority Support</span>
                </div>
              </div>
              {/* Mini Chart */}
              <div className="mt-4 flex items-end gap-1 h-12">
                {[50, 65, 70, 80, 75, 85, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/50 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Enterprise</div>
                  <div className="text-xs text-muted-foreground">Institutions</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Dedicated Manager</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SLA Guarantee</span>
                </div>
              </div>
              {/* Mini Chart */}
              <div className="mt-4 flex items-end gap-1 h-12">
                {[60, 75, 85, 90, 95, 92, 98].map((h, i) => (
                  <div key={i} className="flex-1 bg-amber-500/30 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Security & Trust */}
          <div className="pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">SSL Secured</div>
                  <div className="text-xs text-muted-foreground">256-bit encryption</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">PCI Compliant</div>
                  <div className="text-xs text-muted-foreground">Secure payments</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Auto Renewal</div>
                  <div className="text-xs text-muted-foreground">Cancel anytime</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Multiple Options</div>
                  <div className="text-xs text-muted-foreground">UPI, Cards, Net Banking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
