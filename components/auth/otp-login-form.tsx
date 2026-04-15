'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, Phone, Lock } from 'lucide-react';

type OTPStep = 'mobile' | 'otp' | 'profile' | 'success';

export function OTPLoginForm() {
  const [step, setStep] = useState<OTPStep>('mobile');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [otpResendTimer, setOtpResendTimer] = useState(0);

  const validateMobileNumber = (mobile: string): boolean => {
    return /^[6-9]\d{9}$/.test(mobile);
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateMobileNumber(mobileNumber)) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }

      setSuccess('OTP sent successfully! Check your SMS');
      setStep('otp');
      setOtpResendTimer(60);

      // Countdown timer for resend
      const interval = setInterval(() => {
        setOtpResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // For development - auto-fill OTP if available
      if (data._devOtp) {
        console.log('[v0] Dev OTP:', data._devOtp);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mobileNumber,
          otp,
          fullName: fullName || 'User',
          email: email || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify OTP');
      }

      setSuccess('OTP verified! Redirecting...');
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        mobileNumber,
        fullName: fullName || 'User',
        email,
        sessionToken: data.sessionToken,
      }));

      // Redirect to home page after 1 second
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            {step === 'mobile' && 'Enter your mobile number to get started'}
            {step === 'otp' && 'Enter the OTP sent to your mobile'}
            {step === 'success' && 'Welcome back!'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Error Alert */}
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Success Alert */}
          {success && (
            <Alert className="mb-4 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          {/* Mobile Number Step */}
          {step === 'mobile' && (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium">
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-muted text-muted-foreground font-medium">
                    +91
                  </span>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="10-digit number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    maxLength={10}
                    className="flex-1"
                    disabled={loading}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Enter your 10-digit Indian mobile number
                </p>
              </div>
              <Button type="submit" className="w-full" disabled={loading || !mobileNumber}>
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </Button>
            </form>
          )}

          {/* OTP Verification Step */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="otp" className="text-sm font-medium flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Enter OTP
                </label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  className="text-center text-2xl tracking-widest font-mono"
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  OTP sent to +91{mobileNumber}
                </p>
              </div>

              {otpResendTimer > 0 && (
                <p className="text-center text-sm text-muted-foreground">
                  Resend OTP in {otpResendTimer}s
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading || otp.length !== 6}>
                {loading ? 'Verifying...' : 'Verify OTP'}
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setStep('mobile');
                  setOtp('');
                  setError('');
                }}
                disabled={otpResendTimer > 0 || loading}
              >
                {otpResendTimer > 0 ? `Resend OTP (${otpResendTimer}s)` : 'Change Mobile Number'}
              </Button>
            </form>
          )}

          {/* Additional Info (Optional) */}
          {step === 'otp' && (
            <div className="mt-6 pt-6 border-t space-y-3">
              <p className="text-sm font-medium">Optional: Update your profile</p>
              <Input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
              />
              <Input
                type="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
