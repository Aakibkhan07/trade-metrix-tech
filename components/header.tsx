"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Home, Zap, BarChart3, BookOpen, Settings, FileText, Shield } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qMFHRXNZB6CHpiwKTORqsFngVETiBm.png" 
              alt="Trade Metrix Technologies Logo" 
              width={40} 
              height={40} 
              loading="eager"
              className="h-6 w-6 object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-foreground">TMT</span>
            <span className="text-[8px] text-primary font-semibold uppercase tracking-wide -mt-0.5">Automation</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex ml-12">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 px-4 py-2 rounded-lg transition-all duration-200 hover:text-primary hover:bg-primary/5 group"
          >
            <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-foreground/80 px-4 py-2 rounded-lg transition-all duration-200 hover:text-primary hover:bg-primary/5"
          >
            About
          </Link>

          {/* Platform Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 px-4 py-2 rounded-lg transition-all duration-200 hover:text-primary hover:bg-primary/5 group">
              <Zap className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Platform <ChevronDown className="h-3.5 w-3.5 ml-0.5 transition-transform group-hover:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur border border-primary/20 shadow-lg">
              <DropdownMenuItem asChild>
                <Link href="/features" className="text-foreground font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  Software Features
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/algo-software" className="text-foreground font-medium">
                  <Settings className="h-4 w-4 mr-2" />
                  Trading Strategies
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pricing" className="text-foreground font-medium">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Pricing Plans
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 px-4 py-2 rounded-lg transition-all duration-200 hover:text-primary hover:bg-primary/5 group">
              <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Resources <ChevronDown className="h-3.5 w-3.5 ml-0.5 transition-transform group-hover:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur border border-primary/20 shadow-lg">
              <DropdownMenuItem asChild>
                <Link href="/analytics" className="text-foreground font-medium">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools" className="text-foreground font-medium">
                  <Settings className="h-4 w-4 mr-2" />
                  Analysis Tools
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/market-knowledge" className="text-foreground font-medium">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Market Guide
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Legal & Compliance */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 px-4 py-2 rounded-lg transition-all duration-200 hover:text-primary hover:bg-primary/5 group">
              <Shield className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Legal <ChevronDown className="h-3.5 w-3.5 ml-0.5 transition-transform group-hover:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur border border-primary/20 shadow-lg">
              <DropdownMenuItem asChild>
                <Link href="/disclaimer" className="text-foreground font-medium">
                  Risk Disclaimer
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/terms" className="text-foreground font-medium">
                  Terms of Service
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/privacy" className="text-foreground font-medium">
                  Privacy Policy
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/#stats"
            className="text-sm font-semibold text-foreground/80 px-4 py-2 rounded-lg transition-all duration-200 hover:text-primary hover:bg-primary/5"
          >
            Performance
          </Link>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden items-center gap-3 lg:flex ml-auto">
          <Button 
            variant="ghost" 
            asChild 
            className="text-foreground/80 font-semibold hover:text-primary hover:bg-primary/5 transition-all"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-0.5 px-6"
          >
            <Link href="/register">Get Started</Link>
          </Button>
          <Link href="/contact" className="ml-2">
            <Button 
              variant="outline" 
              className="border-primary/30 text-foreground font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 lg:hidden transition-all ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-primary/15 bg-card/80 backdrop-blur lg:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm font-semibold text-foreground px-4 py-3 rounded-lg hover:bg-primary/10 transition-all" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            
            <Link 
              href="/about" 
              className="text-sm font-semibold text-foreground px-4 py-3 rounded-lg hover:bg-primary/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <div className="border-t border-primary/20 mt-2 pt-2">
              <p className="mb-2 text-xs font-bold text-primary uppercase tracking-widest px-4">Platform</p>
              <div className="flex flex-col gap-1 pl-2">
                <Link 
                  href="/features" 
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software Features
                </Link>
                <Link 
                  href="/algo-software" 
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trading Strategies
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing Plans
                </Link>
              </div>
            </div>

            <div className="border-t border-primary/20 mt-2 pt-2">
              <p className="mb-2 text-xs font-bold text-primary uppercase tracking-widest px-4">Resources</p>
              <div className="flex flex-col gap-1 pl-2">
                <Link
                  href="/analytics"
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/tools"
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Analysis Tools
                </Link>
                <Link
                  href="/market-knowledge"
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Market Guide
                </Link>
              </div>
            </div>

            <div className="border-t border-primary/20 mt-2 pt-2">
              <p className="mb-2 text-xs font-bold text-primary uppercase tracking-widest px-4">Legal & Compliance</p>
              <div className="flex flex-col gap-1 pl-2">
                <Link 
                  href="/disclaimer" 
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Risk Disclaimer
                </Link>
                <Link 
                  href="/terms" 
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-sm font-medium text-foreground/80 px-4 py-2 rounded-lg hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <Link
              href="/#stats"
              className="text-sm font-semibold text-foreground border-t border-primary/20 mt-2 pt-3 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Performance
            </Link>

            <div className="flex flex-col gap-2 border-t border-primary/20 mt-4 pt-4">
              <Button 
                variant="outline" 
                asChild 
                className="w-full bg-transparent border-primary/30 hover:bg-primary/10 font-semibold text-foreground"
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              >
                <Link href="/register">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-primary/30 text-foreground font-semibold hover:bg-primary/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
