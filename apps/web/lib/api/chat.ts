
import { createClient } from "@/lib/supabase/client";

export async function getConversations() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return [];

    // Fetch conversations where user is participant
    const { data, error } = await supabase
        .from('conversations')
        .select(`
            *,
            p1:participant1_id(id, full_name, avatar_url, role),
            p2:participant2_id(id, full_name, avatar_url, role)
        `)
        .or(`participant1_id.eq.${user.id},participant2_id.eq.${user.id}`)
        .order('last_message_at', { ascending: false });

    if (error) {
        console.error("Error fetching conversations:", error);
        return [];
    }

    // Map to friendly format
    return data.map((conv: any) => {
        const otherUser = conv.participant1_id === user.id ? conv.p2 : conv.p1;
        return {
            id: conv.id,
            otherUser,
            lastMessageAt: conv.last_message_at
        };
    });
}

export async function getMessages(conversationId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

    if (error) {
        console.error("Error fetching messages:", error);
        return [];
    }

    return data;
}

export async function sendMessage(conversationId: string, content: string) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) throw new Error("Unauthorized");

    const { data, error } = await supabase
        .from('messages')
        .insert({
            conversation_id: conversationId,
            sender_id: user.id,
            content
        })
        .select()
        .single();

    if (error) throw error;

    // Update conversation timestamp
    await supabase
        .from('conversations')
        .update({ last_message_at: new Date().toISOString() })
        .eq('id', conversationId);

    return data;
}
