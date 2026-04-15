import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { DashboardClient } from "@/components/dashboard/dashboard-client"

export const metadata = {
  title: "Dashboard - TradeMetrix",
  description: "Access your TradeMetrix trading advisory dashboard.",
}

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  if (session.consentStatus !== "accepted") {
    redirect("/consent-pending")
  }

  return <DashboardClient />
}
