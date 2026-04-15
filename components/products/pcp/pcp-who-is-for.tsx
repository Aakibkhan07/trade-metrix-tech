export function PCPWhoIsFor() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Who This Plan Is For (And Not For)</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-6">PCP is Perfect For:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Retail traders</span> tired of daily pressure
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Small traders</span> who want a simple system
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Part-time traders</span> who can't watch charts all day
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Disciplined traders</span> who follow rules consistently
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Anyone</span> who wants to think beyond daily P&L
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-6">PCP is NOT For:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Scalpers</span> who want 5–10 trades per day
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Quick-money seekers</span> expecting results in 1–2 weeks
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Traders</span> who ignore risk management rules
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">People</span> looking for guaranteed profits
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Traders</span> who panic on consecutive losing days
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-8">
          <h3 className="font-bold text-foreground mb-3">The Bottom Line</h3>
          <p className="text-muted-foreground leading-relaxed">
            PCP is for traders who understand that real success is built over time, not overnight. If you can commit 
            to a 3-month cycle and follow the system, PCP can transform how you trade.
          </p>
        </div>
      </div>
    </section>
  )
}
