import { AlertTriangle, Ban, Code2, Scale } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

export function PricingDisclaimer() {
  return (
    <section className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <Ban className="mb-2 h-6 w-6 text-destructive" />
                <p className="text-sm font-semibold">NO REFUND POLICY</p>
              </CardContent>
            </Card>
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <Code2 className="mb-2 h-6 w-6 text-accent" />
                <p className="text-sm font-semibold">TECHNOLOGY COMPANY</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-muted">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <Scale className="mb-2 h-6 w-6 text-muted-foreground" />
                <p className="text-sm font-semibold">SOFTWARE ONLY</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-muted">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <AlertTriangle className="mb-2 h-6 w-6 text-warning" />
                <p className="text-sm font-semibold">60-88% ACCURACY*</p>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-accent/30 bg-accent/5">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <AlertTitle className="text-accent-foreground">Mandatory Risk Disclosure</AlertTitle>
            <AlertDescription className="mt-2 text-sm text-muted-foreground leading-relaxed space-y-2">
              <p>
                <strong>TECHNOLOGY COMPANY:</strong> TradeMetrix is a technology company that builds algorithmic trading
                software. We are in the tech business, not the finance or advisory business.
              </p>
              <p>
                <strong>NO GUARANTEED PROFITS:</strong> Trading in securities market involves substantial risk of loss.
                The accuracy ranges mentioned (60-88%) are indicative based on historical performance and do NOT
                guarantee future results. Actual performance may differ materially.
              </p>
              <p>
                <strong>SOFTWARE PROVIDER:</strong> We provide trading automation tools only. Nothing on this platform
                constitutes investment advice, recommendation, or solicitation to buy/sell any securities. All trading
                decisions are solely at your discretion and risk.
              </p>
              <p>
                <strong>NO REFUND:</strong> All purchases are final. No refunds will be issued under any circumstances.
                Please evaluate carefully before subscribing.
              </p>
              <p>
                <strong>MARKET RISK:</strong> Investments in securities market are subject to market risks. Read all
                scheme related documents carefully before investing.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}
