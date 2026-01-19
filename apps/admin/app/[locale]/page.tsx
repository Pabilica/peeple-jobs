import { getDashboardStats, getRecentActivity } from "@/lib/api/dashboard";
import { AdminStatsCards } from "@/components/dashboard/admin-stats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { requireAdmin } from "@/lib/auth";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const stats = await getDashboardStats();
  const recentActivity = await getRecentActivity();

  // Adapt to match what AdminStatsCards expects (using MOCK structure as base)
  const dashboardStats = {
    ...stats, // Spread the expanded stats
    recentActivity: [], // Component expects this to be part of stats? Or just mock data structure had it?
    // Let's check mock structure if needed, but likely the stats prop expects a flat object with these numbers
  };

  return (
    <div className="container py-8 px-4 md:px-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of platform performance and moderation tasks.
          </p>
        </div>
      </div>

      <AdminStatsCards stats={dashboardStats} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest system events and user actions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>
                      {activity.type === 'job_post' ? 'JP' :
                        activity.type === 'user_signup' ? 'US' :
                          activity.type === 'report' ? 'RP' : 'SY'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(activity.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-xs text-muted-foreground uppercase">
                    {activity.type.replace('_', ' ')}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Pending Moderation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-40 text-muted-foreground">
              No urgent tasks.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
