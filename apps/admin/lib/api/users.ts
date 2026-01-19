
import { createClient } from "@/lib/supabase/server";

export async function getUsers() {
    const supabase = await createClient();

    // Fetch users with explicit status column (though it's select * usually)
    const { data, error } = await supabase
        .from('users')
        .select('id, full_name, email, role, status, created_at')
        .order('created_at', { ascending: false });

    // Also fetch company names? 
    // This is complex because company name is in 'companies' table, linked by user_id.
    // For now, let's just get users.

    if (error) throw error;

    // Transform to match UI needs
    return data.map(user => ({
        id: user.id,
        fullName: user.full_name || 'Unknown',
        email: user.email,
        role: user.role,
        status: user.status || 'active',
        joinDate: user.created_at,
        companyName: undefined // We can join this later if needed
    }));
}

export async function updateUserStatus(userId: string, status: 'active' | 'suspended') {
    // This needs to be a Server Action or called via API route if using client-side interaction
    // Since we are in api/users.ts, we can use this in a Server Action.
    const supabase = await createClient();

    const { error } = await supabase
        .from('users')
        .update({ status })
        .eq('id', userId);

    if (error) throw error;
    return true;
}
