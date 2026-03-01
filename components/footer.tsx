import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ExternalLink, MessageCircle, Send, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-20">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Trade Metrix Technologies Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain group-hover:scale-110 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-foreground">TMT</span>
                <span className="text-[10px] text-primary font-semibold">Tech Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
              Trade Metrix Technologies is a technology company specializing in automatic algorithmic trading software with AI-powered strategies. We build trading automation tools, not provide financial advice.
            </p>
            <Link
              href="https://trade.trademetrix.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold transition-colors group"
            >
              Launch Platform <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Products</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/features" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Platform Features
              </Link>
              <Link href="/algo-software" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Algo Software
              </Link>
              <Link href="/pricing" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Pricing Plans
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Resources</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                About Us
              </Link>
              <Link href="/market-knowledge" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Market Knowledge
              </Link>
              <Link href="/algo-knowledge" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Algo Trading Guide
              </Link>
              <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Legal</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                Risk Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        {/* Contact section */}
        <div className="grid gap-8 border-t border-primary/20 pt-12 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@trademetrix.tech</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+91 7415660385</span>
              </div>
              <Link
                href="https://wa.me/917415660385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>WhatsApp Support</span>
              </Link>
              <Link
                href="https://t.me/freebankniftycallsz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                <Send className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Telegram Community</span>
              </Link>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <p className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Important Notice</p>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Trade Metrix Technologies is a TECHNOLOGY COMPANY providing automatic trading software and tools only. We are NOT a financial advisor, broker, or investment service provider. Trading involves substantial risk and is not suitable for all investors. Past performance does not guarantee future results. Always conduct your own research and consult with qualified professionals before trading.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/60">
              © {new Date().getFullYear()} Trade Metrix Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/disclaimer" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
