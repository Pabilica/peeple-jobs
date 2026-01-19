import { MOCK_JOBS } from "@/lib/mock/jobs";
import { JobCard } from "@/components/jobs/job-card";
import { JobFilter } from "@/components/jobs/job-filter";
import { JobSearch } from "@/components/jobs/job-search";
import { useLocale } from "next-intl";

export default function JobsPage() {
    const locale = useLocale();

    return (
        <div className="container py-8 px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 shrink-0">
                    <JobFilter />
                </aside>

                {/* Main Content */}
                <div className="flex-1 space-y-6">
                    {/* Search Bar */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold tracking-tight">Active Jobs</h1>
                        <div className="w-full max-w-md">
                            <JobSearch />
                        </div>
                    </div>

                    {/* Job Grid */}
                    <div className="grid gap-4">
                        {MOCK_JOBS.map((job) => (
                            <JobCard key={job.id} job={job} locale={locale} />
                        ))}
                    </div>

                    {/* Pagination (Mock) */}
                    <div className="flex justify-center pt-8">
                        <span className="text-sm text-muted-foreground">Showing {MOCK_JOBS.length} jobs</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
