# Live Chat AI, OTP Authentication & User Monitoring - Implementation Guide

## Overview
This document outlines the complete implementation of three major features:
1. **OTP-Based Authentication** - Mobile-based login with OTP verification
2. **Live User Monitoring** - Admin dashboard showing online users
3. **AI-Powered Live Chat** - Floating widget with streaming AI responses

---

## Phase 1: OTP Authentication & Session Tracking

### What's Been Implemented

#### 1. **Database Schema** (`/scripts/001-create-otp-and-sessions.sql`)
- `users` table - Stores user mobile numbers and profile info
- `otp_verifications` table - Manages OTP generation and verification
- `user_sessions` table - Tracks active sessions with tokens
- `chat_messages` table - Stores conversation history
- `admin_user_tracking` table - Monitors user activity across the site

#### 2. **OTP APIs**
- **`/app/api/auth/otp/send/route.ts`** - Generates and sends OTP
  - Validates Indian mobile number format (10 digits, starts with 6-9)
  - OTP expires in 10 minutes
  - Integrates with SMS provider (mock currently, ready for Twilio/AWS SNS)

- **`/app/api/auth/otp/verify/route.ts`** - Verifies OTP and creates session
  - Validates OTP format and expiry
  - Generates secure session token (HTTP-only cookie)
  - Returns user profile data

#### 3. **OTP Login Component** (`/components/auth/otp-login-form.tsx`)
- Step-by-step form: Mobile → OTP → Profile (Optional)
- Real-time validation
- 60-second resend countdown timer
- Auto-fills OTP in development mode for testing
- Stores user data in localStorage for client-side access

#### 4. **OTP Login Page** (`/app/otp-login/page.tsx`)
- Dedicated login page with full UI
- Accessible at `/otp-login`

#### 5. **User Tracking** (`/hooks/use-user-tracking.ts`)
- Automatically tracks user activity every 30 seconds
- Logs page visits and time spent
- Sends final activity data on page unload

#### 6. **Authentication Guard** (`/components/auth/auth-guard.tsx`)
- Protects routes requiring authentication
- Redirects unauthenticated users to `/otp-login`
- Prevents authenticated users from accessing login pages

---

## Phase 2: Admin Live User Monitoring

### What's Been Implemented

#### 1. **Online Users API** (`/app/api/admin/online-users/route.ts`)
- Returns all currently online users
- Shows mobile number, name, current page, time spent
- Mock data ready for database integration

#### 2. **Admin Monitoring Dashboard** (`/components/admin/admin-monitoring-dashboard.tsx`)
- Real-time table of all online users
- Auto-refresh every 30 seconds
- Shows statistics: total online, cumulative time spent
- Mobile numbers displayed (secured in production)
- Status badges for active sessions
- Toggle to control auto-refresh

#### 3. **Admin Monitoring Page** (`/app/admin-monitoring/page.tsx`)
- Accessible at `/admin-monitoring`
- Full-page dashboard with header and footer
- Responsive design for desktop monitoring

---

## Phase 3: AI-Powered Live Chat Widget

### What's Been Implemented

#### 1. **Chat API Route** (`/app/api/chat/route.ts`)
- Uses AI SDK 6 with streaming responses
- Connects to OpenAI GPT-4-mini (via Vercel AI Gateway)
- Custom system prompt for Trade Metrix AI assistant
- Handles message conversion and streaming

#### 2. **Live Chat Widget** (`/components/chat/live-chat-widget.tsx`)
- Floating chat bubble in bottom-right corner
- Expandable/collapsible interface
- Message history display
- Typing indicators while AI responds
- Auto-scroll to latest messages
- Minimize/maximize controls
- Responsive on mobile

#### 3. **Widget Integration**
- Automatically loaded in layout (`/app/layout.tsx`)
- Accessible from any page on the website
- Non-blocking, user can close anytime

---

## Setup Instructions

### 1. Database Setup
```bash
# Execute the SQL migration
psql -U postgres -d your_database_name -f /scripts/001-create-otp-and-sessions.sql
```

### 2. Install Dependencies
```bash
npm install ai @ai-sdk/react
```

### 3. Environment Variables
Add to your `.env.local`:
```env
# AI API Configuration (if not using Vercel AI Gateway)
# OPENAI_API_KEY=sk_...
# If using other providers:
# GROQ_API_KEY=...
# ANTHROPIC_API_KEY=...
```

### 4. SMS Provider Setup (Production)
For OTP sending in production, integrate with:
- **Twilio**: `npm install twilio`
- **AWS SNS**: `npm install @aws-sdk/client-sns`
- **Fast2SMS**: API-based (Indian market)

Update `/app/api/auth/otp/send/route.ts`:
```typescript
const sendSMS = async (mobileNumber: string, otp: string) => {
  // Example with Twilio
  const message = await twilioClient.messages.create({
    body: `Your OTP is: ${otp}. Valid for 10 minutes.`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: `+91${mobileNumber}`,
  });
  return message.sid;
};
```

### 5. Database Integration (Production)
Replace mock data with actual database queries:

**For OTP Verification:**
```typescript
// In /app/api/auth/otp/verify/route.ts
const otpRecord = await db.query(
  'SELECT * FROM otp_verifications WHERE mobile_number = $1 AND expires_at > NOW() ORDER BY created_at DESC LIMIT 1',
  [mobileNumber]
);

if (!otpRecord.rows[0] || otpRecord.rows[0].otp_code !== otp) {
  throw new Error('Invalid OTP');
}

// Mark as verified
await db.query(
  'UPDATE otp_verifications SET is_verified = true, verified_at = NOW() WHERE id = $1',
  [otpRecord.rows[0].id]
);

// Create session
const sessionRecord = await db.query(
  'INSERT INTO user_sessions (user_id, mobile_number, session_token, ip_address) VALUES ($1, $2, $3, $4) RETURNING *',
  [userId, mobileNumber, sessionToken, ipAddress]
);
```

**For Online Users:**
```typescript
// In /app/api/admin/online-users/route.ts
const onlineUsers = await db.query(`
  SELECT u.id, u.mobile_number, u.full_name, 
         ut.last_seen, ut.pages_visited, ut.time_spent_seconds
  FROM users u
  JOIN admin_user_tracking ut ON u.id = ut.user_id
  WHERE ut.last_seen > NOW() - INTERVAL '5 minutes'
  ORDER BY ut.last_seen DESC
`);
```

---

## API Endpoints Reference

### Authentication Endpoints

**POST `/api/auth/otp/send`**
```json
{
  "mobileNumber": "9876543210"
}
```
Response:
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "_devOtp": "123456" // Only in development
}
```

**POST `/api/auth/otp/verify`**
```json
{
  "mobileNumber": "9876543210",
  "otp": "123456",
  "fullName": "John Doe",
  "email": "john@example.com"
}
```
Response:
```json
{
  "success": true,
  "sessionToken": "abc123...",
  "user": {
    "mobileNumber": "9876543210",
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "expiresAt": "2024-03-08T..."
}
```

### Tracking Endpoint

**POST `/api/tracking/update-activity`**
```json
{
  "mobileNumber": "9876543210",
  "pageVisited": "/pricing",
  "timeSpentSeconds": 120
}
```

### Admin Endpoint

**GET `/api/admin/online-users`**
Response:
```json
{
  "success": true,
  "onlineCount": 3,
  "onlineUsers": [
    {
      "id": 1,
      "mobileNumber": "9876543210",
      "fullName": "Raj Kumar",
      "lastSeen": "2024-03-01T10:30:00Z",
      "currentPage": "/pricing",
      "timeSpentSeconds": 300,
      "sessionDuration": "Active"
    }
  ],
  "timestamp": "2024-03-01T10:35:00Z"
}
```

### Chat Endpoint

**POST `/api/chat`**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "How does your algo trading platform work?"
    }
  ]
}
```
Response: Server-Sent Events (SSE) with streaming AI responses

---

## File Structure

```
/app
  /api
    /auth
      /otp
        /send/route.ts
        /verify/route.ts
    /chat
      /route.ts
    /tracking
      /update-activity/route.ts
    /admin
      /online-users/route.ts
  /otp-login
    /page.tsx
  /admin-monitoring
    /page.tsx
  /layout.tsx

/components
  /auth
    /otp-login-form.tsx
    /auth-guard.tsx
    /user-tracking-client.tsx
  /admin
    /admin-monitoring-dashboard.tsx
  /chat
    /live-chat-widget.tsx

/hooks
  /use-user-tracking.ts

/scripts
  /001-create-otp-and-sessions.sql
```

---

## Testing the Implementation

### 1. Test OTP Login
- Visit `/otp-login`
- Enter mobile number (9876543210)
- Use OTP: `123456` (in development)
- Optional: Add name and email

### 2. Test Live Chat
- Click the chat bubble in bottom-right
- Type a message about trading
- Watch AI respond with streaming text

### 3. Test Admin Monitoring
- Visit `/admin-monitoring`
- See mock online users
- Auto-refresh shows latest data

---

## Security Considerations

### For Production Deployment

1. **OTP Security**
   - Rate limit OTP generation (max 3 per 15 minutes)
   - Implement IP-based restrictions
   - Use database for OTP storage with encryption
   - Enforce 10-minute expiry

2. **Session Security**
   - Store session tokens securely (HTTP-only cookies)
   - Implement token rotation on sensitive operations
   - Add CSRF protection

3. **Admin Dashboard**
   - Implement role-based access control (RBAC)
   - Require admin authentication
   - Log all admin access attempts
   - Encrypt mobile numbers in database (use PII encryption)

4. **Chat Security**
   - Rate limit chat messages (prevent spam)
   - Implement content moderation
   - Log conversations for compliance
   - Add user authentication check before chat

---

## Future Enhancements

1. **SMS Providers Integration**
   - Twilio SMS
   - AWS SNS
   - Fast2SMS (Indian)

2. **Advanced Admin Features**
   - Export user data (CSV/Excel)
   - Filter by date range
   - Search by mobile number
   - User session details modal
   - Heat maps of popular pages

3. **Chat Enhancements**
   - Chat history persistence
   - Department routing (sales, support, technical)
   - File upload support
   - Sentiment analysis
   - Handoff to human agent

4. **Analytics**
   - User retention metrics
   - Popular pages analysis
   - Conversion funnel tracking
   - Chat response satisfaction ratings

5. **Multi-language Support**
   - Hindi, regional languages
   - Auto-detect user language
   - Translated AI responses

---

## Troubleshooting

### OTP Not Sending
- Check SMS provider credentials
- Verify mobile number format (must be 10 digits, starts with 6-9)
- Check rate limiting - wait 30 seconds between attempts

### Chat Not Responding
- Verify API keys in environment variables
- Check internet connection
- Review browser console for errors
- Verify user is authenticated

### Monitoring Dashboard Shows No Users
- Check if users are logging in
- Verify activity tracking is enabled
- Check database connection in production

---

## Support & Maintenance

- Monitor OTP success rates
- Track chat response times
- Review admin dashboard usage patterns
- Maintain user session records (purge old sessions weekly)
- Update AI system prompt based on user feedback
