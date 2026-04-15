# Architecture Overview - Live Chat AI & OTP System

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         TRADE METRIX WEBSITE                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌────────────────────────┐    ┌──────────────────────────────────┐ │
│  │   USER FACING LAYER    │    │   ADMIN FACING LAYER             │ │
│  ├────────────────────────┤    ├──────────────────────────────────┤ │
│  │                        │    │                                  │ │
│  │  • OTP Login (/otp-    │    │  • Monitoring Dashboard          │ │
│  │    login)              │    │    (/admin-monitoring)           │ │
│  │  • Live Chat Widget    │    │                                  │ │
│  │  • Auth Guard          │    │  • Real-time user list           │ │
│  │  • Activity Tracking   │    │  • Activity metrics              │ │
│  │                        │    │  • Session monitoring            │ │
│  └────────────────────────┘    └──────────────────────────────────┘ │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│                      NEXT.JS API LAYER                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ AUTHENTICATION API                                          │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  POST /api/auth/otp/send     → Generate OTP → SMS Provider │   │
│  │  POST /api/auth/otp/verify   → Verify OTP → Create Session │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ AI CHAT API                                                 │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  POST /api/chat              → Stream responses from GPT-4  │   │
│  │                                 (Vercel AI Gateway)         │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ TRACKING & ADMIN API                                        │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  POST /api/tracking/update-activity → Log user activity     │   │
│  │  GET  /api/admin/online-users       → List online users     │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────┐    ┌──────────────────┐   ┌──────────────┐   │
│  │  SMS PROVIDER    │    │  OPENAI / AI SDK │   │  DATABASE    │   │
│  │  (Twilio/AWS/    │    │  GPT-4-mini      │   │  PostgreSQL  │   │
│  │   Fast2SMS)      │    │  (Streaming)     │   │  (Production)│   │
│  └──────────────────┘    └──────────────────┘   └──────────────┘   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### 1. OTP Authentication Flow

```
User                          Frontend              Backend         SMS Provider
  │                              │                    │                   │
  ├─ Enter Mobile Number ────────>│                    │                   │
  │                              │                    │                   │
  │                              ├─ POST /otp/send ──>│                   │
  │                              │                    ├─ Generate OTP     │
  │                              │                    ├─ Validate mobile  │
  │                              │                    ├─ Store in DB      │
  │                              │                    ├─ Send OTP ───────>│
  │                              │                    │    (Twilio/AWS)   │
  │<─────────────────────────────┤                    │                   │
  │    (SMS received with OTP)    │                   │                   │
  │                              │                    │                   │
  ├─ Enter OTP ──────────────────>│                    │                   │
  │                              │                    │                   │
  │                              ├─ POST /otp/verify >│                   │
  │                              │                    ├─ Validate OTP     │
  │                              │                    ├─ Check expiry     │
  │                              │                    ├─ Create user      │
  │                              │                    ├─ Generate token   │
  │                              │                    ├─ Create session   │
  │                              │<───────────────────┤                   │
  │<─ Session Token & User Info ──│                    │                   │
  │    (stored in localStorage)   │                    │                   │
  │                              │                    │                   │
  ├─ Logged In ──────────────────>│                    │                   │
  │    (continue using website)   │                    │                   │
```

### 2. Activity Tracking Flow

```
User Visit                    Frontend          Backend         Database
  │                              │                  │               │
  ├─ Visit /pricing ─────────────>│                  │               │
  │                              │                  │               │
  │  [useUserTracking Hook]       │                  │               │
  │  Every 30 seconds:            │                  │               │
  │                              │                  │               │
  │                              ├─ POST /activity ─>│               │
  │                              │   (page, time)    ├─ Insert/update
  │                              │                  │  tracking      │
  │                              │                  ├─>user_sessions│
  │                              │<─ success ────────┤               │
  │                              │                  │               │
  │  ... 30 more seconds ...      │                  │               │
  │                              │                  │               │
  │                              ├─ POST /activity ─>│               │
  │                              │                  ├─>update DB    │
  │                              │<─ success ────────┤               │
  │                              │                  │               │
  ├─ Navigate Away ─────────────>│                  │               │
  │  (beforeunload event)         │                  │               │
  │                              ├─ POST /activity ─>│               │
  │                              │  (final update)   ├─>mark logged │
  │                              │                  │  out          │
  │                              │                  │               │
```

### 3. Chat Interaction Flow

```
User                      Frontend            Backend          OpenAI
  │                           │                  │               │
  ├─ Click chat bubble ───────>│                  │               │
  │                           │                  │               │
  ├─ Type message ────────────>│                  │               │
  │                           │                  │               │
  ├─ Click send ──────────────>│                  │               │
  │                           │                  │               │
  │                           ├─ POST /chat ────>│               │
  │                           │ (convert messages)│               │
  │                           │                  ├─ Send to API ─>│
  │                           │                  │ (streaming)    │
  │                           │<─ Stream chunks ──┤                │
  │                           │ (SSE response)    │                │
  │<─ Display streamed text ───┤                  │                │
  │  (word by word)            │                  │<─ Response ───┤
  │                           │                  │                │
  │  [Message appears         │                  │                │
  │   in real-time]           │                  │                │
  │                           │                  │                │
  ├─ Continue conversation ───>│                  │                │
  │  (history sent each time)  │                  │                │
  │                           │                  │                │
```

### 4. Admin Monitoring Flow

```
Admin                       Frontend          Backend         Database
  │                            │                  │               │
  ├─ Visit /admin-monitoring ──>│                  │               │
  │                            │                  │               │
  │                            ├─ GET /online-   >│               │
  │                            │     users        ├─ Query users  │
  │                            │                  │   where       │
  │                            │                  │   last_seen   │
  │                            │                  │   > 5 min ago │
  │                            │<─ JSON data ──────┤<─ FROM DB ──┤
  │<─ Display live user list ───┤                  │               │
  │   (table with mobile, page) │                  │               │
  │                            │                  │               │
  │  [Auto-refresh enabled]     │                  │               │
  │  After 30 seconds:          │                  │               │
  │                            ├─ GET /online-   >│               │
  │                            │     users        ├─ Query users  │
  │                            │                  │               │
  │                            │<─ Updated JSON ──┤               │
  │<─ Refresh table ────────────┤                  │               │
  │                            │                  │               │
  │  [Admin can...]             │                  │               │
  │  • See new users appear     │                  │               │
  │  • Track which pages        │                  │               │
  │  • See time spent           │                  │               │
  │  • Monitor engagement       │                  │               │
  │                            │                  │               │
```

---

## Component Tree

```
RootLayout
├── UserTrackingClient
│   └── useUserTracking Hook
│       ├── POST /api/tracking/update-activity (every 30s)
│       └── beforeunload: final POST
│
├── AuthGuard
│   └── Redirects to /otp-login if not authenticated
│
├── {children}
│   ├── Header
│   ├── MainContent
│   └── Footer
│
└── LiveChatWidget
    ├── Chat bubble (when closed)
    ├── useChat Hook
    │   └── DefaultChatTransport
    │       └── POST /api/chat (streaming)
    │           └── OpenAI GPT-4-mini
    │
    └── Chat window (when open)
        ├── Message display
        ├── Typing indicators
        ├── Input form
        └── Controls (minimize, close)
```

---

## Database Schema

```sql
users
├── id (PRIMARY KEY)
├── mobile_number (UNIQUE)
├── full_name
├── email
├── created_at
└── updated_at

otp_verifications
├── id (PRIMARY KEY)
├── mobile_number (FK → users)
├── otp_code
├── is_verified
├── attempts
├── created_at
├── expires_at
└── verified_at

user_sessions
├── id (PRIMARY KEY)
├── user_id (FK → users)
├── mobile_number
├── session_token (UNIQUE)
├── ip_address
├── user_agent
├── is_online
├── last_activity
├── logged_in_at
├── logged_out_at
└── created_at

chat_messages
├── id (PRIMARY KEY)
├── user_id (FK → users)
├── mobile_number
├── message_text
├── sender_type (user|ai)
├── is_read
└── created_at

admin_user_tracking
├── id (PRIMARY KEY)
├── user_id (FK → users)
├── mobile_number
├── full_name
├── session_id (FK → user_sessions)
├── last_seen
├── pages_visited
└── time_spent_seconds
```

---

## Security Architecture

```
┌─────────────────────────────────────────────────────────┐
│              SECURITY LAYERS                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  LAYER 1: Input Validation                             │
│  ├─ Mobile number format validation                    │
│  ├─ OTP format validation (6 digits)                   │
│  ├─ Message content sanitization                       │
│  └─ Rate limiting checks                               │
│                                                         │
│  LAYER 2: Authentication                              │
│  ├─ OTP verification (10-min expiry)                   │
│  ├─ Session token (secure random)                      │
│  ├─ HTTP-only cookies                                  │
│  └─ Attempt limiting (3 attempts max)                  │
│                                                         │
│  LAYER 3: Authorization                               │
│  ├─ Auth Guard on protected routes                     │
│  ├─ Admin role check (todo: implement)                │
│  ├─ Session validation                                │
│  └─ Device/IP verification (todo: implement)          │
│                                                         │
│  LAYER 4: Data Protection                             │
│  ├─ HTTPS (enforced in production)                     │
│  ├─ Mobile number encryption (todo: implement)        │
│  ├─ Database indexing for performance                  │
│  └─ OTP removal after verification                     │
│                                                         │
│  LAYER 5: Monitoring                                  │
│  ├─ Activity logging                                   │
│  ├─ Failed attempt tracking                            │
│  ├─ Admin dashboard access logs (todo)                │
│  └─ Chat content logging (todo)                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Deployment Architecture

### Development
```
Local Machine
├── Next.js Dev Server (port 3000)
├── Mock Database (localStorage)
├── Mock SMS (console.log)
└── OpenAI API (with fallback mock)
```

### Production
```
Vercel Hosting
├── Next.js App (auto-deploy from Git)
├── PostgreSQL Database
├── SMS Provider (Twilio/AWS SNS)
├── OpenAI API (via Vercel AI Gateway)
├── Environment Variables
│   ├── Database connection string
│   ├── SMS provider credentials
│   ├── AI API keys
│   └── Session secrets
└── SSL/TLS (automatic)
```

---

## Performance Considerations

### Current Optimizations
| Feature | Optimization |
|---------|--------------|
| Chat | Server-Sent Events (streaming) |
| Activity Tracking | Batched requests (every 30s) |
| Monitoring | Client-side caching |
| OTP | Stateless verification |
| Database | Indexes on high-query columns |

### Recommended Future Optimizations
- Redis for session caching
- WebSocket for real-time monitoring
- Message queue for async operations
- CDN for static assets
- Activity cleanup job (daily/weekly)

---

## Monitoring & Logging

```
Application Metrics
├── OTP Success Rate
│   └── Target: 95%+
├── Chat Response Time
│   └── Target: <2 seconds
├── Admin Dashboard Load
│   └── Target: <1 second
├── User Retention
│   └── Compare OTP vs traditional login
└── Support Tickets
    └── Track by topic/resolution

Error Logging
├── Failed OTP sends
├── Failed verifications
├── Chat API errors
├── Database connection issues
└── Session timeouts

Activity Logging
├── Login attempts (success/failure)
├── Page visits
├── Chat interactions
├── Admin actions
└── System errors
```

---

## Scalability Plan

### Phase 1: Current (Single Server)
- All components on single server
- PostgreSQL local
- No caching
- Suitable for: ~1000 concurrent users

### Phase 2: Planned (Load Balanced)
- Separate API servers (2-4 instances)
- Redis for caching
- Database read replicas
- Suitable for: ~10,000 concurrent users

### Phase 3: Enterprise (Microservices)
- Separate services (auth, chat, tracking)
- Message queue (RabbitMQ/Kafka)
- Database sharding
- CDN for static content
- Suitable for: 100,000+ concurrent users

---

## Conclusion

This architecture is designed to be:
- **Secure:** Multiple security layers
- **Scalable:** Grows with your needs
- **Maintainable:** Clear separation of concerns
- **Performant:** Optimized for real-time interactions
- **Production-ready:** Follows Next.js best practices
