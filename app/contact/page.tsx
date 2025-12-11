import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Clock, Send, Users, FileText, ArrowRight } from "lucide-react"
import { ContactSvgArchitecture } from "@/components/contact/contact-svg-architecture"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us - TradeMetrix",
  description: "Get in touch with our team for any inquiries about our trading advisory services.",
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
              {"<"} Let's Connect {"/>"}
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Questions? We've Got <span className="text-accent">Answers</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Not sure which plan fits you? Need a demo? Our team is ready to help you start trading with code, not
              emotions.
            </p>
          </div>

          <div className="mx-auto max-w-5xl mb-8">
            <Card className="border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
              <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Official Enquiry Form</h3>
                    <p className="text-sm text-muted-foreground">
                      For pricing, plans, services enquiries - Submit officially recorded form
                    </p>
                  </div>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 gap-2">
                  <Link href="/enquiry">
                    Submit Enquiry
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Link href="https://t.me/freebankniftycallsz" target="_blank" rel="noopener noreferrer">
                  <Card className="group cursor-pointer border-[#229ED9]/30 bg-[#229ED9]/5 transition-all hover:border-[#229ED9]/50 hover:bg-[#229ED9]/10">
                    <CardContent className="flex items-center justify-center gap-3 p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#229ED9]/20">
                        <TelegramIcon className="h-5 w-5 text-[#229ED9]" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-[#229ED9]">Telegram</h3>
                        <p className="text-xs text-muted-foreground">Free Performance History</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="https://wa.me/917415660385" target="_blank" rel="noopener noreferrer">
                  <Card className="group cursor-pointer border-[#25D366]/30 bg-[#25D366]/5 transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10">
                    <CardContent className="flex items-center justify-center gap-3 p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#25D366]/20">
                        <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-[#25D366]">WhatsApp</h3>
                        <p className="text-xs text-muted-foreground font-mono">+91 74156 60385</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/5">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Email Us</h3>
                    <p className="text-sm text-muted-foreground font-mono">info@trademetrix.tech</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/5">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Call Us</h3>
                    <p className="text-sm text-muted-foreground font-mono">+91 74156 60385</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#229ED9]/30 bg-[#229ED9]/5">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#229ED9]/20">
                    <Users className="h-4 w-4 text-[#229ED9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#229ED9]">Free Telegram Group</h3>
                    <p className="text-sm text-muted-foreground">
                      Join our free group for daily performance updates and Bank Nifty calls
                    </p>
                    <Link
                      href="https://t.me/freebankniftycallsz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#229ED9] hover:underline"
                    >
                      <TelegramIcon className="h-3 w-3" />
                      t.me/freebankniftycallsz
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/5">
                    <Clock className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM IST</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <h2 className="mb-6 text-lg font-semibold flex items-center gap-2">
                  <Send className="h-4 w-4 text-accent" />
                  Send us a Message
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
        <ContactSvgArchitecture />
      </main>
      <Footer />
    </div>
  )
}
