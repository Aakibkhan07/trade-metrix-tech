"use client"

import { PaymentModal } from "@/components/payment-modal"

export function PaymentSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,180,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,180,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-float-reverse" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to start trading?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose your plan and get started with Trade Metrix. Scan the QR code to complete your payment using UPI.
          </p>

          <div className="flex justify-center">
            <PaymentModal />
          </div>
        </div>
      </div>
    </section>
  )
}
