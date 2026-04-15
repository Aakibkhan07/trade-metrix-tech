"use client"

export function AboutSvgArchitecture() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Company Structure
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our <span className="text-gradient">Organization</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SVG Organization Diagram */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Team Structure</h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-border">
              <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Leadership */}
                <rect x="140" y="20" width="120" height="45" rx="8" className="fill-primary/20" />
                <text x="200" y="40" textAnchor="middle" className="fill-primary text-xs font-semibold">
                  Leadership
                </text>
                <text x="200" y="55" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  Founders & Directors
                </text>

                {/* Connecting Lines */}
                <path d="M200 65 L200 85" stroke="currentColor" className="text-primary" strokeWidth="2" />
                <path d="M200 85 L80 85 L80 105" stroke="currentColor" className="text-primary" strokeWidth="2" />
                <path d="M200 85 L200 105" stroke="currentColor" className="text-primary" strokeWidth="2" />
                <path d="M200 85 L320 85 L320 105" stroke="currentColor" className="text-primary" strokeWidth="2" />

                {/* Three Departments */}
                <rect x="20" y="105" width="120" height="45" rx="8" className="fill-purple-500/15" />
                <text x="80" y="125" textAnchor="middle" className="fill-purple-400 text-xs font-semibold">
                  Engineering
                </text>
                <text x="80" y="140" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  50+ Developers
                </text>

                <rect x="140" y="105" width="120" height="45" rx="8" className="fill-blue-500/15" />
                <text x="200" y="125" textAnchor="middle" className="fill-blue-400 text-xs font-semibold">
                  Research
                </text>
                <text x="200" y="140" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  AI/ML Team
                </text>

                <rect x="260" y="105" width="120" height="45" rx="8" className="fill-emerald-500/15" />
                <text x="320" y="125" textAnchor="middle" className="fill-emerald-400 text-xs font-semibold">
                  Operations
                </text>
                <text x="320" y="140" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  Support & QA
                </text>

                {/* Second Level Lines */}
                <path d="M80 150 L80 175" stroke="currentColor" className="text-purple-500" strokeWidth="2" />
                <path d="M200 150 L200 175" stroke="currentColor" className="text-blue-500" strokeWidth="2" />
                <path d="M320 150 L320 175" stroke="currentColor" className="text-emerald-500" strokeWidth="2" />

                {/* Sub Teams */}
                <rect x="20" y="175" width="55" height="35" rx="6" className="fill-foreground/5" />
                <text x="47" y="195" textAnchor="middle" className="fill-muted-foreground text-[8px]">
                  Frontend
                </text>

                <rect x="85" y="175" width="55" height="35" rx="6" className="fill-foreground/5" />
                <text x="112" y="195" textAnchor="middle" className="fill-muted-foreground text-[8px]">
                  Backend
                </text>

                <rect x="155" y="175" width="45" height="35" rx="6" className="fill-foreground/5" />
                <text x="177" y="195" textAnchor="middle" className="fill-muted-foreground text-[8px]">
                  Data
                </text>

                <rect x="210" y="175" width="45" height="35" rx="6" className="fill-foreground/5" />
                <text x="232" y="195" textAnchor="middle" className="fill-muted-foreground text-[8px]">
                  ML
                </text>

                <rect x="280" y="175" width="45" height="35" rx="6" className="fill-foreground/5" />
                <text x="302" y="195" textAnchor="middle" className="fill-muted-foreground text-[8px]">
                  Support
                </text>

                <rect x="335" y="175" width="45" height="35" rx="6" className="fill-foreground/5" />
                <text x="357" y="195" textAnchor="middle" className="fill-muted-foreground text-[8px]">
                  QA
                </text>

                {/* Stats Bar */}
                <rect x="20" y="240" width="360" height="60" rx="8" className="fill-foreground/5" />
                <text x="80" y="265" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                  100+
                </text>
                <text x="80" y="285" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  Team Members
                </text>

                <text x="200" y="265" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                  5+
                </text>
                <text x="200" y="285" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  Years Exp
                </text>

                <text x="320" y="265" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                  24/7
                </text>
                <text x="320" y="285" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                  Operations
                </text>

                {/* Animated Elements */}
                <circle cx="200" cy="75" r="3" className="fill-primary animate-pulse" />
              </svg>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">Growth Timeline</h3>
            <div className="space-y-6">
              {[
                {
                  year: "2020",
                  title: "Founded",
                  desc: "Started with 5 engineers",
                  color: "from-purple-500 to-violet-600",
                  progress: 20,
                },
                {
                  year: "2021",
                  title: "Beta Launch",
                  desc: "First 100 users onboarded",
                  color: "from-blue-500 to-cyan-600",
                  progress: 40,
                },
                {
                  year: "2022",
                  title: "Public Launch",
                  desc: "1,000+ active traders",
                  color: "from-emerald-500 to-green-600",
                  progress: 60,
                },
                {
                  year: "2023",
                  title: "Expansion",
                  desc: "5,000+ users, 20+ brokers",
                  color: "from-orange-500 to-red-600",
                  progress: 80,
                },
                {
                  year: "2024",
                  title: "Scale",
                  desc: "10,000+ users nationwide",
                  color: "from-pink-500 to-rose-600",
                  progress: 95,
                },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-border hover-scale">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center icon-glow text-white font-bold text-sm`}
                    >
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
