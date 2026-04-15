"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, Eye, EyeOff, CheckCircle, ExternalLink, Rocket } from "lucide-react"
import Link from "next/link"

const PLANS = [
  { value: "monthly", label: "Monthly Plan", price: "₹14,999/month" },
  { value: "quarterly", label: "Quarterly Plan", price: "₹35,000/quarter" },
  { value: "half-yearly", label: "Half-Yearly Plan", price: "₹55,000/6 months" },
  { value: "yearly", label: "Annual Plan", price: "₹1,00,000/year" },
  { value: "customized", label: "Enterprise Plan", price: "₹2,50,000+" },
]

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [consentLink, setConsentLink] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    plan: "",
  })

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required"
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.mobile.replace(/\s/g, ""))) {
      errors.mobile = "Please enter a valid mobile number"
    }

    if (!formData.password) {
      errors.password = "Password is required"
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
    }

    if (!formData.plan) {
      errors.plan = "Please select a plan"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Registration failed")
      }

      setIsSuccess(true)
      if (data.consentLink) {
        setConsentLink(data.consentLink)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Registration Successful!</h3>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          A consent email has been sent to your registered email. Please accept the terms to activate your TradeMetrix
          access.
        </p>

        {consentLink && (
          <div className="mb-4 w-full rounded-lg border border-accent/30 bg-accent/10 p-4">
            <p className="mb-2 text-sm font-medium text-accent-foreground">Demo Mode: Direct Consent Link</p>
            <p className="mb-2 text-xs text-muted-foreground">In production, this link would be sent via email only.</p>
            <Button asChild variant="default" size="sm">
              <Link href={consentLink}>I Accept Terms & Conditions</Link>
            </Button>
          </div>
        )}

        <div className="w-full mb-4 p-4 rounded-xl border-2 border-primary/50 bg-primary/10">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Launch Algo Platform</h3>
              <p className="text-xs text-muted-foreground">Access your trading dashboard</p>
            </div>
          </div>
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://trade.trademetrix.tech" target="_blank" rel="noopener noreferrer">
              <Rocket className="mr-2 h-4 w-4" />
              Launch Platform
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Button variant="outline" onClick={() => router.push("/login")}>
          Go to Login
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-6 p-4 rounded-xl bg-primary/10 border-2 border-primary/50">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <Rocket className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Launch Algo Platform</h3>
            <p className="text-xs text-muted-foreground">Access your trading dashboard</p>
          </div>
        </div>
        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="https://trade.trademetrix.tech" target="_blank" rel="noopener noreferrer">
            <Rocket className="mr-2 h-4 w-4" />
            Launch Platform
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">Or create an account</span>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={validationErrors.fullName ? "border-destructive" : ""}
        />
        {validationErrors.fullName && <p className="text-xs text-destructive">{validationErrors.fullName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email ID *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={validationErrors.email ? "border-destructive" : ""}
        />
        {validationErrors.email && <p className="text-xs text-destructive">{validationErrors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobile">Mobile Number *</Label>
        <Input
          id="mobile"
          type="tel"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          className={validationErrors.mobile ? "border-destructive" : ""}
        />
        {validationErrors.mobile && <p className="text-xs text-destructive">{validationErrors.mobile}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={validationErrors.password ? "border-destructive" : ""}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {validationErrors.password && <p className="text-xs text-destructive">{validationErrors.password}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className={validationErrors.confirmPassword ? "border-destructive" : ""}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {validationErrors.confirmPassword && (
          <p className="text-xs text-destructive">{validationErrors.confirmPassword}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="plan">Select Plan *</Label>
        <Select value={formData.plan} onValueChange={(value) => setFormData({ ...formData, plan: value })}>
          <SelectTrigger className={validationErrors.plan ? "border-destructive" : ""}>
            <SelectValue placeholder="Choose your subscription plan" />
          </SelectTrigger>
          <SelectContent>
            {PLANS.map((plan) => (
              <SelectItem key={plan.value} value={plan.value}>
                <div className="flex items-center justify-between gap-4">
                  <span>{plan.label}</span>
                  <span className="text-muted-foreground">({plan.price})</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {validationErrors.plan && <p className="text-xs text-destructive">{validationErrors.plan}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  )
}
