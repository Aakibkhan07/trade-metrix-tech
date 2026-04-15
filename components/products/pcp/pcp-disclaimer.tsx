export function PCPDisclaimer() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Important Disclaimer</h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The examples and numbers provided in this page are <span className="font-bold text-foreground">illustrative only</span> 
              and based on historical averages. They are not guarantees or promises of future results.
            </p>

            <p>
              <span className="font-bold text-foreground">Key Points:</span>
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex gap-3">
                <span className="text-warning font-bold">•</span>
                <span>
                  Actual profit or loss will depend on market conditions, signal quality, execution, and individual risk management.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warning font-bold">•</span>
                <span>
                  Past performance does not guarantee future results. Markets can behave unpredictably.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warning font-bold">•</span>
                <span>
                  Trading involves risk of loss. You could lose part or all of your capital.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warning font-bold">•</span>
                <span>
                  The 75% accuracy and 66-day figures are assumptions, not guarantees.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warning font-bold">•</span>
                <span>
                  You are responsible for your trading decisions and understanding the risks involved.
                </span>
              </li>
            </ul>

            <p className="pt-4">
              PCP is a framework and mindset to help you trade more systematically. It is not a magic formula or 
              financial advice. Please consult with a financial advisor if needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
