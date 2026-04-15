'use client';

import { useUserTracking } from '@/hooks/use-user-tracking';

export default function UserTrackingClient() {
  useUserTracking();
  return null;
}
