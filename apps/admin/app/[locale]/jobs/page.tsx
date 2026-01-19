import { getAdminJobs } from "@/lib/api/jobs";
import { JobsTable } from "@/components/jobs/jobs-table";
import { requireAdmin } from "@/lib/auth";

export default async function JobsPage() {
    await requireAdmin();
    const jobs = await getAdminJobs();

    return (
        <div className="container py-8 px-4 md:px-6 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Job Moderation</h1>
                    <p className="text-muted-foreground">
                        Review and manage job postings.
                    </p>
                </div>
            </div>

            <JobsTable initialJobs={jobs} />
        </div>
    );
}
