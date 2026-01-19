import { createClient } from "@/lib/supabase/client";

export interface Resume {
    id: string;
    user_id: string;
    title: string;
    file_url: string;
    is_primary: boolean;
    created_at: string;
}

export async function getMyResumes(userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Resume[];
}
