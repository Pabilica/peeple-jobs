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
import { MOCK_JOBS } from "@/lib/mock/jobs";
import { Plus, MoreHorizontal, Pencil, Eye } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CompanyJobsPage() {
    // Mock filtering for currently logged in company
    const myJobs = MOCK_JOBS.slice(0, 3); // Just pick first 3 for demo

    return (
        <div className="container py-8 px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Job Postings</h1>
                    <p className="text-muted-foreground">
                        Manage your job listings and view applicants.
                    </p>
                </div>
                <Link href="/company/jobs/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Post a New Job
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Applicants</TableHead>
                            <TableHead>Views</TableHead>
                            <TableHead>Posted Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {myJobs.map((job) => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">
                                    <div className="flex flex-col">
                                        <span>{job.title}</span>
                                        <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                                            {job.location} • {job.jobType}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="capitalize">
                                        {/* Mock status as 'active' for now since MOCK_JOBS doesn't have status yet */}
                                        Active
                                    </Badge>
                                </TableCell>
                                <TableCell>12</TableCell>
                                <TableCell>145</TableCell>
                                <TableCell>{new Date(job.createdAt).toLocaleDateString()}</TableCell>
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
                                                <Eye className="mr-2 h-4 w-4" />
                                                View Live
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit details
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-destructive">
                                                Close Job
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
