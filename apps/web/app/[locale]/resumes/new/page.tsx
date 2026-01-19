import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, FileText, Upload } from "lucide-react";

export default function ResumeBuilderPage() {
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
                        <Button className="w-full">
                            Start Building <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="text-center py-12 border rounded-lg bg-muted/20">
                    <p className="text-muted-foreground mb-4">You haven't created any resumes yet.</p>
                </div>
            </div>
        </div>
    );
}
