import { createClient } from '@/lib/supabase/client';
// import { Database } from '@/types/supabase'; // Removed due to missing types
// For now, using local interfaces
// For now, defining local interfaces matching our schema

export interface Job {
    id: string;
    company_id: string;
    title: string;
    description: string;
    location: string;
    salary_min: number | null;
    salary_max: number | null;
    currency: string;
    employment_type: string;
    visa_sponsorship: boolean;
    status: 'active' | 'closed' | 'draft' | 'rejected';
    views: number;
    created_at: string;
    companies?: {
        company_name: string;
        logo_url: string | null;
    };
    applications?: {
        count: number;
    }[];
}

export async function getJobs(filters?: {
    query?: string;
    location?: string;
    visa?: boolean
}) {
    const supabase = createClient();
    let query = supabase
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

    if (filters?.query) {
        query = query.ilike('title', `%${filters.query}%`);
    }
    if (filters?.location) {
        query = query.ilike('location', `%${filters.location}%`);
    }
    if (filters?.visa) {
        query = query.eq('visa_sponsorship', true);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data as Job[];
}

export async function getJob(id: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('jobs')
        .select(`
            *,
            companies (
                id,
                company_name,
                logo_url,
                description,
                website,
                industry,
                location
            )
        `)
        .eq('id', id)
        .single();

    if (error) throw error;
    return data;
}

export async function createJob(jobData: Partial<Job>) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('jobs')
        .insert([jobData])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function getCompanyJobs(companyId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('jobs')
        .select('*, applications(count)')
        .eq('company_id', companyId)
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Job[];
}
