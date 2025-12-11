import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Risk Disclaimer - TradeMetrix",
  description: "Risk disclaimer for TradeMetrix trading advisory services.",
}

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <h1 className="text-3xl font-bold">Risk Disclaimer</h1>
            </div>

            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <div className="rounded-lg border border-warning/30 bg-warning/10 p-6">
                <p className="font-medium text-warning-foreground">
                  Trading and investing in financial markets involves substantial risk and is not suitable for all
                  investors. Please read this disclaimer carefully before using our services.
                </p>
              </div>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Market Risk</h2>
                <p>
                  Trading and investing in stocks, indices, derivatives, and other financial instruments involve market
                  risks. Prices can be volatile and you may lose part or all of your capital. The value of investments
                  can go down as well as up.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">No Guaranteed Returns</h2>
                <p>
                  TradeMetrix does not provide any guarantee of profits, assured returns, or capital protection. Any
                  performance data or accuracy rates shared are indicative only and based on historical performance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Accuracy Disclaimer</h2>
                <p>Our indicative accuracy ranges are:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Monthly Plan: 70-75%</li>
                  <li>Quarterly Plan: 75-80%</li>
                  <li>Half-Yearly Plan: 80-85%</li>
                  <li>Yearly & Customized Plans: 88%+</li>
                </ul>
                <p className="mt-2">
                  These figures are based on historical data and may vary due to market conditions. Past performance is
                  not indicative of future results.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Client Responsibility</h2>
                <p>
                  All trading and investment decisions taken by you are solely your responsibility. You should conduct
                  your own research and consult with qualified financial advisors before making investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
                <p>
                  TradeMetrix will not be liable for any financial loss, damage, or any other consequences arising from
                  the use of our advisory services. Our liability is limited to the subscription fees paid by you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Regulatory Information</h2>
                <p>
                  TradeMetrix operates in compliance with applicable financial regulations. We recommend that users
                  verify the regulatory status and comply with their local jurisdiction requirements before engaging in
                  trading activities.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
