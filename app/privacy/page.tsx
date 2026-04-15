import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - TradeMetrix",
  description: "Privacy policy for TradeMetrix advisory services.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>

            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly, including your name, email address, phone number, and
                  subscription preferences when you register for our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
                <p>
                  We use your information to provide our advisory services, send trading alerts, communicate important
                  updates, and improve our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Payment Information and Paytm Business</h2>
                <p>
                  We process payments through Paytm Business, a PCI DSS compliant payment gateway. When you make a
                  payment, certain information is securely transmitted to Paytm Business including:
                </p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>Name and email address</li>
                  <li>Phone number</li>
                  <li>Billing address</li>
                  <li>Transaction amount and currency</li>
                  <li>Payment method details (processed directly by Paytm)</li>
                </ul>
                <p className="mt-4">
                  We do not store or have access to your full card details. Paytm Business handles all payment
                  information securely. For details on Paytm&apos;s data handling, visit their privacy policy at
                  paytm.com/privacy. All payment transactions are encrypted using industry-standard SSL/TLS protocols.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Data Protection</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. Payment processing is handled by Paytm Business with
                  PCI DSS Level 1 certification. We use encryption for sensitive data transmission and maintain secure
                  servers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Communication Consent</h2>
                <p>
                  By registering, you consent to receive service-related communications via email, SMS, and WhatsApp.
                  You can opt-out of marketing communications at any time. Payment confirmations will be sent to your
                  registered email address.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Data Sharing</h2>
                <p>
                  We only share your personal information with:
                </p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>Paytm Business for payment processing</li>
                  <li>Hosting and infrastructure providers for service delivery</li>
                  <li>Legal and regulatory authorities when required by law</li>
                </ul>
                <p className="mt-4">
                  We do not sell or rent your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Data Retention</h2>
                <p>
                  We retain your personal information for as long as your account is active or as needed to provide
                  services and comply with legal obligations. Payment records are retained for 7 years for regulatory
                  and tax compliance purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Your Rights</h2>
                <p>
                  You have the right to access, correct, or request deletion of your personal information subject to
                  legal and contractual obligations. For payment-related data, some information may need to be retained
                  for compliance. Submit requests to privacy@trademetrix.com.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
                <p>For privacy-related inquiries, contact us at privacy@trademetrix.com.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
