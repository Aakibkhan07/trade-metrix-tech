import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { store } from "@/lib/store"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Try to find user by email or mobile
    let user = store.getUser(email)
    if (!user) {
      user = store.getUserByMobile(email)
    }

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Check password (in production, compare hashed passwords)
    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Set session cookie
    const cookieStore = await cookies()
    cookieStore.set(
      "session",
      JSON.stringify({
        userId: user.id,
        email: user.email,
        role: user.role,
        consentStatus: user.consentStatus,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      },
    )

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        consentStatus: user.consentStatus,
        plan: user.plan,
      },
    })
  } catch {
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
