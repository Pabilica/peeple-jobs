import { createClient } from '@/lib/supabase/client';

export interface Company {
    id: string;
    user_id: string;
    company_name: string;
    logo_url: string | null;
    website: string | null;
    industry: string | null;
    location: string | null;
    description: string | null;
    is_verified: boolean;
    created_at: string;
}

export async function getCompany(userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('companies')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (error && error.code !== 'PGRST116') throw error; // Ignore no rows found (might be new user)
    return data as Company | null;
}

export async function updateCompany(userId: string, updates: Partial<Company>) {
    const supabase = createClient();

    // Check if company exists first
    const existing = await getCompany(userId);

    if (existing) {
        const { data, error } = await supabase
            .from('companies')
            .update(updates)
            .eq('user_id', userId)
            .select()
            .single();
        if (error) throw error;
        return data;
    } else {
        // Create new
        const { data, error } = await supabase
            .from('companies')
            .insert([{ ...updates, user_id: userId }])
            .select()
            .single();
        if (error) throw error;
        return data;
    }
}
