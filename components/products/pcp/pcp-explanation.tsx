export function PCPExplanation() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What is PCP?</h2>
          <p className="text-xl text-muted-foreground mb-12 font-medium">Points Covering Plan — A systematic way to trade without daily pressure</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Core Idea</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PCP stands for Points Covering Plan. Instead of chasing daily profits, you trade with a single goal: cover your 
                points target using our 20 proprietary strategies. Every trade is systematic. Every strategy is proven. Your focus 
                is purely on hitting your points—nothing else matters.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Three Simple Steps</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Pick Your Target</p>
                    <p className="text-muted-foreground">Starter (800 pts, ₹1,20,000) | Pro (1500 pts, ₹2,40,000) | Elite (2200 pts, ₹3,10,000)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Trade the System</p>
                    <p className="text-muted-foreground">Use all 20 strategies. Follow every signal. Let risk management work automatically.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Hit Points & Done</p>
                    <p className="text-muted-foreground">Once you cover your target points, your plan is complete. Success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">The Mindset Shift</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-bold text-red-500">Old Approach:</p>
                  <p className="text-muted-foreground">"I need to make ₹500 profit today or I failed."</p>
                  <p className="text-sm text-muted-foreground mt-1">→ Leads to emotional decisions, overtrading, burnout</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-bold text-green-500">PCP Approach:</p>
                  <p className="text-muted-foreground">"I trade systematically until I hit my points target."</p>
                  <p className="text-sm text-muted-foreground mt-1">→ Leads to discipline, consistency, and sustainable profits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
