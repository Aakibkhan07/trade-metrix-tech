import { AlertTriangle, Ban, Code2, Scale } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

export function AlgoDisclaimer() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <Code2 className="mb-2 h-6 w-6 text-accent" />
                <p className="text-xs font-semibold">TECHNOLOGY COMPANY</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-muted/30">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <Scale className="mb-2 h-6 w-6 text-muted-foreground" />
                <p className="text-xs font-semibold">SOFTWARE PROVIDER ONLY</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-muted/30">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <AlertTriangle className="mb-2 h-6 w-6 text-warning" />
                <p className="text-xs font-semibold">NO GUARANTEED PROFITS</p>
              </CardContent>
            </Card>
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <Ban className="mb-2 h-6 w-6 text-destructive" />
                <p className="text-xs font-semibold">NO REFUND POLICY</p>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-accent/30 bg-accent/5">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <AlertTitle className="text-accent-foreground">Risk Disclosure</AlertTitle>
            <AlertDescription className="mt-2 text-sm text-muted-foreground leading-relaxed space-y-2">
              <p>
                <strong>TECHNOLOGY COMPANY:</strong> TradeMetrix is a technology company that builds algorithmic trading
                software. We are in the tech business, not the finance or advisory business.
              </p>
              <p>
                <strong>SOFTWARE PROVIDER:</strong> We provide trading automation tools and software as a technology
                service only. We do not provide investment advice, recommendations, or portfolio management.
              </p>
              <p>
                <strong>MARKET RISK:</strong> Trading in securities market involves substantial risk of loss and is not
                suitable for every investor. The accuracy ranges shown (70-88%) are indicative based on historical data
                and do NOT guarantee future performance.
              </p>
              <p>
                <strong>NO REFUND:</strong> All sales are final. No refunds will be issued. Please evaluate carefully
                before subscribing.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}
