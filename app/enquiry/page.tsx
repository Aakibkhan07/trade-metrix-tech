import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileCheck, Clock, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Enquiry - Trade Metrix",
  description: "Submit your enquiry about our trading strategies, pricing plans, and services.",
}

export default function EnquiryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
              Official Enquiry
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Ready to Trade <span className="text-primary">Smarter?</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Tell us about your trading goals. We'll help you find the right strategy and plan. No obligations — just
              honest guidance.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {/* Left Side - Benefits */}
            <div className="space-y-4 lg:col-span-1">
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Shield className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Secure & Recorded</h3>
                      <p className="text-xs text-muted-foreground">
                        All enquiries are securely recorded for your protection and our records
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                      <Clock className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Quick Response</h3>
                      <p className="text-xs text-muted-foreground">
                        Our team responds within 24-48 hours on business days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                      <FileCheck className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Official Documentation</h3>
                      <p className="text-xs text-muted-foreground">
                        Your enquiry serves as official communication record
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                      <Users className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Dedicated Support</h3>
                      <p className="text-xs text-muted-foreground">
                        Get personalized assistance for your trading needs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What You Can Ask */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    What You Can Enquire About
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Pricing & subscription plans
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Strategy details & performance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Capital requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Technical setup & integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Custom/Enterprise plans
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Partnership opportunities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-2">
              <EnquiryForm />
            </div>
          </div>

          {/* Quick Contact */}
          <div className="mx-auto max-w-6xl mt-12">
            <Card className="border-border/50 bg-card/30">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Need Immediate Assistance?</h3>
                    <p className="text-sm text-muted-foreground">
                      For urgent queries, reach out directly via WhatsApp or Telegram
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="https://wa.me/917415660385"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
                    >
                      WhatsApp
                    </Link>
                    <Link
                      href="https://t.me/freebankniftycallsz"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#229ED9]/10 text-[#229ED9] text-sm font-medium hover:bg-[#229ED9]/20 transition-colors"
                    >
                      Telegram
                    </Link>
                  </div>
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
