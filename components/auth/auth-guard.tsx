'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthGuardProps {
  children: ReactNode;
  requiredAuth?: boolean;
}

// Pages that don't require authentication
const PUBLIC_PAGES = [
  '/',
  '/about',
  '/features',
  '/products',
  '/pricing',
  '/contact',
  '/otp-login',
  '/login',
  '/register',
  '/terms',
  '/privacy',
  '/disclaimer',
];

export function AuthGuard({ children, requiredAuth = false }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    const isAuthenticated = !!userStr;
    const isPublicPage = PUBLIC_PAGES.some(page => pathname.startsWith(page));

    // If page requires auth and user is not authenticated
    if (requiredAuth && !isAuthenticated) {
      router.push('/otp-login');
      return;
    }

    // If user is authenticated and tries to access login pages
    if (isAuthenticated && (pathname === '/otp-login' || pathname === '/login')) {
      router.push('/');
      return;
    }
  }, [pathname, router, requiredAuth]);

  return <>{children}</>;
}
