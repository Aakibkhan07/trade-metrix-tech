import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - TradeMetrix",
  description: "Terms and conditions for TradeMetrix advisory services.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>

            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using TradeMetrix advisory services, you accept and agree to be bound by the terms
                  and provisions of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Advisory Services</h2>
                <p>
                  TradeMetrix provides trading advisory services including market analysis, trading recommendations, and
                  investment insights. Our services are for informational purposes only and do not constitute financial
                  advice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Risk Disclosure</h2>
                <p>
                  Trading in financial markets involves substantial risk of loss. You should carefully consider whether
                  trading is suitable for you in light of your circumstances, knowledge, and financial resources.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. No Guarantee</h2>
                <p>
                  TradeMetrix does not guarantee any specific results or profits. Past performance is not indicative of
                  future results. Any performance data shared is historical and indicative only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. User Responsibilities</h2>
                <p>
                  You are solely responsible for your trading and investment decisions. TradeMetrix shall not be liable
                  for any losses incurred as a result of using our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use,
                  and protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Payment Processing</h2>
                <p>
                  Payments for our services are processed through Paytm Business and other payment gateways. By making
                  a payment, you agree to the terms of the payment provider. Paytm Business complies with PCI DSS
                  standards for secure payment processing. All payment information is encrypted and processed securely.
                  Your card details are not stored on our servers. Refunds are processed to the original payment method
                  within 7-14 business days after approval.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Subscription and Billing</h2>
                <p>
                  Subscriptions renew automatically on the billing date unless canceled. You may cancel your subscription
                  at any time through your account settings. Charges will not recur after cancellation. Failed payments
                  may result in service suspension until payment is completed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
                <p>For any questions regarding these terms, please contact us at support@trademetrix.com.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
