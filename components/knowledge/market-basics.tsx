import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const basics = [
  {
    title: "What is Options Trading?",
    content:
      "Options are derivative contracts that give the buyer the right, but not the obligation, to buy (Call) or sell (Put) an underlying asset at a predetermined price (strike price) before a specific date (expiry). Options trading in India is highly regulated and primarily occurs on NSE and BSE with Nifty, Bank Nifty, and stock options being most popular.",
  },
  {
    title: "What is Intraday Trading?",
    content:
      "Intraday trading involves buying and selling securities within the same trading day. All positions must be squared off before market close. It requires margin from brokers (typically 5-20% of trade value) and involves higher risk due to leverage. Profits and losses are marked-to-market daily.",
  },
  {
    title: "Understanding Stop Loss",
    content:
      "A stop loss is an automatic order to sell (or buy to cover) a security when it reaches a certain price, limiting potential losses. Types include regular stop loss (fixed price), trailing stop loss (moves with price), and stop limit orders. Essential for risk management in all trading strategies.",
  },
  {
    title: "What is a Target Price?",
    content:
      "Target price is a predetermined profit-booking level where a trader plans to exit a position. Setting realistic targets based on technical analysis, risk-reward ratios (commonly 1:2 or 1:3), and market conditions is crucial for disciplined trading.",
  },
  {
    title: "Understanding Margins",
    content:
      "Margin is the collateral required to open and maintain trading positions. SPAN margin is required for futures/options, exposure margin provides additional buffer, and mark-to-market (MTM) is daily settlement of profits/losses. SEBI regulates margin requirements.",
  },
  {
    title: "What is SEBI?",
    content:
      "Securities and Exchange Board of India (SEBI) is the regulatory authority for securities markets in India. Established in 1992, SEBI protects investor interests, regulates brokers and exchanges, ensures fair market practices, and oversees mutual funds, investment advisors, and research analysts.",
  },
]

export function MarketBasics() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Trading Fundamentals</h2>
          <p className="text-muted-foreground">Essential concepts every trader should understand</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {basics.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
