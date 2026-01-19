
import { createClient } from "@/lib/supabase/server";

export async function getDashboardStats() {
    const supabase = await createClient();

    // 1. Total Users
    const { count: totalUsers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });

    // 2. Active Jobs
    const { count: activeJobs } = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');

    // 3. Total Applications
    const { count: totalApplications } = await supabase
        .from('applications')
        .select('*', { count: 'exact', head: true });

    // 4. Reports (using suspended users as proxy for now, effectively "Banned Users")
    const { count: totalReports } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'suspended');

    // 5. Active Companies
    const { count: activeCompanies } = await supabase
        .from('companies')
        .select('*', { count: 'exact', head: true });

    // 6. Total Jobs (All statuses)
    const { count: totalJobPostings } = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true });

    // 7. Pending Reviews (Pending Applications)
    const { count: pendingReviews } = await supabase
        .from('applications')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending');

    return {
        totalUsers: totalUsers || 0,
        activeJobs: activeJobs || 0,
        totalApplications: totalApplications || 0,
        totalReports: totalReports || 0,
        activeCompanies: activeCompanies || 0,
        totalJobPostings: totalJobPostings || 0,
        pendingReviews: pendingReviews || 0,
        revenue: 0, // Placeholder
    };
}

export async function getRecentActivity() {
    const supabase = await createClient();

    // Get last 5 users
    const { data: recentUsers } = await supabase
        .from('users')
        .select('id, full_name, role, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

    // Get last 5 jobs
    const { data: recentJobs } = await supabase
        .from('jobs')
        .select('id, title, company_id, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

    // Combine and sort
    const activities = [
        ...(recentUsers?.map(u => ({
            id: u.id,
            type: 'user_signup',
            message: `New User joined: ${u.full_name || 'Unknown'} (${u.role})`,
            createdAt: u.created_at
        })) || []),
        ...(recentJobs?.map(j => ({
            id: j.id,
            type: 'job_post',
            message: `New Job Posted: ${j.title}`,
            createdAt: j.created_at
        })) || [])
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 10);

    return activities;
}
