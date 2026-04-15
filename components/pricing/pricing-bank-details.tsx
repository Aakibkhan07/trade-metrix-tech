import { CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function PricingBankDetails() {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Payment Details
            </h2>
            <p className="text-muted-foreground">
              Use the bank details below for direct transfer
            </p>
          </div>

          {/* Bank Details Card */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">IDBI Bank</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Account Details */}
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Bank Name</p>
                  <p className="text-lg font-bold text-foreground">IDBI Bank</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Account Number</p>
                  <p className="text-lg font-mono font-bold text-foreground">0225102000013864</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">IFSC Code</p>
                  <p className="text-lg font-mono font-bold text-foreground">IBKL0000225</p>
                </div>
              </div>

              {/* Important Note */}
              <Alert className="border-accent/30 bg-accent/5">
                <AlertDescription className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> Please use your order ID or reference number as the transaction description when making the payment. This helps us identify and process your payment quickly.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Alternative Payment Methods */}
          <div className="mt-8 p-6 rounded-lg border border-border bg-muted/30">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Other Payment Methods:</strong> If you prefer alternative payment methods or have any questions about payment, please contact our support team at <a href="mailto:support@trademetrix.com" className="text-primary hover:underline">support@trademetrix.com</a> or reach out through the contact form.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
