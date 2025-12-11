"use client"

export function ContactSvgArchitecture() {
  return (
    <section className="py-16 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Infrastructure
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Support <span className="text-gradient">System</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            How we ensure you get the best support experience
          </p>
        </div>

        <div className="glass rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border border-border">
            <svg className="w-full h-64" viewBox="0 0 500 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Customer Query */}
              <rect x="20" y="80" width="100" height="60" rx="10" className="fill-blue-500/15">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
              </rect>
              <text x="70" y="105" textAnchor="middle" className="fill-blue-400 text-xs font-semibold">
                Your Query
              </text>
              <text x="70" y="122" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                Email / Phone / Chat
              </text>

              {/* Animated Arrow with data packets */}
              <path d="M120 110 L155 110" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate attributeName="stroke-dasharray" values="0,35;35,0" dur="0.8s" repeatCount="indefinite" />
              </path>
              <circle r="4" className="fill-blue-500">
                <animateMotion dur="0.8s" repeatCount="indefinite" path="M120,110 L155,110" />
              </circle>

              {/* Support Hub */}
              <rect x="160" y="50" width="180" height="120" rx="12" className="fill-primary/20">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
              </rect>
              <text x="250" y="80" textAnchor="middle" className="fill-primary text-sm font-semibold">
                Support Hub
              </text>

              {/* Processing animation inside hub */}
              <circle
                cx="250"
                cy="110"
                r="20"
                fill="none"
                stroke="currentColor"
                className="text-primary/30"
                strokeWidth="1"
              >
                <animate attributeName="r" values="15;30;15" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Sub-components */}
              <rect x="175" y="95" width="70" height="30" rx="4" className="fill-background/50">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
              </rect>
              <text x="210" y="114" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                Ticket System
              </text>

              <rect x="255" y="95" width="70" height="30" rx="4" className="fill-background/50">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
              </rect>
              <text x="290" y="114" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                Live Chat
              </text>

              <rect x="215" y="135" width="70" height="25" rx="4" className="fill-background/50">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
              </rect>
              <text x="250" y="151" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                24/7 Monitoring
              </text>

              {/* Animated Arrow */}
              <path d="M340 110 L375 110" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,35;35,0"
                  dur="0.8s"
                  repeatCount="indefinite"
                  begin="0.4s"
                />
              </path>
              <circle r="4" className="fill-emerald-500">
                <animateMotion dur="0.8s" repeatCount="indefinite" begin="0.4s" path="M340,110 L375,110" />
              </circle>

              {/* Resolution */}
              <rect x="380" y="80" width="100" height="60" rx="10" className="fill-emerald-500/15">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.8s" />
              </rect>
              <text x="430" y="105" textAnchor="middle" className="fill-emerald-400 text-xs font-semibold">
                Resolution
              </text>
              <text x="430" y="122" textAnchor="middle" className="fill-muted-foreground text-[9px]">
                Avg: 2-4 Hours
              </text>

              {/* Success checkmark animation */}
              <circle cx="430" cy="70" r="8" className="fill-emerald-500/30">
                <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
              </circle>

              {/* Response Time Labels */}
              <text x="250" y="30" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Response Time: &lt; 30 minutes
              </text>

              {/* Animated connection pulses */}
              <circle cx="140" cy="110" r="5" className="fill-primary">
                <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="360" cy="110" r="5" className="fill-emerald-500">
                <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" begin="0.5s" />
              </circle>
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-bold text-primary">&lt;30min</div>
              <div className="text-sm text-muted-foreground">First Response</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Available Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
