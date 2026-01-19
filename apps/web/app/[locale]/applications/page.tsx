
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getTranslations } from 'next-intl/server';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ApplicationCard } from "@/components/applications/application-card";

async function getMyApplications() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return null;

    const { data, error } = await supabase
        .from('applications')
        .select(`
            id, status, created_at,
            jobs (
                id, title, location, employment_type,
                companies ( name: company_name, logo_url )
            )
        `)
        .eq('applicant_id', user.id)
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching applications:", error);
        return [];
    }

    return data;
}

export default async function MyApplicationsPage() {
    const t = await getTranslations('Dashboard'); // Assuming we have or will add translations
    const applications = await getMyApplications();

    if (applications === null) {
        redirect('/login');
    }

    return (
        <div className="container py-8 px-4 md:px-6 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
                <p className="text-muted-foreground">
                    Track the status of your job applications.
                </p>
            </div>

            <div className="space-y-4">
                {applications.length === 0 ? (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                            <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
                            <p className="text-muted-foreground mb-6 max-w-sm">
                                You haven't applied to any jobs yet. Start your search and find your next opportunity!
                            </p>
                            <Button asChild>
                                <Link href="/jobs">Browse Jobs</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    applications.map((app: any) => (
                        <ApplicationCard key={app.id} app={app} />
                    ))
                )}
            </div>
        </div>
    );
}
