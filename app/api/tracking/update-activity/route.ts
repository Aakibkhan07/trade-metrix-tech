import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { mobileNumber, pageVisited, timeSpentSeconds } = await request.json();

    if (!mobileNumber) {
      return NextResponse.json(
        { error: 'Mobile number is required' },
        { status: 400 }
      );
    }

    // In production, update the admin_user_tracking table:
    // UPDATE admin_user_tracking
    // SET pages_visited = CONCAT(pages_visited, ',', pageVisited),
    //     time_spent_seconds = time_spent_seconds + timeSpentSeconds,
    //     last_seen = NOW()
    // WHERE mobile_number = mobileNumber

    console.log('[v0] User Activity:', {
      mobileNumber,
      pageVisited,
      timeSpentSeconds,
      timestamp: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Activity tracked',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Activity tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track activity' },
      { status: 500 }
    );
  }
}
