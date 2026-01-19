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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ApplicantActions } from "@/components/company/applicant-actions";
import { createClient } from "@/lib/supabase/server";
import { getCompany } from "@/lib/api/companies";
import { getCompanyApplications } from "@/lib/api/applications";
import { redirect } from "next/navigation";

export default async function ApplicantsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    const company = await getCompany(user.id);
    if (!company) {
        redirect('/onboarding');
    }

    const applicants = await getCompanyApplications(company.id);

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
                            {/* <TableHead>Match Score</TableHead> */}
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicants && applicants.length > 0 ? (
                            applicants.map((app: any) => (
                                <TableRow key={app.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={app.users?.avatar_url || ''} />
                                                <AvatarFallback>
                                                    {app.users?.full_name?.substring(0, 2).toUpperCase() || '??'}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{app.users?.full_name || 'Unknown User'}</span>
                                                <span className="text-xs text-muted-foreground">{app.users?.email || 'No email'}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{app.jobs?.title || 'Unknown Job'}</TableCell>
                                    <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                                    {/* <TableCell>
                                    <Badge variant="secondary">
                                        N/A
                                    </Badge>
                                </TableCell> */}
                                    <TableCell>
                                        <Badge
                                            variant={
                                                app.status === 'pending' ? 'outline' :
                                                    app.status === 'reviewed' ? 'secondary' :
                                                        app.status === 'interview' ? 'default' :
                                                            app.status === 'rejected' ? 'destructive' : 'default'
                                            }
                                            className="capitalize"
                                        >
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <ApplicantActions application={app} />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No applicants found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
