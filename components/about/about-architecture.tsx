"use client"

import { Users, Code2, Rocket, ArrowRight, Lightbulb, Wrench, CheckCircle, TrendingUp } from "lucide-react"

export function AboutArchitecture() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Process
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How We <span className="text-gradient">Build & Deliver</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach to developing cutting-edge trading technology
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="glass rounded-2xl border border-primary/20 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="glass rounded-xl p-6 border border-border h-full">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Research & Ideation</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze market needs and identify technology solutions for traders
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Market analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>User feedback</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Tech feasibility</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="glass rounded-xl p-6 border border-border h-full">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Code2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">
                  Build robust, scalable software using modern technologies
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Agile methodology</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Code reviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Security audits</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="glass rounded-xl p-6 border border-border h-full">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4">
                  <Wrench className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Testing & QA</h3>
                <p className="text-sm text-muted-foreground">Rigorous testing to ensure reliability and performance</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Unit testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Load testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Beta releases</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="glass rounded-xl p-6 border border-primary/30 bg-primary/5 h-full">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center mb-4">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Deploy & Support</h3>
                <p className="text-sm text-muted-foreground">Launch with 24/7 monitoring and dedicated support</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Cloud deployment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>24/7 monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">50+</span>
              </div>
              <div className="text-sm text-muted-foreground">Engineers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">1M+</span>
              </div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rocket className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">200+</span>
              </div>
              <div className="text-sm text-muted-foreground">Releases</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">99.9%</span>
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
