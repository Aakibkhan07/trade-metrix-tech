import { cookies } from "next/headers"

export interface Session {
  userId: string
  email: string
  role: "user" | "admin"
  consentStatus: "pending" | "accepted"
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("session")

  if (!sessionCookie) {
    return null
  }

  try {
    return JSON.parse(sessionCookie.value) as Session
  } catch {
    return null
  }
}

export async function requireAuth(): Promise<Session> {
  const session = await getSession()

  if (!session) {
    throw new Error("Unauthorized")
  }

  if (session.consentStatus !== "accepted") {
    throw new Error("Consent required")
  }

  return session
}

export async function requireAdmin(): Promise<Session> {
  const session = await requireAuth()

  if (session.role !== "admin") {
    throw new Error("Admin access required")
  }

  return session
}
