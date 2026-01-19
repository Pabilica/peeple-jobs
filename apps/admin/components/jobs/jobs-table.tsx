"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { AlertTriangle, CheckCircle, MoreHorizontal, Search, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AdminJob, updateJobStatus } from "@/lib/api/jobs"; // We'll need a client wrapper for updateJobStatus or Server Action
import { createClient } from "@/lib/supabase/client";

// Needs client-side update logic. Since api/jobs.ts uses server client, 
// we should implement update logic here using client supabase or pass a server action.
// For simplicity, let's use client supabase here for updates.

interface JobsTableProps {
    initialJobs: AdminJob[];
}

export function JobsTable({ initialJobs }: JobsTableProps) {
    const [jobs, setJobs] = useState<AdminJob[]>(initialJobs);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<'all' | 'pending'>('all');

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.companyName.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'all' || job.status === filter;
        return matchesSearch && matchesFilter;
    });

    const handleStatusUpdate = async (jobId: string, newStatus: 'active' | 'rejected') => {
        // Optimistic update
        setJobs(prev => prev.map(j => j.id === jobId ? { ...j, status: newStatus } : j));

        try {
            const supabase = createClient();
            const { error } = await supabase.from('jobs').update({ status: newStatus }).eq('id', jobId);
            if (error) throw error;
        } catch (error) {
            console.error("Failed to update status", error);
            alert("Failed to update status");
            // Revert could be complex, just refresh page usually
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 max-w-sm w-full">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search jobs or companies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={filter === 'all' ? "default" : "outline"}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </Button>
                    <Button
                        variant={filter === 'pending' ? "default" : "outline"}
                        onClick={() => setFilter('pending')}
                    >
                        Pending Reviews
                    </Button>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[300px]">Job Details</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Reports</TableHead>
                            <TableHead>Posted</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredJobs.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                    No jobs found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredJobs.map((job) => (
                                <TableRow key={job.id}>
                                    <TableCell className="font-medium">
                                        <div className="space-y-1">
                                            <div className="font-semibold">{job.title}</div>
                                            <div className="text-xs text-muted-foreground line-clamp-1">{job.description}</div>
                                            <div className="text-xs text-muted-foreground">{job.location} · {job.salary}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">{job.companyName}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            job.status === 'active' ? 'default' :
                                                job.status === 'pending' ? 'secondary' :
                                                    job.status === 'rejected' ? 'destructive' : 'outline'
                                        }>
                                            {job.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {job.reports > 0 ? (
                                            <div className="flex items-center text-destructive text-xs font-semibold">
                                                <AlertTriangle className="h-3 w-3 mr-1" />
                                                {job.reports} Reports
                                            </div>
                                        ) : (
                                            <span className="text-muted-foreground text-xs">-</span>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-xs text-muted-foreground">
                                            {new Date(job.postedDate).toLocaleDateString()}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            {(job.status === 'pending' || job.status === 'rejected') && (
                                                <Button size="icon" variant="ghost"
                                                    className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                                                    onClick={() => handleStatusUpdate(job.id, 'active')}
                                                    title="Approve / Activate"
                                                >
                                                    <CheckCircle className="h-4 w-4" />
                                                </Button>
                                            )}
                                            {(job.status === 'pending' || job.status === 'active') && (
                                                <Button size="icon" variant="ghost"
                                                    className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                                                    onClick={() => handleStatusUpdate(job.id, 'rejected')}
                                                    title="Reject"
                                                >
                                                    <XCircle className="h-4 w-4" />
                                                </Button>
                                            )}

                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>View full details</DropdownMenuItem>
                                                    <DropdownMenuItem>Contact Company</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive" onClick={() => handleStatusUpdate(job.id, 'rejected')}>
                                                        Take Down Listing
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
