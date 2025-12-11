"use client"

export function MarketSvgArchitecture() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,170,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Market Structure
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Indian Market <span className="text-gradient">Ecosystem</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-8 border border-primary/20">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border border-border">
            <svg className="w-full h-80" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SEBI - Regulator at top */}
              <rect x="250" y="10" width="200" height="45" rx="8" className="fill-yellow-500/15">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </rect>
              <text x="350" y="30" textAnchor="middle" className="fill-yellow-500 text-xs font-semibold">
                SEBI
              </text>
              <text x="350" y="45" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Securities Regulator
              </text>

              {/* Animated regulation flow */}
              <circle r="3" className="fill-yellow-500">
                <animateMotion dur="1s" repeatCount="indefinite" path="M350,55 L350,75 L175,75 L175,95" />
              </circle>
              <circle r="3" className="fill-yellow-500">
                <animateMotion dur="1s" repeatCount="indefinite" begin="0.5s" path="M350,55 L350,75 L525,75 L525,95" />
              </circle>

              {/* Lines from SEBI */}
              <path d="M350 55 L350 75" stroke="currentColor" className="text-yellow-500" strokeWidth="2" />
              <path d="M350 75 L175 75 L175 95" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M350 75 L525 75 L525 95" stroke="currentColor" className="text-primary" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,200;200,0"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </path>

              {/* NSE */}
              <rect x="75" y="95" width="200" height="55" rx="8" className="fill-blue-500/15">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.2s" />
              </rect>
              <text x="175" y="118" textAnchor="middle" className="fill-blue-400 text-sm font-semibold">
                NSE
              </text>
              <text x="175" y="138" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                National Stock Exchange
              </text>

              {/* BSE */}
              <rect x="425" y="95" width="200" height="55" rx="8" className="fill-purple-500/15">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.4s" />
              </rect>
              <text x="525" y="118" textAnchor="middle" className="fill-purple-400 text-sm font-semibold">
                BSE
              </text>
              <text x="525" y="138" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Bombay Stock Exchange
              </text>

              {/* Data flow lines from exchanges */}
              <path d="M175 150 L175 170" stroke="currentColor" className="text-blue-500" strokeWidth="2">
                <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="0.5s" repeatCount="indefinite" />
              </path>
              <path d="M525 150 L525 170" stroke="currentColor" className="text-purple-500" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,20;20,0"
                  dur="0.5s"
                  repeatCount="indefinite"
                  begin="0.25s"
                />
              </path>

              {/* NSE Indices branches */}
              <path d="M175 170 L100 170 L100 185" stroke="currentColor" className="text-blue-500" strokeWidth="1" />
              <path d="M175 170 L175 185" stroke="currentColor" className="text-blue-500" strokeWidth="1" />
              <path d="M175 170 L250 170 L250 185" stroke="currentColor" className="text-blue-500" strokeWidth="1" />

              {/* NSE Indices */}
              <rect x="50" y="185" width="100" height="40" rx="6" className="fill-foreground/5">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
              </rect>
              <text x="100" y="205" textAnchor="middle" className="fill-foreground text-[10px] font-semibold">
                NIFTY 50
              </text>
              <text x="100" y="218" textAnchor="middle" className="fill-green-500 text-[9px]">
                24,850.35
              </text>

              <rect x="125" y="185" width="100" height="40" rx="6" className="fill-foreground/5">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
              </rect>
              <text x="175" y="205" textAnchor="middle" className="fill-foreground text-[10px] font-semibold">
                BANK NIFTY
              </text>
              <text x="175" y="218" textAnchor="middle" className="fill-red-500 text-[9px]">
                53,425.70
              </text>

              <rect x="200" y="185" width="100" height="40" rx="6" className="fill-foreground/5">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
              </rect>
              <text x="250" y="205" textAnchor="middle" className="fill-foreground text-[10px] font-semibold">
                FIN NIFTY
              </text>
              <text x="250" y="218" textAnchor="middle" className="fill-green-500 text-[9px]">
                23,890.25
              </text>

              {/* BSE branches */}
              <path d="M525 170 L450 170 L450 185" stroke="currentColor" className="text-purple-500" strokeWidth="1" />
              <path d="M525 170 L600 170 L600 185" stroke="currentColor" className="text-purple-500" strokeWidth="1" />

              {/* BSE Indices */}
              <rect x="400" y="185" width="100" height="40" rx="6" className="fill-foreground/5">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
              </rect>
              <text x="450" y="205" textAnchor="middle" className="fill-foreground text-[10px] font-semibold">
                SENSEX
              </text>
              <text x="450" y="218" textAnchor="middle" className="fill-green-500 text-[9px]">
                81,652.45
              </text>

              <rect x="550" y="185" width="100" height="40" rx="6" className="fill-foreground/5">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
              </rect>
              <text x="600" y="205" textAnchor="middle" className="fill-foreground text-[10px] font-semibold">
                BSE 500
              </text>
              <text x="600" y="218" textAnchor="middle" className="fill-green-500 text-[9px]">
                35,234.10
              </text>

              {/* Market Segments */}
              <rect x="50" y="250" width="600" height="55" rx="8" className="fill-foreground/5">
                <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
              </rect>

              {/* Segment dividers with animation */}
              <line
                x1="200"
                y1="255"
                x2="200"
                y2="300"
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
                strokeDasharray="4 2"
              >
                <animate attributeName="stroke-dashoffset" values="6;0" dur="1s" repeatCount="indefinite" />
              </line>
              <line
                x1="350"
                y1="255"
                x2="350"
                y2="300"
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
                strokeDasharray="4 2"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="6;0"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.25s"
                />
              </line>
              <line
                x1="500"
                y1="255"
                x2="500"
                y2="300"
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
                strokeDasharray="4 2"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="6;0"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </line>

              <text x="130" y="275" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Equity
              </text>
              <text x="130" y="292" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Cash Market
              </text>

              <text x="270" y="275" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                F&O
              </text>
              <text x="270" y="292" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Derivatives
              </text>

              <text x="410" y="275" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Currency
              </text>
              <text x="410" y="292" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                Forex Trading
              </text>

              <text x="550" y="275" textAnchor="middle" className="fill-foreground text-xs font-semibold">
                Commodity
              </text>
              <text x="550" y="292" textAnchor="middle" className="fill-muted-foreground text-[10px]">
                MCX/NCDEX
              </text>

              {/* Animated Pulses at indices */}
              <circle cx="100" cy="210" r="3" className="fill-green-500">
                <animate attributeName="r" values="2;5;2" dur="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="175" cy="210" r="3" className="fill-red-500">
                <animate attributeName="r" values="2;5;2" dur="1s" repeatCount="indefinite" begin="0.25s" />
              </circle>
              <circle cx="450" cy="210" r="3" className="fill-green-500">
                <animate attributeName="r" values="2;5;2" dur="1s" repeatCount="indefinite" begin="0.5s" />
              </circle>
            </svg>
          </div>

          {/* Market Hours */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { time: "9:15 AM", label: "Market Open", color: "from-green-500 to-emerald-600" },
              { time: "9:15-9:30", label: "Pre-Open", color: "from-blue-500 to-cyan-600" },
              { time: "3:30 PM", label: "Market Close", color: "from-red-500 to-orange-600" },
              { time: "3:40-4:00", label: "Post-Close", color: "from-purple-500 to-violet-600" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center border border-border hover-scale">
                <div
                  className={`h-10 w-10 mx-auto rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-2 icon-glow`}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-foreground">{item.time}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
