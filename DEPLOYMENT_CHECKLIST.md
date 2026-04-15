# Deployment Checklist - Live Chat AI & OTP System

## Pre-Deployment (Development Testing)

### Installation & Setup
- [ ] Run `npm install ai @ai-sdk/react`
- [ ] Verify all new files are created correctly
- [ ] Check no TypeScript errors: `npm run build`
- [ ] Start dev server: `npm run dev`

### Feature Testing
- [ ] **OTP Login**
  - [ ] Visit `/otp-login`
  - [ ] Enter mobile: 9876543210
  - [ ] Verify OTP field appears
  - [ ] Enter OTP: 123456
  - [ ] Verify user logs in
  - [ ] Check localStorage has user data
  - [ ] Verify redirect to home page

- [ ] **Chat Widget**
  - [ ] Verify chat bubble appears (bottom-right)
  - [ ] Click to open chat
  - [ ] Type a message
  - [ ] Verify AI responds with streaming text
  - [ ] Test minimize/maximize
  - [ ] Test close button
  - [ ] Verify widget reappears after closing

- [ ] **Admin Dashboard**
  - [ ] Visit `/admin-monitoring`
  - [ ] Verify table with mock online users
  - [ ] Click auto-refresh toggle
  - [ ] Verify data refreshes every 30 seconds
  - [ ] Check statistics display

- [ ] **Auth Guard**
  - [ ] Logout (clear localStorage)
  - [ ] Try visiting protected page
  - [ ] Verify redirect to `/otp-login`
  - [ ] Login and verify auth guard allows access

- [ ] **Activity Tracking**
  - [ ] Login with OTP
  - [ ] Navigate between pages
  - [ ] Check console for activity logs
  - [ ] Verify calls to `/api/tracking/update-activity`

### Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browser (iOS/Android)
- [ ] Test all screen sizes

### Code Quality
- [ ] Run linter: `npm run lint`
- [ ] Fix any ESLint warnings
- [ ] Check console for any errors
- [ ] Verify no console.log([v0]) debug statements remain

---

## Staging Deployment

### Environment Setup
- [ ] Create `.env.local` file
- [ ] Set up staging database connection string
- [ ] Create staging SMS provider account
- [ ] Create staging OpenAI API key (or use gateway)
- [ ] Set all environment variables

### Database Setup
```bash
# Connect to staging database
psql -h your-staging-db.com -U postgres -d trade_metrix

# Run migration
\i /scripts/001-create-otp-and-sessions.sql

# Verify tables created
\dt
```

- [ ] Verify all 5 tables exist
- [ ] Check indexes created
- [ ] Test sample insert/select

### SMS Provider Integration
- [ ] Sign up for Twilio/AWS SNS/Fast2SMS
- [ ] Get API credentials
- [ ] Test sending SMS from Node.js
- [ ] Update `/app/api/auth/otp/send/route.ts` with real provider
- [ ] Test OTP sending with real phone number
- [ ] Verify SMS arrives

### Code Updates
- [ ] Replace mock data in `/app/api/auth/otp/verify/route.ts` with DB queries
- [ ] Replace mock data in `/app/api/admin/online-users/route.ts` with DB queries
- [ ] Update `/app/api/tracking/update-activity/route.ts` to use database
- [ ] Add authentication check to admin endpoints
- [ ] Remove development-only code (`_devOtp`, mock data)

### Deploy to Staging
- [ ] Push code to staging branch
- [ ] Run production build: `npm run build`
- [ ] Deploy to Vercel/Your hosting
- [ ] Verify all environment variables are set
- [ ] Check logs for any errors

### Staging Testing
- [ ] **OTP Flow**
  - [ ] Test with real phone number
  - [ ] Verify SMS arrives
  - [ ] Complete login flow
  - [ ] Verify data saved to database

- [ ] **Database Connectivity**
  - [ ] Verify users table has entries
  - [ ] Check OTP records
  - [ ] Verify sessions created
  - [ ] Check activity tracking in database

- [ ] **Admin Dashboard**
  - [ ] Verify real data from database
  - [ ] Check mobile numbers display correctly
  - [ ] Verify timestamps are accurate
  - [ ] Test auto-refresh with real data

- [ ] **Chat Integration**
  - [ ] Verify OpenAI API key works
  - [ ] Test chat with various questions
  - [ ] Check response quality
  - [ ] Verify logging/persistence

- [ ] **Load Testing**
  - [ ] Simulate 10-50 concurrent users
  - [ ] Monitor response times
  - [ ] Check for database connection issues
  - [ ] Verify no race conditions

- [ ] **Security Testing**
  - [ ] Test SQL injection attempts
  - [ ] Verify OTP expiry enforcement
  - [ ] Test rate limiting
  - [ ] Verify auth guard blocks unauthenticated access

---

## Production Deployment

### Pre-Production Checklist
- [ ] All staging tests passed
- [ ] Code review completed
- [ ] No debug logs remaining
- [ ] Environment variables configured
- [ ] Database backup strategy in place
- [ ] Rollback plan documented

### Production Environment Setup
- [ ] Create production database
- [ ] Run migration on production database
- [ ] Configure production SMS provider
- [ ] Setup production OpenAI/AI account
- [ ] Set all production environment variables
- [ ] Enable HTTPS (auto with Vercel)

### Security Hardening
```env
# Add to production environment variables
NODE_ENV=production
RATE_LIMIT_OTP=3/15min  # Max 3 OTPs per 15 minutes
RATE_LIMIT_CHAT=20/min   # Max 20 messages per minute
DB_ENCRYPTION_KEY=<strong-key>
SESSION_SECRET=<long-random-string>
```

### Database Optimization
- [ ] Run VACUUM to optimize tables
- [ ] Verify all indexes exist
- [ ] Check query performance
- [ ] Setup automated backups (daily)
- [ ] Test backup restoration

### Monitoring Setup
- [ ] Setup error tracking (Sentry/LogRocket)
- [ ] Setup performance monitoring (New Relic/DataDog)
- [ ] Create alert for OTP failures
- [ ] Create alert for chat API errors
- [ ] Create alert for database connection issues

### Backup & Disaster Recovery
- [ ] Setup automated daily backups
- [ ] Test backup restoration
- [ ] Document recovery procedures
- [ ] Setup replication (if applicable)
- [ ] Test failover scenarios

### Production Deployment
- [ ] Create production branch
- [ ] Push to Vercel/Hosting provider
- [ ] Verify environment variables
- [ ] Run smoke tests
- [ ] Monitor error logs
- [ ] Check performance metrics

### Post-Deployment Testing
- [ ] **Full Flow Testing**
  - [ ] Test OTP with real number
  - [ ] Complete user journey
  - [ ] Test chat on various pages
  - [ ] Verify admin dashboard works

- [ ] **Database Verification**
  - [ ] Check user data saved correctly
  - [ ] Verify OTP records created
  - [ ] Check sessions tracking
  - [ ] Verify activity logging

- [ ] **Performance Check**
  - [ ] Monitor response times
  - [ ] Check database query performance
  - [ ] Verify chat streaming works
  - [ ] Monitor API latency

- [ ] **Security Verification**
  - [ ] Verify HTTPS enabled
  - [ ] Check session expiry
  - [ ] Verify mobile numbers encrypted
  - [ ] Test rate limiting

---

## Ongoing Maintenance

### Daily Tasks
- [ ] Monitor error logs
- [ ] Check OTP success rate
- [ ] Review chat interactions
- [ ] Monitor database performance
- [ ] Check for security alerts

### Weekly Tasks
- [ ] Review user activity reports
- [ ] Analyze chat topics
- [ ] Check system performance metrics
- [ ] Review failed login attempts
- [ ] Verify backups completed

### Monthly Tasks
- [ ] Full security audit
- [ ] Database optimization
- [ ] Performance review
- [ ] User feedback analysis
- [ ] Capacity planning review

### Quarterly Tasks
- [ ] Update AI system prompt based on feedback
- [ ] Review and improve chat responses
- [ ] Security penetration testing
- [ ] Disaster recovery drill
- [ ] Infrastructure review

---

## Rollback Procedures

### If OTP Feature Breaks
1. Disable OTP route in load balancer
2. Revert to previous code version
3. Verify traditional login works
4. Restore from backup if data corruption
5. Investigate root cause
6. Deploy fix to staging first

### If Chat Feature Breaks
1. Hide chat widget CSS (display: none)
2. Revert API route
3. Check OpenAI API status
4. Review error logs
5. Test in staging
6. Redeploy fix

### If Database Issues Occur
1. Switch to read-only mode
2. Restore from last backup
3. Verify data integrity
4. Run consistency checks
5. Monitor for issues
6. Schedule maintenance window

### If Hosting Goes Down
1. Check provider status page
2. Activate disaster recovery
3. Failover to backup server
4. Notify users
5. Monitor restoration
6. Post-incident review

---

## Success Metrics (First 30 Days)

### Track These Numbers
- **OTP Success Rate:** Target 95%+
- **Chat Engagement:** Target 20%+ of visitors
- **Average Chat Length:** Target 2+ minutes
- **Admin Dashboard:** Target <1s load time
- **Error Rate:** Target <0.5%
- **User Retention:** Compare vs previous period

### Key Issues to Monitor
- Failed OTP sends
- Chat response quality
- Database connection errors
- API latency spikes
- Admin dashboard load times
- User complaints/feedback

### Actions If Metrics Miss
- If OTP < 90%: Review SMS provider issues
- If Chat < 10%: Review placement/visibility
- If Errors > 1%: Investigate error logs
- If Load > 2s: Optimize database queries
- If Low retention: Improve UX/AI responses

---

## Troubleshooting Guide

### Issue: OTP Not Sending
**Possible Causes:**
- SMS provider not configured
- API credentials incorrect
- Rate limiting triggered
- Mobile number invalid

**Solutions:**
1. Check environment variables
2. Verify SMS provider account
3. Check rate limit counter
4. Validate mobile number format
5. Check provider logs

### Issue: Chat Not Responding
**Possible Causes:**
- OpenAI API down
- API key invalid
- Rate limiting triggered
- Database error

**Solutions:**
1. Check OpenAI status
2. Verify API key
3. Check rate limits
4. Review server logs
5. Test with curl

### Issue: Admin Dashboard Slow
**Possible Causes:**
- Database query slow
- Too many online users
- Network latency

**Solutions:**
1. Optimize database query
2. Add caching layer
3. Check database performance
4. Monitor network latency
5. Add indexes if needed

### Issue: Database Connection Error
**Possible Causes:**
- Connection string wrong
- Database down
- Network issues

**Solutions:**
1. Verify connection string
2. Check database status
3. Test connectivity
4. Check firewall rules
5. Review logs

---

## Contact Information

### Support Contacts
- **Hosting:** [Your Hosting Provider]
- **Database:** PostgreSQL documentation
- **SMS:** [Your SMS Provider Support]
- **AI:** OpenAI API support
- **Internal:** [Your Team Lead]

### Emergency Contacts
- **On-Call Engineer:** [Name + Number]
- **Database Admin:** [Name + Number]
- **Security Team:** [Name + Email]

---

## Sign-Off

- [ ] QA Lead: _________________ Date: _______
- [ ] Engineering Lead: _________________ Date: _______
- [ ] Product Manager: _________________ Date: _______
- [ ] Ops/DevOps: _________________ Date: _______

---

**Deployment Status:** Ready for production ✅
**Last Updated:** March 1, 2026
**Version:** 1.0
