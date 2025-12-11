import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

export const metadata = {
  title: "Login - TradeMetrix",
  description: "Login to your TradeMetrix account to access premium trading advisory services.",
}

export default function LoginPage() {
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
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your TradeMetrix account</p>
            </div>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />

                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">{"Don't have an account? "}</span>
                  <Link href="/register" className="font-medium text-accent hover:underline">
                    First Time Registration (FTR)
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
