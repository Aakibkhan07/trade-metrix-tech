import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { store } from "@/lib/store"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json({ error: "Invalid consent token" }, { status: 400 })
    }

    // In production, decode the token to get email
    // For demo, token is base64 encoded email
    let email: string
    try {
      email = atob(token)
    } catch {
      return NextResponse.json({ error: "Invalid consent token" }, { status: 400 })
    }

    // Get user
    const user = store.getUser(email)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    if (user.consentStatus === "accepted") {
      return NextResponse.json({ error: "Consent already recorded" }, { status: 400 })
    }

    // Get client IP
    const headersList = await headers()
    const forwardedFor = headersList.get("x-forwarded-for")
    const ipAddress = forwardedFor?.split(",")[0] || "unknown"

    // Update user consent
    const updatedUser = store.updateUserConsent(email, ipAddress)

    if (!updatedUser) {
      return NextResponse.json({ error: "Failed to update consent" }, { status: 500 })
    }

    // Log admin notification (in production, send email)
    console.log(`[Admin Notification] New consent accepted:`)
    console.log(`  - Client Name: ${updatedUser.fullName}`)
    console.log(`  - Email: ${updatedUser.email}`)
    console.log(`  - Mobile: ${updatedUser.mobile}`)
    console.log(`  - Selected Plan: ${updatedUser.plan}`)
    console.log(`  - Consent Time: ${updatedUser.consentTimestamp}`)
    console.log(`  - IP Address: ${updatedUser.consentIpAddress}`)

    // Log user confirmation (in production, send email)
    console.log(`[User Email] Consent confirmation sent to: ${email}`)
    console.log(`  Subject: Consent Recorded – TradeMetrix`)

    return NextResponse.json({
      success: true,
      message: "Consent recorded successfully",
    })
  } catch {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
