"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Home, Wrench, Newspaper, BarChart3, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qMFHRXNZB6CHpiwKTORqsFngVETiBm.png" 
            alt="Trade Metrix Logo" 
            width={40} 
            height={40} 
            loading="eager"
            className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" 
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground">TradeMX</span>
            <span className="text-[9px] text-primary font-semibold -mt-1">AI Trading</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-medium text-foreground/70 px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-primary/10"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-foreground/70 px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-primary/10"
          >
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/70 px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-primary/10">
              Products <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur border-primary/20">
              <DropdownMenuItem asChild>
                <Link href="/features" className="text-foreground">Platform Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/algo-software" className="text-foreground">Algo Software</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pricing" className="text-foreground">Pricing Plans</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/70 px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-primary/10">
              Resources <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur border-primary/20">
              <DropdownMenuItem asChild>
                <Link href="/analytics" className="flex items-center gap-2 text-foreground">
                  <BarChart3 className="h-4 w-4" />
                  Analytics Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools" className="flex items-center gap-2 text-foreground">
                  <Wrench className="h-4 w-4" />
                  Trading Tools
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/news" className="flex items-center gap-2 text-foreground">
                  <Newspaper className="h-4 w-4" />
                  Market News
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/70 px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-primary/10">
              Knowledge <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur border-primary/20">
              <DropdownMenuItem asChild>
                <Link href="/market-knowledge" className="text-foreground">Market Knowledge</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/algo-knowledge" className="text-foreground">Algo Trading Guide</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/#accuracy"
            className="text-sm font-medium text-foreground/70 px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-primary/10"
          >
            Performance
          </Link>
          <Link
            href="/enquiry"
            className="flex items-center gap-1 text-sm font-medium text-primary px-3 py-2 rounded-lg transition-all hover:bg-primary/10"
          >
            <FileText className="h-3.5 w-3.5" />
            Enquiry
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/70 px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-primary/10"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild className="text-foreground hover:bg-primary/10">
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
          >
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 lg:hidden transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-primary/20 bg-card/90 backdrop-blur lg:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="border-t border-primary/20 pt-2">
              <p className="mb-2 text-xs font-semibold text-primary uppercase">Products</p>
              <div className="flex flex-col gap-2 pl-2">
                <Link href="/features" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Platform Features
                </Link>
                <Link href="/algo-software" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Algo Software
                </Link>
                <Link href="/pricing" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Pricing Plans
                </Link>
              </div>
            </div>
            <div className="border-t border-primary/20 pt-2">
              <p className="mb-2 text-xs font-semibold text-primary uppercase">Resources</p>
              <div className="flex flex-col gap-2 pl-2">
                <Link
                  href="/analytics"
                  className="flex items-center gap-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics Dashboard
                </Link>
                <Link
                  href="/tools"
                  className="flex items-center gap-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Wrench className="h-4 w-4" />
                  Trading Tools
                </Link>
                <Link
                  href="/news"
                  className="flex items-center gap-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Newspaper className="h-4 w-4" />
                  Market News
                </Link>
              </div>
            </div>
            <div className="border-t border-primary/20 pt-2">
              <p className="mb-2 text-xs font-semibold text-primary uppercase">Knowledge</p>
              <div className="flex flex-col gap-2 pl-2">
                <Link href="/market-knowledge" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Market Knowledge
                </Link>
                <Link href="/algo-knowledge" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Algo Trading Guide
                </Link>
              </div>
            </div>
            <Link
              href="/#accuracy"
              className="text-sm font-medium border-t border-primary/20 pt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Performance
            </Link>
            <Link
              href="/enquiry"
              className="flex items-center gap-2 text-sm font-medium text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              Enquiry Form
            </Link>
            <Link href="/contact" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col gap-2 border-t border-primary/20 pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent border-primary/30 hover:bg-primary/10">
                <Link href="/login">Log In</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
