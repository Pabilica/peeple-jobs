import { createClient } from '@/lib/supabase/client';

export interface Application {
    id: string;
    job_id: string;
    applicant_id: string;
    status: 'pending' | 'reviewed' | 'interview' | 'offer' | 'rejected';
    resume_url: string | null;
    cover_letter: string | null;
    created_at: string;
}

export async function applyToJob(applicationData: {
    job_id: string;
    applicant_id: string;
    resume_url?: string;
    cover_letter?: string;
}) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('applications')
        .insert([applicationData])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function getMyApplications(userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('applications')
        .select(`
            *,
            jobs (
                title,
                company_id,
                status,
                companies (
                    company_name,
                    logo_url
                )
            )
        `)
        .eq('applicant_id', userId)
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
}

export async function getJobApplications(jobId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('applications')
        .select(`
            *,
            users (
                full_name,
                email,
                avatar_url
            )
        `)
        .eq('job_id', jobId)
        .order('created_at', { ascending: false });

    if (error) throw error;
    if (error) throw error;
    return data;
}

export async function getCompanyApplications(companyId: string) {
    const supabase = createClient();

    // Get all jobs for the company first (to get IDs)
    // Or utilize Supabase nested filtering if possible, but deep filtering is tricky.
    // Easier: Get jobs, then get applications for those jobs.

    // 1. Get Company Job IDs
    const { data: jobs, error: jobsError } = await supabase
        .from('jobs')
        .select('id, title')
        .eq('company_id', companyId);

    if (jobsError) throw jobsError;

    if (!jobs || jobs.length === 0) return [];

    const jobIds = jobs.map(j => j.id);

    // 2. Get Applications for these jobs
    const { data: applications, error: appsError } = await supabase
        .from('applications')
        .select(`
            *,
            users (
                full_name,
                email,
                avatar_url
            ),
            jobs (
                title
            )
        `)
        .in('job_id', jobIds)
        .order('created_at', { ascending: false });

    if (appsError) throw appsError;

    return applications;
}
