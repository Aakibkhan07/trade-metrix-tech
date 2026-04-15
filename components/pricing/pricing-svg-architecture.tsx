"use client"

export function PricingSvgArchitecture() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Subscription Flow
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How <span className="text-gradient">Subscription Works</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-8 border border-primary/20">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border border-border">
            <svg className="w-full h-64" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Step 1 - Choose Plan */}
              <rect x="20" y="40" width="160" height="100" rx="12" className="fill-primary/15">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </rect>
              <circle cx="100" cy="70" r="20" className="fill-primary/30">
                <animate attributeName="r" values="18;22;18" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <text x="100" y="75" textAnchor="middle" className="fill-primary text-sm font-bold">
                1
              </text>
              <text x="100" y="105" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Choose Plan
              </text>
              <text x="100" y="125" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Basic, Pro, Enterprise
              </text>

              {/* Animated Arrow 1 */}
              <path d="M180 90 L220 90" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="1s" repeatCount="indefinite" />
              </path>
              <polygon points="220,85 230,90 220,95" className="fill-primary">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
              </polygon>
              {/* Data packet animation */}
              <circle r="4" className="fill-primary">
                <animateMotion dur="1s" repeatCount="indefinite" path="M180,90 L220,90" />
              </circle>

              {/* Step 2 - Secure Payment */}
              <rect x="230" y="40" width="160" height="100" rx="12" className="fill-blue-500/15">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
              </rect>
              <circle cx="310" cy="70" r="20" className="fill-blue-500/30">
                <animate attributeName="r" values="18;22;18" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <text x="310" y="75" textAnchor="middle" className="fill-blue-400 text-sm font-bold">
                2
              </text>
              <text x="310" y="105" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Secure Payment
              </text>
              <text x="310" y="125" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                UPI, Cards, NetBanking
              </text>

              {/* Animated Arrow 2 */}
              <path d="M390 90 L430 90" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,40;40,0"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.3s"
                />
              </path>
              <polygon points="430,85 440,90 430,95" className="fill-primary">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.3s" />
              </polygon>
              <circle r="4" className="fill-blue-500">
                <animateMotion dur="1s" repeatCount="indefinite" begin="0.3s" path="M390,90 L430,90" />
              </circle>

              {/* Step 3 - Instant Access */}
              <rect x="440" y="40" width="160" height="100" rx="12" className="fill-emerald-500/15">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
              </rect>
              <circle cx="520" cy="70" r="20" className="fill-emerald-500/30">
                <animate attributeName="r" values="18;22;18" dur="1.5s" repeatCount="indefinite" begin="1s" />
              </circle>
              <text x="520" y="75" textAnchor="middle" className="fill-emerald-400 text-sm font-bold">
                3
              </text>
              <text x="520" y="105" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Instant Access
              </text>
              <text x="520" y="125" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Dashboard & Tools
              </text>

              {/* Animated Arrow 3 */}
              <path d="M600 90 L640 90" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,40;40,0"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.6s"
                />
              </path>
              <polygon points="640,85 650,90 640,95" className="fill-primary">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.6s" />
              </polygon>
              <circle r="4" className="fill-emerald-500">
                <animateMotion dur="1s" repeatCount="indefinite" begin="0.6s" path="M600,90 L640,90" />
              </circle>

              {/* Step 4 - Start Trading */}
              <rect x="650" y="40" width="130" height="100" rx="12" className="fill-primary/20">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1.5s" />
              </rect>
              <circle cx="715" cy="70" r="20" className="fill-primary/40">
                <animate attributeName="r" values="18;24;18" dur="1.5s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <text x="715" y="75" textAnchor="middle" className="fill-primary text-sm font-bold">
                4
              </text>
              <text x="715" y="105" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Start Trading
              </text>
              <text x="715" y="125" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Go Live!
              </text>

              {/* Bottom Info Bar with wave animation */}
              <rect x="20" y="160" width="760" height="45" rx="8" className="fill-foreground/5" />
              <text x="120" y="187" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                256-bit SSL
              </text>
              <text x="300" y="187" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                No Hidden Fees
              </text>
              <text x="500" y="187" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Cancel Anytime
              </text>
              <text x="680" y="187" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                24/7 Support
              </text>

              {/* Animated scanning line */}
              <line x1="20" y1="182" x2="40" y2="182" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate attributeName="x1" values="20;760;20" dur="4s" repeatCount="indefinite" />
                <animate attributeName="x2" values="40;780;40" dur="4s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["UPI", "Visa/Master", "NetBanking", "Wallets"].map((method, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center border border-border hover-scale">
                <div
                  className={`h-10 w-10 mx-auto rounded-lg bg-gradient-to-br ${
                    i === 0
                      ? "from-primary to-emerald-600"
                      : i === 1
                        ? "from-blue-500 to-cyan-600"
                        : i === 2
                          ? "from-emerald-500 to-green-600"
                          : "from-orange-500 to-red-600"
                  } flex items-center justify-center mb-2 icon-glow`}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-foreground">{method}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
