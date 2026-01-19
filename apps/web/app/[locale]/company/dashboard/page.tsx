import { StatsOverview } from "@/components/company/stats-overview";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getCompany } from "@/lib/api/companies";
import { getCompanyStats } from "@/lib/api/stats";
import { redirect } from "next/navigation";

export default async function CompanyDashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    const company = await getCompany(user.id);
    if (!company) {
        redirect('/onboarding');
    }

    const stats = await getCompanyStats(company.id);

    return (
        <div className="container py-8 px-4 md:px-6 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Welcome back, {company.company_name}! Here's your overview.
                    </p>
                </div>
                <Link href="/company/jobs/new">
                    <Button>Post a Job</Button>
                </Link>
            </div>

            <StatsOverview stats={stats} />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Latest updates from your job postings and applicants.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {stats.recentActivity && stats.recentActivity.length > 0 ? (
                                stats.recentActivity.map((activity: any) => (
                                    <div key={activity.id} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">{activity.display}</span>
                                            <span className="text-xs text-muted-foreground">{new Date(activity.created_at).toLocaleDateString()}</span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground">No recent activity.</p>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Frequently used tools
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Link href="/company/jobs" className="block">
                            <Button variant="outline" className="w-full justify-start">
                                Manage Job Postings
                            </Button>
                        </Link>
                        <Link href="/company/applicants" className="block">
                            <Button variant="outline" className="w-full justify-start">
                                Browse Applicants
                            </Button>
                        </Link>
                        <Link href="/company/profile" className="block">
                            <Button variant="outline" className="w-full justify-start">
                                Edit Company Profile
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
