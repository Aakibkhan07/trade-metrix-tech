import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CheckCircle, Clock, TrendingUp } from "lucide-react"
import type { AdminUser } from "./admin-client"

interface AdminStatsProps {
  users: AdminUser[]
}

export function AdminStats({ users }: AdminStatsProps) {
  const totalUsers = users.length
  const acceptedConsent = users.filter((u) => u.consentStatus === "accepted").length
  const pendingConsent = users.filter((u) => u.consentStatus === "pending").length
  const activeUsers = users.filter((u) => u.role === "user" && u.consentStatus === "accepted").length

  const stats = [
    {
      title: "Total Registrations",
      value: totalUsers,
      description: "All registered users",
      icon: Users,
    },
    {
      title: "Consent Accepted",
      value: acceptedConsent,
      description: "Active subscribers",
      icon: CheckCircle,
    },
    {
      title: "Consent Pending",
      value: pendingConsent,
      description: "Awaiting approval",
      icon: Clock,
    },
    {
      title: "Active Users",
      value: activeUsers,
      description: "With dashboard access",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
