import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConsentForm } from "@/components/auth/consent-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Consent & Risk Disclaimer - TradeMetrix",
  description: "Review and accept the Terms & Conditions for TradeMetrix advisory services.",
}

export default async function ConsentPage({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = await params

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Consent & Risk Disclaimer</h1>
              <p className="text-muted-foreground">TradeMetrix Advisory Services</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Please Review Carefully</CardTitle>
                <CardDescription>
                  Before we proceed, please review the following Consent and Risk Disclaimer carefully.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-6 text-sm leading-relaxed">
                  <div>
                    <h3 className="mb-2 font-semibold">1. Market Risk</h3>
                    <p className="text-muted-foreground">
                      Trading and investing in stocks, indices, derivatives, and other financial instruments involve
                      market risks. Prices can be volatile and you may lose part or all of your capital.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">2. No Guaranteed Returns</h3>
                    <p className="text-muted-foreground">
                      TradeMetrix does not provide any guarantee of profits, assured returns, or capital protection. Any
                      performance shared is indicative only.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">3. Accuracy of Services</h3>
                    <p className="text-muted-foreground mb-2">Indicative accuracy ranges:</p>
                    <ul className="ml-4 list-inside list-disc space-y-1 text-muted-foreground">
                      <li>Monthly: 70–75%</li>
                      <li>Quarterly: 75–80%</li>
                      <li>Half-Yearly: 80–85%</li>
                      <li>Yearly & Customized Plans: 88%+</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      These are based on historical data and may change due to market conditions.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">4. Client Responsibility</h3>
                    <p className="text-muted-foreground">
                      All trading and investment decisions taken by you are solely your responsibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">5. No Liability</h3>
                    <p className="text-muted-foreground">
                      TradeMetrix will not be liable for any financial loss or damage arising from the use of our
                      services.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">6. Data & Communication Consent</h3>
                    <p className="text-muted-foreground">
                      By accepting, you authorize TradeMetrix to contact you via call, SMS, email, and WhatsApp for
                      service-related communication.
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <ConsentForm token={token} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
