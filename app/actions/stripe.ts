'use server'

import Stripe from 'stripe'
import { getProductById } from '@/lib/stripe-products'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createCheckoutSession(productId: string) {
  const product = getProductById(productId)

  if (!product) {
    throw new Error('Product not found')
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing?canceled=true`,
      customer_email_collection: 'required',
    })

    return {
      sessionId: session.id,
      clientSecret: session.client_secret,
    }
  } catch (error) {
    console.error('Stripe checkout error:', error)
    throw error
  }
}

export async function createSubscription(productId: string, email: string) {
  const product = getProductById(productId)

  if (!product) {
    throw new Error('Product not found')
  }

  try {
    // Create or get customer
    const customers = await stripe.customers.list({ email, limit: 1 })
    let customerId = customers.data[0]?.id

    if (!customerId) {
      const customer = await stripe.customers.create({ email })
      customerId = customer.id
    }

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: product.name,
            },
            unit_amount: product.priceInCents,
            recurring: {
              interval: product.period === 'monthly' ? 'month' : 'year',
              interval_count: product.period === 'quarterly' ? 3 : product.period === 'half-yearly' ? 6 : 1,
            },
          },
          quantity: 1,
        },
      ],
    })

    return {
      subscriptionId: subscription.id,
      status: subscription.status,
    }
  } catch (error) {
    console.error('Stripe subscription error:', error)
    throw error
  }
}

export async function createInvoice(productId: string, email: string) {
  const product = getProductById(productId)

  if (!product) {
    throw new Error('Product not found')
  }

  try {
    // Create or get customer
    const customers = await stripe.customers.list({ email, limit: 1 })
    let customerId = customers.data[0]?.id

    if (!customerId) {
      const customer = await stripe.customers.create({ email })
      customerId = customer.id
    }

    // Create invoice
    const invoice = await stripe.invoices.create({
      customer: customerId,
      collection_method: 'send_invoice',
      days_until_due: 30,
    })

    // Add invoice item
    await stripe.invoiceItems.create({
      customer: customerId,
      amount: product.priceInCents,
      currency: 'inr',
      description: product.name,
      invoice: invoice.id,
    })

    // Finalize and send invoice
    const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id)
    await stripe.invoices.sendInvoice(invoice.id)

    return {
      invoiceId: finalizedInvoice.id,
      invoiceUrl: finalizedInvoice.hosted_invoice_url,
      status: finalizedInvoice.status,
    }
  } catch (error) {
    console.error('Stripe invoice error:', error)
    throw error
  }
}
