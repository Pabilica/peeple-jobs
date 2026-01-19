
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ConversationList } from "@/components/chat/conversation-list";
import { ChatWindow } from "@/components/chat/chat-window";
import { getConversations } from "@/lib/api/chat";

// We need to fetch conversations on server for the list
// Ideally passing them to client component.
// Re-implementing fetch logic in server context since api/chat uses client supabase by default usually
// But I defined api/chat using `createClient` from `@/lib/supabase/client`?
// Wait, `api/chat.ts` imported `createClient` from `@/lib/supabase/client`. That works on CLIENT only.
// I need a SERVER version for the Page fetch.
// Or I can just fetch on client in `ConversationList` hook. Use SWR or React Query?
// For simplicity in this stack, I'll fetch on server in this Page component.
// I'll duplicate the conversation fetch logic here with SERVER client or refactor api/chat.
// Let's refactor api/chat to be client-side only (hooks?) or create a server-side compatible one.
// Actually, for this Page, I'll fetch on Server Component.

async function getServerConversations() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { user: null, conversations: [] };

    // Need to select referencing tables with foreign keys.
    // Supabase JS syntax:
    const { data: conversations } = await supabase
        .from('conversations')
        .select(`
            *,
            participant1:participant1_id(id, full_name, avatar_url),
            participant2:participant2_id(id, full_name, avatar_url)
        `)
        .or(`participant1_id.eq.${user.id},participant2_id.eq.${user.id}`)
        .order('last_message_at', { ascending: false });

    // Transform
    const formatted = (conversations || []).map((c: any) => {
        // Need to cast to any because TS might complain about types
        const other = c.participant1_id === user.id ? c.participant2 : c.participant1;
        return {
            id: c.id,
            otherUser: other,
            lastMessageAt: c.last_message_at
        };
    });

    return { user, conversations: formatted };
}

export default async function MessagesPage({ searchParams }: { searchParams: Promise<{ c?: string }> }) {
    const { c: activeConversationId } = await searchParams;
    const { user, conversations } = await getServerConversations();

    if (!user) {
        redirect('/login');
    }

    const activeConversation = conversations.find((c: any) => c.id === activeConversationId);

    return (
        <div className="flex h-[calc(100vh-4rem)]">
            <ConversationList conversations={conversations} />

            {activeConversation ? (
                <ChatWindow
                    conversationId={activeConversation.id}
                    currentUserId={user.id}
                    otherUser={activeConversation.otherUser}
                />
            ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    Select a conversation to start messaging
                </div>
            )}
        </div>
    );
}
