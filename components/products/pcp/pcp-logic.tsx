export function PCPLogic() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How Points-Based Trading Works</h2>
          <p className="text-xl text-muted-foreground">Simple. Transparent. Measurable.</p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">No Complicated Formulas. Just Track Points.</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The entire PCP system is built on one simple idea: count the points you cover across 66 trading days. 
              You don't worry about rupees, percentages, or daily targets. Just points.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">How It Adds Up (NIFTY Example)</h3>
            
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium">Month 1:</span> You trade 22 days. About 16–17 profit days, 5–6 loss/no-trade days.
                </p>
                <p className="text-primary font-bold text-lg">You cover ~170–200 points</p>
              </div>

              <div className="border-b border-border pb-6">
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium">Month 2:</span> Same structure. 22 trading days.
                </p>
                <p className="text-primary font-bold text-lg">You cover ~170–200 points</p>
              </div>

              <div className="pb-6">
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium">Month 3:</span> Another 22 trading days to complete the cycle.
                </p>
                <p className="text-primary font-bold text-lg">You cover ~170–200 points</p>
              </div>
            </div>

            <div className="border-t border-primary bg-primary/5 rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm mb-2">Total Over 3 Months (NIFTY)</p>
              <p className="text-4xl font-bold text-primary">~615 Points</p>
              <p className="text-sm text-muted-foreground mt-2">This is your goal, not something you need every single day.</p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">Why This Works Better</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Takes pressure off daily trading</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Built-in flexibility for losing days</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Forces you to think long-term</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>Keeps emotions out of trades</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
