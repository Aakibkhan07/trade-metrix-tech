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
          <Image
            src="/images/logo.png"
            alt="Trade Metrix Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight md:text-xs bg-muted text-center text-foreground">
              Trade Metrix
            </span>
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
                <Link href="/intelligence">Strategy Intelligence</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/pcp">PCP (Points Covering Plan)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pricing">Pricing Plans</Link>
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
              <DropdownMenuItem asChild>
                <Link href="/blog">Blog</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden items-center gap-3 lg:flex">
        </div>
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
                <Link href="/intelligence" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Strategy Intelligence
                </Link>
                <Link href="/products/pcp" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  PCP (Points Covering Plan)
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
                <Link href="/blog" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </div>
            </div>
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

          </nav>
        </div>
      )}
    </header>
  )
}
