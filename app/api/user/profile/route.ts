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
    const user = store.getUser(session.email)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Return user data without password
    const { password: _, ...userData } = user

    return NextResponse.json({ user: userData })
  } catch {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
