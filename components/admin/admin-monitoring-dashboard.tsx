'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Users, Eye, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OnlineUser {
  id: number;
  mobileNumber: string;
  fullName: string;
  lastSeen: string;
  currentPage: string;
  timeSpentSeconds: number;
  sessionDuration: string;
}

export function AdminMonitoringDashboard() {
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await fetch('/api/admin/online-users');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch online users');
        }

        setOnlineUsers(data.onlineUsers);
        setError('');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch online users');
        console.error('[v0] Error fetching online users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOnlineUsers();

    // Auto-refresh every 30 seconds
    if (!autoRefresh) return;

    const interval = setInterval(fetchOnlineUsers, 30000);
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins === 1) return '1 minute ago';
    if (diffMins < 60) return `${diffMins} minutes ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours === 1) return '1 hour ago';
    return `${diffHours} hours ago`;
  };

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              Total Online Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{onlineUsers.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Last 5 minutes activity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Eye className="h-4 w-4 text-green-600" />
              Total Page Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {onlineUsers.reduce((sum, user) => sum + user.timeSpentSeconds, 0)}s
            </div>
            <p className="text-xs text-muted-foreground mt-1">Cumulative time spent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-600" />
              Auto Refresh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => setAutoRefresh(!autoRefresh)}
              variant={autoRefresh ? 'default' : 'outline'}
              size="sm"
            >
              {autoRefresh ? 'On (30s)' : 'Off'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Online Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Live User Activity</CardTitle>
          <CardDescription>
            Real-time monitoring of all users currently online on the website
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">Loading users...</div>
          ) : onlineUsers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No online users at the moment</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User Name</TableHead>
                    <TableHead>Mobile Number</TableHead>
                    <TableHead>Current Page</TableHead>
                    <TableHead>Time Spent</TableHead>
                    <TableHead>Last Seen</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {onlineUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.fullName}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          {user.mobileNumber}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{user.currentPage}</TableCell>
                      <TableCell>{formatDuration(user.timeSpentSeconds)}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {formatTime(user.lastSeen)}
                      </TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-green-600">
                          Active
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Footer Info */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This dashboard shows users who have logged in with OTP and are currently active on the website. 
            The data updates automatically every 30 seconds when auto-refresh is enabled. Mobile numbers are securely encrypted in the database.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
