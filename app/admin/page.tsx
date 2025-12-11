import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { AdminClient } from "@/components/admin/admin-client"

export const metadata = {
  title: "Admin Panel - TradeMetrix",
  description: "TradeMetrix administration panel for managing users and consent statuses.",
}

export default async function AdminPage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  if (session.role !== "admin") {
    redirect("/dashboard")
  }

  return <AdminClient />
}
