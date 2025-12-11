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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 text-primary">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qMFHRXNZB6CHpiwKTORqsFngVETiBm.png" alt="Trade Metrix Logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight md:text-xs bg-muted text-center text-foreground">Trade Metrix</span>
            <span className="text-[9px] md:text-[10px] text-muted-foreground -mt-1 leading-3 text-left">{""}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Products <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/features">Platform Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/algo-software">Algo Software</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pricing">Pricing Plans</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Resources <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/analytics" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Analytics Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools" className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  Trading Tools
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/news" className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  Market News
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Knowledge <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/market-knowledge">Market Knowledge</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/algo-knowledge">Algo Trading Guide</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/#accuracy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Performance
          </Link>
          <Link
            href="/enquiry"
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <FileText className="h-3.5 w-3.5" />
            Enquiry
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
          >
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="border-t border-border pt-2">
              <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase">Products</p>
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
            <div className="border-t border-border pt-2">
              <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase">Resources</p>
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
            <div className="border-t border-border pt-2">
              <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase">Knowledge</p>
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
              className="text-sm font-medium border-t border-border pt-2"
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
            <div className="flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/login">Log In</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
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
