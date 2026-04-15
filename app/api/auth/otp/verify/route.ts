import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Generate secure session token
const generateSessionToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export async function POST(request: NextRequest) {
  try {
    const { mobileNumber, otp, fullName, email } = await request.json();

    // Validate inputs
    if (!mobileNumber || !otp) {
      return NextResponse.json(
        { error: 'Mobile number and OTP are required' },
        { status: 400 }
      );
    }

    // Validate OTP format (6 digits)
    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json(
        { error: 'Invalid OTP format' },
        { status: 400 }
      );
    }

    console.log('[v0] Verifying OTP for:', mobileNumber);

    // In production, verify against your database:
    // 1. Find OTP record by mobileNumber
    // 2. Check if OTP matches
    // 3. Check if not expired
    // 4. Check if attempts < 3
    // 5. Mark as verified

    // For now, mock verification
    const isValidOTP = otp === '123456'; // Mock - replace with DB check

    if (!isValidOTP) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 401 }
      );
    }

    // Generate session token
    const sessionToken = generateSessionToken();
    const expiresIn = 7 * 24 * 60 * 60 * 1000; // 7 days
    const expiresAt = new Date(Date.now() + expiresIn);

    // In production, store session in database:
    // INSERT INTO user_sessions (user_id, mobile_number, session_token, is_online, logged_in_at)

    const response = NextResponse.json(
      {
        success: true,
        message: 'OTP verified successfully',
        sessionToken,
        user: {
          mobileNumber,
          fullName: fullName || 'User',
          email: email || null,
        },
        expiresAt,
      },
      { status: 200 }
    );

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: 'sessionToken',
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: expiresIn / 1000,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('OTP verification error:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}
