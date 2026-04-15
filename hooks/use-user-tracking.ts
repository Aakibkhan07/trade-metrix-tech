'use client';

import { useEffect, useRef } from 'react';

export function useUserTracking() {
  const activityIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Get user from localStorage
    const userStr = localStorage.getItem('user');
    if (!userStr) return;

    try {
      const user = JSON.parse(userStr);
      const mobileNumber = user.mobileNumber;

      if (!mobileNumber) return;

      // Track page visit
      const currentPage = window.location.pathname;
      console.log('[v0] User tracking initialized for:', mobileNumber, 'on page:', currentPage);

      // Send activity update every 30 seconds
      activityIntervalRef.current = setInterval(async () => {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);

        try {
          await fetch('/api/tracking/update-activity', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              mobileNumber,
              pageVisited: currentPage,
              timeSpentSeconds: timeSpent,
            }),
          });
        } catch (error) {
          console.error('[v0] Failed to send activity tracking:', error);
        }
      }, 30000); // 30 seconds

      // Send final activity on page unload
      const handleBeforeUnload = async () => {
        const totalTimeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        
        try {
          await fetch('/api/tracking/update-activity', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              mobileNumber,
              pageVisited: currentPage,
              timeSpentSeconds: totalTimeSpent,
            }),
            // Use keepalive to ensure request completes even on page unload
            keepalive: true,
          });
        } catch (error) {
          console.error('[v0] Failed to send final activity tracking:', error);
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        if (activityIntervalRef.current) {
          clearInterval(activityIntervalRef.current);
        }
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    } catch (error) {
      console.error('[v0] User tracking setup error:', error);
    }
  }, []);
}
