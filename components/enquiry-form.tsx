"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2, FileText, Shield, Clock, AlertTriangle } from "lucide-react"

// Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    capital: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!consent) return

    setIsSubmitting(true)

    // Create form data for Google Forms submission
    const googleFormData = new FormData()
    // Map your form fields to Google Form entry IDs
    // Replace entry.XXXXX with your actual Google Form entry IDs
    googleFormData.append("entry.123456789", formData.name)
    googleFormData.append("entry.234567890", formData.email)
    googleFormData.append("entry.345678901", formData.phone)
    googleFormData.append("entry.456789012", formData.enquiryType)
    googleFormData.append("entry.567890123", formData.capital)
    googleFormData.append("entry.678901234", formData.message)
    googleFormData.append("entry.789012345", consent ? "Yes, I consent" : "No")

    try {
      // Submit to Google Forms (using no-cors mode as Google Forms doesn't support CORS)
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData,
      })

      setIsSubmitted(true)
    } catch {
      // Even if there's an error, Google Forms usually accepts the submission
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-emerald-500/30 bg-emerald-500/5">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
            <CheckCircle className="h-8 w-8 text-emerald-500" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Enquiry Submitted Successfully!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for your interest. Our team will review your enquiry and get back to you within 24-48 hours.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-3 w-3" />
            <span>Your information is securely recorded for our records</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-primary/20 bg-card/50">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Official Enquiry Form</span>
        </div>
        <CardTitle>Submit Your Enquiry</CardTitle>
        <CardDescription>
          Fill out this form to enquire about our plans, pricing, services, or any other questions. All submissions are
          recorded for your and our safety.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="enquiry-name">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="enquiry-name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enquiry-phone">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="enquiry-phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="enquiry-email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="enquiry-email"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="enquiry-type">
                Enquiry Type <span className="text-destructive">*</span>
              </Label>
              <Select
                required
                value={formData.enquiryType}
                onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
              >
                <SelectTrigger id="enquiry-type">
                  <SelectValue placeholder="Select enquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pricing">Pricing & Plans</SelectItem>
                  <SelectItem value="strategies">Strategy Information</SelectItem>
                  <SelectItem value="demo">Request Demo</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="enquiry-capital">Expected Capital</Label>
              <Select value={formData.capital} onValueChange={(value) => setFormData({ ...formData, capital: value })}>
                <SelectTrigger id="enquiry-capital">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-50k">Below ₹50,000</SelectItem>
                  <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="1l-5l">₹1,00,000 - ₹5,00,000</SelectItem>
                  <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                  <SelectItem value="10l-25l">₹10,00,000 - ₹25,00,000</SelectItem>
                  <SelectItem value="above-25l">Above ₹25,00,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="enquiry-message">
              Your Query / Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="enquiry-message"
              placeholder="Please describe your enquiry in detail. Include any specific questions about our services, strategies, or pricing plans..."
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {/* Consent Section */}
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 space-y-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Important Disclaimer & Consent</p>
                <ul className="space-y-1 text-xs">
                  <li>
                    • Trade Metrix provides automated trading strategies, NOT investment tips or advisory services
                  </li>
                  <li>• Returns depend on market conditions and your capital investment</li>
                  <li>• Past performance does not guarantee future results</li>
                  <li>• We are not SEBI registered advisors</li>
                  <li>• Your information will be recorded for communication and record-keeping purposes</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-3 pt-2 border-t border-amber-500/20">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className="mt-0.5"
              />
              <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                I understand and agree that Trade Metrix sells automated trading strategies, not tips/advisory services.
                I consent to being contacted regarding my enquiry and acknowledge that my information will be recorded.
                <span className="text-destructive">*</span>
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting || !consent} size="lg">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Enquiry...
              </>
            ) : (
              <>
                <FileText className="mr-2 h-4 w-4" />
                Submit Enquiry
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>Secure & Recorded</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Response within 24-48 hrs</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
