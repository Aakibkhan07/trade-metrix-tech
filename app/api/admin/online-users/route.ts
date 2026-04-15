import { NextRequest, NextResponse } from 'next/server';

// Mock data - In production, fetch from your database
const mockOnlineUsers = [
  {
    id: 1,
    mobileNumber: '9876543210',
    fullName: 'Raj Kumar',
    lastSeen: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    currentPage: '/algo-software',
    timeSpentSeconds: 300,
    sessionDuration: 'Active',
  },
  {
    id: 2,
    mobileNumber: '9765432109',
    fullName: 'Priya Singh',
    lastSeen: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    currentPage: '/pricing',
    timeSpentSeconds: 120,
    sessionDuration: 'Active',
  },
  {
    id: 3,
    mobileNumber: '9654321098',
    fullName: 'Arjun Patel',
    lastSeen: new Date(Date.now() - 1 * 60 * 1000), // 1 minute ago
    currentPage: '/features',
    timeSpentSeconds: 60,
    sessionDuration: 'Active',
  },
];

export async function GET(request: NextRequest) {
  try {
    // In production, add authentication check:
    // const adminToken = request.headers.get('Authorization');
    // if (!isValidAdminToken(adminToken)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // In production, fetch from database:
    // const onlineUsers = await db.query(`
    //   SELECT u.id, u.mobile_number, u.full_name, ut.last_seen, ut.pages_visited, ut.time_spent_seconds
    //   FROM users u
    //   JOIN admin_user_tracking ut ON u.id = ut.user_id
    //   WHERE ut.last_seen > NOW() - INTERVAL 5 MINUTE
    //   ORDER BY ut.last_seen DESC
    // `);

    console.log('[v0] Fetching online users');

    return NextResponse.json(
      {
        success: true,
        onlineCount: mockOnlineUsers.length,
        onlineUsers: mockOnlineUsers,
        timestamp: new Date(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch online users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch online users' },
      { status: 500 }
    );
  }
}
