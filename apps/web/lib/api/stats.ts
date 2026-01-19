import { createClient } from '@/lib/supabase/client';

export async function getCompanyStats(companyId: string) {
    const supabase = createClient();

    // 1. Get Active Jobs Count
    const { count: activeJobs, error: jobsError } = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true })
        .eq('company_id', companyId)
        .eq('status', 'active');

    if (jobsError) throw jobsError;

    // 2. Get Total Views (Sum of views from all jobs)
    const { data: jobs, error: viewsError } = await supabase
        .from('jobs')
        .select('views, id')
        .eq('company_id', companyId);

    if (viewsError) throw viewsError;

    const totalViews = jobs?.reduce((sum, job) => sum + (job.views || 0), 0) || 0;

    // 3. Get Total Applicants
    // We need to count applications where job.company_id is our companyId
    // Supabase standard way: join
    const { count: totalApplicants, error: appsError } = await supabase
        .from('applications')
        .select('id', { count: 'exact', head: true })
        .not('id', 'is', null)
        // We need check if the related job belongs to the company.
        // But RLS policies might already handle this restriction if we just query applications?
        // Let's check RLS: "Companies can view applications for their jobs."
        // So simply counting all visible applications might work if RLS is strict.
        // However, explicit filtering is safer.
        // Since we can't easily do deep filter in one go without embedded resource syntax which returns data...
        // Let's rely on fetching applications for the job IDs we just got.
        .in('job_id', jobs?.map(j => j.id) || []);

    // Or better, use the RLS which says: 
    // create policy "Companies can view applications for their jobs." ...
    // So assuming the user is logged in as the company owner, simple select count should work?
    // No, 'applications' table doesn't have company_id. 
    // We must filter by job_ids belonging to company.

    if (appsError) throw appsError;

    return {
        activeJobs: activeJobs || 0,
        totalApplicants: totalApplicants || 0,
        totalViews: totalViews,
        // 4. Get Recent Activity (Last 5 applications)
        const { data: recentApps, error: recentError } = await supabase
            .from('applications')
            .select(`
            id,
            created_at,
            status,
            jobs (title),
            users (full_name)
        `)
            .in('job_id', jobs?.map(j => j.id) || [])
            .order('created_at', { ascending: false })
            .limit(5);

        if(recentError) {
            console.error("Error fetching recent activity:", recentError);
        }

    const recentActivity = recentApps?.map(app => ({
            id: app.id,
            // @ts-ignore
            type: 'new_application',
            // @ts-ignore
            display: `${app.users?.full_name} applied for ${app.jobs?.title}`,
            created_at: app.created_at
        })) || [];

        return {
            activeJobs: activeJobs || 0,
            totalApplicants: totalApplicants || 0,
            totalViews: totalViews,
            recentActivity
        };
    }
