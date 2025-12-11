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
                <h2 className="text-xl font-semibold text-foreground">3. Data Protection</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Communication Consent</h2>
                <p>
                  By registering, you consent to receive service-related communications via email, SMS, and WhatsApp.
                  You can opt-out of marketing communications at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as your account is active or as needed to provide
                  services and comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Contact Us</h2>
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
