import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AdminMonitoringDashboard } from '@/components/admin/admin-monitoring-dashboard';

export const metadata = {
  title: 'Live User Monitoring - Trade Metrix Admin',
  description: 'Real-time monitoring dashboard showing all online users with their details and activity',
};

export default function AdminMonitoringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Live User Monitoring</h1>
            <p className="text-muted-foreground mt-2">
              Real-time dashboard showing all online users and their activity
            </p>
          </div>
          <AdminMonitoringDashboard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
