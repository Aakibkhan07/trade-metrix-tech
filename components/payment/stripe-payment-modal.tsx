'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createCheckoutSession, createSubscription, createInvoice } from '@/app/actions/stripe'
import { Loader2, AlertCircle, X } from 'lucide-react'

interface StripePaymentModalProps {
  isOpen: boolean
  onClose: () => void
  productId: string
  productName: string
  price: string
}

export function StripePaymentModal({
  isOpen,
  onClose,
  productId,
  productName,
  price,
}: StripePaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'one-time' | 'subscription' | 'invoice'>(
    'one-time'
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>(
    'idle'
  )

  const handleOneTimePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const result = await createCheckoutSession(productId)
      if (result.url) {
        // Redirect to Stripe checkout
        window.location.href = result.url
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment failed'
      setError(errorMessage)
      setPaymentStatus('error')
      setLoading(false)
    }
  }

  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Email is required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const result = await createSubscription(productId, email)
      setPaymentStatus('success')
      setTimeout(() => {
        onClose()
        setPaymentStatus('idle')
        setEmail('')
      }, 2000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Subscription creation failed'
      setError(errorMessage)
      setPaymentStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const handleInvoice = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Email is required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const result = await createInvoice(productId, email)
      setPaymentStatus('success')
      setTimeout(() => {
        onClose()
        setPaymentStatus('idle')
        setEmail('')
      }, 2000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Invoice creation failed'
      setError(errorMessage)
      setPaymentStatus('error')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 border-b">
            <div>
              <CardTitle>Purchase {productName}</CardTitle>
              <CardDescription>Choose your payment method and complete your purchase</CardDescription>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            {/* Product Summary */}
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Plan</p>
                    <p className="text-lg font-semibold">{productName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Price</p>
                    <p className="text-2xl font-bold text-primary">{price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Tabs */}
            <Tabs value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as any)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="one-time">One-Time</TabsTrigger>
                <TabsTrigger value="subscription">Subscribe</TabsTrigger>
                <TabsTrigger value="invoice">Invoice</TabsTrigger>
              </TabsList>

              {/* One-Time Payment */}
              <TabsContent value="one-time" className="space-y-4">
                <div className="space-y-4">
                  {error && (
                    <div className="flex gap-2 p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}
                  <form onSubmit={handleOneTimePayment} className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      You will be redirected to Stripe to complete your payment securely.
                    </p>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Proceed to Payment'
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Secured by Stripe. Your payment information is encrypted.
                    </p>
                  </form>
                </div>
              </TabsContent>

              {/* Subscription */}
              <TabsContent value="subscription" className="space-y-4">
                <div className="space-y-4">
                  {paymentStatus === 'success' ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-semibold">Subscription Created Successfully!</p>
                      <p className="text-sm text-green-700 mt-1">
                        You will receive a confirmation email at {email}
                      </p>
                    </div>
                  ) : (
                    <>
                      {error && (
                        <div className="flex gap-2 p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
                          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                          <span>{error}</span>
                        </div>
                      )}
                      <form onSubmit={handleSubscription} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email-sub">Email Address</Label>
                          <Input
                            id="email-sub"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading || !email}>
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Creating Subscription...
                            </>
                          ) : (
                            'Create Subscription'
                          )}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          You can cancel anytime from your account settings.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </TabsContent>

              {/* Invoice */}
              <TabsContent value="invoice" className="space-y-4">
                <div className="space-y-4">
                  {paymentStatus === 'success' ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-semibold">Invoice Sent!</p>
                      <p className="text-sm text-green-700 mt-1">
                        Check your email at {email} for the invoice details.
                      </p>
                    </div>
                  ) : (
                    <>
                      {error && (
                        <div className="flex gap-2 p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
                          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                          <span>{error}</span>
                        </div>
                      )}
                      <form onSubmit={handleInvoice} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email-invoice">Email Address</Label>
                          <Input
                            id="email-invoice"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading || !email}>
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending Invoice...
                            </>
                          ) : (
                            'Send Invoice'
                          )}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Payment due within 30 days of invoice date.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
