"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface ConsentFormProps {
  token: string
}

export function ConsentForm({ token }: ConsentFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const handleAccept = async () => {
    if (!isChecked) {
      setError("Please check the box to confirm you accept the terms")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/consent/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to record consent")
      }

      setIsSuccess(true)
      setTimeout(() => {
        router.push("/login")
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Consent Recorded!</h3>
        <p className="text-muted-foreground">Your consent has been successfully recorded. Redirecting to login...</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex items-start gap-3">
        <Checkbox id="consent" checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} />
        <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
          I have read and understood the above Consent and Risk Disclaimer. I accept all Terms & Conditions of
          TradeMetrix advisory services.
        </Label>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button onClick={handleAccept} disabled={isLoading || !isChecked} className="flex-1">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "I ACCEPT TERMS & CONDITIONS"
          )}
        </Button>
        <Button variant="outline" onClick={() => router.push("/")} disabled={isLoading} className="flex-1">
          I Do Not Agree
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        If you do not agree with the terms, please do not proceed.
      </p>
    </div>
  )
}
