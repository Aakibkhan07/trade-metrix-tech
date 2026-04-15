import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { store } from "@/lib/store"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("session")

    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)

    // Check if user is admin
    if (session.role !== "admin") {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 })
    }

    // Get all users
    const users = store.getAllUsers()

    // Return users without passwords
    const sanitizedUsers = users.map((user) => {
      const { password: _, ...userData } = user
      return userData
    })

    return NextResponse.json({ users: sanitizedUsers })
  } catch {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
