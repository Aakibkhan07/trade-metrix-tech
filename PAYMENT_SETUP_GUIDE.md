# Stripe Payment Gateway Integration Guide

## Overview

Your website now has a fully integrated **Stripe payment system** supporting:
- ✅ One-time payments
- ✅ Subscriptions (auto-renewal)
- ✅ Invoices (send to customers)

## Files Created

### Core Payment Files
- `/lib/stripe-products.ts` - Product catalog with all pricing plans
- `/app/actions/stripe.ts` - Server actions for payment processing
- `/components/payment/stripe-payment-modal.tsx` - Payment modal UI
- `/app/api/webhooks/stripe/route.ts` - Webhook handler for payment events

### Updated Files
- `/components/pricing/pricing-plans.tsx` - "Buy Now" buttons integrated

---

## Quick Setup (5 Minutes)

### 1. Environment Variables

Add these to your `.env.local` file:

```bash
# Already Set (from v0 integration)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Add These:
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # Change to your domain in production
STRIPE_WEBHOOK_SECRET=whsec_...  # Get from Stripe Dashboard > Webhooks
```

### 2. Get Webhook Secret

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers → Webhooks**
3. Click **Add Endpoint**
4. Set endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
5. Select events: `checkout.session.completed`, `invoice.payment_succeeded`, `customer.subscription.*`
6. Copy the **Signing Secret** and add it to `STRIPE_WEBHOOK_SECRET`

### 3. Test in Development

```bash
# Install Stripe CLI
# https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to localhost
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# This will output a signing secret - add to .env.local
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## Payment Flows

### One-Time Payment
1. User clicks "Buy Now" on a pricing plan
2. Modal opens with payment form
3. User enters card details (via Stripe Checkout)
4. Payment processed
5. Webhook confirms → Send confirmation email

**Products:** Monthly, Quarterly, Half-Yearly plans as one-time purchases

### Subscriptions
1. User selects "Subscribe" tab
2. Enters email address
3. Subscription created in Stripe
4. Webhook confirms → Send subscription details

**Auto-renewal:** Monthly, Quarterly, Half-Yearly, Annual with auto-renewal

### Invoices
1. User selects "Invoice" tab
2. Enters email address
3. Invoice generated and emailed
4. Customer has 30 days to pay
5. Payment tracked in Stripe

**Use Case:** For corporate/enterprise clients

---

## Product Catalog

All pricing is defined in `/lib/stripe-products.ts`:

```typescript
// Equity Plans (₹15,000 - ₹1,25,000)
- Monthly: ₹15,000
- Quarterly: ₹35,000 (save 22%)
- Half-Yearly: ₹65,000 (save 28%)
- Annual: ₹1,25,000 (save 30%)

// MCX Plans (₹18,000 - ₹1,55,000)
- Monthly: ₹18,000
- Quarterly: ₹44,000 (save 18%)
- Half-Yearly: ₹75,000 (save 26%)
- Annual: ₹1,55,000 (save 28%)
```

### Adding New Products

```typescript
// In /lib/stripe-products.ts
export const PRODUCTS: Product[] = [
  {
    id: 'equity-monthly',  // Unique ID
    name: 'Monthly - Equity',
    description: 'Plan description',
    priceInCents: 1500000,  // ₹15,000 = 1500000 cents
    market: 'equity',  // or 'mcx'
    period: 'monthly',  // 'monthly' | 'quarterly' | 'half-yearly' | 'annual'
    features: ['Feature 1', 'Feature 2'],
  },
  // ... more products
]
```

---

## Testing Payments

### Test Card Numbers

| Card Type | Number | Exp | CVC |
|-----------|--------|-----|-----|
| Visa | 4242 4242 4242 4242 | 12/25 | 123 |
| Mastercard | 5555 5555 5555 4444 | 12/25 | 123 |
| Amex | 3782 822463 10005 | 12/25 | 1234 |
| Failed | 4000 0000 0000 0002 | 12/25 | 123 |

### Test Scenarios

1. **Successful Payment:** Use Visa test card above
2. **Failed Payment:** Use failed card above
3. **3D Secure:** Use `4000 0025 0000 3155`
4. **Subscription Test:** Complete one-time payment, then test webhook

---

## Database Integration (Optional)

To persist payment data, add this schema:

```sql
CREATE TABLE stripe_customers (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  stripe_customer_id VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE stripe_payments (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  stripe_session_id VARCHAR(255),
  product_id VARCHAR(255),
  amount INT, -- in cents
  currency VARCHAR(3),
  status VARCHAR(50),
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE stripe_subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  stripe_subscription_id VARCHAR(255) UNIQUE,
  stripe_customer_id VARCHAR(255),
  product_id VARCHAR(255),
  status VARCHAR(50),
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  auto_renew BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Then update `/app/api/webhooks/stripe/route.ts` to save this data.

---

## Webhook Events

Your webhook handler processes these Stripe events:

1. **checkout.session.completed** - One-time payment successful
2. **invoice.payment_succeeded** - Invoice payment received
3. **invoice.payment_failed** - Invoice payment failed
4. **customer.subscription.deleted** - User canceled subscription
5. **customer.subscription.updated** - Subscription details changed

Add handlers in `/app/api/webhooks/stripe/route.ts`

---

## Production Checklist

- [ ] Migrate from test keys to live Stripe keys
- [ ] Update `NEXT_PUBLIC_BASE_URL` to your production domain
- [ ] Update webhook endpoint URL in Stripe Dashboard
- [ ] Add `STRIPE_WEBHOOK_SECRET` for production webhooks
- [ ] Implement database schema for payment tracking
- [ ] Add email notifications for successful payments
- [ ] Test subscription renewal workflow
- [ ] Setup invoice PDF customization (if needed)
- [ ] Configure Stripe tax settings (if applicable)
- [ ] Enable 3D Secure for fraud prevention

---

## Troubleshooting

### "Missing stripe-signature header"
- Webhook endpoint not properly configured
- Make sure endpoint is publicly accessible
- Verify webhook secret is correct

### "Product not found"
- Product ID doesn't exist in `/lib/stripe-products.ts`
- Check spelling and market type

### Payment modal not showing
- Ensure `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Check browser console for API errors
- Verify component is imported correctly

### Subscriptions not renewing
- Check webhook handler is processing events
- Verify Stripe subscription is active in dashboard
- Check customer has a valid payment method

---

## API Reference

### Server Actions

#### `createCheckoutSession(productId)`
Creates a one-time payment checkout session.

```typescript
const { sessionId, clientSecret } = await createCheckoutSession('equity-monthly')
```

#### `createSubscription(productId, email)`
Creates an auto-renewal subscription.

```typescript
const { subscriptionId, status } = await createSubscription('equity-monthly', 'user@example.com')
```

#### `createInvoice(productId, email)`
Sends a payment invoice to customer email.

```typescript
const { invoiceId, invoiceUrl, status } = await createInvoice('equity-monthly', 'user@example.com')
```

---

## Support

For Stripe issues, visit:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)
- [Stripe Dashboard](https://dashboard.stripe.com)

---

## Security Notes

✅ **Implemented:**
- Server-side price validation (prevent client manipulation)
- Stripe-secured payment form (PCI compliance)
- Webhook signature verification
- HTTPS-only communication

⚠️ **Recommended:**
- Add rate limiting to API endpoints
- Store payment records in database
- Send confirmation emails
- Implement subscription management UI
- Add refund handling

---

Last Updated: April 2026
