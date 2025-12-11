import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Mail } from "lucide-react"

export const metadata = {
  title: "Consent Pending - TradeMetrix",
  description: "Please complete the consent process to access your TradeMetrix account.",
}

export default function ConsentPendingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-warning/10">
                  <Clock className="h-8 w-8 text-warning" />
                </div>
                <CardTitle>Consent Pending</CardTitle>
                <CardDescription>Your account is awaiting consent approval</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="font-medium">Check Your Email</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A consent email has been sent to your registered email address. Please review and accept the Terms &
                    Conditions to activate your account access.
                  </p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{"If you haven't received the email:"}</p>
                  <ul className="list-inside list-disc space-y-1 pl-2">
                    <li>Check your spam/junk folder</li>
                    <li>Ensure your email address is correct</li>
                    <li>Wait a few minutes and refresh</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/login">Back to Login</Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
