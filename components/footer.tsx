import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ExternalLink, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Trade Metrix Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight">Trade Metrix</span>
                <span className="text-[10px] text-muted-foreground">Precision. Clarity. Control.</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A technology company building professional algorithmic trading software. We are in the tech business - we
              build automation tools, not provide financial advice.
            </p>
            <Link
              href="https://trade.trademetrix.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Launch Algo Platform <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Products</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">
                Platform Features
              </Link>
              <Link href="/algo-software" className="text-sm text-muted-foreground hover:text-foreground">
                Algo Software
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing Plans
              </Link>
              <Link href="/#accuracy" className="text-sm text-muted-foreground hover:text-foreground">
                Performance
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground">
                Risk Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-t border-border pt-8 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold mb-1">Contact Us</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@trademetrix.tech</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 7415660385</span>
            </div>
            <Link
              href="https://wa.me/917415660385"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-500 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: +91 7415660385</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Trade Metrix Technologies. All rights reserved. | Technology Company | Software
            Provider Only | No Investment Advice
          </p>
        </div>
      </div>
    </footer>
  )
}
