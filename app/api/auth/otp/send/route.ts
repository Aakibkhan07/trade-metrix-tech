import { NextRequest, NextResponse } from 'next/server';

// Mock SMS service - Replace with Twilio, AWS SNS, or your SMS provider
const sendSMS = async (mobileNumber: string, otp: string) => {
  console.log(`[OTP SMS] Sending OTP ${otp} to ${mobileNumber}`);
  // In production, integrate with:
  // - Twilio: https://www.twilio.com/docs/sms
  // - AWS SNS: https://aws.amazon.com/sns/
  // - Fast2SMS: https://www.fast2sms.com/
  return true;
};

// Generate a random 6-digit OTP
const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export async function POST(request: NextRequest) {
  try {
    const { mobileNumber } = await request.json();

    // Validate mobile number format
    if (!mobileNumber || !/^[6-9]\d{9}$/.test(mobileNumber)) {
      return NextResponse.json(
        { error: 'Invalid Indian mobile number format' },
        { status: 400 }
      );
    }

    // Generate OTP
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    // Store OTP in database (using mock storage for now)
    // In production, store in your database
    const otpRecord = {
      mobileNumber,
      otp,
      expiresAt,
      isVerified: false,
      attempts: 0,
      createdAt: new Date(),
    };

    console.log('[v0] OTP Record:', otpRecord);

    // Send OTP via SMS
    await sendSMS(mobileNumber, otp);

    return NextResponse.json(
      {
        success: true,
        message: 'OTP sent successfully',
        // For development only - remove in production
        _devOtp: process.env.NODE_ENV === 'development' ? otp : undefined,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('OTP generation error:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
