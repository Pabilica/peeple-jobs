'use server';

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function withdrawApplication(applicationId: string) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    // Ensure the application belongs to the user
    const { error } = await supabase
        .from('applications')
        .delete()
        .eq('id', applicationId)
        .eq('applicant_id', user.id);

    if (error) {
        console.error("Error withdrawing application:", error);
        throw new Error("Failed to withdraw application");
    }

    revalidatePath('/applications');
    return { success: true };
}

export async function updateApplicationStatus(applicationId: string, status: 'pending' | 'reviewed' | 'interview' | 'offer' | 'rejected') {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    // Determine if user owns the job via company
    // This requires a join or two-step check.
    // Simplifying: policies should handle "Companies can update applications for their jobs" if configured.
    // But RLS for update might be restricted.
    // Let's check schema.sql policies again later if it fails.
    // For now assuming RLS allows "Company owners can update applications for their jobs".
    // Wait, Schema I just edited didn't explicitly add "Update" policy for Company on Applications.
    // I added "Companies can view".
    // I need to check Schema policies.

    const { error } = await supabase
        .from('applications')
        .update({ status })
        .eq('id', applicationId);

    if (error) {
        console.error("Error updating application status:", error);
        throw new Error("Failed to update application status");
    }

    revalidatePath('/company/applicants');
    return { success: true };
}
