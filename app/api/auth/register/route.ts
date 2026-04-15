import { NextResponse } from "next/server"
import { store, getConsentLink } from "@/lib/store"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, mobile, password, plan } = body

    // Validate required fields
    if (!fullName || !email || !mobile || !password || !plan) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Check if email already exists
    const existingUser = store.getUser(email)
    if (existingUser) {
      return NextResponse.json({ error: "An account with this email already exists" }, { status: 400 })
    }

    // Check if mobile already exists
    const existingMobile = store.getUserByMobile(mobile)
    if (existingMobile) {
      return NextResponse.json({ error: "An account with this mobile number already exists" }, { status: 400 })
    }

    // Create user
    const user = store.createUser({
      fullName,
      email,
      mobile,
      password, // In production, hash the password
      plan,
    })

    const consentLink = getConsentLink(email)

    // In production, send consent email here using an email service
    const emailContent = `
Registration Details:
- Name: ${fullName}
- Email: ${email}
- Mobile: ${mobile}
- Plan: ${plan}
- Registration Time: ${new Date().toISOString()}

This user data should be sent to info@trademetrix.tech for records.
`

    console.log(`\n========================================`)
    console.log(`[CONSENT EMAIL SENT TO: ${email}]`)
    console.log(`[REGISTRATION DATA SENT TO: info@trademetrix.tech]`)
    console.log(`========================================`)
    console.log(emailContent)
    console.log(`Subject: Consent & Risk Disclaimer – TradeMetrix Advisory Services`)
    console.log(``)
    console.log(`Dear ${fullName},`)
    console.log(``)
    console.log(`Thank you for registering with TradeMetrix.`)
    console.log(``)
    console.log(`Please click the link below to review and accept our Terms & Conditions:`)
    console.log(`${consentLink}`)
    console.log(``)
    console.log(`Regards,`)
    console.log(`TradeMetrix Team`)
    console.log(`========================================\n`)

    return NextResponse.json({
      success: true,
      message: "Registration successful. Consent email sent.",
      userId: user.id,
      // For demo purposes, return the consent link
      // In production, this would only be sent via email
      consentLink,
    })
  } catch {
    return NextResponse.json({ error: "An error occurred during registration" }, { status: 500 })
  }
}
