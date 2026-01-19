import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Upload } from "lucide-react";
import Link from "next/link";
import { ResumeBuilder } from "@/components/resumes/resume-builder";

import { createClient } from "@/lib/supabase/server";
import { getMyResumes } from "@/lib/api/resumes";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ResumeBuilderPage({ searchParams }: Props) {
    const { mode } = await searchParams;
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const resumes = user ? await getMyResumes(user.id) : [];

    if (mode === 'builder') {
        return (
            <div className="container py-10 px-4 md:px-6">
                <div className="mb-6">
                    <Link href="/resumes/new" className="text-sm text-muted-foreground hover:underline">
                        &larr; Back to Options
                    </Link>
                </div>
                <ResumeBuilder />
            </div>
        );
    }

    return (
        <div className="container py-10 px-4 md:px-6 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Create Your Resume</h1>
                <p className="text-muted-foreground">
                    Stand out to employers with a professional resume tailored for the Korean market.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card className="relative overflow-hidden border-2 border-primary bg-primary/5">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <FileText className="w-24 h-24" />
                    </div>
                    <CardHeader>
                        <CardTitle>Resume Builder</CardTitle>
                        <CardDescription>
                            Create a step-by-step resume highlighting your visa status, language skills, and experience.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm mb-6 list-disc list-inside text-muted-foreground">
                            <li>Optimized for Korean ATS</li>
                            <li>Visa status verification badge</li>
                            <li>Korean & English support</li>
                        </ul>
                        <Button className="w-full" asChild>
                            <Link href="/resumes/new?mode=builder">
                                Start Building <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Upload Existing Resume</CardTitle>
                        <CardDescription>
                            Already have a PDF? Upload it here and we'll parse it for you.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer text-muted-foreground">
                            <Upload className="h-10 w-10 mb-2" />
                            <p className="font-medium">Click to upload or drag and drop</p>
                            <p className="text-xs">PDF, DOCX up to 5MB</p>
                        </div>
                        <Button variant="secondary" className="w-full" disabled>
                            Upload (Coming Soon)
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">My Resumes</h2>
                {resumes.length > 0 ? (
                    <div className="grid gap-4 md:grid-cols-2">
                        {resumes.map((resume: any) => (
                            <div key={resume.id} className="p-4 border rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-8 w-8 text-primary" />
                                    <div>
                                        <p className="font-medium">{resume.title}</p>
                                        <p className="text-xs text-muted-foreground">{new Date(resume.created_at).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" asChild>
                                    <a href={resume.file_url} target="_blank" rel="noopener noreferrer">View</a>
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border rounded-lg bg-muted/20">
                        <p className="text-muted-foreground mb-4">You haven't created any resumes yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
