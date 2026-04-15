"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditCard, X } from "lucide-react"
import Image from "next/image"

export function PaymentModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
      >
        <CreditCard className="h-4 w-4" />
        Payments
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl p-8 border border-border shadow-xl leading-3 tracking-normal bg-primary px-5">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1 hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Trade Metrix Technologies</h2>
              <p className="text-sm text-muted-foreground">SERVICES</p>
            </div>

            {/* Scan & Pay Text */}
            <div className="text-center mb-6">
              <p className="text-lg text-muted-foreground font-medium">Scan & pay</p>
            </div>

            {/* QR Code */}
            <div className="mb-6 flex justify-center">
              <div className="rounded-lg bg-white p-4">
                <Image
                  src="/images/payment-qr.png"
                  alt="Payment QR Code"
                  width={280}
                  height={280}
                  className="h-auto border-8 w-11/12 border-b-0"
                />
              </div>
            </div>

            {/* Powered by */}
            <div className="border-t border-border pt-4 text-center">
              <p className="text-xs text-muted-foreground mb-2">Powered by</p>
              <p className="text-sm font-semibold">
                <span className="text-pink-500">slice</span> | <span className="text-orange-500">UPI</span>
              </p>
            </div>

            {/* Close button */}
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="w-full mt-6"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
