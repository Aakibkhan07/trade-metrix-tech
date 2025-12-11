import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including UPI, Net Banking, Credit Cards, and Debit Cards. All payments are processed securely through our payment gateway.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time. The remaining value of your current plan will be prorated and applied to your new plan.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "No, we have a strict NO REFUND POLICY. All sales are final. We recommend starting with the Monthly plan if you want to test our platform before committing to a longer term.",
  },
  {
    question: "How many broker accounts can I connect?",
    answer:
      "The number of broker integrations depends on your plan. Monthly allows 1 broker, Quarterly allows 3, Half-Yearly allows 5, and Annual/Enterprise plans offer unlimited integrations.",
  },
  {
    question: "What is the accuracy guarantee?",
    answer:
      "We do NOT guarantee any specific accuracy or returns. The accuracy ranges (70-88%) shown are indicative based on historical backtesting and live performance data. Actual results may vary significantly due to market conditions.",
  },
  {
    question: "Do you provide investment advice?",
    answer:
      "No. TradeMetrix is a SOFTWARE PROVIDER ONLY. We are NOT SEBI registered and do NOT provide investment advice, recommendations, or portfolio management services. All trading decisions are solely your responsibility.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our pricing</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
