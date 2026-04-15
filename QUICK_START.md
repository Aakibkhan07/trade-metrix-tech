# Quick Start Guide - Live Chat AI & OTP Authentication

## What's New? ✨

Your website now has three powerful new features:

### 1. **OTP-Based Authentication** 🔐
Users log in with their mobile number + OTP verification instead of passwords.
- **Visit:** `/otp-login`
- **Test OTP:** `123456` (development only)
- **Mobile format:** 10 digits, starts with 6-9 (Indian numbers)

### 2. **Live User Monitoring Dashboard** 📊
Real-time admin panel showing who's online and what they're doing.
- **Visit:** `/admin-monitoring`
- **Shows:** Mobile number, current page, time spent, last activity
- **Updates:** Every 30 seconds (auto-refresh)

### 3. **AI-Powered Live Chat Widget** 💬
Floating chat bubble on every page with intelligent AI responses.
- **Location:** Bottom-right corner of any page
- **Features:** Minimize/expand, auto-scroll, typing indicators
- **AI:** GPT-4-mini with custom trading platform personality

---

## Quick Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install ai @ai-sdk/react
```

### Step 2: Environment Variables
Add to `.env.local` (optional - uses Vercel AI Gateway by default):
```env
# If you want to use a specific provider:
# OPENAI_API_KEY=sk_...
```

### Step 3: Database Setup (Production Only)
For production, run the migration:
```bash
psql -U postgres -d your_database < scripts/001-create-otp-and-sessions.sql
```

### Step 4: SMS Provider Setup (Production Only)
Install Twilio for OTP sending:
```bash
npm install twilio
```

Then update environment variables:
```env
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1234567890
```

---

## How to Use

### For Users
1. Click "Sign In" or go to `/otp-login`
2. Enter mobile number (e.g., 9876543210)
3. Enter OTP sent to SMS (test: 123456)
4. Optional: Add name and email
5. Enjoy! You're logged in

### For Admins
1. Go to `/admin-monitoring`
2. See all users currently online
3. Track pages visited and time spent
4. Auto-refresh shows real-time updates

### For Everyone
1. Look for chat bubble (bottom-right)
2. Click to open chat
3. Ask questions about trading, pricing, features
4. AI responds in real-time with streaming text

---

## Key Files Created

| File | Purpose |
|------|---------|
| `/app/api/auth/otp/send/route.ts` | Generate and send OTP |
| `/app/api/auth/otp/verify/route.ts` | Verify OTP and create session |
| `/app/api/chat/route.ts` | AI chat streaming endpoint |
| `/app/api/tracking/update-activity/route.ts` | Track user activity |
| `/app/api/admin/online-users/route.ts` | Get list of online users |
| `/components/auth/otp-login-form.tsx` | OTP login UI |
| `/components/admin/admin-monitoring-dashboard.tsx` | Admin dashboard UI |
| `/components/chat/live-chat-widget.tsx` | Chat widget UI |
| `/hooks/use-user-tracking.ts` | Track user activity hook |
| `/scripts/001-create-otp-and-sessions.sql` | Database schema |

---

## Testing (Development Mode)

### Test OTP Login
```
URL: http://localhost:3000/otp-login
Mobile: 9876543210
OTP: 123456
```

### Test Chat
- Click chat bubble on any page
- Type: "What is algorithmic trading?"
- See AI respond with streaming text

### Test Admin Dashboard
```
URL: http://localhost:3000/admin-monitoring
See mock online users with activity
```

---

## Important: Production Checklist

- [ ] Integrate real SMS provider (Twilio/AWS SNS)
- [ ] Setup PostgreSQL database and run migration
- [ ] Update OTP sending in `/app/api/auth/otp/send/route.ts`
- [ ] Implement database queries (replace mock data)
- [ ] Add authentication to admin dashboard
- [ ] Encrypt mobile numbers in database
- [ ] Setup HTTPS for secure authentication
- [ ] Configure CORS if needed
- [ ] Set rate limiting for OTP attempts
- [ ] Test with real mobile numbers

---

## API Endpoints

### OTP Login
```
POST /api/auth/otp/send
POST /api/auth/otp/verify
```

### Chat
```
POST /api/chat (Server-Sent Events response)
```

### Tracking
```
POST /api/tracking/update-activity
```

### Admin
```
GET /api/admin/online-users
```

---

## Customization

### Change Chat Personality
Edit `/app/api/chat/route.ts` - modify `system` prompt

### Change Chat Colors
Edit `/components/chat/live-chat-widget.tsx` - update className colors

### Change Dashboard Colors
Edit `/components/admin/admin-monitoring-dashboard.tsx` - update Card colors

### Change OTP Expiry
Edit `/app/api/auth/otp/send/route.ts` - change the 10 minute expiry time

---

## Common Issues & Fixes

### Chat widget not showing?
- Clear browser cache
- Check console for errors
- Verify `@ai-sdk/react` is installed

### OTP not sending (dev mode)?
- Check mobile number format
- Test OTP is always `123456`
- For production, setup SMS provider

### Admin dashboard empty?
- In development, shows mock data
- Users need to visit site and trigger tracking
- Check if user activity is being tracked

### Database errors?
- Ensure PostgreSQL is running
- Run migration script
- Check connection string

---

## Next Steps

1. **Customize the AI personality** - Edit system prompt in chat API
2. **Setup SMS provider** - Integrate Twilio/AWS SNS for production
3. **Connect to your database** - Replace mock data with real queries
4. **Add admin authentication** - Protect monitoring dashboard
5. **Customize chat widget** - Add your branding and colors
6. **Setup analytics** - Track what users are asking

---

## Documentation

For detailed documentation, see:
- `/IMPLEMENTATION_GUIDE.md` - Complete technical documentation
- `/v0_plans/realistic-implementation.md` - Architecture and design

---

## Support

Questions? Check the implementation guide or review the code comments. All APIs are documented inline.

Happy trading! 🚀
