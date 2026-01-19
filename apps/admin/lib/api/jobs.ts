
import { createClient } from "@/lib/supabase/server";

export type AdminJob = {
    id: string;
    title: string;
    description: string;
    location: string;
    salary: string;
    status: 'active' | 'pending' | 'rejected' | 'closed' | 'draft';
    postedDate: string;
    companyName: string;
    companyId: string;
    reports: number;
};

export async function getAdminJobs(): Promise<AdminJob[]> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('jobs')
        .select(`
            id, title, description, location, salary_min, salary_max, currency, status, created_at,
            companies ( id, company_name )
        `)
        .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map((job: any) => ({
        id: job.id,
        title: job.title,
        description: job.description,
        location: job.location,
        salary: job.salary_min ? `${job.currency} ${job.salary_min.toLocaleString()} - ${job.salary_max?.toLocaleString()}` : 'Not specified',
        status: job.status,
        postedDate: job.created_at,
        companyName: job.companies?.company_name || 'Unknown',
        companyId: job.companies?.id,
        reports: 0 // Placeholder until we have a reports system
    }));
}

export async function updateJobStatus(jobId: string, status: 'active' | 'rejected') {
    const supabase = await createClient();
    const { error } = await supabase
        .from('jobs')
        .update({ status })
        .eq('id', jobId);

    if (error) throw error;
    return true;
}
