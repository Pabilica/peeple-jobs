import { JobCard } from "@/components/jobs/job-card";
import { JobFilter } from "@/components/jobs/job-filter";
import { JobSearch } from "@/components/jobs/job-search";
import { createClient } from "@/lib/supabase/server";
import { useLocale } from "next-intl";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function JobsPage({ searchParams }: Props) {
    const locale = await useLocale(); // useLocale is awaited in Next15/16? Actually plain hook in simple cases, but strict async in server components? 
    // Wait, useLocale is for client/server but usually synchronous hook context. 
    // In server component, better pass locale from params if needed, but useLocale works with next-intl setup.
    // However, await searchParams is needed in Next.js 15.

    const params = await searchParams;
    const query = typeof params.q === 'string' ? params.q : undefined;
    const location = typeof params.location === 'string' ? params.location : undefined;
    const visa = params.visa === 'true';

    const supabase = await createClient();

    let dbQuery = supabase
        .from('jobs')
        .select(`
            *,
            companies (
                company_name,
                logo_url
            )
        `)
        .eq('status', 'active')
        .order('created_at', { ascending: false });

    if (query) {
        dbQuery = dbQuery.ilike('title', `%${query}%`);
    }
    if (location) {
        dbQuery = dbQuery.ilike('location', `%${location}%`);
    }
    if (visa) {
        dbQuery = dbQuery.eq('visa_sponsorship', true);
    }

    const { data: jobs, error } = await dbQuery;

    if (error) {
        console.error("Error fetching jobs:", error);
        // Handle error gracefully, maybe show empty state or error message
    }

    // Map Supabase result to JobCard props (adapter)
    const mappedJobs = jobs?.map((job: any) => ({
        id: job.id,
        title: job.title,
        titleEn: job.title, // Fallback
        company: {
            companyName: job.companies?.company_name,
            companyNameEn: job.companies?.company_name,
            logoUrl: job.companies?.logo_url,
        },
        location: job.location,
        salaryMin: job.salary_min,
        salaryMax: job.salary_max,
        description: job.description,
        jobType: job.employment_type?.replace('-', '_'), // Map 'full-time' to 'full_time' if needed
        visaRequirements: job.visa_sponsorship ? ['Visa Sponsorship'] : [],
        createdAt: job.created_at,
    })) || [];

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
                        {mappedJobs.length > 0 ? (
                            mappedJobs.map((job: any) => (
                                <JobCard key={job.id} job={job} locale={locale} />
                            ))
                        ) : (
                            <div className="text-center py-10 text-muted-foreground">
                                No jobs found matching your criteria.
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center pt-8">
                        <span className="text-sm text-muted-foreground">
                            Showing {mappedJobs.length} jobs
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
