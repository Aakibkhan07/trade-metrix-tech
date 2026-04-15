export function PCPOverview() {
  return (
    <section className="py-16 md:py-24 bg-background" id="overview">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Three Plans. One System. Your Choice.</h2>
          <p className="text-xl text-muted-foreground">Pick your points target and start trading with clarity.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-lg overflow-hidden border border-border">
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-bold text-foreground bg-primary/5">Starter Plan</td>
                <td className="px-6 py-4 text-muted-foreground">800 Points | ₹1,20,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-bold text-foreground bg-primary/5">Pro Plan</td>
                <td className="px-6 py-4 text-muted-foreground">1500 Points | ₹2,40,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-bold text-foreground bg-primary/5">Elite Plan</td>
                <td className="px-6 py-4 text-muted-foreground">2200 Points | ₹3,10,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-bold text-foreground bg-primary/5">Success Metric</td>
                <td className="px-6 py-4 text-muted-foreground">Points Covered (Not Daily Profit)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-bold text-foreground bg-primary/5">Plan Completion</td>
                <td className="px-6 py-4 text-success font-semibold">When you hit your points target</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-foreground bg-primary/5">All 20 Strategies</td>
                <td className="px-6 py-4 text-success font-semibold">✓ Included in all plans</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
          <p className="text-muted-foreground text-center leading-relaxed text-lg">
            <span className="font-bold text-foreground">Remember:</span> You're not chasing daily profits or worrying about time. You trade our 20 strategies, accumulate points, and complete your plan. That's it.
          </p>
        </div>
      </div>
    </section>
  )
}
