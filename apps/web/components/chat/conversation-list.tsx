"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Conversation {
    id: string;
    otherUser: {
        id: string;
        full_name: string;
        avatar_url: string | null;
    };
    lastMessageAt: string;
}

export function ConversationList({ conversations }: { conversations: Conversation[] }) {
    const searchParams = useSearchParams();
    const activeId = searchParams.get("c");

    return (
        <div className="w-full md:w-80 border-r h-[calc(100vh-4rem)] overflow-y-auto hidden md:block">
            <div className="p-4 border-b font-semibold text-lg">Messages</div>
            <div className="flex flex-col">
                {conversations.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground text-sm">
                        No conversations yet.
                    </div>
                ) : (
                    conversations.map((conv) => (
                        <Link
                            key={conv.id}
                            href={`/messages?c=${conv.id}`}
                            className={cn(
                                "flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors border-b last:border-0",
                                activeId === conv.id ? "bg-muted" : ""
                            )}
                        >
                            <Avatar>
                                <AvatarImage src={conv.otherUser.avatar_url || ''} />
                                <AvatarFallback>
                                    {conv.otherUser.full_name?.substring(0, 2).toUpperCase() || 'U'}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col overflow-hidden">
                                <span className="font-medium truncate">{conv.otherUser.full_name}</span>
                                <span className="text-xs text-muted-foreground">
                                    {new Date(conv.lastMessageAt).toLocaleDateString()}
                                </span>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
