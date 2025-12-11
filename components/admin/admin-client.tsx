"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminHeader } from "./admin-header"
import { AdminStats } from "./admin-stats"
import { UsersTable } from "./users-table"
import { Loader2 } from "lucide-react"

export interface AdminUser {
  id: string
  fullName: string
  email: string
  mobile: string
  plan: string
  role: string
  consentStatus: "pending" | "accepted"
  consentTimestamp?: string
  consentIpAddress?: string
  createdAt: string
}

export function AdminClient() {
  const router = useRouter()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/admin/users")

        if (!response.ok) {
          if (response.status === 403) {
            router.push("/dashboard")
            return
          }
          router.push("/login")
          return
        }

        const data = await response.json()
        setUsers(data.users)
      } catch {
        router.push("/login")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold md:text-3xl">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage registered users and monitor consent statuses.</p>
        </div>

        <div className="space-y-6">
          <AdminStats users={users} />
          <UsersTable users={users} />
        </div>
      </main>
    </div>
  )
}
