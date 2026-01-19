'use server';

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function startConversation(otherUserId: string) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) throw new Error("Unauthorized");

    // Check if conversation already exists
    // We need to check both combinations (p1=me, p2=other OR p1=other, p2=me)
    const { data: existing } = await supabase
        .from('conversations')
        .select('id')
        .or(`and(participant1_id.eq.${user.id},participant2_id.eq.${otherUserId}),and(participant1_id.eq.${otherUserId},participant2_id.eq.${user.id})`)
        .single();

    if (existing) {
        return existing.id;
    }

    // Create new conversation
    // Rule: always store smaller UUID as participant1_id to maintain uniqueness if enforced by code, 
    // but here we just inserted. The unique constraint in DB is (p1, p2).
    // To safe-guard unique constraint collisions if users click 'start' simultaneously,
    // we can sort IDs.
    const [p1, p2] = [user.id, otherUserId].sort();

    const { data: newConv, error } = await supabase
        .from('conversations')
        .insert({
            participant1_id: p1,
            participant2_id: p2,
            last_message_at: new Date().toISOString()
        })
        .select()
        .single();

    if (error) {
        // Handle race condition: if it was created just now by other request
        console.error("Error creating conversation:", error);
        // Try fetching again
        const { data: retry } = await supabase
            .from('conversations')
            .select('id')
            .or(`and(participant1_id.eq.${user.id},participant2_id.eq.${otherUserId}),and(participant1_id.eq.${otherUserId},participant2_id.eq.${user.id})`)
            .single();
        if (retry) return retry.id;
        throw error;
    }

    return newConv.id;
}
