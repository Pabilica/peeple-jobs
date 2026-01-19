"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, FileText, CheckCircle, XCircle, ChevronRight, UserCheck, Mail } from "lucide-react";
import { updateApplicationStatus } from "@/lib/actions/applications";
import { startConversation } from "@/lib/actions/chat";
import { useTransition } from "react";

interface ApplicantActionsProps {
    application: {
        id: string;
        resume_url: string | null;
        status: string;
        applicant_id: string;
    };
}

export function ApplicantActions({ application }: ApplicantActionsProps) {
    const [isPending, startTransition] = useTransition();

    const handleStatusUpdate = (status: 'pending' | 'reviewed' | 'interview' | 'offer' | 'rejected') => {
        startTransition(async () => {
            // Optimistic update could be handled if we passed state up or used useOptimistic, 
            // but simple transition + revalidatePath is okay for Dashboard lists.
            try {
                await updateApplicationStatus(application.id, status);
            } catch (error) {
                alert("Failed to update status");
            }
        });
    };

    const handleViewResume = () => {
        if (application.resume_url) {
            window.open(application.resume_url, '_blank');
        } else {
            alert("No resume uploaded.");
        }
    };

    const handleMessage = () => {
        startTransition(async () => {
            try {
                const conversationId = await startConversation(application.applicant_id);
                window.location.href = `/messages?c=${conversationId}`;
            } catch (error) {
                console.error(error);
                alert("Failed to start conversation");
            }
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0" disabled={isPending}>
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={handleViewResume}>
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleMessage}>
                    <Mail className="mr-2 h-4 w-4" />
                    Message Candidate
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <UserCheck className="mr-2 h-4 w-4" />
                        Update Status
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup value={application.status} onValueChange={(val) => handleStatusUpdate(val as any)}>
                            <DropdownMenuRadioItem value="pending">Pending</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="reviewed">Reviewed</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="interview">Interview</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="offer">Offer</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="rejected">Rejected</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="text-destructive"
                    onClick={() => handleStatusUpdate('rejected')}
                >
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject Candidate
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
