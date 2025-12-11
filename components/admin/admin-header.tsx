"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { TrendingUp, LogOut, Shield } from "lucide-react"

export function AdminHeader() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight">TradeMetrix</span>
          <span className="hidden rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent sm:inline-flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Admin
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/admin" className="text-sm font-medium text-foreground">
            Dashboard
          </Link>
          <Link href="/admin/users" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Users
          </Link>
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            View Site
          </Link>
        </nav>

        <Button variant="ghost" onClick={handleLogout} className="gap-2">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  )
}
