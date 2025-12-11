import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const comparisonData = [
  { feature: "Real-Time Signals", trademetrix: true, traditional: false, others: "Limited" },
  { feature: "One-Click Execution", trademetrix: true, traditional: false, others: "Partial" },
  { feature: "Smart Stoploss", trademetrix: true, traditional: false, others: false },
  { feature: "Trailing SL", trademetrix: true, traditional: "Manual", others: "Limited" },
  { feature: "Auto Hedging", trademetrix: true, traditional: false, others: false },
  { feature: "Strategy Builder", trademetrix: true, traditional: false, others: "Basic" },
  { feature: "Backtesting Engine", trademetrix: true, traditional: false, others: "Limited" },
  { feature: "Cloud-Based", trademetrix: true, traditional: false, others: "Partial" },
  { feature: "Multi-Broker Support", trademetrix: "20+", traditional: "1-2", others: "5-10" },
  { feature: "Historical Analysis", trademetrix: true, traditional: false, others: "Limited" },
  { feature: "AI-Powered Analysis", trademetrix: true, traditional: false, others: false },
  { feature: "24/7 Monitoring", trademetrix: true, traditional: false, others: "Partial" },
]

export function ComparisonTable() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose TradeMetrix?</h2>
          <p className="text-muted-foreground">
            See how our platform compares to traditional trading and other software solutions
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead className="text-center bg-accent/10 text-accent-foreground font-semibold">
                  TradeMetrix
                </TableHead>
                <TableHead className="text-center">Traditional</TableHead>
                <TableHead className="text-center">Other Software</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow key={row.feature} className="border-border/50">
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell className="text-center bg-accent/5">
                    {row.trademetrix === true ? (
                      <Check className="mx-auto h-5 w-5 text-success" />
                    ) : (
                      <span className="text-sm font-medium text-accent">{row.trademetrix}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.traditional === true ? (
                      <Check className="mx-auto h-5 w-5 text-success" />
                    ) : row.traditional === false ? (
                      <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                    ) : (
                      <span className="text-sm text-muted-foreground">{row.traditional}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.others === true ? (
                      <Check className="mx-auto h-5 w-5 text-success" />
                    ) : row.others === false ? (
                      <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                    ) : (
                      <span className="text-sm text-muted-foreground">{row.others}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
