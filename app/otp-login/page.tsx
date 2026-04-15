import { OTPLoginForm } from '@/components/auth/otp-login-form';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'OTP Login - Trade Metrix',
  description: 'Sign in with your mobile number using OTP verification',
};

export default function OTPLoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <OTPLoginForm />
      </main>
      <Footer />
    </div>
  );
}
