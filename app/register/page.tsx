import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegisterForm } from "@/components/auth/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

export const metadata = {
  title: "Register - TradeMetrix",
  description: "Create your TradeMetrix account to access premium trading advisory services.",
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-md">
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">Create Your Account</h1>
              <p className="text-muted-foreground">First Time Registration (FTR)</p>
            </div>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Register</CardTitle>
                <CardDescription>Fill in your details to get started with TradeMetrix</CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />

                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <Link href="/login" className="font-medium text-accent hover:underline">
                    Sign In
                  </Link>
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
