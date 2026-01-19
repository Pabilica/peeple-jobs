
import { Badge } from "@/components/ui/badge";

export function ApplicationStatusBadge({ status }: { status: string }) {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline" | "success"> = {
        pending: "secondary",
        reviewed: "default",
        interview: "outline", // Using outline to distinguish, usually blue/info
        offer: "default", // Need a success variant ideally, using default (primary) for now
        rejected: "destructive",
    };

    // Mapping 'offer' to a green style manually if variant doesn't support 'success'
    const variant = variants[status] || "outline";

    // Custom styling for specific statuses if Badge doesn't support success
    const className = status === 'offer' ? "bg-green-100 text-green-800 hover:bg-green-100" :
        status === 'interview' ? "bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200" : "";

    return (
        <Badge variant={variant as any} className={className}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
    );
}
