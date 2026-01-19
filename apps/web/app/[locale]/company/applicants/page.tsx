import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MOCK_APPLICANTS } from "@/lib/mock/applicants";
import { MoreHorizontal, FileText, CheckCircle, XCircle, Mail } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ApplicantsPage() {
    return (
        <div className="container py-8 px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Applicants</h1>
                    <p className="text-muted-foreground">
                        Review and manage candidates for your jobs.
                    </p>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Candidate</TableHead>
                            <TableHead>Applied Job</TableHead>
                            <TableHead>Applied Date</TableHead>
                            <TableHead>Match Score</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {MOCK_APPLICANTS.map((applicant) => (
                            <TableRow key={applicant.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                            {/* Placeholder Avatar */}
                                            <span className="text-sm font-medium text-gray-600">
                                                {applicant.name.substring(0, 2).toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{applicant.name}</span>
                                            <span className="text-xs text-muted-foreground">{applicant.email}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{applicant.appliedJobTitle}</TableCell>
                                <TableCell>{new Date(applicant.appliedDate).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Badge variant={applicant.matchScore > 80 ? "default" : "secondary"}>
                                        {applicant.matchScore}%
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            applicant.status === 'pending' ? 'outline' :
                                                applicant.status === 'reviewing' ? 'secondary' :
                                                    applicant.status === 'interview' ? 'default' :
                                                        applicant.status === 'rejected' ? 'destructive' : 'default'
                                        }
                                        className="capitalize"
                                    >
                                        {applicant.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>
                                                <FileText className="mr-2 h-4 w-4" />
                                                View Application
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Mail className="mr-2 h-4 w-4" />
                                                Send Message
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                                                Move to Interview
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">
                                                <XCircle className="mr-2 h-4 w-4" />
                                                Reject Candidate
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
