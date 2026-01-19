import { MOCK_COMPANY_STATS } from "@/lib/mock/company-stats";
import { StatsOverview } from "@/components/company/stats-overview";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CompanyDashboardPage() {
    return (
        <div className="container py-8 px-4 md:px-6 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Welcome back! Here's an overview of your hiring activity.
                    </p>
                </div>
                <Link href="/company/jobs/new">
                    <Button>Post a Job</Button>
                </Link>
            </div>

            <StatsOverview stats={MOCK_COMPANY_STATS} />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Latest updates from your job postings and applicants.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {MOCK_COMPANY_STATS.recentActivity.map((activity) => (
                                <li key={activity.id} className="flex items-start pb-4 border-b last:border-0 last:pb-0">
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {activity.message}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {new Date(activity.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </li>
                            ))}
                        </ul>
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
